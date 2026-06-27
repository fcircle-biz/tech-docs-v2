# Spring Data JPA 学習ガイドライン

このガイドラインでは、Java の Entity とデータベーステーブルを対応させながら、関連を持つデータを扱う仕組みである **Spring Data JPA** の基礎を、入門者向けに段階的に学習するためのカリキュラムを提供しています。前教材「Spring MVC」までで学んだ Controller・Service・Repository の構成を土台に、`@Entity` と `JpaRepository`、そして `@ManyToOne` による関連テーブルの扱いを、手を動かしながら習得できます。題材は初心者にもイメージしやすい **部署・社員管理アプリケーション** です。

| 項目 | 内容 |
|------|------|
| 難易度 | 初級 |
| 所要時間 | 約11時間 |
| 分類 | プログラミング言語（Java エコシステム / Spring） |

> **Spring 学習教材シリーズの発展教材**
> 1. Spring 基礎
> 2. Spring Data JDBC
> 3. Spring MVC
> 4. **Spring Data JPA**（本教材）
>
> Spring Data JDBC では1つのテーブルに対するシンプルな CRUD を学びました。本教材では Spring Data JPA を使い、`departments`（部署）と `employees`（社員）という **関連を持つ2つのテーブル** を、Java の Entity として扱う方法を学びます。

## 前提条件

### 必要な環境
- JDK 17 以降（Java 開発環境）
- Spring Boot 3.x（Spring Initializr などで生成）
- H2 Database（学習用の軽量データベース。依存に追加するだけで利用可能）
- テキストエディタまたは IDE（IntelliJ IDEA、Eclipse、VS Code など）

