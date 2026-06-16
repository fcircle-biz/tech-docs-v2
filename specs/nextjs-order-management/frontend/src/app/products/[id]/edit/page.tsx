"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ProductForm from "@/components/ProductForm";
import { productsAPI } from "@/lib/api";
import { Product, ProductCreate } from "@/types";
import Link from "next/link";

export default function EditProductPage() {
  const params = useParams();
  const id = Number(params.id);
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await productsAPI.getById(id);
        setProduct(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "データの取得に失敗しました");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const handleSubmit = async (data: ProductCreate) => {
    await productsAPI.update(id, data);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-gray-500">読み込み中...</div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <Link
            href="/products"
            className="text-blue-600 hover:text-blue-800 text-sm"
          >
            ← 商品一覧に戻る
          </Link>
        </div>
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          {error || "商品が見つかりませんでした"}
        </div>
      </div>
    );
  }

  return (
    <ProductForm title="商品編集" product={product} onSubmit={handleSubmit} />
  );
}
