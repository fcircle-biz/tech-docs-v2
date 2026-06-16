# テンプレート v2 (Tailwind CSS版)

## 概要

技術学習教材・チュートリアル用のHTMLテンプレートです。Tailwind CSS を使用したモダンなデザインで、レスポンシブ対応しています。

**主な機能:**
- レスポンシブデザイン（PC・タブレット・スマートフォン対応）
- サイドバー開閉機能（PC: トグルボタン、モバイル: ハンバーガーメニュー）
- デバイス別最適化UI（タブレット・スマートフォンは初期状態でサイドバー閉）
- 講義用描画ツール（PC環境のみ）
- 共通JavaScript機能（各技術フォルダ内で直接管理）

## ディレクトリ構成

```
templates/v2/
├── README.md                                # このファイル
├── html/                                    # 学習教材（guide）用テンプレート
│   ├── learning-material-template.html      # 学習教材用テンプレート
│   ├── sidebar-content.js                   # サイドバー生成（学習教材用）
│   ├── styles.css                           # 共通カスタムスタイル
│   ├── main.js                              # 共通機能（サイドバー、描画ツールバー生成等）
│   └── drawing-tool.js                      # 描画ツール機能
├── html_tutorial/                           # チュートリアル（tutorial）用テンプレート
│   ├── tutorial-template.html               # チュートリアル用テンプレート
│   ├── sidebar-content.js                   # サイドバー生成（チュートリアル用）
│   ├── styles.css                           # 共通カスタムスタイル
│   ├── main.js                              # 共通機能（サイドバー、描画ツールバー生成等）
│   └── drawing-tool.js                      # 描画ツール機能
├── html_cheatsheet/                         # チートシート（cheatsheet）用テンプレート
│   ├── cheatsheet-template.html             # チートシート用テンプレート
│   ├── styles.css                           # 共通カスタムスタイル（ダークモード対応）
│   └── main.js                              # 共通機能（ダークモード、コードコピー等）
├── slide/                                   # スライド教材（slide）用テンプレート
│   ├── index.html                           # スライド教材用テンプレート
│   ├── slide-content.js                     # スライド定義（カスタマイズ必要）
│   ├── styles.css                           # 共通カスタムスタイル
│   ├── main.js                              # 共通機能（PDFビューアー、ナビゲーション等）
│   └── README.md                            # スライド教材の使い方
├── reference/                               # 参照用ドキュメント
│   ├── color-themes.md                      # 技術別カラーテーマ一覧
│   ├── css-styles.md                        # CSSスタイルガイド
│   └── mermaid-patterns.md                  # Mermaid図パターン集
└── snippets/                                # 部品スニペット
    └── components.html                      # よく使うコンポーネント集（プレビュー可）
```

## 使い方

### 1. テンプレートをコピー

目的に応じたテンプレートをコピーしてください：

- **学習教材（guide）を作成する場合**
  ```bash
  cp templates/v2/html/learning-material-template.html docs/guide/[分類]/[技術名]/[技術名]-learning-material-01.html
  ```

- **チュートリアル（tutorial）を作成する場合**
  ```bash
  cp templates/v2/html_tutorial/tutorial-template.html docs/tutorial/[分類]/[技術名]/[技術名]-tutorial-01.html
  ```

- **スライド教材（slide）を作成する場合**
  ```bash
  # フォルダを作成してテンプレートをコピー
  mkdir -p docs/slide/[カテゴリ]/[サブカテゴリ]/[教材名]
  cp templates/v2/slide/*.{html,css,js} docs/slide/[カテゴリ]/[サブカテゴリ]/[教材名]/

  # PDFフォルダを作成してPDFを配置
  mkdir docs/slide/[カテゴリ]/[サブカテゴリ]/[教材名]/pdf
  ```

