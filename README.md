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

> **現状**: 学習ガイドのみを収録しています。旧 `tech_docs`（v1）にあった学習パス・チュートリアル・練習問題・実践課題・チートシート・スライド等は本リポジトリには含まれていないため、対応するセクションは記載していません。

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
- [**Spring Data JPA学習ガイド**](docs/guide/programming-languages/java-ecosystem/spring-data-jpa/README.md) - Spring基礎・Spring Data JDBC・Spring MVCを学んだ初心者向けSpring Data JPA入門11章構成カリキュラム（Spring学習シリーズ4作目）。JPA・Hibernate・Spring Data JPAの関係と役割から、Spring Bootプロジェクトの作成、@Entity・@Id・@GeneratedValue・@ColumnによるEntity定義、JpaRepositoryによるCRUD操作、ServiceとRepositoryの役割分担、メソッド名による条件検索、@QueryとJPQL、@ManyToOne・@JoinColumnによる関連テーブルの扱い、@Transactionalによるトランザクション、Spring MVCとの連携、部署・社員管理アプリの総合演習まで、関連を持つ2つのテーブルをJavaのEntityとして扱う方法を段階的に学習（全11章・約11時間）
- [**JUnit学習ガイド**](docs/guide/programming-languages/java-ecosystem/junit/README.md) - プログラミング初心者・テスト未経験者向けJUnit（JUnit 5）入門12章構成カリキュラム。「テストとは何か」という素朴な疑問から始め、Mavenプロジェクトへの導入とはじめてのテスト、アサーション（assertEquals等）、テストクラスの構成と@Test、@BeforeEach/@AfterEachなどのライフサイクル、パラメータ化テスト、assertThrowsによる例外テスト、@DisplayName・@Nested、電卓アプリのテスト実践とカバレッジ、テスト駆動開発（TDD）、F.I.R.S.T原則に基づくベストプラクティスまで段階的に学習（全12章・約10時間）
- [**Struts 1学習ガイド**](docs/guide/programming-languages/java-ecosystem/struts1/README.md) - 既存システムの保守を担当する開発者向けStruts 1入門8章構成カリキュラム。Struts 1がどんなフレームワークで現在どう位置づけられるのかという整理から、web.xmlとstruts-config.xmlによる入口と設定、Actionクラスによるリクエスト処理、ActionFormによる画面値の受け渡し、JSPとStrutsタグライブラリ、JDBCを使ったデータベース連携、一覧・登録・更新・削除（CRUD）の実装、そして既存Struts 1システムのコードを読み解く手順まで、レガシー資産の保守を見据えて段階的に学習（全8章・約12時間）

#### JavaScript/Node.js

- [**JavaScript入門学習ガイド**](docs/guide/programming-languages/javascript-ecosystem/javascript/README.md) - プログラミング未経験者・初心者向けJavaScript入門16章構成カリキュラム。開発環境準備とはじめてのプログラム、変数、条件分岐（if文）、ループ（for / while）、関数、配列とオブジェクトの基礎から、Webページを動かすDOM操作・イベント処理・入力フォーム操作、そして学んだ知識を組み合わせて作るToDoアプリ制作まで、ブラウザ1つで動く題材で段階的に学習（全16章・約24時間）

#### .NET

- [**VB.NET入門学習ガイド**](docs/guide/programming-languages/dotnet-ecosystem/vbnet/README.md) - プログラミング未経験者・初心者向けVB.NET（Visual Basic .NET）入門14章構成カリキュラム。Visual Studio 2022 Communityによる開発環境構築とHello World、変数とデータ型、演算子と文字列操作、条件分岐（If / Select Case）、ループ（For / Do / For Each）、配列とコレクション（List / Dictionary）、SubプロシージャとFunctionの基礎から、オブジェクト指向の核心（クラスとオブジェクト、プロパティとカプセル化、継承とポリモーフィズム）、さらに例外処理とデバッグ、ファイル入出力（CSV含む）、Windows Formsによる画面付きアプリ開発、ADO.NETによるデータベース接続とSQLインジェクション対策まで、業務システム開発を見据えて段階的に学習（全14章・約21時間）

### Web技術

