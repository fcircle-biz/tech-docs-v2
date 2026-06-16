---
name: docs-browser-review
description: 生成済みの学習教材HTMLをChrome（ブラウザ）で実際に開き、描画結果を実機QAして所見を重要度別Markdownにまとめるスキル。Mermaid描画・ダークモード・コードハイライト・サイドバー・レスポンシブ・コンソールエラーなど、ソース静的検査では分からない描画品質を確認する際に使用する。
---

# Docs Browser Review

生成済みの学習教材HTMLを Chrome MCP（`claude-in-chrome`）で実際に開き、**描画結果**を確認して品質をレビューするスキル。HTMLソースを静的に検査する docs-reviewer とは相補的で、本スキルは「実際にブラウザで開いた結果」を一次情報とする。

## 使用方法

```
/docs-browser-review [対象HTMLパス or ディレクトリ] [scope?]
```

- 第1引数: レビュー対象。ローカルHTMLファイル/ディレクトリ、または GitHub Pages URL。
- `scope`（任意）: `smoke`（主要ページの主要観点のみ・既定）/ `full`（全ページ・全観点）。

例:
- `/docs-browser-review docs/guide/cloud-infrastructure/docker`
- `/docs-browser-review docs/practice/programming-languages/python-ecosystem/python-basics smoke`
- `/docs-browser-review https://fcircle-biz.github.io/tech_docs/guide/.../docker-learning-material-01.html`

## 前提

- Chrome 拡張 `claude-in-chrome` が接続済みで `mcp__claude-in-chrome__*` ツールが使えること（未接続ならユーザーに接続を依頼する）。
- これらのツールが遅延ロードの場合は、まず1回の ToolSearch でまとめて読み込む（`tabs_context_mcp` / `navigate` / `computer` / `read_page` / `read_console_messages` / `tabs_create_mcp` / `resize_window` など）。
- 教材HTMLは Tailwind / highlight.js / Mermaid / Font Awesome / Noto Sans JP を CDN から読み込むため、描画確認にはネットワーク接続が必要。

## 対象の開き方

- 単一ページ: ローカルファイルは `file://` の絶対パスで `navigate` する。GitHub Pages URL があればそれを開く。
- 相対リンク（サイドバーの章移動等）も確認したい場合は、対象ディレクトリで簡易静的サーバを起動して `http://localhost:PORT/...` で開く（例: `python3 -m http.server` をバックグラウンド起動）。
- ダイアログ（alert/confirm）を誘発する操作は避ける。必要時のみ事前にユーザーへ周知する。

## レビュー観点（描画・動的）

`templates/v3/` と CLAUDE.md のテンプレート標準に沿って、ブラウザでの描画結果を確認する。詳細チェックリストは references/checklist.md を参照。

| 観点 | 確認ポイント |
| --- | --- |
| Mermaid描画 | 図が正しく描画される。`Syntax error` が画面に出ていない。括弧・`&`・`<br/>` のエスケープ崩れが無い |
| ダークモード | ヘッダーの切替ボタンが表示・動作する（main.jsが動的生成）。切替後も文字が読める |
| コードブロック | highlight.js のハイライトが効く。コードコピーが動作する |
| サイドバー | 章/ステップ/回の一覧が表示・リンクが機能・進捗表示が出る |
| レスポンシブ | PC/タブレット/モバイル幅でレイアウト崩れ・はみ出しが無い（ウィンドウ幅変更で確認） |
| テキスト視認性 | 半透明背景・低コントラストでの判読不能が無い。カード内ボックスが読める |
| 画像/図 | 挿入図（illustration）やfigureが表示される（リンク切れ・崩れが無い） |
| コンソール | エラー/警告が出ていない（`read_console_messages` を `pattern` 付きで確認） |
| フォント/CDN | Noto Sans JP・Font Awesome アイコンが適用されている |

## 実行フロー

1. 引数（対象・scope）を確認し、対象HTMLを Glob で列挙（`v1/`・`v2/` 等の旧バージョンは除外）。第1単位（`*-01.html`）を基準ページとして優先的に開く。
2. Chrome MCP のツールを（遅延ロードなら ToolSearch で）読み込み、`tabs_context_mcp` でタブ状況を確認（必要なら `tabs_create_mcp` で新規タブ）。
3. 対象ページを `navigate` で開き、`read_page` とスクリーンショットで描画を確認。`read_console_messages`（pattern指定）でエラーを確認。
4. ダークモード切替・コードコピー・サイドバーリンク・ウィンドウ幅変更（レスポンシブ）を操作して挙動を確認する（scope=full は全観点、smoke は主要観点）。
5. 観点ごとに所見（重要度: 高/中/低）を整理する。証拠が必要な描画崩れだけスクリーンショットを残す。
6. 重要度別Markdownレポートを作成して報告する（保存する場合は対象ディレクトリ配下に `browser-review-YYYYMMDD.md` 等で保存）。

## 出力（レポート形式）

```markdown
# 描画レビュー: <対象>

**Scope**: smoke / full
**確認ページ**: <URL/パス一覧>

## サマリー
| 観点 | 評価 | 備考 |
| --- | --- | --- |
| Mermaid描画 | OK / 要修正 | ... |
| ダークモード | ... | ... |

## 指摘事項
### 重要度: 高
1. [指摘] — 対象ページ / 再現手順 / 期待 / 実際 / 改善案

### 重要度: 中
### 重要度: 低

## 確認できなかった事項
- [環境制約等で未確認の項目]
```

## 並列レビュー（複数ページ）

- 複数ページを並列で確認する場合のみサブエージェント分割を検討する（Agentツール／general-purpose を1メッセージで並列起動）。ブラウザの画面状態はサブエージェント間で共有されないため、各サブエージェントに「対象ページURL/パス」「scope」「出力ファイル名」を明示し、それぞれが自分のタブで完結させる。
- 並列起動するサブエージェント（描画結果の判定・分析＝実機QA）は「推論・分析」に該当するため、`Agent` ツールに `model: opus` を明示して起動する。
- 単一ページでは分割しない。
- モデル割り当ては CLAUDE.md「エージェント編成（モデル割り当て）」に従う。

## 既存スキルとの関係

- docs-reviewer: HTMLソースの静的検査（プレースホルダー未置換・スクリプト読込順・命名等）。本スキルは描画結果の確認で相補的。
- 各 creator スキル / docs-suite-creator: 生成後の検証フェーズから、静的（docs-reviewer）に加えて本スキルで実機確認できる。

## 注意事項

- 日本語出力。所見・レポートはすべて日本語。
- 推測で断定しない。確認できなかった事項は「確認できなかった事項」に列挙する。
- ブラウザツールが2〜3回失敗したら、状況を説明してユーザーに相談する（無限リトライしない）。
- ダイアログを誘発する操作は避ける。資格情報の画面入力はしない（教材は認証不要の静的ページが前提）。
- スクリーンショットは描画崩れの証拠としてのみ最小限に保存する。

## 参照ファイル

- references/checklist.md — 描画QAの詳細チェックリスト（観点別の確認手順と合否基準、Chrome MCP操作の要点）
