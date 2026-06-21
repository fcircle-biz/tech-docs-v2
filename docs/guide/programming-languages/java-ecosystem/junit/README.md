# JUnit 学習ガイドライン

このガイドラインでは、Java の単体テストフレームワーク **JUnit（JUnit 5）** の基礎を、プログラミング初心者・テスト未経験者向けに段階的に学習するためのカリキュラムを提供しています。「テストとは何か」という素朴な疑問からスタートし、最終的には電卓アプリのテストを自分で書き、テスト駆動開発（TDD）やベストプラクティスまで身につけることを目指します。

## 前提条件

### 必要な環境
- **JDK 17 以降**（Java の開発キット）
- **テキストエディタまたは IDE**（IntelliJ IDEA / Eclipse / VS Code のいずれか。本ガイドは IDE での操作を中心に解説します）
- **Maven**（ビルドツール。第2章でインストール方法から解説します）

### 参考リソース
- [JUnit 5 公式ユーザーガイド](https://junit.org/junit5/docs/current/user-guide/)
- [JUnit 5 公式サイト](https://junit.org/junit5/)
- [Maven 公式サイト](https://maven.apache.org/)

### 前提知識
- **必須**: Java の基本文法（変数・メソッド・クラス・if 文・for 文がわかる程度）
- **推奨**: オブジェクト指向の基礎（クラスとインスタンス、メソッド呼び出し）。なくても読み進められるよう配慮しています。

## 学習コンテンツ

### [1. テストって何だろう？ ソフトウェアテスト入門](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/junit/junit-learning-material-01.html)
プログラムを「テストする」とはどういうことかを学びます。なぜテストが必要なのか、手動テストと自動テストの違い、JUnit とは何かを身近な例で解説します。レシピ通りに料理ができたか確認するチェックリストのたとえで、テストの概念を直感的に理解します。

### [2. はじめてのJUnitテスト（環境構築）](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/junit/junit-learning-material-02.html)
JUnit を使うための環境を整え、人生で初めてのテストコードを書いて実行します。Maven プロジェクトの作成、JUnit の導入、テストの実行方法を一つずつ丁寧に解説します。

### [3. 期待通りか確かめよう アサーションの基本](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/junit/junit-learning-material-03.html)
テストで「結果が正しいかどうか」を判定するアサーション（assertion：主張・断言）を学びます。`assertEquals`・`assertTrue`・`assertFalse` など基本のアサーションを、電卓の計算結果を確認するたとえで理解します。

### [4. テストを整理整頓 テストクラスの構成](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/junit/junit-learning-material-04.html)
複数のテストをどう整理するかを学びます。テストクラスの命名規則、テストメソッドの書き方、`@Test` アノテーションの意味を解説します。本棚に本を整理するように、テストも整理することの大切さを学びます。

### [5. テストの準備と後片付け ライフサイクル](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/junit/junit-learning-material-05.html)
`@BeforeEach`・`@AfterEach`・`@BeforeAll`・`@AfterAll` を使った前処理・後処理を学びます。料理でいう「調理前の材料準備」と「調理後の片付け」にあたる仕組みで、テストを効率化し確実な実行環境を整えます。

### [6. 様々な状況を確かめる パラメータ化テスト](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/junit/junit-learning-material-06.html)
同じテストロジックを異なるデータで繰り返し実行する「パラメータ化テスト」を学びます。九九を一つずつ手で確認するのではなく、一度に複数パターンをテストする効率的な方法を解説します。

### [7. エラーもテストしよう 例外テスト](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/junit/junit-learning-material-07.html)
「正しくエラーになるか」をテストする方法を学びます。0 で割ったときにエラーが出ることを確認するなど、異常系テストの重要性と書き方、`assertThrows` の使い方を身につけます。

### [8. 読みやすく DisplayNameとネストクラス](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/junit/junit-learning-material-08.html)
テスト結果を分かりやすくする `@DisplayName` と、テストをグループ化する `@Nested` を学びます。テストレポートを読む人のことを考えた、読みやすいテストコードの書き方を解説します。

### [9. 実践！電卓アプリのテスト（前編）](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/junit/junit-learning-material-09.html)
これまでの知識を活かし、簡単な電卓アプリのテストを書きます。足し算・引き算・掛け算・割り算の各機能について、正常系・異常系の両方をカバーする方法を実践します。

### [10. 実践！電卓アプリのテスト（後編）とカバレッジ](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/junit/junit-learning-material-10.html)
電卓アプリのテストを完成させ、テストカバレッジの概念を学びます。どの程度テストを書けば十分か、テストの品質をどう評価するかを解説します。

### [11. テスト駆動開発（TDD）入門](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/junit/junit-learning-material-11.html)
「先にテストを書いてから実装する」テスト駆動開発（TDD）の考え方を学びます。Red-Green-Refactor サイクルを体験し、テストファーストのメリットを実感します。

### [12. 良いテストを書くコツ ベストプラクティス](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/junit/junit-learning-material-12.html)
良いテストコードの特徴と避けるべきアンチパターンを学びます。F.I.R.S.T 原則（Fast, Independent, Repeatable, Self-validating, Timely）を理解し、保守しやすいテストを書けるようになります。

## 推奨所要時間

| 章 | 内容 | 目安時間 |
|----|------|----------|
| 第1章 | テストって何だろう？ ソフトウェアテスト入門 | 約40分 |
| 第2章 | はじめてのJUnitテスト（環境構築） | 約60分 |
| 第3章 | 期待通りか確かめよう アサーションの基本 | 約50分 |
| 第4章 | テストを整理整頓 テストクラスの構成 | 約45分 |
| 第5章 | テストの準備と後片付け ライフサイクル | 約50分 |
| 第6章 | 様々な状況を確かめる パラメータ化テスト | 約55分 |
| 第7章 | エラーもテストしよう 例外テスト | 約50分 |
| 第8章 | 読みやすく DisplayNameとネストクラス | 約45分 |
| 第9章 | 実践！電卓アプリのテスト（前編） | 約60分 |
| 第10章 | 実践！電卓アプリのテスト（後編）とカバレッジ | 約60分 |
| 第11章 | テスト駆動開発（TDD）入門 | 約55分 |
| 第12章 | 良いテストを書くコツ ベストプラクティス | 約50分 |
| **合計** | | **約10時間** |

## 学習目標

このガイドを完了すると、以下のスキルを身につけることができます：

- ソフトウェアテストの必要性と、手動テスト・自動テストの違いを説明できる
- Maven プロジェクトに JUnit 5 を導入し、テストを作成・実行できる
- `assertEquals` などのアサーションで結果の正しさを検証できる
- `@Test`・`@BeforeEach`・`@AfterEach` などのアノテーションを使い分けられる
- パラメータ化テストで複数パターンを効率的に検証できる
- `assertThrows` を使って例外（異常系）をテストできる
- `@DisplayName`・`@Nested` で読みやすいテストを書ける
- 実際のアプリに対して正常系・異常系を網羅したテストを設計できる
- テストカバレッジの意味を理解し、テストの十分性を評価できる
- テスト駆動開発（TDD）の Red-Green-Refactor サイクルを実践できる
- F.I.R.S.T 原則に基づく保守しやすいテストを書ける

## 次のステップ

- **Spring Boot のテスト**: `@SpringBootTest`・`MockMvc` を使ったアプリケーション全体のテストへ進む
- **モック（Mockito）**: 外部依存を差し替える「モック」を学び、より複雑なクラスのテストを書けるようにする
- **CI/CD との連携**: GitHub Actions などで、プッシュのたびに自動でテストを実行する仕組みを構築する
