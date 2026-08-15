---
name: docs-image-creator
description: 学習ガイドの章HTMLの内容を読み取って挿絵の図案を設計し、codex CLI の imagegen（GPT Image 2）で画像を生成して work/<slug>/ に保存し、そのまま章HTMLへ <figure> 差し込み・ビルドまで行うスキル。教材に新しく挿絵イラスト／インフォグラフィックを作って入れたい際に使用する。
---

# Docs Image Creator

対象章の本文を読み取って**挿絵の図案を設計**し、**codex CLI の `imagegen` スキル（GPT Image 2）**で画像を生成、`work/<slug>/` へ保存したうえで、**章HTMLへの差し込み・ビルド・検証まで**を一気通貫で行う。

**技術・分類を問わず**すべての学習ガイドで使える（対象章から分類パス・slug・章番号・技術色を自動導出する）。

## 既存スキルとの関係（重要）

| スキル | 入力 | 担当範囲 |
|--------|------|---------|
| **docs-image-creator（本スキル）** | 章HTML（画像は**まだ無い**） | 図案設計 → **画像生成（codex/GPT Image 2）** → 差し込み → ビルド |
| `docs-image-inserter` | `work/<名称>/` に**用意済みの画像**＋差し込み指示Markdown | 差し込み → ビルド |

本スキルは Phase 1〜3（設計・生成・検証）を担い、**Phase 4（差し込み・ビルド）は `docs-image-inserter` の規約・手順をそのまま使う**（重複定義しない）。そのため本スキルの生成物は、`docs-image-inserter` がそのまま受け取れる形（`work/<slug>/` に画像＋`差し込み箇所.md`）で出力する。

## 使用方法

```
/docs-image-creator <対象章> [枚数]
```

- `<対象章>`: 次のいずれか。いずれの形でも分類パス・slug・章番号を導出する。
  - 章HTMLパス（公開側 / ソース側どちらでも可）
    - `docs/guide/<分類パス>/<slug>/<slug>-learning-material-NN.html`
    - `astro-system/src/chapters/<分類パス>/<slug>/<slug>-learning-material-NN.html`
  - ガイドディレクトリ（`docs/guide/<分類パス>/<slug>` 等）… 章指定が無ければ**第1章**を既定対象とする
  - 自然言語（例: `docker 第3章`）
- `[枚数]`（任意）: その章に作る画像の枚数。省略時は **章の内容量に応じて 1〜3 枚（既定 2 枚）** を本スキルが決める。

例:
- `/docs-image-creator docs/guide/web-technologies/markdown/markdown-learning-material-01.html`
- `/docs-image-creator astro-system/src/chapters/cloud-infrastructure/docker/docker-learning-material-03.html 1`
- `/docs-image-creator docs/guide/programming-languages/java-ecosystem/spring-boot 3`

## 前提

- **codex CLI が利用可能でログイン済み**であること（`codex --version` で確認。未ログインなら `codex login` をユーザーに依頼する）。
- codex の画像生成フィーチャーが有効であること（`codex features list | grep image_generation` が `stable ... true`）。
- 画像生成はネットワークを使う（1枚あたり **約 40〜70 秒**）。
- 生成素材の置き場 `work/` は `.gitignore` 対象（`/work/`）。**素材は work/ に温存**し、公開アセットは `public/` へ**コピー**で取り込む。

## 実行手順

詳細は references/ を必ず参照すること。

### Step 1: 対象の特定と技術メタの取得

1. 引数から **分類パス・slug・章番号 NN** を確定する。曖昧なら `astro-system/src/chapters/` 配下の実在ガイドと照合する。
2. **本文断片**（真実源）を読む: `astro-system/src/chapters/<分類パス>/<slug>/<slug>-learning-material-NN.html`
3. **技術色**を取得する: `astro-system/src/data/guides/<分類パス>/<slug>.ts` の `primary.500` / `primary.600` と `splashStop1`（アクセント色）。
4. 既存の**スタイル参照画像**を選ぶ（`references/codex-imagegen.md` の選定順に従う）。

### Step 2: 図案設計（**Opus＝オーケストレーター本体が担当**）

1. 章の見出し構成（`<h2>` の 1.1、1.2 …）・既存 Mermaid 図・カード類を把握し、**画像で価値が出る箇所**を選ぶ。
2. 画像ごとに「役割・タイトル・レイアウト・画像内に描く日本語文字列」まで具体的に決める。
3. 論理名・差し込み位置・キャプション・alt を決める。
   - 設計指針・命名規則・禁止事項は `references/illustration-design.md` を参照。

### Step 3: codex で画像生成

