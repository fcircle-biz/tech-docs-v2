# JDBC 学習ガイドライン

このガイドラインでは、JDBCの基礎をプログラム初心者向けに段階的に学習するためのカリキュラムを提供しています。JDBCとは「Java Database Connectivity」の略で、JavaプログラムからデータベースにアクセスするためのJava標準APIです。データベースの知識がなくても、基本から丁寧に解説します。

## 前提条件
### 必要な環境
- Java Development Kit (JDK) 8以降
- テキストエディタまたはIDE（Eclipse、IntelliJ IDEA、VS Codeなど）
- データベース（MySQL、PostgreSQL、H2など。学習にはインストール不要のH2データベースを推奨）
- JDBCドライバ（各データベースに対応したJARファイル）

### 参考リソース
- [Oracle公式 JDBC入門](https://docs.oracle.com/javase/tutorial/jdbc/basics/index.html)
- [H2データベース公式サイト](https://www.h2database.com/)
- [MySQL公式ドキュメント](https://dev.mysql.com/doc/)
- [PostgreSQL公式ドキュメント](https://www.postgresql.jp/document/)

### 前提知識
- **必須**: Java基本文法（変数、条件分岐、繰り返し、メソッド、クラス、例外処理の基礎）
- **推奨**: SQL基礎知識（SELECT、INSERT、UPDATE、DELETE文の基本）、オブジェクト指向プログラミングの基本概念

## 学習コンテンツ
### [1. JDBCとは？ データベース接続の基本](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/jdbc/jdbc-learning-material-01.html)
JDBCの概要と役割、データベースとは何か、JDBCを使う利点について学びます。データベース接続の全体像を理解し、JDBCドライバの仕組みを把握します。

### [2. 開発環境の準備と初めての接続](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/jdbc/jdbc-learning-material-02.html)
JDBCドライバのセットアップ方法、H2データベースのインストール、初めてのデータベース接続プログラムの作成を行います。Connection、DriverManager、接続URLの書き方を実践的に学びます。

### [3. データの検索（SELECT文）をマスターする](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/jdbc/jdbc-learning-material-03.html)
Statement、PreparedStatementを使ったSELECT文の実行、ResultSetを使った検索結果の取得と処理方法を学びます。WHERE句を使った条件検索、複数件データの取得方法を実践します。

### [4. データの登録・更新・削除（INSERT/UPDATE/DELETE文）](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/jdbc/jdbc-learning-material-04.html)
データベースへの新規データ登録（INSERT）、既存データの更新（UPDATE）、データの削除（DELETE）をJDBCで実行する方法を学びます。executeUpdate()メソッドの使い方と戻り値の意味を理解します。

### [5. プリペアドステートメント（PreparedStatement）の活用](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/jdbc/jdbc-learning-material-05.html)
SQLインジェクション対策と処理速度向上のためのPreparedStatementの使い方を詳しく学びます。プレースホルダ（?）の使い方、パラメータのバインド方法、Statementとの違いを理解します。

### [6. トランザクション処理と例外処理](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/jdbc/jdbc-learning-material-06.html)
データの整合性を保つためのトランザクション制御（commit、rollback）、自動コミットの設定、try-catch-finallyを使った適切な例外処理とリソース管理を学びます。

### [7. 実践的なDAO（Data Access Object）パターン](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/jdbc/jdbc-learning-material-07.html)
データベース操作を整理するDAOパターンの設計と実装を学びます。データベース処理とビジネスロジックの分離、再利用可能なDAOクラスの作成方法を実践します。

### [8. ベストプラクティスとトラブルシューティング](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/jdbc/jdbc-learning-material-08.html)
コネクションプーリングの導入、リソースの適切な解放（try-with-resources文）、よくあるエラーとその対処法、パフォーマンス向上のヒントを学びます。

## 学習の進め方
1. **章の順番通りに学習を進めてください**: 各章は前の章で学んだ内容を前提としています。特に第1章から第3章は基礎となる重要な内容です。
2. **実際にコードを書いて動かすことが重要**: 説明を読むだけでなく、必ず自分の手でコードを入力し、実行してください。エラーが出たら、エラーメッセージをよく読んで原因を考える習慣をつけましょう。
3. **データベースは実際に操作してみる**: SELECT、INSERT、UPDATE、DELETEを実行して、データがどのように変化するかを目で確認することで理解が深まります。
4. **演習問題に取り組む**: 各章の演習問題で知識を定着させましょう。分からない場合は、前の章に戻って復習してください。
5. **公式ドキュメントも参照する**: わからないメソッドやクラスがあれば、Oracle公式のJavadocを確認する習慣をつけましょう。

## 推奨所要時間

| 章 | 内容 | 目安時間 |
|----------|------|----------|
| 第1章 | JDBCとは？ データベース接続の基本 | 45分 |
| 第2章 | 開発環境の準備と初めての接続 | 1時間 |
| 第3章 | データの検索（SELECT文）をマスターする | 1時間 |
| 第4章 | データの登録・更新・削除（INSERT/UPDATE/DELETE文） | 1.5時間 |
| 第5章 | プリペアドステートメント（PreparedStatement）の活用 | 1時間 |
| 第6章 | トランザクション処理と例外処理 | 1.5時間 |
| 第7章 | 実践的なDAO（Data Access Object）パターン | 1.5時間 |
| 第8章 | ベストプラクティスとトラブルシューティング | 1時間 |
| **合計** | | **約9.5時間** |

毎日1時間程度の学習を継続することをお勧めします。

## 関連リソース
- [Java入門学習ガイド](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/java/java-learning-material-01.html)
- [SQL基礎チートシート](https://fcircle-biz.github.io/tech_docs/cheatsheet/database/sql-basics-cheatsheet.html)（※将来的に作成予定）
- [JSP/Servlet学習ガイド](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/jsp/jsp-learning-material-01.html)

## 学習目標
このガイドを完了すると、以下のスキルを身につけることができます：
- **JDBCを使ったデータベース接続とCRUD操作**: Javaプログラムからデータベースに接続し、データの検索・登録・更新・削除ができるようになります
- **SQLインジェクション対策**: PreparedStatementを使った安全なSQL実行ができるようになります
- **トランザクション制御**: データの整合性を保つためのcommit/rollbackが理解できます
- **適切な例外処理とリソース管理**: try-with-resources文を使った安全なプログラムが書けるようになります
- **DAOパターンの実装**: データベース処理を整理した保守性の高いコードが書けるようになります
- **実務で使えるJDBCプログラミング**: Webアプリケーション開発やバッチ処理で必要なデータベース操作の基礎が身につきます

## 次のステップ
このガイドライン完了後は、以下の学習に進むことをお勧めします：
- [JSP/Servlet学習ガイド](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/jsp/jsp-learning-material-01.html) - WebアプリケーションでJDBCを活用
- [Spring Framework学習ガイド](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/spring/) - モダンなJavaフレームワークでのデータベース操作（Spring JDBC、Spring Data JPA）
- [データベース設計・ER図学習ガイド](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/data-modeling/) - データベース設計の基礎を学ぶ
