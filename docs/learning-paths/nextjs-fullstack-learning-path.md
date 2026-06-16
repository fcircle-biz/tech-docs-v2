# Next.js フルスタック学習パス

このドキュメントは、Next.js + FastAPI + PostgreSQL を使ったフルスタック開発を習得するためのロードマップです。

**学習アプローチ**: 実践→深掘り型（まずTodoアプリチュートリアルで全体を体験し、その後各技術を深く学習）

---

## 学習パス別おすすめルート

### ルートA: フルスタック開発者を目指す場合

**総所要時間: 約49.5〜56.5人日**（Step1: 2人日 + Step2: 33.5人日 + Step3: 14〜21人日）

```
Step 1: チュートリアル完了（2人日）
    ↓
Step 2: 各技術を深掘り学習（33.5人日）
    Webアプリ開発入門（全14章: 3.5人日）★基礎固め
    ↓
    ── バックエンド（13.5人日）──
    Python入門（全12章: 3人日）
    ↓
    SQL入門（全12章: 3人日）
    ↓
    FastAPI（全10章: 2.5人日）
    ↓
    SQLModel（全10章: 2.5人日）
    ↓
    Docker入門（全10章: 2.5人日）
    ↓
    ── フロントエンド（16.5人日）──
    JavaScript入門（全12章: 3人日）
    ↓
    TypeScript（全15章: 4人日）
    ↓
    React（全12章: 3人日）
    ↓
    Tailwind CSS（全10章: 2.5人日）
    ↓
    Next.js（全15章: 4人日）
    ↓
Step 3: 卒業課題 - 注文管理システム（14〜21人日）
```

### ルートB: バックエンド中心に学びたい場合

**総所要時間: 約33〜40人日**（Step1: 2人日 + Step2: 17人日 + Step3: 14〜21人日）

```
Step 1: チュートリアル完了（2人日）
    ↓
Step 2: 各技術を深掘り学習（17人日）
    Webアプリ開発入門（全14章: 3.5人日）★基礎固め
    ↓
    Python入門（全12章: 3人日）
    ↓
    SQL入門（全12章: 3人日）
    ↓
    FastAPI（全10章: 2.5人日）
    ↓
    SQLModel（全10章: 2.5人日）
    ↓
    Docker入門（全10章: 2.5人日）
    ↓
Step 3: 卒業課題 - 注文管理システム（14〜21人日）
```

### ルートC: フロントエンド中心に学びたい場合

**総所要時間: 約36〜43人日**（Step1: 2人日 + Step2: 20人日 + Step3: 14〜21人日）

```
Step 1: チュートリアル完了（2人日）
    ↓
Step 2: 各技術を深掘り学習（20人日）
    Webアプリ開発入門（全14章: 3.5人日）★基礎固め
    ↓
    JavaScript入門（全12章: 3人日）
    ↓
    TypeScript（全15章: 4人日）
    ↓
    React（全12章: 3人日）
    ↓
    Tailwind CSS（全10章: 2.5人日）
    ↓
    Next.js（全15章: 4人日）
    ↓
Step 3: 卒業課題 - 注文管理システム（14〜21人日）
```

---

## Step 1: チュートリアルで全体を体験（まずここから！）

### チュートリアル概要