- **チートシート（cheatsheet）を作成する場合**
  ```bash
  # フォルダを作成してテンプレートをコピー
  mkdir -p docs/cheatsheet/[カテゴリ]/[サブカテゴリ]/[技術名]
  cp templates/v2/html_cheatsheet/cheatsheet-template.html docs/cheatsheet/[カテゴリ]/[サブカテゴリ]/[技術名]/index.html
  cp templates/v2/html_cheatsheet/styles.css docs/cheatsheet/[カテゴリ]/[サブカテゴリ]/[技術名]/
  cp templates/v2/html_cheatsheet/main.js docs/cheatsheet/[カテゴリ]/[サブカテゴリ]/[技術名]/
  ```

### 2. TODOコメントを編集

テンプレート内の `<!-- TODO: ... -->` コメントを検索し、該当箇所を編集してください。

主な編集箇所：
- **技術名・タイトル**: `[技術名]`、`[章タイトル]` 等
- **カラーテーマ**: `tailwind.config` 内の `primary` カラー
- **アイコン**: `fab fa-python` → 適切なFont Awesomeアイコン
- **章リスト/ステップリスト**: `sidebar-content.js` の `chapters` または `steps` 配列
- **コンテンツ**: 学習目標、説明文、コード例等

**注意**: v2.4.0以降、サイドバーの章リスト/ステップリストはHTMLテンプレート内ではなく、`sidebar-content.js`ファイルで管理されます。

### 3. カラーテーマを変更

技術に応じて `tailwind.config` の `primary` カラーを変更します。
詳細は `reference/color-themes.md` を参照してください。

#### よく使うカラーテーマ

| 技術 | メインカラー | アイコン |
|------|-------------|---------|
| Python | Blue (`#3b82f6`) | `fab fa-python` |
| Java | Orange (`#f97316`) | `fab fa-java` |
| Spring | Emerald (`#10b981`) | `fas fa-leaf` |
| React | Cyan (`#06b6d4`) | `fab fa-react` |
| .NET/C# | Violet (`#8b5cf6`) | `fab fa-microsoft` |

### 4. サイドバーの設定（JavaScript外出し）

**v2.4.0から、サイドバーはJavaScriptファイルで動的に生成されます。**

これにより、以下のメリットがあります：
- **コード量削減**: 各HTMLファイルから約150行削減
- **保守性向上**: 章の追加・変更が1ファイルの編集で完了
- **自動機能**: 現在の章を自動判定、進捗率を自動計算

#### 学習教材の場合

1. **sidebar-content.jsをコピー**
   ```bash
   cp templates/v2/html/sidebar-content.js docs/guide/[分類]/[技術名]/
   ```

2. **章の定義を編集**

   `sidebar-content.js`を開き、`chapters`配列を実際の章構成に合わせて編集：
   ```javascript
   const chapters = [
       { number: 1, title: '第1章: 環境構築', file: 'java-learning-material-01.html' },
       { number: 2, title: '第2章: 基本文法', file: 'java-learning-material-02.html' },
       // ... 実際の章数に合わせて追加
   ];
   ```

3. **HTMLファイルで読み込み**

   テンプレートには既に以下の記述が含まれています：
   ```html
   <!-- サイドバー生成 -->
   <script src="sidebar-content.js"></script>
   ```

4. **サイドバーHTMLの削除について**

   テンプレートからは既にサイドバーHTMLが削除されています。
   以下のコメントのみが残っています：
   ```html
   <div class="flex min-h-screen pt-20">
       <!-- サイドバーはsidebar-content.jsで動的に生成されます -->
   ```

#### チュートリアルの場合

1. **sidebar-content.jsをコピー**
   ```bash
   cp templates/v2/html_tutorial/sidebar-content.js docs/tutorial/[分類]/[技術名]/
   ```

