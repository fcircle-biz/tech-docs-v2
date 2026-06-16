# Tailwind CSS スタイルガイド v2

## 概要

このガイドでは、Tailwind CSSの使用方法とカスタムクラスの定義について説明します。

## Tailwind CSS CDN 設定

```html
<script src="https://cdn.tailwindcss.com"></script>
<script>
    tailwind.config = {
        theme: {
            extend: {
                colors: {
                    // 技術固有の primary カラーを定義
                    primary: {
                        50: '#eff6ff',
                        100: '#dbeafe',
                        200: '#bfdbfe',
                        300: '#93c5fd',
                        400: '#60a5fa',
                        500: '#3b82f6',
                        600: '#2563eb',
                        700: '#1d4ed8',
                        800: '#1e40af',
                        900: '#1e3a8a',
                    }
                },
                fontFamily: {
                    sans: ['"Noto Sans JP"', 'sans-serif'],
                }
            }
        }
    }
</script>
```

## 必須カスタムスタイル

以下のスタイルは `<style>` タグ内に追加してください：

```css
/* スクロールバーカスタマイズ */
::-webkit-scrollbar { width: 8px; height: 8px; }
::-webkit-scrollbar-track { background: #f1f5f9; }
::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }
::-webkit-scrollbar-thumb:hover { background: #94a3b8; }

/* スムーズスクロール */
html { scroll-behavior: smooth; }

/* サイドバートランジション */
.sidebar-transition {
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out, width 0.15s ease-out;
}

/* サイドバーリサイズ機能 */
.sidebar-resizable {
    min-width: 240px;
    max-width: 480px;
}
.sidebar-resize-handle {
    position: absolute;
    top: 0;
    right: 0;
    width: 6px;
    height: 100%;
    cursor: ew-resize;
    background: transparent;
    transition: background 0.2s;
    z-index: 10;
}
.sidebar-resize-handle:hover,
.sidebar-resize-handle.resizing {
    background: linear-gradient(to right, transparent, rgba(var(--primary-rgb, 59, 130, 246), 0.3));
}

/* コードコピーボタン */
.code-block-wrapper { position: relative; }
.copy-btn {
    position: absolute;
    top: 8px;
    right: 8px;
    opacity: 0;
    transition: opacity 0.2s;
}
.code-block-wrapper:hover .copy-btn { opacity: 1; }

/* チェックリスト用（チュートリアル） */
.checkbox-item input:checked + span {
    text-decoration: line-through;
    color: #64748b;
}
```

## 基本レイアウトクラス

### ボディ
```html
<body class="font-sans bg-slate-50 text-slate-800 antialiased">
```

### ヘッダー（ナビゲーションバー）
```html
<header class="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600 text-white shadow-lg">
    <nav class="w-full px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
            <!-- 内容 -->
        </div>
    </nav>
</header>
```

### サイドバー
```html
<!-- デスクトップ: sticky表示, モバイル: スライドイン, リサイズ可能 -->
<aside id="sidebar" class="fixed md:sticky top-16 left-0 z-40 w-80 h-[calc(100vh-4rem)]
              bg-white border-r border-slate-200 overflow-y-auto flex-shrink-0
              transform -translate-x-full md:translate-x-0 sidebar-transition sidebar-resizable">
    <!-- リサイズハンドル -->
    <div id="sidebar-resize-handle" class="sidebar-resize-handle hidden md:block"></div>
    <!-- サイドバー内容 -->
</aside>
```

### サイドバーリサイズ用JavaScript
```javascript
// サイドバーリサイズ機能
const sidebar = document.getElementById('sidebar');
const resizeHandle = document.getElementById('sidebar-resize-handle');
let isResizing = false;
let startX, startWidth;

resizeHandle?.addEventListener('mousedown', (e) => {
    isResizing = true;
    startX = e.clientX;
    startWidth = sidebar.offsetWidth;
    resizeHandle.classList.add('resizing');
    document.body.style.cursor = 'ew-resize';
    document.body.style.userSelect = 'none';
});

document.addEventListener('mousemove', (e) => {
    if (!isResizing) return;
    const diff = e.clientX - startX;
    const newWidth = Math.min(Math.max(startWidth + diff, 240), 480);
    sidebar.style.width = newWidth + 'px';
});

document.addEventListener('mouseup', () => {
    if (isResizing) {
        isResizing = false;
        resizeHandle.classList.remove('resizing');
        document.body.style.cursor = '';
        document.body.style.userSelect = '';
        // サイドバー幅をローカルストレージに保存
        localStorage.setItem('sidebarWidth', sidebar.offsetWidth);
    }
});

// ページ読み込み時にサイドバー幅を復元
const savedWidth = localStorage.getItem('sidebarWidth');
if (savedWidth && window.innerWidth >= 768) {
    sidebar.style.width = savedWidth + 'px';
}
```

