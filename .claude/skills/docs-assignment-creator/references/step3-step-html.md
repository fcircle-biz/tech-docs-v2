# Step3: 単一ステップHTML生成（並列生成フェーズで各サブエージェントが読む）

このファイルは、Phase 3 の並列生成で各サブエージェント（general-purpose）が**指定された1ステップ分のHTML**を生成するための手順。第1ステップHTML（01）をコピーし、内容を該当ステップに書き換えるシンプルな作業を行う。

共通ルールは必ず `global-rules.md` を読み込んでから作業すること（コード提供禁止・Mermaid・視認性・ヘッダー禁止事項・命名・URL 等）。

---

## 重要な実行ルール（絶対遵守）

**このサブエージェントは以下をすべて完了するまで終了してはいけない:**
1. README.md の読み込みと分析
2. 第1ステップ（01）HTML ファイルの読み込み
3. **指定されたステップのHTMLを生成（Writeで保存）**
4. 生成されたファイルの確認と報告

**「これから生成します」「開始しました」等の途中報告で終了することは禁止。実際にファイルが Write されるまで処理を継続すること。**

---

## 前提（土台が作成済みであること）

このフェーズの前に Step2（土台作成）が完了し、課題フォルダに以下が存在している前提:
- `sidebar-content.js`（全ステップ定義済み）
- `styles.css`（オレンジ設定済み）
- `main.js`
- `drawing-tool.js`
- `docs/`（設計書PDF＋mockups/）
- **`[課題名]-assignment-01.html`（第1ステップHTML）** ← これが構造ベース

存在しない場合は、先に Step2 を実行する必要がある旨を報告して終了する。

---

## 渡される情報（並列起動時）

- 構造ベースの第1ステップHTMLパス（例: `docs/assignment/[課題名]/[課題名]-assignment-01.html`）
- README.md パス（例: `docs/assignment/[課題名]/README.md`）
- 設計書パス（`docs/assignment/[課題名]/docs/` 配下の README.md / database.md / implementation-guide.md / mockups/）
- 担当ステップ番号（2, 3, … N のいずれか）

---

## 実行手順

### 1. README分析

README.md を読み込み、指定ステップ番号の情報を抽出:
- ステップタイトル
- 実装する機能
- 参照すべき設計書セクション
- 完了条件

### 2. 設計資料を参照

課題フォルダ内 `docs/` の設計書を参照し該当ステップの詳細を取得:
- `docs/README.md` - API設計、バリデーション等
- `docs/implementation-guide.md` - 実装ヒント
- `docs/database.md` - DB設計（必要に応じて）

※ HTMLからは設計書の **PDF版**（`docs/README.pdf` 等）にリンクする。

### 3. 既存ファイル確認

`sidebar-content.js` `styles.css` `main.js` `drawing-tool.js` `docs/`、および **`[課題名]-assignment-01.html`** が存在することを確認する。第1ステップHTMLが無ければ Step2 未実行として報告し終了。

### 4. 第1ステップHTMLの構造を確認

01 HTML を読み込み、以下の構造を把握:
- `<head>`（Tailwind config、CDN 読み込み順序）
- `<header>`（クラス名・構造）
- `<main>`（メインコンテンツ構造）
- 各セクション構造（設計資料リンク／モック画面プレビュー／実装ヒント／完了チェック）
- `<footer>` とスクリプト読み込み

### 5. 指定ステップのHTMLを生成【最重要】

#### 生成手順

1. **第1ステップHTMLを Read し、その内容をベースとする。**
2. README.md と設計書から該当ステップの情報を読み取る。
3. ステップ番号・タイトル・内容を該当ステップのものに書き換える。
4. **Write でファイルを保存する**（`[課題名]-assignment-[NN].html`）。

#### 書き換える箇所

1. `<title>` タグ内のステップ番号とタイトル
2. パンくずリストのステップ番号
3. ステップヘッダー（ステップ番号バッジ、h1タイトル、説明文）
4. 「このステップで実装すること」カード
5. 設計資料へのリンク（該当ステップに関連するセクション）
6. モック画面プレビュー（該当ステップで実装する画面）
7. 実装ヒント（該当ステップ特有のアドバイス）
8. 完了チェックリスト
9. 前ステップ／次ステップナビゲーションのリンク

#### 書き換えてはいけない箇所（構造を維持）

- `<head>` の CDN 読み込み・Tailwind config
- `<header>` のクラス名と構造
- **ヘッダーの推奨時間**（全ステップの合計時間表示なので変更不要）
- `<main>` のクラス名と構造
- `<footer>` の構造
- スクリプト読み込み部分

### 6. 完了報告

HTMLファイル生成完了後、生成ファイルを報告する。

---

## ステップ別のモック画面対応

各ステップで表示すべきモック画面の例:

| ステップ | 内容 | 表示するモック |
|----------|------|--------------|
| Step 1: 環境構築 | 基本設定 | dashboard.html（全体像の確認） |
| Step 2: 顧客管理 | 顧客CRUD | customers.html, customers-new.html, customers-edit.html |
| Step 3: 商品管理 | 商品CRUD | products.html, products-new.html, products-edit.html |
| Step 4: 注文管理 | 注文作成 | orders.html, orders-new.html, orders-detail.html |
| Step 5: ダッシュボード | 集計表示 | dashboard.html |

複数のモック画面がある場合は、タブ切り替えまたは複数iframeで表示する:

