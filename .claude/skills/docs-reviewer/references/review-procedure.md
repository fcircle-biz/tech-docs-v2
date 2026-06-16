# レビュー手順（並列検証・集約・修正）

docs-reviewer 本体（メイン会話ループ）が実行する詳細手順。検証観点そのものは references/checklist.md を参照。共通ルールの真実源は CLAUDE.md と `templates/v3/reference/`。

旧 workflow エージェントが Task で並列起動していた挙動を、本体が Agent ツール（`subagent_type: general-purpose`）で再現する。**列挙・集約・報告は本体が逐次実行**し、**検証・修正は並列ファンアウト**で行う。

---

## 0. 引数の解釈

- 第1引数: 検証対象（ディレクトリ or 個別HTMLパス、複数可）。リポジトリルート相対。
- `--fix`: あれば「検査＋修正」、無ければ「検査＋報告のみ」。

---

## 1. 列挙フェーズ（本体・逐次）

1. **資料タイプ判定**: 対象パスのプレフィックスで判定する。
   - `docs/guide/` → 学習ガイド（章単位）
   - `docs/tutorial/` → チュートリアル（ステップ単位）
   - `docs/practice/` → 練習問題（回単位）
   - `docs/assignment/` → 実践課題（ステップ単位）
   - `docs/cheatsheet/` → チートシート（1ページ）
   - `docs/slide/` → スライド（PDFビューア）
2. **対象HTMLの列挙**: Glob で対象HTMLを集める。
   - **旧バージョンフォルダ（`v1/`・`v2/`・`v3/` 等）は必ず除外する**（過去バックアップでありアクティブコンテンツではない）。
   - 例（ガイド・slide/cheatsheet以外）: `docs/.../[name]/*-NN.html`
   - cheatsheet / slide は `index.html` が対象（slide は `pdf/` の存在と `slide-content.js` も確認）。
3. **基準ファイルの把握**:
   - **第1単位HTML**（`*-01.html` 等）= 第2単位以降の構造継承の基準（checklist A-6）。
   - 共通部品（`styles.css`・`sidebar-content.js`・`main.js`・`drawing-tool.js`）= プレースホルダー置換（A-2）・読込順（A-5）・sidebar整合（A-10）の検証対象。
4. 対象HTMLが0件なら、その旨（対象なし）を報告して終了する。

---

## 2. 検証フェーズ（並列ファンアウト）

### 重要: 1メッセージにまとめて並列起動

検証対象の各HTML（多数なら適宜グルーピング）について、**1つのメッセージ内で Agent ツール呼び出しをまとめて発行**する。1つずつ順次起動するのは禁止。

- `styles.css` 等の共通部品は別観点として1サブエージェントに割り当ててよい（A-2/A-5/A-10）。
- 第1単位HTML（01）も検証対象に含める（自身の品質チェック。構造継承の基準でもある）。

### 各サブエージェントへの最小指示（general-purpose）

```
subagent_type: general-purpose
指示:
  1. .claude/skills/docs-reviewer/references/checklist.md を読む。
  2. 資料タイプ「{type}」の「共通観点（A）」＋該当タイプ固有観点で
     対象HTML「{target_html_path}」を検証する。
  3. 第1単位HTML「{first_unit_html_path}」を構造継承（A-6）の基準として比較する。
     共通部品「{styles_css_path}」を A-2/A-5 の確認に使う。
  4. 値の真実源は CLAUDE.md と templates/v3/reference/（カラー・Tailwind・
     Mermaid・コンポーネント）。判断に必要なら参照する。
  5. ファイルは一切変更しない（read-only 検証）。
  6. 所見を「所見スキーマ（JSON）」（下記）で1つだけ返す。違反が無ければ
     findings を空配列にする。
渡す可変情報: target_html_path / type / first_unit_html_path / styles_css_path
```

### 所見スキーマ（JSON・各サブエージェントが返す）

```json
{
  "file": "docs/guide/cloud-infrastructure/docker/docker-learning-material-03.html",
  "type": "guide",
  "passed": false,
  "findings": [
    {
      "id": "A-1",
      "severity": "error",
      "title": "Mermaid図にHTMLエンティティ",
      "detail": "flowchart内で &#40; が使われている（38行目付近）。全角括弧かダブルクォートに直す。",
      "location": "line 38 付近 / Mermaidノード A",
      "fix_hint": "A[概要&#40;現在&#41;] を A[\"概要（現在）\"] に変更"
    }
  ]
}
```

