# スライド教材テンプレート

PDFスライド形式の学習教材を表示するためのHTMLテンプレートです。

## 特徴

- **PDFビューアー**: ブラウザ内でPDFを表示
- **スライドナビゲーション**: サイドバーからスライドを切り替え
- **キーボード操作**: 矢印キーでスライド移動、Fキーで全画面表示
- **ダークモード**: システム設定に連動 + 手動切り替え
- **レスポンシブ**: PC/タブレット/モバイル対応
- **進捗表示**: 学習進捗バー

## ファイル構成

```
slide/
├── index.html        # メインHTML（カスタマイズ必要）
├── styles.css        # CSS（ヘッダー色をカスタマイズ）
├── main.js           # 共通JavaScript（変更不要）
├── slide-content.js  # スライド定義（カスタマイズ必要）
└── README.md         # このファイル
```

## 使い方

### 1. テンプレートをコピー

```bash
# 新しいスライド教材フォルダを作成
mkdir -p docs/slide/[カテゴリ]/[サブカテゴリ]/[教材名]

# テンプレートファイルをコピー
cp templates/v2/slide/*.{html,css,js} docs/slide/[カテゴリ]/[サブカテゴリ]/[教材名]/

# PDFフォルダを作成
mkdir docs/slide/[カテゴリ]/[サブカテゴリ]/[教材名]/pdf
```

### 2. PDFファイルを配置

```
教材フォルダ/
├── index.html
├── styles.css
├── main.js
├── slide-content.js
└── pdf/
    ├── slide-01.pdf
    ├── slide-02.pdf
    └── ...
```

### 3. slide-content.js を編集

```javascript
const slides = [
    { number: 1, title: '第1章 概要', file: 'pdf/chapter-01.pdf' },
    { number: 2, title: '第2章 基本操作', file: 'pdf/chapter-02.pdf' },
    { number: 3, title: '第3章 応用', file: 'pdf/chapter-03.pdf' },
];
```

### 4. index.html を編集

以下の箇所をカスタマイズしてください（`【】`で囲まれた部分）：

#### タイトル設定
```html
<title>【タイトル】 スライド教材</title>
```

#### アイコン設定（Font Awesome）
```html
<i class="fas fa-file-alt text-3xl drop-shadow-lg"></i>
```
変更例:
- Excel: `fa-file-excel`
- Word: `fa-file-word`
- PowerPoint: `fa-file-powerpoint`
- Python: `fa-python`
- Database: `fa-database`

#### カテゴリ・レベル設定
```html
<span>【カテゴリ】</span>
<span>初級</span>  <!-- 初級/中級/上級 -->
```

#### パンくずリスト
```html
<a href="../../../">ホーム</a>
<a href="../../">【親カテゴリ】</a>
<span>【タイトル】</span>
```

### 5. styles.css を編集（オプション）

ヘッダーの色を変更する場合：

```css
:root {
    --header-color-dark: #15803d;   /* 暗い色 */
    --header-color-main: #22c55e;   /* メイン色 */
    --header-color-light: #4ade80;  /* 明るい色 */
    --header-shadow-rgb: 34, 197, 94; /* 影の色 */
}
```

カラーテーマ例：
| 技術 | dark | main | light | shadow-rgb |
|------|------|------|-------|------------|
| Excel (Green) | #15803d | #22c55e | #4ade80 | 34, 197, 94 |
| Word (Blue) | #1d4ed8 | #3b82f6 | #60a5fa | 59, 130, 246 |
| PowerPoint (Orange) | #c2410c | #ea580c | #fb923c | 234, 88, 12 |

### 6. index.html の Tailwind カラーを編集

`tailwind.config` の `primary` カラーを変更：

```javascript
primary: {
    50: '#f0fdf4',
    // ... 50〜900 の色を設定
}
```

参考: [Tailwind CSS Colors](https://tailwindcss.com/docs/customizing-colors)

## キーボードショートカット

| キー | 動作 |
|------|------|
| ← / ↑ | 前のスライド |
| → / ↓ | 次のスライド |
| F | 全画面表示切り替え |
| Esc | 全画面終了 |

## ブラウザ対応

- Chrome / Edge: 完全対応
- Firefox: 完全対応
- Safari: 完全対応（iOS含む）

※ PDFの表示はブラウザの内蔵PDFビューアーを使用します。
