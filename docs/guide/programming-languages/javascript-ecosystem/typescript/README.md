# TypeScript 学習ガイドライン

このガイドラインでは、TypeScriptの基礎をプログラミング完全未経験者向けに段階的に学習するためのカリキュラムを提供しています。プログラミングとは何かから始め、TypeScriptの「型」という仕組みがどのように安全で分かりやすいコードを書く手助けをしてくれるのかを、実際に手を動かしながら楽しく学べるように設計されています。

## 前提条件
### 必要な環境
- **Webブラウザ**: Google Chrome、Firefox、Microsoft Edge、Safariのいずれか（最新版推奨）
- **テキストエディタ**: Visual Studio Code（無料、TypeScript向けの機能が充実）
- **Node.js**: バージョン18以上（TypeScriptの実行に必要、インストール方法は第2章で詳しく説明）
- **インターネット接続**: 学習リソースへのアクセスとパッケージのインストールに必要

### 参考リソース
- [TypeScript公式サイト（日本語）](https://www.typescriptlang.org/ja/)
- [TypeScript Playground（ブラウザで試せる）](https://www.typescriptlang.org/play)
- [Visual Studio Code公式サイト](https://code.visualstudio.com/)
- [MDN Web Docs - JavaScript基礎](https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide)

### 前提知識
- **必須**: なし（プログラミング未経験者でも大丈夫です）
- **推奨**: パソコンの基本操作（ファイルの作成、保存、フォルダの操作）ができること

## 学習コンテンツ
### [1. プログラミングとTypeScriptの世界へようこそ](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/typescript/typescript-learning-material-01.html)
プログラミングとは何か、TypeScriptがどのように「安全」なプログラムを書く手助けをしてくれるのか、身近な例を使って分かりやすく説明します。料理のレシピに例えながら、コンピュータと対話する第一歩を踏み出しましょう。

### [2. 開発環境を整えよう](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/typescript/typescript-learning-material-02.html)
TypeScriptでプログラムを書くための道具（Node.js、Visual Studio Code）の準備を画像付きで丁寧に解説します。最も簡単な方法で環境を整え、すぐにプログラミングを始められるようにします。

### [3. はじめてのTypeScriptプログラム](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/typescript/typescript-learning-material-03.html)
「Hello, TypeScript!」という文字を表示する最初のプログラムを作成し、TypeScriptファイルの作り方、実行方法、そして「型」という概念の初歩を体験します。

### [4. 変数と型：情報に名前と種類をつけよう](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/typescript/typescript-learning-material-04.html)
変数という「ラベル付きの箱」と、その箱に入れるものの「種類（型）」を指定する方法を学びます。数字専用の箱、文字専用の箱など、整理整頓されたプログラムの書き方を身につけます。

### [5. 基本的な型を使いこなそう](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/typescript/typescript-learning-material-05.html)
数値(number)、文字列(string)、真偽値(boolean)などの基本的な型と、それらを使った計算や文字の操作方法を、実例を通じて学習します。型があることで間違いを防げることを実感します。

### [6. 条件分岐：場合に応じて処理を変えよう](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/typescript/typescript-learning-material-06.html)
「もし〜なら」という条件分岐（if文）を使って、状況に応じて異なる処理を行う方法を学びます。型チェックと組み合わせることで、より安全な条件分岐が書けることを理解します。

### [7. 繰り返し処理：同じことを効率的にやろう](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/typescript/typescript-learning-material-07.html)
for文やwhile文を使った繰り返し処理の方法を学びます。型を使って配列の要素を安全に処理する方法や、カウンター変数の適切な使い方を実践的に習得します。

### [8. 関数：処理をパッケージ化しよう](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/typescript/typescript-learning-material-08.html)
よく使う処理を「関数」としてまとめ、引数と返り値に型をつける方法を学びます。型があることで、関数の使い方が明確になり、間違った使い方を防げることを体験します。

### [9. 配列とタプル：複数のデータを扱おう](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/typescript/typescript-learning-material-09.html)
同じ種類のデータをまとめて扱う配列と、決まった構成のデータを扱うタプルの使い方を学びます。型を使って配列の中身を保証する方法を理解します。

### [10. オブジェクトとインターフェース：データを構造化しよう](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/typescript/typescript-learning-material-10.html)
関連する情報をまとめるオブジェクトと、その構造を定義するインターフェースの作り方を学びます。型で構造を定義することで、チーム開発でも安心してコードが書けることを理解します。

### [11. クラス：設計図から実体を作ろう](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/typescript/typescript-learning-material-11.html)
オブジェクト指向プログラミングの基礎となるクラスの概念を学びます。プロパティとメソッドに型をつけて、より構造的なプログラムを作る方法を実践します。

### [12. 型の応用：ユニオン型と型ガード](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/typescript/typescript-learning-material-12.html)
複数の型を扱えるユニオン型と、実行時に型を判定する型ガードの使い方を学びます。柔軟性と安全性を両立させる TypeScript の強力な機能を理解します。

### [13. ジェネリクス：汎用的な型を作ろう](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/typescript/typescript-learning-material-13.html)
さまざまな型で使い回せる汎用的な関数やクラスを作るジェネリクスの基礎を学びます。型の再利用性を高める方法を実例を通じて理解します。

### [14. 非同期処理：時間のかかる処理を扱おう](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/typescript/typescript-learning-material-14.html)
Promise と async/await を使った非同期処理の基礎を学びます。型を使って非同期処理の結果を安全に扱う方法を実践的に習得します。

### [15. 実践：タスク管理アプリを作ろう](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/typescript/typescript-learning-material-15.html)
これまで学んだ知識を総動員して、型安全なタスク管理アプリケーションを段階的に作成します。インターフェース定義から始めて、実装、エラー処理まで、実践的な開発の流れを体験します。

## 学習の進め方
1. **プログラミングの概念から理解する**: 最初はプログラミングとは何かを理解することから始めましょう。急がず、基本概念をしっかり把握することが大切です。

2. **型の恩恵を実感しながら学ぶ**: TypeScriptの「型」がどのようにミスを防いでくれるか、実際にコードを書きながら体験しましょう。

3. **エラーメッセージを味方にする**: TypeScriptのエラーメッセージは親切です。「ここが間違っているよ」と教えてくれる先生だと思って、じっくり読む習慣をつけましょう。

4. **少しずつ改造して実験する**: サンプルコードが動いたら、型を変えたり、新しいプロパティを追加したりして、どんなエラーが出るか、どう直すかを実験しましょう。

5. **Visual Studio Codeの補完機能を活用する**: 型があることで、エディタが賢い提案をしてくれます。この機能を積極的に使って、効率的にコードを書きましょう。

## 推奨所要時間

| 章 | 内容 | 目安時間 |
|----------|------|----------|
| 第1章 | プログラミングとTypeScriptの世界へようこそ | 45分 |
| 第2章 | 開発環境を整えよう | 1時間 |
| 第3章 | はじめてのTypeScriptプログラム | 45分 |
| 第4章 | 変数と型：情報に名前と種類をつけよう | 1時間 |
| 第5章 | 基本的な型を使いこなそう | 1時間 |
| 第6章 | 条件分岐：場合に応じて処理を変えよう | 1時間 |
| 第7章 | 繰り返し処理：同じことを効率的にやろう | 1時間 |
| 第8章 | 関数：処理をパッケージ化しよう | 1時間30分 |
| 第9章 | 配列とタプル：複数のデータを扱おう | 1時間30分 |
| 第10章 | オブジェクトとインターフェース：データを構造化しよう | 1時間30分 |
| 第11章 | クラス：設計図から実体を作ろう | 1時間30分 |
| 第12章 | 型の応用：ユニオン型と型ガード | 2時間 |
| 第13章 | ジェネリクス：汎用的な型を作ろう | 2時間 |
| 第14章 | 非同期処理：時間のかかる処理を扱おう | 1時間30分 |
| 第15章 | 実践：タスク管理アプリを作ろう | 6時間 |
| **合計** | | **約25時間** |

## 関連リソース
- [TypeScript チートシート](https://fcircle-biz.github.io/tech_docs/cheatsheet/typescript/)
- [JavaScript 学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/javascript-beginner/)
- [React + TypeScript 学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/react-typescript/)
- [Node.js + TypeScript 学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/nodejs-typescript/)

## 学習目標
このガイドを完了すると、以下のスキルを身につけることができます：
- プログラミングの基本的な考え方（順次処理、条件分岐、繰り返し、関数）を理解し、TypeScriptでプログラムが書ける
- 型システムの基本概念を理解し、型を使って安全なコードが書ける
- 変数、関数、オブジェクト、クラスに適切な型定義ができる
- インターフェースを使ってデータ構造を設計できる
- 型エラーのメッセージを読んで、問題を自力で解決できる
- Visual Studio Codeの型補完機能を活用して効率的に開発できる
- 小規模な型安全なWebアプリケーションを設計・実装できる

## 次のステップ
このガイドライン完了後は、以下の学習に進むことをお勧めします：
- [React + TypeScript 学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/react-typescript/) - 型安全なReactアプリケーション開発
- [Next.js + TypeScript 学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/nextjs-typescript/) - フルスタックWebアプリケーション開発
- [Node.js + TypeScript 学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/nodejs-typescript/) - 型安全なサーバーサイド開発
- [TypeScript 上級ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/typescript-ecosystem/typescript-advanced/) - より高度な型システムの活用