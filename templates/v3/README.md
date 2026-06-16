# テンプレート v3（Graphite × Iris クールデザイン）

## 概要

技術学習教材・チュートリアル用のHTMLテンプレートです。Tailwind CSS を使用したモダンなデザインで、レスポンシブ対応しています。

**v3 の主な変更点（v2 との差分）:**
- **Graphite × Iris デザインシステム**: グラファイトのニュートラル面に技術別 primary カラーとシアン差し色を組み合わせたクール設計
- **グラファイトガラスヘッダー**: 両モード共通のすりガラスヘッダー（primary→cyan のグラデーションレール）
- **カードシステム刷新**: パステル塗りを廃し「ニュートラル面 + 色ヘアライン + グラデーションアイコンチップ」へ
- **JetBrains Mono 追加**: コードブロック・番号バッジ等に等幅フォントを適用。コードウィンドウは macOS 風
- **スプラッシュ template 追加**: スタンドアロン展開時のサムネイル定義を `<head>` へ追加
- **CSS変数による Tailwind 上書き方式**: HTML 本文クラスは v2 と同じ。`styles.css` が自動変換

**v2 からの変更が不要な部分:**
- HTML 本文構造（`body`、`header`、サイドバー、メイン、フッター）
- `main.js` / `drawing-tool.js` / `sidebar-content.js`（v2 からそのままコピー可）
- Tailwind ユーティリティクラスの多く

**主な機能:**
- レスポンシブデザイン（PC・タブレット・スマートフォン対応）
- サイドバー開閉機能（PC: トグルボタン、モバイル: ハンバーガーメニュー）
- ダークモード対応（システム設定連動、手動切り替え）
- 講義用描画ツール（PC環境のみ）
- 共通JavaScript機能（各技術フォルダ内で直接管理）

---

## ディレクトリ構成

```
templates/v3/
├── README.md                                # このファイル
├── html/                                    # 学習教材（guide）用テンプレート
│   ├── learning-material-template.html      # 学習教材用テンプレート
│   ├── sidebar-content.js                   # サイドバー生成（学習教材用）
│   ├── styles.css                           # 共通カスタムスタイル（クールデザイン基盤）
│   ├── main.js                              # 共通機能（サイドバー、描画ツールバー生成等）
│   └── drawing-tool.js                      # 描画ツール機能
├── html_tutorial/                           # チュートリアル（tutorial）用テンプレート
│   ├── tutorial-template.html               # チュートリアル用テンプレート
│   ├── sidebar-content.js                   # サイドバー生成（チュートリアル用）
│   ├── styles.css                           # 共通カスタムスタイル（緑ヘッダーレール）
│   ├── main.js                              # 共通機能
│   └── drawing-tool.js                      # 描画ツール機能
├── html_practice/                           # 練習問題（practice）用テンプレート
│   ├── practice-template.html               # 練習問題用テンプレート
│   ├── sidebar-content.js                   # サイドバー生成（練習問題用）
│   ├── styles.css                           # 共通カスタムスタイル（問題カード・解答トグル）
│   ├── main.js                              # 共通機能（解答表示トグル、ダークモード）
│   └── drawing-tool.js                      # 描画ツール機能
├── html_assignment/                         # プログラミング実践課題（assignment）用テンプレート
│   ├── assignment-template.html             # 実践課題用テンプレート
│   ├── sidebar-content.js                   # サイドバー生成（実践課題のステップ用）
│   ├── styles.css                           # 共通カスタムスタイル（オレンジ固定）
│   ├── main.js                              # 共通機能
│   └── drawing-tool.js                      # 描画ツール機能
├── html_cheatsheet/                         # チートシート（cheatsheet）用テンプレート
│   ├── cheatsheet-template.html             # チートシート用テンプレート
│   ├── styles.css                           # 共通カスタムスタイル（色モディファイア対応）
│   └── main.js                              # 共通機能（ダークモード、コードコピー等）
├── slide/                                   # スライド教材（slide）用テンプレート
│   ├── index.html                           # スライド教材用テンプレート
│   ├── slide-content.js                     # スライド定義（カスタマイズ必要）
│   ├── styles.css                           # 共通カスタムスタイル
│   ├── main.js                              # 共通機能（PDFビューアー、ナビゲーション等）
│   └── README.md                            # スライド教材の使い方
├── reference/                               # 参照用ドキュメント
│   ├── color-themes.md                      # 技術別カラーテーマ一覧
│   ├── css-styles.md                        # v3 CSSスタイルガイド（本ファイル）
│   └── mermaid-patterns.md                  # Mermaid図パターン集
└── snippets/                                # 部品スニペット
    └── components.html                      # よく使うコンポーネント集（クールデザインプレビュー）
```

