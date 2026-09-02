---
name: docs-image-creator
description: 学習ガイドの章HTMLの内容を読み取って挿絵の図案を設計し、codex CLI の imagegen（組み込み image_gen ツール）で背景透過PNGを生成して work/<slug>/ に保存し、そのまま章HTMLへ <figure> 差し込み・ビルドまで行うスキル。教材に新しく挿絵イラスト／インフォグラフィックを作って入れたい際に使用する。
---

# Docs Image Creator

対象章の本文を読み取って**挿絵の図案を設計**し、**codex CLI の `imagegen` スキル（組み込み `image_gen` ツール）**で画像を生成、`work/<slug>/` へ保存したうえで、**章HTMLへの差し込み・ビルド・検証まで**を一気通貫で行う。

最終成果物は**背景透過（アルファ付き PNG）**だが、**codex にはクロマキー（マゼンタ `#ff00ff` のベタ塗り背景）で生成させ、透明化は Claude 側で `remove_chroma_key.py` により行う**（`references/codex-imagegen.md`「生成方式（クロマキー・既定）」）。

> **「透明背景」で生成させない。** 実測で `image_gen` は透明指定を**市松模様として描画**し、ファイルは `mode: RGB` になった。2回リトライしても再現し、3回目には自前スクリプト描画へ逸れた。クロマキー方式は同条件で1回目から通っている。

> **再生成を抑えることが品質と費用の両方に効く。** 実測では21枚の採用に対し `image_gen` が77回走り、その大半が codex の**不要な自己却下**だった。プロンプト設計の原則は `references/codex-imagegen.md`「再生成を抑える4原則」を必ず読んでから書く。

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
- `[枚数]`（任意）: その章に作る画像の枚数。省略時は **章の内容量に応じて 1〜5 枚（見出し3つ以下＝1枚／見出し4〜6＝2〜3枚／見出し7以上＝4〜5枚）** を本スキルが決める。重複棚卸しを通過した図案の数が実際の枚数になるため、レンジ下限を割り込むこともある。

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
4. **スタイル参照画像は既定で使わない**（陰影・グラデーションを引きずり再生成の原因になる）。トーンをそろえたい場合のみ、同じガイドの既存画像を1枚だけ、「構図の粒度だけを参照し塗り・質感は参照しない」と添えて渡す（`references/codex-imagegen.md`「原則4」）。

### Step 2: 図案設計（**Opus＝オーケストレーター本体が担当**）

1. **重複棚卸しを先に行う**（必須）。既存の Mermaid 図・比較表・「表示イメージ」ブロック・カード群を `grep` で洗い出し、各要素が持つ情報をメモする。
2. 章の見出し構成（`<h2>` の 1.1、1.2 …）を把握し、**画像で価値が出る箇所**を選ぶ。棚卸しした既存要素の**要約にすぎない図案は採用しない**（章導入画像を後続節のダイジェストにしない）。
3. 画像ごとに「役割・タイトル・レイアウト・画像内に描く日本語文字列」まで具体的に決める。
4. 論理名・差し込み位置・キャプション・alt に加え、**既存要素の扱い（置換／両方残す）**を決める。
5. **透過前提で構成を決める**。タイトルを含むすべての文字・細線を**不透明なカード／帯の中**に置く設計にする（地に直接置かない）。影・グラデーション・半透明の重ねは使わない。
6. **画像内の文字列を「描ける形」に詰める**（再生成を減らす最重要工程）。
   - 1カード・1帯あたり**14文字以内**。章の節タイトルは**そのまま使わず短縮ラベルを確定**する。
   - `―` `—` `〜` `/` を**使わない**（長音や別記号に化ける）。区切りは改行か帯の分割で表す。
   - **アイコンは既定で描かない**（一部だけ空枠が残る事故が起きる）。
   - 設計指針・重複棚卸しの判定表・命名規則・禁止事項・透過規約は `references/illustration-design.md` を参照。

### Step 3: codex で画像生成（クロマキー）

