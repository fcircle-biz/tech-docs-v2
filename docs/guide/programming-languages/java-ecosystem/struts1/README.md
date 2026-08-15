# Struts 1 学習ガイドライン

このガイドラインでは、**Servlet/JSP の基礎を学び終えた方**を対象に、レガシー Java Web フレームワーク **Apache Struts 1** の仕組みを段階的に学習するためのカリキュラムを提供しています。

HTTP・Servlet・JSP・MVC の一般論は最小限にとどめ、「**Servlet/JSP で作る Web アプリが、Struts 1 によってどう整理されるのか**」から解説を始めます。最終目標は「ゼロから Struts システムを構築できること」ではなく、実務で最も必要とされる「**既存のレガシー Struts 1 システムを読み解き、修正箇所を特定できること**」です。

## 前提条件

### 必要な環境

- JDK（Struts 1 が動く環境の例: JDK 8。学習用に読むだけならインストール不要）
- Apache Tomcat（Struts 1 系が動作するバージョンの例: Tomcat 7/8 系）
- Struts 1 のライブラリ（`struts.jar` など。既存プロジェクトの `WEB-INF/lib` に同梱されていることが多い）
- 任意のリレーショナルデータベース（MySQL / PostgreSQL / Oracle など）と JDBC ドライバ
- テキストエディタまたは IDE（Eclipse 等）

### 参考リソース

