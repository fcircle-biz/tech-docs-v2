# step1: 配置決定・カリキュラム設計・データ定義（TechGuide）

技術学習ガイド設計の専門家として、確立された教育原理とプロジェクト固有の標準に従い、(1) 配置先分類の決定、(2) カリキュラム設計、(3) `TechGuide` データ定義と登録、(4) 概要 README 作成を行う。包括的で初心者に優しい学習カリキュラムを Astro 構成上に組み立てること。

> **旧フローからの変更**: 旧 step1 は `docs/guide/.../README.md` を「生成元の真実源」として作成していた。Astro では**構造化メタは `TechGuide` データ.ts が担う**。README は人間向け概要（任意・推奨）として `public/` に置く。

## 1. 配置先の決定とバージョン管理

### 配置先分類

- **必須**: リポジトリルートの `tech-knowledge-map.md`（正典）を参照し、対象技術が9分類のどれに属するかを決定する。代表パスは references/taxonomy-paths.md。
- 分類パス `<category>` は **複数セグメント可**（例: `development-processes`、`programming-languages/python-ecosystem`、`data-ai-category/database`）。動的ルート `src/pages/guide/[...chapter].astro` が階層を問わず解決する。
- `<slug>` は技術識別子（kebab-case、例: `docker`、`django`）。

生成先（すべて `astro-system/` 配下）:

```
astro-system/src/data/guides/<category>/<slug>.ts          # TechGuide 定義
astro-system/src/data/guides/index.ts                      # ← import 登録（既存ファイルに追記）
astro-system/src/chapters/<category>/<slug>/<slug>-learning-material-NN.html   # 各章の本文断片
astro-system/public/guide/<category>/<slug>/README.md       # 概要（任意・docs/ へパススルー）
```

### バージョン管理（既存ガイドがある場合）

- 同じ `<category>/<slug>` に既存ガイドがあるか確認する（`src/chapters/<category>/<slug>/` と `src/data/guides/<category>/<slug>.ts`）。
- 改訂版を作る場合は、既存の章断片を `src/chapters/<category>/<slug>/v1/`（既に `v1/` があれば `v2/` …）へ退避してから新版を作る。データ.ts も必要に応じてバージョン管理する。
- `v1/`・`v2/` 等は過去バックアップであり、Glob 検索からは除外する。

## 2. カリキュラム設計

完全なカリキュラム作成手順を実装する。

- **技術分野の決定**: 対象技術、学習者レベル、前提知識を明確化する。
- **学習目標の設定**: 最終到達目標と各章の段階的習得目標を定義する。
- **カリキュラム構成**: 推奨章数 **6〜20章**、各章テーマとボリューム、論理的な順序付け。
- 設計したカリキュラム（章ごとの目標・内容の要点）は、章断片生成フェーズで各サブエージェントへ渡す入力になる。`chapters[]`（章名）と概要 README に反映する。

## 3. TechGuide データ定義（`src/data/guides/<category>/<slug>.ts`）

`astro-system/src/data/guides/types.ts` の `TechGuide` 型に従って定義する。技術色 `primary`(50-900) は `astro-system/templates/v1/reference/color-themes.md` の値を使う（**旧 `{{PRIMARY_*}}` 置換は不要**。ここで持った値からレイアウトが CSS 変数を導出する）。

```ts
import type { TechGuide } from '../types';   // ネスト分類では '../../types' 等、相対階層を合わせる

// 例: Docker 入門学習ガイド（技術色 = sky）
export const docker: TechGuide = {
  category: 'cloud-infrastructure',        // 分類パス（複数セグメント可）
  slug: 'docker',
  techTitle: 'Docker学習教材',             // ヘッダー表示名
  icon: 'fa-docker',                       // Font Awesome（fab/fas のクラス名部分）
  level: '初級',
  categoryLabel: 'クラウド・インフラ',      // ヘッダーの分類ラベル
  totalTime: '約16時間',
  splashStop0: '#0ea5e9',                  // スプラッシュ SVG グラデ開始（技術色 500 系）
  splashStop1: '#06b6d4',                  // 終了（cyan 相方）
  splashBg: '#090b11',
  primary: {                               // 技術色パレット（color-themes.md より）
    50: '#f0f9ff', 100: '#e0f2fe', 200: '#bae6fd', 300: '#7dd3fc', 400: '#38bdf8',
    500: '#0ea5e9', 600: '#0284c7', 700: '#0369a1', 800: '#075985', 900: '#0c4a6e',
  },
  chapters: [                              // 全章定義（サイドバー・進捗・<title> に使用）
    { number: 1, name: 'Dockerとは', file: 'docker-learning-material-01.html' },
    { number: 2, name: 'インストールと環境構築', file: 'docker-learning-material-02.html' },
    // ... 全章分（file は <slug>-learning-material-NN.html、NN は2桁）
  ],
};
```

### index.ts への登録（必須）

`astro-system/src/data/guides/index.ts` に import と `all` 配列への追加を行う（これを忘れるとビルド時に「データ未登録」で失敗する）。

```ts
import { docker } from './cloud-infrastructure/docker';
// ...
const all: TechGuide[] = [claudeCode, codex, docker];   // ← 追加
```

## 4. 概要 README（`public/guide/<category>/<slug>/README.md`・任意・推奨）

人間向けのガイド概要。`public/` 配下はビルドで `docs/guide/<category>/<slug>/README.md` へパススルーされ、ルート `README.md` のリンク先・所要時間再見積り（re-estimate-learning-time）の入力になる。下記テンプレートを埋める。

```markdown
# [技術名] 学習ガイドライン

このガイドラインでは、[技術名]の基礎を入門者向けに段階的に学習するためのカリキュラムを提供しています。

## 前提条件
### 必要な環境
- [環境要件]
### 参考リソース
- [公式ドキュメント等のリンク]
### 前提知識
- **必須**: [必要な前提知識]
- **推奨**: [推奨される前提知識]

## 学習コンテンツ
### [1. 第1章タイトル](GitHub Pages URL)
[章の概要説明]

## 推奨所要時間

| 章 | 内容 | 目安時間 |
|----|------|----------|
| 第1章 | [内容] | X時間 |
| **合計** | | **約XX時間** |

## 学習目標
このガイドを完了すると、以下のスキルを身につけることができます：
- [具体的なスキル]

## 次のステップ
- [関連する上級ガイドラインへのリンク]
```

GitHub Pages URL 形式: `https://fcircle-biz.github.io/tech-docs-v2/guide/<category>/<slug>/<ファイル名>.html`

## 5. 一貫性の維持（確立された標準）

- **ファイル命名規則**: `<slug>-learning-material-[章番号:2桁].html`（例: `docker-learning-material-01.html`）。章番号は01から2桁ゼロパディング必須。
- **命名規則**: 小文字とハイフン(kebab-case)。
- **設計の要点**: 初心者向け（明確な前提・論理的進行・実践的目標）、技術的正確性、段階的な知識構築、実践要素の組み込み。

## 出力（このフェーズ）

1. `src/data/guides/<category>/<slug>.ts`（`TechGuide`、primary・chapters 設定済み）
2. `src/data/guides/index.ts`（import 登録済み）
3. `public/guide/<category>/<slug>/README.md`（概要）

これらが揃ったら step2（第1章の本文断片生成）へ進む。