**[Next.js + FastAPI + PostgreSQL Todoアプリチュートリアル](https://fcircle-biz.github.io/tech_docs/tutorial/javascript-ecosystem/nextjs-fastapi-todo/nextjs-fastapi-todo-tutorial-01.html)**

プログラミング未経験者でも取り組める実践的なフルスタック開発チュートリアルです。

### チュートリアル構成

| Step | 内容 | 体験できること |
|------|------|--------------|
| Step 1 | 環境構築 | VS Code, Node.js, Python, Docker のセットアップ |
| Step 2 | PostgreSQL構築 | Docker Composeでデータベース起動 |
| Step 3 | FastAPI基礎 | Python APIサーバー作成 |
| Step 4 | データ取得API | SQLModel でDB操作 |
| Step 5 | CRUD操作 | 作成・更新・削除のAPI実装 |
| Step 6 | Next.js基礎 | React + Tailwind CSS で画面作成 |
| Step 7 | CORS設定と一覧表示 | フロントエンドとバックエンドの接続 |
| Step 8 | タスク追加 | POSTリクエストでデータ送信 |
| Step 9 | 完了切替・削除 | PUT/DELETEリクエストの実装 |
| Step 10 | フィルター機能 | クエリパラメータによる絞り込み |
| Step 11 | 仕上げ | エラー処理、UI改善、まとめ |

### 所要時間

- **総所要時間**: 約17時間（約2人日）

### 学習のポイント

1. **順番通りに進める** - 各Stepは前のStepの知識が必要
2. **コードは手で入力する** - コピペより理解が深まる
3. **エラーを恐れない** - エラーは学習の一部
4. **完璧を求めない** - まずは動かすことを優先

---

## Step 2: 各技術を深掘り学習

チュートリアル完了後、「もっと知りたい」と思った技術から順に学習してください。

> **学習期間目安の計算式**: 1章あたり2時間 × 章数 ÷ 8時間/人日

### 共通基礎（全員におすすめ）

| 優先度 | ガイド | 章数 | 学習期間目安 | URL |
|--------|--------|------|-------------|-----|
| ⭐⭐⭐ | **Webアプリ開発入門** | 全14章 | 3.5人日 | [webapp-intro/](https://fcircle-biz.github.io/tech_docs/guide/web-technologies/webapp-intro/webapp-intro-learning-material-01.html) |

チュートリアルで「なんとなく動いた」部分の理解を深める基礎知識ガイドです。

#### Webアプリ開発入門 学習ガイド内容

1. インターネットとWebの仕組み
2. ネットワークの基礎知識（IPアドレス、DNS、TCP/IP）
3. URLの構造を理解しよう
4. クライアントとサーバー
5. HTTPプロトコルの基本
6. HTTPメソッドを理解しよう（GET, POST, PUT, DELETE）
7. データ形式（JSON）
8. REST APIの基本
9. データベースの役割
10. Webアプリの3層構造
11. ローカル開発環境（localhost、ポート番号）
12. CORSとセキュリティ基礎
13. 開発者ツールでWebを観察しよう
14. Webアプリ開発の全体像

---

### バックエンド系（Python側をもっと理解したい場合）

| 優先度 | ガイド | 章数 | 学習期間目安 | URL |
|--------|--------|------|-------------|-----|
| ⭐⭐⭐ | **Python入門** | 全12章 | 3人日 | [python-beginner/](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/python-beginner/python-beginner-learning-material-01.html) |
| ⭐⭐⭐ | **FastAPI** | 全10章 | 2.5人日 | [fastapi/](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/fastapi/fastapi-learning-material-01.html) |
| ⭐⭐⭐ | **SQL入門** | 全12章 | 3人日 | [sql/](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/sql/sql-learning-material-01.html) |
| ⭐⭐ | **SQLModel** | 全10章 | 2.5人日 | [sqlmodel/](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/sqlmodel/sqlmodel-learning-material-01.html) |

#### Python入門 学習ガイド内容

1. Pythonとは？プログラミングを始めよう
2. 環境構築 - Pythonをインストールして最初のプログラムを動かそう
3. 変数とデータ型 - 値を入れる「箱」の使い方
4. 演算と文字列操作 - 計算と文字の扱い方
5. 条件分岐 - プログラムに判断をさせよう
6. 繰り返し処理 - 同じ作業を自動化しよう
7. リストとタプル - 複数のデータをまとめて管理
8. 辞書 - データに名前を付けて整理しよう
9. 関数の基本 - 処理をパーツ化して再利用しよう
10. ファイルの読み書き - データを保存して次回も使えるように
11. エラーへの対処法 - つまずきポイントの攻略
12. 簡単なプログラムを作ってみよう - 実践編

#### FastAPI 学習ガイド内容

1. FastAPI入門とセットアップ
2. 基本的なルーティングとHTTPメソッド
3. リクエストとレスポンスモデル（Pydantic）
4. パラメータと検証
5. データベースの統合（SQLModel）
6. 認証とセキュリティ
7. CORSとミドルウェア
8. 非同期処理とバックグラウンドタスク
9. テストとドキュメント
10. デプロイと運用

#### SQL入門 学習ガイド内容

1. データベースってなに？
2. PostgreSQLをインストールしてみよう
3. はじめてのテーブル作成
4. データを入れてみよう（INSERT文）
5. データを見てみよう（SELECT文の基礎）
6. データを変更・削除してみよう（UPDATE・DELETE）
7. 条件を付けてデータを探そう（WHERE句）
8. データを並び替えて見やすくしよう（ORDER BY・LIMIT）
9. 複数のテーブルを組み合わせよう（JOIN入門）
10. データをまとめて集計しよう（集計関数とGROUP BY）
11. より複雑な検索をしてみよう（サブクエリ入門）
12. 実践！簡単な管理システムを作ろう

#### SQLModel 学習ガイド内容

1. データベースとORMの基礎概念
2. 環境構築と最初のプログラム
3. モデルの基本 - データの型を定義する
4. データの保存と取得（CRUD操作の基本）
5. データの検索と絞り込み
6. 複数のテーブルを関連付ける（リレーション入門）
7. FastAPIで簡単なWeb APIを作る
8. 実践！TODOアプリケーションの開発
9. エラー処理とバリデーション
10. パフォーマンスの基礎知識

---

### フロントエンド系（Next.js/React側をもっと理解したい場合）

| 優先度 | ガイド | 章数 | 学習期間目安 | URL |
|--------|--------|------|-------------|-----|
| ⭐⭐⭐ | **JavaScript入門** | 全12章 | 3人日 | [javascript-beginner/](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/javascript-beginner/javascript-learning-material-01.html) |
| ⭐⭐⭐ | **TypeScript** | 全15章 | 4人日 | [typescript/](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/typescript/typescript-learning-material-01.html) |
| ⭐⭐⭐ | **React** | 全12章 | 3人日 | [react/](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/react/react-learning-material-01.html) |
| ⭐⭐ | **Next.js** | 全15章 | 4人日 | [nextjs/](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/nextjs/nextjs-learning-material-01.html) |
| ⭐ | **Tailwind CSS** | 全10章 | 2.5人日 | [tailwind-css/](https://fcircle-biz.github.io/tech_docs/guide/web-technologies/tailwind-css/tailwind-css-learning-material-01.html) |
| ⭐ | **Node.js入門** | 全12章 | 3人日 | [nodejs-beginner/](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/nodejs-beginner/nodejs-beginner-learning-material-01.html) |

#### JavaScript入門 学習ガイド内容

1. プログラミングとJavaScriptを知ろう
2. 開発環境を準備しよう
3. はじめてのプログラムを書こう
4. 変数で情報を記憶しよう
5. 条件によって処理を変えよう（if文）
6. 同じ処理を繰り返そう（for文・while文）
7. 処理をまとめよう（関数の基礎）
8. 複数のデータを扱おう（配列とオブジェクト）
9. Webページを動かそう（DOM操作の基礎）
10. ユーザーの操作に反応しよう（イベント処理）
11. 時間差で処理しよう（非同期処理入門）
12. ToDoアプリを作ろう（総合演習）

#### TypeScript 学習ガイド内容

1. プログラミングとTypeScriptの世界へようこそ
2. 開発環境を整えよう
3. はじめてのTypeScriptプログラム
4. 変数と型：情報に名前と種類をつけよう
5. 基本的な型を使いこなそう
6. 条件分岐：場合に応じて処理を変えよう
7. 繰り返し処理：同じことを効率的にやろう
8. 関数：処理をパッケージ化しよう
9. 配列とタプル：複数のデータを扱おう
10. オブジェクトとインターフェース：データを構造化しよう
11. クラス：設計図から実体を作ろう
12. 型の応用：ユニオン型と型ガード
13. ジェネリクス：汎用的な型を作ろう
14. 非同期処理：時間のかかる処理を扱おう
15. 実践：タスク管理アプリを作ろう

#### React 学習ガイド内容

1. React入門 - なぜReactを学ぶのか
2. JSXとTypeScriptでのReact開発
3. 関数コンポーネントとProps - データフロー設計
4. useState - 状態管理の基礎
5. useEffect - 副作用とライフサイクル
6. イベント処理とフォーム - インタラクティブUI
7. useReducer と Context API - 高度な状態管理
8. カスタムフック - ロジックの再利用
9. パフォーマンス最適化 - メモ化とコード分割
10. React Router - ルーティングとナビゲーション
11. データフェッチングと状態同期
12. テストとデプロイメント

#### Next.js 学習ガイド内容

1. Next.jsとは？フレームワークの全体像を理解しよう
2. ファイルベースルーティングを使いこなそう
3. サーバーコンポーネントとクライアントコンポーネント
4. データフェッチングとキャッシュ戦略
5. API Routesでバックエンド開発
6. 静的生成（SSG）と増分静的再生成（ISR）
7. Server Actionsでフォーム処理
8. 画像とフォントの最適化
9. 認証とセッション管理
10. 国際化（i18n）対応
11. パフォーマンス最適化とSEO
12. テスト戦略とデバッグ
13. データベース統合とORM
14. デプロイメントとCI/CD
15. 実践プロジェクト：ブログプラットフォーム構築

#### Tailwind CSS 学習ガイド内容

1. Tailwind CSSとは - 新しいスタイリング手法の理解
2. 基本的なスタイリング - テキストと色の装飾
3. スペーシングとサイジング - 余白と大きさの調整
4. ボーダーと装飾 - 要素の見た目を整える
5. Flexboxレイアウト - 柔軟な配置の実現
6. Gridレイアウト - 格子状の配置を簡単に
7. レスポンシブデザイン - 画面サイズに応じた調整
8. ホバーとフォーカス - インタラクティブな要素
9. コンポーネントの作成 - よく使うUIパーツ
10. 実践プロジェクト - ランディングページの作成

#### Node.js入門 学習ガイド内容

※ このチュートリアルではバックエンドにFastAPI（Python）を使用するため、Node.jsの深い理解は必須ではありません。Next.jsの実行環境として必要な基礎知識程度で十分です。

1. Node.jsとは何か
2. Node.js環境のセットアップ
3. はじめてのNode.jsプログラム
4. モジュールシステムを理解しよう
5. 組み込みモジュールを活用しよう
6. npmとパッケージ管理
7. 非同期処理をマスターしよう
8. ファイル操作をマスターしよう
9. HTTPサーバーを作ってみよう
10. Expressフレームワーク入門
11. REST APIサーバーを構築しよう
12. タスク管理APIを作ろう（総合演習）

---

### インフラ系（Docker/環境構築をもっと理解したい場合）

| 優先度 | ガイド | 章数 | 学習期間目安 | URL |
|--------|--------|------|-------------|-----|
| ⭐⭐⭐ | **Docker入門** | 全10章 | 2.5人日 | [docker/](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/docker/docker-learning-material-01.html) |

#### Docker入門 学習ガイド内容

1. Dockerとは何か - コンテナ技術をやさしく理解する
2. Rancher Desktopのインストールと初期設定
3. はじめてのDockerコマンド - Hello Worldを動かそう
4. Dockerイメージを理解しよう - コンテナの設計図
5. Webサーバーを動かしてみよう - Nginxで学ぶポート設定
6. Dockerfileを書いてみよう - オリジナルイメージの作成
7. データを保存しよう - ボリュームの基本
8. Docker Composeで複数のコンテナを管理しよう
9. 実践プロジェクト - シンプルなWebアプリをコンテナ化しよう
10. トラブルシューティングと次のステップ

---

## Step 3: 卒業課題 - 注文管理システム

チュートリアルとガイドで学んだ知識を応用して、より実践的なシステムを開発する卒業課題です。

### 課題概要

飲食店向けの注文管理システムを一から開発します。Todoアプリからのステップアップとして、以下を習得できます：

| 項目 | Todoアプリ | 注文管理システム |
|------|-----------|-----------------|
| テーブル数 | 1テーブル | 4テーブル |
| リレーション | なし | 外部キー、1対多 |
| データ操作 | 単純なCRUD | JOINを使った複合クエリ |
| ステータス管理 | 完了/未完了 | 複数ステータス遷移 |
| 集計機能 | なし | 売上集計、ダッシュボード |

### 実践課題（ステップバイステップ教材）

**[注文管理システム実践課題](https://fcircle-biz.github.io/tech_docs/assignment/nextjs-order-management/nextjs-order-management-assignment-01.html)** ⭐おすすめ

仕様書とモック画面を参考に、自力でシステムを構築する実践形式の課題です。各ステップで必要な機能を段階的に実装していきます。

| Step | 内容 | 習得できること |
|------|------|--------------|
| Step 1 | 環境構築・プロジェクトセットアップ | Docker, Next.js, FastAPI の開発環境構築 |
| Step 2 | データベース設計・構築 | 複数テーブル設計、外部キー、リレーション |
| Step 3 | 顧客管理機能 | 基本的なCRUD操作の実装パターン |
| Step 4 | 商品管理機能 | カテゴリ分類、価格管理、画像対応 |
| Step 5 | 注文管理機能 | 複合データ操作、ステータス遷移 |
| Step 6 | ダッシュボード | 集計クエリ、グラフ表示、データ可視化 |

**推奨所要時間**: 約110〜170時間（約14〜21人日）

### 仕様書（リファレンス）

実装の参考資料として、以下の仕様書も用意しています：

| ドキュメント | 内容 |
|-------------|------|
| [README.md](https://fcircle-biz.github.io/tech_docs/specs/order-management-v1/docs/) | システム仕様書（機能、API設計） |
| [database.md](https://fcircle-biz.github.io/tech_docs/specs/order-management-v1/docs/database.md) | データベース設計（ER図、SQL） |
| [implementation-guide.md](https://fcircle-biz.github.io/tech_docs/specs/order-management-v1/docs/implementation-guide.md) | 実装ガイド（ステップバイステップ） |

### 取り組み方

**実践課題で学ぶ場合（推奨）**:
1. 実践課題のStep 1から順番に進める
2. 各Stepの説明とモック画面を参考に実装
3. つまずいたら仕様書を参照
4. 動作確認しながら次のStepへ

**仕様書だけで挑戦する場合**:
1. **仕様を理解する**: README.md を読んで機能要件を把握
2. **データベースを設計**: database.md を参考にテーブル設計を理解
3. **実装する**: implementation-guide.md に沿ってコードを書く
4. **動作確認**: 各機能をブラウザで確認しながら進める

---

## 関連リンク

### チュートリアル
- [Next.js + FastAPI + PostgreSQL Todoアプリチュートリアル](https://fcircle-biz.github.io/tech_docs/tutorial/javascript-ecosystem/nextjs-fastapi-todo/nextjs-fastapi-todo-tutorial-01.html)

### 学習ガイド
- [Webアプリ開発入門学習ガイド](https://fcircle-biz.github.io/tech_docs/guide/web-technologies/webapp-intro/) ★共通基礎
- [Python入門学習ガイド](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/python-beginner/)
- [JavaScript入門学習ガイド](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/javascript-beginner/)
- [Node.js入門学習ガイド](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/nodejs-beginner/)
- [TypeScript学習ガイド](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/typescript/)
- [React学習ガイド](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/react/)
- [Next.js学習ガイド](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/nextjs/)
- [Tailwind CSS学習ガイド](https://fcircle-biz.github.io/tech_docs/guide/web-technologies/tailwind-css/)
- [FastAPI学習ガイド](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/fastapi/)
- [SQL入門学習ガイド](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/sql/)
- [SQLModel学習ガイド](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/sqlmodel/)
- [Docker入門学習ガイド](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/docker/)

### 仕様書
- [Todo App v1 仕様書](https://fcircle-biz.github.io/tech_docs/specs/todo-app-v1/)
- [注文管理システム 仕様書](https://fcircle-biz.github.io/tech_docs/specs/order-management-v1/docs/)

### 実践課題
- [注文管理システム実践課題](https://fcircle-biz.github.io/tech_docs/assignment/nextjs-order-management/nextjs-order-management-assignment-01.html)