2. **プロジェクト情報とステップ定義を編集**

   `sidebar-content.js`を開き、以下を編集：
   ```javascript
   const projectInfo = {
       title: 'ユーザー管理システム',
       description: 'Djangoで実装するCRUD機能付きWebアプリケーション'
   };

   const steps = [
       { number: 1, title: 'ステップ1', subtitle: '環境構築', file: 'django-tutorial-01.html' },
       { number: 2, title: 'ステップ2', subtitle: 'プロジェクト作成', file: 'django-tutorial-02.html' },
       // ... 実際のステップ数に合わせて追加
   ];
   ```

#### カスタマイズ例

**章タイトルの変更:**
```javascript
const chapters = [
    { number: 1, title: '第1章: 環境構築と準備', file: 'learning-material-01.html' },
    { number: 2, title: '第2章: 基本文法の理解', file: 'learning-material-02.html' },
];
```

**ファイル名パターンの変更:**
```javascript
const chapters = [
    { number: 1, title: '第1章: イントロ', file: 'chapter-01.html' },
    { number: 2, title: '第2章: 基礎', file: 'chapter-02.html' },
];
```

#### 注意事項

1. **ファイル名の一致**: `chapters`配列の`file`プロパティは実際のHTMLファイル名と完全に一致させる必要があります

2. **スクリプト読み込み順序**: `sidebar-content.js`は`main.js`より前に読み込んでください
   ```html
   <script src="sidebar-content.js"></script>
   <script src="main.js"></script>
   ```

3. **メインレイアウトdivのクラス**: サイドバーを挿入するために、メインレイアウトdivに`.flex.min-h-screen.pt-20`（学習教材）または`.pt-16`（チュートリアル）クラスが必要です

#### 実装例

実際の実装例：
- **学習教材**: `docs/guide/programming-languages/java-ecosystem/java/`
- **チュートリアル**: （今後追加予定）

### 5. 共通ファイルの配置

テンプレートは共通ファイル（`sidebar-content.js`、`styles.css`、`main.js`、`drawing-tool.js`）を使用します。

**重要：依存を避けるため、各技術フォルダ内に直接ファイルをコピーしてください。**

#### 手順

1. **共通ファイルをコピー**
   ```bash
   # 学習教材（Java）を作成する場合の例
   cp templates/v2/html/sidebar-content.js docs/guide/programming-languages/java-ecosystem/java/
   cp templates/v2/html/styles.css docs/guide/programming-languages/java-ecosystem/java/
   cp templates/v2/html/main.js docs/guide/programming-languages/java-ecosystem/java/
   cp templates/v2/html/drawing-tool.js docs/guide/programming-languages/java-ecosystem/java/

   # チュートリアル（Django）を作成する場合の例
   cp templates/v2/html_tutorial/sidebar-content.js docs/tutorial/programming-languages/python-ecosystem/django/
   cp templates/v2/html_tutorial/styles.css docs/tutorial/programming-languages/python-ecosystem/django/
   cp templates/v2/html_tutorial/main.js docs/tutorial/programming-languages/python-ecosystem/django/
   cp templates/v2/html_tutorial/drawing-tool.js docs/tutorial/programming-languages/python-ecosystem/django/
   ```

2. **HTMLファイルでのパス設定**

   テンプレート内のファイル参照は以下のようになっています：
   ```html
   <!-- カスタムスタイル -->
   <link rel="stylesheet" href="styles.css">

   <!-- サイドバー生成 -->
   <script src="sidebar-content.js"></script>

   <!-- 共通JavaScript -->
   <script src="main.js"></script>

   <!-- 描画ツール -->
   <script src="drawing-tool.js"></script>
   ```

   配置場所によって相対パスを調整してください：
   - **ルート階層** (`docs/guide/.../java/*.html`)
     - `sidebar-content.js`、`styles.css`、`main.js`、`drawing-tool.js` のまま
   - **サブディレクトリ** (`docs/guide/.../java/v1/*.html`)
     - `../sidebar-content.js`、`../styles.css`、`../main.js`、`../drawing-tool.js` に変更

