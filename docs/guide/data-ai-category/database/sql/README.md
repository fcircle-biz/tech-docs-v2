# SQL入門 学習ガイドライン

このガイドラインでは、**SQL（データベースを操作する言語）** の基礎を、**プログラミングがまったく初めての方**でも読み進められるように段階的に学習するカリキュラムを提供しています。

題材となるデータベースには、世界中で使われているオープンソースの RDBMS **PostgreSQL** を使い、操作ツールとして **pgAdmin 4**（公式のブラウザ型 GUI 管理ツール）と **A5:SQL Mk-2**（日本の開発現場で広く使われている軽快な Windows 用 SQL クライアント）の2つを併用します。1つのツールに依存せず、「どのツールでも同じ SQL が書ける」という感覚を身につけることを重視しています。

## 前提条件

### 必要な環境

- Windows 10/11（推奨。A5:SQL Mk-2 は Windows 専用のため）、または macOS / Linux（この場合は pgAdmin 4 のみで学習可能）
- PostgreSQL 17（無償・オープンソース。インストーラに pgAdmin 4 が同梱されています）
- pgAdmin 4（PostgreSQL インストーラに同梱、または単体で無償配布）
- A5:SQL Mk-2（無償・インストール不要のポータブルソフト。Windows のみ）
- ディスク空き容量 2GB 以上、メモリ 4GB 以上（8GB 推奨）

### 参考リソース

