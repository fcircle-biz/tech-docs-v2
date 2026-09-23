# 分類パスの決め方と配置例

配置先の分類は、**`astro-system/src/data/categories.ts`（分類マスタ・正典）に登録済みのキー**から選ぶ。分類の表示名・アイコン・並び順もマスタが持つ。技術領域ごとの配置先の目安は、リポジトリルートの `tech-knowledge-map.md`（「サイト分類との対応」）を参照する。本ファイルは判断基準と配置例をまとめたもので、マスタの丸写しではない。

> **Astro 構成のパス対応**: 下表・下記の `docs/guide/[分類パス]/[技術]/` は**ビルド出力先**。実際に編集する**ソース**は `astro-system/` 配下:
> - データ: `astro-system/src/data/guides/[分類パス]/[slug].ts`（＋ `index.ts` 登録）
> - 本文断片: `astro-system/src/chapters/[分類パス]/[slug]/[slug]-learning-material-NN.html`
> - 概要 README: `astro-system/public/guide/[分類パス]/[slug]/README.md`
>
> 分類パス（[分類パス]）は「分類キー」または「分類キー/サブグループキー」の**2階層まで**（例: `database`、`ai/ai-coding`）。`npm run build` で `docs/guide/[分類パス]/[slug]/` に出力される。

GitHub Pages URL は `https://fcircle-biz.github.io/tech-docs-v2/guide/[分類パス]/[技術]/[ファイル名].html`。

## 判断基準

1. **「その教材で学習者が主に何をするか」（用途）で分類を決める。** SaaS か OSS か、クラウドかオンプレか、どのベンダーの製品かでは決めない。
   - 例: Power BI（SaaS）も Apache Superset（OSS）も「データ分析・BI」（`data-analytics`）。
2. **迷ったら、下の「迷いやすい技術の判定例」と `tech-knowledge-map.md` の対応表を確認する。**
3. **サブグループ（第2階層）は、分類内で明確に分かれる場合だけ使う**（プログラミング言語のエコシステム、AI の用途別など）。親と同じ名前のサブグループは作らない（旧 `data-ai-category/data-ai` のような命名は禁止）。
4. **マスタに無い分類・サブグループが必要なら、先に `categories.ts` へ追加する**（キー・表示名・アイコン・並び順）。未登録のキーを使うとビルドエラーになる。ヘッダーやトップページの分類ラベルはマスタから自動で導出されるため、データ定義に手書きしない。
5. **既存ガイドを別の分類へ移す場合**、旧URLは404になる（404ページに案内を出し、数秒後にトップページへ自動で移動する）。移動後は、ほかのガイドの本文・README に書かれた URL と、本文中の画像パス（`/tech-docs-v2/guide/[分類パス]/[slug]/images/...`）を新しいパスへ書き換える。

## 分類ごとの収録範囲

表示名・並び順の正典は `categories.ts`。下表は各分類に何を置くかの目安。

| 分類キー | 収録する内容 | 分類パス |
|---|---|---|
| `programming-languages` | プログラミング言語と、そのエコシステムのフレームワーク・ライブラリ・テストツール | `programming-languages/[エコシステム]` |
| `web-technologies` | HTML・CSS・Markdown など Web 表現の基礎 | `web-technologies` |
| `database` | DB製品（RDBMS・NoSQL）、SQL、DB設計・運用 | `database` |
| `data-analytics` | BI・可視化、統計・データ分析、DWH・データ基盤 | `data-analytics` |
| `ai` | 生成AIの活用、AIコーディング、AIアプリ開発、機械学習 | `ai/[サブグループ]` |
| `development-processes` | 開発手法（アジャイル・DevOps 等）、バージョン管理、テスト・品質管理、プロジェクト管理 | `development-processes` |
| `design-modeling` | UML・要件定義・DDD・UI/UX などの設計手法 | `design-modeling` |
| `cloud-infrastructure` | クラウド、コンテナ、OS、ネットワーク、IoT 基盤 | `cloud-infrastructure` |
| `security` | 情報セキュリティ、認証・認可（IAM）、脆弱性対策 | `security` |
| `business-apps` | Office・VBA、ERP・CRM、ローコード、ワークフロー自動化 | `business-apps` |
| `business-domain-knowledge` | 会計・物流・人事などの業務知識 | `business-domain-knowledge` |
| `certification` | 資格・認定試験の対策 | `certification` |

