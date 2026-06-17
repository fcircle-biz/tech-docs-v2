# 共通HTMLルール（DRY集約）

第1章断片（step2）および第2章以降の断片（step3）の生成で共通して守るルール。step2-foundation.md / step3-chapter.md からこのファイルを参照する。

> **前提（Astro 構成）**: 章は**本文断片**（`max-w-5xl` ラッパー内の本文のみ）。共通の head／ヘッダー／サイドバー／フッター／スクリプト／CSS は `astro-system/src/layouts/GuideChapterLayout.astro` と `public/guide/_shared/` が供給する。

## ベース・参照ファイル

- 構造ベース: **第1章断片**（step3 は第1章断片を継承元にする）。既存例 `astro-system/src/chapters/development-processes/codex/codex-learning-material-01.html`。
- レイアウト（共通シェル）: `astro-system/src/layouts/GuideChapterLayout.astro`
- カードコンポーネント: `astro-system/templates/v1/snippets/components.html`
- カラーテーマ: `astro-system/templates/v1/reference/color-themes.md`
- CSSスタイル（Tailwind）: `astro-system/templates/v1/reference/css-styles.md`
- Mermaid図表パターン: `astro-system/templates/v1/reference/mermaid-patterns.md`

これらの値は丸写しせず、上記ファイルを参照すること。

## ファイル命名規則

- `<slug>-learning-material-[章番号:2桁].html`（例: `docker-learning-material-01.html`）
- 小文字とハイフン(kebab-case)、章番号は01から2桁ゼロパディング必須。
- 配置: `astro-system/src/chapters/<category>/<slug>/`

## 断片構造（含める／含めない）

章ファイルは**本文断片**。以下を厳守する。

**含める**: パンくずリスト → 章ヘッダー（章番号バッジ `bg-primary-100 text-primary-700`・`<h1>`・説明文）→ 学習目標カード → 本文セクション → 前章／次章ナビ（相対 `<slug>-learning-material-NN.html`）。

**含めない（レイアウトが供給。書くと二重表示・破損）**:

1. `<!DOCTYPE>`・`<html>`・`<head>`・`<meta>`・`<title>`
2. `tailwind.config`・CDN の `<script>`／`<link>`（Tailwind・Highlight.js・Mermaid・Font Awesome・Google Fonts）
3. グローバルヘッダー（`<header class="fixed ... header-rich">`）・サイドバー（`<aside id="sidebar">`）・フッター（`<footer>`）
4. 共通スクリプト（`main.js`・`drawing-tool.js`）・`styles.css` の `<link>`
5. **ダークモードボタン**（`main.js` が動的生成。断片に書くと二重になる）・スクロールトップボタン

## 技術色（primary）

- 技術色は Tailwind の `primary` クラスで参照する: `text-primary-600`・`bg-primary-100`・`border-primary-500`・`bg-primary-50` 等。
- 実際の色値は **データ.ts の `primary`(50-900)** とレイアウトのインライン注入で解決される。**断片に生の hex を書かない。**
- 旧 `{{PRIMARY_*}}` プレースホルダー・`styles.css` 編集は廃止。

## ダーク可読性ルール（重要・標準クラスのみ）

`_shared/styles.css` のダーク補正が、標準 Tailwind の淡色背景 `bg-*-50〜300` を暗色化、暗色文字 `text-*-600〜950` を明色化する（全 color family 対応）。**標準クラスを使う限りダークで文字が読めなくなる事故は起きない。** 以下は禁止（CSS 補正対象外＝ダーク事故源）:

1. **生color指定の禁止**: `text-[#333]`・`bg-[#f0f0f0]`・`text-[rgb(...)]` 等の角括弧任意値カラー。
2. **インライン `style` で色を直書きしない**: `style="color: ..."`／`style="background: ..."`。色は Tailwind クラスで指定する。
3. **半透明背景の禁止**: `bg-white/70`・`bg-white/60`・`bg-white/50` 等の `/数字` 付き背景。
4. **不透明な同系色背景**: カード内に内側ボックスを置く場合、同系色の `-100` 背景＋`-900` テキスト。

| 親カードの色 | 内側ボックス背景 | テキスト色 |
|------------------|---------------------|------------|
| Purple | `bg-purple-100` | `text-purple-900` |
| Blue | `bg-blue-100` | `text-blue-900` |
| Green | `bg-emerald-100` | `text-emerald-900` |
| Orange | `bg-orange-100` | `text-orange-900` |

## Mermaid記法ルール（CLAUDE.md 方式に統一・重要）

Mermaid図は必ず以下に従う。**HTMLエンティティ（`&#40;` `&#41;` `&#38;` `&#124;` 等）は使わない。**

