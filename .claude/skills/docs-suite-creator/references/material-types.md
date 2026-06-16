# 資料タイプ対応表

docs-suite-creator が指揮する各資料タイプの「対応 creator スキル名・必要引数・技術名のみで駆動可能か・出力ディレクトリ・GitHub Pages URL形式」をまとめる。引数解析フェーズ（どのスキルへ何を渡すか・不足情報の確認要否）と統合報告フェーズ（URLの組み立て）でこの表を真実源とする。

---

## 1. 資料タイプ一覧（対応表）

| 資料タイプ | 対応 creator スキル | 必要引数 | 技術名のみで駆動可能か | 既定セットに含む |
|-----------|--------------------|----------|----------------------|----------------|
| `guide` | `docs-guide-creator` | 技術名 | 可（技術名のみ） | ○ |
| `practice` | `docs-practice-creator` | 技術名 | 可（技術名のみ） | ○ |
| `cheatsheet` | `docs-cheatsheet-creator` | 技術名＋カテゴリパス | 概ね可（カテゴリパスは技術名から9分類で導出可能） | ○ |
| `tutorial` | `docs-tutorial-creator` | アプリタイプ（specs配下フォルダ名）＋環境＋DB構成 | 不可（specs前提） | ×（明示指定時のみ） |
| `assignment` | `docs-assignment-creator` | 仕様書フォルダパス（specs配下） | 不可（specs前提） | ×（明示指定時のみ） |
| `slide` | `docs-slide-creator` | 教材タイトル（＋事前に `work_pdf/` へPDF配置） | 不可（PDF前提） | ×（明示指定時のみ） |

**既定セット**（資料タイプCSV省略時）= `guide,practice,cheatsheet`。いずれも技術名のみ（cheatsheet はカテゴリパス導出込み）で駆動できる。

---

## 2. 各資料タイプの詳細

### guide（学習ガイド）

- スキル: `docs-guide-creator`
- 引数: `[技術名]`（kebab-case）
- 出力ディレクトリ: `docs/guide/[分類パス]/[技術]/`
- 主な生成物: `README.md`、共通部品4ファイル（`styles.css` / `sidebar-content.js` / `main.js` / `drawing-tool.js`）、全章HTML（`[技術名]-learning-material-NN.html`、NN は2桁ゼロ埋め）
- URL形式: `https://fcircle-biz.github.io/tech_docs/guide/[分類パス]/[技術]/[ファイル].html`
- 駆動可否: 技術名のみで可。分類パスは `tech-knowledge-map.md`（9分類）から決定。

### practice（練習問題）

- スキル: `docs-practice-creator`
- 引数: `[技術名]`
- 出力ディレクトリ: `docs/practice/[分類パス]/[技術名]/`
- 主な生成物: `README.md`、共通部品（`styles.css` / `sidebar-content.js` / `main.js` / `drawing-tool.js`）、各回HTML（`[技術名]-practice-NN.html`、NN は2桁ゼロ埋め）
- URL形式: `https://fcircle-biz.github.io/tech_docs/practice/[分類パス]/[技術名]/[ファイル].html`
- 駆動可否: 技術名のみで可。回答は `<details>` クリック展開式（textarea/実行ボタン禁止）。

### cheatsheet（チートシート）

- スキル: `docs-cheatsheet-creator`
- 引数: `[技術名] [カテゴリパス]`
- 出力ディレクトリ: `docs/cheatsheet/[カテゴリパス]/[技術名小文字]/`
- 主な生成物: `index.html` / `styles.css` / `main.js`（sidebar・drawing-tool は不使用）
- URL形式: `https://fcircle-biz.github.io/tech_docs/cheatsheet/[カテゴリパス]/[技術名小文字]/index.html`
- 駆動可否: 概ね可。カテゴリパスは技術名から9分類体系（`tech-knowledge-map.md`、または docs-cheatsheet-creator の `references/category-taxonomy.md`）で導出する。導出が曖昧な場合のみユーザーに確認する。

### tutorial（チュートリアル）※specs前提

- スキル: `docs-tutorial-creator`
- 引数: `[アプリタイプ] [環境] [DB構成]`
  - アプリタイプ: `specs/[アプリタイプ]/README.md` が存在するフォルダ名（例: `todo-app-v1`）
  - 環境: 例 `windows環境` / `mac環境` / `linux環境`
  - DB構成: 例 `postgresqlをdockerで構築` / `sqliteを使用`
