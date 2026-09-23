# Python 入門 学習ガイドライン

このガイドラインでは、プログラミング未経験者・初心者を対象に、Python の基礎を段階的に学習するためのカリキュラムを提供しています。「変数」「条件分岐」「繰り返し」といったプログラミングの基本から、リスト・辞書によるデータの扱い、関数・例外処理・ファイル操作・モジュール・クラスまでを、身近なたとえと短いコード例で丁寧に解説します。最後に、学んだ知識を組み合わせてコマンドラインで動く「家計簿アプリ」を完成させます。読みやすく書きやすい Python を通して、「自分の書いたコードで仕事が自動化できる」楽しさを体験できます。

## 前提条件

### 必要な環境
- パソコン（Windows / macOS / Linux のいずれか）
- インターネット接続（Python・エディタのダウンロード用）
- **Python 3.12 以降**（第2章でインストールします）
- **Visual Studio Code**（学習用エディタ。Python 拡張機能を使います）

### 参考リソース
- [Python 公式サイト](https://www.python.org/)
- [Python チュートリアル（公式・日本語）](https://docs.python.org/ja/3/tutorial/index.html)
- [Python 標準ライブラリ（公式・日本語）](https://docs.python.org/ja/3/library/index.html)
- [Visual Studio Code 公式サイト](https://code.visualstudio.com/)

### 前提知識
- **必須**: パソコンの基本操作（ファイルの保存、フォルダ作成、アプリのインストール）
- **推奨**: ターミナル（コマンドプロンプト）を開いたことがあると第2章がスムーズです。プログラミング経験は不要です。

## 学習コンテンツ

### [1. プログラミングとPythonを知ろう](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/python-ecosystem/python/python-learning-material-01.html)
プログラミングとは何か、Python がどんな言語で、どんな場面（業務自動化・データ分析・Web・AI）で活躍しているのかを、身近な例で説明します。プログラムが実行される仕組み（インタプリタ）の全体像もつかみます。

### [2. 開発環境を準備しよう](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/python-ecosystem/python/python-learning-material-02.html)
Python 本体のインストール（Windows は公式推奨の Python install manager、macOS は公式インストーラ）、バージョン確認、VS Code と Python 拡張機能の導入を行います。ターミナルの基本操作と、`python` コマンドが見つからないときの確認方法も解説します。

### [3. はじめてのプログラムを書こう](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/python-ecosystem/python/python-learning-material-03.html)
`print()` で「Hello, World!」を表示する最初のプログラムを作成します。対話モード（REPL）とスクリプトファイル（.py）の2つの実行方法、コメント、インデントの意味、エラーメッセージの読み方の第一歩を学びます。

### [4. 変数とデータ型を理解しよう](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/python-ecosystem/python/python-learning-material-04.html)
変数という「名札」でデータを扱う方法と、整数・浮動小数点数・文字列・真偽値の4つの基本データ型を学びます。`type()` による型の確認、`int()`・`str()` による型変換、`input()` によるキーボード入力も扱います。

### [5. 計算と文字列を操作しよう](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/python-ecosystem/python/python-learning-material-05.html)
算術演算子（`//`・`%`・`**` を含む）と代入演算子、f文字列による埋め込み表示、文字列メソッド（`upper()`・`replace()`・`split()` など）、インデックスとスライスを学びます。

### [6. 条件によって処理を変えよう（if文）](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/python-ecosystem/python/python-learning-material-06.html)
`if`・`elif`・`else` による条件分岐、比較演算子、論理演算子（`and`・`or`・`not`）を学びます。Python ではインデントがブロックを表すことを、分岐の流れ図とともに理解します。

### [7. 同じ処理を繰り返そう（for文・while文）](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/python-ecosystem/python/python-learning-material-07.html)
`for` 文と `range()`、`while` 文、`break`・`continue` を使った繰り返し処理を学びます。合計の計算や九九の表など、ループの定番パターンを身につけます。

### [8. 複数のデータをまとめよう（リストとタプル）](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/python-ecosystem/python/python-learning-material-08.html)
複数のデータを順番に並べて扱うリストの作成・参照・追加・削除・並べ替えと、`for` 文との組み合わせを学びます。変更できないタプルとの違いや、リスト内包表記の入口も扱います。

### [9. 名前でデータを管理しよう（辞書と集合）](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/python-ecosystem/python/python-learning-material-09.html)
「キー」と「値」の組でデータを管理する辞書と、重複を持たない集合を学びます。リストと辞書を組み合わせた「データの表」の表し方を理解し、家計簿アプリのデータ構造につなげます。

### [10. 処理をまとめよう（関数）](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/python-ecosystem/python/python-learning-material-10.html)
`def` による関数の定義、引数と戻り値、デフォルト引数・キーワード引数、変数のスコープを学びます。長い処理を関数に分けて読みやすくする考え方を身につけます。

### [11. エラーと上手に付き合おう（例外処理）](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/python-ecosystem/python/python-learning-material-11.html)
トレースバック（エラーメッセージ）の読み方、代表的なエラー（`SyntaxError`・`NameError`・`TypeError`・`ValueError` など）、`try`・`except`・`else`・`finally` による例外処理を学びます。

### [12. ファイルを読み書きしよう](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/python-ecosystem/python/python-learning-material-12.html)
`open()` と `with` 文を使ったテキストファイルの読み書き、文字コード（UTF-8）の指定、`csv` モジュールによる CSV ファイルの読み書きを学びます。`pathlib` によるパスの扱いにも触れます。

### [13. モジュールとライブラリを使おう](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/python-ecosystem/python/python-learning-material-13.html)
`import` の書き方、標準ライブラリ（`random`・`datetime`・`math` など）の使い方、自作モジュールの作成を学びます。`venv` による仮想環境と `pip` による外部ライブラリのインストールも体験します。

### [14. クラスとオブジェクトの基礎](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/python-ecosystem/python/python-learning-material-14.html)
クラスを「設計図」、オブジェクトを「設計図から作った実物」として捉え、`class`・`__init__`・属性・メソッド・`self` の意味を学びます。データと処理をひとまとめにするメリットを理解します。

### [15. 家計簿アプリを作ろう① 記録と一覧表示](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/python-ecosystem/python/python-learning-material-15.html)
総合演習として、コマンドラインで動く家計簿アプリを作ります。前半では、メニュー表示・入力の受け付け・支出データ（辞書のリスト）への追加・一覧表示までを関数に分けて実装します。

### [16. 家計簿アプリを作ろう② 保存と集計](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/python-ecosystem/python/python-learning-material-16.html)
家計簿アプリを完成させます。CSV ファイルへの保存と読み込み、カテゴリ別・月別の集計、入力ミスへの例外処理を追加し、これまでの章の知識を1つのアプリにまとめます。最後に次の学習ステップを紹介します。

## 推奨所要時間

| 章 | 内容 | 目安時間 |
|----|------|----------|
| 第1章 | プログラミングとPythonを知ろう | 1時間 |
| 第2章 | 開発環境を準備しよう | 1.5時間 |
| 第3章 | はじめてのプログラムを書こう | 1時間 |
| 第4章 | 変数とデータ型を理解しよう | 1.5時間 |
| 第5章 | 計算と文字列を操作しよう | 1.5時間 |
| 第6章 | 条件によって処理を変えよう（if文） | 1.5時間 |
| 第7章 | 同じ処理を繰り返そう（for文・while文） | 1.5時間 |
| 第8章 | 複数のデータをまとめよう（リストとタプル） | 1.5時間 |
| 第9章 | 名前でデータを管理しよう（辞書と集合） | 1.5時間 |
| 第10章 | 処理をまとめよう（関数） | 2時間 |
| 第11章 | エラーと上手に付き合おう（例外処理） | 1.5時間 |
| 第12章 | ファイルを読み書きしよう | 1.5時間 |
| 第13章 | モジュールとライブラリを使おう | 1.5時間 |
| 第14章 | クラスとオブジェクトの基礎 | 2時間 |
| 第15章 | 家計簿アプリを作ろう① 記録と一覧表示 | 2時間 |
| 第16章 | 家計簿アプリを作ろう② 保存と集計 | 2時間 |
| **合計** | | **約25時間** |

## 学習目標

このガイドを完了すると、以下のスキルを身につけることができます：

- Python の実行環境を自分で用意し、スクリプトを作成・実行できる
- 変数・データ型・演算子・条件分岐・繰り返しを使って基本的な処理を書ける
- リスト・タプル・辞書・集合を目的に応じて使い分けられる
- 関数で処理を部品化し、読みやすいプログラムを書ける
- エラーメッセージを読み、例外処理で想定外の入力に対応できる
- テキストファイル・CSV ファイルを読み書きできる
- 標準ライブラリ・外部ライブラリを import して活用できる
- クラスの基本を理解し、簡単なクラスを定義できる
- 複数の知識を組み合わせて、小さなアプリを最後まで完成させられる

## 次のステップ

- データ分析: pandas・matplotlib を使った表データの集計と可視化
- Web アプリ開発: Flask・Django・FastAPI・Streamlit
- 業務自動化: Excel 操作（openpyxl）、Web スクレイピング、定期実行
- 生成AIアプリ開発: LLM API・RAG を使った AI アプリ開発（本サイトの「AI / AIアプリ開発」分類）
