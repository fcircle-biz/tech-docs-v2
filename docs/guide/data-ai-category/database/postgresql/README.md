# PostgreSQL入門 学習ガイドライン

このガイドラインでは、SQL基礎を学習済みの方を対象に、PostgreSQLの特徴と実践的な活用方法を段階的に学習するカリキュラムを提供しています。pgAdminなどのGUIツールを活用しながら、PostgreSQLならではの機能を習得していきます。

## 前提条件

### 必要な環境
- Windows、Mac、またはLinuxが動作するコンピュータ
- インターネット接続（PostgreSQLのダウンロード用）
- 4GB以上のメモリ
- 10GB以上の空きディスク容量

### 参考リソース
- [PostgreSQL公式サイト（日本語）](https://www.postgresql.jp/) - PostgreSQL日本語情報サイト
- [PostgreSQL公式ドキュメント](https://www.postgresql.org/docs/current/) - 公式リファレンス（英語）
- [PostgreSQLダウンロードページ](https://www.postgresql.org/download/) - 各OS用インストーラー
- [pgAdmin公式サイト](https://www.pgadmin.org/) - データベースを視覚的に操作できるGUIツール

### 前提知識
- **必須**: SQL基礎（SELECT、INSERT、UPDATE、DELETE、WHERE、JOIN、集計関数など）を理解していること
  - [SQL入門ガイドライン](../sql/README.md)を履修済みであること
- **推奨**: テーブル設計の基本的な考え方を理解していること

## 学習コンテンツ

### [1. PostgreSQLとは - 他のデータベースとの違いを知ろう](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/postgresql/postgresql-learning-material-01.html)
PostgreSQLの歴史と特徴、MySQL・Oracle・SQL Serverなど他のRDBMSとの違いを解説します。なぜPostgreSQLが選ばれるのか、オープンソースのメリット、PostgreSQLが得意とする分野について学びます。

### [2. PostgreSQLの環境構築 - インストールとpgAdminの使い方](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/postgresql/postgresql-learning-material-02.html)
PostgreSQLのダウンロードからインストール、初期設定までを画面キャプチャ付きで丁寧に解説します。pgAdminの基本操作（サーバー接続、データベース作成、SQLエディタの使い方）を習得します。

### [3. PostgreSQLのデータ型 - 豊富なデータ型を使いこなそう](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/postgresql/postgresql-learning-material-03.html)
PostgreSQLが誇る豊富なデータ型を学習します。基本型（整数、文字列、日付時刻）に加え、配列型、JSON/JSONB型、UUID型、範囲型など、PostgreSQLならではのデータ型の特徴と使いどころを紹介します。

### [4. PostgreSQLのテーブル設計 - 制約とインデックスの基礎](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/postgresql/postgresql-learning-material-04.html)
PostgreSQLでのテーブル作成と各種制約（PRIMARY KEY、FOREIGN KEY、UNIQUE、CHECK、NOT NULL）の設定方法を学習します。インデックスの基本概念と作成方法、パフォーマンスへの影響について理解します。

### [5. PostgreSQLの便利な関数 - 文字列・日付・数値の操作](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/postgresql/postgresql-learning-material-05.html)
PostgreSQLが提供する豊富な組み込み関数を学習します。文字列関数（CONCAT、SUBSTRING、TRIMなど）、日付関数（NOW、AGE、DATE_TRUNCなど）、数値関数（ROUND、CEIL、FLOORなど）の実践的な使い方を習得します。

### [6. JSONデータの操作 - モダンなデータ形式を扱う](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/postgresql/postgresql-learning-material-06.html)
PostgreSQLの強力なJSON/JSONB型の活用方法を学習します。JSONデータの格納、検索、更新、JSONパス式による要素の抽出など、Webアプリケーション開発で頻出するJSONデータの操作を実践します。

### [7. ビューとマテリアライズドビュー - 複雑なクエリを簡単に](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/postgresql/postgresql-learning-material-07.html)
ビューの作成と活用方法、マテリアライズドビューによるパフォーマンス改善を学習します。複雑なクエリを再利用可能な形で保存し、日常的なデータ分析業務を効率化する方法を習得します。

### [8. トランザクションとロック - データの整合性を守る](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/postgresql/postgresql-learning-material-08.html)
トランザクション（BEGIN、COMMIT、ROLLBACK）の基本概念と実践的な使い方を学習します。ACID特性、分離レベル、ロックの仕組みを理解し、データの整合性を保つ方法を習得します。

### [9. PostgreSQLのインデックス詳解 - クエリを高速化する](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/postgresql/postgresql-learning-material-09.html)
B-treeインデックス、GINインデックス、GiSTインデックスなど、PostgreSQLが提供する様々なインデックスの種類と使い分けを学習します。EXPLAINコマンドでクエリの実行計画を分析する方法も習得します。

### [10. バックアップとリストア - データを安全に守る](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/postgresql/postgresql-learning-material-10.html)
pg_dump、pg_restore、pg_basebackupを使ったバックアップとリストアの方法を学習します。論理バックアップと物理バックアップの違い、定期バックアップの自動化について理解します。

### [11. ユーザーと権限管理 - セキュリティの基礎](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/postgresql/postgresql-learning-material-11.html)
PostgreSQLのロールとユーザー管理、GRANT/REVOKEによる権限設定を学習します。本番環境で必要となるセキュリティ設定の基本と、最小権限の原則について理解します。

### [12. 実践！PostgreSQLでWebアプリのDBを設計しよう](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/postgresql/postgresql-learning-material-12.html)
これまで学んだ知識を活用して、実際のWebアプリケーション（ECサイトやブログシステム）を想定したデータベースを設計・構築します。テーブル設計、インデックス設計、JSON活用、ビュー作成までを通して実践します。

## 学習の進め方

1. **SQL基礎の復習から**: SQL入門で学んだ内容（SELECT、JOIN、集計関数など）が不安な場合は、先に復習してから始めましょう。

2. **pgAdminを使って操作**: 第2章でpgAdminの使い方を覚えたら、以降の章でも積極的にpgAdminを活用しましょう。GUIで操作することで理解が深まります。

3. **手を動かして試す**: 各章で紹介するSQLやコマンドは、必ず自分でも実行してみましょう。特にPostgreSQL独自の機能は実際に動かすことで理解が深まります。

4. **エラーを恐れない**: 新しい機能を試すときはエラーが出ることもあります。エラーメッセージを読んで原因を探る習慣をつけましょう。

5. **実践課題に挑戦**: 各章の練習問題と第12章の総合演習で、実務に近い形での操作を経験しましょう。

## 推奨所要時間

| 章 | 内容 | 目安時間 |
|:--|:--|:--|
| 第1章 | PostgreSQLとは - 他のデータベースとの違いを知ろう | 30分 |
| 第2章 | PostgreSQLの環境構築 - インストールとpgAdminの使い方 | 1時間 |
| 第3章 | PostgreSQLのデータ型 - 豊富なデータ型を使いこなそう | 1時間 |
| 第4章 | PostgreSQLのテーブル設計 - 制約とインデックスの基礎 | 1時間 |
| 第5章 | PostgreSQLの便利な関数 - 文字列・日付・数値の操作 | 1時間 |
| 第6章 | JSONデータの操作 - モダンなデータ形式を扱う | 1.5時間 |
| 第7章 | ビューとマテリアライズドビュー - 複雑なクエリを簡単に | 1時間 |
| 第8章 | トランザクションとロック - データの整合性を守る | 1.5時間 |
| 第9章 | PostgreSQLのインデックス詳解 - クエリを高速化する | 1.5時間 |
| 第10章 | バックアップとリストア - データを安全に守る | 1時間 |
| 第11章 | ユーザーと権限管理 - セキュリティの基礎 | 1時間 |
| 第12章 | 実践！PostgreSQLでWebアプリのDBを設計しよう | 2時間 |
| **合計** | | **約14時間** |

## 関連リソース

- [SQL入門ガイドライン](../sql/README.md) - SQL基礎を学びたい方向け（前提知識）
- [Oracle Database学習ガイドライン](../oracle/README.md) - エンタープライズ向けRDBMSを学びたい方向け
- [PL/SQL学習ガイドライン](../plsql/README.md) - Oracle向けストアドプログラミングを学びたい方向け

## 学習目標

このガイドを完了すると、以下のスキルを身につけることができます：

- PostgreSQLの特徴と他のRDBMSとの違いを説明できる
- pgAdminを使ってデータベースを操作できる
- PostgreSQL独自のデータ型（配列、JSON、UUIDなど）を活用できる
- 適切な制約とインデックスを設定したテーブルを設計できる
- PostgreSQLの組み込み関数を使ってデータを加工できる
- JSON/JSONBデータを格納・検索・更新できる
- ビューとマテリアライズドビューを作成・活用できる
- トランザクションを使ってデータの整合性を保てる
- EXPLAINでクエリの実行計画を分析できる
- バックアップとリストアの操作ができる
- ユーザーと権限を適切に管理できる
- 実際のWebアプリケーションを想定したDB設計ができる

## 次のステップ

このガイドライン完了後は、以下の学習に進むことをお勧めします：

- [Python入門ガイドライン](../../programming-languages/python-ecosystem/python/README.md) - PythonからPostgreSQLを操作する方法を学ぶ
- [Django学習ガイドライン](../../programming-languages/python-ecosystem/django/README.md) - WebフレームワークとPostgreSQLの連携を学ぶ
- PostgreSQL中級（レプリケーション、パーティショニング、パフォーマンスチューニング）- より高度な運用技術を学ぶ
