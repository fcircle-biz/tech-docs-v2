# Java 入門 学習ガイドライン

このガイドラインでは、プログラミング未経験者・初心者を対象に、Java の基礎を段階的に学習するためのカリキュラムを提供しています。「変数」や「型」といった基本から、Java の核心である「オブジェクト指向」、そして実践に欠かせない「例外処理」「標準ライブラリ」「コレクション」までを、身近なたとえと豊富なコード例で丁寧に解説します。

## 前提条件

### 必要な環境
- パソコン（Windows / macOS / Linux のいずれか）
- インターネット接続（開発ツールのダウンロード用）
- **JDK（Java Development Kit）21 以上**（LTS 版を推奨）
- **Visual Studio Code** ＋ **Extension Pack for Java**（学習用エディタ）

### 参考リソース
- [Java 公式ドキュメント（Oracle）](https://docs.oracle.com/javase/jp/)
- [OpenJDK 公式サイト](https://openjdk.org/)
- [Visual Studio Code 公式サイト](https://code.visualstudio.com/)
- [Extension Pack for Java（VS Code Marketplace）](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack)

### 前提知識
- **必須**: パソコンの基本操作（ファイルの保存、フォルダ作成、アプリのインストール）
- **推奨**: 簡単なキーボードタイピング。プログラミング経験は不要です。

## 学習コンテンツ

### [1. Javaプログラミングの世界へようこそ](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/java/java-learning-material-01.html)
プログラミングとは何か、Java とはどんな言語かを学びます。開発環境（VSCode + Extension Pack for Java + JDK）のインストールから、最初のプログラム「Hello World」を動かすところまでを丁寧に解説します。

### [2. データを扱う - 変数と型](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/java/java-learning-material-02.html)
プログラムでデータを保存・利用するための「変数」と、データの種類を表す「型」について学びます。数値や文字列の扱い方、計算の仕方を具体例を交えて解説します。

### [3. プログラムに判断させる - 条件分岐](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/java/java-learning-material-03.html)
「もし～ならば」という条件によってプログラムの動きを変える方法を学びます。if 文や switch 文を使って、状況に応じた処理を実行する方法を解説します。

### [4. 繰り返し処理 - ループ](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/java/java-learning-material-04.html)
同じ処理を何度も繰り返す方法を学びます。for 文、while 文、do-while 文の使い分けを、身近な例（九九の表示など）を通して理解します。

### [5. データをまとめて管理する - 配列](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/java/java-learning-material-05.html)
複数のデータをまとめて管理する「配列」について学びます。ロッカーに物を入れるたとえを使って、配列の概念と操作方法を分かりやすく解説します。

### [6. 処理をまとめる - メソッド](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/java/java-learning-material-06.html)
よく使う処理をまとめて名前をつける「メソッド」について学びます。レシピのように一度書けば何度でも使える便利な仕組みを解説します。

### [7. 設計図からモノを作る - クラスとオブジェクトの基本](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/java/java-learning-material-07.html)
Java の核心である「オブジェクト指向」の入り口として、クラス（設計図）とオブジェクト（実体）の概念を学びます。たい焼きの型と実際のたい焼きのたとえで理解を深めます。

### [8. オブジェクトの中身を理解する - フィールドとメソッド](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/java/java-learning-material-08.html)
クラスの中に定義する「フィールド」（データを保存する場所）と「メソッド」（動作・機能）について詳しく学びます。コンストラクタの役割も解説します。

### [9. データを守る - カプセル化とアクセス制御](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/java/java-learning-material-09.html)
オブジェクトの中身を外部から守る「カプセル化」と、アクセス修飾子（public、private）について学びます。ATM の仕組みをたとえに、なぜ情報を隠すことが大切かを解説します。

### [10. クラスの親子関係 - 継承](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/java/java-learning-material-10.html)
既存のクラスの機能を引き継いで新しいクラスを作る「継承」について学びます。動物クラスから犬・猫クラスを作るたとえで、コードの再利用を理解します。

### [11. 同じ名前で違う動き - ポリモーフィズム](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/java/java-learning-material-11.html)
同じメソッド名でも呼び出すオブジェクトによって動きが変わる「ポリモーフィズム」について学びます。抽象クラスとインターフェースも解説します。

### [12. エラーに対処する - 例外処理](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/java/java-learning-material-12.html)
プログラム実行中に起きるエラー（例外）に対処する方法を学びます。try-catch 文を使って、エラーが起きてもプログラムが止まらないようにする技術を解説します。

### [13. 便利な道具を使いこなす - Java標準ライブラリ](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/java/java-learning-material-13.html)
Java に最初から用意されている便利な機能（標準ライブラリ）を学びます。文字列操作、日付時間処理、数学計算など実践的なプログラムに欠かせない機能を解説します。

### [14. データをまとめて操作する - コレクション入門](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/java/java-learning-material-14.html)
配列よりも柔軟にデータを管理できる「コレクション」について学びます。ArrayList、HashMap、HashSet の使い方を、実践的な例を通して解説します。

## 推奨所要時間

| 章 | 内容 | 目安時間 |
|----|------|----------|
| 第1章 | Javaプログラミングの世界へようこそ | 1.5時間 |
| 第2章 | データを扱う - 変数と型 | 1.5時間 |
| 第3章 | プログラムに判断させる - 条件分岐 | 1.5時間 |
| 第4章 | 繰り返し処理 - ループ | 1.5時間 |
| 第5章 | データをまとめて管理する - 配列 | 1.5時間 |
| 第6章 | 処理をまとめる - メソッド | 1.5時間 |
| 第7章 | 設計図からモノを作る - クラスとオブジェクトの基本 | 1.5時間 |
| 第8章 | オブジェクトの中身を理解する - フィールドとメソッド | 1.5時間 |
| 第9章 | データを守る - カプセル化とアクセス制御 | 1.5時間 |
| 第10章 | クラスの親子関係 - 継承 | 1.5時間 |
| 第11章 | 同じ名前で違う動き - ポリモーフィズム | 1.5時間 |
| 第12章 | エラーに対処する - 例外処理 | 1.5時間 |
| 第13章 | 便利な道具を使いこなす - Java標準ライブラリ | 1.5時間 |
| 第14章 | データをまとめて操作する - コレクション入門 | 1.5時間 |
| **合計** | | **約21時間** |

## 学習目標

このガイドを完了すると、以下のスキルを身につけることができます：

- Java の開発環境を自分で構築し、プログラムを作成・実行できる
- 変数・型・演算子を使って基本的なデータ処理ができる
- 条件分岐（if / switch）とループ（for / while）でプログラムの流れを制御できる
- 配列・メソッドを使ってコードを整理・再利用できる
- クラスとオブジェクトを定義し、オブジェクト指向の考え方でプログラムを設計できる
- カプセル化・継承・ポリモーフィズムという3大要素を理解し活用できる
- 例外処理で堅牢なプログラムを書ける
- 標準ライブラリやコレクション（ArrayList / HashMap / HashSet）を使いこなせる

## 次のステップ

このガイドで Java の基礎を習得したら、以下のような発展的なトピックへ進むことをおすすめします。

- **Java フレームワーク**: Spring Boot による Web アプリケーション開発
- **データベース連携**: JDBC を使ったデータベース操作
- **Web 技術**: JSP / Servlet によるサーバーサイド開発
- **設計手法**: オブジェクト指向設計（UML）・デザインパターン
