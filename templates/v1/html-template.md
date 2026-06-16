# HTMLテンプレート構造

## 基本HTML構造

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[技術名]学習教材 第X章 - [章タイトル]</title>
    
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
                <strong>[技術名]学習教材</strong>
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
                        <span>学習章</span>
                    </h6>
                    <ul class="nav flex-column">
                        <!-- 章のリストをここに追加 -->
                        <li class="nav-item">
                            <a class="nav-link active" href="[章1ファイル名].html">
                                第1章: [章1タイトル]
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="[章2ファイル名].html">
                                第2章: [章2タイトル]
                            </a>
                        </li>
                        <!-- 必要に応じて章を追加 -->
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

## ナビゲーション＆サイドバー構造

上記の基本HTML構造では、ナビゲーションバーとサイドバーが汎用的なテンプレート形式で含まれています。

### ナビゲーションバーのカスタマイズ
- `[技術名]学習教材`: 対象技術名に置換（例：「Python学習教材」「Java学習教材」）
- `[チートシートへのパス]`: チートシートファイルへの相対パス
- `[技術名]チートシート`: チートシートのリンクテキスト

### サイドバーのカスタマイズ
各章のリンクを学習カリキュラムに応じて追加：
```html
<li class="nav-item">
    <a class="nav-link" href="[章ファイル名].html">
        第X章: [章タイトル]
    </a>
</li>
```

## メインコンテンツ構造

メインコンテンツは上記HTML構造の`<main>`タグ内に以下の構造で配置：

```html
<!-- 章ヘッダー -->
<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    <h1 class="h2">第X章: [章タイトル]</h1>
</div>

<div id="chapterX">
    <!-- 章タイトル -->
    <h2 class="chapter-title">[メインタイトル]</h2>
    
    <!-- 学習目標（必須） -->
    <div class="highlight">
        <h5>この章で学ぶこと</h5>
        <ul>
            <li>[学習項目1]</li>
            <li>[学習項目2]</li>
        </ul>
    </div>

    <!-- セクション構成 -->
    <h3 class="section-title">X.1 [セクションタイトル]</h3>
    <p>[説明文]</p>

    <!-- 実習（必須） -->
    <div class="exercise-container">
        <h5>実習 X-1: [実習タイトル]</h5>
        <p>[実習の目的・概要]</p>
        <h6>手順</h6>
        <ol>
            <li>[手順1]</li>
            <li>[手順2]</li>
        </ol>
        <h6>実行例</h6>
        <pre class="code-block"><code class="language-[言語名]">[コード例]</code></pre>
        <h6>期待される結果</h6>
        <p>[結果の説明]</p>
    </div>

    <!-- 理解度確認（必須） -->
    <div class="quiz-container">
        <h5>理解度確認クイズ</h5>
        <ol>
            <li>[問題1]</li>
            <li>[問題2]</li>
        </ol>
    </div>

    <!-- 章間ナビゲーション（必須） -->
    <div class="d-flex justify-content-between mt-4">
        <a href="[前章ファイル名].html" class="btn btn-secondary">← 前の章</a>
        <a href="[次章ファイル名].html" class="btn btn-primary">次の章 →</a>
    </div>
</div>
```

## コードハイライト使用例

### 基本的な使用方法
```html
<pre class="code-block"><code class="language-javascript">
function hello() {
    console.log('Hello World!');
}
</code></pre>
```

### 対応言語例
- `language-javascript` - JavaScript
- `language-python` - Python
- `language-java` - Java
- `language-csharp` - C#
- `language-vbnet` - VB.NET
- `language-sql` - SQL
- `language-html` - HTML
- `language-css` - CSS
- `language-json` - JSON
- `language-xml` - XML
- `language-bash` - Bash/Shell, Dockerfile, Gradle build files
- `language-ini` - Properties files（.properties）

### 重要な注意事項
**特定ファイルのコードハイライト指定：**
- build.gradleファイル：`language-bash`を使用
- application.propertiesファイル：`language-ini`を使用
- Dockerfileファイル：`language-bash`を使用

これにより、コードが白い文字色で正しく表示されます。


### HTMLコードの表示について
HTMLコードブロックを作成する際は、HTMLタグを適切にエスケープする必要があります：

