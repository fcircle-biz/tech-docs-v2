# CLAUDE.md

このファイルは、このリポジトリのコードを扱う際の Claude Code (claude.ai/code) 向けガイダンスを提供します。

> **注記（Astro 構成）**: 本リポジトリは静的 HTML 教材を **Astro ベース**で管理しています（`feature/astro-support` ブランチ）。
> Astro プロジェクト一式は **`astro-system/`** 配下にあり（`astro.config.mjs`・`src/`・`public/` 等）、`astro-system/` で `npm run build` を実行すると GitHub Pages 公開用の **`/docs/`（リポジトリ直下）** へ出力されます。構成変更に合わせて本書も更新してください。

## コミュニケーションスタイル

- **言語**: 明示的に別途指定されない限り、応答と成果物は常に**日本語**で出力する。
- **トーン**: プロフェッショナルで、親切かつ簡潔に。

## リポジトリ概要

IT・ソフトウェア開発のトピックを扱う、体系化された学習教材を収録した日本語の技術ドキュメントリポジトリ。コンテンツは静的な HTML/Markdown で、テンプレート標準に基づいて検証される。

ビルドは **Astro**（`astro-system/` 配下）で行う。`astro-system/` で `npm run build` を実行すると、リポジトリ直下の `/docs/`（GitHub Pages 公開ディレクトリ）へ静的 HTML が出力される。Lint/テストのフレームワークは無し。

## コンテンツアーキテクチャ

### ディレクトリ構成（現状）

- `/astro-system/` - **Astro プロジェクト一式（コンテンツのソース）**。`astro.config.mjs`・`package.json`・`tsconfig.json`・`scripts/` と、`src/`（レイアウト `src/layouts/`、動的ルート `src/pages/`、技術別データ `src/data/guides/`、本文断片 `src/chapters/`）・`public/`（静的アセット）を含む。
- `/docs/` - **Astro のビルド出力＝GitHub Pages 公開ディレクトリ**（`astro-system/` からのビルドで生成。直接編集しない）。`docs/guide/` に学習ガイドが出力される。**現状は `development-processes/` 配下の以下 2 件のみ**:
  - `development-processes/claude-code/` - Claude Code 入門学習ガイド（全14章）
  - `development-processes/codex/` - Codex 入門学習ガイド（全14章）
- `/docs_backup/` - 移行前の静的 HTML 一式のバックアップ（参照用、配信対象外）。
- `/templates/v3/` - HTML/CSS テンプレート標準（現行）。
- `/tech-knowledge-map.md` - 9分類体系（後述）の定義ドキュメント。
- `/.claude/skills/` - コンテンツ自動生成・運用補助用の Claude スキル定義（スラッシュコマンドで呼び出し）。

> **補足**: 旧 `tech_docs`（v1 リポジトリ）に存在した `tutorial/`、`practice/`、`assignment/`、`slide/`、`cheatsheet/`、`specs/`、`work_pdf/` 等のフォルダ、および対応する creator スキルは**本リポジトリには存在しない**。これらを前提にしないこと。

### 9分類体系（tech-knowledge-map.md より）

ガイドの配置に用いる分類体系。出力は `/docs/guide/[category]/...`、ソースは `astro-system/src/`（`src/data/guides/[category]/` ＋ `src/chapters/[category]/`）にカテゴリ別に配置する（現状は `development-processes` のみ使用）。

1. プログラミング言語 (`programming-languages/[ecosystem]/`)
2. Web技術 (`web-technologies/`)
3. 開発プロセス (`development-processes/`)
4. 設計・モデリング (`design-modeling/`)
5. クラウド・インフラ (`cloud-infrastructure/`)
6. データ・AI (`data-ai-category/`)
7. ビジネスSaaS (`business-saas/`)
8. 資格 (`certification/`)
9. 業務ドメイン知識 (`business-domain-knowledge/`)

### ファイル命名規則

**学習ガイド:**
```
[technology-name]-learning-material-[XX].html
```

`[XX]` は2桁ゼロパディングの章番号（01, 02, 03 など）。

例:
- `claude-code-learning-material-01.html`
- `codex-learning-material-01.html`

## スキル（コンテンツ自動化・運用）

コンテンツの自動生成・運用補助は `.claude/skills/` の**スキル**として実装されている。スキルはスラッシュコマンドで呼び出す: `/<skill-name> [args]`。各スキルは `SKILL.md` を薄く保ち、詳細手順は `references/` ディレクトリへ外出しする（プログレッシブ・ディスクロージャー）。

### エージェント編成（モデル割り当て）

マルチエージェントのサブエージェントは、作業の性質に応じて以下のモデルを割り当てる（`Agent` ツールの `model` パラメータで指定）。

