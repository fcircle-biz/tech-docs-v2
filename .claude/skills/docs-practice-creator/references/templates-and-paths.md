# テンプレート・パス・命名規則（templates-and-paths）

練習問題集生成で共通して参照するテンプレート一覧・命名規則・URL形式・9分類体系・バージョン管理手順をまとめる。共有値の正本は repo 既存ファイルを参照すること（丸写しせず、代表値の抜粋表のみ掲載）。

---

## 1. テンプレートファイル一覧

練習問題のテンプレートは `templates/v3/html_practice/` にある。

| ファイル | 用途 | 出力先での扱い |
|----------|------|----------------|
| `practice-template.html` | 練習問題テンプレート | 各回HTMLのベース |
| `sidebar-content.js` | サイドバー動的生成（練習問題の回） | `chapters` 配列のみ編集してコピー |
| `styles.css` | 共通カスタムスタイル（問題カード・回答トグル） | カラー置換してコピー |
| `main.js` | 共通機能（回答表示トグル・ダークモード） | そのままコピー |
| `drawing-tool.js` | 描画ツール機能 | そのままコピー |

参考リファレンス（正本・丸写ししない）:
- カラーテーマ: `templates/v3/reference/color-themes.md`
- Tailwind CSSスタイル: `templates/v3/reference/css-styles.md`
- Mermaidパターン: `templates/v3/reference/mermaid-patterns.md`
- カードコンポーネント: `templates/v3/snippets/components.html`

---

## 2. ファイル命名規則

- **ディレクトリ**: `docs/practice/[分類パス]/[技術名]/`
- **HTMLファイル名**: `[技術名]-practice-[回番号:2桁].html`
  - 例: `python-basics-practice-01.html`、`python-basics-practice-02.html`
- **GitHub Pages URL**: `https://fcircle-biz.github.io/tech_docs/practice/[分類パス]/[ファイル名].html`
  - 例: `https://fcircle-biz.github.io/tech_docs/practice/programming-languages/python-ecosystem/python-basics/python-basics-practice-01.html`

---

## 3. 9分類体系（分類パスの決定）

**必須**: 新規作成前に必ず `tech-knowledge-map.md` を参照し、対象技術がどの分類に属するか確認する。以下は `tech-knowledge-map.md` に定義された9つの主要分類（正本は同ファイル）。

1. プログラミング言語: `programming-languages/[エコシステム]/[技術]/`
2. Web技術: `web-technologies/[技術]/`
3. 開発手法・プロセス: `development-processes/[技術]/`
4. 設計手法・モデリング: `design-modeling/[カテゴリ]/[技術]/`
5. クラウド／インフラ: `cloud-infrastructure/[技術]/`
6. データ／AI: `data-ai-category/[カテゴリ]/[技術]/`
7. 業務SaaS／プラットフォーム: `business-saas/[技術]/`
8. 資格・認定試験: `certification/[試験名]/`
9. 業務知識・スキル: `business-domain-knowledge/[分野]/`

---

## 4. 技術別カラー設定（抜粋）

`styles.css` の `{{PRIMARY_*}}` プレースホルダー置換に使う代表値。網羅表は `templates/v3/reference/color-themes.md` を参照（丸写ししない）。

| 技術 | `{{PRIMARY_300}}` | `{{PRIMARY_400}}` | `{{PRIMARY_500}}` | `{{PRIMARY_600}}` | `{{PRIMARY_700}}` | `{{PRIMARY_RGB}}` |
|------|-------------------|-------------------|-------------------|-------------------|-------------------|-------------------|
| Python (blue) | `#93c5fd` | `#60a5fa` | `#3b82f6` | `#2563eb` | `#1d4ed8` | `59, 130, 246` |
| Java (orange) | `#fdba74` | `#fb923c` | `#f97316` | `#ea580c` | `#c2410c` | `249, 115, 22` |
| SQL (sky) | `#7dd3fc` | `#38bdf8` | `#0ea5e9` | `#0284c7` | `#0369a1` | `14, 165, 233` |
| JavaScript (yellow) | `#fde047` | `#facc15` | `#eab308` | `#ca8a04` | `#a16207` | `234, 179, 8` |
| その他 | `color-themes.md` 参照 | | | | | |

---

## 5. バージョン管理手順

1. 作成対象フォルダ（例: `docs/practice/programming-languages/python-ecosystem/python-basics/`）に既にファイルが存在するか確認する。
2. **既存ファイルがある場合**:
   - 既存のバージョンフォルダ（`v1/`, `v2/`, `v3/` 等）を確認する。
   - 最新バージョン番号を特定し、次の番号のフォルダを作成する。
   - 親ディレクトリの既存ファイルを新しいバージョンフォルダへ移動する。
3. **既存ファイルがない場合**: そのまま新規作成する。

注意: ガイド/練習ディレクトリ内の `v1/`, `v2/` 等は過去バージョンのバックアップであり、アクティブなコンテンツではない。Glob検索時は旧バージョンフォルダを除外する。

---

## 6. 生成後のファイル構成例

```
docs/practice/programming-languages/python-ecosystem/python-basics/
├── README.md                       # 練習問題カリキュラム（全回定義）
├── sidebar-content.js              # 全回分の定義を含む
├── styles.css                      # テンプレートからコピー（カラー置換済み）
├── main.js                         # テンプレートからコピー
├── drawing-tool.js                 # テンプレートからコピー
├── python-basics-practice-01.html  # 第1回
├── python-basics-practice-02.html  # 第2回
└── ...                             # 最終回まで
```

---

## 7. 最終報告形式（報告フェーズ）

Glob で生成物一覧を確認した後、以下の形式で日本語報告する。

```
## 練習問題生成完了

### 技術名: [技術名]

### 生成ファイル一覧
- README.md（練習問題カリキュラム）
- 共通部品
  - sidebar-content.js
  - styles.css
  - main.js
  - drawing-tool.js
- HTMLファイル
  - [技術名]-practice-01.html
  - [技術名]-practice-02.html
  - ...
  - [技術名]-practice-[最終回番号].html

### GitHub Pages URL
https://fcircle-biz.github.io/tech_docs/practice/[分類パス]/[技術名]-practice-01.html
```
