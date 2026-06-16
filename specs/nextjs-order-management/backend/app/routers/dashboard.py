from datetime import date, datetime
from fastapi import APIRouter, Depends
from sqlmodel import Session, select, func

from app.database import get_session
from app.models import Order, Customer

router = APIRouter(prefix="/api/dashboard", tags=["dashboard"])


@router.get("/summary")
def get_summary(session: Session = Depends(get_session)):
    today = date.today()

    # 本日の注文（キャンセル除く）
    today_orders_statement = select(func.count(Order.id)).where(
        func.date(Order.created_at) == today,
        Order.status != "cancelled",
    )
    today_orders = session.exec(today_orders_statement).one()

    # 本日の売上
    today_sales_statement = select(func.coalesce(func.sum(Order.total_amount), 0)).where(
        func.date(Order.created_at) == today,
        Order.status != "cancelled",
    )
    today_sales = session.exec(today_sales_statement).one()

    # 未完了注文数（pending + cooking）
    pending_orders_statement = select(func.count(Order.id)).where(
        Order.status.in_(["pending", "cooking"])
    )
    pending_orders = session.exec(pending_orders_statement).one()

    # ステータス別件数（本日）
    status_summary = {}
    for status in ["pending", "cooking", "completed", "cancelled"]:
        count_statement = select(func.count(Order.id)).where(
            func.date(Order.created_at) == today,
            Order.status == status,
        )
        status_summary[status] = session.exec(count_statement).one()

    return {
        "today_orders": today_orders,
        "today_sales": today_sales,
        "pending_orders": pending_orders,
        "status_summary": status_summary,
    }


@router.get("/recent-orders")
def get_recent_orders(limit: int = 10, session: Session = Depends(get_session)):
    statement = (
        select(Order, Customer.name)
        .join(Customer, Order.customer_id == Customer.id)
        .order_by(Order.created_at.desc())
        .limit(limit)
    )
    results = session.exec(statement).all()

    orders = []
    for order, customer_name in results:
        order_dict = order.model_dump()
        order_dict["customer_name"] = customer_name
        orders.append(order_dict)

    return {"orders": orders}
