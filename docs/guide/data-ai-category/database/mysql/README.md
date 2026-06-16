# MySQL入門 学習ガイドライン

このガイドラインでは、SQL基礎を学習済みの方を対象に、MySQLの特徴と実践的な活用方法を段階的に学習するカリキュラムを提供しています。MySQL WorkbenchなどのGUIツールを活用しながら、MySQLならではの機能と運用の基礎を習得していきます。

## 前提条件

### 必要な環境
- Windows、Mac、またはLinuxが動作するコンピュータ
- インターネット接続（MySQLのダウンロード用）
- 4GB以上のメモリ
- 10GB以上の空きディスク容量

### 参考リソース
- [MySQL公式サイト](https://www.mysql.com/jp/) - MySQL日本語公式サイト
- [MySQL公式ドキュメント](https://dev.mysql.com/doc/) - 公式リファレンス
- [MySQLダウンロードページ](https://dev.mysql.com/downloads/) - 各OS用インストーラー
- [MySQL Workbench](https://dev.mysql.com/downloads/workbench/) - データベースを視覚的に操作できるGUIツール

### 前提知識
- **必須**: SQL基礎（SELECT、INSERT、UPDATE、DELETE、WHERE、JOIN、集計関数など）を理解していること
  - [SQL入門ガイドライン](../sql/README.md)を履修済みであること
- **推奨**: テーブル設計の基本的な考え方を理解していること

## 学習コンテンツ

### [1. MySQLとは - 世界で最も使われるオープンソースDBを知ろう](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/mysql/mysql-learning-material-01.html)
MySQLの歴史と特徴、PostgreSQL・Oracle・SQL Serverなど他のRDBMSとの違いを解説します。なぜMySQLがWebアプリケーション開発で広く選ばれるのか、MySQL/MariaDBの関係、MySQLが得意とする分野について学びます。

### [2. MySQLの環境構築 - インストールとMySQL Workbenchの使い方](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/mysql/mysql-learning-material-02.html)
MySQLのダウンロードからインストール、初期設定までを画面キャプチャ付きで丁寧に解説します。MySQL Workbenchの基本操作（サーバー接続、データベース作成、SQLエディタの使い方）を習得します。

### [3. MySQLのデータ型 - 適切な型選びでパフォーマンスを最適化](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/mysql/mysql-learning-material-03.html)
MySQLで使用できるデータ型を学習します。数値型（INT、BIGINT、DECIMAL）、文字列型（VARCHAR、TEXT、ENUM）、日付時刻型（DATE、DATETIME、TIMESTAMP）の特徴と使い分け、ストレージエンジンとの関係を理解します。

### [4. MySQLのテーブル設計 - 制約とストレージエンジンの基礎](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/mysql/mysql-learning-material-04.html)
MySQLでのテーブル作成と各種制約（PRIMARY KEY、FOREIGN KEY、UNIQUE、CHECK、NOT NULL）の設定方法を学習します。InnoDB、MyISAMなどストレージエンジンの違いと選び方について理解します。

### [5. MySQLの便利な関数 - 文字列・日付・数値の操作](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/mysql/mysql-learning-material-05.html)
MySQLが提供する豊富な組み込み関数を学習します。文字列関数（CONCAT、SUBSTRING、TRIMなど）、日付関数（NOW、DATE_ADD、DATE_FORMATなど）、数値関数（ROUND、CEIL、FLOORなど）の実践的な使い方を習得します。

### [6. MySQLのインデックス - クエリを高速化する仕組み](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/mysql/mysql-learning-material-06.html)
インデックスの基本概念とMySQLでの作成方法を学習します。B-treeインデックス、複合インデックス、フルテキストインデックスの使い分け、EXPLAINコマンドでクエリの実行計画を分析する方法を習得します。

### [7. トランザクションとロック - データの整合性を守る](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/mysql/mysql-learning-material-07.html)
トランザクション（BEGIN、COMMIT、ROLLBACK）の基本概念と実践的な使い方を学習します。ACID特性、InnoDBの分離レベル、行ロックとテーブルロックの違いを理解し、データの整合性を保つ方法を習得します。

### [8. ビューとストアドプロシージャ - 再利用可能なSQLを作る](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/mysql/mysql-learning-material-08.html)
ビューの作成と活用方法、ストアドプロシージャとストアドファンクションの基礎を学習します。複雑なクエリを再利用可能な形で保存し、日常的なデータ操作を効率化する方法を習得します。

### [9. MySQLの文字コードと照合順序 - 日本語を正しく扱う](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/mysql/mysql-learning-material-09.html)
文字コード（utf8mb4、utf8）と照合順序（collation）の概念を学習します。日本語データを正しく格納・検索するための設定、文字化けの原因と対策について理解します。

### [10. バックアップとリストア - データを安全に守る](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/mysql/mysql-learning-material-10.html)
mysqldump、mysqlコマンドを使ったバックアップとリストアの方法を学習します。論理バックアップと物理バックアップの違い、定期バックアップの自動化、ポイントインタイムリカバリの基礎について理解します。

### [11. ユーザーと権限管理 - セキュリティの基礎](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/mysql/mysql-learning-material-11.html)
MySQLのユーザー管理、GRANT/REVOKEによる権限設定を学習します。本番環境で必要となるセキュリティ設定の基本、接続制限、パスワードポリシーについて理解します。

### [12. 実践！MySQLでWebアプリのDBを設計しよう](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/mysql/mysql-learning-material-12.html)
これまで学んだ知識を活用して、実際のWebアプリケーション（ECサイトやブログシステム）を想定したデータベースを設計・構築します。テーブル設計、インデックス設計、文字コード設定、ビュー作成までを通して実践します。

## 学習の進め方

1. **SQL基礎の復習から**: SQL入門で学んだ内容（SELECT、JOIN、集計関数など）が不安な場合は、先に復習してから始めましょう。

2. **MySQL Workbenchを使って操作**: 第2章でMySQL Workbenchの使い方を覚えたら、以降の章でも積極的に活用しましょう。GUIで操作することで理解が深まります。

3. **手を動かして試す**: 各章で紹介するSQLやコマンドは、必ず自分でも実行してみましょう。特にMySQL独自の機能は実際に動かすことで理解が深まります。

4. **エラーを恐れない**: 新しい機能を試すときはエラーが出ることもあります。エラーメッセージを読んで原因を探る習慣をつけましょう。

5. **実践課題に挑戦**: 各章の練習問題と第12章の総合演習で、実務に近い形での操作を経験しましょう。

## 推奨所要時間

| 章 | 内容 | 目安時間 |
|:--|:--|:--|
| 第1章 | MySQLとは - 世界で最も使われるオープンソースDBを知ろう | 30分 |
| 第2章 | MySQLの環境構築 - インストールとMySQL Workbenchの使い方 | 1時間 |
| 第3章 | MySQLのデータ型 - 適切な型選びでパフォーマンスを最適化 | 45分 |
| 第4章 | MySQLのテーブル設計 - 制約とストレージエンジンの基礎 | 1時間 |
| 第5章 | MySQLの便利な関数 - 文字列・日付・数値の操作 | 1時間 |
| 第6章 | MySQLのインデックス - クエリを高速化する仕組み | 1.5時間 |
| 第7章 | トランザクションとロック - データの整合性を守る | 1.5時間 |
| 第8章 | ビューとストアドプロシージャ - 再利用可能なSQLを作る | 1時間 |
| 第9章 | MySQLの文字コードと照合順序 - 日本語を正しく扱う | 45分 |
| 第10章 | バックアップとリストア - データを安全に守る | 1時間 |
| 第11章 | ユーザーと権限管理 - セキュリティの基礎 | 1時間 |
| 第12章 | 実践！MySQLでWebアプリのDBを設計しよう | 2時間 |
| **合計** | | **約13時間** |

## 関連リソース

- [SQL入門ガイドライン](../sql/README.md) - SQL基礎を学びたい方向け（前提知識）
- [PostgreSQL入門ガイドライン](../postgresql/README.md) - 別のオープンソースRDBMSを学びたい方向け
- [Oracle Database学習ガイドライン](../oracle/README.md) - エンタープライズ向けRDBMSを学びたい方向け

## 学習目標

このガイドを完了すると、以下のスキルを身につけることができます：

- MySQLの特徴と他のRDBMSとの違いを説明できる
- MySQL Workbenchを使ってデータベースを操作できる
- 適切なデータ型を選択してテーブルを設計できる
- ストレージエンジン（InnoDB、MyISAM）の違いを理解し選択できる
- MySQLの組み込み関数を使ってデータを加工できる
- インデックスを適切に設計してクエリを最適化できる
- トランザクションを使ってデータの整合性を保てる
- ビューとストアドプロシージャを作成・活用できる
- 文字コードと照合順序を正しく設定できる
- バックアップとリストアの操作ができる
- ユーザーと権限を適切に管理できる
- 実際のWebアプリケーションを想定したDB設計ができる

## 次のステップ

このガイドライン完了後は、以下の学習に進むことをお勧めします：

- [PHP入門ガイドライン](../../programming-languages/php-ecosystem/php/README.md) - PHPからMySQLを操作する方法を学ぶ
- [Python入門ガイドライン](../../programming-languages/python-ecosystem/python/README.md) - PythonからMySQLを操作する方法を学ぶ
- MySQL中級（レプリケーション、パーティショニング、パフォーマンスチューニング）- より高度な運用技術を学ぶ
