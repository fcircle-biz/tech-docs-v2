# CLAUDE.md

このファイルは、このリポジトリのコードを扱う際の Claude Code (claude.ai/code) 向けガイダンスを提供します。

## コミュニケーションスタイル

- **言語**: 明示的に別途指定されない限り、応答と成果物は常に**日本語**で出力する。
- **トーン**: プロフェッショナルで、親切かつ簡潔に。

## リポジトリ概要

IT・ソフトウェア開発のトピックを扱う、体系化された学習教材（ガイド、チュートリアル、チートシート）を収録した日本語の技術ドキュメントリポジトリ。すべてのコンテンツは静的な HTML/Markdown で、GitHub Pages 経由で配信される。

ビルド/Lint/テストのフレームワークは無し。コンテンツは静的な HTML/Markdown で、テンプレート標準に基づいて検証される。

## コンテンツアーキテクチャ

### ディレクトリ構成

- `/docs/guide/` - 体系的な学習ガイド（理論重視）
- `/docs/tutorial/` - ハンズオン形式のプロジェクトベースチュートリアル
- `/docs/practice/` - 練習問題とクイズ
- `/docs/assignment/` - プログラミング実践課題（仕様書ベースの実践演習）
- `/docs/slide/` - HTMLビューアー付きPDFスライド教材
- `/docs/cheatsheet/` - クイックリファレンス教材
- `/templates/v3/` - HTML/CSS テンプレート標準（現行）
- `/specs/` - チュートリアルプロジェクト用のシステム仕様書
- `/work_pdf/` - docs-slide-creator スキルが処理するPDFファイル用の一時フォルダ
- `/.claude/skills/` - コンテンツ自動生成用の Claude スキル定義（スラッシュコマンドで呼び出し）

### 9分類体系（tech-knowledge-map.md より）

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

**練習問題:**
```
[technology-name]-practice-[XX].html
```

`[XX]` は2桁ゼロパディングの章/回番号（01, 02, 03 など）。

例:
- `django-learning-material-01.html`
- `python-basics-practice-01.html`

## スキル（コンテンツ自動化）

コンテンツの自動生成は `.claude/skills/` の**スキル**として実装されている（旧 `.claude/agents/` サブエージェントから移行）。スキルはスラッシュコマンドで呼び出す: `/<skill-name> [args]`。各スキルは `SKILL.md` を薄く保ち、詳細手順は `references/` ディレクトリへ外出しする（プログレッシブ・ディスクロージャー）。

### エージェント編成（モデル割り当て）

マルチエージェントのサブエージェントは、作業の性質に応じて以下のモデルを割り当てる（`Agent` ツールの `model` パラメータで指定）。

| 役割 | モデル | 担当する作業 |
|------|--------|------------|
| オーケストレーター（メイン） | Opus | 全体統括・依存制御・ファンアウト指揮・集約・最終報告（メイン会話ループ） |
| 推論・分析サブ | Opus | 設計判断・カリキュラム/構成設計・分類決定・レビュー判定・複雑な分析 |
| コーディング・資料作成サブ | Sonnet | HTML/教材の生成、コード記述、文書作成 |
| 単純作業サブ | Haiku | ファイルコピー、プレースホルダー置換、定型チェック、ファイル名照合などの機械的作業 |

各スキルのファンアウトでは、この方針に沿って `model` を指定する。判断に迷う場合は「**設計・判断=Opus / 生成・記述=Sonnet / 機械的作業=Haiku**」を基準とする。

### コンテンツ生成スキル（マルチエージェント内蔵）

これらは旧来の `workflow + step1/step2/step3` エージェントを、**内部で複数のサブエージェントをオーケストレーションする単一スキル**へ統合したもの。スキルはまず**準備フェーズを逐次実行**し（README → 共通 JS/CSS ＋ 章/ステップ/回 `01` のHTML）、その後**残りの単位（章/ステップ/回 `02..N`）を並列にファンアウト**する（1メッセージ内で複数の `Agent` ツール呼び出しを発行。`subagent_type: general-purpose`・`model: sonnet`（資料作成）とし、スキルの `references/` を読むよう指示する）。最後に検証して報告する。検証フェーズの判定は `model: opus`（分析）、共通部品コピー等の単純作業は `model: haiku` を割り当てる。