### メインコンテンツ
```html
<main class="flex-1 min-w-0">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-6">
        <!-- 内容 -->
    </div>
</main>
```

### フッター
```html
<footer class="bg-slate-800 text-slate-300">
    <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <!-- 内容 -->
    </div>
</footer>
```

## コンテンツボックスクラス

### 学習目標 / 目的カード（黄色系）
```html
<div class="bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-xl p-5">
    <div class="flex items-start gap-4">
        <div class="flex-shrink-0 w-10 h-10 bg-amber-400 rounded-lg flex items-center justify-center">
            <i class="fas fa-lightbulb text-white"></i>
        </div>
        <div>
            <h2 class="text-lg font-semibold text-amber-800 mb-3">[タイトル]</h2>
            <ul class="space-y-2">
                <li class="flex items-start gap-2 text-amber-900">
                    <i class="fas fa-check-circle text-amber-500 mt-1 flex-shrink-0"></i>
                    <span>[項目]</span>
                </li>
            </ul>
        </div>
    </div>
</div>
```

### 実習カード（紫系）
```html
<div class="bg-gradient-to-r from-purple-50 to-fuchsia-50 border border-purple-200 rounded-xl p-5">
    <div class="flex items-start gap-4">
        <div class="flex-shrink-0 w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
            <i class="fas fa-code text-white"></i>
        </div>
        <div class="flex-1">
            <h3 class="text-lg font-semibold text-purple-800 mb-3">[タイトル]</h3>
            <!-- 内容 -->
        </div>
    </div>
</div>
```

### クイズ / 確認カード（青系）
```html
<div class="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-5">
    <div class="flex items-start gap-4">
        <div class="flex-shrink-0 w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
            <i class="fas fa-question text-white"></i>
        </div>
        <div class="flex-1">
            <h3 class="text-lg font-semibold text-blue-800 mb-4">[タイトル]</h3>
            <!-- 内容 -->
        </div>
    </div>
</div>
```

### 動作確認カード（緑系）
```html
<div class="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl p-5">
    <div class="flex items-start gap-4">
        <div class="flex-shrink-0 w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
            <i class="fas fa-play text-white"></i>
        </div>
        <div class="flex-1">
            <!-- 内容 -->
        </div>
    </div>
</div>
```

### 警告カード（赤系）
```html
<div class="bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 rounded-xl p-5">
    <div class="flex items-start gap-4">
        <div class="flex-shrink-0 w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
            <i class="fas fa-exclamation-triangle text-white"></i>
        </div>
        <div>
            <h3 class="text-lg font-semibold text-red-800 mb-2">注意</h3>
            <p class="text-red-900">[警告内容]</p>
        </div>
    </div>
</div>
```

### ヒントカード（緑系）
```html
<div class="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl p-5">
    <div class="flex items-start gap-4">
        <div class="flex-shrink-0 w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
            <i class="fas fa-lightbulb text-white"></i>
        </div>
        <div>
            <h3 class="text-lg font-semibold text-emerald-800 mb-2">ヒント</h3>
            <p class="text-emerald-900">[ヒント内容]</p>
        </div>
    </div>
</div>
```

### 補足情報カード（青系）
```html
<div class="bg-blue-50 border border-blue-200 rounded-xl p-5">
    <div class="flex items-start gap-3">
        <i class="fas fa-info-circle text-blue-500 text-lg mt-0.5"></i>
        <div>
            <h3 class="font-semibold text-blue-800 mb-2">[タイトル]</h3>
            <p class="text-blue-900 text-sm">[内容]</p>
        </div>
    </div>
</div>
```

