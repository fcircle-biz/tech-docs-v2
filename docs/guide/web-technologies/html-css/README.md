# HTML/CSS入門 学習ガイドライン

このガイドラインでは、プログラミング未経験の方がWebサイトの基礎となるHTML/CSSを段階的に学習するためのカリキュラムを提供しています。専門用語を丁寧に解説しながら、実践的なWebページ作成スキルを身につけることができます。

## 前提条件

### 必要な環境
- **テキストエディタ**: Visual Studio Code（無料）または任意のテキストエディタ
  - Visual Studio Codeの推奨拡張機能：
    - Live Server（HTMLファイルをブラウザで即座に確認）
    - HTML CSS Support（コード補完機能）
    - Prettier（コード整形）
- **Webブラウザ**: Google Chrome、Firefox、Safari、Microsoft Edgeのいずれか（最新版推奨）
- **パソコン**: Windows、macOS、LinuxいずれもOK（スペックは問わない）

### 参考リソース
- [MDN Web Docs（日本語）](https://developer.mozilla.org/ja/docs/Web) - Web技術の公式リファレンス
- [W3Schools（英語）](https://www.w3schools.com/) - 初心者向けチュートリアルサイト
- [Can I use](https://caniuse.com/) - ブラウザ互換性確認ツール

### 前提知識
- **必須**: パソコンの基本操作（ファイルの作成・保存・フォルダの操作）
- **推奨**: インターネットの基本的な仕組みの理解（URLとは何か、ブラウザの役割など）
- **プログラミング経験**: 不要（このガイドは未経験者向けです）

## 学習コンテンツ

### [1. Webの世界へようこそ - HTMLとCSSの役割](https://fcircle-biz.github.io/tech_docs/guide/web-technologies/html-css/html-css-learning-material-01.html)
インターネット上のWebページがどのように作られているか、HTMLとCSSがそれぞれどんな役割を持つのかを、身近な例を使って分かりやすく解説します。プログラミング未経験でも理解できる内容からスタートします。

### [2. HTMLの基本構造 - はじめてのWebページ作成](https://fcircle-biz.github.io/tech_docs/guide/web-technologies/html-css/html-css-learning-material-02.html)
HTMLファイルの基本的な構造（`<!DOCTYPE html>`、`<html>`、`<head>`、`<body>`）について学び、実際に簡単なWebページを作成します。タグとは何か、要素と属性の違いなど、HTMLの基礎概念を丁寧に説明します。

### [3. テキストとリンク - 文章を構造化する](https://fcircle-biz.github.io/tech_docs/guide/web-technologies/html-css/html-css-learning-material-03.html)
見出し（`<h1>`〜`<h6>`）、段落（`<p>`）、強調（`<strong>`、`<em>`）、リンク（`<a>`）など、文章を構成する基本的なタグを学びます。Webページ間のリンクや、ページ内リンクの作成方法も習得します。

### [4. 画像とメディア - ビジュアルコンテンツの追加](https://fcircle-biz.github.io/tech_docs/guide/web-technologies/html-css/html-css-learning-material-04.html)
画像の表示（`<img>`）、動画や音声の埋め込み（`<video>`、`<audio>`）、YouTubeなど外部コンテンツの埋め込み（`<iframe>`）について学びます。画像の適切なサイズ設定や代替テキストの重要性も理解します。

### [5. リストとテーブル - 情報を整理して表示](https://fcircle-biz.github.io/tech_docs/guide/web-technologies/html-css/html-css-learning-material-05.html)
箇条書きリスト（`<ul>`、`<ol>`）、定義リスト（`<dl>`）、表（`<table>`）の作成方法を学びます。データを見やすく整理して表示する技術を身につけます。

### [6. フォーム作成 - ユーザーからの入力を受け取る](https://fcircle-biz.github.io/tech_docs/guide/web-technologies/html-css/html-css-learning-material-06.html)
入力フォーム（`<form>`）、テキスト入力（`<input>`）、選択ボックス（`<select>`）、ボタンなど、ユーザーとやり取りするための要素を学びます。お問い合わせフォームや登録フォームの基礎を作成します。

### [7. CSSの基礎 - Webページにスタイルを追加](https://fcircle-biz.github.io/tech_docs/guide/web-technologies/html-css/html-css-learning-material-07.html)
CSSとは何か、CSSの記述方法（インライン、内部、外部スタイルシート）、セレクタの基本（要素、クラス、ID）について学びます。HTMLにスタイルを適用する仕組みを理解します。

### [8. 色とテキストのスタイリング - 見た目を整える](https://fcircle-biz.github.io/tech_docs/guide/web-technologies/html-css/html-css-learning-material-08.html)
文字色・背景色の設定、フォントの変更、文字サイズ・行間の調整など、テキストの見た目を整える方法を学びます。色の指定方法（カラーネーム、HEX、RGB）についても理解します。

### [9. ボックスモデル - レイアウトの基礎](https://fcircle-biz.github.io/tech_docs/guide/web-technologies/html-css/html-css-learning-material-09.html)
CSSボックスモデル（margin、border、padding、content）の概念を理解し、要素の配置や間隔の調整方法を学びます。`display`プロパティによる要素の表示形式の変更も習得します。

### [10. ポジショニング - 要素の配置をコントロール](https://fcircle-biz.github.io/tech_docs/guide/web-technologies/html-css/html-css-learning-material-10.html)
`position`プロパティ（static、relative、absolute、fixed、sticky）を使った要素の配置方法、z-indexによる重なり順の制御について学びます。ヘッダーの固定やポップアップの実装方法を理解します。

### [11. フレックスボックス - 柔軟なレイアウト作成](https://fcircle-biz.github.io/tech_docs/guide/web-technologies/html-css/html-css-learning-material-11.html)
Flexboxレイアウトの基本概念、主軸と交差軸、アイテムの配置と整列（justify-content、align-items）について学びます。現代的で柔軟なレイアウトの作成方法を習得します。

### [12. グリッドレイアウト - 2次元配置の実現](https://fcircle-biz.github.io/tech_docs/guide/web-technologies/html-css/html-css-learning-material-12.html)
CSS Gridの基本概念、グリッドコンテナとグリッドアイテム、行と列の定義方法について学びます。複雑なレイアウトを簡単に実現する技術を身につけます。

### [13. レスポンシブデザイン - 様々なデバイスへの対応](https://fcircle-biz.github.io/tech_docs/guide/web-technologies/html-css/html-css-learning-material-13.html)
メディアクエリの使い方、ビューポート設定、モバイルファーストアプローチについて学びます。スマートフォン、タブレット、PCなど異なる画面サイズに対応したWebページを作成します。

### [14. CSSアニメーション - 動きのあるWebページ](https://fcircle-biz.github.io/tech_docs/guide/web-technologies/html-css/html-css-learning-material-14.html)
transitionとanimationプロパティを使った動きの実装、transformによる要素の変形、@keyframesによるアニメーション定義について学びます。インタラクティブなWebページを作成します。

### [15. 実践プロジェクト - シンプルなポートフォリオサイト作成](https://fcircle-biz.github.io/tech_docs/guide/web-technologies/html-css/html-css-learning-material-15.html)
これまで学んだ知識を総合して、自己紹介やプロフィールを掲載したポートフォリオサイトを作成します。企画から公開までの流れを体験し、実践的なスキルを身につけます。

## 学習の進め方

1. **まずは読んで理解する**
   - 各章の説明を丁寧に読み、新しい概念を理解することから始めましょう
   - 分からない専門用語が出てきたら、遠慮なく調べてください

2. **実際に手を動かす**
   - 説明を読むだけでなく、必ず自分でコードを書いてみましょう
   - サンプルコードをそのまま写すところから始めて、徐々に自分なりの変更を加えてみてください

3. **ブラウザで確認する**
   - 書いたコードは必ずブラウザで表示して確認しましょう
   - 思った通りに表示されない場合は、コードを見直してデバッグする習慣をつけてください

4. **繰り返し練習する**
   - プログラミングは「習うより慣れろ」の世界です
   - 同じタグやプロパティを何度も使って、自然に書けるようになるまで練習しましょう

5. **エラーを恐れない**
   - エラーは学習の機会です
   - うまくいかない時は、エラーメッセージをよく読んで原因を探る習慣をつけましょう

## 推奨所要時間

| 章 | 内容 | 目安時間 |
|:---|:-----|:---------|
| 第1章 | Webの世界へようこそ - HTMLとCSSの役割 | 45分 |
| 第2章 | HTMLの基本構造 - はじめてのWebページ作成 | 1時間 |
| 第3章 | テキストとリンク - 文章を構造化する | 1時間 |
| 第4章 | 画像とメディア - ビジュアルコンテンツの追加 | 1時間 |
| 第5章 | リストとテーブル - 情報を整理して表示 | 1時間 |
| 第6章 | フォーム作成 - ユーザーからの入力を受け取る | 1時間15分 |
| 第7章 | CSSの基礎 - Webページにスタイルを追加 | 1時間 |
| 第8章 | 色とテキストのスタイリング - 見た目を整える | 1時間 |
| 第9章 | ボックスモデル - レイアウトの基礎 | 1.5時間 |
| 第10章 | ポジショニング - 要素の配置をコントロール | 1.5時間 |
| 第11章 | フレックスボックス - 柔軟なレイアウト作成 | 1.5時間 |
| 第12章 | グリッドレイアウト - 2次元配置の実現 | 1.5時間 |
| 第13章 | レスポンシブデザイン - 様々なデバイスへの対応 | 1時間45分 |
| 第14章 | CSSアニメーション - 動きのあるWebページ | 1.5時間 |
| 第15章 | 実践プロジェクト - シンプルなポートフォリオサイト作成 | 8時間 |
| **合計** | | **約25.5時間** |

## 関連リソース

### チートシート
- [HTML要素クイックリファレンス](https://fcircle-biz.github.io/tech_docs/cheatsheet/web-technologies/html-elements-cheatsheet.html)
- [CSSプロパティ早見表](https://fcircle-biz.github.io/tech_docs/cheatsheet/web-technologies/css-properties-cheatsheet.html)
- [Flexbox/Grid比較ガイド](https://fcircle-biz.github.io/tech_docs/cheatsheet/web-technologies/layout-comparison-cheatsheet.html)

### 関連ガイドライン
- [JavaScript入門](https://fcircle-biz.github.io/tech_docs/guide/web-technologies/javascript/)
- [React入門](https://fcircle-biz.github.io/tech_docs/guide/web-technologies/react/)
- [Webアクセシビリティ入門](https://fcircle-biz.github.io/tech_docs/guide/web-technologies/web-accessibility/)

## 学習目標

このガイドを完了すると、以下のスキルを身につけることができます：

- **HTML構造の理解**: Webページの基本構造を理解し、適切なタグを使って文書を構造化できる
- **CSS装飾の実装**: 色、フォント、余白などを使ってWebページを美しくデザインできる
- **レイアウト作成**: Flexbox、Gridを使って複雑なレイアウトを実現できる
- **レスポンシブ対応**: スマートフォン、タブレット、PCに対応したWebページを作成できる
- **フォーム実装**: ユーザー入力を受け付ける機能的なフォームを作成できる
- **アニメーション追加**: CSSアニメーションで動きのあるインタラクティブなページを実現できる
- **実践力**: 学んだ知識を組み合わせて、実際のWebサイトを一から作成できる
- **問題解決力**: HTMLやCSSのエラーを自分で見つけて修正できる

## 学習のコツとアドバイス

### 初心者の方へ
- **焦らずじっくり**: 最初は理解できないことがあって当然です。一つひとつ確実に理解してから次に進みましょう
- **完璧を求めない**: 最初から完璧なコードは書けません。まずは動くことを優先し、徐々に改善していきましょう
- **比較して学ぶ**: 良いWebサイトのソースコードを見て、どのように作られているか研究しましょう

### つまずいた時は
- **デベロッパーツール活用**: ブラウザの開発者ツール（F12キー）を使って、HTMLとCSSがどう適用されているか確認しましょう
- **小さく分割**: 複雑な問題は小さな部分に分けて、一つずつ解決していきましょう
- **コミュニティ活用**: 分からないことは、オンラインコミュニティやQ&Aサイトで質問してみましょう

## 次のステップ

このガイドライン完了後は、以下の学習に進むことをお勧めします：

### JavaScriptで動きをつける
- [JavaScript入門ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/web-technologies/javascript/) - HTMLとCSSで作ったページに、JavaScriptで動的な機能を追加する方法を学びます

### モダンフレームワークの活用
- [React入門ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/web-technologies/react/) - コンポーネント指向の現代的なWeb開発を学びます
- [Vue.js入門ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/web-technologies/vuejs/) - 直感的で学習しやすいフレームワークを習得します

### デザインスキルの向上
- [UIデザイン基礎](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/ui-design/) - ユーザーインターフェースの設計原則を学びます
- [Webアクセシビリティ](https://fcircle-biz.github.io/tech_docs/guide/web-technologies/web-accessibility/) - すべての人が使いやすいWebサイト作りを学びます

### バックエンド開発への挑戦
- [Node.js入門](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/nodejs/) - サーバーサイドJavaScriptを学びます
- [データベース基礎](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/sql-basics/) - データの保存と管理を学びます

これらの技術を組み合わせることで、フルスタックのWeb開発者として活躍できるスキルを身につけることができます。