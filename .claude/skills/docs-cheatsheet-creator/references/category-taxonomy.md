# カテゴリ分類とパス対応（category-taxonomy）

カテゴリパスは9分類体系に基づいて決定する。分類体系の正本（各分類の定義・サブカテゴリ・対象技術の網羅）は `tech-knowledge-map.md` を参照すること（ここに丸写しはしない）。

## 9分類 → カテゴリパス対応表（代表値の抜粋）

| カテゴリ | パス例 | 対象技術 |
|---------|--------|----------|
| プログラミング言語 | `programming-languages` | Python, Java, JavaScript 等 |
| Web技術 | `web-technologies` | HTML/CSS, React, Vue 等 |
| 開発プロセス | `development-processes` | Git, Agile, テスト 等 |
| 設計・モデリング | `design-modeling` | UML, デザインパターン 等 |
| クラウド・インフラ | `cloud-infrastructure` | Docker, AWS, Linux 等 |
| データ・AI | `data-ai-category/database` または `data-ai-category/ai` | SQL, PostgreSQL, ML 等 |
| ビジネスSaaS | `business-saas` | Excel, Notion, Slack 等 |
| 資格 | `certification` | ITパスポート 等 |
| 業務知識 | `business-domain-knowledge` | 会計、法務 等 |

## パス決定の注意

- データ・AIカテゴリは用途に応じてサブパスを使い分ける（DB系は `data-ai-category/database`、AI/ML系は `data-ai-category/ai`）。
- 最終的な出力先は `docs/cheatsheet/[カテゴリパス]/[技術名小文字]/`。技術名は小文字化する（命名規則の詳細は `generation-procedure.md`）。
- ecosystem単位の細分（例: `programming-languages/python-ecosystem`）が適切な場合は `tech-knowledge-map.md` の体系に従う。
