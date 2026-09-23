# DB設計入門（ER図・正規化） 学習ガイドライン

このガイドラインでは、**リレーショナルデータベースの設計（DB設計）** の基礎を、入門者向けに段階的に学習するためのカリキュラムを提供しています。

「SQL は少し書けるようになったが、テーブルをどう分ければよいのか分からない」「ER図や正規化という言葉は聞くが、実務でどう使うのかがつかめない」という方を対象に、**業務の要件を読み解く → ER図で表す → 正規化で整える → PostgreSQL のテーブル定義（DDL）に落とす** という設計の一連の流れを、1つの共通題材を通して体験します。

## 前提条件

### 必要な環境

- Web ブラウザ（本ガイドの ER図・表はすべてブラウザ上で閲覧できます）
- 紙とペン、またはホワイトボード／お絵描きツール（ER図の手書き練習用）
- （任意）DDL を実際に試したい場合: PostgreSQL 17（本ガイドの基準バージョン。より新しいバージョンでも可）と pgAdmin 4 または A5:SQL Mk-2（[SQL入門ガイド](https://fcircle-biz.github.io/tech-docs-v2/guide/database/sql/sql-learning-material-03.html) の第3章で導入方法を解説）
- （任意）ER図作成ツール: draw.io（diagrams.net）、A5:SQL Mk-2 の ER図機能、Mermaid Live Editor など

### 参考リソース

- [PostgreSQL 公式ドキュメント（日本語）](https://www.postgresql.jp/document/)
- [Mermaid ER図の記法（Entity Relationship Diagrams）](https://mermaid.js.org/syntax/entityRelationshipDiagram.html)
- [draw.io（diagrams.net）](https://www.drawio.com/)
- [A5:SQL Mk-2 公式サイト](https://a5m2.mmatsubara.com/)

### 前提知識

- **必須**: 基本的な PC 操作、Excel などで「表」を扱った経験
- **推奨**: SQL の基本（`SELECT`・`CREATE TABLE`・`JOIN` が何をするかの大まかな理解）。[SQL入門ガイド](https://fcircle-biz.github.io/tech-docs-v2/guide/database/sql/sql-learning-material-01.html) の第1〜6章程度
- **不要**: プログラミング経験、特定の設計ツールの操作経験

## 本ガイド共通の題材「さくら文具」

全章を通して、架空の文具通販ショップ **「さくら文具」の受注管理** を題材にします。第1章で「Excel の受注一覧表」という**設計されていない状態**から出発し、章を追うごとに整理していき、第10章で PostgreSQL のテーブル定義として完成させます。

### 業務の概要（第3章で要件として読み解く）

- 顧客（会員）が Web サイトで文具を注文する。1回の注文で複数の商品をまとめて買える。
- 顧客には住所を1つ登録し、注文された商品はその住所へ届ける。
- 商品は1つの商品分類（筆記具・ノート・ファイル・事務用品）に属する。
- 注文ごとに、受付した担当者（社員）を記録する。
- 注文の状態は「受付」「発送済」「キャンセル」のいずれか。
- 商品の価格は改定されることがあるため、**注文時点の単価**を残す必要がある（商品の「現在単価」と明細の「注文時単価」を別の属性として扱う）。
- 将来は、顧客が複数の配送先住所を登録できるようにしたい（第3章で確認して当面は1人1住所とし、第11章で拡張として対応する）。

### 出発点: Excel の受注一覧（非正規形。第1章・第6章・第7章で使用）

| 受注番号 | 受注日 | 顧客番号 | 顧客名 | 顧客住所 | 担当者 | 商品コード | 商品名 | 分類 | 単価 | 数量 |
|---|---|---|---|---|---|---|---|---|---|---|
| 1001 | 2025-04-01 | C001 | 佐藤 花子 | 東京都港区… | 山田 | P01, P03 | ボールペン黒, A5ノート | 筆記具, ノート | 120, 280 | 10, 5 |
| 1002 | 2025-04-02 | C002 | 鈴木 一郎 | 大阪府北区… | 田中 | P01 | ボールペン黒 | 筆記具 | 120 | 3 |
| 1003 | 2025-04-02 | C001 | 佐藤 花子 | 東京都港区… | 山田 | P02 | 蛍光ペン黄 | 筆記具 | 150 | 2 |

### 到達点: 正規化後のテーブル（第10章で DDL にする）

| テーブル | 用途 | 主な列 |
|---|---|---|
| `customers`（顧客） | 会員情報 | `customer_id`(PK), `customer_code`(UNIQUE), `customer_name`, `email`, `address` |
| `categories`（商品分類） | 分類マスタ | `category_id`(PK), `category_name` |
| `products`（商品） | 商品マスタ | `product_id`(PK), `product_code`(UNIQUE), `product_name`, `category_id`(FK), `current_unit_price`（現在単価） |
| `staff`（担当者） | 社員マスタ | `staff_id`(PK), `staff_name` |
| `orders`（受注） | 受注ヘッダ | `order_id`(PK), `order_date`, `customer_id`(FK), `staff_id`(FK), `status` |
| `order_details`（受注明細） | 受注の内訳 | `order_id`(PK, FK), `line_no`(PK), `product_id`(FK), `unit_price`（注文時単価）, `quantity` |

- 命名は本ガイドで採用する規則に従い **小文字のスネークケース・テーブル名は複数形**（第9章で理由とチーム規約としての位置づけを解説）。
- ER図は **IE記法（鳥の足記法）** を基本とし、ガイド内では Mermaid の `erDiagram` で描画する。

## 学習コンテンツ

### [1. DB設計とは — なぜ設計が必要か](https://fcircle-biz.github.io/tech-docs-v2/guide/database/db-design/db-design-learning-material-01.html)
DB設計が「何を・どこに・どう貯めるかを決める作業」であることを理解します。「さくら文具」の Excel 受注一覧を例に、設計せずに1つの表へ詰め込むと何が起きるか（同じ顧客住所を何か所も直す羽目になる、など）を体感し、設計の工程（概念設計 → 論理設計 → 物理設計）と、それぞれで作る成果物（ER図・テーブル定義書・DDL）の関係、全12章のロードマップを俯瞰します。

### [2. リレーショナルモデルの基礎](https://fcircle-biz.github.io/tech-docs-v2/guide/database/db-design/db-design-learning-material-02.html)
設計の前提となるリレーショナルモデルの用語を整理します。リレーション（表）・タプル（行）・属性（列）・ドメイン（値の範囲）、「行の順序に意味はない」「同じ行は2つ存在しない」という性質、スーパーキー・候補キー・主キー・代替キー・外部キーの違い、NULL の意味と扱いの難しさ、参照整合性の考え方を、正式用語と実務用語の対応表とともに学びます。

### [3. 業務を読み解きエンティティを見つける](https://fcircle-biz.github.io/tech-docs-v2/guide/database/db-design/db-design-learning-material-03.html)
概念設計の第一歩として、業務の説明文・帳票（注文書・納品書）・画面からエンティティ（管理したい「もの・こと」）と属性を洗い出します。名詞抽出法、「リソース系（マスタ）」と「イベント系（トランザクション）」の分類、属性とエンティティの見分け方（「住所」は属性か独立したエンティティか）、業務担当者への確認質問の作り方を、「さくら文具」の要件で実践します。

### [4. ER図の読み方・書き方](https://fcircle-biz.github.io/tech-docs-v2/guide/database/db-design/db-design-learning-material-04.html)
ER図の構成要素（エンティティ・属性・リレーションシップ）と主な記法（IE記法／鳥の足、IDEF1X、Chen記法）の違いを知り、IE記法の記号（|| ・ o| ・ }| ・ o{）でカーディナリティ（1か多か）とオプショナリティ（0を許すか）を読み取れるようにします。概念ER図・論理ER図・物理ER図の描き分けと、Mermaid `erDiagram` による記述方法、手書きで描くときのコツを学びます。

### [5. リレーションシップの設計](https://fcircle-biz.github.io/tech-docs-v2/guide/database/db-design/db-design-learning-material-05.html)
1対1・1対多・多対多の各関係をテーブルでどう表現するかを学びます。外部キーを「多」の側に置く理由、多対多を中間（連関）エンティティで解消する方法（受注と商品 → 受注明細）、依存リレーションシップと非依存リレーションシップ、自己参照（社員の上司）、1対1をあえて分ける場面などを、ER図とテーブル例の両方で確認します。

### [6. 正規化の目的と関数従属](https://fcircle-biz.github.io/tech-docs-v2/guide/database/db-design/db-design-learning-material-06.html)
正規化が解決する問題＝**更新異常**（挿入時異常・更新時異常・削除時異常）を、Excel 受注一覧の具体的な行で確認します。そのうえで正規化の土台となる**関数従属性**（A が決まれば B が1つに決まる）、完全関数従属・部分関数従属・推移的関数従属を、矢印の図と表で直感的に理解します。価格改定があると「単価」が商品コードだけでは決まらないことから、関数従属をデータではなく業務ルールで判断する考え方と、商品の「現在単価」と明細の「注文時単価」の区別も学びます。

### [7. 第1正規形・第2正規形](https://fcircle-biz.github.io/tech-docs-v2/guide/database/db-design/db-design-learning-material-07.html)
非正規形の受注一覧から、繰り返し項目・複数値のセルを取り除いて**第1正規形**にし、次に主キーの一部にだけ従属する列（部分関数従属）を別表に分けて**第2正規形**にします。各ステップの表を並べて変化を追い、分割しても JOIN で元の情報に戻せる（無損失分解）ための条件（共通の列が一方の表のキーであること）を、損失分解の例と SQL で確かめます。

### [8. 第3正規形とボイス・コッド正規形](https://fcircle-biz.github.io/tech-docs-v2/guide/database/db-design/db-design-learning-material-08.html)
主キー以外の列を経由した従属（推移的関数従属）を取り除いて**第3正規形**に仕上げ、「さくら文具」の6テーブル構成に到達します。さらにボイス・コッド正規形（BCNF）の例と、第4・第5正規形の概要を紹介し、「実務ではまず第3正規形を目標にする」という判断基準と、正規化チェックの手順をまとめます。

### [9. キー設計と命名規則](https://fcircle-biz.github.io/tech-docs-v2/guide/database/db-design/db-design-learning-material-09.html)
自然キー（業務上のコード）とサロゲートキー（連番・UUID）の長所と短所、複合キーを使う場面、「業務コードは UNIQUE 制約で守りつつ、主キーはサロゲートにする」といった実務的な組み合わせを学びます。あわせてテーブル名・列名の命名規則（スネークケース、単数形／複数形、`_id`・`_at`・`is_` などの接尾辞・接頭辞）、区分値（コード値）の設計方法を整理します。

### [10. 論理設計から物理設計へ](https://fcircle-biz.github.io/tech-docs-v2/guide/database/db-design/db-design-learning-material-10.html)
論理ER図を PostgreSQL の実際のテーブルに落とします。データ型の選び方（金額は `numeric`、日時は `timestamptz` 等）、NULL を許すかの判断、NOT NULL・UNIQUE・CHECK・FOREIGN KEY（`ON DELETE` の選択）による制約設計、テーブル定義書の書き方、インデックスの基本（外部キー列に付けるかの判断）を学び、「さくら文具」の全テーブルの `CREATE TABLE` 文を完成させます。

### [11. 非正規化・履歴・アンチパターン](https://fcircle-biz.github.io/tech-docs-v2/guide/database/db-design/db-design-learning-material-11.html)
「正規化しすぎ」との付き合い方として、意図的な非正規化（集計値の保持など）の判断基準とリスクを学びます。注文時単価・配送先住所のスナップショット、複数配送先への拡張、価格改定履歴（期間の重なりを排他制約で防ぐ）のような**時間とともに変わるデータの設計**、論理削除の是非、そして避けるべき代表的アンチパターン（カンマ区切りの列、EAV、万能テーブル、ID の意味づけ）を実例で確認します。

### [12. 総合演習 — 小さな業務システムを設計する](https://fcircle-biz.github.io/tech-docs-v2/guide/database/db-design/db-design-learning-material-12.html)
新しい題材「市民図書館の貸出管理」を使い、要件の読み解き → エンティティ抽出 → 概念／論理ER図 → 正規化の確認 → 物理設計（DDL）までを自力で通して行います。各ステップに模範解答と解説を用意し、最後に設計レビューのチェックリストと、次に学ぶべきテーマ（性能設計・パーティション・NoSQL との使い分け等）を紹介します。

## 推奨所要時間

| 章 | 内容 | 目安時間 |
|----|------|----------|
| 第1章 | DB設計とは — なぜ設計が必要か | 0.75時間 |
| 第2章 | リレーショナルモデルの基礎 | 1時間 |
| 第3章 | 業務を読み解きエンティティを見つける | 1.25時間 |
| 第4章 | ER図の読み方・書き方 | 1.25時間 |
| 第5章 | リレーションシップの設計 | 1.25時間 |
| 第6章 | 正規化の目的と関数従属 | 1.25時間 |
| 第7章 | 第1正規形・第2正規形 | 1.25時間 |
| 第8章 | 第3正規形とボイス・コッド正規形 | 1.25時間 |
| 第9章 | キー設計と命名規則 | 1時間 |
| 第10章 | 論理設計から物理設計へ | 1.5時間 |
| 第11章 | 非正規化・履歴・アンチパターン | 1.25時間 |
| 第12章 | 総合演習 — 小さな業務システムを設計する | 1.5時間 |
| **合計** | | **約14.5時間** |

## 学習目標

このガイドを完了すると、以下のスキルを身につけることができます：

- 業務の説明や帳票から、エンティティ・属性・リレーションシップを抽出できる
- IE記法の ER図を読み書きし、カーディナリティとオプショナリティを正しく表現できる
- 更新異常と関数従属性を説明し、第3正規形までの正規化を自力で行える
- 主キー・外部キー・サロゲートキーを用途に応じて設計できる
- 論理設計を PostgreSQL のデータ型・制約つき `CREATE TABLE` 文に落とし込める
- 非正規化や履歴管理の判断を、理由とリスクを添えて説明できる

## 次のステップ

- [SQL入門](https://fcircle-biz.github.io/tech-docs-v2/guide/database/sql/sql-learning-material-01.html) — 設計したテーブルを実際に操作する
- [Oracle Database 入門](https://fcircle-biz.github.io/tech-docs-v2/guide/database/oracle/oracle-learning-material-01.html) / [SQL Server 入門](https://fcircle-biz.github.io/tech-docs-v2/guide/database/sqlserver/sqlserver-learning-material-01.html) — 製品ごとの物理設計の違いを学ぶ
- [Spring Data JPA](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/spring-data-jpa/spring-data-jpa-learning-material-01.html) — 設計したテーブルをアプリケーションから扱う
