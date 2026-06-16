"use client";

import ProductForm from "@/components/ProductForm";
import { productsAPI } from "@/lib/api";
import { ProductCreate } from "@/types";

export default function NewProductPage() {
  const handleSubmit = async (data: ProductCreate) => {
    await productsAPI.create(data);
  };

  return <ProductForm title="商品登録" onSubmit={handleSubmit} />;
}
