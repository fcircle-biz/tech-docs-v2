# Node.js入門 学習ガイドライン

このガイドラインでは、Node.jsの基礎をJavaScript基礎知識を持つ初心者向けに段階的に学習するためのカリキュラムを提供しています。サーバーサイドJavaScriptの世界に踏み出し、Webアプリケーションのバックエンド開発の基礎を身につけましょう。

## 前提条件
### 必要な環境
- **Node.js**: バージョン18.x以上（LTS版推奨）
- **テキストエディタ**: Visual Studio Code（Node.js開発向け拡張機能が豊富）
- **ターミナル**: コマンドプロンプト（Windows）、ターミナル（macOS/Linux）
- **インターネット接続**: パッケージのダウンロードに必要

### 参考リソース
- [Node.js公式サイト](https://nodejs.org/ja/)
- [Node.js公式ドキュメント](https://nodejs.org/docs/latest/api/)
- [npm公式サイト](https://www.npmjs.com/)
- [Express.js公式サイト](https://expressjs.com/ja/)

### 前提知識
- **必須**: JavaScript基礎（変数、関数、配列、オブジェクト、DOM操作の基本）
  - [JavaScript入門ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/javascript-beginner/)を履修済みであること
- **推奨**: HTMLの基礎知識、コマンドライン操作の基礎

## 学習コンテンツ
### [1. Node.jsとは何か](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/nodejs-beginner/nodejs-beginner-learning-material-01.html)
Node.jsとは何か、ブラウザのJavaScriptとの違いは何かを、身近な例を使って分かりやすく説明します。サーバーサイドJavaScriptの世界への第一歩を踏み出しましょう。

### [2. Node.js環境のセットアップ](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/nodejs-beginner/nodejs-beginner-learning-material-02.html)
Node.jsのインストール方法をOS別に丁寧に解説します。nvmを使ったバージョン管理や、VS Codeの便利な拡張機能も紹介します。

### [3. はじめてのNode.jsプログラム](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/nodejs-beginner/nodejs-beginner-learning-material-03.html)
ターミナルからNode.jsプログラムを実行する方法を学びます。「Hello World」から始めて、対話モード（REPL）の使い方も習得します。

### [4. モジュールシステムを理解しよう](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/nodejs-beginner/nodejs-beginner-learning-material-04.html)
Node.jsのモジュールシステム（CommonJSとESモジュール）を学びます。コードを分割・再利用する方法を、実践的な例を通じて理解します。

### [5. 組み込みモジュールを活用しよう](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/nodejs-beginner/nodejs-beginner-learning-material-05.html)
Node.jsに標準で搭載されている便利なモジュール（fs、path、os、url）の使い方を学び、Node.jsの強力な機能を体験します。

### [6. npmとパッケージ管理](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/nodejs-beginner/nodejs-beginner-learning-material-06.html)
npm（Node Package Manager）を使ったパッケージの管理方法を学びます。package.jsonの作成、パッケージのインストール・更新の方法を習得します。

### [7. 非同期処理をマスターしよう](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/nodejs-beginner/nodejs-beginner-learning-material-07.html)
Node.jsの核心である非同期処理を深く理解します。コールバック、Promise、async/awaitの使い分けを、実践的な例で学びます。

### [8. ファイル操作をマスターしよう](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/nodejs-beginner/nodejs-beginner-learning-material-08.html)
fsモジュールを使ったファイルの読み書き、ディレクトリ操作を実践します。同期/非同期の両方の方法を学び、適切な使い分けを理解します。

### [9. HTTPサーバーを作ってみよう](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/nodejs-beginner/nodejs-beginner-learning-material-09.html)
Node.jsの標準モジュールを使って、シンプルなWebサーバーを構築します。HTTPの基礎知識も合わせて学習します。

### [10. Expressフレームワーク入門](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/nodejs-beginner/nodejs-beginner-learning-material-10.html)
人気のWebフレームワークExpressを使って、効率的にWebアプリケーションを開発する方法を学びます。ルーティングとミドルウェアの基礎を習得します。

### [11. REST APIサーバーを構築しよう](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/nodejs-beginner/nodejs-beginner-learning-material-11.html)
Expressを使ってREST APIサーバーを構築します。CRUD操作、JSONデータの送受信、エラーハンドリングを実装します。

### [12. タスク管理APIを作ろう（総合演習）](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/nodejs-beginner/nodejs-beginner-learning-material-12.html)
これまで学んだ知識を総動員して、タスク管理APIサーバーを段階的に構築します。実際の開発現場で使えるスキルを総合的に身につけます。

## 学習の進め方
1. **環境構築を確実に**: Node.jsが正しくインストールされているか、ターミナルでの操作に慣れているかを最初に確認しましょう。
2. **実際に手を動かす**: サンプルコードは必ず自分で入力して実行し、動作を確認しながら進めましょう。
3. **エラーメッセージを読む習慣を**: Node.jsのエラーメッセージは情報量が多いです。落ち着いて読んで原因を特定する練習をしましょう。
4. **非同期処理は繰り返し学ぶ**: 非同期処理はNode.jsの核心です。第7章は特に繰り返し学習することをお勧めします。
5. **公式ドキュメントを参照する**: 疑問に思ったことは公式ドキュメントで調べる習慣をつけましょう。

## 推奨所要時間

| 章 | 内容 | 目安時間 |
|----------|------|----------|
| 第1章 | Node.jsとは何か | 45分 |
| 第2章 | Node.js環境のセットアップ | 1時間 |
| 第3章 | はじめてのNode.jsプログラム | 45分 |
| 第4章 | モジュールシステムを理解しよう | 1時間15分 |
| 第5章 | 組み込みモジュールを活用しよう | 1時間30分 |
| 第6章 | npmとパッケージ管理 | 1時間 |
| 第7章 | 非同期処理をマスターしよう | 2時間 |
| 第8章 | ファイル操作をマスターしよう | 1時間30分 |
| 第9章 | HTTPサーバーを作ってみよう | 1時間30分 |
| 第10章 | Expressフレームワーク入門 | 1時間30分 |
| 第11章 | REST APIサーバーを構築しよう | 2時間 |
| 第12章 | タスク管理APIを作ろう（総合演習） | 4時間 |
| **合計** | | **約19時間** |

## 関連リソース
- [JavaScript入門ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/javascript-beginner/) - 前提となるJavaScript基礎
- [TypeScript学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/typescript/) - 型安全なNode.js開発
- [React学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/react/) - フロントエンド開発

## 学習目標
このガイドを完了すると、以下のスキルを身につけることができます：
- Node.jsの特徴とブラウザJavaScriptとの違いを理解し、適切な場面で使い分けられる
- Node.jsの環境構築を自力で行い、プログラムを実行・デバッグできる
- モジュールシステムを理解し、コードを適切に分割・構造化できる
- npmを使ってパッケージを管理し、外部ライブラリを活用できる
- 非同期処理（Promise、async/await）を正しく理解し、実装できる
- ファイルの読み書きやディレクトリ操作をプログラムから行える
- シンプルなHTTPサーバーを構築し、リクエストとレスポンスを処理できる
- Expressフレームワークを使ってWebアプリケーションの基礎を構築できる
- REST APIの設計原則を理解し、基本的なAPIサーバーを実装できる
- 総合的なサーバーサイドアプリケーションを独力で開発できる基礎力が身につく

## 次のステップ
このガイドライン完了後は、以下の学習に進むことをお勧めします：
- [Express.js中級ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/express/) - より高度なWebアプリケーション開発
- [TypeScript学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/typescript/) - 型安全なNode.js開発
- [MongoDB学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/mongodb/) - データベース連携
- [Next.js学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/nextjs/) - フルスタックフレームワーク
