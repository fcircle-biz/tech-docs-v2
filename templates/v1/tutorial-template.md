# チュートリアルHTMLテンプレート構造

## 基本HTML構造（チュートリアル用）

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[技術名]チュートリアル ステップX - [ステップタイトル]</title>
    
    <!-- Bootstrap 5 CDN -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
    
    <!-- Google Fonts - Noto Sans JP -->
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap" rel="stylesheet">
    
    <!-- Highlight.js CDN -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-dark.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>
    
    <!-- Mermaid.js CDN -->
    <script src="https://cdn.jsdelivr.net/npm/mermaid@10.6.1/dist/mermaid.min.js"></script>
    
    <!-- カスタムCSS（templates/css-styles.mdを参照） -->
    <style>
        /* CSSスタイルはtemplates/css-styles.mdに定義されています */
    </style>
</head>
<body>
    <!-- ナビゲーションバー -->
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
        <div class="container-fluid">
            <a class="navbar-brand">
                <strong>[技術名]実践チュートリアル</strong>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
        </div>
    </nav>

    <div class="container-fluid">
        <div class="row">
            <!-- サイドバー -->
            <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block sidebar collapse">
                <div class="position-sticky pt-3">
                    <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                        <span>チュートリアルステップ</span>
                    </h6>
                    <ul class="nav flex-column">
                        <!-- ステップのリストをここに追加 -->
                        <li class="nav-item">
                            <a class="nav-link active" href="[ステップ1ファイル名].html">
                                ステップ1: [ステップ1タイトル]
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="[ステップ2ファイル名].html">
                                ステップ2: [ステップ2タイトル]
                            </a>
                        </li>
                        <!-- 必要に応じてステップを追加 -->
                    </ul>
                </div>
            </nav>

            <!-- メインコンテンツ -->
            <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <!-- ここにメインコンテンツ構造を配置 -->
            </main>
        </div>
    </div>
    
    <!-- フッター -->
    <footer class="bg-dark text-white mt-5">
        <div class="container-fluid py-3">
            <div class="row">
                <div class="col-12 text-center">
                    <p class="mb-0">© 2025 F-Circle. All rights reserved.<br>
本資料はAIツールを活用し、人間による編集・監修のもと作成されています。無断転載・再配布を禁じます。</p>
                </div>
            </div>
        </div>
    </footer>
    
    <!-- Bootstrap JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
    
    <!-- Highlight.js 初期化 -->
    <script>hljs.highlightAll();</script>
    
    <!-- Mermaid.js 初期化 -->
    <script>
        mermaid.initialize({
            startOnLoad: true,
            theme: 'default'
        });
    </script>
</body>
</html>
```

## チュートリアル専用メインコンテンツ構造

チュートリアルは実践的な手順を段階的に進める構造：

```html
<!-- ステップヘッダー -->
<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    <h1 class="h2">ステップX: [ステップタイトル]</h1>
</div>

<div id="stepX">
    <!-- ステップタイトル -->
    <h2 class="chapter-title">[実装内容の説明]</h2>
    
    <!-- このステップの目標（必須） -->
    <div class="highlight">
        <h5>このステップで実装すること</h5>
        <ul>
            <li>[実装項目1]</li>
            <li>[実装項目2]</li>
            <li>[実装項目3]</li>
        </ul>
    </div>

    <!-- 前提条件・準備（必要に応じて） -->
    <div class="alert alert-info">
        <h6>前提条件</h6>
        <ul>
            <li>[前提条件1]</li>
            <li>[前提条件2]</li>
        </ul>
    </div>

    <!-- セクション構成 -->
    <h3 class="section-title">X.1 [実装手順のセクション]</h3>
    <p>[手順の説明]</p>

    <!-- 実装手順（必須） -->
    <div class="exercise-container">
        <h5>実装 X-1: [具体的な実装タスク]</h5>
        <p>[実装の目的・概要]</p>
        
        <h6>手順</h6>
        <ol>
            <li><strong>[操作項目]</strong>: [詳細な手順説明]
                <pre class="code-block"><code class="language-[言語名]">[具体的なコード]</code></pre>
            </li>
            <li><strong>[操作項目]</strong>: [詳細な手順説明]
                <pre class="code-block"><code class="language-bash">[コマンド例]</code></pre>
            </li>
        </ol>
        
        <h6>動作確認</h6>
        <p>[確認方法の説明]</p>
        <pre class="code-block"><code class="language-bash">[確認コマンドまたは実行方法]</code></pre>
        
        <h6>期待される結果</h6>
        <div class="alert alert-success">
            <p>[成功時の出力例または動作]</p>
        </div>
        
        <h6>トラブルシューティング</h6>
        <div class="alert alert-warning">
            <p><strong>よくあるエラー:</strong> [エラー内容]</p>
            <p><strong>解決方法:</strong> [解決手順]</p>
        </div>
    </div>

    <!-- 追加の実装があれば繰り返し -->

    <!-- ステップ完了チェック（必須） -->
    <div class="quiz-container">
        <h5>ステップ完了チェック</h5>
        <p>以下の項目が完了していることを確認してください：</p>
        <ul class="list-unstyled">
            <li>☐ [チェック項目1]</li>
            <li>☐ [チェック項目2]</li>
            <li>☐ [チェック項目3]</li>
        </ul>
    </div>

    <!-- ファイル構成確認（必要に応じて） -->
    <div class="alert alert-light">
        <h6>現在のファイル構成</h6>
        <pre class="code-block"><code class="language-bash">[ディレクトリツリー表示]</code></pre>
    </div>

    <!-- ステップ間ナビゲーション（必須） -->
    <div class="d-flex justify-content-between mt-4">
        <a href="[前ステップファイル名].html" class="btn btn-secondary">← 前のステップ</a>
        <a href="[次ステップファイル名].html" class="btn btn-primary">次のステップ →</a>
    </div>
