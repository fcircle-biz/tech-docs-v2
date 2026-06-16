from typing import Optional
from fastapi import APIRouter, Depends, HTTPException, Query
from sqlmodel import Session, select

from app.database import get_session
from app.models import Product, ProductCreate, ProductUpdate, ProductResponse
from app.models.order_item import OrderItem

router = APIRouter(prefix="/api/products", tags=["products"])


@router.get("", response_model=dict)
def get_products(
    category: Optional[str] = Query(None),
    available: Optional[bool] = Query(None),
    session: Session = Depends(get_session),
):
    statement = select(Product)
    if category:
        statement = statement.where(Product.category == category)
    if available is not None:
        statement = statement.where(Product.is_available == available)
    statement = statement.order_by(Product.category, Product.name)
    products = session.exec(statement).all()
    return {"products": products, "total": len(products)}


@router.get("/{product_id}", response_model=ProductResponse)
def get_product(product_id: int, session: Session = Depends(get_session)):
    product = session.get(Product, product_id)
    if not product:
        raise HTTPException(status_code=404, detail="指定された商品は存在しません")
    return product


@router.post("", response_model=ProductResponse, status_code=201)
def create_product(product: ProductCreate, session: Session = Depends(get_session)):
    db_product = Product.model_validate(product)
    session.add(db_product)
    session.commit()
    session.refresh(db_product)
    return db_product


@router.put("/{product_id}", response_model=ProductResponse)
def update_product(
    product_id: int,
    product: ProductUpdate,
    session: Session = Depends(get_session),
):
    db_product = session.get(Product, product_id)
    if not db_product:
        raise HTTPException(status_code=404, detail="指定された商品は存在しません")

    product_data = product.model_dump(exclude_unset=True)
    for key, value in product_data.items():
        setattr(db_product, key, value)

    session.add(db_product)
    session.commit()
    session.refresh(db_product)
    return db_product


@router.delete("/{product_id}", status_code=204)
def delete_product(product_id: int, session: Session = Depends(get_session)):
    product = session.get(Product, product_id)
    if not product:
        raise HTTPException(status_code=404, detail="指定された商品は存在しません")

    # 注文明細に含まれているかチェック
    statement = select(OrderItem).where(OrderItem.product_id == product_id)
    order_items = session.exec(statement).first()
    if order_items:
        raise HTTPException(status_code=400, detail="注文履歴があるため削除できません")

    session.delete(product)
    session.commit()
