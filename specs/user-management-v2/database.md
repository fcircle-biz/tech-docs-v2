# データベース設計

## テーブル設計

### usersテーブル

| 項目名 | データ型 | 制約 | 説明 |
|--------|----------|------|------|
| id | 整数 | 主キー、自動採番 | ユーザーID |
| username | 文字列(50) | 必須、重複不可 | ユーザー名（ログインID） |
| password | 文字列(255) | 必須 | パスワード（ハッシュ化して保存） |
| email | 文字列(100) | 必須 | メールアドレス |
| full_name | 文字列(100) | 必須 | 氏名 |
| birth_date | 日付 | 任意 | 生年月日 |
| is_active | 真偽値 | 初期値: true | アカウント有効フラグ |
| created_at | 日時 | 自動設定 | 登録日時 |
| updated_at | 日時 | 自動更新 | 更新日時 |

## テーブル作成SQL

### MySQL / MariaDB

```sql
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL,
    full_name VARCHAR(100) NOT NULL,
    birth_date DATE,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### PostgreSQL

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL,
    full_name VARCHAR(100) NOT NULL,
    birth_date DATE,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### SQLite

```sql
CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    email TEXT NOT NULL,
    full_name TEXT NOT NULL,
    birth_date TEXT,
    is_active INTEGER DEFAULT 1,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP,
    updated_at TEXT DEFAULT CURRENT_TIMESTAMP
);
```

## 基本的なSQL操作

### ユーザー登録

```sql
INSERT INTO users (username, password, email, full_name, birth_date)
VALUES ('tanaka_taro', 'ハッシュ化されたパスワード', 'tanaka@example.com', '田中太郎', '1990-01-01');
```

### ログイン用クエリ（ユーザー名で検索）

```sql
SELECT id, username, password, is_active
FROM users
WHERE username = 'tanaka_taro';
```

### ユーザー一覧取得

```sql
SELECT id, username, email, full_name, created_at
FROM users
WHERE is_active = TRUE
ORDER BY created_at DESC;
```

### ユーザー詳細取得

```sql
SELECT id, username, email, full_name, birth_date, created_at
FROM users
WHERE id = 1;
```

### ユーザー情報更新

```sql
UPDATE users
SET email = 'new@example.com', full_name = '田中一郎'
WHERE id = 1;
```

### パスワード変更

```sql
UPDATE users
SET password = '新しいハッシュ化パスワード'
WHERE id = 1;
```

### ユーザー削除（論理削除）

```sql
UPDATE users
SET is_active = FALSE
WHERE id = 1;
```

### ユーザー削除（物理削除）

```sql
DELETE FROM users WHERE id = 1;
```

### ユーザー検索

```sql
SELECT id, username, email, full_name
FROM users
WHERE is_active = TRUE
  AND (username LIKE '%検索語%' OR full_name LIKE '%検索語%');
```

## サンプルデータ

```sql
-- パスワードは実際にはハッシュ化した値を使用
INSERT INTO users (username, password, email, full_name, birth_date) VALUES
('admin', 'hashed_password_1', 'admin@example.com', '管理者', '1980-01-01'),
('tanaka_taro', 'hashed_password_2', 'tanaka@example.com', '田中太郎', '1985-12-20'),
('yamada_hanako', 'hashed_password_3', 'yamada@example.com', '山田花子', '1992-03-08');
```

## 備考

### パスワードの保存について

パスワードは**絶対に平文で保存しない**。必ずハッシュ化して保存する。

各言語・フレームワークでの推奨方法：
- **Python**: `bcrypt` または `werkzeug.security`
- **PHP**: `password_hash()` / `password_verify()`
- **Java**: `BCryptPasswordEncoder`
- **OutSystems**: 組み込みの暗号化機能

### 論理削除 vs 物理削除

- **論理削除**: `is_active = FALSE` にする（データは残る）
- **物理削除**: `DELETE` でデータを完全に削除

初心者向けチュートリアルでは、両方のパターンを紹介することを推奨。
