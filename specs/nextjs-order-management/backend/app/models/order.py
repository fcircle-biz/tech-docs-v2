from datetime import datetime
from typing import Optional, List
from sqlmodel import SQLModel, Field


class OrderBase(SQLModel):
    customer_id: int
    status: str = Field(default="pending", max_length=20)
    total_amount: int = Field(ge=0)


class Order(OrderBase, table=True):
    __tablename__ = "orders"

    id: Optional[int] = Field(default=None, primary_key=True)
    created_at: Optional[datetime] = Field(default=None)
    updated_at: Optional[datetime] = Field(default=None)


class OrderItemCreateInput(SQLModel):
    product_id: int
    quantity: int = Field(ge=1)


class OrderCreate(SQLModel):
    customer_id: int
    items: List[OrderItemCreateInput]


class OrderUpdate(SQLModel):
    status: Optional[str] = Field(default=None, max_length=20)


class OrderResponse(OrderBase):
    id: int
    created_at: datetime
    updated_at: datetime


class OrderItemResponseOutput(SQLModel):
    id: int
    order_id: int
    product_id: int
    quantity: int
    unit_price: int
    subtotal: int
    product_name: Optional[str] = None


class OrderWithItems(OrderResponse):
    items: List[OrderItemResponseOutput] = []
    customer_name: Optional[str] = None
