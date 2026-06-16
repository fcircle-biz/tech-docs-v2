# Struts 1.x 実践チュートリアル

Apache Struts 1.x フレームワークを使用したWebアプリケーション開発の実践的なチュートリアルです。レガシーシステムの保守・理解に必要な技術習得を目的としています。

## チュートリアル概要

### 学習目標
- MVCアーキテクチャパターンによるWebアプリケーション設計
- Struts 1.x フレームワークの設定とコンポーネント実装
- JDBCを使用したデータベース連携とDAO設計パターン
- 企業レベルのWebアプリケーション開発手法
- ブラウザでの動作確認とテスト手法

### 対象読者
- 新卒・中途入社の研修生
- Java SEの基本文法を理解している開発者
- レガシーシステムの保守業務に従事する予定の技術者
- MVCパターンの実装経験を積みたい開発者
- Web技術の基礎を体系的に学習したい技術者

### 特徴
- 実際の業務で使用される開発手法に基づいた構成
- エンタープライズ開発で重要なDAOパターンとトランザクション管理
- 実践的なエラーハンドリングとデバッグ手法

## 前提条件・環境要件

### 必要なソフトウェア
- **JDK**: 1.8 以上（推奨: JDK 8）
- **IDE**: Eclipse IDE for Enterprise Java Developers または IntelliJ IDEA
- **アプリケーションサーバー**: Apache Tomcat 8.5 または 9.0
- **データベース**: PostgreSQL 12+ または H2 Database
- **ビルドツール**: 手動ビルド（Eclipseビルド機能使用）

### 推奨する基礎知識
- Java SE の基本文法
- JSP と Servlet の基本概念
- HTML、CSS、JavaScript の基礎
- SQL の基本的なCRUD操作
- MVC アーキテクチャパターンの理解

## チュートリアル構成

### Step 1: [環境構築とプロジェクト作成](https://fcircle-biz.github.io/tech_docs/tutorial/java-ecosystem/struts1/step1-environment-setup.html)
- 開発環境の構築（Pleiades Eclipse、Tomcat設定）
- Struts 1.x プロジェクトの初期化
- 基本的なMVCコンポーネントの実装
- 日本語対応のための文字エンコーディング設定
- アプリケーションの動作確認

**所要時間**: 1.5時間

### Step 2: [Struts設定とMVCアーキテクチャ](https://fcircle-biz.github.io/tech_docs/tutorial/java-ecosystem/struts1/step2-struts-config-mvc.html)
- struts-config.xmlによる設定管理
- ActionクラスとActionFormの実装
- JSPとタグライブラリの活用
- リクエスト処理フローの理解
- フォワード設定とナビゲーション制御

**所要時間**: 2.5時間

### Step 3: [データベース接続とDAO設計](https://fcircle-biz.github.io/tech_docs/tutorial/java-ecosystem/struts1/step3-database-dao.html)
- JDBCによるデータベース接続管理
- DAOパターンの設計と実装
- JDBCドライバーの手動設定
- SQLインジェクション対策
- トランザクション制御

**所要時間**: 2.5時間

### Step 4: [CRUD機能の実装 - 作成・参照](https://fcircle-biz.github.io/tech_docs/tutorial/java-ecosystem/struts1/step4-user-create-read.html)
- エンティティクラスの設計
- ユーザー登録機能の実装
- データ検索・一覧表示機能
- サーバーサイドバリデーション
- 例外処理とエラーメッセージ管理

**所要時間**: 3時間

### Step 5: [CRUD機能の拡張 - 更新・削除](https://fcircle-biz.github.io/tech_docs/tutorial/java-ecosystem/struts1/step5-user-update-delete.html)
- データ更新機能の実装
- 論理削除・物理削除の実装
- 楽観的排他制御
- ユーザビリティの向上
- データ整合性の確保

**所要時間**: 3時間

### Step 6: [ブラウザ動作確認](https://fcircle-biz.github.io/tech_docs/tutorial/java-ecosystem/struts1/step6-testing-debug.html)
- ブラウザでの動作確認手順
- 各機能のテスト手法
- バリデーション機能の確認
- CRUD操作の動作検証
- エラーケースの確認

**所要時間**: 1.5時間

## 作成するアプリケーション概要

### アプリケーション名: Simple User Management System

#### 主な機能
1. **ユーザー登録** - 新規ユーザーの情報を登録
2. **ユーザー一覧** - 登録されたユーザーの一覧表示
3. **ユーザー詳細** - 特定ユーザーの詳細情報表示
4. **ユーザー編集** - 既存ユーザー情報の更新
5. **ユーザー削除** - ユーザー情報の削除

#### データベース設計
```sql
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL,
    full_name VARCHAR(100) NOT NULL,
    birth_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### 技術スタック
- **フレームワーク**: Apache Struts 1.3.x
- **プレゼンテーション層**: JSP + JSTL + Strutsタグライブラリ
- **データベース**: H2 Database (開発), PostgreSQL (本番想定)
- **ビルド管理**: 手動ビルド（Eclipse統合環境）
- **アプリケーションサーバー**: Apache Tomcat 9.0
- **テスト手法**: ブラウザ動作確認

## 総所要時間
**約14時間**（個人の習熟度により変動）

## 参考資料とリンク

### 公式ドキュメント
- [Apache Struts 1.x ユーザーガイド](https://struts.apache.org/1.3.10/userGuide/index.html)
- [Struts 1.x API ドキュメント](https://struts.apache.org/1.3.10/api/index.html)

### 関連技術
- [JSP & Servlet チュートリアル](https://fcircle-biz.github.io/tech_docs/tutorial/jsp-servlet/README.html)
- [Eclipse IDE開発環境構築](https://fcircle-biz.github.io/tech_docs/tutorial/eclipse/README.html)
- [PostgreSQL データベース基礎](https://fcircle-biz.github.io/tech_docs/tutorial/postgresql/README.html)

### 学習ガイドライン
- [Struts 1.x 学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/java-ecosystem/struts1/README.html)
- [JDBC 学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/java-ecosystem/jdbc/README.html)
- [JSP 学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/java-ecosystem/jsp/README.html)

## チュートリアルの進め方

1. **環境準備**: 開発環境の構築と確認
2. **段階実装**: 各ステップを順次実装し動作確認
3. **コードレビュー**: 実装したコードの品質確認
4. **動作確認**: ブラウザでの機能テストの実施
5. **成果確認**: 各章の課題と振り返り

## 注意事項

- Struts 1.xは2013年にEnd of Life（EOL）を迎えており、セキュリティアップデートは提供されません
- 新規プロジェクトではSpring MVC、Spring Bootなどの現行フレームワークを使用してください
- 本チュートリアルはレガシーシステムの保守・移行作業のための学習が主目的です
- 実際の業務では適切なセキュリティ対策とコードレビュープロセスを実施してください

## サポート

技術的な質問や不具合報告は[Issues](https://github.com/fcircle-biz/tech_docs/issues)にて受け付けています。

---

[Step 1: 環境構築とプロジェクト作成](https://fcircle-biz.github.io/tech_docs/tutorial/java-ecosystem/struts1/step1-environment-setup.html)