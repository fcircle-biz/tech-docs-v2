# 共通HTMLルール（DRY集約）

第1章HTML（step2）および第2章以降のHTML（step3）の生成で共通して守るルール。step2-foundation.md / step3-chapter.md からこのファイルを参照する。

## ベーステンプレートと参照ファイル

- ベーステンプレート: `templates/v3/html/learning-material-template.html`（第1章生成時）
- 第2章以降は **第1章HTML** をベーステンプレートとして継承する
- カードコンポーネント: `templates/v3/snippets/components.html`
- カラーテーマ: `templates/v3/reference/color-themes.md`
- CSSスタイル（Tailwind）: `templates/v3/reference/css-styles.md`
- Mermaid図表パターン: `templates/v3/reference/mermaid-patterns.md`

これらの値は丸写しせず、上記ファイルを参照すること（よく使う代表値の抜粋は本ファイル・step2-foundation.md に掲載）。

## ファイル命名規則

- `[技術名]-learning-material-[章番号:2桁].html`
- 例: `docker-learning-material-01.html`, `docker-learning-material-02.html`
- 小文字とハイフン(kebab-case)、章番号は01から2桁ゼロパディング必須。

## スクリプト読み込み順序（重要）

HTMLファイルでは以下の順序を厳守する。

```html
<link rel="stylesheet" href="styles.css">
<script src="sidebar-content.js"></script>
<script src="main.js"></script>
<script src="drawing-tool.js"></script>
```

## ヘッダー構造の禁止事項（重要）

⚠️ **以下の変更は絶対に行わない。**

1. **ダークモードボタンをHTMLに追加しない。**
   - ダークモードボタンは `main.js` が動的に生成する。
   - HTMLにボタンを書くと2つ表示されてしまう。

2. **ヘッダー右側のボタンエリア構造を変更しない。**

   正しい構造（テンプレートのまま）:
   ```html
   <!-- 右側: サイドバートグルボタン -->
   <button id="sidebar-toggle-btn" class="...">
       <i class="fas fa-bars text-lg"></i>
   </button>
   ```

   間違い（これをやらない）:
   ```html
   <div class="flex items-center gap-2">
       <button id="dark-mode-toggle">...</button>  <!-- 追加禁止 -->
       <button id="sidebar-toggle-btn">...</button>
   </div>
   ```

## テキスト視認性ルール（重要）

カード内のテキストが読めるよう以下を守る。

1. **半透明背景は禁止**: `bg-white/70`, `bg-white/60`, `bg-white/50` 等を使わない。
2. **不透明な同系色背景を使う**: カード内に内側ボックスを置く場合、同系色の `-100` シェードを背景に使う。

| 親カードの色 | 内側ボックス背景 | テキスト色 |
|------------------|---------------------|------------|
| Purple | `bg-purple-100` | `text-purple-900` |
| Blue | `bg-blue-100` | `text-blue-900` |
| Green | `bg-emerald-100` | `text-emerald-900` |
| Orange | `bg-orange-100` | `text-orange-900` |

## Mermaid記法ルール（CLAUDE.md 方式に統一・重要）

Mermaid図を書くときは必ず以下に従う。**HTMLエンティティ（`&#40;` `&#41;` `&#38;` `&#124;` 等）は Mermaid が正しく解釈しないため使わない。** 旧 step に `&#124;` 等のエンティティ方式が残っていても、すべて CLAUDE.md 方式へ寄せること。

1. **HTMLエンティティを使わない**: `&#40;` `&#41;` `&#38;` `&#124;` などは不可。
2. **括弧の扱い**: 半角括弧 `()` は Mermaid で特殊文字として認識されるため、**全角括弧を使う**か、**ノードテキスト全体をダブルクォートで囲む**（例: `A["テキスト (括弧つき)"]`）。
3. **アンパサンド**: `&` の代わりに全角 `＆` を使う。
4. **改行**: ノード内で `<br/>` を使うときはノードをダブルクォートで囲む（例: `A["1行目<br/>2行目"]`）。
5. **特殊文字を含むテキストはダブルクォートで囲む**:
   - スラッシュ(/)を含むパス: `node["/usr/share/nginx/html"]`
   - チルダ(~)を含むパス: `node["~/my-folder"]`
   - 特殊文字なしの場合はクォート不要: `node[通常のラベル]`
6. **プログラミング記号は日本語表記も検討**: `||` → `OR演算子`、`&&` → `AND演算子`。
7. **テーマ**: デフォルトテーマを使用（dark テーマ禁止）。

**正しい例:**
```
flowchart TD
    A["第1章: 概要 (現在)"] --> B{OS}
    B -->|Windows| C["Windows環境構築"]
    D{"OR演算子"} --> E
    F{"条件A ＆ 条件B"} --> G
```

