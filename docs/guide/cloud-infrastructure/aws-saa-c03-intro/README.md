# AWS Certified Solutions Architect - Associate (SAA-C03) 入門 学習ガイドライン

このガイドラインでは、AWS基礎（EC2・S3・RDS・VPC）を習得済みの方を対象に、**AWS Certified Solutions Architect - Associate（SAA-C03）資格取得**に向けた知識を体系的に学習します。AWSサービスを組み合わせた設計パターン、高可用性・コスト最適化・セキュリティの観点から、実践的なアーキテクチャ設計スキルを身につけます。

---

## このガイドの位置づけ

```
AWS学習パス（アーキテクト志向ルート）

[AWS基礎編] ─────────────────────────────────────────────────┐
│ EC2, S3, RDS, VPC, IAM, CloudWatch, Lambda               │
│ (aws-basic: 12章)                                        │
└──────────────────────────────────────────────────────────┘
                           ↓
┌──────────────────────────────────────────────────────────┐
│ [本ガイド] AWS SAA-C03入門                               │ ← 現在地
│ 設計原則, ELB, Auto Scaling, Route 53, 高可用性設計      │
│ (aws-saa-c03-intro: 12章)                                │
└──────────────────────────────────────────────────────────┘
                           ↓
          ┌────────────────┴────────────────┐
          ↓                                 ↓
┌─────────────────────────┐    ┌─────────────────────────┐
│ [インフラ上級]          │    │ [開発者志向]            │
│ SAP-C02入門             │    │ DVA-C02入門             │
│ マルチリージョン・DR    │    │ サーバーレス開発        │
└─────────────────────────┘    └─────────────────────────┘
```

---

## 前提条件

### 必要な環境
- AWSアカウント（無料利用枠対応）
- パソコン（Windows、Mac、Linux いずれも可）
- Webブラウザ（Chrome、Firefox、Edge 推奨）
- テキストエディタ（VS Code推奨）
- （推奨）AWS CLI v2がインストールされた環境

