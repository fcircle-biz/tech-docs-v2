---
name: docs-image-inserter
description: work/<名称>/ に置いた画像群と差し込み指示Markdownを読み取り、各画像を学習ガイドの該当章HTML(astro-system/src/chapters/)へ<figure>として差し込み、画像をpublic配下へ配置して docs/ へビルド・検証するスキル。用意済みの画像を既存の学習教材に図版として挿入する際に使用する。
---

# Docs Image Inserter

`work/<名称>/` に用意した画像群と「差し込み指示Markdown」を真実源に、各画像を学習ガイドの該当章 HTML（本文断片）へ `<figure>` として差し込み、画像を `public/` へ配置して `docs/` にビルド・検証する。

## 概要

ユーザーは事前に `work/<名称>/`（例: `work/github/`）へ次を用意する。

- **画像ファイル**: 1枚以上（PNG など）。ファイル名は任意（UUID 可）。
- **差し込み指示Markdown**: 各画像の論理名・差し込み箇所（見出しやアンカーテキスト）・推奨キャプション・役割を記述したファイル（例: `差し込み箇所.md`）。

本スキルはこれを読み取り、次を行う。

1. 各画像を内容で同定し、指示書の論理名へ対応付ける（UUID → `git-github-overview.png` 等）。
2. 画像を対象ガイドの `astro-system/public/guide/<分類パス>/<slug>/images/` へ正式名でコピーする。
3. 対象章の本文断片 `astro-system/src/chapters/<分類パス>/<slug>/<slug>-learning-material-NN.html` の指定箇所へ、標準 `<figure>` を差し込む。
4. `astro-system/` で `npm run build` し、`docs/` への出力と参照整合を検証する。

- **編集対象はソースの本文断片（`src/chapters/`）と画像配置先（`public/`）のみ**。`docs/` はビルド成果物であり直接編集しない。
- 共通シェル（レイアウト・`_shared/`）には触れない。
- git 操作（ブランチ作成・コミット・PR）は本スキルの範囲外。必要なら `/git-pr` に委譲する。

## 使用方法

```
/docs-image-inserter <名称>
```

- `<名称>`: 画像と指示書を置いた `work/` 直下のディレクトリ名（例: `github`）。
- 省略時は `work/` 直下を調べ、画像＋指示Markdownを含むディレクトリを対象とする。

例:
- `/docs-image-inserter github` … `work/github/` を処理する

## 実行手順

詳細は references/ を必ず参照すること。

### Step 1: 入力の読み取りと対象ガイドの特定

1. `work/<名称>/` の中身を一覧し、画像ファイルと差し込み指示Markdownを判別する。
2. 指示Markdownを読み、各画像の **論理名・差し込み箇所・推奨キャプション・役割** を抽出する。
3. 指示書中の章ファイル名・URL（例 `.../git-github/git-github-learning-material-01.html`）から、対象の **`<分類パス>/<slug>` と章番号 NN** を特定する。曖昧なら `astro-system/src/chapters/` 配下の実在ガイドと照合して確定する。
   - 詳細は `references/insertion-spec.md` を参照。

### Step 2: 画像の同定（UUID → 論理名）

1. 各画像を Read で開いて内容を視認し、指示書の論理名・役割に対応付ける（内容・寸法で照合）。この対応付けは判断作業なので **オーケストレーター（本体, Opus）** が担う。
2. UUID/任意名 → 正式ファイル名の対応表を確定する。

### Step 3: 画像の配置

1. `astro-system/public/guide/<分類パス>/<slug>/images/` を作成する。
2. `work/<名称>/` の各画像を **正式名** で同ディレクトリへコピーする（`work/` は `.gitignore` 対象のためコピーで取り込む。移動でなくコピー）。
   - 詳細は `references/placement-and-build.md` を参照。

### Step 4: 章HTMLへの差し込み

