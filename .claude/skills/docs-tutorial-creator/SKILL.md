---
name: docs-tutorial-creator
description: specs配下のアプリ仕様からハンズオン形式のチュートリアル一式（README・ステップ別HTML・共通部品）を生成するスキル。docs/tutorial/配下に実装重視の実践チュートリアルを新規作成する際に使用する。
---

# Docs Tutorial Creator

specs配下のアプリ仕様（specs/[アプリタイプ]/README.md）を読み解き、ハンズオン形式の実践チュートリアル一式を `docs/tutorial/[分類パス]/[アプリ]/` に生成するスキル。

## 概要

specsのアプリ仕様を構造化された実装重視のチュートリアルへ変換する。生成物は以下の3要素から成る。

- **README.md**: チュートリアルカリキュラム（前提条件・学習コンテンツ・所要時間・学習目標）
- **共通部品**: `styles.css` / `main.js` / `drawing-tool.js` / `sidebar-content.js`（テンプレート `templates/v3/html_tutorial/` から複製）
- **ステップ別HTML**: `[技術名]-tutorial-[NN].html`（NNは2桁ゼロパディング）

テンプレートはチュートリアル用の緑（Emerald系）テーマを使用する。各ステップには「実装目標 / 実装手順 / 動作確認 / トラブルシューティング / 完了チェックリスト」を含め、コード例は実行可能・日本語コメント必須とする。

## 使用方法

```
/docs-tutorial-creator [アプリタイプ] [環境] [DB構成]
```

- **アプリタイプ**: specs配下のフォルダ名（例: `todo-app-v1`, `user-management-v2`）。技術スタックはこのフォルダ名に一本化する（旧定義の技術スタック表記とのズレを解消するため、別途の技術スタック引数は取らない）。
- **環境**: 開発環境（例: `windows環境`, `mac環境`, `linux環境`）
- **DB構成**: DB環境（例: `postgresqlをdockerで構築`, `sqliteを使用`）

例:
- `/docs-tutorial-creator todo-app-v1 windows環境 postgresqlをdockerで構築`
- `/docs-tutorial-creator user-management-v2 mac環境 sqliteを使用`

入力ファイル: `specs/[アプリタイプ]/README.md`, `tech-knowledge-map.md`

## 実行手順

このスキルは「準備（逐次）→ 生成（並列）→ 検証 → 報告」の4フェーズで進める。フェーズ1〜3はメイン会話ループ（本体）が直接実行し、生成フェーズのみサブエージェントへファンアウトする。

### フェーズ1: 準備（逐次・本体が直接実行）

1. **README作成**: `references/step1-readme.md` の手順に従い、specs仕様と `tech-knowledge-map.md` の9分類を参照して分類パスを決定し、`docs/tutorial/[分類パス]/[アプリ]/README.md` を作成する。出力先に既存ファイルがあれば `v1/`/`v2/`… へ退避してから新規作成する。
2. **共通部品コピー＆カラー置換＆サイドバー全定義**: `references/step2-scaffold.md` の手順に従い、`templates/v3/html_tutorial/` から4ファイルを複製し、`styles.css` の `{{PRIMARY_*}}` プレースホルダーをEmerald系の実カラー値へ置換し、`sidebar-content.js` に全ステップ分の `steps` 配列と `projectInfo` を設定する。
3. **第1ステップHTML生成**: `tutorial-template.html` をベースに第1ステップ（`...-tutorial-01.html`）を生成する。ここで構造テンプレ（01 HTML）と全体構成が確定する。

### フェーズ2: 生成（並列ファンアウト）

第2ステップ〜最終ステップを **Agentツール（subagent_type=general-purpose, model: sonnet）で並列生成** する。

> **重要: 並列呼び出しは1メッセージにまとめる。** 第2〜最終ステップ分のAgentツール呼び出しを1つのメッセージ内でまとめて発行し並列実行する。1ステップずつ順次起動することは禁止。

