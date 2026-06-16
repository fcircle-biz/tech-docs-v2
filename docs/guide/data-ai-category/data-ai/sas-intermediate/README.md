# SAS中級 学習ガイドライン

このガイドラインでは、SAS入門を修了した学習者を対象に、実践的なデータ処理・統計解析スキルを段階的に習得できるよう、体系的なカリキュラムを提供しています。大規模データの効率的な処理から高度な統計手法まで、実務で即戦力となる中級テクニックを解説します。

## 前提条件

### 必要な環境
- **SAS環境のいずれか**:
  - SAS OnDemand for Academics（無料、学習用）
  - SAS University Edition（無料版）
  - SAS Studio（企業版ライセンス）
  - Base SAS（デスクトップ版）
- **OS**: Windows 10以降、macOS、Linux
- **メモリ**: 8GB以上推奨（16GB以上が理想 - 大規模データ処理のため）
- **ディスク容量**: 20GB以上の空き容量（ハッシュオブジェクトやインデックス使用のため）
- **ブラウザ**: Chrome、Firefox、Safari（SAS Studio利用時）

### 参考リソース
- [SAS公式ドキュメント（日本語）](https://support.sas.com/ja_jp/documentation.html)
- [SAS Advanced Programming Documentation](https://documentation.sas.com/doc/en/pgmsascdc/v_008/lepg/titlepage.htm)
- [SAS Macro Language Reference](https://documentation.sas.com/doc/en/pgmsascdc/v_008/mcrolref/titlepage.htm)
- [SAS Communities（コミュニティフォーラム）](https://communities.sas.com/)
- [SAS/STAT User's Guide](https://documentation.sas.com/doc/en/pgmsascdc/v_008/statug/titlepage.htm)

### 前提知識
- **必須**:
  - [SAS入門学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/sas/sas-learning-material-01.html)の全13章を修了していること
  - DATAステップとプロシジャの基本操作
  - PROC SQLの基礎（SELECT文、結合の基本）
  - マクロ変数の基本的な使い方
- **推奨**:
  - 実務でのSAS使用経験（3か月以上）
  - 統計学の基礎知識（仮説検定の概念、回帰分析の概念）
  - SQLの中級レベルの知識

## 学習コンテンツ

### [1. DATAステップの高度な制御](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/sas-intermediate/sas-intermediate-learning-material-01.html)
初級で学んだ内容を深掘りし、行をまたぐ処理や複雑な保持変数を学びます。RETAIN文と合計変数の高度な活用、LAG関数・DIF関数による前行データとの比較・演算、FIRST.変数とLAST.変数を用いたグループごとの複雑なフラグ立てと集計を習得します。

### [2. 配列（Array）と反復処理の応用](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/sas-intermediate/sas-intermediate-learning-material-02.html)
大量の変数を一括で変換するためのテクニックを磨きます。多次元配列の利用方法、DO WHILE / DO UNTILによる動的なループ制御、配列を用いた横持ちデータから縦持ちデータ（転置）への高度な変換を学習します。

### [3. ハッシュオブジェクト（Hash Objects）](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/sas-intermediate/sas-intermediate-learning-material-03.html)
メモリ上でデータを結合する、SAS最強の高速処理手法を学びます。ハッシュオブジェクトの基本構造（DefineKey, DefineData）、巨大なマスタデータとの高速マッチング（Merge文との速度比較）、動的なルックアップテーブルの作成を習得します。

### [4. 高度なPROC SQL](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/sas-intermediate/sas-intermediate-learning-material-04.html)
データステップでは記述が複雑になる処理をSQLでスマートに解決します。相関サブクエリを用いた高度な抽出、Dictionaryテーブルの活用（SASシステム内のメタデータ・変数一覧の取得）、SQL内でのマクロ変数生成（INTO句の活用）を学びます。

### [5. SASマクロ：自動化と動的生成](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/sas-intermediate/sas-intermediate-learning-material-05.html)
「プログラムがプログラムを書く」段階へ進みます。マクロ関数（%SCAN, %SUBSTR, %INDEX）による文字列操作、CALL SYMPUTXによるデータの内容に応じたマクロ変数の動的生成、%DOループと%IF-%THENを用いた条件による処理の切り替えを習得します。

### [6. カスタムフォーマットとラベル（PROC FORMAT）](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/sas-intermediate/sas-intermediate-learning-material-06.html)
データの見せ方をプログラムから切り離して管理します。PROC FORMATによる独自フォーマットの作成（値の範囲によるグループ化）、外部データ（CSV/Excel）からフォーマットを自動生成する方法（CNTLIN=オプション）、マルチラベルフォーマットの活用を学びます。

### [7. ODS（Output Delivery System）プログラミング](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/sas-intermediate/sas-intermediate-learning-material-07.html)
実務でそのまま使える、見栄えの良いレポートを自動出力します。ODS EXCELによる複数シートへの出力とセルの書式設定、ODS PDFでのレイアウト制御と目次作成、ODS SELECT / EXCLUDEによるプロシジャ結果の特定部分だけの抽出を習得します。

### [8. 統計解析の実践：推測統計](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/sas-intermediate/sas-intermediate-learning-material-08.html)
記述統計から一歩進み、データの背後にある法則を探ります。仮説検定（t検定、カイ二乗検定：PROC TTEST, PROC FREQ）、分散分析（ANOVA）（PROC ANOVA / PROC GLM）、結果の解釈と統計的有意性の判断基準を学習します。

### [9. 統計解析の実践：モデル構築](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/sas-intermediate/sas-intermediate-learning-material-09.html)
予測や因果関係の特定に挑戦します。単回帰分析と重回帰分析（PROC REG）、ロジスティック回帰分析（PROC LOGISTIC）、モデルの適合度（AIC, R2乗値）の確認と変数選択法を習得します。

### [10. パフォーマンス・チューニングとベストプラクティス](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/sas-intermediate/sas-intermediate-learning-material-10.html)
「動く」コードから「速くて綺麗な」コードへ。圧縮（COMPRESS=YES）とインデックスによるI/Oの削減、KEEP/DROP/WHERE句の評価順序による高速化、プログラムの可読性を高めるためのコーディング規約（インデント、命名規則）を学びます。

## 学習の進め方

1. **「なぜ」を考える**
   - 中級では「Merge文でもできるけれど、なぜここでハッシュオブジェクトを使うのか？」といった、**手法の選択理由**を意識してください
   - 処理速度、コードの可読性、保守性の観点から最適な手法を選べるようになりましょう

2. **メタデータの活用を覚える**
   - 100個のデータセットに対して同じ処理をするなど、Dictionaryテーブルとマクロを組み合わせて「手作業をゼロにする」練習をしましょう
   - 自動化できる作業を見つけ、マクロで効率化する習慣をつけます

3. **実務に近いダミーデータで試す**
   - 欠損値が多い、型が不揃い、行数が数百万あるなど、あえて「汚いデータ」をどう処理するかを訓練します
   - エラー処理やパフォーマンスの問題に対処する力を養います

4. **処理時間を計測する習慣をつける**
   - OPTIONS FULLSTIMER;を使って、プログラムの実行時間を常に把握しましょう
   - 同じ処理を異なる方法で実装し、パフォーマンスを比較する経験を積みます

5. **実務のワークフローを意識する**
   - 単発の処理ではなく、定期的に実行するバッチ処理として設計することを意識します
   - 他者が読んで理解できるコード、再利用可能なマクロを書く練習をしましょう

## 推奨所要時間

| 章 | 内容 | 目安時間 |
|:--|:--|:--|
| 第1章 | DATAステップの高度な制御 | 1.5時間 |
| 第2章 | 配列（Array）と反復処理の応用 | 1.5時間 |
| 第3章 | ハッシュオブジェクト（Hash Objects） | 2時間 |
| 第4章 | 高度なPROC SQL | 1.5時間 |
| 第5章 | SASマクロ：自動化と動的生成 | 2時間 |
| 第6章 | カスタムフォーマットとラベル（PROC FORMAT） | 1.5時間 |
| 第7章 | ODS（Output Delivery System）プログラミング | 1.5時間 |
| 第8章 | 統計解析の実践：推測統計 | 2時間 |
| 第9章 | 統計解析の実践：モデル構築 | 2時間 |
| 第10章 | パフォーマンス・チューニングとベストプラクティス | 1.5時間 |
| **合計** | | **約17時間** |

## 関連リソース

### チートシート
- [SAS基本構文チートシート](https://fcircle-biz.github.io/tech_docs/cheatsheet/data-ai/sas-basic-cheatsheet.html)
- [SASプロシジャ早見表](https://fcircle-biz.github.io/tech_docs/cheatsheet/data-ai/sas-procedure-cheatsheet.html)

### 関連ガイドライン
- [SAS入門学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/sas/sas-learning-material-01.html) - 本ガイドの前提となる入門コース
- [SQL入門学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/sql/README.html)
- [統計学入門ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/statistics/README.html)

## 学習目標

このガイドを完了すると、以下のスキルを身につけることができます：

- **大規模データの効率的な処理**ができるようになる（ハッシュオブジェクト、インデックス活用）
- **SASマクロを駆使した定型業務の完全自動化**が実現できる
- **PROC SQLによる高度なリレーショナルデータ操作**をマスターする
- **高度な統計手法**（t検定、分散分析、回帰分析）を実践できる
- **ODS出力で報告書レベルのレポート**を自動生成できる
- **パフォーマンスを意識したコード設計**ができるようになる
- **保守性・可読性の高いプログラム**を書けるようになる

## おすすめのステップアップ資格

このカリキュラムの学習は、以下の資格取得に直結します：

- **SAS Certified Professional: Advanced Programming**
  - 本カリキュラムの1～5章、10章が主な出題範囲
  - マクロ、高度なDATAステップ、PROC SQLの深い理解が求められます

- **SAS Certified Statistical Business Analyst**
  - 本カリキュラムの8～9章が統計解析の基礎として役立ちます
  - さらに高度な統計手法への足がかりとなります

## 次のステップ

このガイドライン完了後は、以下の学習に進むことをお勧めします：

### 上級SAS技術
- [SAS上級プログラミング](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/sas-advanced/README.html) - さらに高度な自動化とシステム連携
- [SAS/STAT高度統計解析](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/sas-statistics/README.html) - 多変量解析・時系列分析

### 関連技術の習得
- [Python データサイエンス入門](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/data-science/README.html) - 機械学習への展開
- [R言語統計解析](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/r-ecosystem/r/README.html) - オープンソースの統計解析ツール
- [機械学習入門](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/machine-learning/README.html) - 予測モデリングの発展

### ビジネス活用
- [Tableau入門](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/visualization/tableau/README.html) - 高度なデータビジュアライゼーション
- [Power BI入門](https://fcircle-biz.github.io/tech_docs/guide/business-saas/power-bi/README.html) - ビジネスインテリジェンスツール

## サポートとコミュニティ

中級レベルの学習では、より専門的な質問や議論が必要になります：

- **SAS公式フォーラム**: 世界中のSASエキスパートが高度な質問にも回答してくれます
- **SAS-L メーリングリスト**: 長年続く伝統的なSASユーザーコミュニティ
- **Stack Overflow（sasタグ）**: プログラミング全般の質問サイトでSAS関連の議論も活発
- **社内勉強会**: 実務経験者と一緒に学習することで、現場のノウハウを吸収できます
- **SAS User Group（SUGI）**: 各地域で開催されるSASユーザーグループの勉強会

SAS入門を修了した皆さんなら、このガイドラインの内容も必ず習得できます。「なぜこの手法を使うのか」を常に考えながら、実務で活躍できる中級SASプログラマーを目指しましょう。