### 参考リソース
- [AWS公式ドキュメント（日本語）](https://docs.aws.amazon.com/ja_jp/)
- [AWS Certified Solutions Architect - Associate 試験ガイド](https://aws.amazon.com/jp/certification/certified-solutions-architect-associate/)
- [AWS Well-Architected Framework](https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html)
- [AWS Skill Builder](https://skillbuilder.aws/)
- [AWS 無料利用枠](https://aws.amazon.com/jp/free/)

### 前提知識
- **必須**:
  - AWS基礎サービスの理解と操作経験（EC2、S3、RDS、VPC）
  - IAMによるアクセス管理の基本
  - AWSマネジメントコンソールの基本操作
  - [AWS入門ガイドライン](../aws-basic/README.md)の履修または同等の知識
- **推奨**:
  - ネットワークの基礎知識（TCP/IP、DNS、HTTP/HTTPS）
  - Linuxの基本コマンド操作
  - JSONまたはYAMLの基本構文
- **あると良い**:
  - システム設計の実務経験
  - オンプレミス環境の構築・運用経験

---

## 学習コンテンツ

### [1. Solutions Architect Associateへの道 - 試験概要と設計思考](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/aws-saa-c03-intro/aws-saa-c03-intro-learning-material-01.html)
SAA-C03試験の全体像を把握し、ソリューションアーキテクトに求められる思考法を理解します。

**この章で学ぶこと:**
- SAA-C03試験の構成と4つの出題ドメイン
- 試験で問われる設計判断のポイント
- AWS Well-Architectedフレームワークの6つの柱
- Cloud Practitionerとの違い
- 効果的な学習ロードマップの作成
- 公式学習リソースの活用方法

---

### [2. AWSの設計原則 - Well-Architectedフレームワーク](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/aws-saa-c03-intro/aws-saa-c03-intro-learning-material-02.html)
AWSでシステムを設計する際の基本原則と、Well-Architectedフレームワークの考え方を学びます。

**この章で学ぶこと:**
- 運用上の優秀性（Operational Excellence）
- セキュリティ（Security）
- 信頼性（Reliability）
- パフォーマンス効率（Performance Efficiency）
- コスト最適化（Cost Optimization）
- サステナビリティ（Sustainability）
- 設計原則の実践的な適用方法

---

### [3. 高可用性とスケーラビリティの基礎](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/aws-saa-c03-intro/aws-saa-c03-intro-learning-material-03.html)
システムの可用性とスケーラビリティを確保するための基本概念を理解します。

**この章で学ぶこと:**
- 高可用性（HA）の定義と測定指標
- SLA、RTO、RPOの概念
- 単一障害点（SPOF）の特定と排除
- リージョンとアベイラビリティゾーン（AZ）
- マルチAZ構成の設計原則
- 水平スケーリングと垂直スケーリング

**キーコンセプト:** リージョン、AZ、SPOF、SLA

---

### [4. Elastic Load Balancing - 負荷分散の設計](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/aws-saa-c03-intro/aws-saa-c03-intro-learning-material-04.html)
ELBを使用したトラフィック分散と、用途に応じたロードバランサーの選択を学びます。

**この章で学ぶこと:**
- ロードバランサーの役割と必要性
- Application Load Balancer（ALB）の特徴とユースケース
- Network Load Balancer（NLB）の特徴とユースケース
- Gateway Load Balancer（GWLB）の特徴
- ターゲットグループとヘルスチェック
- スティッキーセッションとSSL終端
- クロスゾーン負荷分散

**キーサービス:** Application Load Balancer, Network Load Balancer, Gateway Load Balancer

---

### [5. EC2 Auto Scaling - 自動スケーリングの設計](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/aws-saa-c03-intro/aws-saa-c03-intro-learning-material-05.html)
需要の変動に応じてEC2インスタンスを自動調整するAuto Scalingの設計パターンを学びます。

**この章で学ぶこと:**
- Auto Scalingの基本概念とメリット
- 起動テンプレートと起動設定
- Auto Scalingグループの構成要素
- スケーリングポリシーの種類
  - ターゲット追跡スケーリング
  - ステップスケーリング
  - シンプルスケーリング
  - スケジュールドスケーリング
- インスタンスのライフサイクル
- スポットインスタンスとの統合

**キーサービス:** EC2 Auto Scaling, 起動テンプレート

---

### [6. Route 53 - DNS設計とトラフィックルーティング](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/aws-saa-c03-intro/aws-saa-c03-intro-learning-material-06.html)
Route 53を使用したDNS管理と、様々なルーティングポリシーの使い分けを習得します。

**この章で学ぶこと:**
- DNSの基礎知識とRoute 53の役割
- ホストゾーン（パブリック・プライベート）
- レコードタイプ（A、AAAA、CNAME、Alias）
- ルーティングポリシーの種類と選択基準
  - シンプルルーティング
  - 加重ルーティング
  - レイテンシーベースルーティング
  - フェイルオーバールーティング
  - 位置情報ルーティング
- ヘルスチェックの設定
- Route 53とELBの連携

**キーサービス:** Amazon Route 53, ヘルスチェック

---

### [7. VPC設計 - セキュアなネットワーク構築](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/aws-saa-c03-intro/aws-saa-c03-intro-learning-material-07.html)
VPCを使用したセキュアなネットワーク設計と、サブネット構成のベストプラクティスを学びます。

**この章で学ぶこと:**
- VPCの設計原則とCIDR設計
- パブリックサブネットとプライベートサブネット
- インターネットゲートウェイとNATゲートウェイ
- セキュリティグループとネットワークACL
- VPCピアリング
- VPCエンドポイント（Gateway、Interface）
- VPC Flow Logsによるトラフィック監視

**キーサービス:** VPC, サブネット, NAT Gateway, VPCエンドポイント

---

### [8. データベースサービスの選択と設計](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/aws-saa-c03-intro/aws-saa-c03-intro-learning-material-08.html)
ユースケースに応じた最適なデータベースサービスの選択と、高可用性設計を学びます。

**この章で学ぶこと:**
- RDSのマルチAZデプロイとリードレプリカ
- Amazon Aurora の特徴と利点
- DynamoDB の基本概念とユースケース
- ElastiCache（Redis、Memcached）の活用
- データベース選択の判断基準
- バックアップとリストア戦略
- データベース移行（DMS）

**キーサービス:** RDS, Aurora, DynamoDB, ElastiCache, DMS

---

### [9. ストレージサービスの設計](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/aws-saa-c03-intro/aws-saa-c03-intro-learning-material-09.html)
様々なストレージサービスの特性を理解し、適切なストレージ選択とデータ管理を学びます。

**この章で学ぶこと:**
- S3ストレージクラスとライフサイクル管理
- S3の暗号化オプション（SSE-S3、SSE-KMS、SSE-C）
- S3バージョニングとクロスリージョンレプリケーション
- EBSボリュームタイプと選択基準
- EFSとFSxの使い分け
- Storage Gateway のユースケース
- AWS Backup による統合バックアップ

**キーサービス:** S3, EBS, EFS, FSx, Storage Gateway

---

### [10. セキュリティとアイデンティティ](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/aws-saa-c03-intro/aws-saa-c03-intro-learning-material-10.html)
AWSにおけるセキュリティのベストプラクティスとアイデンティティ管理を習得します。

**この章で学ぶこと:**
- IAMのベストプラクティス（最小権限の原則）
- IAMロールとクロスアカウントアクセス
- AWS Organizations とSCP
- KMSによる暗号化キー管理
- Secrets Manager とParameter Store
- AWS Shield と AWS WAF
- CloudTrail によるAPI監査
- GuardDuty による脅威検知

**キーサービス:** IAM, KMS, Secrets Manager, CloudTrail, GuardDuty, WAF

---

### [11. サーバーレスとアプリケーション統合](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/aws-saa-c03-intro/aws-saa-c03-intro-learning-material-11.html)
サーバーレスアーキテクチャとアプリケーション統合サービスの設計パターンを学びます。

**この章で学ぶこと:**
- Lambda の設計パターンとユースケース
- API Gateway によるAPI設計
- SQSとSNSによる疎結合アーキテクチャ
- Step Functions によるワークフロー設計
- EventBridge によるイベント駆動設計
- CloudFront によるコンテンツ配信
- Global Accelerator との使い分け

**キーサービス:** Lambda, API Gateway, SQS, SNS, Step Functions, CloudFront

---

### [12. 総合演習 - アーキテクチャ設計の実践](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/aws-saa-c03-intro/aws-saa-c03-intro-learning-material-12.html)
これまで学んだ知識を統合し、実際のシナリオに基づいたアーキテクチャ設計を実践します。

**この章で学ぶこと:**
- 要件分析と設計プロセス
- Well-Architectedに基づく設計レビュー
- 3層Webアプリケーションの設計
- コスト見積もりと最適化
- 試験対策のポイント
- 模擬問題への取り組み方

**総合演習:**
- Webアプリケーションの高可用性アーキテクチャ設計
- コスト最適化を考慮した構成の検討
- セキュリティ要件への対応

---

## 学習の進め方

1. **設計思考を意識する**: 各サービスの機能だけでなく、「なぜこの構成が必要なのか」を常に考えながら学習しましょう

2. **ハンズオン実習を必ず行う**: AWSコンソールで実際にサービスを構築し、動作を確認することで理解が深まります

3. **アーキテクチャ図を描く**: 各章で学んだ構成を図に描くことで、サービス間の関係性が明確になります

4. **Well-Architectedの観点で評価する**: 設計案を6つの柱（運用、セキュリティ、信頼性、パフォーマンス、コスト、サステナビリティ）で評価する習慣をつけましょう

5. **公式ドキュメントを参照する**: 本ガイドで基礎を学んだ後、公式ドキュメントで詳細を確認する習慣をつけましょう

6. **リソースの削除を忘れずに**: 実習後は必ずリソースを削除し、予期しない課金を防ぎましょう

---

## 推奨所要時間

| 章 | 内容 | 目安時間 |
|----------|------|----------|
| 第1章 | Solutions Architect Associateへの道 - 試験概要と設計思考 | 45分 |
| 第2章 | AWSの設計原則 - Well-Architectedフレームワーク | 1時間 |
| 第3章 | 高可用性とスケーラビリティの基礎 | 1時間 |
| 第4章 | Elastic Load Balancing - 負荷分散の設計 | 1.5時間 |
| 第5章 | EC2 Auto Scaling - 自動スケーリングの設計 | 1.5時間 |
| 第6章 | Route 53 - DNS設計とトラフィックルーティング | 1.5時間 |
| 第7章 | VPC設計 - セキュアなネットワーク構築 | 1.5時間 |
| 第8章 | データベースサービスの選択と設計 | 1.5時間 |
| 第9章 | ストレージサービスの設計 | 1.5時間 |
| 第10章 | セキュリティとアイデンティティ | 1.5時間 |
| 第11章 | サーバーレスとアプリケーション統合 | 1.5時間 |
| 第12章 | 総合演習 - アーキテクチャ設計の実践 | 2時間 |
| **合計** | | **約17時間** |

---

## 関連リソース

### このリポジトリの関連ガイド
- [AWS入門ガイドライン](../aws-basic/README.md) - 本ガイドの前提となるAWS基礎知識
- [AWS SAP-C02入門ガイドライン](../aws-sap-c02-intro/README.md) - Solutions Architect Professional資格
- [AWS DVA-C02入門ガイドライン](../aws-dva-c02-intro/README.md) - Developer Associate資格
- [AWS Terraformガイドライン](../aws-terraform/README.md) - Infrastructure as Codeの実践
- [Dockerガイドライン](../docker/README.md) - コンテナ技術の基礎

### AWS公式学習リソース
- [AWS Skill Builder](https://skillbuilder.aws/) - 無料のオンライン学習
- [AWS Well-Architected Labs](https://wellarchitectedlabs.com/) - ハンズオンラボ
- [AWS Whitepapers](https://aws.amazon.com/jp/whitepapers/) - 技術ホワイトペーパー
- [AWS re:Invent動画](https://www.youtube.com/user/AmazonWebServices) - 技術セッション動画

### SAA-C03試験対策
- [AWS認定 Solutions Architect - Associate 試験ガイド](https://aws.amazon.com/jp/certification/certified-solutions-architect-associate/)
- [公式模擬試験（Skill Builder）](https://skillbuilder.aws/)
- [AWS認定公式練習問題集](https://aws.amazon.com/jp/certification/certification-prep/)

---

## 学習目標

このガイドを完了すると、以下のスキルを身につけることができます：

### 設計スキル
- Well-Architectedフレームワークに基づいたアーキテクチャ設計
- 高可用性・耐障害性を備えたシステム設計
- 要件に応じた最適なAWSサービスの選択
- コスト効率の良いアーキテクチャ設計
- セキュアなネットワーク・アクセス制御の設計

### 実装スキル
- ELB、Auto Scaling、Route 53の構成と設定
- VPCとサブネットの設計・構築
- RDS、S3、DynamoDBの適切な利用
- IAMによるアクセス制御の実装
- サーバーレスサービスの活用

### 試験対策
- SAA-C03試験の出題パターンの理解
- シナリオに基づく最適解の選択
- AWSベストプラクティスに基づく判断力

---

## 次のステップ

このガイドライン完了後は、以下の学習に進むことをお勧めします：

### 資格取得
- [AWS認定 Solutions Architect - Associate（SAA-C03）](https://aws.amazon.com/jp/certification/certified-solutions-architect-associate/) - 本ガイドの集大成として受験

### 専門分野の深堀り
- [AWS認定 Solutions Architect - Professional（SAP-C02）](https://aws.amazon.com/jp/certification/certified-solutions-architect-professional/) - アーキテクト上級資格
- [AWS認定 Developer - Associate（DVA-C02）](https://aws.amazon.com/jp/certification/certified-developer-associate/) - 開発者向け資格
- [AWS認定 SysOps Administrator - Associate](https://aws.amazon.com/jp/certification/certified-sysops-admin-associate/) - 運用者向け資格

### 実践プロジェクト
- 実際のプロジェクトでのアーキテクチャ設計
- Well-Architectedレビューの実施
- IaCによるインフラ自動化の実践

---

## よくある質問

### Q: AWS基礎編を履修していないと難しいですか？
A: はい、本ガイドはEC2、S3、RDS、VPC、IAMの基本操作を理解していることを前提としています。まず[AWS入門ガイドライン](../aws-basic/README.md)を完了してから本ガイドに進むことをお勧めします。

### Q: Cloud Practitioner資格は必要ですか？
A: 必須ではありませんが、AWS基礎編を履修済みであれば、Cloud Practitioner試験は比較的容易に合格できます。自信をつけるために先に取得しておくのも良いでしょう。

### Q: 実習で費用はかかりますか？
A: 本ガイドの実習は可能な限り無料利用枠内で行えるよう設計しています。ただし、一部のサービスは使用量に応じて課金される場合があります。実習後は必ずリソースを削除してください。

### Q: Developer Associate（DVA）とどちらを先に取得すべきですか？
A: 設計・構築が中心の業務であればSAA-C03を、開発業務が中心であればDVA-C02を先に取得することをお勧めします。SAA-C03はAWSの全体像を理解するのに最適な資格です。

### Q: SAA-C03試験に合格するにはこのガイドだけで十分ですか？
A: 本ガイドはSAA-C03試験の基礎知識を身につけることを目的としています。合格には、公式模擬試験の受験、ハンズオン実習、追加の問題演習が必要です。

### Q: 学習の優先順位はどうすればよいですか？
A: まず1-7章でコアサービス（ELB、Auto Scaling、Route 53、VPC）を習得してください。その後、8-11章でデータベース、ストレージ、セキュリティ、サーバーレスを学び、12章で総合的な設計力を養いましょう。

---

## はじめよう

準備ができたら、[第1章: Solutions Architect Associateへの道 - 試験概要と設計思考](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/aws-saa-c03-intro/aws-saa-c03-intro-learning-material-01.html)から始めましょう！

AWSソリューションアーキテクトとしてのスキルアップを、一緒に進めていきましょう。

---

最終更新日: 2025-12-26
