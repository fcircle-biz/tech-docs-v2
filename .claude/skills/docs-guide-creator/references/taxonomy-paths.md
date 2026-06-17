# 9分類のディレクトリパス代表例

配置先の分類は **必ずリポジトリルートの `tech-knowledge-map.md`（正典）** を参照して決定すること。本ファイルはその抜粋・代表例であり、丸写し用ではない。

> **Astro 構成のパス対応**: 下表・下記の `docs/guide/[分類パス]/[技術]/` は**ビルド出力先**。実際に編集する**ソース**は `astro-system/` 配下:
> - データ: `astro-system/src/data/guides/[分類パス]/[slug].ts`（＋ `index.ts` 登録）
> - 本文断片: `astro-system/src/chapters/[分類パス]/[slug]/[slug]-learning-material-NN.html`
> - 概要 README: `astro-system/public/guide/[分類パス]/[slug]/README.md`
>
> 分類パス（[分類パス]）は複数セグメント可（例: `programming-languages/python-ecosystem`）。`npm run build` で `docs/guide/[分類パス]/[slug]/` に出力される。

GitHub Pages URL は `https://fcircle-biz.github.io/tech-docs-v2/guide/[分類パス]/[技術]/[ファイル名].html`。

## 9つの主要分類とパス規則

| # | 分類 | 分類パス規則 |
|---|------|------------|
| 1 | プログラミング言語 | `programming-languages/[エコシステム]/[技術]/` |
| 2 | Web技術 | `web-technologies/[技術]/` |
| 3 | 開発手法・プロセス | `development-processes/[技術]/` |
| 4 | 設計手法・モデリング | `design-modeling/[カテゴリ]/[技術]/` |
| 5 | クラウド／インフラ | `cloud-infrastructure/[技術]/` |
| 6 | データ／AI | `data-ai-category/[カテゴリ]/[技術]/` |
| 7 | 業務SaaS／プラットフォーム | `business-saas/[技術]/` |
| 8 | 資格・認定試験 | `certification/[試験名]/` |
| 9 | 業務知識・スキル | `business-domain-knowledge/[分野]/` |

## 代表的な配置例（既存リポジトリ構造より）

### 1. プログラミング言語（エコシステム単位で構成）

- Python Django: `docs/guide/programming-languages/python-ecosystem/django/`
- Python FastAPI: `docs/guide/programming-languages/python-ecosystem/fastapi/`
- Java Spring: `docs/guide/programming-languages/java-ecosystem/spring/`
- Java JDBC: `docs/guide/programming-languages/java-ecosystem/jdbc/`
- JavaScript React: `docs/guide/programming-languages/javascript-ecosystem/react/`
- JavaScript Next.js: `docs/guide/programming-languages/javascript-ecosystem/nextjs/`
- TypeScript: `docs/guide/programming-languages/javascript-ecosystem/typescript/`
- .NET VB.NET: `docs/guide/programming-languages/dotnet-ecosystem/vbnet-beginner/`
- PHP: `docs/guide/programming-languages/php-ecosystem/php/`
- C++: `docs/guide/programming-languages/c-cpp-ecosystem/cpp-beginner/`
- COBOL: `docs/guide/programming-languages/cobol-ecosystem/cobol/`
- Flutter: `docs/guide/programming-languages/dart-ecosystem/flutter/`

主なエコシステム: `python-ecosystem/`, `java-ecosystem/`, `javascript-ecosystem/`, `dotnet-ecosystem/`, `php-ecosystem/`, `c-cpp-ecosystem/`, `cobol-ecosystem/`, `dart-ecosystem/`, `csharp-ecosystem/`。

### 5. クラウド／インフラ

- Docker: `docs/guide/cloud-infrastructure/docker/`
- AWS（基礎）: `docs/guide/cloud-infrastructure/aws-basic/`
- AWS Terraform: `docs/guide/cloud-infrastructure/aws-terraform/`
- クラウドコンピューティング: `docs/guide/cloud-infrastructure/cloud-computing/`

### 6. データ／AI（カテゴリ単位で構成）

- 機械学習: `docs/guide/data-ai-category/data-ai/ml-beginner/`
- LangChain: `docs/guide/data-ai-category/data-ai/langchain/`
- Dify: `docs/guide/data-ai-category/data-ai/dify/`
- SAS: `docs/guide/data-ai-category/data-ai/sas/`
- SQL: `docs/guide/data-ai-category/database/sql/`
- PostgreSQL: `docs/guide/data-ai-category/database/postgresql/`
- Oracle: `docs/guide/data-ai-category/database/oracle/`
- PL/SQL: `docs/guide/data-ai-category/database/plsql/`
- 統計解析: `docs/guide/data-ai-category/statistical-analysis/`

主なカテゴリ: `data-ai/`, `database/`, `generative-ai/`, `statistical-analysis/`。

### 3. 開発手法・プロセス

- アジャイル開発: `docs/guide/development-processes/agile-development/`
- DevOps: `docs/guide/development-processes/devops-beginner/`
- Git/GitHub: `docs/guide/development-processes/git-github/`
- アルゴリズム基礎: `docs/guide/development-processes/algorithm-basics/`

### 4. 設計手法・モデリング（カテゴリ単位で構成）

- UML: `docs/guide/design-modeling/software-design/uml/`
- DDD: `docs/guide/design-modeling/software-design/ddd/`
- 要件定義: `docs/guide/design-modeling/software-design/requirements-engineering/`
- ER図・データモデリング: `docs/guide/design-modeling/data-modeling/er-diagram/`
- Figma（UI/UX）: `docs/guide/design-modeling/ui-ux-design/figma/`

主なカテゴリ: `software-design/`, `data-modeling/`, `ui-ux-design/`。

### 7. 業務SaaS／プラットフォーム

- Excel VBA: `docs/guide/business-saas/vba/`
- Access VBA: `docs/guide/business-saas/access-vba/`
- Excel（入門）: `docs/guide/business-saas/excel-beginner/`
- SAP: `docs/guide/business-saas/sap/`
- OutSystems: `docs/guide/business-saas/outsystems/`

### 8. 資格・認定試験

- ITパスポート: `docs/guide/certification/it-passport/`
- AWS SAA: `docs/guide/cloud-infrastructure/aws-saa-c03-intro/`（AWS資格はクラウド分類に置く例あり）

### 9. 業務知識・ドメイン

- 会計・財務: `docs/guide/business-domain-knowledge/finance-accounting/`
- 業務文書入門: `docs/guide/business-domain-knowledge/business-docs-intro/`

## 注意

- 同一エコシステム/カテゴリ内に複数技術がぶら下がる構成が基本。新技術は最も近いエコシステム/カテゴリ配下に置く。
- 判断に迷う場合は `tech-knowledge-map.md` の分類表で技術名を検索し、該当する「分類」列からパスを決定する。
- `v1/`, `v2/` 等のフォルダは過去バージョンのバックアップであり、アクティブなコンテンツではない（Glob 検索から除外）。
