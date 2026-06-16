# コンポーネント・カラー・共通HTMLルール・検証チェックリスト

step2（土台作り）／step3（各ステップ生成）の両方から参照する共通ルール集（DRY化）。カードの実体・網羅的なスタイルは `templates/v3/snippets/components.html` を、カラー値は `templates/v3/reference/color-themes.md` を正とする。本書は代表値の抜粋と運用ルール。

## コンポーネント一覧（components.html参照）

HTMLコンテンツ作成時に使用する主なカード:

| コンポーネント | 用途 | スタイル |
|--------------|------|---------|
| 実装目標カード | ステップの冒頭 | `bg-gradient-to-r from-amber-50 to-yellow-50` |
| 実装手順カード | ハンズオン | `bg-gradient-to-r from-purple-50 to-fuchsia-50` |
| 動作確認カード | 実行結果確認 | `bg-gradient-to-r from-emerald-50 to-teal-50` |
| 完了チェックリスト | ステップ完了確認 | `bg-gradient-to-r from-blue-50 to-indigo-50` |
| 警告カード | 注意事項 | `bg-red-50 border-l-4 border-red-500` |
| ヒントカード | Tips | `bg-blue-50 border-l-4 border-blue-500` |
| トラブルシューティング | エラー対応 | `bg-gradient-to-r from-orange-50 to-amber-50` |
| セクションタイトル | 見出し | `border-l-4 border-primary-500 pl-4` |
| コードブロック | コード表示 | `.code-block-wrapper` + コピーボタン |
| ファイル構成 | ディレクトリ表示 | `bg-slate-100` + `<pre>` |

## テキスト視認性ルール（重要）

カード内のテキストが読めるよう、以下を厳守する。

1. **半透明背景を使わない**: `bg-white/70`、`bg-white/60`、`bg-white/50` などは禁止。
2. **不透明な同系色背景を使う**: カード内に内側ボックスを置く場合、親カードと同じ色系統の `-100` シェードを背景にする。

| 親カードの色 | 内側ボックス背景 | テキスト色 |
|------------|----------------|-----------|
| Purple | `bg-purple-100` | `text-purple-900` |
| Blue | `bg-blue-100` | `text-blue-900` |
| Green | `bg-emerald-100` | `text-emerald-900` |
| Orange | `bg-orange-100` | `text-orange-900` |

## 共通HTMLルール

- **スクリプト読み込み順序**: `styles.css` → `sidebar-content.js` → `main.js` → `drawing-tool.js`。
- **ヘッダー**: ダークモードボタンをHTMLに手書きしない（`main.js` が動的生成）。ヘッダー構造（`header-rich` 等のクラス名・構造）を変えない。
- **カラープレースホルダー**: `styles.css` の `{{PRIMARY_300/400/500/600/700/RGB}}` は必ず実カラー値へ置換する（未置換はCSS破損）。チュートリアルはEmerald推奨（`#34d399` / `#10b981` / `#047857` / `16, 185, 129`）。
- **コードブロック**: `.code-block-wrapper` でラップし、ファイル名表示＋コピーボタンを付ける。実行可能なサンプル・日本語コメント必須。
- **Mermaid**: デフォルトテーマ（darkテーマ禁止）。記法はCLAUDE.md方式（`mermaid-rules.md` 参照）。
- **共通部品の上書き禁止**: 生成フェーズの各サブエージェントは `sidebar-content.js`／`styles.css`／`main.js`／`drawing-tool.js` を上書きしない。
- **絶対パス禁止**: リポジトリルート相対パスを用い、`/home/...` `/Users/...` 等の環境固有絶対パスをハードコードしない。

## 検証チェックリスト（検証フェーズ）

`docs-reviewer` スキルの手順に加え、最低限以下を全生成HTMLで確認する。

- [ ] `styles.css` の `{{PRIMARY_*}}` がすべて実カラー値へ置換されている（プレースホルダー残存なし）。
- [ ] スクリプト読み込み順序が `styles.css` → `sidebar-content.js` → `main.js` → `drawing-tool.js` になっている。
- [ ] 半透明背景（`bg-white/70` 等）を使っていない。内側ボックスは親と同系色 `-100` 背景 + `-900` テキスト。
- [ ] ダークモードボタンをHTMLに手書きしていない。ヘッダー構造を変えていない。
- [ ] Mermaid図がCLAUDE.md方式（HTMLエンティティ不使用／半角括弧は全角化またはダブルクォート／`&` は全角 `＆`／darkテーマ不使用）になっている。
- [ ] 各ステップHTMLが第1ステップHTMLの構造を継承している（`<head>`・`<header>`・`<main>`・`<footer>`・スクリプト読込が不変）。
- [ ] 共通部品（JS/CSS/sidebar）が上書きされていない。
- [ ] 各ステップに実装目標／実装手順／動作確認／トラブルシューティング／完了チェックリストが揃っている。
- [ ] ファイル名が `[技術名]-tutorial-[NN].html`（2桁ゼロパディング）になっている。
- [ ] 絶対パスのハードコードがない。
