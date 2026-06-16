# UML (Unified Modeling Language) 入門ガイドライン

このガイドラインでは、UML（統一モデリング言語）の基礎を完全未経験者・初心者向けに段階的に学習するためのカリキュラムを提供しています。「図を使ってシステムを説明する」という基本的な考え方から始め、実務で頻繁に使用される各種ダイアグラムの作成方法を、豊富な具体例とともに習得できます。

## 前提条件

### 必要な環境
- Webブラウザ（Chrome、Firefox、Edge など）
- 無料のUMLツール（以下のいずれか）
  - [draw.io (diagrams.net)](https://app.diagrams.net/) - ブラウザで即座に使用可能
  - [PlantUML Web版](https://www.plantuml.com/plantuml/uml/) - テキストで図を作成
- テキストエディタ（メモ帳、VS Code 等）

### 参考リソース
- [draw.io 公式サイト](https://app.diagrams.net/) - 無料のオンライン作図ツール
- [PlantUML 公式ドキュメント](https://plantuml.com/ja/) - テキストベースのUMLツール
- [UML入門（OGIS-RI）](https://www.ogis-ri.co.jp/otc/hiroba/technical/UML/) - 日本語のUML解説
- [OMG UML公式仕様](https://www.omg.org/spec/UML/) - 正式な仕様書（英語）

### 前提知識
- **必須**: 特になし（完全未経験者を対象）
- **推奨**: 基本的なパソコン操作（ファイル保存、Web検索など）
- **推奨**: プログラミングの基本用語を聞いたことがある程度
- **あると良い**: 何らかのソフトウェアやシステムを使った経験

## 学習コンテンツ

### [1. UMLとは何か - 図で伝えるソフトウェア設計](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/software-design/uml/uml-learning-material-01.html)
「そもそもUMLって何？」「なぜ図を描くの？」という疑問に答えます。言葉だけでは伝わりにくいソフトウェアの仕組みを、図を使って誰にでも分かりやすく伝える方法を学びます。UMLの歴史、13種類の図の全体像、使用場面などを具体例とともに紹介します。

### [2. UML作図ツールの基本操作](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/software-design/uml/uml-learning-material-02.html)
無料で使えるUMLツール（draw.io）の基本操作を実践的に学びます。図形の配置、線の引き方、文字の入力、保存と共有の方法など、実際に手を動かしながら操作に慣れていきます。また、PlantUMLによるテキストベースの作図も体験します。

### [3. ユースケース図入門 - システムの「使われ方」を描く](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/software-design/uml/uml-learning-material-03.html)
最も直感的で入門しやすいユースケース図から学習を始めます。「誰が」「何をするか」を図で表現する方法を、ATM、ECサイト、図書館システムなど身近な例を使って習得します。アクター、ユースケース、システム境界の概念を理解します。

### [4. クラス図の基礎 - 「モノ」と「関係」を描く](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/software-design/uml/uml-learning-material-04.html)
実務で最も頻繁に使用されるクラス図の基礎を学びます。「顧客」「商品」「注文」といった概念を四角形で表し、それらの関係を線で結ぶ方法を習得します。難しい専門用語は後回しにして、まずは「読める」「描ける」を目指します。

### [5. クラス図の詳細 - 属性・操作・関連の表現](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/software-design/uml/uml-learning-material-05.html)
クラス図をより詳細に表現する方法を学びます。属性（データ）と操作（機能）の書き方、可視性（+/-/#）の意味、関連・集約・コンポジションの違い、多重度（1対多など）の表記方法を実例を通じて理解します。

### [6. シーケンス図入門 - 時間の流れで見る処理の順番](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/software-design/uml/uml-learning-material-06.html)
「この処理の後に、あの処理が行われる」という時間的な流れを表現するシーケンス図を学びます。ログイン処理、商品購入フローなどの具体例を使って、オブジェクト間のメッセージのやり取りを視覚化する方法を習得します。

### [7. シーケンス図の応用 - 条件分岐とループの表現](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/software-design/uml/uml-learning-material-07.html)
シーケンス図でより複雑な処理を表現する方法を学びます。「もし～なら」という条件分岐（alt/opt）、「繰り返し」のループ（loop）、並行処理（par）などの複合フラグメントを使いこなす方法を習得します。

### [8. アクティビティ図 - 業務フローとアルゴリズムを描く](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/software-design/uml/uml-learning-material-08.html)
業務プロセスやプログラムの処理手順を表現するアクティビティ図を学びます。フローチャートに似た直感的な記法で、分岐・ループ・並行処理などを表現する方法を習得します。スイムレーンを使った担当者別の整理も学びます。

### [9. ステートマシン図 - 状態の変化を追跡する](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/software-design/uml/uml-learning-material-09.html)
「注文中」「発送済み」「配達完了」といった状態の変化を表現するステートマシン図を学びます。状態、遷移、トリガー、ガード条件などの基本要素を、ECサイトの注文管理やエレベーターの動作など身近な例で理解します。

### [10. コンポーネント図・パッケージ図 - システムの構成部品を描く](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/software-design/uml/uml-learning-material-10.html)
システムを構成する部品（コンポーネント）とその依存関係を表現する方法を学びます。大規模なシステムを整理して把握するためのパッケージ図も合わせて習得します。Webアプリケーションの構成例を通じて実践的に学びます。

### [11. デプロイメント図 - システムの配置を描く](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/software-design/uml/uml-learning-material-11.html)
「どのサーバーに何が配置されているか」を表現するデプロイメント図を学びます。ノード、アーティファクト、通信経路などの基本要素を理解し、Webシステムやクラウド環境の構成を図示する方法を習得します。

### [12. 実践演習 - 身近なシステムをUMLで描く](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/software-design/uml/uml-learning-material-12.html)
これまで学んだ知識を総合して、実際のシステムをUMLで表現する演習を行います。コンビニのPOSシステム、チャットアプリ、予約管理システムなどを題材に、複数の図を組み合わせた設計ドキュメントを作成します。

### [13. チーム開発でのUML活用 - 設計レビューと共有](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/software-design/uml/uml-learning-material-13.html)
実際のチーム開発でUMLをどのように活用するかを学びます。設計レビューでの図の使い方、ドキュメントの整理方法、バージョン管理、PlantUMLとGitの連携など、実務で役立つテクニックを紹介します。

### [14. UML総まとめと次のステップ](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/software-design/uml/uml-learning-material-14.html)
全体の復習と、UMLをより深く学ぶための道筋を示します。各図の使い分け方のまとめ、よくある間違いとその対処法、業界でのUMLの使われ方、デザインパターンやDDDなど次の学習テーマへの橋渡しを行います。

## 学習の進め方

1. **まずは全体像を把握**: 第1章でUMLの全体像を理解し、「こんなことができる」を把握します
2. **ツールを使いながら学ぶ**: 第2章でツールの操作を覚え、以降は実際に図を描きながら学習します
3. **簡単な図から始める**: ユースケース図、クラス図の基礎から始め、徐々に複雑な図に進みます
4. **身近な例で理解**: 各章で紹介される身近なシステムの例を、自分の言葉で説明できるか確認します
5. **練習問題に挑戦**: 各章末の練習問題で理解度をチェックします
6. **自分でも描いてみる**: 興味のあるアプリやシステムを自分でUMLで描いてみましょう

## 推奨所要時間

| 章 | 内容 | 目安時間 |
|----------|------|----------|
| 第1章 | UMLとは何か - 図で伝えるソフトウェア設計 | 45分 |
| 第2章 | UML作図ツールの基本操作 | 45分 |
| 第3章 | ユースケース図入門 - システムの「使われ方」を描く | 45分 |
| 第4章 | クラス図の基礎 - 「モノ」と「関係」を描く | 1時間 |
| 第5章 | クラス図の詳細 - 属性・操作・関連の表現 | 1時間15分 |
| 第6章 | シーケンス図入門 - 時間の流れで見る処理の順番 | 1時間 |
| 第7章 | シーケンス図の応用 - 条件分岐とループの表現 | 1時間15分 |
| 第8章 | アクティビティ図 - 業務フローとアルゴリズムを描く | 1時間 |
| 第9章 | ステートマシン図 - 状態の変化を追跡する | 1時間 |
| 第10章 | コンポーネント図・パッケージ図 - システムの構成部品を描く | 1時間15分 |
| 第11章 | デプロイメント図 - システムの配置を描く | 1時間 |
| 第12章 | 実践演習 - 身近なシステムをUMLで描く | 1時間30分 |
| 第13章 | チーム開発でのUML活用 - 設計レビューと共有 | 1時間 |
| 第14章 | UML総まとめと次のステップ | 45分 |
| **合計** | | **約14.5時間** |

## 関連リソース

- [オブジェクト指向プログラミング入門](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/concepts/oop/) - UMLの背景にある考え方
- [ソフトウェア設計入門](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/software-design/) - 設計全般の基礎知識
- [要件定義入門](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/requirements/) - ユースケース図が活躍する分野

## 学習目標

このガイドを完了すると、以下のスキルを身につけることができます：

- UMLとは何か、なぜ使うのかを他の人に説明できる
- 無料のツール（draw.io、PlantUML）を使ってUML図を作成できる
- ユースケース図でシステムの「誰が何をするか」を表現できる
- クラス図で「モノとモノの関係」を正確に表現できる
- シーケンス図で「処理の流れ」を時系列で表現できる
- アクティビティ図で「業務の流れ」を分かりやすく描ける
- ステートマシン図で「状態の変化」を追跡できる
- システム構成（コンポーネント図、デプロイメント図）を図示できる
- 複数のUML図を組み合わせて、システム全体を説明できる
- チーム開発でUMLを使った設計の共有ができる

## 次のステップ

このガイドライン完了後は、以下の学習に進むことをお勧めします：

- [デザインパターン入門](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/software-design/design-patterns/) - クラス図で表現される設計の定石
- [ドメイン駆動設計（DDD）入門](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/software-design/ddd/) - ビジネスロジックを中心にした設計手法
- [アジャイル開発入門](https://fcircle-biz.github.io/tech_docs/guide/development-processes/agile/) - UMLを活用した反復的な開発手法
- [データベース設計入門（ER図）](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/data-modeling/er-diagram/) - UMLと併用されるデータモデリング