---

## 使い方

### 1. テンプレートをコピー

目的に応じたテンプレートをコピーしてください：

- **学習教材（guide）を作成する場合**
  ```bash
  cp templates/v3/html/learning-material-template.html docs/guide/[分類]/[技術名]/[技術名]-learning-material-01.html
  ```

- **チュートリアル（tutorial）を作成する場合**
  ```bash
  cp templates/v3/html_tutorial/tutorial-template.html docs/tutorial/[分類]/[技術名]/[技術名]-tutorial-01.html
  ```

- **練習問題（practice）を作成する場合**
  ```bash
  cp templates/v3/html_practice/practice-template.html docs/practice/[分類]/[技術名]/[技術名]-practice-01.html
  ```

- **実践課題（assignment）を作成する場合**
  ```bash
  cp templates/v3/html_assignment/assignment-template.html docs/assignment/[分類]/[技術名]/[技術名]-assignment-01.html
  ```

- **スライド教材（slide）を作成する場合**
  ```bash
  mkdir -p docs/slide/[カテゴリ]/[サブカテゴリ]/[教材名]
  cp templates/v3/slide/*.{html,css,js} docs/slide/[カテゴリ]/[サブカテゴリ]/[教材名]/
  mkdir docs/slide/[カテゴリ]/[サブカテゴリ]/[教材名]/pdf
  ```

- **チートシート（cheatsheet）を作成する場合**
  ```bash
  mkdir -p docs/cheatsheet/[カテゴリ]/[サブカテゴリ]/[技術名]
  cp templates/v3/html_cheatsheet/cheatsheet-template.html docs/cheatsheet/[カテゴリ]/[サブカテゴリ]/[技術名]/index.html
  cp templates/v3/html_cheatsheet/styles.css docs/cheatsheet/[カテゴリ]/[サブカテゴリ]/[技術名]/
  cp templates/v3/html_cheatsheet/main.js docs/cheatsheet/[カテゴリ]/[サブカテゴリ]/[技術名]/
  ```

### 2. 共通ファイルのコピー

テンプレートは共通ファイル（`sidebar-content.js`、`styles.css`、`main.js`、`drawing-tool.js`）を使用します。

**重要: 依存を避けるため、各技術フォルダ内に直接ファイルをコピーしてください。**

```bash
# 学習教材（Python）を作成する場合の例
cp templates/v3/html/sidebar-content.js docs/guide/programming-languages/python-ecosystem/python/
cp templates/v3/html/styles.css docs/guide/programming-languages/python-ecosystem/python/
cp templates/v3/html/main.js docs/guide/programming-languages/python-ecosystem/python/
cp templates/v3/html/drawing-tool.js docs/guide/programming-languages/python-ecosystem/python/
```

### 3. TODOコメントを編集

テンプレート内の `<!-- TODO: ... -->` コメントを検索し、該当箇所を編集してください。

主な編集箇所:
- **技術名・タイトル**: `[技術名]`、`[章タイトル]` 等
- **カラーテーマ**: `tailwind.config` 内の `primary` カラー AND `styles.css` の `:root --primary-*`（v3 重要: **2箇所同時に設定**）
- **アイコン**: `fab fa-python` → 適切なFont Awesomeアイコン
- **章リスト/ステップリスト**: `sidebar-content.js` の `chapters` または `steps` 配列

---

## v3 の重要点

### クールデザイン（Graphite × Iris）の概要

v3 は「Graphite × Iris（グラファイト×アイリス）」デザインシステムを採用しています。

- **グラファイト**: ダークグレーのニュートラルな面が基調。開発ツールのような洗練感。
- **Iris（アイリス）**: アイリスパープル (`#6366f1`) が既定の primary カラー。技術別に差し替え可能。
- **シアン** (`#06b6d4`): 全技術共通の差し色（ヘッダーのレール、info ボックス等）。
- **アンバー** (`#f59e0b`): 警告・学習目標カードの差し色。

