# Django入門 学習ガイドライン

このガイドラインでは、PythonのWebフレームワークDjangoの基礎を入門者向けに段階的に学習するためのカリキュラムを提供しています。Python基礎を学んだ方が次のステップとしてWebアプリケーション開発の世界に踏み出すための実践的な内容となっています。

## 前提条件

### 必要な環境
- Python 3.8以上がインストールされていること
- テキストエディタまたはIDE（VS Code、PyCharm等）
- コマンドライン/ターミナルの基本操作ができること
- Webブラウザ（Chrome、Firefox等の最新版）

### 参考リソース
- [Django公式ドキュメント（日本語）](https://docs.djangoproject.com/ja/5.0/)
- [Django公式チュートリアル](https://docs.djangoproject.com/ja/5.0/intro/tutorial01/)
- [Django Girls Tutorial 日本語版](https://tutorial.djangogirls.org/ja/)
- [MDN Web Docs - Django入門](https://developer.mozilla.org/ja/docs/Learn/Server-side/Django)

### 前提知識
- **必須**: Python基礎（変数、データ型、制御構造、関数、クラス、モジュール、パッケージの概念）
- **必須**: ファイルとディレクトリの操作、パスの概念
- **推奨**: HTML/CSSの基礎知識（タグ、要素、スタイルの基本）
- **推奨**: HTTPの基本概念（GET/POSTメソッド、リクエスト/レスポンス）

## 学習コンテンツ

### [1. Djangoとは - Webフレームワークの基礎理解](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/django/django-learning-material-01.html)
DjangoとWebフレームワークの概念、MVT（Model-View-Template）アーキテクチャの基本、開発環境のセットアップ方法を学びます。

### [2. はじめてのDjangoプロジェクト](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/django/django-learning-material-02.html)
プロジェクトの作成、開発サーバーの起動、アプリケーションの作成と構造理解、設定ファイルの基礎を実践的に学習します。

### [3. URLルーティング - リクエストの道筋を設計する](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/django/django-learning-material-03.html)
URLconf の仕組み、URLパターンの定義方法、パラメータの受け渡し、名前付きURLとリバースURLの活用方法を理解します。

### [4. ビュー - リクエストを処理してレスポンスを返す](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/django/django-learning-material-04.html)
関数ビューとクラスベースビュー、HttpRequestとHttpResponseオブジェクト、コンテキストデータの渡し方を学びます。

### [5. テンプレート - 動的なHTMLページを作る](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/django/django-learning-material-05.html)
Djangoテンプレート言語（DTL）、変数の表示とフィルタ、テンプレートタグによる制御、テンプレートの継承とインクルードを習得します。

### [6. モデル - データベースとの架け橋](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/django/django-learning-material-06.html)
モデルの定義とフィールドタイプ、マイグレーションの仕組み、データベース操作の基礎、リレーションシップの設定を理解します。

### [7. Django Admin - 管理画面を活用する](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/django/django-learning-material-07.html)
管理画面の設定とカスタマイズ、モデルの登録、管理者ユーザーの作成、データの追加・編集・削除操作を学びます。

### [8. フォーム - ユーザー入力を処理する](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/django/django-learning-material-08.html)
Djangoフォームの基礎、フォームフィールドとバリデーション、ModelFormによる効率的な開発、CSRF対策の実装を習得します。

### [9. 静的ファイルの管理 - CSS/JavaScript/画像を扱う](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/django/django-learning-material-09.html)
静的ファイルの設定と配信、テンプレートでの静的ファイル参照、メディアファイルのアップロード処理を学びます。

### [10. 認証システム - ユーザー管理の実装](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/django/django-learning-material-10.html)
Djangoの認証システム、ログイン・ログアウト機能、ユーザー登録、パスワード管理、アクセス制限の実装方法を理解します。

### [11. セッションとクッキー - 状態管理の仕組み](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/django/django-learning-material-11.html)
HTTPのステートレス性、セッションフレームワークの使い方、クッキーの操作、ユーザーごとのデータ保存を学びます。

### [12. データベースクエリの最適化](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/django/django-learning-material-12.html)
QuerySetの詳細、select_relatedとprefetch_related、N+1問題の解決、データベースインデックスの活用を習得します。

### [13. テストの書き方 - 品質を保証する](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/django/django-learning-material-13.html)
Djangoテストフレームワーク、単体テストと統合テスト、TestCaseクラスの使い方、テストデータベースの扱いを学びます。

### [14. デバッグとエラー処理](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/django/django-learning-material-14.html)
Django Debug Toolbarの活用、エラーページのカスタマイズ、ロギングの設定、例外処理のベストプラクティスを理解します。

### [15. 実践プロジェクト - ブログアプリを作る](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/django/django-learning-material-15.html)
これまで学んだ知識を総動員して、記事投稿、コメント機能、カテゴリ分類を持つ実践的なブログアプリケーションを構築します。

## 学習の進め方

1. **環境構築から始める**: 第1章でPythonとDjangoの環境を整え、動作確認を行います。各章のサンプルコードを実際に動かしながら学習を進めてください。

2. **手を動かして学ぶ**: 各章のコード例を必ず自分で入力し、実行結果を確認します。エラーが出たら、エラーメッセージを読んで解決する習慣をつけましょう。

3. **公式ドキュメントを参照する**: 不明な点があれば、Django公式ドキュメントを参照する習慣をつけます。英語が苦手な方は日本語版から始めて、徐々に英語版にも慣れていきましょう。

4. **小さな改造から始める**: サンプルコードを少しずつ改造して、動作の変化を観察します。「もしこうしたらどうなるだろう？」という疑問を持ち、実験することが理解を深めます。

5. **エラーを恐れない**: エラーは学習の機会です。エラーメッセージをよく読み、スタックトレースから原因を特定する練習をしましょう。

## 推奨所要時間

| 章 | 内容 | 目安時間 |
|----|------|----------|
| 第1章 | Djangoとは - Webフレームワークの基礎理解 | 45分 |
| 第2章 | はじめてのDjangoプロジェクト | 1時間 |
| 第3章 | URLルーティング - リクエストの道筋を設計する | 1時間 |
| 第4章 | ビュー - リクエストを処理してレスポンスを返す | 1.5時間 |
| 第5章 | テンプレート - 動的なHTMLページを作る | 1.5時間 |
| 第6章 | モデル - データベースとの架け橋 | 1.5時間 |
| 第7章 | Django Admin - 管理画面を活用する | 1時間 |
| 第8章 | フォーム - ユーザー入力を処理する | 1.5時間 |
| 第9章 | 静的ファイルの管理 - CSS/JavaScript/画像を扱う | 1時間 |
| 第10章 | 認証システム - ユーザー管理の実装 | 1.5時間 |
| 第11章 | セッションとクッキー - 状態管理の仕組み | 1時間 |
| 第12章 | データベースクエリの最適化 | 1.5時間 |
| 第13章 | テストの書き方 - 品質を保証する | 1.5時間 |
| 第14章 | デバッグとエラー処理 | 1時間 |
| 第15章 | 実践プロジェクト - ブログアプリを作る | 4時間 |
| **合計** | | **約21時間** |

※ 上記は目安です。自分のペースで着実に進めてください。

## 関連リソース

- [Django チートシート](https://fcircle-biz.github.io/tech_docs/cheatsheet/programming-languages/python-ecosystem/django/)
- [Python入門 学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/python/)
- [HTML/CSS 学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/web-technologies/html-css/)
- [PostgreSQL 学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/postgresql/)
- [Git/GitHub 学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/development-processes/git/)

## 学習目標

このガイドを完了すると、以下のスキルを身につけることができます：

- **Djangoプロジェクトの構築**: ゼロからDjangoプロジェクトを作成し、基本的な設定ができる
- **MVTアーキテクチャの理解**: Model-View-Templateパターンを理解し、適切に実装できる
- **データベース操作**: DjangoのORMを使用してデータベースの操作ができる
- **ユーザー認証の実装**: ログイン、ログアウト、ユーザー登録機能を実装できる
- **フォーム処理**: ユーザー入力を安全に処理し、バリデーションを実装できる
- **テンプレートの活用**: 動的なWebページを効率的に作成できる
- **管理画面のカスタマイズ**: Django Adminを活用してコンテンツ管理ができる
- **静的ファイルの管理**: CSS、JavaScript、画像ファイルを適切に配信できる
- **基本的なWebアプリケーション開発**: ブログ、掲示板などの簡単なWebアプリケーションを作成できる

## 次のステップ

このガイドライン完了後は、以下の学習に進むことをお勧めします：

- [Django REST Framework 学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/django-rest-framework/) - REST APIの構築
- [Flask 学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/flask/) - 軽量フレームワークの学習
- [FastAPI 学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/fastapi/) - 高性能APIフレームワーク
- [React 学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/web-technologies/react/) - フロントエンド開発
- [Docker 学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/docker/) - コンテナ技術の習得
- [AWS 学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/aws/) - クラウドへのデプロイ