- `id` は checklist の観点ID（A-1〜A-11, B〜H）。
- `severity` は `error` / `warning` / `info`。
- `location` は行番号付近・要素・ノード名など特定の手がかり。
- `fix_hint` は修正方針（`--fix` 時に修正サブエージェントへ渡す）。

---

## 3. 集約フェーズ（本体・逐次）

1. 全サブエージェントの JSON 所見を回収する。
2. **重複排除**: 同一 `file` × `id` × `location` の所見は1件にまとめる（複数観点サブエージェントが同じ違反を報告した場合）。
3. **整理**: ファイル別にまとめ、各ファイル内で `severity`（error → warning → info）順にソートする。
4. **集計**: error / warning / info の件数、合格ファイル数 / 違反ファイル数を出す。
5. error が1件でもあれば全体判定は「不合格」、error 0 で warning のみなら「要改善」、すべて0なら「合格」。

---

## 4. 修正フェーズ（`--fix` 指定時のみ・並列ファンアウト）

`--fix` が無ければこのフェーズはスキップ（検査＋報告のみ）。

### 重要: 1メッセージにまとめて並列起動

違反のあったファイルごとに、**1メッセージ内で修正サブエージェント（general-purpose）をまとめて発行**する。**1ファイル＝1サブエージェント**にすると担当ファイルが重ならず競合しない。

### 各修正サブエージェントへの最小指示

```
subagent_type: general-purpose
指示:
  1. .claude/skills/docs-reviewer/references/checklist.md を読む。
  2. 対象ファイル「{file_path}」の以下の所見を修正する（JSON配列を渡す）。
     {該当ファイルの findings}
  3. 各 fix_hint と checklist の正しい書式に従い Edit で最小修正する。
     - 値の真実源は CLAUDE.md と templates/v3/reference/。
     - 構造（ヘッダー・スクリプト読込順・第1単位継承）を壊さない。
  4. 共通部品（sidebar-content.js / styles.css / main.js / drawing-tool.js）は
     安易に上書きしない。styles.css の {{PRIMARY_*}} 未置換など共通部品自体の
     違反のみ、その共通部品ファイルを担当する1サブエージェントが修正する。
  5. 修正した箇所を所見IDごとに「修正済み/対応不要」で報告する。
渡す可変情報: file_path / 該当ファイルの findings 配列
```

### 競合回避の原則

- HTMLファイル: それぞれ別サブエージェントが別ファイルを Edit するので競合しない。
- 共通部品（`styles.css` 等）: **必ず1サブエージェントのみ**が担当する（同一ファイルを複数が同時に Edit しない）。

修正後、必要なら再検証（フェーズ2を再実行）して残違反が無いか確認してもよい。

---

## 5. 報告フェーズ（本体・逐次）

1. Glob で対象を再確認する（`v1/`・`v2/` 等除外）。
2. 日本語で以下を報告する。

```
## 検証結果

**対象**: docs/guide/cloud-infrastructure/docker（資料タイプ: guide）
**判定**: 不合格（error 2 / warning 1 / info 0）
**検証ファイル数**: 8（違反 2 / 合格 6）

### ファイル別所見
- docker-learning-material-03.html
  - [error][A-1] Mermaid図にHTMLエンティティ（&#40;）— 38行目付近
- styles.css
  - [error][A-2] {{PRIMARY_500}} が未置換

### 修正（--fix 時）
- docker-learning-material-03.html: [A-1] 修正済み（全角括弧に変更）
- styles.css: [A-2] 修正済み（#2563eb 等へ置換）
```

3. 必要に応じて GitHub Pages URL を添える（形式は checklist.md「I. 資料タイプ別 命名規則・URL形式」）。

---

## エージェント実行ルール（CLAUDE.md準拠・厳守）

- **提案・確認・中断をしない**: 処理中に最適化案や代替手法を提案しない。ユーザー確認のために止めない。
- **完遂する**: 検証結果（`--fix` 時は修正）を実際に出すまで継続する。「これから検証します」「開始しました」で終了しない。
- **並列は必ず並列**: 検証・修正サブエージェントは1メッセージにまとめて並列起動する（1つずつ順次は禁止）。
- **日本語出力**。
- **絶対パスのハードコード禁止**: リポジトリルート相対で扱う。
- **削除予定の旧 agent 型は使わない**: サブエージェントは `subagent_type: general-purpose` のみ。
