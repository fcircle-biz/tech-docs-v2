すぐ使い回せる **Mermaidひな形集**です。`%%` のコメントを目印に、IDやラベルだけ差し替えてください。

---

## v3 デザイン向け配色ノート

v3（Graphite × Iris）では、Mermaidノードへ `style` 命令で色を付ける場合は
クール差し色（primary/cyan/amber/emerald）のパレットに合わせること。

| 用途 | 推奨塗り色 | 推奨枠色 | 文字色 |
|------|-----------|---------|-------|
| 処理ノード（primary） | `#12151e` | `#6366f1` | `#a3acfb` |
| シアン差し色 | `#0f1a1e` | `#06b6d4` | `#67e8f9` |
| アンバー差し色 | `#1a1408` | `#f59e0b` | `#fcd34d` |
| エメラルド差し色 | `#0a1912` | `#10b981` | `#6ee7b7` |
| 中立ノード | `#171c27` | `#3d4453` | `#c2cad8` |

**ライトモード向け**: 塗りは `#f0f1ff`（アイリス）/ `#ecfeff`（シアン）/ `#fffbeb`（アンバー）/ `#ecfdf5`（エメラルド）。枠と文字は上表の枠色・暗い文字色に合わせる。

---

## Mermaid 記法ルール（v3 必須）

CLAUDE.md で定めたルールをここにも再掲する。すべての Mermaid 図で遵守すること。

### 1. HTMLエンティティ禁止
`&#40;` `&#41;` `&#38;` などの HTML エンティティは Mermaid で正しく解釈されない。絶対に使わない。

### 2. 括弧の扱い
- 半角括弧 `()` は Mermaid で特殊文字として認識されるため、**全角括弧 `（）`** を使う。
- またはノードテキスト全体をダブルクォートで囲む: `A["Text (with parentheses)"]`

### 3. アンパサンド
`&` の代わりに全角の `＆` を使う。

### 4. ノード内改行
`<br/>` を使う場合はダブルクォートで囲む: `A["Line1<br/>Line2"]`

**正しい例:**
```
flowchart TD
    A["第1章: 概要（現在）"] --> B{OS}
    B -->|Windows| C["Windows環境構築"]
```

**間違った例（構文エラーになる）:**
```
flowchart TD
    A[第1章: 概要<br/>&#40;現在&#41;] --> B{OS}
    B -->|Windows| C[Windows環境<br/>Setup]
```

---

# 1) 業務フロー（基本・分岐/ループ付き）

```mermaid
flowchart TD
    %% 開始・終了
    A([開始]) --> B[処理STEP 1]
    B --> C{条件?}
    C -- はい --> D[処理STEP 2]
    C -- いいえ --> E[代替処理]
    D --> F[繰り返し処理]
    F -->|継続?| C
    E --> G([終了])
    D --> G
```

---

# 2) スイムレーン（部門/担当レーン）

```mermaid
flowchart LR
    %% subgraph がレーンの代わり
    subgraph L1[営業部]
      A1[見積依頼受領]
      A2[見積作成]
    end
    subgraph L2[購買部]
      B1[見積審査]
      B2[発注]
    end
    subgraph L3[経理]
      C1[請求書発行]
      C2[入金確認]
    end

    A1 --> A2 --> B1 --> B2 --> C1 --> C2
```

---

# 3) BPMNっぽい表現（ゲートウェイ代替）

```mermaid
flowchart TD
    start([Start]) --> task1([業務タスク])
    task1 --> gw{"XORゲート: 条件A?"}
    gw -->|Yes| tA([処理A])
    gw -->|No| tB([処理B])
    tA --> merge((マージ))
    tB --> merge
    merge --> endNode([End])
```

---

# 4) シーケンス図（時系列インタラクション）

```mermaid
sequenceDiagram
    autonumber
    participant U as User
    participant W as WebApp
    participant S as Service
    participant DB as Database

    U->>W: 画面から検索要求
    W->>S: API: /search?q=...
    S->>DB: SELECT ...
    DB-->>S: 結果セット
    S-->>W: JSONレスポンス
    W-->>U: 検索結果表示
```

---

# 5) ER 図（論理ER／カーディナリティ）

```mermaid
erDiagram
    CUSTOMER ||--o{ ORDER : places
    ORDER ||--|{ ORDER_LINE : contains
    PRODUCT ||--o{ ORDER_LINE : referenced_by
    CUSTOMER {
      int customer_id PK
      string name
      string email
    }
    ORDER {
      int order_id PK
      date ordered_at
      int customer_id FK
      string status
    }
    ORDER_LINE {
      int order_line_id PK
      int order_id FK
      int product_id FK
      int qty
      decimal unit_price
    }
    PRODUCT {
      int product_id PK
      string sku
      string title
      decimal price
    }
```

---

# 6) クラス図（オブジェクト指向設計）

