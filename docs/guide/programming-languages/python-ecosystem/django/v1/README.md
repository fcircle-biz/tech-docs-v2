# Django 学習ガイドライン

このガイドラインでは、Djangoフレームワークを使用したWebアプリケーション開発の基礎を入門者向けに段階的に学習するためのカリキュラムを提供しています。

## 前提条件
### 必要な環境
- Python 3.8以降
- pip（Pythonパッケージマネージャー）
- テキストエディタまたは統合開発環境（VS Code、PyCharm等）
- Webブラウザ（Chrome、Firefox、Safari等）
- SQLiteデータベース（Djangoに標準同梱）
- コマンドライン/ターミナルの基本操作知識

### 参考リソース
- [Django公式ドキュメント](https://docs.djangoproject.com/)
- [Django日本語ドキュメント](https://docs.djangoproject.com/ja/)
- [Django REST Framework公式ドキュメント](https://www.django-rest-framework.org/)
- [Django Girls Tutorial（日本語）](https://tutorial.djangogirls.org/ja/)

### 前提知識
- **必須**: Python基礎文法（変数、関数、クラス、デコレータ）
- **必須**: HTTPプロトコルの基礎知識（GET、POST、リクエスト/レスポンス）
- **推奨**: HTML/CSSの基礎知識
- **推奨**: SQLデータベースの基本概念

## 学習コンテンツ
### [1. Django入門と環境構築](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/django/django-learning-material-01.html)
Djangoの特徴とMVTアーキテクチャ、インストール方法、プロジェクト作成、開発サーバーの起動、管理サイトの初期設定について学びます。

### [2. モデルとデータベース設計](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/django/django-learning-material-02.html)
モデルクラスの定義、フィールドタイプの選択、マイグレーションの仕組み、リレーションシップ（1対多、多対多）、QuerySetを使用したデータ操作について学習します。

### [3. ビューとURLルーティング](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/django/django-learning-material-03.html)
関数ベースビューとクラスベースビュー、URLconf設定、URLパラメータの処理、HttpResponseとショートカット関数、汎用ビューの活用方法を学びます。

### [4. テンプレートとフロントエンド統合](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/django/django-learning-material-04.html)
Djangoテンプレート言語（DTL）、テンプレート継承、コンテキストプロセッサー、静的ファイル（CSS、JavaScript、画像）の管理、テンプレートタグとフィルターについて学習します。

### [5. フォームとユーザー入力処理](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/django/django-learning-material-05.html)
Djangoフォームクラス、フォームバリデーション、ModelForm、CSRFプロテクション、ファイルアップロード処理、フォームセットの実装方法を学びます。

### [6. 認証とユーザー管理](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/django/django-learning-material-06.html)
Django認証システム、ユーザーモデルのカスタマイズ、ログイン/ログアウト機能、パーミッションとグループ、デコレータによるアクセス制御、ソーシャル認証統合について学習します。

### [7. Django REST Framework入門](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/django/django-learning-material-07.html)
RESTful API設計原則、シリアライザーの作成、ViewSetとRouter、認証とパーミッション、ペジネーションとフィルタリング、API ドキュメント自動生成について学びます。

### [8. テストとデバッグ](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/django/django-learning-material-08.html)
Django TestCaseクラス、モデル・ビュー・フォームのテスト、テストデータベース、Fixtureとファクトリー、Django Debug Toolbar、ログ設定とエラー処理について学習します。

### [9. デプロイメントと本番環境設定](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/django/django-learning-material-09.html)
本番環境設定（settings.py）、静的ファイルとメディアファイルの配信、WSGI/ASGIサーバー（Gunicorn、Uvicorn）、PostgreSQL/MySQL統合、環境変数管理、セキュリティベストプラクティスを学びます。

### [10. 高度な機能と最適化](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/django/django-learning-material-10.html)
カスタム管理コマンド、シグナル、ミドルウェア、キャッシュ戦略、データベースクエリ最適化、非同期ビュー、Celeryによるタスクキュー、国際化（i18n）について学習します。

## 学習の進め方
1. **プロジェクトベースで学習**: 各章で実際に動作するWebアプリケーションを構築しながら学習を進めます
2. **管理サイトを活用**: Django管理サイトを使用してデータモデルを視覚的に確認し、理解を深めます
3. **段階的な機能追加**: シンプルなブログアプリから始めて、徐々に複雑な機能を実装していきます
4. **ベストプラクティスの適用**: 各章で紹介されるDjangoの設計パターンとセキュリティ対策を実践します
5. **実用的なアプリケーション構築**: 学習した知識を統合して、実際に使用可能なWebアプリケーションを開発します

## 推奨学習期間
- **基礎習得コース** (1-5章): 4-5週間
- **実践活用コース** (6-10章): 5-6週間
- **合計学習期間**: 9-11週間（週5-7時間の学習を想定）

## 関連リソース
- [Python学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/python/README.html)
- [FastAPI学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/fastapi/README.html)
- [SQLAlchemy学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/sqlalchemy/README.html)
- [Webアプリケーション設計チートシート](https://fcircle-biz.github.io/tech_docs/cheatsheet/web/web-app-design-cheatsheet.html)

## 学習目標
このガイドを完了すると、以下のスキルを身につけることができます：
- DjangoのMVTアーキテクチャを理解し、Webアプリケーションを設計できる
- モデルを使用してデータベース設計とORM操作を実装できる
- ビューとテンプレートを連携させた動的なWebページを作成できる
- フォーム処理とバリデーションを含むユーザー入力機能を実装できる
- Django認証システムを使用したセキュアなユーザー管理機能を構築できる
- Django REST Frameworkを使用してRESTful APIを開発できる
- テスト駆動開発（TDD）の手法でDjangoアプリケーションを開発できる
- 本番環境へのデプロイメントとパフォーマンス最適化ができる