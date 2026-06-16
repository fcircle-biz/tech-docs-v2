# Django + PostgreSQL (Docker) 実践チュートリアル

DjangoフレームワークとPostgreSQL（Docker環境）を使用した、モダンなPython Webアプリケーション開発を学ぶ実践的なチュートリアルです。Windows環境での開発を前提に、Docker Desktopを活用してPostgreSQLデータベースを構築し、Djangoの基本機能から実用的なユーザー管理システムまでを段階的に実装していきます。

## チュートリアル概要

### 学習目標
- Windows環境でのPython開発環境の構築
- Docker DesktopによるPostgreSQLコンテナの管理
- Djangoプロジェクトの基本構造とMVTアーキテクチャの理解
- モデル設計とデータベースマイグレーションの実践
- 基本的なCRUD操作を含むユーザー管理機能の実装
- Djangoテンプレートシステムによる動的HTML生成
- フォームバリデーションとセキュリティ対策
- Django管理サイトのカスタマイズ
- テスト駆動開発（TDD）の基礎

### 対象読者
- Pythonの基本文法を理解している方（初心者歓迎）
- Webアプリケーション開発に興味がある方
- Djangoフレームワークを初めて学ぶ方
- Windows環境での開発を行う方
- データベースを使用したアプリケーション開発を学びたい方

### 特徴
- **Windows対応**: Windows環境に特化した詳細なセットアップ手順
- **段階的構築**: 基礎から応用まで段階的に機能を追加
- **実践重視**: 実際に動作するユーザー管理システムを構築
- **モダンな技術スタック**: Django 5.x、Python 3.12、Docker環境
- **ベストプラクティス**: Django公式推奨の実装パターンを採用
- **日本語対応**: 日本語環境での開発を考慮した設定

## 前提条件・環境要件

### 必要なソフトウェア
- **OS**: Windows 10/11（64ビット版）
- **Python**: Python 3.10以上（推奨: Python 3.12）
- **IDE**: Visual Studio Code（推奨）
  - Python Extension
  - Django Extension
  - Docker Extension
- **コンテナ**: Docker Desktop for Windows（最新版）
- **バージョン管理**: Git for Windows
- **パッケージ管理**: pip（Pythonに付属）

### 推奨する基礎知識
- Pythonの基本文法（関数、クラス、モジュール）
- HTMLの基本知識
- SQLの基本操作（SELECT、INSERT、UPDATE、DELETE）
- コマンドプロンプトまたはPowerShellの基本操作

## チュートリアル構成

### Step 1: [Windows環境での開発環境構築](https://fcircle-biz.github.io/tech_docs/tutorial/python-ecosystem/django/step1-environment-setup.html)
- Python 3.12のインストールと環境変数設定
- Visual Studio Codeのセットアップと必要な拡張機能
- 仮想環境（venv）の作成と有効化
- Djangoのインストールと動作確認
- プロジェクトの初期設定とHello World
- Windows特有の注意点と対処法

**所要時間**: 1.5時間  
**習得内容**: Python環境構築、仮想環境管理、Django基本設定

### Step 2: [Docker DesktopとPostgreSQL環境構築](https://fcircle-biz.github.io/tech_docs/tutorial/python-ecosystem/django/step2-docker-postgresql.html)
- Docker Desktop for Windowsのインストール
- WSL2の設定と最適化
- Docker Composeファイルの作成
- PostgreSQLコンテナの起動と管理
- pgAdmin4コンテナの設定と接続
- データベースの作成と初期設定
- Djangoからの接続設定

**所要時間**: 2時間  
**習得内容**: Docker基礎、PostgreSQL設定、データベース接続

### Step 3: [Djangoプロジェクトの初期化と基本設定](https://fcircle-biz.github.io/tech_docs/tutorial/python-ecosystem/django/step3-django-project-init.html)
- Djangoプロジェクト構造の理解
- settings.pyの詳細設定
- PostgreSQLデータベース設定
- 静的ファイルとメディアファイルの設定
- 日本語・タイムゾーン設定
- 開発サーバーの起動と確認

**所要時間**: 1.5時間  
**習得内容**: Django設定、プロジェクト構造、データベース接続

### Step 4: [モデル設計とマイグレーション](https://fcircle-biz.github.io/tech_docs/tutorial/python-ecosystem/django/step4-models-migration.html)
- Djangoモデルの基本概念
- Userモデルの設計と実装
- フィールドタイプと制約の設定
- マイグレーションファイルの生成と実行
- モデルのメタオプション設定
- Django ORMの基本操作

**所要時間**: 2.5時間  
**習得内容**: モデル設計、マイグレーション、ORM基礎

### Step 5: [ビュー、テンプレート、URLルーティング](https://fcircle-biz.github.io/tech_docs/tutorial/python-ecosystem/django/step5-views-templates-urls.html)
- MVTアーキテクチャの理解
- 関数ベースビューとクラスベースビュー
- URLパターンの設定と名前付きURL
- テンプレートの作成と継承
- コンテキストデータの受け渡し
- 静的ファイルの管理

**所要時間**: 3時間  
**習得内容**: ビュー実装、URLルーティング、テンプレート構築

### Step 6: [Django管理サイトのセットアップ](https://fcircle-biz.github.io/tech_docs/tutorial/python-ecosystem/django/step6-admin-interface.html)
- 管理サイトの有効化
- スーパーユーザーの作成
- モデルの管理サイト登録
- 管理画面のカスタマイズ
- リスト表示と検索機能
- インライン編集の実装

**所要時間**: 2時間  
**習得内容**: 管理サイト活用、カスタマイズ、管理機能実装

