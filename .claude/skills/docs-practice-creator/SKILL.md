---
name: docs-practice-creator
description: 技術名から練習問題集（README・共通部品・各回HTML）を一括生成するスキル。docs/practice配下に回答クリック展開式の練習問題セットを作成する際に使用する。
---

# Docs Practice Creator

技術名1つを入力として、練習問題集（README.md・共通部品JS/CSS・各回HTML）を `docs/practice/[分類パス]/[技術名]/` に一括生成するスキル。回答は `<details>` クリック展開式で、解説は「なぜそうなるか」とよくある間違いを含む。

## 概要

旧 practice-creator-workflow の挙動を、メイン会話ループが直接オーケストレーションして再現する。準備フェーズ（README→共通部品→第1回HTML）を逐次実行して構造テンプレを確定させた後、第2回以降を Agent ツール（general-purpose）で並列ファンアウト生成する。

- テンプレート: `templates/v3/html_practice/`
- 命名規則: `[技術名]-practice-[NN].html`（NN は2桁ゼロ埋め）
- 出力先: `docs/practice/[分類パス]/[技術名]/`
- 回数構成: 6〜15回（難易度★カーブ設計）

## 使用方法

```
/docs-practice-creator [技術名]
```

例:
- `/docs-practice-creator python-basics`
- `/docs-practice-creator sql-queries`
- `/docs-practice-creator javascript-fundamentals`

## 実行手順

以下の4フェーズを順に実行する。詳細手順は各 references/ を参照。

### 準備フェーズ（逐次・本体が直接実行）

1. **README作成**: `references/step1-readme-curriculum.md` に従い、対象技術の分類パス（`tech-knowledge-map.md` 参照）を決定し、6〜15回・難易度★カーブを設計した README.md を作成する。既存ファイルがあれば `references/templates-and-paths.md` のバージョン管理手順で退避してから新規作成する。
2. **共通部品の土台作成**: `references/step2-foundation.md` に従い、`templates/v3/html_practice/` の4ファイル（styles.css / main.js / drawing-tool.js / sidebar-content.js）を出力先へコピーし、styles.css のカラープレースホルダーを実値へ置換、sidebar-content.js に全回分の定義を設定する。
3. **第1回HTML生成**: `references/step2-foundation.md` と `references/question-components.md` に従い、`practice-template.html` をベースに第1回HTMLを生成する。この第1回HTMLが以降の構造テンプレになる。

### 生成フェーズ（並列ファンアウト）

README から総回数を確認し、第2回〜最終回を **1つのメッセージ内で Agent ツール呼び出しをまとめて発行** し並列実行する。各サブエージェントは `subagent_type=general-purpose`、`model: sonnet`（資料作成サブ）とし、最小指示を渡す:

> `.claude/skills/docs-practice-creator/references/step3-round-html.md`、`references/question-components.md`、`references/shared-rules.md` を読み、第1回HTML（パスを渡す）を構造ベースとして、README.md（パスを渡す）から第N回（回番号を渡す）の情報を抽出し、その1回分のHTMLを生成して Write せよ。共通部品（sidebar-content.js / styles.css / main.js / drawing-tool.js）は上書き禁止。

**重要: 並列呼び出しは1メッセージにまとめること（1つずつ順次起動は禁止）。**

### 検証フェーズ

生成物を `references/shared-rules.md` のチェックリスト（または docs-reviewer スキルの手順）で検証する。特に details展開式の遵守・textarea/実行ボタン不使用・Mermaid記法・カラープレースホルダー置換済みを確認する。

### 報告フェーズ

Glob で生成物一覧を確認し、ファイル一覧と GitHub Pages URL を日本語で報告する。報告形式は `references/templates-and-paths.md` を参照。

## 注意事項

詳細な共通ルールは `references/shared-rules.md` に集約。要点は以下のとおり。

- **日本語出力**: 応答・成果物はすべて日本語。
- **モデル割り当て**: CLAUDE.md「エージェント編成（モデル割り当て）」に従う。準備フェーズの設計判断（分類・難易度カーブ・README構成）はオーケストレーター（Opus, 本体）が直接担当する。共通部品のファイルコピーやカラープレースホルダー置換などの単純作業は `model: haiku` のサブエージェントへ委譲してよい。生成フェーズ（第2回以降のHTML生成）のサブエージェントは `model: sonnet` を指定する。
- **エージェント実行ルール（CLAUDE.md準拠）**: 処理中に提案・確認・中断をしない。最後まで完遂する。並列指定は必ず並列で実行する。「これから生成します」で終了せず、実ファイル生成まで継続する。
- **回答形式（最重要）**: 回答は `<details>`/`<summary>` クリック展開式のみ。**textarea入力欄・「実行して確認」ボタンは使用禁止**。
- **解説**: 「なぜそうなるか」＋よくある間違いを必ず含める。
- **Mermaid記法**: CLAUDE.md方式に統一（`&#40;` 等のHTMLエンティティ不可／半角括弧は全角化かノードをダブルクォートで囲む／`&` は全角 `＆`／`<br/>` 使用時はノードをダブルクォートで囲む／darkテーマ禁止）。詳細は `templates/v3/reference/mermaid-patterns.md` 参照。
- **テキスト視認性**: 半透明背景（`bg-white/70` 等）禁止。内側ボックスは親と同系色の `-100` 背景＋`-900` テキスト。
- **ヘッダー**: ダークモードボタンをHTMLに手書きしない（main.js が動的生成）。ヘッダー構造を変更しない。
- **スクリプト読込順**: styles.css → sidebar-content.js → main.js → drawing-tool.js。
- **カラープレースホルダー**: styles.css の `{{PRIMARY_300/400/500/600/700/RGB}}` は必ず実カラー値へ置換（未置換はCSS破損）。
- **バージョン管理**: 出力先に既存があれば `v1/`/`v2/`/... へ退避してから新規作成。
- **パス**: 絶対パスのハードコード禁止。リポジトリルート相対で記述する。
