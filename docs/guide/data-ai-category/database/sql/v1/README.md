# SQL 学習ガイドライン

このガイドラインでは、SQLの基礎から応用まで、データベース初心者向けに段階的に学習するためのカリキュラムを提供しています。リレーショナルデータベースの概念理解から実践的なクエリ作成まで、体系的に学習できるよう構成されています。

## 前提条件

### 必要な環境
- PostgreSQLがインストール済み（学習環境として）
- テキストエディタまたはSQL開発ツール（pgAdmin、A5SQL等）
- 4GB以上のメモリ
- 5GB以上の空きディスク容量

### 参考リソース
- [PostgreSQL公式サイト](https://www.postgresql.org/) - 高機能で実用的なデータベース
- [PostgreSQL公式ドキュメント](https://www.postgresql.org/docs/) - 詳細な機能説明とリファレンス
- [pgAdmin](https://www.pgadmin.org/) - PostgreSQL用GUIツール

### 前提知識
- **必須**: 基本的なコンピュータ操作スキル
- **推奨**: 表計算ソフト（Excel等）の基本的な使用経験

## 学習コンテンツ

### [1. データベースとSQLの基礎概念](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/sql/sql-learning-material-01.html)
リレーショナルデータベースの基本概念、データベースの役割と重要性、SQLとは何かを理解し、学習環境のセットアップ方法を学習します。

### [2. データベースの作成と基本的なデータ型](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/sql/sql-learning-material-02.html)
データベースとテーブルの作成方法、主要なデータ型（数値型、文字列型、日付型）の理解、主キーと外部キーの概念を学習します。

### [3. データの操作：CRUD操作の基礎](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/sql/sql-learning-material-03.html)
INSERT文によるデータの挿入、SELECT文によるデータの検索、UPDATE文によるデータの更新、DELETE文によるデータの削除方法を習得します。

### [4. SELECT文の詳細とデータの絞り込み](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/sql/sql-learning-material-04.html)
WHERE句による条件指定、比較演算子と論理演算子の使用、LIKE演算子によるパターン検索、ORDER BY句によるソート、LIMIT句による件数制限を学習します。

### [5. 結合（JOIN）によるテーブル連携](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/sql/sql-learning-material-05.html)
INNER JOINによる内部結合、LEFT/RIGHT JOINによる外部結合、複数テーブルの結合、自己結合の概念と実践的な使用方法を理解します。

### [6. 集計関数とグループ化](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/sql/sql-learning-material-06.html)
COUNT、SUM、AVG、MAX、MIN等の集計関数、GROUP BY句によるグループ化、HAVING句による集計結果の絞り込み方法を習得します。

### [7. サブクエリと高度なクエリ技法](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/sql/sql-learning-material-07.html)
サブクエリの基本概念と使用方法、相関サブクエリ、EXISTS句の活用、WITH句（CTE）による可読性の高いクエリ作成を学習します。

### [8. インデックスとパフォーマンス最適化](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/sql/sql-learning-material-08.html)
インデックスの仕組みと作成方法、実行計画の読み方、クエリパフォーマンスの改善手法、インデックス設計の基本原則を理解します。

### [9. トランザクションとデータの整合性](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/sql/sql-learning-material-09.html)
トランザクションの概念（ACID特性）、BEGIN/COMMIT/ROLLBACKの使用方法、制約（UNIQUE、CHECK、NOT NULL）による整合性保持を学習します。

### [10. 実践的なデータベース設計](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/sql/sql-learning-material-10.html)
正規化の基本概念（第1〜第3正規形）、ER図の作成方法、実践的なデータベース設計演習、アンチパターンとベストプラクティスを習得します。

## 学習の進め方

1. **環境構築から開始**: まず「1. データベースとSQLの基礎概念」で学習環境を整えましょう。PostgreSQLで実践的な環境を構築します。

2. **基礎を確実に**: 「2. データベースの作成」と「3. CRUD操作」で基本操作を確実に身につけてから次に進みましょう。

3. **段階的な難易度上昇**: SELECT文の基礎から始めて、JOIN、集計、サブクエリへと段階的に学習を進めましょう。

4. **実践的な演習**: 各章で提供される演習問題を必ず自分で実行し、サンプルデータベースを使って練習しましょう。

5. **プロジェクト実践**: 学習の最後には、実際のビジネスシナリオ（例：図書管理システム、在庫管理システム）のデータベース設計に挑戦しましょう。

## 推奨学習期間

- **基礎習得コース** (1-6章): 4-5週間
- **実践活用コース** (7-10章): 3-4週間

## 関連リソース

- [SQL チートシート](https://fcircle-biz.github.io/tech_docs/cheatsheet/databases/sql-cheatsheet.html) - SQL文の基本的な構文をまとめた参考資料
- [Oracle学習ガイドライン](../oracle/README.md) - Oracle固有の機能を学習したい方向け
- [DB2学習ガイドライン](../db2/README.md) - IBM DB2の学習ガイド

## 学習目標

このガイドを完了すると、以下のスキルを身につけることができます：

- リレーショナルデータベースの基本概念の理解
- データベースとテーブルの作成・管理
- CRUD操作（作成・読取・更新・削除）の実行
- 複雑な条件でのデータ検索とフィルタリング
- 複数テーブルの結合によるデータ分析
- 集計関数を使った統計情報の取得
- サブクエリを使った高度なデータ操作
- インデックスによるパフォーマンス最適化
- トランザクションによるデータ整合性の確保
- 正規化を考慮したデータベース設計

## 次のステップ

このガイドライン完了後は、以下の学習に進むことをお勧めします：

- [PL/SQL学習ガイドライン](../plsql/README.md) - ストアドプロシージャの作成方法
- [JDBC学習ガイドライン](../../java-ecosystem/jdbc/README.md) - JavaからのSQL実行方法
- [Python SQLAlchemy学習ガイドライン](../../python-ecosystem/sqlalchemy/README.md) - PythonでのORM活用方法