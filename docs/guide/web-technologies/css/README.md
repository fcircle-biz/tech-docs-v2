# CSS 学習ガイドライン

このガイドラインでは、CSS（Cascading Style Sheets）の基礎を入門者向けに段階的に学習するためのカリキュラムを提供しています。Webページの「見た目」を自分の手でデザインできるようになることを目標に、全14章で文字装飾からレイアウト・レスポンシブ対応・アニメーションまでを一通り体験します。

## 前提条件

### 必要な環境

- **Webブラウザ**: Google Chrome / Microsoft Edge / Firefox / Safari のいずれか（開発者ツールを使用します）
- **テキストエディタ**: Visual Studio Code 推奨（メモ帳でも学習可能）
- **OS**: Windows / macOS / Linux のいずれか（特別なソフトのインストールは不要）

### 参考リソース

- [MDN Web Docs - CSS](https://developer.mozilla.org/ja/docs/Web/CSS) — CSS の日本語リファレンス（本教材の調べもの用の定番）
- [MDN Web Docs - CSS 入門](https://developer.mozilla.org/ja/docs/Learn/CSS) — 公式チュートリアル
- [Can I use](https://caniuse.com/) — ブラウザ対応状況の確認
- [W3C CSS 仕様](https://www.w3.org/Style/CSS/) — CSS の標準仕様

### 前提知識

- **必須**: HTML の基本タグ（`<h1>`・`<p>`・`<ul>`・`<div>`・`<img>` など）が読み書きできること、ファイルの保存とブラウザでの表示ができること
- **推奨**: [HTML 学習ガイドライン](https://fcircle-biz.github.io/tech-docs-v2/guide/web-technologies/html/README.md) を終えていること（本教材は HTML 教材の続編として設計されています）
- **不要**: プログラミング経験、デザインの専門知識、数学の知識

## 学習コンテンツ

### [1. CSSとは](https://fcircle-biz.github.io/tech-docs-v2/guide/web-technologies/css/css-learning-material-01.html)

CSS が「Webページの見た目を決める言語」であることを、HTML との役割分担から理解します。CSS のあり・なしで同じ HTML がどれだけ変わるかを見比べ、CSS で何ができるのか（色・文字・余白・レイアウト・アニメーション）の全体像と、「カスケード」という名前の由来・現在の標準（CSS3 以降のモジュール方式）を押さえます。

### [2. CSSの書き方と適用方法](https://fcircle-biz.github.io/tech-docs-v2/guide/web-technologies/css/css-learning-material-02.html)

学習環境（エディタ・ブラウザ）を整え、最初のスタイルを書きます。`セレクタ { プロパティ: 値; }` というルールセットの文法、CSS を HTML に適用する3つの方法（外部スタイルシート・`<style>`・`style` 属性）とその使い分け、コメントの書き方、そして学習の相棒になるブラウザ開発者ツールの開き方を学びます。

### [3. セレクタの基本](https://fcircle-biz.github.io/tech-docs-v2/guide/web-technologies/css/css-learning-material-03.html)

「どこにスタイルを当てるか」を指定するセレクタを学びます。要素セレクタ・クラスセレクタ・IDセレクタ・全称セレクタの使い分け、グループ化（カンマ区切り）、子孫セレクタと子セレクタ、そして `:hover` などの擬似クラス、`::before` などの擬似要素の入口までを扱います。

### [4. カスケード・継承・詳細度](https://fcircle-biz.github.io/tech-docs-v2/guide/web-technologies/css/css-learning-material-04.html)

「なぜかスタイルが効かない」の原因になる仕組みを理解します。複数のルールが競合したときの決まり方（カスケード）、親から子へ受け継がれる性質（継承）、セレクタの強さの計算方法（詳細度）、`!important` を安易に使ってはいけない理由を、具体例で確認します。

### [5. 文字とテキストのスタイル](https://fcircle-biz.github.io/tech-docs-v2/guide/web-technologies/css/css-learning-material-05.html)

読みやすい文章の作り方を学びます。フォントの指定（`font-family` とフォントファミリーの考え方）、文字サイズ・太さ・行の高さ・字間、揃え方（`text-align`）、下線などの装飾（`text-decoration`）、日本語サイトでのフォント指定の注意点と Webフォントの紹介を扱います。

### [6. 色と背景](https://fcircle-biz.github.io/tech-docs-v2/guide/web-technologies/css/css-learning-material-06.html)

色の指定方法（色名・16進数・`rgb()`・`hsl()`・透明度）を体系的に学び、文字色 `color` と背景 `background-color` を使い分けます。背景画像（`background-image`・`background-size`・`background-position`・`background-repeat`）とグラデーション、読みやすさを守るためのコントラストの考え方も扱います。

### [7. ボックスモデル](https://fcircle-biz.github.io/tech-docs-v2/guide/web-technologies/css/css-learning-material-07.html)

CSS 最重要の概念であるボックスモデルを学びます。すべての要素が「内容・パディング・ボーダー・マージン」の四層でできていること、`width` / `height` の実際の計算、`box-sizing: border-box` が便利な理由、マージンの相殺（重なり合い）といったつまずきポイントを、図解で丁寧に確認します。

### [8. 表示（display）と配置（position）](https://fcircle-biz.github.io/tech-docs-v2/guide/web-technologies/css/css-learning-material-08.html)

要素の並び方を決める `display`（`block` / `inline` / `inline-block` / `none`）と、通常の流れから外して配置する `position`（`static` / `relative` / `absolute` / `fixed` / `sticky`）、重なり順を決める `z-index` を学びます。かつて主流だった `float` の位置づけにも触れます。

### [9. Flexboxでレイアウト](https://fcircle-biz.github.io/tech-docs-v2/guide/web-technologies/css/css-learning-material-09.html)

現代のレイアウトの主役である Flexbox を学びます。`display: flex` による親子関係、主軸と交差軸の考え方、`flex-direction` / `justify-content` / `align-items` / `gap` / `flex-wrap` / `flex` の使い方を、横並びナビゲーションやカード並べといった実例で身につけます。

### [10. CSS Gridでレイアウト](https://fcircle-biz.github.io/tech-docs-v2/guide/web-technologies/css/css-learning-material-10.html)

二次元レイアウトのための CSS Grid を学びます。`grid-template-columns` / `grid-template-rows`・`gap`・`fr` 単位・`repeat()`・`minmax()`・`grid-template-areas` によるページ全体の骨組みづくりと、Flexbox との使い分けの判断基準を扱います。

### [11. レスポンシブデザイン](https://fcircle-biz.github.io/tech-docs-v2/guide/web-technologies/css/css-learning-material-11.html)

スマートフォンでも読みやすいページの作り方を学びます。`<meta name="viewport">` の役割、相対単位（`%` / `em` / `rem` / `vw` / `vh`）の使い分け、メディアクエリ（`@media`）による画面幅ごとの切り替え、モバイルファーストという考え方、画像の可変対応を扱います。

### [12. 装飾とアニメーション](https://fcircle-biz.github.io/tech-docs-v2/guide/web-technologies/css/css-learning-material-12.html)

ページに仕上げの一手間を加えます。角丸（`border-radius`）・影（`box-shadow`）・`:hover` と組み合わせた `transition`、`transform`（移動・拡大・回転）、`@keyframes` によるアニメーション、そして「やりすぎない」ためのアクセシビリティ上の配慮を学びます。

### [13. CSS変数と保守しやすい書き方](https://fcircle-biz.github.io/tech-docs-v2/guide/web-technologies/css/css-learning-material-13.html)

書いた CSS を後から直しやすく保つコツを学びます。カスタムプロパティ（CSS変数）による色やサイズの一元管理、クラスの命名ルール、スタイルシートの並べ方、よくある失敗とその回避、ブラウザ対応の確認方法（Can I use）を扱います。

### [14. 実践：プロフィールページをデザインしよう](https://fcircle-biz.github.io/tech-docs-v2/guide/web-technologies/css/css-learning-material-14.html)

総仕上げとして、素の HTML で作られたプロフィールページに CSS を適用し、1ページのWebサイトとして完成させます。CSS変数の定義 → 全体の下地 → ヘッダー → Flexbox/Grid によるレイアウト → レスポンシブ対応 → 仕上げの装飾、という実務と同じ手順を段階的にたどり、次の学習ステップも案内します。

## 推奨所要時間

| 章 | 内容 | 目安時間 |
|----|------|----------|
| 第1章 | CSSとは | 30分 |
| 第2章 | CSSの書き方と適用方法 | 35分 |
| 第3章 | セレクタの基本 | 40分 |
| 第4章 | カスケード・継承・詳細度 | 35分 |
| 第5章 | 文字とテキストのスタイル | 40分 |
| 第6章 | 色と背景 | 40分 |
| 第7章 | ボックスモデル | 45分 |
| 第8章 | 表示（display）と配置（position） | 45分 |
| 第9章 | Flexboxでレイアウト | 50分 |
| 第10章 | CSS Gridでレイアウト | 50分 |
| 第11章 | レスポンシブデザイン | 45分 |
| 第12章 | 装飾とアニメーション | 40分 |
| 第13章 | CSS変数と保守しやすい書き方 | 35分 |
| 第14章 | 実践：プロフィールページをデザインしよう | 60分 |
| **合計** | | **約9時間50分** |

※ 手を動かす時間を含んだ目安です。実習を丁寧に行う場合はこれより長くかかることがあります。

## 学習目標

このガイドを完了すると、以下のスキルを身につけることができます：

- CSS と HTML の役割分担を説明し、外部スタイルシートで CSS を適用できる
- セレクタを使い分け、狙った要素にピンポイントでスタイルを当てられる
- スタイルが効かないとき、カスケード・継承・詳細度の観点から原因を切り分けられる
- 文字・色・背景を整えて、読みやすいページをデザインできる
- ボックスモデルを理解し、余白と枠線を意図どおりにコントロールできる
- Flexbox と CSS Grid を使い分けて、ナビゲーション・カード一覧・ページ全体のレイアウトを組める
- メディアクエリでスマートフォンからPCまで対応したレスポンシブなページを作れる
- `transition` や `@keyframes` で控えめなアニメーションを付けられる
- CSS変数を使い、後から修正しやすいスタイルシートを書ける
- ブラウザの開発者ツールでスタイルを調べ、その場で試しながら修正できる

## 次のステップ

- [HTML 学習ガイドライン](https://fcircle-biz.github.io/tech-docs-v2/guide/web-technologies/html/README.md) — HTML の基礎を復習・補強したい方はこちら
- [JavaScript 学習ガイドライン](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/javascript-ecosystem/javascript/README.md) — ページに「動き」を付ける次の一歩
- CSS フレームワーク（Tailwind CSS・Bootstrap）— 素の CSS を理解した後に学ぶと、効率よく使いこなせます
- CSS 設計手法（BEM など）・Sass — 中規模以上のサイトでスタイルを整理するための発展トピック
