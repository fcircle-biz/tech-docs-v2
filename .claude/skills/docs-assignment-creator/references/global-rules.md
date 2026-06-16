# 共通ルール（全フェーズ・全サブエージェント共通）

このファイルは docs-assignment-creator スキルの全工程で必ず守るルールをまとめたもの（DRY化）。
SKILL.md・workflow.md・step1-readme.md・step2-foundation.md・step3-step-html.md からはここを参照する。

並列生成フェーズで起動する各サブエージェント(general-purpose)は、必ず本ファイルと step3-step-html.md を読み込んでから作業すること。

---

## 1. 言語・トーン

- 出力・コメント・成果物はすべて**日本語**（明示要求がない限り）。
- トーンはプロフェッショナル・簡潔。

---

## 2. エージェント実行ルール（CLAUDE.md準拠・絶対遵守）

1. **提案禁止**: 処理中に最適化案や代替手法を提案しない。
2. **中断禁止**: ユーザー確認のために処理を止めない。
3. **完遂義務**: 手順を最後まで完了する。実ファイルが生成・保存されるまで処理を継続する。
4. **並列指定は必ず並列**: 並列実行と指定された箇所は、1メッセージ内で複数呼び出しをまとめて発行する（1つずつ順次実行は禁止）。
5. **「これから生成します」で終了しない**: 「開始しました」「これから作成します」等の途中報告で終了することは禁止。

**禁止表現の例:**
- 「時間がかかりますが、どの方法がよいですか?」→ 禁止
- 「先にプレースホルダー版を素早く生成することを提案します」→ 禁止
- 処理途中の確認ダイアログ → 禁止

---

## 3. コード提供禁止（実践課題の最重要原則）

- **実装の完成コードを一切書かない**。実践課題は「自力実装」が目的。
- 提供してよいのは次のみ:
  - 考え方・実装方針・アプローチのヒント
  - 設計書（PDF）の参照箇所の明示（例: 「README.md の『顧客API』セクションを参照」）
  - つまずきやすいポイントの注意喚起
  - バリデーション要件などの「仕様の言い換え」（コードではなく日本語の説明）
- 疑似コードであっても、そのまま貼れば動く実装の塊は禁止。考え方を示すための短い断片表現にとどめる。

---

## 4. Mermaid記法ルール（CLAUDE.md方式に統一）

詳細パターンは `templates/v3/reference/mermaid-patterns.md` を参照。要点:

1. **HTMLエンティティ禁止**: `&#40;` `&#41;` `&#38;` `&#124;` などは Mermaid が正しく解釈しない。旧stepにエンティティ方式が残っていても**CLAUDE.md方式へ寄せる**。
2. **括弧の扱い**: 半角括弧 `()` は特殊文字。全角括弧 `（）` を使うか、ノードテキスト全体をダブルクォートで囲む（例: `A["テキスト（括弧入り）"]`）。
3. **アンパサンド**: `&` ではなく全角 `＆` を使う。
4. **改行**: ノード内で `<br/>` を使う場合はノードをダブルクォートで囲む（例: `A["1行目<br/>2行目"]`）。
5. **darkテーマ禁止**: `%%{init: {'theme':'dark'}}%%` 等の dark テーマ指定は使わない。

**正しい例:**
```
flowchart TD
    A["Step 1: 概要（現在地）"] --> B{OS}
    B -->|Windows| C["Windows環境構築"]
```

---

## 5. テキスト視認性ルール

1. **半透明背景禁止**: `bg-white/70` `bg-white/60` `bg-white/50` 等を使わない。
2. **不透明な同系色背景を使う**: カード内に内側ボックスを置くときは、同系色の `-100` シェードを背景に、`-900` をテキストに使う。

| 親カードの色 | 内側ボックス背景 | テキスト色 |
|------------|----------------|-----------|
| Purple | `bg-purple-100` | `text-purple-900` |
| Blue | `bg-blue-100` | `text-blue-900` |
| Green (Emerald) | `bg-emerald-100` | `text-emerald-900` |
| Orange | `bg-orange-100` | `text-orange-900` |

---

## 6. ヘッダー・スクリプト・カラーの厳守事項

