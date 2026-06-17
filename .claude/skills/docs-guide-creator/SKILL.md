---
name: docs-guide-creator
description: 技術名1つから初心者向け学習ガイド一式(TechGuideデータ定義・全章の本文断片・ガイド概要README)を Astro 構成(astro-system/)へ生成し docs/ へビルドするスキル。新しい技術の学習ガイドを作成する際に使用する。
---

# Docs Guide Creator

技術名1つを起点に、初心者向け学習ガイド一式を **Astro 構成（`astro-system/`）** に生成するワークフロースキル。生成物を `npm run build` でリポジトリ直下の `docs/`（GitHub Pages 公開ディレクトリ）へ出力する。

> **重要（旧フローからの変更）**: 本リポジトリは Astro ベースに移行済み。**テンプレート（`astro-system/templates/v1/html/`）のコピー・`{{PRIMARY_*}}` プレースホルダー置換・`sidebar-content.js` 編集・章ごとのフル HTML 生成は廃止**。代わりに「**データ定義（`TechGuide`）＋本文断片＋共有レイアウト**」で構成する。共通の head／ヘッダー／サイドバー／フッター／スクリプト／CSS は `src/layouts/GuideChapterLayout.astro` と `public/guide/_shared/` が一手に担う。

## 概要

指定された技術名から、`tech-knowledge-map.md` の9分類体系に基づいて配置先（分類パス）を決定し、以下を **`astro-system/` 配下**に生成する。

1. **データ定義** `astro-system/src/data/guides/<分類パス>/<slug>.ts` — `TechGuide`（技術メタ＋技術色 primary パレット＋全章定義 chapters[]）。`src/data/guides/index.ts` に import 登録する。
2. **本文断片** `astro-system/src/chapters/<分類パス>/<slug>/<slug>-learning-material-NN.html` — 各章の**本文のみ**（NN は2桁ゼロパディング）。`<head>`・グローバルヘッダー・サイドバー・フッター・スクリプトは含めない（レイアウトが供給）。
3. **ガイド概要 README**（任意・推奨） `astro-system/public/guide/<分類パス>/<slug>/README.md` — 学習ガイドライン。`public/` は `docs/` へパススルーされるため、ルート README.md からのリンク先・所要時間再見積りの入力になる。

技術色は **データ.ts の `primary`（50-900）1箇所**で指定する（レイアウトが CSS 変数を導出してインライン注入。`tailwind.config` も同データから生成）。色値の正典は `astro-system/templates/v1/reference/color-themes.md`。

## 使用方法

```
/docs-guide-creator [技術名]
```

例:
- `/docs-guide-creator python-streamlit`
- `/docs-guide-creator docker`
- `/docs-guide-creator spring-boot`

技術名は kebab-case（小文字とハイフン）。配置先（分類パス）は `tech-knowledge-map.md` と references/taxonomy-paths.md に従って決定する。

## 実行手順

詳細手順は references/ に分割している。各フェーズで対応するファイルを読み込んで進めること。

### 準備フェーズ（本体＝オーケストレーターが逐次実行）

1. **配置決定・カリキュラム設計・データ定義** — references/step1-data.md に従い、(a) 配置先分類を決定し（references/taxonomy-paths.md 参照）、(b) カリキュラム（推奨6〜20章・各章の目標と内容）を設計し、(c) `TechGuide` データ `src/data/guides/<分類パス>/<slug>.ts` を作成して `src/data/guides/index.ts` に登録し、(d) 概要 README を `public/guide/<分類パス>/<slug>/README.md` に作成する。既存ガイドがあればバージョン退避（references/step1-data.md「バージョン管理」）。
2. **第1章の本文断片生成** — references/step2-foundation.md と references/html-rules.md に従い、第1章 `src/chapters/<分類パス>/<slug>/<slug>-learning-material-01.html` を**本文断片**として生成する。この第1章断片が以降の全章の構造テンプレ（継承元）になる。

### 生成フェーズ（並列ファンアウト）

第2章〜最終章を **1つのメッセージ内で Agent ツール呼び出しをまとめて発行し並列実行** する。各サブエージェントへの指示は以下を最小限渡す。

- `subagent_type`: `general-purpose`
- `model`: `sonnet`（資料作成サブ → Sonnet を指定）
- 指示内容: 「`.claude/skills/docs-guide-creator/references/step3-chapter.md` と `.claude/skills/docs-guide-creator/references/html-rules.md` を読み、第1章断片（フルパスを渡す）を構造ベースとして、カリキュラム設計（または README、フルパスを渡す）から指定章番号の情報を抽出し、1章分の**本文断片**を生成して Write せよ。データ.ts／index.ts／共有レイアウト／`_shared/` 共通部品には触れない。」
- 各呼び出しに渡す可変情報: カリキュラム/READMEフルパス・第1章断片フルパス・章番号・出力先フルパス

### ビルドフェーズ

`astro-system/` で `npm run build` を実行し、`docs/guide/<分類パス>/<slug>/` に全章 HTML が出力されることを確認する（出力先・URL は astro.config.mjs の base `/tech-docs-v2/` に従う）。

