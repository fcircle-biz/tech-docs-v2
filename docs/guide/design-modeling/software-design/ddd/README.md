# ドメイン駆動設計（DDD）入門ガイドライン

このガイドラインでは、ドメイン駆動設計（Domain-Driven Design / DDD）の基礎を初心者向けに段階的に学習するためのカリキュラムを提供しています。「ビジネスの言葉でソフトウェアを設計する」という基本的な考え方から始め、エンティティ、値オブジェクト、集約などの戦術的パターンから、境界づけられたコンテキストなどの戦略的パターンまで、実践的な例とともに習得できます。

## 前提条件

### 必要な環境
- Webブラウザ（Chrome、Firefox、Edge など）
- テキストエディタまたはIDE（VS Code、IntelliJ IDEA 等）
- いずれかのプログラミング言語の実行環境（Java、C#、Python、TypeScript など）
- 図を描くためのツール（以下のいずれか）
  - [draw.io (diagrams.net)](https://app.diagrams.net/) - ブラウザで即座に使用可能
  - [Miro](https://miro.com/) - チームでのモデリングに最適

### 参考リソース
- [Domain-Driven Design Reference（Eric Evans）](https://www.domainlanguage.com/ddd/reference/) - DDD用語の公式リファレンス
- [Martin Fowler - DDD](https://martinfowler.com/tags/domain%20driven%20design.html) - DDDに関する解説記事
- [Microsoft - DDDガイド](https://learn.microsoft.com/ja-jp/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/) - .NETでのDDD実装ガイド
- [DDD Community](https://dddcommunity.org/) - DDDコミュニティ公式サイト

### 前提知識
- **必須**: オブジェクト指向プログラミングの基本（クラス、オブジェクト、継承、ポリモーフィズム）
- **必須**: 基本的なプログラミング経験（いずれかの言語で簡単なアプリケーションを作成できる程度）
- **推奨**: データベースの基本知識（テーブル、リレーション）
- **推奨**: Webアプリケーション開発の経験
- **あると良い**: UMLの基本（クラス図、シーケンス図が読める程度）

## 学習コンテンツ

### [1. DDDとは何か - ビジネスとソフトウェアをつなぐ設計手法](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/software-design/ddd/ddd-learning-material-01.html)
「そもそもDDDって何？」「従来の設計と何が違うの？」という疑問に答えます。複雑なビジネスロジックを持つシステムで、なぜドメインを中心に設計することが重要なのかを理解します。DDDの歴史、基本的な考え方、適用すべき場面を具体例とともに紹介します。

### [2. ユビキタス言語 - チーム全員で共有する共通言語](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/software-design/ddd/ddd-learning-material-02.html)
DDDの最も重要な概念であるユビキタス言語を学びます。開発者とビジネス担当者が同じ言葉を使うことで、認識のズレを防ぎ、正確なソフトウェアを作る方法を習得します。用語集の作り方、モデルとコードの一貫性を保つ方法を実践的に学びます。

### [3. ドメインモデルの基礎 - ビジネスを図で表現する](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/software-design/ddd/ddd-learning-material-03.html)
ドメインモデルとは何か、どのように作成するかを学びます。ビジネスの概念を図（クラス図やオブジェクト図）で表現し、関係者全員が理解できるモデルを作る方法を習得します。ECサイトの注文管理を例に、モデリングの実践を行います。

### [4. エンティティ - 識別子を持つビジネスオブジェクト](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/software-design/ddd/ddd-learning-material-04.html)
DDDの戦術的パターンの学習を開始します。「同じ注文番号の注文は同一である」のように、識別子（ID）によってアイデンティティが決まるエンティティの概念と実装方法を学びます。ライフサイクル、同一性、変更可能性について理解を深めます。

### [5. 値オブジェクト - 属性の組み合わせで意味を持つオブジェクト](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/software-design/ddd/ddd-learning-material-05.html)
「金額」「住所」「メールアドレス」など、その値自体が意味を持つ値オブジェクトを学びます。不変性、等価性、自己検証などの特性を理解し、エンティティとの使い分け方を習得します。コードの品質を高める値オブジェクトの効果的な活用法を学びます。

### [6. 集約 - 一貫性を保つためのまとまり](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/software-design/ddd/ddd-learning-material-06.html)
関連するエンティティと値オブジェクトをグループ化する集約の概念を学びます。集約ルート、整合性境界、不変条件の保護について理解し、適切な集約の設計方法を習得します。「注文」と「注文明細」の関係を例に、実践的な集約設計を行います。

### [7. リポジトリ - 集約の永続化と取得](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/software-design/ddd/ddd-learning-material-07.html)
集約をデータベースに保存し、取得するためのリポジトリパターンを学びます。永続化の詳細をドメイン層から隠蔽し、ドメインモデルの純粋性を保つ方法を習得します。インターフェースの設計、実装の分離、テスタビリティの向上について理解します。

### [8. ドメインサービス - エンティティに属さないビジネスロジック](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/software-design/ddd/ddd-learning-material-08.html)
複数のエンティティにまたがる処理や、特定のエンティティに属さないビジネスロジックを扱うドメインサービスを学びます。「送金処理」「在庫確認」などの例を通じて、ドメインサービスの適切な使い方と、過度な使用を避ける方法を理解します。

### [9. ファクトリ - 複雑なオブジェクト生成のカプセル化](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/software-design/ddd/ddd-learning-material-09.html)
複雑な集約や関連するオブジェクト群を生成するためのファクトリパターンを学びます。生成ロジックのカプセル化、不変条件の保証、テストのしやすさなど、ファクトリを使うメリットと実装方法を習得します。

### [10. 境界づけられたコンテキスト - ドメインの分割と統治](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/software-design/ddd/ddd-learning-material-10.html)
DDDの戦略的パターンの学習を開始します。大規模なシステムをどのように分割するか、「顧客」という同じ言葉が販売・配送・サポートで異なる意味を持つ場合にどう対処するかを学びます。コンテキストの境界を見極め、適切に分割する方法を習得します。

### [11. コンテキストマップ - 複数コンテキストの関係を可視化する](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/software-design/ddd/ddd-learning-material-11.html)
複数の境界づけられたコンテキスト間の関係を表現するコンテキストマップを学びます。共有カーネル、カスタマー・サプライヤー、腐敗防止層などのパターンを理解し、チーム間・システム間の統合戦略を立てる方法を習得します。

### [12. レイヤードアーキテクチャ - DDDを支える構造](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/software-design/ddd/ddd-learning-material-12.html)
DDDを実装するためのアーキテクチャパターンを学びます。プレゼンテーション層、アプリケーション層、ドメイン層、インフラストラクチャ層の役割と依存関係を理解し、各層に何を配置すべきかを習得します。

### [13. ドメインイベント - システム内外への変更の通知](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/software-design/ddd/ddd-learning-material-13.html)
「注文が確定された」「在庫が減少した」など、ドメインで発生した重要な出来事を表現するドメインイベントを学びます。イベントの設計、発行、購読の方法を理解し、疎結合なシステム設計への応用を習得します。

### [14. 実践演習 - ECサイトをDDDで設計する](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/software-design/ddd/ddd-learning-material-14.html)
これまで学んだ知識を総合して、ECサイトの注文管理システムをDDDで設計する演習を行います。ユビキタス言語の定義、ドメインモデルの作成、集約の設計、リポジトリの実装まで、一連の流れを実践します。

### [15. 既存システムへのDDD適用 - 段階的なリファクタリング](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/software-design/ddd/ddd-learning-material-15.html)
レガシーシステムにDDDを適用する方法を学びます。腐敗防止層を使った段階的な移行、ストラングラーパターン、バブルコンテキストなど、現実的なアプローチを習得します。既存コードを活かしながらドメインモデルを導入する戦略を理解します。

### [16. DDDと他の設計パターンの組み合わせ](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/software-design/ddd/ddd-learning-material-16.html)
DDDとCQRS（コマンドクエリ責務分離）、イベントソーシング、マイクロサービスなどの組み合わせ方を学びます。それぞれのパターンがDDDをどのように補完するか、いつ採用すべきかを理解し、より高度な設計への道筋を把握します。

## 学習の進め方

1. **概念の理解から始める**: 第1-2章でDDDの基本的な考え方とユビキタス言語を理解し、DDDのマインドセットを身につけます
2. **戦術的パターンを習得**: 第3-9章でエンティティ、値オブジェクト、集約などの実装パターンを、コードを書きながら学習します
3. **戦略的パターンへ進む**: 第10-11章で境界づけられたコンテキストとコンテキストマップを学び、大規模システムの設計力を養います
4. **アーキテクチャを整理**: 第12-13章でレイヤードアーキテクチャとドメインイベントを学び、全体構造を把握します
5. **実践で定着させる**: 第14章の演習で総合的な設計を体験し、第15-16章で応用的なトピックを学びます
6. **自分のプロジェクトに適用**: 学んだ内容を実際のプロジェクトで試し、理解を深めます

## 推奨所要時間

| 章 | 内容 | 目安時間 |
|----------|------|----------|
| 第1章 | DDDとは何か - ビジネスとソフトウェアをつなぐ設計手法 | 45分 |
| 第2章 | ユビキタス言語 - チーム全員で共有する共通言語 | 1時間 |
| 第3章 | ドメインモデルの基礎 - ビジネスを図で表現する | 1時間 |
| 第4章 | エンティティ - 識別子を持つビジネスオブジェクト | 1時間15分 |
| 第5章 | 値オブジェクト - 属性の組み合わせで意味を持つオブジェクト | 1時間15分 |
| 第6章 | 集約 - 一貫性を保つためのまとまり | 1時間30分 |
| 第7章 | リポジトリ - 集約の永続化と取得 | 1時間15分 |
| 第8章 | ドメインサービス - エンティティに属さないビジネスロジック | 1時間 |
| 第9章 | ファクトリ - 複雑なオブジェクト生成のカプセル化 | 1時間 |
| 第10章 | 境界づけられたコンテキスト - ドメインの分割と統治 | 1時間30分 |
| 第11章 | コンテキストマップ - 複数コンテキストの関係を可視化する | 1時間30分 |
| 第12章 | レイヤードアーキテクチャ - DDDを支える構造 | 1時間15分 |
| 第13章 | ドメインイベント - システム内外への変更の通知 | 1時間15分 |
| 第14章 | 実践演習 - ECサイトをDDDで設計する | 2時間 |
| 第15章 | 既存システムへのDDD適用 - 段階的なリファクタリング | 1時間30分 |
| 第16章 | DDDと他の設計パターンの組み合わせ | 1時間30分 |
| **合計** | | **約20.5時間** |

## 関連リソース

- [UML入門](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/software-design/uml/) - ドメインモデルを図で表現するための記法
- [ER図・データモデリング入門](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/data-modeling/er-diagram/) - データベース設計の基礎知識
- [要件定義入門](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/software-design/requirements-engineering/) - ドメイン知識を引き出すための技法

## 学習目標

このガイドを完了すると、以下のスキルを身につけることができます：

- DDDとは何か、なぜ必要なのかを他の人に説明できる
- ユビキタス言語を定義し、チーム内で共有できる
- ドメインモデルを作成し、ビジネスの概念を図で表現できる
- エンティティと値オブジェクトを適切に区別し、実装できる
- 集約を設計し、ビジネスルールの整合性を保護できる
- リポジトリパターンを使って永続化の詳細を隠蔽できる
- ドメインサービスとファクトリを適切に使い分けられる
- 境界づけられたコンテキストを識別し、システムを適切に分割できる
- コンテキストマップを使って、複数コンテキスト間の関係を設計できる
- レイヤードアーキテクチャでDDDを実装する構造を理解している
- ドメインイベントを使って疎結合なシステムを設計できる
- 既存システムにDDDを段階的に適用する戦略を立てられる

## 次のステップ

このガイドライン完了後は、以下の学習に進むことをお勧めします：

- [マイクロサービス設計入門](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/software-design/microservices/) - DDDと相性の良い分散システム設計
- [イベント駆動アーキテクチャ入門](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/software-design/event-driven/) - ドメインイベントを活用した高度な設計
- [クリーンアーキテクチャ入門](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/software-design/clean-architecture/) - DDDと組み合わせるアーキテクチャパターン
- [テスト駆動開発（TDD）入門](https://fcircle-biz.github.io/tech_docs/guide/development-processes/tdd/) - DDDと組み合わせる開発手法
