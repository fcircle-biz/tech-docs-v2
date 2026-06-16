# クラウドコンピューティング入門 学習ガイドライン

このガイドラインでは、クラウドコンピューティングの基礎概念をIT未経験者向けに段階的に学習するためのカリキュラムを提供しています。専門用語をできるだけ避け、身近な例えを使いながら、クラウドとは何か、なぜ重要なのかを理解できるように構成されています。

## 対象読者

このガイドは以下の方を対象としています：

- **IT業界未経験者**: プログラミングやサーバーの知識がない方
- **ビジネスパーソン**: クラウドの概念を理解してビジネスに活用したい方
- **学生**: IT業界への就職を考えている方
- **転職希望者**: クラウドエンジニアやIT職を目指す方

技術的な実装よりも「クラウドとは何か」「どのように使われているか」という概念の理解に重点を置いています。

## 前提条件

### 必要な環境

- **パソコン**: Windows、Mac、またはChromebookなど
- **インターネット接続**: 安定した接続環境
- **Webブラウザ**: Chrome、Firefox、Edge、Safariなどの最新版

> **注意**: このガイドの基礎編（第1章〜第5章）は座学中心のため、特別なソフトウェアのインストールは不要です。第6章以降の実践編では、各クラウドプロバイダーの無料アカウントを使用します。

### 参考リソース