| スキル | 目的 | 呼び出し |
|-------|---------|------------|
| `docs-guide-creator` | 学習ガイド一式（README ＋ 共通ファイル ＋ 全章） | `/docs-guide-creator [tech-name]` |
| `docs-tutorial-creator` | 仕様書ベースのハンズオンチュートリアル（README ＋ ステップHTML） | `/docs-tutorial-creator [app-type] [env] [db]` |
| `docs-practice-creator` | 練習問題集（`<details>` 展開式の解答） | `/docs-practice-creator [tech-name]` |
| `docs-assignment-creator` | 仕様書ベースのプログラミング実践課題（ヒントのみ・設計書PDF付き） | `/docs-assignment-creator [specs-docs-path]` |
| `docs-illustration-creator` | 既存ガイドへの図解追加（章単位で並列。差し替えモードは半自動） | `/docs-illustration-creator [dir] [chapter?] [mode?]` |

### 単機能ユーティリティスキル

| スキル | 目的 | 呼び出し |
|-------|---------|------------|
| `docs-cheatsheet-creator` | 1ページ完結のクイックリファレンス（チートシート） | `/docs-cheatsheet-creator [tech-name] [category-path]` |
| `docs-slide-creator` | `work_pdf/` からのPDFスライドビューアー | `/docs-slide-creator [title]` |
| `docs-readme-updater` | ディスク上の実構成からルート `README.md` を再生成 | `/docs-readme-updater` |

### マルチエージェント・オーケストレーションスキル

| スキル | 目的 | 呼び出し |
|-------|---------|------------|
| `docs-reviewer` | 生成物をテンプレート標準に照らして並列検証。`--fix` で修正を適用 | `/docs-reviewer [dir-or-files] [--fix]` |
| `docs-suite-creator` | 1トピックの複数資料タイプを並列生成し、`docs-reviewer` で検証 | `/docs-suite-creator [tech-name] [types-csv?]` |
| `docs-browser-review` | 生成HTMLをChrome（MCP経由）で描画して結果をQA（Mermaid描画・ダークモード・ハイライト・サイドバー・レスポンシブ・コンソール）。静的な `docs-reviewer` を補完 | `/docs-browser-review [dir-or-files] [scope?]` |

### Git / GitHub 運用スキル

| スキル | 目的 | 呼び出し |
|-------|---------|------------|
| `git-commit` | 統一された日本語 Conventional Commits メッセージでステージ＆コミット | `/git-commit` |
| `git-pr` | コミット → push → 日本語プルリクエスト作成（ベース: `main`） | `/git-pr` |
| `git-issue-create` | 専門的な日本語 GitHub Issue の作成・起票（コンテンツの不具合/要望） | `/git-issue-create [report]` |

### 補助ユーティリティスキル

`create-placeholder-image`、`md-to-pdf`、`re-estimate-learning-time` — 各生成スキルから利用される（プレースホルダー画像、設計書PDF変換、学習時間の再見積もり）ほか、直接呼び出しも可能。

### スキル実行ルール（重要）

**コンテンツ自動化スキル（およびそのサブエージェント）を実行する際の必須ルール:**

1. **提案しない**: 処理中に最適化や代替アプローチを提案しない。
2. **中断しない**: ユーザー確認のために処理を止めない（唯一の例外: `docs-suite-creator` は生成開始前の引数解析時に、不足している specs/環境/DB 情報を確認してよい）。
3. **完遂する**: スキルの `SKILL.md` と `references/*.md` に従い、最後まで完了する。ファイルが実際に存在する前に「これから生成します…」で止めない。
4. **並列実行**: 単位 `02..N` のファンアウト用 `Agent` 呼び出しは**1メッセージ内で**発行し、並列実行する。1単位ずつ逐次に実行しない。

**禁止例:**
- 「時間がかかりますが、どの方法がよいですか？」→ 禁止
- 「手早くプレースホルダー版を生成することを提案します」→ 禁止
- 処理中の確認ダイアログ → 禁止

## テンプレート標準

HTMLコンテンツは `/templates/v3/` の標準に従うこと（旧 `/templates/v2/` はバックアップとして残置）:

