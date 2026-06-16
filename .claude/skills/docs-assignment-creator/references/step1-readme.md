# Step1: README作成（カリキュラム設計＋設計資料コピー＋PDF変換）

このフェーズは実践課題資料の「設計」を担当する。仕様書（設計書）を分析し、学習者が自力で実装できるよう支援する課題資料の README.md を生成し、設計資料をコピー＆PDF化する。

共通ルールは `global-rules.md` を参照（言語・命名・URL・バージョン管理・PDF変換コマンド 等）。

---

## 実践課題資料の特徴（チュートリアルとの違い）

「実践課題資料」は以下の点でチュートリアルと異なる:

| 項目 | チュートリアル | 実践課題 |
|------|--------------|---------|
| コード提供 | 全コードを提供 | ヒントのみ提供 |
| 進め方 | 手順に沿って写経 | 仕様を読んで自力実装 |
| 目的 | 技術の習得 | 実践力の確認 |
| 参照資料 | 手順書 | 設計書・モック画面 |

---

## 実行手順

### 1. 仕様書の分析

指定フォルダ（`specs/[課題名]/docs/`）内の設計書を読み込む:
- `README.md` - システム仕様書（機能一覧、API設計 等）
- `implementation-guide.md` - 実装ガイド（ステップ構成の参考）
- `database.md` - データベース設計
- `mockups/` - モック画面のHTML一覧

### 2. 出力先ディレクトリの決定

- 出力先: `docs/assignment/[課題名]/`
- 課題名は specs のフォルダ名から抽出（例: `specs/order-management-v1/docs` → `order-management-v1`）。
- 既存ファイルがある場合は**バージョン管理**を行う（`global-rules.md`「7.」: 既存を `v1/`,`v2/`… へ退避してから新規作成）。

### 3. ステップ構成の設計

仕様書の `implementation-guide.md` を参考に学習ステップを決定:
- 環境構築
- 機能単位の実装（バックエンド → フロントエンドの順）
- 結合・仕上げ

各ステップに以下を含める:
- 実装する機能の概要
- 参照すべき設計書のセクション
- 完了条件（チェックリスト）

### 4. README.md の生成

以下のテンプレート構造に従って README.md を生成する:

```markdown
# [課題名] 実践課題

この課題は、[前提となる学習]を完了した方向けの実践課題です。
仕様書とモック画面を参考に、自力でシステムを構築してください。

## 概要

[システムの概要説明]

## 学習目標

この課題を完了すると、以下のスキルを確認・強化できます：

- [スキル1]
- [スキル2]
- [スキル3]

## 前提条件

### 必要な知識・スキル
- [前提知識1]
- [前提知識2]

### 必要な環境
- [環境要件1]
- [環境要件2]

## 設計資料

この課題では以下の設計資料を参照して実装します：

| 資料 | 内容 | リンク |
|------|------|--------|
| システム仕様書 | 機能一覧、API設計、バリデーション | [README.pdf](./docs/README.pdf) |
| データベース設計 | ER図、テーブル定義、SQL | [database.pdf](./docs/database.pdf) |
| 実装ガイド | 実装の進め方のヒント | [implementation-guide.pdf](./docs/implementation-guide.pdf) |
| モック画面 | 完成イメージのHTML | [mockups/](./docs/mockups/index.html) |

## 学習コンテンツ

### [1. ステップ1タイトル](GitHub Pages URL)
[ステップの概要]
- 実装内容: [実装する機能]
- 参照: [参照する設計書セクション]

### [2. ステップ2タイトル](GitHub Pages URL)
...

## 推奨所要時間

| ステップ | 内容 | 目安時間 |
|----------|------|----------|
| Step 1 | [内容] | X時間 |
| Step 2 | [内容] | X時間 |
| ... | ... | ... |
| **合計** | | **約XX時間** |

## 進め方

1. **設計書を読む**: まず仕様書とDB設計を熟読し、全体像を把握
2. **モック画面を確認**: 完成イメージを見て、必要な画面とデータを理解
3. **ステップ順に実装**: 各ステップのガイドに沿って実装
4. **動作確認**: 各ステップの完了条件を満たしているか確認
5. **困ったら設計書を再確認**: コードではなく設計書を参照

## 困ったときは

- 設計書の該当セクションを再読
- モック画面で期待される動作を確認
- 基礎チュートリアル（[リンク]）を振り返る

## 関連リソース

- [チュートリアル]([リンク]) - 基礎を学び直したい場合
- [学習ガイド]([リンク]) - 各技術の詳細を学びたい場合
```

> **推奨所要時間表の「合計」行は重要**: Step2 のヘッダー表示（全ステップ共通の推奨時間）に使うため、必ず「合計」行を記載する。

### 5. 設計資料のコピー

仕様書フォルダ内の `docs/` ディレクトリ全体を課題資料フォルダにコピーする:
- コピー元: `specs/[課題名]/docs/` 全体
- コピー先: `docs/assignment/[課題名]/docs/`
- 含まれるファイル:
  - `README.md` → PDF変換して `README.pdf` も生成
  - `database.md` → PDF変換して `database.pdf` も生成
  - `implementation-guide.md` → PDF変換して `implementation-guide.pdf` も生成
  - `mockups/` ディレクトリ（HTMLモック画面一覧）
- README.md・各ステップHTMLからは `./docs/` の相対パスでリンクする。
- 設計書は **PDF形式**でリンク（ブラウザで直接閲覧可能）。

### 6. Markdown → PDF 変換

各 Markdown ファイルをリポジトリルートの変換スクリプトで PDF 化する:

```bash
node scripts/md-to-pdf.mjs docs/assignment/[課題名]/docs/README.md
node scripts/md-to-pdf.mjs docs/assignment/[課題名]/docs/database.md
node scripts/md-to-pdf.mjs docs/assignment/[課題名]/docs/implementation-guide.md
```

（`scripts/md-to-pdf.mjs` は Mermaid 図・シンタックスハイライト・日本語フォントに対応。PDF出力は md-to-pdf スキルでも実行可能。）

---

## ファイル命名規則・URL

- README: そのまま `README.md`
- HTMLファイル: `[課題名]-assignment-[ステップ番号:2桁].html`（例: `order-management-v1-assignment-01.html`）
- GitHub Pages URL: `https://fcircle-biz.github.io/tech_docs/assignment/[課題名]/[ファイル名].html`

詳細は `global-rules.md`「8.」を参照。

---

## このフェーズの成果物

1. `docs/assignment/[課題名]/` ディレクトリ
2. `docs/assignment/[課題名]/README.md`
3. `docs/assignment/[課題名]/docs/`（設計資料コピー）
   - `specs/[課題名]/docs/` 全体のコピー
   - 各 Markdown（README.md / database.md / implementation-guide.md）の PDF版
   - `mockups/`

**HTMLファイルの生成は Step2（土台）・Step3（並列）で行う。** このフェーズでは HTML を作らない。
