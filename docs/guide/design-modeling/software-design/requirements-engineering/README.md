# 要件工学（Requirements Engineering）学習ガイドライン

このガイドラインでは、要件工学の基礎を入門者向けに段階的に学習するためのカリキュラムを提供しています。ソフトウェア開発プロジェクトの成功に不可欠な要件定義・分析・管理の技法を、実践的な演習を通じて体系的に習得できます。

## 前提条件
### 必要な環境
- テキストエディタ（Visual Studio Code、Notepad++等）
- 図形描画ツール（draw.io、Lucidchart、Microsoft Visio等）
- 表計算ソフト（Excel、Google Sheets等）
- プロジェクト管理ツール（Jira、Redmine、Trello等）※オプション

### 参考リソース
- [IREB（International Requirements Engineering Board）](https://www.ireb.org/)
- [BABOK（Business Analysis Body of Knowledge）ガイド](https://www.iiba.org/standards-and-resources/babok/)
- [IEEE 830-1998 Software Requirements Specifications](https://standards.ieee.org/standard/830-1998.html)
- [要求工学知識体系（REBOK）](https://www.jisa.or.jp/service/business/rebok.html)

### 前提知識
- **必須**: ソフトウェア開発の基本的な流れの理解
- **推奨**: システム開発プロジェクトへの参加経験（役割は問わない）
- **推奨**: 基本的なビジネス文書作成スキル

## 学習コンテンツ

### [1. 要件工学の基礎と重要性](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/software-design/requirements-engineering/requirements-engineering-learning-material-01.html)
要件工学の定義と目的、ソフトウェア開発における位置づけ、要件の種類（機能要件・非機能要件・制約条件）、要件工学プロセスの全体像、要件定義の失敗がもたらす影響とコスト、成功プロジェクトにおける要件管理の重要性について学びます。

### [2. 要件獲得技法（Requirements Elicitation）](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/software-design/requirements-engineering/requirements-engineering-learning-material-02.html)
ステークホルダーから要件を引き出すための各種技法を学びます。インタビュー技法、ワークショップファシリテーション、観察法、プロトタイピング、ブレインストーミング、質問票調査、既存文書分析、ユーザーストーリーマッピングなどの手法と、それぞれの適用場面を習得します。

### [3. EARS（Easy Approach to Requirements Syntax）による要件記述](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/software-design/requirements-engineering/requirements-engineering-learning-material-03.html)
シンプルで明確な要件記述のためのEARS記法を詳しく学びます。「When <条件>, the system shall <動作>」などの構文パターン、Ubiquitous（常時）、Event-driven（イベント駆動）、State-driven（状態駆動）、Optional（オプション）、Unwanted behavior（望ましくない動作）の5つのタイプと使い分けを実践的に習得します。

### [4. ユーザーストーリーとアジャイル要件管理](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/software-design/requirements-engineering/requirements-engineering-learning-material-04.html)
アジャイル開発における要件記述手法を学びます。「As a（役割）, I want（機能）, so that（目的）」形式でのユーザーストーリー作成、受け入れ条件の定義、INVEST原則（Independent、Negotiable、Valuable、Estimable、Small、Testable）、エピックとストーリーの分割、プロダクトバックログ管理について習得します。

### [5. ユースケース図とユースケース記述](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/software-design/requirements-engineering/requirements-engineering-learning-material-05.html)
UMLのユースケース図を使った要件モデリングを学びます。アクターの識別と分類、ユースケースの抽出と命名、システム境界の定義、include/extend/汎化関係の適切な使用、詳細なユースケース記述（事前条件、事後条件、基本フロー、代替フロー、例外フロー）の作成方法を実践的に習得します。

### [6. 要件分析と優先度付け技法](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/software-design/requirements-engineering/requirements-engineering-learning-material-06.html)
収集した要件の分析と優先順位付けの手法を学びます。MoSCoW法（Must have、Should have、Could have、Won't have）による優先度分類、カノモデルによる顧客満足度分析、ペアワイズ比較、100ドルテスト、リスク-価値マトリクス、依存関係分析、実現可能性評価の技法を習得します。

### [7. 非機能要件の定義と管理](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/software-design/requirements-engineering/requirements-engineering-learning-material-07.html)
システムの品質特性に関する非機能要件を体系的に学びます。ISO/IEC 25010品質モデル、性能要件（レスポンスタイム、スループット、リソース使用率）、セキュリティ要件、可用性・信頼性要件、使いやすさ要件、保守性・移植性要件の定義方法と、測定可能な指標の設定について習得します。

### [8. 要件の検証と妥当性確認](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/software-design/requirements-engineering/requirements-engineering-learning-material-08.html)
要件の品質を確保するための検証・妥当性確認技法を学びます。要件レビューの実施方法、チェックリストによる検証、プロトタイプによる妥当性確認、モデル検証、トレーサビリティ分析、要件の曖昧性・矛盾・重複の検出、テストケースによる要件の検証可能性確認について習得します。

### [9. 要件変更管理とトレーサビリティ](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/software-design/requirements-engineering/requirements-engineering-learning-material-09.html)
プロジェクト全体を通じた要件管理の手法を学びます。要件変更管理プロセス、変更要求の評価と影響分析、要件ベースライン管理、要件トレーサビリティマトリクス（RTM）の作成と活用、上流から下流への要件追跡、変更履歴管理、構成管理との連携について実践的に習得します。

### [10. 実践的な要件定義書作成演習](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/software-design/requirements-engineering/requirements-engineering-learning-material-10.html)
実際のシステム開発を想定した総合演習を行います。ECサイト、在庫管理システム、予約システムなどのケーススタディを通じて、要件獲得から要件定義書作成、レビュー、変更管理まで、要件工学の全プロセスを実践します。業界標準のテンプレートを使用した文書作成も習得します。

## 学習の進め方

1. **理論と実践の両立**: 各章の概念を理解した後、必ず実践演習に取り組みます
2. **段階的な技法習得**: 基本的な要件記述から始めて、徐々に高度な分析技法へ進みます
3. **実例での練習**: 身近なシステムやサービスを題材に要件定義を練習します
4. **フィードバックの活用**: 作成した要件文書を相互レビューして改善点を学びます
5. **ツールの併用**: 手法を理解した後、実務で使用するツールでの実践を行います

## 推奨学習期間

- **基礎習得コース** (1-4章): 3-4週間
  - 要件工学の基本概念と主要な要件記述手法の習得
- **実践活用コース** (5-7章): 3-4週間
  - 要件モデリングと分析技法、非機能要件の体系的な管理
- **応用発展コース** (8-10章): 4-5週間
  - 要件の品質保証と変更管理、実践的な要件定義書作成
- **合計学習期間**: 10-13週間（週5-6時間の学習を想定）

## 関連リソース

- [UMLモデリング学習ガイド](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/software-design/uml/README.html)
- [プロジェクト管理チートシート](https://fcircle-biz.github.io/tech_docs/cheatsheet/pm/project-management-cheatsheet.html)

## 学習目標

このガイドを完了すると、以下のスキルを身につけることができます：

- ステークホルダーから効果的に要件を引き出すことができる
- EARS記法を使って明確で検証可能な要件を記述できる
- ユーザーストーリーを作成してアジャイル開発で要件管理ができる
- ユースケース図と記述でシステムの振る舞いを正確にモデル化できる
- MoSCoW法などを使って要件の優先順位付けができる
- 非機能要件を体系的に定義し、測定可能な指標を設定できる
- 要件レビューを実施して品質を確保できる
- 要件変更を適切に管理し、トレーサビリティを維持できる
- 業界標準に準拠した要件定義書を作成できる
- 要件関連のステークホルダーとの効果的なコミュニケーションができる

## 次のステップ

このガイドライン完了後は、以下の学習に進むことをお勧めします：

- [テスト設計技法](https://fcircle-biz.github.io/tech_docs/guide/testing/test-design/README.html)
- [DevOps実践ガイド](https://fcircle-biz.github.io/tech_docs/guide/devops/ci-cd/README.html)
- [プロダクトマネジメント入門](https://fcircle-biz.github.io/tech_docs/guide/product-management/pm-basics/README.html)