# Suite Procedure（一括並列生成のオーケストレーション手順）

docs-suite-creator スキル本体（メイン会話ループ）が、1トピックから複数資料タイプを並列生成し一括検証するための詳細手順。資料タイプ別の対応関係（スキル名・引数・出力先・URL）は `material-types.md` を参照。

---

## 全体フロー

```
Phase 1: 引数解析（逐次・本体が直接実行）
   技術名・資料タイプ・不足情報を確定
        ↓
Phase 2: 並列生成（外側＝資料タイプ並列 / 内側＝章・ステップ・回 並列）
   Agent ツール（既定）で外側並列（Workflow ツールは利用可能なら任意）
        ↓
Phase 3: 検証（全完了後・一括）
   docs-reviewer スキル または 本ファイルのチェックリスト
        ↓
Phase 4: 統合報告（逐次・本体が直接実行）
   Glob で全生成物確認 → 資料タイプ別ファイル一覧＋URL を日本語で報告
```

---

## Phase 1: 引数解析

### 1-1. 入力の分解

入力形式: `[技術名] [任意:資料タイプCSV]`

1. 第1トークンを **技術名** とする（kebab-case 推奨。slide のみ「教材タイトル」、tutorial は「アプリタイプ」、assignment は「仕様書フォルダパス」が実体になる点に注意）。
2. 第2トークン以降（CSV）を **資料タイプ集合** とする。カンマ区切りで `guide,practice,cheatsheet,tutorial,assignment,slide` から解釈。
3. CSV が省略された場合は **既定セット `guide,practice,cheatsheet`** を採用する。
4. 不正・未知の資料タイプ名が含まれる場合は、無視せずユーザーに指摘して正す。

### 1-2. 駆動可否の判定と不足情報の確認

`material-types.md` の対応表で各資料タイプの「技術名のみで駆動可能か」を判定する。

- `guide` / `practice`: 技術名のみで駆動可。追加確認不要。
- `cheatsheet`: 技術名からカテゴリパスを9分類体系（`tech-knowledge-map.md`）で導出。導出が曖昧な場合のみカテゴリパスをユーザーに確認。
- `tutorial`: specs アプリタイプ（`specs/[アプリタイプ]/README.md` の存在を確認）・環境・DB構成が必要。**不足していればユーザーに確認**。
- `assignment`: specs 仕様書フォルダパス（例 `specs/[課題名]/docs`）が必要。**不足していればユーザーに確認**。
- `slide`: `work_pdf/` のPDF配置と教材タイトルが必要。未配置なら配置を案内する。

> **このスキルにおける確認の扱い:** CLAUDE.md のエージェント実行ルールは「処理中の確認・中断」を禁じるが、それは**生成処理が始まった後**の話。本スキルでは specs/PDF 等の前提が欠けると委譲先スキルが正しく動けないため、**引数解析フェーズ（生成開始前）に限り**、tutorial/assignment/slide の不足情報をユーザーに確認することを許容する。確認は生成開始前に解消し、Phase 2 以降は確認・中断しない。

### 1-3. 実行計画の確定

確定した「技術名・各資料タイプ・各タイプへ渡す引数」を内部で整理する（次フェーズの並列起動の入力になる）。資料タイプ間は別ディレクトリ・別ファイル名で競合しないことを確認する（`material-types.md` の出力ディレクトリ列）。

---

## Phase 2: 並列生成（資料タイプ＝外側 / 章・回＝内側 のネスト）

各資料タイプを、対応する creator スキルの手順で生成する。資料タイプ間は独立しているため**並列化必須**。並列は2段ネスト構造とする。

- **外側並列**: 資料タイプ（guide / practice / cheatsheet …）どうし。
- **内側並列**: 各資料内の第2章〜最終章 / 第2ステップ〜最終ステップ / 第2回〜最終回（各 creator スキルが規定する並列ファンアウト）。

### 方式A: Agent ツール（標準・既定）

sibling の各 creator スキルと同じく、外側並列を **Agent ツール（`subagent_type=general-purpose`）** で実現する。これを既定とする。

> **重要: 並列呼び出しは1メッセージにまとめる。** 資料タイプ分の Agent 呼び出しを**1つのメッセージ内でまとめて発行**し並列実行する。1資料タイプずつ順次起動するのは禁止。

各サブエージェント（資料タイプごとに1つ）への最小指示の要旨:

> あなたは「[資料タイプ]」担当。`material-types.md` の対応表で示された creator スキル（例: guide → docs-guide-creator）の references に従い、技術名「[技術名]」（tutorial/assignment/slide は加えて specs パス/環境/DB/教材タイトル等）から、その1資料タイプ分（README・共通部品・全章/全ステップ/全回HTML、cheatsheet/slide は index.html ほか）を生成して Write せよ。
> - 資料内の第2単位以降（第2章/第2ステップ/第2回〜）は、担当 creator スキルの規定どおり**内側で並列ファンアウト**してよい。
> - 共通部品（`styles.css` / `sidebar-content.js` / `main.js` / `drawing-tool.js`）は資料タイプ内で1回だけ用意し、章/回サブエージェントでは**上書き禁止**。
> - `styles.css` の `{{PRIMARY_300/400/500/600/700/RGB}}` は必ず実カラー値へ置換すること（未置換はCSS破損）。
> - パスはリポジトリルート相対。絶対パス（`/home/...` `/Users/...`）のハードコード禁止。
> - 削除予定の旧 agent 型（`tech-guide-creator-step3` 等）は呼ばない。

