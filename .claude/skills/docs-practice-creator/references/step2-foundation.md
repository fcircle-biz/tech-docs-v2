# 準備フェーズ2: 共通部品 + 第1回HTML（土台作成）

旧 practice-creator-step2 の手順を移植。練習問題フォルダの「土台作り」を担当する。このフェーズはメイン会話ループが直接（逐次）実行し、ここで確定する第1回HTMLが以降の並列生成の構造テンプレになる。

共通ルールは `shared-rules.md`、問題スニペットは `question-components.md`、パス・カラー・命名は `templates-and-paths.md` を参照。

このフェーズで1回の処理として実行すること:
1. 共通部品ファイル（JS/CSS）のコピーと設定
2. sidebar-content.js に全回分の定義を設定
3. 第1回の練習問題HTMLファイルを生成

---

## 1. README分析

`step1-readme-curriculum.md` で作成した README.md を読み込み、以下を抽出する。

- 技術名
- 全回のタイトル一覧
- 第1回の詳細情報（難易度・問題形式・内容）

---

## 2. 共通ファイルのコピーと設定

`templates/v3/html_practice/` から以下4ファイルを練習問題フォルダ（`docs/practice/[分類パス]/[技術名]/`）へコピーする。

- `styles.css` — 共通カスタムスタイル（**コピー後にカラー置換が必要**）
- `main.js` — 共通機能（そのまま）
- `drawing-tool.js` — 描画ツール機能（そのまま）
- `sidebar-content.js` — サイドバー動的生成（次の手順で `chapters` 配列を編集）

### styles.css のプレースホルダー置換（必須）

テンプレートの styles.css には `{{PRIMARY_300}}` `{{PRIMARY_400}}` `{{PRIMARY_500}}` `{{PRIMARY_600}}` `{{PRIMARY_700}}` `{{PRIMARY_RGB}}` が含まれる。コピー後、**必ず実カラー値へ置換**する（未置換はCSS破損）。

技術別カラー値は `templates-and-paths.md`「技術別カラー設定（抜粋）」、網羅表は `templates/v3/reference/color-themes.md` を参照。

---

## 3. sidebar-content.js の編集

テンプレートからコピーした `sidebar-content.js` の `chapters` 配列部分**のみ**を編集する。

**絶対に守ること:**
- `createSidebar()` 関数、`insertSidebar()` 関数等は削除・変更しない。
- 編集するのは `chapters` 配列の中身だけ。

```javascript
const chapters = [
    { number: 1, title: '第1回: 基本文法の確認', file: 'python-basics-practice-01.html' },
    { number: 2, title: '第2回: データ型と演算', file: 'python-basics-practice-02.html' },
    // ... 全回分を定義（README.mdの構成に合わせる）
];
```

全回分（README の総回数すべて）をここで定義する。これにより各回HTMLからサイドバーが正しく生成される。

---

## 4. 第1回の練習問題HTML生成

`templates/v3/html_practice/practice-template.html` をベースに第1回を生成する。

### HTML構成要素

練習問題HTMLには以下を含める。

1. **ヘッダー**: 回数・タイトル・難易度表示
2. **実施ルール**: 練習問題の取り組み方の説明
3. **問題セクション**: 各問題は `<details>` タグで回答を展開（`question-components.md` のスニペットを使用）
4. **回まとめ**: 学習ポイントのまとめ
5. **ナビゲーション**: 前回/次回へのリンク

### 問題形式のコンポーネント（クリック展開式）

**重要**: 回答は `<details>` タグを使用し、「回答を表示」クリックで展開する形式にする。**textarea 入力欄や「実行して確認」ボタンは使用しない。** コーディング問題・選択問題等のスニペットは `question-components.md` に集約しているので、必ずそれを使用する。

### スクリプト読込順とヘッダー（厳守）

- スクリプト読込順: styles.css → sidebar-content.js → main.js → drawing-tool.js（最後に `hljs.highlightAll();`）。詳細は `shared-rules.md`。
- ダークモードボタンをHTMLに手書きしない（main.js が動的生成）。ヘッダー構造を変更しない。

---

## 5. 初心者向け重点事項

- 問題文は明確で理解しやすく。
- 解説は「なぜそうなるか」を丁寧に説明する。
- コード例は実行可能な完全なコードを記載する。

---

## 6. 生成後のファイル構成

```
docs/practice/[分類パス]/[技術名]/
├── README.md                       # 準備フェーズ1で作成
├── sidebar-content.js              # 全回分の定義を含む
├── styles.css                      # カラー置換済み
├── main.js
├── drawing-tool.js
└── [技術名]-practice-01.html       # 第1回（以降の構造テンプレ）
```

このフェーズで生成するもの:
1. `styles.css`（カラー置換済み）
2. `main.js`
3. `drawing-tool.js`
4. `sidebar-content.js`（全回定義済み）
5. `[技術名]-practice-01.html`（第1回）

第1回HTML生成まで完了したら、生成フェーズ（第2回以降の並列生成）へ進む。
