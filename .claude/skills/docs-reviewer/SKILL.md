---
name: docs-reviewer
description: 生成済み教材(guide/tutorial/practice/assignment/cheatsheet/slide)をテンプレート標準に照らして複数サブエージェントで並列検証し違反を報告・修正するスキル。各creatorスキルの検証フェーズから呼ばれる再利用部品で、教材の品質チェックや指摘修正を行う際に使用する。
---

# Docs Reviewer

生成済み教材をテンプレート標準（CLAUDE.md・`astro-system/templates/v1/`）に照らして複数サブエージェントで並列検証し、違反を報告（既定）または修正（`--fix`）する再利用部品スキル。

## 概要

対象ディレクトリまたはファイル群のHTML教材を Glob で列挙し、ファイル単位で Agent ツール（`subagent_type: general-purpose`, `model: opus`）を並列起動して references/checklist.md の観点で検証させ、構造化された所見を集約して報告する。`--fix` 指定時は修正サブエージェント（`model: sonnet`）を並列起動して各自のファイルを Edit で直す。

対応資料タイプ: 学習ガイド（guide）・チュートリアル（tutorial）・練習問題（practice）・実践課題（assignment）・チートシート（cheatsheet）・スライド（slide）。docs-guide-creator / docs-tutorial-creator / docs-practice-creator / docs-assignment-creator / docs-cheatsheet-creator / docs-slide-creator の各検証フェーズからも呼び出される。

旧 workflow エージェントが Task で並列起動していた挙動を、このスキル本体（メイン会話ループ）が Agent ツールで再現する。列挙フェーズは本体が逐次実行し、検証・修正は並列ファンアウトで行う。

## 使用方法

```
/docs-reviewer [対象ディレクトリ or ファイル群] [--fix]
```

- 第1引数: 検証対象のディレクトリ、または個別HTMLファイルのパス（複数可）。
- `--fix`（任意）: 指定時は検査に加えて違反を自動修正する。既定（省略時）は検査＋報告のみ。

例:
- `/docs-reviewer docs/guide/cloud-infrastructure/docker`
- `/docs-reviewer docs/practice/programming-languages/python-ecosystem/python-basics --fix`
- `/docs-reviewer docs/assignment/order-management-v1`

引数はすべてリポジトリルート（作業ルート）相対で指定する。絶対パスはハードコードしない。

## 実行手順

詳細手順は references/ に分割している。各フェーズで対応するファイルを読み込んで進めること。

### 1. 列挙フェーズ（本体が逐次実行）

1. 対象パスから資料タイプを判定する（`docs/guide/`→ガイド、`docs/tutorial/`→チュートリアル、`docs/practice/`→練習問題、`docs/assignment/`→実践課題、`docs/cheatsheet/`→チートシート、`docs/slide/`→スライド）。
2. Glob で対象HTMLを列挙する。**旧バージョンフォルダ（`v1/`・`v2/` 等）は必ず除外**する。
   - **Astro 学習ガイド**: ソースは `astro-system/src/chapters/<分類>/<slug>/*.html`（本文断片）＋ `astro-system/src/data/guides/<分類>/<slug>.ts`（`TechGuide`）。共通シェルは `src/layouts/GuideChapterLayout.astro` と `public/guide/_shared/`（共有・技術色非依存）。第1章断片（`*-01.html`）が構造継承の基準。検証対象は断片とデータ.ts であり、共通シェル／`_shared/` は対象外（全ガイド共有のため安易に触らない）。
   - **legacy 旧テンプレ方式の資料**（`docs_backup/` 等）: 共通部品（`styles.css`・`sidebar-content.js`・`main.js`・`drawing-tool.js`）と第1単位HTML（`*-01.html`）のパスを把握する。
3. 詳細は references/review-procedure.md「1. 列挙フェーズ」を参照。

### 2. 検証フェーズ（並列ファンアウト）

検証対象の各HTML（または観点）について、**1つのメッセージ内で Agent ツール呼び出しをまとめて発行し並列実行**する。各サブエージェントへの指示は以下を最小限渡す。

