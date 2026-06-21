# Spring基礎 学習ガイドライン

このガイドラインでは、Java アプリケーション開発を支える **Spring Framework** の中心的な考え方を、入門者向けに段階的に学習するためのカリキュラムを提供しています。「Spring はオブジェクトを管理してくれる仕組み」という出発点から、DI（依存性注入）・Bean・アノテーション・AOP という Spring の核となる概念を、短いコンソール中心のコード例と図解でやさしく理解できます。

本教材は **Spring学習教材シリーズ（全3教材）の第1弾**です。

1. **Spring基礎**（本教材）
2. Spring Data JDBC
3. Spring MVC

Spring Data JDBC や Spring MVC に進む前に、すべての土台となる DI・Bean・AOP の考え方を固めることを目的としています。

| 項目 | 内容 |
|------|------|
| 難易度 | 初級 |
| 所要時間 | 約8時間 |
| 分類 | プログラミング言語（Java エコシステム） |

## 前提条件

### 必要な環境
- JDK 17 以降（Java 開発環境）
- テキストエディタまたは IDE（IntelliJ IDEA、Eclipse、VS Code など）
- ビルドツール（Maven または Gradle。Spring Initializr で雛形を生成できます）

### 参考リソース
- [Spring 公式サイト](https://spring.io/)
- [Spring Boot リファレンスドキュメント](https://docs.spring.io/spring-boot/index.html)
- [Spring Framework リファレンス（Core / IoC・AOP）](https://docs.spring.io/spring-framework/reference/index.html)
- [Spring Initializr（プロジェクト雛形生成）](https://start.spring.io/)

### 前提知識
- **必須**: Java の基本文法（変数・型・条件分岐・ループ・メソッド・コンストラクタ）、クラスとインスタンス、インターフェースの基本、パッケージの基本
- **推奨**: オブジェクト指向の基本概念（継承・ポリモーフィズム）。なお JDBC・データベース操作・MVC・HTTP・Web アプリケーションの詳細な知識は前提としません（次教材で扱います）。

## 学習コンテンツ

### [1. Springとは](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/spring-basic/spring-basic-learning-material-01.html)
Spring が何をするフレームワークなのか、「オブジェクトを管理して必要な場所に渡してくれる」という中心アイデアを理解します。Spring Boot を使う理由と、Spring 学習全体の流れもつかみます。

### [2. Spring Bootプロジェクトの基本構成](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/spring-basic/spring-basic-learning-material-02.html)
Spring Boot プロジェクトの基本的なファイル構成、`@SpringBootApplication` と main メソッドの役割、`application.properties` の位置づけを理解します。アプリがどこから起動するのかを読めるようになります。

### [3. DIとは](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/spring-basic/spring-basic-learning-material-03.html)
DI（依存性注入）の意味を、`new` で自分でオブジェクトを作る場合と比較しながら理解します。「必要な部品を Spring に用意してもらう」という考え方と、コンストラクタインジェクションの基本形を学びます。

### [4. Spring Beanとは](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/spring-basic/spring-basic-learning-material-04.html)
「Spring が管理するオブジェクト＝Bean」という考え方を理解します。`@Component`・`@Service`・`@Repository`・`@Controller`・`@RestController` といった代表的なアノテーションが、それぞれクラスの役割をどう伝えるのかを学びます。

### [5. DIを使ったクラス分割](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/spring-basic/spring-basic-learning-material-05.html)
Controller・Service・Repository の役割分担と、「Controller → Service → Repository」という処理の流れを理解します。DI でクラスを連携させる基本構成は、次教材の Spring MVC・Spring Data JDBC にもつながります。

### [6. 設定ファイルとプロファイルの基本](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/spring-basic/spring-basic-learning-material-06.html)
`application.properties` の役割と、設定値を Java コードから外部化する考え方を学びます。開発・テスト・本番で設定を切り替えるプロファイルの概要もつかみます。

### [7. AOPとは](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/spring-basic/spring-basic-learning-material-07.html)
AOP（アスペクト指向プログラミング）の目的を、「ログ出力などの共通処理をまとめて差し込む仕組み」として理解します。`@Aspect`・`@Before`・`@After` を使った簡単なログ出力の例を通じて、共通処理を本来の業務処理から分離する考え方を学びます。

### [8. 総合演習：DIとAOPを使った簡単な処理](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/spring-basic/spring-basic-learning-material-08.html)
UserController・UserService・UserRepository の3クラスを DI で連携させ、AOP で Service のメソッド実行前後にログを出力する総合演習に取り組みます。Spring 基礎で学んだ内容を整理し、次教材への橋渡しを行います。

## 推奨所要時間

| 章 | 内容 | 目安時間 |
|----|------|----------|
| 第1章 | Springとは | 50分 |
| 第2章 | Spring Bootプロジェクトの基本構成 | 55分 |
| 第3章 | DIとは | 70分 |
| 第4章 | Spring Beanとは | 60分 |
| 第5章 | DIを使ったクラス分割 | 65分 |
| 第6章 | 設定ファイルとプロファイルの基本 | 55分 |
| 第7章 | AOPとは | 70分 |
| 第8章 | 総合演習：DIとAOPを使った簡単な処理 | 55分 |
| **合計** | | **約8時間** |

## 学習目標
このガイドを完了すると、以下のことができるようになります：
- Spring とは何か、何を助けてくれるフレームワークなのかを説明できる
- Spring Boot を使う理由を説明できる
- DI（依存性注入）の考え方を、`new` で直接作る場合と比べて説明できる
- Spring Bean とは何かを説明できる
- `@Component`・`@Service`・`@Repository` の違いを説明できる
- コンストラクタインジェクションの基本形を理解できる
- `application.properties` の役割を理解できる
- AOP の目的を説明できる
- `@Aspect`・`@Before`・`@After` を使った簡単なログ出力を理解できる
- Spring Boot を使った簡単なアプリケーション構成（Controller・Service・Repository）を読める

## 次のステップ
- **Spring Data JDBC（シリーズ第2弾）** — 本教材で学んだ DI・Repository の考え方を土台に、データベース操作を学ぶ
- **Spring MVC（シリーズ第3弾）** — Controller を中心に、Web アプリケーション（HTTP・画面・REST API）を学ぶ
- **JDBC の基礎** — データベースアクセスの仕組みを下のレイヤから理解したい場合の補強教材