### トラブルシューティングカード（オレンジ系）
```html
<div class="bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 rounded-xl overflow-hidden">
    <div class="bg-orange-100 px-6 py-3 border-b border-orange-200">
        <h3 class="font-semibold text-orange-800 flex items-center gap-2">
            <i class="fas fa-tools"></i>
            トラブルシューティング
        </h3>
    </div>
    <div class="p-6">
        <!-- 内容 -->
    </div>
</div>
```

## セクションタイトル

### 章タイトル（h1）
```html
<h1 class="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">[章タイトル]</h1>
```

### セクションタイトル（h2）
```html
<h2 class="flex items-center gap-3 text-xl font-semibold text-slate-800
           border-l-4 border-primary-500 pl-4 mb-4">
    X.1 [セクションタイトル]
</h2>
```

### サブセクションタイトル（h3）
```html
<h3 class="text-lg font-semibold text-slate-700 mb-3">[サブセクションタイトル]</h3>
```

## コードブロック

### ファイル名付きコードブロック
```html
<div class="code-block-wrapper">
    <div class="flex items-center justify-between bg-slate-800 px-4 py-2 rounded-t-lg">
        <span class="text-slate-400 text-sm">[ファイル名]</span>
        <button class="copy-btn text-slate-400 hover:text-white" onclick="copyCode(this)">
            <i class="fas fa-copy"></i>
        </button>
    </div>
    <pre class="!mt-0 !rounded-t-none"><code class="language-[言語]">[コード]</code></pre>
</div>
```

### シンプルなコードブロック
```html
<pre class="bg-slate-800 text-slate-100 rounded-lg p-4 text-sm overflow-x-auto"><code>[コード]</code></pre>
```

## ナビゲーション

### パンくずリスト
```html
<nav class="flex items-center gap-2 text-sm text-slate-500 mb-6">
    <a href="#" class="hover:text-primary-600 transition-colors">ホーム</a>
    <i class="fas fa-chevron-right text-xs"></i>
    <a href="#" class="hover:text-primary-600 transition-colors">[技術名]</a>
    <i class="fas fa-chevron-right text-xs"></i>
    <span class="text-slate-700">[現在のページ]</span>
</nav>
```

### 章間ナビゲーション
```html
<nav class="flex items-center justify-between pt-6 mt-6 border-t border-slate-200">
    <!-- 前へ -->
    <a href="[前ページ].html"
       class="group flex items-center gap-3 px-4 py-3 rounded-xl
              bg-slate-100 hover:bg-slate-200 transition-colors">
        <i class="fas fa-arrow-left text-slate-400 group-hover:text-slate-600
                  transition-transform group-hover:-translate-x-1"></i>
        <div>
            <span class="text-xs text-slate-500 block">前の章</span>
            <span class="text-slate-700 font-medium">[前ページタイトル]</span>
        </div>
    </a>
    <!-- 次へ -->
    <a href="[次ページ].html"
       class="group flex items-center gap-3 px-4 py-3 rounded-xl
              bg-primary-500 hover:bg-primary-600 text-white transition-colors">
        <div class="text-right">
            <span class="text-xs text-primary-100 block">次の章</span>
            <span class="font-medium">[次ページタイトル]</span>
        </div>
        <i class="fas fa-arrow-right transition-transform group-hover:translate-x-1"></i>
    </a>
</nav>
```

## 進捗インジケーター

### プログレスバー
```html
<div class="mb-6 p-4 bg-primary-50 rounded-xl">
    <div class="flex items-center justify-between mb-2">
        <span class="text-sm font-medium text-primary-700">学習進捗</span>
        <span class="text-sm text-primary-600">3/10章</span>
    </div>
    <div class="w-full bg-primary-100 rounded-full h-2">
        <div class="bg-primary-500 h-2 rounded-full transition-all duration-300" style="width: 30%"></div>
    </div>
</div>
```

## サイドバーリストアイテム

