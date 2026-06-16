# step2: 第1ステップHTML + 共通部品生成（土台作り）

チュートリアルフォルダの「土台作り」を担当する。本体（メイン会話ループ）が準備フェーズで直接実行する。1工程で以下を実施する。

1. 共通部品ファイル（JS/CSS）のコピーと設定
2. `sidebar-content.js` に全ステップ分の定義を設定
3. 第1ステップのHTMLファイルを生成

入力: 準備フェーズ1（`step1-readme.md`）で作成したREADME.mdのパス。

## 実行手順

### 1. README分析

README.md を読み込み、以下を抽出する。

- 技術名
- 全ステップのタイトル一覧
- 第1ステップの詳細情報（実装目標、内容）

### 2. 共通ファイルのコピーと設定

`templates/v3/html_tutorial/` から以下4ファイルを技術フォルダにコピーする。

- `styles.css` — 共通カスタムスタイル（**コピー後に修正が必要**）
- `main.js` — 共通機能
- `drawing-tool.js` — 描画ツール機能
- `sidebar-content.js` — サイドバー動的生成（後で編集）

#### styles.css のプレースホルダー置換（必須）

**テンプレートの `styles.css` にはプレースホルダー `{{PRIMARY_XXX}}` が含まれている。コピー後、必ず実際の値に置換すること。置換しないとCSSが壊れる。**

```css
/* テンプレートのプレースホルダー */
--primary-300: {{PRIMARY_300}};
--primary-400: {{PRIMARY_400}};
--primary-500: {{PRIMARY_500}};
--primary-600: {{PRIMARY_600}};
--primary-700: {{PRIMARY_700}};
--primary-rgb: {{PRIMARY_RGB}};

/* ↓ チュートリアルはEmerald推奨 */
--primary-300: #6ee7b7;
--primary-400: #34d399;
--primary-500: #10b981;
--primary-600: #059669;
--primary-700: #047857;
--primary-rgb: 16, 185, 129;
```

技術別カラーは tailwind.config の primary パレット(50-900) と styles.css :root の {{PRIMARY_*}} の **2箇所**に同じ技術カラーを設定する（値は templates/v3/reference/color-themes.md 参照）。テンプレHTMLには JetBrains Mono とスプラッシュ template が含まれ、ヘッダーは全技術共通のグラファイトガラス（識別色は primary→cyan のレールで表現）になる。

**技術別カラー設定一覧**（代表値の抜粋。網羅的な値は `templates/v3/reference/color-themes.md` を参照）:

| 技術 | {{PRIMARY_300}} | {{PRIMARY_400}} | {{PRIMARY_500}} | {{PRIMARY_600}} | {{PRIMARY_700}} | {{PRIMARY_RGB}} |
|------|-----------------|-----------------|-----------------|-----------------|-----------------|-----------------|
| **チュートリアル推奨 (emerald)** | `#6ee7b7` | `#34d399` | `#10b981` | `#059669` | `#047857` | `16, 185, 129` |
| Python/PostgreSQL (blue) | `#93c5fd` | `#60a5fa` | `#3b82f6` | `#2563eb` | `#1d4ed8` | `59, 130, 246` |
| Java/AWS (orange) | `#fdba74` | `#fb923c` | `#f97316` | `#ea580c` | `#c2410c` | `249, 115, 22` |
| SQL/Docker (sky) | `#7dd3fc` | `#38bdf8` | `#0ea5e9` | `#0284c7` | `#0369a1` | `14, 165, 233` |

### 3. sidebar-content.jsの編集

README.md の全ステップ情報から `projectInfo` と `steps` 配列を生成して編集する。

```javascript
const projectInfo = {
    title: 'ユーザー管理システム',
    description: 'Djangoで実装するCRUD機能付きWebアプリケーション'
};

const steps = [
    { number: 1, title: 'ステップ1', subtitle: '環境構築', file: 'django-tutorial-01.html' },
    { number: 2, title: 'ステップ2', subtitle: 'プロジェクト作成', file: 'django-tutorial-02.html' },
    // ... 全ステップ分を定義
];
```

- `file` には実際のファイル名（`[技術名]-tutorial-[NN].html`）を2桁ゼロパディングで指定する。
- `subtitle` は各ステップの内容を端的に表す短い語句にする。

