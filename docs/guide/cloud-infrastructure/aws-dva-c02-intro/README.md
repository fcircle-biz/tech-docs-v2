# AWS Certified Developer - Associate (DVA-C02) 入門 学習ガイドライン

このガイドラインでは、AWS基礎（EC2・S3・RDS・VPC）を習得済みの方を対象に、アプリケーション開発に特化したAWSサービス（Lambda、DynamoDB、API Gateway等）を体系的に学習し、**AWS Certified Developer - Associate（DVA-C02）資格取得**に向けた知識基盤を構築します。

---

## このガイドの位置づけ

```
AWS学習パス（開発者志向ルート）

[AWS基礎編] ─────────────────────────────────────────────────┐
│ EC2, S3, RDS, VPC, IAM, CloudWatch, Lambda基礎            │
│ (aws-basic: 12章)                                         │
└──────────────────────────────────────────────────────────┘
                           ↓
┌──────────────────────────────────────────────────────────┐
│ [本ガイド] AWS DVA-C02入門                               │ ← 現在地
│ Lambda, DynamoDB, API Gateway, サーバーレス開発          │
│ (aws-dva-c02-intro: 12章)                                │
└──────────────────────────────────────────────────────────┘
                           ↓
          ┌────────────────┴────────────────┐
          ↓                                 ↓
┌─────────────────────────┐    ┌─────────────────────────┐
│ [インフラ志向]          │    │ [AI/ML志向]             │
│ SAP-C02入門             │    │ Machine Learning        │
│ 高可用性・マルチリージョン │    │ Specialty               │
└─────────────────────────┘    └─────────────────────────┘
```

---

## 前提条件

### 必要な環境
- AWSアカウント（無料利用枠対応）
- AWS CLI v2がインストールされた環境
- パソコン（Windows、Mac、Linux いずれも可）
- Webブラウザ（Chrome、Firefox、Edge 推奨）
- テキストエディタまたはIDE（VS Code推奨）
- Node.js（v18以降）またはPython 3.9以降（Lambda開発用）

