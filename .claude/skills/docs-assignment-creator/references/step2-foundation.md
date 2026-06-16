# Step2: 土台作成（共通部品コピー＋オレンジ設定＋sidebar全定義＋Step1 HTML）

このフェーズは課題フォルダの「土台作り」を担当する。共通部品を整備し、全ステップ分のサイドバー定義を行い、第1ステップ（01）のHTMLを生成する。**ここで生成する 01 HTML が、Phase 3 の並列生成における構造ベースになる。**

共通ルールは `global-rules.md` を参照（カラー値・ヘッダー禁止事項・スクリプト読込順・コード提供禁止 等）。
カード等の HTML 部品・カラー・CSS変数の詳細は `components-and-theme.md` を参照。

---

## 実行手順

### 1. README分析

`docs/assignment/[課題名]/README.md` を読み込み、以下を抽出:
- 課題名
- 全ステップのタイトル一覧
- Step1 の詳細情報（実装内容、参照資料、完了条件）
- 元の仕様書フォルダパス（mockups のコピー元情報。通常 docs/ は Step1 でコピー済み）

### 2. 共通ファイルのコピーと設定

`templates/v3/html_assignment/` から以下4ファイルを課題フォルダ（`docs/assignment/[課題名]/`）にコピー:
- `styles.css` - 共通カスタムスタイル（**コピー後に色を確認・修正**）
- `main.js` - 共通機能
- `drawing-tool.js` - 描画ツール機能
- `sidebar-content.js` - サイドバー動的生成（後で編集）

#### styles.css のカラー（必須確認）

実践課題はオレンジ系の配色を使用する:

```css
/* 実践課題用カラー (orange) */
--primary-400: #fb923c;
--primary-500: #f97316;
--primary-700: #c2410c;
--primary-rgb: 249, 115, 22;
```

- `templates/v3/html_assignment/styles.css` は最初からオレンジ系の実値が設定済みの場合がある。コピー後に `{{PRIMARY_300}}` `{{PRIMARY_400}}` `{{PRIMARY_500}}` `{{PRIMARY_600}}` `{{PRIMARY_700}}` `{{PRIMARY_RGB}}` のプレースホルダーが残っていないか必ず確認し、残っていれば上記オレンジ値へ置換する（未置換は CSS 破損の原因）。

### 3. sidebar-content.js の編集

テンプレートの `steps` 配列を編集し、全ステップを定義する:

```javascript
const steps = [
    { number: 1, title: '環境構築', file: 'order-management-v1-assignment-01.html' },
    { number: 2, title: '顧客管理機能', file: 'order-management-v1-assignment-02.html' },
    // ... 全ステップ分を定義（README.md の構成に合わせる）
];
```

**注意**: `title` には「Step X:」を含めず、**機能名のみ**を記載する（例: 「顧客管理機能」「ダッシュボード」）。
`projectInfo.title` には課題名を設定する。

### 4. Step1 のHTML生成

実践課題用のHTML構成で生成する。チュートリアルと異なり、以下の必須5セクションを含む。

#### 必須セクション（5つ）

1. **ステップ概要** - このステップで実装する機能
2. **設計資料へのリンク** - 参照すべき仕様書セクション（PDFリンク）
3. **モック画面プレビュー** - iframe で表示
4. **実装ヒント** - つまずきやすいポイント（**コードは書かない**）
5. **完了チェックリスト** - 動作確認項目

#### 設計資料へのリンク（PDF・`./docs/` 参照）

```html
<a href="docs/README.pdf" target="_blank">システム仕様書</a>
<a href="docs/database.pdf" target="_blank">データベース設計</a>
<a href="docs/implementation-guide.pdf" target="_blank">実装ガイド</a>
```

#### モック画面の iframe 表示（`docs/mockups/` 参照）

```html
<section class="mb-10">
    <h2 class="flex items-center gap-3 text-xl font-semibold text-slate-800
               border-l-4 border-primary-500 pl-4 mb-6">
        完成イメージ（モック画面）
    </h2>
    <div class="bg-white rounded-xl shadow-lg overflow-hidden">
        <div class="bg-slate-100 px-4 py-2 border-b flex items-center gap-2">
            <div class="flex gap-1.5">
                <div class="w-3 h-3 rounded-full bg-red-400"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div class="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <span class="text-sm text-slate-500 ml-2">docs/mockups/dashboard.html</span>
            <a href="docs/mockups/dashboard.html" target="_blank"
               class="ml-auto text-sm text-primary-600 hover:text-primary-700">
                <i class="fas fa-external-link-alt mr-1"></i>別タブで開く
            </a>
        </div>
        <iframe src="docs/mockups/dashboard.html"
                class="w-full h-[500px] border-0"
                title="ダッシュボード画面のモック"></iframe>
    </div>
</section>
```

