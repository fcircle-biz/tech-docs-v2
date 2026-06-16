"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { customersAPI, productsAPI, ordersAPI } from "@/lib/api";
import { Customer, Product } from "@/types";

interface OrderItem {
  product_id: number;
  product_name: string;
  unit_price: number;
  quantity: number;
}

export default function NewOrderPage() {
  const router = useRouter();
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCustomerId, setSelectedCustomerId] = useState<number | null>(null);
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [customersData, productsData] = await Promise.all([
          customersAPI.getAll(),
          productsAPI.getAll(),
        ]);
        setCustomers(customersData.customers);
        // 販売中の商品のみ表示
        setProducts(productsData.products.filter((p: Product) => p.is_available));
      } catch (err) {
        setError(err instanceof Error ? err.message : "データの取得に失敗しました");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const addItem = (product: Product) => {
    const existingItem = orderItems.find((item) => item.product_id === product.id);
    if (existingItem) {
      setOrderItems(
        orderItems.map((item) =>
          item.product_id === product.id
            ? { ...item, quantity: Math.min(item.quantity + 1, 99) }
            : item
        )
      );
    } else {
      setOrderItems([
        ...orderItems,
        {
          product_id: product.id,
          product_name: product.name,
          unit_price: product.price,
          quantity: 1,
        },
      ]);
    }
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity < 1) {
      removeItem(productId);
      return;
    }
    setOrderItems(
      orderItems.map((item) =>
        item.product_id === productId
          ? { ...item, quantity: Math.min(quantity, 99) }
          : item
      )
    );
  };

  const removeItem = (productId: number) => {
    setOrderItems(orderItems.filter((item) => item.product_id !== productId));
  };

  const calculateTotal = () => {
    return orderItems.reduce(
      (sum, item) => sum + item.unit_price * item.quantity,
      0
    );
  };

  const handleSubmit = async () => {
    if (!selectedCustomerId) {
      setError("顧客を選択してください");
      return;
    }
    if (orderItems.length === 0) {
      setError("1つ以上の商品を選択してください");
      return;
    }

    setSubmitting(true);
    setError(null);

    try {
      await ordersAPI.create({
        customer_id: selectedCustomerId,
        items: orderItems.map((item) => ({
          product_id: item.product_id,
          quantity: item.quantity,
        })),
      });
      router.push("/orders");
    } catch (err) {
      setError(err instanceof Error ? err.message : "注文の作成に失敗しました");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-gray-500">読み込み中...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">新規注文作成</h1>
        <Link
          href="/orders"
          className="text-blue-600 hover:text-blue-800 text-sm"
        >
          ← 注文一覧に戻る
        </Link>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 左側: 顧客選択と商品一覧 */}
        <div className="space-y-6">
          {/* 顧客選択 */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              顧客選択
            </h2>
            <select
              value={selectedCustomerId || ""}
              onChange={(e) =>
                setSelectedCustomerId(Number(e.target.value) || null)
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            >
              <option value="">顧客を選択してください</option>
              {customers.map((customer) => (
                <option key={customer.id} value={customer.id}>
                  {customer.name}
                  {customer.phone ? ` (${customer.phone})` : ""}
                </option>
              ))}
            </select>
          </div>

          {/* 商品選択 */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              商品を追加
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {products.map((product) => (
                <button
                  key={product.id}
                  onClick={() => addItem(product)}
                  className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 text-left transition-colors"
                >
                  <div className="font-medium text-gray-900">{product.name}</div>
                  <div className="text-sm text-gray-500">
                    ¥{product.price.toLocaleString()}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 右側: 注文内容 */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">注文内容</h2>

          {orderItems.length === 0 ? (
            <div className="text-center text-gray-500 py-8">
              商品を選択してください
            </div>
          ) : (
            <div className="space-y-4">
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
                    <th className="py-2"></th>
                  </tr>
                </thead>
                <tbody>
                  {orderItems.map((item) => (
                    <tr key={item.product_id} className="border-b">
                      <td className="py-3 text-sm font-medium text-gray-900">
                        {item.product_name}
                      </td>
                      <td className="py-3 text-sm text-gray-700 text-right">
                        ¥{item.unit_price.toLocaleString()}
                      </td>
                      <td className="py-3 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <button
                            onClick={() =>
                              updateQuantity(item.product_id, item.quantity - 1)
                            }
                            className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100"
                          >
                            -
                          </button>
                          <input
                            type="number"
                            value={item.quantity}
                            onChange={(e) =>
                              updateQuantity(
                                item.product_id,
                                Number(e.target.value)
                              )
                            }
                            className="w-12 text-center border border-gray-300 rounded py-1"
                            min="1"
                            max="99"
                          />
                          <button
                            onClick={() =>
                              updateQuantity(item.product_id, item.quantity + 1)
                            }
                            className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="py-3 text-sm text-gray-700 text-right">
                        ¥{(item.unit_price * item.quantity).toLocaleString()}
                      </td>
                      <td className="py-3 text-right">
                        <button
                          onClick={() => removeItem(item.product_id)}
                          className="text-red-600 hover:text-red-800 text-sm"
                        >
                          削除
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="border-t pt-4">
                <div className="flex justify-between items-center text-lg font-bold">
                  <span>合計</span>
                  <span>¥{calculateTotal().toLocaleString()}</span>
                </div>
              </div>
            </div>
          )}

          <div className="mt-6 flex justify-end space-x-4">
            <Link
              href="/orders"
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
            >
              キャンセル
            </Link>
            <button
              onClick={handleSubmit}
              disabled={submitting || !selectedCustomerId || orderItems.length === 0}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-blue-400 transition-colors"
            >
              {submitting ? "作成中..." : "注文を確定する"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
