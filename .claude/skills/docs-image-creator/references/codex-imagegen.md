# codex CLI での画像生成（透過PNG）

codex CLI に**組み込みの `imagegen` スキル**を使わせて画像を生成する。codex は内部で `image_gen` ツール（GPT Image 2 系）を呼ぶため、こちら側で API キーやエンドポイントを扱う必要はない。

**本スキルの成果物は背景透過（アルファ付き）PNG** とする。

> **重要（誤解しやすい点）**: 「GPT Image 2 は透過非対応」という制約は **CLI フォールバック**（`scripts/image_gen.py` の `gpt-image-2`）の話であり、**組み込み `image_gen` ツールは真の透過出力に対応している**。
> codex 側 imagegen スキルの「Transparent image requests」は次のとおり:
> *"Ask built-in `image_gen` for a genuinely transparent background and preserve its alpha."*
>
> したがって本スキルは **① 直接透過生成を第一手段**とし、**② クロマキー＋ローカルでアルファ化をフォールバック**とする。

## 事前確認

```bash
codex --version                                   # CLI の存在
codex features list | grep image_generation       # "image_generation  stable  true" であること
```

- 未ログイン／フィーチャー無効なら、その旨をユーザーに報告して依頼する（Claude 側で認証フローは行わない）。
- codex 側の imagegen スキル本体は `~/.codex/skills/.system/imagegen/SKILL.md`。仕様確認が必要ならこれを読む（プロンプト規約は `references/prompting.md`）。

## 方式① 直接透過生成（既定）

codex に「背景を完全に透明にして生成し、アルファをそのまま保持する」よう指示し、`work/<slug>/` 直下へ直接保存させる。**中間ファイル（`_raw/`）も変換処理も不要**。

プロンプトに必ず入れる文言:

```markdown
- `imagegen` スキル（`~/.codex/skills/.system/imagegen/SKILL.md`）の「Transparent image requests」に従い、
  **組み込みの `image_gen` ツールに「背景を完全に透明（transparent background）にする」よう指示して生成**し、
  **生成されたアルファチャンネルをそのまま保持**すること。
- **クロマキー（緑などの単色背景）で生成しない。** `remove_chroma_key.py` も実行しない。
- CLI フォールバック（`scripts/image_gen.py` / `gpt-image-1.5` / `OPENAI_API_KEY`）は使わない。
```

| 段階 | 保存先 |
|------|--------|
| 透過PNG（codex が直接生成・差し込み対象） | `work/<slug>/<slug>-<NN>-<topic>.png` |

## 方式② クロマキー＋アルファ化（フォールバック）

**方式①の検証に2回続けて落ちた画像だけ**この方式に切り替える（毎回これを使わない）。切り替える典型ケース:

- 生成物が RGB のまま返る（アルファチャンネルが無い）
- 四隅に地色が残り、透明率が 0% に近い

1. **codex にはクロマキー背景で生成させる** — 背景を `#00ff00` の完全にフラットな単色にし、`work/<slug>/_raw/` へ保存させる。
2. **アルファ化は Claude 側（本スキル）が行う** — `remove_chroma_key.py` で `#00ff00` を透明化し、`work/<slug>/` 直下へ最終PNGを書き出す。

| 段階 | 保存先 |
|------|--------|
| クロマキー原版（codex が生成） | `work/<slug>/_raw/<slug>-<NN>-<topic>.png` |
| 透過PNG（本スキルが変換・差し込み対象） | `work/<slug>/<slug>-<NN>-<topic>.png` |

### キーカラーの選択

- 既定は `#00ff00`（グリーン）。
- **図版の配色にグリーン系を使う場合は `#ff00ff`（マゼンタ）** に切り替える（技術色が emerald / green 系のガイドで発生する）。ブルー系ガイドで `#0000ff` は使わない。
- 選んだキーカラーは「画像内のどこにも使わない」ことをプロンプトに明記する。

### 変換コマンド

`remove_chroma_key.py` は Pillow を要求するが、システム python には入っていない。**`uv run --with pillow` 経由で実行する**（グローバル `pip install` はしない）。

```bash
mkdir -p work/<slug>
for f in work/<slug>/_raw/*.png; do
  uv run --quiet --with pillow python "${CODEX_HOME:-$HOME/.codex}/skills/.system/imagegen/scripts/remove_chroma_key.py" \
    --input "$f" \
    --out "work/<slug>/$(basename "$f")" \
    --auto-key border \
    --soft-matte \
    --transparent-threshold 12 \
    --opaque-threshold 220 \
    --despill
done
```

