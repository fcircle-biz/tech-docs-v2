# JSP/Servlet/JDBC 実践チュートリアル

Eclipse IDEを使用したJavaのWebアプリケーション開発の基礎技術であるJSP（JavaServer Pages）、Servlet、JDBC（Java Database Connectivity）を学ぶ実践的なチュートリアルです。MVCパターンに基づいたWebアプリケーション開発の基本を学び、PostgreSQLデータベースとの連携方法を習得することを目的としています。

## チュートリアル概要

### 学習目標
- Eclipse IDEを使用したJava Webプロジェクトの作成と管理
- JSPによる動的なHTMLページの生成方法を習得
- Servletによるリクエスト処理とレスポンス生成の理解
- JDBCを使用したPostgreSQLデータベースとの連携
- MVCアーキテクチャパターンの基本的な実装
- 基本的なCRUD操作（作成・読取・更新・削除）の実装

### 対象読者
- Javaの基本文法を理解している方
- HTMLの基本を理解している方
- Webアプリケーション開発を初めて学ぶ方
- Eclipse IDEの基本操作ができる方
- データベース連携の基礎を学びたい方

### 特徴
- **Eclipse専用**: Eclipse IDEの標準機能のみを使用（ビルドツール不要）
- **シンプルな構成**: 複雑な設定を避け、基本機能の習得に集中
- **段階的学習**: 環境構築から始まり、徐々に機能を追加していく構成
- **実践重視**: 実際に動作するシンプルなユーザー管理システムを構築
- **明確な役割分担**: JSP（ビュー）、Servlet（コントローラー）、JDBC（データアクセス）の役割を明確に分離

## 前提条件・環境要件

### 必要なソフトウェア
- **JDK**: Java Development Kit 11以上（推奨: JDK 17）
- **IDE**: Eclipse IDE for Enterprise Java and Web Developers（最新版）
- **アプリケーションサーバー**: Apache Tomcat 9.0以上（Eclipse内で設定）
- **データベース**: PostgreSQL 12以上
- **データベースクライアント**: PgAdmin 4

### 推奨する基礎知識
- Javaの基本文法（変数、メソッド、クラス、例外処理）
- HTMLの基本タグと構造
- SQLの基本操作（SELECT、INSERT、UPDATE、DELETE）
- Eclipseの基本操作（プロジェクト作成、ファイル編集、実行）

## チュートリアル構成

### Step 1: [開発環境の構築](https://fcircle-biz.github.io/tech_docs/tutorial/java-ecosystem/jsp-servlet-jdbc/step1-environment-setup.html)
- JDKとEclipse IDEのインストール
- Eclipse内でのApache Tomcatサーバーの設定
- PostgreSQLのインストールと初期設定
- PgAdminのインストールと接続設定
- Dynamic Web Projectの作成
- 動作確認用のHello Worldアプリケーション

**所要時間**: 1.5時間  
**習得内容**: 開発環境構築、Dynamic Web Project作成、Tomcatサーバー設定

### Step 2: [MVCアーキテクチャとプロジェクト構成](https://fcircle-biz.github.io/tech_docs/tutorial/java-ecosystem/jsp-servlet-jdbc/step2-mvc-architecture.html)
- MVCパターンの基本概念
- Dynamic Web Projectのディレクトリ構造
- web.xmlの基本設定
- 最初のServletとJSPの作成
- リクエストとレスポンスの流れ

**所要時間**: 2時間  
**習得内容**: MVCパターン、Servlet基礎、JSP基礎、web.xml設定

### Step 3: [データベース設計とJDBC接続](https://fcircle-biz.github.io/tech_docs/tutorial/java-ecosystem/jsp-servlet-jdbc/step3-database-jdbc.html)
- PgAdminを使用したデータベース作成
- usersテーブルの設計と作成
- JDBCドライバーの配置と設定
- JDBCによるデータベース接続
- DAOパターンの実装

**所要時間**: 2時間  
**習得内容**: JDBC接続、PreparedStatement、DAOパターン、例外処理

### Step 4: [ユーザー登録機能の実装](https://fcircle-biz.github.io/tech_docs/tutorial/java-ecosystem/jsp-servlet-jdbc/step4-user-registration.html)
- ユーザー登録フォーム（JSP）の作成
- 登録処理用Servletの実装
- UserDAOのinsertメソッド実装
- フォームデータの受け取りと検証
- 登録完了画面の表示

**所要時間**: 2.5時間  
**習得内容**: フォーム処理、POSTリクエスト、データ挿入、リダイレクト

### Step 5: [ユーザー一覧・詳細表示機能](https://fcircle-biz.github.io/tech_docs/tutorial/java-ecosystem/jsp-servlet-jdbc/step5-user-list-detail.html)
- ユーザー一覧画面（JSP）の作成
- 一覧表示用Servletの実装
- UserDAOのfindAllメソッド実装
- ユーザー詳細画面の作成
- JSPでのスクリプトレット使用によるデータ表示

**所要時間**: 2.5時間  
**習得内容**: データ取得、リスト表示、スクリプトレット、GETパラメータ処理

### Step 6: [ユーザー更新・削除機能](https://fcircle-biz.github.io/tech_docs/tutorial/java-ecosystem/jsp-servlet-jdbc/step6-user-update-delete.html)
- ユーザー編集フォームの作成
- 更新処理用Servletの実装
- UserDAOのupdateメソッド実装
- 削除確認画面と削除処理
- エラーハンドリングの実装

**所要時間**: 3時間  
**習得内容**: データ更新、データ削除、トランザクション基礎、エラー処理

