---
name: docs-readme-updater
description: ディスク上の実フォルダ構成を真実源にルートのREADME.mdのみを再生成して同期する保守ユーティリティスキル。docs配下の教材を追加・削除・移動した後にルートREADME.mdの目次やリンク一覧を最新化する際に使用する。
---

# Docs README Updater

ディスク上の実フォルダ構成を真実源として、ルートの `README.md`(リポジトリ直下、すなわち tech_docs/README.md)のみを再生成して同期する保守ユーティリティ。

## 概要

教材(ガイド/スライド/チュートリアル/プラクティス/実践課題/チートシート/学習パス)を追加・削除・移動すると、ルート README.md の目次・リンク一覧が実態とずれる。本スキルは `docs/` 配下の実構造を走査し、それを唯一の真実源としてルート README.md を再生成する。

- **対象ファイル**: リポジトリ直下の `README.md`(= tech_docs/README.md)のみ。
- **他の README.md(各教材フォルダ内など)は一切変更しない。**
- 既存のルート README.md は文面の参考程度に留め、真実源にはしない(実構造とズレている可能性があるため)。

## 使用方法

```
/docs-readme-updater
```

引数はなし。そのまま実行する。

例:
- `/docs-readme-updater`

## 実行手順

詳細な規則は references/ を必ず参照すること。

### Step 1: 調査フェーズ(実構造の走査)

1. 以下のディレクトリを走査して、実在するフォルダ・主要ファイルの一覧を作る。
   - `docs/guide` `docs/slide` `docs/tutorial` `docs/practice` `docs/assignment` `docs/cheatsheet`
   - `docs/learning-paths`
2. 過去バージョンフォルダ(`v1/` `v2/` など)は走査結果から除外する。
3. (任意・大規模時の高速化)内容タイプ別に**読み取り専用**のサブエージェント(subagent_type=general-purpose, model: haiku)を並列起動し、各エージェントに1タイプ分の走査と構造化リスト(パス・タイトル・説明候補)の返却だけを依頼してよい。ファイルの書き込みは絶対にさせない(書き手は本体のみ)。並列起動する場合は1メッセージにまとめて発行する(1つずつ順次は禁止)。

### Step 2: 既存README参照(参考のみ)

1. 既存の `README.md` を読み、説明文の言い回しや既存リンクを参考にする。
2. ただし真実源は Step 1 の実構造。既存記載と実構造が食い違う場合は実構造を優先する。

### Step 3: 再生成・書き込み(単一書き手)

1. 後述の固定9セクション順・技術分野順・リンク規則・命名規則に従い、README.md の全文を再生成する。
2. ルート `README.md` に上書き保存する。書き手は本体のみ(サブエージェントに書かせない)。README の統合・書き込みはオーケストレーター(本体, Opus)が一手に担う。

### Step 4: 検証フェーズ

`references/qa-checklist.md` のチェックリストで生成物を検証する。

### Step 5: 報告フェーズ

更新したファイル(ルート README.md)と、追加・削除・並べ替えの要点を日本語で報告する。

## 固定構成(必須)

### セクション順序(固定9・この順番厳守)

1. `## 📋 目次`
2. `## 📖 概要`
3. `## 🗺️ 学習パス`
4. `## 📖 学習ガイドライン`
5. `## 📖 スライド資料`
6. `## 📖 チュートリアル`
7. `## 📖 プラクティス`
8. `## 📖 実践課題`
9. `## 📖 チートシート`

詳細(各セクションの内訳・技術分野の並び順)は `references/readme-section-order.md` を参照。

### 技術分野の表示順序

リポジトリ直下の `tech-knowledge-map.md` の分類順序に従う。値を丸写しせず同ファイルを参照すること。

### リンク形式(セクション別)

- 学習パス / 学習ガイドライン / チュートリアル / プラクティス / 実践課題 → **相対パス**(`docs/...`)
- スライド資料 / チートシート → **絶対 GitHub Pages URL**(`https://fcircle-biz.github.io/tech_docs/...`)

詳細・具体例は `references/link-format-rules.md` を参照。

### 命名・除外規則

- セクション名・サブカテゴリ名から「エコシステム」を除去(例: 「Javaエコシステム」→「Java」)。
- 過去バージョンフォルダ(`v1/` `v2/` 等)は記載しない。
- 実在するパスのみ列挙(リンク切れ禁止)。

詳細は `references/naming-and-exclusion-rules.md` を参照。

## 注意事項(エージェント実行ルール厳守)

- **モデル割り当ては CLAUDE.md「エージェント編成（モデル割り当て）」に従う。**
- **日本語で出力する。**
- 処理中に提案・確認・中断をしない。最後まで完遂する。「これからREADMEを生成します」で終わらず、実際に README.md を書き込むまで継続する。
- 並列指定(任意の調査フェーズ並列化)を行う場合は、必ず1メッセージにまとめて並列発行する。
- **絶対パスのハードコード禁止**: `/Users/...` や `/home/<user>/...` 等の環境依存パスをコメントや説明に書かない。リポジトリルート相対(`tech_docs/README.md`, `docs/...`)で表現する。
- 書き込み対象はルート `README.md` のみ。他の README.md は変更しない。
- 共有データ(9分類体系・カラー・Tailwind・Mermaid・コンポーネント)は複製せず既存 repo ファイルを参照する。
  - 9分類体系: `tech-knowledge-map.md`
  - カラー: `astro-system/templates/v1/reference/color-themes.md`
  - Tailwind: `astro-system/templates/v1/reference/css-styles.md`
  - Mermaid詳細: `astro-system/templates/v1/reference/mermaid-patterns.md`
  - カードコンポーネント: `astro-system/templates/v1/snippets/components.html`
- README.md 内に図(Mermaid)を含める場合は CLAUDE.md の Mermaid 記法に統一する(HTMLエンティティ `&#40;` 等を使わない / 半角括弧は全角化かノードをダブルクォートで囲む / `&` は全角 `＆` / `<br/>` 使用時はノードをダブルクォートで囲む / dark テーマ禁止)。詳細は `astro-system/templates/v1/reference/mermaid-patterns.md` 参照。

## references

| ファイル | 内容 |
|----------|------|
| `references/readme-section-order.md` | 固定9セクション順と各セクション内訳、技術分野の並び順規則 |
| `references/link-format-rules.md` | セクション別リンク規則(相対/絶対)と具体例 |
| `references/naming-and-exclusion-rules.md` | 「エコシステム」除去 / v1・v2除外 / 実在のみ列挙の規則 |
| `references/qa-checklist.md` | 存在確認 / 順序 / 分野順 / Markdown妥当性 / 命名一貫の品質保証チェックリスト |
