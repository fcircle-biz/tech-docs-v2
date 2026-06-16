# ワークフロー編成（章単位ファンアウト）

旧 `illustration-creator-workflow` の編成ロジックを、スキル本体（メイン会話ループ）が `Agent` ツール（`subagent_type=general-purpose`）で再現する手順。旧定義の二重ファンアウト（workflow → step2 内部 general-purpose）は**1段に統合**する。

共通ルールは `common-rules.md` を参照。

## 全体像

引数で `suggest`/`illustrate` を個別指定された場合を除き、デフォルトは **suggest → illustrate を連続実行**する。本スキルでは両者を統合し、**「1章 = 1サブエージェント」**で並列化する。各サブエージェントが章内で「提案md生成 → プレースホルダー画像生成（img/）→ 対象HTMLに `<figure>` 挿入」まで完結させる。

`replace` モードは半自動・ユーザー確認を伴うため、この並列ループには**混ぜない**（`step3-replace.md` 参照）。

## フェーズ1: 準備（逐次・本体が直接実行）

本体（メイン会話ループ）が以下を直接行い、並列に渡す材料を確定する。

### 1-1. 対象HTMLの列挙

Glob で `[TargetDirectory]/*-learning-material-*.html` を検索する。

- `v1/` `v2/` 等の過去バージョンフォルダは**除外**する（`common-rules.md`）。
- 章番号引数が指定されている場合は `*-learning-material-[XX].html`（XX=2桁ゼロパディング）のみを対象にする。

### 1-2. スキップ判定

各対象HTMLを軽く確認し、**「既存のMermaid図で十分」とみなせる章のみ**を並列対象から除外する。

- 既存Mermaid図が十分にあり追加図解の学習効果が見込めない章はスキップ対象として記録する。
- それ以外は並列対象に含める。
- スキップ判定の最終確認は各サブエージェント内（提案段階）でも行うため、本体段階では明らかに不要な章のみ除外すればよい。

### 1-3. img/ フォルダ準備

`[TargetDirectory]/img/` フォルダを用意する（存在しない場合のみ作成）。各サブエージェントが画像を保存する先。

## フェーズ2: 生成（並列ファンアウト）

並列対象の各章について、**1つのメッセージ内で `Agent` ツール呼び出しをまとめて発行し並列実行**する。

> **重要: 並列呼び出しは1メッセージにまとめる。** 1章ずつ順次に Agent を起動するのは禁止。

各サブエージェントの指定:

- `subagent_type`: `general-purpose`
- `description`: 例「第N章 図解生成・挿入」
- `prompt`（最小指示）: 以下を渡す。
  - `references/step1-suggestion.md`（提案手順・出力テンプレ）と `references/step2-image-and-insert.md`（画像生成・挿入手順）と `references/image-prompt-templates.md`（プロンプト集）と `references/common-rules.md`（共通HTML/Mermaid/視認性ルール）を読むこと。
  - 対象HTMLファイルのパス（章XXの `*-learning-material-XX.html`）を渡す。
  - 対象ディレクトリパス（`img/` と `illustration_suggestions/` の親）を渡す。
  - 章内で以下を完結させること:
    1. 対象HTMLを分析し、`illustration_suggestions/chapter-XX.md` を生成（各章1〜2件に厳選）。
    2. 各提案に対し `create-placeholder-image` でプレースホルダーPNGを `img/` に生成。
    3. 対象HTMLに `<figure>`/`<figcaption>` で画像を挿入。
    4. 「既存のMermaid図で十分」な提案はスキップ。
  - 共通部品（JS/CSS/sidebar）は**上書き禁止**。本文HTMLのみ編集。
  - 画像拡張子は **PNG** 統一。

削除予定の旧 agent 型（例: `illustration-creator-step1` `illustration-creator-step2`）は**使わない**。

**待機**: すべてのサブエージェントが完了するまで待つ。

## フェーズ2.5: README.md 生成（任意・全章モード時）

全章を対象に処理した場合、本体が `illustration_suggestions/README.md`（全体サマリー）を生成する（テンプレは `step1-suggestion.md` 参照）。単一章モードでは生成しない。

## フェーズ3: 検証

`docs-reviewer` スキルの手順（利用可能な場合）、または以下のチェックリストで生成物を検証する。

- [ ] 各章の提案が1〜2件に厳選されているか。
- [ ] すべての提案（スキップ分を除く）にプレースホルダーPNGが生成され `img/` に保存されているか。
- [ ] 各HTMLファイルに `<figure>` で画像が挿入されているか。
- [ ] 画像パスが `img/[ファイル名].png` の相対パスか。
- [ ] 共通部品（JS/CSS/sidebar）が改変されていないか。
- [ ] ヘッダー構造・スクリプト読込順が維持されているか。
- [ ] 挿入HTMLに半透明背景がないか（視認性ルール）。

## フェーズ4: 報告

Glob で生成物を確認し、**日本語で**以下を報告する。

```
## 図解作成完了

### 対象ディレクトリ
[ディレクトリパス]

### 生成ファイル一覧

#### 提案レポート（illustration_suggestions/フォルダ）
- README.md（全体サマリー・全章モード時）
- chapter-01.md
- chapter-02.md
- ...

#### プレースホルダー画像（img/フォルダ）
- [技術名]-ch02-01-xxx.png
- [技術名]-ch02-02-xxx.png
- ...

#### 編集したHTMLファイル
- [技術名]-learning-material-02.html: 図2-1, 図2-2 を挿入
- ...

### スキップした章
- 第X章: 既存のMermaid図で十分なためスキップ

### GitHub Pages URL
https://fcircle-biz.github.io/tech_docs/guide/[カテゴリパス]/[ファイル名].html
```

GitHub Pages URL 形式: `https://fcircle-biz.github.io/tech_docs/[content-type]/[category-path]/[filename].html`

## 禁止事項

- 準備フェーズ完了前に並列生成を始めること。
- 並列対象の章を1つずつ順次実行すること（必ず並列）。
- 「これから実行します」と報告して終了すること（実際に完了するまで継続）。
- 削除予定の旧 agent 型を呼び出すこと。
- `replace` モードを並列ループに混ぜること。
