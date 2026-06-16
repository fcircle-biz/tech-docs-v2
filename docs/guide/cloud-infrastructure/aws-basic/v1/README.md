# AWS（Amazon Web Services）学習ガイドライン

このガイドラインでは、AWS（Amazon Web Services）の基礎から実践的な活用方法までを初心者向けに段階的に学習するためのカリキュラムを提供しています。クラウドコンピューティングの基本概念から、主要なAWSサービスの使い方、セキュリティのベストプラクティス、コスト最適化まで、実務で必要となるスキルを体系的に身につけることができます。

## 前提条件

### 必要な環境
- インターネット接続環境
- Webブラウザ（Chrome、Firefox、Safari、Edge等の最新版）
- メールアドレス（AWS アカウント作成用）
- クレジットカード（AWS アカウント登録用、無料利用枠内では課金されません）
- SSH クライアント（Windows: PuTTY、macOS/Linux: 標準搭載）
- テキストエディタ（Visual Studio Code 推奨）

### 参考リソース
- [AWS 公式サイト](https://aws.amazon.com/jp/) - AWS サービス全般の情報
- [AWS ドキュメント](https://docs.aws.amazon.com/ja_jp/) - 各種サービスの詳細ドキュメント
- [AWS 無料利用枠](https://aws.amazon.com/jp/free/) - 無料で試せるサービス一覧
- [AWS トレーニングと認定](https://aws.amazon.com/jp/training/) - 公式トレーニングリソース
- [AWS Well-Architected Framework](https://aws.amazon.com/jp/architecture/well-architected/) - アーキテクチャのベストプラクティス
- [AWS 料金計算ツール](https://calculator.aws/) - コスト見積もりツール

### 前提知識
- **必須**:
  - 基本的なコンピュータ操作スキル
  - インターネットとWebの基本的な仕組みの理解
  - コマンドライン（ターミナル）の基本操作
- **推奨**:
  - Linux の基本的なコマンド操作
  - ネットワークの基礎知識（IPアドレス、DNS、HTTP/HTTPSなど）
  - プログラミング経験（Python、Node.js、Java等のいずれか）

## 学習コンテンツ

### [1. AWS入門とアカウント設定](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/aws/aws-learning-material-01.html)
クラウドコンピューティングの基本概念とAWSの全体像を理解し、AWSアカウントを作成してマネジメントコンソールの基本操作を習得します。

**学習目標:**
- クラウドコンピューティングの基本概念と利点を理解する
- AWSのグローバルインフラストラクチャ（リージョン、アベイラビリティゾーン）を理解する
- AWSアカウントを作成し、セキュアに設定できる
- AWSマネジメントコンソールの基本操作を習得する

**学習内容:**
1. **クラウドコンピューティングとは**
   - オンプレミスとクラウドの違い
   - IaaS、PaaS、SaaSの理解
   - クラウドの6つの利点（コスト、速度、グローバル展開、スケーラビリティ、信頼性、セキュリティ）
   - クラウドの主要な活用シーン

2. **AWSの全体像**
   - AWSとは何か、その歴史と市場シェア
   - AWSが提供する200以上のサービス概要
   - AWSのグローバルインフラストラクチャ
   - リージョン、アベイラビリティゾーン、エッジロケーションの概念
   - 責任共有モデルの理解

3. **AWSアカウントの作成と初期設定**
   - AWSアカウントの作成手順
   - ルートユーザーとIAMユーザーの違い
   - 多要素認証（MFA）の設定
   - 請求アラートの設定
   - 無料利用枠の理解と活用方法

4. **AWSマネジメントコンソールの基本操作**
   - コンソールのナビゲーション
   - サービス検索とお気に入り登録
   - リージョンの選択と切り替え
   - AWS CLI と AWS SDK の概要
   - CloudShell の基本的な使い方

**演習課題:**
- AWSアカウントの作成とMFAの有効化
- 請求アラートと予算設定の構成
- 東京リージョン（ap-northeast-1）の選択とサービス一覧の確認
- CloudShell でのAWS CLI基本コマンドの実行

---

### [2. コンピューティングとネットワークの基礎（EC2・VPC）](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/aws/aws-learning-material-02.html)
AWSの仮想サーバーサービスであるEC2の基本から、仮想ネットワークであるVPCの設計・構築方法を学習します。

**学習目標:**
- EC2インスタンスを起動し、接続・管理できる
- セキュリティグループでファイアウォールを設定できる
- VPCを設計し、サブネット構成を理解する
- インターネットゲートウェイとルートテーブルを設定できる

**学習内容:**
1. **Amazon EC2（Elastic Compute Cloud）の基礎**
   - EC2とは：仮想サーバーの概念
   - インスタンスタイプの選び方（汎用、コンピューティング最適化、メモリ最適化等）
   - AMI（Amazon Machine Image）の理解
   - インスタンスの起動手順（コンソールから）
   - キーペアの作成と管理
   - EC2インスタンスへのSSH接続方法

2. **セキュリティグループの設定**
   - セキュリティグループとは（ステートフルなファイアウォール）
   - インバウンドルールとアウトバウンドルールの設定
   - ポート番号とプロトコルの理解（SSH: 22、HTTP: 80、HTTPS: 443）
   - 最小権限の原則に基づくルール設計
   - ソースIPアドレスの制限

3. **Amazon VPC（Virtual Private Cloud）**
   - VPCとは：プライベートな仮想ネットワーク
   - CIDR ブロックとIPアドレス範囲の設計
   - パブリックサブネットとプライベートサブネットの違い
   - サブネットの作成と配置（マルチAZ構成）
   - インターネットゲートウェイの設定
   - ルートテーブルの設定と関連付け

4. **ネットワーク設定の実践**
   - VPCウィザードを使った基本構成の作成
   - NAT ゲートウェイの理解（プライベートサブネットからのインターネットアクセス）
   - ネットワークACL（NACL）とセキュリティグループの違い
   - Elastic IP アドレスの割り当て
   - VPC フローログによるトラフィック監視

**演習課題:**
- 無料利用枠のt2.micro/t3.microインスタンスの起動
- SSH接続してWebサーバー（Apache/Nginx）のインストール
- カスタムVPCの作成（パブリック/プライベートサブネット構成）
- セキュリティグループによるHTTP/HTTPS通信の許可設定

---

### [3. ストレージサービス（S3・EBS）](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/aws/aws-learning-material-03.html)
AWSの主要なストレージサービスであるS3（オブジェクトストレージ）とEBS（ブロックストレージ）の特徴と使い方を学習します。

**学習目標:**
- S3バケットを作成し、オブジェクトの管理ができる
- S3のストレージクラスとライフサイクル管理を理解する
- EBSボリュームの作成とEC2インスタンスへのアタッチができる
- バックアップとスナップショットの作成ができる

**学習内容:**
1. **Amazon S3（Simple Storage Service）の基礎**
   - S3とは：オブジェクトストレージの概念
   - バケットとオブジェクトの理解
   - S3バケットの作成と命名規則
   - オブジェクトのアップロード・ダウンロード・削除
   - フォルダ構造の管理
   - バージョニング機能の活用

2. **S3のセキュリティとアクセス制御**
   - バケットポリシーとIAMポリシーの違い
   - パブリックアクセスのブロック設定
   - 署名付きURL（Pre-signed URL）の生成と活用
   - S3バケットの暗号化（SSE-S3、SSE-KMS）
   - アクセスログの有効化
   - CORS設定（クロスオリジンリソース共有）

3. **S3のストレージクラスとコスト最適化**
   - ストレージクラスの種類（Standard、Intelligent-Tiering、Glacier等）
   - ライフサイクルポリシーによる自動アーカイブ
   - S3インベントリとストレージレンズの活用
   - S3 Select と Glacier Select による効率的なデータ取得
   - マルチパートアップロードと Transfer Acceleration

4. **Amazon EBS（Elastic Block Store）**
   - EBSとは：ブロックストレージの概念
   - EBSボリュームタイプの選択（gp3、io2、st1、sc1）
   - EBSボリュームの作成とEC2へのアタッチ
   - ファイルシステムのフォーマットとマウント
   - EBSスナップショットによるバックアップ
   - スナップショットからのボリューム復元
   - EBS最適化インスタンスの理解

5. **その他のストレージサービス**
   - Amazon EFS（Elastic File System）：共有ファイルストレージ
   - AWS Storage Gateway：オンプレミスとの統合
   - Amazon FSx：マネージドファイルシステム
   - ストレージサービスの使い分け

**演習課題:**
- S3バケットの作成と静的ウェブサイトホスティングの設定
- ライフサイクルポリシーによる古いオブジェクトのGlacier移行
- EBSボリュームの作成、アタッチ、マウント
- EBSスナップショットの作成と別のアベイラビリティゾーンでの復元

---

### [4. データベースサービス（RDS・DynamoDB）](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/aws/aws-learning-material-04.html)
AWSが提供するマネージドデータベースサービス（RDS、DynamoDB）の特徴と使い方、データベース設計のベストプラクティスを学習します。

**学習目標:**
- RDSインスタンスを作成し、データベースに接続できる
- RDSのバックアップと復旧を理解し実行できる
- DynamoDBテーブルを作成し、基本的なCRUD操作ができる
- リレーショナルデータベースとNoSQLの使い分けを理解する

**学習内容:**
1. **Amazon RDS（Relational Database Service）の基礎**
   - RDSとは：マネージドリレーショナルデータベースサービス
   - 対応データベースエンジン（MySQL、PostgreSQL、Oracle、SQL Server、MariaDB、Aurora）
   - RDSインスタンスの作成手順
   - データベースエンジンとバージョンの選択
   - インスタンスクラスの選択（バーストタイプ vs. 標準）
   - ストレージの種類とサイズ設定

2. **RDSの運用と管理**
   - マルチAZ配置による高可用性
   - リードレプリカによる読み取りスケーリング
   - 自動バックアップとスナップショット
   - ポイントインタイムリカバリ
   - パラメータグループとオプショングループのカスタマイズ
   - RDSインスタンスへの接続方法（MySQL WorkbenchやpgAdmin等）
   - RDS Proxyの活用

3. **Amazon Aurora**
   - Aurora とは：AWS最適化されたデータベースエンジン
   - MySQL/PostgreSQL互換性
   - Auroraのアーキテクチャと性能特性
   - Auroraのストレージとレプリケーション
   - Aurora Serverless の概要とユースケース
   - Aurora Global Database による災害対策

4. **Amazon DynamoDB**
   - DynamoDBとは：フルマネージドNoSQLデータベース
   - テーブル、アイテム、属性の概念
   - プライマリキーの設計（パーティションキーとソートキー）
   - グローバルセカンダリインデックス（GSI）とローカルセカンダリインデックス（LSI）
   - キャパシティモード（オンデマンドvsプロビジョニング）
   - DynamoDB Streamsとイベント駆動アーキテクチャ
   - DynamoDB トランザクションとバッチ操作

5. **その他のデータベースサービス**
   - Amazon ElastiCache（Redis、Memcached）：インメモリキャッシュ
   - Amazon Neptune：グラフデータベース
   - Amazon DocumentDB：MongoDBコンパチブル
   - Amazon Timestream：時系列データベース
   - データベースサービスの選択基準

**演習課題:**
- MySQL RDSインスタンスの作成と接続
- サンプルデータベースの作成とSQLクエリの実行
- RDSスナップショットの作成と復元
- DynamoDBテーブルの作成とPython/Node.jsでのCRUD操作実装
- DynamoDBのクエリとスキャン操作の理解

---

### [5. ネットワークとコンテンツ配信（CloudFront・Route 53）](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/aws/aws-learning-material-05.html)
グローバルなコンテンツ配信を実現するCloudFrontと、DNSサービスであるRoute 53を使った高速で信頼性の高いネットワーク構成を学習します。

**学習目標:**
- CloudFrontディストリビューションを作成し、コンテンツ配信を高速化できる
- Route 53でドメインを管理し、DNSルーティングを設定できる
- ヘルスチェックとフェイルオーバーを構成できる
- SSL/TLS証明書の取得と適用ができる

**学習内容:**
1. **Amazon CloudFront**
   - CloudFrontとは：CDN（Content Delivery Network）の概念
   - エッジロケーションとリージョナルエッジキャッシュ
   - ディストリビューションの作成（Web、RTMP）
   - オリジンの設定（S3、EC2、ALB、カスタムオリジン）
   - キャッシュビヘイビアとTTL設定
   - CloudFrontとS3の統合によるウェブサイト配信
   - プライベートコンテンツの配信（署名付きURL、署名付きCookie）

2. **CloudFrontのセキュリティとパフォーマンス**
   - OAI（Origin Access Identity）によるS3バケットの保護
   - AWS WAF（Web Application Firewall）との統合
   - 地理的制限（Geo-Restriction）の設定
   - カスタムSSL証明書の利用
   - HTTP/2とHTTP/3のサポート
   - 圧縮とGzip/Brotli配信
   - Lambda@Edge によるエッジコンピューティング

3. **Amazon Route 53**
   - Route 53とは：スケーラブルなDNSサービス
   - ホストゾーンの作成（パブリックとプライベート）
   - レコードタイプ（A、AAAA、CNAME、MX、TXT等）
   - ドメインの登録と移管
   - Route 53 と他のAWSサービスの統合
   - エイリアスレコードの活用（CloudFront、ALB、S3等への直接ルーティング）

4. **ルーティングポリシー**
   - シンプルルーティング
   - 加重ルーティング（Weighted Routing）
   - レイテンシーベースルーティング
   - フェイルオーバールーティング
   - 地理的ルーティング（Geolocation）
   - 地理的近接性ルーティング（Geoproximity）
   - 複数値回答ルーティング

5. **高可用性とディザスタリカバリ**
   - ヘルスチェックの設定と監視
   - DNSフェイルオーバーの構成
   - マルチリージョン構成
   - アクティブ-アクティブ、アクティブ-パッシブ構成
   - Route 53トラフィックフローによる高度なルーティング

**演習課題:**
- S3静的ウェブサイトをCloudFrontで配信
- カスタムドメインとSSL証明書の設定
- Route 53でドメインを登録し、レコードを作成
- 複数リージョンのEC2インスタンスへのレイテンシーベースルーティング設定
- ヘルスチェックとフェイルオーバールーティングの構成

---

### [6. セキュリティとアクセス管理（IAM）](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/aws/aws-learning-material-06.html)
AWSにおける認証と認可の仕組みを理解し、IAMを使ったセキュアなアクセス制御、暗号化、コンプライアンスのベストプラクティスを学習します。

**学習目標:**
- IAMユーザー、グループ、ロールを適切に作成・管理できる
- 最小権限の原則に基づいたポリシーを設計できる
- 多要素認証（MFA）を設定し、セキュリティを強化できる
- AWS のセキュリティサービスを理解し活用できる

**学習内容:**
1. **AWS IAM（Identity and Access Management）の基礎**
   - IAMとは：認証と認可の仕組み
   - ルートユーザーとIAMユーザーの違い
   - IAMユーザーの作成とアクセスキーの管理
   - IAMグループによる権限のグループ化
   - IAMポリシーの構造（JSON形式）
   - マネージドポリシーとインラインポリシー
   - ポリシーシミュレーターによる権限テスト

2. **IAMロールとサービス間連携**
   - IAMロールとは：一時的な認証情報
   - EC2インスタンスロールの活用
   - クロスアカウントアクセス
   - サービスロールとサービスリンクロール
   - AssumeRole による権限の委任
   - IAM Identity Center (AWS SSO) の概要
   - 外部IDプロバイダーとのフェデレーション

3. **セキュリティのベストプラクティス**
   - 最小権限の原則（Least Privilege）
   - 多要素認証（MFA）の有効化
   - アクセスキーのローテーション
   - パスワードポリシーの設定
   - IAM Access Analyzer による未使用権限の検出
   - AWS CloudTrail によるAPI呼び出しの監査
   - 責任共有モデルの理解

4. **データ保護と暗号化**
   - AWS KMS（Key Management Service）による暗号鍵管理
   - カスタマー管理キーとAWS管理キー
   - S3、EBS、RDSの暗号化
   - AWS Certificate Manager（ACM）によるSSL/TLS証明書管理
   - AWS Secrets Manager によるシークレット管理
   - AWS Systems Manager Parameter Store

5. **セキュリティ監視とコンプライアンス**
   - AWS Security Hub：統合セキュリティダッシュボード
   - Amazon GuardDuty：脅威検出サービス
   - AWS Config：リソース設定の記録と評価
   - Amazon Inspector：脆弱性評価
   - AWS WAF：Webアプリケーションファイアウォール
   - AWS Shield：DDoS保護
   - AWS Artifact：コンプライアンスレポート

**演習課題:**
- IAMユーザーとグループの作成、カスタムポリシーの適用
- EC2インスタンスロールを使ったS3へのアクセス設定
- MFAの有効化とアクセスキーのローテーション
- KMSによるS3バケットの暗号化
- CloudTrailログの確認とセキュリティイベントの分析

---

### [7. 監視と運用管理（CloudWatch・CloudTrail）](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/aws/aws-learning-material-07.html)
AWSリソースの監視、ログ管理、アラート設定、自動化による運用効率化の方法を学習します。

**学習目標:**
- CloudWatchでメトリクスを監視し、アラームを設定できる
- CloudWatch Logsでログを集約・分析できる
- CloudTrailでAPI呼び出しを監査できる
- 自動化により運用タスクを効率化できる

**学習内容:**
1. **Amazon CloudWatch の基礎**
   - CloudWatchとは：監視とオブザーバビリティサービス
   - メトリクスの種類（標準メトリクスとカスタムメトリクス）
   - ダッシュボードの作成とカスタマイズ
   - メトリクスのグラフ化と期間指定
   - 名前空間とディメンションの理解
   - CloudWatch統合による各サービスの監視
   - CloudWatch Contributor Insights

2. **CloudWatch Alarms とイベント**
   - アラームの作成と閾値設定
   - アラームアクション（SNS通知、Auto Scaling、EC2アクション）
   - 複合アラームによる複雑な条件設定
   - アラームの状態（OK、ALARM、INSUFFICIENT_DATA）
   - Amazon SNS（Simple Notification Service）との統合
   - メール、SMS、Lambdaへの通知

3. **CloudWatch Logs**
   - ロググループとログストリームの概念
   - EC2、Lambda、ECSからのログ収集
   - CloudWatch Logs Agentのインストールと設定
   - ログの検索とフィルタリング
   - メトリクスフィルタによるカスタムメトリクス作成
   - Logs Insightsによる高度なログクエリ
   - ログの保持期間設定とS3へのエクスポート

4. **AWS CloudTrail**
   - CloudTrailとは：API呼び出しの監査ログサービス
   - トレイルの作成と設定
   - 管理イベントとデータイベント
   - CloudTrailログの分析
   - AWS Config との統合
   - セキュリティ監査とコンプライアンス
   - CloudTrail Insightsによる異常検出

5. **運用自動化とその他の管理サービス**
   - AWS Systems Manager：統合運用管理サービス
   - Session Manager：ブラウザベースのシェルアクセス
   - Patch Manager：パッチ管理の自動化
   - State Manager：設定管理
   - Automation：運用タスクの自動化
   - AWS Trusted Advisor：ベストプラクティスチェック
   - AWS Personal Health Dashboard：サービス健全性の確認

**演習課題:**
- EC2のCPU使用率監視アラームの作成とSNS通知設定
- カスタムダッシュボードでの複数リソースの一元監視
- CloudWatch Logsを使ったアプリケーションログの集約
- CloudTrailログの有効化と特定APIアクションの追跡
- Systems Manager Session Manager によるセキュアなEC2アクセス

---

### [8. サーバーレスコンピューティング（Lambda・API Gateway）](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/aws/aws-learning-material-08.html)
サーバー管理不要のサーバーレスアーキテクチャを学び、Lambda関数の作成からAPI Gateway、イベント駆動型アーキテクチャまでを実装します。

**学習目標:**
- Lambda関数を作成し、イベント駆動で実行できる
- API Gatewayでサーバーレスなバックエンドを構築できる
- S3、DynamoDB、SNSなどとLambdaを連携できる
- サーバーレスアーキテクチャの設計パターンを理解する

**学習内容:**
1. **AWS Lambda の基礎**
   - Lambdaとは：サーバーレスコンピューティングの概念
   - Lambda関数の作成とデプロイ
   - ランタイムの選択（Python、Node.js、Java、Go等）
   - 関数の設定（メモリ、タイムアウト、環境変数）
   - 実行ロールとIAMポリシー
   - Lambda関数のテストとデバッグ
   - CloudWatch Logsでのログ確認

2. **Lambdaのトリガーとイベントソース**
   - S3イベントトリガー（オブジェクト作成時に処理）
   - DynamoDB Streamsとの統合
   - SNS、SQSからのイベント処理
   - API Gateway HTTPリクエストの処理
   - CloudWatch EventsとEventBridgeによるスケジュール実行
   - Kinesisストリームの処理
   - イベントソースマッピングの設定

3. **Amazon API Gateway**
   - API Gatewayとは：フルマネージドAPIサービス
   - REST APIとHTTP APIの違い
   - APIの作成とリソース・メソッドの定義
   - Lambdaプロキシ統合
   - リクエスト・レスポンスの変換とマッピング
   - APIキーと使用量プランによる制限
   - CORSの設定
   - ステージとデプロイ管理

4. **サーバーレスアプリケーションの構築**
   - サーバーレスアーキテクチャの設計パターン
   - API Gateway + Lambda + DynamoDB の3層構成
   - 認証・認可（Amazon Cognito、カスタムオーソライザー）
   - AWS SAM（Serverless Application Model）の概要
   - SAMテンプレートによるインフラストラクチャ定義
   - ローカル開発とテスト
   - CI/CD パイプラインの構築

5. **サーバーレスのベストプラクティス**
   - コールドスタート対策
   - 関数の適切なサイズとメモリ設定
   - Lambda Layersによるコード共有
   - 環境変数とSecrets Managerの活用
   - エラーハンドリングとリトライ設定
   - Dead Letter Queue（DLQ）の設定
   - X-Rayによる分散トレーシング
   - コスト最適化のヒント

**演習課題:**
- Hello Worldラムダ関数の作成とテスト
- S3にファイルアップロード時に画像をサムネイル化するLambda関数
- API Gateway + Lambda でRESTful APIの構築
- DynamoDBと連携したCRUD APIの実装
- EventBridgeによる定期実行バッチ処理の実装

---

### [9. コンテナサービス（ECS・EKS）](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/aws/aws-learning-material-09.html)
コンテナ技術とAWSのコンテナオーケストレーションサービス（ECS、EKS）を学び、マイクロサービスアーキテクチャの実装を習得します。

**学習目標:**
- Dockerの基本を理解し、コンテナイメージを作成できる
- ECSでコンテナアプリケーションをデプロイできる
- ECRでコンテナイメージを管理できる
- EKSの基本を理解し、Kubernetesの基礎を学ぶ

**学習内容:**
1. **コンテナ技術の基礎**
   - コンテナとは：仮想マシンとの違い
   - Docker の基本概念（イメージ、コンテナ、レジストリ）
   - Dockerfileの作成とベストプラクティス
   - マルチステージビルドによるイメージサイズ最適化
   - ローカルでのコンテナ開発とテスト
   - コンテナのメリット（移植性、効率性、スケーラビリティ）

2. **Amazon ECR（Elastic Container Registry）**
   - ECRとは：フルマネージドコンテナレジストリ
   - ECRリポジトリの作成
   - Docker イメージのプッシュとプル
   - イメージのタグ管理とライフサイクルポリシー
   - イメージスキャンによる脆弱性検出
   - プライベートレジストリとパブリックレジストリ
   - クロスリージョンレプリケーション

3. **Amazon ECS（Elastic Container Service）**
   - ECSとは：コンテナオーケストレーションサービス
   - ECSの主要コンポーネント（クラスター、タスク定義、サービス）
   - 起動タイプ（EC2とFargate）の違い
   - タスク定義の作成（コンテナ設定、リソース割り当て）
   - ECSサービスの作成とデプロイ
   - Application Load Balancer（ALB）との統合
   - Auto Scalingによる自動スケーリング
   - ECS Exec によるコンテナへのアクセス

4. **AWS Fargate**
   - Fargateとは：サーバーレスコンテナ実行環境
   - EC2起動タイプとの比較
   - Fargateタスクの作成と実行
   - ネットワーキング設定（VPC、セキュリティグループ）
   - コスト最適化（Fargate Spot）
   - Fargate Ephemeral Storage の活用

5. **Amazon EKS（Elastic Kubernetes Service）**
   - Kubernetesの基本概念（Pod、Service、Deployment、Namespace）
   - EKSクラスターの作成
   - kubectlによるクラスター操作
   - ワーカーノードの管理（マネージドノードグループ、Fargate）
   - AWS Load Balancer Controller
   - EKSとIAMの統合（IRSA: IAM Roles for Service Accounts）
   - Helmチャートによるアプリケーション管理
   - EKSのロギングとモニタリング

**演習課題:**
- Dockerfileからコンテナイメージをビルドし、ECRにプッシュ
- ECS FargateでWebアプリケーションをデプロイ
- ALBと統合したECSサービスの構築
- EKSクラスターの作成とサンプルアプリケーションのデプロイ
- コンテナの自動スケーリング設定

---

### [10. ベストプラクティスとコスト最適化](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/aws/aws-learning-material-10.html)
AWS Well-Architected Frameworkに基づくベストプラクティス、コスト最適化手法、アーキテクチャ設計のパターンを学習します。

**学習目標:**
- AWS Well-Architected Frameworkの5つの柱を理解する
- コスト最適化の手法を実践できる
- 高可用性と災害対策のアーキテクチャを設計できる
- AWSの各種サービスを組み合わせた実践的なシステムを構築できる

**学習内容:**
1. **AWS Well-Architected Framework**
   - Well-Architectedフレームワークとは
   - **運用の優秀性（Operational Excellence）**：運用プロセスの管理と改善
   - **セキュリティ（Security）**：データ保護と権限管理
   - **信頼性（Reliability）**：障害からの回復とスケーラビリティ
   - **パフォーマンス効率（Performance Efficiency）**：リソースの効率的な利用
   - **コスト最適化（Cost Optimization）**：不要なコストの削減
   - **持続可能性（Sustainability）**：環境への影響の最小化（第6の柱）
   - Well-Architected Toolによる自己評価

2. **コスト最適化戦略**
   - AWS Cost Explorer による支出分析
   - AWS Budgets による予算管理とアラート
   - リザーブドインスタンスとSavings Plans
   - スポットインスタンスの活用
   - 適切なインスタンスサイジング（Right Sizing）
   - 不使用リソースの特定と削除
   - S3ストレージクラスの最適化
   - データ転送コストの削減
   - タグによるコスト配分（Cost Allocation Tags）

3. **高可用性とディザスタリカバリ**
   - マルチAZ構成とマルチリージョン構成
   - RPO（Recovery Point Objective）とRTO（Recovery Time Objective）
   - バックアップとリカバリ戦略
   - DRパターン（Backup & Restore、Pilot Light、Warm Standby、Multi-Site）
   - Elastic Load Balancing（ALB、NLB、CLB）
   - Auto Scaling Group による自動復旧
   - Route 53 ヘルスチェックとフェイルオーバー
   - クロスリージョンレプリケーション

4. **パフォーマンスとスケーラビリティ**
   - キャッシング戦略（CloudFront、ElastiCache、DAX）
   - データベースのパフォーマンスチューニング
   - 読み取り/書き込みの分離（リードレプリカ）
   - 非同期処理とキューイング（SQS、SNS）
   - マイクロサービスアーキテクチャ
   - イベント駆動アーキテクチャ
   - サーバーレスによるスケーラビリティ

5. **実践的なアーキテクチャパターン**
   - **3層Webアプリケーション**：フロントエンド、アプリケーション、データベース
   - **サーバーレスアーキテクチャ**：API Gateway + Lambda + DynamoDB
   - **マイクロサービス**：コンテナベースの分散システム
   - **データレイク**：S3 + Glue + Athena + QuickSight
   - **ハイブリッドクラウド**：Direct Connect、VPN、Storage Gateway
   - **CI/CD パイプライン**：CodePipeline、CodeBuild、CodeDeploy
   - **監視と運用**：CloudWatch、X-Ray、Systems Manager

6. **AWSのガバナンスとマルチアカウント戦略**
   - AWS Organizations による複数アカウント管理
   - Service Control Policies（SCP）
   - AWS Control Tower による自動化されたアカウント設定
   - リソースの命名規則とタグ戦略
   - コンプライアンスとガバナンス
   - FinOps の概念と実践

**最終プロジェクト:**
以下の要件を満たす実践的なWebアプリケーションを設計・構築する：
- マルチAZ構成による高可用性
- Auto Scaling による自動スケーリング
- RDSまたはDynamoDBによるデータ永続化
- CloudFrontによるコンテンツ配信
- Route 53によるDNS管理
- IAMによる適切なアクセス制御
- CloudWatchによる監視とアラート
- コスト見積もりとコスト最適化計画
- アーキテクチャ図とドキュメントの作成

## 学習の進め方

1. **無料利用枠の活用**: AWSは12ヶ月間の無料利用枠を提供しています。学習初期はこれを最大限活用し、コストを抑えながら実践的に学びましょう。

2. **実際に手を動かす**: 読むだけでなく、必ず実際にAWSマネジメントコンソールで操作し、リソースを作成してください。体験が最も効果的な学習方法です。

3. **小さく始めて段階的に拡張**: 最初はシンプルな構成から始め、徐々に複雑なアーキテクチャに挑戦しましょう。

4. **リソースの削除を忘れない**: 演習後は必ずリソースを削除し、予期しない課金を防ぎましょう。特にEC2、RDS、NAT Gatewayは注意が必要です。

5. **コスト管理**: AWS Budgetsで予算アラートを設定し、Cost Explorerで定期的に支出を確認しましょう。

6. **公式ドキュメントの活用**: AWS公式ドキュメントは非常に充実しています。困ったときは必ず公式ドキュメントを参照する習慣をつけましょう。

7. **AWSコミュニティへの参加**: JAWS-UG（Japan AWS User Group）などのコミュニティに参加し、情報交換や質問をしましょう。

8. **認定資格の取得**: 学習の到達点として、AWS認定資格（クラウドプラクティショナー、ソリューションアーキテクト-アソシエイト等）の取得を目指すのも効果的です。

## 推奨学習期間

- **基礎コース** (1-3章): 3-4週間（週10-15時間の学習を想定）
- **中級コース** (4-7章): 4-6週間（週10-15時間の学習を想定）
- **応用コース** (8-10章): 4-5週間（週10-15時間の学習を想定）
- **合計学習期間**: 11-15週間（約3-4ヶ月）

学習ペースは個人のバックグラウンドにより異なります。IT基盤の知識がある方はより速く進められますが、初心者の方は焦らず基礎を固めることを優先しましょう。

## 関連リソース

### チートシート
- [AWS CLI チートシート](https://fcircle-biz.github.io/tech_docs/cheatsheet/aws/aws-cli-cheatsheet.html)
- [AWS サービス選択チートシート](https://fcircle-biz.github.io/tech_docs/cheatsheet/aws/aws-service-selection-cheatsheet.html)

### 関連ガイド
- [Docker学習ガイドライン](../docker/README.md) - コンテナ技術の詳細
- [Linux基礎ガイドライン](../../os-device/linux/README.md) - LinuxコマンドとEC2運用
- [Python学習ガイドライン](../../python-ecosystem/python/README.md) - Lambda関数開発

### 公式リソース
- [AWS Skill Builder](https://skillbuilder.aws/) - 無料のオンライン学習プラットフォーム
- [AWS ハンズオン](https://aws.amazon.com/jp/getting-started/hands-on/) - 実践的なチュートリアル集
- [AWS ホワイトペーパー](https://aws.amazon.com/jp/whitepapers/) - アーキテクチャとベストプラクティス
- [AWS アーキテクチャセンター](https://aws.amazon.com/jp/architecture/) - リファレンスアーキテクチャ

### AWS認定資格
- [AWS Certified Cloud Practitioner](https://aws.amazon.com/jp/certification/certified-cloud-practitioner/) - 入門レベル
- [AWS Certified Solutions Architect – Associate](https://aws.amazon.com/jp/certification/certified-solutions-architect-associate/) - 実務レベル
- [AWS Certified Developer – Associate](https://aws.amazon.com/jp/certification/certified-developer-associate/) - 開発者向け

### コミュニティ
- [JAWS-UG](https://jaws-ug.jp/) - 日本AWSユーザーグループ
- [AWS re:Post](https://repost.aws/) - AWS公式Q&Aコミュニティ

## 学習目標

このガイドを完了すると、以下のスキルを身につけることができます：

### 基本スキル
- AWSアカウントの作成とセキュアな運用
- EC2インスタンスの起動と管理
- VPCによるネットワーク設計
- S3によるオブジェクトストレージの活用
- RDS/DynamoDBによるデータベース管理
- IAMによるアクセス制御とセキュリティ管理

### 中級スキル
- CloudFront と Route 53 による高速で信頼性の高いコンテンツ配信
- CloudWatch と CloudTrail による監視とログ管理
- Lambda と API Gateway によるサーバーレスアーキテクチャ構築
- ECS/EKS によるコンテナベースのアプリケーション実行
- マルチAZ構成による高可用性の実現

### 応用スキル
- AWS Well-Architected Framework に基づくアーキテクチャ設計
- コスト最適化とリソース管理
- 災害対策（DR）とバックアップ戦略
- マイクロサービスアーキテクチャの設計と実装
- CI/CD パイプラインの構築
- 複数AWSサービスを組み合わせた実践的なシステム構築

### 業務で活用できる力
- ビジネス要件に基づいたAWSアーキテクチャの提案
- 既存システムのクラウドマイグレーション計画
- セキュリティとコンプライアンスを考慮したシステム設計
- コストを意識した効率的なリソース活用
- 運用自動化とモニタリングの実装

## 次のステップ

このガイドライン完了後は、以下の学習に進むことをお勧めします：

### より高度なAWSスキル
- [AWS認定ソリューションアーキテクト-プロフェッショナル対策](../certification/aws-sap/README.md) - 上級認定資格
- [AWS上級ネットワーク設計](../cloud-infrastructure/aws-advanced-networking/README.md) - Transit Gateway、Direct Connect等
- [AWS DevOps エンジニア向けガイド](../cloud-infrastructure/aws-devops/README.md) - CI/CD、インフラストラクチャ as Code

### 関連技術
- [Terraformによるインフラストラクチャ as Code](../cloud-infrastructure/terraform/README.md) - IaCツールでのAWS管理
- [Kubernetes完全ガイド](../cloud-infrastructure/kubernetes/README.md) - EKSの深い理解
- [Docker実践ガイド](../cloud-infrastructure/docker/README.md) - コンテナ技術の詳細

### アプリケーション開発
- [Python/FastAPIでのサーバーレスAPI開発](../../python-ecosystem/fastapi/README.md)
- [Node.js/Express での API 開発](../../javascript-ecosystem/nodejs/README.md)
- [React によるモダンWebアプリ開発](../../javascript-ecosystem/react/README.md)

### データ分析とAI/ML
- [AWS上でのデータ分析基盤構築](../data-analytics/aws-data-platform/README.md)
- [AWS SageMaker による機械学習](../ai-ml/aws-sagemaker/README.md)

---

## 始めてみよう

準備ができたら、さっそく[第1章：AWS入門とアカウント設定](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/aws/aws-learning-material-01.html)から始めてみましょう！

### 最初の一歩

1. **AWSアカウントの作成**: https://aws.amazon.com/jp/ にアクセスして無料アカウントを作成
2. **請求アラートの設定**: コスト管理のため、まず請求アラートを設定
3. **MFAの有効化**: セキュリティ強化のため、ルートユーザーにMFAを設定
4. **最初のEC2インスタンス起動**: 無料利用枠内でWebサーバーを立ち上げてみましょう

### 学習のヒント

- **失敗を恐れない**: AWSは何度でもやり直せます。削除して再作成することで理解が深まります
- **小さな成功を積み重ねる**: 最初は簡単なタスクから始め、徐々に複雑なシステムに挑戦しましょう
- **アーキテクチャ図を描く**: 構築したシステムの構成図を描くことで理解が深まります
- **公式ドキュメントを読む習慣**: 最も正確で最新の情報は公式ドキュメントにあります

このガイドがあなたのAWS学習の第一歩として、実務で活躍できるクラウドエンジニアへの成長に貢献できることを願っています。

**学習開始日**: _______________

**学習の目標**: _______________

**構築したいシステム**: _______________

---

最終更新日: 2025-10-29