1. **HTMLエンティティを使わない**。
2. **括弧**: 半角 `()` は全角 `（）` にするか、ノード全体をダブルクォートで囲む（例: `A["テキスト (括弧つき)"]`）。
3. **アンパサンド**: `&` は全角 `＆`。
4. **改行**: ノード内 `<br/>` 使用時はノードをダブルクォートで囲む（例: `A["1行目<br/>2行目"]`）。
5. **特殊文字（`/` `~` 等）を含むテキストはダブルクォートで囲む**（例: `node["/usr/share/nginx/html"]`）。
6. **プログラミング記号は日本語表記も検討**: `||` → `OR演算子`、`&&` → `AND演算子`。
7. **テーマ**: デフォルトテーマ（dark テーマ禁止）。Mermaid のダーク対応はレイアウト側 `main.js` が `html.dark` 連動で行う。

**正しい例:**
```
flowchart TD
    A["第1章: 概要 (現在)"] --> B{OS}
    B -->|Windows| C["Windows環境構築"]
    D{"OR演算子"} --> E
```

詳細は `astro-system/templates/v1/reference/mermaid-patterns.md` を参照。

## コンポーネント一覧（components.html 参照）

正典は `astro-system/templates/v1/snippets/components.html`。断片内でそのまま使える。

| コンポーネント | 用途 | スタイル |
|--------------|------|---------|
| 学習目標カード | 章の冒頭 | `bg-gradient-to-r from-amber-50 to-yellow-50` |
| セクションタイトル | 見出し | `border-l-4 border-primary-500 pl-4` |
| 実習カード | ハンズオン | `bg-gradient-to-r from-purple-50 to-fuchsia-50` |
| クイズカード | 理解度確認 | `bg-gradient-to-r from-blue-50 to-cyan-50` |
| 動作確認カード | 実行結果確認 | `bg-gradient-to-r from-emerald-50 to-teal-50` |
| 警告カード | 注意事項 | `bg-red-50 border-l-4 border-red-500` |
| ヒントカード | Tips | `bg-blue-50 border-l-4 border-blue-500` |
| 重要ポイント | 重要事項 | `bg-emerald-50 border-l-4 border-emerald-500` |
| コードブロック | コード表示 | `.code-block-wrapper` + コピーボタン |
| ファイル構成 | ディレクトリ表示 | `bg-slate-100` + `<pre>` |

## コード・図表の方針

- **コードブロック**: `.code-block-wrapper` でラップ、ファイル名表示＋コピーボタン。コードハイライトはレイアウトが読み込む Highlight.js が初期化する。
- **コード方針**: 簡潔・理解重視、15行以内、日本語コメント必須。
- **図表**: Mermaid.js 使用、デフォルトテーマ（dark テーマ禁止）。

## Highlight.js 追加言語（レイアウト側の対応）

CDN デフォルトビルド（`highlight.min.js`）には約40言語のみ含まれる。**SAS・Kotlin・Groovy・Haskell・Clojure・Scala・COBOL・Fortran** 等はデフォルト外。

> **重要**: Highlight.js はレイアウト `GuideChapterLayout.astro` の `<head>` が読み込む（全ガイド共通）。デフォルト外の言語を使うガイドを作る場合は、**断片ではなくレイアウトの `<head>` に言語スクリプトを追記**する（例: `<script is:inline src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/languages/sas.min.js"></script>`）。これは全ガイドに影響するため、追加はオーケストレーターが判断する。断片側で `<script>` を書かない。

**デフォルト含有（追加不要）**: JavaScript, TypeScript, Python, Java, C, C++, C#, PHP, Ruby, Go, Rust, Swift, SQL, HTML, CSS, JSON, YAML, Bash, Markdown。不明な場合は [Highlight.js Supported Languages](https://highlightjs.readthedocs.io/en/latest/supported-languages.html) を確認する。

## 生成物検証チェックリスト

docs-reviewer スキルの手順、または以下で全生成物を検証する。

- [ ] 章ファイルが**本文断片**である（`<!DOCTYPE>`・`<head>`・グローバルヘッダー・フッター・`<script>`・`tailwind.config` を含まない）。
- [ ] 技術色は `primary` クラスで参照し、生 hex を書いていない。データ.ts の `primary`(50-900) が設定済み。
- [ ] ダーク可読性: 生color指定（`text-[#...]`）・インライン `style` の色・半透明背景（`bg-white/70` 等）が無い。標準シェード（背景 `-50〜300`／文字 `-600〜950`）を使用。内側ボックスは同系色 `-100`＋`-900`。
- [ ] Mermaid図にHTMLエンティティ（`&#40;` 等）が無い。半角括弧は全角化orダブルクォート、`&` は全角`＆`、`<br/>` 使用ノードはダブルクォート、dark テーマ未使用。
- [ ] データ.ts の `chapters[]` が全章分定義済み（断片ファイル数と一致）、`index.ts` に登録済み。
- [ ] ダークモードボタンが断片に手書きされていない（`main.js` が動的生成）。
- [ ] ファイル名が `<slug>-learning-material-[NN].html`（2桁ゼロパディング）。
- [ ] 第2章以降が第1章断片の構造を継承している。
- [ ] コードブロックは15行以内・日本語コメントあり。
- [ ] `npm run build`（astro-system/）が成功し、`docs/guide/<category>/<slug>/` に出力される。
