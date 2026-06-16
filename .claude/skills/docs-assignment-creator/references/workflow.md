# ワークフロー（オーケストレーション）

このファイルは docs-assignment-creator スキル本体（メイン会話ループ）が実践課題資料を一括生成する際の進行管理手順をまとめたもの。

共通ルールは `global-rules.md` を必ず参照（言語・エージェント実行ルール・コード提供禁止・命名・URL 等）。

---

## 役割

スキル本体は実践課題資料作成の全工程を**自分で**管理・実行する。
旧 workflow エージェントが Task で step3 を並列起動していた挙動を、スキル本体が **Agent ツール（subagent_type=general-purpose）** で再現する。
削除予定の旧 agent型（`assignment-creator-step3` 等）は呼び出さない。

入力: 仕様書フォルダパス（例: `specs/order-management-v1/docs`）。課題名はフォルダ名から自動抽出。

---

## 全体フロー

```
┌─────────────────────────────────────────────────────────────────┐
│  Phase 1: README作成（準備・逐次・本体が直接実行）              │
│  step1-readme.md の手順                                          │
│  → docs/assignment/[課題名]/README.md 生成                      │
│  → docs/assignment/[課題名]/docs/ に設計資料コピー＋PDF変換     │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│  Phase 2: 土台作成（準備・逐次・本体が直接実行）                │
│  step2-foundation.md の手順                                      │
│  → 共通部品（JS/CSS）コピー＋オレンジ色設定                     │
│  → sidebar-content.js に全ステップ定義                          │
│  → Step1 (01) HTML 生成（以降の構造ベースになる）              │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│  Phase 3: 並列HTML生成（生成・ファンアウト）                    │
│  Step2(02)〜最終ステップを Agent ツールで並列生成               │
│  （general-purpose、1メッセージ内にまとめて発行）              │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│  Phase 4: 検証                                                   │
│  docs-reviewer スキル or step3-step-html.md のチェックリスト  │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│  Phase 5: 報告                                                   │
│  Glob で生成物確認 → ファイル一覧＋GitHub Pages URL を日本語で   │
└─────────────────────────────────────────────────────────────────┘
```

---

## Phase 1: README作成（準備フェーズ・逐次）

`step1-readme.md` の手順に従い、本体が直接実行する:
1. 仕様書フォルダ（`specs/[課題名]/docs/`）の設計書を分析。
2. 出力先 `docs/assignment/[課題名]/` を決定（既存があればバージョン管理）。
3. ステップ構成を設計し README.md を生成。
4. `specs/[課題名]/docs/` 全体を `docs/assignment/[課題名]/docs/` にコピー。
5. 各 Markdown（README.md / database.md / implementation-guide.md）を `node scripts/md-to-pdf.mjs [mdパス]` で PDF 化。

**完了確認**: `docs/assignment/[課題名]/README.md` が生成され、`docs/assignment/[課題名]/docs/` に設計資料（md＋pdf＋mockups/）が揃っていること。

---

## Phase 2: 土台作成（準備フェーズ・逐次）

`step2-foundation.md` の手順に従い、本体が直接実行する:
1. 共通部品（`styles.css` `main.js` `drawing-tool.js` `sidebar-content.js`）を `templates/v3/html_assignment/` からコピー。
2. オレンジ系カラー設定（`global-rules.md`「6.」のカラー値）。`{{PRIMARY_*}}` が残っていれば置換。
3. `sidebar-content.js` の `steps` 配列に全ステップを定義。
4. Step1 (`[課題名]-assignment-01.html`) を生成。

**完了確認**:
- `styles.css`, `main.js`, `drawing-tool.js`, `sidebar-content.js` が生成済み（カラー・全ステップ定義反映済み）。
- `docs/mockups/` が参照可能。
- `[課題名]-assignment-01.html` が生成済み。これが Phase 3 の構造ベースになる。

---

## Phase 3: 並列HTML生成（生成フェーズ・ファンアウト）

### 総ステップ数の取得

README.md の「学習コンテンツ」セクション（または「推奨所要時間」表）から総ステップ数 N を取得する。

### 並列起動（最重要）

Step2(02)〜最終ステップ(N) を **1つのメッセージ内で Agent ツール呼び出しをまとめて発行し並列実行**する。1つずつ順次起動は禁止。