- [AWS 初心者向けリソース](https://aws.amazon.com/jp/getting-started/)
- [Microsoft Azure 学習パス](https://learn.microsoft.com/ja-jp/training/azure/)
- [Google Cloud 学習リソース](https://cloud.google.com/training?hl=ja)
- [IPA（情報処理推進機構）クラウドサービス利用のための情報セキュリティマネジメントガイドライン](https://www.ipa.go.jp/)

### 前提知識

- **必須**:
  - パソコンの基本操作（ファイルの保存、Webブラウザの利用など）
  - インターネットの基本的な使い方（検索、Webサイト閲覧など）
- **推奨**:
  - 特になし（すべて基礎から解説します）

## 学習コンテンツ

### [1. クラウドコンピューティングとは - 身近な例えで理解する](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/cloud-computing/cloud-computing-learning-material-01.html)

クラウドコンピューティングの概念を、日常生活の例え（電気・水道のインフラ、動画配信サービスなど）を使ってやさしく解説します。

**学習内容:**
- クラウドとは何か - 「雲」の正体を理解する
- 従来のコンピュータ利用との違い（自家発電 vs 電力会社）
- クラウドの歴史と発展 - なぜ今クラウドが重要なのか
- クラウドの5つの基本特性（NIST定義をわかりやすく解説）
- クラウドを使う身近な例（Gmail、Netflix、Dropboxなど）
- クラウドのメリット（コスト削減、柔軟性、どこからでもアクセス可能）
- クラウドのデメリットと注意点（インターネット依存、セキュリティ懸念）

### [2. クラウドサービスの3つの種類 - IaaS、PaaS、SaaSを理解する](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/cloud-computing/cloud-computing-learning-material-02.html)

クラウドサービスの3つの提供形態を、「ピザ」の例え（宅配ピザ、冷凍ピザ、手作りピザ）を使って分かりやすく解説します。

**学習内容:**
- サービスモデルとは - なぜ種類を知る必要があるのか
- IaaS（Infrastructure as a Service）- 土地と建物を借りる
  - 具体例：AWS EC2、Azure Virtual Machines、Google Compute Engine
  - 向いている用途と利用シーン
- PaaS（Platform as a Service）- 店舗を借りて商売する
  - 具体例：Heroku、AWS Elastic Beanstalk、Google App Engine
  - 向いている用途と利用シーン
- SaaS（Software as a Service）- 完成品サービスを利用する
  - 具体例：Gmail、Microsoft 365、Salesforce、Zoom
  - 向いている用途と利用シーン
- 3つのサービスモデルの比較と選び方
- その他のサービスモデル（FaaS、DaaS、BaaSなど）の紹介

### [3. クラウドの導入形態 - パブリック、プライベート、ハイブリッド](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/cloud-computing/cloud-computing-learning-material-03.html)

クラウドの導入形態（デプロイメントモデル）の違いを、「住まい」の例え（賃貸マンション、一戸建て、別荘併用）を使って解説します。

**学習内容:**
- 導入形態とは - 「どこに」「誰と」クラウドを使うか
- パブリッククラウド - 誰でも利用できる共有クラウド
  - メリット：低コスト、すぐ始められる、スケーラビリティ
  - デメリット：カスタマイズの制限、セキュリティ懸念
- プライベートクラウド - 自社専用のクラウド環境
  - メリット：セキュリティ、カスタマイズ性、コンプライアンス対応
  - デメリット：高コスト、運用負荷
- ハイブリッドクラウド - パブリックとプライベートの組み合わせ
  - メリット：柔軟性、コスト最適化、段階的移行
  - 活用シナリオと設計のポイント
- マルチクラウド - 複数のクラウドプロバイダーを併用
  - メリット：ベンダーロックイン回避、最適なサービス選択
  - 課題：複雑性、運用コスト
- 自社に適した導入形態の選び方

### [4. 主要クラウドプロバイダーの比較 - AWS、Azure、GCPを知る](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/cloud-computing/cloud-computing-learning-material-04.html)

世界3大クラウドプロバイダー（AWS、Microsoft Azure、Google Cloud Platform）の特徴と違いを、初心者向けにわかりやすく比較解説します。

**学習内容:**
- クラウド市場の現状 - シェアと成長率
- Amazon Web Services（AWS）
  - 歴史と背景（Amazonのインフラから誕生）
  - 特徴：サービス数最多、豊富な事例、グローバル展開
  - 代表的なサービスの紹介（EC2、S3、RDSなど）
  - 向いている用途
- Microsoft Azure
  - 歴史と背景（Windowsとの連携強み）
  - 特徴：エンタープライズ向け、Microsoft製品との統合
  - 代表的なサービスの紹介（Virtual Machines、Blob Storage、SQL Databaseなど）
  - 向いている用途
- Google Cloud Platform（GCP）
  - 歴史と背景（Googleの技術基盤）
  - 特徴：データ分析・AI/ML、Kubernetes発祥
  - 代表的なサービスの紹介（Compute Engine、Cloud Storage、BigQueryなど）
  - 向いている用途
- その他のクラウドプロバイダー（Oracle Cloud、IBM Cloud、国内クラウドなど）
- プロバイダー選びのポイント

### [5. クラウドの基本構成要素 - 仮想マシン、ストレージ、データベース](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/cloud-computing/cloud-computing-learning-material-05.html)

クラウドを構成する主要な要素を、「オフィスビル」の例えを使って分かりやすく解説します。

**学習内容:**
- クラウドを構成する3つの基本要素
- コンピューティング（仮想マシン）- 仕事をする人（CPU/メモリ）
  - 仮想化技術とは - 1台のコンピュータを複数に分ける
  - インスタンスタイプの考え方（小さい部屋から大きな部屋まで）
  - オートスケーリング - 必要に応じて自動で増減
- ストレージ - 書類を保管する倉庫
  - オブジェクトストレージ - 写真や動画の保管庫（S3、Blob Storage、Cloud Storage）
  - ブロックストレージ - 仮想マシンのハードディスク
  - ファイルストレージ - 共有フォルダ
  - ストレージクラスと料金の考え方
- データベース - 整理された情報の保管庫
  - リレーショナルデータベース（RDS、Azure SQL、Cloud SQL）
  - NoSQLデータベース（DynamoDB、Cosmos DB、Firestore）
  - マネージドデータベースのメリット
- これら3要素の連携イメージ

### [6. クラウドセキュリティの基礎 - 安全にクラウドを使うために](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/cloud-computing/cloud-computing-learning-material-06.html)

クラウド環境でのセキュリティの考え方と基本的な対策を、「マンションのセキュリティ」に例えて解説します。

**学習内容:**
- クラウドセキュリティはなぜ重要か
- 責任共有モデル - プロバイダーと利用者の役割分担
  - 「建物のセキュリティ」と「部屋のセキュリティ」
  - IaaS、PaaS、SaaSでの責任範囲の違い
- アクセス管理の基本（IAM）
  - ユーザーとロール - 誰が何をできるか
  - 最小権限の原則 - 必要最低限の権限だけを付与
  - 多要素認証（MFA）- パスワード以外の確認
- データ保護の基本
  - 暗号化 - データを読めない形に変換
  - バックアップ - 万が一に備える
- ネットワークセキュリティの基本
  - ファイアウォール - 通信の門番
  - VPN - 安全な通信路
- セキュリティのベストプラクティス
- よくあるセキュリティ事故と対策

### [7. クラウドコスト管理入門 - 無駄なく賢く使うために](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/cloud-computing/cloud-computing-learning-material-07.html)

クラウドの料金体系を理解し、コストを最適化する方法を、「携帯電話の料金プラン」に例えて解説します。

**学習内容:**
- クラウドの料金体系を理解する
  - 従量課金制 - 使った分だけ払う
  - 料金が発生する要素（コンピューティング、ストレージ、通信など）
- 3大プロバイダーの料金比較
  - 無料利用枠の活用方法
  - 料金計算ツールの使い方
- コストが膨らむ原因
  - 使っていないリソースの放置
  - 過剰なスペックの選択
  - データ転送料金の見落とし
- コスト最適化の基本テクニック
  - リソースの適正サイズ選択
  - リザーブドインスタンス - 長期契約で割引
  - スポットインスタンス - 空き時間を安く使う
  - 自動停止・開始のスケジュール設定
- コスト管理ツールの紹介
  - 予算アラートの設定
  - コスト分析ダッシュボード
- FinOps（クラウド財務管理）の考え方

### [8. クラウドを始めよう - 最初の一歩と学習ロードマップ](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/cloud-computing/cloud-computing-learning-material-08.html)

実際にクラウドを始めるための具体的な手順と、今後の学習の進め方を解説します。

**学習内容:**
- 無料アカウントの作成手順
  - AWS無料利用枠の活用
  - Azure無料アカウントの作成
  - GCP無料トライアルの開始
- 最初に試してほしいこと
  - 管理コンソールを触ってみる
  - 簡単なリソースを作成してみる
  - 作成したリソースを削除する（重要）
- クラウド学習のロードマップ
  - 初心者 → 基礎 → 実践 → 専門分野
- 役立つ学習リソースの紹介
  - 公式トレーニング
  - オンライン学習プラットフォーム
  - ハンズオンラボ
- クラウド関連の資格紹介
  - AWS認定資格の体系
  - Microsoft Azure認定資格
  - Google Cloud認定資格
- 今後のキャリアパス
  - クラウドエンジニア
  - ソリューションアーキテクト
  - DevOpsエンジニア
  - データエンジニア

## 学習の進め方

1. **座学で基礎を固める（第1章〜第5章）**
   - まずは概念をしっかり理解することが大切です
   - 専門用語に慣れることを意識しましょう
   - 図解やイラストを活用して視覚的に理解しましょう

2. **セキュリティとコストを理解する（第6章〜第7章）**
   - クラウドを使う前に知っておくべき重要な知識です
   - 特にコスト管理は、実際に使う前に必ず理解しておきましょう

3. **実際に触ってみる（第8章）**
   - 無料枠を活用して、実際のクラウド環境を体験しましょう
   - 必ずリソースの削除方法を確認してから進めましょう

4. **繰り返し復習する**
   - 一度で覚える必要はありません
   - 何度も読み返して、少しずつ理解を深めましょう

## 推奨所要時間

| 章 | 内容 | 目安時間 |
|----------|------|----------|
| 第1章 | クラウドコンピューティングとは - 身近な例えで理解する | 45分 |
| 第2章 | クラウドサービスの3つの種類 - IaaS、PaaS、SaaSを理解する | 45分 |
| 第3章 | クラウドの導入形態 - パブリック、プライベート、ハイブリッド | 45分 |
| 第4章 | 主要クラウドプロバイダーの比較 - AWS、Azure、GCPを知る | 1時間 |
| 第5章 | クラウドの基本構成要素 - 仮想マシン、ストレージ、データベース | 1時間 |
| 第6章 | クラウドセキュリティの基礎 - 安全にクラウドを使うために | 1時間 |
| 第7章 | クラウドコスト管理入門 - 無駄なく賢く使うために | 45分 |
| 第8章 | クラウドを始めよう - 最初の一歩と学習ロードマップ | 30分 |
| **合計** | | **約6.5時間** |

## 関連リソース

### チートシート
- [クラウド用語チートシート](https://fcircle-biz.github.io/tech_docs/cheatsheet/cloud-infrastructure/cloud-terminology-cheatsheet.html)（準備中）
- [AWS/Azure/GCPサービス対応表](https://fcircle-biz.github.io/tech_docs/cheatsheet/cloud-infrastructure/cloud-services-comparison.html)（準備中）

### 関連ガイドライン
- [AWS基礎学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/aws-basic/)
- [Docker入門学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/docker/)
- [ネットワーク基礎学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/network-basics/)（準備中）

### 外部リソース
- [AWS 初心者向けハンズオン](https://aws.amazon.com/jp/getting-started/hands-on/)
- [Microsoft Learn - Azure基礎](https://learn.microsoft.com/ja-jp/training/paths/az-900-describe-cloud-concepts/)
- [Google Cloud Skills Boost](https://www.cloudskillsboost.google/)
- [ドットインストール クラウド入門](https://dotinstall.com/)

## 学習目標

このガイドを完了すると、以下のスキルを身につけることができます：

- **クラウドの概念を説明できる**: 「クラウドとは何か」を技術者でない人にも分かりやすく説明できる
- **サービスモデルを区別できる**: IaaS、PaaS、SaaSの違いを理解し、具体例を挙げて説明できる
- **導入形態を理解している**: パブリック、プライベート、ハイブリッドクラウドの特徴と使い分けを説明できる
- **主要プロバイダーの特徴を知っている**: AWS、Azure、GCPの違いと得意分野を説明できる
- **基本構成要素を理解している**: 仮想マシン、ストレージ、データベースの役割を説明できる
- **セキュリティの基本を理解している**: 責任共有モデル、IAM、暗号化の概念を説明できる
- **コスト管理の重要性を認識している**: クラウドの料金体系を理解し、コスト最適化の方法を知っている
- **学習の次のステップが分かる**: 今後どのように学習を進めるべきかの道筋が見えている

## 次のステップ

このガイドライン完了後は、以下の学習に進むことをお勧めします：

### より実践的なクラウド学習

- [AWS基礎学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/aws-basic/) - AWSの具体的なサービス操作を学ぶ
- [Docker入門学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/docker/) - コンテナ技術の基礎を学ぶ

### クラウド関連資格の取得

- **AWS Certified Cloud Practitioner** - AWSの入門資格、クラウドの基礎知識を証明
- **Microsoft Azure Fundamentals (AZ-900)** - Azureの入門資格、基本概念を網羅
- **Google Cloud Digital Leader** - GCPの入門資格、ビジネス視点も含む

### 関連技術の学習

- **Linux基礎** - クラウドで動くサーバーの多くがLinux
- **ネットワーク基礎** - クラウドを理解するのに必要な通信の知識
- **プログラミング基礎** - クラウドを活用したアプリケーション開発に必要

---

このガイドで学んだクラウドコンピューティングの基礎知識は、これからのIT業界で働く上で欠かせない知識です。焦らず、一歩ずつ着実に学習を進めていきましょう。
