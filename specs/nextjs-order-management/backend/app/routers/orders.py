from typing import Optional, List
from datetime import date, datetime
from fastapi import APIRouter, Depends, HTTPException, Query
from sqlmodel import Session, select

from app.database import get_session
from app.models import (
    Order,
    OrderCreate,
    OrderUpdate,
    OrderResponse,
    OrderWithItems,
    OrderItemResponseOutput,
    Customer,
    Product,
    OrderItem,
)

router = APIRouter(prefix="/api/orders", tags=["orders"])


@router.get("", response_model=dict)
def get_orders(
    status: Optional[str] = Query(None),
    date_from: Optional[date] = Query(None),
    date_to: Optional[date] = Query(None),
    session: Session = Depends(get_session),
):
    statement = select(Order, Customer.name).join(Customer, Order.customer_id == Customer.id)
    if status:
        statement = statement.where(Order.status == status)
    if date_from:
        statement = statement.where(Order.created_at >= date_from)
    if date_to:
        statement = statement.where(Order.created_at <= date_to)
    statement = statement.order_by(Order.created_at.desc())

    results = session.exec(statement).all()
    orders = []
    for order, customer_name in results:
        order_dict = order.model_dump()
        order_dict["customer_name"] = customer_name
        orders.append(order_dict)

    return {"orders": orders, "total": len(orders)}


@router.get("/{order_id}", response_model=OrderWithItems)
def get_order(order_id: int, session: Session = Depends(get_session)):
    order = session.get(Order, order_id)
    if not order:
        raise HTTPException(status_code=404, detail="指定された注文は存在しません")

    # 顧客名を取得
    customer = session.get(Customer, order.customer_id)
    customer_name = customer.name if customer else None

    # 明細を取得
    statement = select(OrderItem, Product.name).join(
        Product, OrderItem.product_id == Product.id
    ).where(OrderItem.order_id == order_id)
    results = session.exec(statement).all()

    items = []
    for item, product_name in results:
        item_dict = item.model_dump()
        item_dict["product_name"] = product_name
        items.append(OrderItemResponseOutput(**item_dict))

    return OrderWithItems(
        **order.model_dump(),
        items=items,
        customer_name=customer_name,
    )


@router.post("", response_model=OrderWithItems, status_code=201)
def create_order(order_data: OrderCreate, session: Session = Depends(get_session)):
    # 顧客存在チェック
    customer = session.get(Customer, order_data.customer_id)
    if not customer:
        raise HTTPException(status_code=400, detail="指定された顧客は存在しません")

    if not order_data.items:
        raise HTTPException(status_code=400, detail="1つ以上の商品を選択してください")

    # 商品情報を取得して合計金額を計算
    total_amount = 0
    order_items_data = []

    for item in order_data.items:
        product = session.get(Product, item.product_id)
        if not product:
            raise HTTPException(
                status_code=400, detail=f"商品ID {item.product_id} は存在しません"
            )
        if not product.is_available:
            raise HTTPException(
                status_code=400, detail=f"商品「{product.name}」は現在販売停止中です"
            )

        subtotal = product.price * item.quantity
        total_amount += subtotal
        order_items_data.append(
            {
                "product_id": item.product_id,
                "quantity": item.quantity,
                "unit_price": product.price,
                "subtotal": subtotal,
                "product_name": product.name,
            }
        )

    # 注文を作成
    now = datetime.now()
    db_order = Order(
        customer_id=order_data.customer_id,
        status="pending",
        total_amount=total_amount,
        created_at=now,
        updated_at=now,
    )
    session.add(db_order)
    session.commit()
    session.refresh(db_order)

    # 注文明細を作成
    items = []
    for item_data in order_items_data:
        db_item = OrderItem(
            order_id=db_order.id,
            product_id=item_data["product_id"],
            quantity=item_data["quantity"],
            unit_price=item_data["unit_price"],
            subtotal=item_data["subtotal"],
        )
        session.add(db_item)
        session.commit()
        session.refresh(db_item)

        items.append(
            OrderItemResponseOutput(
                **db_item.model_dump(),
                product_name=item_data["product_name"],
            )
        )

    # 最新のorder情報を取得
    session.refresh(db_order)

    return OrderWithItems(
        id=db_order.id,
        customer_id=db_order.customer_id,
        status=db_order.status,
        total_amount=db_order.total_amount,
        created_at=db_order.created_at,
        updated_at=db_order.updated_at,
        items=items,
        customer_name=customer.name,
    )


@router.put("/{order_id}/status", response_model=OrderResponse)
def update_order_status(
    order_id: int,
    order_update: OrderUpdate,
    session: Session = Depends(get_session),
):
    order = session.get(Order, order_id)
    if not order:
        raise HTTPException(status_code=404, detail="指定された注文は存在しません")

    # ステータス遷移チェック
    valid_transitions = {
        "pending": ["cooking", "cancelled"],
        "cooking": ["completed", "cancelled"],
        "completed": [],
        "cancelled": [],
    }

    if order_update.status and order_update.status not in valid_transitions.get(
        order.status, []
    ):
        raise HTTPException(status_code=400, detail="この注文のステータスは変更できません")

    order.status = order_update.status
    session.add(order)
    session.commit()
    session.refresh(order)
    return order


@router.delete("/{order_id}", status_code=204)
def cancel_order(order_id: int, session: Session = Depends(get_session)):
    order = session.get(Order, order_id)
    if not order:
        raise HTTPException(status_code=404, detail="指定された注文は存在しません")

    if order.status in ["completed", "cancelled"]:
        raise HTTPException(status_code=400, detail="この注文はキャンセルできません")

    order.status = "cancelled"
    session.add(order)
    session.commit()
