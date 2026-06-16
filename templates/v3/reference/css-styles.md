# CSS スタイルガイド v3（Graphite × Iris）

## 概要

v3 テンプレートは「**Graphite × Iris**」デザインシステムを採用しています。
グラファイト（墨）のニュートラルな面に、技術別の primary カラーと
固定のシアン（`#06b6d4`）を差し色として加えた洗練されたスタイルです。

**核心的な仕組み:** Tailwind CSS のユーティリティクラスを **`styles.css` で上書き**する方式で実現されています。
HTML の本文クラス（`from-amber-50`、`border-l-4` など）は v2 と同じままで、
CSS が自動的にクールな見た目へ変換します。

---

## 1. デザイントークン（CSS変数）

`styles.css` の `:root`（ライトモード）と `html.dark`（ダークモード）で定義されています。

### サーフェス

| 変数 | ライト値 | ダーク値 | 用途 |
|------|---------|---------|------|
| `--bg` | `#eceff5` | `#090b11` | ページ背景 |
| `--bg-soft` | `#f5f7fb` | `#0d1017` | サブ背景 |
| `--card` | `#ffffff` | `#12151e` | カード面 |
| `--surface-2` | `#f3f5fa` | `#171c27` | 内部サブ面 |
| `--line` | `#e3e7ef` | `#242b3a` | 枠線・区切り |
| `--line-soft` | `#edf0f5` | `#1b212d` | 薄い区切り |

### テキスト

| 変数 | ライト値 | ダーク値 | 用途 |
|------|---------|---------|------|
| `--ink` | `#141925` | `#f1f4fa` | 見出し（強調） |
| `--text` | `#3d4453` | `#c2cad8` | 本文 |
| `--muted` | `#6b7280` | `#8899` | 補足テキスト |

### アクセント（技術別 primary）

```css
/* styles.css :root の該当箇所（skill が技術別の値で置換する） */
--primary-300: {{PRIMARY_300}};
--primary-400: {{PRIMARY_400}};
--primary-500: {{PRIMARY_500}};  /* ライトモードのメインカラー */
--primary-600: {{PRIMARY_600}};
--primary-700: {{PRIMARY_700}};
--primary-rgb: {{PRIMARY_RGB}};  /* rgb値のみ。例: 99,102,241 */
```

ダークモードでは自動的に 1段明るいシェードへ：

```css
html.dark {
    --primary-500: {{PRIMARY_400}};
}
```

**設定は2箇所に必要**（「技術別テーマの設定方法」セクション参照）。
具体的な値は `reference/color-themes.md` を参照してください。

### 差し色（全技術共通）

| 変数 | 値 | 用途 |
|------|-----|------|
| `--cyan` | `#06b6d4` | シアン差し色（全技術共通の相方） |
| `--amber` | `#f59e0b` | アンバー差し色（警告・注意） |

### 影

| 変数 | 用途 |
|------|------|
| `--shadow-sm` | カード通常時の軽い影 |
| `--shadow` | ホバー時・浮き上がった影 |
| `--shadow-lg` | モーダル・描画ツールバー等 |
| `--glow` | primary グロー（ボタン・強調要素） |

### コードブロック

| 変数 | 値（共通） | 用途 |
|------|-----------|------|
| `--code-bg` | `#0d1117`（ライト） / `#0a0d13`（ダーク） | コードエリア背景 |
| `--code-line` | `#20283a`（ライト） / `#1d2535`（ダーク） | コード内枠線 |

### ヘッダー（両モード共通 = グラファイトガラス）

| 変数 | 値 | 用途 |
|------|-----|------|
| `--header-bg` | `rgba(16,19,28,.82)`（ライト） / `rgba(9,11,17,.78)`（ダーク） | グラファイトすりガラス |
| `--header-line` | `rgba(255,255,255,.08)` | ガラスの縁 |

---

## 2. Tailwind CDN 設定（`tailwind.config`）

v3 では `fontFamily` に `mono` を追加し、Google Fonts も更新します。

```html
<script src="https://cdn.tailwindcss.com"></script>
<script>
    tailwind.config = {
        theme: {
            extend: {
                colors: {
                    // 技術固有の primary カラーを定義
                    // styles.css :root の --primary-* と同じ値にすること
                    primary: {
                        50:  '#eef1ff',
                        100: '#e0e5ff',
                        200: '#c6cdfe',
                        300: '#a3acfb',   // ← --primary-300 と対応
                        400: '#7f87f7',   // ← --primary-400 と対応
                        500: '#6366f1',   // ← --primary-500 と対応
                        600: '#4f46e5',   // ← --primary-600 と対応
                        700: '#4338ca',   // ← --primary-700 と対応
                        800: '#312c9e',
                        900: '#272367',
                    }
                },
                fontFamily: {
                    sans: ['"Noto Sans JP"', 'sans-serif'],
                    mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
                }
            }
        }
    }
</script>
```

---

## 3. 技術別テーマの設定方法