- [**HTML学習ガイド**](docs/guide/web-technologies/html/README.md) - Web制作がまったく初めての方向けHTML入門12章構成カリキュラム。HTMLとは何かという出発点から、エディタの準備と最初のページ作成、HTMLの基本構造とタグのルール、見出しと段落・文字の装飾、リスト、リンク、画像とメディア、表（テーブル）、フォーム、セマンティックHTMLと文書構造、CSSとの連携入門、そして総仕上げとなるプロフィールページ制作まで、実際に手を動かしながら段階的に学習（全12章・約7時間20分）
- [**CSS学習ガイド**](docs/guide/web-technologies/css/README.md) - HTMLの基礎を学んだ方向けCSS入門14章構成カリキュラム。CSSの役割と書き方・適用方法から、セレクタの基本、カスケード・継承・詳細度、文字とテキストのスタイル、色と背景、ボックスモデル、display と position、Flexbox と CSS Grid によるレイアウト、レスポンシブデザイン、装飾とアニメーション、CSS変数を使った保守しやすい書き方、そしてプロフィールページのデザイン実践まで、つまずきやすい概念を図解しながら段階的に学習（全14章・約9時間50分）
- [**Markdown学習ガイド**](docs/guide/web-technologies/markdown/README.md) - ドキュメント作成が初めての方向けMarkdown入門11章構成カリキュラム。Markdownとは何かと使われる場面から、書く準備、見出しと段落、文字の装飾、リスト、リンクと画像、コードブロックと引用、表（テーブル）、その他の便利な記法、Mermaidによる作図、そして実践としてのREADME作成まで、GitHubやドキュメントツールで日常的に使う記法を段階的に学習（全11章・約6時間30分）

### 開発手法・プロセス

- [**Git/GitHub学習ガイド**](docs/guide/development-processes/git-github/README.md) - まったくの初心者向けGit/GitHub入門7章構成カリキュラム。「ファイル名に日付を付けて管理する」段階から一歩進み、Git・VS Code・GitHubアカウントの環境構築とgit configによる初期設定・SSH鍵の作成と登録、git init / status / add / commit / log / diffによる変更記録の基本サイクル、push / clone / pullによるGitHubとの連携、ブランチ（branch / switch）を使った作業、Pull Requestの作成・レビュー・マージによるチーム開発の流れ、変更の取り消しやコンフリクト解決などよくあるトラブルへの対処まで、専門用語をかみ砕きながら段階的に学習（全7章・約6時間）
- [**Claude Code入門学習ガイド**](docs/guide/development-processes/claude-code/README.md) - 入門者向けClaude Code（Anthropic公式のエージェント型コーディングCLI）入門14章構成カリキュラム。AI支援開発の基礎知識、インストールと初期設定、基本操作、ファイル編集とコードベース探索、スラッシュコマンド、CLAUDE.mdとメモリ・コンテキスト管理、Git・GitHub連携、権限と設定、MCP連携、サブエージェントと自動化、実践ワークフロー、トラブルシューティングまで段階的に学習（全14章・約16時間）
- [**Claude Skills学習ガイド**](docs/guide/development-processes/claude-code-skills/README.md) - Claude Codeを一通り使える方向けのスキル（Skills）入門12章構成カリキュラム。スキルとは何かという整理から、スキルの置き場所と優先順位、最初のスキル作成、テストと発見の仕組み、効果的なdescriptionの書き方、メタデータとallowed-tools、段階的開示と複数ファイル構成、スクリプト・参照資料・アセットの活用、CLAUDE.mdやスラッシュコマンドとの使い分け、サブエージェント・フック・MCPとの比較、スキルの共有と配布、トラブルシューティングまで、自分の作業を自動化するスキルを作れるようになることを目標に段階的に学習（全12章・約8時間）
- [**Codex入門学習ガイド**](docs/guide/development-processes/codex/README.md) - 入門者向けCodex（OpenAI公式のエージェント型コーディングCLI）入門14章構成カリキュラム。AI支援開発の基礎知識、インストールと初期設定、基本操作と最初のセッション、ファイルの読み書きとコード編集、コードベースの探索、承認モードとサンドボックス、AGENTS.mdとメモリ・コンテキスト管理、設定ファイル（config.toml）とプロファイル、Git・GitHub連携、MCPによる外部ツール連携、非対話実行と自動化（codex exec）、実践ワークフロー、トラブルシューティングまで段階的に学習（全14章・約16.5時間）

### クラウド／インフラ

