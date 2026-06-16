# PHP 実践チュートリアル

PHP言語を使用したWebアプリケーション開発の実践的なチュートリアルです。フレームワークを使わない生のPHPによる開発手法を学び、Web開発の基礎を固めることを目的としています。

## チュートリアル概要

### 学習目標
- PHPの基本文法と構文の習得
- HTMLフォームとPHPの連携によるデータ処理
- PostgreSQLを使用したデータベース連携とCRUD操作
- セキュリティを意識した開発手法（SQLインジェクション対策等）
- ブラウザでの動作確認とテスト手法

### 対象読者
- プログラミング初心者・超初心者
- HTMLの基本を理解している方
- Webアプリケーション開発を学びたい方
- PHPの基本文法を学習したい方
- データベース連携Webアプリを作りたい方

### 特徴
- **初心者向けに最適化**: 複雑な機能を排除し、基本的な機能に集中
- **段階的学習**: 各章でPHP言語理解度クイズによる習熟度確認
- **実践重視**: 実際に動作するユーザー管理システムを構築
- **セキュリティ基礎**: SQLインジェクション・XSS対策の基本を学習

## 前提条件・環境要件

### 必要なソフトウェア
- **Webサーバー**: Apache HTTP Server（XAMPPに含まれる）
- **PHP**: PHP 8.0+ （推奨: PHP 8.1以上）
- **データベース**: PostgreSQL 12+
- **開発環境**: Eclipse IDE for PHP Developers
- **統合環境**: XAMPP（開発環境として推奨）

### 推奨する基礎知識
- HTML の基本タグと構造
- HTTP の基本概念（GET、POST リクエスト）
- 基本的なコンピュータ操作（ファイル作成・編集等）

## チュートリアル構成

### Step 1: [環境構築とPHP基礎](https://fcircle-biz.github.io/tech_docs/tutorial/php-ecosystem/php/step1-environment-setup.html)
- Eclipse IDE for PHP Developersの設定
- XAMPPとPostgreSQLの環境構築
- PHPの基本構文（変数、出力、配列）
- プロジェクトディレクトリ構成の作成

**所要時間**: 1.5時間  
**習得内容**: PHP基本構文、開始タグ、コメント、変数宣言

### Step 2: [データベース設計と接続](https://fcircle-biz.github.io/tech_docs/tutorial/php-ecosystem/php/step2-database-connection.html)
- PostgreSQLデータベースの作成
- PHPからのデータベース接続（PDO使用）
- UserDAOクラスの基本実装
- 例外処理とエラーハンドリング

**所要時間**: 2時間  
**習得内容**: PDOクラス、try-catch文、クラス定義、require_once

### Step 3: [ユーザー登録機能の実装](https://fcircle-biz.github.io/tech_docs/tutorial/php-ecosystem/php/step3-user-registration.html)
- ユーザー登録フォームの作成
- POSTデータの処理とバリデーション
- データベースへのINSERT処理
- フォーム処理の基本パターン

**所要時間**: 2時間  
**習得内容**: $_POST、trim()、if文、連想配列、header()、htmlspecialchars()

### Step 4: [ユーザー一覧・詳細表示機能](https://fcircle-biz.github.io/tech_docs/tutorial/php-ecosystem/php/step4-user-list-detail.html)
- データベースからのデータ取得（SELECT）
- 一覧画面の基本実装
- 詳細画面の実装
- 基本的な検索機能

**所要時間**: 2時間  
**習得内容**: $_GET、foreach文、アロー演算子、型キャスト、empty()、count()

### Step 5: [ユーザー情報更新・削除機能](https://fcircle-biz.github.io/tech_docs/tutorial/php-ecosystem/php/step5-user-update-delete.html)
- UserDAOクラスの拡張（update/deleteメソッド）
- 編集フォームの実装
- UPDATE・DELETE処理の実装
- 確認ダイアログと安全な削除処理

**所要時間**: 2.5時間  
**習得内容**: $_SERVER、条件分岐、論理演算子、PDOメソッド、オブジェクト操作

### Step 6: [ブラウザでの動作確認](https://fcircle-biz.github.io/tech_docs/tutorial/php-ecosystem/php/step6-testing-debug.html)
- ブラウザでの動作確認手順
- 各機能のテスト方法
- 基本的なエラー対処法
- デバッグの基本技術

**所要時間**: 1時間  
**習得内容**: error_log()、isset()とempty()の違い、var_dump()、デバッグ関数

## 作成するアプリケーション概要

