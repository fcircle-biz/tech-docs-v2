# クラウドコンピューティング 学習ガイドライン

このガイドラインでは、クラウドコンピューティングの基礎から実践的なクラウドアーキテクチャ設計まで、入門者向けに段階的に学習するためのカリキュラムを提供しています。AWS、Azure、GCPの3大クラウドプロバイダーを網羅し、実際の開発現場で求められるクラウド活用スキルを身につけることができます。各トピックには詳細な解説へのリンクが含まれています。

## 前提条件

### 必要な環境
- **OS**: Windows 10/11、macOS 10.15以降、または主要Linuxディストリビューション（Ubuntu、CentOS等）
- **ハードウェア**: CPU 2コア以上、メモリ4GB以上（推奨8GB以上）
- **ネットワーク**: 安定したインターネット接続環境
- **ソフトウェア**:
  - Webブラウザ（Chrome、Firefox、Edge等の最新版）
  - ターミナル/コマンドプロンプト
  - テキストエディタまたはIDE（VS Code、IntelliJ IDEA等）
  - SSH クライアント
- **アカウント**: 各クラウドプロバイダーの無料アカウント（学習時に作成）
  - AWS無料利用枠アカウント
  - Microsoft Azure無料アカウント
  - Google Cloud Platform無料トライアル

