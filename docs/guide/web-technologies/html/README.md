# HTML 学習ガイドライン

このガイドラインでは、HTML（HyperText Markup Language）の基礎を入門者向けに段階的に学習するためのカリキュラムを提供しています。プログラミング経験がない方でも、「Webページがどう作られているか」を理解し、自分の手で1枚のWebページを完成させられるようになることをゴールに、**手を動かしながら少しずつ積み上げる**構成になっています。

## 前提条件

### 必要な環境
- Windows / macOS / Linux いずれかの PC
- Webブラウザ（**Google Chrome を推奨**。Edge・Firefox・Safari でも学習可能）
- テキストエディタ（**Visual Studio Code を推奨**・無料。メモ帳でも学習可能）

### 参考リソース
- [MDN Web Docs - HTML 入門](https://developer.mozilla.org/ja/docs/Learn/HTML)
- [MDN Web Docs - HTML要素リファレンス](https://developer.mozilla.org/ja/docs/Web/HTML/Element)
- [HTML Living Standard（公式仕様）](https://html.spec.whatwg.org/)
- [Markup Validation Service（HTML文法チェッカー）](https://validator.w3.org/)
- [Can I use（ブラウザ対応状況）](https://caniuse.com/)

### 前提知識
- **必須**: PC の基本操作（ファイルの作成・保存・フォルダ操作、ブラウザでWebページを開く）
- **推奨**: テキストエディタを使った経験（プログラミング・CSS・JavaScript の知識は**不要**）

## 学習コンテンツ

### [1. HTMLとは](https://fcircle-biz.github.io/tech-docs-v2/guide/web-technologies/html/html-learning-material-01.html)
HTML の全体像をつかむ章。HTML が「タグを使ってWebページの構造（意味）を表すマークアップ言語」であること、Webページが表示されるまでの仕組み（ブラウザがHTMLを受け取って解釈し画面に描く流れ）、HTML・CSS・JavaScript の役割分担（構造・見た目・動き）、HTML の歴史と現在の標準である HTML Living Standard を学ぶ。実際のWebサイトのソースを見て「世の中のページもすべてHTMLでできている」ことを体感する。

### [2. 環境の準備と最初のページ](https://fcircle-biz.github.io/tech-docs-v2/guide/web-technologies/html/html-learning-material-02.html)
HTML を書く環境を整える章。必要なものはエディタとブラウザだけであること、Visual Studio Code のインストールと日本語化、便利な拡張機能（Live Server など）、学習用フォルダの作り方とファイル名の付け方（`index.html`・半角英数字・拡張子の表示設定）を学ぶ。実際に `index.html` を作成し、ブラウザで開いて「Hello HTML」を表示させ、編集→保存→再読み込みという学習サイクルを体験する。

### [3. HTMLの基本構造とタグのルール](https://fcircle-biz.github.io/tech-docs-v2/guide/web-technologies/html/html-learning-material-03.html)
HTML の骨組みと文法を学ぶ章。要素・開始タグ・終了タグ・内容という用語の整理、空要素（`<br>`・`<img>` など終了タグのないタグ）、属性の書き方（`属性名="値"`）、入れ子（ネスト）と正しい階層、インデントの付け方を学ぶ。あわせて HTML文書の定型（`<!DOCTYPE html>`・`<html lang="ja">`・`<head>`・`<body>`）と、`<meta charset="UTF-8">`・`<title>` の役割、文字化けの原因と対処、コメント（`<!-- -->`）の書き方を確認する。

### [4. 見出しと段落・文字の装飾](https://fcircle-biz.github.io/tech-docs-v2/guide/web-technologies/html/html-learning-material-04.html)
文章を組み立てる章。見出し（`<h1>`〜`<h6>`）の6段階と正しい使い分け（1ページに`<h1>`は1つ・レベルを飛ばさない）、段落（`<p>`）、改行（`<br>`）と水平線（`<hr>`）、強調（`<strong>`・`<em>`）とその意味的な違い、その他のテキスト系タグ（`<small>`・`<mark>`・`<del>`・`<code>`・`<blockquote>`）を学ぶ。「見た目ではなく意味でタグを選ぶ」という HTML の基本姿勢と、空白・改行がまとめられるホワイトスペースの仕組みも扱う。

### [5. リスト](https://fcircle-biz.github.io/tech-docs-v2/guide/web-technologies/html/html-learning-material-05.html)
情報を並べて見せる章。箇条書きリスト（`<ul>` と `<li>`）、番号付きリスト（`<ol>`・`start`/`type`/`reversed` 属性）、説明リスト（`<dl>`・`<dt>`・`<dd>`）の3種類の使い分けを学ぶ。リストの入れ子（メニューや目次の作り方）、`<li>` の中に他の要素を入れられること、リストが崩れる典型的な原因（閉じ忘れ・`<ul>` 直下に `<li>` 以外を置く）も確認する。ナビゲーションメニューがリストで作られている実例も紹介する。

### [6. リンク](https://fcircle-biz.github.io/tech-docs-v2/guide/web-technologies/html/html-learning-material-06.html)
ページとページをつなぐ章。アンカータグ（`<a href="...">`）の基本、絶対パスと相対パスの違い（`./`・`../`・ルート相対）、同一ページ内リンク（`id` 属性とページ内ジャンプ）、別タブで開く `target="_blank"` と併記すべき `rel="noopener"`、メール・電話リンク（`mailto:`・`tel:`）を学ぶ。リンクテキストの書き方（「こちら」を避ける）といったアクセシビリティ上の配慮、リンク切れを防ぐパスの考え方も扱う。

### [7. 画像とメディア](https://fcircle-biz.github.io/tech-docs-v2/guide/web-technologies/html/html-learning-material-07.html)
ページに視覚要素を加える章。画像タグ（`<img src="..." alt="...">`）の必須属性、代替テキスト（alt）の役割と書き方、`width`/`height` 属性とレイアウトのずれ防止、画像形式の使い分け（JPEG・PNG・GIF・SVG・WebP）、画像フォルダの整理とパス指定を学ぶ。さらに `<figure>`・`<figcaption>` によるキャプション付き画像、音声（`<audio>`）・動画（`<video>`）の埋め込み、YouTube 等の `<iframe>` 埋め込み、著作権への配慮も紹介する。

### [8. 表（テーブル）](https://fcircle-biz.github.io/tech-docs-v2/guide/web-technologies/html/html-learning-material-08.html)
表形式のデータを整理して見せる章。テーブルの基本構造（`<table>`・`<tr>`・`<th>`・`<td>`）、見出しセルとデータセルの違い、`<thead>`・`<tbody>`・`<tfoot>` によるグループ化、`<caption>` による表題、セルの結合（`colspan`・`rowspan`）を学ぶ。行と列の対応を図で整理しながら、料金表・スペック表などの実例を組み立てる。「レイアウト目的で表を使わない」という現在の原則と、`scope` 属性によるアクセシビリティ配慮も扱う。

### [9. フォーム](https://fcircle-biz.github.io/tech-docs-v2/guide/web-technologies/html/html-learning-material-09.html)
ユーザーからの入力を受け取る章。フォームの仕組み（入力 → 送信 → サーバー処理）と `<form>` の `action`・`method`（GET と POST の違い）、代表的な入力部品（`<input>` の text/password/email/number/date/radio/checkbox、`<textarea>`、`<select>`、`<button>`）を学ぶ。`<label>` と `for`/`id` の結び付け、`name` 属性が送信データのキーになること、`placeholder`・`required`・`maxlength` などの属性による入力補助と簡易バリデーションも扱い、問い合わせフォームを組み立てる。

### [10. セマンティックHTMLと文書構造](https://fcircle-biz.github.io/tech-docs-v2/guide/web-technologies/html/html-learning-material-10.html)
「意味のあるHTML」を書く章。`<div>`・`<span>` によるグループ化とブロック要素・インライン要素の違い、`class`・`id` 属性の使い分けを整理したうえで、セマンティック要素（`<header>`・`<nav>`・`<main>`・`<section>`・`<article>`・`<aside>`・`<footer>`）を使ったページ全体の組み立て方を学ぶ。セマンティックにするメリット（読みやすさ・SEO・スクリーンリーダー対応）、見出しレベルとの関係、よくある誤用も確認する。

### [11. CSSとの連携入門](https://fcircle-biz.github.io/tech-docs-v2/guide/web-technologies/html/html-learning-material-11.html)
HTML に見た目を与える章。HTML（構造）と CSS（見た目）の役割分担をあらためて確認し、CSS の書き方3種類（インライン・`<style>`・外部ファイル `<link rel="stylesheet">`）と外部ファイルが推奨される理由を学ぶ。セレクタの基本（要素・class・id）、プロパティと値の書き方、色・文字サイズ・余白（margin/padding）といった最小限のプロパティ、ボックスモデルの考え方を扱い、作成済みのページに style.css を適用して見た目を整える。

### [12. 実践：プロフィールページを作ろう](https://fcircle-biz.github.io/tech-docs-v2/guide/web-technologies/html/html-learning-material-12.html)
総仕上げの章。これまで学んだ見出し・段落・リスト・リンク・画像・表・フォーム・セマンティック要素・CSS を総動員し、自己紹介プロフィールページを段階的に完成させる総合演習を行う。制作の流れ（構成を決める → 骨組みを書く → 中身を入れる → CSS で整える → 検証する）、ブラウザの開発者ツールと HTML バリデータによるチェック、公開の方法（GitHub Pages の概要）を学ぶ。仕上げに全タグのチートシートで復習し、次のステップ（CSS レイアウト・レスポンシブ・JavaScript）を示す。

## 推奨所要時間

| 章 | 内容 | 目安時間 |
|----|------|----------|
| 第1章 | HTMLとは | 30分 |
| 第2章 | 環境の準備と最初のページ | 35分 |
| 第3章 | HTMLの基本構造とタグのルール | 35分 |
| 第4章 | 見出しと段落・文字の装飾 | 35分 |
| 第5章 | リスト | 30分 |
| 第6章 | リンク | 35分 |
| 第7章 | 画像とメディア | 40分 |
| 第8章 | 表（テーブル） | 35分 |
| 第9章 | フォーム | 40分 |
| 第10章 | セマンティックHTMLと文書構造 | 35分 |
| 第11章 | CSSとの連携入門 | 40分 |
| 第12章 | 実践：プロフィールページを作ろう | 50分 |
| **合計** | | **約7時間20分** |

## 学習目標

このガイドを完了すると、以下のスキルを身につけることができます：

- HTML が何か、Webページがブラウザに表示されるまでの仕組みを自分の言葉で説明できる
- HTML文書の基本構造（DOCTYPE・html・head・body）を白紙から書ける
- 見出し・段落・リスト・リンク・画像・表を適切なタグで表現できる
- 「見た目」ではなく「意味」でタグを選ぶ（セマンティックな）HTML を書ける
- 入力フォームを組み立て、各部品と属性の役割を説明できる
- 外部CSSファイルを読み込み、作成したページの見た目を最低限整えられる
- HTMLバリデータや開発者ツールを使って、自分のページの誤りを見つけて直せる
- 1枚の自己紹介ページを企画から完成まで自力で作りきれる

## 次のステップ

- **CSS の本格学習** — レイアウト（Flexbox・Grid）、レスポンシブデザイン、アニメーション
- [Markdown 学習ガイド](https://fcircle-biz.github.io/tech-docs-v2/guide/web-technologies/markdown/markdown-learning-material-01.html) — 軽量マークアップでドキュメントを書く
- [JavaScript 学習ガイド](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/javascript-ecosystem/javascript/javascript-learning-material-01.html) — ページに動きを付ける
- **Webアクセシビリティ / SEO** — 誰にとっても使いやすいページ作り
