# 画像生成・挿入フェーズ（プレースホルダー生成 → HTML挿入）

旧 `illustration-creator-step2` の移植。`illustration_suggestions/` 内の章別mdファイル（または `step1-suggestion.md` 手順で本サブエージェントが直接生成した提案）を基に、画像生成AI用プロンプトを含むプレースホルダーPNGを生成し、HTMLファイルに `<figure>` で挿入する。

共通ルールは `common-rules.md` を、プロンプト集は `image-prompt-templates.md` を参照。

## 必須タスク

このフェーズは以下の**2つのタスクを両方完了**する。

1. **プレースホルダー画像の生成** → `img/` フォルダに保存。
2. **HTMLファイルへの画像挿入** → `<figure>` タグで挿入。

> 画像生成だけで終わらせず、**必ずHTML編集まで完了**する。

## 入力パラメータ

- **SuggestionsPath / TargetDirectory**: `illustration_suggestions/` フォルダのパス、および `img/` と対象HTMLの親ディレクトリ。
- **ChapterNumber**: 処理対象の章番号（並列実行では1章=1サブエージェント）。

## フォルダ構造

```
[TargetDirectory]/
├── illustration_suggestions/
│   ├── chapter-01.md, chapter-02.md, ...
├── img/                       # 生成画像の保存先
└── [技術名]-learning-material-XX.html
```

## 実行手順

### 1. 提案ファイルの読み込み

`[SuggestionsPath]/chapter-[XX].md` を読み込み、各提案の情報を取得する:

- セクション / コンテキスト
- 提案する図解の種類と内容
- 優先度

> **「既存のMermaid図で十分」と記載された提案はスキップ**する。

### 2. プレースホルダー画像の生成

`create-placeholder-image` スキルを使用して画像を生成する。

```bash
python .claude/skills/create-placeholder-image/scripts/create_placeholder_image.py \
    --filename "[技術名]-ch[XX]-[NN]-[種類].png" \
    --prompt "A professional, clean flat vector-style illustration..." \
    --style "Modern corporate colors, clean lines, professional atmosphere" \
    --elements "Left: ..." "Center: ..." "Right: ..." \
    --labels "日本語ラベル1, ラベル2, ラベル3" \
    --output "./img/[ファイル名].png"
```

> スクリプトは `--output` の拡張子でそのまま出力する。**必ず `.png` を指定**する（`common-rules.md` のPNG統一）。旧定義の `.jpg` は使わない。

#### ファイル命名規則

```
[技術名]-ch[章番号]-[連番]-[図の種類].png
```

- 章番号・連番は2桁ゼロパディング。
- 例: `servlet-jsp-ch05-01-architecture.png`

### 3. HTMLファイルへの画像挿入

#### 挿入位置の決定

1. セクション見出し（`<h3>`/`<h4>`）の直後、コード例の前。
2. 既存Mermaid図がある場合はその前後。
3. 説明テキストとコード例の間。

#### 挿入用HTMLテンプレート

```html
<!-- 挿絵: [図解の説明] -->
<figure class="my-8">
    <img src="img/[ファイル名].png"
         alt="[図解の説明]"
         class="w-full max-w-2xl mx-auto rounded-lg shadow-md">
    <figcaption class="text-center text-sm text-gray-600 mt-2">
        図[章番号]-[図番号]: [キャプション]
    </figcaption>
</figure>
```

- 画像パスは相対パス（`img/[ファイル名].png`）。
- `alt` 属性には図の内容を簡潔に記述。
- 半透明背景は使わない（`common-rules.md` の視認性ルール）。
- 共通部品（JS/CSS/sidebar）・ヘッダー構造は改変しない（`common-rules.md`）。

### 4. 完了報告

```
## 生成完了レポート

### 生成した画像ファイル
- [ファイル名1].png
- [ファイル名2].png

### 編集したHTMLファイル
- [HTMLファイル]: 図X-X を挿入（セクション名）
```

## 注意事項

- 日本語で出力・コメント。プロンプト本文（`--prompt`/`--style`/`--elements`）は英語、`--labels` は日本語。
- スタイルは「プロフェッショナル、コーポレートカラー、クリーンなフラットベクター」で統一（`image-prompt-templates.md` 参照）。
- 画像パスは相対パス（`img/`）を使用。
- `alt` 属性には図の内容を簡潔に記述。

## 依存関係

- スキル: `create-placeholder-image`。
- スクリプト: `.claude/skills/create-placeholder-image/scripts/create_placeholder_image.py`。
- 必要ライブラリ: Pillow（`pip install Pillow`）。

## 完了チェックリスト

- [ ] すべての提案（スキップ分を除く）に対してプレースホルダー画像を生成。
- [ ] 画像を `img/` フォルダに保存（PNG形式）。
- [ ] **各HTMLファイルに `<figure>` タグで画像を挿入**。
- [ ] 画像パスが正しい（`img/[ファイル名].png`）。
- [ ] 共通部品・ヘッダー構造を改変していない。