- 出力の `Key color:` と `Transparent pixels:` を確認する。`Key color` が緑（`#00ff00` 前後）でなければ**背景がクロマキーになっていない**＝生成し直し。透明画素が 0 なら背景がフラットでない（生成し直し）。
- キーカラーの縁取り（グリーンのフリンジ）が残る場合は `--edge-contract 1` を足して1回だけ再実行する。ギザつきが目立つときのみ `--edge-feather 0.25` を足す。

## 透過の検証（方式①②共通・必須）

```bash
# アルファチャンネル・四隅の透明・不透明率
uv run --quiet --with pillow python - <<'EOF'
from PIL import Image
import glob
for p in sorted(glob.glob("work/<slug>/*.png")):
    im = Image.open(p); a = im.convert("RGBA").split()[3]
    corners = [im.convert("RGBA").getpixel(c)[3] for c in [(0,0),(im.width-1,0),(0,im.height-1),(im.width-1,im.height-1)]]
    hist = a.histogram()
    print(p, im.mode, im.size, "四隅alpha:", corners,
          "透明率: %.1f%%" % (100*hist[0]/(im.width*im.height)))
EOF
```

合格条件: `mode` が `RGBA` ／ 四隅の alpha が 0 ／ 透明率が概ね 10〜60%（0% は透過失敗、90%超は主題が消えている）。

- **`mode` が `RGB` の場合はアルファが保持されていない。** プロンプトの透過指定を強めて再生成し、2回落ちたら方式②へ切り替える。
- 透明率が下限を数ポイント下回る程度（例 9%台）は、大判カードが画面を占める構図では許容してよい。

### ダーク背景での可読性確認（必須）

透過にすると**ダークモードではページの暗い地色が図の背景として透ける**。地に直接置いた濃色テキストや細線はダークで読めなくなるため、暗い地に合成して目視する。

```bash
uv run --quiet --with pillow python - <<'EOF'
from PIL import Image
import glob, os
for p in sorted(glob.glob("work/<slug>/*.png")):
    if os.path.basename(p).startswith("_check-dark-"): continue
    im = Image.open(p).convert("RGBA")
    bg = Image.new("RGBA", im.size, "#0f172a")   # ダークモードの本文背景
    out = os.path.join(os.path.dirname(p), "_check-dark-" + os.path.basename(p))
    Image.alpha_composite(bg, im).convert("RGB").save(out)
    print(out)
EOF
```

- 生成された `_check-dark-*.png` を **Read で開いて目視**する。読めない文字・消える線があれば、その要素を不透明カード内へ移す図案に直して再生成する（規約は `references/illustration-design.md`「透過を前提とした作図規約」）。
- `_check-dark-*.png`（と方式②の `_raw/`）は差し込み対象ではない。**`public/` へコピーしない**（`work/` は `.gitignore` 対象なので削除は任意）。

> **注意**: 教材ページ側のダークモードでは、`<figure>` に付けた `border border-slate-200` の枠が明るいままなので、透過画像の周囲に薄い枠線が見える。これは仕様どおり（枠は残す）。画像の地が明るく見える場合は、透過が効いていないか、`_check-dark` を見ずに差し込んでいる。

## スタイル参照画像の選定

生成プロンプトに**既存教材画像を style reference として渡す**と、トーン・情報密度・寸法が既存教材とそろう。次の優先順で 2〜3 枚選ぶ。

1. **同じガイドの既存画像**（`astro-system/public/guide/<分類パス>/<slug>/images/*.png`）
2. **同じ分類の別ガイドの画像**
3. **リポジトリの代表的な章扉インフォグラフィック**（フォールバック）
   - `astro-system/public/guide/data-ai-category/database/sql/images/sql-chapter01-chapter-map.png`（章マップの型）
   - `astro-system/public/guide/data-ai-category/database/sql/images/sql-chapter13-commit-visibility.png`（概念図の型）
4. 直近に同じ用途で生成した画像があれば、それも加えるとトーンが安定する。

探索コマンド:

```bash
find astro-system/public/guide -type f -name '*.png' | head -20
file <候補パス>       # 1536x1024 であることを確認
```

**必ず「style reference のみ。題材・文言・構図をコピーしない」と明記する。**参照画像がリポジトリに1枚も無い場合は参照なしで実行し、ビジュアル規約を文章で厚く書く。

## 実行コマンド（正規形）

長い日本語プロンプトはシェルのクォート事故を起こすため、**ファイルに書いて stdin から渡す**（`codex exec ... -` 形式）。

```bash
codex exec --sandbox workspace-write --skip-git-repo-check \
  -o <SCRATCH>/codex-last-message.txt - \
  < <SCRATCH>/codex-imagegen-prompt.md \
  > <SCRATCH>/codex-run.log 2>&1
```

