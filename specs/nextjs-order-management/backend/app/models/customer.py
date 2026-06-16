from datetime import datetime
from typing import Optional
from sqlmodel import SQLModel, Field


class CustomerBase(SQLModel):
    name: str = Field(max_length=100)
    email: Optional[str] = Field(default=None, max_length=255)
    phone: Optional[str] = Field(default=None, max_length=20)


class Customer(CustomerBase, table=True):
    __tablename__ = "customers"

    id: Optional[int] = Field(default=None, primary_key=True)
    created_at: Optional[datetime] = Field(default=None)
    updated_at: Optional[datetime] = Field(default=None)


class CustomerCreate(CustomerBase):
    pass


class CustomerUpdate(SQLModel):
    name: Optional[str] = Field(default=None, max_length=100)
    email: Optional[str] = Field(default=None, max_length=255)
    phone: Optional[str] = Field(default=None, max_length=20)


class CustomerResponse(CustomerBase):
    id: int
    created_at: datetime
    updated_at: datetime