#### styles.cssについて

`styles.css` には以下の共通カスタムスタイルが含まれています：
- スクロールバーのカスタマイズ
- コードブロックのライン番号スタイル
- サイドバーのトランジション
- コードコピーボタンのスタイル
- ヘッダーのリッチデザイン（グラデーション・アニメーション）
- レスポンシブ対応のメディアクエリ

**技術固有のカラー調整が必要な場合**は、各技術フォルダの`styles.css`を編集してください。
例えば、Java用（オレンジ系）、Python用（ブルー系）など、技術に応じた色調整が可能です。

#### main.jsの機能

`main.js` には以下の共通機能が含まれています：
- PC環境判定（1024px以上をPC環境と判定）
- サイドバートグル制御（PC環境では初期表示、モバイルでは初期非表示）
- 描画ツールバー生成（PC環境のみ）
- スクロールトップボタン制御
- コードコピー機能
- Highlight.js / Mermaid.js 初期化

#### drawing-tool.jsの機能

`drawing-tool.js` には以下の描画ツール機能が含まれています：
- ペン/消しゴムツール
- 色・線幅選択
- 元に戻す/全消去
- キーボードショートカット (D, P, E, C, Ctrl+Z)

## テンプレートの種類

### 学習教材テンプレート (learning-material-template.html)

10章構成の学習教材向け。以下の機能を含みます：

**レイアウト:**
- リッチなヘッダーデザイン
- サイドバー（PC・モバイル共にトグルボタンで開閉）
- サイドバートグルボタン（ヘッダー右側に配置）
- 進捗インジケーター
- 章リストナビゲーション

**コンテンツ:**
- 学習目標カード
- 実習カード
- 理解度確認クイズ
- 章間ナビゲーション

**インタラクティブ機能:**
- 講義用描画ツール（PC環境のみ、右側に配置）
- コードコピー機能

### チュートリアルテンプレート (tutorial-template.html)

ハンズオン形式のチュートリアル向け。以下の機能を含みます：

**レイアウト:**
- プロジェクト概要カード
- サイドバー（PC・モバイル共にトグルボタンで開閉）
- サイドバートグルボタン（ヘッダー右側に配置）
- ステップリストナビゲーション

**コンテンツ:**
- 実装手順カード（番号付き）
- 動作確認セクション
- トラブルシューティング（折りたたみ）
- ファイル構成表示

**インタラクティブ機能:**
- ステップ完了チェックリスト（ローカルストレージ保存）
- コードコピー機能

### スライド教材テンプレート (slide/index.html)

PDFスライド形式の学習教材向け。以下の機能を含みます：

**レイアウト:**
- PDFビューアー（ブラウザ内表示）
- サイドバー（スライド一覧）
- 進捗インジケーター
- パンくずリスト

**インタラクティブ機能:**
- スライドナビゲーション（サイドバー・ボタン）
- キーボード操作（矢印キー、Fキーで全画面）
- 全画面表示機能
- ダークモード対応
- PDFダウンロード

**カスタマイズ:**
- `slide-content.js`: スライド定義（PDFファイルパス、タイトル）
- `styles.css`: ヘッダー色（CSS変数で変更）
- `index.html`: タイトル、アイコン、カテゴリ、Tailwindカラー

詳細は `slide/README.md` を参照してください。

### チートシートテンプレート (html_cheatsheet/cheatsheet-template.html)

1ページ完結型のクイックリファレンス向け。以下の機能を含みます：

**レイアウト:**
- リッチなヘッダーデザイン（グラデーション）
- 2カラムグリッドレイアウト
- フル幅セクション
- レスポンシブ対応（PC・タブレット・スマートフォン）

**コンテンツ:**
- イントロセクション（タグ付き）
- コードブロック付きカードセクション
- ヒントボックス（各カラー対応）
- 実務Tipsセクション（ダーク背景）
- ステップ/フロー表示
- よく使うパターン集

