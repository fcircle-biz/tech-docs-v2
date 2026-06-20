# JDBC 学習ガイドライン

このガイドラインでは、Java からデータベースを操作するための標準 API である **JDBC（Java Database Connectivity）** の基礎を、入門者向けに段階的に学習するためのカリキュラムを提供しています。データベース接続の全体像から、検索・更新・トランザクション・DAO パターン・ベストプラクティスまでを、実際に手を動かしながら習得できます。

| 項目 | 内容 |
|------|------|
| 難易度 | 初級 |
| 所要時間 | 約7.5時間 |
| 分類 | プログラミング言語（Java エコシステム） |

## 前提条件

### 必要な環境
- JDK 17 以降（Java 開発環境）
- テキストエディタまたは IDE（IntelliJ IDEA、Eclipse、VS Code など）
- H2 Database（学習用の軽量データベース。第2章でセットアップ）

### 参考リソース
- [JDBC 公式ドキュメント（Java SE）](https://docs.oracle.com/javase/jp/17/docs/api/java.sql/module-summary.html)
- [JDBC Basics（Java Tutorials）](https://docs.oracle.com/javase/tutorial/jdbc/basics/index.html)
- [H2 Database 公式サイト](https://www.h2database.com/)

### 前提知識
- **必須**: Java の基本文法（変数・型・条件分岐・ループ・メソッド・クラス・例外処理の基礎）
- **推奨**: SQL の基礎（SELECT / INSERT / UPDATE / DELETE の基本的な書き方）、オブジェクト指向の基本概念

## 学習コンテンツ

### [1. JDBCとは？ データベース接続の基本](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/jdbc/jdbc-learning-material-01.html)
JDBC の概要と役割、データベースとは何か、JDBC を使う利点について学びます。データベース接続の全体像を理解し、JDBC ドライバの仕組みを把握します。

### [2. 開発環境の準備と初めての接続](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/jdbc/jdbc-learning-material-02.html)
JDBC ドライバのセットアップ方法、H2 データベースのインストール、初めてのデータベース接続プログラムの作成を行います。Connection、DriverManager、接続 URL の書き方を実践的に学びます。

### [3. データの検索（SELECT文）をマスターする](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/jdbc/jdbc-learning-material-03.html)
Statement、PreparedStatement を使った SELECT 文の実行、ResultSet を使った検索結果の取得と処理方法を学びます。WHERE 句を使った条件検索、複数件データの取得方法を実践します。

### [4. データの登録・更新・削除（INSERT/UPDATE/DELETE文）](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/jdbc/jdbc-learning-material-04.html)
データベースへの新規データ登録（INSERT）、既存データの更新（UPDATE）、データの削除（DELETE）を JDBC で実行する方法を学びます。executeUpdate() メソッドの使い方と戻り値の意味を理解します。

### [5. プリペアドステートメント（PreparedStatement）の活用](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/jdbc/jdbc-learning-material-05.html)
SQL インジェクション対策と処理速度向上のための PreparedStatement の使い方を詳しく学びます。プレースホルダ（?）の使い方、パラメータのバインド方法、Statement との違いを理解します。

### [6. トランザクション処理と例外処理](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/jdbc/jdbc-learning-material-06.html)
データの整合性を保つためのトランザクション制御（commit、rollback）、自動コミットの設定、try-catch-finally を使った適切な例外処理とリソース管理を学びます。

### [7. 実践的なDAO（Data Access Object）パターン](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/jdbc/jdbc-learning-material-07.html)
データベース操作を整理する DAO パターンの設計と実装を学びます。データベース処理とビジネスロジックの分離、再利用可能な DAO クラスの作成方法を実践します。

### [8. ベストプラクティスとトラブルシューティング](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/jdbc/jdbc-learning-material-08.html)
コネクションプーリングの導入、リソースの適切な解放（try-with-resources 文）、よくあるエラーとその対処法、パフォーマンス向上のヒントを学びます。

## 推奨所要時間

| 章 | 内容 | 目安時間 |
|----|------|----------|
| 第1章 | JDBCとは？ データベース接続の基本 | 45分 |
| 第2章 | 開発環境の準備と初めての接続 | 60分 |
| 第3章 | データの検索（SELECT文）をマスターする | 60分 |
| 第4章 | データの登録・更新・削除（INSERT/UPDATE/DELETE文） | 60分 |
| 第5章 | プリペアドステートメント（PreparedStatement）の活用 | 60分 |
| 第6章 | トランザクション処理と例外処理 | 60分 |
| 第7章 | 実践的なDAO（Data Access Object）パターン | 60分 |
| 第8章 | ベストプラクティスとトラブルシューティング | 50分 |
| **合計** | | **約7.5時間** |

## 学習目標
このガイドを完了すると、以下のスキルを身につけることができます：
- JDBC の役割とデータベース接続の全体像を説明できる
- DriverManager と Connection を使ってデータベースに接続できる
- Statement / PreparedStatement で SELECT・INSERT・UPDATE・DELETE を実行できる
- ResultSet から検索結果を安全に取り出して処理できる
- PreparedStatement で SQL インジェクションを防ぎ、安全なコードを書ける
- トランザクション（commit / rollback）でデータの整合性を保てる
- DAO パターンでデータベース処理を整理し、再利用可能なコードを設計できる
- try-with-resources やコネクションプーリングなどのベストプラクティスを実践できる

## 次のステップ
- **Spring Framework / Spring Boot** — JDBC をさらに抽象化した `JdbcTemplate` や、O/R マッパー（JPA・MyBatis）への発展
- **SQL の深掘り** — 結合（JOIN）・集計・サブクエリなど、より高度な SQL の習得
- **データベース設計（ER 図・正規化）** — 実務で通用するテーブル設計の基礎
