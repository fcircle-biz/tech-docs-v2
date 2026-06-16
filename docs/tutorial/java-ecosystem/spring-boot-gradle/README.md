# Spring Boot + Gradle 実践チュートリアル

GradleビルドツールとSpring Bootフレームワークを使用した、モダンなJava Webアプリケーション開発を学ぶ実践的なチュートリアルです。Spring MVC、Spring Data JPA、PostgreSQL（Docker環境）を組み合わせて、実用的なユーザー管理システムを段階的に構築しながら、Spring Bootエコシステムの基礎を習得します。

## チュートリアル概要

### 学習目標
- Gradleを使用したSpring Bootプロジェクトの構築と管理
- Spring MVCによるWebアプリケーションの開発
- Spring Data JPAを使用したデータベースアクセスの実装
- Docker環境でのPostgreSQL構築と接続
- アプリケーションの設定管理とプロファイル機能の活用
- 基本的なCRUD操作を含むユーザー管理機能の実装
- Thymeleafテンプレートエンジンによる動的HTML生成
- 基本的なフォームバリデーションの実装

### 対象読者
- Javaの基本文法を理解している方（プログラミング初心者歓迎）
- Spring Frameworkを初めて学ぶ方
- Webアプリケーション開発に興味がある方
- Dockerの基本操作ができる方
- モダンなJava開発手法を学びたい方

### 特徴
- **段階的構築**: 最小構成から始めて機能を追加していく構成
- **実践重視**: 実際に動作するユーザー管理システムを構築
- **モダンな技術スタック**: Spring Boot 3.x、Java 17、Docker環境
- **自動設定活用**: Spring Bootの自動設定機能を最大限活用
- **ベストプラクティス**: Spring公式推奨の実装パターンを採用
- **開発効率重視**: Spring Boot DevToolsによるホットリロード対応

## 前提条件・環境要件

### 必要なソフトウェア
- **JDK**: Java Development Kit 17以上（推奨: JDK 17 LTS）
- **IDE**: Visual Studio Code（推奨）
  - Extension Pack for Java
  - Spring Boot Extension Pack
  - Docker Extension
- **ビルドツール**: Gradle 7.6以上（Gradle Wrapperを使用）
- **コンテナ**: Docker Desktop（最新版）
- **バージョン管理**: Git

### 推奨する基礎知識
- Javaの基本文法（クラス、メソッド、変数）
- HTMLの基本知識
- SQLの基本操作（SELECT、INSERT、UPDATE、DELETE）
- コマンドラインの基本操作

## チュートリアル構成

### Step 1: [開発環境構築とプロジェクト作成](https://fcircle-biz.github.io/tech_docs/tutorial/java-ecosystem/spring-boot-gradle/step1-environment-setup.html)
- JDK 17のインストールと環境変数設定
- Visual Studio Codeのセットアップと必要な拡張機能
- Docker Desktopのインストールと動作確認
- Spring Initializrを使用したプロジェクト作成
- Gradleプロジェクト構造の理解
- Hello Worldアプリケーションの作成と実行

**所要時間**: 1.5時間  
**習得内容**: Spring Boot環境構築、Gradleビルド、プロジェクト構造理解

### Step 2: [DockerでPostgreSQL環境構築](https://fcircle-biz.github.io/tech_docs/tutorial/java-ecosystem/spring-boot-gradle/step2-docker-postgresql.html)
- Docker Composeファイルの作成
- PostgreSQLコンテナの起動と管理
- pgAdminコンテナの設定と接続
- データベースとスキーマの作成
- 永続化ボリュームの設定
- Spring Bootからの接続設定

**所要時間**: 2時間  
**習得内容**: Docker Compose、PostgreSQL設定、データベース接続

### Step 3: [Spring MVCとWebコントローラー](https://fcircle-biz.github.io/tech_docs/tutorial/java-ecosystem/spring-boot-gradle/step3-spring-mvc-web.html)
- Spring MVCアーキテクチャの理解
- @Controllerアノテーションの使用
- リクエストマッピングの基本
- HTMLページの表示
- フォームデータの受け取り
- 基本的な例外ハンドリング

**所要時間**: 2時間  
**習得内容**: Webコントローラー実装、画面表示、フォーム処理

### Step 4: [Spring Data JPAとエンティティ設計](https://fcircle-biz.github.io/tech_docs/tutorial/java-ecosystem/spring-boot-gradle/step4-spring-data-jpa.html)
- JPAエンティティの作成（User）
- アノテーションによるマッピング設定
- Spring Data JPAリポジトリの作成
- 自動DDL生成と初期データ投入
- カスタムクエリメソッドの定義
- ページネーションとソート機能

**所要時間**: 3時間  
**習得内容**: JPA基礎、エンティティ設計、リポジトリパターン

### Step 5: [ユーザー登録機能の実装](https://fcircle-biz.github.io/tech_docs/tutorial/java-ecosystem/spring-boot-gradle/step5-user-registration.html)
- ユーザー登録フォームの作成
- 基本的なバリデーションの使用
- サービス層の実装
- フォーム送信処理の実装
- エラーメッセージの表示
- 基本的なテストの作成

**所要時間**: 2.5時間  
**習得内容**: フォーム処理、基本バリデーション、サービス層

