# Python SQLAlchemy 学習ガイドライン

このガイドラインでは、Python SQLAlchemyの基礎を入門者向けに段階的に学習するためのカリキュラムを提供しています。SQLAlchemy CoreとORMの両方をカバーし、実践的なデータベース操作スキルを習得します。

## 前提条件

### 必要な環境
- Python 3.8以上がインストール済み
- pip または poetry によるパッケージ管理環境
- SQLiteまたはPostgreSQL/MySQLのいずれか
- Visual Studio Code または PyCharm（推奨）

### 参考リソース
- [SQLAlchemy 公式ドキュメント](https://docs.sqlalchemy.org/) - SQLAlchemy公式リファレンス
- [SQLAlchemy Tutorial](https://docs.sqlalchemy.org/en/20/tutorial/) - 公式チュートリアル
- [SQLAlchemy ORM Tutorial](https://docs.sqlalchemy.org/en/20/orm/tutorial.html) - ORM詳細チュートリアル

### 前提知識
- **必須**: Pythonの基本文法（クラス、関数、モジュール）
- **必須**: SQLの基本知識（SELECT、INSERT、UPDATE、DELETE、JOIN）
- **推奨**: リレーショナルデータベースの基本概念
- **推奨**: オブジェクト指向プログラミングの基礎

## 学習コンテンツ

### [1. SQLAlchemy入門と環境構築](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/sqlalchemy/python-sqlalchemy-learning-material-01.html)
SQLAlchemyの概要、CoreとORMの違い、環境構築方法を学習します。基本的なデータベース接続の設定と動作確認を行います。

### [2. SQLAlchemy Core基礎](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/sqlalchemy/python-sqlalchemy-learning-material-02.html)
SQLAlchemy Coreの基本概念、Engineとコネクション管理、メタデータとテーブル定義、基本的なCRUD操作を学習します。

### [3. SQLAlchemy ORM基礎](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/sqlalchemy/python-sqlalchemy-learning-material-03.html)
ORMの基本概念、モデルクラスの定義方法、セッション管理、基本的なクエリメソッドを使ったデータ操作を学習します。

### [4. リレーションシップとJOIN操作](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/sqlalchemy/python-sqlalchemy-learning-material-04.html)
1対多、多対多などのリレーションシップの定義、外部キー制約、JOINを使った関連データの取得方法を習得します。

### [5. 高度なクエリとパフォーマンス最適化](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/sqlalchemy/python-sqlalchemy-learning-material-05.html)
複雑なクエリの構築、サブクエリ、集計関数、Eager LoadingとLazy Loading、N+1問題の解決方法を学習します。

### [6. データベースマイグレーション（Alembic）](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/sqlalchemy/python-sqlalchemy-learning-material-06.html)
Alembicを使ったデータベーススキーマのバージョン管理、マイグレーションファイルの作成と実行、本番環境での安全な適用方法を学習します。

### [7. トランザクション管理とエラーハンドリング](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/sqlalchemy/python-sqlalchemy-learning-material-07.html)
トランザクションの基本概念、コミットとロールバック、同時実行制御、適切なエラーハンドリングの実装方法を習得します。

### [8. 実践的なアプリケーション開発](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/sqlalchemy/python-sqlalchemy-learning-material-08.html)
Flask/FastAPIとの統合、コネクションプーリング、セキュリティ対策、本番環境でのベストプラクティスを学習します。

## 学習の進め方

1. **環境構築から開始**: まず「1. SQLAlchemy入門と環境構築」で開発環境を整え、基本的な動作確認を行いましょう。

2. **CoreとORMを段階的に学習**: SQLAlchemy Coreで低レベルの操作を理解してから、ORMの便利な機能を学ぶことで、両方の長所を活かせるようになります。

3. **実践的な演習を重視**: 各章の演習では、実際のビジネスシナリオ（ECサイト、ブログシステムなど）を想定したデータベース設計と実装を行います。

4. **エラーに慣れる**: SQLAlchemyのエラーメッセージを理解し、デバッグ方法を身につけることが重要です。

5. **プロジェクト実践**: 学習の後半では、完全なCRUDアプリケーション（タスク管理システム、在庫管理システムなど）を構築して実践力を身につけましょう。

## 推奨学習期間

- **基礎習得コース** (1-4章): 3-4週間
- **実践活用コース** (5-8章): 3-4週間

## 関連リソース

- [Python学習ガイド](../python/README.md) - Python基礎の学習ガイド
- [SQL チートシート](https://fcircle-biz.github.io/tech_docs/cheatsheet/databases/sql-cheatsheet.html) - SQL文の基本的な構文をまとめた参考資料

## 学習目標

このガイドを完了すると、以下のスキルを身につけることができます：

- SQLAlchemy CoreとORMの違いと使い分け
- データベース接続とセッション管理の実装
- モデルクラスの設計とリレーションシップの定義
- 効率的なクエリの構築とパフォーマンス最適化
- Alembicを使ったデータベースマイグレーション
- トランザクション管理とエラーハンドリング
- N+1問題の理解と解決
- コネクションプーリングの設定と管理
- Flask/FastAPIとの統合実装
- セキュリティを考慮したデータベースアクセス

## 次のステップ

このガイドライン完了後は、以下の学習に進むことをお勧めします：

- [FastAPI学習ガイドライン](../fastapi/README.md) - PythonのモダンなWebフレームワーク学習
- [Django学習ガイドライン](../django/README.md) - Django フレームワークでのORM活用