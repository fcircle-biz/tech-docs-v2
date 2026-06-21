# JSP/Servlet 学習ガイドライン

このガイドラインでは、Java を使った Web アプリケーション開発の中核技術である **Servlet** と **JSP（JavaServer Pages）** の基礎を、入門者向けに段階的に学習するためのカリキュラムを提供しています。Web の仕組みや HTTP の基礎から始め、Servlet によるリクエスト処理、JSP による画面生成、フォーム処理、セッション管理、MVC パターン、JavaBeans、EL 式 / JSTL、そしてデータベース連携（JDBC・DAO）まで、実際に手を動かしながら習得できます。

| 項目 | 内容 |
|------|------|
| 難易度 | 初級 |
| 所要時間 | 約11時間 |
| 分類 | プログラミング言語（Java エコシステム） |

## 前提条件

### 必要な環境
- JDK 17 以降（Java 開発環境）
- Apache Tomcat 10.1 以降（Jakarta Servlet 6.0 / JSP 3.1 対応のサーブレットコンテナ。第1章でセットアップ）
- IDE（Eclipse / IntelliJ IDEA など。VS Code でも可）
- Webブラウザ（開発者ツールを使用）

### 参考リソース
- [Jakarta Servlet 仕様（Jakarta EE 公式）](https://jakarta.ee/specifications/servlet/)
- [Jakarta Server Pages 仕様（Jakarta EE 公式）](https://jakarta.ee/specifications/pages/)
- [Apache Tomcat 公式サイト](https://tomcat.apache.org/)
- [Jakarta Standard Tag Library（JSTL）](https://jakarta.ee/specifications/tags/)

### 前提知識
- **必須**: Java の基本文法（変数・型・条件分岐・ループ・配列・メソッド・クラス・例外処理の基礎）
- **推奨**: HTML / CSS の基礎、SQL の基礎（SELECT / INSERT / UPDATE / DELETE）、オブジェクト指向の基本概念

> **名前空間について**: 本ガイドは Tomcat 10 以降が採用する **Jakarta 名前空間（`jakarta.servlet.*`）** を前提に解説します。Tomcat 9 以前の **旧 javax 名前空間（`javax.servlet.*`）** との違いにも適宜触れるため、古い環境を使う場合も対応できます。

## 学習コンテンツ

### [1. Webアプリケーション開発の世界へ](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/jsp/jsp-learning-material-01.html)
Web アプリケーションの仕組み（クライアント・サーバーモデル、静的サイトと動的アプリの違い）と HTTP プロトコルの基礎を理解し、Apache Tomcat をインストールして開発環境をセットアップします。Web アプリのディレクトリ構成（WEB-INF・classes・lib）と web.xml の役割も学びます。

### [2. はじめてのServlet - Javaでリクエストを処理する](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/jsp/jsp-learning-material-02.html)
Servlet の概念と役割を理解し、HttpServlet を継承した最初の Servlet を作成します。@WebServlet アノテーションと web.xml による URL マッピング、init / service / doGet / destroy というライフサイクルを学びます。

### [3. リクエストとレスポンス - データの受け渡し](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/jsp/jsp-learning-material-03.html)
HttpServletRequest からリクエストパラメータを取得し、HttpServletResponse で適切なレスポンスを返す方法を学びます。GET と POST の使い分け、文字エンコーディング（UTF-8）の正しい設定で文字化けを防ぎます。

### [4. はじめてのJSP - HTMLにJavaを埋め込む](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/jsp/jsp-learning-material-04.html)
JSP の概念と Servlet との関係（JSP は Servlet に変換される）を理解し、スクリプトレット・式・宣言・コメントの基本構文で動的な HTML ページを生成します。JSP のライフサイクル（変換→コンパイル→実行）も学びます。

### [5. JSPの構文をマスターする](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/jsp/jsp-learning-material-05.html)
page / include ディレクティブでページ属性の設定や共通部品の組み込みを行い、jsp:include・jsp:forward などの標準アクションタグと、request・session・application といった暗黙オブジェクトを活用します。

### [6. フォーム処理とデータの受け渡し](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/jsp/jsp-learning-material-06.html)
各種 HTML フォーム要素（text・checkbox・radio・select 等）の値を Servlet / JSP で受け取り、入力値の検証（バリデーション）とエラー表示、入力値を保持する sticky form、確認画面・完了画面の実装を学びます。

### [7. セッション管理 - ユーザー状態の保持](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/jsp/jsp-learning-material-07.html)
HTTP のステートレス性を補う HttpSession の使い方と Cookie の仕組みを理解し、ログイン・ログアウト機能を実装します。セッションのタイムアウトやセキュリティ上の注意点も学びます。

### [8. ServletとJSPの連携 - MVCパターン入門](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/jsp/jsp-learning-material-08.html)
フォワードとリダイレクトの使い分け、RequestDispatcher の使い方を学び、Servlet（Controller）と JSP（View）の役割を分離する MVC パターンで保守性の高いアプリケーションを構築します。

### [9. JavaBeansとスコープ - データの構造化](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/jsp/jsp-learning-material-09.html)
JavaBeans 規約に従ったクラスを作成し、jsp:useBean・jsp:setProperty・jsp:getProperty で扱います。page・request・session・application という 4 つのスコープの違いと使い分けを学びます。

### [10. EL式とJSTL - モダンなJSP開発](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/jsp/jsp-learning-material-10.html)
スクリプトレットに代わる EL 式（${...}）と JSTL コアタグ（c:forEach・c:if・c:choose 等）を使い、Java コードを埋め込まない可読性・保守性の高い JSP を作成します。fmt・fn タグも学びます。

### [11. データベース連携 - JDBC・DAOパターン](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/jsp/jsp-learning-material-11.html)
JDBC でデータベースに接続し、PreparedStatement で安全に CRUD（登録・参照・更新・削除）を実装します。DAO / DTO パターンでデータアクセスとビジネスロジックを分離し、SQL インジェクション対策やリソース管理も学びます。

## 推奨所要時間

| 章 | 内容 | 目安時間 |
|----|------|----------|
| 第1章 | Webアプリケーション開発の世界へ | 60分 |
| 第2章 | はじめてのServlet - Javaでリクエストを処理する | 60分 |
| 第3章 | リクエストとレスポンス - データの受け渡し | 60分 |
| 第4章 | はじめてのJSP - HTMLにJavaを埋め込む | 50分 |
| 第5章 | JSPの構文をマスターする | 60分 |
| 第6章 | フォーム処理とデータの受け渡し | 60分 |
| 第7章 | セッション管理 - ユーザー状態の保持 | 70分 |
| 第8章 | ServletとJSPの連携 - MVCパターン入門 | 60分 |
| 第9章 | JavaBeansとスコープ - データの構造化 | 50分 |
| 第10章 | EL式とJSTL - モダンなJSP開発 | 60分 |
| 第11章 | データベース連携 - JDBC・DAOパターン | 70分 |
| **合計** | | **約11時間** |

## 学習目標
このガイドを完了すると、以下のスキルを身につけることができます：
- Web アプリケーションと HTTP の基本的な仕組みを説明できる
- Apache Tomcat をセットアップし、Web アプリケーションを動かせる
- Servlet を作成し、リクエストの処理とレスポンスの生成ができる
- リクエストパラメータの取得と文字エンコーディングを正しく扱える
- JSP で動的な HTML ページを生成できる
- ディレクティブ・アクションタグ・暗黙オブジェクトを使いこなせる
- HTML フォームのデータを受け取り、入力検証とフィードバックができる
- HttpSession でセッションを管理し、ログイン機能を実装できる
- MVC パターンで Servlet（Controller）と JSP（View）を分離できる
- JavaBeans と 4 つのスコープを適切に使い分けられる
- EL 式と JSTL でスクリプトレットを使わない JSP を書ける
- JDBC と DAO パターンでデータベース連携を実装し、SQL インジェクションを防げる

## 次のステップ
- **Spring Framework / Spring Boot** — Servlet / JSP の知識を土台に、より生産性の高い Web アプリケーションフレームワークへ
- **JDBC の深掘り** — 「[JDBC学習ガイド](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/jdbc/jdbc-learning-material-01.html)」でデータベース操作をさらに体系的に習得
- **Thymeleaf などのテンプレートエンジン** — JSP に代わるモダンなビュー技術
- **REST API / JSON** — 画面遷移型から、フロントエンドと連携する API 型アプリケーションへの発展