**変換の仕組み**: HTML クラスは v2 と同一。`styles.css` が Tailwind クラスを CSS で上書きする方式。

### 技術別カラーの設定（v3 新仕様: 2箇所設定が必要）

```
[1] tailwind.config の primary パレット（HTML <head> 内）
[2] styles.css の :root --primary-* プレースホルダー
```

この2箇所に**同じカラー値**を設定する必要があります。

```html
<!-- 例: Python のブルー -->
<!-- [1] tailwind.config -->
primary: { 300: '#93c5fd', 400: '#60a5fa', 500: '#3b82f6', 600: '#2563eb', 700: '#1d4ed8', ... }
```

```css
/* [2] styles.css :root */
--primary-300: #93c5fd;
--primary-400: #60a5fa;
--primary-500: #3b82f6;
--primary-600: #2563eb;
--primary-700: #1d4ed8;
--primary-rgb: 59,130,246;
```

各技術の具体値は `reference/color-themes.md` を参照してください。

### JetBrains Mono（v3 追加フォント）

v3 では等幅フォントとして JetBrains Mono を追加しています。
コードブロック・バッジ・番号チップ等に適用されます。

```html
<!-- Google Fonts リンク（v3 版） -->
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">
```

`tailwind.config` にも `mono` エントリが追加されています:

```javascript
fontFamily: {
    sans: ['"Noto Sans JP"', 'sans-serif'],
    mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
}
```

### スプラッシュ template（v3 新規追加）

`</head>` 直前にスタンドアロン展開時のサムネイル定義を追加します。
グラデーション色は技術に合わせて調整可能です。

```html
<template id="__bundler_thumbnail" data-bg-color="#090b11">
    <svg viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
        <!-- グラデーション色（stop-color）は技術に合わせて変更可 -->
        ...
    </svg>
</template>
```

### assignment は primary カラー固定（オレンジ）

`html_assignment/styles.css` はオレンジをハードコードしており、`{{PRIMARY_*}}` プレースホルダーは使いません。
実践課題の識別色として統一されています（v2 踏襲）。

### cheatsheet は色モディファイア方式

`html_cheatsheet` は primary プレースホルダーを使いません。
ヘッダー色は `.header-emerald` / `.header-violet` / `.header-orange` / `.header-rose` 等のモディファイアクラスで指定します。

---

## カラーテーマ

| 技術 | primary 色 | Font Awesome アイコン |
|------|------------|----------------------|
| Python | Blue (`#3b82f6`) | `fab fa-python` |
| Java | Orange (`#f97316`) | `fab fa-java` |
| Spring | Emerald (`#10b981`) | `fas fa-leaf` |
| React | Cyan (`#06b6d4`) | `fab fa-react` |
| .NET/C# | Violet (`#8b5cf6`) | `fab fa-microsoft` |
| TypeScript | Blue (`#3b82f6`) | `fab fa-js` |
| Vue | Emerald (`#10b981`) | `fab fa-vuejs` |

詳細は `reference/color-themes.md` を参照してください。

---

## サイドバーの設定（JavaScript外出し）

v3 は v2 と同様、サイドバーはJavaScriptファイルで動的生成されます。

### 学習教材の場合

1. `sidebar-content.js` をコピー
2. `chapters` 配列を実際の章構成に合わせて編集:

```javascript
const chapters = [
    { number: 1, title: '第1章: 環境構築', file: 'java-learning-material-01.html' },
    { number: 2, title: '第2章: 基本文法', file: 'java-learning-material-02.html' },
];
```

3. 読み込み順序: `sidebar-content.js` → `main.js`

### チュートリアルの場合

```javascript
const projectInfo = {
    title: 'ユーザー管理システム',
    description: 'Django で実装する CRUD 機能付き Web アプリケーション'
};

const steps = [
    { number: 1, title: 'ステップ1', subtitle: '環境構築', file: 'django-tutorial-01.html' },
    { number: 2, title: 'ステップ2', subtitle: 'プロジェクト作成', file: 'django-tutorial-02.html' },
];
```

---

## デバイス別動作仕様

### PC環境（1024px以上）
- **サイドバー**: 初期状態は開いた状態
- **サイドバートグルボタン**: ヘッダー右側に表示、クリックで開閉
- **描画ツールバー**: 右側に表示（折りたたみ可能）
- **スクロールトップボタン**: 表示

