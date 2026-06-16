from datetime import datetime
from typing import Optional
from sqlmodel import SQLModel, Field


class ProductBase(SQLModel):
    name: str = Field(max_length=100)
    price: int = Field(ge=1)
    category: str = Field(max_length=20)
    is_available: bool = Field(default=True)


class Product(ProductBase, table=True):
    __tablename__ = "products"

    id: Optional[int] = Field(default=None, primary_key=True)
    created_at: Optional[datetime] = Field(default=None)
    updated_at: Optional[datetime] = Field(default=None)


class ProductCreate(ProductBase):
    pass


class ProductUpdate(SQLModel):
    name: Optional[str] = Field(default=None, max_length=100)
    price: Optional[int] = Field(default=None, ge=1)
    category: Optional[str] = Field(default=None, max_length=20)
    is_available: Optional[bool] = None


class ProductResponse(ProductBase):
    id: int
    created_at: datetime
    updated_at: datetime