| 役割 | モデル | 担当する作業 |
|------|--------|------------|
| オーケストレーター（メイン） | Opus | 全体統括・依存制御・ファンアウト指揮・集約・最終報告（メイン会話ループ） |
| 推論・分析サブ | Opus | 設計判断・カリキュラム/構成設計・分類決定・レビュー判定・複雑な分析 |
| コーディング・資料作成サブ | Sonnet | HTML/教材の生成、コード記述、文書作成 |
| 単純作業サブ | Haiku | ファイルコピー、プレースホルダー置換、定型チェック、ファイル名照合などの機械的作業 |

判断に迷う場合は「**設計・判断=Opus / 生成・記述=Sonnet / 機械的作業=Haiku**」を基準とする。

### コンテンツ生成スキル（マルチエージェント内蔵）

| スキル | 目的 | 呼び出し |
|-------|---------|------------|
| `docs-guide-creator` | 学習ガイド一式（README ＋ 共通ファイル ＋ 全章HTML）を生成 | `/docs-guide-creator [tech-name]` |

`docs-guide-creator` はまず**準備フェーズを逐次実行**し（README → 共通 JS/CSS ＋ 章 `01` のHTML）、その後**残りの章（`02..N`）を並列にファンアウト**する（1メッセージ内で複数の `Agent` ツール呼び出しを発行。`subagent_type: general-purpose`・`model: sonnet`（資料作成）とし、スキルの `references/` を読むよう指示する）。最後に `docs-reviewer` で検証して報告する。検証フェーズの判定は `model: opus`（分析）、共通部品コピー等の単純作業は `model: haiku` を割り当てる。

### マルチエージェント・オーケストレーション／検証スキル

| スキル | 目的 | 呼び出し |
|-------|---------|------------|
| `docs-reviewer` | 生成物をテンプレート標準に照らして並列検証。`--fix` で修正を適用 | `/docs-reviewer [dir-or-files] [--fix]` |
| `docs-browser-review` | 生成HTMLをChrome（MCP経由）で描画して結果をQA（Mermaid描画・ダークモード・ハイライト・サイドバー・レスポンシブ・コンソール）。静的な `docs-reviewer` を補完 | `/docs-browser-review [dir-or-files] [scope?]` |

### 保守・運用ユーティリティスキル

| スキル | 目的 | 呼び出し |
|-------|---------|------------|
| `docs-readme-updater` | ディスク上の実構成からルート `README.md` を再生成 | `/docs-readme-updater` |
| `re-estimate-learning-time` | 既存資料の README.md を読み、推奨所要時間を再見積もりして更新 | `/re-estimate-learning-time [dir]` |

### Git / GitHub 運用スキル

| スキル | 目的 | 呼び出し |
|-------|---------|------------|
| `git-commit` | 統一された日本語 Conventional Commits メッセージでステージ＆コミット | `/git-commit` |
| `git-pr` | コミット → push → 日本語プルリクエスト作成（ベース: `main`） | `/git-pr` |
| `git-issue-create` | 専門的な日本語 GitHub Issue の作成・起票（コンテンツの不具合/要望） | `/git-issue-create [report]` |

### スキル実行ルール（重要）

**コンテンツ自動化スキル（およびそのサブエージェント）を実行する際の必須ルール:**

1. **提案しない**: 処理中に最適化や代替アプローチを提案しない。
2. **中断しない**: ユーザー確認のために処理を止めない。
3. **完遂する**: スキルの `SKILL.md` と `references/*.md` に従い、最後まで完了する。ファイルが実際に存在する前に「これから生成します…」で止めない。
4. **並列実行**: 章 `02..N` のファンアウト用 `Agent` 呼び出しは**1メッセージ内で**発行し、並列実行する。1章ずつ逐次に実行しない。

**禁止例:**
- 「時間がかかりますが、どの方法がよいですか？」→ 禁止
- 「手早くプレースホルダー版を生成することを提案します」→ 禁止
- 処理中の確認ダイアログ → 禁止

## テンプレート標準

HTMLコンテンツは `/templates/v3/` の標準に従うこと:

### v3 デザイン: "Graphite × Iris" クールデザイン
- グラファイト（墨）の落ち着いたニュートラル面に、**技術別 primary** とシアン（`--cyan`）の差し色。パステルの塗りは廃し「ニュートラル面＋色ヘアライン＋グラデーションのアイコンチップ」で色を差す。
- ヘッダーは**全バリアント共通のグラファイトガラス**（暗いすりガラス）＋ primary→cyan のレールで技術識別色を表現（ライト/ダーク両対応）。
- コードは **JetBrains Mono** ＋ macOS 風ウィンドウ表示。`<head>` にスプラッシュ `<template id="__bundler_thumbnail">` を含む。
- **技術別カラーは2箇所に同値を設定**する: ① HTML の `tailwind.config` の `primary`（50-900）、② `styles.css` の `:root` の `{{PRIMARY_300/400/500/600/700}}` ＋ `{{PRIMARY_RGB}}`（skill が置換。値は `templates/v3/reference/color-themes.md`）。未置換は CSS 破損。
- **例外**: assignment は実践課題識別のオレンジを `:root` にハードコード（プレースホルダ無し）、cheatsheet はヘッダー色モディファイア方式（`.header-emerald` 等）で primary を切替。