```html
<!-- 正しい例：HTMLタグをエスケープして表示 -->
<pre class="code-block"><code class="language-html">&lt;div class="container"&gt;
    &lt;h1&gt;タイトル&lt;/h1&gt;
    &lt;p&gt;本文テキスト&lt;/p&gt;
&lt;/div&gt;</code></pre>

<!-- 間違った例：HTMLタグをそのまま記述（ブラウザがタグとして解釈してしまう） -->
<pre class="code-block"><code class="language-html"><div class="container">
    <h1>タイトル</h1>
    <p>本文テキスト</p>
</div></code></pre>
```

**エスケープ対象の主なHTMLタグ：**
- `<` → `&lt;`
- `>` → `&gt;`
- `&` → `&amp;`
- `"` → `&quot;`（属性値内で必要に応じて）

## Mermaid.js 図表作成

### 基本的な使用方法
Mermaid.jsを使用してフローチャート、シーケンス図、ガントチャートなどを作成できます：

```html
<!-- フローチャート例（デフォルトテーマ） -->
<div class="mermaid">
    flowchart TD
        A[開始] --> B{条件判定}
        B -->|Yes| C[処理A]
        B -->|No| D[処理B]
        C --> E[終了]
        D --> E
</div>
```

### 利用可能な図表タイプ
- `flowchart` - フローチャート
- `sequenceDiagram` - シーケンス図
- `classDiagram` - クラス図
- `stateDiagram` - 状態遷移図
- `erDiagram` - ER図
- `gantt` - ガントチャート
- `pie` - 円グラフ
- `gitgraph` - Gitブランチ図

### 重要：Mermaidシンタックスエラーの回避

**1. ノード内で`<br/>`タグを使用する場合は必ず引用符で囲む：**

```html
<!-- 正しい例：改行タグを含むノードは引用符で囲む -->
<div class="mermaid">
    flowchart TD
        A["Javaソースコード<br/>(.java)"] --> B["Javaコンパイラ<br/>(javac)"]
        B --> C["バイトコード<br/>(.class)"]
        C --> D[単純なテキスト]
</div>

<!-- 間違った例：改行タグを含むのに引用符がない -->
<div class="mermaid">
    flowchart TD
        A[Javaソースコード<br/>(.java)] --> B[Javaコンパイラ<br/>(javac)]
</div>
```

**2. HTMLエスケープが必要な記号の対処法：**

クラス図でステレオタイプ（`<<interface>>`、`<<annotation>>`等）を使用する場合、HTMLエスケープが必要です：

```html
<!-- 正しい例：<<>>記号をHTMLエスケープ -->
<div class="mermaid">
    classDiagram
        class Drawable {
            &lt;&lt;interface&gt;&gt;
            +draw()
        }
        class Component {
            &lt;&lt;annotation&gt;&gt;
            +汎用コンポーネント
        }
</div>

<!-- 間違った例：<<>>記号をそのまま使用（シンタックスエラー） -->
<div class="mermaid">
    classDiagram
        class Drawable {
            <<interface>>
            +draw()
        }
</div>
```

**3. その他のシンタックスエラー回避のルール：**
- スペースを含む文字列も引用符で囲む：`A["Mac OS"]`
- 特殊文字（`()`, `[]`, `{}`, `-`, `:` など）を含む場合も引用符で囲む
- 日本語の長いテキストも引用符で囲むことを推奨
- シンプルな単語のみの場合は引用符不要：`A[Windows]`, `B[開始]`
- クラス図でのHTMLエスケープ対象：`<` → `&lt;`、`>` → `&gt;`

### Mermaidテーマの種類と個別指定方法

#### 利用可能なテーマ
- `default` - 標準テーマ（白背景、黒文字）**【推奨】**
- `forest` - グリーン系テーマ
- `neutral` - ニュートラルテーマ
- `base` - カスタマイズ可能なベーステーマ

**注意：darkテーマは使用しないでください。**

#### 図ごとのテーマ指定方法
図の先頭に`%%{init: {'theme':'テーマ名'}}%%`を追加してテーマを指定できます：

```html
<!-- デフォルトテーマを使用（推奨） -->
<div class="mermaid">
    flowchart TD
        A[開始] --> B[終了]
</div>

<!-- カスタムカラーを使用 -->
<div class="mermaid">
    %%{init: {'theme':'base', 'themeVariables': { 'primaryColor': '#0d6efd', 'primaryTextColor': '#fff'}}}%%
    flowchart TD
        A[開始] --> B[終了]
</div>
```

### Highlight.jsテーマの変更
デフォルトはAtom One Dark（黒背景）テーマ、その他も利用可能：
```html
<!-- その他のテーマ例 -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/vs.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/stackoverflow-light.min.css">
```