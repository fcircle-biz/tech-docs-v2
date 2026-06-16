# 生成手順（generation-procedure）

技術名とカテゴリパスから1ページ完結型チートシートを生成する逐次手順。並列処理は行わない（単体スキル）。

## 入力形式

```
/docs-cheatsheet-creator [技術名] [カテゴリパス]
```

例:
- `/docs-cheatsheet-creator SQL data-ai-category/database`
- `/docs-cheatsheet-creator Python programming-languages`
- `/docs-cheatsheet-creator Git development-processes`
- `/docs-cheatsheet-creator Docker cloud-infrastructure`

カテゴリパスの決定基準は `category-taxonomy.md`（9分類体系→パス対応表）を参照。

## 手順

### 1. フォルダ作成

```bash
mkdir -p docs/cheatsheet/[カテゴリパス]/[技術名小文字]
```

例: `mkdir -p docs/cheatsheet/data-ai-category/database/sql`

- **技術名は出力で必ず小文字化**する（例: `SQL` → `sql`、`Docker` → `docker`）。
- **バージョン管理**: 出力先に既存のチートシートがある場合は、既存を `v1/`（さらに更新時は `v2/`...）へ退避してから新規作成する。

### 2. 共通ファイルのコピー

`templates/v3/html_cheatsheet/` から以下2ファイルを技術フォルダにコピーする。チートシートでは sidebar-content.js / drawing-tool.js は**使用しない**（この2ファイルのみ）。

- `styles.css` - ダークモード対応スタイル（ヘッダーカラークラス定義を含む）
- `main.js` - ダークモード切り替え、コードコピー機能

技術系統に応じてヘッダーカラーを調整する場合は `placeholders-and-theme.md` のヘッダーカラークラス表を参照。

> 共通部品（styles.css / main.js）はテンプレートからコピーする。本文執筆で `index.html` のみ編集し、コピーした共通部品は原則そのまま使う。`styles.css` にカラープレースホルダー（`{{PRIMARY_*}}` 等）が含まれる場合は必ず実カラー値へ置換すること（未置換はCSS破損）。

### 3. styles.css のヘッダーカラー設定（オプション）

デフォルトはSky Blue（`#0ea5e9`）。技術に応じて変更する場合は、`index.html` の `<header class="header-rich">` を `<header class="header-rich header-[color]">` に変更する（クラス対応表は `placeholders-and-theme.md`）。

### 4. index.html の生成

`templates/v3/html_cheatsheet/cheatsheet-template.html` をベースに生成する。

1. プレースホルダー（`{{TITLE}}` / `{{SUBTITLE}}` / `{{ICON}}` / `{{LANGUAGE}}` / `{{INTRO_ICON}}` / `{{INTRO_TITLE}}` / `{{INTRO_DESCRIPTION}}`）を置換 → `placeholders-and-theme.md`
2. `tailwind.config` の `primary` カラーを技術に応じて設定 → `placeholders-and-theme.md`
3. 本文を執筆（必須/任意セクション構成） → `content-structure.md`
4. コードブロック構造・カードカラー・highlight.js言語設定 → `html-rules.md`

### 5. 完了報告

生成したファイル一覧とアクセスURLを日本語で報告して終了する。

## 生成後のファイル構成

```text
docs/cheatsheet/[カテゴリパス]/[技術名小文字]/
├── index.html   # チートシート本体
├── styles.css   # ダークモード対応スタイル
└── main.js      # ダークモード、コードコピー機能
```

## アクセスURL形式（GitHub Pages）

```
https://fcircle-biz.github.io/tech_docs/cheatsheet/[カテゴリパス]/[技術名小文字]/index.html
```

例: `https://fcircle-biz.github.io/tech_docs/cheatsheet/data-ai-category/database/sql/index.html`

## 報告で出力するもの

1. 生成ファイルパス一覧（リポジトリルート相対の絶対パス）
   - `styles.css`（テンプレートからコピー）
   - `main.js`（テンプレートからコピー）
   - `index.html`（チートシート本体）
2. 上記アクセスURL形式によるアクセスURL