### アプリケーション名: Simple User Management System

#### 主な機能
1. **ユーザー登録** - 新規ユーザーの情報を登録
2. **ユーザー一覧** - 登録されたユーザーの一覧表示・検索
3. **ユーザー詳細** - 特定ユーザーの詳細情報表示
4. **ユーザー編集** - 既存ユーザー情報の更新
5. **ユーザー削除** - ユーザー情報の安全な削除

#### データベース設計
```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL,
    full_name VARCHAR(100) NOT NULL,
    birth_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### 技術スタック
- **言語**: PHP 8.1+（生PHP、フレームワーク不使用）
- **データベース**: PostgreSQL 12+
- **フロントエンド**: HTML5 + Bootstrap 5
- **Webサーバー**: Apache HTTP Server（XAMPP）
- **データベース接続**: PDO（PHP Data Objects）
- **セキュリティ**: プリペアドステートメント、HTMLエスケープ

#### ディレクトリ構成
```
user-management
│  check_extensions.php
│  DatabaseTest.php
│  form_test.php
│  index.php
│
├─config
│      database.php
│
├─includes
│      UserDAO.php
│      UserValidator.php
│
└─users
        create.php
        delete.php
        detail.php
        edit.php
        list.php
```

## 総所要時間
**約11時間**（個人の習熟度により変動）

## 学習の特徴

### PHP言語理解度クイズ
各章の末尾にPHP言語の基本文法や関数に特化したクイズを配置：
- **Step 1**: PHP基本構文（タグ、コメント、変数、出力関数）
- **Step 2**: クラスとデータベース基礎（PDO、try-catch、メソッド）
- **Step 3**: フォーム処理基礎（$_POST、trim()、条件分岐）
- **Step 4**: 配列とループ処理（$_GET、foreach、型変換）
- **Step 5**: 条件分岐と論理演算（$_SERVER、if-else、論理演算子）
- **Step 6**: デバッグと関数理解（error_log()、var_dump()、isset/empty）

### 初心者向け最適化
- **複雑な機能を除外**: アバター表示、年齢計算、高度な検索機能などを排除
- **基本機能に集中**: CRUD操作の基本パターンに特化
- **段階的な理解**: 各章で前章の復習を含む構成
- **実践的な学習**: 実際に動作するシステムを段階的に構築

## 参考資料とリンク

### 公式ドキュメント
- [PHP公式マニュアル](https://www.php.net/manual/ja/)
- [PostgreSQL公式ドキュメント](https://www.postgresql.jp/document/)

### 関連技術
- [Bootstrap 5 公式ドキュメント](https://getbootstrap.jp/)
- [HTML5 & CSS3 基礎リファレンス](https://developer.mozilla.org/ja/docs/Web)

## チュートリアルの進め方

1. **環境準備**: XAMPP、PostgreSQL、Eclipse IDEの設定
2. **段階実装**: 各ステップを順次実装し、必ず動作確認
3. **クイズ挑戦**: 各章のPHP言語理解度クイズで習熟度確認
4. **動作テスト**: ブラウザでの機能テストの実施
5. **コード理解**: 実装したコードの動作原理を理解

## セキュリティに関する注意事項

- **SQLインジェクション対策**: PDOのプリペアドステートメントを使用
- **XSS対策**: htmlspecialchars()による出力エスケープ
- **入力値検証**: サーバーサイドでの適切な入力値チェック
- **エラーハンドリング**: 適切な例外処理とエラーメッセージ

## 学習のポイント

### 初心者向けアドバイス
- **動作確認を頻繁に**: 各機能実装後は必ずブラウザで確認
- **エラーを恐れない**: エラーメッセージから学習する姿勢
- **コードを理解**: コピー&ペーストでなく、動作原理を理解
- **小さく始める**: 一度に多くを実装せず、段階的に進める

### 発展的な学習
このチュートリアル完了後の推奨学習：
- **フレームワーク**: Laravel、CodeIgniterの学習
- **オブジェクト指向**: クラス設計とデザインパターン
- **API開発**: RESTful APIとJSON処理
- **セキュリティ**: より高度なセキュリティ対策
- **パフォーマンス**: クエリ最適化とキャッシュ

## サポート

技術的な質問や不具合報告は[Issues](https://github.com/fcircle-biz/tech_docs/issues)にて受け付けています。

---

[Step 1: 環境構築とPHP基礎](https://fcircle-biz.github.io/tech_docs/tutorial/php-ecosystem/php/step1-environment-setup.html)