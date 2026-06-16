# Struts 1.x 入門 学習ガイドライン

このガイドラインでは、Apache Struts 1.xフレームワークの基礎を入門者向けに段階的に学習するためのカリキュラムを提供しています。Java、JDBC、JSPの基礎知識を持つ方が、MVCパターンに基づいたWebアプリケーション開発の手法を理解できるよう、丁寧に解説しています。

## 前提条件

### 必要な環境
- **JDK（Java Development Kit）8以降** - Java開発環境
- **Apache Tomcat 8.x/9.x** - サーブレットコンテナ
- **Eclipse IDE for Enterprise Java Developers** または **IntelliJ IDEA** - 統合開発環境
- **データベース（MySQL/PostgreSQL/H2）** - 後半の章で使用
- **Webブラウザ（Chrome、Firefox、Edge等）** - 動作確認用

### 参考リソース
- [Apache Struts 1 公式ドキュメント（アーカイブ）](https://struts.apache.org/struts1eol-announcement.html)
- [Apache Tomcat 公式サイト](https://tomcat.apache.org/)
- [Eclipse IDE ダウンロードページ](https://www.eclipse.org/downloads/)
- [Maven 公式サイト](https://maven.apache.org/)

### 前提知識
- **必須**: Java言語の基本（変数、制御構文、クラス、オブジェクト指向、例外処理）
  - [Java入門 学習ガイド](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/java/) を履修済みであること
- **必須**: JDBCによるデータベース操作の基本
  - [JDBC 学習ガイド](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/jdbc/) を履修済みであること
- **必須**: Servlet/JSPの基礎知識
  - [Servlet・JSP入門 学習ガイド](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/jsp/) を履修済みであること
- **推奨**: HTMLフォームの基本構造
- **推奨**: XMLの基本的な読み書き

## 学習コンテンツ

### [1. Struts 1.xの世界へようこそ - MVCパターン入門](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/struts/struts-learning-material-01.html)
Struts 1.xとは何か、なぜフレームワークを使うのかを理解します。MVCパターン（Model-View-Controller）の概念を身近な例で学び、StrutsがどのようにMVCを実現しているかを把握します。

**学習目標:**
- フレームワークを使う利点を説明できる
- MVCパターンの3つの役割を理解できる
- Strutsの基本的なリクエスト処理の流れを説明できる

---

### [2. 開発環境の準備と最初のStrutsアプリケーション](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/struts/struts-learning-material-02.html)
Eclipse/IntelliJ IDEAでStrutsプロジェクトを作成する方法を学びます。必要なライブラリ（JAR）の導入、web.xmlの設定、そして「Hello Struts」アプリケーションを動かすところまでを実践します。

**学習目標:**
- Struts 1.xのライブラリをプロジェクトに追加できる
- web.xmlにActionServletを設定できる
- 簡単なStrutsアプリケーションを動作させられる

---

### [3. Actionクラスの基礎 - リクエスト処理の要](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/struts/struts-learning-material-03.html)
StrutsにおけるController役を担うActionクラスの作成方法を学びます。executeメソッドの実装、ActionMapping、ActionForwardの使い方を理解し、リクエストを受けて適切なページに遷移する処理を実装します。

**学習目標:**
- Actionクラスを継承してコントローラーを作成できる
- executeメソッドの引数と戻り値を理解できる
- ActionForwardで画面遷移を制御できる

---

### [4. ActionFormの基礎 - フォームデータの管理](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/struts/struts-learning-material-04.html)
HTMLフォームから送信されたデータを受け取るActionFormの作成方法を学びます。プロパティの定義、getter/setterメソッド、resetメソッドの実装を理解し、フォームデータを安全に管理する方法を習得します。

**学習目標:**
- ActionFormを継承してフォームBeanを作成できる
- フォームの入力値をActionFormで受け取れる
- DynaActionFormの使い方を理解できる

---

### [5. struts-config.xml - 設定ファイルの理解](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/struts/struts-learning-material-05.html)
Strutsアプリケーションの中心となる設定ファイルstruts-config.xmlの構造を学びます。form-beans、action-mappings、global-forwardsなどの設定要素を理解し、Action、ActionForm、JSPを正しく連携させる方法を習得します。

**学習目標:**
- struts-config.xmlの基本構造を理解できる
- form-beansでActionFormを定義できる
- action-mappingsでURLとActionを紐付けられる
- forwardで遷移先を設定できる

---

### [6. Strutsタグライブラリ入門 - JSPとの連携](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/struts/struts-learning-material-06.html)
JSPで使用するStrutsタグライブラリを学びます。html:form、html:text、html:submitなどのHTMLタグ、bean:writeなどのBeanタグ、logic:iterateなどのLogicタグの使い方を実践的に習得します。

**学習目標:**
- Strutsタグライブラリをtaglibディレクティブで宣言できる
- html:タグでフォーム要素を作成できる
- bean:タグでデータを表示できる
- logic:タグで条件分岐・繰り返し処理ができる

---

### [7. フォーム処理とバリデーション機能](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/struts/struts-learning-material-07.html)
ユーザー入力のバリデーション（検証）機能を学びます。ActionFormのvalidateメソッドによる手動検証と、Validatorフレームワークによる宣言的検証の両方を理解し、エラーメッセージの表示方法を習得します。

**学習目標:**
- ActionFormのvalidateメソッドで入力検証ができる
- validation.xmlで検証ルールを定義できる
- ActionErrors/ActionMessagesでエラーを管理できる
- html:errorsタグでエラーを表示できる

---

### [8. メッセージ管理とエラーハンドリング](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/struts/struts-learning-material-08.html)
アプリケーション全体で使用するメッセージの管理方法を学びます。プロパティファイルによるメッセージの外部化、例外発生時のエラーハンドリング、global-exceptionsによる共通エラー処理を習得します。

**学習目標:**
- MessageResourcesでメッセージを一元管理できる
- プロパティファイルにメッセージを定義できる
- global-exceptionsで例外を処理できる
- 適切なエラーページに遷移させられる

---

### [9. セッション管理とログイン機能の実装](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/struts/struts-learning-material-09.html)
HTTPセッションを使ったユーザー状態の管理方法を学びます。ログイン・ログアウト機能の実装、認証チェックの仕組み、セッションスコープとリクエストスコープの使い分けを理解します。

**学習目標:**
- ActionFormのスコープ（request/session）を使い分けられる
- ログイン認証機能を実装できる
- セッションにユーザー情報を保存・取得できる
- ログインチェック処理を実装できる

---

### [10. データベース連携 - JDBCの知識を活かす](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/struts/struts-learning-material-10.html)
JDBC学習ガイドで習得した知識を活かし、StrutsアプリケーションでDAOパターンを使ったデータベース連携を実装します。Action→Service→DAOの階層構造を理解し、検索・登録・更新・削除（CRUD）処理を実装します。

**学習目標:**
- Action、Service、DAOの役割分担を理解できる
- StrutsアプリケーションでJDBCを使用できる
- 一覧表示、詳細表示機能を実装できる
- データの登録・更新・削除機能を実装できる

---

### [11. 国際化対応（i18n）の基礎](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/struts/struts-learning-material-11.html)
多言語対応アプリケーションの作成方法を学びます。リソースバンドルの仕組み、ロケールの切り替え、言語別プロパティファイルの管理方法を理解し、日本語・英語の切り替え機能を実装します。

**学習目標:**
- 国際化（i18n）の概念を理解できる
- 言語別のプロパティファイルを作成できる
- ロケール切り替え機能を実装できる
- bean:messageタグでメッセージを表示できる

---

### [12. 実践：タスク管理アプリケーション開発](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/struts/struts-learning-material-12.html)
これまで学んだ知識を総合して、実践的なタスク管理アプリケーションを開発します。ログイン認証、タスクのCRUD操作、バリデーション、エラーハンドリングを含む完全なWebアプリケーションを構築します。

**学習目標:**
- 学習した技術を組み合わせてアプリケーションを構築できる
- 実務レベルのコード構成を理解できる
- Strutsアプリケーションの全体像を把握できる
- 次のステップ（モダンフレームワーク）への準備ができる

---

## 学習の進め方

1. **前提知識を確認してから始めましょう**
   - Java、JDBC、JSPの各ガイドを履修済みであることを確認してください
   - 特にServlet/JSPの知識はStrutsの理解に不可欠です

2. **必ず順番に学習を進めてください**
   - 各章は前章の知識を前提として構成されています
   - 特に第1章〜第5章の基礎部分は飛ばさないでください

3. **実際にコードを書いて動かしましょう**
   - 読むだけでなく、必ず自分の手でコードを入力してください
   - サンプルコードを動かした後、少し変更して挙動を確認しましょう

4. **設定ファイルの理解を大切に**
   - Strutsは設定ファイル（struts-config.xml）が重要です
   - 設定とJavaコードの関係を常に意識してください

5. **エラーメッセージを読む習慣をつけましょう**
   - Strutsのエラーは設定ミスが原因であることが多いです
   - スタックトレースから原因を特定する練習をしましょう

## 推奨所要時間

| 章 | 内容 | 目安時間 |
|----------|------|----------|
| 第1章 | MVCパターン入門 | 45分 |
| 第2章 | 開発環境の準備と最初のアプリ | 1.5時間 |
| 第3章 | Actionクラスの基礎 | 1.5時間 |
| 第4章 | ActionFormの基礎 | 1.5時間 |
| 第5章 | struts-config.xml設定ファイル | 1.5時間 |
| 第6章 | Strutsタグライブラリ入門 | 2時間 |
| 第7章 | フォーム処理とバリデーション | 2時間 |
| 第8章 | メッセージ管理とエラーハンドリング | 1.5時間 |
| 第9章 | セッション管理とログイン機能 | 2時間 |
| 第10章 | データベース連携 | 2時間 |
| 第11章 | 国際化対応（i18n） | 1.5時間 |
| 第12章 | 総合演習 | 3時間 |
| **合計** | | **約21時間** |

※学習者のスキルレベルにより変動します。自分のペースで進めてください。

## 関連リソース

### 前提知識の学習ガイド
- [Java入門 学習ガイド](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/java/) - Java言語の基礎
- [JDBC 学習ガイド](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/jdbc/) - データベース連携
- [Servlet・JSP入門 学習ガイド](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/jsp/) - WebアプリケーションのF基礎

### チートシート
- [Java チートシート](https://fcircle-biz.github.io/tech_docs/cheatsheet/programming-languages/java-cheatsheet.html)
- [JSP チートシート](https://fcircle-biz.github.io/tech_docs/cheatsheet/web-technologies/jsp-cheatsheet.html)

## 学習目標

このガイドを完了すると、以下のスキルを身につけることができます：

- **MVCパターンの理解** - Model-View-Controllerアーキテクチャの概念と実装方法を理解できる
- **Strutsの基本構造** - Action、ActionForm、struts-config.xmlの役割と関係を説明できる
- **フォーム処理** - HTMLフォームからのデータ受信と検証を実装できる
- **タグライブラリの活用** - Strutsタグライブラリを使って効率的にJSPを作成できる
- **バリデーション** - 入力値の検証とエラーメッセージの表示を実装できる
- **セッション管理** - ログイン機能を含むユーザー状態の管理ができる
- **データベース連携** - DAOパターンを使ったCRUD操作を実装できる
- **実践的なアプリケーション開発** - 学んだ技術を組み合わせてWebアプリケーションを構築できる

## 注意事項

### Struts 1.xの現状について

**重要**: Apache Struts 1.xは2013年にEOL（End of Life）に達しており、セキュリティアップデートが提供されていません。

- **新規開発には非推奨**: 新しいプロジェクトでは使用しないでください
- **学習目的での価値**: MVCパターンの基礎理解、レガシーシステムの保守・移行作業に有用です
- **セキュリティリスク**: 本番環境での使用には十分な注意が必要です

### このガイドの活用場面

- 既存のStruts 1.xシステムの保守・運用を担当する場合
- レガシーシステムからモダンフレームワークへの移行を計画している場合
- MVCパターンの基礎を古典的なフレームワークで学びたい場合
- Java Webフレームワークの歴史と進化を理解したい場合

## 次のステップ

このガイドライン完了後は、以下の学習に進むことをお勧めします：

### モダンフレームワークへのステップアップ
- [Spring Framework 学習ガイド](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/spring/) - 現在最も広く使われているJavaフレームワーク
- Spring Bootを使ったモダンなWebアプリケーション開発

### 関連技術の深掘り
- [JUnit 学習ガイド](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/junit/) - 単体テストの書き方
- Mavenを使ったプロジェクト管理とビルド自動化

### 設計手法の学習
- デザインパターンの学習（GoFパターン）
- クリーンアーキテクチャの理解

## よくある質問

### Q: Struts 1.xを今から学ぶ意味はありますか？
A: 新規開発には推奨されませんが、既存のレガシーシステムの保守や移行作業では必要な知識です。また、MVCパターンの基礎を理解するための教材としても有用です。

### Q: Struts 2.xとは何が違いますか？
A: Struts 2.xは完全に異なるフレームワーク（WebWorkベース）です。設定方法やアーキテクチャが大きく異なるため、別途学習が必要です。

### Q: Spring Frameworkとどちらを学ぶべきですか？
A: 新規開発を行う場合はSpring Framework（Spring Boot）を推奨します。Struts 1.xは保守作業や歴史的な理解のために学習してください。

### Q: 設定ファイルのエラーで動かなくなりました
A: struts-config.xmlやweb.xmlの設定ミスが最も多い原因です。XMLの構文エラー、パス指定の誤り、クラス名の打ち間違いを確認してください。