- 出力ディレクトリ: `docs/tutorial/[分類パス]/[アプリ]/`
- 主な生成物: `README.md`、共通部品4ファイル（Emerald系テーマ）、ステップ別HTML（`[技術名]-tutorial-NN.html`）
- URL形式: `https://fcircle-biz.github.io/tech_docs/tutorial/[分類パス]/[アプリ]/[ファイル].html`
- 駆動可否: **不可**。技術名だけでは決まらない。含める場合は specs フォルダ名・環境・DB構成をユーザーに確認する。

### assignment（実践課題）※specs前提

- スキル: `docs-assignment-creator`
- 引数: `[仕様書フォルダパス]`（例: `specs/order-management-v1/docs`）。課題名はフォルダ名から自動抽出。
- 出力ディレクトリ: `docs/assignment/[課題名]/`（設計資料は同 `docs/` にコピー＋PDF化）
- 主な生成物: `README.md`、設計資料コピー＋PDF、共通部品4ファイル（オレンジ系テーマ）、各ステップHTML（`...-assignment-NN.html` 等）
- URL形式: `https://fcircle-biz.github.io/tech_docs/assignment/[課題名]/[ファイル].html`
- 駆動可否: **不可**。specs（設計書）フォルダパスが必須。**完成コードは出さずヒントのみ**で自力実装を促す（委譲先の最重要原則）。含める場合は specs パスをユーザーに確認する。

### slide（スライド教材）※PDF前提

- スキル: `docs-slide-creator`
- 引数: `[教材タイトル]`（例: `Excel入門`）。教材名は英語kebab-caseへ自動変換。
- 前提: 実行前に `work_pdf/` へPDFを配置しておくこと。
- 出力ディレクトリ: `docs/slide/[カテゴリパス]/[教材名]/`（`pdf/` にPDF移動、`index.html` / `styles.css` / `main.js` / `slide-content.js`）
- URL形式: `https://fcircle-biz.github.io/tech_docs/slide/[カテゴリパス]/[教材名]/index.html`
- 駆動可否: **不可**。`work_pdf/` にPDFが必要。含める場合はPDF配置の有無と教材タイトルを確認する。

---

## 3. 分類パス・カテゴリパスの決定（共有データは参照のみ）

- 分類パス（guide / practice / tutorial）・カテゴリパス（cheatsheet / slide）は、いずれも `tech-knowledge-map.md` の **9分類体系** に基づいて決定する。値をこの表に丸写しせず、`tech-knowledge-map.md` を参照する。
- 各 creator スキルにも分類決定用の references がある（例: docs-guide-creator の `references/taxonomy-paths.md`、docs-cheatsheet-creator の `references/category-taxonomy.md`、docs-slide-creator の `references/category-paths.md`）。委譲先スキルへ任せる場合はそれらに従わせる。

### 9分類（名称のみ・代表抜粋。詳細・サブパスは tech-knowledge-map.md 参照）

| # | 分類名 | パス接頭辞（例） |
|---|--------|-----------------|
| 1 | Programming Languages | `programming-languages/[ecosystem]/` |
| 2 | Web Technologies | `web-technologies/` |
| 3 | Development Processes | `development-processes/` |
| 4 | Design ＆ Modeling | `design-modeling/` |
| 5 | Cloud ＆ Infrastructure | `cloud-infrastructure/` |
| 6 | Data ＆ AI | `data-ai-category/` |
| 7 | Business SaaS | `business-saas/` |
| 8 | Certifications | `certification/` |
| 9 | Business Domain Knowledge | `business-domain-knowledge/` |

---

## 4. GitHub Pages URL の共通形式

```
https://fcircle-biz.github.io/tech_docs/[資料タイプ]/[分類パス or カテゴリパス]/[技術 or アプリ or 教材名]/[ファイル名]
```

- `[資料タイプ]` は `guide` / `tutorial` / `practice` / `assignment` / `cheatsheet` / `slide`。
- 章/回が複数あるものは各ファイルごとにURLを列挙する。
- cheatsheet / slide は `index.html` が入口。