### Step 7: [検索機能とアプリケーションの仕上げ](https://fcircle-biz.github.io/tech_docs/tutorial/java-ecosystem/jsp-servlet-jdbc/step7-search-finalization.html)
- ユーザー検索機能の実装
- 共通レイアウトの作成
- エラーページの実装
- アプリケーション全体のテストと動作確認

**所要時間**: 1.5時間  
**習得内容**: LIKE検索、インクルード、エラーページ

## 作成するアプリケーション概要

### アプリケーション名: Simple User Management System

シンプルなユーザー管理システムを構築します。基本的なCRUD操作を通じて、JSP・Servlet・JDBCの連携方法を学習します。

### 主な機能
1. **ユーザー登録**: 新規ユーザーの登録
2. **ユーザー一覧**: 登録されたユーザーの一覧表示
3. **ユーザー詳細**: 特定ユーザーの詳細情報表示
4. **ユーザー編集**: ユーザー情報の更新
5. **ユーザー削除**: ユーザーの削除（確認画面付き）
6. **ユーザー検索**: ユーザー名での検索機能

### アーキテクチャ
```
Dynamic Web Project/
├── src/main/java/
│   ├── model/
│   │   ├── User.java         - ユーザーエンティティ
│   │   └── UserDAO.java      - データアクセスオブジェクト
│   ├── controller/
│   │   ├── UserListServlet.java   - 一覧表示制御
│   │   ├── UserFormServlet.java   - フォーム表示制御
│   │   ├── UserSaveServlet.java   - 登録・更新処理
│   │   └── UserDeleteServlet.java - 削除処理
│   └── util/
│       └── DatabaseUtil.java      - DB接続ユーティリティ
│
└── src/main/webapp/
    ├── WEB-INF/
    │   ├── web.xml              - デプロイメント記述子
    │   └── lib/                 - JARファイル配置場所
    │       └── postgresql-42.x.x.jar
    └── jsp/
        ├── user-list.jsp        - ユーザー一覧画面
        ├── user-form.jsp        - ユーザー登録・編集フォーム
        ├── user-detail.jsp      - ユーザー詳細画面
        └── user-confirm.jsp     - 削除確認画面
```

## 学習のポイント

### JSP（JavaServer Pages）
- HTMLの中にJavaコード（スクリプトレット）を埋め込む方法
- スクリプトレットによるデータ表示とループ処理
- フォームデータの表示と送信
- includeディレクティブによる共通部品の利用

### Servlet
- HttpServletの継承とdoGet/doPostメソッド
- リクエストパラメータの取得
- リクエスト属性を使用したデータの受け渡し
- フォワードとリダイレクトの違い

### JDBC（Java Database Connectivity）
- DriverManagerによる接続
- PreparedStatementを使用したSQL実行
- ResultSetからのデータ取得
- 例外処理とリソースの適切なクローズ

### MVCパターン
- Model：ビジネスロジックとデータ処理（User、UserDAO）
- View：画面表示（JSP）
- Controller：リクエスト処理と画面遷移制御（Servlet）

## セキュリティに関する注意

このチュートリアルは学習目的のため、以下のセキュリティ機能は含まれていません：
- 認証・認可機能
- パスワードのハッシュ化
- CSRF対策
- XSS対策の詳細な実装
- SQLインジェクション対策（PreparedStatementの使用のみ）

実際の本番環境では、これらのセキュリティ対策を必ず実装してください。

## 次のステップ

このチュートリアルを完了したら、以下の学習をお勧めします：

1. **Spring Framework**: より高度なDIコンテナとMVCフレームワーク
2. **Spring Boot**: 自動設定による迅速な開発
3. **JPA/Hibernate**: オブジェクトリレーショナルマッピング
4. **RESTful API**: JSON形式でのデータ交換
5. **セキュリティ**: Spring Securityによる認証・認可

## トラブルシューティング

### よくある問題と解決方法

1. **Eclipseでプロジェクトが認識されない**
   - プロジェクトのリフレッシュ（F5キー）
   - Project → Clean → Build Project
   - Dynamic Web Projectとして正しく作成されているか確認

2. **Tomcatが起動しない**
   - Eclipse内のServersビューでTomcatの状態を確認
   - ポート番号の競合を確認（デフォルト: 8080）
   - JDKのバージョンとTomcatの互換性を確認

3. **データベース接続エラー**
   - PostgreSQLサービスが起動しているか確認
   - PgAdminで接続テストを実施
   - 接続情報（ホスト、ポート、ユーザー名、パスワード）を確認
   - JDBCドライバー（postgresql-42.x.x.jar）がWEB-INF/libに配置されているか確認

4. **文字化け問題**
   - JSPファイルのエンコーディング設定（UTF-8）
   - Eclipse: Window → Preferences → General → Workspace → Text file encoding
   - リクエスト・レスポンスの文字エンコーディング設定
   - データベースの文字エンコーディング設定

5. **404エラー**
   - web.xmlのサーブレットマッピングを確認
   - コンテキストパスとURLパターンの確認
   - プロジェクトがTomcatサーバーに追加されているか確認
   - Eclipse: Servers → Tomcatサーバー → Add and Remove

## 参考資料

- [Oracle Java Documentation](https://docs.oracle.com/javase/)
- [Eclipse IDE Documentation](https://help.eclipse.org/)
- [Apache Tomcat Documentation](https://tomcat.apache.org/tomcat-9.0-doc/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [PgAdmin Documentation](https://www.pgadmin.org/docs/)

---

このチュートリアルは、Eclipse IDEを使用したJava Webアプリケーション開発の基礎を実践的に学ぶことを目的としています。ビルドツールを使用せず、Eclipseの標準機能のみで開発を進めることで、基本的な仕組みを理解しやすくしています。各ステップを順番に進めることで、JSP・Servlet・JDBCの基本的な使い方を習得できます。