---
name: docs-illustration-creator
description: 既存の学習ガイドHTMLを分析し学習効果を高める図解（プレースホルダー画像）を後付けで提案・生成・挿入するスキル。docs/guide配下の既存ガイドに章単位で図解を追加したい際、またはwork_png配下のAI実画像でプレースホルダーを差し替える際に使用する。
---

# Docs Illustration Creator

既存の学習ガイドHTML（`docs/guide/.../*-learning-material-XX.html`）を分析し、学習効果を高める図解（プレースホルダー画像）を後付けで提案・生成・挿入するスキル。新規ガイドは作らない。

## 概要

対象ディレクトリのHTMLガイドを章ごとに分析し、図解が有効な箇所を1〜2件に厳選して提案、画像生成AI用プロンプトを埋め込んだプレースホルダーPNGを生成し、HTMLに `<figure>` で挿入する。ユーザーが実画像を用意した後は、`work_png/` の画像でプレースホルダーを差し替える（replace モード）。

3つのモードがある。

- **suggest**: HTML分析 → `illustration_suggestions/chapter-XX.md` 提案レポート生成。
- **illustrate**: 提案を基にプレースホルダーPNG生成（`img/`）→ HTMLに挿入。
- **replace**: `work_png/` のAI実画像で `img/` のプレースホルダーを差し替え（半自動・ユーザー確認あり）。

モード未指定時は **suggest → illustrate を連続実行**する。本スキルでは両者を統合し、**「1章 = 1サブエージェント」**で並列化する。

依存: `create-placeholder-image` スキル（`python .claude/skills/create-placeholder-image/scripts/create_placeholder_image.py`、要 Pillow）。

## 使用方法

```
/docs-illustration-creator [ターゲットディレクトリパス] [章番号(任意)] [モード: suggest|illustrate|replace(任意)]
```

例:
- `/docs-illustration-creator docs/guide/programming-languages/java-ecosystem/jsp` （全章・suggest→illustrate 連続）
- `/docs-illustration-creator docs/guide/cloud-infrastructure/docker 3` （第3章のみ）
- `/docs-illustration-creator docs/guide/programming-languages/java-ecosystem/java replace` （実画像で差し替え）

## 実行手順

### モード判定

引数からモードを判定する。未指定なら suggest → illustrate（並列）を実行。`replace` 指定時は置換フェーズのみを実行し、並列ループには混ぜない。

### suggest → illustrate（既定・並列）

`references/workflow-orchestration.md` の手順に従う。

1. **準備（逐次・本体が直接実行）**: 対象HTMLを Glob で列挙（`v1/`/`v2/` 除外、章番号指定時は該当章のみ）→ 「既存のMermaid図で十分」な章をスキップ判定 → `img/` フォルダ準備。
2. **生成（並列ファンアウト）**: 並列対象の各章について、**1メッセージ内で `Agent`（`subagent_type=general-purpose`、`model: sonnet`）呼び出しをまとめて発行**し並列実行。各サブエージェントは章内で「提案md生成（`references/step1-suggestion.md`）→ プレースホルダーPNG生成（`references/step2-image-and-insert.md`・`references/image-prompt-templates.md`）→ HTMLに `<figure>` 挿入」まで完結。共通部品（JS/CSS/sidebar）は上書き禁止。なお、プレースホルダー画像生成スクリプト（`create-placeholder-image`）の実行自体は単純作業（Haiku相当）である。
3. **検証**: `docs-reviewer` スキルの手順、または `references/workflow-orchestration.md` のチェックリストで検証。
4. **報告**: Glob で生成物を確認し、ファイル一覧＋GitHub Pages URL を日本語で報告。

> **重要: 並列呼び出しは1メッセージにまとめる。** 1章ずつ順次に Agent を起動するのは禁止。削除予定の旧 agent 型（`illustration-creator-step1` 等）は使わない。

### replace（半自動・分離）

`references/step3-replace.md` の手順に従う。`work_png/` の実画像を確認 → `img/` のプレースホルダーと対応付け（**ファイル名不一致時は必ずユーザーに確認**）→ `cp` で差し替え → サイズ検証 → 報告。クリーンアップは明示指示時のみ。

## 注意事項（厳守）

詳細は `references/common-rules.md` を参照。要点:

- **日本語出力**。例外は画像プロンプト本文（`--prompt`/`--style`/`--elements`）のみ英語、`--labels` は日本語。
- **エージェント実行ルール（CLAUDE.md）**: 処理中の提案／確認／中断をしない（replace のファイル名不一致確認のみ例外）、最後まで完遂、並列指定は必ず並列、「これから生成します」で終了しない（実ファイル生成まで継続）。
- **モデル割り当て**: CLAUDE.md「エージェント編成（モデル割り当て）」に従う。
- **画像拡張子は PNG 統一**（旧 `.jpg` は是正）。Glob では `v1/`/`v2/` を除外。
- **Mermaid 記法は CLAUDE.md 方式**（`&#40;` 等のHTMLエンティティ禁止、半角括弧は全角化かノードをダブルクォートで囲む、`&` は全角 `＆`、`<br/>` 使用時はノードをダブルクォート、dark テーマ禁止）。詳細は `templates/v3/reference/mermaid-patterns.md`。
- **テキスト視認性**: 半透明背景（`bg-white/70` 等）禁止、内側ボックスは親と同系色の `-100` 背景＋ `-900` テキスト。
- **共通部品・ヘッダーを改変しない**: 図解挿入は本文HTMLのみ編集。ダークモードボタンを手書きしない（`main.js` が動的生成）。
- **絶対パス禁止**: リポジトリルート相対で記述。
- **バージョン管理**: 出力先に既存があれば `v1/`/`v2/` へ退避してから新規作成。

## 共有参照ファイル（リポジトリルート相対・丸写しせず参照）

- 9分類体系・命名規則: `tech-knowledge-map.md`
- カラーテーマ: `templates/v3/reference/color-themes.md`
- Tailwind スタイル: `templates/v3/reference/css-styles.md`
- Mermaid 詳細: `templates/v3/reference/mermaid-patterns.md`
- カードコンポーネント: `templates/v3/snippets/components.html`

## references

- `references/workflow-orchestration.md` - 章単位ファンアウト・スキップ判定・検証・完了報告。
- `references/step1-suggestion.md` - HTML分析・提案レポート（chapter-XX.md / README.md）テンプレ・図解タイプ表。
- `references/step2-image-and-insert.md` - プレースホルダー生成・命名・`<figure>` 挿入テンプレ。
- `references/image-prompt-templates.md` - 図解タイプ別の英語プロンプト集・スタイル統一・日本語ラベル規約。
- `references/step3-replace.md` - work_png 確認・対応付け・差し替え・サイズ検証・クリーンアップ。
- `references/common-rules.md` - 全フェーズ共通ルール（言語/Mermaid/視認性/PNG統一/エージェント実行/依存）。
