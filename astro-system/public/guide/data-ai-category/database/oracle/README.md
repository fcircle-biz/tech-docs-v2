# Oracle Database 学習ガイドライン

このガイドラインでは、Oracle Database の基礎を**プログラミング／データベース初心者**向けに段階的に学習するためのカリキュラムを提供しています。無償版の **Oracle Database 23ai Free** を使い、「そもそもデータベースとは何か」という出発点から、SQL の読み書き・PL/SQL プログラミング・運用の入口までを、手を動かしながら学べる構成です。

専門用語には必ずかみ砕いた説明を添え、身近な例え（表計算ソフト・住所録・図書館の索引など）を交えて解説します。Oracle 特有のつまずきポイント（COMMIT が必要・VARCHAR2・空文字が NULL 扱いなど）は、その都度はっきり注意喚起します。

## 前提条件

### 必要な環境

- Windows 10/11、macOS、または Linux（macOS では Docker / Podman を利用）
- Oracle Database 23ai Free（無償。開発・学習用途に加えて商用利用も可能なエディション）
- Oracle SQL Developer（無償の GUI ツール）または SQL Developer for VS Code
- ディスク空き容量 15GB 以上、メモリ 4GB 以上（8GB 推奨）

### 参考リソース

- [Oracle Database 23ai ドキュメント](https://docs.oracle.com/en/database/oracle/oracle-database/23/index.html)
- [Oracle Database Free ダウンロード](https://www.oracle.com/jp/database/free/)
- [Oracle SQL Developer ダウンロード](https://www.oracle.com/jp/database/sqldeveloper/)
- [Oracle SQL言語リファレンス](https://docs.oracle.com/en/database/oracle/oracle-database/23/sqlrf/index.html)
- [Oracle PL/SQL言語リファレンス](https://docs.oracle.com/en/database/oracle/oracle-database/23/lnpls/index.html)
- [Oracle Live SQL（ブラウザだけで SQL を試せる無償サービス）](https://livesql.oracle.com/)

### 前提知識

- **必須**: 基本的な PC 操作（ファイル操作・アプリのインストール）、表計算ソフト（Excel 等）で表を扱った経験
- **推奨**: コマンドライン（コマンドプロンプト／ターミナル）の基本操作、SQL を見たことがある程度の知識（無くても学べます）

## 学習コンテンツ

### [1. Oracle Databaseとは](https://fcircle-biz.github.io/tech-docs-v2/guide/data-ai-category/database/oracle/oracle-learning-material-01.html)
データベースと RDBMS が何をするものかという基礎から出発し、Oracle Database の歴史・エディション（Free / Standard Edition 2 / Enterprise Edition / Autonomous Database）・企業システムで選ばれてきた理由を学びます。SQL Server・PostgreSQL・MySQL との立ち位置の違いを俯瞰し、本ガイド全14章の学び方を確認します。

### [2. アーキテクチャと基本用語](https://fcircle-biz.github.io/tech-docs-v2/guide/data-ai-category/database/oracle/oracle-learning-material-02.html)
「インスタンス」と「データベース」の違いという Oracle 理解の要から始め、SGA・PGA・バックグラウンドプロセス、表領域／データファイル／スキーマの関係を図で押さえます。あわせて 12c 以降の標準構成である **CDB / PDB（マルチテナント）** を理解し、接続先が `FREEPDB1` になる理由を納得したうえで第3章へ進みます。

### [3. 環境構築とインストール](https://fcircle-biz.github.io/tech-docs-v2/guide/data-ai-category/database/oracle/oracle-learning-material-03.html)
Windows への Oracle Database 23ai Free のインストール、macOS / Linux でのコンテナ起動、SQL Developer の導入までを手順どおりに実施します。管理者パスワードの設定、リスナーとポート 1521、接続文字列の書き方、`ORA-12541` などつまずきやすいエラーの対処法まで丁寧に解説します。

### [4. SQL*PlusとSQL Developerの基本操作](https://fcircle-biz.github.io/tech-docs-v2/guide/data-ai-category/database/oracle/oracle-learning-material-04.html)
コマンドライン版の SQL*Plus と GUI の SQL Developer、両方の基本操作を身につけます。接続と切断、セミコロンとスラッシュの使い分け、`DESCRIBE`・`SET LINESIZE` などの表示整形、スクリプトファイルの実行、結果の読み方を学び、以降の章の作業土台を作ります。

### [5. 表の作成とデータ型](https://fcircle-biz.github.io/tech-docs-v2/guide/data-ai-category/database/oracle/oracle-learning-material-05.html)
本ガイドを通して使うサンプル（部署表 DEPARTMENTS・社員表 EMPLOYEES）を実際に作成します。`CREATE TABLE` の書き方とあわせて、Oracle の主要データ型（**VARCHAR2**・NUMBER・DATE・TIMESTAMP・CLOB）、主キー・外部キー・NOT NULL・CHECK などの制約、連番を作るシーケンスと IDENTITY 列を学びます。

### [6. SELECT文でデータを取り出す](https://fcircle-biz.github.io/tech-docs-v2/guide/data-ai-category/database/oracle/oracle-learning-material-06.html)
`SELECT` / `WHERE` / `ORDER BY` / `DISTINCT` を書きながら、比較・論理演算子、`LIKE`・`BETWEEN`・`IN`、`CASE` 式を学びます。Oracle 特有の **DUAL 表**、パイプ2本による文字列連結、件数を絞る `FETCH FIRST n ROWS ONLY` と従来の `ROWNUM` の違いも押さえます。

### [7. データの追加・更新・削除](https://fcircle-biz.github.io/tech-docs-v2/guide/data-ai-category/database/oracle/oracle-learning-material-07.html)
`INSERT` / `UPDATE` / `DELETE` の基本形に加え、`MERGE` と `TRUNCATE` を学びます。最重要ポイントは **Oracle は自動コミットされない**こと。`COMMIT` / `ROLLBACK` を明示しない限り変更が確定しない仕組みを実演し、`WHERE` の付け忘れ事故を防ぐ実務的な手順まで身につけます。

### [8. 関数とNULL・日付の扱い](https://fcircle-biz.github.io/tech-docs-v2/guide/data-ai-category/database/oracle/oracle-learning-material-08.html)
文字列関数・数値関数・変換関数（`TO_CHAR` / `TO_DATE` / `TO_NUMBER`）を学び、`SYSDATE` と DATE 型が時刻まで持つ点、日付計算の書き方を理解します。あわせて **Oracle では空文字列が NULL として扱われる**という重要な挙動と、`NVL`・`NVL2`・`COALESCE`・`DECODE` による NULL 対策を扱います。

### [9. 表の結合と集計](https://fcircle-biz.github.io/tech-docs-v2/guide/data-ai-category/database/oracle/oracle-learning-material-09.html)
`INNER JOIN` / `LEFT・RIGHT・FULL OUTER JOIN` / `CROSS JOIN` を図で理解し、`GROUP BY`・`HAVING`・集計関数、サブクエリまでを必須内容として学びます。`WITH` 句（CTE）と分析関数（`ROW_NUMBER`・`RANK`・`SUM OVER`）は「発展」として本編と分けて扱います。

### [10. PL/SQL入門](https://fcircle-biz.github.io/tech-docs-v2/guide/data-ai-category/database/oracle/oracle-learning-material-10.html)
SQL だけでは書けない「手続き」を記述する PL/SQL に入門します。`DECLARE`〜`BEGIN`〜`END` のブロック構造、変数と `%TYPE`、`IF` / `LOOP` / `FOR`、`SELECT INTO`、カーソルによる1行ずつの処理、`EXCEPTION` による例外処理を、短い実例を積み重ねて学びます。

### [11. ストアドプログラムとトリガー](https://fcircle-biz.github.io/tech-docs-v2/guide/data-ai-category/database/oracle/oracle-learning-material-11.html)
第10章の PL/SQL をデータベースに保存して再利用する方法を学びます。ストアドプロシージャとファンクションの作成・呼び出し、引数（IN / OUT）、複数の処理をまとめるパッケージ、そして表の変更に自動で反応するトリガーを扱い、使いどころと注意点を整理します。

### [12. トランザクションとロック](https://fcircle-biz.github.io/tech-docs-v2/guide/data-ai-category/database/oracle/oracle-learning-material-12.html)
ACID 特性、`COMMIT` / `ROLLBACK` / `SAVEPOINT` を改めて体系的に学びます。Oracle の大きな特徴である **読み取り一貫性（MVCC）＝「読み取りは書き込みをブロックしない」** を2つのセッションを使って体験し、行ロック・`FOR UPDATE`・`ORA-00054`・デッドロックの基本を理解します。

### [13. インデックスと性能の基礎](https://fcircle-biz.github.io/tech-docs-v2/guide/data-ai-category/database/oracle/oracle-learning-material-13.html)
検索が速くなる仕組みを図書館の索引に例えて理解し、B\*Tree インデックスの作成、効く書き方／効かない書き方を学びます。`EXPLAIN PLAN` と `DBMS_XPLAN`、SQL Developer での実行計画表示、全表走査とインデックススキャンの読み分け、統計情報の役割まで扱います。

### [14. ユーザー管理・バックアップと運用](https://fcircle-biz.github.io/tech-docs-v2/guide/data-ai-category/database/oracle/oracle-learning-material-14.html)
ユーザーの作成、`GRANT` / `REVOKE` による権限管理、ロール（CONNECT / RESOURCE）と最小権限の考え方を学びます。あわせて Data Pump（`expdp` / `impdp`）による論理バックアップ、RMAN と ARCHIVELOG モードの概要、日々の運用で確認するビューを紹介し、全14章のまとめと次の学習ステップを示します。

## 推奨所要時間

| 章 | 内容 | 目安時間 |
|----|------|----------|
| 第1章 | Oracle Databaseとは | 約45分 |
| 第2章 | アーキテクチャと基本用語 | 約1時間 |
| 第3章 | 環境構築とインストール | 約1.5時間 |
| 第4章 | SQL*PlusとSQL Developerの基本操作 | 約1時間 |
| 第5章 | 表の作成とデータ型 | 約1.5時間 |
| 第6章 | SELECT文でデータを取り出す | 約1.5時間 |
| 第7章 | データの追加・更新・削除 | 約1.5時間 |
| 第8章 | 関数とNULL・日付の扱い | 約1.5時間 |
| 第9章 | 表の結合と集計 | 約2時間 |
| 第10章 | PL/SQL入門 | 約2時間 |
| 第11章 | ストアドプログラムとトリガー | 約1.5時間 |
| 第12章 | トランザクションとロック | 約1.5時間 |
| 第13章 | インデックスと性能の基礎 | 約1.5時間 |
| 第14章 | ユーザー管理・バックアップと運用 | 約1.5時間 |
| **合計** | | **約20時間** |

## 学習目標

このガイドを完了すると、以下のスキルを身につけることができます：

- Oracle Database の全体像（インスタンス・データベース・CDB/PDB・表領域・スキーマ）を自分の言葉で説明できる
- Oracle Database 23ai Free の環境を自力で構築し、SQL*Plus と SQL Developer で接続・操作できる
- 表と制約を設計・作成し、Oracle のデータ型を適切に選べる
- SELECT・INSERT・UPDATE・DELETE を書いてデータを自在に操作でき、COMMIT / ROLLBACK を正しく使い分けられる
- 結合・集計・サブクエリを使って、複数の表にまたがる集計や分析ができる
- PL/SQL でブロック・条件分岐・繰り返し・例外処理を書き、ストアドプロシージャやトリガーとして保存・再利用できる
- 読み取り一貫性とロックの仕組みを理解し、同時実行時の挙動を説明できる
- インデックスと実行計画の基本を理解し、遅い SQL の原因を切り分ける第一歩を踏み出せる
- ユーザー・権限の管理と、バックアップ／リカバリの基本的な考え方を説明できる

## 次のステップ

- [SQL入門学習ガイド](https://fcircle-biz.github.io/tech-docs-v2/guide/data-ai-category/database/sql/sql-learning-material-01.html) — 標準 SQL を体系的に復習したい方に
- [SQL Server入門学習ガイド](https://fcircle-biz.github.io/tech-docs-v2/guide/data-ai-category/database/sqlserver/sqlserver-learning-material-01.html) — 他の RDBMS と比較して理解を深めたい方に
- [JDBC入門学習ガイド](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/jdbc/jdbc-learning-material-01.html) — Java アプリケーションから Oracle に接続したい方に
- Oracle Master Bronze / Silver などの資格学習へ進み、知識を体系的に整理する