> `templates/v3/` には学習ガイド用（`html/`）のほか `html_tutorial/`・`html_practice/`・`html_assignment/`・`html_cheatsheet/`・`slide/` の各テンプレート一式が用意されているが、**本リポジトリで現在オーサリングされているのは学習ガイドのみ**。他バリアントのテンプレートは将来利用に備えて残置されている。

### テンプレートファイル (`html/`) - 学習ガイド用
- **learning-material-template.html** - 学習教材テンプレート
- **sidebar-content.js** - サイドバー生成（ガイド用）
- **styles.css** - 共通カスタムスタイル
- **main.js** - 共通機能
- **drawing-tool.js** - 描画ツール機能

### 参照ドキュメント (`reference/`)
- **css-styles.md** - Tailwind CSS スタイルガイド
- **color-themes.md** - 技術別カラーテーマ
- **mermaid-patterns.md** - Mermaid 図のパターン

### 主要要件
- Tailwind CSS CDN
- コードシンタックス用の Highlight.js
- 図表用の Mermaid.js
- Google Fonts (Noto Sans JP)
- アイコン用の Font Awesome
- レスポンシブデザイン（PC/タブレット/モバイル）

### Mermaid.js 記法ルール（重要）

Mermaid 図を書く際は、必ず以下のルールに従う:

1. **HTMLエンティティ禁止**: `&#40;` `&#41;` `&#38;` などのHTMLエンティティは Mermaid で正しく解釈されない
2. **括弧の扱い**:
   - 半角括弧 `()` は Mermaid で特殊文字として認識されるため、全角括弧を使う
   - もしくはノードテキスト全体をダブルクォートで囲む: `A["Text (with parentheses)"]`
3. **アンパサンド**: `&` の代わりに全角の `＆` を使う
4. **改行**: ノード内で `<br/>` を使う場合はダブルクォートで囲む: `A["Line1<br/>Line2"]`

**正しい例:**
```
flowchart TD
    A["Chapter 1: Overview (current)"] --> B{OS}
    B -->|Windows| C["Windows Environment Setup"]
```

**間違った例（構文エラーになる）:**
```
flowchart TD
    A[Chapter 1: Overview<br/>&#40;current&#41;] --> B{OS}
    B -->|Windows| C[Windows Environment<br/>Setup]
```

### テキスト視認性ルール（重要）

カード内のテキストが読みやすい状態を保つため、以下のルールに従う:

1. **半透明背景の禁止**: `bg-white/70`、`bg-white/60`、`bg-white/50` などを使わない
2. **不透明な同系色背景を使う**: カード内に内側ボックスを置く場合は、同じ色系統の `-100` シェードを使う

| 親カードの色 | 内側ボックスの背景 | テキスト色 |
|------------------|---------------------|------------|
| 紫 (Purple) | `bg-purple-100` | `text-purple-900` |
| 青 (Blue) | `bg-blue-100` | `text-blue-900` |
| 緑 (Green) | `bg-emerald-100` | `text-emerald-900` |
| 橙 (Orange) | `bg-orange-100` | `text-orange-900` |

### 使い方
1. テンプレートを対象フォルダにコピーする
2. JS/CSSファイル（`sidebar-content.js`、`styles.css`、`main.js`、`drawing-tool.js`）を同じフォルダにコピーする
3. `sidebar-content.js` を編集して章定義を設定する
4. `tailwind.config` のカラーテーマを更新する

## バージョン管理

- 初版: カテゴリフォルダに直接ファイルを作成する
- 改訂版: バージョン別サブフォルダ（v1/, v2/, v3/）を作成する
- 新版を作成する際は、以前のコンテンツをバージョンフォルダへ移動する

**注意:** ガイドディレクトリ内の `v1/`、`v2/` などのフォルダは過去バージョンのバックアップであり、アクティブなコンテンツではない。

## GitHub Pages URL

形式: `https://fcircle-biz.github.io/tech-docs-v2/guide/[category-path]/[filename].html`（base path は `/tech-docs-v2/`）

例: `https://fcircle-biz.github.io/tech-docs-v2/guide/development-processes/claude-code/claude-code-learning-material-01.html`
