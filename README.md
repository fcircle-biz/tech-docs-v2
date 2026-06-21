# 技術ドキュメントリポジトリ

ソフトウェア開発およびIT関連トピックに関する学習ガイドをHTML形式で提供する技術文書集です。

> **現状**: 本リポジトリは静的 HTML 教材を **Astro ベース**で管理しています（`main` の正規構成）。Astro プロジェクト一式は `astro-system/` に配置され、ビルド出力は GitHub Pages 公開用の `/docs/`（リポジトリ直下）に生成されます。

## 📋 目次

- [📖 概要](#-概要)
- [📖 学習ガイドライン](#-学習ガイドライン)
- [🔗 リンク](#-リンク)

------------------------------------------------------------------------

## 📖 概要

このリポジトリは、日本語の技術ドキュメント集です。各技術領域において、体系的な学習ガイドを提供しています。

### 特徴

- **HTML形式の教材**: ブラウザで直接閲覧可能な見やすいドキュメント
- **段階的学習**: 基礎から応用まで順序立てて学べる構成
- **テンプレート標準**: `/astro-system/templates/v1/`（"Graphite × Iris" デザイン）に準拠した統一フォーマット

> **現状**: 学習ガイドのみを収録しています。旧 `tech_docs`（v1）にあったチュートリアル・練習問題・実践課題・チートシート・スライド等は本リポジトリには含まれていません。

------------------------------------------------------------------------

## 📖 学習ガイドライン

各技術の基礎から応用まで段階的に学べる学習ガイドです。

### プログラミング言語

#### Java

- [**Java入門学習ガイド**](docs/guide/programming-languages/java-ecosystem/java/README.md) - プログラミング未経験者・初心者向けJava入門14章構成カリキュラム。開発環境構築とHello World、変数と型、条件分岐、ループ、配列、メソッドの基礎から、オブジェクト指向の核心（クラスとオブジェクト、フィールドとメソッド、カプセル化、継承、ポリモーフィズム）、さらに例外処理、標準ライブラリ、コレクション（ArrayList / HashMap / HashSet）まで身近なたとえと豊富なコード例で段階的に学習（全14章・約21時間）
- [**JDBC学習ガイド**](docs/guide/programming-languages/java-ecosystem/jdbc/README.md) - 入門者向けJDBC（Java Database Connectivity）入門8章構成カリキュラム。データベース接続の基本と開発環境準備から、SELECT文によるデータ検索、INSERT/UPDATE/DELETEによる更新、PreparedStatementの活用とSQLインジェクション対策、トランザクション処理と例外処理、DAO（Data Access Object）パターン、コネクションプーリングやtry-with-resourcesなどのベストプラクティスまで段階的に学習（全8章・約7.5時間）
- [**JSP/Servlet学習ガイド**](docs/guide/programming-languages/java-ecosystem/jsp/README.md) - 入門者向けのJava Webアプリケーション開発（Servlet/JSP）入門11章構成カリキュラム。Webの仕組みとHTTPの基礎・Tomcatのセットアップから、Servletによるリクエスト処理、JSPによる画面生成、フォーム処理とバリデーション、HttpSessionによるセッション管理とログイン機能、フォワード／リダイレクトとMVCパターン、JavaBeansと4つのスコープ、EL式とJSTL、JDBC・DAOパターンによるデータベース連携（CRUD）まで段階的に学習（全11章・約11時間）
- [**Spring基礎学習ガイド**](docs/guide/programming-languages/java-ecosystem/spring-basic/README.md) - Java開発を支えるSpring Frameworkの中心概念を学ぶ初心者向けSpring基礎入門8章構成カリキュラム（Spring学習シリーズ1作目）。Springが何をするフレームワークかという出発点から、Spring Bootプロジェクトの基本構成、DI（依存性注入）とコンストラクタインジェクション、Spring Bean（@Component・@Service・@Repository・@Controller）、Controller→Service→Repositoryの役割分担とクラス分割、application.propertiesとプロファイル、AOP（@Aspect・@Before・@After）による共通処理の分離、DIとAOPを使った総合演習まで、コンソール中心の短いコード例で段階的に学習（全8章・約8時間）
- [**Spring Data JDBC学習ガイド**](docs/guide/programming-languages/java-ecosystem/spring-data-jdbc/README.md) - Spring基礎を学んだ初心者向けSpring Data JDBC入門8章構成カリキュラム（Spring学習シリーズ2作目）。Spring Data JDBCとJDBCの違いから、application.propertiesによるDB接続設定、schema.sql/data.sqlによるテーブル作成と初期データ、エンティティクラス（@Table・@Id）、CrudRepositoryを使ったRepositoryインターフェース、ServiceとRepositoryの役割分担とDI、CommandLineRunnerによるコンソール動作確認、ユーザー管理CRUDの総合演習まで、Web画面を作らずDB操作の基本を段階的に学習（全8章・約8時間）
- [**Spring MVC学習ガイド**](docs/guide/programming-languages/java-ecosystem/spring-mvc/README.md) - Spring基礎・Spring Data JDBCを学んだ初心者向けSpring MVC入門10章構成カリキュラム（Spring学習シリーズ3作目）。Spring MVCがWebアプリケーションを作る仕組みであることの理解から、プロジェクトの基本構成、@Controllerと@GetMappingによるリクエスト処理、Modelを使った画面へのデータ受け渡し、Thymeleaf（th:each・th:object・th:field）による一覧・詳細・フォーム表示、@PathVariableと@ModelAttribute、GETとPOSTの違いとリダイレクト、登録・編集・削除機能まで、ユーザー管理Webアプリケーションを作りながら段階的に学習（全10章・約10時間）
- [**JUnit学習ガイド**](docs/guide/programming-languages/java-ecosystem/junit/README.md) - プログラミング初心者・テスト未経験者向けJUnit（JUnit 5）入門12章構成カリキュラム。「テストとは何か」という素朴な疑問から始め、Mavenプロジェクトへの導入とはじめてのテスト、アサーション（assertEquals等）、テストクラスの構成と@Test、@BeforeEach/@AfterEachなどのライフサイクル、パラメータ化テスト、assertThrowsによる例外テスト、@DisplayName・@Nested、電卓アプリのテスト実践とカバレッジ、テスト駆動開発（TDD）、F.I.R.S.T原則に基づくベストプラクティスまで段階的に学習（全12章・約10時間）

#### JavaScript/Node.js

- [**JavaScript入門学習ガイド**](docs/guide/programming-languages/javascript-ecosystem/javascript/README.md) - プログラミング未経験者・初心者向けJavaScript入門16章構成カリキュラム。開発環境準備とはじめてのプログラム、変数、条件分岐（if文）、ループ（for / while）、関数、配列とオブジェクトの基礎から、Webページを動かすDOM操作・イベント処理・入力フォーム操作、そして学んだ知識を組み合わせて作るToDoアプリ制作まで、ブラウザ1つで動く題材で段階的に学習（全16章・約24時間）

### 開発手法・プロセス

- [**Claude Code入門学習ガイド**](docs/guide/development-processes/claude-code/README.md) - 入門者向けClaude Code（Anthropic公式のエージェント型コーディングCLI）入門14章構成カリキュラム。AI支援開発の基礎知識、インストールと初期設定、基本操作、ファイル編集とコードベース探索、スラッシュコマンド、CLAUDE.mdとメモリ・コンテキスト管理、Git・GitHub連携、権限と設定、MCP連携、サブエージェントと自動化、実践ワークフロー、トラブルシューティングまで段階的に学習（全14章・約16時間）
- [**Codex入門学習ガイド**](docs/guide/development-processes/codex/README.md) - 入門者向けCodex（OpenAI公式のエージェント型コーディングCLI）入門14章構成カリキュラム。AI支援開発の基礎知識、インストールと初期設定、基本操作と最初のセッション、ファイルの読み書きとコード編集、コードベースの探索、承認モードとサンドボックス、AGENTS.mdとメモリ・コンテキスト管理、設定ファイル（config.toml）とプロファイル、Git・GitHub連携、MCPによる外部ツール連携、非対話実行と自動化（codex exec）、実践ワークフロー、トラブルシューティングまで段階的に学習（全14章・約16.5時間）

------------------------------------------------------------------------

## 🔗 リンク

- [GitHub Pages](https://fcircle-biz.github.io/tech-docs-v2/)
- [リポジトリ](https://github.com/fcircle-biz/tech-docs-v2)

------------------------------------------------------------------------
