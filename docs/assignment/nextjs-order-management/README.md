# 注文管理システム 実践課題

この課題は、[Next.js + FastAPI + PostgreSQL Todoアプリチュートリアル](https://fcircle-biz.github.io/tech_docs/tutorial/javascript-ecosystem/nextjs-fastapi-todo/nextjs-fastapi-todo-tutorial-01.html)を完了した方向けの実践課題です。
仕様書とモック画面を参考に、自力でシステムを構築してください。

## 概要

飲食店や小売店向けのシンプルな注文管理システムです。
顧客情報、商品情報、注文情報を管理し、CRUD操作に加えてリレーション（テーブル間の関連付け）や集計機能を学習できます。

Todoアプリで学んだ「1テーブルのCRUD操作」から、「複数テーブルのリレーショナルデータベース設計」へステップアップする実践課題です。

## 学習目標

この課題を完了すると、以下のスキルを確認・強化できます：

- 複数テーブルを持つデータベース設計
- 外部キー制約とリレーションの理解
- JOINを使った複合クエリの作成
- ステータス管理を含むビジネスロジックの実装
- 動的なフォーム（明細行の追加・削除）の実装
- 集計機能とダッシュボード画面の作成
- より複雑なAPIエンドポイントの設計

## Todoアプリからのステップアップ

| 項目 | Todoアプリ | 注文管理システム |
|------|-----------|-----------------|
| テーブル数 | 1テーブル | 4テーブル |
| リレーション | なし | 外部キー、1対多、多対多 |
| データ操作 | 単純なCRUD | JOINを使った複合クエリ |
| ステータス管理 | 完了/未完了 | 複数ステータス（受付→調理中→完了→キャンセル） |
| 集計機能 | なし | 売上集計、期間検索 |
| 入力項目 | 1項目（タイトル） | 複数項目（バリデーション強化） |

## 前提条件

### 必要な知識・スキル
- [Next.js + FastAPI + PostgreSQL Todoアプリチュートリアル](https://fcircle-biz.github.io/tech_docs/tutorial/javascript-ecosystem/nextjs-fastapi-todo/nextjs-fastapi-todo-tutorial-01.html) を完了していること
- React/Next.js の基本的な使い方
- Python/FastAPI でのREST API実装
- SQLの基本操作（SELECT, INSERT, UPDATE, DELETE）

### 必要な環境
- Node.js 18以上
- Python 3.10以上
- Docker / Docker Compose
- VS Code などのエディタ

## 技術スタック

| レイヤー | 技術 |
|----------|------|
| フロントエンド | Next.js (App Router) + TypeScript |
| スタイリング | Tailwind CSS |
| バックエンド | Python + FastAPI |
| ORM | SQLModel |
| データベース | PostgreSQL |
| 環境構築 | Docker Compose |

## 設計資料

この課題では以下の設計資料を参照して実装します：

| 資料 | 内容 | リンク |
|------|------|--------|
| システム仕様書 | 機能一覧、API設計、バリデーション | [README.pdf](./docs/README.pdf) |
| データベース設計 | ER図、テーブル定義、SQL | [database.pdf](./docs/database.pdf) |
| 実装ガイド | 実装の進め方のヒント | [implementation-guide.pdf](./docs/implementation-guide.pdf) |
| モック画面 | 完成イメージのHTML | [mockups/](./docs/mockups/index.html) |

## 学習コンテンツ

### [Step 1. 環境構築](https://fcircle-biz.github.io/tech_docs/assignment/nextjs-order-management/nextjs-order-management-assignment-01.html)
プロジェクトの基盤を構築します。
- 実装内容: Docker Compose設定、バックエンド/フロントエンドの初期セットアップ、共通ファイル作成
- 参照: 仕様書「技術スタック」、実装ガイド「Step 1」
- 目標: 開発環境が起動し、APIドキュメント（/docs）とフロントエンドにアクセスできる

### [Step 2. 顧客管理機能](https://fcircle-biz.github.io/tech_docs/assignment/nextjs-order-management/nextjs-order-management-assignment-02.html)
顧客情報（名前、メール、電話番号）を管理する機能を実装します。
- 実装内容: Customerモデル、顧客CRUD API、顧客一覧/登録/編集画面
- 参照: 仕様書「顧客管理機能」「顧客API」、DB設計「customersテーブル」
- 目標: 顧客の登録・編集・削除・検索ができる

### [Step 3. 商品管理機能](https://fcircle-biz.github.io/tech_docs/assignment/nextjs-order-management/nextjs-order-management-assignment-03.html)
商品情報（名前、価格、カテゴリ、販売状態）を管理する機能を実装します。
- 実装内容: Productモデル、商品CRUD API、商品一覧/登録/編集画面
- 参照: 仕様書「商品管理機能」「商品API」、DB設計「productsテーブル」
- 目標: 商品の登録・編集・削除・カテゴリフィルタ・販売状態切替ができる

### [Step 4. 注文管理機能](https://fcircle-biz.github.io/tech_docs/assignment/nextjs-order-management/nextjs-order-management-assignment-04.html)
顧客と商品を組み合わせて注文を作成・管理する機能です。この課題の核心部分です。
- 実装内容: Order/OrderItemモデル、注文API、注文一覧/作成/詳細画面、ステータス管理
- 参照: 仕様書「注文管理機能」「注文API」「注文ステータス」、DB設計「ordersテーブル」「order_itemsテーブル」「注文作成の処理フロー」
- 目標: 注文の作成（顧客選択・商品追加・数量変更）・ステータス更新・詳細表示ができる

### [Step 5. ダッシュボード機能](https://fcircle-biz.github.io/tech_docs/assignment/nextjs-order-management/nextjs-order-management-assignment-05.html)
本日の売上サマリーと最近の注文を表示するトップページです。
- 実装内容: ダッシュボードAPI（サマリー、最近の注文）、ダッシュボード画面
- 参照: 仕様書「ダッシュボード機能」「ダッシュボードAPI」、DB設計「集計クエリ」
- 目標: 本日の注文件数・売上・ステータス別件数・最近の注文が表示される

### [Step 6. 仕上げ](https://fcircle-biz.github.io/tech_docs/assignment/nextjs-order-management/nextjs-order-management-assignment-06.html)
削除制約やエラーハンドリングを追加し、システムを完成させます。
- 実装内容: 削除制約（注文履歴がある顧客/商品は削除不可）、エラーハンドリング、UI改善
- 参照: DB設計「削除時の制約」、仕様書「エラーメッセージ例」
- 目標: すべての動作確認チェックリストをクリアできる

## 推奨所要時間

| ステップ | 内容 | バックエンド | フロントエンド | 合計 |
|----------|------|-------------|---------------|------|
| Step 1 | 環境構築 | 4〜6時間 | 4〜6時間 | 8〜12時間 |
| Step 2 | 顧客管理 | 8〜12時間 | 12〜18時間 | 20〜30時間 |
| Step 3 | 商品管理 | 6〜10時間 | 10〜16時間 | 16〜26時間 |
| Step 4 | 注文管理 | 16〜24時間 | 24〜36時間 | 40〜60時間 |
| Step 5 | ダッシュボード | 6〜10時間 | 10〜14時間 | 16〜24時間 |
| Step 6 | 仕上げ | 4〜8時間 | 6〜10時間 | 10〜18時間 |
| **合計** | | **44〜70時間** | **66〜100時間** | **約110〜170時間** |

**目安**: 1日3〜4時間の学習で、約1〜2ヶ月

### 時間がかかるポイント

- **Step 4（注文管理）が最も難しい**: リレーション、JOIN、動的フォーム、合計計算など新しい概念が多い
- **フロントエンドはバックエンドの約1.5倍**: UI実装、状態管理、エラー処理に時間がかかる
- **デバッグ時間**: 実装時間と同程度のデバッグ時間を見込むこと

## 進め方

1. **設計書を読む**: まず仕様書とDB設計を熟読し、全体像を把握
2. **モック画面を確認**: 完成イメージを見て、必要な画面とデータを理解
3. **ステップ順に実装**: 各ステップのガイドに沿って実装
4. **動作確認**: 各ステップの完了条件を満たしているか確認
5. **困ったら設計書を再確認**: コードではなく設計書を参照

## 動作確認チェックリスト

### Step 2: 顧客管理
- [ ] 顧客を新規登録できる
- [ ] 顧客一覧が表示される
- [ ] 顧客情報を編集できる
- [ ] 顧客を削除できる
- [ ] 名前で検索できる

### Step 3: 商品管理
- [ ] 商品を新規登録できる
- [ ] 商品一覧が表示される
- [ ] 商品情報を編集できる
- [ ] 商品を削除できる
- [ ] カテゴリでフィルタできる
- [ ] 販売中/停止を切り替えられる

### Step 4: 注文管理
- [ ] 顧客を選択して注文を作成できる
- [ ] 商品を追加・削除できる
- [ ] 数量を変更できる
- [ ] 合計金額が正しく計算される
- [ ] 注文一覧が表示される
- [ ] 注文詳細が表示される
- [ ] ステータスを更新できる

### Step 5: ダッシュボード
- [ ] 本日の注文件数が表示される
- [ ] 本日の売上が表示される
- [ ] ステータス別件数が表示される
- [ ] 最近の注文一覧が表示される

### Step 6: 仕上げ
- [ ] 注文履歴がある顧客は削除できない
- [ ] 注文履歴がある商品は削除できない
- [ ] エラー時にメッセージが表示される

## 困ったときは

- **設計書の該当セクションを再読**: API仕様、DB設計、バリデーションルールを確認
- **モック画面で期待される動作を確認**: UI/UXの参考にする
- **Todoアプリチュートリアルを振り返る**: 基本的なCRUD操作の復習

### 参考リソース

- [Todoアプリチュートリアル](https://fcircle-biz.github.io/tech_docs/tutorial/javascript-ecosystem/nextjs-fastapi-todo/nextjs-fastapi-todo-tutorial-01.html) - 基礎を学び直したい場合
- [FastAPI学習ガイド](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/fastapi/) - FastAPIの詳細を学びたい場合
- [SQL入門学習ガイド](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/sql/) - SQLの詳細を学びたい場合
- [React学習ガイド](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/react/) - Reactの詳細を学びたい場合

## スコープ外（この課題では実装しないもの）

- ユーザー認証・ログイン
- 権限管理（管理者/スタッフ）
- 在庫管理（数量追跡）
- 支払い処理
- 印刷機能（レシート等）
- 通知機能（メール/プッシュ）
- 多店舗対応
- 予約管理

## 追加課題（余力があれば）

基本機能が完成した後、以下の機能追加に挑戦してみてください：

- [ ] ローディング表示の追加
- [ ] レスポンシブデザインの改善
- [ ] 期間指定の売上検索
- [ ] 注文履歴の日付フィルタ
- [ ] 商品別売上ランキング表示

---

頑張ってください！
