---
name: docs-suite-creator
description: 1つの技術トピックから複数の資料タイプ(学習ガイド・練習問題・チートシート等)を並列で一括生成し、最後にdocs-reviewerで一括検証するオーケストレーションスキル。1トピックの教材一式をまとめて作成する際に使用する。
---

# Docs Suite Creator

1つの技術トピックを起点に、複数の資料タイプ（guide / practice / cheatsheet など）を**並列で一括生成**し、全完了後に docs-reviewer で一括検証するオーケストレーションスキル。

## 概要

このスキルは単体で資料を作るのではなく、既存の各 creator スキルと docs-reviewer を**束ねて指揮する**役割を持つ（オーケストレーション）。**本スキルのオーケストレーターはメイン会話ループ（Opus）が担う。** モデル割り当ては CLAUDE.md「エージェント編成（モデル割り当て）」に従う。

- 入力: 技術名1つ（＋任意で生成する資料タイプのCSV）。
- 既定セット（技術名のみで駆動可能なもの）: `guide,practice,cheatsheet`。
- `tutorial` / `assignment` は specs（アプリ仕様）が前提のため、指定時のみ追加情報（specsパス・環境・DB等）が必要。不足時はユーザーに確認する。
- 各資料タイプは**別ディレクトリ・別ファイル名**（`docs/guide/` / `docs/practice/` / `docs/cheatsheet/` …）で競合しないため、資料タイプ間を並列化できる。
- 並列構造は2段ネスト: **外側＝資料タイプの並列**、**内側＝各資料内の章/ステップ/回の並列**。
- 委譲先スキルは docs-guide-creator / docs-practice-creator / docs-cheatsheet-creator / docs-tutorial-creator / docs-assignment-creator / docs-slide-creator、検証は docs-reviewer。

各資料タイプの「対応スキル名・必要引数・技術名駆動可否・出力ディレクトリ・URL形式」の一覧は `references/material-types.md` を参照。引数解析・並列オーケストレーション・検証・統合報告の詳細手順は `references/suite-procedure.md` を参照。

## 使用方法

```
/docs-suite-creator [技術名] [任意:資料タイプCSV]
```

- **技術名**: kebab-case 推奨（例: `docker`, `python-streamlit`）。
- **資料タイプCSV**: `guide,practice,cheatsheet,tutorial,assignment,slide` から選択（カンマ区切り）。省略時の既定は `guide,practice,cheatsheet`。

例:
- `/docs-suite-creator docker` — 既定セット（guide, practice, cheatsheet）を並列生成
- `/docs-suite-creator docker guide,cheatsheet,practice` — 明示指定
- `/docs-suite-creator sql-queries guide,cheatsheet` — ガイドとチートシートのみ

## 実行手順

以下の4フェーズで進める。詳細手順は `references/suite-procedure.md`、資料タイプ別の対応関係は `references/material-types.md` を参照。

### 1. 引数解析（本体が直接実行）

技術名・資料タイプ・不足情報を確定する。

1. 技術名と資料タイプCSVを解析。CSV省略時は既定セット `guide,practice,cheatsheet` を採用する。
2. `references/material-types.md` の対応表で、各資料タイプが「技術名のみで駆動可能か」を判定する。
3. `tutorial` / `assignment` が含まれる場合は specsパス・環境・DB等の追加情報を確認する。**不足していればユーザーに確認**してから進む（このスキルでは specs 由来の不足情報の確認は許容される。具体は `references/suite-procedure.md`）。

### 2. 並列生成（資料タイプ＝外側並列 / 章・回＝内側並列）

各資料タイプを、対応する creator スキルの手順で生成する。資料タイプ間は独立しているため並列化する。

- **標準方式（既定）= Agent ツール。** sibling の各 creator スキルと同様、**1つのメッセージ内で Agent ツール（`subagent_type=general-purpose`）呼び出しを資料タイプ分まとめて発行**し、外側並列を実現する。各サブエージェントは担当資料タイプの creator スキルの references に従って準備フェーズ（README→共通部品→第1単位）を逐次実行し、第2単位以降を内側並列で生成する。なお、各委譲先（creator スキル）のサブエージェントをさらに起動する際は、資料タイプ単位に固定モデルを割り当てず、フェーズに応じて設計・推論フェーズは Opus、生成・コーディングフェーズは Sonnet、単純作業フェーズは Haiku を使用する。
- **補足:** ネスト並列を表現できる Workflow ツールが環境で利用可能な場合は、それを使ってもよい（skill-triggered opt-in／任意）。利用できない環境では上記 Agent ツール方式を用いる。

各サブエージェントへの最小指示の要旨（資料タイプごとに1つ）:

