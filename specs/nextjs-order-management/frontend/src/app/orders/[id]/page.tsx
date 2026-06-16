"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ordersAPI } from "@/lib/api";
import { Order } from "@/types";

const statusLabels: Record<string, string> = {
  pending: "受付",
  cooking: "調理中",
  completed: "完了",
  cancelled: "キャンセル",
};

const statusColors: Record<string, string> = {
  pending: "bg-yellow-100 text-yellow-800 border-yellow-200",
  cooking: "bg-blue-100 text-blue-800 border-blue-200",
  completed: "bg-green-100 text-green-800 border-green-200",
  cancelled: "bg-gray-100 text-gray-800 border-gray-200",
};

// ステータス遷移のルール
const nextStatusOptions: Record<string, string[]> = {
  pending: ["cooking", "cancelled"],
  cooking: ["completed", "cancelled"],
  completed: [],
  cancelled: [],
};

export default function OrderDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = Number(params.id);
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [updating, setUpdating] = useState(false);

  const fetchOrder = async () => {
    try {
      const data = await ordersAPI.getById(id);
      setOrder(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "データの取得に失敗しました");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrder();
  }, [id]);

  const handleStatusUpdate = async (newStatus: string) => {
    if (!confirm(`ステータスを「${statusLabels[newStatus]}」に変更しますか？`)) {
      return;
    }

    setUpdating(true);
    try {
      await ordersAPI.updateStatus(id, newStatus);
      fetchOrder();
    } catch (err) {
      setError(err instanceof Error ? err.message : "ステータスの更新に失敗しました");
    } finally {
      setUpdating(false);
    }
  };

  const handleCancel = async () => {
    if (!confirm("この注文をキャンセルしますか？")) return;

    setUpdating(true);
    try {
      await ordersAPI.cancel(id);
      router.push("/orders");
    } catch (err) {
      setError(err instanceof Error ? err.message : "キャンセルに失敗しました");
    } finally {
      setUpdating(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-gray-500">読み込み中...</div>
      </div>
    );
  }

  if (error || !order) {
    return (
      <div className="space-y-4">
        <Link
          href="/orders"
          className="text-blue-600 hover:text-blue-800 text-sm"
        >
          ← 注文一覧に戻る
        </Link>
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          {error || "注文が見つかりませんでした"}
        </div>
      </div>
    );
  }

  const availableNextStatuses = nextStatusOptions[order.status] || [];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link
            href="/orders"
            className="text-blue-600 hover:text-blue-800 text-sm"
          >
            ← 注文一覧に戻る
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">注文詳細 #{order.id}</h1>
        </div>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 注文情報 */}
        <div className="lg:col-span-2 space-y-6">
          {/* 基本情報 */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              注文情報
            </h2>
            <dl className="grid grid-cols-2 gap-4">
              <div>
                <dt className="text-sm font-medium text-gray-500">注文番号</dt>
                <dd className="mt-1 text-lg text-gray-900">#{order.id}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">顧客名</dt>
                <dd className="mt-1 text-lg text-gray-900">
                  {order.customer_name}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">注文日時</dt>
                <dd className="mt-1 text-gray-900">
                  {new Date(order.created_at).toLocaleString("ja-JP")}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">
                  ステータス
                </dt>
                <dd className="mt-1">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-sm font-medium border ${
                      statusColors[order.status]
                    }`}
                  >
                    {statusLabels[order.status]}
                  </span>
                </dd>
              </div>
            </dl>
          </div>

          {/* 注文明細 */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              注文明細
            </h2>
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 text-sm font-medium text-gray-500">
                    商品名
                  </th>
                  <th className="text-right py-2 text-sm font-medium text-gray-500">
                    単価
                  </th>
                  <th className="text-center py-2 text-sm font-medium text-gray-500">
                    数量
                  </th>
                  <th className="text-right py-2 text-sm font-medium text-gray-500">
                    小計
                  </th>
                </tr>
              </thead>
              <tbody>
                {order.items?.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="py-3 text-sm text-gray-900">
                      {item.product_name}
                    </td>
                    <td className="py-3 text-sm text-gray-700 text-right">
                      ¥{item.unit_price.toLocaleString()}
                    </td>
                    <td className="py-3 text-sm text-gray-700 text-center">
                      {item.quantity}
                    </td>
                    <td className="py-3 text-sm text-gray-700 text-right">
                      ¥{item.subtotal.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t-2">
                  <td
                    colSpan={3}
                    className="py-4 text-right font-bold text-gray-900"
                  >
                    合計
                  </td>
                  <td className="py-4 text-right font-bold text-xl text-gray-900">
                    ¥{order.total_amount.toLocaleString()}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        {/* ステータス操作 */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              ステータス操作
            </h2>

            {availableNextStatuses.length === 0 ? (
              <p className="text-gray-500 text-sm">
                この注文のステータスは変更できません
              </p>
            ) : (
              <div className="space-y-3">
                {availableNextStatuses.map((status) => (
                  <button
                    key={status}
                    onClick={() => handleStatusUpdate(status)}
                    disabled={updating}
                    className={`w-full px-4 py-3 rounded-md text-sm font-medium transition-colors disabled:opacity-50 ${
                      status === "cancelled"
                        ? "bg-red-600 hover:bg-red-700 text-white"
                        : status === "cooking"
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : "bg-green-600 hover:bg-green-700 text-white"
                    }`}
                  >
                    {status === "cooking" && "調理開始"}
                    {status === "completed" && "提供完了"}
                    {status === "cancelled" && "キャンセル"}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* 注文履歴（更新日時） */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              更新履歴
            </h2>
            <dl className="space-y-2 text-sm">
              <div className="flex justify-between">
                <dt className="text-gray-500">作成日時</dt>
                <dd className="text-gray-900">
                  {new Date(order.created_at).toLocaleString("ja-JP")}
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-500">更新日時</dt>
                <dd className="text-gray-900">
                  {new Date(order.updated_at).toLocaleString("ja-JP")}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