1. `work/<slug>/_raw/` を作成する（クロマキー原版の置き場。透過PNG は `work/<slug>/` 直下）。
2. Step 2 の設計から**codex 用プロンプト**（Markdown）をスクラッチパッドに書き出す。`references/codex-imagegen.md` の**プロンプトテンプレートをそのまま使う**。次を必ず含める。
   - 背景を**マゼンタ `#ff00ff` のベタ塗り**にすること（「透明背景」で生成させない）
   - **アルファは不要**で、`remove_chroma_key.py` は codex 側で実行しないこと
   - **CLI フォールバック（`scripts/image_gen.py` / `gpt-image-1.5` / `OPENAI_API_KEY`）を使わない**、**自前の描画スクリプトも書かない**こと
   - **「生成後にすること」の許容リスト**（背景の色むら・近似色・わずかな陰影・軽微な短縮は**不合格にしない**／作り直しは**1回まで**）
   - **スタイル参照画像は既定で渡さない**（陰影を引きずり再生成の原因になる）
3. `codex exec` を**バックグラウンドで**実行し、`work/<slug>/_raw/` へ PNG を生成させる。
4. 生成完了を待つ（Monitor で「codex プロセス終了」を待機。macOS では `pgrep -c` が使えないので `pgrep -f ... | wc -l` で数える）。**サブエージェントに任せた場合でも、離脱することがあるのでオーケストレーター側で終了を待ち直す**。
   - コマンド・プロンプトテンプレート・リトライ方針・トラブルシュートは `references/codex-imagegen.md` を参照。

### Step 4: 生成物の検証（**Opus＝本体が目視**）

1. `remove_chroma_key.py`（**`--force` 必須**）で `_raw/` を透明化し、`work/<slug>/` 直下へ書き出す。続けて透過検証で **RGBA・四隅 alpha 0・透明率 10〜60%** を確認する（`references/codex-imagegen.md`「変換コマンド」「透過の検証」）。
   - `Key color:` は `#f304e9` のような**近似マゼンタでも正常**。緑や白と判定されたときだけ生成し直す。
2. **各画像を Read で開いて自分の目で確認する**（日本語の誤字・意味不明な綴り・レイアウト崩れ・ロゴ混入・配色ずれ・縁の汚れ）。
3. ダーク合成 `_check-dark-*.png` を作って**目視**し、ダークモードで消える文字・線が無いことを確認する。
4. 不合格なら、**まず「プロンプトを強めても直らない不合格」かを見分ける**（ラベルの短縮・記号の化け・空アイコン枠がこれにあたる）。該当するなら **Step 2 の図案（文字列・構成）を直してから**再生成する。該当しないものだけプロンプトを修正して再生成する。同一章で最大2回まで。3回目で通らなければ所見をユーザーに報告して判断を仰ぐ。
   - 合否基準と症状別の直し方は `references/illustration-design.md` の「検収チェック」「再生成のコツ」を参照。
   - **背景の色むら・わずかな陰影・軽微な短縮は不合格にしない**（作り直しの費用に見合わない）。

### Step 5: 差し込み指示Markdownの作成と差し込み・ビルド

1. `work/<slug>/差し込み箇所.md` を書き出す（`references/handoff-and-insert.md` の書式）。差し込み対象は **`work/<slug>/` 直下の透過PNG**であり、`_check-dark-*.png` と `_raw/` は対象外。
2. **`docs-image-inserter` スキルを起動**して差し込み・ビルド・検証を行う（`Skill` ツールで `docs-image-inserter`、引数は `<slug>`）。
   - 差し込み規約（`<figure>` 正規形・src・alt・インデント整合）と配置・ビルド・検証チェックリストは **docs-image-inserter の references が真実源**。
   - サイズ既定だけは本スキルの生成物に合わせる（`references/handoff-and-insert.md` 参照）。

### Step 6: 報告

生成した画像・役割・差し込み箇所（章・見出し）・検証結果を表で日本語報告する。続けて実機描画確認をするなら `/docs-browser-review`、コミット/PR は `/git-pr` を案内する。

