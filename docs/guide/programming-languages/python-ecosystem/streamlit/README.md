# Streamlit 入門学習ガイドライン（プログラミング未経験者向け）

このガイドラインでは、プログラミング未経験の方を対象に、Streamlitを使って「自分だけのWebアプリ」を作れるようになるまでを、一歩ずつ丁寧に解説します。専門用語は都度わかりやすく説明しますので、安心して学習を進めてください。

## Streamlitとは？

**Streamlit（ストリームリット）**は、Pythonというプログラミング言語を使って、Webブラウザで動くアプリケーションを簡単に作れるツールです。

通常、Webアプリを作るには複数のプログラミング言語（HTML、CSS、JavaScriptなど）を学ぶ必要がありますが、Streamlitを使えばPythonの知識だけでWebアプリが作れます。データの分析結果をグラフで表示したり、ボタンを押して計算したりするアプリが、驚くほど簡単に作成できます。

## 前提条件

### 必要な環境
- **パソコン**: Windows 10以降、Mac、またはLinux
- **インターネット接続**: ソフトウェアのダウンロードに必要です
- **Webブラウザ**: Google Chrome、Microsoft Edge、Firefox、Safariなど（普段お使いのもので大丈夫です）

### 前提知識
- **必須**: パソコンの基本操作（ファイルの保存、フォルダの作成など）
- **必須**: キーボード入力ができること
- **推奨**: 簡単な計算の概念（足し算、掛け算など）

※ プログラミングの経験は一切不要です。Pythonの基礎からStreamlitの使い方まで、すべてこのガイドで学べます。

