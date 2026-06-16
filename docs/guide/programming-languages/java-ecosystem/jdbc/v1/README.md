# JDBC学習ガイドライン

このガイドラインでは、Java Database Connectivity (JDBC)を初心者から中級者レベルまで段階的に学習するためのカリキュラムを提供しています。JDBCはJavaからデータベースへアクセスするための標準APIであり、多くのJavaアプリケーション開発で必須のスキルです。各トピックには詳細な解説へのリンクが含まれています。

## 学習コンテンツ

### [1. JDBCの基礎](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/jdbc/jdbc-learning-material-01.html)
JDBCの概要、役割と重要性、アーキテクチャ、ドライバの種類と特徴、PostgreSQLを使った開発環境のセットアップ方法を解説します。

### [2. データベース接続](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/jdbc/jdbc-learning-material-02.html)
DriverManagerクラスの使用方法、Connection・Statement・ResultSetの基本概念、データベース接続文字列（JDBC URL）の構成、実際の接続プログラム作成方法を学びます。

### [3. 基本的なCRUD操作](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/jdbc/jdbc-learning-material-03.html)
SELECT文によるデータ取得、PreparedStatementを使用したデータ挿入、データの更新と削除の基本操作、そして実践的な住所録管理システムの作成方法を解説します。

### [4. 例外処理とリソース管理](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/jdbc/jdbc-learning-material-04.html)
JDBCにおける例外の種類と処理方法、try-with-resources構文を使用した効率的なリソース管理、コネクションプールの基本概念と実装方法、例外処理を実装した実践的なJDBCプログラムの作成について学びます。

### [5. 高度なJDBC機能](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/jdbc/jdbc-learning-material-05.html)
バッチ処理によるパフォーマンス最適化、トランザクション管理（commit, rollback）、ストアドプロシージャとファンクションの呼び出し、在庫管理システムを例にしたトランザクション処理の実装について学びます。

### [6. JDBCとオブジェクト指向設計](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/jdbc/jdbc-learning-material-06.html)
Data Access Object（DAO）パターンの実装、オブジェクトリレーショナルマッピング（ORM）の基本原理、JDBCを使ったデータベース操作とJavaコレクションの連携手法、実際のECサイトバックエンドでのDAOパターン適用方法について学びます。

### [7. パフォーマンスとセキュリティ](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/jdbc/jdbc-learning-material-07.html)
SQLインジェクションとその危険性、PreparedStatementを使用したSQLインジェクション対策、入力検証とエスケープ処理、JDBCアプリケーションのパフォーマンスチューニング手法、コネクションプールの効果的な利用方法について学びます。

### [8. 総合プロジェクト - 図書館管理システム](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/jdbc/jdbc-learning-material-08.html)
これまでに学んだJDBCの知識を活用して、実践的な図書館管理システムを構築します。要件分析、データベース設計、レイヤー化アーキテクチャの実装、データアクセス層（DAO）の構築、ビジネスロジック層の実装、UIの作成、テスト、ドキュメント作成までの一連の開発プロセスを学びます。

### [9. JDBCリファレンス](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/jdbc/jdbc-learning-material-09.html)
JDBCの主要クラスとメソッド、JavaとPostgreSQLのデータ型マッピング、一般的なエラーコードと対処法などのリファレンス情報を学びます。実践的なJDBCプログラミングに役立つデバッグとトラブルシューティングのテクニックも紹介します。

### [10. データベース固有の設定](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/jdbc/jdbc-learning-material-10.html)
各データベース管理システム（MySQL、PostgreSQL、Oracle、SQL Server）の接続設定と特有の機能について学びます。データベース固有のJDBC URL形式や接続パラメータ、各データベースの特徴と注意点について解説します。

## 学習の進め方

1. 初めてJDBCを学ぶ方は、必ず「1. JDBCの基礎」から順番に学習を進めてください。
2. 各章の実習課題に取り組み、実際にコードを書いて動作確認することで理解を深めましょう。
3. 各章末の理解度確認テストで、学習内容の定着を確認してください。
4. 応用力を身につけるために、最終章の総合課題にもチャレンジしてみましょう。

## 前提条件

このガイドを効果的に学ぶためには、以下の知識・環境が必要です：

- Java言語の基本的な知識（変数、制御構文、クラス、例外処理など）
- リレーショナルデータベースとSQLの基礎知識
- 開発環境：JDK 8以上、PostgreSQLなどのRDBMS、お好みのIDE

## 関連リソース

- [Java初心者向けのチートシート](https://fcircle-biz.github.io/tech_docs/cheatsheet/fundamentals/java-cheatsheet.html)
- [JDBC初心者向けのチートシート](https://fcircle-biz.github.io/tech_docs/cheatsheet/fundamentals/jdbc-cheatsheet.html)
- [SQL基礎チートシート](https://fcircle-biz.github.io/tech_docs/cheatsheet/fundamentals/sql-cheatsheet.html)
- [PostgreSQLチートシート](https://fcircle-biz.github.io/tech_docs/cheatsheet/fundamentals/postgresql-infographic.html)