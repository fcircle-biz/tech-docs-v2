# AWS SAP-C02入門 学習ガイドライン

このガイドラインでは、AWS基礎（EC2・S3・RDS・VPC）を習得済みの方を対象に、Auto Scaling、Elastic Load Balancing（ELB）、Route 53などのインフラ志向サービスを体系的に学習し、**Solutions Architect Professional（SAP-C02）資格取得**に向けた知識基盤を構築します。

---

## このガイドの位置づけ

```
AWS学習パス（インフラ志向ルート）

[AWS基礎編] ─────────────────────────────────────────────────┐
│ EC2, S3, RDS, VPC, IAM, CloudWatch, Lambda               │
│ (aws-basic: 12章)                                        │
└──────────────────────────────────────────────────────────┘
                           ↓
┌──────────────────────────────────────────────────────────┐
│ [本ガイド] AWS SAP-C02入門                               │ ← 現在地
│ Auto Scaling, ELB, Route 53, CloudFront, 高可用性設計    │
│ (aws-sap-c02-intro: 15章)                                    │
└──────────────────────────────────────────────────────────┘
                           ↓
┌──────────────────────────────────────────────────────────┐
│ [上級編] AWS SAP試験対策・実践アーキテクチャ設計         │
│ マルチアカウント戦略, 移行戦略, コスト最適化             │
└──────────────────────────────────────────────────────────┘
```

---

## 前提条件

### 必要な環境
- AWSアカウント（無料利用枠対応）
- AWS CLI v2がインストールされた環境
- パソコン（Windows、Mac、Linux いずれも可）
- Webブラウザ（Chrome、Firefox、Edge 推奨）
- テキストエディタ（VS Code推奨）

