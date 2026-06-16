---
name: create-placeholder-image
description: 画像生成AI用プロンプトを含むプレースホルダー画像を生成するスキル。技術ドキュメントに挿入するイラスト用のプレースホルダー画像を作成する際に使用する。プロンプト、スタイル、要素、日本語ラベルを指定してJPG画像を生成する。
---

# Create Placeholder Image

画像生成AI用プロンプトを含むプレースホルダー画像を生成するスキル。

## 概要

このスキルは、技術ドキュメント用のイラストが必要な場所に、画像生成AI向けのプロンプト情報を含んだプレースホルダー画像（JPG）を生成する。生成された画像には以下の情報が含まれる：

- ファイル名
- 画像生成AIへのプロンプト（英語）
- スタイル指定
- 構成要素のリスト
- 日本語ラベル

## 使用方法

### コマンドラインから実行

```bash
python scripts/create_placeholder_image.py \
    --filename "技術名-ch章番号-番号-内容.jpg" \
    --prompt "A CUTE, KAWAII, flat vector-style illustration..." \
    --style "Soft pastel colors, rounded shapes, friendly atmosphere" \
    --elements "Left: 要素1" "Center: 要素2" "Right: 要素3" \
    --labels "日本語ラベル1, 日本語ラベル2" \
    --output "./img/出力ファイル.jpg"
```

### パラメータ

| パラメータ | 短縮 | 必須 | 説明 |
|-----------|------|------|------|
| `--filename` | `-f` | Yes | 表示用ファイル名 |
| `--prompt` | `-p` | Yes | 画像生成AI用メインプロンプト（英語） |
| `--style` | `-s` | Yes | スタイル指定（英語） |
| `--elements` | `-e` | Yes | 画像に含める要素のリスト（複数指定可） |
| `--labels` | `-l` | Yes | 画像内の日本語ラベル |
| `--output` | `-o` | Yes | 出力先パス |
| `--width` | `-W` | No | 画像幅（デフォルト: 800） |
| `--height` | `-H` | No | 画像高さ（デフォルト: 500） |

## 図解タイプ別プロンプトテンプレート

### シーケンス図

```
A CUTE, KAWAII, flat vector-style illustration showing [処理フロー] as a sequence diagram.
Style: Soft pastel colors, rounded shapes, friendly atmosphere, clear flow arrows.
Elements:
- Left: [開始コンポーネント]
- Center: [処理の流れ/矢印]
- Right: [終了コンポーネント]
Labels: [ラベル1], [ラベル2], [ラベル3]
```

### アーキテクチャ図

```
A CUTE, KAWAII, flat vector-style illustration explaining [アーキテクチャ名] architecture.
Style: Soft pastel colors, layered structure, rounded boxes, friendly atmosphere.
Elements:
- Top layer: [上位レイヤー]
- Middle layer: [中間レイヤー]
- Bottom layer: [下位レイヤー]
- Arrows showing data flow between layers
Labels: [コンポーネント名1], [コンポーネント名2], [コンポーネント名3]
```

### フローチャート

```
A CUTE, KAWAII, flat vector-style flowchart illustration showing [プロセス名].
Style: Soft pastel colors, rounded decision diamonds, friendly icons.
Elements:
- Start: [開始状態]
- Decision points: [判断ポイント]
- End states: [終了状態]
Labels: [ステップ1], [条件], [結果]
```

### 状態遷移図

```
A CUTE, KAWAII, flat vector-style state diagram showing [オブジェクト名] lifecycle.
Style: Soft pastel colors, rounded state boxes, clear transition arrows.
Elements:
- States: [状態リスト]
- Transitions: [遷移トリガー]
Labels: [状態1], [状態2], [遷移名]
```

### 比較図/概念図

```
A CUTE, KAWAII, flat vector-style comparison illustration showing [比較対象].
Style: Soft pastel colors, side-by-side layout, friendly icons, clear labels.
Elements:
- Left side: [オプション1の特徴]
- Right side: [オプション2の特徴]
- Visual indicators for differences
Labels: [ラベル1], [ラベル2]
```

### 階層図

```
A CUTE, KAWAII, flat vector-style hierarchy illustration showing [階層の内容].
Style: Soft pastel colors, nested boxes or concentric circles, friendly atmosphere.
Elements:
- Outer/Top: [最大スコープ]
- Inner/Bottom: [最小スコープ]
Labels: [レベル1], [レベル2], [レベル3]
```

## ファイル命名規則

```
[技術名]-ch[章番号]-[セクション番号]-[図の種類].jpg
```

例:
- `servlet-jsp-ch02-01-http-sequence.jpg`
- `servlet-jsp-ch05-01-jsp-architecture.jpg`
- `django-ch03-01-mvc-layer.jpg`

## 実行例

```bash
python scripts/create_placeholder_image.py \
    --filename "servlet-jsp-ch05-01-jsp-architecture.jpg" \
    --prompt "A CUTE, KAWAII, flat vector-style illustration explaining how JSP files are converted to Servlets" \
    --style "Soft pastel colors, rounded shapes, friendly atmosphere, technical diagram style" \
    --elements "Left: A JSP file icon with code snippets" \
              "Center: A transformation arrow with gear icons" \
              "Right: A Servlet class file icon" \
              "Bottom: Tomcat container processing the conversion" \
    --labels "JSPファイル, Servlet変換, コンパイル, 実行" \
    --output "./img/servlet-jsp-ch05-01-jsp-architecture.jpg"
```

## HTMLへの画像挿入テンプレート

生成した画像をHTMLドキュメントに挿入する際のテンプレート:

```html
<figure class="my-8">
    <img src="img/[ファイル名].jpg"
         alt="[図解の説明]"
         class="w-full max-w-2xl mx-auto rounded-lg shadow-md">
    <figcaption class="text-center text-sm text-gray-600 mt-2">
        図[章番号]-[図番号]: [キャプション]
    </figcaption>
</figure>
```

## 依存関係

このスキルは Python の Pillow ライブラリを使用する。インストールされていない場合:

```bash
pip install Pillow
```

## スクリプトの場所

- `scripts/create_placeholder_image.py` - メインスクリプト
