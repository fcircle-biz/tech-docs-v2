# step2: 第1章の本文断片生成（構造テンプレ＝継承元）

技術分野の初心者向けHTMLベース教育コンテンツ作成の専門家として、**第1章の本文断片**を生成する。この第1章断片が、第2章以降の構造テンプレ（継承元）になる。

> **旧フローからの変更**: 旧 step2 は「`astro-system/templates/v1/html/` から4ファイルをコピーし、`styles.css` の `{{PRIMARY_*}}` を置換し、`sidebar-content.js` を編集し、フル HTML を生成」していた。**これらはすべて廃止**。Astro では共通部品（CSS/JS/サイドバー/ヘッダー/フッター）はレイアウトと `_shared/` が供給するため、章は**本文断片のみ**を作る。技術色は step1 のデータ.ts `primary` で設定済み。

## 前提（step1 完了済み）

- `src/data/guides/<category>/<slug>.ts`（`TechGuide`、`primary`・`chapters[]` 設定済み）
- `src/data/guides/index.ts` に登録済み
- `public/guide/<category>/<slug>/README.md`（概要）

技術色・章定義は上記データに入っているため、第1章断片で色や章配列を書く必要はない。

## 1. 本文断片とは（最重要）

生成するファイルは **`max-w-5xl mx-auto ...` ラッパーの内側に挿入される本文だけ**。`src/pages/guide/[...chapter].astro` が断片を読み込み、`GuideChapterLayout.astro` でラップして完全な HTML を出力する。

**断片に含めるもの**:
- パンくずリスト（`<nav class="flex items-center gap-2 text-sm text-slate-500 mb-6">...`）
- 章ヘッダー（章番号バッジ `bg-primary-100 text-primary-700`、`<h1>`、説明文）
- 学習目標カード
- 本文セクション（説明・コード例・図表・クイズ等）
- 前章／次章ナビゲーション（相対リンク `<slug>-learning-material-NN.html`）

**断片に含めてはいけないもの（レイアウトが供給。書くと二重表示・破損）**:
- `<!DOCTYPE>`・`<html>`・`<head>`・`<meta>`・`<title>`
- `tailwind.config`・CDN の `<script>`／`<link>`（Tailwind・Highlight.js・Mermaid・Font Awesome・Google Fonts）
- グローバルヘッダー（`<header class="fixed ... header-rich">`）・サイドバー（`<aside id="sidebar">`）・フッター（`<footer>`）
- 共通スクリプト（`main.js`・`drawing-tool.js`）・`styles.css` の `<link>`
- ダークモードボタン（`main.js` が動的生成）・スクロールトップボタン

> 既存の断片例: `astro-system/src/chapters/development-processes/codex/codex-learning-material-01.html` を参照すると、断片の粒度・インデント・先頭（パンくず）から末尾（前後ナビ）までの構造が分かる。

## 2. README／カリキュラム分析

step1 で設計したカリキュラム（または `public/guide/<category>/<slug>/README.md`）から、第1章の学習目標・内容を抽出する。

## 3. 第1章断片の生成

- ファイル: `src/chapters/<category>/<slug>/<slug>-learning-material-01.html`
- 技術色は Tailwind の `primary` クラス（`text-primary-600`・`bg-primary-100`・`border-primary-500` 等）で参照する。レイアウトの `tailwind.config` とインライン注入された CSS 変数で解決される（生の hex を書かない）。
- HTML生成の共通ルール（断片構造・ヘッダー非混入・Mermaid・コンポーネント・ダーク可読性・Highlight.js追加言語・コード方針）は **references/html-rules.md に集約**しているので必ず参照すること。

## 4. ダーク可読性（重要・標準クラスのみ）

`_shared/styles.css` のダーク補正が、標準 Tailwind の淡色背景 `bg-*-50〜300` を暗色化、暗色文字 `text-*-600〜950` を明色化する（全 color family 対応）。**標準クラスを使う限りダークで文字が読めなくなる事故は起きない。** 以下は禁止（CSS 補正対象外でダーク事故源）:

- 生color指定: `text-[#333]`・`bg-[#f0f0f0]` 等の角括弧任意値
- インライン `style="color: ..."`／`style="background: ..."`
- 半透明背景: `bg-white/70`・`bg-white/60`・`bg-white/50` 等

内側ボックスは親と同系色の `-100` 背景＋`-900` テキストにする（例: 親 Blue → `bg-blue-100` ＋ `text-blue-900`）。

## 5. 生成後の構成例

```bash
astro-system/
├── src/data/guides/cloud-infrastructure/docker.ts      # step1（primary・chapters）
├── src/data/guides/index.ts                            # step1（import 登録）
├── src/chapters/cloud-infrastructure/docker/
│   └── docker-learning-material-01.html                # step2（第1章＝構造テンプレ）
└── public/guide/cloud-infrastructure/docker/README.md   # step1（概要）
```

## 6. 初心者向け重点事項

- 理論・背景説明優先（コードより概念説明を重視）。
- 用語解説充実。視覚的理解促進（図表多用）。段階的理解構築。

## 出力

第1章の本文断片 `<slug>-learning-material-01.html` を生成し、パスを報告する。

**第2章以降は、生成フェーズで Agent ツール（`general-purpose`・`model: sonnet`）を1メッセージにまとめて並列起動し、references/step3-chapter.md に従って生成する。**
