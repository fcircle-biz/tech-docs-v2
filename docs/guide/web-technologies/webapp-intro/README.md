# Webアプリ開発入門 学習ガイドライン

このガイドラインでは、プログラミング未経験の方がWebアプリケーション開発の基礎知識を段階的に学習するためのカリキュラムを提供しています。インターネットの仕組みからAPI、データベース、セキュリティまで、Webアプリ開発に必要な土台となる知識を体系的に習得できます。

## 前提条件

### 必要な環境
- **Webブラウザ**: Google Chrome（推奨）、Firefox、Microsoft Edgeのいずれか
  - 開発者ツール（DevTools）が利用できるモダンブラウザが必要です
- **パソコン**: Windows、macOS、LinuxいずれもOK
  - インターネット接続環境が必要です

### 参考リソース
- [MDN Web Docs（日本語）](https://developer.mozilla.org/ja/docs/Web) - Web技術の公式リファレンス
- [HTTP入門（MDN）](https://developer.mozilla.org/ja/docs/Web/HTTP) - HTTPプロトコルの詳細解説
- [JSON公式サイト](https://www.json.org/json-ja.html) - JSONフォーマットの仕様

### 前提知識
- **必須**: パソコンの基本操作（Webブラウザの使用、ファイル操作）
- **推奨**: なし（このガイドは完全な初心者向けです）
- **プログラミング経験**: 不要

## 学習コンテンツ

### [1. インターネットとWebの仕組み](https://fcircle-biz.github.io/tech_docs/guide/web-technologies/webapp-intro/webapp-intro-learning-material-01.html)
インターネットとWebの違いを理解し、私たちが普段使っているWebブラウザがどのような役割を果たしているのかを学びます。Webページが表示される裏側の仕組みを、身近な例を使って分かりやすく解説します。

### [2. ネットワークの基礎知識](https://fcircle-biz.github.io/tech_docs/guide/web-technologies/webapp-intro/webapp-intro-learning-material-02.html)
IPアドレス（IPv4/IPv6）、ドメイン名とDNS、TCP/IPの概念について学びます。コンピュータ同士がどのように通信しているのか、インターネットの根幹となる技術を初心者向けに解説します。

### [3. URLの構造を理解しよう](https://fcircle-biz.github.io/tech_docs/guide/web-technologies/webapp-intro/webapp-intro-learning-material-03.html)
普段何気なく使っているURLの各部分（プロトコル、ドメイン、パス、クエリパラメータ、ポート番号）が何を意味しているのかを学びます。URLを正しく理解することで、Web開発の基礎が身につきます。

### [4. クライアントとサーバー](https://fcircle-biz.github.io/tech_docs/guide/web-technologies/webapp-intro/webapp-intro-learning-material-04.html)
Webアプリケーションの基本となるクライアント・サーバーモデルを学びます。リクエストとレスポンスの概念、Webサーバーの役割について、具体例を交えて解説します。

### [5. HTTPプロトコルの基本](https://fcircle-biz.github.io/tech_docs/guide/web-technologies/webapp-intro/webapp-intro-learning-material-05.html)
HTTP（HyperText Transfer Protocol）の基本を学びます。リクエストとレスポンスの構造、ステータスコード（200、404、500など）の意味を理解し、Web通信の仕組みを把握します。

### [6. HTTPメソッドを理解しよう](https://fcircle-biz.github.io/tech_docs/guide/web-technologies/webapp-intro/webapp-intro-learning-material-06.html)
GET、POST、PUT、DELETEの4つの主要なHTTPメソッドについて学びます。それぞれのメソッドがどのような場面で使われるのか、実例を通じて理解を深めます。

### [7. データ形式（JSON）](https://fcircle-biz.github.io/tech_docs/guide/web-technologies/webapp-intro/webapp-intro-learning-material-07.html)
現代のWebアプリケーションで広く使われているJSONフォーマットについて学びます。JSONの構造と書き方、なぜAPIでJSONが使われるのかを理解します。

### [8. REST APIの基本](https://fcircle-biz.github.io/tech_docs/guide/web-technologies/webapp-intro/webapp-intro-learning-material-08.html)
APIとは何か、RESTの設計原則について学びます。エンドポイントの設計方法を理解し、現代的なWebサービスの仕組みを把握します。

### [9. データベースの役割](https://fcircle-biz.github.io/tech_docs/guide/web-technologies/webapp-intro/webapp-intro-learning-material-09.html)
なぜWebアプリにデータベースが必要なのか、データの永続化とは何かを学びます。リレーショナルデータベース（RDB）とNoSQLの違いについても解説します。

### [10. Webアプリの3層構造](https://fcircle-biz.github.io/tech_docs/guide/web-technologies/webapp-intro/webapp-intro-learning-material-10.html)
フロントエンド、バックエンド、データベースの3層構造について学びます。それぞれの役割と連携方法を理解し、Webアプリケーション全体の構成を把握します。

### [11. ローカル開発環境](https://fcircle-biz.github.io/tech_docs/guide/web-technologies/webapp-intro/webapp-intro-learning-material-11.html)
localhost（127.0.0.1）の意味、ポート番号の概念、複数のサーバーを同時に起動する方法について学びます。開発環境の基礎知識を身につけます。

### [12. CORSとセキュリティ基礎](https://fcircle-biz.github.io/tech_docs/guide/web-technologies/webapp-intro/webapp-intro-learning-material-12.html)
同一オリジンポリシー、CORSエラーの原因と対処法、HTTPSについて学びます。Webアプリケーションのセキュリティの基礎を理解します。

### [13. 開発者ツールでWebを観察しよう](https://fcircle-biz.github.io/tech_docs/guide/web-technologies/webapp-intro/webapp-intro-learning-material-13.html)
ブラウザの開発者ツール（DevTools）の使い方を学びます。Networkタブでリクエスト/レスポンスを確認し、実際のWeb通信を観察する方法を習得します。

### [14. Webアプリ開発の全体像](https://fcircle-biz.github.io/tech_docs/guide/web-technologies/webapp-intro/webapp-intro-learning-material-14.html)
Webアプリケーション開発の全体的な流れ、技術選定の考え方、次に学ぶべき技術について解説します。今後の学習ロードマップを明確にします。

## 学習の進め方

1. **順番通りに学習する**
   - この教材は前の章の知識が次の章の土台になるよう設計されています
   - 特に1〜6章は基礎中の基礎なので、しっかり理解してから先に進みましょう

2. **実際に確認してみる**
   - 第13章で学ぶ開発者ツールを使って、実際のWebサイトを観察してみましょう
   - 理論だけでなく、実際の動作を確認することで理解が深まります

3. **用語を覚える**
   - IT業界では専門用語が多く使われます
   - 分からない用語が出てきたら、その都度確認する習慣をつけましょう

4. **繰り返し読む**
   - 一度で完全に理解できなくても大丈夫です
   - 後の章を学んでから前の章に戻ると、新しい発見があることも多いです

## 推奨所要時間

| 章 | 内容 | 目安時間 |
|:---|:-----|:---------|
| 第1章 | インターネットとWebの仕組み | 45分 |
| 第2章 | ネットワークの基礎知識 | 45分 |
| 第3章 | URLの構造を理解しよう | 45分 |
| 第4章 | クライアントとサーバー | 1時間 |
| 第5章 | HTTPプロトコルの基本 | 1時間 |
| 第6章 | HTTPメソッドを理解しよう | 1時間 |
| 第7章 | データ形式（JSON） | 1時間 |
| 第8章 | REST APIの基本 | 1時間 |
| 第9章 | データベースの役割 | 45分 |
| 第10章 | Webアプリの3層構造 | 45分 |
| 第11章 | ローカル開発環境 | 1時間 |
| 第12章 | CORSとセキュリティ基礎 | 1時間 |
| 第13章 | 開発者ツールでWebを観察しよう | 1時間 |
| 第14章 | Webアプリ開発の全体像 | 45分 |
| **合計** | | **約13時間** |

## 関連リソース

### 関連ガイドライン
- [HTML/CSS入門](https://fcircle-biz.github.io/tech_docs/guide/web-technologies/html-css/) - Webページの作成方法を学ぶ
- [JavaScript入門](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/javascript-beginner/) - Webアプリに動きをつける
- [SQL入門](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/sql/) - データベース操作の基礎

### 次のステップとなるガイドライン
- [React入門](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/react/) - モダンフロントエンド開発
- [Python入門](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/python-beginner/) - バックエンド開発の第一歩
- [Docker入門](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/docker/) - 開発環境の構築

## 学習目標

このガイドを完了すると、以下のスキルを身につけることができます：

- **インターネットの仕組みの理解**: IPアドレス、DNS、TCP/IPなどの基礎概念を説明できる
- **HTTP通信の理解**: リクエスト/レスポンス、ステータスコード、HTTPメソッドを正しく理解できる
- **URLの読み解き**: URLの各構成要素の意味を理解し、正しく解釈できる
- **Webアーキテクチャの理解**: クライアント・サーバーモデル、3層構造を説明できる
- **API・JSONの基礎知識**: REST APIの概念とJSONフォーマットを理解できる
- **開発者ツールの活用**: ブラウザのDevToolsを使ってWeb通信を観察できる
- **セキュリティ基礎の理解**: CORS、HTTPSなどの基本的なセキュリティ概念を理解できる
- **次の学習への準備**: 具体的なプログラミング言語やフレームワークの学習を始める準備ができる

## 学習のコツとアドバイス

### 初心者の方へ
- **焦らない**: 専門用語が多く出てきますが、すべてを一度に覚える必要はありません
- **図を活用する**: 各章の図解を活用して、視覚的に理解しましょう
- **身近な例で考える**: 郵便の仕組みや電話の仕組みなど、身近な例に置き換えて考えると理解しやすいです

### つまずいた時は
- **用語集を作る**: 新しい用語が出てきたら、自分なりの言葉でメモしておきましょう
- **実際に試す**: 開発者ツールを使って、実際のWebサイトがどう動いているか確認してみましょう
- **前の章に戻る**: 分からなくなったら、関連する前の章を読み直してみましょう

## 次のステップ

このガイドライン完了後は、以下の学習に進むことをお勧めします：

### フロントエンド開発を学ぶ
- [HTML/CSS入門ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/web-technologies/html-css/) - Webページの構造とデザインを学ぶ
- [JavaScript入門ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/javascript-beginner/) - Webページに動きを追加する

### バックエンド開発を学ぶ
- [Python入門ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/python-beginner/) - サーバーサイド開発の基礎
- [FastAPI入門ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/fastapi/) - PythonでAPIを作成

### データベースを学ぶ
- [SQL入門ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/sql/) - データベース操作の基礎

このガイドで学んだ知識は、どの技術を学ぶ場合でも必ず役立つ基礎知識です。しっかりと理解してから次のステップに進むことで、効率的にスキルアップできます。