### サブグループ

- **プログラミング言語**: エコシステム単位。登録済み: `java-ecosystem`・`javascript-ecosystem`・`python-ecosystem`・`dotnet-ecosystem`。ほかの言語（`php-ecosystem`・`c-cpp-ecosystem`・`cobol-ecosystem`・`dart-ecosystem` 等）は、最初のガイドを作るときにマスタへ追加する。C#・F# は `dotnet-ecosystem` に置く。
- **AI**: 用途単位。
  - `generative-ai`（生成AI活用）: Claude・ChatGPT・Gemini などを使いこなす
  - `ai-coding`（AIコーディング）: Claude Code・Codex・GitHub Copilot・Cursor と、その拡張（Skills 等）
  - `ai-apps`（AIアプリ開発）: LLM API・RAG・LangChain・Dify・Jev など、AIを自分のアプリに組み込む
  - 機械学習（scikit-learn・TensorFlow・PyTorch）のガイドを作るときは `machine-learning` を追加する

## 迷いやすい技術の判定例

| 技術 | 配置先 | 理由 |
|---|---|---|
| Power BI・Tableau・Apache Superset・Looker | `data-analytics` | BIツールは提供形態によらず「データ分析・BI」 |
| Snowflake・BigQuery・dbt | `data-analytics` | 分析のためのデータ基盤 |
| 統計学・SAS | `data-analytics` | データ分析の手法・ツール |
| PostgreSQL・Oracle・SQL Server・SQL | `database` | DB製品と問い合わせ言語 |
| Claude Code・Codex・GitHub Copilot | `ai/ai-coding` | AIにコードを書かせる道具（開発手法ではない） |
| Claude・ChatGPT の使い方 | `ai/generative-ai` | 生成AIの利用 |
| LangChain・Dify・RAG・Jev | `ai/ai-apps` | AIをアプリに組み込む |
| Keycloak・Okta・Microsoft Entra ID | `security` | 認証基盤（IAM） |
| Docker・Kubernetes・AWS・Linux | `cloud-infrastructure` | 実行基盤 |
| Git・GitHub | `development-processes` | 開発を支えるツール |
| Spring・JUnit | `programming-languages/java-ecosystem` | 言語固有のフレームワーク・テストツールは言語側に置く |
| Excel VBA・Power Automate・Salesforce・SAP・OutSystems | `business-apps` | 業務アプリとその自動化 |

## 配置例（現存ガイド）

- Java: `docs/guide/programming-languages/java-ecosystem/java/`
- HTML: `docs/guide/web-technologies/html/`
- SQL: `docs/guide/database/sql/`
- Power BI: `docs/guide/data-analytics/power-bi/`
- Claude Code: `docs/guide/ai/ai-coding/claude-code/`
- Git/GitHub: `docs/guide/development-processes/git-github/`
- Docker: `docs/guide/cloud-infrastructure/docker/`
- Keycloak: `docs/guide/security/keycloak/`
- Excel VBA: `docs/guide/business-apps/vba/`
- 業務知識入門: `docs/guide/business-domain-knowledge/business-knowledge-basics/`

## 注意

- 同一エコシステム/分類内に複数技術がぶら下がる構成が基本。新技術は最も近い分類（サブグループ）に置く。
- `v1/`, `v2/` 等のフォルダは過去バージョンのバックアップであり、アクティブなコンテンツではない（Glob 検索から除外）。
