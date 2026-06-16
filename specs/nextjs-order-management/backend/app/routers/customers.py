from typing import Optional, List
from fastapi import APIRouter, Depends, HTTPException, Query
from sqlmodel import Session, select

from app.database import get_session
from app.models import Customer, CustomerCreate, CustomerUpdate, CustomerResponse
from app.models.order import Order

router = APIRouter(prefix="/api/customers", tags=["customers"])


@router.get("", response_model=dict)
def get_customers(
    search: Optional[str] = Query(None),
    session: Session = Depends(get_session),
):
    statement = select(Customer)
    if search:
        statement = statement.where(Customer.name.contains(search))
    statement = statement.order_by(Customer.created_at.desc())
    customers = session.exec(statement).all()
    return {"customers": customers, "total": len(customers)}


@router.get("/{customer_id}", response_model=CustomerResponse)
def get_customer(customer_id: int, session: Session = Depends(get_session)):
    customer = session.get(Customer, customer_id)
    if not customer:
        raise HTTPException(status_code=404, detail="指定された顧客は存在しません")
    return customer


@router.post("", response_model=CustomerResponse, status_code=201)
def create_customer(customer: CustomerCreate, session: Session = Depends(get_session)):
    db_customer = Customer.model_validate(customer)
    session.add(db_customer)
    session.commit()
    session.refresh(db_customer)
    return db_customer


@router.put("/{customer_id}", response_model=CustomerResponse)
def update_customer(
    customer_id: int,
    customer: CustomerUpdate,
    session: Session = Depends(get_session),
):
    db_customer = session.get(Customer, customer_id)
    if not db_customer:
        raise HTTPException(status_code=404, detail="指定された顧客は存在しません")

    customer_data = customer.model_dump(exclude_unset=True)
    for key, value in customer_data.items():
        setattr(db_customer, key, value)

    session.add(db_customer)
    session.commit()
    session.refresh(db_customer)
    return db_customer


@router.delete("/{customer_id}", status_code=204)
def delete_customer(customer_id: int, session: Session = Depends(get_session)):
    customer = session.get(Customer, customer_id)
    if not customer:
        raise HTTPException(status_code=404, detail="指定された顧客は存在しません")

    # 注文履歴があるかチェック
    statement = select(Order).where(Order.customer_id == customer_id)
    orders = session.exec(statement).first()
    if orders:
        raise HTTPException(status_code=400, detail="注文履歴があるため削除できません")

    session.delete(customer)
    session.commit()
