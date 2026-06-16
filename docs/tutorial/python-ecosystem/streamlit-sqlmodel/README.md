# Streamlit + SQLModel 実践チュートリアル

Streamlit と SQLModel を使用したモダンなWebアプリケーション開発の実践的なチュートリアルです。Pythonの型ヒントを活用した安全なデータベース操作と、インタラクティブなUIを組み合わせた開発手法を学びます。

## チュートリアル概要

### 学習目標
- Streamlitを使用したインタラクティブなWebアプリケーションの構築
- SQLModelによる型安全なデータベース操作の実装
- DockerでのPostgreSQL環境構築（Windows環境）
- CRUD操作を含む実践的なユーザー管理システムの開発
- セッション管理とステート管理の基本

### 対象読者
- Python基礎文法を理解している方
- Webアプリケーション開発に興味がある方
- 型安全なデータベース操作を学びたい方
- DockerとPostgreSQLの基本を学びたい方
- データ分析アプリケーションを作成したい方

### 特徴
- **型安全な開発**: SQLModelによる型ヒントを活用した安全な実装
- **段階的学習**: 基本から応用まで段階的に機能を追加
- **実践重視**: 実際に動作するユーザー管理システムを構築
- **モダンな技術スタック**: 最新のPythonエコシステムを活用
- **Windows環境対応**: Windows環境でのDocker設定を詳細に解説

## 前提条件・環境要件

### 必要なソフトウェア
- **Python**: Python 3.9+ （推奨: Python 3.11以上）
- **Docker Desktop for Windows**: 最新版
- **エディタ**: Visual Studio Code（推奨）
- **Git**: Git for Windows
- **Windows**: Windows 10/11（WSL2有効化済み）

### 推奨する基礎知識
- Pythonの基本文法（関数、クラス、モジュール）
- SQLの基本（SELECT、INSERT、UPDATE、DELETE）
- Webアプリケーションの基本概念
- コマンドラインの基本操作

## チュートリアル構成

### Step 1: [環境構築とDockerセットアップ](https://fcircle-biz.github.io/tech_docs/tutorial/python-ecosystem/streamlit-sqlmodel/step1-environment-setup.html)
- Windows環境でのDocker Desktop設定
- PostgreSQLコンテナの起動と設定
- Python仮想環境の作成
- Streamlit、SQLModel、psycopg2のインストール
- プロジェクト構造の作成

**所要時間**: 2時間  
**習得内容**: Docker基本操作、Python仮想環境、パッケージ管理

### Step 2: [SQLModelでのデータベース設計](https://fcircle-biz.github.io/tech_docs/tutorial/python-ecosystem/streamlit-sqlmodel/step2-database-design.html)
- SQLModelの基本概念とPydanticとの関係
- Userモデルクラスの作成
- データベース接続の設定
- テーブルの自動作成
- 基本的なCRUD操作の実装

**所要時間**: 2.5時間  
**習得内容**: SQLModel基礎、型ヒント、ORM概念、データベース接続

### Step 3: [Streamlit基礎とユーザー登録機能](https://fcircle-biz.github.io/tech_docs/tutorial/python-ecosystem/streamlit-sqlmodel/step3-user-registration.html)
- Streamlitの基本コンポーネント
- フォーム入力と基本的なバリデーション
- SQLModelを使用したデータ保存
- エラーハンドリングとフィードバック
- セッションステートの基本

**所要時間**: 2.5時間  
**習得内容**: st.form、st.text_input、セッション管理、エラー処理

### Step 4: [ユーザー一覧とデータ表示](https://fcircle-biz.github.io/tech_docs/tutorial/python-ecosystem/streamlit-sqlmodel/step4-user-list-display.html)
- データフレームでの一覧表示
- 検索機能

**所要時間**: 2.5時間  
**習得内容**: st.dataframe、st.columns、Pandas連携、クエリ最適化

### Step 5: [ユーザー詳細・編集・削除機能](https://fcircle-biz.github.io/tech_docs/tutorial/python-ecosystem/streamlit-sqlmodel/step5-user-crud-operations.html)
- サイドバーでのナビゲーション
- ユーザー詳細表示
- 確認ダイアログ付き削除
- トランザクション管理

**所要時間**: 3時間  
**習得内容**: st.sidebar、st.modal、トランザクション、状態管理

### Step 6: [セキュリティとデプロイ準備](https://fcircle-biz.github.io/tech_docs/tutorial/python-ecosystem/streamlit-sqlmodel/step7-security-deployment.html)
- 環境変数での設定管理
- 認証機能の追加
- SQLインジェクション対策
- パフォーマンス最適化
- PostgreSQLでの本番環境構築

**所要時間**: 2時間  
**習得内容**: セキュリティ基礎、環境設定、PostgreSQL最適化、デプロイ準備

## 作成するアプリケーション概要

### アプリケーション名: Modern User Management Dashboard

#### 主な機能
1. **ユーザー登録** - フォームバリデーション付き新規登録
2. **ユーザー一覧** - 検索・フィルタ・ソート機能付き一覧
3. **ユーザー詳細** - 詳細情報の表示と編集
4. **ユーザー削除** - 確認ダイアログ付き安全な削除
5. **統計情報** - 基本的な統計情報表示