#### 実装ヒントカード（コードなし）

```html
<div class="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6">
    <div class="flex items-start gap-3">
        <i class="fas fa-lightbulb text-amber-500 text-lg mt-0.5"></i>
        <div>
            <h4 class="font-semibold text-amber-800 mb-2">実装のヒント</h4>
            <ul class="text-amber-900 text-sm space-y-1">
                <li>• [ヒント1: 実装方針のアドバイス]</li>
                <li>• [ヒント2: 設計書の参照箇所]</li>
                <li>• [ヒント3: 注意すべきポイント]</li>
            </ul>
        </div>
    </div>
</div>
```

---

## HTML生成ルール

### テンプレート・参照ファイル

- ベーステンプレート: `templates/v3/html_assignment/assignment-template.html`（「実践課題」向けにカスタマイズ）
- 参照ドキュメント:
  - `templates/v3/snippets/components.html`（カードコンポーネント）
  - `templates/v3/reference/color-themes.md`（カラー）
  - `templates/v3/reference/css-styles.md`（Tailwindスタイル）

### ヘッダーカスタマイズ（実践課題仕様）

- タイトル: `[課題名] 実践課題`
- バッジ: `実践課題`（チュートリアルの「ハンズオン」の代わり）
- アイコン: `fas fa-tasks`（または技術に合わせたアイコン）
- **推奨時間**: README.md の「推奨所要時間」表の「合計」行を参照し、**全ステップの合計時間**を表示する（全ステップ共通）。
  - 例: 合計が「約110〜170時間」の場合 → `推奨 約110〜170時間`

バッジの例:
```html
<span class="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 bg-white/20 rounded-md text-[10px] font-semibold uppercase tracking-wider">
    <i class="fas fa-tasks text-yellow-300 text-[8px]"></i>
    実践課題
</span>
```

### Tailwind config（オレンジ系・全段階）

`global-rules.md`「6.」または `components-and-theme.md` の primary スケール（50〜900）を `tailwind.config` に設定する。

### スクリプト読込順

`styles.css` → `sidebar-content.js` → `main.js` → `drawing-tool.js`。

### 禁止事項（重要）

1. **コードの提供禁止**: 実践課題はヒントのみ。実装コードは書かない。
2. **ダークモードボタンの追加禁止**: `main.js` が動的生成する。
3. **ヘッダー構造の変更禁止**: テンプレートの構造を維持する。

---

## 生成後のファイル構成例

```
docs/assignment/order-management-v1/
├── sidebar-content.js      # 全ステップ分の定義を含む
├── styles.css              # テンプレートからコピー（オレンジ確認済み）
├── main.js                 # テンプレートからコピー
├── drawing-tool.js         # テンプレートからコピー
├── docs/                   # 設計資料（Step1でコピー済み）
│   ├── README.md / README.pdf
│   ├── database.md / database.pdf
│   ├── implementation-guide.md / implementation-guide.pdf
│   └── mockups/（index.html, dashboard.html, customers.html, ...）
├── README.md               # Step1で作成済み
└── order-management-v1-assignment-01.html  # Step1
```

---

## 実践課題特有の重点事項

- **自己解決を促す**: コードは書かず、考え方やアプローチを示す。
- **設計書への誘導**: 常に仕様書の参照箇所を明示する。
- **モック画面の活用**: iframe で完成イメージを見せる。
- **チェックリスト重視**: 完了条件を明確にする。

---

## このフェーズの成果物

1. `styles.css`（カラー設定済み）
2. `main.js`
3. `drawing-tool.js`
4. `sidebar-content.js`（全ステップ定義済み・title は機能名のみ）
5. `[課題名]-assignment-01.html`（Step1・必須5セクション）

**Step2 以降の HTML は Phase 3 の並列生成（step3-step-html.md）で作成する。**
