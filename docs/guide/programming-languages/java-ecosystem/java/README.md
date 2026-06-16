# Java入門 学習ガイドライン

このガイドラインでは、プログラミング未経験者がJava言語の基礎を段階的に学習するためのカリキュラムを提供しています。専門用語は初出時に必ず説明し、具体的な例やたとえ話を多用して理解を助ける構成となっています。

## 前提条件

### 必要な環境
- **Windows 10/11、macOS、またはLinux** - いずれかのOS（オペレーティングシステム：コンピュータを動かす基本ソフト）
- **Visual Studio Code（VSCode）** - 無料のコードエディタ（プログラムを書くための専用ソフト）
- **Extension Pack for Java** - VSCode用のJava開発支援ツール
- **JDK（Java Development Kit）** - Javaでプログラムを作るために必要な道具一式

### 参考リソース
- [Oracle Java公式ドキュメント](https://docs.oracle.com/javase/jp/)
- [Visual Studio Code公式サイト](https://code.visualstudio.com/)
- [Extension Pack for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack)
- [OpenJDK公式サイト](https://openjdk.org/)

### 前提知識
- **必須**: パソコンの基本操作（ファイルの作成・保存・削除、フォルダ操作など）
- **必須**: キーボードでの文字入力ができること
- **推奨**: 英語のアルファベットと基本的な記号（+、-、=、{}、[]など）の読み方

## 学習コンテンツ

### [1. Javaプログラミングの世界へようこそ](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/java/java-learning-material-01.html)
プログラミングとは何か、Javaとはどんな言語かを学びます。開発環境（VSCode + Extension Pack for Java + JDK）のインストールから、最初のプログラム「Hello World」を動かすところまでを丁寧に解説します。

### [2. データを扱う - 変数と型](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/java/java-learning-material-02.html)
プログラムでデータを保存・利用するための「変数」と、データの種類を表す「型」について学びます。数値や文字列の扱い方、計算の仕方を具体例を交えて解説します。

### [3. プログラムに判断させる - 条件分岐](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/java/java-learning-material-03.html)
「もし～ならば」という条件によってプログラムの動きを変える方法を学びます。if文やswitch文を使って、状況に応じた処理を実行する方法を解説します。

### [4. 繰り返し処理 - ループ](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/java/java-learning-material-04.html)
同じ処理を何度も繰り返す方法を学びます。for文、while文、do-while文の使い分けを、身近な例（九九の表示など）を通して理解します。

### [5. データをまとめて管理する - 配列](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/java/java-learning-material-05.html)
複数のデータをまとめて管理する「配列」について学びます。ロッカーに物を入れるたとえを使って、配列の概念と操作方法を分かりやすく解説します。

### [6. 処理をまとめる - メソッド](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/java/java-learning-material-06.html)
よく使う処理をまとめて名前をつける「メソッド」について学びます。レシピのように一度書けば何度でも使える便利な仕組みを解説します。

### [7. 設計図からモノを作る - クラスとオブジェクトの基本](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/java/java-learning-material-07.html)
Javaの核心である「オブジェクト指向」の入り口として、クラス（設計図）とオブジェクト（実体）の概念を学びます。たい焼きの型と実際のたい焼きのたとえで理解を深めます。

### [8. オブジェクトの中身を理解する - フィールドとメソッド](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/java/java-learning-material-08.html)
クラスの中に定義する「フィールド」（データを保存する場所）と「メソッド」（動作・機能）について詳しく学びます。コンストラクタの役割も解説します。

### [9. データを守る - カプセル化とアクセス制御](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/java/java-learning-material-09.html)
オブジェクトの中身を外部から守る「カプセル化」と、アクセス修飾子（public、private）について学びます。ATMの仕組みをたとえに、なぜ情報を隠すことが大切かを解説します。

### [10. クラスの親子関係 - 継承](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/java/java-learning-material-10.html)
既存のクラスの機能を引き継いで新しいクラスを作る「継承」について学びます。動物クラスから犬・猫クラスを作るたとえで、コードの再利用を理解します。

### [11. 同じ名前で違う動き - ポリモーフィズム](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/java/java-learning-material-11.html)
同じメソッド名でも呼び出すオブジェクトによって動きが変わる「ポリモーフィズム」について学びます。抽象クラスとインターフェースも解説します。

### [12. エラーに対処する - 例外処理](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/java/java-learning-material-12.html)
プログラム実行中に起きるエラー（例外）に対処する方法を学びます。try-catch文を使って、エラーが起きてもプログラムが止まらないようにする技術を解説します。

### [13. 便利な道具を使いこなす - Java標準ライブラリ](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/java/java-learning-material-13.html)
Javaに最初から用意されている便利な機能（標準ライブラリ）を学びます。文字列操作、日付時間処理、数学計算など実践的なプログラムに欠かせない機能を解説します。

### [14. データをまとめて操作する - コレクション入門](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/java/java-learning-material-14.html)
配列よりも柔軟にデータを管理できる「コレクション」について学びます。ArrayList、HashMap、HashSetの使い方を、実践的な例を通して解説します。

## 学習の進め方

1. **環境構築から始めましょう** - 第1章でVSCodeとJavaの環境を整えます。焦らず画面を見ながら進めてください
2. **必ず手を動かしましょう** - サンプルコードは必ず自分で入力して実行してください。コピー＆ペーストではなく、自分で打つことで身につきます
3. **エラーを恐れないでください** - エラーは学習のチャンスです。エラーメッセージを読んで原因を考える習慣をつけましょう
4. **1章ずつ確実に進めましょう** - 各章の内容を理解してから次に進んでください。分からないまま進むと後で困ります
5. **練習問題に挑戦しましょう** - 各章の終わりにある練習問題で理解度を確認してください

## 推奨所要時間

| 章 | 内容 | 目安時間 |
|----------|------|----------|
| 第1章 | Javaプログラミングの世界へようこそ | 1時間 |
| 第2章 | データを扱う - 変数と型 | 1時間 |
| 第3章 | プログラムに判断させる - 条件分岐 | 1時間 |
| 第4章 | 繰り返し処理 - ループ | 1時間 |
| 第5章 | データをまとめて管理する - 配列 | 1時間 |
| 第6章 | 処理をまとめる - メソッド | 1時間 |
| 第7章 | 設計図からモノを作る - クラスとオブジェクト | 1.5時間 |
| 第8章 | オブジェクトの中身を理解する - フィールドとメソッド | 1.5時間 |
| 第9章 | データを守る - カプセル化とアクセス制御 | 1時間 |
| 第10章 | クラスの親子関係 - 継承 | 1.5時間 |
| 第11章 | 同じ名前で違う動き - ポリモーフィズム | 2時間 |
| 第12章 | エラーに対処する - 例外処理 | 1時間 |
| 第13章 | 便利な道具を使いこなす - Java標準ライブラリ | 1.5時間 |
| 第14章 | データをまとめて操作する - コレクション入門 | 1.5時間 |
| **合計** | | **約17時間** |

※個人差がありますので、自分のペースで進めてください。

## 関連リソース

### チートシート（よく使う構文の一覧表）
- [Java初心者向けチートシート](https://fcircle-biz.github.io/tech_docs/cheatsheet/fundamentals/java-cheatsheet.html)

### 次に学ぶ技術のガイドライン
- [JDBC入門](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/jdbc/) - データベースとJavaを連携させる技術
- [Spring Boot入門](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/spring-boot/) - Webアプリケーション開発フレームワーク

## 学習目標

このガイドを完了すると、以下のスキルを身につけることができます：

- **プログラミングの基本的な考え方** - 順次処理・分岐・繰り返しの3つの基本構造を理解できる
- **Javaの文法** - 変数、演算子、条件分岐、ループ、配列、メソッドを使ってプログラムが書ける
- **オブジェクト指向プログラミング** - クラス、オブジェクト、継承、カプセル化、ポリモーフィズムの概念を理解し、基本的なコードが書ける
- **エラー対処** - 例外処理を使ってエラーに強いプログラムが書ける
- **標準ライブラリの活用** - Javaの便利な機能を使って実用的なプログラムが書ける
- **簡単なアプリケーション開発** - 学んだ知識を組み合わせて、コンソールで動く小さなアプリケーションが作れる

## 次のステップ

このガイドライン完了後は、以下の学習に進むことをお勧めします：

- **データベース連携** - [JDBC学習ガイド](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/java-ecosystem/jdbc/) でデータの永続化を学ぶ
- **Webアプリケーション開発** - Spring Bootフレームワークでモダンなアプリケーション開発を学ぶ
- **テスト駆動開発** - JUnitを使ったテストコードの書き方を学ぶ
- **ビルドツール** - Maven/Gradleを使ったプロジェクト管理を学ぶ

## よくある質問

### Q: プログラミングは難しいですか？
A: 最初は慣れないことが多いですが、基本をしっかり押さえれば着実に上達します。このガイドでは一つ一つ丁寧に説明していますので、焦らず進めてください。

### Q: なぜVSCodeを使うのですか？
A: VSCodeは無料で軽量、かつ拡張機能が豊富なため、初心者から上級者まで幅広く使われています。Extension Pack for Javaを入れることで、本格的なJava開発環境になります。

### Q: 1日どのくらい勉強すればいいですか？
A: 1〜2時間を目安にしてください。それより長く勉強しても疲れて効率が下がります。毎日少しずつ続けることが大切です。

### Q: エラーが出て進めなくなりました
A: エラーメッセージをよく読んでください。多くの場合、スペルミスや記号の打ち間違いが原因です。それでも解決しない場合は、一度休憩して翌日もう一度見直すと解決することがあります。