```mermaid
classDiagram
    class User {
      +id: UUID
      +name: string
      +email: string
      +isActive(): bool
    }
    class Order {
      +id: UUID
      +orderedAt: datetime
      +status: Status
      +total(): decimal
    }
    class OrderLine {
      +productId: UUID
      +qty: int
      +subtotal(): decimal
    }
    User "1" --> "0..*" Order
    Order "1" --> "1..*" OrderLine
```

---

# 7) 状態遷移図（State Machine）

```mermaid
stateDiagram-v2
    [*] --> Draft
    Draft --> Submitted: 申請
    Submitted --> Approved: 承認
    Submitted --> Rejected: 却下
    Approved --> Fulfilled: 実行
    Rejected --> Draft: 修正
    Fulfilled --> [*]
```

---

# 8) データフロー（DFD風）

```mermaid
flowchart LR
    ext[(外部エンティティ: 顧客)] -->|入力| p1[プロセス: 申込受付]
    p1 -->|データ| ds[(データストア: 顧客DB)]
    ds -->|参照| p2[プロセス: 与信判定]
    p2 -->|結果| ext2[(外部エンティティ: 通知サービス)]
```

---

# 9) システム構成（レイヤ/サブシステム）

```mermaid
flowchart TB
    subgraph Client[プレゼンテーション層]
      B[SPA/フロントエンド]
      M[モバイルApp]
    end

    subgraph App[アプリケーション層]
      A1[API Gateway]
      A2[Auth Service]
      A3[Order Service]
    end

    subgraph Data[データ層]
      D1[(RDB)]
      D2[(Cache)]
      D3[(Object Storage)]
    end

    B --> A1
    M --> A1
    A1 --> A2
    A1 --> A3
    A3 --> D1
    A3 --> D2
    A3 --> D3
```

---

# 10) 業務⇄機能マッピング（バイパートイト）

```mermaid
flowchart LR
    subgraph Biz[業務]
      b1[見積作成]
      b2[受注登録]
      b3[請求発行]
    end
    subgraph Sys[システム機能]
      s1[見積API]
      s2[受注管理UI]
      s3[請求バッチ]
    end
    b1 --- s1
    b2 --- s2
    b3 --- s3
```

---

# 11) タイムライン（時系列イベント）

```mermaid
timeline
    title プロジェクト計画
    2025-09 : 要件定義完了
    2025-10 : 基本設計
    2025-12 : 実装フェーズ開始
    2026-02 : 結合テスト
    2026-03 : 本番リリース
```

---

# 12) カスタマージャーニー（Journey）

```mermaid
journey
    title 顧客購入ジャーニー
    section 認知
      広告閲覧: 3: 顧客
    section 検討
      商品比較: 4: 顧客
      カート投入: 2: 顧客
    section 購入
      決済: 3: 顧客
    section 利用/継続
      レビュー投稿: 4: 顧客
```

---

# 使い方のコツ（超要約）

* 図の**向き**は `flowchart TD/LR` を切り替え。
* **レーン**は `subgraph` で代用。
* **DB/外部**は `[(DB)]` / `((外部))` など形状記法で視認性UP。
* コードを**部品化**したいなら、ひな形をスニペット管理（VS Codeなど）に登録。

---

# 特殊文字のエスケープ（重要）

Mermaid では一部の文字が構文として解釈されるため、ノードテキスト内で使用する場合は対処が必要です。

## 対応が必要な文字

| 文字 | 問題 | 推奨対処 |
|------|------|---------|
| `(` `)` | ノード形状記法と競合 | 全角 `（）` に置き換え、またはダブルクォートで囲む |
| `&` | HTMLエンティティの開始と解釈 | 全角 `＆` に置き換え |
| `\|` | リンクラベル記法と競合 | `&#124;` または全角 `｜` |
| `<` `>` | HTMLタグと解釈 | `&lt;` / `&gt;` |
| `"` | 文字列の区切りと競合 | 外側を `[]` に変更 |

## 安全なノードテキストの書き方

### 悪い例（エラーになる）
```mermaid
flowchart LR
    A{OR演算<br/>||} --> B[結果]
    C{AND演算<br/>&&} --> D[結果]
    E[概要（現在）] --> F[次へ]
```

### 良い例
```mermaid
flowchart LR
    A{"OR演算 &#124;&#124;"} --> B[結果]
    C{"AND演算 ＆＆"} --> D[結果]
    E["概要（現在）"] --> F[次へ]
```

## ベストプラクティス

1. **特殊文字を含むテキストは `""` で囲む**: `A{"テキスト"}`
2. **括弧は全角に統一**: `（）` を使うと最もシンプル
3. **アンパサンドは全角に統一**: `＆` を使うと最もシンプル
4. **改行は控えめに**: `<br/>` よりスペース区切りを推奨
5. **生成後は必ずブラウザで表示確認**: Syntax error が出ていないかチェック
