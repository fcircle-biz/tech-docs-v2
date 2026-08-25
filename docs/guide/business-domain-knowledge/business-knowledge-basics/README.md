# 新人SE向け 業務知識入門 学習教材

業務システム（販売管理・在庫管理・生産管理・会計・人事給与）の開発現場でひんぱんに登場する、**会社の基本的な業務の流れと用語**を、業務経験のない新人SE向けに基礎から学べる入門学習ガイド（全10章）です。

「見積・受注・売掛金・在庫引当・仕掛品・仕訳・締め処理」といった言葉が飛び交う打ち合わせで話についていけるようになることを目標に、**誰が（部門）・何を（伝票やデータ）・どの順番で処理しているのか**という視点で、会社の業務を一本の流れとして解説します。制度の細部を暗記するのではなく、業務の全体像とシステム上での扱われ方をつかむことに重点を置いています。

| 項目 | 内容 |
|------|------|
| 難易度 | 初級 |
| 所要時間 | 約8時間 |
| 分類 | 業務ドメイン知識 |

## 前提条件

### 必要な環境
- 特になし（Webブラウザのみ）
- 学習内容の整理用にメモ帳・表計算ソフトがあると便利です

### 参考リソース
- [中小企業庁 経営サポート](https://www.chusho.meti.go.jp/keiei/)
- [国税庁 タックスアンサー（税の基礎知識）](https://www.nta.go.jp/taxes/shiraberu/taxanswer/index.htm)
- [厚生労働省 社会保険・労働保険](https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000121431.html)
- [日本商工会議所 簿記](https://www.kentei.ne.jp/bookkeeping)

### 前提知識
- **必須**: 特になし（会社の業務・会計・簿記の知識がなくても読み進められます）
- **推奨**: データベースのテーブル・レコードのイメージ（マスタ／トランザクションの説明でつながりが理解しやすくなります）

## 学習コンテンツ

### [1. 会社のしくみと業務システム](https://fcircle-biz.github.io/tech-docs-v2/guide/business-domain-knowledge/business-knowledge-basics/business-knowledge-basics-learning-material-01.html)
そもそも会社とは何か、なぜ利益が必要なのかという出発点から、営業・購買・製造・物流・経理・人事といった代表的な部門の役割、そして会社の中を流れる「モノ・カネ・情報」の関係を整理します。最後に、その情報の流れを支える業務システムとは何かを俯瞰します。

### [2. 販売業務の流れ](https://fcircle-biz.github.io/tech-docs-v2/guide/business-domain-knowledge/business-knowledge-basics/business-knowledge-basics-learning-material-02.html)
会社にお金が入ってくる流れ「見積 → 受注 → 出荷 → 売上 → 請求 → 入金」を順に追います。各ステップで発行される伝票、担当する部門、システム上のステータス遷移を、具体的な取引例に沿って理解します。

### [3. 購買業務の流れ](https://fcircle-biz.github.io/tech-docs-v2/guide/business-domain-knowledge/business-knowledge-basics/business-knowledge-basics-learning-material-03.html)
会社からお金が出ていく流れ「発注 → 入荷 → 仕入 → 支払」を学びます。販売の流れと鏡写しの関係にあることを押さえ、検収・買掛金・支払サイトといった購買特有の考え方を理解します。

### [4. 在庫・物流](https://fcircle-biz.github.io/tech-docs-v2/guide/business-domain-knowledge/business-knowledge-basics/business-knowledge-basics-learning-material-04.html)
販売と購買をつなぐ「在庫」を扱います。倉庫・入庫・出庫・在庫引当・棚卸といった基本用語と、システムがなぜ「実在庫」と「引当済在庫」を分けて管理するのかを学び、配送・輸送を担う物流の役割まで押さえます。

### [5. 生産管理](https://fcircle-biz.github.io/tech-docs-v2/guide/business-domain-knowledge/business-knowledge-basics/business-knowledge-basics-learning-material-05.html)
「原材料 → 製造 → 製品 → 出荷」という製造業の基本の流れに沿って、生産計画・製造指示・製造実績を学びます。原材料／仕掛品／製品という在庫の姿の違いと、製品1個あたりのコストを表す原価の考え方を理解します。

### [6. 会計の基礎](https://fcircle-biz.github.io/tech-docs-v2/guide/business-domain-knowledge/business-knowledge-basics/business-knowledge-basics-learning-material-06.html)
すべての業務が最後に集まる先である会計の入口です。売上・費用・利益の関係、掛取引で生まれる売掛金・買掛金、そして取引を記録する共通フォーマットである仕訳のしくみを、簿記の知識ゼロから理解します。

### [7. 決算と財務諸表（B/S・P/L）](https://fcircle-biz.github.io/tech-docs-v2/guide/business-domain-knowledge/business-knowledge-basics/business-knowledge-basics-learning-material-07.html)
仕訳を積み上げた先にできあがる貸借対照表（B/S）と損益計算書（P/L）の読み方を学びます。「ある一時点の財産」と「一定期間のもうけ」という2つの視点の違いを押さえ、決算という年に一度の締めくくり業務の流れを理解します。

### [8. 人事・給与](https://fcircle-biz.github.io/tech-docs-v2/guide/business-domain-knowledge/business-knowledge-basics/business-knowledge-basics-learning-material-08.html)
採用・入社から勤怠管理、給与計算、評価、社会保険、税金、退職まで、社員に関わる業務の一連の流れを学びます。給与明細の「支給」「控除」「差引支給額」の構造を通じて、給与計算がなぜ複雑になるのかを理解します。

### [9. 業務システムの基本用語](https://fcircle-biz.github.io/tech-docs-v2/guide/business-domain-knowledge/business-knowledge-basics/business-knowledge-basics-learning-material-09.html)
マスタ・トランザクション・伝票・ステータス・締め処理・バッチ処理・システム連携という、業務システム開発の設計や打ち合わせで必ず登場する共通用語を整理します。第2章以降で見てきた業務が、システムではどう表現されるのかがつながります。

### [10. 業務の全体像とシステム間連携](https://fcircle-biz.github.io/tech-docs-v2/guide/business-domain-knowledge/business-knowledge-basics/business-knowledge-basics-learning-material-10.html)
販売・購買・在庫・生産・人事のすべてが会計へ集約される全体像を1枚の図で振り返り、業務システム同士がどこでつながっているのかを確認します。新人SEが業務知識をどう使い、現場でどう学び続けるかの指針でしめくくります。

## 推奨所要時間

| 章 | 内容 | 目安時間 |
|----|------|----------|
| 第1章 | 会社のしくみと業務システム | 45分 |
| 第2章 | 販売業務の流れ | 60分 |
| 第3章 | 購買業務の流れ | 45分 |
| 第4章 | 在庫・物流 | 50分 |
| 第5章 | 生産管理 | 50分 |
| 第6章 | 会計の基礎 | 55分 |
| 第7章 | 決算と財務諸表（B/S・P/L） | 50分 |
| 第8章 | 人事・給与 | 50分 |
| 第9章 | 業務システムの基本用語 | 45分 |
| 第10章 | 業務の全体像とシステム間連携 | 40分 |
| **合計** | | **約8時間** |

## 学習目標

このガイドを完了すると、以下のスキルを身につけることができます：

- 会社の代表的な部門と、その間を流れる「モノ・カネ・情報」の関係を説明できる
- 販売（見積→受注→出荷→売上→請求→入金）と購買（発注→入荷→仕入→支払）の流れを、伝票と担当部門つきで説明できる
- 在庫引当・棚卸・仕掛品・原価など、在庫と生産管理の基本用語を正しく使える
- 売掛金・買掛金・仕訳・B/S・P/Lといった会計用語の意味と、業務データが会計へつながる道筋を理解できる
- 勤怠・給与計算・社会保険・源泉徴収など、人事給与業務の基本的な流れを説明できる
- マスタ／トランザクション／伝票／ステータス／締め処理／バッチ処理という業務システムの共通用語を、実際の業務に結びつけて理解できる
- 業務担当者やSE同士の打ち合わせで飛び交う業務用語を聞き取り、「誰が、何を、どの順番で処理しているのか」を自分で確認できる

## 次のステップ

- [JDBC学習ガイド](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/jdbc/jdbc-learning-material-01.html) — 業務データをマスタ／トランザクションとしてデータベースで扱う方法を学ぶ
- [Spring Data JPA学習ガイド](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/spring-data-jpa/spring-data-jpa-learning-material-01.html) — 業務システムのアプリケーション実装を学ぶ
- 日商簿記3級 — 会計の流れをさらに体系的に学びたい場合の定番資格
- 基本情報技術者試験・ITパスポート試験 — 企業活動と経営分野の知識を体系的に補強する
