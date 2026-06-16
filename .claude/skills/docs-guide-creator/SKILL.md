---
name: docs-guide-creator
description: 技術名1つから初心者向け学習ガイド一式(README.md・共通部品4ファイル・全章HTML)を docs/guide/ の該当分類フォルダに生成するスキル。新しい技術の学習ガイドを作成する際に使用する。
---

# Docs Guide Creator

技術名1つを起点に、初心者向け学習ガイド一式を `docs/guide/[分類パス]/[技術]/` に生成するワークフロースキル。

## 概要

指定された技術名から、tech-knowledge-map.md の9分類体系に基づいて配置先を決定し、以下を生成する。

- `README.md`（学習ガイドライン）
- 共通部品4ファイル（`styles.css` / `sidebar-content.js` / `main.js` / `drawing-tool.js`）
- 全章のHTMLファイル（`[技術名]-learning-material-NN.html`、NNは2桁ゼロパディング）

旧 workflow エージェントが Task で並列起動していた挙動を、このスキル本体（メイン会話ループ）が Agent ツール（`subagent_type: general-purpose`）で再現する。準備フェーズは本体が逐次実行し、第2章以降は並列ファンアウトで生成する。

## 使用方法

```
/docs-guide-creator [技術名]
```

例:
- `/docs-guide-creator python-streamlit`
- `/docs-guide-creator docker`
- `/docs-guide-creator spring-boot`

技術名は kebab-case（小文字とハイフン）で指定する。配置先（分類パス・エコシステム）は `tech-knowledge-map.md` と「実行手順」内の参照に従って決定する。

## 実行手順

詳細手順は references/ に分割している。各フェーズで対応するファイルを読み込んで進めること。

### 準備フェーズ（本体が逐次実行）

1. **README.md作成** — references/step1-readme.md に従い、配置先分類を決定し（references/taxonomy-paths.md 参照）、README.mdテンプレートを埋めて生成する。既存ファイルがあればバージョン退避（references/step1-readme.md「バージョン管理」）。
2. **共通部品の土台作成** — references/step2-foundation.md に従い、`templates/v3/html/` から4ファイルをコピーし、`styles.css` の `{{PRIMARY_*}}` を実カラー値へ置換、`sidebar-content.js` の `chapters` 配列に全章定義を設定する。
3. **第1章HTML生成** — references/step2-foundation.md と references/html-rules.md に従い、`learning-material-template.html` をベースに第1章（`[技術名]-learning-material-01.html`）を生成する。この第1章HTMLが以降の全章の構造テンプレ（継承元）になる。

### 生成フェーズ（並列ファンアウト）

第2章〜最終章を **1つのメッセージ内で Agent ツール呼び出しをまとめて発行し並列実行** する。各サブエージェントへの指示は以下を最小限渡す。

- `subagent_type`: `general-purpose`
- `model`: `sonnet`（資料作成サブ → Sonnet を指定）
- 指示内容: 「`.claude/skills/docs-guide-creator/references/step3-chapter.md` と `.claude/skills/docs-guide-creator/references/html-rules.md` を読み、第1章HTML（フルパスを渡す）を構造ベースとして、README.md（フルパスを渡す）から指定章番号の情報を抽出し、1章分のHTMLを生成して Write せよ。共通部品（`styles.css` / `sidebar-content.js` / `main.js` / `drawing-tool.js`）は上書き禁止。」
- 各呼び出しに渡す可変情報: README.mdフルパス・第1章HTMLフルパス・章番号

### 検証フェーズ

docs-reviewer スキルの手順、または references/html-rules.md のチェックリストで全生成物を検証する（`{{PRIMARY_*}}` 未置換・スクリプト読込順・Mermaid記法・テキスト視認性・ヘッダー構造）。

### 報告フェーズ

Glob（`v1/`/`v2/` 等の旧バージョンフォルダは除外）で生成物を確認し、ファイル一覧と GitHub Pages URL を日本語で報告する。URL形式は `https://fcircle-biz.github.io/tech_docs/guide/[分類パス]/[技術]/[ファイル].html`。

## 注意事項

**重要: 並列呼び出しは1メッセージにまとめる。** 第2章以降を1章ずつ順次 Agent 起動するのは禁止。

- **日本語出力。** 応答・成果物はすべて日本語。
- **エージェント実行ルール（CLAUDE.md）:** 処理中に提案・確認・中断をしない。最後まで完遂する。並列指定は必ず並列で実行する。「これから生成します」で終了せず、実ファイル生成まで継続する。
- **{{PRIMARY_*}} の置換は必須。** `styles.css` の `{{PRIMARY_300}}` `{{PRIMARY_400}}` `{{PRIMARY_500}}` `{{PRIMARY_600}}` `{{PRIMARY_700}}` `{{PRIMARY_RGB}}` を実カラー値へ置換しないとCSSが壊れる。準備フェーズで必ず確認すること（最頻出の破損要因）。
- **共通部品は並列段で上書き禁止。** 第1章HTMLが構造テンプレ（継承元）。第2章以降のサブエージェントは HTML のみ生成し、JS/CSS/sidebar には触れない。
- **Mermaid記法は CLAUDE.md 方式に統一。** HTMLエンティティ（`&#40;` `&#124;` 等）は使わず、半角括弧は全角化かノードをダブルクォートで囲む。`&` は全角`＆`。`<br/>` 使用時はノードをダブルクォートで囲む。darkテーマ禁止。詳細は `templates/v3/reference/mermaid-patterns.md` 参照。
- **テキスト視認性:** 半透明背景（`bg-white/70` 等）禁止。内側ボックスは親と同系色の `-100` 背景＋`-900` テキスト。
- **ヘッダー:** ダークモードボタンを HTML に手書きしない（`main.js` が動的生成）。ヘッダー構造を変えない。
- **スクリプト読込順:** `styles.css` → `sidebar-content.js` → `main.js` → `drawing-tool.js`。
- **バージョン管理:** 出力先に既存ファイルがあれば `v1/`/`v2/`/... へ退避してから新規作成する。
- **絶対パスのハードコード禁止。** 作業ルートからの相対パス（`docs/guide/...`、`templates/v3/...`）で扱う。
- **モデル割り当て:** 配置先分類・カリキュラム設計・第1章構造など設計判断はオーケストレーター（Opus本体）が担う。共通部品コピーや `{{PRIMARY_*}}` 置換など単純作業は必要に応じて `model: haiku` のサブエージェントに委譲してよい。モデル割り当ての方針は CLAUDE.md「エージェント編成（モデル割り当て）」に従う。

## 参照ファイル

- references/step1-readme.md — README.md作成手順・テンプレート全文・バージョン管理
- references/step2-foundation.md — 土台作成（コピー・カラー置換・sidebar編集・第1章生成）
- references/step3-chapter.md — 単一章HTML生成（書換箇所と維持箇所の対比）
- references/html-rules.md — 共通HTMLルール（Mermaid・コンポーネント・視認性・ヘッダー・Highlight.js）をDRY集約
- references/taxonomy-paths.md — 9分類のディレクトリパス代表例（tech-knowledge-map.md 抜粋）

共有データは複製せず既存リポジトリファイルを参照する。9分類体系: `tech-knowledge-map.md` / カラー: `templates/v3/reference/color-themes.md` / Tailwind: `templates/v3/reference/css-styles.md` / Mermaid詳細: `templates/v3/reference/mermaid-patterns.md` / カードコンポーネント: `templates/v3/snippets/components.html`。
