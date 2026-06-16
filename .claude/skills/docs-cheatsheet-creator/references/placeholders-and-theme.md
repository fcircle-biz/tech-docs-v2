# プレースホルダーとテーマ（placeholders-and-theme）

`templates/v3/html_cheatsheet/cheatsheet-template.html` のプレースホルダー置換、`tailwind.config` の `primary` カラー設定、ヘッダーカラークラスをまとめる。カラーテーマの正本は `templates/v3/reference/color-themes.md` を参照（代表パレットのみ以下に抜粋）。

## プレースホルダー一覧

| プレースホルダー | 説明 | 例 |
|-----------------|------|-----|
| `{{TITLE}}` | 技術名 | SQL, Python, Git |
| `{{SUBTITLE}}` | サブタイトル | エンジニアのための実践リファレンス |
| `{{ICON}}` | ヘッダーアイコン（fas/fab fa-xxx） | database, python, git-alt |
| `{{LANGUAGE}}` | highlight.js言語名 | sql, python, bash |
| `{{INTRO_ICON}}` | イントロアイコン | table, code, terminal |
| `{{INTRO_TITLE}}` | イントロタイトル | SQLとは？ |
| `{{INTRO_DESCRIPTION}}` | イントロ説明文 | SQLは... |

- `{{ICON}}` / `{{INTRO_ICON}}` は Font Awesome のアイコン名のみ（テンプレート側で `fa-` が付与される。例: テンプレートの `<i class="fas fa-{{ICON}}">`）。
- `{{LANGUAGE}}` はテンプレート内の複数箇所（highlight.js言語CDNの `languages/{{LANGUAGE}}.min.js`、各 `<code class="language-{{LANGUAGE}}">`）に展開されるため、すべて同一の言語名へ置換する。
- 置換漏れ（`{{...}}` の残存）がないようにする。

### 置換例（SQLの場合）

| プレースホルダー | 置換値 |
|-----------------|--------|
| `{{TITLE}}` | `SQL` |
| `{{SUBTITLE}}` | `データベース操作の実践リファレンス` |
| `{{ICON}}` | `database` |
| `{{LANGUAGE}}` | `sql` |
| `{{INTRO_ICON}}` | `table` |
| `{{INTRO_TITLE}}` | `SQLとは？` |
| `{{INTRO_DESCRIPTION}}` | `SQL（Structured Query Language）はリレーショナルデータベースを操作するための言語です。...` |

## ヘッダーカラークラス

デフォルトはSky Blue（`#0ea5e9`）。技術系統に応じて `<header class="header-rich">` を `<header class="header-rich header-[color]">` に変更する。各クラスは `styles.css` に定義済み。

| 技術系統 | CSSクラス | グラデーション |
|---------|-----------|----------------|
| デフォルト（SQL等） | なし（`header-rich` のみ） | Sky Blue |
| Python/Spring | `header-emerald` | Emerald（緑） |
| .NET/C# | `header-violet` | Violet（紫） |
| Java/AWS | `header-orange` | Orange（橙） |
| Ruby/危険操作 | `header-rose` | Rose（赤） |

> ヘッダー構造は変更しない。ダークモードボタンはHTMLに手書きせず `main.js` が動的生成する。

## tailwind.config の primary カラーパレット（よく使う代表値）

`tailwind.config` の `theme.extend.colors.primary` を技術に応じて差し替える。詳細・他系統は `templates/v3/reference/color-themes.md` を参照。

```javascript
// Sky Blue（SQL, Docker等 / テンプレート初期値）
primary: {
    50: '#f0f9ff', 100: '#e0f2fe', 200: '#bae6fd', 300: '#7dd3fc',
    400: '#38bdf8', 500: '#0ea5e9', 600: '#0284c7', 700: '#0369a1',
    800: '#075985', 900: '#0c4a6e',
}

// Blue（Python, PostgreSQL等）
primary: {
    50: '#eff6ff', 100: '#dbeafe', 200: '#bfdbfe', 300: '#93c5fd',
    400: '#60a5fa', 500: '#3b82f6', 600: '#2563eb', 700: '#1d4ed8',
    800: '#1e40af', 900: '#1e3a8a',
}

// Emerald（Spring, Excel等）
primary: {
    50: '#ecfdf5', 100: '#d1fae5', 200: '#a7f3d0', 300: '#6ee7b7',
    400: '#34d399', 500: '#10b981', 600: '#059669', 700: '#047857',
    800: '#065f46', 900: '#064e3b',
}

// Orange（Java, AWS等）
primary: {
    50: '#fff7ed', 100: '#ffedd5', 200: '#fed7aa', 300: '#fdba74',
    400: '#fb923c', 500: '#f97316', 600: '#ea580c', 700: '#c2410c',
    800: '#9a3412', 900: '#7c2d12',
}

// Violet（.NET, C#等）
primary: {
    50: '#f5f3ff', 100: '#ede9fe', 200: '#ddd6fe', 300: '#c4b5fd',
    400: '#a78bfa', 500: '#8b5cf6', 600: '#7c3aed', 700: '#6d28d9',
    800: '#5b21b6', 900: '#4c1d95',
}
```

> ヘッダーカラークラスと `primary` パレットは技術系統を揃える（例: Python → `header-emerald` または Blueパレット）。`styles.css` にカラープレースホルダー（`{{PRIMARY_300/400/500/600/700/RGB}}` 等）が残っている場合は必ず実カラー値へ置換すること（未置換はCSS破損）。