### 検証フェーズ

docs-reviewer スキルの手順、または references/html-rules.md のチェックリストで全生成物を検証する（断片構造・技術色データ整合・Mermaid記法・ダーク可読性=標準クラスのみ・ヘッダー非混入）。判定は `model: opus`。

### 報告フェーズ

Glob（`v1/`/`v2/` 等の旧バージョンフォルダは除外）で生成物を確認し、ファイル一覧と GitHub Pages URL を日本語で報告する。URL形式は `https://fcircle-biz.github.io/tech-docs-v2/guide/<分類パス>/<slug>/<ファイル>.html`。

## 注意事項

**重要: 並列呼び出しは1メッセージにまとめる。** 第2章以降を1章ずつ順次 Agent 起動するのは禁止。

- **日本語出力。** 応答・成果物はすべて日本語。
- **エージェント実行ルール（CLAUDE.md）:** 処理中に提案・確認・中断をしない。最後まで完遂する。並列指定は必ず並列で実行する。「これから生成します」で終了せず、実ファイル生成→ビルドまで継続する。
- **章は「本文断片」。** `<!DOCTYPE>`・`<html>`・`<head>`・グローバル `<header class="fixed">`・`<footer>`・`<script>`・`tailwind.config`・CSS/JS の `<link>/<script>` は**書かない**（レイアウトが供給。混入は二重表示・破損の原因）。断片は `max-w-5xl` ラッパー内に入る本文（パンくず・章ヘッダー・本文セクション・前後ナビ）のみ。
- **技術色はデータ.ts の `primary` 1箇所。** 旧 `{{PRIMARY_*}}` プレースホルダー置換・styles.css 編集は廃止。色は `primary`(50-900) パレットで指定し、レイアウトが CSS 変数を導出する。値の正典は `astro-system/templates/v1/reference/color-themes.md`。
- **章定義はデータ.ts の `chapters[]`。** 旧 `sidebar-content.js` は廃止（サイドバーはレイアウトがサーバーレンダリング）。
- **ダーク可読性は標準 Tailwind クラスで担保される。** `_shared/styles.css` のダーク補正が淡色背景 `bg-*-50〜300` を暗色化、暗色文字 `text-*-600〜950` を明色化する（全 color family 対応）。したがって**標準クラスのみ使う**こと。**生color指定（`text-[#333]` 等）・インライン `style="color/background"`・半透明背景（`bg-white/70` 等）は禁止**（CSS 補正対象外でダーク事故源）。内側ボックスは親と同系色の `-100` 背景＋`-900` テキスト。
- **共有レイアウト/共通部品は触らない。** 第1章断片が構造テンプレ（継承元）。第2章以降のサブエージェントは断片のみ生成し、`GuideChapterLayout.astro`／`_shared/`（styles.css・main.js・drawing-tool.js）／データ.ts／index.ts には触れない。
- **Mermaid記法は CLAUDE.md 方式に統一。** HTMLエンティティ（`&#40;` `&#124;` 等）は使わず、半角括弧は全角化かノードをダブルクォートで囲む。`&` は全角`＆`。`<br/>` 使用時はノードをダブルクォートで囲む。darkテーマ禁止。詳細は `astro-system/templates/v1/reference/mermaid-patterns.md` 参照。
- **バージョン管理:** 出力先に既存ガイドがあれば旧版を退避してから新規作成する（references/step1-data.md）。
- **絶対パスのハードコード禁止。** 作業ルートからの相対パス（`astro-system/src/...`、`astro-system/templates/v1/reference/...`）で扱う。
- **モデル割り当て:** 配置先分類・カリキュラム設計・データ定義・第1章構造など設計判断はオーケストレーター（Opus本体）。章断片の量産は `model: sonnet`。検証判定は `model: opus`、定型チェックは `model: haiku`。方針は CLAUDE.md「エージェント編成（モデル割り当て）」に従う。

## 参照ファイル

- references/step1-data.md — 配置決定・カリキュラム設計・`TechGuide` データ定義・index.ts 登録・概要 README・バージョン管理
- references/step2-foundation.md — 第1章の本文断片生成（構造テンプレ・継承元）
- references/step3-chapter.md — 単一章の本文断片生成（並列サブエージェント用）
- references/html-rules.md — 共通HTMLルール（断片構造・Mermaid・コンポーネント・ダーク可読性・Highlight.js）をDRY集約
- references/taxonomy-paths.md — 9分類のディレクトリパス代表例（tech-knowledge-map.md 抜粋）

共有データは複製せず既存リポジトリファイルを参照する。9分類体系: `tech-knowledge-map.md` / カラー: `astro-system/templates/v1/reference/color-themes.md` / Tailwind: `astro-system/templates/v1/reference/css-styles.md` / Mermaid詳細: `astro-system/templates/v1/reference/mermaid-patterns.md` / カードコンポーネント: `astro-system/templates/v1/snippets/components.html`。Astro 構成・型は `astro-system/src/data/guides/types.ts`・`astro-system/src/layouts/GuideChapterLayout.astro`・`astro-system/src/data/guides/index.ts` を参照。
