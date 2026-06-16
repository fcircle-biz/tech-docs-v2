# UML (Unified Modeling Language) 学習ガイドライン

このガイドラインでは、UML（統一モデリング言語）の基礎を入門者向けに段階的に学習するためのカリキュラムを提供しています。ソフトウェア設計の可視化と文書化に不可欠なUMLの各種図法を、実践的な例題を通じて習得できます。

## 前提条件
### 必要な環境
- 図形描画ツール（draw.io、PlantUML、StarUML、Enterprise Architect等）
- テキストエディタ（PlantUML使用時）
- Webブラウザ（オンラインツール使用時）

### 参考リソース
- [OMG UML公式仕様書](https://www.omg.org/spec/UML/)
- [PlantUML公式ドキュメント](https://plantuml.com/ja/)
- [draw.io（diagrams.net）](https://app.diagrams.net/)
- [UML 2.5仕様書（日本語要約）](https://www.ogis-ri.co.jp/otc/hiroba/technical/UML/)

### 前提知識
- **必須**: プログラミングの基本概念（変数、関数、条件分岐）
- **推奨**: オブジェクト指向プログラミングの基礎知識
- **推奨**: 何らかのソフトウェア開発経験（小規模でも可）

## 学習コンテンツ

### [1. UML入門と基本概念](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/software-design/uml/uml-learning-material-01.html)
UMLの歴史と目的、モデリングの重要性、UML 2.5の概要、図の分類（構造図と振る舞い図）、モデリングツールの選定と環境構築について学びます。基本的な記法ルールと命名規則も習得します。

### [2. クラス図の基礎](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/software-design/uml/uml-learning-material-02.html)
オブジェクト指向設計の中核となるクラス図の作成方法を学びます。クラスの表記法、属性と操作の定義、可視性（public/private/protected）、関連・集約・コンポジション、多重度の表現、インターフェースと抽象クラスの記法を習得します。

### [3. ユースケース図とアクター](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/software-design/uml/uml-learning-material-03.html)
システムの機能要件を可視化するユースケース図の作成方法を学びます。アクターの識別、ユースケースの抽出、システム境界の定義、include/extend関係、汎化関係の表現方法を実践的な例題を通じて習得します。

### [4. シーケンス図による相互作用モデリング](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/software-design/uml/uml-learning-material-04.html)
オブジェクト間の時系列的な相互作用を表現するシーケンス図を学びます。ライフライン、メッセージの種類（同期/非同期/リターン）、活性化ボックス、複合フラグメント（alt/opt/loop/par）、相互作用の使用について詳しく解説します。

### [5. アクティビティ図によるワークフロー設計](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/software-design/uml/uml-learning-material-05.html)
ビジネスプロセスやアルゴリズムを可視化するアクティビティ図の作成方法を学びます。開始/終了ノード、アクション、制御フロー、分岐と結合、並行処理（フォーク/ジョイン）、スイムレーンによる責任の明確化について習得します。

### [6. ステートマシン図による状態遷移モデリング](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/software-design/uml/uml-learning-material-06.html)
オブジェクトのライフサイクルと状態遷移を表現するステートマシン図を学びます。状態の定義、遷移とトリガー、ガード条件、アクション（entry/do/exit）、複合状態、並行状態、履歴状態の概念と実装方法を習得します。

### [7. コンポーネント図とデプロイメント図](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/software-design/uml/uml-learning-material-07.html)
システムの物理的な構造を表現する図法を学びます。コンポーネントの定義と依存関係、インターフェースの提供と要求、パッケージ図による論理構造、デプロイメント図によるハードウェア配置、ノードとアーティファクトの関係を理解します。

### [8. その他の重要な図と高度な技法](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/software-design/uml/uml-learning-material-08.html)
コミュニケーション図、タイミング図、相互作用概要図、オブジェクト図など、その他のUML図を学びます。また、ステレオタイプ、タグ付き値、制約（OCL）などの拡張メカニズム、プロファイルの概念についても理解を深めます。

### [9. UMLツールの実践活用](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/software-design/uml/uml-learning-material-09.html)
主要なUMLツールの使い方を実践的に学びます。PlantUMLによるテキストベースの図作成、draw.ioでのビジュアル編集、商用ツール（Enterprise Architect、Visual Paradigm）の特徴、コード生成とリバースエンジニアリング、バージョン管理との連携方法を習得します。

### [10. 実践的なシステム設計演習](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/software-design/uml/uml-learning-material-10.html)
実際のシステム開発を想定した総合演習を行います。ECサイト、図書館管理システム、SNSアプリケーションなどの設計を通じて、要件分析から詳細設計まで、複数のUML図を組み合わせた統合的なモデリング手法を実践します。

## 学習の進め方

1. **基礎から着実に**: UMLの基本概念（第1章）を理解してから、各図法を順番に学習します
2. **手を動かして学ぶ**: 各章の例題を実際にツールで描きながら理解を深めます
3. **実例で理解**: 身近なシステムやアプリケーションをUMLでモデリングしてみます
4. **段階的に複雑化**: 簡単な図から始めて、徐々に詳細で複雑な図を作成していきます
5. **複数の図を連携**: 後半では、複数の図を組み合わせたシステム全体の設計を練習します

## 推奨学習期間

- **基礎習得コース** (1-3章): 2-3週間
  - UMLの基本概念とよく使う図（クラス図、ユースケース図）の習得
- **実践活用コース** (4-7章): 3-4週間
  - 動的な振る舞いを表現する図と物理構造の図の習得
- **応用発展コース** (8-10章): 3-4週間
  - 高度な技法とツール活用、実践的な設計演習
- **合計学習期間**: 8-11週間（週4-6時間の学習を想定）

## 関連リソース

- [ソフトウェア設計パターンチートシート](https://fcircle-biz.github.io/tech_docs/cheatsheet/design/design-patterns-cheatsheet.html)
- [オブジェクト指向設計原則ガイド](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/software-design/ood-principles/README.html)
- [PlantUMLクイックリファレンス](https://fcircle-biz.github.io/tech_docs/cheatsheet/tools/plantuml-cheatsheet.html)

## 学習目標

このガイドを完了すると、以下のスキルを身につけることができます：

- UMLの各種図法を理解し、適切な場面で使い分けることができる
- クラス図を使ってオブジェクト指向設計を正確に表現できる
- ユースケース図でシステムの機能要件を可視化できる
- シーケンス図やアクティビティ図で動的な振る舞いをモデリングできる
- 複数のUML図を組み合わせて、システム全体の設計を文書化できる
- UMLツールを活用して効率的に図を作成・管理できる
- チーム開発において、UMLを使った設計の共有とレビューができる
- 既存システムのリバースエンジニアリングでUMLを活用できる

## 次のステップ

このガイドライン完了後は、以下の学習に進むことをお勧めします：

- [デザインパターン実践ガイド](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/software-design/design-patterns/README.html)
- [ドメイン駆動設計（DDD）入門](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/software-design/ddd/README.html)
- [SysML（システムモデリング言語）入門](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/software-design/sysml/README.html)