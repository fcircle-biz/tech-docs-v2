# Webの仕組み入門（HTTP・JSON・REST API）学習ガイドライン

このガイドラインでは、Webアプリケーションやシステム連携の土台となる「Webの仕組み」を、入門者向けに段階的に学習するためのカリキュラムを提供しています。ブラウザでURLを開いたときに裏側で何が起きているのかを出発点に、HTTP（通信の約束事）、JSON（データの書き方）、REST API（システム同士のつなぎ方）までを全14章で一通り体験します。

## 前提条件

### 必要な環境

- **Webブラウザ**: Google Chrome / Microsoft Edge / Firefox のいずれか（開発者ツールを使用します）
- **ターミナル**: Windows の PowerShell / コマンドプロンプト、macOS・Linux のターミナル（`curl` コマンドを使用。Windows 10 以降・macOS には標準で入っています）
- **テキストエディタ**: Visual Studio Code 推奨（第10章・第14章で JavaScript を少し書きます）
- **インターネット接続**: 公開されている練習用API（JSONPlaceholder など）にアクセスします

### 参考リソース

- [MDN Web Docs - HTTP](https://developer.mozilla.org/ja/docs/Web/HTTP) — HTTP の日本語リファレンス
- [MDN Web Docs - JSON](https://developer.mozilla.org/ja/docs/Learn/JavaScript/Objects/JSON) — JSON の解説
- [MDN Web Docs - Fetch API](https://developer.mozilla.org/ja/docs/Web/API/Fetch_API) — JavaScript からの通信
- [RFC 9110 - HTTP Semantics](https://www.rfc-editor.org/rfc/rfc9110) — HTTP の標準仕様
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) — 練習用の無料 REST API

### 前提知識

- **必須**: パソコンの基本操作（ファイルの保存、ブラウザの利用）
- **推奨**: [HTML 学習ガイドライン](https://fcircle-biz.github.io/tech-docs-v2/guide/web-technologies/html/README.md) の前半、JavaScript の基本文法（第10章・第14章で使用。分からなくてもコピーして動かせます）
- **不要**: ネットワークの専門知識、サーバー構築の経験

## 学習コンテンツ

### [1. Webの仕組みの全体像](https://fcircle-biz.github.io/tech-docs-v2/guide/web-technologies/web-basics/web-basics-learning-material-01.html)

ブラウザでURLを入力してからページが表示されるまでに何が起きているのかを、クライアントとサーバーの関係から大づかみに理解します。Webページの閲覧とWeb APIによるシステム連携が、同じ HTTP という仕組みの上に成り立っていることを押さえ、本教材で学ぶ HTTP・JSON・REST API の位置づけを確認します。

### [2. インターネットとURL・DNS](https://fcircle-biz.github.io/tech-docs-v2/guide/web-technologies/web-basics/web-basics-learning-material-02.html)

通信相手を見つける仕組みを学びます。IPアドレスとドメイン名、名前をアドレスに変換する DNS、URL の各部分（スキーム・ホスト・ポート・パス・クエリ・フラグメント）の意味、そして TCP/IP の階層の中で HTTP がどこに位置するのかを、図解で確認します。

### [3. HTTPの基本：リクエストとレスポンス](https://fcircle-biz.github.io/tech-docs-v2/guide/web-technologies/web-basics/web-basics-learning-material-03.html)

HTTP が「リクエスト（お願い）」と「レスポンス（返事）」の1往復でできていることを学びます。リクエスト行・ステータス行・ヘッダー・ボディという HTTPメッセージの構造を実物で読み、HTTP が「ステートレス」であることの意味、HTTP/1.1・HTTP/2・HTTP/3 の違いの概要を押さえます。

### [4. HTTPメソッド](https://fcircle-biz.github.io/tech-docs-v2/guide/web-technologies/web-basics/web-basics-learning-material-04.html)

GET・POST・PUT・PATCH・DELETE などのメソッドが「何をしてほしいか」を表すことを学びます。各メソッドの使いどころ、安全（サーバーの状態を変えない）と冪等（何回送っても結果が同じ）という2つの性質、HTMLフォームから送られる GET と POST の違いを扱います。

### [5. ステータスコード](https://fcircle-biz.github.io/tech-docs-v2/guide/web-technologies/web-basics/web-basics-learning-material-05.html)

レスポンスの冒頭にある3桁の数字の読み方を学びます。1xx〜5xx の5分類の意味、200・201・204・301・302・304・400・401・403・404・409・422・429・500・502・503 など頻出コードの違い、トラブル時に「どちらの責任か」を切り分ける考え方を身につけます。

### [6. HTTPヘッダーとボディ](https://fcircle-biz.github.io/tech-docs-v2/guide/web-technologies/web-basics/web-basics-learning-material-06.html)

通信の付帯情報を運ぶヘッダーと、中身を運ぶボディを学びます。Content-Type と MIMEタイプ、Accept によるコンテンツ交渉、Content-Length、User-Agent、Cache-Control や ETag によるキャッシュの仕組み、リダイレクトの Location などを具体例で確認します。

### [7. 開発者ツールとcurlで通信を観察する](https://fcircle-biz.github.io/tech-docs-v2/guide/web-technologies/web-basics/web-basics-learning-material-07.html)

目に見えない通信を「見える化」する道具を使いこなします。ブラウザの開発者ツール（Networkタブ）でリクエスト・レスポンスの中身やタイミングを読む方法と、ターミナルの `curl` コマンドでメソッド・ヘッダー・ボディを指定して自分で HTTP リクエストを送る方法を、実際に手を動かして学びます。

### [8. Cookie・セッション・HTTPS](https://fcircle-biz.github.io/tech-docs-v2/guide/web-technologies/web-basics/web-basics-learning-material-08.html)

ステートレスな HTTP で「ログイン状態」を保つ仕組みを学びます。Cookie とセッションの関係、Cookie の属性（HttpOnly・Secure・SameSite）、トークン認証（Authorizationヘッダー・Bearer）の入口、そして通信を暗号化する HTTPS（TLS・証明書）の役割を理解します。

### [9. JSONの基本](https://fcircle-biz.github.io/tech-docs-v2/guide/web-technologies/web-basics/web-basics-learning-material-09.html)

Web API のデータ形式の主流である JSON を学びます。オブジェクト・配列と6種類の値（文字列・数値・真偽値・null・オブジェクト・配列）、書き方の厳密なルール（ダブルクォート・末尾カンマ禁止など）、XML・CSV との比較を通して、JSON が選ばれる理由を押さえます。

### [10. JSONを読み書きする](https://fcircle-biz.github.io/tech-docs-v2/guide/web-technologies/web-basics/web-basics-learning-material-10.html)

実際の API が返すような入れ子の JSON を読み解き、目的の値へたどり着く練習をします。JavaScript の `JSON.parse` / `JSON.stringify` による変換、よくある構文エラーと見つけ方、日付や大きな数値の扱い、JSON Schema によるデータ形式の約束事の入口を学びます。

### [11. Web APIとRESTの考え方](https://fcircle-biz.github.io/tech-docs-v2/guide/web-technologies/web-basics/web-basics-learning-material-11.html)

プログラムからプログラムを呼び出す窓口である Web API と、その代表的な設計スタイル REST を学びます。「リソース」を URI で表し、HTTPメソッドで操作するという考え方、REST の設計原則（統一インターフェース・ステートレスなど）、RPC 形式や GraphQL との違いの概要を押さえます。

### [12. REST APIを呼び出してみよう](https://fcircle-biz.github.io/tech-docs-v2/guide/web-technologies/web-basics/web-basics-learning-material-12.html)

練習用 API（JSONPlaceholder）を相手に、curl で一覧取得・1件取得・作成・更新・削除（CRUD）を実際に行います。クエリパラメータによる絞り込み、リクエストボディへの JSON の渡し方、APIキーによる認証の仕組み、API ドキュメント（OpenAPI）の読み方も扱います。

### [13. REST APIの設計の基本](https://fcircle-biz.github.io/tech-docs-v2/guide/web-technologies/web-basics/web-basics-learning-material-13.html)

API を「使う側」から「作る側」の視点に切り替えます。分かりやすいエンドポイント（URI）の命名、メソッドとステータスコードの正しい使い分け、エラーレスポンスの形、ページネーション、バージョニング、冪等性への配慮など、良い API の設計指針を、悪い例との比較で学びます。

### [14. 実践：APIを使う小さなWebページを作ろう](https://fcircle-biz.github.io/tech-docs-v2/guide/web-technologies/web-basics/web-basics-learning-material-14.html)

総仕上げとして、JavaScript の `fetch` で REST API を呼び出し、取得した JSON をページに一覧表示し、フォームから新規データを送信する小さな Webページを作ります。読み込み中表示・エラー処理・CORS の考え方までを含め、本教材で学んだ HTTP・JSON・REST をひとつにつなげます。

## 推奨所要時間

| 章 | 内容 | 目安時間 |
|----|------|----------|
| 第1章 | Webの仕組みの全体像 | 30分 |
| 第2章 | インターネットとURL・DNS | 40分 |
| 第3章 | HTTPの基本：リクエストとレスポンス | 40分 |
| 第4章 | HTTPメソッド | 40分 |
| 第5章 | ステータスコード | 40分 |
| 第6章 | HTTPヘッダーとボディ | 45分 |
| 第7章 | 開発者ツールとcurlで通信を観察する | 50分 |
| 第8章 | Cookie・セッション・HTTPS | 45分 |
| 第9章 | JSONの基本 | 35分 |
| 第10章 | JSONを読み書きする | 45分 |
| 第11章 | Web APIとRESTの考え方 | 40分 |
| 第12章 | REST APIを呼び出してみよう | 50分 |
| 第13章 | REST APIの設計の基本 | 45分 |
| 第14章 | 実践：APIを使う小さなWebページを作ろう | 60分 |
| **合計** | | **約10時間** |

## 学習目標

このガイドを完了すると、以下のスキルを身につけることができます：

- ブラウザでURLを開いてからページが表示されるまでの流れを説明できる
- URL・DNS・IPアドレスの関係を説明できる
- HTTP のリクエスト／レスポンスを読み、メソッド・ステータスコード・主要ヘッダーの意味が分かる
- 開発者ツールと curl で実際の通信を観察・再現できる
- Cookie・セッション・HTTPS の役割を説明できる
- JSON を正しく読み書きし、JavaScript で変換できる
- REST API のドキュメントを読んで呼び出し、CRUD 操作ができる
- 基本的な設計指針に沿った REST API のエンドポイントを考えられる

## 次のステップ

- [JavaScript 学習ガイドライン](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/javascript-ecosystem/javascript/README.md) — fetch を使ったフロントエンド開発へ
- [Spring MVC 学習ガイドライン](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/spring-mvc/README.md) — サーバー側で Web アプリ／API を作る
- [Keycloak 学習ガイドライン](https://fcircle-biz.github.io/tech-docs-v2/guide/security/keycloak/README.md) — 認証・認可（OAuth 2.0 / OpenID Connect）へ