### 4. 第1ステップのHTML生成

`templates/v3/html_tutorial/tutorial-template.html` をベースに第1ステップを生成する。

#### テンプレート編集箇所

テンプレート内の `<!-- TODO: ... -->` コメントを検索して編集する。主な編集箇所:

- **技術名・タイトル**: `<title>`、ヘッダー技術名、カテゴリ表示などのプレースホルダーを実際の値に置換。
- **アイコン**: 適切なFont Awesomeアイコン（例: `fab fa-python`, `fab fa-java`）。
- **カラーテーマ**: `tailwind.config` 内の `primary` カラー（`color-themes.md` 参照、チュートリアルはEmerald推奨）。
- **所要時間**: ヘッダーには全ステップの合計時間、ステップヘッダーには当該ステップの所要時間。
- **コンテンツ**: 実装目標、実装手順、コード例、動作確認、トラブルシューティング、完了チェックリスト、前/次ステップナビゲーション、ファイル構成。

#### スクリプト読み込み順序（重要）

HTMLファイルでは以下の順序を守る。

```html
<link rel="stylesheet" href="styles.css">
<script src="sidebar-content.js"></script>
<script src="main.js"></script>
<script src="drawing-tool.js"></script>
```

#### ヘッダーの注意

- ダークモードボタンをHTMLに手書きしない（`main.js` が動的生成する）。
- ヘッダー構造（`header-rich` 等のクラス名・構造）を変えない。

### 5. 完了

生成したファイル一覧を控え、本体は生成フェーズ（第2〜最終ステップの並列ファンアウト）へ進む。

## HTML生成ルール

### テンプレート・参照ファイル

- **ベーステンプレート**: `templates/v3/html_tutorial/tutorial-template.html`

### 参照ドキュメント（必ず参照）

- コンポーネント: `templates/v3/snippets/components.html`
- カラーテーマ: `templates/v3/reference/color-themes.md`
- CSSスタイル: `templates/v3/reference/css-styles.md`
- Mermaid図表パターン: `templates/v3/reference/mermaid-patterns.md`

### コンテンツ要素（components.html参照）

カードの種別・スタイルおよびテキスト視認性ルールは `components-and-colors.md` に集約。代表例:

- 実装目標カード: `bg-gradient-to-r from-amber-50 to-yellow-50`
- セクションタイトル: `border-l-4 border-primary-500 pl-4`
- 実装手順カード: `bg-gradient-to-r from-purple-50 to-fuchsia-50`
- 動作確認カード: `bg-gradient-to-r from-emerald-50 to-teal-50`
- トラブルシューティング: `bg-gradient-to-r from-orange-50 to-amber-50`
- 完了チェックリスト: `bg-gradient-to-r from-blue-50 to-indigo-50`

### コード・図表

- **コードブロック**: `.code-block-wrapper` でラップし、ファイル名表示＋コピーボタンを付ける。
- **コード方針**: 実装重視、実行可能なサンプル、日本語コメント必須。
- **図表**: Mermaid.js使用、デフォルトテーマ（darkテーマ禁止）。記法ルールは `mermaid-rules.md` を参照（CLAUDE.md方式に統一）。

## 生成後のファイル構成例

```bash
docs/tutorial/programming-languages/python-ecosystem/django/
├── sidebar-content.js      # 全ステップ分の定義を含む
├── styles.css              # テンプレートからコピー（カラー置換済み）
├── main.js                 # テンプレートからコピー
├── drawing-tool.js         # テンプレートからコピー
└── django-tutorial-01.html # 第1ステップ
```

## 実践チュートリアル重点事項

- ステップバイステップの実装手順
- 実行可能なコード例
- 各ステップでの成果物確認
- トラブルシューティング情報
- 完了チェックリスト

## 生成物

1. `styles.css`（カラー置換済み）
2. `main.js`
3. `drawing-tool.js`
4. `sidebar-content.js`（全ステップ定義済み）
5. `[技術名]-tutorial-01.html`（第1ステップ）

第2ステップ以降は生成フェーズで並列生成する（`step3-chapter.md` を参照）。
