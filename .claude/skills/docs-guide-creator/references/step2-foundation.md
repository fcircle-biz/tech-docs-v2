# step2: 土台作成（共通部品＋第1章HTML）

技術分野の初心者向けHTMLベース教育コンテンツ作成の専門家として、技術フォルダの「土台作り」を担当する。

以下を1回の準備フェーズで実行する。

1. 共通部品ファイル（JS/CSS）のコピーと設定
2. `sidebar-content.js` に全章分の定義を設定
3. 第1章のHTMLファイルを生成

この第1章HTMLが、第2章以降の構造テンプレ（継承元）になる。

## 1. README分析

対象フォルダの README.md を読み込み、以下を抽出する。

- 技術名
- 全章のタイトル一覧
- 第1章の詳細情報（学習目標、内容）

## 2. 共通ファイルのコピーと設定

`templates/v3/html/` から以下4ファイルを技術フォルダにコピーする。

- `styles.css` — 共通カスタムスタイル（**コピー後に修正が必要**）
- `main.js` — 共通機能
- `drawing-tool.js` — 描画ツール機能
- `sidebar-content.js` — サイドバー動的生成（後で編集）

### styles.css のプレースホルダー置換（必須）

⚠️ テンプレートの `styles.css` にはプレースホルダー `{{PRIMARY_XXX}}` が含まれている。**コピー後、必ず実際の値に置換すること。置換しないと CSS が壊れる。**

```css
/* テンプレートのプレースホルダー */
--primary-300: {{PRIMARY_300}};
--primary-400: {{PRIMARY_400}};
--primary-500: {{PRIMARY_500}};
--primary-600: {{PRIMARY_600}};
--primary-700: {{PRIMARY_700}};
--primary-rgb: {{PRIMARY_RGB}};

/* ↓ 例: SQL (sky) の場合に置換後 */
--primary-300: #7dd3fc;
--primary-400: #38bdf8;
--primary-500: #0ea5e9;
--primary-600: #0284c7;
--primary-700: #0369a1;
--primary-rgb: 14, 165, 233;
```

技術別カラーは tailwind.config の primary パレット(50-900) と styles.css :root の {{PRIMARY_*}} の **2箇所**に同じ技術カラーを設定する（値は templates/v3/reference/color-themes.md 参照）。テンプレHTMLには JetBrains Mono とスプラッシュ template が含まれ、ヘッダーは全技術共通のグラファイトガラス（識別色は primary→cyan のレールで表現）になる。

**技術別カラー設定一覧**（正典は `templates/v3/reference/color-themes.md`。以下は代表値の抜粋）:

| 技術 | {{PRIMARY_300}} | {{PRIMARY_400}} | {{PRIMARY_500}} | {{PRIMARY_600}} | {{PRIMARY_700}} | {{PRIMARY_RGB}} |
|------|-----------------|-----------------|-----------------|-----------------|-----------------|-----------------|
| Python/PostgreSQL (blue) | `#93c5fd` | `#60a5fa` | `#3b82f6` | `#2563eb` | `#1d4ed8` | `59, 130, 246` |
| Java/AWS (orange) | `#fdba74` | `#fb923c` | `#f97316` | `#ea580c` | `#c2410c` | `249, 115, 22` |
| SQL/Docker (sky) | `#7dd3fc` | `#38bdf8` | `#0ea5e9` | `#0284c7` | `#0369a1` | `14, 165, 233` |
| Spring/Excel (emerald) | `#6ee7b7` | `#34d399` | `#10b981` | `#059669` | `#047857` | `16, 185, 129` |
| .NET (violet) | `#c4b5fd` | `#a78bfa` | `#8b5cf6` | `#7c3aed` | `#6d28d9` | `139, 92, 246` |
| React (cyan) | `#67e8f9` | `#22d3ee` | `#06b6d4` | `#0891b2` | `#0e7490` | `6, 182, 212` |
| JavaScript (yellow) | `#fde047` | `#facc15` | `#eab308` | `#ca8a04` | `#a16207` | `234, 179, 8` |
| PHP (indigo) | `#a5b4fc` | `#818cf8` | `#6366f1` | `#4f46e5` | `#4338ca` | `99, 102, 241` |
| Oracle (red) | `#fca5a5` | `#f87171` | `#ef4444` | `#dc2626` | `#b91c1c` | `239, 68, 68` |
| AI/ML (purple) | `#d8b4fe` | `#c084fc` | `#a855f7` | `#9333ea` | `#7e22ce` | `168, 85, 247` |
| Git (slate) | `#cbd5e1` | `#94a3b8` | `#64748b` | `#475569` | `#334155` | `100, 116, 139` |

