"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import CustomerForm from "@/components/CustomerForm";
import { customersAPI } from "@/lib/api";
import { Customer, CustomerCreate } from "@/types";
import Link from "next/link";

export default function EditCustomerPage() {
  const params = useParams();
  const id = Number(params.id);
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const data = await customersAPI.getById(id);
        setCustomer(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "データの取得に失敗しました");
      } finally {
        setLoading(false);
      }
    };
    fetchCustomer();
  }, [id]);

  const handleSubmit = async (data: CustomerCreate) => {
    await customersAPI.update(id, data);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-gray-500">読み込み中...</div>
      </div>
    );
  }

  if (error || !customer) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <Link
            href="/customers"
            className="text-blue-600 hover:text-blue-800 text-sm"
          >
            ← 顧客一覧に戻る
          </Link>
        </div>
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          {error || "顧客が見つかりませんでした"}
        </div>
      </div>
    );
  }

  return (
    <CustomerForm
      title="顧客編集"
      customer={customer}
      onSubmit={handleSubmit}
    />
  );
}
