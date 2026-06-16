# SAS入門 学習ガイドライン

このガイドラインでは、プログラミング未経験者がSAS（Statistical Analysis System）の基礎を段階的に習得できるよう、体系的なカリキュラムを提供しています。データ分析の基本から実務で使える統計解析まで、初心者にも分かりやすく解説します。

## 前提条件

### 必要な環境
- **SAS環境のいずれか**:
  - SAS OnDemand for Academics（無料、学習用）
  - SAS University Edition（無料版）
  - SAS Studio（企業版ライセンス）
  - Base SAS（デスクトップ版）
- **OS**: Windows 10以降、macOS、Linux
- **メモリ**: 4GB以上推奨（8GB以上が理想）
- **ディスク容量**: 10GB以上の空き容量
- **ブラウザ**: Chrome、Firefox、Safari（SAS Studio利用時）

### 参考リソース
- [SAS公式ドキュメント（日本語）](https://support.sas.com/ja_jp/documentation.html)
- [SAS OnDemand for Academics登録ページ](https://welcome.oda.sas.com/)
- [SAS Programming 1: Essentials（無料e-Learning）](https://support.sas.com/edu/schedules.html?crs=PROG1)
- [SAS Communities（コミュニティフォーラム）](https://communities.sas.com/)

### 前提知識
- **必須**: 基本的なPC操作スキル（ファイル操作、フォルダ管理）
- **推奨**:
  - Excel等の表計算ソフトの基本操作経験
  - 統計の基礎知識（平均、中央値、標準偏差の概念）
- **不要**: プログラミング経験（全くの初心者でも学習可能）

## 学習コンテンツ

### [1. SASの基本概念と環境構築](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/sas/sas-learning-material-01.html)
SASとは何か、その特徴と活用分野を理解し、学習環境をセットアップします。プログラミング未経験者でも安心して始められるよう、画面操作から丁寧に解説します。

### [2. はじめてのSASプログラム](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/sas/sas-learning-material-02.html)
最初のSASプログラムを作成し、データの表示と簡単な計算を行います。プログラムの基本構造とコメントの書き方を学びます。

### [3. データの入力と読み込み](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/sas/sas-learning-material-03.html)
手入力によるデータ作成、CSVやExcelファイルの読み込み方法を学習します。実務でよく使うデータ取り込みパターンを習得します。

### [4. データステップの基本](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/sas/sas-learning-material-04.html)
SASプログラムの中核となるデータステップの仕組みを理解し、データの作成・加工の基礎を身につけます。

### [5. 変数の操作と計算](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/sas/sas-learning-material-05.html)
数値変数と文字変数の違い、新しい変数の作成、基本的な計算処理を学びます。実務でよく使う変数操作のテクニックを習得します。

### [6. 条件処理とデータの抽出](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/sas/sas-learning-material-06.html)
IF-THEN文による条件分岐、WHERE句によるデータ抽出、サブセット作成の方法を学習します。

### [7. ループ処理と配列](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/sas/sas-learning-material-07.html)
DOループによる繰り返し処理、配列を使った効率的なデータ処理を理解します。大量データの一括処理方法を習得します。

### [8. データの結合と変換](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/sas/sas-learning-material-08.html)
複数のデータセットの結合（マージ、セット）、データの転置と形式変換を学びます。

### [9. PROC SQLによるデータ操作](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/sas/sas-learning-material-09.html)
SQLを使ったデータ抽出・結合・集計の方法を学びます。データステップとの使い分けや、複雑なクエリの書き方を習得します。

### [10. 統計プロシジャの基礎](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/sas/sas-learning-material-10.html)
PROC MEANSやPROC FREQを使った基本統計量の算出、データの要約と集計方法を習得します。

### [11. データの可視化（グラフ作成）](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/sas/sas-learning-material-11.html)
PROC SGPLOTを使った各種グラフ（棒グラフ、折れ線グラフ、散布図）の作成方法を学びます。見やすいグラフ作成のポイントも解説します。

### [12. レポート作成の基本](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/sas/sas-learning-material-12.html)
PROC PRINTやPROC REPORTを使った表形式レポートの作成、ODS（Output Delivery System）によるExcel/PDF出力を学習します。

### [13. SASマクロの基礎](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/sas/sas-learning-material-13.html)
マクロ変数の使い方、簡単なマクロプログラムの作成方法を学び、プログラムの再利用性を高めます。

## 学習の進め方

1. **環境準備から始める**
   - 第1章で無料のSAS OnDemand for Academicsに登録し、学習環境を整えましょう
   - 画面の見方や基本操作に慣れることから始めます

2. **サンプルコードを実際に入力する**
   - コピー＆ペーストではなく、最初は手入力でプログラムを書くことをお勧めします
   - タイピングしながら、SASの文法やキーワードに慣れていきます

3. **エラーメッセージを恐れない**
   - プログラミング初心者はエラーを恐れがちですが、エラーは学習のチャンスです
   - エラーメッセージを読み、原因を理解することで確実に上達します

4. **練習問題を必ず解く**
   - 各章末の練習問題は、理解度を確認する重要な機会です
   - 分からない場合は、章を読み返したり、サンプルコードを参考にしましょう

5. **実データで試してみる**
   - 学習が進んだら、実際の業務データや公開データセットで練習しましょう
   - 現実のデータ処理経験が、実務スキルの向上につながります

## 推奨所要時間

| 章 | 内容 | 目安時間 |
|:--|:--|:--|
| 第1章 | SASの基本概念と環境構築 | 1時間 |
| 第2章 | はじめてのSASプログラム | 45分 |
| 第3章 | データの入力と読み込み | 1時間 |
| 第4章 | データステップの基本 | 1時間 |
| 第5章 | 変数の操作と計算 | 1時間 |
| 第6章 | 条件処理とデータの抽出 | 1.5時間 |
| 第7章 | ループ処理と配列 | 1.5時間 |
| 第8章 | データの結合と変換 | 1.5時間 |
| 第9章 | PROC SQLによるデータ操作 | 1.5時間 |
| 第10章 | 統計プロシジャの基礎 | 1.5時間 |
| 第11章 | データの可視化（グラフ作成） | 1時間 |
| 第12章 | レポート作成の基本 | 1時間 |
| 第13章 | SASマクロの基礎 | 1.5時間 |
| **合計** | | **約16時間** |

## 関連リソース

### チートシート
- [SAS基本構文チートシート](https://fcircle-biz.github.io/tech_docs/cheatsheet/data-ai/sas-basic-cheatsheet.html)
- [SASプロシジャ早見表](https://fcircle-biz.github.io/tech_docs/cheatsheet/data-ai/sas-procedure-cheatsheet.html)

### 関連ガイドライン
- [SQL入門学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/sql/README.html)
- [Excel VBA学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/business-saas/vba/README.html)
- [Python データ分析入門](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/pandas/README.html)

## 学習目標

このガイドを完了すると、以下のスキルを身につけることができます：

- **SASプログラムの作成と実行**ができるようになる
- **データの読み込み、加工、出力**の基本操作をマスターする
- **基本的な統計分析**（記述統計、度数分布、相関分析）を実行できる
- **わかりやすいグラフやレポート**を作成できる
- **効率的なデータ処理**のためのループやマクロの基礎を理解する
- **エラーの解決方法**を身につけ、自己解決能力を向上させる
- **実務で使えるSASプログラミング**の基礎スキルを習得する

## 次のステップ

このガイドライン完了後は、以下の学習に進むことをお勧めします：

### 上級SAS技術
- [SAS Advanced Programming（上級編）](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/sas-advanced/README.html)
- [SAS統計解析実践ガイド](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/sas-statistics/README.html)

### 関連技術の習得
- [R言語入門](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/r-ecosystem/r/README.html) - オープンソースの統計解析ツール
- [Python データサイエンス入門](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/data-science/README.html) - 機械学習への展開
- [Tableau入門](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/visualization/tableau/README.html) - 高度なデータビジュアライゼーション

### 資格取得
- SAS Certified Specialist: Base Programming
- SAS Certified Professional: Advanced Programming

## サポートとコミュニティ

学習中に困ったときは、以下のリソースを活用してください：

- **SAS公式フォーラム**: 世界中のSASユーザーが質問に答えてくれます
- **社内勉強会**: 同僚と一緒に学習することで、理解が深まります
- **オンライン学習グループ**: SNSやSlackで学習仲間を見つけましょう
- **メンター制度**: 経験者に直接質問できる環境を探しましょう

プログラミング未経験からでも、このガイドラインに沿って着実に学習を進めることで、必ずSASを使いこなせるようになります。一歩ずつ、確実に進んでいきましょう。