各サブエージェントへの最小指示（要旨）:
> `.claude/skills/docs-tutorial-creator/references/step3-chapter.md` と共通HTMLルール（同 `references/mermaid-rules.md`・`references/components-and-colors.md`）を読み、第1ステップHTML（パスを渡す）を構造ベースとして、README.md（パスを渡す）から指定ステップ番号の情報を抽出し、1ステップ分のHTMLをWriteせよ。共通部品（`sidebar-content.js`/`styles.css`/`main.js`/`drawing-tool.js`）は上書き禁止。

削除予定の旧agent型（`tutorial-creator-step3` 等）は使わない。

### フェーズ3: 検証

`docs-reviewer` スキルの手順（または `references/components-and-colors.md` 末尾のチェックリスト）で、全生成HTMLのテキスト視認性・Mermaid記法・スクリプト読込順・ヘッダー構造・カラー置換漏れを検証する。

### フェーズ4: 報告

Globで生成物（README.md・共通部品・全HTML）を確認し、ファイル一覧とGitHub Pages URLを日本語で報告する。URL形式: `https://fcircle-biz.github.io/tech_docs/tutorial/[分類パス]/[アプリ]/[ファイル].html`

## 注意事項

- **日本語出力**: すべての応答・成果物は日本語。
- **モデル割り当て**: モデル割り当ては CLAUDE.md「エージェント編成（モデル割り当て）」に従う。準備フェーズ（設計判断・分類・カリキュラム策定）はオーケストレーター（Opus, 本体）が担当し、共通部品コピーやカラー置換等の単純作業は `model: haiku` のサブエージェントに委譲してよい。HTML生成サブエージェントは `model: sonnet` を指定する。
- **エージェント実行ルール（CLAUDE.md準拠）**: 処理中に提案・確認・中断をしない／指示を最後まで完遂する／並列指定箇所は必ず並列実行する／「これから生成します」と報告して終了せず、実ファイル生成まで処理を継続する。
- **Mermaid記法はCLAUDE.md方式に統一**: HTMLエンティティ（`&#40;` `&#124;` 等）は使わない。半角括弧は全角化するかノードをダブルクォートで囲む／`&` は全角 `＆`／`<br/>` を使うノードはダブルクォートで囲む／darkテーマ禁止。旧step定義やリポジトリの参照ドキュメントにエンティティ方式が残っていてもCLAUDE.md方式を優先する。詳細は `references/mermaid-rules.md` と `templates/v3/reference/mermaid-patterns.md` を参照。
- **テキスト視認性**: 半透明背景（`bg-white/70` 等）は禁止。内側ボックスは親カードと同系色の `-100` 背景 + `-900` テキストにする。詳細は `references/components-and-colors.md`。
- **ヘッダー**: ダークモードボタンをHTMLに手書きしない（`main.js` が動的生成する）。ヘッダー構造は変えない。
- **スクリプト読込順**: `styles.css` → `sidebar-content.js` → `main.js` → `drawing-tool.js`。
- **カラー置換**: `styles.css` の `{{PRIMARY_300/400/500/600/700/RGB}}` は必ず実カラー値へ置換する（未置換はCSS破損）。
- **バージョン管理**: 出力先に既存があれば `v1/`/`v2/`… へ退避してから新規作成する。
- **絶対パス禁止**: 成果物・指示にはリポジトリルート相対パスを用い、`/home/...` や `/Users/...` 等の環境固有絶対パスをハードコードしない。
- **共有データは複製しない**: 9分類体系は `tech-knowledge-map.md`、カラーは `templates/v3/reference/color-themes.md`、Tailwindは `templates/v3/reference/css-styles.md`、Mermaid詳細は `templates/v3/reference/mermaid-patterns.md`、カードコンポーネントは `templates/v3/snippets/components.html` を参照する。

## references

- `references/step1-readme.md` — README.md作成手順・テンプレート・分類パス決定・命名規則
- `references/step2-scaffold.md` — 共通部品コピー・カラー置換表・sidebar全ステップ定義・projectInfo・テンプレート編集箇所
- `references/step3-chapter.md` — 第1ステップHTMLを基にした1ステップ生成（書換7項目・構造維持箇所）
- `references/mermaid-rules.md` — Mermaid記法ルール（CLAUDE.md方式）
- `references/components-and-colors.md` — カードコンポーネント一覧・テキスト視認性・共通HTMLルール・検証チェックリスト
