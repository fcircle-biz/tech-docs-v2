# FastAPI + SQLAlchemy + Jinja2 実践チュートリアル

FastAPI、SQLAlchemy、Jinja2、PostgreSQLを使用した、初心者向けのWebアプリケーション開発チュートリアルです。基本的なCRUD操作を通じて、モダンなPython Webアプリケーション開発の基礎を学びます。

## チュートリアル概要

### 学習目標
- FastAPIを使用した高速なWebアプリケーションの構築
- SQLAlchemyによるデータベース操作の基本
- Jinja2テンプレートを使用したHTMLページの作成
- PostgreSQLデータベースとの連携
- 基本的なCRUD操作（作成・読み取り・更新・削除）の実装

### 対象読者
- Python基礎文法を理解している方
- Webアプリケーション開発を始めたい方
- データベース操作の基本を学びたい方
- HTML/CSSの基礎知識がある方

### 特徴
- **初心者向け設計**: 複雑な機能を省き、基本機能に焦点を当てた内容
- **段階的学習**: 環境構築から実装まで、ステップバイステップで解説
- **実践重視**: 実際に動作するシンプルなユーザー管理システムを構築
- **最小限の依存関係**: 必要最小限のライブラリのみを使用

## 前提条件・環境要件

### 必要なソフトウェア
- **Python**: Python 3.8以上（推奨: Python 3.9+）
- **PostgreSQL**: PostgreSQL 12以上
- **エディタ**: Visual Studio Code（推奨）またはお好みのテキストエディタ
- **ブラウザ**: Chrome、Firefox、Edge等の最新版

### 推奨する基礎知識
- Pythonの基本文法（変数、関数、クラスの基礎）
- HTMLの基本タグ
- SQLの基本（SELECT、INSERT程度）
- コマンドラインの基本操作

## チュートリアル構成

### Step 1: [環境構築とプロジェクトセットアップ](https://fcircle-biz.github.io/tech_docs/tutorial/python-ecosystem/fastapi-sqlalchemy/step1-environment-setup.html)
- Python仮想環境の作成
- PostgreSQLのインストールと設定
- 必要なパッケージのインストール
- プロジェクト構造の作成
- 最初のFastAPIアプリケーション起動

**所要時間**: 1.5時間  
**習得内容**: 仮想環境、パッケージ管理、基本的なプロジェクト構造

### Step 2: [データベース設計とSQLAlchemy基礎](https://fcircle-biz.github.io/tech_docs/tutorial/python-ecosystem/fastapi-sqlalchemy/step2-database-design.html)
- SQLAlchemyの基本概念
- Userモデルの作成
- データベース接続の設定
- テーブルの作成
- 基本的なデータベース操作

**所要時間**: 2時間  
**習得内容**: ORM基礎、モデル定義、データベース接続

### Step 3: [FastAPIルーティングとJinja2テンプレート](https://fcircle-biz.github.io/tech_docs/tutorial/python-ecosystem/fastapi-sqlalchemy/step3-routing-templates.html)
- FastAPIのルーティング基礎
- Jinja2テンプレートの設定
- 基本的なHTMLテンプレート作成
- 静的ファイルの配信
- トップページの実装

**所要時間**: 2時間  
**習得内容**: ルーティング、テンプレート、静的ファイル

### Step 4: [ユーザー登録機能の実装](https://fcircle-biz.github.io/tech_docs/tutorial/python-ecosystem/fastapi-sqlalchemy/step4-user-registration.html)
- 登録フォームの作成
- POSTリクエストの処理
- データベースへの保存
- 基本的なバリデーション
- 成功/エラーメッセージの表示

**所要時間**: 2.5時間  
**習得内容**: フォーム処理、データ保存、バリデーション基礎

### Step 5: [ユーザー一覧と詳細表示](https://fcircle-biz.github.io/tech_docs/tutorial/python-ecosystem/fastapi-sqlalchemy/step5-user-list-detail.html)
- ユーザー一覧ページの作成
- テーブル形式でのデータ表示
- ユーザー詳細ページの実装
- 基本的なスタイリング

**所要時間**: 2時間  
**習得内容**: データ取得、一覧表示、詳細表示、基本的なCSS

### Step 6: [ユーザー情報の編集と削除](https://fcircle-biz.github.io/tech_docs/tutorial/python-ecosystem/fastapi-sqlalchemy/step6-user-update-delete.html)
- 編集フォームの作成
- 更新処理の実装
- 削除機能の実装
- 確認画面の追加
- エラーハンドリング

**所要時間**: 3時間  
**習得内容**: 更新処理、削除処理、エラーハンドリング

### Step 7: [基本的な検索機能とまとめ](https://fcircle-biz.github.io/tech_docs/tutorial/python-ecosystem/fastapi-sqlalchemy/step7-search-summary.html)
- 名前検索機能の実装
- 検索フォームの作成
- 検索結果の表示
- アプリケーションの総仕上げ
- 今後の学習ステップ

**所要時間**: 2時間  
**習得内容**: 検索機能、クエリ操作、アプリケーション完成

