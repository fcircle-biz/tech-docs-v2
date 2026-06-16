# AWS Terraform 学習ガイドライン

このガイドラインでは、AWS上でTerraformを使用したInfrastructure as Code（IaC）の実装方法を初心者向けに段階的に学習するためのカリキュラムを提供しています。Terraformの基本概念からHCL構文、AWSリソースの管理、ステート管理、モジュール化、CI/CD統合まで、実務で必要となるスキルを体系的に身につけることができます。

## 前提条件

### 必要な環境
- macOS、Windows、またはLinux環境
- インターネット接続環境
- Terraform CLI（バージョン1.5以上推奨）
- AWS CLI（バージョン2推奨）
- テキストエディタ（Visual Studio Code推奨、HashiCorp Terraform拡張機能インストール推奨）
- Git（バージョン管理用）
- AWSアカウント（管理者権限を持つIAMユーザー）

### 参考リソース
- [Terraform公式ドキュメント](https://www.terraform.io/docs/) - Terraformの公式ガイドとAPIリファレンス
- [Terraform AWS Provider](https://registry.terraform.io/providers/hashicorp/aws/latest/docs) - AWS Provider詳細ドキュメント
- [HashiCorp Learn](https://learn.hashicorp.com/terraform) - 公式チュートリアル集
- [Terraform Registry](https://registry.terraform.io/) - モジュールとプロバイダーのレジストリ
- [AWS CloudFormation vs Terraform](https://www.hashicorp.com/resources/terraform-vs-cloudformation) - CloudFormationとの比較
- [Terraform Best Practices](https://www.terraform-best-practices.com/) - コミュニティベストプラクティス

### 前提知識
- **必須**:
  - AWSの基本的なサービス（EC2、VPC、S3、IAM）の理解
  - コマンドライン（ターミナル）の基本操作
  - YAMLまたはJSONフォーマットの理解
  - 基本的なプログラミング概念（変数、関数、条件分岐）
- **推奨**:
  - AWSマネジメントコンソールでの実装経験
  - Gitの基本操作（add、commit、push、pull）
  - インフラストラクチャの基礎知識
  - CI/CDの基本概念

## 学習コンテンツ

### [1. Terraform入門とAWS環境設定](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/aws-terraform/aws-terraform-learning-material-01.html)
Terraformの基本概念とInfrastructure as Codeのメリットを理解し、AWS環境でTerraformを使用するための初期設定を行います。

**学習目標:**
- Infrastructure as Code（IaC）の概念とメリットを理解する
- TerraformとCloudFormationの違いを説明できる
- Terraform CLIのインストールと初期設定を行う
- AWS認証情報を適切に設定する

**学習内容:**
1. **Infrastructure as Codeとは**
   - 従来のインフラ管理の課題
   - IaCのメリット（再現性、バージョン管理、自動化、ドキュメント化）
   - 宣言的アプローチと命令的アプローチの違い
   - TerraformとAnsible、CloudFormationとの比較

2. **Terraformの基本概念**
   - Terraformのアーキテクチャ（Core、Provider、State）
   - HCL（HashiCorp Configuration Language）の概要
   - Terraformのワークフロー（Write、Plan、Apply）
   - リソースとデータソースの違い

3. **開発環境のセットアップ**
   - Terraform CLIのインストール（tfenv使用推奨）
   - AWS CLIのインストールと設定
   - IAMユーザーの作成と適切な権限付与
   - Visual Studio Codeの設定とExtension導入

4. **最初のTerraformプロジェクト**
   - プロジェクトディレクトリの作成
   - provider.tfファイルの作成とAWSプロバイダー設定
   - terraform initコマンドによる初期化
   - .gitignoreの設定（.terraform、*.tfstate等）

**演習課題:**
- Terraform CLIのインストールと動作確認
- AWS IAMユーザーの作成とアクセスキー生成
- 簡単なS3バケットを作成するTerraform設定の作成
- terraform plan/apply/destroyの実行と動作確認

---

### [2. HCL構文とTerraformの基本操作](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/aws-terraform/aws-terraform-learning-material-02.html)
TerraformのHCL構文を詳しく学び、変数、出力、ローカル値などの基本的な言語機能を習得します。

**学習目標:**
- HCL構文の基本を理解し、正しく記述できる
- 変数、出力、ローカル値を効果的に使用できる
- リソースの依存関係を理解し、制御できる
- Terraformのライフサイクルを理解する

**学習内容:**
1. **HCL構文の基本**
   - ブロックとアーギュメントの構造
   - 文字列、数値、ブール値、リスト、マップの型
   - 式と演算子（算術、論理、比較）
   - コメントの記述方法（#、//、/* */）
   - ヒアドキュメントの使用

2. **変数と出力**
   - 入力変数（variable）の定義と使用
   - 変数の型指定（string、number、bool、list、map、object）
   - デフォルト値とバリデーションルール
   - terraform.tfvarsファイルの使用
   - 出力値（output）の定義と参照

3. **ローカル値と式**
   - locals ブロックの定義と使用
   - 動的な式の評価
   - 条件式（condition ? true_val : false_val）
   - for式による反復処理
   - スプラット演算子（[*]）の使用

4. **リソースの依存関係とライフサイクル**
   - 暗黙的な依存関係と明示的な依存関係（depends_on）
   - リソースのライフサイクル管理
   - create_before_destroy、prevent_destroy、ignore_changes
   - リソースのタイムアウト設定

**演習課題:**
- 変数を使用したEC2インスタンスの作成
- 条件式を使った環境別リソース設定
- for_eachを使った複数リソースの作成
- outputを使用したリソース情報の表示

---

### [3. VPCとネットワークインフラの構築](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/aws-terraform/aws-terraform-learning-material-03.html)
TerraformでAWS VPCと関連するネットワークリソースを構築し、セキュアなネットワーク環境を設計します。

**学習目標:**
- VPCとサブネットを適切に設計・構築できる
- インターネットゲートウェイとNATゲートウェイを設定できる
- ルートテーブルとセキュリティグループを適切に設定できる
- ネットワークのベストプラクティスを理解する

**学習内容:**
1. **VPCの設計と構築**
   - VPC CIDR範囲の設計（10.0.0.0/16等）
   - aws_vpc リソースの作成
   - DNS設定（enable_dns_hostnames、enable_dns_support）
   - タグ付けのベストプラクティス

2. **サブネットの作成と管理**
   - パブリックサブネットとプライベートサブネットの設計
   - マルチAZ構成のサブネット配置
   - aws_subnet リソースの作成
   - cidrsubnet関数を使った動的なCIDR計算

3. **インターネット接続の設定**
   - Internet Gateway（IGW）の作成とアタッチ
   - NAT Gatewayの作成（高可用性考慮）
   - Elastic IPの割り当てと管理
   - VPCエンドポイントの活用（S3、DynamoDB）

4. **ルーティングとセキュリティ**
   - ルートテーブルの作成と関連付け
   - セキュリティグループの設計と実装
   - ネットワークACLの設定
   - VPCフローログの有効化

**演習課題:**
- 3層アーキテクチャ用VPCの構築（Web、App、DB層）
- 複数AZにまたがるサブネット構成
- セキュリティグループのルール設計
- VPCピアリング接続の実装

---

### [4. EC2インスタンスとコンピューティングリソース](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/aws-terraform/aws-terraform-learning-material-04.html)
EC2インスタンスの作成と管理、Auto ScalingやLoad Balancerの設定を通じて、スケーラブルなインフラを構築します。

**学習目標:**
- EC2インスタンスを効率的に管理できる
- Auto Scalingグループを設定できる
- Application Load Balancerを構築できる
- インスタンスのベストプラクティスを実装できる

**学習内容:**
1. **EC2インスタンスの作成と管理**
   - AMIの選択とデータソースの活用
   - インスタンスタイプの選択基準
   - キーペアの管理（既存使用 vs 新規作成）
   - ユーザーデータスクリプトの活用
   - EBSボリュームの設定とスナップショット

2. **インスタンスの高度な設定**
   - IAMロールの割り当て
   - インスタンスメタデータの活用
   - プレイスメントグループの使用
   - スポットインスタンスとオンデマンドの選択
   - インスタンスの監視設定（CloudWatch）

3. **Auto Scalingの実装**
   - Launch Templateの作成
   - Auto Scaling Groupの設定
   - スケーリングポリシーの定義
   - ヘルスチェックの設定
   - ライフサイクルフックの活用

4. **Load Balancerの構築**
   - Application Load Balancer（ALB）の作成
   - Target Groupの設定
   - リスナールールの定義
   - SSL/TLS証明書の設定（ACM活用）
   - ヘルスチェックの最適化

**演習課題:**
- Blue-Green デプロイメント対応のEC2構成
- Auto ScalingとALBを組み合わせた高可用性構成
- スポットインスタンスを活用したコスト最適化
- Systems Managerセッションマネージャーの設定

---

### [5. ストレージとデータベースサービス](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/aws-terraform/aws-terraform-learning-material-05.html)
S3バケット、RDSデータベース、DynamoDBテーブルなどのデータストレージサービスをTerraformで管理します。

**学習目標:**
- S3バケットを適切に設定・管理できる
- RDSインスタンスを構築・運用できる
- DynamoDBテーブルを設計・作成できる
- データのバックアップとレプリケーションを設定できる

**学習内容:**
1. **S3バケットの管理**
   - バケットの作成と命名規則
   - バージョニングとライフサイクルポリシー
   - 暗号化設定（SSE-S3、SSE-KMS、SSE-C）
   - バケットポリシーとアクセス制御
   - Static Website Hostingの設定
   - CloudFront連携の実装

2. **RDSデータベースの構築**
   - DBサブネットグループの作成
   - パラメータグループとオプショングループ
   - マルチAZ配置とリードレプリカ
   - 自動バックアップとスナップショット
   - Performance InsightsとEnhanced Monitoring
   - セキュリティグループとIAM認証

3. **DynamoDBテーブルの設計**
   - テーブルとインデックスの作成
   - プロビジョンドとオンデマンドキャパシティ
   - Auto Scalingの設定
   - ポイントインタイムリカバリ（PITR）
   - グローバルテーブルの設定
   - DynamoDB Streamsの有効化

4. **その他のストレージサービス**
   - EFSファイルシステムの作成
   - ElastiCacheクラスターの構築
   - Secrets Managerでの機密情報管理
   - Systems Manager Parameter Storeの活用

**演習課題:**
- S3バケットのクロスリージョンレプリケーション設定
- RDS MySQLの高可用性構成（マルチAZ + リードレプリカ）
- DynamoDBテーブルのグローバルセカンダリインデックス設計
- バックアップとディザスタリカバリ戦略の実装

---

### [6. IAMとセキュリティ管理](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/aws-terraform/aws-terraform-learning-material-06.html)
IAMロール、ポリシー、ユーザーの管理とセキュリティのベストプラクティスをTerraformで実装します。

**学習目標:**
- IAMロールとポリシーを適切に設計できる
- 最小権限の原則を実装できる
- クロスアカウントアクセスを設定できる
- セキュリティの監査とコンプライアンスを確保できる

**学習内容:**
1. **IAMユーザーとグループ管理**
   - IAMユーザーの作成と管理
   - グループの作成と権限割り当て
   - アクセスキーとコンソールアクセスの管理
   - MFA（多要素認証）の強制
   - パスワードポリシーの設定

2. **IAMロールとポリシー設計**
   - IAMロールの作成と信頼関係
   - カスタムポリシーの作成
   - AWS管理ポリシーの活用
   - ポリシー変数とコンディション
   - サービス連携ロール（EC2、Lambda等）

3. **アクセス制御のベストプラクティス**
   - 最小権限の原則の実装
   - リソースベースポリシーの活用
   - セッションポリシーの使用
   - 権限境界の設定
   - タグベースのアクセス制御（ABAC）

4. **監査とコンプライアンス**
   - CloudTrailの設定と監視
   - Config Rulesの実装
   - GuardDutyの有効化
   - Security Hubの活用
   - アクセスアナライザーの設定

**演習課題:**
- 開発・ステージング・本番環境のロール分離
- クロスアカウントアクセスの実装
- Lambda実行ロールの最小権限設定
- コンプライアンスチェックの自動化

---

### [7. Terraformステート管理とバックエンド](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/aws-terraform/aws-terraform-learning-material-07.html)
Terraformのステート管理、リモートバックエンド、ワークスペースを活用した環境管理を学習します。

**学習目標:**
- Terraformステートの仕組みを理解する
- S3バックエンドを適切に設定できる
- ステートロックとコラボレーションを実現できる
- ワークスペースを使った環境管理ができる

**学習内容:**
1. **Terraformステートの理解**
   - ステートファイルの構造と役割
   - ローカルステートのリスクと制限
   - ステートの操作（list、show、rm、mv）
   - ステートのインポートとエクスポート
   - センシティブデータの扱い

2. **S3リモートバックエンド設定**
   - S3バケットの作成と設定
   - DynamoDBテーブルによるステートロック
   - バックエンド設定の移行
   - バージョニングと暗号化
   - アクセス権限の設定

3. **ワークスペースの活用**
   - ワークスペースの作成と切り替え
   - 環境別のリソース管理
   - ワークスペース毎の変数設定
   - デフォルトワークスペースの扱い
   - ワークスペースのベストプラクティス

4. **ステート管理の高度なテクニック**
   - ステートの分割と統合
   - terraform refreshの使用
   - データソースを使った既存リソース参照
   - remote_stateデータソースの活用
   - ステートのバックアップとリカバリ

**演習課題:**
- S3 + DynamoDBバックエンドの構築
- 既存AWSリソースのインポート
- 複数環境のワークスペース管理
- ステート分割によるチーム開発対応

---

### [8. Terraformモジュールとコードの再利用](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/aws-terraform/aws-terraform-learning-material-08.html)
再利用可能なTerraformモジュールの設計と作成、モジュールレジストリの活用方法を学習します。

**学習目標:**
- 再利用可能なモジュールを設計できる
- モジュールの入出力を適切に定義できる
- プライベートモジュールレジストリを活用できる
- モジュールのバージョニングができる

**学習内容:**
1. **モジュールの基本概念**
   - モジュールとは何か
   - ルートモジュールと子モジュール
   - モジュールのディレクトリ構造
   - モジュールの呼び出し方法
   - ローカルモジュールとリモートモジュール

2. **モジュールの設計と実装**
   - 入力変数（variables.tf）の設計
   - 出力値（outputs.tf）の定義
   - メインロジック（main.tf）の実装
   - モジュールのドキュメント作成
   - examples/ディレクトリの活用

3. **モジュールの配布と利用**
   - Terraform Registryの活用
   - GitHubをモジュールソースとして使用
   - モジュールのバージョニング戦略
   - セマンティックバージョニング
   - モジュールの更新と互換性

4. **高度なモジュールパターン**
   - コンポジットモジュール
   - 条件付きリソース作成
   - 動的ブロックの活用
   - プロバイダーの継承と設定
   - モジュール間の依存関係管理

**演習課題:**
- VPCモジュールの作成と公開
- EC2 + ALBモジュールの開発
- RDSモジュールの作成（マルチAZ対応）
- モジュールを使った3層アーキテクチャ構築

---

### [9. CI/CDパイプラインとの統合](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/aws-terraform/aws-terraform-learning-material-09.html)
TerraformをGitHub Actions、GitLab CI、AWS CodePipelineなどのCI/CDツールと統合し、自動化を実現します。

**学習目標:**
- GitHub ActionsでTerraformを自動実行できる
- プルリクエストベースのワークフローを構築できる
- セキュアな認証情報管理ができる
- テストとバリデーションを自動化できる

**学習内容:**
1. **GitHub Actionsでの自動化**
   - ワークフローファイルの作成
   - Terraform Setupアクションの使用
   - plan結果のPRコメント投稿
   - 環境変数とシークレットの管理
   - OIDCを使ったAWS認証

2. **プルリクエストワークフロー**
   - フィーチャーブランチ戦略
   - terraform fmtの自動実行
   - terraform validateの検証
   - tflintとcheckovによる静的解析
   - 承認プロセスの実装

3. **デプロイメントパイプライン**
   - 環境別のデプロイメント戦略
   - 手動承認ゲートの実装
   - ロールバック戦略
   - Blue-Greenデプロイメント
   - カナリアリリースの実装

4. **テストとコンプライアンス**
   - Terratest によるインフラテスト
   - コスト見積もりの自動化（Infracost）
   - ポリシーas Code（Sentinel、OPA）
   - ドリフト検出の自動化
   - 監査ログの収集と分析

**演習課題:**
- GitHub ActionsでのTerraformワークフロー構築
- プルリクエスト時の自動plan実行
- 本番環境への承認付きデプロイ
- インフラテストの自動実行

---

### [10. 実践プロジェクトとベストプラクティス](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/aws-terraform/aws-terraform-learning-material-10.html)
実際のプロジェクトでTerraformを活用するためのベストプラクティスと、総合的な実践プロジェクトに取り組みます。

**学習目標:**
- エンタープライズレベルの構成を設計できる
- チーム開発のベストプラクティスを実装できる
- トラブルシューティングができる
- コスト最適化とパフォーマンス改善ができる

**学習内容:**
1. **プロジェクト構成のベストプラクティス**
   - ディレクトリ構造の設計
   - 命名規約とタグ付け戦略
   - 環境分離の手法（アカウント、ワークスペース、ディレクトリ）
   - モノレポ vs マルチレポ戦略
   - Terragruntの活用

2. **チーム開発とガバナンス**
   - ブランチ戦略とコードレビュー
   - ロールベースのアクセス制御
   - 変更管理プロセス
   - ドキュメンテーション標準
   - 知識共有とトレーニング

3. **パフォーマンスとコスト最適化**
   - 並列実行の最適化
   - リソースのタグ付けとコスト配分
   - スポットインスタンスとリザーブドインスタンス
   - 不要リソースの自動削除
   - コスト監視とアラート

4. **トラブルシューティングとメンテナンス**
   - 一般的なエラーと対処法
   - ステートの修復とリカバリ
   - プロバイダーのアップグレード
   - Breaking Changeへの対応
   - デバッグとログ分析

**総合演習プロジェクト:**
マイクロサービスアーキテクチャの完全な実装
- マルチ環境（開発、ステージング、本番）対応
- ECS/Fargateでのコンテナオーケストレーション
- API GatewayとLambda関数
- RDS AuroraとElastiCacheの統合
- CloudFrontによるCDN配信
- WAFとShieldによるセキュリティ強化
- CloudWatchとX-Rayによる監視
- CI/CDパイプライン完全自動化

## 学習の進め方

1. **基礎理解フェーズ（第1-2章）**
   - Terraformの概念とHCL構文を完全に理解する
   - 小規模なリソースで基本操作を習得する
   - エラーメッセージの読み方を学ぶ

2. **実装スキル習得フェーズ（第3-6章）**
   - 主要なAWSサービスをTerraformで管理する
   - リソース間の依存関係を理解する
   - セキュリティベストプラクティスを実装する

3. **高度な管理フェーズ（第7-8章）**
   - チーム開発に必要な機能を習得する
   - コードの再利用性を高める
   - 複雑な構成を管理できるようになる

4. **実践応用フェーズ（第9-10章）**
   - CI/CDパイプラインを構築する
   - 実際のプロジェクトに適用する
   - 継続的な改善とメンテナンスを行う

## 推奨学習期間

- **基礎習得コース** (1-4章): 2-3週間
  - 1日2-3時間の学習で、Terraformの基本とAWS主要サービスの管理を習得

- **実践活用コース** (5-8章): 3-4週間
  - 実際のインフラ構築経験を積み、チーム開発に必要なスキルを習得

- **上級マスターコース** (9-10章): 2-3週間
  - CI/CD統合と実践プロジェクトで、プロフェッショナルレベルのスキルを習得

## 関連リソース

### 公式リソース
- [Terraform公式チュートリアル](https://learn.hashicorp.com/terraform)
- [AWS Provider ドキュメント](https://registry.terraform.io/providers/hashicorp/aws/latest/docs)
- [Terraform Cloud](https://app.terraform.io/) - 商用版の機能と特徴

### コミュニティリソース
- [Awesome Terraform](https://github.com/shuaibiyy/awesome-terraform) - 厳選リソース集
- [Terraform Weekly](https://terraformweekly.com/) - 週刊ニュースレター
- [HashiCorp User Groups](https://www.meetup.com/pro/hugs/) - ローカルミートアップ

### 関連ガイドライン
- [AWS学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/aws/)
- [Docker学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/docker/)
- [Kubernetes学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/kubernetes/)
- [DevOps学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/development-processes/devops/)

## 学習目標

このガイドを完了すると、以下のスキルを身につけることができます：

- **Infrastructure as Code実践**
  - Terraformを使ってAWSインフラを完全にコード化できる
  - バージョン管理とコードレビューを通じた変更管理ができる

- **AWSリソース管理**
  - VPC、EC2、RDS、S3などの主要サービスをTerraformで管理できる
  - セキュリティとコンプライアンスを考慮した設計ができる

- **チーム開発対応**
  - モジュール化による再利用可能なコードを作成できる
  - リモートステートとワークスペースで複数環境を管理できる

- **自動化とCI/CD**
  - GitHub ActionsなどでTerraformを自動実行できる
  - テストとコンプライアンスチェックを自動化できる

- **トラブルシューティング**
  - Terraformのエラーを理解し、解決できる
  - ステートの問題を診断し、修復できる

## 次のステップ

このガイドライン完了後は、以下の学習に進むことをお勧めします：

- **[Kubernetes on AWS (EKS)](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/eks/)** - コンテナオーケストレーションの学習
- **[AWS CDK](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/aws-cdk/)** - プログラミング言語でのIaC実装
- **[Ansible](https://fcircle-biz.github.io/tech_docs/guide/development-processes/ansible/)** - 構成管理とアプリケーションデプロイ
- **[HashiCorp Vault](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/vault/)** - シークレット管理の高度化
- **[AWS認定資格](https://fcircle-biz.github.io/tech_docs/guide/certification/aws-solutions-architect/)** - AWS Solutions Architect資格取得