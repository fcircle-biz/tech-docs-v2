# Spring Framework学習ガイドライン

このガイドラインでは、Spring Frameworkを初心者から中級者レベルまで段階的に学習するためのカリキュラムを提供しています。Spring FrameworkはJavaベースのアプリケーション開発を効率化するための包括的なフレームワークであり、エンタープライズアプリケーション開発でも広く使用されています。各トピックには詳細な解説へのリンクが含まれています。

## 学習コンテンツ

### [1. JavaとWebの基礎理解](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/spring/spring-learning-material-01.html)
Spring Frameworkを学ぶための前提知識として、Javaの基本文法（変数、条件分岐、ループ、クラスとメソッド）の復習、オブジェクト指向プログラミングの主要概念（カプセル化、継承、ポリモーフィズム）、HTTPの基礎（リクエスト・レスポンス、HTTPメソッド、ステータスコード、URL構造）、MVCモデルの基本（Model、View、Controllerの役割と関係）について学びます。これらの基礎知識は、Spring Frameworkの理解に不可欠な要素です。

### [2. Spring Bootの導入と開発環境構築](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/spring/spring-learning-material-02.html)
Spring Boot開発環境の構築と初めてのアプリケーション実行までを学びます。Eclipse IDEのインストールとSpring Tool Suite（STS）の導入方法、Spring Initializrを使った効率的なプロジェクト生成（Webブラウザと Eclipse STS両方のアプローチ）、MavenとGradleのビルド設定ファイル（pom.xmlとbuild.gradle）の構造と役割、最初のSpring Bootアプリケーション（Hello World）の作成と実行方法について詳しく解説します。

### [3. Spring Bootの基本構成とDI（依存性注入）](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/spring/spring-learning-material-03.html)
Spring Bootの基本構成と依存性注入（DI）の概念について学びます。Spring Bootの自動構成（Auto-configuration）の仕組み、コンポーネントスキャンとステレオタイプアノテーション（@Component、@Service、@Repository、@Controller）の使い方、DIの種類（コンストラクタ注入、セッター注入、フィールド注入）と実装方法、Javaコンフィグによる設定（@Configuration、@Bean）、application.ymlの使い方と設定方法について詳しく解説します。さまざまなアノテーションの基本的な使い方を理解し、Spring Bootアプリケーション開発の基礎を身につけることができます。

### [4. Webアプリケーション開発の基礎（MVC）](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/spring/spring-learning-material-04.html)
Spring MVCを使ったWebアプリケーション開発の基礎について学びます。MVCアーキテクチャにおけるDispatcherServletの役割、コントローラーの作成と様々なリクエストマッピングアノテーション（@GetMapping、@PostMapping）の使い方、Thymeleafテンプレートエンジンの基本と主要な属性（th:text、th:each、th:if）の使用方法、フォームの送信と受け取り（@ModelAttribute）の実装、URLのパスパラメータとクエリパラメータの処理（@PathVariable、@RequestParam）を詳しく解説します。具体的な実装例を通じて、Web開発の基本的なスキルを習得できます。

### [5. データベース連携（Spring Data JDBC）](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/spring/spring-learning-material-05.html)
Spring Data JDBCを使用したデータベース連携の方法を学びます。RDBと接続するための設定方法、Spring Data JDBCの概要と特徴、エンティティ定義（@Table、@Id）、リポジトリ（CrudRepository）の作成と活用方法、CRUD操作（保存・取得・更新・削除）の実装方法について詳しく解説します。PostgreSQLとの連携設定、接続プールの設定、カスタムクエリの作成方法、ページングとソーティング機能も含めて、データベースアクセスの基本を習得できます。

### [6. 入力バリデーションとエラーハンドリング](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/spring/spring-learning-material-06.html)
Springにおける入力バリデーションとエラーハンドリングの手法について学びます。バリデーションアノテーション（@NotNull、@NotBlank、@Size、@Min、@Max、@Email、@Pattern）の使用方法、BindingResultを使ったエラーの検出と処理、Thymeleafでのエラーフィードバック表示、@ControllerAdviceと@ExceptionHandlerを使った共通エラー処理の実装方法を詳しく解説します。メッセージのカスタマイズ、クライアントサイドバリデーションとの併用、RESTful APIのエラーハンドリングなど、ユーザビリティを向上させるための実践的なテクニックも学びます。

### [7. Spring Securityによる認証・認可](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/spring/spring-learning-material-07.html)
Spring Securityを用いた認証と認可の基本的な実装方法を学びます。Spring Securityの基本概念（認証と認可の違い）、Spring Securityの導入と基本設定（SecurityFilterChain、パスワードエンコーダの設定）、ログイン・ログアウト機能の実装方法、URLアクセス制御とロールベースの権限管理、ユーザー情報の定義とパスワードハッシュ化について詳しく解説します。フォームベースの認証設定、Remember Me機能の実装、メソッドレベルのセキュリティ（@PreAuthorize）、データベースユーザー管理の方法も学び、セキュアなWebアプリケーションの開発スキルを習得できます。

