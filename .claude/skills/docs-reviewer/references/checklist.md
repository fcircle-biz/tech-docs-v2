# 検証チェックリスト（資料タイプ別）

docs-reviewer の検証サブエージェントが従う観点一覧。**共通観点（全タイプ必須）** と **資料タイプ固有観点** に分かれる。判定値の真実源は CLAUDE.md と `astro-system/templates/v1/reference/`（カラー・Tailwind・Mermaid・コンポーネント）であり、ここには代表値の抜粋のみを掲載する。詳細は各参照先を見ること。

各観点には深刻度を付ける。**error**（CSS破損・表示崩れ・機能不全・原則違反）/ **warning**（規約逸脱・可読性低下）/ **info**（軽微・推奨）。

---

## A. 共通観点（全資料タイプ必須）

### A-1. Mermaid記法（CLAUDE.md方式に統一）／深刻度: error

Mermaid図を含むHTMLで以下を確認する。詳細は `astro-system/templates/v1/reference/mermaid-patterns.md` を参照。旧 step に `&#124;` 等のHTMLエンティティ方式が残っていても **CLAUDE.md 方式へ寄っているか** を見る。

- [ ] **HTMLエンティティを使っていない**: `&#40;`（`(`）`&#41;`（`)`）`&#38;`（`&`）`&#124;`（`|`）等が Mermaid コード内に無い。
- [ ] **括弧**: 半角括弧 `()` を生で含むノードが無い。全角括弧 `（）` にするか、ノードテキスト全体をダブルクォートで囲む（例: `A["テキスト（括弧つき）"]`）。
- [ ] **アンパサンド**: `&` でなく全角 `＆` を使っている。
- [ ] **改行**: ノード内で `<br/>` を使う場合、そのノードがダブルクォートで囲まれている（例: `A["1行目<br/>2行目"]`）。
- [ ] **特殊文字（`/` `~` 等）を含むノード**がダブルクォートで囲まれている（例: `node["/usr/share/nginx/html"]`、`node["~/my-folder"]`）。
- [ ] **darkテーマ未使用**: `%%{init: {'theme':'dark'}}%%` 等の dark テーマ指定が無い（デフォルトテーマを使用）。

**正しい例 / 誤った例:**
```
# 正しい
flowchart TD
    A["第1章: 概要（現在）"] --> B{OS}
    B -->|Windows| C["Windows環境構築"]
    D{"OR演算子"} --> E

# 誤り（Syntax error 要因）
flowchart TD
    A[第1章: 概要<br/>&#40;現在&#41;] --> B{OS}
    D{AND演算 &&} --> E
```

### A-2. 技術色の設定／深刻度: error

> **適用範囲**: 下記の `{{PRIMARY_*}}` 置換は**旧テンプレ方式の資料**（per-tech `styles.css` を持つ legacy 変種）にのみ該当。**Astro 学習ガイドは非該当** — 技術色は `src/data/guides/<分類>/<slug>.ts` の `primary`(50-900) 1箇所で設定し、レイアウトが CSS 変数を導出する（B 節参照）。共有 `_shared/styles.css` は技術色を持たない。

- [ ] **（Astro 学習ガイド）** `src/data/guides/<分類>/<slug>.ts` の `primary`(50-900) が設定され、`index.ts` に登録されている。断片に生 hex を書いていない。
- [ ] **（legacy 旧テンプレ方式のみ）** `styles.css` に `{{PRIMARY_300/400/500/600/700}}` `{{PRIMARY_RGB}}` 等のプレースホルダーが残っていない／実カラー値に置換され、`tailwind.config` の `primary` も実値。

カラー値の正典は `astro-system/templates/v1/reference/color-themes.md`。

### A-3. テキスト視認性 ＋ ダーク可読性ガードレール／深刻度: error

