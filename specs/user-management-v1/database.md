# データベース設計

## ユーザー管理システムのテーブル設計

### usersテーブル

| 項目名 | データ型 | 制約 | 説明 |
|--------|----------|------|------|
| id | 整数 | 主キー、自動採番 | ユーザーID |
| username | 文字列(50) | 必須、重複不可 | ユーザー名 |
| email | 文字列(100) | 必須 | メールアドレス |
| full_name | 文字列(100) | 必須 | 氏名 |
| birth_date | 日付 | 任意 | 生年月日 |
| created_at | 日時 | 自動設定 | 登録日時 |

## テーブル作成SQL

```sql
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL,
    full_name VARCHAR(100) NOT NULL,
    birth_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 基本的なSQL操作

### データの追加
```sql
INSERT INTO users (username, email, full_name, birth_date) 
VALUES ('tanaka_taro', 'tanaka@example.com', '田中太郎', '1990-01-01');
```

### データの取得
```sql
-- すべてのユーザー
SELECT * FROM users;

-- 特定のユーザー
SELECT * FROM users WHERE username = 'tanaka_taro';
```

### データの更新
```sql
UPDATE users 
SET email = 'new@example.com' 
WHERE id = 1;
```

### データの削除
```sql
DELETE FROM users WHERE id = 1;
```

## サンプルデータ

```sql
INSERT INTO users (username, email, full_name, birth_date) VALUES
('admin', 'admin@example.com', '管理者', '1980-01-01'),
('tanaka_taro', 'tanaka@example.com', '田中太郎', '1985-12-20'),
('yamada_hanako', 'yamada@example.com', '山田花子', '1992-03-08');
```