### タブレット・スマートフォン（1024px未満）
- **サイドバー**: 初期状態は閉じた状態
- **サイドバー開閉**: ヘッダーのハンバーガーメニューボタンで制御
- **描画ツールバー**: 非表示
- **スクロールトップボタン**: 非表示

---

## 必要な外部リソース

テンプレートは以下のCDNリソースを使用しています（インターネット接続が必要）：

- Tailwind CSS
- Google Fonts (Noto Sans JP + JetBrains Mono)
- Highlight.js（atom-one-dark テーマ）
- Mermaid.js
- Font Awesome

---

## スニペットの使い方

`snippets/components.html` をブラウザで開くと、v3 クールデザインで各コンポーネントのプレビューが確認できます。
必要な部分のHTMLをコピーして使用してください。

---

## 参考ドキュメント

- `reference/color-themes.md` - 技術別カラーテーマの詳細（`{{PRIMARY_*}}` の具体値）
- `reference/css-styles.md` - v3 CSS スタイルガイド（デザイントークン・カードシステム・設定方法）
- `reference/mermaid-patterns.md` - Mermaid 図パターン集（v3 配色例含む）

---

## よくある質問（FAQ）

### Q: v2 から v3 への移行で何を変えればよいですか？

HTML本文はほぼそのままです。以下の4点を変更してください:

1. `tailwind.config` の `fontFamily` に `mono` エントリを追加
2. Google Fonts のリンクを v3 版（Noto 800 追加 + JetBrains Mono 追加）に差し替え
3. `</head>` 直前にスプラッシュ `<template>` を追加
4. `styles.css` を v3 版（`html/styles.css`）に差し替え、`:root` の `{{PRIMARY_*}}` を設定

### Q: styles.css の `{{PRIMARY_*}}` はどこで置換しますか？

自動生成スキル（`docs-guide-creator` 等）が `reference/color-themes.md` の値で自動置換します。
手動作成の場合は直接値を書き換えてください（`tailwind.config` の `primary` と同じ値）。

### Q: assignment（実践課題）の primary 色は何ですか？

オレンジ固定です（`#f97316`）。`html_assignment/styles.css` にハードコードされており、変更しません。

### Q: cheatsheet のヘッダー色を変えるには？

`<header>` タグに `.header-emerald` / `.header-violet` / `.header-orange` / `.header-rose` 等のモディファイアクラスを追加してください。

### Q: サイドバーが表示されない場合は？

1. `main.js` のパスが正しいか確認（配置場所に応じて相対パスを調整）
2. `sidebar-content.js` → `main.js` の順で読み込まれているか確認
3. ブラウザの開発者ツールでJavaScriptエラーを確認
4. `id="sidebar"` と `id="sidebar-toggle-btn"` が正しく設定されているか確認

---

## バージョン履歴

### v3.0.0 (2026-06-16)
- **Graphite × Iris クールデザイン導入**: v2 の全バリアントをクールデザインへアップデート
- グラファイトガラスヘッダー（両モード共通）
- 技術別 primary + シアン差し色システム
- カードシステム刷新（パステル塗り廃止 → ニュートラル面 + 色ヘアライン + グラデーションアイコンチップ）
- JetBrains Mono フォント追加（コードブロック・バッジ等）
- macOS 風コードウィンドウ（トラフィックドット付き）
- スプラッシュ `<template>` 追加
- CSS 変数（デザイントークン）を `:root` に集約、Tailwind 上書き方式に統一
- `styles.css` の `:root` に `{{PRIMARY_*}}` プレースホルダー導入（assignment はオレンジ固定）
- `html/` `html_tutorial/` `html_practice/` `html_assignment/` `html_cheatsheet/` `slide/` 全バリアント対応

### v2.7.0 (2025-12-11)
- チートシートテンプレート追加（`html_cheatsheet/`）

### v2.6.0 (2025-12-10)
- スライド教材テンプレート追加（`slide/`）

### v2.5.0 (2025-11-30)
- フォルダ構成変更: `html/`（guide）と `html_tutorial/`（tutorial）に分離
- サイドバートグル機能追加

### v2.4.0 (2025-01-27)
- サイドバーJavaScript外出し対応（`sidebar-content.js`）

### v2.0.0
- 初版リリース（Tailwind CSS ベース）