### Step 6: [Thymeleafによる画面実装](https://fcircle-biz.github.io/tech_docs/tutorial/java-ecosystem/spring-boot-gradle/step6-thymeleaf-ui.html)
- Thymeleafテンプレートエンジンの設定
- レイアウト共通化（ヘッダー、フッター）
- ユーザー登録フォームの作成
- フォームバリデーションとエラー表示
- CSSフレームワーク（Bootstrap）の統合
- 静的リソースの管理

**所要時間**: 2.5時間  
**習得内容**: Thymeleaf基礎、フォーム処理、画面レイアウト

### Step 7: [ユーザー一覧・詳細表示機能](https://fcircle-biz.github.io/tech_docs/tutorial/java-ecosystem/spring-boot-gradle/step7-user-list-detail.html)
- ユーザー一覧画面の実装
- ページネーション機能の追加
- ユーザー詳細画面の作成
- 検索機能の実装
- ソート機能の追加
- レスポンシブデザインの適用

**所要時間**: 3時間  
**習得内容**: データ表示、ページング、検索機能、UI/UX改善

### Step 8: [ユーザー更新・削除機能](https://fcircle-biz.github.io/tech_docs/tutorial/java-ecosystem/spring-boot-gradle/step8-user-update-delete.html)
- ユーザー編集フォームの作成
- 更新処理の実装（楽観的ロック）
- 削除確認ダイアログの実装
- トランザクション管理
- 監査情報（作成日時、更新日時）の自動設定
- ソフトデリート機能の実装

**所要時間**: 3時間  
**習得内容**: CRUD完成、トランザクション、楽観的ロック、監査

### Step 9: [セキュリティとエラーハンドリング](https://fcircle-biz.github.io/tech_docs/tutorial/java-ecosystem/spring-boot-gradle/step9-security-error.html)
- 基本的な入力値検証
- SQLインジェクション対策の基礎
- 簡単なエラーページの作成
- 基本的なログ出力
- セキュリティの基本概念

**所要時間**: 2時間  
**習得内容**: セキュリティ基礎、例外処理、ロギング

### Step 10: [デプロイメントと運用設定](https://fcircle-biz.github.io/tech_docs/tutorial/java-ecosystem/spring-boot-gradle/step10-deployment.html)
- アプリケーションプロパティの外部化
- プロファイル別設定（開発/本番）
- 実行可能JARの作成
- Dockerイメージの作成
- ヘルスチェックエンドポイント
- アプリケーションメトリクス

**所要時間**: 2時間  
**習得内容**: デプロイメント、環境別設定、コンテナ化

## 作成するアプリケーション

### システム概要
シンプルなユーザー管理システム
- ユーザーの登録・一覧表示・詳細表示・編集・削除
- Webブラウザで操作できるインターフェース
- PostgreSQLデータベースでのデータ永続化

### 主な機能
1. **ユーザー管理**
   - ユーザー登録（名前、メールアドレス、パスワード）
   - ユーザー一覧表示（ページネーション付き）
   - ユーザー詳細表示
   - ユーザー情報編集
   - ユーザー削除

2. **技術的特徴**
   - レスポンシブWebデザイン
   - 基本的なバリデーション機能
   - エラーハンドリング
   - トランザクション管理

### 使用技術スタック
- **バックエンド**: Spring Boot 3.2.x, Java 17
- **ビルドツール**: Gradle 7.6+
- **データベース**: PostgreSQL 15（Docker）
- **ORM**: Spring Data JPA (Hibernate)
- **テンプレートエンジン**: Thymeleaf
- **CSSフレームワーク**: Bootstrap 5
- **開発ツール**: Spring Boot DevTools

## 学習のポイント

### Spring Bootの利点
- **自動設定**: 複雑な設定を自動化し、すぐに開発を開始可能
- **組み込みサーバー**: Tomcatを内蔵し、JARファイルで実行可能
- **依存関係管理**: Starter依存関係による簡単な機能追加
- **本番対応**: メトリクス、ヘルスチェック、外部設定対応

### ベストプラクティス
- レイヤードアーキテクチャの採用
- リポジトリパターンによるデータアクセス
- 適切な例外処理とロギング
- 基本的なテストの作成

## 次のステップ

このチュートリアル完了後の学習推奨事項：

1. **Spring Security**: 認証・認可機能の追加
2. **Spring Boot Actuator**: 運用監視機能の活用
3. **マイクロサービス**: Spring Cloudでの分散システム構築
4. **リアクティブプログラミング**: Spring WebFluxの学習
5. **CI/CD**: GitHub ActionsやJenkinsでの自動化

## リソース・参考資料

- [Spring Boot公式ドキュメント](https://spring.io/projects/spring-boot)
- [Spring Guides](https://spring.io/guides)
- [Gradle公式ドキュメント](https://docs.gradle.org/)
- [Docker公式ドキュメント](https://docs.docker.com/)
- [PostgreSQL公式ドキュメント](https://www.postgresql.org/docs/)

## サポート

質問や問題が発生した場合は、各ステップのトラブルシューティングセクションを参照してください。また、Spring コミュニティフォーラムやStack Overflowも活用できます。