1. 対象章の本文断片を読み、指示書の各「差し込み箇所」（見出し・アンカーテキスト・既存図の直後など）を特定する。
2. 各箇所へ `references/figure-snippet.md` の **標準 `<figure>` スニペット** を挿入する。`src`・`class`・`alt`・`figcaption`・**周辺インデント整合**の規約を厳守する。
3. 既存図（Mermaid 等）は指示書の方針に従う（既定は **残置**＝説明→画像→既存図の順で補完）。

### Step 5: ビルドと検証

1. `astro-system/` で `npm run build` を実行する。
2. `references/placement-and-build.md` の検証チェックリストで確認する（figure 数＝画像数 / 各 `src` が `docs/` の実ファイルに解決 / ビルド成功）。

### Step 6: 報告

差し込んだ画像と配置先・差し込み箇所（章・見出し）を表で日本語報告する。続けて実機描画確認をするなら `/docs-browser-review`、コミット/PR は `/git-pr` を案内する。

## 差し込み標準（要点）

正規形・全規約は `references/figure-snippet.md` に集約。要点のみ:

- **配置先**: `astro-system/public/guide/<分類パス>/<slug>/images/<論理名>.<拡張子>`
- **参照 src**: base 付き絶対URL `/tech-docs-v2/guide/<分類パス>/<slug>/images/<論理名>.<拡張子>`（base は `astro.config.mjs` の `base`、現状 `/tech-docs-v2/`。`_shared` 参照と同じ規約に統一）
- **サイズ**: `class="w-full max-w-2xl mx-auto ..."`（全幅は大きすぎる。`max-w-2xl`=672px・中央寄せが既定。指示があれば `max-w-xl`/`max-w-3xl` 等に調整）
- **キャプション**: `<figcaption class="mt-2 text-center text-sm text-slate-600">`（`text-slate-600` はダーク自動補正の範囲内＝ライト/ダーク両モードで可読）
- **alt**: 本文に沿った説明的な日本語（装飾でなく内容を述べる）
- **遅延読込**: `loading="lazy" decoding="async"`
- **インデント**: 挿入箇所周辺の既存インデントに合わせる（`<section>` 内は深い／コンテンツ直下は浅い）

## 注意事項（エージェント実行ルール厳守）

- **モデル割り当ては CLAUDE.md「エージェント編成（モデル割り当て）」に従う。** 画像同定・配置判断＝Opus（本体）。章数が多く並列化する場合の章別差し込み＝Sonnet サブ。定型の存在確認＝Haiku。
- **日本語で出力する。**
- 処理中に提案・確認・中断をしない。最後まで完遂する。「これから差し込みます」で終わらず、実際にファイルを編集し `npm run build` で `docs/` に反映するまで継続する。
- サブエージェントを並列起動する場合（画像が多数の章にまたがる等）は、必ず1メッセージにまとめて発行する（1つずつ順次は禁止）。
- **編集対象はソース（`src/chapters/`）と画像配置先（`public/`）のみ**。`docs/` は直接編集しない（ビルドで生成）。共通シェル（レイアウト・`_shared/`）は変更しない。
- **絶対パスのハードコード禁止**: `/home/<user>/...` 等の環境依存パスをコメントや説明に書かない。リポジトリルート相対で表現する。
- base path（`/tech-docs-v2/`）は `astro.config.mjs` の `base` を真実源とする。値が変わっていれば src の接頭辞もそれに合わせる。

## references

| ファイル | 内容 |
|----------|------|
| `references/insertion-spec.md` | 差し込み指示Markdownの期待フォーマットと読み取り方／対象 `<分類パス>/<slug>`・章番号の特定方法 |
| `references/figure-snippet.md` | 標準 `<figure>` スニペットの正規形と class／src／alt／figcaption／インデント／既存図の扱いの全規約 |
| `references/placement-and-build.md` | 画像配置先パス規則・コピー手順・ビルド・検証チェックリスト |
