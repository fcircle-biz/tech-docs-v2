# Spring Data JDBC 学習ガイドライン

このガイドラインでは、Spring Boot アプリケーションからデータベースを操作するための仕組みである **Spring Data JDBC** の基礎を、入門者向けに段階的に学習するためのカリキュラムを提供しています。前教材「Spring 基礎」で学んだ DI・Bean・Service・Repository の考え方を土台に、`CrudRepository` を使ったシンプルな CRUD（登録・参照・更新・削除）処理を、手を動かしながら習得できます。

| 項目 | 内容 |
|------|------|
| 難易度 | 初級 |
| 所要時間 | 約8時間 |
| 分類 | プログラミング言語（Java エコシステム / Spring） |

> **Spring 学習教材シリーズ（全3教材）の2作目**
> 1. Spring 基礎
> 2. **Spring Data JDBC**（本教材）
> 3. Spring MVC
>
> 本教材では Web 画面を作らず、`CommandLineRunner` を使ってコンソールでデータベース操作を確認します。次教材「Spring MVC」で、Controller から Service を呼び出す Web アプリケーションへ発展させます。

## 前提条件

### 必要な環境
- JDK 17 以降（Java 開発環境）
- Spring Boot 3.x（Spring Initializr などで生成）
- H2 Database（学習用の軽量データベース。依存に追加するだけで利用可能）
- テキストエディタまたは IDE（IntelliJ IDEA、Eclipse、VS Code など）

### 参考リソース
- [Spring Data JDBC 公式リファレンス](https://docs.spring.io/spring-data/relational/reference/jdbc.html)
- [Spring Boot 公式リファレンス](https://docs.spring.io/spring-boot/index.html)
- [H2 Database 公式サイト](https://www.h2database.com/)

### 前提知識
- **必須**: Java の基本文法（クラスとインスタンス・メソッド・コンストラクタ・インターフェースの基本）、SQL の基本（SELECT / INSERT / UPDATE / DELETE）、Spring の DI・Bean・`@Service`・`@Repository`・`application.properties` の基本
- **推奨**: JDBC の概要、または Java からデータベースを操作するイメージ

## 学習コンテンツ

### [1. Spring Data JDBCとは](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/spring-data-jdbc/spring-data-jdbc-learning-material-01.html)
Spring Data JDBC の役割と、通常の JDBC との違いを学びます。SQL 実行・接続管理を自分で書く JDBC に対し、Repository を通じて CRUD をシンプルに書ける仕組みであることを理解し、Entity・Repository・Service という登場人物の全体像をつかみます。

### [2. データベース接続設定](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/spring-data-jdbc/spring-data-jdbc-learning-material-02.html)
`application.properties` にデータベース接続情報を書く方法を学びます。学習用の軽量データベース H2 を使い、接続 URL・ドライバ・ユーザー名・H2 コンソール・SQL 初期化（`spring.sql.init.mode`）の設定を理解します。

### [3. テーブル作成と初期データ](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/spring-data-jdbc/spring-data-jdbc-learning-material-03.html)
`schema.sql`（テーブル定義）と `data.sql`（初期データ登録）の役割を学びます。`resources` フォルダに配置すると起動時に自動実行される仕組みと、本教材で扱う `users` テーブル（id・name・email）の構成を理解します。

### [4. エンティティクラス](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/spring-data-jdbc/spring-data-jdbc-learning-material-04.html)
テーブルの1行を Java オブジェクトとして表すエンティティクラスの役割を学びます。`@Table` でテーブルとの対応を示し、`@Id` で主キーを表す書き方を理解し、`User` クラスを作成します。

### [5. Repositoryインターフェース](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/spring-data-jdbc/spring-data-jdbc-learning-material-05.html)
データベースアクセスの入口となる Repository の役割を学びます。`CrudRepository` を継承するだけで `findAll` / `findById` / `save` / `deleteById` などの基本 CRUD メソッドが使えるようになる仕組みを理解します。

### [6. ServiceからRepositoryを使う](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/spring-data-jdbc/spring-data-jdbc-learning-material-06.html)
業務処理を担う Service と、データアクセスを担う Repository の役割分担を学びます。DI（コンストラクタインジェクション）で Repository を Service に渡す流れと、`findAll` / `findById` / `save` / `deleteById` の使い方を理解します。

### [7. CommandLineRunnerで動作確認する](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/spring-data-jdbc/spring-data-jdbc-learning-material-07.html)
Spring Boot の起動後に処理を実行する `CommandLineRunner` を使い、Web 画面を作らずにコンソールで CRUD を確認します。Service を呼び出して全件取得・登録・再取得を行い、データベース操作の流れを体感します。

### [8. 総合演習：ユーザー管理のCRUD処理](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/spring-data-jdbc/spring-data-jdbc-learning-material-08.html)
これまで学んだ Entity・Repository・Service・`CommandLineRunner` を組み合わせ、ユーザー管理の CRUD 処理を完成させます。`create` / `update` / `delete` を備えた `UserService` を整理し、次教材 Spring MVC へつながる構成を確認します。

## 推奨所要時間

| 章 | 内容 | 目安時間 |
|----|------|----------|
| 第1章 | Spring Data JDBCとは | 50分 |
| 第2章 | データベース接続設定 | 55分 |
| 第3章 | テーブル作成と初期データ | 55分 |
| 第4章 | エンティティクラス | 55分 |
| 第5章 | Repositoryインターフェース | 60分 |
| 第6章 | ServiceからRepositoryを使う | 65分 |
| 第7章 | CommandLineRunnerで動作確認する | 60分 |
| 第8章 | 総合演習：ユーザー管理のCRUD処理 | 80分 |
| **合計** | | **約8時間** |

## 学習目標
このガイドを完了すると、以下のスキルを身につけることができます：
- Spring Data JDBC とは何かを説明できる
- JDBC と Spring Data JDBC の違いを説明できる
- エンティティクラスの役割を説明できる
- Repository インターフェースの役割を説明できる
- `CrudRepository` を使った基本的な CRUD 処理を理解できる
- `application.properties` に DB 接続設定を書ける
- `schema.sql`・`data.sql` の役割を理解できる
- Service から Repository を呼び出して DB 操作を行える
- `findAll` / `findById` / `save` / `deleteById` の基本的な使い方を理解できる

## 次のステップ
- **Spring MVC（シリーズ3作目）** — Controller・リクエスト処理・画面表示を学び、`CommandLineRunner` の代わりに Web リクエストから Service を呼び出す Web アプリケーションへ発展させる
- **Spring Data JPA** — エンティティ間のリレーション（1対多・多対多）やより高度な O/R マッピングへの発展
- **SQL の深掘り** — 結合（JOIN）・集計など、より実務的な SQL の習得