v3 では技術色を **2箇所に同じ値**で設定する必要があります。

### 設定箇所 1: `tailwind.config` の `primary` パレット（HTML内）

上記 `tailwind.config` の `primary` オブジェクトを技術カラーで上書き。

### 設定箇所 2: `styles.css` の `:root` プレースホルダー

`styles.css` 内の `{{PRIMARY_*}}` プレースホルダーを、
`reference/color-themes.md` の値に従って置換してください。

```css
/* 例: アイリス（既定）の場合 */
:root {
    --primary-300: #a3acfb;
    --primary-400: #7f87f7;
    --primary-500: #6366f1;
    --primary-600: #4f46e5;
    --primary-700: #4338ca;
    --primary-rgb: 99,102,241;
}
```

### 例外1: assignment（実践課題）はオレンジ固定

`html_assignment/styles.css` の `:root` はオレンジをハードコードしています（プレースホルダーなし）。
実践課題の識別色として固定されており、技術別に変えません。

```css
/* html_assignment/styles.css :root（抜粋） */
--primary-300: #fdba74;
--primary-400: #fb923c;
--primary-500: #f97316;
--primary-600: #ea580c;
--primary-700: #c2410c;
--primary-rgb: 249,115,22;
```

### 例外2: cheatsheet はヘッダー色モディファイア方式

`html_cheatsheet` はプレースホルダーを使わず、ヘッダー色は
`.header-emerald` / `.header-violet` / `.header-orange` / `.header-rose` 等のモディファイアクラスで指定します。
HTML の `<header>` タグに適用するクラスを切り替えるだけで色が変わります。

---

## 4. Google Fonts リンク（v3 追加）

v3 では JetBrains Mono を追加しています。Noto Sans JP の weight も 800 まで拡張。

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">
```

---

## 5. ヘッダー（グラファイトガラス）

v3 のヘッダーは両モード共通でグラファイトのすりガラスデザインになります。
HTML クラスは v2 と同じ `header-rich header-rich-shadow` のままです。

```html
<header class="fixed top-0 left-0 right-0 z-50 text-white header-rich header-rich-shadow">
```

`styles.css` が以下を自動適用します:
- `backdrop-filter: blur(18px)` — すりガラス効果
- ヘッダー下端に primary → cyan のグラデーションヘアライン
- 暗いグラファイト背景（ライト/ダーク共通）

---

## 6. カードシステム

v3 のカードは「**ニュートラル面 + 色ヘアライン + グラデーションアイコンチップ**」が基本です。
パステルの塗りは廃し、CSS が `var(--card)` ベースに色の wash を乗せます。

### HTML クラスはそのまま（v2 と同一）

```html
<!-- 学習目標カード（アンバー） -->
<div class="bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-xl p-5">

<!-- 実習カード（パープル） -->
<div class="bg-gradient-to-r from-purple-50 to-fuchsia-50 border border-purple-200 rounded-xl p-5">

<!-- クイズカード（ブルー／シアン） -->
<div class="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-5">

<!-- 次章・動作確認カード（エメラルド） -->
<div class="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl p-5">
```

### アイコンチップのスタイル

アイコンチップは `styles.css` でグラデーション + グロー付きに変換されます。
HTML はそのままでよい。

```html
<!-- アンバーアイコン例（bg-amber-400 → styles.css が変換） -->
<div class="flex-shrink-0 w-10 h-10 bg-amber-400 rounded-lg flex items-center justify-center">
    <i class="fas fa-lightbulb text-white"></i>
</div>
```

### 左罫情報ボックス（info / success / warning / danger）

```html
<!-- info（シアン） -->
<div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-6 rounded-r-lg">

<!-- success（エメラルド） -->
<div class="bg-emerald-50 border-l-4 border-emerald-500 p-4 my-6 rounded-r-lg">

<!-- warning（アンバー） -->
<div class="bg-orange-50 border-l-4 border-orange-500 p-4 my-6 rounded-r-lg">

<!-- danger（ローズ） -->
<div class="bg-red-50 border-l-4 border-red-500 p-4 my-6 rounded-r-lg">
```

---

## 7. コードブロック（macOS風ウィンドウ）

v3 のコードブロックは JetBrains Mono フォントと macOS 風トラフィックドット付きウィンドウデザインです。
CSS が `code-block-wrapper` の `.bg-slate-800` ヘッダーに自動適用します。

```html
<div class="code-block-wrapper">
    <div class="flex items-center justify-between bg-slate-800 px-4 py-2 rounded-t-lg">
        <span class="text-slate-400 text-sm">example.py</span>
        <button class="copy-btn text-slate-400 hover:text-white" onclick="copyCode(this)">
            <i class="fas fa-copy"></i>
        </button>
    </div>
    <pre class="!mt-0 !rounded-t-none"><code class="language-python"># コード</code></pre>