- `<SCRATCH>` はセッションのスクラッチパッドディレクトリ（`/tmp` 直書きはしない）。
- `--sandbox workspace-write`: リポジトリ配下（`work/`）へ書けるようにする。承認プロンプトで止まらない。
- `-`: プロンプトを stdin から読む。
- `-o`: codex の最終メッセージ（生成報告）をファイルに書き出す。完了後に読む。
- **`Bash` の `run_in_background: true` で起動**し、`timeout` は 600000（10分）程度にする。

### 完了待ち

画像1枚あたり **約 40〜70 秒**。`Monitor` で codex プロセスの終了を待つ（前景 `sleep` は使わない）。

```bash
until ! pgrep -f "codex exec" >/dev/null; do sleep 15; done; echo "codex-exec-finished"
```

- 画像ファイルの出現を待つだけでは不十分。codex は生成後に**自己検証して作り直すことがある**ため、**プロセス終了まで待ってから**検収する。
- **章ごとに並列実行している場合、`pgrep` は全プロセス共通**になる。各章の完了は「自分の出力ファイルが揃っていること」＋「そのログに完了行（`tokens used`）が出ていること」で判定する。
- 完了後に `<SCRATCH>/codex-last-message.txt`（報告）と `git status --short`（他ファイルを触っていないこと）を確認する。

## プロンプトテンプレート（方式①・既定）

`<>` を対象章の情報で埋める。**画像ごとの構成は文字列レベルまで書き切る**（`references/illustration-design.md`）。