**インタラクティブ機能:**
- ダークモード切り替え（システム設定連動）
- コードコピー機能
- 印刷対応

**カスタマイズ:**
- `styles.css`: ヘッダーグラデーション色（`.header-emerald`, `.header-violet`等のクラスで変更可能）
- テンプレート内のプレースホルダー（`{{TITLE}}`, `{{LANGUAGE}}`等）を置換

**プレースホルダー一覧:**
| プレースホルダー | 説明 | 例 |
|-----------------|------|-----|
| `{{TITLE}}` | 技術名/タイトル | SQL, Python, Git |
| `{{SUBTITLE}}` | サブタイトル | エンジニアのための実践リファレンス |
| `{{ICON}}` | Font Awesomeアイコン名 | database, code, terminal |
| `{{LANGUAGE}}` | highlight.js言語名 | sql, javascript, python |
| `{{INTRO_ICON}}` | イントロセクションのアイコン | table, book, lightbulb |
| `{{INTRO_TITLE}}` | イントロのタイトル | SQLとは？ |
| `{{INTRO_DESCRIPTION}}` | イントロの説明文 | - |

## スニペットの使い方

`snippets/components.html` をブラウザで開くと、各コンポーネントのプレビューが確認できます。
必要な部分のHTMLをコピーして使用してください。

## ファイル命名規則

- 学習教材: `[tech-name]-learning-material-[章番号].html`
  - 例: `python-learning-material-01.html`
- チュートリアル: `[tech-name]-tutorial-[ステップ番号].html`
  - 例: `django-tutorial-01.html`
- チートシート: `index.html`（フォルダ単位で管理）
  - 例: `docs/cheatsheet/data-ai-category/database/sql/index.html`

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

### ローカルストレージの使用

以下の設定がローカルストレージに保存されます：
- チュートリアルのチェックリスト完了状態（該当ページのみ）

## 必要な外部リソース

テンプレートは以下のCDNリソースを使用しています（インターネット接続が必要）：

- Tailwind CSS
- Google Fonts (Noto Sans JP)
- Highlight.js
- Mermaid.js
- Font Awesome

## 参考ドキュメント

- `reference/color-themes.md` - 技術別カラーテーマの詳細
- `reference/css-styles.md` - Tailwind CSSスタイルガイド
- `reference/mermaid-patterns.md` - Mermaid図のパターン集

## よくある質問（FAQ）

### Q: サイドバーが表示されない・動作しない
**A:** 以下を確認してください：
1. `main.js` のパスが正しく設定されているか（配置場所に応じて相対パスを調整）
2. `main.js` と `drawing-tool.js` が正しくコピーされているか
3. ブラウザの開発者ツールでJavaScriptエラーが出ていないか
4. `id="sidebar"` と `id="sidebar-toggle-btn"` が正しく設定されているか

### Q: 描画ツールバーが表示されない
**A:** 描画ツールバーはPC環境（1024px以上）でのみ表示されます。タブレット・スマートフォンでは意図的に非表示になっています。

### Q: サイドバーの初期状態を変更したい
**A:** 各技術フォルダ内の `main.js` の `initSidebarToggle` 関数で初期状態を制御しています。PC環境では初期表示、モバイルでは初期非表示になっています。

### Q: 技術アイコンが表示されない
**A:** Font Awesome CDNが正しく読み込まれているか確認してください。また、使用するアイコンクラス（例: `fab fa-python`）が正しいか確認してください。

### Q: スタイルが適用されない
**A:** 以下を確認してください：
1. `styles.css` のパスが正しく設定されているか（配置場所に応じて相対パスを調整）
2. `styles.css` が正しくコピーされているか
3. ブラウザの開発者ツールでCSSファイルが404エラーになっていないか
4. キャッシュをクリアしてページを再読み込みしてみる