### アクティブな項目
```html
<a href="#" class="flex items-center gap-3 px-3 py-2.5 rounded-lg
                   bg-primary-100 text-primary-700 font-medium">
    <span class="flex-shrink-0 w-6 h-6 flex items-center justify-center
                 bg-primary-500 text-white text-xs rounded-full">1</span>
    <span class="truncate">[タイトル]</span>
</a>
```

### 通常の項目
```html
<a href="#" class="flex items-center gap-3 px-3 py-2.5 rounded-lg
                   text-slate-600 hover:bg-slate-100 transition-colors">
    <span class="flex-shrink-0 w-6 h-6 flex items-center justify-center
                 bg-slate-200 text-slate-600 text-xs rounded-full">2</span>
    <span class="truncate">[タイトル]</span>
</a>
```

### 完了済みの項目
```html
<a href="#" class="flex items-center gap-3 px-3 py-2.5 rounded-lg
                   text-slate-600 hover:bg-slate-100 transition-colors">
    <span class="flex-shrink-0 w-6 h-6 flex items-center justify-center
                 bg-emerald-500 text-white text-xs rounded-full">
        <i class="fas fa-check text-[10px]"></i>
    </span>
    <span class="truncate">[タイトル]（完了）</span>
</a>
```

## ボタン

### プライマリボタン
```html
<button class="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white
               rounded-lg font-medium transition-colors">
    ボタンテキスト
</button>
```

### セカンダリボタン
```html
<button class="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700
               rounded-lg font-medium transition-colors">
    ボタンテキスト
</button>
```

### アウトラインボタン
```html
<button class="px-4 py-2 border border-primary-500 text-primary-600
               hover:bg-primary-50 rounded-lg font-medium transition-colors">
    ボタンテキスト
</button>
```

## テキスト視認性ルール（重要）

カード内部のテキストが見えにくくならないよう、以下のルールを必ず守ってください。

### 禁止事項

1. **半透明背景の使用禁止**: `bg-white/70`、`bg-white/60`、`bg-white/50` などの半透明白背景は使用しない
   - ダークモードやグラデーション背景と組み合わせるとテキストが読めなくなる

2. **薄い色のテキストの使用禁止**: カード内で `text-[color]-600` より薄い色をテキストに使用しない
   - 例: `text-slate-400`、`text-gray-300` は禁止

### 推奨パターン

カード内に内部ボックスを配置する場合は、親カードと同系色の不透明な背景色を使用：

| 親カードの色系 | 内部ボックスの背景 | テキスト色 |
|--------------|------------------|----------|
| 紫系 (`from-purple-50`) | `bg-purple-100` | `text-purple-900` |
| 青系 (`from-blue-50`) | `bg-blue-100` | `text-blue-900` |
| 緑系 (`from-emerald-50`) | `bg-emerald-100` | `text-emerald-900` |
| オレンジ系 (`from-orange-50`) | `bg-orange-100` | `text-orange-900` |
| 黄色系 (`from-amber-50`) | `bg-amber-100` | `text-amber-900` |

### 実習カード内のステップボックス例

```html
<!-- 正しい例 -->
<div class="bg-purple-100 rounded-lg p-4 mb-4">
    <h4 class="font-semibold text-purple-900 mb-2">ステップ1: タイトル</h4>
    <p class="text-purple-800">説明文...</p>
</div>

<!-- 間違った例（使用禁止） -->
<div class="bg-white/70 rounded-lg p-4 mb-4">
    <h4 class="font-semibold text-purple-800 mb-2">ステップ1: タイトル</h4>
    <p class="text-purple-700">説明文...</p>
</div>
```

## レスポンシブユーティリティ

Tailwind CSSの標準ブレークポイント：

| プレフィックス | 最小幅 |
|--------------|-------|
| `sm:` | 640px |
| `md:` | 768px |
| `lg:` | 1024px |
| `xl:` | 1280px |
| `2xl:` | 1536px |

### 使用例
```html
<!-- モバイル: hidden, タブレット以上: 表示 -->
<div class="hidden md:block">...</div>

<!-- モバイル: px-4, タブレット: px-6, デスクトップ: px-8 -->
<div class="px-4 sm:px-6 lg:px-8">...</div>

<!-- モバイル: 1列, タブレット: 2列, デスクトップ: 3列 -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">...</div>
```