```markdown
<技術名> 学習ガイド 第<N>章「<章タイトル>」の**挿絵画像を <枚数> 点生成**してください。

対象章（本文を必ず読んで内容に合わせること）:
- `astro-system/src/chapters/<分類パス>/<slug>/<slug>-learning-material-<NN>.html`

## 実行方法（厳守）

- `imagegen` スキル（`~/.codex/skills/.system/imagegen/SKILL.md`）の「Transparent image requests」に従い、**組み込みの `image_gen` ツールに「背景を完全に透明（transparent background）にする」よう指示して生成**し、**生成されたアルファチャンネルをそのまま保持**する。
- **クロマキー（緑などの単色背景）で生成しない。** `remove_chroma_key.py` も実行しない。
- CLI フォールバック（`scripts/image_gen.py` / `gpt-image-1.5` / `OPENAI_API_KEY`）は使わない。
- 画像は **`work/<slug>/` 配下へ PNG で保存**する（ディレクトリは作成済み）。
- 保存ファイル名は必ず以下の通り:
  1. `work/<slug>/<slug>-<NN>-<topic1>.png`
  2. `work/<slug>/<slug>-<NN>-<topic2>.png`
- サイズは **1536 x 1024（横長）**。既存教材画像（下記の参照画像）と同じ寸法にそろえる。
- 生成後に `file work/<slug>/*.png` で寸法を、`view_image` で内容を自分の目で確認する。**アルファチャンネルを持ち、四隅が完全に透明**であることも確認する。文字化け・意味不明な綴り・レイアウト崩れ・背景が不透明のいずれかがあれば**作り直す**（最大2回までリトライ）。

## 背景の要件（厳守）

- **背景は完全に透明**。カード・帯・図形の外側には一切色を塗らない。白い地も塗らない。
- 図版の周囲には**十分な余白**を取り、要素を画面端で見切らせない。
- カード・帯・図形に**ドロップシャドウやぼかしを付けない**（透明背景に汚れとして残る）。
- 白い面が必要な要素（カード・パネル）は**不透明な白 `#ffffff`** で塗る（背景を透かせない）。

## スタイル参照（style reference のみ。題材・文言・構図をそのままコピーしない）

- `<参照画像パス1>`
- `<参照画像パス2>`

参照するのは**トーン・情報密度・レイアウトのみ**。**背景は参照画像の白ではなく完全な透明**にする。

## 共通のビジュアル要件

- クリーンなフラットベクター風の**教育用インフォグラフィック**。角丸カード、細い枠線、きれいな矢印、余白たっぷり。
- **背景が透明なため、情報は必ず不透明な面の上に置く**。タイトルも含め、透明な地の上に文字・細線を直接置かない。文字は白または淡色の不透明カード／角丸の帯の中に入れる。
- **日本語**の見やすいゴシック体（Noto Sans JP 風）。文字は大きく、短い語句のみ。長文は入れない。
- 配色: 教材の技術色に合わせ **<primary.500> を主役**、アクセントに **<splashStop1>**、面はごく薄いグレーブルー。過剰な彩色はしない。
- 実在サービスの**ロゴマーク・商標は描かない**（必要なら日本語ラベルのみ）。
- 人物は必要最小限。写実表現やグラデーション多用は避ける。
- 画像内の**日本語テキストは指定した文字列を正確に**描画すること（誤字・意味のない文字列は不可）。丸数字は ①②③ を使う。

## 画像1: `<slug>-<NN>-<topic1>.png` — 「<タイトル>」

<役割の1文>

構成案:

1. 上部中央に大きなタイトル: **「<タイトル文字列>」**（不透明な帯の中に置く）
2. <段組みとカードの説明。各カードのラベル・見出し・1行説明を文字列で列挙>
3. <矢印・アイコンの指定>

## 画像2: `<slug>-<NN>-<topic2>.png` — 「<タイトル>」

<同上>

## 完了条件

- 指定した <枚数> ファイルが `work/<slug>/` に存在し、いずれも 1536x1024 の PNG である。
- **アルファチャンネルを持ち、四隅が完全に透明**である。図版の外側に不透明な地が残っていない。
- 地の上に直接置かれた文字・細線が無い（すべて不透明な面の上にある）。
- 画像内の日本語が正しく読める。
- リポジトリの他ファイル（`src/`・`docs/`・`astro-system/`）は**一切変更しない**。作業は `work/<slug>/` への画像保存のみ。
- 最後に、生成したファイルのパスと、それぞれ何を描いたかを日本語で簡潔に報告する。
```

## トラブルシュート

| 症状 | 対処 |
|------|------|
| 承認待ちで止まる | `--sandbox workspace-write` を付ける。それでも止まるなら対象プロジェクトが `~/.codex/config.toml` で `trust_level = "trusted"` か確認する |
| 画像が `work/` でなく `~/.codex/generated_images/` にしかない | プロンプトの保存先指定が弱い。「`work/<slug>/` へ**保存**する」「保存ファイル名は必ず以下の通り」を明記して再実行 |
| **`mode` が `RGB`（アルファが無い）** | 透過指定が効いていない。プロンプトの「Transparent image requests に従い、生成されたアルファをそのまま保持する」を明記して再生成。**2回落ちたら方式②（クロマキー）へ切り替える** |
| 透明率が 0%〜数% | 背景が不透明のまま。同上 |
| 図版の一部まで透明に抜ける | 方式②で、図版内にキーカラーと近い色を使っている。キーカラーを `#ff00ff` に変えて再生成する |
| 縁にキーカラーのフリンジが残る | 方式②の変換に `--edge-contract 1` を足して1回だけ再実行する |
| `Key color:` が緑以外（白・ピンク等）と判定される | 方式②なのに背景がクロマキーになっていない。**しきい値をいじらず生成し直す**（背景要件をプロンプト冒頭に「最重要」として置く） |
| ダーク合成で文字が読めない | 図案の問題。地に直接置いた文字・細線を不透明カード内へ移す構成に直して再生成する（`--*-threshold` の調整では直らない） |
| `ModuleNotFoundError: No module named 'PIL'` | 変換・検証を `uv run --quiet --with pillow python …` 経由で実行する（システム python に Pillow は無い） |
| codex が `gpt-image-1.5` や `OPENAI_API_KEY` を要求してくる | CLI フォールバックへ逸れている。プロンプトに「組み込み `image_gen` ツールを使う。CLI フォールバックは使わない」を明記して再実行 |
| 日本語が崩れる／意味不明な文字列になる | その画像に載せる文字数を減らし、文字列を箇条書きで明示して再生成 |
| 寸法が違う | プロンプトで `1536 x 1024` を再明記し、参照画像も同寸法のものを渡す |
| codex がリポジトリのファイルを編集した | 「他ファイルを一切変更しない」条項が抜けている。`git checkout -- <path>` で戻し、条項を入れて再実行 |
| `Your workspace is out of credits.` | codex 側のクレジット切れ。リトライしても解決しない。**ユーザーに報告して判断を仰ぐ**（アカウント切り替え・チャージ後に再開） |
| 2回リトライしても不合格 | 無限リトライせず、所見（何がどう崩れたか）をユーザーに報告する |

## 複数章を一度に扱う場合

- 章ごとに**サブエージェント（`model: sonnet`）を1メッセージで並列起動**する。各サブエージェントには「対象章パス」「枚数」「本 references のパス」「出力先 `work/<slug>/`」「生成ファイル名」を明示する。
- **図案設計と最終検収は本体（Opus）が行う**。サブエージェントには codex 実行と一次確認までを任せる。
- **サブエージェントは codex をバックグラウンド起動した直後に離脱することがある**。その場合はオーケストレーター側で `until ! pgrep -f "codex exec" >/dev/null; do sleep 20; done` により全プロセスの終了を待ち、透過化・検証・検収を引き取る。