- **ダークモードボタンを手書きしない**: `main.js` が動的生成する。HTMLにダークモードボタンを書き足さない。
- **ヘッダー構造を変えない**: テンプレートのヘッダーのクラス名・構造を維持する。
- **スクリプト読込順**: `styles.css` → `sidebar-content.js` → `main.js` → `drawing-tool.js` の順。
- **styles.css のプレースホルダー置換**: `{{PRIMARY_300}}` `{{PRIMARY_400}}` `{{PRIMARY_500}}` `{{PRIMARY_600}}` `{{PRIMARY_700}}` `{{PRIMARY_RGB}}` が残っていると CSS が壊れる。必ず実カラー値へ置換する。
  - **補足（実践課題テンプレートの実情）**: `templates/v3/html_assignment/styles.css` は最初からオレンジ系の実値（`--primary-500: #f97316` 等）が設定済みでプレースホルダーが無い場合がある。コピー後に `{{PRIMARY_*}}` が残っていないか必ず確認し、残っていればオレンジ系（後述）へ置換すること。
- **共通部品の上書き禁止**: 並列生成フェーズで起動するサブエージェントは `sidebar-content.js` `styles.css` `main.js` `drawing-tool.js` を上書きしない。既存のものを使う。

### オレンジ系カラー値（実践課題の primary）

```css
--primary-400: #fb923c;
--primary-500: #f97316;
--primary-700: #c2410c;
--primary-rgb: 249, 115, 22;
```

Tailwind config の primary スケール（全段階）:

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#fff7ed',
                    100: '#ffedd5',
                    200: '#fed7aa',
                    300: '#fdba74',
                    400: '#fb923c',
                    500: '#f97316',
                    600: '#ea580c',
                    700: '#c2410c',
                    800: '#9a3412',
                    900: '#7c2d12',
                }
            }
        }
    }
}
```

カラー方針の詳細は `templates/v3/reference/color-themes.md` を参照。

---

## 7. バージョン管理

- 初回バージョン: カテゴリフォルダ（`docs/assignment/[課題名]/`）に直接作成。
- 出力先に既存ファイルがある場合: 既存内容を `v1/`、`v2/` … のサブフォルダへ退避してから新規作成する。
- `v1/` `v2/` 等は過去バージョンのバックアップであり、アクティブなコンテンツではない（Glob検索からは除外する）。

---

## 8. 命名規則・URL形式

- README: そのまま `README.md`
- HTMLファイル: `[課題名]-assignment-[ステップ番号:2桁].html`
  - 例: `order-management-v1-assignment-01.html`
- 課題名は specs フォルダ名から抽出（例: `specs/order-management-v1/docs` → `order-management-v1`）。
- GitHub Pages URL形式:
  `https://fcircle-biz.github.io/tech_docs/assignment/[課題名]/[ファイル名].html`

---

## 9. パス・拡張子に関する是正事項

- **絶対パスのハードコード禁止**: `/home/...` `/Users/...` 等の環境依存絶対パスを資料・コマンドに書かない。リポジトリルート相対で書く（例: `docs/assignment/...`、`node scripts/md-to-pdf.mjs`）。
- 画像を扱う場合は拡張子を **PNG** に統一する。
- Glob検索では旧バージョンフォルダ（`v1/`, `v2/` 等）を除外する。

---

## 10. 参照すべき共有リポジトリファイル（複製せず参照）

| 内容 | パス |
|------|------|
| 9分類体系（タクソノミー） | `tech-knowledge-map.md` |
| カラーテーマ | `templates/v3/reference/color-themes.md` |
| Tailwind CSS スタイルガイド | `templates/v3/reference/css-styles.md` |
| Mermaid 図パターン詳細 | `templates/v3/reference/mermaid-patterns.md` |
| カードコンポーネント集 | `templates/v3/snippets/components.html` |
| 実践課題テンプレート一式 | `templates/v3/html_assignment/` |
| MarkdownのPDF変換スクリプト | `scripts/md-to-pdf.mjs`（`node scripts/md-to-pdf.mjs [mdパス]` で実行） |

これらの値は references に丸写しせず、上記パスを指し示すこと（代表値の抜粋表は可）。
