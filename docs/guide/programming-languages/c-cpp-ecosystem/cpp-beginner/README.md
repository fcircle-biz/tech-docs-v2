# C/C++入門 学習ガイドライン

このガイドラインでは、プログラミング完全未経験の方でもC言語とC++を基礎から学習できるよう、段階的にステップを踏んで解説しています。C言語の基礎を固めてから、C++の強力な機能へとスムーズに移行できる構成となっています。

## 前提条件

### 必要な環境
- **Windows 10/11、macOS、またはLinux** - いずれかのOS（オペレーティングシステム：コンピュータを動かす基本ソフト）
- **Visual Studio Code（VSCode）** - 無料のコードエディタ（プログラムを書くための専用ソフト）
- **C/C++拡張機能** - VSCode用のC/C++開発支援ツール
- **コンパイラ** - GCC（Windows: MinGW-w64）、Clang、またはVisual Studio Build Tools

### 参考リソース
- [cppreference.com（日本語）](https://ja.cppreference.com/) - C/C++言語リファレンス
- [Visual Studio Code公式サイト](https://code.visualstudio.com/)
- [MinGW-w64公式サイト](https://www.mingw-w64.org/) - Windows用GCCコンパイラ
- [GCC公式サイト](https://gcc.gnu.org/)
- [Clang公式サイト](https://clang.llvm.org/)

### 前提知識
- **必須**: パソコンの基本操作（ファイルの作成・保存・削除、フォルダ操作など）
- **必須**: キーボードでの文字入力ができること
- **推奨**: 英語のアルファベットと基本的な記号（+、-、=、{}、[]、*、&など）の読み方

## 学習コンテンツ

### [1. C/C++の世界へようこそ](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/c-cpp-ecosystem/cpp-beginner/cpp-beginner-learning-material-01.html)
プログラミングとは何か、C言語とC++とはどんな言語かを学びます。その歴史と「なぜ今でも使われているのか」を理解し、開発環境（VSCode + コンパイラ）のインストールまでを丁寧に解説します。

### [2. 最初のプログラム - Hello World](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/c-cpp-ecosystem/cpp-beginner/cpp-beginner-learning-material-02.html)
伝統的な「Hello, World!」プログラムを作成し、コンパイルと実行の仕組みを理解します。ソースコードが実行可能なプログラムになるまでの流れを、料理のレシピにたとえて解説します。

### [3. 変数と基本データ型](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/c-cpp-ecosystem/cpp-beginner/cpp-beginner-learning-material-03.html)
データを保存する「変数」という箱の概念を学びます。整数（int）、小数（float/double）、文字（char）など、C言語の基本的なデータ型と変数の宣言方法を、身近な例を使って解説します。

### [4. 演算子と式](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/c-cpp-ecosystem/cpp-beginner/cpp-beginner-learning-material-04.html)
足し算、引き算などの算術演算子、大小比較の比較演算子、条件を組み合わせる論理演算子を学びます。電卓のように計算を行い、結果を変数に保存する方法を習得します。

### [5. 条件分岐 - プログラムに判断させる](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/c-cpp-ecosystem/cpp-beginner/cpp-beginner-learning-material-05.html)
「もし〜なら〜する」というif文を使って、条件によって動作を変えるプログラムを作ります。switch文も含め、年齢判定や成績評価など実践的な例で学習します。

### [6. 繰り返し処理 - ループを使いこなす](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/c-cpp-ecosystem/cpp-beginner/cpp-beginner-learning-material-06.html)
for文、while文、do-while文を使って、同じ処理を繰り返す方法を学びます。九九の表示や合計計算など、実用的な例を通じて繰り返し処理のパワーを体験します。

### [7. 配列と文字列（C言語）](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/c-cpp-ecosystem/cpp-beginner/cpp-beginner-learning-material-07.html)
複数のデータをまとめて管理する「配列」について学びます。ロッカーに物を入れるたとえで理解を深め、C言語での文字列（文字の配列）の扱い方も習得します。

### [8. 関数の基本](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/c-cpp-ecosystem/cpp-beginner/cpp-beginner-learning-material-08.html)
よく使う処理をまとめて名前をつける「関数」について学びます。引数と戻り値の概念、関数の宣言と定義、ローカル変数とスコープを理解します。レシピのように一度書けば何度でも使える便利な仕組みを習得します。

### [9. ポインタの基礎](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/c-cpp-ecosystem/cpp-beginner/cpp-beginner-learning-material-09.html)
C/C++の核心であり、多くの初心者がつまずく「ポインタ」を丁寧に解説します。メモリアドレスとは何か、ポインタ変数の使い方、配列との関係を、住所と建物のたとえでわかりやすく説明します。

### [10. 構造体とメモリ管理](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/c-cpp-ecosystem/cpp-beginner/cpp-beginner-learning-material-10.html)
関連するデータをまとめる「構造体」について学びます。また、malloc/freeを使った動的メモリ確保の基本を理解し、プログラム実行中にメモリを柔軟に扱う方法を習得します。

### [11. C++への移行 - モダンな機能を使おう](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/c-cpp-ecosystem/cpp-beginner/cpp-beginner-learning-material-11.html)
C言語からC++へ移行します。iostreamによる入出力、参照（&）の概念、名前空間など、C++ならではの便利な機能を学びます。なぜC++がC言語の「進化版」と呼ばれるのかを理解します。

### [12. クラスとオブジェクト指向の基礎](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/c-cpp-ecosystem/cpp-beginner/cpp-beginner-learning-material-12.html)
C++の核心である「オブジェクト指向」の入り口として、クラス（設計図）とオブジェクト（実体）の概念を学びます。コンストラクタ、デストラクタ、メンバ変数とメンバ関数を理解します。

### [13. C++の便利機能 - STL入門](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/c-cpp-ecosystem/cpp-beginner/cpp-beginner-learning-material-13.html)
C++標準テンプレートライブラリ（STL）の基礎を学びます。vector（可変長配列）、string（文字列クラス）、範囲for文など、C++をより便利に使うための機能を習得します。

### [14. ファイル入出力](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/c-cpp-ecosystem/cpp-beginner/cpp-beginner-learning-material-14.html)
テキストファイルの読み書き方法を学びます。C言語スタイル（fopen/fclose）とC++スタイル（fstream）の両方を理解し、データの永続化ができるようになります。

### [15. 実践プログラミング - 総合演習](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/c-cpp-ecosystem/cpp-beginner/cpp-beginner-learning-material-15.html)
これまでに学んだ知識を組み合わせて、電卓プログラム、簡単なゲーム、データ管理アプリなどの実用的なプログラムを作成します。総合的な実践力を身につけます。

## 学習の進め方

1. **環境構築から始めましょう**
   第1章でVSCodeとコンパイラの環境を整えます。OSによってインストール方法が異なりますが、画面を見ながら焦らず進めてください。

2. **必ず手を動かしましょう**
   サンプルコードは必ず自分で入力して、コンパイル・実行してください。コピー＆ペーストではなく、自分で打つことで身につきます。

3. **コンパイルエラーを恐れないでください**
   エラーメッセージは「ここが違うよ」という親切なお知らせです。エラー行を確認し、スペルミスや記号の打ち間違いをチェックする習慣をつけましょう。

4. **ポインタは焦らず時間をかけて**
   第9章のポインタは多くの初心者がつまずくポイントです。すぐに理解できなくても心配いりません。何度も読み返し、たくさんのコードを書いて少しずつ慣れていきましょう。

5. **C言語とC++の違いを意識しましょう**
   第1章〜第10章はC言語、第11章〜第15章はC++が中心です。両方を学ぶことで、なぜC++が生まれたのか、どう進化したのかが理解できます。

## 推奨所要時間

| 章 | 内容 | 目安時間 |
|----|------|----------|
| 第1章 | C/C++の世界へようこそ | 1時間15分 |
| 第2章 | 最初のプログラム - Hello World | 45分 |
| 第3章 | 変数と基本データ型 | 1時間 |
| 第4章 | 演算子と式 | 1時間 |
| 第5章 | 条件分岐 | 1時間 |
| 第6章 | 繰り返し処理 | 1時間 |
| 第7章 | 配列と文字列（C言語） | 1.5時間 |
| 第8章 | 関数の基本 | 1.5時間 |
| 第9章 | ポインタの基礎 | 2時間 |
| 第10章 | 構造体とメモリ管理 | 2時間 |
| 第11章 | C++への移行 | 1.5時間 |
| 第12章 | クラスとオブジェクト指向の基礎 | 1.5時間 |
| 第13章 | C++の便利機能 - STL入門 | 1.5時間 |
| 第14章 | ファイル入出力 | 1時間 |
| 第15章 | 実践プログラミング - 総合演習 | 3時間 |
| **合計** | | **約21時間** |

※ 上記は目安です。特にポインタ（第9章）は理解に時間がかかることがあります。自分のペースで着実に進めてください。

## 関連リソース

### チートシート（よく使う構文の一覧表）
- [C言語チートシート](https://fcircle-biz.github.io/tech_docs/cheatsheet/programming-languages/c-cpp-ecosystem/c-cheatsheet.html)
- [C++チートシート](https://fcircle-biz.github.io/tech_docs/cheatsheet/programming-languages/c-cpp-ecosystem/cpp-cheatsheet.html)

### 関連ガイドライン
- [アルゴリズムとデータ構造入門](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/c-cpp-ecosystem/algorithms/) - C/C++で学ぶ基本的なアルゴリズム
- [Linux環境入門](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/linux/) - コマンドラインでの開発環境

## 学習目標

このガイドを完了すると、以下のスキルを身につけることができます：

- **プログラミングの基本的な考え方** - 順次処理・分岐・繰り返しの3つの基本構造を理解できる
- **C言語の文法** - 変数、演算子、条件分岐、ループ、配列、関数を使ってプログラムが書ける
- **ポインタの理解** - メモリアドレスとポインタの概念を理解し、基本的な操作ができる
- **構造体の活用** - 関連するデータをまとめて管理できる
- **C++の基礎** - クラスとオブジェクト、STLの基本的な使い方が分かる
- **ファイル操作** - テキストファイルの読み書きができる
- **簡単なアプリケーション開発** - 学んだ知識を組み合わせて、コンソールで動く小さなアプリケーションが作れる
- **次の学習ステップが分かる** - C/C++の基礎を習得し、システムプログラミングやゲーム開発など、次の専門分野に進む準備ができる

## 次のステップ

このガイドライン完了後は、以下の学習に進むことをお勧めします：

- **より深いC++学習** - テンプレート、例外処理、スマートポインタなどのC++中級機能
- **アルゴリズムとデータ構造** - ソート、探索、リスト、木構造などの基礎
- **ゲーム開発** - SDLやSFMLを使った2Dゲーム開発
- **組み込みシステム** - マイコン（Arduino等）でのプログラミング
- **システムプログラミング** - OSやデバイスドライバの仕組みを学ぶ

## よくある質問

### Q: CとC++のどちらから始めるべきですか？
A: このガイドではC言語から始めて、その後C++に移行する構成をとっています。C言語でメモリやポインタの概念をしっかり理解してからC++を学ぶと、より深い理解が得られます。

### Q: ポインタがどうしても理解できません
A: 多くの人が同じ悩みを持っています。ポインタは一度で理解しようとせず、繰り返し学習することが大切です。図を描いてメモリの様子を可視化すると理解しやすくなります。

### Q: コンパイルとは何ですか？
A: 人間が書いたプログラム（ソースコード）をコンピュータが理解できる形（機械語）に変換する作業です。CやC++はコンパイル型言語と呼ばれ、実行前にこの変換が必要です。

### Q: なぜC/C++を学ぶのですか？PythonやJavaではダメですか？
A: C/C++はコンピュータの仕組みに近いレベルでプログラミングできるため、メモリ管理やパフォーマンスについて深く理解できます。OSやゲームエンジン、組み込みシステムなど、高いパフォーマンスが必要な分野では今でも主役です。

### Q: WindowsとMacで書いたプログラムは同じですか？
A: 基本的な文法は同じですが、環境構築の方法やコンパイラのオプションが異なることがあります。このガイドでは各OSに対応した説明を用意しています。