### v3 デザイン: "Graphite × Iris" クールデザイン
- グラファイト（墨）の落ち着いたニュートラル面に、**技術別 primary** とシアン（`--cyan`）の差し色。パステルの塗りは廃し「ニュートラル面＋色ヘアライン＋グラデーションのアイコンチップ」で色を差す。
- ヘッダーは**全バリアント共通のグラファイトガラス**（暗いすりガラス）＋ primary→cyan のレールで技術識別色を表現（ライト/ダーク両対応）。
- コードは **JetBrains Mono** ＋ macOS 風ウィンドウ表示。`<head>` にスプラッシュ `<template id="__bundler_thumbnail">` を含む。
- **技術別カラーは2箇所に同値を設定**する: ① HTML の `tailwind.config` の `primary`（50-900）、② `styles.css` の `:root` の `{{PRIMARY_300/400/500/600/700}}` ＋ `{{PRIMARY_RGB}}`（skill が置換。値は `templates/v3/reference/color-themes.md`）。未置換は CSS 破損。
- **例外**: assignment は実践課題識別のオレンジを `:root` にハードコード（プレースホルダ無し）、cheatsheet はヘッダー色モディファイア方式（`.header-emerald` 等）で primary を切替。

### テンプレートファイル (`html/`) - 学習ガイド用
- **learning-material-template.html** - 学習教材テンプレート
- **sidebar-content.js** - サイドバー生成（ガイド用）
- **styles.css** - 共通カスタムスタイル
- **main.js** - 共通機能
- **drawing-tool.js** - 描画ツール機能

### テンプレートファイル (`html_tutorial/`) - チュートリアル用
- **tutorial-template.html** - チュートリアルテンプレート
- **sidebar-content.js** - サイドバー生成（チュートリアル用）
- **styles.css** - 共通カスタムスタイル（グラファイトガラスヘッダー＋既定エメラルド系アクセント）
- **main.js** - 共通機能
- **drawing-tool.js** - 描画ツール機能

### テンプレートファイル (`slide/`) - PDFスライド教材用
- **index.html** - スライドビューアーテンプレート
- **slide-content.js** - スライド定義（プロジェクトごとにカスタマイズ）
- **styles.css** - 共通カスタムスタイル
- **main.js** - 共通機能（PDFビューアー、ナビゲーション）

### テンプレートファイル (`html_cheatsheet/`) - チートシート用
- **cheatsheet-template.html** - チートシートテンプレート（1ページ完結のクイックリファレンス）
- **styles.css** - 共通カスタムスタイル（ダークモード対応）
- **main.js** - 共通機能（ダークモード切替、コードコピー）

### テンプレートファイル (`html_practice/`) - 練習問題用
- **practice-template.html** - 練習問題テンプレート
- **sidebar-content.js** - サイドバー生成（練習問題の回用）
- **styles.css** - 共通カスタムスタイル（問題カード、解答トグル）
- **main.js** - 共通機能（解答表示トグル、ダークモード）
- **drawing-tool.js** - 描画ツール機能

### テンプレートファイル (`html_assignment/`) - プログラミング実践課題用
- **assignment-template.html** - 実践課題テンプレート（仕様書ベースの実践演習）
- **sidebar-content.js** - サイドバー生成（実践課題のステップ用）
- **styles.css** - 共通カスタムスタイル（実践課題用のオレンジ系アクセント・固定）
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
3. `sidebar-content.js` を編集して章/ステップ定義を設定する
4. `tailwind.config` のカラーテーマを更新する

## バージョン管理

- 初版: カテゴリフォルダに直接ファイルを作成する
- 改訂版: バージョン別サブフォルダ（v1/, v2/, v3/）を作成する
- 新版を作成する際は、以前のコンテンツをバージョンフォルダへ移動する

**注意:** ガイドディレクトリ内の `v1/`、`v2/` などのフォルダ（例: `docs/guide/.../java/v1/`）は過去バージョンのバックアップであり、アクティブなコンテンツではない。

## GitHub Pages URL

形式: `https://fcircle-biz.github.io/tech_docs/[content-type]/[category-path]/[filename].html`

例: `https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/django/django-learning-material-01.html`
