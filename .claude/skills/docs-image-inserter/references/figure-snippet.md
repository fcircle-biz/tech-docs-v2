# 標準 figure スニペットと差し込み規約

学習ガイドの本文断片（`astro-system/src/chapters/...`）へ画像を差し込む際の正規形と全規約。教材は HTML（Tailwind）なので、指示書が Markdown 記法（`![]()`）でも **HTML の `<figure>` に変換して**差し込む。

## 正規形（コピー元）

```html
<figure class="my-6">
    <img src="/tech-docs-v2/guide/<分類パス>/<slug>/images/<論理名>.<拡張子>"
         alt="<本文に沿った説明的な日本語の代替テキスト>"
         class="w-full max-w-2xl mx-auto rounded-lg border border-slate-200 shadow-sm"
         loading="lazy" decoding="async" />
    <figcaption class="mt-2 text-center text-sm text-slate-600"><キャプション文></figcaption>
</figure>
```

## 各規約

### src（参照パス）
- **base 付き絶対URL** を使う: `/tech-docs-v2/guide/<分類パス>/<slug>/images/<論理名>.<拡張子>`。
- base は `astro.config.mjs` の `base`（現状 `/tech-docs-v2/`）を真実源とする。`_shared` アセット（`/tech-docs-v2/guide/_shared/...`）と同じ規約に統一する。
- 相対パス（`images/...`）でも同ディレクトリ配信で解決はするが、コードベース規約は絶対URL。絶対URLに統一する。

### class（サイズ・体裁）
- `w-full max-w-2xl mx-auto rounded-lg border border-slate-200 shadow-sm`
- `w-full` 単独（カラム全幅）は**大きすぎてバランスが崩れる**。必ず `max-w-2xl`（=672px）で頭打ちにし、`mx-auto` で中央寄せする。
- サイズ調整の目安（ユーザー指定があれば差し替え）: `max-w-xl`=576px（小）/ `max-w-2xl`=672px（既定）/ `max-w-3xl`=768px（大）。
- `border border-slate-200` の枠と `rounded-lg`・`shadow-sm` で本文から浮かせる。

### alt
- 本文の文脈に沿った**内容説明**を日本語で書く（「画像」「図」等の空疎語でなく、何を示す図かを述べる）。
- 例: `alt="ローカル（自分のPC）で記録した変更履歴を push でリモート（GitHub）へ送り、他の人は clone / pull で取得して共有する関係を示した図。"`

### figcaption（キャプション）
- `class="mt-2 text-center text-sm text-slate-600"`。
- 色は **`text-slate-600`** を使う。`_shared/styles.css` のダーク自動補正は `text-*-600〜950` を明色化するため、`text-slate-600` はライト/ダーク両モードで可読になる。`text-slate-400/500` など補正範囲外の薄色は**使わない**（ダークで読みにくくなる）。
- 文言は指示書の「推奨キャプション」をそのまま使う（例 `図1-1 …`）。

### 遅延読込
- `loading="lazy" decoding="async"` を必ず付ける（教材画像は本文中盤以降に多く、初期表示を妨げない）。

### インデント整合（重要・つまずきポイント）
- `<figure>` ブロックは**挿入箇所周辺の既存インデントに正確に合わせる**。
- 章 HTML では、`<section>` 内の要素（多くの本文）と、章ヘッダー直下などコンテンツ直下の要素とで**インデント深さが異なる**。同一スニペットを全箇所へ一括置換すると、浅い箇所だけ一致せず差し込み漏れが起きる。
- 箇所ごとに周辺行のインデントを確認し、それに合わせて差し込む。一括置換に頼らず、漏れがないか figure 数で検証する（`references/placement-and-build.md`）。

## 既存図（Mermaid 等）の扱い
- 既定は **残置（補完）**。指示書の「おすすめA：初心者向け（説明 → 画像 → Mermaid図）」に従い、画像を既存図の**直前**に置く。
- 指示書が「置換」を明示する場合のみ既存図を削除する。判断に迷う場合は残置（情報を消さない）。

## 視認性・ダーク規約（CLAUDE.md 準拠）
- 生color指定（`text-[#...]`・`bg-[#...]`）、インライン `style=`、半透明背景（`bg-white/70` 等）は使わない。
- 画像自体が白背景のイラストでも、`<figure>` 側に背景色は付けない（枠 `border-slate-200` のみ）。ダークでは画像自身の地色がそのまま出る（イラスト図版では許容）。