- [Apache Struts 1 ドキュメント（アーカイブ）](https://struts.apache.org/struts1eol.html)
- [Struts 1 API（javadoc, 1.3.x）](https://svn.apache.org/repos/asf/struts/struts1/trunk/)
- 既存プロジェクトの `web.xml` / `struts-config.xml`（最良の教材は目の前のソースコードです）

### 前提知識

- **必須**: Java 基礎（クラス・継承・getter/setter・例外）、DB / SQL 基礎（SELECT / INSERT / UPDATE / DELETE）、HTML / CSS、Servlet / JSP の役割と基本的な仕組み（リクエスト・レスポンス・フォワード・スコープ）
- **推奨**: JDBC の基本操作、MVC という言葉を聞いたことがある程度の理解

> **注意**: Struts 1 は 2013 年に EOL（サポート終了）となったフレームワークです。本ガイドは**新規開発のためではなく、稼働中のレガシーシステムを保守・改修するため**の教材です。

## 学習コンテンツ

### [1. Struts 1とは何か](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/struts1/struts1-learning-material-01.html)

Servlet/JSP だけで作った Web アプリが抱える課題（分岐だらけの Servlet、JSP へのロジック混入、画面遷移の散在）を出発点に、Struts 1 が何を整理してくれるのかを理解します。Struts 1 における MVC の対応（Model＝JavaBeans/DAO、View＝JSP＋Struts タグ、Controller＝ActionServlet＋Action）と、本ガイド全体を貫く「1本の処理フロー」（画面 → `xxx.do` → ActionServlet → struts-config.xml → ActionForm → Action → DAO → DB → ActionForward → JSP）を最初に俯瞰します。学習の到達目標と各章の位置づけも示します。

### [2. Struts 1の入口と設定](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/struts1/struts1-learning-material-02.html)

Struts アプリの「入口」を押さえます。`web.xml` における `ActionServlet` の登録と `*.do` の `<servlet-mapping>`、初期化パラメータ `config` による `struts-config.xml` の指定、`struts-config.xml` の全体構造（`<form-beans>` / `<action-mappings>` / `<global-forwards>`）、`<action>` 要素の属性（`path` / `type` / `name` / `scope` / `validate` / `input`）を読み解きます。「URL の `xxx.do` から、どの Action クラスが呼ばれるか」を設定ファイルだけで追えるようになることがゴールです。ディレクトリ構成（`WEB-INF/lib`・`WEB-INF/classes`・`.tld`）も確認します。

### [3. Actionを理解する](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/struts1/struts1-learning-material-03.html)

Struts 1 のコントローラの中心である `Action` クラスを学びます。`execute()`（Struts 1.1 以降）と `perform()`（Struts 1.0 系、1.1 以降は非推奨）の違いと引数（`ActionMapping` / `ActionForm` / `HttpServletRequest` / `HttpServletResponse`）、処理結果に応じた `ActionForward` の返し方（`mapping.findForward("success")`）、`request.setAttribute()` による JSP へのデータ受け渡し、`<forward>` の `redirect` 属性の意味を理解します。Action がスレッドセーフでなければならない理由（インスタンスが使い回される）にも触れます。

### [4. ActionFormを理解する](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/struts1/struts1-learning-material-04.html)

HTML フォームの入力値を受け取る `ActionForm` を学びます。フォームの `name` 属性と getter/setter の対応ルール、`<form-beans>` での登録と `<action>` の `name` / `scope` / `validate` / `input` との連携、`reset()` の役割、`validate()` による入力チェックと `ActionErrors` / `ActionMessages`、エラー時に `input` で指定した画面へ戻る流れを追います。Action 内で `ActionForm` をキャストして値を取り出す定番コードも押さえます。

### [5. JSPとStrutsタグ](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/struts1/struts1-learning-material-05.html)

View 側の Struts タグライブラリを学びます。`taglib` 宣言（`struts-html` / `struts-bean` / `struts-logic`）、`<html:form>` `<html:text>` `<html:select>` `<html:submit>` と ActionForm のプロパティの結びつき、`<bean:write>` による属性値の出力、`<logic:iterate>` による一覧のループ表示、`<logic:present>` / `<logic:equal>` による条件分岐、`<html:errors>` によるエラー表示を扱います。`name` 属性がどのスコープ（request / session）を探すのか、`property` が何を指すのかを明確にします。

### [6. DBと連携する](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/struts1/struts1-learning-material-06.html)

Action → （Service）→ DAO → DB という縦の流れを組み立てます。JavaBeans（DTO）に SELECT 結果を詰める書き方、`List` を request に載せて JSP で `<logic:iterate>` する一覧表示、検索条件を ActionForm で受け取って `PreparedStatement` に渡す検索処理、Struts（画面制御）と DAO（データアクセス）の責務分担を学びます。SQL 文字列連結を避ける理由（SQL インジェクション）と、`Connection` / `Statement` / `ResultSet` のクローズにも触れます。

### [7. CRUDを作る](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/struts1/struts1-learning-material-07.html)

ここまでの部品を組み合わせ、1つの業務画面（社員管理など）の CRUD 一式を作ります。一覧・検索・詳細・登録・更新・削除それぞれについて、必要な `<action>` 定義・ActionForm・Action・DAO メソッド・遷移先 JSP を整理し、画面遷移図として全体をつなぎます。登録・更新後のリダイレクト（二重送信対策）、削除時の確認画面、共通の入力チェックの置き場所といった実装パターンも扱います。

### [8. 既存Struts 1システムの読み方](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/struts1/struts1-learning-material-08.html)

本ガイドの総まとめであり、実務での最重要スキルです。「この画面のこの項目を直したい」という依頼から、修正すべきファイルを特定するまでの調査手順を型として身につけます。JSP の `<html:form action="...">` を見る → `.do` を確認 → `struts-config.xml` で `<action>` を検索 → `ActionForm` を確認 → `Action` を読む → Service / DAO を追う → SQL を確認 → `ActionForward` から遷移先 JSP を確認、という一連の追跡を、実際のコード例で往復しながら練習します。影響範囲の見積もりとよくある落とし穴（`global-forwards`・共通 Action・重複した path）も扱います。

## 推奨所要時間

| 章 | 内容 | 目安時間 |
|----|------|----------|
| 第1章 | Struts 1とは何か | 1時間 |
| 第2章 | Struts 1の入口と設定 | 1.5時間 |
| 第3章 | Actionを理解する | 1.5時間 |
| 第4章 | ActionFormを理解する | 1.5時間 |
| 第5章 | JSPとStrutsタグ | 1.5時間 |
| 第6章 | DBと連携する | 1.5時間 |
| 第7章 | CRUDを作る | 2時間 |
| 第8章 | 既存Struts 1システムの読み方 | 1.5時間 |
| **合計** | | **約12時間** |

## 学習目標

このガイドを完了すると、以下のスキルを身につけることができます：

- Servlet/JSP だけの構成と比べて、Struts 1 が何を整理しているのかを説明できる
- 「画面 → `xxx.do` → ActionServlet → struts-config.xml → ActionForm → Action → DAO → DB → ActionForward → JSP」の流れを、ソースコードを見ながら説明できる
- `web.xml` と `struts-config.xml` を読み、URL から呼び出される Action クラスを特定できる
- `Action` / `ActionForm` / `ActionForward` の役割を理解し、簡単な画面を実装できる
- Struts タグ（`html` / `bean` / `logic`）を読み書きし、ActionForm との対応を説明できる
- Action → DAO → DB の連携で、一覧・検索・CRUD を実装できる
- **既存のレガシー Struts 1 システムを読み解き、修正すべきファイルを特定できる**

## 次のステップ

- [JSP/Servlet 学習ガイド](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/jsp/jsp-learning-material-01.html) — Struts の土台となる Servlet/JSP を復習する
- [JDBC 学習ガイド](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/jdbc/jdbc-learning-material-01.html) — DAO 層の実装を深める
- [Spring MVC 学習ガイド](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/spring-mvc/spring-mvc-learning-material-01.html) — Struts 1 の後継となるモダンな MVC フレームワークへ
