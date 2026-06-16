---
name: docs-assignment-creator
description: 仕様書フォルダ(specs配下)からプログラム実践課題資料一式(README・設計資料コピー＋PDF・共通部品・各ステップHTML)を生成するスキル。docs/assignment配下に完成コードを出さずヒントのみで自力実装を促すオレンジ系の実践課題を新規作成する際に使用する。
---

# Docs Assignment Creator（実践課題資料 作成）

仕様書フォルダ（`specs/[課題名]/docs/`）を分析し、学習者が自力で実装するためのプログラム実践課題資料一式を `docs/assignment/[課題名]/` に生成するスキル。

## 概要

実践課題資料は、完成コードを提供せず**ヒントと設計書参照のみ**で自力実装を促す点がチュートリアルと異なる。生成物は次の通り（配色はオレンジ系 `--primary-500: #f97316`）:

- `README.md`（課題概要・学習目標・前提・設計資料リンク・学習コンテンツ・推奨所要時間）
- `docs/`（`specs/[課題名]/docs/` 全体のコピー＋各MarkdownのPDF版＋`mockups/`）
- 共通部品（`styles.css` / `main.js` / `drawing-tool.js` / `sidebar-content.js`）
- 各ステップHTML（`[課題名]-assignment-[NN].html`）

設計書はPDFリンクで参照し、モック画面は `docs/mockups/*.html` を iframe 表示（複数はタブ切替）。ヘッダーはバッジ「実践課題」／アイコン `fas fa-tasks`／推奨時間は全ステップの合計を共通表示する。

## 使用方法

```
/docs-assignment-creator [仕様書フォルダパス] [--step N]
```

- 仕様書フォルダパス: 必須。課題名はフォルダ名から自動抽出。
- `--step N`: 任意。指定ステップ1つだけを再生成するモード。

例:
- `/docs-assignment-creator specs/order-management-v1/docs`
- `/docs-assignment-creator specs/inventory-system-v1/docs`
- `/docs-assignment-creator specs/order-management-v1/docs --step 5`（Step5のみ再生成）

## 実行手順

このスキル本体（メイン会話ループ）が全工程を管理・実行する。旧 workflow が Task で並列起動していた挙動は、本体が **Agent ツール（subagent_type=general-purpose）** で再現する。詳細手順は references を参照:

1. **準備フェーズ（逐次・本体が直接実行）**
   - Phase 1: README作成＋設計資料コピー＋PDF変換 … `references/step1-readme.md`
   - Phase 2: 共通部品コピー＋オレンジ設定＋sidebar全ステップ定義＋第1ステップ(01)HTML生成 … `references/step2-foundation.md`
   - ここで 01 HTML（構造テンプレ）と全体構成が確定する。
2. **生成フェーズ（並列ファンアウト）**
   - Step2(02)〜最終ステップを **Agent ツールで並列生成**（`subagent_type=general-purpose`, `model: sonnet`）。各サブエージェントは `references/step3-step-html.md` と `references/global-rules.md` を読み、01 HTML（パス指定）を構造ベースに README／設計書から該当ステップ情報を抽出して1ステップ分を Write する。共通部品（JS/CSS/sidebar）は上書き禁止。 … 進行管理は `references/workflow.md`
3. **検証フェーズ**: `docs-reviewer` スキル、または `references/step3-step-html.md` のチェックリストで生成物を検証。
4. **報告フェーズ**: Glob で生成物を確認し、ファイル一覧＋GitHub Pages URL を日本語で報告。

**`--step N`（単一再生成）の場合**: 準備フェーズはスキップし、既存の 01 HTML を構造ベースに `references/step3-step-html.md` の手順で当該ステップのみ生成する（共通部品は上書きしない）。

### references 一覧

| ファイル | 内容 |
|---------|------|
| `references/workflow.md` | 3フェーズのオーケストレーション・総ステップ取得・完了報告 |
| `references/step1-readme.md` | 仕様分析・出力先・バージョン管理・READMEテンプレ全体・specsコピー＋PDF変換・実践課題vsチュートリアル比較 |
| `references/step2-foundation.md` | 共通部品コピー・オレンジ置換・sidebar全ステップ定義・Step1必須5セクション |
| `references/step3-step-html.md` | 複製→書換・維持箇所・モック対応・タブ切替・コードなしヒント・早期終了禁止・検証チェックリスト |
| `references/components-and-theme.md` | カード＋オレンジTailwind config＋CSS変数 |
| `references/global-rules.md` | 日本語・Mermaid・視認性・エージェント実行・コード提供禁止・命名・URL（全体共通・DRY） |

## 注意事項（必読）

- **モデル割り当ては CLAUDE.md「エージェント編成（モデル割り当て）」に従う**。設計判断（仕様分析・README構成・ステップ設計）はオーケストレーター（Opus, 本体）が担う。specs の docs/ コピー・`md-to-pdf` 変換・共通部品コピー等の単純作業は `model: haiku` のサブエージェントに委譲してよい。HTML生成サブは `model: sonnet` を指定する。
- **重要: 並列呼び出しは1メッセージにまとめる**。生成フェーズのStep2〜最終ステップは、1つのメッセージ内で Agent ツール呼び出しをまとめて発行し並列実行する（1つずつ順次は禁止）。
- **コード提供禁止**: 実践課題は完成コードを出さず、考え方・設計書参照箇所のヒントのみ。
- **日本語**で出力・コメントする。
- **エージェント実行ルール**（CLAUDE.md準拠）: 処理中の提案／確認／中断をしない、最後まで完遂する、並列指定は必ず並列、「これから生成します」で終了しない（実ファイル生成まで継続）。
- **Mermaid記法**はCLAUDE.md方式（HTMLエンティティ `&#40;` 等を使わない／半角括弧は全角化かノードをダブルクォートで囲む／`&` は全角 `＆`／`<br/>` 使用時はノードをダブルクォートで囲む／darkテーマ禁止）。詳細は `templates/v3/reference/mermaid-patterns.md`。
- **テキスト視認性**: 半透明背景（`bg-white/70` 等）禁止、内側ボックスは親と同系色の `-100` 背景＋`-900` テキスト。
- **ヘッダー**: ダークモードボタンを手書きしない（`main.js` が動的生成）、ヘッダー構造を変えない。
- **スクリプト読込順**: `styles.css` → `sidebar-content.js` → `main.js` → `drawing-tool.js`。
- **`{{PRIMARY_*}}` プレースホルダーは必ず実カラー値（オレンジ）へ置換**（未置換はCSS破損）。html_assignment の styles.css は最初からオレンジの場合があるが、残存有無を必ず確認する。
- **バージョン管理**: 出力先に既存があれば `v1/`,`v2/`… へ退避してから新規作成。
- **パス**: 絶対パスをハードコードしない（リポジトリルート相対で記述）。画像はPNGに統一。Glob検索では `v1/`,`v2/` を除外。
- PDF変換は `node scripts/md-to-pdf.mjs [mdパス]`（または md-to-pdf スキル）を使用。
- 命名: `[課題名]-assignment-[NN].html`。URL: `https://fcircle-biz.github.io/tech_docs/assignment/[課題名]/[ファイル名].html`。