```html
<!-- タブ切り替え式モック表示 -->
<div class="mb-8">
    <div class="flex border-b border-slate-200 mb-4">
        <button class="px-4 py-2 text-sm font-medium text-primary-600 border-b-2 border-primary-500"
                onclick="showMockup('list')">一覧画面</button>
        <button class="px-4 py-2 text-sm font-medium text-slate-500 hover:text-slate-700"
                onclick="showMockup('new')">新規登録画面</button>
        <button class="px-4 py-2 text-sm font-medium text-slate-500 hover:text-slate-700"
                onclick="showMockup('edit')">編集画面</button>
    </div>
    <div id="mockup-list" class="mockup-frame">
        <iframe src="docs/mockups/customers.html" class="w-full h-[500px] border rounded-lg"></iframe>
    </div>
    <div id="mockup-new" class="mockup-frame hidden">
        <iframe src="docs/mockups/customers-new.html" class="w-full h-[500px] border rounded-lg"></iframe>
    </div>
    <div id="mockup-edit" class="mockup-frame hidden">
        <iframe src="docs/mockups/customers-edit.html" class="w-full h-[500px] border rounded-lg"></iframe>
    </div>
</div>
```

---

## 実装ヒントの書き方（コードは書かない）

**コードは書かない**。代わりに次のような形式でヒントを提供する:

```html
<div class="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6">
    <div class="flex items-start gap-3">
        <i class="fas fa-lightbulb text-amber-500 text-lg mt-0.5"></i>
        <div>
            <h4 class="font-semibold text-amber-800 mb-2">バックエンド実装のヒント</h4>
            <ul class="text-amber-900 text-sm space-y-2">
                <li>• <strong>モデル定義</strong>: database.md のテーブル定義を参考に SQLModel クラスを作成</li>
                <li>• <strong>API実装</strong>: README.md の「顧客API」セクションを参照</li>
                <li>• <strong>バリデーション</strong>: 名前は必須、メールは形式チェックが必要</li>
            </ul>
        </div>
    </div>
</div>

<div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
    <div class="flex items-start gap-3">
        <i class="fas fa-info-circle text-blue-500 text-lg mt-0.5"></i>
        <div>
            <h4 class="font-semibold text-blue-800 mb-2">フロントエンド実装のヒント</h4>
            <ul class="text-blue-900 text-sm space-y-2">
                <li>• <strong>一覧画面</strong>: useEffect でAPIを呼び出し、テーブルで表示</li>
                <li>• <strong>フォーム</strong>: useState で入力値を管理、送信後にリダイレクト</li>
                <li>• <strong>参考</strong>: Todoアプリで作った一覧・追加機能を拡張する形で実装</li>
            </ul>
        </div>
    </div>
</div>
```

ヒントは「設計書の参照箇所を明示」「考え方・アプローチ」「注意点」を示すにとどめ、そのまま動く実装コードは載せない。

---

## 禁止事項（重要）

1. **実装コードの提供禁止**: ヒントやアドバイスのみ。
2. **ダークモードボタンの追加禁止**: `main.js` が動的生成。
3. **ヘッダー構造の変更禁止**: テンプレートの構造を維持。
4. **共通部品の上書き禁止**: `sidebar-content.js` `styles.css` `main.js` `drawing-tool.js` は既存のものを使う（上書きしない）。
5. **早期終了禁止**: 「これから生成します」と報告して終了しない。ファイルを生成せず終了しない。

---

## 生成ルール

1. README.md と設計書から該当ステップの情報を読み取り反映する。
2. モック画面は該当ステップに関連するものを表示する。
3. 実装ヒントは設計書の参照箇所を明示する。
4. 第1ステップHTMLの構造・スタイルを完全に継承する。

---

## コンポーネント一覧（`templates/v3/snippets/components.html` 参照）

| コンポーネント | 用途 | スタイル |
|--------------|------|---------|
| 実装目標カード | ステップの冒頭 | `bg-gradient-to-r from-amber-50 to-yellow-50` |
| 設計資料リンク | 参照箇所の明示 | `bg-slate-50 border border-slate-200` |
| モック画面プレビュー | iframe表示 | `bg-white rounded-xl shadow-lg` |
| 実装ヒントカード | アドバイス | `bg-amber-50 border-l-4 border-amber-500` |
| 完了チェックリスト | 確認項目 | `bg-gradient-to-r from-blue-50 to-indigo-50` |

---

## 検証チェックリスト（Phase 4 でも使用）

- [ ] 実装の完成コードを書いていない（ヒントのみ）。
- [ ] ヘッダーにダークモードボタンを手書きしていない／ヘッダー構造を維持。
- [ ] スクリプト読込順が styles.css → sidebar-content.js → main.js → drawing-tool.js。
- [ ] `{{PRIMARY_*}}` プレースホルダーが残っていない。
- [ ] Mermaid が CLAUDE.md方式（HTMLエンティティなし・半角括弧は全角orダブルクォート・`&`は`＆`・dark禁止）。
- [ ] 半透明背景（`bg-white/70` 等）を使っていない。内側ボックスは同系色 `-100`＋`-900`。
- [ ] 設計書リンクが `docs/*.pdf`、モックが `docs/mockups/*.html` を指す。
- [ ] 前後ステップのナビゲーションリンクが正しい。

---

## 出力（最終報告形式）

```
## 生成完了

以下のファイルを生成しました：
- [フォルダパス]/[課題名]-assignment-[NN].html
```
