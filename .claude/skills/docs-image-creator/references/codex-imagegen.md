# codex CLI での画像生成（GPT Image 2）

codex CLI に**組み込みの `imagegen` スキル**を使わせて画像を生成する。codex は内部で `image_gen__imagegen` ツール（GPT Image 2 系）を呼ぶため、こちら側で API キーやエンドポイントを扱う必要はない。

## 事前確認

```bash
codex --version                                   # CLI の存在
codex features list | grep image_generation       # "image_generation  stable  true" であること
```

- 未ログイン／フィーチャー無効なら、その旨をユーザーに報告して依頼する（Claude 側で認証フローは行わない）。
- codex 側の imagegen スキル本体は `~/.codex/skills/.system/imagegen/SKILL.md`。仕様確認が必要ならこれを読む（プロンプト規約は `references/prompting.md`）。

## スタイル参照画像の選定

生成プロンプトに**既存教材画像を style reference として渡す**と、トーン・情報密度・寸法が既存教材とそろう。次の優先順で 2〜3 枚選ぶ。

1. **同じガイドの既存画像**（`astro-system/public/guide/<分類パス>/<slug>/images/*.png`）
2. **同じ分類の別ガイドの画像**
3. **リポジトリの代表的な章扉インフォグラフィック**（フォールバック）
   - `docs/guide/development-processes/git-github/images/git-github-chapter01-git-overview.png`
   - `docs/guide/cloud-infrastructure/docker/images/docker-overview-infographic.png`
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
until ! pgrep -f "codex exec" >/dev/null; do sleep 5; done; echo "codex-exec-finished"
```

- 画像ファイルの出現を待つだけでは不十分。codex は生成後に**自己検証して作り直すことがある**ため、**プロセス終了まで待ってから**検収する。
- 完了後に `<SCRATCH>/codex-last-message.txt`（報告）と `git status --short`（他ファイルを触っていないこと）を確認する。

## プロンプトテンプレート

`<>` を対象章の情報で埋める。**画像ごとの構成は文字列レベルまで書き切る**（`references/illustration-design.md`）。

```markdown
<技術名> 学習ガイド 第<N>章「<章タイトル>」の**挿絵画像を GPT Image 2 で <枚数> 点生成**してください。

対象章（本文を必ず読んで内容に合わせること）:
- `astro-system/src/chapters/<分類パス>/<slug>/<slug>-learning-material-<NN>.html`
- 公開版: `docs/guide/<分類パス>/<slug>/<slug>-learning-material-<NN>.html`

## 実行方法（厳守）

- `imagegen` スキル（`~/.codex/skills/.system/imagegen/SKILL.md`）の手順に従い、**組み込みの image_gen ツール（GPT Image 2）** で生成する。
- 画像は **`work/<slug>/` 配下へ PNG で保存**する（ディレクトリは作成済み）。
- 保存ファイル名は必ず以下の通り:
  1. `work/<slug>/<slug>-<NN>-<topic1>.png`
  2. `work/<slug>/<slug>-<NN>-<topic2>.png`
- サイズは **1536 x 1024（横長）**。既存教材画像（下記の参照画像）と同じ寸法にそろえる。
- 生成後に `file work/<slug>/*.png` で寸法を確認し、`view_image` で自分の目で確認する。文字化け・意味不明な綴り・レイアウト崩れがあれば**作り直す**（最大2回までリトライ）。

## スタイル参照（style reference のみ。題材・文言・構図をそのままコピーしない）

- `<参照画像パス1>`
- `<参照画像パス2>`

## 共通のビジュアル要件

- クリーンなフラットベクター風の**教育用インフォグラフィック**。白背景、角丸カード、細い枠線、きれいな矢印、余白たっぷり。
- **日本語**の見やすいゴシック体（Noto Sans JP 風）。文字は大きく、短い語句のみ。長文は入れない。
- 配色: 教材の技術色に合わせ **<primary.500> を主役**、アクセントに **<splashStop1>**、面はごく薄いグレーブルー。過剰な彩色はしない。
- 実在サービスの**ロゴマーク・商標は描かない**（必要なら日本語ラベルのみ）。
- 人物は必要最小限。写実表現やグラデーション多用は避ける。
- 画像内の**日本語テキストは指定した文字列を正確に**描画すること（誤字・意味のない文字列は不可）。

## 画像1: `<slug>-<NN>-<topic1>.png` — 「<タイトル>」

<役割の1文>

構成案:

1. 上部中央に大きなタイトル: **「<タイトル文字列>」**
2. <段組みとカードの説明。各カードのラベル・見出し・1行説明を文字列で列挙>
3. <矢印・アイコンの指定>

## 画像2: `<slug>-<NN>-<topic2>.png` — 「<タイトル>」

<同上>

## 完了条件

- 指定した <枚数> ファイルが存在し、いずれも 1536x1024 の PNG である。
- 画像内の日本語が正しく読める。
- リポジトリの他ファイル（`src/`・`docs/`・`astro-system/`）は**一切変更しない**。作業は `work/<slug>/` への画像保存のみ。
- 最後に、生成したファイルのパスと、それぞれ何を描いたかを日本語で簡潔に報告する。
```

## トラブルシュート

| 症状 | 対処 |
|------|------|
| 承認待ちで止まる | `--sandbox workspace-write` を付ける。それでも止まるなら対象プロジェクトが `~/.codex/config.toml` で `trust_level = "trusted"` か確認する |
| 画像が `work/` でなく `~/.codex/generated_images/` にしかない | プロンプトの保存先指定が弱い。「`work/<slug>/` へ**保存**する」「保存ファイル名は必ず以下の通り」を明記して再実行 |
| 日本語が崩れる／意味不明な文字列になる | その画像に載せる文字数を減らし、文字列を箇条書きで明示して再生成 |
| 寸法が違う | プロンプトで `1536 x 1024` を再明記し、参照画像も同寸法のものを渡す |
| codex がリポジトリのファイルを編集した | 「他ファイルを一切変更しない」条項が抜けている。`git checkout -- <path>` で戻し、条項を入れて再実行 |
| 2回リトライしても不合格 | 無限リトライせず、所見（何がどう崩れたか）をユーザーに報告して判断を仰ぐ |

## 複数章を一度に扱う場合

- 章ごとに**サブエージェント（`model: sonnet`）を1メッセージで並列起動**する。各サブエージェントには「対象章パス」「枚数」「本 references のパス」「出力先 `work/<slug>/`」「生成ファイル名」を明示する。
- **図案設計と最終検収は本体（Opus）が行う**。サブエージェントには codex 実行と一次確認までを任せる。
- codex プロセスは章ごとに独立して並列実行できるが、`pgrep -f "codex exec"` での待機は**全プロセス共通**になる点に注意（各サブエージェントは自分の出力ファイルの存在と内容で完了判定する）。