- `subagent_type`: `general-purpose`、`model`: `opus`（推論・分析サブエージェント）
- 指示内容: 「`.claude/skills/docs-reviewer/references/checklist.md` を読み、指定された資料タイプの観点で対象HTML（フルパスを渡す）を検証せよ。第1単位HTML（フルパスを渡す）を構造継承の基準として比較せよ。所見は references/review-procedure.md の所見スキーマ（JSON）で返し、ファイルは変更するな。」
- 各呼び出しに渡す可変情報: 対象HTMLフルパス・資料タイプ・第1単位HTMLフルパス・共通部品（styles.css）パス

詳細は references/review-procedure.md「2. 検証フェーズ」を参照。

### 3. 集約フェーズ

各サブエージェントの所見を集約し、同一違反の重複を排除して、ファイル別・観点別に整理する。深刻度（error/warning/info）でソートする。references/review-procedure.md「3. 集約フェーズ」を参照。

### 4. 修正フェーズ（`--fix` 指定時のみ）

違反のあったファイルごとに、**1メッセージ内で修正サブエージェント（`subagent_type: general-purpose`, `model: sonnet`）を並列起動**する。各サブエージェントは自分の担当ファイルのみ Edit する（ファイルが重ならないため競合しない）。軽微な定型修正（文言置換・インデント等）は `model: haiku` でも可。共通部品（JS/CSS/sidebar）は安易に上書きしない。references/review-procedure.md「4. 修正フェーズ」を参照。

### 5. 報告フェーズ

Glob で対象を再確認し、検証結果サマリ（合否・違反件数・ファイル別所見）と、`--fix` 時は修正内容を日本語で報告する。必要に応じて GitHub Pages URL を添える（形式は references/checklist.md の資料タイプ別URL表を参照）。

## 注意事項

**重要: 並列呼び出しは1メッセージにまとめる。** 検証サブエージェント・修正サブエージェントを1つずつ順次起動するのは禁止。対象が複数あるときは必ず1メッセージ内でまとめて発行する。

- **日本語出力。** 応答・成果物・所見はすべて日本語。
- **モデル割り当てはCLAUDE.md「エージェント編成（モデル割り当て）」に従う。** 検証（推論・分析）サブ=Opus、修正（コーディング）サブ=Sonnet、定型作業サブ=Haiku。
- **エージェント実行ルール（CLAUDE.md）:** 処理中に提案・確認・中断をしない。最後まで完遂する。並列指定は必ず並列で実行する。「これから検証します」「開始しました」で終了せず、検証結果（および `--fix` 時は修正）を実際に出すまで継続する。
- **検査と修正の既定:** 引数に `--fix` が無ければ検査＋報告のみ。ファイルは変更しない。
- **旧バージョン除外:** Glob 検索では `v1/`・`v2/` 等の旧バージョンフォルダを除外する（過去バックアップでありアクティブコンテンツではない）。
- **絶対パスのハードコード禁止。** `/home/...`・`/Users/...` 等は使わずリポジトリルート相対で扱う。
- **共通ルールの真実源は CLAUDE.md と `astro-system/templates/v1/reference/`。** 検証観点の値（Mermaid詳細・カラー・Tailwind・コンポーネント）はこれらを参照する。チェックリスト本体は references/checklist.md。

## 参照ファイル

- references/checklist.md — 全検証観点を資料タイプ別に整理（共通観点＋guide/tutorial/practice/assignment/cheatsheet/slide 固有観点、ファイル命名・URL形式表）
- references/review-procedure.md — 並列検証・集約・修正の手順、Agent 並列起動の出し方、所見スキーマ（JSON）例

共有データは複製せず既存リポジトリファイルを参照する。9分類体系: `tech-knowledge-map.md` / カラー: `astro-system/templates/v1/reference/color-themes.md` / Tailwind: `astro-system/templates/v1/reference/css-styles.md` / Mermaid詳細: `astro-system/templates/v1/reference/mermaid-patterns.md` / カードコンポーネント: `astro-system/templates/v1/snippets/components.html`。