- [**Docker学習ガイド**](docs/guide/cloud-infrastructure/docker/README.md) - 入門者向けDocker入門8章構成カリキュラム。「自分のPCでは動くのに他の人のPCでは動かない」問題をDockerがどう解決するのかという考え方から始め、Rancher Desktopでのコマンド環境構築とhello-worldによる最初のコンテナ実行、docker run / ps / stop / rm / images などの基本コマンド、NginxによるWebサーバー起動とポート公開（-p）の仕組み、Dockerfile（FROM / COPY）でのオリジナルイメージ作成、バインドマウントとボリューム、Docker Compose（compose.yml）による起動手順のまとめ、よくあるエラーの確認手順まで、コマンドの意味を1行ずつ確認しながら段階的に学習（全8章・約6時間）

### データ・AI

#### データベース

- [**SQL入門学習ガイド**](docs/guide/data-ai-category/database/sql/README.md) - プログラミングがまったく初めての方向けSQL入門14章構成カリキュラム。データベースとSQLの世界、リレーショナルデータベースの構造（テーブル・行・列・主キー／外部キー）から、PostgreSQL 17・pgAdmin 4・A5:SQL Mk-2による環境構築とツールの基本操作、CREATE TABLEによるデータベースとテーブルの作成、SELECT文によるデータ取得、WHEREによる絞り込み、関数によるデータ加工、GROUP BYによる集計、INSERT／UPDATE／DELETEによるデータの追加・更新・削除、JOINによるテーブル結合、サブクエリとビュー、トランザクションと同時実行制御、インデックス・権限・運用の基礎まで、1つのツールに依存せず「どのツールでも同じSQLが書ける」感覚を養いながら段階的に学習（全14章・約15時間）

- [**Oracle入門学習ガイド**](docs/guide/data-ai-category/database/oracle/README.md) - データベース未経験者向けOracle Database入門14章構成カリキュラム。データベースとRDBMSの基礎、Oracleの製品エディション（Free / SE2 / EE）とクラウドのマネージドサービス（Oracle Autonomous AI Database）の違いから、インスタンスとデータベースの違い・SGA/PGA・表領域・スキーマ・CDB/PDBマルチテナントといったアーキテクチャ、Oracle AI Database 26ai Freeの環境構築（Windows／Docker）とSQL*Plus・SQL Developerの操作、CREATE TABLEとVARCHAR2/NUMBER/DATE・制約・シーケンス／IDENTITY列、SELECT・WHERE・ORDER BY・DUAL表・FETCH FIRST、INSERT/UPDATE/DELETEとCOMMIT／ROLLBACK、文字列・数値・日付関数とNULLの扱い（空文字＝NULL）、JOIN・集計・サブクエリ、PL/SQL（ブロック・変数・制御構文・カーソル・例外処理）、ストアドプロシージャ／ファンクション／パッケージ／トリガー、トランザクションと読み取り一貫性（MVCC）・ロック、インデックスと実行計画、ユーザー・権限・ロール管理とData Pump／RMANによるバックアップ運用まで、社員表・部署表のサンプルスキーマを作りながら段階的に学習。Oracle特有のつまずき（COMMITするまで確定しない・VARCHAR2・空文字がNULL扱い）を随所で明示（全14章・約20時間）

- [**SQL Server入門学習ガイド**](docs/guide/data-ai-category/database/sqlserver/README.md) - データベース未経験者向けSQL Server入門14章構成カリキュラム。データベースとRDBMSの基礎、SQL Serverのエディションとアーキテクチャ（インスタンス・データベース・スキーマ・システムDB）から、Windows/Dockerでの環境構築とSSMSの基本操作、CREATE TABLEとデータ型・制約・IDENTITY、SELECT・WHERE・ORDER BY・TOP、INSERT/UPDATE/DELETEとOUTPUT句、JOIN・集計・サブクエリ・CTE・ウィンドウ関数、T-SQLプログラミング（変数・制御構文・TRY...CATCH・ストアドプロシージャ）、トランザクションとロック・分離レベル、インデックスと実行プラン、ログインとユーザー・ロールによる権限管理、復旧モデルとバックアップ／復元・運用まで、学習用DB「SampleShop」を作りながら段階的に学習。全章に**PostgreSQLとの違い**の比較コーナーを設け、最終章で総まとめと移行時の注意点を整理（全14章・約16時間）

#### 生成AI

