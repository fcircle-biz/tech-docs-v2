---
name: docs-cheatsheet-creator
description: 技術名とカテゴリパスから1ページ完結型のチートシート（クイックリファレンス）を生成するスキル。実務で即使えるコピー可能なコード例をまとめたindex.html・styles.css・main.jsをdocs/cheatsheet/配下に作成する際に使用する。
---

# Docs Cheatsheet Creator

技術名とカテゴリパスを受け取り、1ページ完結型のチートシート（クイックリファレンス）を `docs/cheatsheet/[カテゴリパス]/[技術名小文字]/` に生成するスキル。

## 概要

1回の実行で以下を逐次生成する（並列処理なし・単体スキル）。

1. 技術フォルダの作成
2. 共通部品ファイル（`styles.css` / `main.js`）のコピーとヘッダーカラー調整
3. チートシート本体（`index.html`）の生成（プレースホルダー置換 + 本文執筆）

詳細手順・テンプレート・ルールは `references/` に外出ししている（必要時に読み込む）。

## 使用方法

```
/docs-cheatsheet-creator [技術名] [カテゴリパス]
```

例:
- `/docs-cheatsheet-creator SQL data-ai-category/database`
- `/docs-cheatsheet-creator Python programming-languages`
- `/docs-cheatsheet-creator Git development-processes`
- `/docs-cheatsheet-creator Docker cloud-infrastructure`

カテゴリパスの決定基準（9分類体系）は `references/category-taxonomy.md` を参照。

## 実行手順

1. **フォルダ作成**: `docs/cheatsheet/[カテゴリパス]/[技術名小文字]/` を作成。出力先に既存があればバージョン管理ルール（`v1/`/`v2/`...）で退避してから新規作成。
2. **共通ファイルのコピー**: `templates/v3/html_cheatsheet/` から `styles.css` と `main.js` の2ファイルをコピー（sidebar/drawing-toolは不使用）。技術に応じてヘッダーカラーを調整。
3. **index.html の生成**: `templates/v3/html_cheatsheet/cheatsheet-template.html` をベースに、プレースホルダー置換・`tailwind.config` の `primary` カラー設定・本文執筆を行いWrite。
4. **完了報告**: 生成ファイル一覧とGitHub Pages URLを日本語で報告して終了。

各手順の詳細・命名規則・最終ファイル構成・URL形式は `references/generation-procedure.md`、プレースホルダーとカラー設定は `references/placeholders-and-theme.md`、本文構成は `references/content-structure.md`、HTML執筆ルールは `references/html-rules.md` を参照。

## 注意事項

- **日本語出力**: 応答・成果物はすべて日本語。
- **エージェント実行ルール（CLAUDE.md）**: 処理中に提案・確認・中断をしない。最後まで完遂する。「これから生成します」で終了せず、実ファイルをWriteするまで継続する。
- **1ページ完結厳守**: 詳細解説は学習教材に委譲し、実務で即使えるコピー可能な短いコード例に絞る。
- **絶対パスのハードコード禁止**: パスはすべてリポジトリルート相対で記述する。
- **styles.css プレースホルダー**: テンプレートにカラープレースホルダー（`{{PRIMARY_*}}` 等）が含まれる場合は必ず実カラー値へ置換する（未置換はCSS破損）。
- **Mermaid記法**: 処理フロー図を入れる場合はCLAUDE.md方式に統一（HTMLエンティティ `&#40;` 等は使わない / 半角括弧は全角化かノードをダブルクォートで囲む / `&` は全角 `＆` / `<br/>` 使用時はノードをダブルクォートで囲む / darkテーマ禁止）。詳細は `templates/v3/reference/mermaid-patterns.md` を参照。
- **テキスト視認性**: 半透明背景（`bg-white/70` 等）は禁止。内側ボックスは親と同系色の `-100` 背景 + `-900` テキスト。
- **ヘッダー**: ダークモードボタンをHTMLに手書きしない（`main.js` が動的生成）。ヘッダー構造を変えない。
- **将来拡張（注記）**: 複数技術を一括生成する用途は本スキルの対象外。`docs-suite-creator` に委ねる。