### 参考リソース
- [Streamlit公式サイト（英語）](https://streamlit.io/) - Streamlitの公式ウェブサイト
- [Python公式サイト（日本語）](https://www.python.jp/) - Pythonの日本語情報サイト

## 学習コンテンツ

### 第1部：準備編（第1-2章）
プログラミングを始めるための環境を整え、Pythonの超基礎を学びます。

#### [1. 開発環境の準備とはじめの一歩](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/streamlit/streamlit-learning-material-01.html)
Pythonとは何か、なぜStreamlitが便利なのかを理解し、パソコンに必要なソフトウェアをインストールします。「Hello World!」という最初のプログラムを動かして、プログラミングの世界への第一歩を踏み出します。

**学べること**: Pythonのインストール、コマンドライン（黒い画面）の基本操作、最初のプログラム実行

#### [2. Pythonの超基礎 - 計算と文字の扱い方](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/streamlit/streamlit-learning-material-02.html)
プログラミングの基本となる「変数」「データ型」「計算」を、身近な例を使って学びます。電卓のように計算させたり、文字を表示させたりする方法を習得します。

**学べること**: 変数（データに名前をつける方法）、数値と文字列、簡単な計算、print文

### 第2部：Pythonの基礎編（第3-5章）
Streamlitを使いこなすために必要なPythonの基礎知識を身につけます。

#### [3. 条件分岐 - 「もし〜なら」の処理](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/streamlit/streamlit-learning-material-03.html)
「もし点数が60点以上なら合格」のような条件による処理の分岐を学びます。これにより、状況に応じて異なる動作をするプログラムが書けるようになります。

**学べること**: if文、比較演算子（大きい・小さい・等しいの判定）、else文、elif文

#### [4. 繰り返し - 同じ処理を何度も行う](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/streamlit/streamlit-learning-material-04.html)
「1から10まで順番に表示する」「リストの中身を全部表示する」といった繰り返し処理を学びます。大量のデータを扱うときに欠かせない知識です。

**学べること**: for文、range関数、while文、リスト（複数のデータをまとめる方法）

#### [5. 関数 - 処理をまとめて名前をつける](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/streamlit/streamlit-learning-material-05.html)
よく使う処理を「関数」としてまとめることで、プログラムを整理しやすくする方法を学びます。料理のレシピのように、手順に名前をつけて再利用できるようになります。

**学べること**: def文（関数の定義）、引数と戻り値、組み込み関数の活用

### 第3部：Streamlit入門編（第6-9章）
いよいよStreamlitを使ったWebアプリ開発を始めます。

#### [6. Streamlitはじめの一歩 - 最初のWebアプリ](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/streamlit/streamlit-learning-material-06.html)
Streamlitをインストールし、最初のWebアプリを作成します。ブラウザにタイトルや文章を表示する方法を学び、Webアプリ開発の楽しさを体験します。

**学べること**: Streamlitのインストール、st.title、st.write、st.markdown、アプリの実行方法

#### [7. 画面を彩る - レイアウトとデザイン](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/streamlit/streamlit-learning-material-07.html)
サイドバー、カラム（横並び）、タブなどを使って、見やすく使いやすい画面をデザインする方法を学びます。

**学べること**: st.sidebar、st.columns、st.tabs、st.expander、画面の構成方法

#### [8. ユーザーとの対話 - ボタンと入力フォーム](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/streamlit/streamlit-learning-material-08.html)
ボタンを押したら計算する、テキストを入力したら処理する、といったユーザーとの対話的な機能を実装します。

**学べること**: st.button、st.text_input、st.number_input、st.selectbox、st.slider、st.checkbox

#### [9. データを見える化 - グラフと表の表示](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/streamlit/streamlit-learning-material-09.html)
数値データをグラフや表で視覚的に表示する方法を学びます。棒グラフ、折れ線グラフ、円グラフなど、様々な可視化手法を習得します。

**学べること**: st.dataframe、st.table、st.line_chart、st.bar_chart、st.metric

### 第4部：実践編（第10-12章）
学んだ知識を組み合わせて、実用的なアプリケーションを作成します。

#### [10. ファイルを扱う - アップロードとダウンロード](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/streamlit/streamlit-learning-material-10.html)
CSVファイル（表形式のデータファイル）をアップロードして分析したり、結果をダウンロードしたりする機能を実装します。

**学べること**: st.file_uploader、pandas（データ分析ライブラリ）の基礎、st.download_button

#### [11. 状態を管理する - データの保持と更新](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/streamlit/streamlit-learning-material-11.html)
アプリ内でデータを保持し、ボタンを押すたびに値を更新するような機能を実装します。カウンターアプリやTODOリストなどが作れるようになります。

**学べること**: st.session_state、状態管理の概念、コールバック関数

#### [12. 実践プロジェクト - 自分だけのアプリを作ろう](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/streamlit/streamlit-learning-material-12.html)
これまで学んだ内容を総動員して、BMI計算アプリ、家計簿アプリ、クイズアプリなど、実用的なアプリケーションを作成します。

**学べること**: アプリ設計の考え方、複数機能の組み合わせ、エラー処理の基礎

## 学習の進め方

1. **焦らず一歩ずつ進める**
   - 各章の内容を完全に理解してから次に進みましょう
   - わからないところは何度も読み返してください

2. **必ず手を動かす**
   - コードは見るだけでなく、必ず自分で入力して実行しましょう
   - タイピングミスも学習のうちです

3. **エラーを恐れない**
   - プログラミングではエラーは当たり前です
   - エラーメッセージをよく読んで、原因を探る習慣をつけましょう

4. **少しずつ改造してみる**
   - サンプルコードをそのまま動かした後、数値や文字を変えて試してみましょう
   - 「こうしたらどうなる？」という好奇心が上達の鍵です

5. **休憩を取りながら学ぶ**
   - 集中力には限界があります
   - 1時間学習したら10分休憩するなど、メリハリをつけましょう

## 推奨所要時間

| 章 | 内容 | 目安時間 |
|----|------|----------|
| 第1章 | 開発環境の準備とはじめの一歩 | 1時間 |
| 第2章 | Pythonの超基礎 - 計算と文字の扱い方 | 1時間 |
| 第3章 | 条件分岐 - 「もし〜なら」の処理 | 1時間 |
| 第4章 | 繰り返し - 同じ処理を何度も行う | 1時間 |
| 第5章 | 関数 - 処理をまとめて名前をつける | 1時間 |
| 第6章 | Streamlitはじめの一歩 - 最初のWebアプリ | 1時間 |
| 第7章 | 画面を彩る - レイアウトとデザイン | 1時間 |
| 第8章 | ユーザーとの対話 - ボタンと入力フォーム | 1.5時間 |
| 第9章 | データを見える化 - グラフと表の表示 | 1.5時間 |
| 第10章 | ファイルを扱う - アップロードとダウンロード | 1.5時間 |
| 第11章 | 状態を管理する - データの保持と更新 | 1.5時間 |
| 第12章 | 実践プロジェクト - 自分だけのアプリを作ろう | 2時間 |
| **合計** | | **約15時間** |

※ 上記は目安です。自分のペースで着実に進めてください。

## 用語集（よく出てくる言葉）

| 用語 | 読み方 | 意味 |
|------|--------|------|
| Python | パイソン | プログラミング言語の一種。読みやすく、初心者にも学びやすい |
| Streamlit | ストリームリット | PythonでWebアプリを簡単に作れるツール |
| プログラム | - | コンピュータへの命令を書いたもの |
| コード | - | プログラムのこと。「コードを書く」＝「プログラムを書く」 |
| 変数 | へんすう | データに名前をつけて保存する箱のようなもの |
| 関数 | かんすう | 処理をまとめたもの。名前をつけて何度も使える |
| ライブラリ | - | 便利な機能をまとめたもの。Streamlitもライブラリの一種 |
| 実行 | じっこう | プログラムを動かすこと |
| エラー | - | プログラムの間違い、または間違いを知らせるメッセージ |

## 関連リソース

### このガイドの次に学ぶなら
- [Python入門学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/python-beginner/README.html) - Pythonをより深く学びたい方へ
- [pandas学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/pandas/README.html) - データ分析を本格的に学びたい方へ

### 困ったときは
- [Streamlit公式ドキュメント（英語）](https://docs.streamlit.io/) - 詳しい機能説明
- [Streamlit Community（英語）](https://discuss.streamlit.io/) - 質問・回答コミュニティ

## 学習目標

このガイドを完了すると、以下のスキルを身につけることができます：

### Pythonの基礎
- 変数を使ってデータを扱える
- 条件分岐（if文）で状況に応じた処理ができる
- 繰り返し（for文）で効率的にデータを処理できる
- 関数を作って処理を整理できる

### Streamlitの基礎
- Streamlitをインストールしてアプリを起動できる
- タイトル、テキスト、画像を表示できる
- ボタン、入力フォーム、スライダーなどを配置できる
- グラフや表でデータを視覚化できる
- ファイルのアップロード・ダウンロード機能を実装できる
- 状態管理を使った動的なアプリを作れる

### 実践スキル
- 簡単な計算アプリを作成できる
- データを入力して結果を表示するアプリを作成できる
- 自分のアイデアをアプリとして形にする基礎力が身につく

## 次のステップ

このガイドライン完了後は、以下の学習に進むことをお勧めします：

1. **Pythonをより深く学ぶ**
   - [Python入門学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/python-beginner/README.html)

2. **データ分析を学ぶ**
   - pandas、NumPyライブラリの学習
   - データの加工・集計・分析手法

3. **より高度なStreamlitアプリ開発**
   - データベースとの連携
   - 外部APIの利用
   - Streamlit Cloudへのデプロイ（公開）

---

さあ、プログラミングの世界への第一歩を踏み出しましょう！