### 参考リソース
- [AWS公式ドキュメント（日本語）](https://docs.aws.amazon.com/ja_jp/)
- [Microsoft Azure ドキュメント（日本語）](https://learn.microsoft.com/ja-jp/azure/)
- [Google Cloud ドキュメント（日本語）](https://cloud.google.com/docs?hl=ja)
- [Cloud Architecture Center](https://cloud.google.com/architecture) - クラウドアーキテクチャ設計のベストプラクティス
- [AWS Well-Architected Framework](https://aws.amazon.com/jp/architecture/well-architected/)
- [Microsoft Azure Architecture Center](https://learn.microsoft.com/ja-jp/azure/architecture/)

### 前提知識
- **必須**:
  - コンピュータとインターネットの基本的な理解
  - コマンドラインの基本操作（ターミナル、Bash/PowerShellの基礎）
  - ネットワークの基礎知識（IPアドレス、DNS、HTTP/HTTPSの概念）
  - テキストエディタの使用経験
- **推奨**:
  - いずれかのプログラミング言語の基礎（Python、JavaScript、Java等）
  - Linuxの基本コマンド（ls、cd、cat、grep等）
  - サーバー・データベースの基本概念
  - 仮想化技術の基本理解

## 学習コンテンツ

### [1. クラウドコンピューティングの基礎概念](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/cloud-computing/cloud-computing-learning-material-01.html)
クラウドコンピューティングの定義、歴史、基本概念について学びます。クラウドとは何か、従来のオンプレミス環境との違い、クラウドの5つの基本特性（オンデマンド・セルフサービス、広範なネットワークアクセス、リソースプーリング、迅速な拡張性、測定可能なサービス）、クラウドサービスモデル（IaaS、PaaS、SaaS）の違いと具体例、クラウドデプロイメントモデル（パブリック、プライベート、ハイブリッド、マルチクラウド）、クラウドのメリット（コスト削減、スケーラビリティ、柔軟性、グローバル展開）とデメリット（セキュリティ懸念、ベンダーロックイン、依存性）、クラウドネイティブの概念、主要クラウドプロバイダー（AWS、Azure、GCP、その他）の概要について解説します。

### [2. 主要クラウドプロバイダーの比較とアカウント作成](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/cloud-computing/cloud-computing-learning-material-02.html)
AWS、Azure、GCPの3大クラウドプロバイダーの特徴比較とアカウント設定について学びます。各プロバイダーの歴史と市場シェア、強みと特徴（AWSの豊富なサービス、Azureのエンタープライズ統合、GCPのデータ分析・AI）、料金体系とコスト構造の違い、無料利用枠と無料トライアルの内容、AWSアカウントの作成手順（IAMユーザーの設定、MFA有効化、請求アラートの設定）、Azureアカウントの作成手順（サブスクリプション理解、リソースグループ概念）、GCPアカウントの作成手順（プロジェクト作成、課金アカウント設定）、クラウドコンソールの基本的な使い方、CLIツールの紹介（AWS CLI、Azure CLI、gcloud CLI）、セキュリティのベストプラクティス（強力なパスワード、MFA、ルートアカウント保護）について解説します。

### [3. AWS基礎サービス（EC2、S3、RDS）](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/cloud-computing/cloud-computing-learning-material-03.html)
Amazon Web Servicesの主要な基礎サービスについて学びます。Amazon EC2（Elastic Compute Cloud）の概要とインスタンスタイプの選択、EC2インスタンスの起動・接続・停止・削除手順、セキュリティグループの設定とネットワークアクセス制御、Amazon S3（Simple Storage Service）の概要とユースケース、バケットの作成、オブジェクトのアップロード・ダウンロード、S3のストレージクラス（Standard、IA、Glacier等）、バージョニングとライフサイクル管理、Amazon RDS（Relational Database Service）の概要とサポートされるデータベースエンジン（MySQL、PostgreSQL、Oracle、SQL Server等）、RDSインスタンスの作成と接続、自動バックアップとスナップショット、マルチAZ配置による高可用性、EC2・S3・RDSを組み合わせた3層アーキテクチャの実装例について解説します。

### [4. Azure基礎サービス（Virtual Machines、Blob Storage、SQL Database）](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/cloud-computing/cloud-computing-learning-material-04.html)
Microsoft Azureの主要な基礎サービスについて学びます。Azureのリソース階層（サブスクリプション、リソースグループ、リソース）の理解、Azure Virtual Machines（VM）の概要とサイズの選択、VMの作成・起動・停止・削除手順、ネットワークセキュリティグループ（NSG）の設定、Azure Blob Storageの概要と種類（Block Blob、Page Blob、Append Blob）、ストレージアカウントの作成とコンテナ管理、アクセス層（Hot、Cool、Archive）の使い分け、Azure SQL Databaseの概要とサービス階層（Basic、Standard、Premium）、SQL Databaseの作成と接続方法、Azure SQL Database Firewallの設定、自動チューニングとインテリジェントパフォーマンス、Azureポータルの効果的な使い方、Azure Resource Manager（ARM）テンプレートの基礎、AzureとAWSサービスの対応関係について解説します。

### [5. GCP基礎サービス（Compute Engine、Cloud Storage、Cloud SQL）](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/cloud-computing/cloud-computing-learning-material-05.html)
Google Cloud Platformの主要な基礎サービスについて学びます。GCPのリソース階層（組織、フォルダ、プロジェクト、リソース）の理解、Google Compute Engineの概要とマシンタイプの選択、VMインスタンスの作成・起動・停止・削除、ファイアウォールルールの設定とVPCネットワーク、プリエンプティブルVMとコスト最適化、Google Cloud Storageの概要とストレージクラス（Standard、Nearline、Coldline、Archive）、バケットの作成とオブジェクト管理、アクセス制御（IAM、ACL、署名付きURL）、Cloud SQLの概要とサポートされるデータベース（MySQL、PostgreSQL、SQL Server）、Cloud SQLインスタンスの作成と接続、自動バックアップとポイントインタイムリカバリ、高可用性構成の設定、GCPコンソールとCloud Shellの活用、gcloudコマンドラインツールの基本操作、GCPと他クラウドプロバイダーのサービス比較について解説します。

### [6. クラウドネットワーキングとセキュリティ](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/cloud-computing/cloud-computing-learning-material-06.html)
クラウド環境でのネットワーク設計とセキュリティ対策について学びます。仮想プライベートクラウド（VPC）の概念と設計、サブネット（パブリック/プライベート）の分割と設定、ルーティングテーブルとインターネットゲートウェイ、NAT（Network Address Translation）ゲートウェイの設定と用途、ロードバランサーの種類（Application、Network、Classic）と使い分け、セキュリティグループとネットワークACLの違い、VPNとDirect Connect/ExpressRoute/Interconnectによるハイブリッドクラウド接続、DNSサービス（Route 53、Azure DNS、Cloud DNS）の活用、CDN（CloudFront、Azure CDN、Cloud CDN）による配信最適化、IAM（Identity and Access Management）によるアクセス制御の基本、ユーザー、グループ、ロール、ポリシーの管理、最小権限の原則の適用、データ暗号化（保存時・転送時）のベストプラクティス、監査ログとコンプライアンス（CloudTrail、Azure Monitor、Cloud Audit Logs）、セキュリティのベストプラクティスとCISベンチマークについて解説します。

### [7. クラウドアーキテクチャパターンと設計原則](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/cloud-computing/cloud-computing-learning-material-07.html)
実践的なクラウドアーキテクチャの設計パターンと原則について学びます。Well-Architectedフレームワークの5つの柱（運用性、セキュリティ、信頼性、パフォーマンス効率、コスト最適化）、高可用性アーキテクチャの設計（マルチAZ、マルチリージョン）、自動スケーリング（Auto Scaling、VM Scale Sets、Managed Instance Groups）の設定と戦略、負荷分散パターンとヘルスチェック、災害復旧（DR）戦略（RTO・RPOの理解、バックアップと復元）、3層アーキテクチャ（プレゼンテーション層、アプリケーション層、データ層）の実装、マイクロサービスアーキテクチャとクラウドネイティブ設計、イベント駆動アーキテクチャ（メッセージキュー、Pub/Sub）、キャッシュ戦略（CloudFront、ElastiCache、Azure Cache、Memorystore）、データベース設計パターン（読み取りレプリカ、シャーディング、NoSQLの活用）、リファレンスアーキテクチャの活用、Infrastructure as Code（IaC）の概念と利点について解説します。

### [8. サーバーレスコンピューティングとコンテナサービス](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/cloud-computing/cloud-computing-learning-material-08.html)
モダンなクラウド開発に欠かせないサーバーレスとコンテナ技術について学びます。サーバーレスコンピューティングの概念とメリット、AWS Lambda、Azure Functions、Google Cloud Functionsの基本、関数のデプロイとトリガー設定（HTTP、イベント、スケジュール）、サーバーレスアプリケーションの設計パターン、API Gateway（AWS API Gateway、Azure API Management、Cloud Endpoints）の活用、サーバーレスデータベース（DynamoDB、Cosmos DB、Firestore）の基礎、コンテナの基本概念とDockerの復習、Amazon ECS（Elastic Container Service）とFargateの使い方、Azure Container Instances（ACI）とAzure Kubernetes Service（AKS）の基礎、Google Kubernetes Engine（GKE）とCloud Runの概要、Kubernetesの基本概念（Pod、Service、Deployment、Ingress）、コンテナレジストリ（ECR、ACR、GCR）の活用、サーバーレスとコンテナの使い分け、マネージドKubernetesサービスの比較、CI/CDパイプラインとの統合について解説します。

### [9. クラウドコスト管理とモニタリング](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/cloud-computing/cloud-computing-learning-material-09.html)
クラウドコストの最適化と運用監視の実践方法について学びます。クラウドコスト管理の重要性と課題、AWSコスト管理ツール（Cost Explorer、AWS Budgets、Cost and Usage Report）の活用、Azureコスト管理（Cost Management + Billing、Advisor）の使い方、GCPコスト管理（Cloud Billing、Cost Table、Recommender）の実践、予算アラートの設定と通知、リソースタグ付けによるコスト配分、未使用リソースの特定と削減、リザーブドインスタンス・スポットインスタンスの活用、ストレージクラスの最適化とライフサイクルポリシー、クラウドモニタリングの基本（メトリクス、ログ、トレース）、Amazon CloudWatch、Azure Monitor、Google Cloud Operations（旧Stackdriver）の概要、カスタムメトリクスとダッシュボード作成、アラートとインシデント対応の自動化、ログ集約と分析（CloudWatch Logs、Azure Log Analytics、Cloud Logging）、アプリケーションパフォーマンス監視（APM）ツールの紹介、SLI/SLO/SLAの理解と設定、コスト削減のベストプラクティス、フィンOps（FinOps）の概念と実践について解説します。

### [10. クラウドベストプラクティスと実践プロジェクト](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/cloud-computing/cloud-computing-learning-material-10.html)
これまでの学習を統合し、実践的なクラウドプロジェクトを構築します。クラウド移行戦略（Lift and Shift、Re-platform、Re-factor、Re-architect）、マルチクラウド戦略とハイブリッドクラウドの活用、Infrastructure as Code（IaC）の実践（Terraform、CloudFormation、ARM Templates、Deployment Manager）、CI/CDパイプラインの構築（GitHub Actions、Azure DevOps、Cloud Build）、コンテナオーケストレーション実践、マイクロサービスアーキテクチャの実装、DevOpsとGitOpsの概念、セキュリティのベストプラクティス（最小権限、暗号化、監査）、コンプライアンスと規制対応（GDPR、HIPAA、PCI DSS）、実践プロジェクト1：3層Webアプリケーションの構築と自動スケーリング、実践プロジェクト2：サーバーレスアーキテクチャによるイベント処理システム、実践プロジェクト3：マルチリージョン対応の高可用性システム、トラブルシューティングとデバッグ技法、クラウド認定資格の紹介（AWS認定、Azure認定、GCP認定）、次のステップ：専門分野への展開（データエンジニアリング、機械学習、IoT等）について解説します。

## 学習の進め方

1. **順序立てた学習**: 初めてクラウドを学ぶ方は、必ず「1. クラウドコンピューティングの基礎概念」から順番に学習を進めてください。各章は前章の内容を前提としています。
2. **無料枠の活用**: 各クラウドプロバイダーの無料利用枠を活用し、実際にリソースを作成・操作して理解を深めましょう。ただし、課金に注意し、不要なリソースは必ず削除してください。
3. **実践重視**: クラウドは実際に手を動かすことで理解が深まります。各章の手順を必ず自分の環境で実行してみましょう。
4. **コスト管理**: 学習中も常にコスト管理を意識し、予算アラートを設定し、使用していないリソースは即座に削除する習慣をつけましょう。
5. **複数プロバイダーの比較**: AWS、Azure、GCPの違いを意識しながら学習することで、クラウドの本質的な理解が深まります。
6. **ドキュメントの活用**: 各クラウドプロバイダーの公式ドキュメントは充実しています。エラーが発生した際は必ず公式ドキュメントを参照しましょう。
7. **セキュリティ優先**: 学習環境でも常にセキュリティを意識し、認証情報の管理、アクセス制御、暗号化などのベストプラクティスを実践しましょう。
8. **小規模から開始**: 最初は最小構成で始め、徐々に複雑な構成にステップアップしていきましょう。

## 推奨学習期間

- **基礎理解コース** (1-2章): 1-2週間
  - クラウドの基本概念、各プロバイダーの特徴理解、アカウント設定
  - 1日1-2時間の学習で、クラウドの全体像を把握できます

- **主要サービス習得コース** (3-5章): 3-4週間
  - AWS、Azure、GCPの基礎サービス（コンピューティング、ストレージ、データベース）の実践
  - 実際に各サービスを操作し、基本的なクラウド操作スキルを身につけます

- **アーキテクチャ設計コース** (6-7章): 2-3週間
  - ネットワーキング、セキュリティ、アーキテクチャ設計の学習
  - 実務で必要となる設計スキルとベストプラクティスを習得します

- **応用・実践コース** (8-10章): 3-4週間
  - サーバーレス、コンテナ、コスト管理、実践プロジェクト
  - 実際のプロダクション環境を想定した総合的なスキルを身につけます

**合計学習期間**: 9-13週間（1日1-2時間の学習を想定）

## 関連リソース

### チートシート
- [AWSサービスチートシート](https://fcircle-biz.github.io/tech_docs/cheatsheet/cloud-infrastructure/aws-cheatsheet.html)（準備中）
- [Azureサービスチートシート](https://fcircle-biz.github.io/tech_docs/cheatsheet/cloud-infrastructure/azure-cheatsheet.html)（準備中）
- [GCPサービスチートシート](https://fcircle-biz.github.io/tech_docs/cheatsheet/cloud-infrastructure/gcp-cheatsheet.html)（準備中）
- [クラウドセキュリティチートシート](https://fcircle-biz.github.io/tech_docs/cheatsheet/cloud-infrastructure/cloud-security-cheatsheet.html)（準備中）

### 関連ガイドライン
- [Docker学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/docker/README.html)
- [Kubernetes学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/kubernetes/README.html)（準備中）
- [Terraform学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/terraform/README.html)（準備中）
- [Linux基礎学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/os/linux/README.html)（準備中）

### 外部リソース
- [AWS Training and Certification](https://aws.amazon.com/jp/training/)
- [Microsoft Learn for Azure](https://learn.microsoft.com/ja-jp/training/azure/)
- [Google Cloud Skills Boost](https://www.cloudskillsboost.google/)
- [A Cloud Guru](https://acloudguru.com/) - クラウド学習プラットフォーム
- [Coursera Cloud Computing Specializations](https://www.coursera.org/)

## 学習目標

このガイドを完了すると、以下のスキルを身につけることができます：

- **クラウド基礎理解**: クラウドコンピューティングの基本概念、サービスモデル、デプロイメントモデルを説明できる
- **主要サービス活用**: AWS、Azure、GCPの主要サービス（コンピューティング、ストレージ、データベース）を操作・管理できる
- **ネットワーク設計**: VPC、サブネット、セキュリティグループなどを使った安全なネットワーク構成を設計できる
- **アーキテクチャ設計**: 高可用性、拡張性、セキュリティを考慮したクラウドアーキテクチャを設計できる
- **セキュリティ実装**: IAM、暗号化、監査ログなどのセキュリティベストプラクティスを実装できる
- **コスト最適化**: クラウドコストを監視・分析し、最適化策を実施できる
- **サーバーレス・コンテナ活用**: サーバーレス関数やコンテナサービスを活用したモダンなアプリケーションを構築できる
- **運用監視**: モニタリングツールを使ってシステムの健全性を監視し、問題に対応できる
- **IaC実践**: Infrastructure as Codeツールを使ってインフラをコード化し、自動化できる
- **マルチクラウド理解**: 複数のクラウドプロバイダーの特徴を理解し、適切に選択・活用できる
- **問題解決能力**: クラウド環境での一般的な問題を自力で調査・解決できる能力を身につける
- **継続学習力**: 急速に進化するクラウド技術の最新情報をキャッチアップする方法を習得する

## 次のステップ

このガイドライン完了後は、以下の学習に進むことをお勧めします：

### 専門領域への深化

#### クラウド認定資格の取得
- **AWS認定**:
  - AWS Certified Solutions Architect – Associate
  - AWS Certified Developer – Associate
  - AWS Certified SysOps Administrator – Associate
- **Microsoft認定**:
  - Microsoft Certified: Azure Fundamentals (AZ-900)
  - Microsoft Certified: Azure Administrator Associate (AZ-104)
  - Microsoft Certified: Azure Solutions Architect Expert (AZ-305)
- **Google Cloud認定**:
  - Google Cloud Associate Cloud Engineer
  - Google Cloud Professional Cloud Architect
  - Google Cloud Professional Data Engineer

#### コンテナオーケストレーション
- **Kubernetes**: クラウドネイティブアプリケーションの標準的なオーケストレーションプラットフォーム
- **Docker進階**: マルチステージビルド、セキュリティ強化、本番環境運用
- **サービスメッシュ**: Istio、Linkerdなどを使った高度なマイクロサービス管理

#### Infrastructure as Code (IaC)
- **Terraform**: マルチクラウド対応のIaCツールの習得
- **Ansible**: 構成管理と自動化
- **Pulumi**: プログラミング言語によるIaC実装

#### DevOps & CI/CD
- **GitHub Actions**: GitHubネイティブのCI/CDパイプライン構築
- **Azure DevOps**: エンタープライズ向けDevOpsプラットフォーム
- **GitLab CI/CD**: 包括的なDevOpsツールチェーン
- **Jenkins**: 従来型CI/CDツールとクラウドの統合

### 特定技術領域への展開

#### データエンジニアリング
- **データウェアハウス**: Redshift、Azure Synapse Analytics、BigQuery
- **データレイク**: S3 Data Lake、Azure Data Lake、Cloud Storage
- **データパイプライン**: AWS Glue、Azure Data Factory、Cloud Dataflow
- **ストリーミング処理**: Kinesis、Event Hubs、Cloud Pub/Sub

#### 機械学習・AI
- **機械学習プラットフォーム**: SageMaker、Azure Machine Learning、Vertex AI
- **AIサービス**: Rekognition、Cognitive Services、Cloud Vision API
- **MLOps**: 機械学習モデルのデプロイと運用自動化

#### セキュリティ & コンプライアンス
- **セキュリティ専門化**: クラウドセキュリティアーキテクチャ、ゼロトラストモデル
- **コンプライアンス**: GDPR、HIPAA、PCI DSS対応
- **セキュリティ自動化**: Security Hub、Azure Security Center、Security Command Center

#### アプリケーション開発
- **サーバーレスアーキテクチャ**: イベント駆動型アプリケーション設計と実装
- **マイクロサービス**: コンテナベースのマイクロサービスアーキテクチャ
- **API管理**: API Gateway、Azure API Management、Apigee

### ビジネス & マネジメント
- **クラウド経済学**: TCO分析、ROI計算、FinOps実践
- **クラウド移行戦略**: レガシーシステムのクラウド移行計画と実行
- **クラウドガバナンス**: 組織全体のクラウド利用ルールと管理体制
- **ベンダー交渉**: クラウドサービスの選定と契約交渉スキル

このガイドで学んだクラウドコンピューティングの基礎知識は、これらすべての技術領域とキャリアパスにおいて重要な基盤となります。クラウド技術は急速に進化し続けているため、継続的な学習と実践が成功の鍵となります。
