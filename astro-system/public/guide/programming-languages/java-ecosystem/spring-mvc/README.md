# Spring MVC 学習ガイドライン

このガイドラインでは、Spring で Web アプリケーションを作るための仕組みである **Spring MVC** の基礎を、入門者向けに段階的に学習するためのカリキュラムを提供しています。ブラウザからのリクエストを受け取る Controller、業務処理を担う Service、データベースアクセスを担う Repository、画面表示を担う View（Thymeleaf）の役割を理解しながら、ユーザー一覧・詳細・登録・編集・削除ができる「ユーザー管理 Web アプリケーション」を実際に作り上げます。

| 項目 | 内容 |
|------|------|
| 難易度 | 初級 |
| 所要時間 | 約10時間 |
| 分類 | プログラミング言語（Java エコシステム） |

> 本教材は **Spring 学習教材シリーズの3つ目**です。シリーズは「① Spring 基礎 → ② Spring Data JDBC → ③ Spring MVC（本教材）」で構成されます。前2教材で学んだ DI・Bean・Service・Repository・Entity・CRUD 処理の考え方を前提に、Web アプリケーションの基本を学びます。

## 前提条件

### 必要な環境
- JDK 17 以降（Java 開発環境）
- テキストエディタまたは IDE（IntelliJ IDEA、Eclipse、VS Code など）
- H2 Database（学習用の軽量データベース。前教材から引き続き使用）
- Spring Boot 3.x（Spring Initializr で生成したプロジェクト）

### 参考リソース
- [Spring 公式サイト](https://spring.io/)
- [Spring MVC 公式ドキュメント](https://docs.spring.io/spring-framework/reference/web/webmvc.html)
- [Spring Initializr（プロジェクト生成）](https://start.spring.io/)
- [Thymeleaf 公式ドキュメント](https://www.thymeleaf.org/documentation.html)

### 前提知識
- **必須**: Java の基本文法（変数・型・条件分岐・ループ・メソッド・クラス・コンストラクタ・インターフェースの基礎）
- **必須**: Spring 基礎（DI、Spring Bean、`@Service`、`@Repository`）の理解
- **必須**: Spring Data JDBC の基礎（Entity、Repository、Service を使った CRUD 処理）
- **必須**: HTML の基本（`form`・`input`・`button` タグの基礎）
- **推奨**: SQL の基礎（SELECT / INSERT / UPDATE / DELETE）

> HTTP・リクエスト・レスポンス・GET・POST・MVC の詳細は、本教材内で初心者向けに一から説明します。

## 学習コンテンツ

### [1. Spring MVCとは](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/spring-mvc/spring-mvc-learning-material-01.html)
Spring MVC が「Web アプリケーションを作るための仕組み」であることを理解します。ブラウザ→Controller→Service→Repository→Database→View→ブラウザという処理の流れと、Model・View・Controller の役割をつかみます。

### [2. Spring MVCプロジェクトの基本構成](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/spring-mvc/spring-mvc-learning-material-02.html)
Spring MVC プロジェクトのフォルダ構成を学びます。controller・service・repository・entity パッケージの配置場所と、HTML テンプレートを置く `resources/templates` フォルダの役割を理解します。

### [3. Controllerの基本](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/spring-mvc/spring-mvc-learning-material-03.html)
`@Controller` と `@GetMapping` の役割を学びます。GET リクエストを受け取り、View（HTML テンプレート）を返すという Controller のいちばん基本的な流れを理解します。

### [4. Modelを使って画面にデータを渡す](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/spring-mvc/spring-mvc-learning-material-04.html)
Model が「Controller から View へデータを渡す箱」であることを学びます。`model.addAttribute()` でデータを追加し、Thymeleaf の `th:text` で画面に表示する方法を理解します。

### [5. ユーザー一覧を表示する](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/spring-mvc/spring-mvc-learning-material-05.html)
Service からユーザー一覧を取得し、Model 経由で View へ渡す流れを学びます。Thymeleaf の `th:each` を使った繰り返し表示で、一覧テーブルを作ります。

### [6. 詳細画面を表示する](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/spring-mvc/spring-mvc-learning-material-06.html)
URL に含まれる ID を `@PathVariable` で受け取り、対応する1件のユーザーを取得して詳細画面に表示する方法を学びます。一覧から詳細へのリンクの作り方も理解します。

### [7. 新規登録フォームを作る](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/spring-mvc/spring-mvc-learning-material-07.html)
GET と POST の違いを学びます。GET でフォームを表示し、POST で入力値を送信して登録する流れ、`UserForm`・`th:object`・`th:field`・`@ModelAttribute`・リダイレクトの使い方を理解します。

### [8. 編集機能を作る](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/spring-mvc/spring-mvc-learning-material-08.html)
既存データをフォームに表示してから更新する流れを学びます。`@PathVariable` と `@ModelAttribute` を組み合わせ、Repository の `save` メソッドが登録にも更新にも使えることを理解します。

### [9. 削除機能を作る](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/spring-mvc/spring-mvc-learning-material-09.html)
対象 ID を受け取り、Service 経由で Repository の削除処理（`deleteById`）を呼び出す流れを学びます。データを変更する処理を GET ではなく POST で行う理由を理解します。

### [10. 総合演習：ユーザー管理Webアプリケーション](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/spring-mvc/spring-mvc-learning-material-10.html)
これまで学んだ一覧・詳細・登録・編集・削除を組み合わせて、ユーザー管理 Web アプリケーションを完成させます。URL 設計と Controller・Service・Repository・View の役割を総整理します。

## 推奨所要時間

| 章 | 内容 | 目安時間 |
|----|------|----------|
| 第1章 | Spring MVCとは | 50分 |
| 第2章 | Spring MVCプロジェクトの基本構成 | 50分 |
| 第3章 | Controllerの基本 | 55分 |
| 第4章 | Modelを使って画面にデータを渡す | 55分 |
| 第5章 | ユーザー一覧を表示する | 60分 |
| 第6章 | 詳細画面を表示する | 60分 |
| 第7章 | 新規登録フォームを作る | 70分 |
| 第8章 | 編集機能を作る | 65分 |
| 第9章 | 削除機能を作る | 55分 |
| 第10章 | 総合演習：ユーザー管理Webアプリケーション | 80分 |
| **合計** | | **約10時間** |

## 学習目標
このガイドを完了すると、以下のスキルを身につけることができます：
- Spring MVC とは何か、Web アプリケーションを作る仕組みであることを説明できる
- MVC の Model・View・Controller のそれぞれの役割を説明できる
- `@Controller` の役割と、`@GetMapping` / `@PostMapping` の違いを説明できる
- Model を使って Controller から画面（View）にデータを渡せる
- Thymeleaf で一覧表示（`th:each`）やフォーム表示（`th:object` / `th:field`）ができる
- フォームから入力された値を Controller で受け取れる（`@ModelAttribute`）
- URL に含まれる ID を `@PathVariable` で受け取れる
- Service を経由して Repository の CRUD 処理を呼び出せる
- ユーザー一覧・詳細・登録・編集・削除の基本処理を実装できる
- 画面遷移とリダイレクト（`redirect:/users`）の基本を理解できる

## 次のステップ
- **Spring のバリデーション（Bean Validation）** — `@Valid` や `BindingResult` を使った入力チェック
- **Spring Security** — ログイン認証・認可によるアクセス制御
- **例外処理とエラーページ** — `@ExceptionHandler` や `@ControllerAdvice` による共通エラー処理
- **REST API（`@RestController`）** — 画面ではなく JSON を返す Web API の開発
