# ER図（Entity-Relationship Diagram）入門ガイドライン

このガイドラインでは、ER図（Entity-Relationship Diagram、実体関連図）の基礎を完全未経験者・初心者向けに段階的に学習するためのカリキュラムを提供しています。「データベースって何？」「なぜ図を描くの？」という基本的な疑問から始め、実務で必要となるER図の作成スキルを、無料ツールdraw.ioを使いながら実践的に習得できます。

## 前提条件

### 必要な環境
- Webブラウザ（Chrome、Firefox、Edge など）
- [draw.io (diagrams.net)](https://app.diagrams.net/) - 無料のオンライン作図ツール
  - インストール不要、ブラウザで即座に使用可能
  - Googleドライブ、OneDrive連携で保存も簡単
- テキストエディタ（メモ帳、VS Code 等）

### 参考リソース
- [draw.io 公式サイト](https://app.diagrams.net/) - 本ガイドで使用する無料作図ツール
- [draw.io ER図テンプレート](https://www.diagrams.net/blog/entity-relationship-tables) - ER図専用のテンプレート
- [Wikipedia: ER図](https://ja.wikipedia.org/wiki/%E5%AE%9F%E4%BD%93%E9%96%A2%E9%80%A3%E3%83%A2%E3%83%87%E3%83%AB) - 基本概念の解説
- [データベース入門（@IT）](https://atmarkit.itmedia.co.jp/ait/articles/0605/02/news001.html) - データベースの基礎知識

### 前提知識
- **必須**: 特になし（完全未経験者を対象）
- **推奨**: 基本的なパソコン操作（ファイル保存、Web検索など）
- **推奨**: Excelで表を作成した経験があるとイメージしやすい
- **あると良い**: 何らかのWebサービスやアプリを使った経験

## 学習コンテンツ

### [1. ER図とは何か - データベース設計の第一歩](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/data-modeling/er-diagram/er-diagram-learning-material-01.html)
「ER図って何？」「なぜ図を描く必要があるの？」という疑問に答えます。Excelで顧客リストを管理する身近な例から始め、データベースとは何か、ER図がどのような場面で役立つかを理解します。データの「関係性」を視覚化することの重要性を、オンラインショッピングや図書館システムなどの具体例で学びます。

### [2. draw.io の基本操作 - ER図を描く準備をしよう](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/data-modeling/er-diagram/er-diagram-learning-material-02.html)
無料ツールdraw.ioの基本操作を実践的に学びます。アカウント作成から画面の見方、図形の配置・接続・編集、色の変更、テキスト入力、保存・エクスポートまで、実際に手を動かしながら操作に慣れていきます。ER図専用のテンプレートとシェイプライブラリの使い方も紹介します。

### [3. エンティティの基本 - 「もの」を四角形で表す](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/data-modeling/er-diagram/er-diagram-learning-material-03.html)
ER図の最も基本的な要素「エンティティ（実体）」を学びます。「顧客」「商品」「注文」など、管理したい「もの」や「こと」を四角形で表現する方法を習得します。エンティティの見つけ方、良いエンティティ名の付け方、実務でよく使われるエンティティの例を通じて理解を深めます。

### [4. 属性の表現 - エンティティの詳細情報を記録する](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/data-modeling/er-diagram/er-diagram-learning-material-04.html)
エンティティが持つ「属性（アトリビュート）」を学びます。「顧客名」「住所」「電話番号」といった個々のデータ項目をどのように表現するか、draw.ioを使って実際に描きながら習得します。IE記法（鳥の足記法）とChen記法の違い、属性の種類（単純属性・複合属性・導出属性）についても学びます。

### [5. リレーションシップ入門 - エンティティ同士のつながりを描く](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/data-modeling/er-diagram/er-diagram-learning-material-05.html)
ER図の核心である「リレーションシップ（関連）」を学びます。「顧客が商品を注文する」「社員が部署に所属する」といったエンティティ間の関係を線で表現する方法を習得します。リレーションシップの見つけ方、名前の付け方、draw.ioでの描き方を実践的に学びます。

### [6. カーディナリティの理解 - 1対1、1対多、多対多](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/data-modeling/er-diagram/er-diagram-learning-material-06.html)
「一人の顧客は複数の注文ができる」「一つの注文は一人の顧客に属する」といった数量関係（カーディナリティ）を表現する方法を学びます。1対1、1対多、多対多の違いを具体例で理解し、IE記法（鳥の足記法）での表現方法をdraw.ioで実践します。オプショナリティ（必須/任意）の概念も学びます。

### [7. 主キーと外部キー - データを識別し関連付ける](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/data-modeling/er-diagram/er-diagram-learning-material-07.html)
データベース設計で最も重要な概念「主キー（Primary Key）」と「外部キー（Foreign Key）」を学びます。なぜ「顧客ID」「注文番号」が必要なのか、どのようにしてエンティティ同士を正しく関連付けるのかを理解します。ER図での主キー・外部キーの表記方法をdraw.ioで実践します。

### [8. 概念ER図の作成 - ビジネス要件から設計を始める](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/data-modeling/er-diagram/er-diagram-learning-material-08.html)
実際の業務要件から概念ER図を作成する方法を学びます。「オンライン書店システム」を題材に、要件のヒアリングからエンティティの抽出、リレーションシップの特定、概念ER図の完成までの一連の流れを実践します。技術詳細を省いたビジネス視点でのモデリングを習得します。

### [9. 論理ER図への展開 - 詳細な設計を進める](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/data-modeling/er-diagram/er-diagram-learning-material-09.html)
概念ER図を基に、より詳細な論理ER図を作成する方法を学びます。属性の追加、データ型の検討、主キー・外部キーの明確化、多対多リレーションシップの解消（中間テーブルの作成）などを実践します。draw.ioでの詳細な表現方法を習得します。

### [10. 正規化入門 - データの重複と矛盾を防ぐ](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/data-modeling/er-diagram/er-diagram-learning-material-10.html)
データベース設計の品質を高める「正規化」の基本を学びます。なぜデータの重複が問題になるのか、第1正規形・第2正規形・第3正規形とは何かを具体例で理解します。正規化を適用してER図を改善する方法をdraw.ioで実践します。過度な正規化の弊害についても触れます。

### [11. 物理ER図と実装 - SQLへの変換を意識する](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/data-modeling/er-diagram/er-diagram-learning-material-11.html)
論理ER図から実際のデータベース（SQL）に落とし込むための物理ER図を学びます。テーブル名・カラム名の命名規則、データ型の選択、インデックスの考慮など、実装を意識した設計を習得します。ER図からCREATE TABLE文を生成する流れを体験します。

### [12. 実践演習1 - 小規模システムをER図で設計する](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/data-modeling/er-diagram/er-diagram-learning-material-12.html)
これまで学んだ知識を総合して、実際のシステムをER図で設計する演習を行います。「タスク管理アプリ」「レシピ共有サイト」「イベント予約システム」など、身近な題材から1つを選び、要件定義からER図完成までを実践します。

### [13. 実践演習2 - 既存システムからER図を読み解く](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/data-modeling/er-diagram/er-diagram-learning-material-13.html)
実務では既存のER図を読み解く機会も多くあります。ECサイト、SNS、業務システムなど実際のシステムを想定したER図を読み解き、設計意図を理解する練習を行います。ER図から業務フローを推測する方法も学びます。

### [14. ER図とUMLの関係 - クラス図との比較](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/data-modeling/er-diagram/er-diagram-learning-material-14.html)
ER図と似た役割を持つUMLクラス図との関係を学びます。両者の類似点・相違点、使い分けの指針、連携した設計方法を理解します。オブジェクト指向設計とデータベース設計をつなぐ視点を養います。

### [15. 総まとめと次のステップ - ER図マスターへの道](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/data-modeling/er-diagram/er-diagram-learning-material-15.html)
全体の復習と、ER図をより深く活用するための道筋を示します。各章の重要ポイントのまとめ、よくある間違いとその対処法、実務での活用シーン、データベース設計の発展的なトピック（非正規化、分散データベース、NoSQL）への橋渡しを行います。

## 学習の進め方

1. **まずは全体像を把握**: 第1章でER図の目的と活用場面を理解し、学習のゴールを明確にします
2. **ツールを使いながら学ぶ**: 第2章でdraw.ioの操作を覚え、以降は実際に図を描きながら学習を進めます
3. **基本要素を確実に習得**: エンティティ、属性、リレーションシップ、カーディナリティ（第3-6章）を繰り返し練習します
4. **キー概念を深く理解**: 主キーと外部キー（第7章）はデータベース設計の核心なので、しっかり理解します
5. **段階的な設計プロセスを体験**: 概念ER図→論理ER図→物理ER図（第8-11章）の流れを実践します
6. **演習で力をつける**: 第12-13章の演習で、実際のシステム設計に挑戦します
7. **関連知識を広げる**: UMLとの関係（第14章）を学び、設計スキルの幅を広げます

## 推奨所要時間

| 章 | 内容 | 目安時間 |
|----------|------|----------|
| 第1章 | ER図とは何か - データベース設計の第一歩 | 45分 |
| 第2章 | draw.io の基本操作 - ER図を描く準備をしよう | 45分 |
| 第3章 | エンティティの基本 - 「もの」を四角形で表す | 45分 |
| 第4章 | 属性の表現 - エンティティの詳細情報を記録する | 45分 |
| 第5章 | リレーションシップ入門 - エンティティ同士のつながりを描く | 45分 |
| 第6章 | カーディナリティの理解 - 1対1、1対多、多対多 | 1時間 |
| 第7章 | 主キーと外部キー - データを識別し関連付ける | 1時間 |
| 第8章 | 概念ER図の作成 - ビジネス要件から設計を始める | 1時間15分 |
| 第9章 | 論理ER図への展開 - 詳細な設計を進める | 1時間15分 |
| 第10章 | 正規化入門 - データの重複と矛盾を防ぐ | 1時間 |
| 第11章 | 物理ER図と実装 - SQLへの変換を意識する | 1時間15分 |
| 第12章 | 実践演習1 - 小規模システムをER図で設計する | 1時間30分 |
| 第13章 | 実践演習2 - 既存システムからER図を読み解く | 1時間 |
| 第14章 | ER図とUMLの関係 - クラス図との比較 | 45分 |
| 第15章 | 総まとめと次のステップ - ER図マスターへの道 | 45分 |
| **合計** | | **約15.5時間** |

## 関連リソース

- [SQL入門ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/sql/) - ER図で設計したデータベースを操作するSQL
- [UML入門ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/software-design/uml/) - ソフトウェア設計のための図式表現
- [要件定義入門](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/software-design/requirements-engineering/) - システム開発の上流工程

## 学習目標

このガイドを完了すると、以下のスキルを身につけることができます：

- ER図とは何か、なぜデータベース設計に必要かを他の人に説明できる
- draw.ioを使って、見やすく分かりやすいER図を作成できる
- ビジネス要件からエンティティを適切に抽出できる
- エンティティの属性を漏れなく定義できる
- エンティティ間のリレーションシップを正しく表現できる
- カーディナリティ（1対1、1対多、多対多）を適切に設定できる
- 主キーと外部キーを用いてエンティティを正しく関連付けられる
- 概念ER図→論理ER図→物理ER図の段階的な設計プロセスを実践できる
- 正規化の基本（第1-第3正規形）を適用してER図を改善できる
- 既存のER図を読み解き、設計意図を理解できる
- ER図とUMLクラス図の違いを理解し、適切に使い分けられる

## 次のステップ

このガイドライン完了後は、以下の学習に進むことをお勧めします：

- [SQL入門ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/sql/) - ER図で設計したテーブルを実際に操作する
- [Oracle Database入門](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/oracle/) - 企業システムで広く使われるRDBMS
- [UML入門ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/software-design/uml/) - ソフトウェア全体の設計手法を学ぶ
- [要件定義入門](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/software-design/requirements-engineering/) - ER図作成の前工程を理解する
