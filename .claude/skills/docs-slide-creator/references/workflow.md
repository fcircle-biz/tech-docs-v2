# docs-slide-creator 実行手順(詳細)

`work_pdf/` 配下のPDFを元に、PDFスライド教材ビューアーを `docs/slide/[カテゴリパス]/[教材名]/` に生成する逐次手順。すべてのパスはリポジトリルート(`/home/infront/git/tech_docs`)相対で記述すること。絶対パスをハードコードしない。

## 1. work_pdf/ フォルダの確認

```bash
ls -la work_pdf/
```

PDFファイル一覧を取得し、以下を分析する:
- ファイル名のパターン(章番号、タイトルの抽出)
- ファイル数(スライド数)
- 技術カテゴリの推定

`work_pdf/` が空の場合は、PDFファイルを配置するよう案内して終了する。

## 2. 出力先フォルダの決定

`tech-knowledge-map.md` を参照し、適切なカテゴリパスを決定する。技術領域→出力先パスの対応とケバブケース命名規則は `references/category-paths.md` を参照。

教材名は教材タイトルから英語小文字のケバブケースへ変換する(例: Excel入門 → `excel-basics`)。

カテゴリが不明な場合はユーザーに確認する。

## 3. フォルダ構造の作成

```bash
mkdir -p [出力先パス]/pdf
```

出力先 `docs/slide/[カテゴリパス]/[教材名]/` に既存ファイルがある場合は、`v1/`、`v2/` … へ退避してから新規作成する(バージョン管理)。

## 4. PDFファイルの移動

`work_pdf/` から出力先の `pdf/` フォルダへPDFを移動する:

```bash
mv work_pdf/*.pdf [出力先パス]/pdf/
```

## 5. テンプレートファイルのコピー

```bash
cp templates/v3/slide/index.html [出力先パス]/
cp templates/v3/slide/styles.css [出力先パス]/
cp templates/v3/slide/main.js [出力先パス]/
cp templates/v3/slide/slide-content.js [出力先パス]/
```

`main.js` は無編集のままコピーする。

## 6. slide-content.js の編集

PDFファイル名を解析し、`slides` 配列を生成する。配列フォーマットとタイトル抽出ルールは `references/placeholders.md` を参照。

```javascript
const slides = [
    { number: 1, title: '第1章タイトル', file: 'pdf/ファイル名1.pdf' },
    { number: 2, title: '第2章タイトル', file: 'pdf/ファイル名2.pdf' },
    // ...
];
```

ファイル名パターンが不規則な場合は、内容から手動でタイトルを推定する。

## 7. index.html の編集

プレースホルダー(`【タイトル】` / `【カテゴリ】` / `【親カテゴリ】`)、Font Awesomeアイコン、パンくずリストの相対パスを置換する。
- プレースホルダーの一覧と置換内容 → `references/placeholders.md`
- 技術別アイコン対応表 → `references/icon-color-themes.md`

ヘッダー構造は変更しない(テンプレートのまま使用)。

## 8. styles.css の編集(カラーテーマ)

技術に応じてCSS変数を設定する。カラーテーマ対応表は `references/icon-color-themes.md` を参照。

```css
:root {
    --header-color-dark: #XXXXXX;
    --header-color-main: #XXXXXX;
    --header-color-light: #XXXXXX;
    --header-shadow-rgb: XX, XX, XX;
}
```

CSS変数は必ず実カラー値へ置換する(未置換だと配色が崩れる)。

## 9. index.html の Tailwind カラー編集

`tailwind.config` の `primary` カラーパレットも同様に変更する。技術別Tailwindカラーと9段階パレット例は `references/icon-color-themes.md` を参照。

## 10. 完了報告

Globで生成物を確認し、生成したファイル一覧と教材URLを日本語で報告する。URL形式:

```
https://fcircle-biz.github.io/tech_docs/slide/[カテゴリパス]/[教材名]/
```

報告フォーマット例:

```
## 生成完了

**出力先**: docs/slide/business-saas/microsoft-office/excel-basics/

**ファイル一覧**:
- index.html
- styles.css
- main.js
- slide-content.js
- pdf/(PDFファイル N件)

**プレビューURL**:
https://fcircle-biz.github.io/tech_docs/slide/business-saas/microsoft-office/excel-basics/
```

## 出力例(Excel入門の場合)

```
docs/slide/business-saas/microsoft-office/excel-basics/
├── index.html          # カスタマイズ済み
├── styles.css          # Greenテーマ適用
├── main.js             # テンプレートのまま
├── slide-content.js    # 8スライド定義
└── pdf/
    ├── Excel基礎ガイド_第1章Excelの基本操作.pdf
    ├── Excel基礎ガイド_第2章データ入力と書式設定.pdf
    └── ...
```

## 参照ファイル

- テンプレート: `templates/v3/slide/`(index.html, styles.css, main.js, slide-content.js)
- テンプレートREADME: `templates/v3/slide/README.md`
- カテゴリマップ: `tech-knowledge-map.md`(9分類体系)
