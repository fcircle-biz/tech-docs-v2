# JUnit 学習ガイドライン

このガイドラインでは、JUnit 5を使用した単体テストの基礎を入門者向けに段階的に学習するためのカリキュラムを提供しています。

## 前提条件

### 必要な環境
- Java 8 以上（JDK 11 以上推奨）
- IDE（IntelliJ IDEA、Eclipse、VS Code等）
- Maven または Gradle（ビルドツール）

### 参考リソース
- [JUnit 5 公式ドキュメント](https://junit.org/junit5/docs/current/user-guide/)
- [JUnit 5 API ドキュメント](https://junit.org/junit5/docs/current/api/index.html)

### 前提知識
- **必須**: Java基礎文法（クラス、メソッド、例外処理）
- **推奨**: オブジェクト指向プログラミング、Maven/Gradleの基本知識

## 学習コンテンツ

### [1. JUnit基礎とセットアップ](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/junit/junit-learning-material-01.html)
JUnitの概要、プロジェクトへの導入方法、初回テストの作成と実行について学習します。

### [2. 基本的なテストケースの作成](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/junit/junit-learning-material-02.html)
テストメソッドの書き方、基本的なアサーション、失敗するテストとパスするテストの作成を学習します。

### [3. アサーションとマッチャー](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/junit/junit-learning-material-03.html)
様々なアサーションメソッド、AssertJライブラリ、カスタムマッチャーの使用方法を学習します。

### [4. テストライフサイクルとアノテーション](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/junit/junit-learning-material-04.html)
@BeforeEach、@AfterEach、@BeforeAll、@AfterAllアノテーションとテストの前処理・後処理について学習します。

### [5. パラメータ化テストと動的テスト](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/junit/junit-learning-material-05.html)
@ParameterizedTest、@ValueSource、@CsvSource、@DynamicTestを使用した効率的なテスト方法を学習します。

### [6. 例外テストとタイムアウト](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/junit/junit-learning-material-06.html)
例外の発生を検証するテスト、タイムアウトテスト、パフォーマンステストの書き方を学習します。

### [7. テストの組織化とベストプラクティス](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/junit/junit-learning-material-07.html)
テストクラスの構成、@Nested、@Tag、条件付き実行、テストコードの保守性向上について学習します。

## 学習の進め方

1. **環境準備**: まずJDKとIDEをセットアップし、Maven/Gradleプロジェクトを作成してください
2. **順次学習**: 第1章から順番に学習を進め、各章の実習を必ず実行してください
3. **実践演習**: 既存のJavaコードにテストケースを追加して理解を深めてください
4. **継続的実践**: 日常の開発にテスト駆動開発（TDD）を取り入れることを推奨します

## 推奨学習期間

- **基礎習得コース** (1-4章): 1-2週間
- **実践活用コース** (5-7章): 2-3週間

## 関連リソース

- [Java学習ガイドライン](../java/README.md)
- [Spring学習ガイドライン](../spring/README.md)
- [Java初心者向けのチートシート](https://fcircle-biz.github.io/tech_docs/cheatsheet/fundamentals/java-cheatsheet.html)

## 学習目標

このガイドを完了すると、以下のスキルを身につけることができます：

- JUnit 5を使用した基本的な単体テストの作成と実行
- 様々なアサーションメソッドを使用した検証処理の実装
- テストライフサイクルを理解したセットアップ・クリーンアップ処理
- パラメータ化テストによる効率的なテストケース作成
- 例外処理とタイムアウトを含む包括的なテスト設計
- 保守しやすいテストコードの組織化とベストプラクティス

## 次のステップ

このガイドライン完了後は、以下の学習に進むことをお勧めします：

- [Mockitoを使用したモックテスト](../../testing/mockito/README.md)
- [Spring Boot テスト](../spring/README.md)
- [テスト駆動開発（TDD）実践](../../methodology/tdd/README.md)