### 参考リソース
- [AWS公式ドキュメント（日本語）](https://docs.aws.amazon.com/ja_jp/)
- [AWS Well-Architected Framework](https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html)
- [AWS Solutions Architect Professional 試験ガイド](https://aws.amazon.com/jp/certification/certified-solutions-architect-professional/)
- [AWS Skill Builder](https://skillbuilder.aws/)

### 前提知識
- **必須**:
  - AWS基礎サービスの理解と操作経験（EC2、S3、RDS、VPC）
  - IAMによるアクセス管理の基本
  - AWSマネジメントコンソールの基本操作
  - [AWS入門ガイドライン](../aws-basic/README.md)の履修または同等の知識
- **推奨**:
  - LinuxコマンドラインとSSH接続の基本
  - ネットワークの基礎知識（TCP/IP、DNS、HTTP/HTTPS）
  - JSONまたはYAMLの基本構文
- **あると良い**:
  - Terraformまたは CloudFormation の経験
  - プログラミング経験（Python、JavaScript等）

---

## 学習コンテンツ

### [1. Solutions Architect Professionalへの道 - 試験概要と学習戦略](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/aws-sap-c02-intro/aws-sap-c02-intro-learning-material-01.html)
SAP-C02試験の全体像を把握し、効果的な学習計画を立てます。試験範囲、出題傾向、合格に必要なスキルセットを理解します。

**この章で学ぶこと:**
- SAP-C02試験の構成と出題分野
- Associate資格とProfessional資格の違い
- 試験で問われる設計思考パターン
- 効果的な学習ロードマップの作成
- 公式学習リソースの活用方法

---

### [2. 高可用性設計の基礎 - 単一障害点の排除](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/aws-sap-c02-intro/aws-sap-c02-intro-learning-material-02.html)
エンタープライズシステムに求められる高可用性（HA）設計の基本原則を学びます。

**この章で学ぶこと:**
- 可用性の定義と測定指標（SLA、RTO、RPO）
- 単一障害点（SPOF）の特定と排除
- マルチAZ構成の設計原則
- アクティブ-アクティブ vs アクティブ-スタンバイ
- 障害ドメインとブラスト半径の概念

**キーサービス:** リージョン、アベイラビリティゾーン

---

### [3. Elastic Load Balancing (ELB) - 負荷分散の設計と実装](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/aws-sap-c02-intro/aws-sap-c02-intro-learning-material-03.html)
トラフィックを複数のターゲットに分散するELBの仕組みと、用途に応じた選択基準を習得します。

**この章で学ぶこと:**
- ロードバランサーの種類と選択基準（ALB、NLB、GLB、CLB）
- ターゲットグループとヘルスチェック設計
- スティッキーセッションとセッション管理
- SSL/TLS終端とセキュリティ設定
- クロスゾーン負荷分散の仕組み
- Connection Drainingとデプロイ戦略

**キーサービス:** Application Load Balancer, Network Load Balancer, Gateway Load Balancer

---

### [4. Auto Scaling - 需要に応じた自動スケーリング](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/aws-sap-c02-intro/aws-sap-c02-intro-learning-material-04.html)
トラフィックの変動に応じてリソースを自動調整するAuto Scalingの設計パターンを学びます。

**この章で学ぶこと:**
- Auto Scalingグループの構成要素
- 起動テンプレートと起動設定の違い
- スケーリングポリシーの種類（ターゲット追跡、ステップ、シンプル）
- スケジュールベーススケーリング
- 予測スケーリングの活用
- ウォームプールとインスタンスのライフサイクル
- スポットインスタンスとの統合

**キーサービス:** EC2 Auto Scaling, Application Auto Scaling

---

### [5. Route 53 - DNSとトラフィック管理](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/aws-sap-c02-intro/aws-sap-c02-intro-learning-material-05.html)
Route 53を使用したDNS管理とトラフィックルーティングの高度な設計手法を習得します。

**この章で学ぶこと:**
- DNSの基礎とRoute 53の役割
- レコードタイプの使い分け（A、AAAA、CNAME、Alias）
- ルーティングポリシーの種類と選択基準
  - シンプル、加重、レイテンシー、位置情報、地理的近接性、フェイルオーバー、複数値
- ヘルスチェックとDNSフェイルオーバー
- プライベートホストゾーンとVPC統合
- Route 53 Resolverとハイブリッド環境

**キーサービス:** Route 53, Route 53 Resolver

---

### [6. CloudFront - グローバルコンテンツ配信](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/aws-sap-c02-intro/aws-sap-c02-intro-learning-material-06.html)
CloudFrontを使用したCDN設計と、パフォーマンス最適化の手法を学びます。

**この章で学ぶこと:**
- CDNの仕組みとエッジロケーション
- オリジンの種類（S3、ALB、カスタムオリジン）
- キャッシュ動作とTTL設定
- オリジンアクセスコントロール（OAC）
- Lambda@EdgeとCloudFront Functions
- 署名付きURLと署名付きCookie
- WAF統合とセキュリティ設定

**キーサービス:** CloudFront, Lambda@Edge, CloudFront Functions

---

### [7. Global Accelerator - グローバルアプリケーションの高速化](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/aws-sap-c02-intro/aws-sap-c02-intro-learning-material-07.html)
Global Acceleratorを使用したグローバルアプリケーションのパフォーマンス最適化を学びます。

**この章で学ぶこと:**
- Global AcceleratorとCloudFrontの違い
- Anycast IPアドレスとAWSグローバルネットワーク
- エンドポイントグループとトラフィックダイヤル
- ヘルスチェックと自動フェイルオーバー
- クライアントIPアドレスの保持
- ユースケースと選択基準

**キーサービス:** AWS Global Accelerator

---

### [8. 高度なVPC設計 - エンタープライズネットワーキング](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/aws-sap-c02-intro/aws-sap-c02-intro-learning-material-08.html)
大規模環境に対応するVPCの高度な設計パターンを習得します。

**この章で学ぶこと:**
- VPCピアリングとその制限事項
- Transit Gatewayによるハブ&スポーク構成
- VPCエンドポイント（Gateway、Interface）
- PrivateLinkによるサービス公開
- VPC Flow Logsとネットワーク分析
- NATゲートウェイの高可用性設計
- ネットワークACLとセキュリティグループの使い分け

**キーサービス:** VPC, Transit Gateway, VPC Endpoint, PrivateLink

---

### [9. ハイブリッドクラウド接続 - オンプレミス統合](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/aws-sap-c02-intro/aws-sap-c02-intro-learning-material-09.html)
オンプレミス環境とAWSを安全に接続するハイブリッドアーキテクチャを設計します。

**この章で学ぶこと:**
- Site-to-Site VPNの設計と冗長化
- Direct Connectの接続オプション
- Direct Connect Gateway
- Transit VIFとプライベートVIF
- VPN over Direct Connect（暗号化）
- ハイブリッドDNS設計
- 帯域幅とレイテンシーの考慮事項

**キーサービス:** Site-to-Site VPN, Direct Connect, Direct Connect Gateway

---

### [10. データベースの高可用性と災害復旧](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/aws-sap-c02-intro/aws-sap-c02-intro-learning-material-10.html)
RDS、Aurora、DynamoDBの高可用性設計と災害復旧戦略を学びます。

**この章で学ぶこと:**
- RDSマルチAZ構成の仕組み
- Aurora Global DatabaseとAuroraレプリカ
- RDSプロキシによる接続管理
- DynamoDBグローバルテーブル
- クロスリージョンレプリケーション
- バックアップ戦略とポイントインタイムリカバリ
- 災害復旧のRTO/RPO設計

**キーサービス:** RDS, Aurora, DynamoDB, RDS Proxy

---

### [11. ストレージの高可用性とデータ保護](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/aws-sap-c02-intro/aws-sap-c02-intro-learning-material-11.html)
S3、EBS、EFSの高可用性設計とデータ保護戦略を習得します。

**この章で学ぶこと:**
- S3のストレージクラスと可用性設計
- S3クロスリージョンレプリケーション（CRR）
- S3バージョニングとオブジェクトロック
- EBSスナップショットとマルチアタッチ
- EFSのパフォーマンスモードとバックアップ
- AWS Backupによる統合バックアップ管理
- データライフサイクル管理

**キーサービス:** S3, EBS, EFS, AWS Backup

---

### [12. 障害復旧（DR）戦略とマルチリージョン設計](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/aws-sap-c02-intro/aws-sap-c02-intro-learning-material-12.html)
ビジネス継続性を確保するための災害復旧戦略とマルチリージョンアーキテクチャを設計します。

**この章で学ぶこと:**
- DR戦略の4パターン（バックアップ&リストア、パイロットライト、ウォームスタンバイ、マルチサイトアクティブ）
- RPO/RTOに基づくDR設計
- マルチリージョンアクティブ-アクティブ構成
- AWS Elastic Disaster Recovery
- リージョン間データレプリケーション
- フェイルオーバーの自動化
- DRテストとRunbook

**キーサービス:** Route 53, Aurora Global Database, S3 CRR, AWS DRS

---

### [13. セキュリティとコンプライアンス - エンタープライズセキュリティ](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/aws-sap-c02-intro/aws-sap-c02-intro-learning-material-13.html)
エンタープライズ環境に求められるセキュリティとコンプライアンス要件への対応を学びます。

**この章で学ぶこと:**
- AWS Organizations とSCP（サービスコントロールポリシー）
- AWS Control Towerによるランディングゾーン
- AWS Config とコンプライアンス監視
- AWS Security Hubによる統合セキュリティ管理
- GuardDuty、Inspector、Macie
- KMSとシークレット管理
- CloudTrailとガバナンス

**キーサービス:** Organizations, Control Tower, Config, Security Hub, KMS

---

### [14. 監視・ログ・トラブルシューティング](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/aws-sap-c02-intro/aws-sap-c02-intro-learning-material-14.html)
大規模環境における監視設計とトラブルシューティング手法を習得します。

**この章で学ぶこと:**
- CloudWatchメトリクスとカスタムメトリクス
- CloudWatch Logs Insightsによるログ分析
- X-Rayによる分散トレーシング
- CloudWatch Synthetics（合成監視）
- EventBridgeによるイベント駆動アーキテクチャ
- アラームとインシデント対応の自動化
- Systems Managerによる運用管理

**キーサービス:** CloudWatch, X-Ray, EventBridge, Systems Manager

---

### [15. 総合演習 - 高可用性Webアプリケーションの設計](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/aws-sap-c02-intro/aws-sap-c02-intro-learning-material-15.html)
これまで学んだ知識を統合し、実際のシナリオに基づいた高可用性アーキテクチャを設計します。

**この章で学ぶこと:**
- 要件分析とアーキテクチャ設計プロセス
- Well-Architectedフレームワークに基づく評価
- 3層Webアプリケーションの高可用性設計
- コスト最適化の考慮事項
- 設計ドキュメントの作成
- SAP試験に向けた学習の総括

**総合演習:**
- グローバル配信可能な高可用性Webアプリケーションの設計
- マルチAZ、マルチリージョンの災害復旧計画
- セキュリティとコンプライアンス要件への対応

---

## 学習の進め方

1. **基礎概念の理解を優先する**: 各サービスの「なぜそうなっているのか」を理解することで、試験問題への対応力が向上します

2. **ハンズオン実習を必ず行う**: 読むだけでなく、実際にAWSコンソールで設定を試してみましょう。無料利用枠を活用してください

3. **アーキテクチャ図を描く**: 各章で学んだ構成を図に描くことで、理解が深まります

4. **公式ドキュメントを参照する**: 本ガイドで基礎を学んだ後、公式ドキュメントで詳細を確認する習慣をつけましょう

5. **模擬問題で理解度を確認する**: 各章の学習後、関連する試験問題を解いて知識の定着を確認します

6. **リソースの削除を忘れずに**: 実習後は必ずリソースを削除し、予期しない課金を防ぎましょう

---

## 推奨所要時間

| 章 | 内容 | 目安時間 |
|----------|------|----------|
| 第1章 | Solutions Architect Professionalへの道 - 試験概要と学習戦略 | 45分 |
| 第2章 | 高可用性設計の基礎 - 単一障害点の排除 | 1.5時間 |
| 第3章 | Elastic Load Balancing (ELB) - 負荷分散の設計と実装 | 1.5時間 |
| 第4章 | Auto Scaling - 需要に応じた自動スケーリング | 1.5時間 |
| 第5章 | Route 53 - DNSとトラフィック管理 | 1.5時間 |
| 第6章 | CloudFront - グローバルコンテンツ配信 | 1.5時間 |
| 第7章 | Global Accelerator - グローバルアプリケーションの高速化 | 1時間 |
| 第8章 | 高度なVPC設計 - エンタープライズネットワーキング | 2時間 |
| 第9章 | ハイブリッドクラウド接続 - オンプレミス統合 | 2時間 |
| 第10章 | データベースの高可用性と災害復旧 | 2時間 |
| 第11章 | ストレージの高可用性とデータ保護 | 1.5時間 |
| 第12章 | 障害復旧（DR）戦略とマルチリージョン設計 | 2時間 |
| 第13章 | セキュリティとコンプライアンス - エンタープライズセキュリティ | 2時間 |
| 第14章 | 監視・ログ・トラブルシューティング | 1.5時間 |
| 第15章 | 総合演習 - 高可用性Webアプリケーションの設計 | 2時間 |
| **合計** | | **約24.5時間** |

---

## 関連リソース

### このリポジトリの関連ガイド
- [AWS入門ガイドライン](../aws-basic/README.md) - 本ガイドの前提となるAWS基礎知識
- [AWS Terraformガイドライン](../aws-terraform/README.md) - Infrastructure as Codeの実践
- [Dockerガイドライン](../docker/README.md) - コンテナ技術の基礎

### AWS公式学習リソース
- [AWS Skill Builder](https://skillbuilder.aws/) - 無料のオンライン学習
- [AWS Well-Architected Labs](https://wellarchitectedlabs.com/) - ハンズオンラボ
- [AWS Whitepapers](https://aws.amazon.com/jp/whitepapers/) - 技術ホワイトペーパー
- [AWS re:Invent動画](https://www.youtube.com/user/AmazonWebServices) - 技術セッション動画

### SAP試験対策
- [AWS認定 Solutions Architect - Professional 試験ガイド](https://aws.amazon.com/jp/certification/certified-solutions-architect-professional/)
- [公式模擬試験（Skill Builder）](https://skillbuilder.aws/)
- [AWS Certified Solutions Architect - Professional 公式練習問題集](https://aws.amazon.com/jp/certification/certification-prep/)

---

## 学習目標

このガイドを完了すると、以下のスキルを身につけることができます：

### 設計スキル
- 高可用性・耐障害性を備えたアーキテクチャの設計
- マルチリージョン・グローバル配信の構成設計
- 災害復旧（DR）戦略の立案と実装
- ハイブリッドクラウド環境の設計
- エンタープライズセキュリティ要件への対応

### 実装スキル
- ELB、Auto Scaling、Route 53の構成と運用
- CloudFront、Global Acceleratorによるパフォーマンス最適化
- Transit Gateway、Direct Connectによるネットワーク設計
- CloudWatch、X-Rayによる監視・トラブルシューティング

### 試験対策
- SAP-C02試験の出題パターンの理解
- 設計シナリオに基づく最適解の選択
- AWSベストプラクティスに基づく判断力

---

## 次のステップ

このガイドライン完了後は、以下の学習に進むことをお勧めします：

### 資格取得
- [AWS認定 Solutions Architect - Professional（SAP-C02）](https://aws.amazon.com/jp/certification/certified-solutions-architect-professional/) - 本ガイドの集大成として受験

### 専門分野の深堀り
- [AWS認定 DevOps Engineer - Professional](https://aws.amazon.com/jp/certification/certified-devops-engineer-professional/) - CI/CD、自動化に特化
- [AWS認定 Advanced Networking - Specialty](https://aws.amazon.com/jp/certification/certified-advanced-networking-specialty/) - ネットワーク設計に特化
- [AWS認定 Security - Specialty](https://aws.amazon.com/jp/certification/certified-security-specialty/) - セキュリティに特化

### 実践プロジェクト
- 実際のプロジェクトでの高可用性設計の適用
- Well-Architectedレビューの実施
- IaCによるインフラ自動化の実践

---

## よくある質問

### Q: AWS基礎編を履修していないと難しいですか？
A: はい、本ガイドはEC2、S3、RDS、VPC、IAMの基本操作を理解していることを前提としています。まず[AWS入門ガイドライン](../aws-basic/README.md)を完了してから本ガイドに進むことをお勧めします。

### Q: 実習で費用はかかりますか？
A: 本ガイドの実習は可能な限り無料利用枠内で行えるよう設計していますが、一部のサービス（Direct Connect、Global Acceleratorなど）は無料利用枠の対象外です。実習後は必ずリソースを削除してください。

### Q: SAP試験に合格するにはこのガイドだけで十分ですか？
A: 本ガイドはSAP試験の基礎知識を身につけることを目的としています。合格には、公式模擬試験の受験、ホワイトペーパーの読み込み、実務経験が追加で必要です。

### Q: 学習の優先順位はどうすればよいですか？
A: まず1-5章で高可用性設計の基本とコアサービス（ELB、Auto Scaling、Route 53）を習得してください。その後、実務で必要な分野から順に学習を進めることをお勧めします。

---

## はじめよう

準備ができたら、[第1章: Solutions Architect Professionalへの道 - 試験概要と学習戦略](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/aws-sap-c02-intro/aws-sap-c02-intro-learning-material-01.html)から始めましょう！

AWSアーキテクトとしてのスキルアップを、一緒に進めていきましょう。

---

最終更新日: 2025-12-24
