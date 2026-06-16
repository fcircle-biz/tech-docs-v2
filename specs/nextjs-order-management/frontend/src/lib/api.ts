const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

async function fetchAPI<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.detail || `API Error: ${response.status}`);
  }

  if (response.status === 204) {
    return {} as T;
  }

  return response.json();
}

// 顧客API
export const customersAPI = {
  getAll: (search?: string) =>
    fetchAPI<{ customers: any[]; total: number }>(
      `/api/customers${search ? `?search=${encodeURIComponent(search)}` : ""}`
    ),
  getById: (id: number) => fetchAPI<any>(`/api/customers/${id}`),
  create: (data: { name: string; email?: string; phone?: string }) =>
    fetchAPI<any>("/api/customers", {
      method: "POST",
      body: JSON.stringify(data),
    }),
  update: (id: number, data: { name?: string; email?: string; phone?: string }) =>
    fetchAPI<any>(`/api/customers/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    }),
  delete: (id: number) =>
    fetchAPI<void>(`/api/customers/${id}`, { method: "DELETE" }),
};

// 商品API
export const productsAPI = {
  getAll: (category?: string) =>
    fetchAPI<{ products: any[]; total: number }>(
      `/api/products${category ? `?category=${category}` : ""}`
    ),
  getById: (id: number) => fetchAPI<any>(`/api/products/${id}`),
  create: (data: {
    name: string;
    price: number;
    category: string;
    is_available?: boolean;
  }) =>
    fetchAPI<any>("/api/products", {
      method: "POST",
      body: JSON.stringify(data),
    }),
  update: (
    id: number,
    data: { name?: string; price?: number; category?: string; is_available?: boolean }
  ) =>
    fetchAPI<any>(`/api/products/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    }),
  delete: (id: number) =>
    fetchAPI<void>(`/api/products/${id}`, { method: "DELETE" }),
};

// 注文API
export const ordersAPI = {
  getAll: (params?: { status?: string; date_from?: string; date_to?: string }) => {
    const query = new URLSearchParams();
    if (params?.status) query.append("status", params.status);
    if (params?.date_from) query.append("date_from", params.date_from);
    if (params?.date_to) query.append("date_to", params.date_to);
    const queryString = query.toString();
    return fetchAPI<{ orders: any[]; total: number }>(
      `/api/orders${queryString ? `?${queryString}` : ""}`
    );
  },
  getById: (id: number) => fetchAPI<any>(`/api/orders/${id}`),
  create: (data: { customer_id: number; items: { product_id: number; quantity: number }[] }) =>
    fetchAPI<any>("/api/orders", {
      method: "POST",
      body: JSON.stringify(data),
    }),
  updateStatus: (id: number, status: string) =>
    fetchAPI<any>(`/api/orders/${id}/status`, {
      method: "PUT",
      body: JSON.stringify({ status }),
    }),
  cancel: (id: number) =>
    fetchAPI<void>(`/api/orders/${id}`, { method: "DELETE" }),
};

// ダッシュボードAPI
export const dashboardAPI = {
  getSummary: () => fetchAPI<any>("/api/dashboard/summary"),
  getRecentOrders: () => fetchAPI<any>("/api/dashboard/recent-orders"),
};