- [ ] **半透明背景を使っていない**: `bg-white/70` `bg-white/60` `bg-white/50` 等の `/数字` 付き背景が無い。
- [ ] **内側ボックスは不透明な同系色**: カード内に内側ボックスを置く場合、親と同系色の `-100` 背景＋`-900` テキストになっている。

| 親カードの色 | 内側ボックス背景 | テキスト色 |
|------------|------------------|------------|
| Purple | `bg-purple-100` | `text-purple-900` |
| Blue | `bg-blue-100` | `text-blue-900` |
| Green (Emerald) | `bg-emerald-100` | `text-emerald-900` |
| Orange | `bg-orange-100` | `text-orange-900` |

**ダーク可読性（重要）**: 共通 `_shared/styles.css` のダーク補正は、**標準 Tailwind の色クラス**を自動で読みやすく変換する（淡色背景 `bg-{color}-50〜300` を暗色化、暗色文字 `text-{color}-600〜950` を明色化。全 color family 対応）。したがって標準クラスを使う限りダークで文字が読めなくなる事故は起きない。**逆に CSS が補正できない「標準外の色指定」だけが事故源**なので、以下が無いことを確認する（旧版で多発した「ダークで文字が読めない」の再発防止）。

- [ ] **任意値の生color指定が無い**: `text-[#333]` `bg-[#f0f0f0]` `text-[rgb(...)]` 等の角括弧任意値カラーが無い（ダーク補正の対象外になり暗背景で埋もれる）。
- [ ] **インライン `style` で色を直書きしていない**: `style="color: ..."` `style="background: ..."`（`background-color` 含む）が無い。色は Tailwind クラスで指定する。
- [ ] **色は標準 Tailwind パレットの範囲内**: 淡色背景は `-50〜-300`、濃色文字は `-600〜-950` の標準シェードを使う（`_shared/styles.css` のダーク補正が網羅する範囲）。新しい color family を使った場合は `_shared/styles.css` のダーク補正一覧（テキスト明色化・背景暗色化）にもその family が追加されているか確認する。

### A-4. ヘッダー構造／深刻度: error

- [ ] **ダークモードボタンがHTMLに手書きされていない**（`main.js` が動的生成する。手書きすると2つ表示される）。
- [ ] **ヘッダー右側のボタンエリア構造が変更されていない**（テンプレートのまま。`sidebar-toggle-btn` 等の構造を維持）。
- [ ] **ヘッダーのクラス名・構造が変更されていない**（カラーは `header-[color]` クラス等で切り替える）。

### A-5. スクリプト読込順／深刻度: error

> **適用範囲**: 下記は**旧テンプレ方式の資料**にのみ該当。**Astro 学習ガイドは非該当** — 章は本文断片で `<script>`/`<link>` を持たず、CDN・`_shared/main.js`・`_shared/drawing-tool.js`・`styles.css`・`hljs.highlightAll()` の読込はすべて `GuideChapterLayout.astro` が一元管理する。断片側に `<script>` 等が混入していないこと（B 節）を確認すればよい。

- [ ] **（legacy 旧テンプレ方式のみ）** 読込順が **`styles.css`（`<head>` 内）→ `sidebar-content.js` → `main.js` → `drawing-tool.js`**、末尾に `<script>hljs.highlightAll();</script>` がある。
- [ ] **（legacy cheatsheet のみ）** ダークモードのフラッシュ防止のため `<head>` で `main.js` 早期読込・`styles.css` は `<head>` 末尾（cheatsheet では sidebar-content.js / drawing-tool.js は不使用）。

### A-6. 第1単位HTML構造の継承一致／深刻度: warning

- [ ] 第2単位以降（章/ステップ/回 02 以降）のHTMLが、第1単位HTML（01）の `<head>`（CDN読込・Tailwind config）・`<header>`・`<main>`・`<footer>`・スクリプト読込構造を継承している（逸脱していない）。
- [ ] 書き換わってよいのは各単位固有のコンテンツ（タイトル・パンくず・本文・前後ナビゲーション）のみ。