## 命名規則

| 対象 | 規則 | 例 |
|------|------|-----|
| work/ 内の透過PNG（差し込み対象） | `<slug>-<NN>-<topic>.png` | `markdown-01-overview.png` |
| work/ 内のクロマキー原版（codex の出力／中間物） | `_raw/<slug>-<NN>-<topic>.png` | `_raw/markdown-01-overview.png` |
| 公開アセット（論理名） | `<slug>-chapter<NN>-<topic>.png` | `markdown-chapter01-overview.png` |
| 配置先 | `astro-system/public/guide/<分類パス>/<slug>/images/` | — |
| 参照 src | `/tech-docs-v2/guide/<分類パス>/<slug>/images/<論理名>.png` | — |

`<topic>` は内容を表す英小文字ケバブケース（`overview` / `render-flow` / `branch-workflow` 等）。

## 注意事項（エージェント実行ルール厳守）

- **モデル割り当ては CLAUDE.md「エージェント編成（モデル割り当て）」に従う。** 図案設計・画像の目視検収・採否判定＝**Opus（本体）**。複数章にまたがる場合の章別生成＝**Sonnet サブ**。寸法・ファイル存在・figure数などの定型確認＝**Haiku サブ**。
- **日本語で出力する。**
- 処理中に**提案・確認・中断をしない**。最後まで完遂する。「これから生成します」で終わらず、実際に画像を生成し、差し込み、`npm run build` で `docs/` に反映するまで継続する。
- 複数章を対象にする場合、章ごとのサブエージェントは**1メッセージにまとめて並列起動**する（1章ずつ逐次は禁止）。
- **codex には画像生成以外をさせない**。プロンプトに「リポジトリの他ファイル（`src/`・`docs/`・`astro-system/`）は一切変更しない。作業は `work/<slug>/` への画像保存のみ」を必ず明記する。**差し込み・ビルドは本スキル側（Claude）が行う**（codex に `gpt-image-1.5` / `OPENAI_API_KEY`＝CLI フォールバックを使わせない）。
- **成果物は背景透過 PNG**。`_check-dark-*.png`（ダーク確認用）と `_raw/`（クロマキー原版）は中間物であり、`public/` へコピーしない。
- **編集対象はソース（`src/chapters/`）と画像配置先（`public/`）のみ**。`docs/` は直接編集しない（ビルドで生成）。共通シェル（レイアウト・`_shared/`）は変更しない。
- **絶対パスのハードコード禁止**: 章HTMLやコミット対象ファイルに `/home/<user>/...` 等の環境依存パスを書かない（codex 実行コマンドの一時ファイルパスは除く）。
- 画像内に**実在サービスのロゴマーク・商標を描かない**（日本語ラベルのみ）。
- 生成に2回続けて失敗した場合は、無限リトライせず状況をユーザーに報告する。
- **`Your workspace is out of credits.` はリトライで解決しない。** ユーザーに報告して判断を仰ぐ。複数章を並列実行するときは、ログを `grep -li "out of credits"` で監視する（無音で全滅する）。
- **同じ章で `image_gen` が3回以上走っていたらプロンプトの欠陥を疑う。** 許容リスト（背景の色むら・軽微な短縮）が抜けていないか確認する。

## references

| ファイル | 内容 |
|----------|------|
| `references/illustration-design.md` | 図案設計の指針（何枚・どこに・何を描くか）／画像内テキスト規約／配色／**透過を前提とした作図規約**／禁止事項／生成物の検収チェック |
| `references/codex-imagegen.md` | codex CLI の呼び出し方（`codex exec`・バックグラウンド実行・完了待ち）／**実測データと「再生成を抑える4原則」**／クロマキー生成とアルファ化・透過の検証・ダーク合成／**プロンプトテンプレート**／リトライとトラブルシュート |
| `references/handoff-and-insert.md` | `work/<slug>/差し込み箇所.md` の書式と、docs-image-inserter への委譲・本スキル固有のサイズ既定・最終検証 |