各サブエージェントへの指示は最小限とし、次を渡す（`subagent_type=general-purpose`）:
- 読むべきファイル: `.claude/skills/docs-assignment-creator/references/step3-step-html.md` と `.claude/skills/docs-assignment-creator/references/global-rules.md`
- 構造ベースにする第1ステップHTMLのパス: `docs/assignment/[課題名]/[課題名]-assignment-01.html`
- README.md のパス: `docs/assignment/[課題名]/README.md`
- 設計書のパス: `docs/assignment/[課題名]/docs/`（README.md / database.md / implementation-guide.md / mockups/）
- 担当ステップ番号: 2, 3, …, N（エージェントごとに1つ）
- 指示の骨子: 「step3-step-html.md と共通HTMLルール（global-rules.md）を読み、第1ステップHTML（パス指定）を構造ベースに、README（パス指定）と設計書（パス指定）から該当ステップ番号の情報を抽出して**1ステップ分のHTMLを生成しWriteせよ**。共通部品（JS/CSS/sidebar）は上書き禁止。コードは書かずヒントのみ。」

**例（6ステップ・N=6 の場合、1メッセージで Agent を5つ並列起動）:**
```
Agent(general-purpose): ステップ2を生成（上記パス群＋step=2）
Agent(general-purpose): ステップ3を生成（上記パス群＋step=3）
Agent(general-purpose): ステップ4を生成（上記パス群＋step=4）
Agent(general-purpose): ステップ5を生成（上記パス群＋step=5）
Agent(general-purpose): ステップ6を生成（上記パス群＋step=6）
```

### エラー時継続

1つのステップでエラーが発生しても他は継続する。失敗したステップは Phase 5 で報告し、単一ステップ再生成モード（`--step N`）で再実行できる旨を案内する。

---

## Phase 4: 検証

`docs-reviewer` スキルの手順（利用可能な場合）、または `step3-step-html.md` の「検証チェックリスト」で生成物を確認する。主な確認観点:
- 実装コードが書かれていないか（ヒントのみか）。
- ヘッダーにダークモードボタンを手書きしていないか／ヘッダー構造が維持されているか。
- スクリプト読込順（styles.css → sidebar-content.js → main.js → drawing-tool.js）。
- `{{PRIMARY_*}}` プレースホルダーが残っていないか。
- Mermaid が CLAUDE.md方式（エンティティなし・dark禁止）か。
- 半透明背景を使っていないか。
- 設計書リンクが `docs/*.pdf`、モックが `docs/mockups/*.html` を指しているか。

---

## Phase 5: 報告（Glob で確認 → 日本語で報告）

Glob（`docs/assignment/[課題名]/*.html` 等。`v1/` `v2/` は除外）で生成物を確認し、以下の形式で日本語報告:

```
## 実践課題資料の生成完了

### 生成されたファイル

📁 docs/assignment/[課題名]/
├── README.md
├── styles.css
├── main.js
├── drawing-tool.js
├── sidebar-content.js
├── docs/
│   ├── README.md / README.pdf
│   ├── database.md / database.pdf
│   ├── implementation-guide.md / implementation-guide.pdf
│   └── mockups/（index.html, dashboard.html, ...）
├── [課題名]-assignment-01.html
├── [課題名]-assignment-02.html
├── ...
└── [課題名]-assignment-NN.html

### GitHub Pages URL

https://fcircle-biz.github.io/tech_docs/assignment/[課題名]/[課題名]-assignment-01.html
（他ステップも同形式）

### 次のステップ
1. 生成されたファイルを確認
2. 必要に応じて内容を微調整
3. git add / commit / push で公開
```

一部ステップが失敗した場合:
```
⚠️ 一部のステップで生成に失敗しました。
✅ 成功: Step 2, 3, 4, 6
❌ 失敗: Step 5 / 原因: [エラー内容]
対処: 単一ステップ再生成モードで再実行してください（/docs-assignment-creator [仕様書フォルダ] --step 5）。
```

---

## 禁止事項（再掲）

- 処理途中でユーザーに確認を求めること。
- 「これから実行します」と報告して終了すること（実ファイル生成まで継続）。
- Phase 3 で順次実行すること（必ず1メッセージで並列起動）。
- 削除予定の旧 agent型（`assignment-creator-step3` 等）を呼び出すこと。
