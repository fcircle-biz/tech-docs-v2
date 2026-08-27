# 新人SE向け Power BI 入門学習教材

Microsoft の BI ツール **Power BI** を、BI ツールも SQL も初めての新人SE向けに、基礎から段階的に学べる入門学習ガイド（全12章）です。

「Excel / SQL のデータを取り込み、自分でデータモデルを作り、DAX で指標を書き、レポートを組み立て、Power BI Service で共有する」という一連の流れを、架空の卸売会社**みらい商事株式会社**の売上分析を題材に一本道で学びます。機能を網羅的に覚えるのではなく、**基礎70% + 実践20% + AI・発展10%** の配分で、現場で通用する土台をつくることに重点を置いています。

| 項目 | 内容 |
|------|------|
| 難易度 | 初級 |
| 所要時間 | 約13時間 |
| 分類 | ビジネスSaaS |

## 前提条件

### 必要な環境
- Windows PC（Power BI Desktop は Windows 専用です）
- Power BI Desktop（無償。Microsoft Store またはインストーラから導入）
- 第10章以降を実機で試す場合は、職場または学習用の Microsoft 365 / Power BI アカウント（無くても読み進められます）

### 参考リソース
- [Power BI ドキュメント（Microsoft Learn）](https://learn.microsoft.com/ja-jp/power-bi/)
- [Microsoft Power BI を使用したデータの準備およびビジュアル化（ラーニングパス）](https://learn.microsoft.com/ja-jp/training/paths/prepare-data-power-bi/)
- [DAX 関数リファレンス](https://learn.microsoft.com/ja-jp/dax/dax-function-reference)
- [Power BI Desktop ダウンロード](https://www.microsoft.com/ja-jp/power-platform/products/power-bi/desktop)

### 前提知識
- **必須**: Excel でデータを入力し、簡単な表やグラフを作った経験
- **推奨**: 表（テーブル）・列・行というデータの形のイメージ。SQL やデータベースの基礎知識があると第5章以降の理解が早くなります

## 学習コンテンツ

### [1. Power BIとは](https://fcircle-biz.github.io/tech-docs-v2/guide/business-saas/power-bi/power-bi-learning-material-01.html)
そもそも BI（ビジネスインテリジェンス）とは何かという出発点から、Power BI の役割、Power BI Desktop と Power BI Service の関係、そして「データ → Power Query → データモデル → DAX → レポート → 共有」という全体の流れをつかみます。Excel との違いもここで整理します。

### [2. Power BI Desktop入門](https://fcircle-biz.github.io/tech-docs-v2/guide/business-saas/power-bi/power-bi-learning-material-02.html)
Power BI Desktop のインストールから、リボン・キャンバス・各ペインといった画面構成、レポートビュー／テーブルビュー／モデルビューの使い分け、`.pbix` ファイルの正体までを学びます。最後に Excel データを読み込んで最初のグラフを作ります。

### [3. データを取得する](https://fcircle-biz.github.io/tech-docs-v2/guide/business-saas/power-bi/power-bi-learning-material-03.html)
Excel・CSV・SQL Server・Web という代表的な接続先への取り込み方を学びます。あわせて、データを取り込んで保持する Import と、都度データベースに問い合わせる DirectQuery の違いと選び分けを理解します。

### [4. Power Query入門](https://fcircle-biz.github.io/tech-docs-v2/guide/business-saas/power-bi/power-bi-learning-material-04.html)
取り込んだデータを分析できる形に整える工程です。列の削除・列名変更・データ型・null の扱い・フィルター・列の分割と追加、そしてマージ（横に結合）と追加（縦に積む）、ピボット解除までを扱い、その操作が M 言語として記録されるしくみを理解します。

### [5. データモデリング](https://fcircle-biz.github.io/tech-docs-v2/guide/business-saas/power-bi/power-bi-learning-material-05.html)
Excel のグラフ作成と Power BI が決定的に違うのがこの工程です。複数のテーブルを主キー・外部キーでつなぐリレーション、1対多・多対多といったカーディナリティ、フィルターが流れる向き、そしてセマンティックモデルという考え方を学びます。

### [6. スタースキーマ](https://fcircle-biz.github.io/tech-docs-v2/guide/business-saas/power-bi/power-bi-learning-material-06.html)
分析しやすいモデルの定番の形であるスタースキーマを学びます。出来事を記録するファクトテーブルと、切り口を与えるディメンションテーブルを見分けられるようになり、日付テーブルを独立させる理由まで理解します。BI・DWH 全般に通じる基礎知識です。

### [7. DAX入門](https://fcircle-biz.github.io/tech-docs-v2/guide/business-saas/power-bi/power-bi-learning-material-07.html)
指標（メジャー）を自分で書けるようになる章です。最初の山場である**計算列とメジャーの違い**を重点的に押さえたうえで、SUM・COUNT・COUNTROWS・DISTINCTCOUNT・IF・DIVIDE・CALCULATE という基本の関数を使って売上金額・受注件数・平均単価を組み立てます。

### [8. レポート作成](https://fcircle-biz.github.io/tech-docs-v2/guide/business-saas/power-bi/power-bi-learning-material-08.html)
棒グラフ・折れ線・円／ドーナツ・テーブル・マトリックス・カード・KPI といった代表的なビジュアルを、「何を見たいのか」から選べるようになります。スライサーとフィルターペインの違い、ビジュアル同士の相互作用も扱います。

### [9. 分かりやすいレポート設計](https://fcircle-biz.github.io/tech-docs-v2/guide/business-saas/power-bi/power-bi-learning-material-09.html)
グラフを置くだけの状態から、利用者が判断できるレポートへ進みます。読み手と意思決定から逆算するレイアウトの型、色と文字の使い方に加え、ドリルダウン・ドリルスルー・ツールヒント・ブックマーク・ページナビゲーション・モバイル対応を学びます。

### [10. Power BI Service](https://fcircle-biz.github.io/tech-docs-v2/guide/business-saas/power-bi/power-bi-learning-material-10.html)
Desktop で作ったレポートをクラウドへ発行し、チームに届けるまでの流れです。ワークスペース、セマンティックモデルとレポートの分離、ダッシュボードとレポートの違い、アプリによる配布、データの更新を扱います。

### [11. セキュリティと運用](https://fcircle-biz.github.io/tech-docs-v2/guide/business-saas/power-bi/power-bi-learning-material-11.html)
「誰に何を見せるか」を設計する章です。ワークスペースのロールによるアクセス制御、同じレポートで人によって見える行を変える RLS（行レベルセキュリティ）、社内データベースとつなぐオンプレミスデータゲートウェイ、スケジュール更新の運用上の勘所を学びます。

### [12. AI時代のPower BI](https://fcircle-biz.github.io/tech-docs-v2/guide/business-saas/power-bi/power-bi-learning-material-12.html)
発展編として、現在進行形の AI 活用の方向性を俯瞰します。Copilot in Power BI、AI による DAX 作成支援、テキスト形式で保存する PBIP、Skills for Fabric、Power BI Modeling MCP Server を取り上げ、AI を下書き役として使いこなすための考え方と、次の学習ステップを示します。

## 推奨所要時間

| 章 | 内容 | 目安時間 |
|----|------|----------|
| 第1章 | Power BIとは | 45分 |
| 第2章 | Power BI Desktop入門 | 1時間 |
| 第3章 | データを取得する | 1時間 |
| 第4章 | Power Query入門 | 1時間30分 |
| 第5章 | データモデリング | 1時間15分 |
| 第6章 | スタースキーマ | 1時間 |
| 第7章 | DAX入門 | 1時間30分 |
| 第8章 | レポート作成 | 1時間15分 |
| 第9章 | 分かりやすいレポート設計 | 1時間 |
| 第10章 | Power BI Service | 1時間 |
| 第11章 | セキュリティと運用 | 1時間 |
| 第12章 | AI時代のPower BI | 45分 |
| **合計** | | **約13時間** |

## 学習目標

このガイドを完了すると、以下のスキルを身につけることができます：

- BI ツールの役割と、Power BI Desktop / Power BI Service の使い分けを説明できる
- Excel・CSV・SQL Server などからデータを取り込み、Import と DirectQuery を選び分けられる
- Power Query で汚いデータを整形し、複数テーブルをマージ・追加できる
- リレーションを設定してスタースキーマのデータモデルを組み立てられる
- 計算列とメジャーの違いを理解し、DAX で基本的な指標を作成できる
- 目的に合ったビジュアルを選び、判断しやすいレポートを設計できる
- レポートを Power BI Service に発行し、ワークスペースとアプリで共有・更新できる
- RLS やアクセス権を設計し、安全に運用するための注意点を説明できる
- Copilot や PBIP など、AI を活用した Power BI 開発の方向性を把握し、次の学習に進める

## 次のステップ

- **DAX の深掘り**: タイムインテリジェンス関数（前年同期比・累計）、フィルターコンテキストの本格的な理解
- **Microsoft Fabric**: Lakehouse・Data Warehouse・Dataflow Gen2 とセマンティックモデルの連携
- **データ基盤・SQL**: [SQL 学習ガイド](https://fcircle-biz.github.io/tech-docs-v2/)、データウェアハウス設計
- **資格**: PL-300（Microsoft Certified: Power BI Data Analyst Associate）
