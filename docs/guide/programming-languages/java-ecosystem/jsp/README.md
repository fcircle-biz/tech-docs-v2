# Servlet・JSP入門 学習ガイドライン

このガイドラインでは、Java Webアプリケーション開発の基盤技術であるServletとJSP（JavaServer Pages）を、プログラミング初心者向けに段階的に学習するためのカリキュラムを提供しています。Webアプリケーション開発が初めての方でも安心して学べるよう、基本的な概念から丁寧に解説しています。

## 前提条件

### 必要な環境
- JDK（Java Development Kit）17以降
- Apache Tomcat 10.x以降（サーブレットコンテナ）
- 統合開発環境（Eclipse、IntelliJ IDEA Community等）
- Webブラウザ（Chrome、Firefox、Edge等）
- データベース（MySQL または PostgreSQL）※後半の章で使用

### 参考リソース
- [Oracle Java公式ドキュメント](https://docs.oracle.com/en/java/)
- [Apache Tomcat公式ドキュメント](https://tomcat.apache.org/tomcat-10.1-doc/)
- [Jakarta EE公式サイト](https://jakarta.ee/)
- [Jakarta Servlet仕様](https://jakarta.ee/specifications/servlet/)
- [Jakarta Server Pages仕様](https://jakarta.ee/specifications/pages/)

### 前提知識
- **必須**: Java言語の基本（変数、制御構文、クラス、メソッド、例外処理）
- **必須**: HTMLの基本（タグ、属性、フォーム要素）
- **推奨**: CSSの基礎知識
- **推奨**: SQLの基本（SELECT、INSERT、UPDATE、DELETE）

## 学習コンテンツ

### [1. Webアプリケーション開発の世界へ](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/jsp/servlet-jsp-learning-material-01.html)
Webアプリケーションの仕組みを理解し、開発環境をセットアップして最初のプログラムを動かすところまでを学びます。

**学習目標:**
- Webアプリケーションの基本的な仕組みを理解する
- HTTPプロトコルの基礎を理解する
- Apache Tomcatをインストールし設定できる
- IDEでWebアプリケーションプロジェクトを作成できる

**学習内容:**
1. **Webアプリケーションとは**
   - クライアント・サーバーモデルの理解
   - 静的Webサイトと動的Webアプリケーションの違い
   - Java Webアプリケーションの特徴と利点
   - ServletとJSPの役割と関係性

2. **HTTPプロトコルの基礎**
   - HTTPリクエストとレスポンスの構造
   - HTTPメソッド（GET、POST、PUT、DELETE）
   - ステータスコード（200、404、500など）
   - ヘッダーとボディの役割

3. **開発環境のセットアップ**
   - JDKのインストール確認と環境変数設定
   - Apache Tomcatのダウンロードとインストール
   - Tomcatの起動・停止と動作確認
   - IDEとTomcatの連携設定（Eclipse/IntelliJ IDEA）

4. **Webアプリケーションの構造**
   - ディレクトリ構成（webapps、WEB-INF、classes、lib）
   - web.xmlの役割と基本構造
   - 静的リソースの配置場所
   - コンテキストパスとURLの関係

**つまずきやすいポイント:**
- Tomcatが起動しない → ポート競合（8080）の確認、JAVA_HOME設定の確認
- 404エラーが発生 → URLとファイル配置場所の対応関係を確認
- 文字化け → ファイルのエンコーディング設定の確認

**演習課題:**
- Tomcatを起動し、管理画面にアクセスする
- 簡単なHTMLファイルをwebappsに配置して表示する
- ブラウザの開発者ツールでHTTPリクエスト/レスポンスを確認する

---

### [2. はじめてのServlet - Javaでリクエストを処理する](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/jsp/servlet-jsp-learning-material-02.html)
Servletの基本を学び、Javaプログラムでブラウザからのリクエストを処理できるようになります。

**学習目標:**
- Servletの概念と役割を理解する
- 簡単なServletを作成できる
- Servletのライフサイクルを理解する
- アノテーションとweb.xmlでのマッピングができる

**学習内容:**
1. **Servletとは何か**
   - Servletの定義と特徴
   - Servletコンテナ（Tomcat）の役割
   - CGIとの違い、Servletの利点
   - Jakarta Servlet API（旧Java EE/Javax）

2. **最初のServlet作成**
   - HttpServletクラスの継承
   - doGet()メソッドのオーバーライド
   - HttpServletRequest/HttpServletResponseの基本
   - レスポンスへの文字列出力

3. **Servletのマッピング**
   - @WebServletアノテーションの使い方
   - urlPatterns属性の設定
   - web.xmlでの設定方法（従来方式）
   - ワイルドカードパターン

4. **Servletのライフサイクル**
   - init() - 初期化処理
   - service() - リクエスト処理の振り分け
   - doGet()/doPost() - 実際のリクエスト処理
   - destroy() - 終了処理
   - Servletインスタンスの生成タイミング

**つまずきやすいポイント:**
- クラスが見つからない → クラスファイルの配置場所（WEB-INF/classes）を確認
- 404エラー → URLマッピングの設定を確認
- doGet/doPostが呼ばれない → メソッドシグネチャの確認

**演習課題:**
- "Hello, Servlet!"を表示するServletを作成
- 現在の日時を表示するServletを作成
- HTMLを動的に生成するServletを作成

---

### [3. リクエストとレスポンス - データの受け渡し](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/jsp/servlet-jsp-learning-material-03.html)
HTTPリクエストからデータを取得し、適切なレスポンスを返す方法を学びます。

**学習目標:**
- リクエストパラメータを取得できる
- GETとPOSTの違いを理解し使い分けられる
- 適切なレスポンスを生成できる
- 文字エンコーディングを正しく設定できる

**学習内容:**
1. **HttpServletRequestの活用**
   - getParameter() - 単一パラメータの取得
   - getParameterValues() - 複数値の取得
   - getParameterNames() - パラメータ名一覧
   - リクエスト属性の設定と取得

2. **GETリクエストの処理**
   - クエリ文字列からのパラメータ取得
   - URLエンコーディングの理解
   - GETの用途と制限（URLの長さ制限）
   - 検索フォームの実装例

3. **POSTリクエストの処理**
   - doPost()メソッドの実装
   - リクエストボディからのパラメータ取得
   - POSTの用途（データ送信、ログイン等）
   - フォームデータの処理

4. **HttpServletResponseの活用**
   - setContentType() - コンテンツタイプの設定
   - getWriter()/getOutputStream() - 出力ストリーム
   - setCharacterEncoding() - 文字エンコーディング
   - sendRedirect() - リダイレクト処理

5. **文字エンコーディング対策**
   - request.setCharacterEncoding("UTF-8")
   - response.setContentType("text/html; charset=UTF-8")
   - 文字化けの原因と対策パターン

**つまずきやすいポイント:**
- パラメータがnull → パラメータ名の大文字小文字、nullチェックの実装
- 日本語が文字化け → エンコーディング設定の順序（処理前に設定）
- POSTでパラメータが取れない → フォームのmethod属性確認

**演習課題:**
- 名前を入力すると挨拶を返すServlet
- 簡易電卓（2つの数値を受け取り計算結果を表示）
- アンケートフォームの処理

---

### [4. はじめてのJSP - HTMLにJavaを埋め込む](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/jsp/servlet-jsp-learning-material-04.html)
JSPの基本を学び、HTMLテンプレートの中でJavaコードを実行できるようになります。

**学習目標:**
- JSPの概念とServletとの関係を理解する
- JSPの基本構文を理解する
- 動的なHTMLページを生成できる
- JSPのライフサイクルを理解する

**学習内容:**
1. **JSPとは何か**
   - JSPの概要と特徴
   - JSPとServletの関係（JSPはServletに変換される）
   - JSPを使う利点（HTMLが書きやすい）
   - 生成されたServletコードの確認方法

2. **JSPの基本構文**
   - スクリプトレット `<% ... %>` - Javaコードの実行
   - 式 `<%= ... %>` - 値の出力
   - 宣言 `<%! ... %>` - メソッド・変数の宣言
   - コメント `<%-- ... --%>` - JSPコメント

3. **JSPでの制御構文**
   - if文を使った条件分岐
   - for文を使った繰り返し
   - HTMLとJavaコードの組み合わせ方
   - 可読性を保つコツ

4. **JSPのライフサイクル**
   - 変換フェーズ（JSP→Servlet）
   - コンパイルフェーズ
   - 実行フェーズ
   - 初回アクセス時の遅延と対策

**つまずきやすいポイント:**
- JSPが表示されない → 拡張子.jspの確認、配置場所の確認
- Javaコードがそのまま表示 → タグの記述ミス（<% と %>）
- コンパイルエラー → エラーメッセージの読み方、セミコロン忘れ

**演習課題:**
- 現在時刻を表示するJSPページ
- 1から100までの数を表示（偶数は赤字）
- 簡単な掛け算表（九九）の生成

---

### [5. JSPの構文をマスターする](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/jsp/servlet-jsp-learning-material-05.html)
ディレクティブ、アクションタグ、暗黙オブジェクトを学び、JSPを使いこなせるようになります。

**学習目標:**
- pageディレクティブでページ属性を設定できる
- includeディレクティブでファイルを組み込める
- 標準アクションタグを使用できる
- 暗黙オブジェクトを活用できる

**学習内容:**
1. **pageディレクティブ**
   - 基本構文: `<%@ page ... %>`
   - contentType - MIMEタイプと文字コード
   - import - Javaクラスのインポート
   - errorPage/isErrorPage - エラーページ設定
   - session - セッション使用の有無

2. **includeディレクティブ**
   - 基本構文: `<%@ include file="..." %>`
   - 静的インクルードの仕組み
   - 共通ヘッダー・フッターの作成
   - インクルード時の変数スコープ

3. **標準アクションタグ**
   - `<jsp:include>` - 動的インクルード
   - `<jsp:forward>` - フォワード処理
   - `<jsp:param>` - パラメータの引き渡し
   - 静的インクルードとの違いと使い分け

4. **JSP暗黙オブジェクト**
   - request - HttpServletRequest
   - response - HttpServletResponse
   - out - JspWriter
   - session - HttpSession
   - application - ServletContext
   - config, pageContext, page, exception

**つまずきやすいポイント:**
- インクルードファイルが見つからない → 相対パスと絶対パスの違い
- 文字化け → pageディレクティブでのエンコーディング指定漏れ
- 暗黙オブジェクトの混同 → 用途別の整理

**演習課題:**
- 共通ヘッダー・フッターを持つWebサイト構造の作成
- エラーページの設定と動作確認
- 複数JSPファイルで構成されるページの作成

---

### [6. フォーム処理とデータの受け渡し](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/jsp/servlet-jsp-learning-material-06.html)
HTMLフォームとServlet/JSPの連携によるデータ処理を学びます。

**学習目標:**
- 各種HTMLフォーム要素を理解する
- フォームデータをServlet/JSPで受け取れる
- 入力値の検証ができる
- ユーザーへの適切なフィードバックができる

**学習内容:**
1. **HTMLフォームの要素**
   - form要素（action、method、enctype）
   - テキスト入力（text、password、textarea）
   - 選択系（checkbox、radio、select）
   - hidden項目とsubmitボタン

2. **フォームデータの処理**
   - 単一値の取得と処理
   - 複数選択値（checkbox、multiple select）の処理
   - 未入力・未選択時の挙動
   - デフォルト値の設定

3. **入力値の検証（バリデーション）**
   - 必須チェック
   - 形式チェック（数値、メール等）
   - 範囲チェック
   - エラーメッセージの表示方法

4. **フォームの再表示**
   - 入力値の保持（sticky form）
   - エラー箇所のハイライト
   - 確認画面の実装
   - 登録完了画面への遷移

**つまずきやすいポイント:**
- checkboxの値が取得できない → 未チェック時はパラメータが送信されない
- 複数選択の処理漏れ → getParameterValues()の使用
- 入力値が消える → エラー時の値保持処理

**演習課題:**
- ユーザー登録フォームの作成（入力→確認→完了）
- 商品検索フォーム（複数条件）の作成
- アンケートフォームの作成と結果集計

---

### [7. セッション管理 - ユーザー状態の保持](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/jsp/servlet-jsp-learning-material-07.html)
HTTPのステートレス性を補うセッション管理を学び、ログイン機能などを実装できるようになります。

**学習目標:**
- HTTPのステートレス性とセッションの必要性を理解する
- HttpSessionを使ってデータを管理できる
- Cookieの仕組みを理解する
- ログイン・ログアウト機能を実装できる

**学習内容:**
1. **セッションとは**
   - HTTPのステートレス性
   - セッションの仕組み（セッションIDとCookie）
   - セッションが必要な場面
   - セッションのセキュリティ考慮事項

2. **HttpSessionの使い方**
   - request.getSession() - セッションの取得・作成
   - setAttribute()/getAttribute() - 属性の設定・取得
   - removeAttribute() - 属性の削除
   - invalidate() - セッションの無効化
   - setMaxInactiveInterval() - タイムアウト設定

3. **Cookieの基礎**
   - Cookieの仕組みと用途
   - Cookie作成と送信
   - Cookieの読み取り
   - Cookieの有効期限とスコープ

4. **ログイン機能の実装**
   - ログインフォームの作成
   - 認証処理（ID/パスワード照合）
   - ログイン状態の保持
   - ログインチェック処理
   - ログアウト処理

**つまずきやすいポイント:**
- セッションが維持されない → Cookieの無効化、URLリライティング
- getAttribute()でClassCastException → 型変換の注意
- セッションタイムアウト → 適切なエラーハンドリング

**演習課題:**
- 簡易ログイン・ログアウト機能の実装
- ショッピングカート機能の実装
- ウィザード形式（複数画面）の入力フォーム

---

### [8. ServletとJSPの連携 - MVCパターン入門](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/jsp/servlet-jsp-learning-material-08.html)
ServletとJSPを適切に連携させ、保守性の高いWebアプリケーションを構築する方法を学びます。

**学習目標:**
- フォワードとリダイレクトを使い分けられる
- MVCパターンの概念を理解する
- Servlet（Controller）とJSP（View）の役割分担ができる
- RequestDispatcherを使いこなせる

**学習内容:**
1. **フォワードとリダイレクト**
   - フォワード - サーバー内での転送
   - リダイレクト - クライアントへの再リクエスト指示
   - 使い分けの基準（URLの変化、リクエスト属性の引き継ぎ）
   - PRGパターン（Post-Redirect-Get）

2. **RequestDispatcher**
   - getRequestDispatcher()の使い方
   - forward()メソッド
   - include()メソッド
   - パスの指定方法（絶対パス、相対パス）

3. **MVCパターンの基礎**
   - Model - ビジネスロジックとデータ
   - View - 表示（JSP）
   - Controller - リクエスト制御（Servlet）
   - なぜMVCが重要か（保守性、テスタビリティ）

4. **Servlet→JSPの連携実装**
   - Servletでのビジネスロジック処理
   - リクエスト属性でのデータ受け渡し
   - JSPでの表示処理
   - 典型的な処理フロー

**つまずきやすいポイント:**
- フォワード後にデータが表示されない → リクエスト属性への設定漏れ
- IllegalStateException → フォワード後のレスポンス出力
- URLが変わらない/変わる → フォワードとリダイレクトの混同

**演習課題:**
- 検索処理をMVCパターンで実装
- ログイン処理のMVC化
- 一覧→詳細画面の遷移をMVCで実装

---

### [9. JavaBeansとスコープ - データの構造化](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/jsp/servlet-jsp-learning-material-09.html)
JavaBeansを使ってデータを構造化し、4つのスコープを適切に使い分ける方法を学びます。

**学習目標:**
- JavaBeansを作成できる
- JSPのuseBeanアクションを使える
- 4つのスコープの違いを理解し使い分けられる
- 適切なスコープにデータを格納できる

**学習内容:**
1. **JavaBeansとは**
   - JavaBeans規約（引数なしコンストラクタ、getter/setter）
   - なぜJavaBeansを使うのか
   - POJO（Plain Old Java Object）との関係
   - Beanクラスの配置場所

2. **JSPでのJavaBeans使用**
   - `<jsp:useBean>` - Beanの取得・生成
   - `<jsp:setProperty>` - プロパティの設定
   - `<jsp:getProperty>` - プロパティの取得
   - property="*"による自動設定

3. **4つのスコープ**
   - page - 現在のページ内のみ
   - request - 1回のリクエスト処理中
   - session - セッション期間中
   - application - アプリケーション全体

4. **スコープの使い分け**
   - 各スコープの特徴と適切な用途
   - メモリ消費とパフォーマンス
   - スコープ選択の指針
   - pageContextによるスコープ操作

**つまずきやすいポイント:**
- Beanが見つからない → クラスの配置場所、パッケージ名の確認
- プロパティが設定されない → setter命名規則の確認
- スコープの選択ミス → 要件に応じた適切な選択

**演習課題:**
- ユーザー情報を格納するUserBeanの作成と使用
- フォーム入力をBeanに自動格納
- 各スコープの動作確認プログラム

---

### [10. EL式とJSTL - モダンなJSP開発](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/jsp/servlet-jsp-learning-material-10.html)
スクリプトレットに代わるEL式とJSTLを学び、可読性・保守性の高いJSPを作成できるようになります。

**学習目標:**
- EL式の構文を理解し使用できる
- JSTLのコアタグを使いこなせる
- スクリプトレットを使わないJSP開発ができる
- 保守性の高いJSPページを作成できる

**学習内容:**
1. **EL式（Expression Language）**
   - EL式の基本構文: `${...}`
   - スコープ変数へのアクセス
   - Beanプロパティへのアクセス（ドット演算子、ブラケット演算子）
   - 演算子（算術、比較、論理、empty、三項演算子）

2. **EL暗黙オブジェクト**
   - param, paramValues - リクエストパラメータ
   - header, headerValues - HTTPヘッダー
   - cookie - Cookie
   - pageScope, requestScope, sessionScope, applicationScope

3. **JSTLコアタグ**
   - `<c:out>` - 安全な出力（XSS対策）
   - `<c:set>`, `<c:remove>` - 変数の操作
   - `<c:if>` - 条件分岐
   - `<c:choose>`, `<c:when>`, `<c:otherwise>` - 多分岐
   - `<c:forEach>` - 繰り返し処理
   - `<c:forTokens>` - 文字列分割

4. **JSTLその他のタグ**
   - `<c:url>`, `<c:redirect>`, `<c:import>` - URL関連
   - フォーマットタグ（fmt:formatDate, fmt:formatNumber）
   - 関数タグ（fn:length, fn:contains等）

**つまずきやすいポイント:**
- JSTLが動作しない → JARファイルの配置、taglibディレクティブの記述
- EL式が評価されない → isELIgnored属性の確認
- nullと空文字の扱い → empty演算子の活用

**演習課題:**
- スクリプトレットで書かれたJSPをEL/JSTLに書き換え
- データ一覧表示（c:forEach使用）
- 条件に応じた表示切り替え（c:choose使用）

---

### [11. データベース連携 - JDBC・DAOパターン](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/jsp/servlet-jsp-learning-material-11.html)
データベースとの連携方法とDAOパターンを学び、データの永続化ができるようになります。

**学習目標:**
- JDBCを使ってデータベースに接続できる
- DAOパターンを理解し実装できる
- CRUD操作を実装できる
- SQLインジェクション対策ができる

**学習内容:**
1. **JDBCの基礎**
   - JDBCドライバの設定（WEB-INF/lib）
   - データベース接続（DriverManager.getConnection）
   - 接続情報の管理
   - try-with-resourcesによるリソース管理

2. **SQLの実行**
   - Statement vs PreparedStatement
   - SELECT文の実行とResultSet処理
   - INSERT/UPDATE/DELETE文の実行
   - SQLインジェクション対策（PreparedStatementの重要性）

3. **DAOパターン**
   - DAOパターンとは（Data Access Object）
   - DTOクラス（Data Transfer Object）
   - DAOインターフェースと実装クラス
   - ビジネスロジックとデータアクセスの分離

4. **Webアプリケーションでの実装**
   - コネクションプールの概念と設定
   - トランザクション管理の基礎
   - 例外処理とエラーハンドリング
   - 一覧表示、詳細表示、登録、更新、削除の実装

**つまずきやすいポイント:**
- 接続エラー → JDBCドライバの配置、接続URLの確認
- SQLインジェクション → 必ずPreparedStatementを使用
- コネクションリーク → 確実なクローズ処理

**演習課題:**
- 商品マスタのCRUD機能を実装
- DAOパターンによるユーザー管理機能
- 検索条件付き一覧表示

---

### [12. 実践Webアプリケーション開発](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/jsp/servlet-jsp-learning-material-12.html)
これまで学んだ技術を統合し、実践的なWebアプリケーションを開発します。セキュリティ対策と次のステップも学びます。

**学習目標:**
- 複数の技術を組み合わせてアプリケーションを構築できる
- セキュリティの基本対策を実装できる
- 実務レベルのコード構成ができる
- 次のステップ（フレームワーク）への準備ができる

**学習内容:**
1. **セキュリティ対策**
   - XSS（クロスサイトスクリプティング）対策
   - SQLインジェクション対策（復習と徹底）
   - CSRF対策の概念
   - パスワードの安全な扱い（ハッシュ化）

2. **アプリケーション設計**
   - パッケージ構成の設計
   - 共通機能の実装（フィルター）
   - エラーハンドリング戦略
   - ログ出力の基礎

3. **総合演習：タスク管理アプリケーション**
   - 要件定義と画面設計
   - データベース設計
   - ログイン認証機能
   - タスクのCRUD操作
   - 一覧表示（ソート、ページング）

4. **次のステップへ**
   - Servlet/JSPの位置づけ（レガシーと現代）
   - Spring Framework/Spring Bootへの移行
   - Thymeleafなどのテンプレートエンジン
   - REST API開発への発展
   - 学習の継続と推奨リソース

**つまずきやすいポイント:**
- 機能間の依存関係 → 適切なレイヤー分離
- セキュリティホール → チェックリストの活用
- 規模が大きくなると管理が大変 → フレームワークの必要性を実感

**演習課題:**
- タスク管理アプリケーションの完成
- セキュリティ診断と改善
- Spring Boot環境の構築と比較

---

## 学習の進め方

1. **環境構築を確実に**: 第1章で開発環境を正しくセットアップし、Tomcatが動作することを確認してから次に進みましょう
2. **Servletを先に理解**: JSPはServletに変換されるため、Servletの理解が基盤となります
3. **順序立てて学習**: 各章は前章の知識を前提としているため、順番に進めてください
4. **必ず手を動かす**: 読むだけでなく、コードを実際に書いて動かしましょう
5. **エラーから学ぶ**: エラーメッセージを読み、原因を調べる習慣をつけましょう
6. **演習問題に取り組む**: 各章の演習を解くことで理解が定着します

## 推奨所要時間

| 章 | 内容 | 目安時間 |
|----------|------|----------|
| 第1章 | Webアプリケーション開発の世界へ | 1時間 |
| 第2章 | はじめてのServlet | 1時間 |
| 第3章 | リクエストとレスポンス | 1.5時間 |
| 第4章 | はじめてのJSP | 1時間 |
| 第5章 | JSPの構文をマスターする | 1.5時間 |
| 第6章 | フォーム処理とデータの受け渡し | 1.5時間 |
| 第7章 | セッション管理 | 2時間 |
| 第8章 | ServletとJSPの連携 - MVCパターン入門 | 1.5時間 |
| 第9章 | JavaBeansとスコープ | 1.5時間 |
| 第10章 | EL式とJSTL | 1.5時間 |
| 第11章 | データベース連携 - JDBC・DAOパターン | 2時間 |
| 第12章 | 実践Webアプリケーション開発 | 2.5時間 |
| **合計** | | **約18.5時間** |

## 関連リソース

- [Java基礎 学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/java/) - Java言語の基礎を学ぶ
- [HTML/CSS 学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/web-technologies/html-css/) - Web基礎技術を学ぶ
- [SQL 学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/sql/) - データベース操作を学ぶ
- [JDBC 学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/jdbc/) - データベース接続を学ぶ

## 学習目標

このガイドを完了すると、以下のスキルを身につけることができます：

- Servletの仕組みを理解し、リクエスト処理を実装できる
- JSPの基本構文を使いこなし、動的なWebページを作成できる
- HTMLフォームとServlet/JSPを連携してデータ処理ができる
- セッション管理を使ったログイン機能を実装できる
- MVCパターンでServletとJSPを適切に連携できる
- EL式とJSTLを使ったモダンなJSP開発ができる
- DAOパターンを使ったデータベース連携ができる
- セキュリティを考慮した実践的なWebアプリケーションを開発できる

## 次のステップ

このガイドライン完了後は、以下の学習に進むことをお勧めします：

- [Spring Boot 学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/spring-boot/) - モダンなJava Web開発フレームワークを学ぶ
- [JUnit 学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/junit/) - 単体テストの書き方を学ぶ
- [Git 学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/development-processes/version-control/git/) - バージョン管理を学ぶ
