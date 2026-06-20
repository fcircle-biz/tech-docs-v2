# Claude クラウド実行環境 構築手順（tech-docs-v2）

本書は、Claude Code の「新しいクラウド環境」ダイアログで本リポジトリ（`tech-docs-v2`）用の
実行環境を作成するための設定手順をまとめたものです。

## 1. このリポジトリの前提

| 項目 | 内容 |
|------|------|
| プロジェクト本体 | `astro-system/`（Astro 6 系。`package.json`・`package-lock.json` はこの配下） |
| 依存（`node_modules/`） | **Git 管理外**（`.gitignore`）。クラウド環境では毎回インストールが必要 |
| ビルドコマンド | `astro-system/` で `npm run build`（= `astro build`） |
| ビルド出力先 | リポジトリ直下 `/docs/`（GitHub Pages 公開ディレクトリ。`astro.config.mjs` の `outDir: '../docs'`） |
| 公開 base path | `/tech-docs-v2/` |
| 必要 Node | Astro 6 系は Node 18.20.8+ / 20.3.0+ / 22.0.0+（ローカル実績: Node 24 / npm 11） |

ポイントは **`node_modules/` がコミットされていない**ことです。クラウドのセッション開始前に
依存をインストールしておかないと、`npm run build` やプレビュー、各スキルが動作しません。
これをセットアップスクリプトで賄います。

## 2. ダイアログ各項目の設定値

### 名前
任意。識別しやすい名前を入力します（例: `tech-docs-v2`）。空欄なら「デフォルト」。

### ネットワークアクセス
**`Trusted`**（ダイアログ初期値のまま）。

- 理由: セットアップスクリプトの `npm ci` が npm レジストリ（`registry.npmjs.org`）へ
  アクセスするため、ネットワークアクセスが必要です。
- 補足: `docs-browser-review` スキルを使う場合、ブラウザ（Chrome / Playwright）の取得にも
  ネットワークを使います。教材 HTML 自体が Tailwind / Highlight.js / Mermaid / Font Awesome を
  CDN 参照しているため、描画確認時も外部アクセスが前提です。

### 環境変数
**原則不要（空欄でOK）**。

- ビルド・プレビューに必須の環境変数はありません。
- ダイアログの注意書きどおり、ここに記載した値は環境利用者全員に見えるため
  **機密情報・認証情報は絶対に入れない**こと。
- 任意で、クラウドからのコミット表示名を固定したい場合のみ以下を設定可（非機密のみ）:

  ```env
  GIT_AUTHOR_NAME=satoshi.ichimaru
  GIT_AUTHOR_EMAIL=satoshi.ichimaru@f-circle.biz
  ```

### セットアップスクリプト
`astro-system/` 配下で依存をインストールします。`package-lock.json` があるため、
再現性の高い `npm ci` を使います。

> **重要**: クラウド環境ではセットアップスクリプトの実行時カレントディレクトリが
> **リポジトリ直下とは限らない**（ホームや別パスのことがある）。`cd astro-system` を
> 相対パス前提で書くと `cd: astro-system: No such file or directory` で失敗する。
> 下記のように `astro-system` を**探索してから移動**する。

```bash
#!/bin/bash
set -euo pipefail

# 初期作業ディレクトリがリポジトリ直下とは限らないため、astro-system を探索して移動する。
APP_DIR="$(find . "$HOME" /workspace /repo -maxdepth 5 -type d -name astro-system 2>/dev/null | head -n1 || true)"

if [ -z "${APP_DIR:-}" ]; then
  echo "astro-system が見つかりません。CWD=$(pwd)" >&2
  ls -la >&2
  exit 1
fi

echo "astro-system を検出: $APP_DIR"
cd "$APP_DIR"

# 依存は Git 管理外のため毎回インストールする。
npm ci
```

補足:
- `npm ci` が lock 不整合などで失敗する場合は `npm install` に切り替える。
- ビルド（`npm run build`）はここでは実行しない。`/docs/` は追跡対象の成果物であり、
  セットアップで生成すると不要な差分が出るため、実作業時に行う。
- `find` に `|| true` を付けているのは、`set -euo pipefail` 下で `find` が `head` の
  早期終了（SIGPIPE）や存在しないパスで非ゼロ終了し、スクリプトが中断するのを防ぐため。

## 3. 作成後の動作確認（クラウドセッション内）

セッション開始後、以下が通れば構築成功です。

```bash
cd astro-system

# 依存が入っているか
npm ls astro

# ビルド（成功すると ../docs へ出力される）
npm run build

# 開発プレビュー（任意）
npm run dev
```

## 4. 注意点

- **`/docs/` はビルド成果物**。直接編集せず、`astro-system/src/` 等を編集して再ビルドする。
- **`node_modules/` は毎セッション再生成**される前提（コミットしない）。
- Node のバージョンが古くビルドが失敗する場合は、セットアップスクリプト先頭で
  対象バージョン（20+ 推奨）の Node を用意してから `npm ci` する。
- マルチエージェント系スキル（`docs-guide-creator` 等）は本環境のうえでそのまま動作するが、
  ブラウザ描画確認（`docs-browser-review`）は追加のブラウザ取得が走る点に留意。

## 5. 設定値まとめ（クイックリファレンス）

| 項目 | 設定値 |
|------|--------|
| 名前 | `tech-docs-v2`（任意） |
| ネットワークアクセス | `Trusted` |
| 環境変数 | なし（任意で `GIT_AUTHOR_NAME` / `GIT_AUTHOR_EMAIL` のみ） |
| セットアップスクリプト | `astro-system` を探索して `npm ci`（上記スクリプト全文。`cd astro-system` 直書きは不可） |
