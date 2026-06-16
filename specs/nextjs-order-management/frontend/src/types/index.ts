// 顧客
export interface Customer {
  id: number;
  name: string;
  email: string | null;
  phone: string | null;
  created_at: string;
  updated_at: string;
}

export interface CustomerCreate {
  name: string;
  email?: string;
  phone?: string;
}

// 商品
export interface Product {
  id: number;
  name: string;
  price: number;
  category: "food" | "drink" | "other";
  is_available: boolean;
  created_at: string;
  updated_at: string;
}

export interface ProductCreate {
  name: string;
  price: number;
  category: "food" | "drink" | "other";
  is_available?: boolean;
}

// 注文明細
export interface OrderItem {
  id: number;
  order_id: number;
  product_id: number;
  quantity: number;
  unit_price: number;
  subtotal: number;
  product_name?: string;
}

// 注文
export interface Order {
  id: number;
  customer_id: number;
  status: "pending" | "cooking" | "completed" | "cancelled";
  total_amount: number;
  created_at: string;
  updated_at: string;
  customer_name?: string;
  items?: OrderItem[];
}

export interface OrderCreate {
  customer_id: number;
  items: { product_id: number; quantity: number }[];
}

// ダッシュボード
export interface DashboardSummary {
  today_orders: number;
  today_sales: number;
  pending_orders: number;
  status_summary: {
    pending: number;
    cooking: number;
    completed: number;
    cancelled: number;
  };
}

// APIレスポンス
export interface CustomersResponse {
  customers: Customer[];
  total: number;
}

export interface ProductsResponse {
  products: Product[];
  total: number;
}

export interface OrdersResponse {
  orders: Order[];
  total: number;
}