## 作成するアプリケーション概要

### アプリケーション名: Simple User Manager

#### 主な機能
1. **ユーザー登録** - シンプルな登録フォーム
2. **ユーザー一覧** - 登録されたユーザーの一覧表示
3. **ユーザー詳細** - 個別ユーザー情報の表示
4. **ユーザー編集** - 登録情報の更新
5. **ユーザー削除** - ユーザーの削除
6. **ユーザー検索** - 名前での簡易検索

#### データベース設計
```python
from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.ext.declarative import declarative_base
from datetime import datetime

Base = declarative_base()

class User(Base):
    __tablename__ = "users"
    
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True)
    email = Column(String, unique=True, index=True)
    full_name = Column(String)
    created_at = Column(DateTime, default=datetime.utcnow)
```

#### 技術スタック
- **Webフレームワーク**: FastAPI 0.100+
- **ORM**: SQLAlchemy 2.0+
- **テンプレートエンジン**: Jinja2 3.1+
- **データベース**: PostgreSQL 12+
- **Python**: 3.8+

#### ディレクトリ構成
```
simple-user-manager/
│  main.py
│  database.py
│  models.py
│  requirements.txt
│  README.md
│
├─templates/
│      base.html
│      index.html
│      user_form.html
│      user_list.html
│      user_detail.html
│      user_edit.html
│
└─static/
    └─css/
            style.css
```

## 総所要時間
**約15時間**（個人の習熟度により変動）

## 学習の特徴

### 初心者に優しい設計
- **最小限の機能**: 認証やミドルウェアなど複雑な機能は除外
- **シンプルな構造**: フラットなディレクトリ構造で理解しやすい
- **基本に集中**: CRUD操作の基本パターンを確実に習得
- **段階的な難易度**: 簡単な表示から始めて徐々に機能を追加

### 実践的なスキル習得
各章で以下のスキルを段階的に習得：
- **Step 1**: 開発環境の構築とプロジェクト管理
- **Step 2**: データベース設計とORM基礎
- **Step 3**: Webフレームワークとテンプレート基礎
- **Step 4**: フォーム処理とデータ保存
- **Step 5**: データ取得と表示
- **Step 6**: データ更新と削除
- **Step 7**: 検索機能とアプリケーション完成

## 参考資料とリンク

### 公式ドキュメント
- [FastAPI公式ドキュメント](https://fastapi.tiangolo.com/)
- [SQLAlchemy公式ドキュメント](https://docs.sqlalchemy.org/)
- [Jinja2公式ドキュメント](https://jinja.palletsprojects.com/)
- [PostgreSQL公式ドキュメント](https://www.postgresql.org/docs/)

### 関連技術
- [Pydantic公式ドキュメント](https://docs.pydantic.dev/)
- [Uvicorn公式ドキュメント](https://www.uvicorn.org/)

## チュートリアルの進め方

1. **順番に進める**: Step 1から順番に進めることを推奨
2. **動作確認**: 各ステップで必ず動作確認を行う
3. **エラーから学ぶ**: エラーメッセージを読んで理解する
4. **コードを書く**: コピペではなく、実際に手を動かして書く
5. **カスタマイズ**: 基本機能を理解したら、独自の機能を追加してみる

## セキュリティに関する注意事項

このチュートリアルは学習目的のため、以下のセキュリティ機能は含まれていません：
- ユーザー認証・認可
- パスワードのハッシュ化
- CSRF対策
- セッション管理
- 本番環境向けの設定

実際のアプリケーション開発では、これらのセキュリティ対策を必ず実装してください。

## 学習のポイント

### 効果的な学習方法
- **公式ドキュメントを読む**: 分からない部分は公式ドキュメントで確認
- **エラーメッセージを理解**: エラーの内容を理解し、解決方法を学ぶ
- **小さく始める**: 最初は小さな機能から実装
- **繰り返し練習**: 同じパターンを繰り返して身につける

### 発展的な学習
このチュートリアル完了後の推奨学習：
- **認証機能**: JWT認証の実装
- **API開発**: RESTful APIの設計と実装
- **非同期処理**: async/awaitを使った非同期処理
- **テスト**: pytest を使った自動テスト
- **デプロイ**: Heroku や AWS へのデプロイ

## トラブルシューティング

### よくある問題と解決方法
- **PostgreSQL接続エラー**: データベース名、ユーザー名、パスワードの確認
- **モジュールインポートエラー**: 仮想環境の有効化と pip install の確認
- **テンプレートが見つからない**: テンプレートディレクトリのパス設定確認
- **静的ファイルが読み込めない**: 静的ファイルディレクトリの設定確認

## サポート

技術的な質問や不具合報告は[Issues](https://github.com/fcircle-biz/tech_docs/issues)にて受け付けています。

---

[Step 1: 環境構築とプロジェクトセットアップ](https://fcircle-biz.github.io/tech_docs/tutorial/python-ecosystem/fastapi-sqlalchemy/step1-environment-setup.html)