#### データベース設計
```python
from sqlmodel import Field, SQLModel
from datetime import datetime
from typing import Optional

class User(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    username: str = Field(unique=True, index=True)
    email: str = Field(unique=True)
    full_name: str
    age: Optional[int] = Field(default=None, ge=0, le=150)
    department: Optional[str] = None
    is_active: bool = Field(default=True)
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)
```

#### 技術スタック
- **フレームワーク**: Streamlit 1.28+
- **ORM**: SQLModel 0.0.14+
- **データベース**: PostgreSQL 15+ (Docker)
- **データ処理**: Pandas 2.0+
- **環境管理**: Docker Desktop for Windows
- **Python**: 3.11+

#### ディレクトリ構成
```
streamlit-user-management/
│  .env
│  .gitignore
│  docker-compose.yml
│  requirements.txt
│  README.md
│
├─app/
│  │  main.py
│  │  config.py
│  │  __init__.py
│  │
│  ├─models/
│  │      user.py
│  │      __init__.py
│  │
│  ├─database/
│  │      connection.py
│  │      crud.py
│  │      __init__.py
│  │
│  ├─pages/
│  │      1_👥_User_List.py
│  │      2_➕_Add_User.py
│  │      __init__.py
│  │
│  └─utils/
│          validators.py
│          helpers.py
│          __init__.py
│
└─docker/
        postgres/
            init.sql
```

## 総所要時間
**約14.5時間**（個人の習熟度により変動）

## 学習の特徴

### 実践的なスキル習得
各章で以下のスキルを段階的に習得：
- **Step 1**: Docker環境構築とPython環境管理
- **Step 2**: 型安全なORM設計とデータベース操作
- **Step 3**: インタラクティブなUI構築とフォーム処理
- **Step 4**: データ表示と検索機能の実装
- **Step 5**: 完全なCRUD操作とステート管理
- **Step 6**: セキュリティ対策と本番環境準備

### Windows環境での開発最適化
- **WSL2統合**: Docker DesktopのWSL2バックエンド設定
- **パス管理**: Windows/Linux間のパス変換
- **権限設定**: ファイルシステム権限の適切な管理
- **ネットワーク**: ポートフォワーディングとファイアウォール設定

## 参考資料とリンク

### 公式ドキュメント
- [Streamlit公式ドキュメント](https://docs.streamlit.io/)
- [SQLModel公式ドキュメント](https://sqlmodel.tiangolo.com/)
- [PostgreSQL公式ドキュメント](https://www.postgresql.org/docs/)
- [Docker Desktop for Windows](https://docs.docker.com/desktop/windows/)

### 関連技術
- [Pydantic公式ドキュメント](https://docs.pydantic.dev/)
- [Pandas公式ドキュメント](https://pandas.pydata.org/docs/)

## チュートリアルの進め方

1. **環境準備**: Docker Desktop、Python、エディタの設定
2. **段階実装**: 各ステップを順次実装し、動作確認
3. **コード理解**: 型ヒントとドキュメントを活用した理解
4. **機能拡張**: 基本機能を理解後、独自機能を追加
5. **パフォーマンス**: クエリ最適化とキャッシュ活用

## セキュリティに関する注意事項

- **SQLインジェクション対策**: SQLModelのORMによる自動エスケープ
- **環境変数管理**: .envファイルでの機密情報管理
- **入力検証**: 基本的な型検証
- **セッション管理**: Streamlitのセキュアなセッション機能
- **HTTPS対応**: 本番環境でのSSL/TLS設定

## 学習のポイント

### 効果的な学習方法
- **公式ドキュメント活用**: 最新の機能と仕様を確認
- **エラーから学ぶ**: スタックトレースの読み方を習得
- **段階的実装**: 小さな機能から徐々に拡張
- **型の活用**: 型ヒントでバグを事前に防ぐ

### 発展的な学習
このチュートリアル完了後の推奨学習：
- **FastAPI連携**: バックエンドAPIとの統合
- **機械学習統合**: scikit-learn、TensorFlowとの連携
- **リアルタイム処理**: WebSocketを使用したリアルタイム更新
- **データベース拡張**: 高度なPostgreSQL機能の活用
- **CI/CD**: GitHub ActionsでのDevOps実践

## トラブルシューティング

### よくある問題と解決方法
- **Docker起動エラー**: WSL2の有効化とDocker Desktop設定確認
- **PostgreSQL接続エラー**: ポート競合とファイアウォール設定
- **パッケージインストールエラー**: Python仮想環境の再作成
- **Streamlitポートエラー**: 使用中のポート確認と変更

## サポート

技術的な質問や不具合報告は[Issues](https://github.com/fcircle-biz/tech_docs/issues)にて受け付けています。

---

[Step 1: 環境構築とDockerセットアップ](https://fcircle-biz.github.io/tech_docs/tutorial/python-ecosystem/streamlit-sqlmodel/step1-environment-setup.html)