> `references/material-types.md` の対応表で示された担当資料タイプ（例: guide）の creator スキル（例: docs-guide-creator）の references に従い、技術名「[技術名]」（tutorial/assignment は加えて specs/環境/DB）から1資料タイプ分（README・共通部品・全章/全ステップ/全回HTML）を生成して Write せよ。資料内の第2単位以降は creator スキルの規定どおり並列ファンアウトしてよい。共通部品（JS/CSS/sidebar）は資料タイプ内で重複生成・上書きしないこと。

### 3. 検証（全完了後・一括）

全資料タイプの生成完了後、`docs-reviewer` スキルの手順で生成物を**一括検証**する（docs-reviewer が未導入の場合は `references/suite-procedure.md` のチェックリストで代替）。検証観点: `{{PRIMARY_*}}` 未置換・スクリプト読込順・Mermaid記法・テキスト視認性・ヘッダー構造・絶対パス混入。

### 4. 統合報告（本体が直接実行）

Glob（`v1/`/`v2/` 等の旧バージョンフォルダは除外）で全資料タイプの生成物を確認し、資料タイプごとに**ファイル一覧と GitHub Pages URL** をまとめて日本語で報告する。URL形式は `references/material-types.md` の対応表を参照。

## 注意事項

- **重要: 並列呼び出しは1メッセージにまとめる。** Agent ツールで外側並列（資料タイプ別）を行う場合、資料タイプ分の呼び出しを1メッセージ内でまとめて発行する。1資料タイプずつ順次起動するのは禁止。
- **日本語出力。** 応答・成果物はすべて日本語。
- **エージェント実行ルール（CLAUDE.md準拠）:** 処理中に提案・確認・中断をしない／指示を最後まで完遂する／並列指定は必ず並列で実行する／「これから生成します」で終了せず、実ファイル生成まで継続する。例外として、tutorial/assignment を含む場合の specs 由来の不足情報の確認のみ、引数解析フェーズで許容する（生成開始前に解消する）。
- **委譲先スキルの規約を尊重する。** 各 creator スキルの注意事項（カラープレースホルダー置換・回答形式・コード提供禁止 等）は委譲先のものがそのまま適用される。本スキルはそれらを上書きしない。
- **Mermaid記法は CLAUDE.md 方式に統一。** HTMLエンティティ（`&#40;` `&#124;` 等）は使わず、半角括弧は全角化かノードをダブルクォートで囲む。`&` は全角`＆`。`<br/>` 使用時はノードをダブルクォートで囲む。darkテーマ禁止。詳細は `templates/v3/reference/mermaid-patterns.md` 参照。
- **テキスト視認性:** 半透明背景（`bg-white/70` 等）禁止。内側ボックスは親と同系色の `-100` 背景＋`-900` テキスト。
- **ヘッダー:** ダークモードボタンを HTML に手書きしない（`main.js` が動的生成）。ヘッダー構造を変えない。
- **スクリプト読込順:** `styles.css` → `sidebar-content.js` → `main.js` → `drawing-tool.js`。
- **カラープレースホルダー:** `styles.css` の `{{PRIMARY_300/400/500/600/700/RGB}}` は必ず実カラー値へ置換（未置換はCSS破損）。
- **バージョン管理:** 各資料タイプの出力先に既存があれば `v1/`/`v2/`/… へ退避してから新規作成する（委譲先スキルのルールに従う）。
- **絶対パスのハードコード禁止。** すべてリポジトリルート相対パス（`docs/...`、`templates/v3/...`）で扱う。`/home/...` や `/Users/...` 等の環境固有絶対パスは使わない。

## 依存スキル

本スキルは以下に依存する（オーケストレーション先）。

- 生成: docs-guide-creator / docs-practice-creator / docs-cheatsheet-creator / docs-tutorial-creator / docs-assignment-creator / docs-slide-creator
- 検証: docs-reviewer
- スキルの手順として Workflow ツールを呼ぶことは許可（skill-triggered opt-in）。

## 参照ファイル

- `references/suite-procedure.md` — 引数解析・並列オーケストレーション（既定はAgentツール／Workflowツールは任意）・検証・統合報告の詳細手順
- `references/material-types.md` — 資料タイプ→対応スキル名→必要引数→技術名駆動可否→出力ディレクトリ／URLの対応表

共有データは複製せず既存リポジトリファイルを参照する。9分類体系: `tech-knowledge-map.md` / カラー: `templates/v3/reference/color-themes.md` / Tailwind: `templates/v3/reference/css-styles.md` / Mermaid詳細: `templates/v3/reference/mermaid-patterns.md` / カードコンポーネント: `templates/v3/snippets/components.html`。
