# Spring Framework入門 学習ガイドライン

このガイドラインでは、Spring Frameworkの基礎を段階的に学習するためのカリキュラムを提供しています。Java、JDBC、JSP/サーブレット、SQLの基礎知識を持つ方を対象に、Spring Boot、Spring Core、Spring Data JDBC、Spring MVCの4つの主要コンポーネントを体系的に習得できる構成となっています。

## 前提条件

### 必要な環境
- **JDK 17以上** - Java Development Kit（LTS版推奨）
- **Eclipse IDE** - Spring Tool Suite（STS）プラグイン導入済み、またはIntelliJ IDEA
- **Maven または Gradle** - ビルドツール（本ガイドではMavenを主に使用）
- **PostgreSQL** - データベース（バージョン12以上推奨）
- **Webブラウザ** - 動作確認用（Chrome、Firefox、Edgeなど）

### 参考リソース
- [Spring公式ドキュメント](https://spring.io/docs)
- [Spring Boot公式リファレンス](https://docs.spring.io/spring-boot/docs/current/reference/html/)
- [Spring Data JDBC公式ドキュメント](https://docs.spring.io/spring-data/jdbc/docs/current/reference/html/)
- [Thymeleafドキュメント](https://www.thymeleaf.org/documentation.html)
- [Spring Initializr](https://start.spring.io/)

### 前提知識
- **必須**: Java言語の基礎（変数、制御構文、クラス、オブジェクト指向の基本概念）
- **必須**: JDBCによるデータベース接続の基礎（Connection、PreparedStatement、ResultSet）
- **必須**: JSP/サーブレットの基礎（リクエスト/レスポンス、セッション管理、MVCパターン）
- **必須**: SQLの基礎（SELECT、INSERT、UPDATE、DELETE、JOIN）
- **推奨**: HTMLとCSSの基礎知識
- **推奨**: HTTPプロトコルの基礎理解

## 学習コンテンツ

### [1. Spring Frameworkの全体像](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/spring/spring-learning-material-01.html)
Spring Frameworkとは何か、なぜ多くの企業で採用されているのかを学びます。Spring Core、Spring Boot、Spring MVC、Spring Data JDBCの4つの主要コンポーネントの役割と関係性、従来のJava EE開発（サーブレット/JDBC）との違いを理解し、Springを学ぶ意義を明確にします。

### [2. 開発環境の構築とSpring Boot入門](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/spring/spring-learning-material-02.html)
Spring Boot開発環境を構築し、最初のアプリケーションを動かします。Spring Tool Suite（STS）のセットアップ、Spring Initializrを使ったプロジェクト生成、pom.xmlの構造理解、Hello Worldアプリケーションの作成と実行までを体験します。

### [3. DI（依存性注入）とIoCコンテナ](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/spring/spring-learning-material-03.html)
Spring Coreの中核概念であるDI（Dependency Injection）とIoC（Inversion of Control）コンテナを学びます。なぜDIが必要なのか、従来のnewによるオブジェクト生成との違い、@Component、@Autowiredアノテーションの使い方、コンストラクタインジェクションの実装方法を理解します。

### [4. Beanの管理とコンポーネントスキャン](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/spring/spring-learning-material-04.html)
Spring IoCコンテナでのBean管理を深く理解します。ステレオタイプアノテーション（@Component、@Service、@Repository、@Controller）の役割と使い分け、Beanのスコープ（singleton、prototype）、@Configurationと@Beanによる明示的なBean定義、コンポーネントスキャンの仕組みを学びます。

### [5. Spring MVCの基礎](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/spring/spring-learning-material-05.html)
Spring MVCを使ったWebアプリケーション開発の基礎を学びます。DispatcherServletの役割、@Controllerと@RequestMappingによるルーティング、@GetMappingと@PostMappingの使い分け、Modelオブジェクトを使ったビューへのデータ渡しを理解し、JSP/サーブレットとの違いを実感します。

### [6. Thymeleafテンプレートエンジン](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/spring/spring-learning-material-06.html)
モダンなビューテンプレートエンジンであるThymeleafの使い方を学びます。th:text、th:each、th:if、th:hrefなど主要な属性の使い方、フォームの作成とデータバインディング（th:object、th:field）、レイアウトの共通化、JSPとの比較を通じてThymeleafの利点を理解します。

### [7. フォーム処理とバリデーション](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/spring/spring-learning-material-07.html)
フォームからのデータ受け取りと入力検証を学びます。@ModelAttributeによるフォームデータの受け取り、Bean Validationアノテーション（@NotBlank、@Size、@Email、@Min、@Max）、BindingResultを使ったエラー処理、Thymeleafでのエラーメッセージ表示を実装します。

### [8. Spring Data JDBC入門](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/spring/spring-learning-material-08.html)
Spring Data JDBCを使ったデータアクセス層の実装を学びます。従来のJDBCコードとの比較、application.ymlでのデータソース設定、エンティティクラスの定義（@Table、@Id）、CrudRepositoryを継承したリポジトリの作成、基本的なCRUD操作の実装方法を理解します。

### [9. Spring Data JDBCの実践](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/spring/spring-learning-material-09.html)
Spring Data JDBCをより実践的に活用する方法を学びます。カスタムクエリ（@Query）の作成、ページングとソート機能、1対多リレーションの実装（集約ルート）、トランザクション管理（@Transactional）、従来のJDBCTemplateとの使い分けを理解します。

### [10. サービス層の設計](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/spring/spring-learning-material-10.html)
適切なレイヤードアーキテクチャの設計方法を学びます。Controller、Service、Repositoryの責務分離、@Serviceアノテーションの役割、ビジネスロジックのサービス層への集約、例外処理の設計、DTOパターンによるレイヤー間のデータ受け渡しを実装します。

### [11. エラーハンドリングと例外処理](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/spring/spring-learning-material-11.html)
Springアプリケーションでの適切なエラーハンドリングを学びます。カスタム例外クラスの作成、@ControllerAdviceと@ExceptionHandlerによる共通エラー処理、エラーページのカスタマイズ、ログ出力の設定（SLF4J/Logback）を実装します。

### [12. Spring Securityによる認証・認可](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/spring/spring-learning-material-12.html)
Spring Securityを使ったセキュリティ実装の基礎を学びます。認証と認可の概念、SecurityFilterChainの設定、フォームベース認証の実装、パスワードのハッシュ化（BCrypt）、URLベースのアクセス制御、ログイン・ログアウト機能の実装を行います。

### [13. ユーザー管理とロールベースアクセス制御](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/spring/spring-learning-material-13.html)
データベースと連携したユーザー認証とロールベースの認可を実装します。UserDetailsServiceの実装、データベースからのユーザー情報取得、ロールによるアクセス制御（ROLE_USER、ROLE_ADMIN）、Thymeleafでの認証情報表示（sec:authorize）を学びます。

### [14. テストの基礎](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/spring/spring-learning-material-14.html)
Spring Bootアプリケーションのテスト方法を学びます。JUnit 5の基礎、@SpringBootTestによる統合テスト、MockMvcを使ったコントローラーテスト、Mockitoによるモック化、サービス層の単体テスト、テスト用データベース（H2）の設定を実装します。

### [15. REST API開発入門](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/spring/spring-learning-material-15.html)
RESTful APIの開発方法を学びます。@RestControllerの使い方、@RequestBodyと@ResponseBodyによるJSON処理、HTTPステータスコードの適切な返却、REST APIのテスト方法、Postmanを使った動作確認を実装します。

### [16. 設定管理とプロファイル](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/spring/spring-learning-material-16.html)
Spring Bootの設定管理機能を学びます。application.yml/propertiesの使い方、@Valueと@ConfigurationPropertiesによる設定値の注入、プロファイル（dev、prod）による環境別設定、外部設定ファイルの読み込みを理解します。

### [17. 総合演習 - タスク管理アプリケーション開発](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/spring/spring-learning-material-17.html)
これまで学んだ知識を総合して、実践的なタスク管理アプリケーションを開発します。要件定義からDB設計、実装、テストまでの一連の開発プロセスを体験し、Spring Boot、Spring MVC、Spring Data JDBC、Spring Securityを統合したアプリケーションを完成させます。

### [18. デプロイと運用準備](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/spring/spring-learning-material-18.html)
アプリケーションの本番環境へのデプロイ準備を学びます。実行可能JARの作成、環境変数による設定の外部化、ログ設定の本番対応、Actuatorによるヘルスチェック、本番環境でのセキュリティ考慮事項を理解します。

## 学習の進め方

1. **順番通りに進める** - 各章は前の章の知識を前提としています。必ず第1章から順番に学習してください
2. **手を動かす** - サンプルコードは必ず自分で入力し、実行して動作を確認してください
3. **従来技術と比較する** - JDBC、JSP/サーブレットで同じことをする場合と比較し、Springの利点を実感してください
4. **エラーを恐れない** - エラーメッセージはSpringからの重要なフィードバックです。内容をよく読んで原因を理解しましょう
5. **総合演習で定着** - 第17章の総合演習で、学んだ知識を実践的に組み合わせる力を身につけてください

## 推奨所要時間

| 章 | 内容 | 目安時間 |
|----------|------|----------|
| 第1章 | Spring Frameworkの全体像 | 45分 |
| 第2章 | 開発環境の構築とSpring Boot入門 | 1.5時間 |
| 第3章 | DI（依存性注入）とIoCコンテナ | 1.5時間 |
| 第4章 | Beanの管理とコンポーネントスキャン | 1.5時間 |
| 第5章 | Spring MVCの基礎 | 1時間 |
| 第6章 | Thymeleafテンプレートエンジン | 1.5時間 |
| 第7章 | フォーム処理とバリデーション | 1.5時間 |
| 第8章 | Spring Data JDBC入門 | 1.5時間 |
| 第9章 | Spring Data JDBCの実践 | 2時間 |
| 第10章 | サービス層の設計 | 1.5時間 |
| 第11章 | エラーハンドリングと例外処理 | 1.5時間 |
| 第12章 | Spring Securityによる認証・認可 | 2時間 |
| 第13章 | ユーザー管理とロールベースアクセス制御 | 2時間 |
| 第14章 | テストの基礎 | 1.5時間 |
| 第15章 | REST API開発入門 | 1.5時間 |
| 第16章 | 設定管理とプロファイル | 1時間 |
| 第17章 | 総合演習 | 3時間 |
| 第18章 | デプロイと運用準備 | 1.5時間 |
| **合計** | | **約28.5時間** |

※学習者のスキルレベルにより変動します。自分のペースで進めてください。

## 関連リソース

### チートシート
- [Java初心者向けチートシート](https://fcircle-biz.github.io/tech_docs/cheatsheet/fundamentals/java-cheatsheet.html)
- [SQL基礎チートシート](https://fcircle-biz.github.io/tech_docs/cheatsheet/fundamentals/sql-cheatsheet.html)
- [Spring Boot入門チートシート](https://fcircle-biz.github.io/tech_docs/cheatsheet/fundamentals/springboot-cheatsheet.html)

### 前提知識の学習ガイドライン
- [Java入門ガイド](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/java/)
- [JDBC入門ガイド](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/jdbc/)
- [JSP/サーブレット入門ガイド](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/jsp/)
- [SQL基礎ガイド](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/sql/)

## 学習目標

このガイドを完了すると、以下のスキルを身につけることができます：

- **Spring Frameworkの理解** - DI/IoCの概念を理解し、なぜSpringが必要なのかを説明できる
- **Spring Boot開発** - Spring Bootプロジェクトを作成し、Webアプリケーションを開発できる
- **Spring MVCの実装** - コントローラー、ビュー、フォーム処理を適切に実装できる
- **Spring Data JDBCの活用** - データベースとの連携をSpring Data JDBCで効率的に実装できる
- **レイヤードアーキテクチャ** - Controller/Service/Repositoryの責務を理解し、適切に設計できる
- **セキュリティ実装** - Spring Securityを使った認証・認可機能を実装できる
- **テストコード作成** - JUnit 5とMockMvcを使ったテストコードが書ける
- **REST API開発** - RESTful APIを設計・実装できる

## 次のステップ

このガイドライン完了後は、以下の学習に進むことをお勧めします：

- **Spring Data JPA** - より高度なORM機能を学び、複雑なデータモデルに対応する
- **マイクロサービス開発** - Spring Cloudを使った分散システム開発を学ぶ
- **React/Vue.js + Spring Boot** - フロントエンドフレームワークとの連携を学ぶ
- **Docker + Spring Boot** - コンテナ化とクラウドデプロイを学ぶ
- **CI/CD** - GitHub ActionsやJenkinsを使った継続的インテグレーションを学ぶ

## よくある質問

### Q: Spring Data JPAとSpring Data JDBCの違いは何ですか？
A: Spring Data JDBCはJDBCの薄いラッパーで、SQLを意識した直接的なデータアクセスを行います。Spring Data JPAはORMとして動作し、オブジェクトとテーブルのマッピングを自動化しますが、学習コストが高くなります。本ガイドでは、JDBCの知識を活かせるSpring Data JDBCを採用しています。

### Q: なぜサーブレット/JSPではなくSpringを使うのですか？
A: Springは、DIによる疎結合設計、設定の自動化、セキュリティ機能の統合、テストの容易さなど、エンタープライズ開発に必要な機能を包括的に提供します。サーブレット/JSPの知識があれば、Springへの移行はスムーズです。

### Q: EclipseとIntelliJ IDEAどちらを使うべきですか？
A: どちらでも問題ありません。本ガイドではEclipse + STSを使用していますが、IntelliJ IDEA（Community Editionでも可）でも同様に学習できます。使い慣れたIDEを選択してください。

### Q: Mavenの代わりにGradleを使えますか？
A: はい、GradleでもSpring Bootプロジェクトを構築できます。本ガイドではMavenを主に使用していますが、Gradleでの設定例も随時紹介します。