1. `work/<slug>/` を作成する。
2. Step 2 の設計から**codex 用プロンプト**（Markdown）をスクラッチパッドに書き出す。
3. `codex exec` を**バックグラウンドで**実行し、`work/<slug>/` へ PNG を生成させる。
4. 生成完了を待つ（Monitor で「codex プロセス終了」を待機）。
   - コマンド・プロンプトテンプレート・リトライ方針は `references/codex-imagegen.md` を参照。

### Step 4: 生成物の検証（**Opus＝本体が目視**）

1. `file work/<slug>/*.png` で寸法（既定 **1536x1024**）を確認する。
2. **各画像を Read で開いて自分の目で確認する**（日本語の誤字・意味不明な綴り・レイアウト崩れ・ロゴ混入・配色ずれ）。
3. 不合格なら Step 3 のプロンプトを修正して**再生成**する（同一章で最大2回まで。3回目で通らなければ所見をユーザーに報告して判断を仰ぐ）。
   - 合否基準は `references/illustration-design.md` の「検収チェック」を参照。

### Step 5: 差し込み指示Markdownの作成と差し込み・ビルド

1. `work/<slug>/差し込み箇所.md` を書き出す（`references/handoff-and-insert.md` の書式）。
2. **`docs-image-inserter` スキルを起動**して差し込み・ビルド・検証を行う（`Skill` ツールで `docs-image-inserter`、引数は `<slug>`）。
   - 差し込み規約（`<figure>` 正規形・src・alt・インデント整合）と配置・ビルド・検証チェックリストは **docs-image-inserter の references が真実源**。
   - サイズ既定だけは本スキルの生成物に合わせる（`references/handoff-and-insert.md` 参照）。

### Step 6: 報告

生成した画像・役割・差し込み箇所（章・見出し）・検証結果を表で日本語報告する。続けて実機描画確認をするなら `/docs-browser-review`、コミット/PR は `/git-pr` を案内する。

## 命名規則

| 対象 | 規則 | 例 |
|------|------|-----|
| work/ 内の生成ファイル | `<slug>-<NN>-<topic>.png` | `markdown-01-overview.png` |
| 公開アセット（論理名） | `<slug>-chapter<NN>-<topic>.png` | `markdown-chapter01-overview.png` |
| 配置先 | `astro-system/public/guide/<分類パス>/<slug>/images/` | — |
| 参照 src | `/tech-docs-v2/guide/<分類パス>/<slug>/images/<論理名>.png` | — |

`<topic>` は内容を表す英小文字ケバブケース（`overview` / `render-flow` / `branch-workflow` 等）。

## 注意事項（エージェント実行ルール厳守）

- **モデル割り当ては CLAUDE.md「エージェント編成（モデル割り当て）」に従う。** 図案設計・画像の目視検収・採否判定＝**Opus（本体）**。複数章にまたがる場合の章別生成＝**Sonnet サブ**。寸法・ファイル存在・figure数などの定型確認＝**Haiku サブ**。
- **日本語で出力する。**
- 処理中に**提案・確認・中断をしない**。最後まで完遂する。「これから生成します」で終わらず、実際に画像を生成し、差し込み、`npm run build` で `docs/` に反映するまで継続する。
- 複数章を対象にする場合、章ごとのサブエージェントは**1メッセージにまとめて並列起動**する（1章ずつ逐次は禁止）。
- **codex には画像生成以外をさせない**。プロンプトに「リポジトリの他ファイル（`src/`・`docs/`・`astro-system/`）は一切変更しない。作業は `work/<slug>/` への画像保存のみ」を必ず明記する。差し込み・ビルドは**本スキル側（Claude）が行う**。
- **編集対象はソース（`src/chapters/`）と画像配置先（`public/`）のみ**。`docs/` は直接編集しない（ビルドで生成）。共通シェル（レイアウト・`_shared/`）は変更しない。
- **絶対パスのハードコード禁止**: 章HTMLやコミット対象ファイルに `/home/<user>/...` 等の環境依存パスを書かない（codex 実行コマンドの一時ファイルパスは除く）。
- 画像内に**実在サービスのロゴマーク・商標を描かない**（日本語ラベルのみ）。
- 生成に2回続けて失敗した場合は、無限リトライせず状況をユーザーに報告する。

## references

| ファイル | 内容 |
|----------|------|
| `references/illustration-design.md` | 図案設計の指針（何枚・どこに・何を描くか）／画像内テキスト規約／配色／禁止事項／生成物の検収チェック |
| `references/codex-imagegen.md` | codex CLI の呼び出し方（`codex exec` コマンド・バックグラウンド実行・完了待ち）／プロンプトテンプレート／スタイル参照画像の選定／リトライとトラブルシュート |
| `references/handoff-and-insert.md` | `work/<slug>/差し込み箇所.md` の書式と、docs-image-inserter への委譲・本スキル固有のサイズ既定・最終検証 |