### 参考リソース
- [AWS公式ドキュメント（日本語）](https://docs.aws.amazon.com/ja_jp/)
- [AWS Certified Developer - Associate 試験ガイド](https://aws.amazon.com/jp/certification/certified-developer-associate/)
- [AWS Serverless Application Model（SAM）ドキュメント](https://docs.aws.amazon.com/serverless-application-model/)
- [AWS Skill Builder](https://skillbuilder.aws/)

### 前提知識
- **必須**:
  - AWS基礎サービスの理解と操作経験（EC2、S3、RDS、VPC）
  - IAMによるアクセス管理の基本
  - AWSマネジメントコンソールの基本操作
  - [AWS入門ガイドライン](../../cloud-infrastructure/aws-basic/README.md)の履修または同等の知識
- **推奨**:
  - プログラミング経験（Python、JavaScript/Node.js、Java等いずれか）
  - REST APIの基本概念
  - JSONの読み書き
  - Git/GitHubの基本操作
- **あると良い**:
  - コンテナ技術（Docker）の基礎知識
  - CI/CDパイプラインの概念理解

---

## 学習コンテンツ

### [1. Developer Associate資格への道 - 試験概要と学習戦略](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/aws-dva-c02-intro/aws-dva-c02-intro-learning-material-01.html)
DVA-C02試験の全体像を把握し、効果的な学習計画を立てます。試験範囲、出題傾向、開発者に求められるスキルセットを理解します。

**この章で学ぶこと:**
- DVA-C02試験の構成と出題分野（4ドメイン）
- Solutions Architect AssociateとDeveloper Associateの違い
- 開発者視点で問われるAWSの設計・実装パターン
- 効果的な学習ロードマップの作成
- 公式学習リソースとハンズオンラボの活用方法

---

### [2. サーバーレスコンピューティング基礎 - AWS Lambdaの仕組み](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/aws-dva-c02-intro/aws-dva-c02-intro-learning-material-02.html)
AWS Lambdaの動作原理とサーバーレスアーキテクチャの基本概念を深く理解します。

**この章で学ぶこと:**
- サーバーレスアーキテクチャのメリットと制約
- Lambda関数のライフサイクル（コールドスタート、ウォームスタート）
- 実行ロールとリソースベースポリシー
- メモリ・タイムアウト設定とパフォーマンス
- 同時実行数とスロットリング
- Lambda Layers（レイヤー）による共通コード管理
- Lambda Extensions

**キーサービス:** AWS Lambda, Lambda Layers

---

### [3. Lambda関数の開発とデプロイ - 実践的な開発ワークフロー](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/aws-dva-c02-intro/aws-dva-c02-intro-learning-material-03.html)
Lambda関数の効率的な開発、テスト、デプロイの手法を習得します。

**この章で学ぶこと:**
- ハンドラー関数の設計パターン
- 環境変数と設定管理
- AWS SAM（Serverless Application Model）によるローカル開発
- Lambda関数のパッケージング（ZIPデプロイ、コンテナイメージ）
- バージョニングとエイリアス
- トラフィックシフティング（カナリアデプロイ）
- AWS CDKによるInfrastructure as Code

**キーサービス:** AWS Lambda, AWS SAM, AWS CDK

---

### [4. Amazon DynamoDB基礎 - NoSQLデータベースの設計](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/aws-dva-c02-intro/aws-dva-c02-intro-learning-material-04.html)
DynamoDBの基本概念とデータモデリングの基礎を学びます。

**この章で学ぶこと:**
- DynamoDBのアーキテクチャとパーティショニング
- プライマリキーの設計（パーティションキー、ソートキー）
- 読み取り・書き込み容量ユニット（RCU/WCU）
- オンデマンドキャパシティモードとプロビジョンドモード
- 整合性モデル（強い整合性、結果整合性）
- アイテムサイズとスループットの最適化
- グローバルセカンダリインデックス（GSI）とローカルセカンダリインデックス（LSI）

**キーサービス:** Amazon DynamoDB

---

### [5. DynamoDB高度な操作 - クエリ、スキャン、ストリーム](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/aws-dva-c02-intro/aws-dva-c02-intro-learning-material-05.html)
DynamoDBの高度な操作とリアルタイムデータ処理を習得します。

**この章で学ぶこと:**
- Query操作とScan操作の使い分け
- フィルター式とプロジェクション式
- ページネーションとLimit
- DynamoDB Streams（変更データキャプチャ）
- トランザクション操作（TransactWriteItems、TransactGetItems）
- TTL（Time To Live）によるデータ自動削除
- DAX（DynamoDB Accelerator）によるキャッシュ

**キーサービス:** DynamoDB, DynamoDB Streams, DAX

---

### [6. Amazon API Gateway - RESTful API の構築](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/aws-dva-c02-intro/aws-dva-c02-intro-learning-material-06.html)
API Gatewayを使用したRESTful APIの設計と実装を学びます。

**この章で学ぶこと:**
- REST API vs HTTP API vs WebSocket APIの選択基準
- リソースとメソッドの設計
- 統合タイプ（Lambda、HTTP、AWS、Mock）
- リクエスト・レスポンスのマッピングテンプレート
- ステージとデプロイメント
- APIキーと使用量プラン
- スロットリングとクォータ

**キーサービス:** Amazon API Gateway

---

### [7. API Gatewayセキュリティと認証 - アクセス制御の実装](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/aws-dva-c02-intro/aws-dva-c02-intro-learning-material-07.html)
API Gatewayの認証・認可メカニズムを習得します。

**この章で学ぶこと:**
- IAM認証とSigV4署名
- Cognitoユーザープールとの統合
- Lambdaオーソライザー（トークンベース、リクエストベース）
- CORSの設定
- リソースポリシーによるアクセス制御
- WAF統合によるセキュリティ強化
- プライベートAPIエンドポイント

**キーサービス:** API Gateway, Amazon Cognito, AWS WAF

---

### [8. AWS Step Functions - ワークフローオーケストレーション](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/aws-dva-c02-intro/aws-dva-c02-intro-learning-material-08.html)
Step Functionsを使用したサーバーレスワークフローの設計を学びます。

**この章で学ぶこと:**
- ステートマシンとASL（Amazon States Language）
- ステートタイプ（Task、Choice、Parallel、Map、Wait、Pass、Fail、Succeed）
- 標準ワークフローとExpressワークフロー
- エラーハンドリングとリトライ戦略
- サービス統合（Optimized vs SDK統合）
- 長時間実行ワークフローの設計
- Step Functions + Lambda/ECS/SNSの連携

**キーサービス:** AWS Step Functions

---

### [9. イベント駆動アーキテクチャ - EventBridge、SQS、SNS](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/aws-dva-c02-intro/aws-dva-c02-intro-learning-material-09.html)
イベント駆動型アプリケーションの設計パターンを習得します。

**この章で学ぶこと:**
- Amazon EventBridgeのイベントバスとルール
- スケジュール式とイベントパターン
- Amazon SQSの標準キューとFIFOキュー
- デッドレターキュー（DLQ）とリドライブポリシー
- Amazon SNSのトピックとサブスクリプション
- ファンアウトパターンとメッセージフィルタリング
- Lambda + SQS/SNS/EventBridgeの統合

**キーサービス:** EventBridge, SQS, SNS

---

### [10. アプリケーションセキュリティ - Secrets Manager、KMS、パラメータストア](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/aws-dva-c02-intro/aws-dva-c02-intro-learning-material-10.html)
アプリケーション開発におけるセキュリティのベストプラクティスを学びます。

**この章で学ぶこと:**
- AWS Secrets Managerによるシークレット管理
- シークレットのローテーション設定
- AWS KMSの暗号化キー管理
- カスタマーマネージドキー（CMK）とAWSマネージドキー
- Parameter Storeとの使い分け
- Lambda環境変数の暗号化
- コード内でのセキュリティベストプラクティス

**キーサービス:** Secrets Manager, KMS, Systems Manager Parameter Store

---

### [11. 開発者ツールとCI/CD - CodePipeline、CodeBuild、CodeDeploy](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/aws-dva-c02-intro/aws-dva-c02-intro-learning-material-11.html)
AWSネイティブのCI/CDパイプライン構築を習得します。

**この章で学ぶこと:**
- AWS CodeCommitまたはGitHub連携
- AWS CodeBuildによるビルド・テスト
- buildspec.ymlの記述
- AWS CodeDeployによるデプロイ戦略
- Lambda/EC2/ECSへのデプロイ
- AWS CodePipelineによるパイプライン構築
- ブルー/グリーンデプロイとカナリアデプロイ
- パイプラインの承認ステージ

**キーサービス:** CodePipeline, CodeBuild, CodeDeploy, CodeCommit

---

### [12. 監視とデバッグ - CloudWatch、X-Ray](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/aws-dva-c02-intro/aws-dva-c02-intro-learning-material-12.html)
アプリケーションの監視、ログ分析、分散トレーシングを習得します。

**この章で学ぶこと:**
- CloudWatch Logsへのログ出力と構造化ログ
- CloudWatch Logs Insightsによるクエリ
- カスタムメトリクスの発行
- CloudWatchアラームとアクション
- AWS X-Rayによる分散トレーシング
- X-Ray SDKの組み込み
- サービスマップとトレース分析
- Lambda、API Gateway、ECSのトレース

**キーサービス:** CloudWatch, CloudWatch Logs, X-Ray

---

## 学習の進め方

1. **コンセプトを理解してからコードを書く**: 各サービスの「なぜそう動くのか」を理解することで、トラブルシューティング力が向上します

2. **ハンズオン実習を必ず行う**: 読むだけでなく、実際にLambda関数を書いてデプロイしてみましょう。AWS SAMを使ったローカル開発がおすすめです

3. **エラーを恐れない**: サーバーレス開発では試行錯誤が重要です。CloudWatch Logsでエラーを確認し、デバッグする習慣をつけましょう

4. **公式ドキュメントを読む習慣をつける**: 試験では公式ドキュメントに基づいた問題が出題されます。各章の学習後に関連する公式ドキュメントを確認しましょう

5. **実際のユースケースを意識する**: 各サービスがどのようなビジネス課題を解決するのか考えながら学習すると理解が深まります

6. **リソースの削除を忘れずに**: 実習後は必ずリソースを削除し、予期しない課金を防ぎましょう

---

## 推奨所要時間

| 章 | 内容 | 目安時間 |
|----------|------|----------|
| 第1章 | Developer Associate資格への道 - 試験概要と学習戦略 | 45分 |
| 第2章 | サーバーレスコンピューティング基礎 - AWS Lambdaの仕組み | 1.5時間 |
| 第3章 | Lambda関数の開発とデプロイ - 実践的な開発ワークフロー | 1.5時間 |
| 第4章 | Amazon DynamoDB基礎 - NoSQLデータベースの設計 | 1.5時間 |
| 第5章 | DynamoDB高度な操作 - クエリ、スキャン、ストリーム | 2時間 |
| 第6章 | Amazon API Gateway - RESTful API の構築 | 1.5時間 |
| 第7章 | API Gatewayセキュリティと認証 - アクセス制御の実装 | 1.5時間 |
| 第8章 | AWS Step Functions - ワークフローオーケストレーション | 1.5時間 |
| 第9章 | イベント駆動アーキテクチャ - EventBridge、SQS、SNS | 1.5時間 |
| 第10章 | アプリケーションセキュリティ - Secrets Manager、KMS | 1.5時間 |
| 第11章 | 開発者ツールとCI/CD - CodePipeline、CodeBuild、CodeDeploy | 1.5時間 |
| 第12章 | 監視とデバッグ - CloudWatch、X-Ray | 1.5時間 |
| **合計** | | **約18時間** |

---

## 関連リソース

### このリポジトリの関連ガイド
- [AWS入門ガイドライン](../../cloud-infrastructure/aws-basic/README.md) - 本ガイドの前提となるAWS基礎知識
- [AWS SAP-C02入門ガイドライン](../../cloud-infrastructure/aws-sap-c02-intro/README.md) - インフラ志向の上級資格
- [Python入門](../../programming-languages/python-ecosystem/python-beginner/README.md) - Lambda開発に活用
- [JavaScript入門](../../programming-languages/javascript-ecosystem/javascript-beginner/README.md) - Node.jsランタイムに活用

### AWS公式学習リソース
- [AWS Skill Builder](https://skillbuilder.aws/) - 無料のオンライン学習
- [AWS Workshops](https://workshops.aws/) - ハンズオンワークショップ
- [Serverless Land](https://serverlessland.com/) - サーバーレスパターン集
- [AWS SAM CLI ドキュメント](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/what-is-sam.html)

### DVA-C02試験対策
- [AWS認定 Developer - Associate 試験ガイド](https://aws.amazon.com/jp/certification/certified-developer-associate/)
- [公式模擬試験（Skill Builder）](https://skillbuilder.aws/)
- [AWS認定公式練習問題集](https://aws.amazon.com/jp/certification/certification-prep/)

---

## 学習目標

このガイドを完了すると、以下のスキルを身につけることができます：

### 開発スキル
- AWS Lambdaを使用したサーバーレス関数の設計・実装・デプロイ
- DynamoDBのデータモデリングと効率的なクエリ設計
- API Gatewayを使用したRESTful APIの構築と認証実装
- Step Functionsによるワークフローオーケストレーション
- イベント駆動アーキテクチャの設計

### 運用スキル
- AWS SAM/CDKを使用したInfrastructure as Code
- CodePipeline/CodeBuild/CodeDeployによるCI/CDパイプライン構築
- CloudWatch/X-Rayによるアプリケーション監視とトラブルシューティング
- セキュリティベストプラクティスに基づいたシークレット管理

### 試験対策
- DVA-C02試験の出題パターンの理解
- 開発シナリオに基づく最適解の選択
- AWSサーバーレスベストプラクティスに基づく判断力

---

## 次のステップ

このガイドライン完了後は、以下の学習に進むことをお勧めします：

### 資格取得
- [AWS認定 Developer - Associate（DVA-C02）](https://aws.amazon.com/jp/certification/certified-developer-associate/) - 本ガイドの集大成として受験

### 専門分野の深堀り
- [AWS認定 Solutions Architect - Professional（SAP-C02）](https://aws.amazon.com/jp/certification/certified-solutions-architect-professional/) - インフラ設計のプロフェッショナルへ
- [AWS認定 DevOps Engineer - Professional](https://aws.amazon.com/jp/certification/certified-devops-engineer-professional/) - CI/CD、自動化に特化
- [AWS認定 Machine Learning - Specialty](https://aws.amazon.com/jp/certification/certified-machine-learning-specialty/) - AI/ML分野への展開

### 実践プロジェクト
- サーバーレスWebアプリケーションの構築
- マイクロサービスアーキテクチャの実装
- リアルタイムデータ処理パイプラインの構築

---

## よくある質問

### Q: AWS基礎編を履修していないと難しいですか？
A: はい、本ガイドはEC2、S3、RDS、VPC、IAMの基本操作を理解していることを前提としています。まず[AWS入門ガイドライン](../../cloud-infrastructure/aws-basic/README.md)を完了してから本ガイドに進むことをお勧めします。

### Q: プログラミング経験は必須ですか？
A: はい、Lambda関数の開発にはPythonまたはJavaScript（Node.js）の基礎知識が必要です。プログラミング未経験の場合は、先に[Python入門](../../programming-languages/python-ecosystem/python-beginner/README.md)を学習することをお勧めします。

### Q: 実習で費用はかかりますか？
A: 本ガイドの実習は可能な限り無料利用枠内で行えるよう設計しています。Lambda、DynamoDB、API Gatewayはすべて無料利用枠が用意されています。実習後は必ずリソースを削除してください。

### Q: Solutions Architect Associate（SAA）とどちらを先に取得すべきですか？
A: 開発業務が中心の場合はDVA-C02を、インフラ設計が中心の場合はSAA-C03を先に取得することをお勧めします。両方を取得することで、AWSの全体像をより深く理解できます。

### Q: DVA-C02試験に合格するにはこのガイドだけで十分ですか？
A: 本ガイドはDVA-C02試験の基礎知識を身につけることを目的としています。合格には、公式模擬試験の受験、ハンズオン実習、実務経験が追加で必要です。

---

## はじめよう

準備ができたら、[第1章: Developer Associate資格への道 - 試験概要と学習戦略](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/aws-dva-c02-intro/aws-dva-c02-intro-learning-material-01.html)から始めましょう！

AWSでのアプリケーション開発スキルを、一緒に磨いていきましょう。

---

最終更新日: 2025-12-25