### Q: 複数の技術フォルダで異なる色テーマを使いたい
**A:** 各技術フォルダの `styles.css` を個別に編集することで、技術ごとに異なる色調整が可能です。例えば、ヘッダーのグラデーション色やサイドバーのハイライト色を変更できます。

## バージョン履歴

### v2.7.0 (2025-12-11)
- **チートシートテンプレート追加**: 1ページ完結型クイックリファレンス用テンプレートを新設
- `html_cheatsheet/` フォルダ: チートシート用テンプレート一式
- ダークモード対応（システム設定連動、手動切り替え）
- コードコピー機能
- 印刷対応
- 複数のヘッダーカラーバリエーション（CSS クラスで切り替え）

### v2.6.0 (2025-12-10)
- **スライド教材テンプレート追加**: PDFスライド形式の学習教材用テンプレートを新設
- `slide/` フォルダ: スライド教材用テンプレート一式
- PDFビューアー機能（ブラウザ内表示、全画面対応）
- スライドナビゲーション（サイドバー、ボタン、キーボード）
- ダークモード対応
- CSS変数によるヘッダー色カスタマイズ

### v2.5.0 (2025-11-30)
- **フォルダ構成変更**: 学習教材とチュートリアルのテンプレートを別フォルダに分離
- `html/` フォルダ: 学習教材（guide）用テンプレートのみ
- `html_tutorial/` フォルダ: チュートリアル（tutorial）用テンプレートを新設
- 各フォルダに必要なファイル一式を配置（コピー時の手間を削減）
- **サイドバートグル機能追加**: PC・モバイル両環境でサイドバー表示/非表示を切り替え可能
- サイドバーリサイズ機能を削除（シンプル化）
- サイドバー開閉処理とオーバーレイを削除（新トグル機能に置換）

### v2.4.0 (2025-01-27)
- **サイドバーJavaScript外出し対応**: サイドバーHTMLをJavaScriptで動的生成
- `templates/v2/html/sidebar-content.js` を追加（学習教材用）
- `templates/v2/html/sidebar-content-tutorial.js` を追加（チュートリアル用）
- HTMLテンプレートからサイドバーHTML（約70-95行）を削除
- 各HTMLファイルのコード量を約150行削減
- 章/ステップの追加・変更が1ファイルの編集で完了
- 現在の章を自動判定、進捗率を自動計算する機能を追加
- メンテナンス性が大幅に向上

### v2.3.0 (2025-01-27)
- **CSS外部化対応**: インラインCSSを外部ファイル化
- `templates/v2/html/styles.css` を追加（共通カスタムスタイル）
- HTMLテンプレートのインラインCSSを `<link rel="stylesheet" href="styles.css">` に置換
- 各技術フォルダに `styles.css` をコピーして配置する方式を採用
- HTMLファイルのコード量を約128行（約5KB）削減
- メンテナンス性向上：CSS修正時は1ファイルのみ編集すればOK
- エージェント定義（tech-guide-creator-step2.md）にCSS配置手順を追加

### v2.2.0 (2025-11-27)
- 共通JavaScriptファイルの管理方法を変更
- `templates/v2/html/` フォルダにコピー用の共通JavaScriptを配置
- 各技術フォルダ内に直接JSファイルをコピーする方式に変更（依存を避けるため）
- commonフォルダを廃止し、HTMLテンプレートと同じhtmlフォルダに配置
- テンプレートのスクリプト参照パスを更新
- README.md の手順を更新

### v2.1.0 (2025-01-27)
- サイドバー開閉機能を追加
- タブレット・スマートフォンでサイドバーの初期状態を閉じた状態に変更
- PC環境用サイドバートグルボタンを追加
- 描画ツールバーをPC環境限定に変更
- 共通JavaScript機能を統合

### v2.0.0
- 初版リリース
- Tailwind CSS ベースのテンプレート
- 学習教材・チュートリアルテンプレート提供
