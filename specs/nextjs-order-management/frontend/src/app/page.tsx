"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { dashboardAPI } from "@/lib/api";
import { DashboardSummary, Order } from "@/types";

const statusLabels: Record<string, string> = {
  pending: "受付",
  cooking: "調理中",
  completed: "完了",
  cancelled: "キャンセル",
};

const statusColors: Record<string, string> = {
  pending: "bg-yellow-100 text-yellow-800",
  cooking: "bg-blue-100 text-blue-800",
  completed: "bg-green-100 text-green-800",
  cancelled: "bg-gray-100 text-gray-800",
};

export default function Dashboard() {
  const [summary, setSummary] = useState<DashboardSummary | null>(null);
  const [recentOrders, setRecentOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [summaryData, ordersData] = await Promise.all([
          dashboardAPI.getSummary(),
          dashboardAPI.getRecentOrders(),
        ]);
        setSummary(summaryData);
        setRecentOrders(ordersData.orders || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : "データの取得に失敗しました");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-gray-500">読み込み中...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
        {error}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">ダッシュボード</h1>

      {/* サマリーカード */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-sm font-medium text-gray-500">本日の注文</div>
          <div className="mt-2 text-3xl font-bold text-gray-900">
            {summary?.today_orders || 0}件
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-sm font-medium text-gray-500">本日の売上</div>
          <div className="mt-2 text-3xl font-bold text-gray-900">
            ¥{(summary?.today_sales || 0).toLocaleString()}
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-sm font-medium text-gray-500">未完了注文</div>
          <div className="mt-2 text-3xl font-bold text-orange-600">
            {summary?.pending_orders || 0}件
          </div>
        </div>
      </div>

      {/* ステータス別件数 */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">ステータス別</h2>
        <div className="flex flex-wrap gap-4">
          {Object.entries(statusLabels).map(([key, label]) => (
            <div
              key={key}
              className={`px-4 py-2 rounded-full text-sm font-medium ${statusColors[key]}`}
            >
              {label}: {summary?.status_summary?.[key as keyof typeof summary.status_summary] || 0}
            </div>
          ))}
        </div>
      </div>

      {/* 最近の注文 */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-900">最近の注文</h2>
          <Link
            href="/orders/new"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
          >
            + 新規注文
          </Link>
        </div>
        <div className="divide-y divide-gray-200">
          {recentOrders.length === 0 ? (
            <div className="p-6 text-center text-gray-500">
              注文はまだありません
            </div>
          ) : (
            recentOrders.map((order) => (
              <div
                key={order.id}
                className="p-4 flex items-center justify-between hover:bg-gray-50"
              >
                <div className="flex items-center space-x-4">
                  <span className="text-gray-500 font-mono">#{order.id}</span>
                  <span className="font-medium">{order.customer_name}</span>
                  <span className="text-gray-700">
                    ¥{order.total_amount.toLocaleString()}
                  </span>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      statusColors[order.status]
                    }`}
                  >
                    {statusLabels[order.status]}
                  </span>
                  <span className="text-gray-400 text-sm">
                    {new Date(order.created_at).toLocaleTimeString("ja-JP", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
                <Link
                  href={`/orders/${order.id}`}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  詳細
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
