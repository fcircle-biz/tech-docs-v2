# コンポーネント＆オレンジテーマ

実践課題HTMLで使うカードコンポーネントと、オレンジ系（primary）のカラー設定をまとめたもの。
カラー方針の全体は `templates/v3/reference/color-themes.md`、Tailwindスタイルガイドは `templates/v3/reference/css-styles.md`、HTML部品の現物は `templates/v3/snippets/components.html` を参照（丸写しせず参照する）。

---

## オレンジテーマ（実践課題の primary）

実践課題はオレンジ系で統一する。チュートリアル（緑）・学習ガイド（技術別）とは別色。

### styles.css の CSS変数（必須値）

```css
--primary-400: #fb923c;
--primary-500: #f97316;
--primary-700: #c2410c;
--primary-rgb: 249, 115, 22;
```

> `templates/v3/html_assignment/styles.css` は最初からこのオレンジ値が入っている場合がある。コピー後に `{{PRIMARY_300}}` `{{PRIMARY_400}}` `{{PRIMARY_500}}` `{{PRIMARY_600}}` `{{PRIMARY_700}}` `{{PRIMARY_RGB}}` が残っていないか確認し、残っていれば上記へ置換する（未置換は CSS 破損）。

### Tailwind config（primary スケール全段階）

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#fff7ed',
                    100: '#ffedd5',
                    200: '#fed7aa',
                    300: '#fdba74',
                    400: '#fb923c',
                    500: '#f97316',
                    600: '#ea580c',
                    700: '#c2410c',
                    800: '#9a3412',
                    900: '#7c2d12',
                }
            }
        }
    }
}
```

---

## ヘッダー（実践課題仕様）

- タイトル: `[課題名] 実践課題`
- バッジ: `実践課題`（アイコン `fas fa-tasks`）
- 推奨時間: 全ステップの**合計時間**を全ステップ共通で表示（README.md「推奨所要時間」表の「合計」行）。

```html
<span class="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 bg-white/20 rounded-md text-[10px] font-semibold uppercase tracking-wider">
    <i class="fas fa-tasks text-yellow-300 text-[8px]"></i>
    実践課題
</span>
```

> 注: `bg-white/20` はヘッダーバッジ自体の装飾でテンプレート標準。本文カード内では半透明背景（`bg-white/70` 等）を使わないこと（`global-rules.md`「5.」）。
> ダークモードボタンは `main.js` が動的生成するため手書きしない。ヘッダー構造は変更しない。

---

## 実践課題で使う主要カードコンポーネント

詳細・全バリエーションは `templates/v3/snippets/components.html` を参照。代表は以下。

| コンポーネント | 用途 | スタイル |
|--------------|------|---------|
| 実装目標カード | ステップ冒頭の「このステップで実装すること」 | `bg-gradient-to-r from-amber-50 to-yellow-50` |
| 設計資料リンク | 参照すべき設計書（PDF）の明示 | `bg-slate-50 border border-slate-200` |
| モック画面プレビュー | 完成イメージの iframe 表示 | `bg-white rounded-xl shadow-lg` |
| 実装ヒントカード | 考え方・アプローチのアドバイス（コードなし） | `bg-amber-50 border-l-4 border-amber-500` |
| 情報ヒントカード | 補足情報 | `bg-blue-50 border-l-4 border-blue-500` |
| 完了チェックリスト | 動作確認項目 | `bg-gradient-to-r from-blue-50 to-indigo-50` |

### セクション見出し（オレンジのボーダー）

```html
<h2 class="flex items-center gap-3 text-xl font-semibold text-slate-800
           border-l-4 border-primary-500 pl-4 mb-6">
    セクションタイトル
</h2>
```

### 設計資料リンクカード（PDF・`./docs/` 参照）

```html
<div class="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-6">
    <h4 class="font-semibold text-slate-800 mb-3">
        <i class="fas fa-book text-primary-500 mr-2"></i>参照する設計資料
    </h4>
    <ul class="space-y-2 text-sm">
        <li><a href="docs/README.pdf" target="_blank" class="text-primary-600 hover:text-primary-700"><i class="fas fa-file-pdf mr-1"></i>システム仕様書（該当セクション）</a></li>
        <li><a href="docs/database.pdf" target="_blank" class="text-primary-600 hover:text-primary-700"><i class="fas fa-file-pdf mr-1"></i>データベース設計</a></li>
        <li><a href="docs/implementation-guide.pdf" target="_blank" class="text-primary-600 hover:text-primary-700"><i class="fas fa-file-pdf mr-1"></i>実装ガイド</a></li>
    </ul>
</div>
```

### モック画面プレビュー（単一）

```html
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
    <iframe src="docs/mockups/dashboard.html" class="w-full h-[500px] border-0" title="画面のモック"></iframe>
</div>
```

複数モックのタブ切り替えは `step3-step-html.md`「ステップ別のモック画面対応」を参照。

### 実装ヒントカード（コードなし）

```html
<div class="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6">
    <div class="flex items-start gap-3">
        <i class="fas fa-lightbulb text-amber-500 text-lg mt-0.5"></i>
        <div>
            <h4 class="font-semibold text-amber-800 mb-2">実装のヒント</h4>
            <ul class="text-amber-900 text-sm space-y-1">
                <li>• [実装方針のアドバイス]</li>
                <li>• [設計書の参照箇所]</li>
                <li>• [注意すべきポイント]</li>
            </ul>
        </div>
    </div>
</div>
```

---

## テキスト視認性（再掲・`global-rules.md`「5.」）

- 半透明背景（`bg-white/70` 等）は本文カードで使わない。
- 内側ボックスは親と同系色の `-100` 背景＋`-900` テキスト。

| 親カード | 内側ボックス背景 | テキスト色 |
|---------|----------------|-----------|
| Purple | `bg-purple-100` | `text-purple-900` |
| Blue | `bg-blue-100` | `text-blue-900` |
| Green | `bg-emerald-100` | `text-emerald-900` |
| Orange | `bg-orange-100` | `text-orange-900` |
