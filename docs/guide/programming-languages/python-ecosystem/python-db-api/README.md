# Python DB-API入門 学習ガイドライン

このガイドラインでは、Pythonの基礎とSQL/PostgreSQLを学習済みの方を対象に、PythonからPostgreSQLデータベースに接続・操作する方法を段階的に学習するカリキュラムを提供しています。Python標準のDB-API 2.0仕様に基づき、psycopg2ライブラリを使った実践的なデータベースプログラミングを習得できます。

## 前提条件

### 必要な環境
- Windows、Mac、またはLinuxが動作するコンピュータ
- Python 3.8以上がインストールされていること
- PostgreSQL 12以上がインストールされていること
- pip（Pythonパッケージマネージャー）
- テキストエディタまたはIDE（VS Code推奨）

### 参考リソース
- [Python公式サイト（日本語）](https://www.python.org/doc/) - Python公式ドキュメント
- [PEP 249 - Python Database API Specification v2.0](https://peps.python.org/pep-0249/) - DB-API仕様書（英語）
- [psycopg2公式ドキュメント](https://www.psycopg.org/docs/) - PostgreSQL用アダプタのドキュメント
- [PostgreSQL公式サイト（日本語）](https://www.postgresql.jp/) - PostgreSQL日本語情報サイト

### 前提知識
- **必須**: Python入門レベルの知識（変数、関数、リスト、辞書、ファイル操作など）
  - [Python入門ガイドライン](../python-beginner/README.md)を履修済みであること
- **必須**: SQLの基礎知識（SELECT、INSERT、UPDATE、DELETE、JOINなど）
  - [SQL入門ガイドライン](../../../data-ai-category/database/sql/README.md)を履修済みであること
- **必須**: PostgreSQLの基本操作
  - [PostgreSQL入門ガイドライン](../../../data-ai-category/database/postgresql/README.md)を履修済みであること
- **推奨**: コマンドライン（ターミナル）の基本操作ができること

## 学習コンテンツ

### [1. Python DB-APIとは - データベース接続の標準仕様を知ろう](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/python-db-api/python-db-api-learning-material-01.html)
Python DB-API（PEP 249）とは何か、なぜ標準仕様が必要なのかを解説します。psycopg2ライブラリの特徴、他のデータベースアダプタとの関係、PythonとPostgreSQLを連携させるメリットについて学びます。

### [2. 環境構築 - psycopg2をインストールしよう](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/python-db-api/python-db-api-learning-material-02.html)
psycopg2のインストール方法（pip install）を解説します。仮想環境（venv）の作成と活用、PostgreSQLへの接続確認、よくあるインストールエラーとその解決方法についても紹介します。

### [3. データベースへの接続 - コネクションとカーソルの基礎](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/python-db-api/python-db-api-learning-material-03.html)
psycopg2.connect()を使ったデータベース接続の方法を学習します。コネクション（connection）とカーソル（cursor）の概念、接続パラメータの設定、接続のクローズとリソース管理について理解します。

### [4. データの取得（SELECT） - クエリ結果をPythonで扱う](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/python-db-api/python-db-api-learning-material-04.html)
cursor.execute()でSELECT文を実行し、fetchone()、fetchall()、fetchmany()でデータを取得する方法を学習します。取得したデータをPythonのリストや辞書として扱う方法も習得します。

### [5. データの追加・更新・削除 - CRUD操作の実装](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/python-db-api/python-db-api-learning-material-05.html)
INSERT、UPDATE、DELETE文をPythonから実行する方法を学習します。executemany()による一括登録、影響を受けた行数の確認（rowcount）、操作後の確認方法について理解します。

### [6. パラメータ化クエリ - SQLインジェクション対策の基本](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/python-db-api/python-db-api-learning-material-06.html)
プレースホルダ（%s）を使ったパラメータ化クエリの重要性と書き方を学習します。SQLインジェクション攻撃とは何か、なぜ危険なのか、パラメータ化によってどう防げるのかを具体例で理解します。

### [7. トランザクション管理 - データの整合性を保つ](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/python-db-api/python-db-api-learning-material-07.html)
commit()とrollback()によるトランザクション制御を学習します。autocommitモード、明示的なトランザクション管理、エラー発生時のロールバック処理、実践的なトランザクションパターンを習得します。

### [8. コンテキストマネージャー - withで安全にリソース管理](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/python-db-api/python-db-api-learning-material-08.html)
Pythonのwith文を使ったコネクションとカーソルの安全な管理方法を学習します。例外発生時の自動クローズ、コンテキストマネージャーの仕組み、クリーンなコードの書き方を理解します。

### [9. エラーハンドリング - 例外処理でエラーに対応する](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/python-db-api/python-db-api-learning-material-09.html)
psycopg2が発生させる各種例外（DatabaseError、OperationalError、IntegrityErrorなど）の種類と対処方法を学習します。try-except文を使った堅牢なエラーハンドリングパターンを習得します。

### [10. 実践的なデータ操作 - 複雑なクエリとデータ処理](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/python-db-api/python-db-api-learning-material-10.html)
JOIN、集計関数、サブクエリなど複雑なSQLをPythonから実行する方法を学習します。取得したデータをPythonで加工・分析する方法、pandasとの連携についても紹介します。

### [11. 接続プール - 効率的なコネクション管理](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/python-db-api/python-db-api-learning-material-11.html)
psycopg2.poolを使った接続プールの作成と活用方法を学習します。なぜ接続プールが必要なのか、SimpleConnectionPool・ThreadedConnectionPoolの使い分け、Webアプリケーションでの活用について理解します。

### [12. 総合演習 - Pythonでデータベースアプリを作ろう](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/python-db-api/python-db-api-learning-material-12.html)
これまで学んだ知識を活用して、実用的なコマンドラインアプリケーション（簡易的な在庫管理システムや顧客管理システム）を作成します。設計から実装、テストまでを通して、DB連携プログラミングの総合力を身につけます。

## 学習の進め方

1. **前提知識の確認**: Python入門、SQL入門、PostgreSQL入門の内容をしっかり理解してから始めましょう。特にPythonの関数、例外処理、withステートメントの理解は重要です。

2. **環境を整える**: 第2章でpsycopg2のインストールと動作確認を確実に行いましょう。環境構築でつまずくと後の学習に支障が出ます。

3. **手を動かして覚える**: 各章のサンプルコードは必ず自分で入力して実行してみましょう。コピー＆ペーストではなく、手で打つことで理解が深まります。

4. **SQLと連携して考える**: PythonコードとSQLの両方を意識しながら学習しましょう。SQLの知識とPythonの知識を組み合わせることが重要です。

5. **セキュリティを意識する**: 第6章のパラメータ化クエリは特に重要です。実務では必須のスキルなので、しっかり理解しましょう。

6. **実践課題に挑戦**: 各章の練習問題と第12章の総合演習で、実際にアプリケーションを作成する経験を積みましょう。

## 推奨所要時間

| 章 | 内容 | 目安時間 |
|:--|:--|:--|
| 第1章 | Python DB-APIとは - データベース接続の標準仕様を知ろう | 30分 |
| 第2章 | 環境構築 - psycopg2をインストールしよう | 45分 |
| 第3章 | データベースへの接続 - コネクションとカーソルの基礎 | 1時間 |
| 第4章 | データの取得（SELECT） - クエリ結果をPythonで扱う | 1時間 |
| 第5章 | データの追加・更新・削除 - CRUD操作の実装 | 1時間 |
| 第6章 | パラメータ化クエリ - SQLインジェクション対策の基本 | 1時間 |
| 第7章 | トランザクション管理 - データの整合性を保つ | 1.5時間 |
| 第8章 | コンテキストマネージャー - withで安全にリソース管理 | 45分 |
| 第9章 | エラーハンドリング - 例外処理でエラーに対応する | 1時間 |
| 第10章 | 実践的なデータ操作 - 複雑なクエリとデータ処理 | 1.5時間 |
| 第11章 | 接続プール - 効率的なコネクション管理 | 1時間 |
| 第12章 | 総合演習 - Pythonでデータベースアプリを作ろう | 2時間 |
| **合計** | | **約13時間** |

## 関連リソース

- [Python入門ガイドライン](../python-beginner/README.md) - Pythonの基礎を学びたい方向け（前提知識）
- [SQL入門ガイドライン](../../../data-ai-category/database/sql/README.md) - SQLの基礎を学びたい方向け（前提知識）
- [PostgreSQL入門ガイドライン](../../../data-ai-category/database/postgresql/README.md) - PostgreSQLの基礎を学びたい方向け（前提知識）
- [SQLAlchemy学習ガイドライン](../sqlalchemy/README.md) - ORM（オブジェクト関係マッピング）を学びたい方向け
- [SQLModel学習ガイドライン](../sqlmodel/README.md) - FastAPIと組み合わせたモダンなDB操作を学びたい方向け

## 学習目標

このガイドを完了すると、以下のスキルを身につけることができます：

- Python DB-API 2.0仕様の基本概念を理解し、説明できる
- psycopg2を使ってPostgreSQLに接続できる
- PythonからSELECT、INSERT、UPDATE、DELETE操作を実行できる
- パラメータ化クエリを使って安全なSQLを記述できる
- トランザクションを適切に管理し、データの整合性を保てる
- with文を使ってリソースを安全に管理できる
- 発生しうる例外を適切に処理できる
- 複雑なクエリ結果をPythonで加工・活用できる
- 接続プールを使った効率的なコネクション管理ができる
- 実用的なデータベース連携アプリケーションを開発できる

## 次のステップ

このガイドライン完了後は、以下の学習に進むことをお勧めします：

- [SQLAlchemy学習ガイドライン](../sqlalchemy/README.md) - ORM（オブジェクト関係マッピング）でより抽象的なDB操作を学ぶ
- [SQLModel学習ガイドライン](../sqlmodel/README.md) - FastAPIと組み合わせたモダンなDB操作を学ぶ
- [Django学習ガイドライン](../django/README.md) - WebフレームワークのORM（Django ORM）を使ったDB操作を学ぶ
- [FastAPI学習ガイドライン](../fastapi/README.md) - モダンなWeb APIとデータベースの連携を学ぶ