- [**Claude入門学習ガイド**](docs/guide/data-ai-category/generative-ai/claude/README.md) - 生成AIを初めて使う方向けClaude入門12章構成カリキュラム。Claudeとは何かという出発点から、最初の会話の始め方、コンテキストの与え方、より良い結果を得るための指示のコツ、AI Fluencyとevalsの考え方、デスクトップアプリの3モード、プロジェクト機能の活用、アーティファクトによる成果物作成、スキルの活用、コネクタとMCPによる外部連携、エンタープライズ検索とリサーチ、そして日々の業務への展開と次のステップまで、実際に触りながら段階的に学習（全12章・約6時間）

### ビジネスSaaS

- [**新人SE向け Power BI入門学習ガイド**](docs/guide/business-saas/power-bi/README.md) - BIツールもSQLも初めての新人SE向けPower BI入門12章構成カリキュラム。BIとは何かとPower BI Desktop／Serviceの役割から、Desktopの画面構成と3つのビュー、データ取得（Excel・CSV・SQL Server・Web／Import・DirectQuery）、Power Query（列と行の整形・データ型・null・マージ／追加・ピボット解除・M言語）、データモデリング（主キー／外部キー・リレーション・カーディナリティ・フィルター方向）、スタースキーマ（ファクト／ディメンション・日付テーブル）、DAX入門（計算列とメジャーの違い・SUM／COUNTROWS／DISTINCTCOUNT／DIVIDE／IF／CALCULATE）、レポート作成（ビジュアル選択・スライサー・フィルター階層・相互作用）、分かりやすいレポート設計（レイアウト・ドリルダウン／ドリルスルー・ブックマーク・モバイル対応）、Power BI Service（発行・ワークスペース・セマンティックモデル・アプリ配布・更新）、セキュリティと運用（アクセス制御・RLS・ゲートウェイ・スケジュール更新）、そしてAI時代のPower BI（Copilot・DAX作成支援・PBIP・Skills for Fabric・MCP）まで、架空企業の売上分析を題材に一連の流れで段階的に学習（全12章・約13時間）

- [**Excel VBA入門学習ガイド**](docs/guide/business-saas/vba/README.md) - プログラミング未経験の社会人向けExcel VBA入門14章構成カリキュラム。マクロとVBAの関係と自動化できる業務の見極め方から、「開発」タブ・VBE・マクロ有効ブック（.xlsm）とマクロセキュリティの準備、マクロの記録と生成コードの読み解き、Subプロシージャ・コメント・イミディエイトウィンドウといった基本文法、変数とデータ型（Option Explicit・Const）、RangeとCellsによるセル操作とSelectを使わない書き方、If／Select Caseによる条件分岐、For／For Each／Do Loopによる繰り返し、ブックとワークシートの操作、SubとFunctionによる処理の部品化（引数・戻り値・スコープ）、配列とDictionaryによる高速な集計、On Errorとブレークポイント・ステップ実行によるエラー処理とデバッグ、MsgBox／InputBox・ボタン・イベントプロシージャ・UserForm、そして総仕上げとして売上明細から対象年月の支店別帳票をボタン1つで出力する月次レポートツール制作まで、架空の文具卸売会社の売上管理業務を題材に一貫した流れで段階的に学習（全14章・約20時間）

### 業務ドメイン知識

- [**新人SE向け 業務知識入門学習ガイド**](docs/guide/business-domain-knowledge/business-knowledge-basics/README.md) - 業務経験のない新人SE向け業務知識入門10章構成カリキュラム。会社のしくみ（部門の役割・モノ／カネ／情報の流れ・業務システムとは）から、販売業務の流れ（見積→受注→出荷→売上→請求→入金）、購買業務の流れ（発注→入荷→仕入→支払）、在庫・物流（倉庫・入出庫・在庫引当・棚卸）、生産管理（生産計画・原材料／仕掛品／製品・製造指示・製造実績・原価）、会計の基礎（売上／費用／利益・売掛金／買掛金・仕訳）、決算と財務諸表（B/S・P/L）、人事・給与（勤怠・給与計算・社会保険・源泉徴収）、業務システムの基本用語（マスタ・トランザクション・伝票・ステータス・締め処理・バッチ処理・システム連携）、そして全業務が会計へ集約される全体像とシステム間連携まで、「誰が、何を、どの順番で処理しているのか」という視点で段階的に学習（全10章・約8時間）

------------------------------------------------------------------------

## 🔗 リンク

- [GitHub Pages](https://fcircle-biz.github.io/tech-docs-v2/)
- [リポジトリ](https://github.com/fcircle-biz/tech-docs-v2)

------------------------------------------------------------------------
