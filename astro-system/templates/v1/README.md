# テンプレート v1（Graphite × Iris クールデザイン）— デザイン標準の真実源

## 概要

`astro-system/templates/v1/` は学習ガイドの**デザイン標準（カラー・Tailwind・Mermaid・カードコンポーネント）の真実源**です。

> **重要（Astro 移行）**: 本リポジトリは Astro ベース（`astro-system/`）に移行済みです。**共通シェル（head／ヘッダー／サイドバー／フッター／スクリプト／CSS）の実体は Astro 側に集約**されました:
> - 共通レイアウト: `astro-system/src/layouts/GuideChapterLayout.astro`
> - 共有 CSS/JS: `astro-system/public/guide/_shared/`（`styles.css`・`main.js`・`drawing-tool.js`）
> - 技術メタ・章定義・技術色: `astro-system/src/data/guides/<分類>/<slug>.ts`（`TechGuide`）
>
> これに伴い、旧テンプレート一式（`html/`・`html_tutorial/`・`html_practice/`・`html_assignment/`・`html_cheatsheet/`・`slide/`）は**撤去しました**。学習ガイドの作り方は `/docs-guide-creator` スキル（`.claude/skills/docs-guide-creator/`）と CLAUDE.md「テンプレート標準」を参照してください。

## ディレクトリ構成（現状）

```
astro-system/templates/v1/
├── README.md                  # このファイル
├── reference/                 # 参照用ドキュメント（デザイン標準の真実源）
│   ├── color-themes.md        # 技術別カラーテーマ一覧（primary パレットの具体値）
│   ├── css-styles.md          # v1 CSS スタイルガイド（デザイントークン・カードシステム）
│   └── mermaid-patterns.md    # Mermaid 図パターン集（v1 配色例含む）
└── snippets/
    └── components.html        # よく使うカードコンポーネント集（断片で利用）
```

## デザインの要点（Graphite × Iris）

- **グラファイト**: ダークグレーのニュートラル面が基調。開発ツールのような洗練感。
- **技術別 primary**: 技術ごとの主アクセント色。差し色のシアン（`#06b6d4`）と組み合わせる。
- **アンバー** (`#f59e0b`): 警告・学習目標カードの差し色。
- コードは **JetBrains Mono** ＋ macOS 風コードウィンドウ。

## 技術色の設定（Astro: データ1箇所）

技術色は **`astro-system/src/data/guides/<分類>/<slug>.ts` の `primary`（50-900）1箇所**で指定します（旧 `{{PRIMARY_*}}` プレースホルダー置換・per-tech `styles.css` は廃止）。レイアウトがこの `primary` から `tailwind.config` と `:root` の CSS 変数（`--primary-300/400/500/600/700`・`--primary-rgb`、ダークの `--primary-500`）を導出してインライン注入します。共有 `_shared/styles.css` は技術色を持ちません。

各技術の具体値は `reference/color-themes.md` を参照してください。

## ダークモード可読性（共有 CSS が自動補正）

`_shared/styles.css` のダーク補正は、標準 Tailwind の淡色背景 `bg-*-50〜300` を暗色化し、暗色文字 `text-*-600〜950` を明色化します（全 color family 対応）。**標準クラスを使う限り、ダークモードで文字が読めなくなる事故は構造的に起きません。** 生color指定（`text-[#333]` 等）・インライン `style` の色・半透明背景（`bg-white/70` 等）は CSS 補正対象外のため使用しないでください。

## スニペットの使い方

`snippets/components.html` をブラウザで開くと、各カードコンポーネントのプレビューが確認できます。必要な部分の HTML をコピーして章の本文断片で使用してください。

## 参考

- `reference/color-themes.md` - 技術別カラーテーマの詳細
- `reference/css-styles.md` - v1 CSS スタイルガイド
- `reference/mermaid-patterns.md` - Mermaid 図パターン集
- `astro-system/src/data/guides/types.ts` - `TechGuide` 型定義
- `.claude/skills/docs-guide-creator/` - 学習ガイド生成スキル（Astro フロー）

## バージョン履歴

### v1.1.0（Astro 移行）
- 共通シェル（レイアウト・共有 CSS/JS）を Astro（`astro-system/`）へ移行。
- 旧テンプレート一式（`html/`・`html_tutorial/`・`html_practice/`・`html_assignment/`・`html_cheatsheet/`・`slide/`）を撤去。
- 技術色をデータ1箇所（`TechGuide.primary`）へ集約（`{{PRIMARY_*}}` プレースホルダー廃止）。
- ダーク可読性を共有 CSS で全 color family・全シェード網羅（標準クラスは自動補正）。
- `astro-system/templates/v1/` はデザイン標準の真実源（`reference/`・`snippets/`）のみを残置。

### v1.0.0 (2026-06-16)
- Graphite × Iris クールデザイン導入（グラファイトガラスヘッダー・技術別 primary + シアン差し色・JetBrains Mono・スプラッシュ template）。