### Step 7: [基本的なCRUD操作の実装](https://fcircle-biz.github.io/tech_docs/tutorial/python-ecosystem/django/step7-crud-operations.html)
- ユーザー一覧表示（ListView）
- ユーザー詳細表示（DetailView）
- ユーザー登録フォーム（CreateView）
- ユーザー情報更新（UpdateView）
- ユーザー削除機能（DeleteView）
- ページネーションの実装

**所要時間**: 4時間  
**習得内容**: CRUD操作、ジェネリックビュー、フォーム処理

### Step 8: [フォームバリデーションとセキュリティ](https://fcircle-biz.github.io/tech_docs/tutorial/python-ecosystem/django/step8-validation-security.html)
- Djangoフォームの作成
- フィールドバリデーション
- カスタムバリデータの実装
- CSRF対策の理解と実装
- XSS対策とテンプレートエスケープ
- SQLインジェクション対策
- セキュアなパスワード管理

**所要時間**: 3時間  
**習得内容**: フォーム検証、セキュリティ対策、安全な実装

### Step 9: [テストとデバッグ](https://fcircle-biz.github.io/tech_docs/tutorial/python-ecosystem/django/step9-testing-debugging.html)
- Djangoテストフレームワークの基礎
- モデルテストの作成
- ビューテストの実装
- フォームテストの作成
- テストデータベースの管理
- デバッグツールの活用
- ログ設定とトラブルシューティング

**所要時間**: 3時間  
**習得内容**: テスト駆動開発、デバッグ手法、品質保証

## 環境セットアップ手順（概要）

### 1. Pythonのインストール（Windows）
```bash
# Python公式サイトからインストーラーをダウンロード
# インストール時に「Add Python to PATH」にチェック
python --version
```

### 2. 仮想環境の作成と有効化
```bash
# プロジェクトディレクトリの作成
mkdir django-tutorial
cd django-tutorial

# 仮想環境の作成
python -m venv venv

# 仮想環境の有効化（Windows）
venv\Scripts\activate
```

### 3. Djangoとその他必要なパッケージのインストール
```bash
# pipのアップグレード
python -m pip install --upgrade pip

# Djangoと関連パッケージのインストール
pip install django==5.0
pip install psycopg2-binary
pip install python-decouple
```

### 4. Docker Desktopのインストールと起動
- Docker Desktop for Windowsをダウンロード
- WSL2バックエンドを有効化
- Docker Desktopを起動して動作確認

### 5. PostgreSQLコンテナの起動
```yaml
# docker-compose.yml
version: '3.8'
services:
  postgres:
    image: postgres:16
    container_name: django_postgres
    environment:
      POSTGRES_USER: django_user
      POSTGRES_PASSWORD: django_password
      POSTGRES_DB: django_db
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

  pgadmin:
    image: dpage/pgadmin4
    container_name: django_pgadmin
    environment:
      PGADMIN_DEFAULT_EMAIL: admin@example.com
      PGADMIN_DEFAULT_PASSWORD: admin
    ports:
      - "5050:80"
    depends_on:
      - postgres

volumes:
  postgres_data:
```

```bash
# Dockerコンテナの起動
docker-compose up -d
```

## 学習の進め方

### 推奨される学習方法
1. **順番通りに進める**: 各ステップは前のステップの知識を前提としています
2. **実際にコードを書く**: サンプルコードをそのままコピーするのではなく、理解しながら入力
3. **エラーに向き合う**: エラーメッセージを読んで解決方法を考える
4. **実験する**: コードを変更して動作を確認
5. **ドキュメントを読む**: Django公式ドキュメントを参照する習慣をつける

### トラブルシューティングのヒント
- エラーメッセージは必ず最後まで読む
- スタックトレースから問題の発生箇所を特定
- Google検索やStack Overflowを活用
- 仮想環境が有効化されているか確認
- Dockerコンテナが正常に起動しているか確認

## 参考リソース

### 公式ドキュメント
- [Django公式ドキュメント（日本語）](https://docs.djangoproject.com/ja/)
- [PostgreSQL公式ドキュメント](https://www.postgresql.org/docs/)
- [Docker公式ドキュメント](https://docs.docker.com/)

### 推奨書籍
- 「実践Django - Pythonによる本格Webアプリケーション開発」
- 「現場で使える Django の教科書」
- 「Two Scoops of Django」

### コミュニティ
- [Django Girls Tutorial（日本語）](https://tutorial.djangogirls.org/ja/)
- [Python.jp](https://www.python.jp/)
- [Qiita - Djangoタグ](https://qiita.com/tags/django)

## 注意事項

### Windows環境特有の注意点
- パスの区切り文字（バックスラッシュ vs スラッシュ）
- 文字エンコーディング（UTF-8の設定）
- 改行コード（CRLF vs LF）
- ファイアウォールとポート開放
- WSL2とDocker Desktopの連携

### セキュリティに関する注意
- 本番環境では必ずSECRET_KEYを変更
- DEBUG=Falseで運用
- データベースのパスワードは環境変数で管理
- ALLOWED_HOSTSを適切に設定

## まとめ

このチュートリアルを完了することで、以下のスキルが身につきます：

1. **Django開発の基礎**: プロジェクト構造、MVTパターン、ORM
2. **データベース連携**: PostgreSQLとの接続、マイグレーション
3. **CRUD操作**: 基本的なWebアプリケーション機能の実装
4. **セキュリティ**: Webアプリケーションの基本的なセキュリティ対策
5. **テスト**: テスト駆動開発の基礎
6. **Docker活用**: コンテナ技術を使った開発環境構築

Djangoは「バッテリー同梱」の哲学により、Webアプリケーション開発に必要な機能が最初から組み込まれています。このチュートリアルを通じて、その強力な機能を活用した実践的な開発スキルを習得してください。

Happy Django Coding! 🚀