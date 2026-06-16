# Pythonデータ分析入門 学習ガイドライン

このガイドラインでは、Pythonの基礎を習得済みの方を対象に、pandas・NumPy・matplotlibを使ったデータ分析の基礎を段階的に学習できるカリキュラムを提供しています。「データの取得 → 加工 → 分析 → 可視化」という実務で必要な一連の流れを、初心者にも分かりやすく体系的に解説します。

## 前提条件

### 必要な環境
- Windows、Mac、またはLinuxが動作するコンピュータ
- Python 3.9以上がインストール済みであること
- テキストエディタまたはIDE（VS Code推奨）
- Jupyter Notebook または JupyterLab（対話的な実行環境として使用）
- インターネット接続（ライブラリのインストールやサンプルデータの取得のため）

### 参考リソース
- [pandas公式ドキュメント](https://pandas.pydata.org/docs/) - pandasの公式リファレンス
- [NumPy公式ドキュメント](https://numpy.org/doc/) - NumPyの公式リファレンス
- [matplotlib公式ドキュメント](https://matplotlib.org/stable/contents.html) - matplotlibの公式リファレンス
- [Python公式チュートリアル（日本語）](https://docs.python.org/ja/3/tutorial/) - Python基礎の復習に

### 前提知識
- **必須**: Python入門レベルの知識（変数、データ型、制御構文、関数、リスト、辞書、ファイル操作）
  - [Python入門ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/python-beginner/) を履修済みであること
- **推奨**: コマンドライン（ターミナル）の基本操作に慣れていること
- **推奨**: CSVファイルやExcelファイルの基本的な概念を理解していること

## 学習コンテンツ

### 第1部：環境準備とNumPy基礎（第1-3章）
データ分析のための環境を整え、pandasの土台となるNumPyの基礎を習得します。

#### [1. データ分析の世界へようこそ - 環境構築と全体像](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/python-data-analysis/python-data-analysis-learning-material-01.html)
Pythonによるデータ分析の全体像を把握し、pandas・NumPy・matplotlibの役割を理解します。Jupyter Notebookの導入と基本操作を学び、データ分析を始める準備を整えます。

**学べること**: データ分析の全体像、pandas/NumPy/matplotlibの関係、Jupyter Notebookのインストールと基本操作、pip によるライブラリ管理

#### [2. NumPy入門 - 高速な数値計算の基礎](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/python-data-analysis/python-data-analysis-learning-material-02.html)
pandasの内部で使われているNumPyの基礎を学びます。配列（ndarray）の作成、基本演算、インデックス操作を通じて、効率的な数値計算の考え方を身につけます。

**学べること**: ndarray の作成と基本操作、配列の演算（ブロードキャスト）、インデックスとスライス、基本的な統計関数（mean, sum, std など）

#### [3. NumPy実践 - データ分析に必要な配列操作](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/python-data-analysis/python-data-analysis-learning-material-03.html)
NumPyの配列操作をさらに深め、多次元配列の扱い方、条件によるフィルタリング、乱数生成などを学びます。pandasに進むための実践的なスキルを習得します。

**学べること**: 多次元配列の操作、reshape と転置、ブールインデックス（条件フィルタ）、乱数生成（np.random）、線形代数の基礎

### 第2部：pandas基礎（第4-7章）
pandasの中核となるデータ構造と基本操作を段階的に習得します。

#### [4. pandas入門 - SeriesとDataFrameを理解する](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/python-data-analysis/python-data-analysis-learning-material-04.html)
pandasの2つの基本データ構造であるSeries（1次元）とDataFrame（2次元）の概念と基本操作を学びます。Excel の列やシートに例えながら、直感的に理解できるよう解説します。

**学べること**: Series の作成と操作、DataFrame の作成と基本操作、行・列の選択（loc, iloc）、データ型の確認と変換

#### [5. データの読み込みと書き出し - 外部データとの連携](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/python-data-analysis/python-data-analysis-learning-material-05.html)
CSV、Excel、JSONなど、様々な形式のファイルからデータを読み込み、加工後に書き出す方法を学びます。実務で扱う多様なデータソースへの対応力を身につけます。

**学べること**: read_csv / to_csv、read_excel / to_excel、read_json / to_json、エンコーディングの指定、読み込み時のオプション設定

#### [6. データの確認と基本統計 - データを俯瞰する力](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/python-data-analysis/python-data-analysis-learning-material-06.html)
読み込んだデータの全体像を素早く把握する方法を学びます。データの構造確認、基本統計量の算出、欠損値の検出など、分析の第一歩となるスキルを習得します。

**学べること**: head / tail / shape / info / describe、データ型の確認、欠損値（NaN）の検出、基本統計量の理解、value_counts によるカテゴリ集計

#### [7. データの選択とフィルタリング - 必要なデータを取り出す](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/python-data-analysis/python-data-analysis-learning-material-07.html)
条件を指定してデータを抽出する方法を学びます。複数条件の組み合わせ、文字列検索、特定の値による絞り込みなど、データ分析で頻繁に使うフィルタリング技術を習得します。

**学べること**: 条件によるフィルタリング、複数条件の組み合わせ（AND / OR）、isin / between / str.contains、query メソッド、ソートと順位付け

### 第3部：データ加工と集計（第8-11章）
実務で不可欠なデータの前処理、変換、集計の技術を身につけます。

#### [8. データの前処理 - 欠損値と重複の処理](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/python-data-analysis/python-data-analysis-learning-material-08.html)
実際のデータには欠損値や重複が含まれていることがほとんどです。これらを適切に処理する方法を学び、分析可能なクリーンなデータを作る技術を習得します。

**学べること**: 欠損値の検出と処理（dropna, fillna）、重複データの検出と削除、データ型の変換、異常値の検出と対処

#### [9. データの変換と加工 - 新しい列の作成と文字列操作](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/python-data-analysis/python-data-analysis-learning-material-09.html)
既存のデータから新しい列を作成したり、文字列データを加工したりする方法を学びます。apply関数やmap関数を使った柔軟なデータ変換技術を習得します。

**学べること**: 列の追加・削除・名前変更、apply / map / applymap による変換、文字列メソッド（str アクセサ）、日付・時刻データの扱い（to_datetime）、カテゴリ型への変換

#### [10. グループ化と集計 - データを要約する力](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/python-data-analysis/python-data-analysis-learning-material-10.html)
groupbyを使ったデータの集計方法を学びます。カテゴリ別の合計・平均・件数の算出、複数の集計関数の同時適用など、データを要約するための強力な手法を習得します。

**学べること**: groupby の基本、集計関数（sum, mean, count, agg）、複数列でのグループ化、ピボットテーブル（pivot_table）、クロス集計（crosstab）

#### [11. データの結合とマージ - 複数データの統合](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/python-data-analysis/python-data-analysis-learning-material-11.html)
複数のDataFrameを結合・統合する方法を学びます。SQLのJOINに相当する操作をpandasで行い、分散した情報を1つのデータセットにまとめる技術を習得します。

**学べること**: concat による縦・横結合、merge によるキー結合（内部結合・外部結合・左結合・右結合）、join メソッド、結合時の注意点とトラブルシューティング

### 第4部：データ可視化（第12-14章）
matplotlibを使って、分析結果を視覚的に表現する技術を身につけます。

#### [12. matplotlib入門 - グラフ作成の基礎](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/python-data-analysis/python-data-analysis-learning-material-12.html)
matplotlibの基本的な使い方を学びます。折れ線グラフ、棒グラフ、散布図などの基本的なグラフを作成し、タイトル・軸ラベル・凡例の設定方法を習得します。

**学べること**: matplotlib の基本構造（Figure と Axes）、折れ線グラフ（plot）、棒グラフ（bar）、散布図（scatter）、タイトル・軸ラベル・凡例の設定

#### [13. 実践的なデータ可視化 - 目的に合ったグラフ選び](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/python-data-analysis/python-data-analysis-learning-material-13.html)
ヒストグラム、箱ひげ図、円グラフ、ヒートマップなど、多様なグラフの使い分けを学びます。データの特徴や伝えたいメッセージに応じた最適な可視化手法を習得します。

**学べること**: ヒストグラム（hist）、箱ひげ図（boxplot）、円グラフ（pie）、ヒートマップ、サブプロット（複数グラフの並列表示）、pandas の plot メソッドとの連携

#### [14. グラフのカスタマイズと見栄えの向上](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/python-data-analysis/python-data-analysis-learning-material-14.html)
グラフの色、フォント、レイアウトを調整して、プレゼンテーションやレポートに使える品質のグラフを作成する方法を学びます。日本語フォントの設定方法も解説します。

**学べること**: 色・線種・マーカーのカスタマイズ、日本語フォントの設定、スタイルシートの活用、グラフの保存（savefig）、レイアウトの調整

### 第5部：実践プロジェクト（第15-16章）
これまでの知識を統合し、実践的なデータ分析プロジェクトに取り組みます。

#### [15. 総合演習 - 売上データ分析プロジェクト](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/python-data-analysis/python-data-analysis-learning-material-15.html)
架空の売上データを使って、データの読み込みから前処理、集計、可視化、レポート作成までの一連の分析プロセスを実践します。実務に近い形でデータ分析の全体フローを体験します。

**学べること**: 分析プロジェクトの進め方、データクリーニングの実践、月別・カテゴリ別の売上分析、トレンド分析と季節性の把握、分析結果のレポート作成

#### [16. 発展トピック - さらなるデータ分析スキルへ](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/python-data-analysis/python-data-analysis-learning-material-16.html)
大規模データの効率的な処理、Seabornによる高度な可視化、Webスクレイピングによるデータ収集など、次のステップに向けた発展的なトピックを概観します。

**学べること**: 大規模データの処理テクニック（dtype最適化、チャンク読み込み）、Seaborn による統計的可視化、Web API / スクレイピングによるデータ収集の概要、次のステップへのロードマップ

## 学習の進め方

1. **Jupyter Notebookで手を動かしながら学ぶ**
   各章のコードは必ずJupyter Notebookに入力して実行してください。セルごとに結果を確認しながら進めることで、データの変化を目で見て理解できます。

2. **サンプルデータで繰り返し練習する**
   各章で使用するサンプルデータに対して、章末の練習問題に取り組みましょう。同じ操作を別のデータで試すことで、応用力が身につきます。

3. **公式ドキュメントを参照する習慣をつける**
   pandasやmatplotlibには非常に多くの機能があります。本ガイドで基本を学んだ後は、公式ドキュメントで詳細なオプションを調べる習慣をつけましょう。

4. **自分のデータで試してみる**
   学んだ技術を自分の身近なデータ（家計簿、趣味の記録など）に適用してみましょう。実際のデータを扱うことで、実践的なスキルが格段に向上します。

5. **エラーは学びの機会と捉える**
   データ分析ではデータ型の不一致やインデックスエラーが頻発します。エラーメッセージを読み、原因を特定して解決する力を養いましょう。

## 推奨所要時間

| 章 | 内容 | 目安時間 |
|----|------|----------|
| 第1章 | データ分析の世界へようこそ - 環境構築と全体像 | 1時間 |
| 第2章 | NumPy入門 - 高速な数値計算の基礎 | 1.5時間 |
| 第3章 | NumPy実践 - データ分析に必要な配列操作 | 1.5時間 |
| 第4章 | pandas入門 - SeriesとDataFrameを理解する | 1.5時間 |
| 第5章 | データの読み込みと書き出し - 外部データとの連携 | 1時間 |
| 第6章 | データの確認と基本統計 - データを俯瞰する力 | 1時間 |
| 第7章 | データの選択とフィルタリング - 必要なデータを取り出す | 1.5時間 |
| 第8章 | データの前処理 - 欠損値と重複の処理 | 1.5時間 |
| 第9章 | データの変換と加工 - 新しい列の作成と文字列操作 | 1.5時間 |
| 第10章 | グループ化と集計 - データを要約する力 | 1.5時間 |
| 第11章 | データの結合とマージ - 複数データの統合 | 1.5時間 |
| 第12章 | matplotlib入門 - グラフ作成の基礎 | 1.5時間 |
| 第13章 | 実践的なデータ可視化 - 目的に合ったグラフ選び | 1.5時間 |
| 第14章 | グラフのカスタマイズと見栄えの向上 | 1時間 |
| 第15章 | 総合演習 - 売上データ分析プロジェクト | 2.5時間 |
| 第16章 | 発展トピック - さらなるデータ分析スキルへ | 1.5時間 |
| **合計** | | **約23時間** |

※ 上記は目安です。自分のペースで着実に進めてください。

## 関連リソース

- [Python入門ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/python-beginner/) - 本ガイドの前提知識
- [Streamlit入門ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/streamlit/) - データ可視化アプリの開発
- [統計学入門ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/statistical-analysis/) - 統計学の基礎理論
- [機械学習入門ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/machine-learning/) - データ分析の次のステップ

## 学習目標

このガイドを完了すると、以下のスキルを身につけることができます：

### NumPyの基礎
- NumPy配列（ndarray）を作成し、基本的な演算やインデックス操作ができる
- ブロードキャストの仕組みを理解し、効率的な数値計算ができる
- 統計関数を使ってデータの基本的な特徴量を算出できる

### pandasによるデータ操作
- CSV・Excel・JSONなどの外部ファイルからデータを読み込み、書き出しができる
- DataFrameの構造を理解し、行・列の選択、条件によるフィルタリングが自在にできる
- 欠損値・重複データの処理、データ型の変換など、データの前処理ができる
- groupbyやpivot_tableを使って、データの集計・要約ができる
- 複数のDataFrameをmerge・concatで結合できる

### matplotlibによるデータ可視化
- 折れ線グラフ、棒グラフ、散布図、ヒストグラムなど、目的に応じたグラフを作成できる
- グラフの見た目をカスタマイズし、レポートやプレゼンに使える品質のグラフを出力できる
- 日本語を含むグラフを正しく表示できる

### 実践力
- 「データ取得 → 前処理 → 分析 → 可視化」の一連のデータ分析フローを自力で実行できる
- 実際の業務データに対して、基本的な分析アプローチを立案・実施できる
- 分析結果をグラフやレポートとして分かりやすく伝えることができる

## 次のステップ

このガイドライン完了後は、以下の学習に進むことをお勧めします：

- [統計学入門ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/statistical-analysis/) - 記述統計・推測統計・仮説検定の基礎理論
- [機械学習入門ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/machine-learning/) - scikit-learnを使った機械学習の基礎
- [Streamlit入門ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/streamlit/) - 分析結果をWebアプリとして公開
- [SQL入門ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/sql/) - データベースからのデータ取得スキル
