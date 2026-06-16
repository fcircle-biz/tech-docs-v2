# HTML執筆ルール（html-rules）

チートシートHTML（index.html）執筆時の共通ルール。コードブロック構造・カードカラー・highlight.js言語に加え、本リポジトリ共通のHTML品質ルール（Mermaid・視認性・ヘッダー・スクリプト順）をここに集約する。他のreferencesからは本ファイルを参照すること（DRY）。

## 参照ドキュメント

- カラーテーマ: `templates/v3/reference/color-themes.md`
- CSSスタイル（Tailwind）: `templates/v3/reference/css-styles.md`
- Mermaidパターン詳細: `templates/v3/reference/mermaid-patterns.md`
- カードコンポーネント: `templates/v3/snippets/components.html`

## コードブロック構造

すべてのコード例はコピーボタン付きの以下構造で記述する（`copyCode` は `main.js` の関数）。

```html
<div class="code-block-wrapper">
    <button onclick="copyCode(this)" class="copy-btn px-2 py-1 bg-slate-600 hover:bg-slate-500 text-white text-xs rounded transition">
        <i class="fas fa-copy"></i>
    </button>
    <pre class="rounded-lg"><code class="language-sql">-- コード例
SELECT * FROM users;</code></pre>
</div>
```

- `language-xxx` の `xxx` は `{{LANGUAGE}}` と揃える。

## カラーバリエーション（カード用）

| 用途 | 背景色 | ボーダー | テキスト |
|------|--------|----------|----------|
| 基本/情報 | `bg-primary-50` | `border-primary-200` | `text-primary-800` |
| 成功/追加 | `bg-emerald-50` | `border-emerald-200` | `text-emerald-800` |
| 警告/更新 | `bg-amber-50` | `border-amber-200` | `text-amber-800` |
| 危険/削除 | `bg-red-50` | `border-red-200` | `text-red-800` |
| 紫/高度 | `bg-purple-50` | `border-purple-200` | `text-purple-800` |
| インディゴ | `bg-indigo-50` | `border-indigo-200` | `text-indigo-800` |
| バイオレット | `bg-violet-50` | `border-violet-200` | `text-violet-800` |
| ティール | `bg-teal-100` | - | `text-teal-800` |

## Highlight.js 言語設定

**デフォルトに含まれる言語（追加不要）**:
JavaScript, TypeScript, Python, Java, C, C++, C#, PHP, Ruby, Go, Rust, Swift, SQL, HTML, CSS, JSON, YAML, Bash, Markdown

**デフォルト非対応で追加が必要な言語**（テンプレートの言語CDN script行に追加挿入する）:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/languages/[言語名].min.js"></script>
```

- SAS: `sas.min.js`
- Kotlin: `kotlin.min.js`
- Scala: `scala.min.js`

> デフォルト対応言語の場合は `{{LANGUAGE}}` を置換すればテンプレートの言語CDN行がそのまま機能する。非対応言語のみ上記scriptを明示的に追加する。

---

## 共通HTML品質ルール（リポジトリ全体・厳守）

### テキスト視認性
- 半透明背景（`bg-white/70`, `bg-white/60`, `bg-white/50` 等）は使わない。
- カード内の内側ボックスは親と同系色の `-100` 背景 + `-900` テキストにする（例: 親が purple なら `bg-purple-100` + `text-purple-900`）。

### ヘッダー
- ダークモードボタンをHTMLに手書きしない（`main.js` が動的生成する）。
- ヘッダー構造（`header-rich` 等のクラス構成）を変えない。カラーは `header-[color]` クラスで切り替える（`placeholders-and-theme.md`）。

### スクリプト読込
- チートシートテンプレートはダークモードのフラッシュ防止のため `<head>` で `main.js` を早期読込する。`styles.css` は `<head>` 末尾で読み込む。テンプレートの読込構造を変更しない（sidebar-content.js / drawing-tool.js はチートシートでは不使用）。
- ガイド系テンプレートを流用する場合の読込順は `styles.css → sidebar-content.js → main.js → drawing-tool.js`。

### styles.css プレースホルダー
- `styles.css` の `{{PRIMARY_300/400/500/600/700/RGB}}` 等のプレースホルダーは必ず実カラー値へ置換する（未置換はCSS破損）。

### Mermaid記法（処理フロー図を入れる場合・CLAUDE.md方式に統一）
1. **HTMLエンティティを使わない**: `&#40;` `&#41;` `&#38;` `&#124;` 等はMermaidで正しくパースされない。
2. **括弧**: 半角括弧 `()` は特殊文字なので全角括弧にするか、ノードテキスト全体をダブルクォートで囲む（`A["テキスト（括弧つき）"]`）。
3. **アンパサンド**: `&` ではなく全角 `＆` を使う。
4. **改行**: ノード内で `<br/>` を使う場合はノードをダブルクォートで囲む（`A["1行目<br/>2行目"]`）。
5. **darkテーマ禁止**。

**正しい例:**
```
flowchart TD
    A["第1章: 概要（現在）"] --> B{OS}
    B -->|Windows| C["Windows環境構築"]
```

詳細は `templates/v3/reference/mermaid-patterns.md` を参照。