**間違い例（Syntax error の原因）:**
```
flowchart TD
    A[第1章: 概要<br/>&#40;現在&#41;] --> B{OS}
    D{OR演算 ||} --> E
    F{AND演算 &&} --> G
```

詳細は `templates/v3/reference/mermaid-patterns.md` を参照。

## コンポーネント一覧（components.html 参照）

HTMLコンテンツ作成時に使用するカードコンポーネント。正典は `templates/v3/snippets/components.html`。

| コンポーネント | 用途 | スタイル |
|--------------|------|---------|
| 学習目標カード | 章の冒頭 | `bg-gradient-to-r from-amber-50 to-yellow-50` |
| セクションタイトル | 見出し | `border-l-4 border-primary-500 pl-4` |
| 実習カード | ハンズオン | `bg-gradient-to-r from-purple-50 to-fuchsia-50` |
| クイズカード | 理解度確認 | `bg-gradient-to-r from-blue-50 to-cyan-50` |
| 動作確認カード | 実行結果確認 | `bg-gradient-to-r from-emerald-50 to-teal-50` |
| 警告カード | 注意事項 | `bg-red-50 border-l-4 border-red-500` |
| ヒントカード | Tips | `bg-blue-50 border-l-4 border-blue-500` |
| 重要ポイント | 重要事項 | `bg-emerald-50 border-l-4 border-emerald-500` |
| トラブルシューティング | エラー対応 | `bg-gradient-to-r from-orange-50 to-amber-50` |
| コードブロック | コード表示 | `.code-block-wrapper` + コピーボタン |
| ファイル構成 | ディレクトリ表示 | `bg-slate-100` + `<pre>` |

## コード・図表の方針

- **コードブロック**: `.code-block-wrapper` でラップ、ファイル名表示＋コピーボタン。
- **コード方針**: 簡潔・理解重視、15行以内、日本語コメント必須。
- **図表**: Mermaid.js 使用、デフォルトテーマ（dark テーマ禁止）。

## Highlight.js 追加言語の読み込み（重要）

CDN のデフォルトビルド（`highlight.min.js`）には約40の人気言語のみ含まれる。**SAS、Kotlin、Groovy、Haskell** などはデフォルトに含まれないため、追加で読み込む必要がある。

追加言語が必要な場合、HTMLの `<head>` 内で以下のように記述する。

```html
<!-- Highlight.js CDN -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-dark.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>
<!-- 追加言語（デフォルトに含まれない言語の場合） -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/languages/sas.min.js"></script>
```

**デフォルトに含まれない主な言語と追加スクリプト:**

| 言語 | 追加スクリプト |
|------|---------------|
| SAS | `languages/sas.min.js` |
| Kotlin | `languages/kotlin.min.js` |
| Groovy | `languages/groovy.min.js` |
| Haskell | `languages/haskell.min.js` |
| Clojure | `languages/clojure.min.js` |
| Scala | `languages/scala.min.js` |
| COBOL | `languages/cobol.min.js` |
| Fortran | `languages/fortran.min.js` |

**デフォルトに含まれる主な言語（追加不要）:**
JavaScript, TypeScript, Python, Java, C, C++, C#, PHP, Ruby, Go, Rust, Swift, SQL, HTML, CSS, JSON, YAML, Bash, Markdown

言語がデフォルトに含まれるか不明な場合は [Highlight.js Supported Languages](https://highlightjs.readthedocs.io/en/latest/supported-languages.html) を確認する。

## 生成物検証チェックリスト

docs-reviewer スキルの手順、または以下のチェックリストで全生成物を検証する。

- [ ] `styles.css` の `{{PRIMARY_300}}` `{{PRIMARY_400}}` `{{PRIMARY_500}}` `{{PRIMARY_600}}` `{{PRIMARY_700}}` `{{PRIMARY_RGB}}` がすべて実カラー値に置換済み（未置換は CSS 破損）。
- [ ] スクリプト読込順が `styles.css` → `sidebar-content.js` → `main.js` → `drawing-tool.js`。
- [ ] ダークモードボタンがHTMLに手書きされていない（`main.js` が動的生成）。ヘッダー構造が変更されていない。
- [ ] Mermaid図にHTMLエンティティ（`&#40;` 等）が無い。半角括弧は全角化orダブルクォート、`&` は全角`＆`、`<br/>` 使用ノードはダブルクォート、dark テーマ未使用。
- [ ] 半透明背景（`bg-white/70` 等）が無い。内側ボックスは同系色 `-100` 背景＋`-900` テキスト。
- [ ] `sidebar-content.js` の `chapters` 配列が全章分定義済み、関数部分（`createSidebar` 等）が維持されている。
- [ ] ファイル名が `[技術名]-learning-material-[NN].html`（2桁ゼロパディング）。
- [ ] 第2章以降が第1章HTMLの構造を継承している。
- [ ] コードブロックは15行以内・日本語コメントあり。
- [ ] 絶対パスのハードコードが無い（リポジトリルート相対）。