### [8. Spring MVCのテスト](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/spring/spring-learning-material-08.html)
Spring MVCアプリケーションのテスト方法について学びます。JUnit 5を使ったテスト基盤、Spring Bootのテスト機能（@SpringBootTest）、MockMvcを使ったコントローラーテスト、サービスレイヤーのユニットテスト（Mockito）、インテグレーションテスト、テスト用データベースの設定（H2、テストプロファイル）について解説します。また、プロファイルによる環境別設定管理やJAR/WAR形式でのビルドと実行方法など、テストと運用準備に関する知識を身につけられます。

### [9. Todoアプリケーション開発](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/spring/spring-learning-material-09.html)
これまで学んだ知識を統合して、実践的なTodo管理アプリケーションを開発します。Spring MVC、Spring Data JDBC、Spring Securityを組み合わせたCRUD操作の実装、フォームバリデーション、認証機能など、Webアプリケーション開発に必要な要素を統合的に学びます。プロジェクトセットアップからデータモデル作成、リポジトリ・サービス・コントローラの実装、ビュー層の作成まで一連の開発プロセスを体験することで、Spring Frameworkを使った実践的な開発スキルを身につけます。

### [10. さらに一歩進んだSpring開発へ①](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/spring/spring-learning-material-10.html)
REST API開発とSpring WebClientを使った外部API連携について学習します。RESTfulなAPI設計原則と実装方法、@RestControllerを使ったAPIエンドポイントの作成、JSONデータの変換と取り扱い方法、@RequestBodyを使ったリクエストパラメータの処理、Spring WebClientの基本的な使い方、WebClientを使った外部APIとの連携方法などを学びます。実践的な例を通して、モダンなSpringアプリケーション開発の重要な側面を理解し、マイクロサービスやAPIベースのアプリケーション開発スキルを向上させることができます。

### [11. さらに一歩進んだSpring開発へ②](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/spring/spring-learning-material-11.html)
Java RecordsとSpring Data JDBCを組み合わせた高度な開発手法と、集約ルート（Aggregate Root）を使った1対多の関連モデルの設計について学びます。Java Recordsの基本概念と利点、Spring Data JDBCとJava Recordsの連携方法、ドメイン駆動設計（DDD）の考え方に基づいた集約ルートの概念と実装、1対多の関連を持つデータモデルの設計と実装方法などを学習します。プロジェクト管理システムの実装例を通じて、より効率的で保守性の高いSpringアプリケーションの開発手法を習得できます。

### [補足①：Spring Data JPA入門](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/spring/spring-learning-material-ex-01.html)
Spring Data JPAの基本から応用まで学習します。JPAの基本概念と設定方法、エンティティの定義と主要アノテーションの使い方、エンティティ間のリレーションシップ（@OneToMany、@ManyToOne、@ManyToManyなど）、遅延読み込み（Lazy Loading）とN+1問題への対処法、HibernateとJPAのメリットと注意点、Spring Data JDBCとJPAの使い分け基準などを詳しく解説します。実際のコード例を通じて、Spring Data JPAを効果的に活用する方法を習得できます。

## 学習の進め方

1. 初めてSpring Frameworkを学ぶ方は、必ず「1. JavaとWebの基礎理解」から順番に学習を進めてください。
2. 各章の実習課題に取り組み、実際にコードを書いて動作確認することで理解を深めましょう。
3. 各章末の理解度確認テストで、学習内容の定着を確認してください。
4. 応用力を身につけるために、最終章の総合プロジェクトにもチャレンジしてみましょう。
5. Spring BootはDIコンテナなどSpring Coreの概念の上に構築されているため、Spring Bootだけでなく、Spring Coreの基本概念もしっかり理解することが重要です。

## 前提条件

このガイドを効果的に学ぶためには、以下の知識・環境が必要です：

- Java言語の基本的な知識（Java 8以降の文法、オブジェクト指向の概念）
- HTMLとCSSの基礎知識
- リレーショナルデータベースとSQLの基礎知識
- 開発環境：JDK 17以上、Eclipse（Spring Tool Suiteプラグイン推奨）、Maven/Gradle、PostgreSQLなどのデータベース

## 関連リソース

- [Spring公式ドキュメント](https://spring.io/guides)
- [Spring Boot公式リファレンス](https://docs.spring.io/spring-boot/docs/current/reference/html/)
- [Thymeleafドキュメント](https://www.thymeleaf.org/documentation.html)
- [Java初心者向けのチートシート](https://fcircle-biz.github.io/tech_docs/cheatsheet/fundamentals/java-cheatsheet.html)
- [SQL基礎チートシート](https://fcircle-biz.github.io/tech_docs/cheatsheet/fundamentals/sql-cheatsheet.html)
- [SpringBoot入門チートシート](https://fcircle-biz.github.io/tech_docs/cheatsheet/fundamentals/springboot-cheatsheet.html)