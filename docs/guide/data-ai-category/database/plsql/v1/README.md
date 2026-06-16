# PL/SQL学習ガイドライン

このガイドラインでは、Oracle PL/SQLの基礎から応用までを段階的に学習するためのカリキュラムを提供しています。各トピックには詳細な解説へのリンクが含まれています。

## 学習コンテンツ

### [1. PL/SQLの基本](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/plsql/plsql-learning-material-01.html)
PL/SQLの概要と特徴、SQLとの違い、ブロック構造、匿名ブロックの作成方法について解説し、Oracle環境でのPL/SQL実行環境の設定方法を学びます。

### [2. 変数とデータ型](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/plsql/plsql-learning-material-02.html)
変数の宣言方法、各種データ型の選択と使い方、定数の定義、%TYPE属性と%ROWTYPE属性を使った変数宣言について学習します。

### [3. 制御構造](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/plsql/plsql-learning-material-03.html)
IF文による条件分岐、CASE文、LOOP文、FOR文、WHILE文などの繰り返し処理と、EXIT文やCONTINUE文を使った制御フローについて学びます。

### [4. プロシージャとファンクション](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/plsql/plsql-learning-material-04.html)
ストアドプロシージャとファンクションの作成、パラメータの定義（IN、OUT、IN OUT）、戻り値の設定、実行方法について詳しく学習します。

### [5. 例外処理](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/plsql/plsql-learning-material-05.html)
EXCEPTION句を使った例外処理の基本、定義済み例外の使い方、ユーザー定義例外の作成、RAISE文による例外の発生について学びます。

### [6. カーソル](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/plsql/plsql-learning-material-06.html)
明示カーソルと暗黙カーソルの違いと使い方、カーソルのライフサイクル、カーソル属性、カーソルFORループについて学習します。

### [7. トリガー](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/plsql/plsql-learning-material-07.html)
データベーストリガーの概念と種類、DMLトリガー（BEFORE/AFTER）、行レベルトリガーと文レベルトリガー、トリガーの作成と管理について学びます。

### [8. パッケージ](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/plsql/plsql-learning-material-08.html)
パッケージの概念と利点、パッケージ仕様部（SPECIFICATION）と本体部（BODY）の作成、パッケージ変数とパッケージプロシージャの使い方を学習します。

### [9. 動的SQL](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/plsql/plsql-learning-material-09.html)
EXECUTE IMMEDIATE文を使った動的SQL実行、REF CURSORの使い方、DBMS_SQLパッケージの基本、動的SQLのセキュリティ対策について学びます。

### [10. パフォーマンスとベストプラクティス](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/plsql/plsql-learning-material-10.html)
PL/SQLのパフォーマンス最適化技術、BULK COLLECTとFORALL文、コンパイル最適化、デバッグ技術、コーディング規約について学習します。

## 学習の進め方

1. 初めてPL/SQLを学ぶ方は、必ず「1. PL/SQLの基本」から順番に学習を進めてください。
2. 各トピックの内容を理解したら、実際にOracle環境でコードを書いて試してみましょう。
3. 演習問題や理解度確認テストに取り組み、理解を深めましょう。
4. 学習を進めながら小さなプロジェクト（例：在庫管理システム、注文処理システム）を作成すると、理解が定着します。
5. SQLの基礎知識がない場合は、先に[SQL学習ガイド](../sql/README.md)を学習することをお勧めします。

## 前提知識

- **必須**: SQL の基本的な知識（SELECT、INSERT、UPDATE、DELETE文）
- **推奨**: リレーショナルデータベースの基本概念
- **推奨**: Oracle Database の基本的な使い方

## 関連リソース

- [PL/SQLチートシート](https://fcircle-biz.github.io/tech_docs/cheatsheet/applied/plsql-graphic-recording.html) - PL/SQLの主要な構文とコマンドをまとめた参考資料
- [SQL学習ガイド](../sql/README.md) - SQL基礎の学習ガイド
- [Oracleチートシート](https://fcircle-biz.github.io/tech_docs/cheatsheet/applied/oracle-cheatsheet.html) - Oracle Databaseの基本操作をまとめた参考資料

## 学習目標

このガイドを完了すると、以下のスキルを身につけることができます：

- PL/SQLブロック構造の理解と実装
- 変数とデータ型の適切な使い分け
- 制御構造を使った複雑なロジックの実装
- ストアドプロシージャとファンクションの作成
- 例外処理による堅牢なプログラムの作成
- カーソルを使った効率的なデータ処理
- トリガーによる自動化処理の実装
- パッケージを使ったモジュラープログラミング
- 動的SQLによる柔軟なプログラム作成
- パフォーマンスを考慮したPL/SQL開発