**注意**: この変数がアクセント（セクション見出しのレール・アイコンチップ・ボタン・サイドバー強調・ヘッダーのレール等）の色を決める（ヘッダー背景自体はグラファイトガラス固定）。プレースホルダーのまま放置すると CSS エラーになる。styles.css のプレースホルダーは **6個**（300/400/500/600/700/RGB）すべてを置換すること。

## 3. sidebar-content.js の編集（重要）

**テンプレートからコピーした `sidebar-content.js` の `chapters` 配列部分のみを編集する。**

⚠️ **絶対に守ること**:
- テンプレートファイルには `chapters` 配列の他に、`createSidebar()` 関数、`insertSidebar()` 関数、即時実行関数（IIFE）が含まれている。
- **これらの関数部分は絶対に削除・変更しない。**
- 編集するのは `chapters` 配列の中身だけ。

```javascript
// ========================================
// TODO: 章の定義データをカスタマイズ
// ========================================
const chapters = [
    { number: 1, title: '第1章: Dockerとは', file: 'docker-learning-material-01.html' },
    { number: 2, title: '第2章: インストールと環境構築', file: 'docker-learning-material-02.html' },
    // ... 全章分を定義（README.mdの章構成に合わせる）
];

// ↓↓↓ 以下の関数部分はテンプレートのまま維持すること ↓↓↓
// - currentFile, currentChapter, progressPercentage の計算
// - createSidebar() 関数
// - insertSidebar() 関数
// - DOMContentLoaded イベントリスナー
```

**正しい手順**:
1. テンプレートの `sidebar-content.js` を技術フォルダにコピー。
2. コピーしたファイルを開き、`chapters` 配列の中身だけを README.md の章構成に合わせて書き換える（全章分を定義）。
3. 他の部分（約100行の関数コード）はそのまま維持。

## 4. 第1章のHTML生成

`templates/v3/html/learning-material-template.html` をベースに第1章を生成する。

- ファイル名: `[技術名]-learning-material-01.html`
- テンプレート内の `<!-- TODO: ... -->` コメントを検索し編集する。
  - **技術名・タイトル**: プレースホルダーを実際の値に置換。
  - **カラーテーマ**: `tailwind.config` 内の `primary` カラー（`templates/v3/reference/color-themes.md` 参照）。
  - **アイコン**: 適切な Font Awesome アイコン。
  - **コンテンツ**: 学習目標、説明文、コード例、クイズ。

HTML生成の共通ルール（スクリプト読込順・ヘッダー禁止事項・Mermaid・コンポーネント・Highlight.js追加言語・コード方針）は **references/html-rules.md に集約**しているので必ず参照すること。

## 5. 生成後のファイル構成例

```bash
docs/guide/cloud-infrastructure/docker/
├── sidebar-content.js      # 全章分の定義を含む
├── styles.css              # テンプレートからコピー＋{{PRIMARY_*}}置換済み
├── main.js                 # テンプレートからコピー
├── drawing-tool.js         # テンプレートからコピー
└── docker-learning-material-01.html  # 第1章（構造テンプレ）
```

## 6. 初心者向け重点事項

- 理論・背景説明優先（コードより概念説明を重視）。
- 用語解説充実。
- 視覚的理解促進（図表多用）。
- 段階的理解構築。

## 出力

以下を生成し、ファイルパス一覧を報告する。

1. `styles.css`（`{{PRIMARY_*}}` 置換済み）
2. `main.js`
3. `drawing-tool.js`
4. `sidebar-content.js`（全章定義済み）
5. `[技術名]-learning-material-01.html`（第1章）

**第2章以降は、生成フェーズで Agent ツール（`general-purpose`）を1メッセージにまとめて並列起動し、references/step3-chapter.md に従って生成する。**