各 Agent 呼び出しに渡す可変情報: 担当資料タイプ・技術名・そのタイプ固有の引数（specs パス/環境/DB/カテゴリパス/教材タイトル）。

### 方式B: Workflow ツール（任意・利用可能な場合のみ）

ネスト並列（外側＝資料タイプ、内側＝章/ステップ/回）を構造として表現できる Workflow ツールが環境で利用可能なら、それを使ってもよい（skill-triggered opt-in／任意）。利用できない環境では方式A（Agent ツール）を用いる。

### バージョン管理（全資料タイプ共通）

各資料タイプの出力先（`material-types.md` 参照）に既存ファイルがあれば、委譲先スキルのルールに従い `v1/`/`v2/`/… へ退避してから新規作成する。

---

## Phase 3: 検証（全完了後・一括）

全資料タイプの生成完了後に**一括検証**する。

1. **docs-reviewer スキルが利用可能な場合**: そのスキルの手順で全生成物（複数資料タイプ）を検証する。docs-reviewer は複数サブエージェントで並列検証する再利用部品なので、生成した全ディレクトリを対象に渡す。
2. **docs-reviewer が未導入の場合**: 下記チェックリストで本体が代替検証する。

### 検証チェックリスト（docs-reviewer 代替時）

各資料タイプの生成HTML/共通部品について、以下を確認する。

- [ ] `styles.css` の `{{PRIMARY_300}}` `{{PRIMARY_400}}` `{{PRIMARY_500}}` `{{PRIMARY_600}}` `{{PRIMARY_700}}` `{{PRIMARY_RGB}}` が実カラー値に置換済み（未置換テキストが残っていない）。
- [ ] スクリプト読込順が `styles.css` → `sidebar-content.js` → `main.js` → `drawing-tool.js`（cheatsheet は `styles.css` → `main.js`、slide はテンプレート既定）。
- [ ] Mermaid記法が CLAUDE.md 方式（HTMLエンティティ `&#40;` `&#124;` 等を使わない／半角括弧は全角化かノードをダブルクォートで囲む／`&` は全角`＆`／`<br/>` はノードをダブルクォートで囲む／darkテーマ不使用）。詳細は `templates/v3/reference/mermaid-patterns.md`。
- [ ] テキスト視認性: 半透明背景（`bg-white/70` 等）を使わず、内側ボックスは親と同系色の `-100` 背景＋`-900` テキスト。
- [ ] ヘッダー: ダークモードボタンを HTML に手書きしていない（`main.js` が動的生成）。ヘッダー構造を変えていない。
- [ ] 絶対パスのハードコードがない（`/home/...` `/Users/...` 等が混入していない）。画像拡張子は PNG に統一（illustration 系を含む場合）。
- [ ] 委譲先固有ルール: practice は `<details>` 展開式（textarea/実行ボタン不使用）、assignment は完成コード不掲載（ヒントのみ）。

指摘が出た場合は、該当資料タイプの生成物を修正する（docs-reviewer 使用時はそのスキルの修正フローに従う）。

---

## Phase 4: 統合報告

1. **Glob で生成物を確認**する。`v1/`/`v2/` 等の旧バージョンフォルダは検索から除外する。資料タイプごとに出力ディレクトリ（`material-types.md` の出力ディレクトリ列）を対象にする。
2. 資料タイプごとに、**生成ファイル一覧**と**GitHub Pages URL**をまとめて日本語で報告する。

### 報告フォーマット例

```
## 一括生成 完了報告（技術名: docker）

### guide（学習ガイド） — docs/guide/[分類パス]/docker/
- README.md
- docker-learning-material-01.html … NN.html
- 共通部品: styles.css / sidebar-content.js / main.js / drawing-tool.js
- URL: https://fcircle-biz.github.io/tech_docs/guide/[分類パス]/docker/docker-learning-material-01.html （以降 NN）

### practice（練習問題） — docs/practice/[分類パス]/docker/
- README.md / docker-practice-01.html … / 共通部品4ファイル
- URL: https://fcircle-biz.github.io/tech_docs/practice/[分類パス]/docker/docker-practice-01.html （以降 NN）

### cheatsheet（チートシート） — docs/cheatsheet/[カテゴリパス]/docker/
- index.html / styles.css / main.js
- URL: https://fcircle-biz.github.io/tech_docs/cheatsheet/[カテゴリパス]/docker/index.html

（検証結果のサマリ: 指摘有無・修正有無）
```

URL形式の詳細は `material-types.md`「4. GitHub Pages URL の共通形式」を参照。

---

## オーケストレーション時の遵守事項（要約）

- 外側並列（資料タイプ別）は **1メッセージにまとめて**発行（Agent 方式時）。内側並列は各 creator スキルの規定どおり。
- 委譲先スキルの注意事項（カラー置換・回答形式・コード提供禁止・テーマ色 等）は委譲先のものを尊重し、本スキルで上書きしない。
- 共有データ（9分類・カラー・Tailwind・Mermaid・コンポーネント）は複製せず、`tech-knowledge-map.md` / `templates/v3/reference/*` / `templates/v3/snippets/components.html` を参照する。
- specs/PDF 由来の不足情報の確認は Phase 1（生成開始前）でのみ行い、以降は確認・中断しない。
