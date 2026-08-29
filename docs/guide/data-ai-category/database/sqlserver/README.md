# SQL Server 学習ガイドライン

このガイドラインでは、Microsoft SQL Server の基礎を**プログラミング／データベース初心者**向けに段階的に学習するためのカリキュラムを提供しています。各章には **PostgreSQL との違い** を解説するコーナーを設けており、PostgreSQL の経験がある方は差分から、まったくの初心者の方は「他の RDBMS と比べた SQL Server の個性」として学べます。

## 前提条件

### 必要な環境

- Windows 10/11、macOS、または Linux（macOS / Linux では Docker を利用）
- SQL Server 2025 Enterprise Developer Edition（本ガイドの推奨）、Standard Developer Edition、または Express Edition（いずれも無償）
- SQL Server Management Studio (SSMS) 22（Windows。Visual Studio Installer 経由で導入）、または Visual Studio Code ＋ MSSQL 拡張機能（macOS / Linux）
- ディスク空き容量 10GB 以上、メモリ 4GB 以上（8GB 推奨）

### 参考リソース

- [SQL Server ドキュメント（Microsoft Learn）](https://learn.microsoft.com/ja-jp/sql/sql-server/)
- [Transact-SQL (T-SQL) リファレンス](https://learn.microsoft.com/ja-jp/sql/t-sql/language-reference)
- [SQL Server Management Studio (SSMS) のダウンロード](https://learn.microsoft.com/ja-jp/ssms/download-sql-server-management-studio-ssms)
- [AdventureWorks サンプルデータベース](https://learn.microsoft.com/ja-jp/sql/samples/adventureworks-install-configure)
- [PostgreSQL 公式ドキュメント（比較参照用）](https://www.postgresql.jp/document/)

### 前提知識

- **必須**: 基本的な PC 操作（ファイル操作・アプリのインストール）、表計算ソフト（Excel 等）で表を扱った経験
- **推奨**: SQL の初歩的な知識（SELECT 文を見たことがある程度で十分）、コマンドライン操作の基礎

## 学習コンテンツ

### [1. SQL Serverとは](https://fcircle-biz.github.io/tech-docs-v2/guide/data-ai-category/database/sqlserver/sqlserver-learning-material-01.html)
データベース／RDBMS とは何かという基礎から出発し、SQL Server の歴史・エディション（Enterprise Developer / Standard Developer / Express / Standard / Enterprise / Azure SQL）・得意分野を学びます。あわせて Oracle・MySQL・PostgreSQL との立ち位置の違いを俯瞰し、本ガイドの学び方を確認します。

### [2. アーキテクチャと基本用語](https://fcircle-biz.github.io/tech-docs-v2/guide/data-ai-category/database/sqlserver/sqlserver-learning-material-02.html)
インスタンス・データベース・スキーマ・オブジェクトという SQL Server の構造を、身近な例えで理解します。データファイル (.mdf/.ndf) とトランザクションログ (.ldf)、システムデータベース (master/model/msdb/tempdb)、3部・4部構成の名前解決を扱います。PostgreSQL の「クラスタ＋データベース＋スキーマ」構造との対応関係も整理します。

### [3. 環境構築とインストール](https://fcircle-biz.github.io/tech-docs-v2/guide/data-ai-category/database/sqlserver/sqlserver-learning-material-03.html)
Windows への SQL Server Developer Edition のインストール、macOS / Linux での Docker コンテナ起動、SSMS（Windows）または VS Code ＋ MSSQL 拡張機能（macOS / Linux）の導入までを手順どおりに実施します。認証モード・sa アカウント・ポート 1433・接続確認・つまずきやすいエラーの対処法まで丁寧に解説します。

### [4. SSMSの基本操作](https://fcircle-biz.github.io/tech-docs-v2/guide/data-ai-category/database/sqlserver/sqlserver-learning-material-04.html)
オブジェクトエクスプローラーでの探索、クエリエディタでの実行（F5）、結果グリッドの読み方、GO バッチ区切り、スクリプト生成、sqlcmd による CLI 実行を学びます。PostgreSQL の psql / pgAdmin と対比しながら、日々の操作の型を身につけます。

### [5. データベースとテーブルの作成](https://fcircle-biz.github.io/tech-docs-v2/guide/data-ai-category/database/sqlserver/sqlserver-learning-material-05.html)
CREATE DATABASE / CREATE TABLE を書きながら、主要なデータ型（int, decimal, nvarchar, date, datetime2, bit, uniqueidentifier）、主キー・外部キー・制約、IDENTITY による連番を学びます。PostgreSQL の serial / GENERATED AS IDENTITY・text 型・boolean 型との違いを表で比較します。

### [6. SELECT文でデータを取り出す](https://fcircle-biz.github.io/tech-docs-v2/guide/data-ai-category/database/sqlserver/sqlserver-learning-material-06.html)
SELECT / WHERE / ORDER BY / DISTINCT / TOP、比較・論理演算子、LIKE、BETWEEN、IN、NULL の扱い、CASE 式、よく使う組み込み関数を学びます。SQL Server 特有の TOP と PostgreSQL の LIMIT、文字列連結（+ と ||）、大文字小文字の扱いの違いを押さえます。

### [7. データの追加・更新・削除](https://fcircle-biz.github.io/tech-docs-v2/guide/data-ai-category/database/sqlserver/sqlserver-learning-material-07.html)
INSERT / UPDATE / DELETE の基本形と複数行 INSERT、SELECT INTO、TRUNCATE TABLE、OUTPUT 句、MERGE 文を学びます。WHERE 句を忘れた事故を防ぐ実務的な手順、PostgreSQL の RETURNING 句や UPSERT (ON CONFLICT) との違いも解説します。

### [8. テーブルの結合と集計](https://fcircle-biz.github.io/tech-docs-v2/guide/data-ai-category/database/sqlserver/sqlserver-learning-material-08.html)
INNER JOIN / LEFT・RIGHT・FULL OUTER JOIN / CROSS JOIN を図で理解し、GROUP BY・HAVING・集計関数、基本的なサブクエリまでを必須内容として学びます。CTE (WITH)、EXISTS、ウィンドウ関数（ROW_NUMBER, SUM OVER）は「発展」として本編と分けて扱います。文字列集約（STRING_AGG）など PostgreSQL との関数名の違いも比較します。

### [9. T-SQLプログラミング入門](https://fcircle-biz.github.io/tech-docs-v2/guide/data-ai-category/database/sqlserver/sqlserver-learning-material-09.html)
変数 (DECLARE/SET)、IF / WHILE、TRY...CATCH によるエラー処理、ストアドプロシージャまでを必須内容として学びます。ユーザー定義関数（UDF）とビューは「発展」として本編と分けて扱います。SQL Server の T-SQL と PostgreSQL の PL/pgSQL の書き方の違い（バッチ・ブロック構造・戻り値）を対比します。

### [10. トランザクションとロック](https://fcircle-biz.github.io/tech-docs-v2/guide/data-ai-category/database/sqlserver/sqlserver-learning-material-10.html)
ACID 特性、BEGIN TRAN / COMMIT / ROLLBACK、自動コミットの挙動、分離レベル、ロックとブロッキング、デッドロックの基本を学びます。既定が READ COMMITTED（ロックベース）の SQL Server と、MVCC を前提とする PostgreSQL の違い、READ_COMMITTED_SNAPSHOT の意味を理解します。

### [11. インデックスと性能の基礎](https://fcircle-biz.github.io/tech-docs-v2/guide/data-ai-category/database/sqlserver/sqlserver-learning-material-11.html)
クラスター化インデックスと非クラスター化インデックスの違い、インデックスが効く／効かない書き方、実行プランの読み方、統計情報を学びます。SARGable・Key Lookup・RID Lookup は「発展」用語として本編と分けて扱います。PostgreSQL のヒープ＋インデックス構造・EXPLAIN ANALYZE との違いも扱います。

### [12. セキュリティとユーザー管理](https://fcircle-biz.github.io/tech-docs-v2/guide/data-ai-category/database/sqlserver/sqlserver-learning-material-12.html)
Windows 認証と SQL Server 認証、ログイン（サーバーレベル）とユーザー（データベースレベル）の二層構造、ロール、GRANT / DENY / REVOKE、最小権限の原則を学びます。PostgreSQL のロール一元管理・pg_hba.conf との考え方の違いを比較します。

### [13. バックアップと復旧・運用](https://fcircle-biz.github.io/tech-docs-v2/guide/data-ai-category/database/sqlserver/sqlserver-learning-material-13.html)
復旧モデル（単純・完全・一括ログ）、完全／差分／トランザクションログバックアップ、正しい復元手順（完全→差分→必要なログを古い順にすべて適用し、途中は NORECOVERY、最後に RECOVERY）、STOPAT による特定時点への復旧、SQL Server Agent によるジョブ自動化、日常の運用確認項目を学びます。PostgreSQL の pg_dump / WAL アーカイブとの対応も示します。

### [14. PostgreSQLとの違い総まとめ](https://fcircle-biz.github.io/tech-docs-v2/guide/data-ai-category/database/sqlserver/sqlserver-learning-material-14.html)
これまで各章で学んだ SQL Server と PostgreSQL の違いを一覧に整理し、ライセンス・構文・型・トランザクション・運用の観点から総復習します。移行時に注意すべきポイント、Azure SQL Database へのステップアップ、次に学ぶとよいテーマと学習ロードマップを示します。

## 推奨所要時間

| 章 | 内容 | 目安時間 |
|----|------|----------|
| 第1章 | SQL Serverとは | 45分 |
| 第2章 | アーキテクチャと基本用語 | 60分 |
| 第3章 | 環境構築とインストール | 75分 |
| 第4章 | SSMSの基本操作 | 60分 |
| 第5章 | データベースとテーブルの作成 | 75分 |
| 第6章 | SELECT文でデータを取り出す | 75分 |
| 第7章 | データの追加・更新・削除 | 60分 |
| 第8章 | テーブルの結合と集計 | 90分 |
| 第9章 | T-SQLプログラミング入門 | 75分 |
| 第10章 | トランザクションとロック | 75分 |
| 第11章 | インデックスと性能の基礎 | 75分 |
| 第12章 | セキュリティとユーザー管理 | 60分 |
| 第13章 | バックアップと復旧・運用 | 60分 |
| 第14章 | PostgreSQLとの違い総まとめ | 45分 |
| **合計** | | **約16時間** |

## 学習目標

このガイドを完了すると、以下のスキルを身につけることができます：

- リレーショナルデータベースと SQL Server の基本概念・アーキテクチャを説明できる
- 自分の PC に SQL Server と SSMS を導入し、データベースへ接続できる
- テーブルを設計・作成し、適切なデータ型と制約を選べる
- SELECT / INSERT / UPDATE / DELETE を使ってデータを自在に操作できる
- JOIN・集計・サブクエリを用いて実務的なクエリを書ける（CTE・ウィンドウ関数は発展）
- T-SQL でストアドプロシージャを作成できる（ユーザー定義関数・ビューは発展）
- トランザクション・ロック・分離レベルを理解し、安全にデータを更新できる
- インデックスと実行プランを手がかりに、遅いクエリの原因を推測できる
- ユーザー・権限を設定し、バックアップと復旧の手順を実施できる
- SQL Server と PostgreSQL の違いを説明し、両者を状況に応じて選択・使い分けできる

## 次のステップ

- [SQL 入門学習ガイド](https://fcircle-biz.github.io/tech-docs-v2/) — 標準 SQL の基礎を体系的に復習したい方へ
- [ER図・データモデリング学習ガイド](https://fcircle-biz.github.io/tech-docs-v2/) — テーブル設計そのものを深めたい方へ
- [Power BI学習教材](https://fcircle-biz.github.io/tech-docs-v2/guide/business-saas/power-bi/power-bi-learning-material-01.html) — SQL Server のデータを可視化・分析したい方へ
- Azure SQL Database / Azure SQL Managed Instance — クラウドでの SQL Server 活用へ進む方へ
