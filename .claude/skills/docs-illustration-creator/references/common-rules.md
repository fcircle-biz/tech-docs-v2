# 共通ルール（全フェーズ共通）

docs-illustration-creator スキルの全フェーズ（suggest / illustrate / replace）で必ず守る共通ルール。各 reference からはこのファイルを参照する（DRY化）。

## 出力言語

- すべての出力・コメント・提案レポート・キャプション・altテキストは**日本語**で記述する。
- **例外**: 画像生成AI用プロンプト本文（`--prompt` `--style` `--elements` に渡す英語テキスト）のみ英語。`--labels`（画像内日本語ラベル）は日本語。

## エージェント実行ルール（CLAUDE.md 準拠）

処理中は以下を厳守する。

1. **提案しない**: 処理中に最適化案や代替アプローチを提案しない。
2. **確認・中断しない**: 処理を止めてユーザーに確認を求めない（ただし replace フェーズのファイル名不一致のみ例外。後述）。
3. **最後まで完遂する**: 各フェーズの手順を最後まで実行しきる。
4. **並列指定は必ず並列**: ワークフローで並列指定された処理は必ず並列実行する（1つずつ順次は禁止）。
5. **「これから生成します」で終了しない**: 宣言だけで終わらず、実ファイル（画像・HTML編集）の生成まで継続する。

## バージョン管理

- 出力先（HTML・画像）に既存ファイルがあり、新規バージョンを作る指示がある場合は `v1/` `v2/` ... へ退避してから新規作成する。
- docs-illustration-creator は**既存ガイドへの後付け挿入**が主目的のため、通常は既存HTMLを直接編集する。新規ガイドは作らない。

## 絶対パス禁止

- スクリプト・パスはすべて**リポジトリルート相対**で記述する。
- `/home/ichimaru/...` `/Users/s-ichimaru/...` 等の旧絶対パスはハードコードしない（旧定義に残っていても是正する）。

## 画像拡張子は PNG に統一

- 生成するプレースホルダー画像・差し替え後の実画像はすべて **PNG**（`.png`）で統一する。
- 旧定義に `.jpg` が混在していても **PNG に寄せる**。`create_placeholder_image.py` は `--output` に渡した拡張子で出力するため、必ず `.png` を指定する。
- Glob 検索・命名規則も `.png` 前提で行う。

## 旧バージョンフォルダの除外

- Glob 検索（HTMLファイル列挙・画像列挙）では `v1/` `v2/` 等の過去バージョンフォルダを**必ず除外**する。これらはアクティブコンテンツではない。

## Mermaid 記法（CLAUDE.md 方式に統一）

本スキルは図解を**画像**として挿入するが、対象HTML内の既存Mermaid図を評価・参照する場面がある。Mermaidを扱う際は CLAUDE.md 方式に統一する（旧stepに `&#40;` `&#124;` 等のHTMLエンティティ方式が残っていても寄せる）。

1. **HTMLエンティティを使わない**: `&#40;` `&#41;` `&#38;` `&#124;` などはMermaidで正しく解釈されない。
2. **括弧の扱い**: 半角括弧 `()` は特殊文字として扱われるため、全角括弧 `（）` にするか、ノードテキスト全体をダブルクォートで囲む（例: `A["テキスト（括弧つき）"]`）。
3. **アンパサンド**: `&` ではなく全角 `＆` を使う。
4. **改行**: ノード内で `<br/>` を使う場合はノードテキスト全体をダブルクォートで囲む（例: `A["1行目<br/>2行目"]`）。
5. **darkテーマ禁止**: Mermaid初期化で dark テーマを指定しない。
6. 詳細は `templates/v3/reference/mermaid-patterns.md` を参照する（丸写しせず参照する）。

## テキスト視認性ルール（CLAUDE.md 準拠）

挿入する `<figure>` 等のHTML、およびカード内テキストでは以下を守る。

1. **半透明背景禁止**: `bg-white/70` `bg-white/60` `bg-white/50` 等は使わない。
2. **内側ボックスは同系色の不透明背景**: カード内に内側ボックスを置く場合は同系色の `-100` 背景＋ `-900` テキストを使う。

| 親カード色 | 内側ボックス背景 | テキスト色 |
|-----------|-----------------|-----------|
| Purple | `bg-purple-100` | `text-purple-900` |
| Blue | `bg-blue-100` | `text-blue-900` |
| Green | `bg-emerald-100` | `text-emerald-900` |
| Orange | `bg-orange-100` | `text-orange-900` |

## ヘッダー・スクリプトのルール（HTML編集時）

既存HTMLを編集する際、以下を破壊しない。

- **ダークモードボタンを手書きしない**: `main.js` が動的生成する。ヘッダー構造を変えない。
- **共通部品（JS/CSS/sidebar）を上書きしない**: 図解挿入では本文HTMLのみ編集する。`sidebar-content.js` `styles.css` `main.js` `drawing-tool.js` には触れない。
- **スクリプト読込順**（既存HTMLでは維持）: `styles.css` → `sidebar-content.js` → `main.js` → `drawing-tool.js`。
- **`styles.css` のプレースホルダー**: `{{PRIMARY_300}}` `{{PRIMARY_400}}` `{{PRIMARY_500}}` `{{PRIMARY_600}}` `{{PRIMARY_700}}` `{{PRIMARY_RGB}}` は実カラー値に置換済みであること（既存ガイドでは置換済みのはず。新規コピー時は必ず置換。未置換はCSS破損）。

## 依存関係

- スキル: `create-placeholder-image`（`/create-placeholder-image`）。
- スクリプト: `.claude/skills/create-placeholder-image/scripts/create_placeholder_image.py`。
- 必要ライブラリ: Pillow（`pip install Pillow`）。
- 共有参照ファイル（リポジトリルート相対、丸写しせず参照）:
  - 9分類体系・命名規則: `tech-knowledge-map.md`
  - カラーテーマ: `templates/v3/reference/color-themes.md`
  - Tailwind スタイル: `templates/v3/reference/css-styles.md`
  - Mermaid 詳細: `templates/v3/reference/mermaid-patterns.md`
  - カードコンポーネント: `templates/v3/snippets/components.html`