</div>
```

## チュートリアル特有の構成要素

### 1. 実装手順の詳細化
- 各手順は番号付きリストで明確に区別
- コマンドやコードは必ずcode blockで表示
- 手順ごとに期待される結果を明示

### 2. 動作確認セクション
```html
<h6>動作確認</h6>
<p>以下のコマンドを実行して正常に動作することを確認します：</p>
<pre class="code-block"><code class="language-bash">python manage.py runserver</code></pre>
<div class="alert alert-success">
    <p>✓ 開発サーバーが正常に起動し、ブラウザで確認できれば成功です</p>
</div>
```

### 3. トラブルシューティング
```html
<div class="alert alert-warning">
    <h6>⚠️ トラブルシューティング</h6>
    <p><strong>エラー:</strong> ModuleNotFoundError: No module named 'django'</p>
    <p><strong>解決策:</strong> 仮想環境がアクティブになっているか確認し、pip install djangoを再実行してください</p>
</div>
```

### 4. 進捗チェックリスト
```html
<div class="quiz-container">
    <h5>ステップ完了チェック</h5>
    <ul class="list-unstyled">
        <li>☐ Djangoプロジェクトが正常に作成された</li>
        <li>☐ 開発サーバーが正常に起動する</li>
        <li>☐ ブラウザでWelcomeページが表示される</li>
    </ul>
</div>
```

### 5. ファイル構成の表示
```html
<div class="alert alert-light">
    <h6>現在のプロジェクト構成</h6>
    <pre class="code-block"><code class="language-bash">myproject/
├── manage.py
├── myproject/
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
└── requirements.txt</code></pre>
</div>
```

## ナビゲーション＆サイドバー（チュートリアル用）

### サイドバーのカスタマイズ
各ステップのリンクをチュートリアルの流れに応じて追加：
```html
<li class="nav-item">
    <a class="nav-link" href="[ステップファイル名].html">
        ステップX: [ステップタイトル]
    </a>
</li>
```

### プログレスインジケーター（オプション）
```html
<div class="progress mb-3">
    <div class="progress-bar" role="progressbar" style="width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">
        ステップ 3/10
    </div>
</div>
```

## コードハイライトの使用（同様）
基本テンプレートと同じルールを適用：
- build.gradleファイル：`language-bash`
- application.propertiesファイル：`language-ini`
- Dockerfileファイル：`language-bash`
- HTMLコードは必ずエスケープ（`<` → `&lt;`, `>` → `&gt;`）

## Mermaid.js図表の活用例

### システム構成図
```html
<div class="mermaid">
    flowchart TD
        A["ブラウザ"] --> B["Django<br/>開発サーバー"]
        B --> C["URLconf<br/>(urls.py)"]
        C --> D["ビュー<br/>(views.py)"]
        D --> E["テンプレート<br/>(templates/)"]
        D --> F["モデル<br/>(models.py)"]
        F --> G["データベース"]
</div>
```

### 実装フロー
```html
<div class="mermaid">
    flowchart TD
        A["ステップ1:<br/>環境構築"] --> B["ステップ2:<br/>プロジェクト作成"]
        B --> C["ステップ3:<br/>アプリケーション作成"]
        C --> D["ステップ4:<br/>モデル定義"]
        D --> E["ステップ5:<br/>ビュー実装"]
        E --> F["完成"]
</div>
```