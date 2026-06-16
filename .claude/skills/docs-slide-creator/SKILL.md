---
name: docs-slide-creator
description: work_pdfフォルダに配置されたPDF群からPDFスライド教材ビューアー(HTML)を生成するスキル。教材タイトルを指定してdocs/slide配下の該当分類フォルダにスライドビューアー一式を作成する際に使用する。
---

# Docs Slide Creator

`work_pdf/` フォルダに格納されたPDFファイルを元に、PDFスライド教材ビューアー(HTMLベース)を `docs/slide/[カテゴリパス]/[教材名]/` に自動生成するスキル。

## 概要

- 入力: `work_pdf/` 配下のPDFファイル群 + 教材タイトル(例: Excel入門)。
- 出力: `docs/slide/[カテゴリパス]/[教材名]/` 配下に `index.html` / `styles.css` / `main.js` / `slide-content.js` / `pdf/`(PDF移動先)。
- 教材名は教材タイトルから英語ケバブケースへ自動変換する(例: Excel入門 → `excel-basics`)。
- テンプレートは `templates/v3/slide/` をコピーして利用する。`main.js` は無編集。
- 単体スキル(並列ファンアウトなし)。準備〜編集〜報告までメイン会話ループが逐次実行する。

## 使用方法

```
/docs-slide-creator [教材タイトル]
```

例:
- `/docs-slide-creator Excel入門`
- `/docs-slide-creator Word基礎`
- `/docs-slide-creator Python入門`

前提: 実行前に `work_pdf/` へPDFファイルを配置しておくこと。

## 実行手順

詳細な手順(bashコマンド例・編集内容)は `references/workflow.md` に記載。要点は以下:

1. `work_pdf/` を確認(空なら配置を案内して終了)。
2. tech-knowledge-map.md を参照しカテゴリパスを決定 → `references/category-paths.md`。
3. 出力先と `pdf/` を `mkdir -p` で作成。
4. PDFを `work_pdf/` から出力先の `pdf/` へ `mv` で移動。
5. テンプレート4ファイルを出力先へコピー。
6. `slide-content.js` の `slides` 配列を編集(ファイル名解析) → `references/placeholders.md`。
7. `index.html` のプレースホルダー・アイコン・パンくずを置換 → `references/placeholders.md` / `references/icon-color-themes.md`。
8. `styles.css` のCSS変数(カラーテーマ)を置換 → `references/icon-color-themes.md`。
9. `index.html` の `tailwind.config` の `primary` パレットを置換 → `references/icon-color-themes.md`。
10. Globで生成物を確認し、ファイル一覧 + GitHub Pages URL を日本語で報告。

## 注意事項

- 出力・コメントはすべて日本語。
- `work_pdf/` が空の場合はPDFファイルを配置するよう案内して終了する。
- カテゴリが不明な場合のみユーザーに確認する。
- ファイル名パターンが不規則な場合は手動でタイトルを推定する。
- `main.js` は変更不要(そのままコピー)。
- パスはリポジトリルート相対で扱う。`/home/...` 等の絶対パスをハードコードしない。
- **エージェント実行ルール(CLAUDE.md)**: 処理中に最適化提案・確認・中断をしない。指示を最後まで完遂する。「これから生成します」で終了せず、実ファイル生成まで継続する。
- バージョン管理: 出力先 `docs/slide/[カテゴリパス]/[教材名]/` に既存があれば `v1/`、`v2/` … へ退避してから新規作成する。
- `styles.css` のCSS変数(`--header-color-*` / `--header-shadow-rgb`)と `index.html` の `primary` パレットは必ず実カラー値へ置換する(未置換だと配色が崩れる)。
- ヘッダー構造は変更しない(テンプレートをそのまま使う)。Mermaid・テキスト視認性ルールはスライドビューアーでは原則使用しないが、本文記述を追加する場合は CLAUDE.md / `templates/v3/reference/mermaid-patterns.md` の方式に従う。
