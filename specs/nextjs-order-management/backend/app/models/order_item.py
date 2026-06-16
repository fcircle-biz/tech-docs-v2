from typing import Optional
from sqlmodel import SQLModel, Field


class OrderItemBase(SQLModel):
    order_id: int
    product_id: int
    quantity: int = Field(ge=1)
    unit_price: int = Field(ge=0)
    subtotal: int = Field(ge=0)


class OrderItem(OrderItemBase, table=True):
    __tablename__ = "order_items"

    id: Optional[int] = Field(default=None, primary_key=True)


class OrderItemCreate(SQLModel):
    product_id: int
    quantity: int = Field(ge=1)


class OrderItemResponse(OrderItemBase):
    id: int
    product_name: Optional[str] = None