### A-7. ファイル命名規則（2桁ゼロパディング）／深刻度: error

資料タイプ別の命名規則（後述「I. 資料タイプ別 命名規則・URL形式」）に一致しているか。

- [ ] HTMLファイル名の章/ステップ/回番号が**2桁ゼロパディング**（01, 02, ... 10, 11）。
- [ ] kebab-case（小文字とハイフン）。

### A-8. 日本語出力／深刻度: warning

- [ ] 本文・見出し・コメント・カードラベルが日本語で記述されている（コード内の変数名・予約語等は除く）。

### A-9. リンク切れ・相対パス／深刻度: warning

- [ ] HTML内の相対リンク（前後ナビゲーション・サイドバーリンク・iframe・PDFリンク・CSS/JS参照）の参照先ファイルが実在する。
- [ ] **絶対パスのハードコードが無い**: `/home/...` `/Users/...` 等の環境依存絶対パス、`/home/ichimaru/...` `/Users/s-ichimaru/...` 等の旧パスが資料・コマンドに無い。すべてリポジトリルート相対。
- [ ] 画像を参照する場合、拡張子が **PNG** に統一されている（illustration系）。

### A-10. 全単位定義の整合／深刻度: error

> **適用範囲**: **Astro 学習ガイド**は `sidebar-content.js` を使わない（サイドバーはレイアウトがデータからサーバーレンダリング）。下記の sidebar-content.js は**旧テンプレ方式の資料**にのみ該当。

- [ ] **（Astro 学習ガイド）** `TechGuide.chapters[]` に全章が定義され、断片ファイル数と一致（B 節）。`_shared/`（`styles.css`/`main.js`/`drawing-tool.js`）・レイアウト・データ.ts が章生成段で上書きされていない。
- [ ] **（legacy 旧テンプレ方式のみ）** `sidebar-content.js` の `chapters`（または `steps` / `rounds`）配列に全単位が定義され（HTMLファイル数と一致）、関数部分（`createSidebar()` / `insertSidebar()` 等）が維持されている。共通部品（`sidebar-content.js` `styles.css` `main.js` `drawing-tool.js`）が並列生成段で上書きされていない。

### A-11. コード品質（コードを含む資料）／深刻度: info

- [ ] コードブロックが `.code-block-wrapper` でラップされ、コピーボタンがある（`copyCode` は `main.js` の関数）。
- [ ] コード例は簡潔（目安15行以内）で日本語コメントがある。
- [ ] `language-xxx` の言語指定が適切。Highlight.js のデフォルトに無い言語（SAS / Kotlin / Groovy / Haskell / Scala / Clojure / COBOL / Fortran 等）は対応する `languages/[言語].min.js` の追加 script が読み込まれている。

---

## B. 学習ガイド（guide）固有観点 ★Astro 構成

> **学習ガイドは Astro 構成**（`astro-system/`）。章は**本文断片**（`src/chapters/<分類>/<slug>/*.html`）で、共通シェル（head・ヘッダー・サイドバー・フッター・スクリプト・CSS）は `src/layouts/GuideChapterLayout.astro` と `public/guide/_shared/` が供給する。技術色・章定義は `src/data/guides/<分類>/<slug>.ts`（`TechGuide`）が持つ。**A-2（{{PRIMARY}}置換）・A-5（per-page スクリプト読込順）・A-10（sidebar-content.js）は Astro 学習ガイドには非該当**（下記の Astro 版チェックで代替）。

