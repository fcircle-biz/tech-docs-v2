-- =============================================
-- 注文管理システム データベース初期化スクリプト
-- =============================================

-- 顧客テーブル
CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE,
    phone VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 商品テーブル
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price INTEGER NOT NULL CHECK (price >= 1),
    category VARCHAR(20) NOT NULL CHECK (category IN ('food', 'drink', 'other')),
    is_available BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 注文テーブル
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    customer_id INTEGER NOT NULL REFERENCES customers(id),
    status VARCHAR(20) NOT NULL DEFAULT 'pending'
        CHECK (status IN ('pending', 'cooking', 'completed', 'cancelled')),
    total_amount INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 注文明細テーブル
CREATE TABLE order_items (
    id SERIAL PRIMARY KEY,
    order_id INTEGER NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
    product_id INTEGER NOT NULL REFERENCES products(id),
    quantity INTEGER NOT NULL CHECK (quantity >= 1),
    unit_price INTEGER NOT NULL,
    subtotal INTEGER NOT NULL
);

-- =============================================
-- インデックス
-- =============================================

-- 顧客検索用
CREATE INDEX idx_customers_name ON customers(name);
CREATE INDEX idx_customers_email ON customers(email);

-- 商品検索用
CREATE INDEX idx_products_category ON products(category);
CREATE INDEX idx_products_is_available ON products(is_available);

-- 注文検索用
CREATE INDEX idx_orders_customer_id ON orders(customer_id);
CREATE INDEX idx_orders_status ON orders(status);
CREATE INDEX idx_orders_created_at ON orders(created_at DESC);

-- 注文明細検索用
CREATE INDEX idx_order_items_order_id ON order_items(order_id);
CREATE INDEX idx_order_items_product_id ON order_items(product_id);

-- =============================================
-- サンプルデータ
-- =============================================

-- 顧客データ
INSERT INTO customers (name, email, phone) VALUES
('山田太郎', 'yamada@example.com', '090-1234-5678'),
('佐藤花子', 'sato@example.com', '080-2345-6789'),
('田中一郎', 'tanaka@example.com', '070-3456-7890'),
('鈴木美咲', NULL, '090-4567-8901'),
('高橋健太', 'takahashi@example.com', NULL);

-- 商品データ
INSERT INTO products (name, price, category, is_available) VALUES
('カレーライス', 800, 'food', TRUE),
('ハンバーグ定食', 950, 'food', TRUE),
('サラダセット', 400, 'food', TRUE),
('オムライス', 850, 'food', TRUE),
('唐揚げ定食', 900, 'food', TRUE),
('コーヒー', 300, 'drink', TRUE),
('オレンジジュース', 250, 'drink', TRUE),
('ビール', 500, 'drink', TRUE),
('烏龍茶', 200, 'drink', TRUE),
('デザートセット', 450, 'other', FALSE);

-- 注文データ
INSERT INTO orders (customer_id, status, total_amount) VALUES
(1, 'completed', 1200),
(2, 'completed', 1550),
(3, 'cooking', 2100),
(1, 'pending', 1400),
(4, 'completed', 900);

-- 注文明細データ
INSERT INTO order_items (order_id, product_id, quantity, unit_price, subtotal) VALUES
-- 注文1: 山田太郎 - カレーライス + サラダセット
(1, 1, 1, 800, 800),
(1, 3, 1, 400, 400),
-- 注文2: 佐藤花子 - ハンバーグ定食 + オレンジジュース x2
(2, 2, 1, 950, 950),
(2, 7, 2, 250, 500),
-- 注文3: 田中一郎 - オムライス x2 + コーヒー + 烏龍茶
(3, 4, 2, 850, 1700),
(3, 6, 1, 300, 300),
(3, 9, 1, 200, 200),
-- 注文4: 山田太郎 - 唐揚げ定食 + ビール
(4, 5, 1, 900, 900),
(4, 8, 1, 500, 500),
-- 注文5: 鈴木美咲 - 唐揚げ定食
(5, 5, 1, 900, 900);
