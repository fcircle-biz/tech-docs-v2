# データベース設計

## テーブル設計

### todosテーブル

| 項目名 | データ型 | 制約 | 説明 |
|--------|----------|------|------|
| id | 整数 | 主キー、自動採番 | タスクID |
| title | 文字列(200) | 必須 | タスクのタイトル |
| completed | 真偽値 | 初期値: false | 完了フラグ |
| created_at | 日時 | 自動設定 | 作成日時 |
| updated_at | 日時 | 自動更新 | 更新日時 |

## テーブル作成SQL

### PostgreSQL

```sql
CREATE TABLE todos (
    id SERIAL PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    completed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### MySQL / MariaDB

```sql
CREATE TABLE todos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    completed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### SQLite

```sql
CREATE TABLE todos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    completed INTEGER DEFAULT 0,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP,
    updated_at TEXT DEFAULT CURRENT_TIMESTAMP
);
```

## 基本的なSQL操作

### タスク一覧取得（全件）

```sql
SELECT id, title, completed, created_at, updated_at
FROM todos
ORDER BY created_at DESC;
```

### タスク一覧取得（未完了のみ）

```sql
SELECT id, title, completed, created_at, updated_at
FROM todos
WHERE completed = FALSE
ORDER BY created_at DESC;
```

### タスク一覧取得（完了済みのみ）

```sql
SELECT id, title, completed, created_at, updated_at
FROM todos
WHERE completed = TRUE
ORDER BY created_at DESC;
```

### タスク1件取得

```sql
SELECT id, title, completed, created_at, updated_at
FROM todos
WHERE id = 1;
```

### タスク作成

```sql
INSERT INTO todos (title)
VALUES ('牛乳を買う');
```

### タスク更新（タイトル変更）

```sql
UPDATE todos
SET title = '牛乳とパンを買う', updated_at = CURRENT_TIMESTAMP
WHERE id = 1;
```

### タスク更新（完了/未完了切替）

```sql
UPDATE todos
SET completed = TRUE, updated_at = CURRENT_TIMESTAMP
WHERE id = 1;
```

### タスク削除

```sql
DELETE FROM todos WHERE id = 1;
```

### 完了済みタスクを一括削除

```sql
DELETE FROM todos WHERE completed = TRUE;
```

## サンプルデータ

```sql
INSERT INTO todos (title, completed) VALUES
('牛乳を買う', FALSE),
('レポートを提出する', TRUE),
('部屋を掃除する', FALSE),
('メールに返信する', FALSE),
('本を返却する', TRUE);
```

## インデックス（パフォーマンス向上）

初心者向けチュートリアルでは必須ではないが、以下のインデックスを追加すると検索が高速化する。

```sql
-- 完了フラグでのフィルタリング用
CREATE INDEX idx_todos_completed ON todos(completed);

-- 作成日時でのソート用
CREATE INDEX idx_todos_created_at ON todos(created_at DESC);
```

## ER図

```
┌─────────────────────────────┐
│           todos             │
├─────────────────────────────┤
│ PK  id          : INTEGER   │
│     title       : VARCHAR   │
│     completed   : BOOLEAN   │
│     created_at  : TIMESTAMP │
│     updated_at  : TIMESTAMP │
└─────────────────────────────┘
```

## 備考

### 論理削除について

このチュートリアルでは物理削除（DELETE文）を使用する。
論理削除を実装する場合は、`deleted_at` カラムを追加する設計も可能。

### タイムゾーンについて

タイムスタンプはUTCで保存し、表示時にユーザーのタイムゾーンに変換することを推奨。
初心者向けチュートリアルでは、サーバーのローカルタイムで統一しても可。