- [PostgreSQL 公式ドキュメント（日本語）](https://www.postgresql.jp/document/)
- [PostgreSQL ダウンロード](https://www.postgresql.org/download/)
- [pgAdmin 公式サイト](https://www.pgadmin.org/)
- [A5:SQL Mk-2 公式サイト](https://a5m2.mmatsubara.com/)
- [SQL 標準と PostgreSQL の準拠状況](https://www.postgresql.jp/document/current/html/features.html)

### 前提知識

- **必須**: 基本的な PC 操作（ファイルの保存・アプリのインストール・文字入力）
- **推奨**: Excel などの表計算ソフトで「表」を扱った経験（あると理解が早まりますが、必須ではありません）
- **不要**: プログラミング経験、コマンドライン操作の経験（本ガイドで必要な範囲は都度説明します）

## 本ガイド共通のサンプルデータベース

第5章で作成し、第6章以降のすべての章で使い続ける共通の題材です。架空のオンラインショップ「みらい商店」を題材にしています。**すべての章はこのスキーマを前提にコード例を書きます。**

- データベース名: `shop_db`
- スキーマ: `public`（既定のまま使用）
- 命名規則: PostgreSQL の慣例に従い、すべて **小文字のスネークケース**（`order_items` など）

| テーブル | 用途 | 主な列 |
|---------|------|-------|
| `customers`（顧客） | 会員情報 | `customer_id`(PK), `customer_name`, `email`, `prefecture`, `birth_date`, `registered_at` |
| `products`（商品） | 商品マスタ | `product_id`(PK), `product_name`, `category`, `unit_price`, `stock_quantity`, `is_active` |
| `orders`（注文） | 注文ヘッダ | `order_id`(PK), `customer_id`(FK→customers), `order_date`, `status` |
| `order_items`（注文明細） | 注文の内訳 | `order_item_id`(PK), `order_id`(FK→orders), `product_id`(FK→products), `quantity`, `unit_price` |

- `status` の値は `'受付'` / `'発送済'` / `'キャンセル'` の3種類。
- `category` の値は `'書籍'` / `'文具'` / `'家電'` / `'食品'` の4種類。
- 金額は `numeric(10,2)`、日付は `date`、日時は `timestamp` を使います。
- 顧客はおよそ10件、商品はおよそ12件、注文はおよそ15件、注文明細はおよそ30件の規模を想定します。
- 「顧客はいるが注文がない人」「キャンセルされた注文」「`prefecture` が NULL の顧客」を意図的に混ぜ、外部結合・NULL・条件指定の練習に使えるようにします。

## 学習コンテンツ

### [1. データベースとSQLの世界](https://fcircle-biz.github.io/tech-docs-v2/guide/data-ai-category/database/sql/sql-learning-material-01.html)
「そもそもデータベースとは何か」という出発点から始めます。Excel との違い、DBMS と RDBMS の関係、SQL が「データベースに指示を出すための言語」であること、代表的な RDBMS（PostgreSQL・MySQL・Oracle・SQL Server）の位置づけ、本ガイドで使う PostgreSQL・pgAdmin・A5:SQL Mk-2 の役割分担、そして全14章の学習ロードマップを俯瞰します。

### [2. リレーショナルデータベースの構造](https://fcircle-biz.github.io/tech-docs-v2/guide/data-ai-category/database/sql/sql-learning-material-02.html)
テーブル・行（レコード）・列（カラム）という基本単位、データ型、主キーと外部キー、テーブル同士を関係づける「リレーション」の考え方を学びます。1つの大きな表にすべてを詰め込むと何が困るのかを具体例で示し、表を分けて関係づける発想（正規化の入口）と、ER 図の読み方を身につけます。PostgreSQL のクラスタ・データベース・スキーマの階層構造もここで整理します。

### [3. 環境構築（PostgreSQL・pgAdmin・A5:SQL Mk-2）](https://fcircle-biz.github.io/tech-docs-v2/guide/data-ai-category/database/sql/sql-learning-material-03.html)
Windows への PostgreSQL 17 のインストールを画面の流れに沿って解説します。スーパーユーザー `postgres` のパスワード設定、ポート 5432、ロケール設定、同梱の pgAdmin 4 の初回起動、A5:SQL Mk-2 のダウンロードと接続設定までを行い、両ツールから接続できることを確認します。macOS / Linux 利用者向けの手順と、よくあるエラー（接続拒否・パスワード認証失敗・ポート競合）の対処法も扱います。

### [4. ツールの基本操作とSQLの書き方](https://fcircle-biz.github.io/tech-docs-v2/guide/data-ai-category/database/sql/sql-learning-material-04.html)
pgAdmin 4 のブラウザツリー・クエリツール（F5 で実行）・結果グリッドの読み方と、A5:SQL Mk-2 のデータベースツリー・SQL エディタ（F5 で実行）・テーブル参照機能を対比しながら操作します。SQL 文の基本ルール（大文字小文字・セミコロン・空白と改行・コメントの書き方）、エラーメッセージの読み方、2つのツールの使い分けの指針を学びます。

### [5. データベースとテーブルを作る](https://fcircle-biz.github.io/tech-docs-v2/guide/data-ai-category/database/sql/sql-learning-material-05.html)
`CREATE DATABASE` と `CREATE TABLE` を実際に書き、共通サンプルデータベース `shop_db` を構築します。PostgreSQL の主要なデータ型（`integer` / `numeric` / `varchar` / `text` / `date` / `timestamp` / `boolean`）、`NOT NULL`・`PRIMARY KEY`・`FOREIGN KEY`・`UNIQUE`・`CHECK`・`DEFAULT` の各制約、`GENERATED AS IDENTITY` による連番、`ALTER TABLE` と `DROP TABLE` を学びます。最後にサンプルデータを投入して、以降の章の準備を整えます。

### [6. SELECT文でデータを取り出す](https://fcircle-biz.github.io/tech-docs-v2/guide/data-ai-category/database/sql/sql-learning-material-06.html)
SQL の中心である `SELECT` を学びます。`SELECT` / `FROM` の基本形、列の指定と `*`、`AS` による別名、計算列、`ORDER BY` による並べ替え（`ASC` / `DESC` / 複数キー）、`LIMIT` と `OFFSET` による件数制限、`DISTINCT` による重複除去を扱います。あわせて SQL 文が実際に評価される順序（`FROM` → `WHERE` → `SELECT` → `ORDER BY`）を図で理解します。

### [7. 条件を指定して絞り込む（WHERE）](https://fcircle-biz.github.io/tech-docs-v2/guide/data-ai-category/database/sql/sql-learning-material-07.html)
`WHERE` 句による絞り込みを深掘りします。比較演算子、`AND` / `OR` / `NOT` と括弧による優先順位、`BETWEEN`、`IN`、`LIKE`（`%` と `_`）、`IS NULL` / `IS NOT NULL`、そして初心者がもっとも混乱する **NULL の three-valued logic（3値論理）** を丁寧に扱います。`CASE` 式による条件分岐も導入します。

### [8. 関数でデータを加工する](https://fcircle-biz.github.io/tech-docs-v2/guide/data-ai-category/database/sql/sql-learning-material-08.html)
取り出した値を加工する組み込み関数を学びます。文字列関数（`length` / `upper` / `lower` / `substring` / `replace` / `trim` / `||` 連結）、数値関数（`round` / `trunc` / `ceil` / `floor` / `abs`）、日付・時刻関数（`current_date` / `age` / `date_part` / `to_char` による書式指定）、型変換（`CAST` と `::`）、NULL を扱う `COALESCE` / `NULLIF` を、サンプルデータで実行しながら確認します。

### [9. データを集計する（GROUP BY）](https://fcircle-biz.github.io/tech-docs-v2/guide/data-ai-category/database/sql/sql-learning-material-09.html)
集約関数（`count` / `sum` / `avg` / `max` / `min`）と `GROUP BY` によるグループ集計、`HAVING` による集計後の絞り込みを学びます。`WHERE` と `HAVING` の違い、`count(*)` と `count(列名)` の違い（NULL の扱い）、複数列でのグループ化、集計結果の並べ替えを扱います。「カテゴリ別売上」「月別注文件数」といった実務的な集計を自力で書けるようになることが目標です。

### [10. データの追加・更新・削除](https://fcircle-biz.github.io/tech-docs-v2/guide/data-ai-category/database/sql/sql-learning-material-10.html)
`INSERT` / `UPDATE` / `DELETE` によるデータの書き換えを学びます。単一行・複数行の `INSERT`、`INSERT ... SELECT`、`UPDATE` の `SET` と `WHERE`、`DELETE` と `TRUNCATE` の違い、PostgreSQL 独自の `RETURNING` 句、`ON CONFLICT`（UPSERT）を扱います。**`WHERE` を書き忘れて全行を書き換える事故**を防ぐための実務的な手順（先に `SELECT` で確認する習慣）を強調します。

### [11. テーブルを結合する（JOIN）](https://fcircle-biz.github.io/tech-docs-v2/guide/data-ai-category/database/sql/sql-learning-material-11.html)
複数のテーブルを組み合わせる `JOIN` を図で理解します。`INNER JOIN`、`LEFT OUTER JOIN`、`RIGHT OUTER JOIN`、`FULL OUTER JOIN`、`CROSS JOIN` の違いと使い分け、テーブル別名（エイリアス）、3つ以上のテーブルの結合、結合と集計の組み合わせ、自己結合、`UNION` / `UNION ALL` による縦の結合を扱います。「注文がまだない顧客を探す」といった外部結合ならではの用途も学びます。

### [12. サブクエリとビュー](https://fcircle-biz.github.io/tech-docs-v2/guide/data-ai-category/database/sql/sql-learning-material-12.html)
SQL の中に SQL を書く「サブクエリ」を学びます。`WHERE` 句のサブクエリ（スカラサブクエリ・`IN`・`EXISTS`）、`FROM` 句のサブクエリ（導出テーブル）、`WITH` 句（CTE）による読みやすい書き方、そして `CREATE VIEW` によるビューの作成と活用を扱います。発展として、`ROW_NUMBER` / `SUM OVER` などのウィンドウ関数の入口も紹介します。

### [13. トランザクションと同時実行制御](https://fcircle-biz.github.io/tech-docs-v2/guide/data-ai-category/database/sql/sql-learning-material-13.html)
「複数の変更をまとめて確定・まとめて取り消す」トランザクションの考え方を、銀行振込の例で学びます。ACID 特性、`BEGIN` / `COMMIT` / `ROLLBACK`、`SAVEPOINT`、自動コミットの挙動（pgAdmin と A5:SQL Mk-2 での設定の違い）、分離レベルと発生しうる異常、PostgreSQL の MVCC（追記型の同時実行制御）、ロックとデッドロックの基本を扱います。

### [14. インデックス・権限・運用の基礎](https://fcircle-biz.github.io/tech-docs-v2/guide/data-ai-category/database/sql/sql-learning-material-14.html)
最後に、データベースを「使い続ける」ための基礎を学びます。インデックスの仕組みと `CREATE INDEX`、効くケース・効かないケース、`EXPLAIN` / `EXPLAIN ANALYZE` による実行計画の読み方の入口、ロールと `GRANT` / `REVOKE` による権限管理、`pg_dump` / `pg_restore` によるバックアップと復元、`VACUUM` の役割を扱います。締めくくりとして全14章の総復習と、次に学ぶとよいテーマ（DB設計・アプリからの接続・SQL Server や MySQL への横展開）のロードマップを示します。

## 推奨所要時間

| 章 | 内容 | 目安時間 |
|----|------|----------|
| 第1章 | データベースとSQLの世界 | 45分 |
| 第2章 | リレーショナルデータベースの構造 | 60分 |
| 第3章 | 環境構築（PostgreSQL・pgAdmin・A5:SQL Mk-2） | 90分 |
| 第4章 | ツールの基本操作とSQLの書き方 | 60分 |
| 第5章 | データベースとテーブルを作る | 75分 |
| 第6章 | SELECT文でデータを取り出す | 75分 |
| 第7章 | 条件を指定して絞り込む（WHERE） | 75分 |
| 第8章 | 関数でデータを加工する | 60分 |
| 第9章 | データを集計する（GROUP BY） | 60分 |
| 第10章 | データの追加・更新・削除 | 60分 |
| 第11章 | テーブルを結合する（JOIN） | 75分 |
| 第12章 | サブクエリとビュー | 60分 |
| 第13章 | トランザクションと同時実行制御 | 60分 |
| 第14章 | インデックス・権限・運用の基礎 | 60分 |
| **合計** | | **約15時間**（915分） |

## 学習目標

このガイドを完了すると、以下のスキルを身につけることができます：

- データベース・RDBMS・SQL がそれぞれ何であるかを、自分の言葉で説明できる
- PostgreSQL をインストールし、pgAdmin 4 と A5:SQL Mk-2 の両方から接続して SQL を実行できる
- `CREATE TABLE` で適切なデータ型・制約を選んでテーブルを設計・作成できる
- `SELECT` / `WHERE` / `ORDER BY` / `LIMIT` を組み合わせて、必要なデータを自在に取り出せる
- 組み込み関数でデータを加工し、`GROUP BY` で集計して業務レポートに近い結果を作れる
- `INSERT` / `UPDATE` / `DELETE` で安全にデータを書き換えられる（事故を防ぐ手順を含む）
- `JOIN` で複数テーブルを組み合わせ、サブクエリやビューで複雑な要求に応えられる
- トランザクションでデータの整合性を保ち、インデックス・権限・バックアップの基礎を運用に活かせる

## 次のステップ

- [SQL Server 学習ガイドライン](https://fcircle-biz.github.io/tech-docs-v2/guide/data-ai-category/database/sqlserver/README.md) — 同じ SQL の知識を、Microsoft SQL Server（T-SQL）へ横展開する
- [JDBC 学習ガイドライン](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/jdbc/README.md) — Java アプリケーションから SQL を実行する
- [Spring Data JDBC 学習ガイドライン](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/spring-data-jdbc/README.md) — フレームワークからデータベースを扱う
