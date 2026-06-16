# JUnit入門 学習ガイドライン

このガイドラインでは、プログラミング初心者がJUnitを使った単体テストの基礎を段階的に学習するためのカリキュラムを提供しています。専門用語は初出時に必ず説明し、具体的な例やたとえ話を多用して理解を助ける構成となっています。

## 前提条件

### 必要な環境
- **Windows 10/11、macOS、またはLinux** - いずれかのOS（オペレーティングシステム：コンピュータを動かす基本ソフト）
- **Visual Studio Code（VSCode）** - 無料のコードエディタ（プログラムを書くための専用ソフト）
- **Extension Pack for Java** - VSCode用のJava開発支援ツール
- **JDK 17以上（Java Development Kit）** - Javaでプログラムを作るために必要な道具一式

### 参考リソース
- [JUnit 5 公式ユーザーガイド](https://junit.org/junit5/docs/current/user-guide/)
- [JUnit 5 APIドキュメント](https://junit.org/junit5/docs/current/api/)
- [Visual Studio Code公式サイト](https://code.visualstudio.com/)
- [Extension Pack for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack)

### 前提知識
- **必須**: Java入門レベルの知識（変数、条件分岐、ループ、メソッド、クラスの基本）
- **必須**: VSCodeでのJavaプログラム作成・実行経験
- **推奨**: オブジェクト指向の基本概念（クラス、オブジェクト、カプセル化）

※Java未経験の方は、先に[Java入門 学習ガイドライン](../java/README.md)の第1章〜第8章を学習してください。

## 学習コンテンツ

### [1. テストって何だろう？ - ソフトウェアテストの世界へようこそ](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/junit/junit-learning-material-01.html)
プログラムを「テストする」とはどういうことかを学びます。なぜテストが必要なのか、手動テストと自動テストの違い、JUnitとは何かを身近な例を使って解説します。レシピ通りに料理を作ったか確認するチェックリストのたとえで、テストの概念を理解します。

### [2. はじめてのJUnitテスト - 環境構築と最初の一歩](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/junit/junit-learning-material-02.html)
JUnitを使うための環境を整え、人生で初めてのテストコードを書いて実行します。Mavenプロジェクトの作成方法、JUnitの導入、テストの実行方法を画面を見ながら一つ一つ丁寧に解説します。

### [3. 期待通りか確かめよう - アサーションの基本](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/junit/junit-learning-material-03.html)
テストで「結果が正しいかどうか」を判定するアサーション（assertion：主張・断言）について学びます。assertEquals、assertTrue、assertFalseなど基本的なアサーションの使い方を、電卓の計算結果を確認するたとえで理解します。

### [4. テストを整理整頓しよう - テストクラスの構成](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/junit/junit-learning-material-04.html)
複数のテストをどのように整理するかを学びます。テストクラスの命名規則、テストメソッドの書き方、@Testアノテーションの意味を解説します。本棚に本を整理するように、テストも整理することの大切さを学びます。

### [5. テストの準備と後片付け - ライフサイクルを理解しよう](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/junit/junit-learning-material-05.html)
@BeforeEach、@AfterEach、@BeforeAll、@AfterAllアノテーションを使った前処理・後処理について学びます。料理で例えると、調理前の材料準備と調理後の片付けのようなものです。テストの効率化と確実な実行環境の整備方法を解説します。

### [6. 様々な状況を確かめよう - パラメータ化テスト入門](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/junit/junit-learning-material-06.html)
同じテストロジックを異なるデータで繰り返し実行する「パラメータ化テスト」について学びます。九九の計算を一つ一つ手で確認するのではなく、一度に複数のパターンをテストする効率的な方法を解説します。

### [7. エラーもテストしよう - 例外テストの書き方](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/junit/junit-learning-material-07.html)
「正しくエラーになるか」をテストする方法を学びます。0で割り算したときにエラーが出ることを確認するなど、異常系のテストの重要性と書き方を解説します。assertThrowsの使い方を身につけます。

### [8. テストをもっと読みやすく - DisplayNameとネストクラス](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/junit/junit-learning-material-08.html)
テストの実行結果を分かりやすくする@DisplayNameアノテーションと、テストをグループ化する@Nestedアノテーションについて学びます。テストレポートを読む人のことを考えた、分かりやすいテストコードの書き方を解説します。

### [9. 実践！電卓アプリをテストしよう - 総合演習（前編）](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/junit/junit-learning-material-09.html)
これまで学んだ知識を活かして、簡単な電卓アプリケーションのテストを書きます。足し算、引き算、掛け算、割り算の各機能をテストし、正常系・異常系の両方をカバーする方法を実践します。

### [10. 実践！電卓アプリをテストしよう - 総合演習（後編）](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/junit/junit-learning-material-10.html)
電卓アプリのテストを完成させ、テストカバレッジの概念を学びます。どの程度のテストを書けば十分か、テストの品質をどう評価するかを解説します。

### [11. テスト駆動開発（TDD）入門 - テストから始めるプログラミング](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/junit/junit-learning-material-11.html)
「先にテストを書いてから実装する」というテスト駆動開発（TDD）の考え方を学びます。Red-Green-Refactorサイクルを体験し、テストファーストのメリットを実感します。

### [12. 良いテストを書くコツ - ベストプラクティス](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/junit/junit-learning-material-12.html)
良いテストコードの特徴と、避けるべきアンチパターンを学びます。F.I.R.S.T原則（Fast, Independent, Repeatable, Self-validating, Timely）を理解し、保守しやすいテストを書けるようになります。

## 学習の進め方

1. **Java入門を先に学習しましょう** - JUnitを学ぶ前に、Java入門ガイドの第1章〜第8章を終えていることを確認してください
2. **必ずコードを自分で書きましょう** - サンプルコードは見るだけでなく、必ず自分の手で入力して実行してください
3. **テストが失敗する体験も大切です** - わざとテストを失敗させて、エラーメッセージを読む練習をしましょう
4. **1章ずつ確実に進めましょう** - 各章の内容を理解してから次に進んでください
5. **練習問題に挑戦しましょう** - 各章末の練習問題で理解度を確認してください

## 推奨所要時間

| 章 | 内容 | 目安時間 |
|----------|------|----------|
| 第1章 | テストって何だろう？ | 45分 |
| 第2章 | はじめてのJUnitテスト | 1時間 |
| 第3章 | アサーションの基本 | 1時間 |
| 第4章 | テストクラスの構成 | 1時間 |
| 第5章 | ライフサイクルを理解しよう | 1.5時間 |
| 第6章 | パラメータ化テスト入門 | 1.5時間 |
| 第7章 | 例外テストの書き方 | 1時間 |
| 第8章 | DisplayNameとネストクラス | 1時間 |
| 第9章 | 総合演習（前編） | 2時間 |
| 第10章 | 総合演習（後編） | 2時間 |
| 第11章 | TDD入門 | 2時間 |
| 第12章 | ベストプラクティス | 1.5時間 |
| **合計** | | **約16.5時間** |

※学習者のスキルレベルにより変動します。自分のペースで進めてください。

## 関連リソース

### チートシート（よく使う構文の一覧表）
- [Java初心者向けチートシート](https://fcircle-biz.github.io/tech_docs/cheatsheet/fundamentals/java-cheatsheet.html)

### 関連ガイドライン
- [Java入門 学習ガイドライン](../java/README.md) - Javaの基礎を学ぶ（必須前提知識）
- [Spring Framework 学習ガイドライン](../spring/README.md) - Webアプリケーション開発フレームワーク
- [JDBC 学習ガイドライン](../jdbc/README.md) - データベース連携

## 学習目標

このガイドを完了すると、以下のスキルを身につけることができます：

- **テストの概念理解** - なぜテストが必要か、どのようなテストがあるかを説明できる
- **JUnitの基本操作** - JUnit 5を使った単体テストを作成・実行できる
- **アサーションの活用** - 適切なアサーションメソッドを選んで検証処理を書ける
- **テストの整理** - テストクラスを適切に構成し、読みやすいテストコードを書ける
- **ライフサイクル管理** - @BeforeEach/@AfterEachを使って効率的なテスト環境を構築できる
- **パラメータ化テスト** - 複数のテストデータを効率的にテストできる
- **例外テスト** - 正しくエラーが発生することを確認するテストを書ける
- **TDDの理解** - テスト駆動開発の基本的な流れを理解し、簡単な機能で実践できる
- **テストのベストプラクティス** - 良いテストコードの特徴を理解し、保守しやすいテストを書ける

## 次のステップ

このガイドライン完了後は、以下の学習に進むことをお勧めします：

- **モックを使ったテスト** - Mockitoライブラリを使って依存関係をモック化するテスト手法
- **Spring Bootのテスト** - Spring Boot アプリケーションの統合テスト
- **実プロジェクトでの実践** - 自分で作成したプログラムにテストを追加して経験を積む

## よくある質問

### Q: テストを書くのは面倒ではないですか？
A: 最初は面倒に感じるかもしれませんが、テストがあることでプログラムの修正時に「壊していないか」をすぐに確認できます。長い目で見ると、テストを書いた方が開発効率は上がります。

### Q: どのくらいテストを書けばいいですか？
A: まずは「正常に動く場合」と「エラーになる場合」の両方をテストすることを目指しましょう。全てをテストする必要はありませんが、重要な機能は必ずテストを書くようにしてください。

### Q: テストが失敗したらどうすればいいですか？
A: テストの失敗は「問題を発見できた」ということです。エラーメッセージをよく読んで、プログラムのバグを見つけて修正しましょう。テストがなければ、そのバグは見つからなかったかもしれません。

### Q: JUnitのバージョンは何を使えばいいですか？
A: このガイドではJUnit 5（Jupiter）を使用します。JUnit 4という古いバージョンもありますが、新規開発ではJUnit 5を使うことをお勧めします。