- [ ] ファイル命名: `<slug>-learning-material-[NN].html`（2桁ゼロパディング）。
- [ ] 章ファイルが**本文断片**である（`<!DOCTYPE>`・`<html>`・`<head>`・グローバル `<header class="fixed">`・`<aside id="sidebar">`・`<footer>`・`<script>`・`tailwind.config` を**含まない**。混入＝二重表示・破損）。
- [ ] 各章冒頭に学習目標カードがある（`astro-system/templates/v1/snippets/components.html` 参照）。
- [ ] 技術色は `primary` クラス（`text-primary-600` 等）で参照し、生 hex を書いていない。`src/data/guides/<分類>/<slug>.ts` の `primary`(50-900) が設定され、`src/data/guides/index.ts` に import 登録されている。
- [ ] `TechGuide.chapters[]` が全章分定義され、断片ファイル数と一致する（旧 sidebar-content.js に相当。A-10 の代替）。
- [ ] ダーク可読性: 生color指定（`text-[#...]`）・インライン `style` の色・半透明背景（`bg-white/70` 等）が無い（A-3）。標準シェード（背景 `-50〜300`／文字 `-600〜950`）を使用。
- [ ] ダークモードボタンが断片に手書きされていない（`main.js` が動的生成）。
- [ ] 第2章以降が第1章断片の構造を継承（A-6 を断片に適用）。
- [ ] `astro-system/` で `npm run build` が成功し、`docs/guide/<分類>/<slug>/` に出力される。

---

> **以下 C〜G（tutorial / practice / assignment / cheatsheet / slide）は legacy 観点**。これらの旧バリアントテンプレート（`astro-system/templates/v1/html_tutorial/` 等）は Astro 移行で撤去済みで、**本リポジトリでは現在オーサリングされていない**。`docs_backup/` の旧資産を検証する場合の参考として残置する。新規にこれらの資料タイプを Astro 化する際は、本チェックリストを Astro 前提（B 節同様の断片＋データ＋共有レイアウト方式）へ更新すること。

## C. チュートリアル（tutorial）固有観点 ※legacy

- [ ] ファイル命名: `[技術名]-tutorial-[NN].html`。
- [ ] （legacy）旧テンプレ `astro-system/templates/v1/html_tutorial/`（**撤去済み**。Emerald系の primary→cyan レール）由来の `docs_backup/` 資料を検証する場合、ヘッダー構造が維持されている。
- [ ] ステップHTMLが第1ステップHTMLの構造を継承（A-6）。
- [ ] 前ステップ／次ステップのナビゲーションリンクが正しい。

---

## D. 練習問題（practice）固有観点／深刻度: error ※legacy

- [ ] ファイル命名: `[技術名]-practice-[NN].html`。
- [ ] **回答は `<details>`/`<summary>` クリック展開式のみ**（「回答を表示」クリックで展開）。
- [ ] **`textarea` 入力欄が存在しない**（使用禁止）。
- [ ] **「実行して確認」ボタン等のインタラクティブ実行UIが存在しない**（使用禁止）。
- [ ] 解説に「なぜそうなるか」＋「よくある間違いとその理由」が含まれている（warning）。
- [ ] サイドバーの `rounds`（回）が全回分（A-10）。

---

## E. 実践課題（assignment）固有観点／深刻度: error ※legacy

- [ ] ファイル命名: `[課題名]-assignment-[NN].html`。
- [ ] **実装の完成コードが書かれていない**（実践課題は自力実装が目的。提供は考え方・実装方針・設計書参照箇所・注意点・仕様の言い換えのみ。そのまま貼れば動く実装の塊は禁止）。
- [ ] 設計資料リンクが `docs/*.pdf`（PDF版）を指している。
- [ ] モック画面の iframe が `docs/mockups/*.html` を指し、参照先が実在する（リンク有効）。
- [ ] （legacy）旧テンプレ `astro-system/templates/v1/html_assignment/`（**撤去済み**。識別色はオレンジ系）由来の `docs_backup/` 資料を検証する場合、`styles.css` がオレンジ系実値（`--primary-500: #f97316` 等）で `{{PRIMARY_*}}` が残っていない（A-2 legacy）。
- [ ] 前ステップ／次ステップのナビゲーションリンクが正しい。

---

