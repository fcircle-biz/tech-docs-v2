# SAS Viya入門 学習ガイドライン

このガイドラインでは、SASの基礎を習得済みの方を対象に、クラウドベースの次世代分析プラットフォーム「SAS Viya」を段階的に学習するためのカリキュラムを提供しています。従来のSASとの違いを理解し、AI/機械学習、データ可視化、クラウドアーキテクチャを活用した高度な分析スキルを身につけます。

## 前提条件

### 必要な環境
- **SAS Viya環境のいずれか**:
  - SAS Viya for Learners（無料、学習用・30日間トライアル）
  - SAS Viya on Azure/AWS/GCP（クラウド版）
  - SAS Viya on Kubernetes（オンプレミス版）
- **ブラウザ**: Chrome（推奨）、Firefox、Safari、Edge（最新版）
- **インターネット接続**: 安定した接続環境
- **メモリ**: 8GB以上推奨（ローカル作業用）

### 参考リソース
- [SAS Viya公式ドキュメント](https://documentation.sas.com/doc/ja/sasadmincdc/v_042/sasadmin.htm)
- [SAS Viya for Learners登録ページ](https://www.sas.com/ja_jp/software/viya-for-learners.html)
- [SAS Viya Learning Path（無料e-Learning）](https://support.sas.com/edu/schedules.html?ctry=jp&crs=VIYA)
- [SAS Viya Communities](https://communities.sas.com/t5/SAS-Viya/ct-p/viya)
- [SAS Viya YouTube公式チャンネル](https://www.youtube.com/playlist?list=PLVV6eZFA22QwrXd6nSDU18E6XgXSMOs87)

### 前提知識
- **必須**:
  - SASプログラミングの基礎（データステップ、プロシジャの基本操作）
  - 本リポジトリの[SAS入門学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/sas/)を修了済み、または同等の知識
- **推奨**:
  - SQLの基本操作
  - 統計学の基礎（回帰分析、分類の概念）
  - クラウドサービスの基本的な理解
- **あると良い**: Python/Rの基礎知識（連携時に有用）

## 学習コンテンツ

### [1. SAS Viyaの概要とアーキテクチャ](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/sas-viya/sas-viya-learning-material-01.html)
SAS Viyaとは何か、従来のSASとの違い、クラウドネイティブアーキテクチャの特徴を理解します。CAS（Cloud Analytic Services）エンジンの基本概念と、分散処理の仕組みを学びます。

### [2. SAS Viya環境のセットアップと基本操作](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/sas-viya/sas-viya-learning-material-02.html)
SAS Viya for Learnersの登録・ログイン方法、Web UIの使い方を習得します。SAS Studio（Viya版）、SAS Drive、Environment Managerなど主要コンポーネントの操作を学びます。

### [3. CAS（Cloud Analytic Services）の基礎](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/sas-viya/sas-viya-learning-material-03.html)
SAS Viyaの心臓部であるCASエンジンを深く理解します。インメモリ処理、分散コンピューティング、CASライブラリとCASテーブルの操作方法を習得します。

### [4. SAS Studioでのプログラミング（Viya版）](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/sas-viya/sas-viya-learning-material-04.html)
SAS Viya上でのSASプログラミングを学びます。従来のSASコードとの互換性、CASアクションの使い方、PROC CASによるCAS操作を習得します。

### [5. データの準備と管理](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/sas-viya/sas-viya-learning-material-05.html)
SAS Viyaへのデータ取り込み、データ品質チェック、データプロファイリングを学びます。様々なデータソース（CSV、Excel、データベース、クラウドストレージ）との接続方法を習得します。

### [6. SAS Visual Analyticsによるデータ可視化（基礎）](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/sas-viya/sas-viya-learning-material-06.html)
ノーコードでインタラクティブなダッシュボードを作成する方法を学びます。基本的なグラフタイプ、フィルター、計算項目の作成を習得します。

### [7. SAS Visual Analyticsによるデータ可視化（応用）](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/sas-viya/sas-viya-learning-material-07.html)
高度な可視化テクニックを習得します。地理空間分析、ネットワーク図、カスタムグラフ、レポートの共有・埋め込み方法を学びます。

### [8. SAS Model Studioによる機械学習（基礎）](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/sas-viya/sas-viya-learning-material-08.html)
ノーコード/ローコードで機械学習モデルを構築する方法を学びます。自動機械学習（AutoML）、データパイプライン、モデル比較の基本を習得します。

### [9. SAS Model Studioによる機械学習（応用）](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/sas-viya/sas-viya-learning-material-09.html)
高度な機械学習テクニックを習得します。特徴量エンジニアリング、ハイパーパラメータチューニング、アンサンブル学習、モデル解釈性（説明可能AI）を学びます。

### [10. 予測モデリングと時系列分析](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/sas-viya/sas-viya-learning-material-10.html)
回帰分析、分類モデル、時系列予測の実践方法を学びます。SAS Visual Forecastingを使った需要予測、売上予測のハンズオンを行います。

### [11. テキストアナリティクスと自然言語処理](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/sas-viya/sas-viya-learning-material-11.html)
SAS Visual Text Analyticsを使ったテキストマイニングを学びます。感情分析、トピックモデリング、エンティティ抽出の実践方法を習得します。

### [12. モデルの展開と運用（MLOps）](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/sas-viya/sas-viya-learning-material-12.html)
作成したモデルを本番環境に展開する方法を学びます。SAS Model Managerによるモデル管理、バージョニング、モニタリング、再学習の仕組みを習得します。

### [13. Python/Rとの連携](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/sas-viya/sas-viya-learning-material-13.html)
SAS ViyaとPython/Rを統合する方法を学びます。SWATライブラリによるPython連携、JupyterNotebookとの統合、オープンソースモデルのSAS Viya上での実行を習得します。

### [14. API活用と自動化](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/sas-viya/sas-viya-learning-material-14.html)
SAS Viya REST APIを使った自動化を学びます。ジョブスケジューリング、CI/CDパイプラインとの統合、外部システムとの連携方法を習得します。

### [15. 実践プロジェクト：顧客分析ダッシュボード構築](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/sas-viya/sas-viya-learning-material-15.html)
これまで学んだ知識を総合して、顧客セグメンテーション、解約予測モデル、インタラクティブダッシュボードを構築する実践プロジェクトに取り組みます。

## 学習の進め方

1. **SAS Viya for Learnersに登録する**
   - 第2章の手順に従い、無料のトライアル環境を取得します
   - Web UIの基本操作に慣れてから学習を進めましょう

2. **従来のSASとの違いを意識する**
   - 第1章と第3章で、CASエンジンとクラウドアーキテクチャの概念をしっかり理解します
   - 従来のSASコードがどのようにViya上で動作するかを確認しましょう

3. **ノーコードツールから始める**
   - 第6-9章のVisual AnalyticsとModel Studioは、コードを書かずに操作できます
   - GUIで概念を理解してから、プログラミングによる制御を学ぶと効率的です

4. **ハンズオンを重視する**
   - 各章のサンプルデータとハンズオン課題を必ず実践してください
   - 実際に手を動かすことで、理解が深まります

5. **実践プロジェクトで総仕上げ**
   - 第15章の実践プロジェクトで、学んだスキルを統合して活用します
   - 自分のデータで同様の分析を試してみましょう

## 推奨所要時間

| 章 | 内容 | 目安時間 |
|:--|:--|:--|
| 第1章 | SAS Viyaの概要とアーキテクチャ | 45分 |
| 第2章 | SAS Viya環境のセットアップと基本操作 | 1時間 |
| 第3章 | CAS（Cloud Analytic Services）の基礎 | 1.5時間 |
| 第4章 | SAS Studioでのプログラミング（Viya版） | 1.5時間 |
| 第5章 | データの準備と管理 | 1.5時間 |
| 第6章 | SAS Visual Analyticsによるデータ可視化（基礎） | 1.5時間 |
| 第7章 | SAS Visual Analyticsによるデータ可視化（応用） | 1.5時間 |
| 第8章 | SAS Model Studioによる機械学習（基礎） | 1.5時間 |
| 第9章 | SAS Model Studioによる機械学習（応用） | 2時間 |
| 第10章 | 予測モデリングと時系列分析 | 2時間 |
| 第11章 | テキストアナリティクスと自然言語処理 | 1.5時間 |
| 第12章 | モデルの展開と運用（MLOps） | 2時間 |
| 第13章 | Python/Rとの連携 | 1.5時間 |
| 第14章 | API活用と自動化 | 1.5時間 |
| 第15章 | 実践プロジェクト：顧客分析ダッシュボード構築 | 3時間 |
| **合計** | | **約24.5時間** |

## 関連リソース

### チートシート
- [SAS Viya CASアクション早見表](https://fcircle-biz.github.io/tech_docs/cheatsheet/data-ai/sas-viya-cas-cheatsheet.html)
- [SAS Visual Analytics操作ガイド](https://fcircle-biz.github.io/tech_docs/cheatsheet/data-ai/sas-va-cheatsheet.html)

### 関連ガイドライン
- [SAS入門学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/sas/) - 本ガイドの前提となるSAS基礎
- [機械学習入門ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/machine-learning/) - 機械学習の基礎理論
- [Python データサイエンス入門](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/data-science/) - Python連携の前提知識

## 学習目標

このガイドを完了すると、以下のスキルを身につけることができます：

- **SAS Viyaのアーキテクチャ**を理解し、従来のSASとの違いを説明できる
- **CASエンジン**を活用した分散処理とインメモリ分析を実行できる
- **SAS Visual Analytics**で魅力的なダッシュボードとレポートを作成できる
- **SAS Model Studio**でノーコード/ローコードの機械学習モデルを構築できる
- **AutoML**を活用して効率的にモデル開発ができる
- **時系列予測**や**テキストアナリティクス**など高度な分析を実践できる
- **モデルの展開と運用**（MLOps）のベストプラクティスを実践できる
- **Python/R**との連携により、SAS Viyaの機能を拡張できる
- **REST API**を活用して分析ワークフローを自動化できる

## 次のステップ

このガイドライン完了後は、以下の学習に進むことをお勧めします：

### 上級SAS Viya技術
- [SAS Viya管理者ガイド](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/sas-viya-admin/) - Viya環境の構築・管理
- [SAS Viya高度な分析ガイド](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/sas-viya-advanced/) - 深層学習、最適化など

### 関連技術の深化
- [MLOps実践ガイド](https://fcircle-biz.github.io/tech_docs/guide/development-processes/mlops/) - モデル運用の高度な手法
- [クラウドアーキテクチャ入門](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/cloud-architecture/) - クラウド設計の基礎
- [データエンジニアリング入門](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-engineering/) - データパイプライン構築

### 資格取得
- SAS Certified Specialist: Machine Learning Using SAS Viya
- SAS Certified Professional: Visual Business Analytics Using SAS Viya
- SAS Certified Specialist: Forecasting and Optimization Using SAS Viya

## SAS ViyaとSASの主な違い

| 項目 | 従来のSAS（SAS 9.x） | SAS Viya |
|------|---------------------|----------|
| アーキテクチャ | クライアント/サーバー | クラウドネイティブ、マイクロサービス |
| 処理エンジン | SAS Kernel | CAS（Cloud Analytic Services） |
| データ処理 | ディスクベース | インメモリ、分散処理 |
| スケーラビリティ | 垂直スケール | 水平スケール（ノード追加） |
| インターフェース | SAS Studio、Enterprise Guide | Web UI、REST API、多言語対応 |
| 言語サポート | SAS | SAS、Python、R、Lua、Java |
| 機械学習 | Enterprise Miner | Model Studio（AutoML対応） |
| 可視化 | PROC SGPLOT等 | Visual Analytics（インタラクティブ） |
| デプロイメント | オンプレミス中心 | クラウド/オンプレミス/ハイブリッド |

## サポートとコミュニティ

学習中に困ったときは、以下のリソースを活用してください：

- **SAS Viya Communities**: SAS Viya専用のフォーラムで質問・回答を共有
- **SAS Support**: 公式サポートドキュメントとナレッジベース
- **SAS YouTube チャンネル**: 操作方法の動画チュートリアル
- **SAS Blogs**: 最新機能やユースケースの紹介
- **GitHub SAS**: SASのオープンソースプロジェクトとサンプルコード

SASの基礎知識を活かしながら、クラウドベースの次世代分析プラットフォームであるSAS Viyaをマスターしましょう。AI/機械学習の民主化と、分析ワークフローの効率化を実現する強力なツールを、このガイドで習得してください。
