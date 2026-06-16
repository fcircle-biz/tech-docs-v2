# Streamlit 学習ガイドライン

このガイドラインでは、Streamlitを使用したWebアプリケーション開発の基礎を入門者向けに段階的に学習するためのカリキュラムを提供しています。

## 前提条件
### 必要な環境
- Python 3.8以降
- pip（Pythonパッケージマネージャー）
- テキストエディタまたは統合開発環境（VS Code、PyCharm等）
- Webブラウザ（Chrome、Firefox、Safari等）

### 参考リソース
- [Streamlit公式ドキュメント](https://docs.streamlit.io/)
- [Streamlit API Reference](https://docs.streamlit.io/library/api-reference)
- [Streamlit Gallery](https://streamlit.io/gallery)

### 前提知識
- **必須**: Python基礎文法（変数、関数、リスト、辞書など）
- **必須**: Pythonのパッケージ管理（pip）の基本操作
- **推奨**: pandas、NumPyの基礎知識
- **推奨**: matplotlib/plotlyなどの可視化ライブラリの基礎

## 学習コンテンツ
### [1. Streamlit入門と環境構築](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/streamlit/streamlit-learning-material-01.html)
Streamlitの特徴と用途、インストール方法、開発環境のセットアップ、最初のWebアプリケーションの作成と実行方法を学びます。

### [2. 基本的なUIコンポーネント](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/streamlit/streamlit-learning-material-02.html)
テキスト表示、マークダウン、タイトル、ヘッダー、サイドバー、カラムレイアウトなどの基本的なUI要素の使い方を学習します。

### [3. データ表示と可視化](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/streamlit/streamlit-learning-material-03.html)
DataFrameの表示、グラフ作成（line_chart、bar_chart、plotly、matplotlib連携）、メトリクス表示、プログレスバーの実装方法を学びます。

### [4. ユーザー入力とインタラクション](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/streamlit/streamlit-learning-material-04.html)
ボタン、チェックボックス、ラジオボタン、セレクトボックス、スライダー、テキスト入力、日付入力などの入力コンポーネントの活用方法を学習します。

### [5. セッション状態管理](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/streamlit/streamlit-learning-material-05.html)
st.session_stateを使用した状態管理、ページ間でのデータ共有、動的なUI更新、フォームとコールバック関数の実装について学びます。

### [6. ファイル操作とデータ処理](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/streamlit/streamlit-learning-material-06.html)
ファイルアップロード機能、CSV/Excel/画像ファイルの処理、ダウンロードボタンの実装、データのキャッシュ機能（@st.cache_data）の活用方法を学習します。

### [7. マルチページアプリケーション](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/streamlit/streamlit-learning-material-07.html)
複数ページのアプリケーション構築、ナビゲーション実装、ページ間のデータ共有、アプリケーション構造の設計パターンについて学びます。

### [8. データベース連携とAPI統合](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/streamlit/streamlit-learning-material-08.html)
SQLiteやPostgreSQLとの連携、外部APIとの通信、リアルタイムデータの表示、認証機能の基礎実装について学習します。

### [9. デプロイメントと本番環境](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/streamlit/streamlit-learning-material-09.html)
Streamlit Cloudへのデプロイ、secrets管理、環境変数の設定、パフォーマンス最適化、エラーハンドリングとロギングについて学びます。

### [10. 実践的なデータ分析アプリ開発](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/streamlit/streamlit-learning-material-10.html)
売上分析ダッシュボード、機械学習モデルのデモアプリ、データ探索ツール、レポート生成システムなど、実践的なアプリケーションを開発します。

## 学習の進め方
1. **環境構築を確実に行う**: 第1章でStreamlit環境を正しくセットアップし、サンプルアプリが動作することを確認します
2. **インタラクティブに学習**: 各章のコード例を実際に動かしながら、リアルタイムで結果を確認します
3. **小さな機能から始める**: 単純なコンポーネントから始めて、徐々に複雑な機能を組み合わせていきます
4. **公式ドキュメントを活用**: Streamlitの豊富な公式ドキュメントとサンプルコードを参照しながら学習を進めます
5. **実用的なアプリを作る**: 学んだ知識を活用して、自分のデータやアイデアを基にしたアプリケーションを作成します

## 推奨学習期間
- **基礎習得コース** (1-4章): 2-3週間
- **実践活用コース** (5-10章): 4-5週間
- **合計学習期間**: 6-8週間（週4-6時間の学習を想定）

## 関連リソース
- [Pythonデータ分析チートシート](https://fcircle-biz.github.io/tech_docs/cheatsheet/python/python-data-analysis-cheatsheet.html)
- [Python学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/python/README.html)
- [Streamlit Components Gallery](https://streamlit.io/components)

## 学習目標
このガイドを完了すると、以下のスキルを身につけることができます：
- Streamlitの基本的なコンポーネントを使いこなし、インタラクティブなWebアプリを作成できる
- データの可視化とユーザー入力を組み合わせた動的なダッシュボードを構築できる
- セッション状態を管理し、複雑なユーザーインタラクションを実装できる
- ファイルアップロード・ダウンロード機能を含むデータ処理アプリを開発できる
- マルチページアプリケーションの設計と実装ができる
- データベースや外部APIと連携したアプリケーションを構築できる
- Streamlit Cloudを使用してアプリケーションをデプロイし、公開できる