## F. チートシート（cheatsheet）固有観点 ※legacy

- [ ] ファイル: `index.html`（出力先 `docs/cheatsheet/[カテゴリパス]/[技術名小文字]/`）。
- [ ] 1ページ完結型で、コード例がコピーボタン付き `.code-block-wrapper` 構造（A-11）。
- [ ] `<head>` での `main.js` 早期読込・`styles.css` 末尾読込の構造が維持されている（A-5。ダークモードフラッシュ防止）。
- [ ] sidebar-content.js / drawing-tool.js を**使っていない**（チートシートでは不使用）。
- [ ] `tailwind.config` の `primary` パレットと `{{PRIMARY_*}}` が実値（A-2）。

---

## G. スライド（slide）固有観点 ※legacy

- [ ] 出力先 `docs/slide/[カテゴリパス]/[教材名]/` に `index.html` / `styles.css` / `main.js` / `slide-content.js` / `pdf/` が揃っている。
- [ ] `slide-content.js` の `slides` 配列が PDF枚数分定義され、各 `file` が `pdf/` 配下の実在PDFを指している（リンク有効）。
- [ ] `index.html` のプレースホルダー（`【タイトル】`/`【カテゴリ】`/`【親カテゴリ】`）が置換済み。
- [ ] `styles.css` の CSS変数（`--header-color-dark` / `--header-color-main` / `--header-color-light` / `--header-shadow-rgb`）が実カラー値に置換され、`tailwind.config` の `primary` も設定されている（未置換は配色崩れ）。
- [ ] ヘッダー構造が変更されていない。`main.js` は無編集。

---

## H. バージョン管理／深刻度: info

- [ ] 検証対象ディレクトリに `v1/`・`v2/` 等の旧バージョンフォルダがあっても、それらはアクティブコンテンツではないため **検証対象から除外**されている（Glob除外）。
- [ ] （生成時の話）出力先に既存があれば `v1/`/`v2/`... へ退避してから新規作成されている。

---

## I. 資料タイプ別 命名規則・URL形式

GitHub Pages URL 形式: `https://fcircle-biz.github.io/tech_docs/[content-type]/[category-path]/[name]/[file].html`

| 資料タイプ | content-type | ファイル命名 | GitHub Pages URL 形式 |
|-----------|-------------|------------|----------------------|
| 学習ガイド | `guide` | `[技術名]-learning-material-[NN].html` | `.../guide/[分類パス]/[技術]/[ファイル].html` |
| チュートリアル | `tutorial` | `[技術名]-tutorial-[NN].html` | `.../tutorial/[分類パス]/[アプリ]/[ファイル].html` |
| 練習問題 | `practice` | `[技術名]-practice-[NN].html` | `.../practice/[分類パス]/[技術]/[ファイル].html` |
| 実践課題 | `assignment` | `[課題名]-assignment-[NN].html` | `.../assignment/[課題名]/[ファイル].html` |
| チートシート | `cheatsheet` | `index.html` | `.../cheatsheet/[カテゴリパス]/[技術名小文字]/` |
| スライド | `slide` | `index.html` ＋ `pdf/` | `.../slide/[カテゴリパス]/[教材名]/` |

`[NN]` は2桁ゼロパディング（01〜）。分類パス（9分類体系）は `tech-knowledge-map.md` を参照。

---

## 参照（複製せず指し示す）

| 内容 | パス |
|------|------|
| 9分類体系（タクソノミー） | `tech-knowledge-map.md` |
| カラーテーマ | `astro-system/templates/v1/reference/color-themes.md` |
| Tailwind CSS スタイルガイド | `astro-system/templates/v1/reference/css-styles.md` |
| Mermaid 図パターン詳細 | `astro-system/templates/v1/reference/mermaid-patterns.md` |
| カードコンポーネント集 | `astro-system/templates/v1/snippets/components.html` |
| 全体の最上位ルール | `CLAUDE.md` |
