# Flutter入門 学習ガイドライン

このガイドラインでは、Flutterの基礎をプログラミング未経験者向けに段階的に学習するためのカリキュラムを提供しています。Flutterは、Googleが開発したクロスプラットフォーム開発フレームワークで、1つのコードからiOS、Android、Web、デスクトップアプリを作成できます。

## 前提条件

### 必要な環境
- **OS**: Windows 10/11、macOS 10.15以降、またはLinux
- **ディスク空き容量**: 最低10GB以上（推奨20GB以上）
- **RAM**: 8GB以上推奨
- **Flutter SDK**: 最新の安定版
- **エディタ**: Visual Studio Code（推奨）またはAndroid Studio
- **端末**: 実機またはエミュレータ/シミュレータ

### 参考リソース
- [Flutter公式ドキュメント](https://docs.flutter.dev/)
- [Dart公式ドキュメント](https://dart.dev/guides)
- [Flutter公式YouTubeチャンネル](https://www.youtube.com/c/flutterdev)
- [pub.dev（パッケージリポジトリ）](https://pub.dev/)
- [DartPad（オンラインエディタ）](https://dartpad.dev/)

### 前提知識
- **必須**: パソコンの基本操作（ファイル操作、テキスト入力）
- **必須**: インターネットブラウザの利用経験
- **推奨**: スマートフォンアプリの利用経験
- **推奨**: 論理的思考力（条件分岐や繰り返しの概念理解）

## 学習コンテンツ

### [1. Flutterとは何か？](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/dart-ecosystem/flutter/flutter-learning-material-01.html)
Flutterの概要、クロスプラットフォーム開発の利点、Flutterが選ばれる理由を学びます。プログラミング未経験者でも理解できるよう、アプリ開発の全体像を把握します。

### [2. 開発環境の準備](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/dart-ecosystem/flutter/flutter-learning-material-02.html)
Flutter SDKのインストール、Visual Studio Codeの設定、エミュレータの準備を行います。Windows、macOS、Linuxそれぞれの環境構築手順を解説します。

### [3. はじめてのFlutterアプリ](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/dart-ecosystem/flutter/flutter-learning-material-03.html)
最初のFlutterプロジェクトを作成し、アプリを実行します。プロジェクト構造の理解と、ホットリロードの便利さを体験します。

### [4. Dart言語の基礎（前編）](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/dart-ecosystem/flutter/flutter-learning-material-04.html)
Flutterで使用するDart言語の基本を学びます。変数、データ型、演算子、文字列操作など、プログラミングの基礎概念を丁寧に解説します。

### [5. Dart言語の基礎（後編）](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/dart-ecosystem/flutter/flutter-learning-material-05.html)
条件分岐（if文）、繰り返し（for文、while文）、リスト、マップなど、プログラムの流れを制御する構文を学びます。

### [6. Dart言語の関数とクラス](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/dart-ecosystem/flutter/flutter-learning-material-06.html)
関数の定義と呼び出し、クラスとオブジェクトの基本概念を学びます。Flutterのウィジェットを理解するための土台を作ります。

### [7. ウィジェットの基本](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/dart-ecosystem/flutter/flutter-learning-material-07.html)
Flutterの核心であるウィジェットの概念を学びます。StatelessWidgetとStatefulWidgetの違い、基本的なウィジェット（Text、Container、Icon等）の使い方を理解します。

### [8. レイアウトの基礎](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/dart-ecosystem/flutter/flutter-learning-material-08.html)
Row、Column、Stack、Containerを使った画面レイアウトの組み立て方を学びます。Flexboxに似た配置の考え方を理解します。

### [9. ユーザー入力とボタン](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/dart-ecosystem/flutter/flutter-learning-material-09.html)
ボタン（ElevatedButton、TextButton等）の使い方、TextFieldによるテキスト入力、ユーザー操作への応答方法を学びます。

### [10. 状態管理の基礎](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/dart-ecosystem/flutter/flutter-learning-material-10.html)
StatefulWidgetを使った状態管理の基本を学びます。setStateによる画面更新の仕組みを理解します。

### [11. リスト表示とスクロール](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/dart-ecosystem/flutter/flutter-learning-material-11.html)
ListView、GridViewを使ったリスト表示、スクロール可能なコンテンツの作成方法を学びます。

### [12. 画面遷移（ナビゲーション）](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/dart-ecosystem/flutter/flutter-learning-material-12.html)
Navigatorを使った画面遷移の基本、pushとpopの概念、画面間のデータ受け渡しを学びます。

### [13. Material Designの活用](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/dart-ecosystem/flutter/flutter-learning-material-13.html)
AppBar、Drawer、BottomNavigationBar、Cardなど、Material Designウィジェットを活用した美しいUI作成を学びます。

### [14. 画像とアセットの扱い](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/dart-ecosystem/flutter/flutter-learning-material-14.html)
ローカル画像、ネットワーク画像の表示方法、アセットの管理方法を学びます。

### [15. フォームとバリデーション](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/dart-ecosystem/flutter/flutter-learning-material-15.html)
入力フォームの作成、バリデーション（入力チェック）の実装、フォームデータの送信処理を学びます。

### [16. 非同期処理の基礎](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/dart-ecosystem/flutter/flutter-learning-material-16.html)
Future、async/awaitを使った非同期処理の基本を学びます。API通信の準備として、待機処理の概念を理解します。

### [17. HTTP通信とAPI連携](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/dart-ecosystem/flutter/flutter-learning-material-17.html)
httpパッケージを使ったAPI通信、JSONデータの取得と表示、エラーハンドリングを学びます。

### [18. ローカルデータの保存](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/dart-ecosystem/flutter/flutter-learning-material-18.html)
shared_preferencesを使った簡易データ保存、アプリ設定の永続化方法を学びます。

### [19. パッケージの活用](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/dart-ecosystem/flutter/flutter-learning-material-19.html)
pub.devからのパッケージ追加方法、人気パッケージの紹介と使い方を学びます。

### [20. 総合演習：ToDoアプリの作成](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/dart-ecosystem/flutter/flutter-learning-material-20.html)
これまで学んだ知識を総動員して、実用的なToDoアプリを作成します。CRUD操作、状態管理、UIデザインを実践的に学びます。

## 学習の進め方

1. **順番通りに学習する**
   - 各章は前章の知識を前提としています。必ず第1章から順番に進めてください。
   - 特にDart言語の基礎（第4-6章）は、ウィジェット学習の土台となる重要な章です。

2. **手を動かして実践する**
   - サンプルコードは必ず自分で入力して実行してください。コピー＆ペーストだけでは理解が深まりません。
   - エラーが出ても諦めず、エラーメッセージを読んで原因を考えましょう。

3. **理解してから次へ進む**
   - 各章の内容を7割以上理解してから次の章へ進みましょう。
   - 分からない部分は公式ドキュメントや参考リソースで補完してください。

4. **小さな改造から始める**
   - サンプルコードを少しずつ改造して、挙動の変化を観察してください。
   - 「これを変えたらどうなるだろう？」という好奇心が上達の鍵です。

## 推奨所要時間

| 章 | 内容 | 目安時間 |
|----------|------|----------|
| 第1章 | Flutterとは何か？ | 1時間 |
| 第2章 | 開発環境の準備 | 2時間 |
| 第3章 | はじめてのFlutterアプリ | 1.5時間 |
| 第4章 | Dart言語の基礎（前編） | 2時間 |
| 第5章 | Dart言語の基礎（後編） | 2時間 |
| 第6章 | Dart言語の関数とクラス | 2.5時間 |
| 第7章 | ウィジェットの基本 | 2時間 |
| 第8章 | レイアウトの基礎 | 2時間 |
| 第9章 | ユーザー入力とボタン | 1.5時間 |
| 第10章 | 状態管理の基礎 | 2時間 |
| 第11章 | リスト表示とスクロール | 1.5時間 |
| 第12章 | 画面遷移（ナビゲーション） | 2時間 |
| 第13章 | Material Designの活用 | 2時間 |
| 第14章 | 画像とアセットの扱い | 1.5時間 |
| 第15章 | フォームとバリデーション | 2時間 |
| 第16章 | 非同期処理の基礎 | 2時間 |
| 第17章 | HTTP通信とAPI連携 | 2.5時間 |
| 第18章 | ローカルデータの保存 | 1.5時間 |
| 第19章 | パッケージの活用 | 1.5時間 |
| 第20章 | 総合演習：ToDoアプリの作成 | 4時間 |
| **合計** | | **約40時間** |

## 関連リソース

- [Dart入門ガイドライン](../dart/) ※準備中
- [Flutter状態管理（Riverpod）](../flutter-riverpod/) ※準備中
- [Flutter Firebase連携](../flutter-firebase/) ※準備中

## 学習目標

このガイドを完了すると、以下のスキルを身につけることができます：

- Flutterの基本概念とクロスプラットフォーム開発の利点を理解している
- Dart言語の基本文法（変数、制御構文、関数、クラス）を使いこなせる
- 基本的なウィジェットを組み合わせてUIを構築できる
- Row、Column、Stackを使ったレイアウト設計ができる
- StatefulWidgetを使った状態管理の基本を理解している
- ListViewやGridViewを使ったリスト表示ができる
- Navigatorを使った画面遷移を実装できる
- Material Designウィジェットを活用した美しいUIを作成できる
- フォームの作成とバリデーションを実装できる
- HTTP通信でAPIからデータを取得・表示できる
- shared_preferencesを使ったローカルデータ保存ができる
- pub.devからパッケージを追加して活用できる
- 実用的なモバイルアプリを一から作成できる

## 次のステップ

このガイドライン完了後は、以下の学習に進むことをお勧めします：

- **状態管理の深化**: Riverpod、Provider、BLoC等の状態管理ライブラリの学習
- **データベース連携**: SQLite、Hive、Firebase Firestoreを使ったデータ永続化
- **認証機能**: Firebase Authenticationを使ったユーザー認証の実装
- **プッシュ通知**: Firebase Cloud Messagingを使った通知機能の実装
- **アプリのリリース**: Google Play Store、App Storeへのアプリ公開手順
- **テスト**: ユニットテスト、ウィジェットテスト、統合テストの実践
- **アニメーション**: Flutterの豊富なアニメーション機能の活用