</div>
```

---

## 8. テキスト視認性ルール（重要）

カード内のテキストが読みやすい状態を保つため、以下のルールを必ず守ること。

### 禁止事項

1. **半透明背景の使用禁止**: `bg-white/70`、`bg-white/60`、`bg-white/50` などを使わない
2. **薄いテキスト色の使用禁止**: カード内で `text-[color]-600` より薄い色をテキストに使わない

### 推奨パターン

カード内に内部ボックスを置く場合は、同系色の**不透明**な背景色を使用する。

| 親カードの色系 | 内部ボックスの背景 | テキスト色 |
|--------------|------------------|----------|
| アンバー系 (`from-amber-50`) | `bg-amber-100` | `text-amber-900` |
| パープル系 (`from-purple-50`) | `bg-purple-100` | `text-purple-900` |
| ブルー系 (`from-blue-50`) | `bg-blue-100` | `text-blue-900` |
| エメラルド系 (`from-emerald-50`) | `bg-emerald-100` | `text-emerald-900` |
| オレンジ系 (`from-orange-50`) | `bg-orange-100` | `text-orange-900` |

### 例

```html
<!-- 正しい例 -->
<div class="bg-purple-100 rounded-lg p-4 mb-4">
    <h4 class="font-semibold text-purple-900 mb-2">ステップ1: タイトル</h4>
    <p class="text-purple-800">説明文...</p>
</div>

<!-- 間違った例（使用禁止） -->
<div class="bg-white/70 rounded-lg p-4 mb-4">
    <h4 class="font-semibold text-purple-800 mb-2">ステップ1: タイトル</h4>
    <p class="text-purple-700">説明文...</p>
</div>
```

---

## 9. セクション見出し

v3 では `border-l-4` の左罫をグラデーションバーに変換します。HTML はそのまま。

```html
<!-- h2: border-l-4 は styles.css が自動変換（グラデーションバー化） -->
<h2 class="flex items-center gap-3 text-xl font-semibold text-slate-800
           border-l-4 border-primary-500 pl-4 mb-4">
    1.1 セクションタイトル
</h2>
```

---

## 10. サイドバー

HTML クラスは v2 と同一。`styles.css` が自動適用します。

```html
<aside id="sidebar" class="fixed md:sticky top-16 left-0 z-40 w-80 h-[calc(100vh-4rem)]
          bg-white border-r border-slate-200 overflow-y-auto flex-shrink-0
          transform -translate-x-full md:translate-x-0 sidebar-transition">
```

---

## 11. スプラッシュ `<template>`（v3 新規追加）

`</head>` 直前にスタンドアロン展開時のサムネイル用スプラッシュ定義を追加します。

```html
<template id="__bundler_thumbnail" data-bg-color="#090b11">
    <svg viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stop-color="#6366f1"/>
                <stop offset="1" stop-color="#06b6d4"/>
            </linearGradient>
        </defs>
        <rect x="430" y="250" width="340" height="300" rx="40" fill="none" stroke="url(#g)" stroke-width="14"/>
        <text x="600" y="455" font-family="JetBrains Mono, monospace" font-size="170" font-weight="700" fill="url(#g)" text-anchor="middle">&#123; &#125;</text>
        <circle cx="600" cy="180" r="26" fill="#fbbf24"/>
    </svg>
</template>
```

グラデーション色（`stop-color`）は技術に合わせて調整可能です。

---

## 12. ボタン

```html
<!-- プライマリボタン（グロー付き） -->
<button class="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-medium transition-all">
    ボタンテキスト
</button>

<!-- セカンダリ（ニュートラル面） -->
<button class="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg font-medium transition-all">
    ボタンテキスト
</button>
```

---

## 13. テーブル

HTML クラスは v2 と同一。`styles.css` が自動で角丸・影・ヘッダー色を適用します。

```html
<div class="overflow-x-auto">
    <table class="min-w-full border border-slate-200 rounded-xl overflow-hidden">
        <thead class="bg-slate-100">
            <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">列名</th>
            </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-200">
            <tr class="hover:bg-slate-50">
                <td class="px-6 py-4 text-sm text-slate-900">データ</td>
            </tr>
            <!-- primary ハイライト行 -->
            <tr class="bg-primary-50">
                <td class="px-6 py-4 text-sm text-slate-900">強調データ</td>
            </tr>
        </tbody>
    </table>
</div>
```

---

## 14. レスポンシブユーティリティ

Tailwind CSS の標準ブレークポイント（v2 と同一）：

| プレフィックス | 最小幅 |
|--------------|-------|
| `sm:` | 640px |
| `md:` | 768px |
| `lg:` | 1024px |
| `xl:` | 1280px |
| `2xl:` | 1536px |

---

## 参考ドキュメント

- `reference/color-themes.md` — 技術別カラーテーマの詳細（`{{PRIMARY_*}}` の具体値）
- `reference/mermaid-patterns.md` — Mermaid 図パターン集
- `snippets/components.html` — 各コンポーネントのビジュアルプレビュー