### 参考リソース
- [Spring Data JPA 公式リファレンス](https://docs.spring.io/spring-data/jpa/reference/jpa.html)
- [Spring Boot 公式リファレンス](https://docs.spring.io/spring-boot/index.html)
- [Jakarta Persistence (JPA) 仕様](https://jakarta.ee/specifications/persistence/)
- [Hibernate ORM 公式ドキュメント](https://hibernate.org/orm/documentation/)
- [H2 Database 公式サイト](https://www.h2database.com/)

### 前提知識
- **必須**: Java の基本文法（クラス・フィールド・メソッド・コンストラクタ）、Spring の DI・Bean・`@Service`・`@Repository` の役割、Spring Data JDBC の Entity・Repository・CRUD の基本、Spring MVC の Controller・Model・View・Thymeleaf の基本、SQL の基本（SELECT / INSERT / UPDATE / DELETE）
- **推奨**: `application.properties` の基本、H2 Database を使ったことがある経験

## 学習コンテンツ

### [1. Spring Data JPAとは](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/spring-data-jpa/spring-data-jpa-learning-material-01.html)
JPA・Hibernate・Spring Data JPA の3つの関係と役割を学びます。JPA が「Java のオブジェクトと DB テーブルを対応させる仕様」、Hibernate が「その実装」、Spring Data JPA が「Spring で使いやすくする仕組み」であることを理解し、Spring Data JDBC との違いと、本教材で作る部署・社員管理アプリの全体像をつかみます。

### [2. Spring Data JPAプロジェクトの作成](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/spring-data-jpa/spring-data-jpa-learning-material-02.html)
Spring Boot で JPA を使うためのプロジェクトを作成します。Spring Web・Spring Data JPA・H2 Database・Thymeleaf の依存関係、controller / service / repository / entity のプロジェクト構成、`application.properties` の DB 接続設定・SQL 表示設定を理解し、アプリの起動を確認します。

### [3. Entityの基本](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/spring-data-jpa/spring-data-jpa-learning-material-03.html)
JPA で扱う Entity クラスの基本を学びます。`@Entity`・`@Table`・`@Id`・`@GeneratedValue`・`@Column` の役割を理解し、`employees` テーブルの1行を表す `Employee` クラスを作成します。Java クラスと DB テーブルの対応関係を図でつかみます。

### [4. RepositoryによるCRUD操作](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/spring-data-jpa/spring-data-jpa-learning-material-04.html)
`JpaRepository` を継承するだけで利用できる基本的な CRUD メソッドを学びます。`findAll`・`findById`・`save`・`deleteById`・`count` の使い方を理解し、インターフェースを作るだけで CRUD が使えるようになる Spring Data JPA の仕組みを体感します。

### [5. ServiceからRepositoryを利用する](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/spring-data-jpa/spring-data-jpa-learning-material-05.html)
業務処理を担う Service と、データアクセスを担う Repository の役割分担を学びます。コンストラクタインジェクションで Repository を Service に渡す流れと、一覧取得・登録・更新・削除を Service にまとめる方法を理解し、Controller から Repository を直接呼ばない設計の意味をつかみます。

### [6. 条件検索を作成する](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/spring-data-jpa/spring-data-jpa-learning-material-06.html)
Repository のメソッド名から検索処理を自動生成する仕組みを学びます。`findByName`・`findByEmail`・`findByNameContaining`（部分一致）・`findAllByOrderByIdDesc`（並び替え）など、命名規則に従ってメソッドを定義するだけで検索が作れることを理解します。

### [7. @Queryで検索処理を書く](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/spring-data-jpa/spring-data-jpa-learning-material-07.html)
メソッド名だけでは表現しづらい検索を `@Query` で実装します。テーブルではなく Entity を対象にした問い合わせ言語 JPQL、`@Query` の書き方、`@Param` での値の受け渡しを理解し、必要な場合のみ使うネイティブ SQL についても学びます。

### [8. Entityの関連を扱う](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/spring-data-jpa/spring-data-jpa-learning-material-08.html)
部署と社員の関係を例に、Entity 同士の関連を学びます。「多数の社員が1つの部署に所属する」多対1の関連を `@ManyToOne` で表し、外部キーのカラムを `@JoinColumn` で指定する方法を理解します。本教材では混乱を避けるため、社員から部署を参照する単方向の関連に絞ります。

### [9. トランザクションを理解する](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/spring-data-jpa/spring-data-jpa-learning-material-09.html)
複数の DB 操作を安全に扱うためのトランザクションを学びます。コミット（確定）・ロールバック（取り消し）の意味、`@Transactional` でトランザクション境界を指定する方法、そして `@Transactional` を基本的に Service 層に付ける理由を理解します。

### [10. Spring MVCと連携する](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/spring-data-jpa/spring-data-jpa-learning-material-10.html)
Spring MVC で学んだ Controller・Model・View の流れに、JPA による DB 操作を組み込みます。社員一覧・詳細・登録・編集・削除・検索の各画面と処理を作り、ブラウザ → Controller → Service → Repository → DB → View の流れを通して理解します。

### [11. 総合演習：部署・社員管理アプリ](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/spring-data-jpa/spring-data-jpa-learning-material-11.html)
これまで学んだ Entity・Repository・Service・関連・Spring MVC 連携を組み合わせ、関連テーブルを扱う部署・社員管理 Web アプリケーションを完成させます。部署マスタを使って社員登録画面で部署を選択し、社員一覧に所属部署名を表示する、実務に近い機能を作り上げます。

## 推奨所要時間

| 章 | 内容 | 目安時間 |
|----|------|----------|
| 第1章 | Spring Data JPAとは | 50分 |
| 第2章 | Spring Data JPAプロジェクトの作成 | 55分 |
| 第3章 | Entityの基本 | 60分 |
| 第4章 | RepositoryによるCRUD操作 | 60分 |
| 第5章 | ServiceからRepositoryを利用する | 60分 |
| 第6章 | 条件検索を作成する | 60分 |
| 第7章 | @Queryで検索処理を書く | 60分 |
| 第8章 | Entityの関連を扱う | 70分 |
| 第9章 | トランザクションを理解する | 55分 |
| 第10章 | Spring MVCと連携する | 70分 |
| 第11章 | 総合演習：部署・社員管理アプリ | 90分 |
| **合計** | | **約11時間** |

## 学習目標
このガイドを完了すると、以下のスキルを身につけることができます：
- JPA・Hibernate・Spring Data JPA の違いと役割を説明できる
- Spring Data JDBC と Spring Data JPA の違いを説明できる
- `@Entity`・`@Id`・`@GeneratedValue`・`@Column` を使って Entity を作成できる
- `JpaRepository` を使って CRUD 処理を実装できる
- メソッド名による検索・`@Query` による検索を使い分けられる
- `@ManyToOne`・`@JoinColumn` を使って関連テーブルを扱える
- `@Transactional` の基本的な役割を説明できる
- Spring MVC の画面から JPA の Service を利用できる
- 関連を持つデータを扱う簡単な業務 Web アプリケーションを作成できる

## 次のステップ
- **JPA の双方向関連** — `@OneToMany`・`mappedBy`・遅延読み込み（FetchType）など、本教材では控えめにした双方向関連へ発展させる
- **N+1問題とパフォーマンス** — 関連データの取得時に発生しがちな N+1 問題と、`JOIN FETCH`・`@EntityGraph` による対策を学ぶ
- **Spring Security** — 認証・認可を組み込み、ログインユーザーに応じたデータ操作を実現する
- **SQL の深掘り** — 結合（JOIN）・集計など、より実務的な SQL の習得
