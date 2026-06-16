from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routers import customers_router, products_router, orders_router, dashboard_router

app = FastAPI(
    title="注文管理システム API",
    description="飲食店向け注文管理システムのバックエンドAPI",
    version="1.0.0",
)

# CORS設定
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ルーター登録
app.include_router(customers_router)
app.include_router(products_router)
app.include_router(orders_router)
app.include_router(dashboard_router)


@app.get("/")
def root():
    return {"message": "注文管理システム API", "docs": "/docs"}
