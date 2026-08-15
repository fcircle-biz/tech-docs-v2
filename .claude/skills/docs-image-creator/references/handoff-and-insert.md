# 差し込みへの受け渡しとビルド

生成した画像を章HTMLへ差し込む工程。**差し込み規約・配置・ビルド・検証は `docs-image-inserter` スキルの references が真実源**であり、ここでは重複定義せず「受け渡す成果物の形」と「本スキル固有の既定」だけを定める。

参照先（真実源）:

- `.claude/skills/docs-image-inserter/references/figure-snippet.md` — `<figure>` の正規形・src・alt・figcaption・インデント整合・既存図の扱い
- `.claude/skills/docs-image-inserter/references/placement-and-build.md` — 配置先パス規則・コピー手順・`npm run build`・検証チェックリスト
- `.claude/skills/docs-image-inserter/references/insertion-spec.md` — 差し込み指示Markdownの読み取り方・アンカー特定

## 受け渡しの形

`work/<slug>/` に次を揃えた時点で、`docs-image-inserter` がそのまま処理できる状態になる。

```
work/<slug>/
├── <slug>-<NN>-<topic1>.png     ← codex が生成
├── <slug>-<NN>-<topic2>.png
└── 差し込み箇所.md               ← 本スキルが Step 5 で作成
```

`work/` は `.gitignore` 対象（`/work/`）。素材は work/ に温存し、公開アセットは `public/` へ**コピー**で取り込む（移動しない）。

## `差し込み箇所.md` の書式

```markdown
# <技術名> 学習ガイド 第<N>章 挿絵差し込み指示

対象章: `docs/guide/<分類パス>/<slug>/<slug>-learning-material-<NN>.html`
（本文断片: `astro-system/src/chapters/<分類パス>/<slug>/<slug>-learning-material-<NN>.html`）

- 分類パス: `<分類パス>`
- slug: `<slug>`
- 章番号: `<NN>`

画像は codex（GPT Image 2 / imagegen）で生成。既存 Mermaid 図は**残置**し、画像で補完する。

## 画像一覧

| 元ファイル | 論理名 | 差し込み箇所 | 既存要素の扱い | 役割 |
|-----------|--------|------------|--------------|------|
| `<slug>-<NN>-<topic1>.png` | `<slug>-chapter<NN>-<topic1>.png` | 学習目標カード（「この章で学ぶこと」）の直後、`<!-- セクション1.1 -->` の直前 | — | <役割> |
| `<slug>-<NN>-<topic2>.png` | `<slug>-chapter<NN>-<topic2>.png` | セクション<N.M>「<見出し>」の既存 Mermaid 図の位置 | **置換**（同じ流れのため既存 Mermaid を削除） | <役割> |

`既存要素の扱い` 列は**必須**。`—`（周辺に重複要素なし）／`置換（<対象>を削除）`／`両方残す（切り口が別）` のいずれかを必ず書く。空欄にすると差し込み側が機械的に併置して重複が生まれる。

## 差し込みイメージ

### 1. <位置の説明>

`images/<slug>-chapter<NN>-<topic1>.png`

- 推奨キャプション: `<figcaption に入れる1文>`
- alt: `<内容を述べる日本語 alt>`

### 2. <位置の説明>

`images/<slug>-chapter<NN>-<topic2>.png`

- 推奨キャプション: `<...>`
- alt: `<...>`

## 差し込み規約

- `astro-system/public/guide/<分類パス>/<slug>/images/` へ論理名でコピーする。
- `src` は base 付き絶対URL: `/tech-docs-v2/guide/<分類パス>/<slug>/images/<論理名>.png`
- サイズ指定は `w-full max-w-3xl mx-auto rounded-lg border border-slate-200 shadow-sm`
- `loading="lazy" decoding="async"` を付ける。
- 周辺インデントに合わせる（章導入＝コンテンツ直下の浅いインデント／セクション内＝`<section>` 内の深いインデント）。
```

## 本スキル固有の既定

| 項目 | 既定 | 理由 |
|------|------|------|
| `<figure>` の最大幅 | **`max-w-3xl`** | 本スキルが生成するのは 1536x1024 の横長インフォグラフィック。リポジトリ実績も `max-w-3xl` が多数派（`max-w-3xl` 34 件 / `max-w-2xl` 10 件）。指示があれば `max-w-2xl` 等に変更する |
| 既存 Mermaid 図・比較表・「表示イメージ」 | **図案ごとに判定**（`illustration-design.md` の「重複棚卸し」／`figure-snippet.md` の「既存図の扱い」） | 同じ流れの図が2つ続く・同じサンプルの表示イメージが2箇所にある状態を作らない |
| 章導入画像の位置 | 学習目標カードの直後（最初の `<section>` の直前） | 既存教材（git-github 第1章）と同じ配置。ただし**後続節のダイジェストにはしない** |

その他（src の base、alt の書き方、figcaption の色 `text-slate-600`、インデント整合）は `figure-snippet.md` の規約をそのまま守る。

## 差し込みの実行

`Skill` ツールで `docs-image-inserter` を起動する（引数 `<slug>`）。同スキルが以下を行う。

1. `work/<slug>/` の画像と指示書を読み取り、論理名へ対応付ける
2. `astro-system/public/guide/<分類パス>/<slug>/images/` へコピー
3. `astro-system/src/chapters/<分類パス>/<slug>/<slug>-learning-material-<NN>.html` へ `<figure>` 差し込み
4. `astro-system/` で `npm run build`
5. 検証チェックリストで確認

## 最終検証（本スキルとしての確認）

`docs-image-inserter` の検証に加え、本スキルの完了条件として次を確認する（定型確認は `model: haiku` のサブに委譲してよい）。

```bash
# figure 数 = 差し込み枚数
grep -c '<figure' docs/guide/<分類パス>/<slug>/<slug>-learning-material-<NN>.html

# src 参照と実ファイルの対応
grep -o 'images/[A-Za-z0-9_-]*\.png' docs/guide/<分類パス>/<slug>/<slug>-learning-material-<NN>.html
ls -la docs/guide/<分類パス>/<slug>/images/

# 既存 Mermaid 図の増減が指示書の「既存要素の扱い」列と一致すること
grep -c 'class="mermaid"' docs/guide/<分類パス>/<slug>/<slug>-learning-material-<NN>.html

# 重複の目視確認（画像と同じ内容の表・表示イメージ・図が残っていないか）
grep -n 'class="mermaid"\|<table\|表示イメージ\|grid-cols-' docs/guide/<分類パス>/<slug>/<slug>-learning-material-<NN>.html

# ソースと公開ディレクトリ以外を触っていないこと
git status --short
```

チェック項目:

1. ビルドが成功している
2. `<figure>` の数 = 差し込んだ画像枚数
3. 各 `src` が `docs/` の実ファイルに 1:1 で解決する（リンク切れなし）
4. Mermaid 図・表・「表示イメージ」の増減が指示書の `既存要素の扱い` 列と一致している（意図しない削除も、意図しない併置＝重複も無い）
5. `git status` の変更が「章の本文断片」「`public/.../images/`」「`docs/` のビルド出力」だけである

## 完了後の案内

- 実機描画（ダークモード・レスポンシブ・画像の表示バランス・ライトボックス動作）を確認するなら `/docs-browser-review <対象章HTML>`
- コミット／PR は本スキルの範囲外。`/git-pr` に委譲する
