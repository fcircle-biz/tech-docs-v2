# 画像生成AI用プロンプトテンプレート集

旧 `illustration-creator-step2` のプロンプトテンプレートを移植。`create-placeholder-image` スキルに渡す英語プロンプトの雛形。スタイルは全図解で統一する。

## スタイル統一規約

- **スタイル方針**: 「プロフェッショナル、コーポレートカラー、クリーンなフラットベクター」で統一する。
  例: `Modern corporate blue/gray colors, clean lines, professional atmosphere`。
- **プロンプト本文は英語**（`--prompt` `--style` `--elements` に渡すテキスト）。
- **画像内ラベルは日本語**（`--labels` に渡すテキスト）。日本語ラベルは図の要素名・状態名・条件名などを簡潔に列挙する。
- 全図解で同一のスタイル語彙を使い、生成結果のトーンを揃える。

## テンプレート

### シーケンス図

```
A professional, clean flat vector-style illustration showing [処理フロー] as a sequence diagram.
Style: Modern corporate blue/gray colors, clean lines, professional atmosphere, clear flow arrows.
- Left: [開始コンポーネント]
- Center: [処理の流れ]
- Right: [終了コンポーネント]
Text in image (Japanese): '[ラベル1]', '[ラベル2]'
```

### アーキテクチャ図

```
A professional, clean flat vector-style illustration explaining [アーキテクチャ名] architecture.
Style: Modern corporate colors, layered structure, clean rectangular boxes, subtle shadows.
- Top/Middle/Bottom layer: [各レイヤー]
- Arrows showing data flow
Text in image (Japanese): '[コンポーネント名]'
```

### フローチャート

```
A professional, clean flat vector-style flowchart showing [プロセス名].
Style: Modern corporate colors, clean decision diamonds, professional appearance.
- Start/Decision/End: [各状態]
Text in image (Japanese): '[ステップ]', '[条件]'
```

### 状態遷移図

```
A professional, clean flat vector-style state diagram showing [オブジェクト名] lifecycle.
Style: Modern corporate colors, clean state boxes, clear transition arrows, professional look.
- States: [状態リスト]
- Transitions: [遷移トリガー]
Text in image (Japanese): '[状態名]'
```

### 比較図 / 階層図

```
A professional, clean flat vector-style [comparison/hierarchy] illustration showing [内容].
Style: Modern corporate colors, [side-by-side layout/nested boxes], clean design.
Text in image (Japanese): '[ラベル]'
```

## 日本語ラベル規約

- `--labels` には画像内に表示したい日本語ラベルをカンマ区切りで渡す。
- ラベルは図の主要要素（コンポーネント名・状態名・ステップ名・条件名）に限定し、文章にしない。
- 例: `--labels "JSPファイル, Servlet変換, コンパイル, 実行"`

## カラー参照

技術固有のカラートーンに合わせたい場合は `templates/v3/reference/color-themes.md` を参照する（丸写しせず参照）。ただしプロンプトのスタイル語彙は上記の「プロフェッショナル / コーポレート / フラットベクター」基調を崩さない。
