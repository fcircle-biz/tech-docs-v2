# VB.NET 学習ガイドライン

このガイドラインでは、VB.NET（Visual Basic .NET）の基礎を、プログラミング未経験の方でも段階的に学習できるカリキュラムを提供しています。全14章を通して「変数」から「クラス」「例外処理」「画面付きアプリ」「データベース接続」までを、手を動かしながら理解していきます。

## 前提条件

### 必要な環境

- Windows 10 / 11（Windows Forms を扱う第13章のため Windows を推奨）
- Visual Studio 2022 Community（無償版・「.NET デスクトップ開発」ワークロードを選択）
- .NET 8（LTS）以降 ※Visual Studio と同時にインストールされます
- ディスク空き容量 10GB 程度

### 参考リソース

- [Visual Basic ドキュメント（Microsoft Learn）](https://learn.microsoft.com/ja-jp/dotnet/visual-basic/)
- [Visual Basic 言語リファレンス](https://learn.microsoft.com/ja-jp/dotnet/visual-basic/language-reference/)
- [.NET のダウンロード](https://dotnet.microsoft.com/ja-jp/download)
- [Visual Studio Community のダウンロード](https://visualstudio.microsoft.com/ja/vs/community/)

### 前提知識

- **必須**: パソコンの基本操作（ファイルの保存、フォルダの作成、アプリのインストール）
- **推奨**: 特になし。プログラミングがまったく初めての方を想定しています

## 学習コンテンツ

### [1. VB.NETプログラミングの世界へようこそ](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/dotnet-ecosystem/vbnet/vbnet-learning-material-01.html)

プログラミングとは何かという入口から始め、VB.NET がどんな言語で、どんな現場で使われているのかを学びます。.NET と VB.NET の関係、Visual Studio 2022 Community のインストール手順を確認し、最初のコンソールアプリ「Hello, World!」を作成・実行するところまで進みます。`Module` / `Sub Main` という VB.NET の基本の形と、コードを実行する流れを体験します。

### [2. データを入れる箱 - 変数とデータ型](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/dotnet-ecosystem/vbnet/vbnet-learning-material-02.html)

プログラムでデータを一時的に覚えておく「変数」を学びます。`Dim` による宣言、`Integer` / `Double` / `String` / `Boolean` / `Date` といった代表的なデータ型、`Const` による定数、`Option Strict On` の意味と型変換（`CInt` / `CStr` / `Integer.Parse` / `TryParse`）を扱います。`Console.ReadLine` によるキーボード入力も体験します。

### [3. 計算と文字列を扱う - 演算子と文字列操作](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/dotnet-ecosystem/vbnet/vbnet-learning-material-03.html)

四則演算（`+ - * / \ Mod ^`）と演算子の優先順位、比較演算子、論理演算子（`And` / `Or` / `Not` / `AndAlso` / `OrElse`）を学びます。あわせて文字列の連結（`&`）、`Length` / `Substring` / `Trim` / `Replace` / `ToUpper` などの主要メソッド、`String.Format` と補間文字列（`$"..."`）による書式整形を扱います。

### [4. プログラムに判断させる - 条件分岐](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/dotnet-ecosystem/vbnet/vbnet-learning-material-04.html)

条件によって処理を切り替える方法を学びます。`If ... Then ... Else`、`ElseIf` による多分岐、入れ子の If、`Select Case` による分かりやすい分岐の書き方、`If()` 演算子を扱います。フローチャート（分岐図）で処理の流れを視覚的に理解し、判定条件の考え方を身につけます。

### [5. 同じ処理を繰り返す - ループ](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/dotnet-ecosystem/vbnet/vbnet-learning-material-05.html)

繰り返し処理を学びます。回数が決まっている `For ... Next`（`Step` を含む）、条件で回る `Do While` / `Do Until`、`While ... End While`、コレクションをたどる `For Each`、そして `Exit For` / `Continue For` による制御を扱います。無限ループの回避方法や、二重ループによる九九の表示も体験します。

### [6. データをまとめて扱う - 配列とコレクション](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/dotnet-ecosystem/vbnet/vbnet-learning-material-06.html)

同じ種類のデータをまとめて扱う方法を学びます。配列の宣言（`Dim scores(4) As Integer`）と要素番号、初期化、`Length` と `For Each`、`ReDim Preserve`、二次元配列を扱ったうえで、より便利な `List(Of T)`（`Add` / `Remove` / `Count`）と `Dictionary(Of TKey, TValue)` を紹介します。

### [7. 処理を部品にする - SubプロシージャとFunction](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/dotnet-ecosystem/vbnet/vbnet-learning-material-07.html)

処理をまとめて名前を付ける「プロシージャ」を学びます。戻り値のない `Sub`、戻り値のある `Function`、引数と `Return`、`ByVal` と `ByRef` の違い、省略可能引数（`Optional`）、オーバーロード、変数のスコープを扱います。処理を部品化して読みやすく再利用しやすいコードにする考え方を身につけます。

### [8. 設計図からモノを作る - クラスとオブジェクト](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/dotnet-ecosystem/vbnet/vbnet-learning-material-08.html)

オブジェクト指向の入口です。クラス（設計図）とオブジェクト（実体）の関係、`Class ... End Class`、フィールド、メソッド、`New` によるインスタンス生成、コンストラクタ（`Sub New`）、`Me` キーワードを学びます。身近な例（社員・商品）でクラス設計の考え方を理解します。

### [9. データを守る - プロパティとカプセル化](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/dotnet-ecosystem/vbnet/vbnet-learning-material-09.html)

クラスの中のデータを安全に扱う方法を学びます。アクセス修飾子（`Public` / `Private` / `Protected` / `Friend`）、自動実装プロパティ、`Get` / `Set` を持つ完全なプロパティ、`ReadOnly` プロパティ、入力値の検証（バリデーション）、`Shared` メンバーを扱い、カプセル化の意味と利点を理解します。

### [10. クラスを受け継ぐ - 継承とポリモーフィズム](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/dotnet-ecosystem/vbnet/vbnet-learning-material-10.html)

既存クラスを土台に新しいクラスを作る「継承」を学びます。`Inherits`、`Overridable` / `Overrides`、`MyBase`、`MustInherit`（抽象クラス）と `MustOverride`、`Interface` と `Implements`、そして同じ呼び出しで違う動きをする「ポリモーフィズム」を扱います。

### [11. エラーに備える - 例外処理とデバッグ](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/dotnet-ecosystem/vbnet/vbnet-learning-material-11.html)

プログラムが異常終了しないようにする方法を学びます。エラーの種類（構文エラー・実行時エラー・論理エラー）、`Try ... Catch ... Finally`、代表的な例外クラス、`Throw` による例外の送出、`Using` によるリソース解放を扱います。あわせて Visual Studio のブレークポイント・ステップ実行によるデバッグ手順を学びます。

### [12. ファイルを読み書きする - 入出力の基本](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/dotnet-ecosystem/vbnet/vbnet-learning-material-12.html)

データをファイルに保存し読み込む方法を学びます。`System.IO` 名前空間、`File.WriteAllText` / `File.ReadAllLines`、`StreamWriter` / `StreamReader` と `Using`、追記モード、文字コード（UTF-8）、`Path` と `Directory` によるパス・フォルダ操作、CSV ファイルの読み書きを扱います。

### [13. 画面のあるアプリを作る - Windows Forms入門](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/dotnet-ecosystem/vbnet/vbnet-learning-material-13.html)

コンソールから一歩進み、画面（GUI）を持つアプリを作ります。Windows Forms プロジェクトの作成、フォームデザイナーとツールボックス、`Label` / `TextBox` / `Button` / `ListBox` / `MessageBox`、プロパティの設定、イベントハンドラ（`Click` イベント）の仕組みを学び、簡単な計算アプリを完成させます。

### [14. データベースとつなぐ - ADO.NET入門と次のステップ](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/dotnet-ecosystem/vbnet/vbnet-learning-material-14.html)

業務システムで欠かせないデータベース接続の基礎を学びます。データベースと SQL の概要、ADO.NET の構成要素（`Connection` / `Command` / `DataReader`）、接続文字列、`Using` を使った安全な接続、パラメータ化クエリによる SQL インジェクション対策を扱います。最後に学習全体を振り返り、次に学ぶとよい技術を案内します。

## 推奨所要時間

| 章 | 内容 | 目安時間 |
|----|------|----------|
| 第1章 | VB.NETプログラミングの世界へようこそ | 1.5時間 |
| 第2章 | データを入れる箱 - 変数とデータ型 | 1.5時間 |
| 第3章 | 計算と文字列を扱う - 演算子と文字列操作 | 1.5時間 |
| 第4章 | プログラムに判断させる - 条件分岐 | 1.5時間 |
| 第5章 | 同じ処理を繰り返す - ループ | 1.5時間 |
| 第6章 | データをまとめて扱う - 配列とコレクション | 1.5時間 |
| 第7章 | 処理を部品にする - SubプロシージャとFunction | 1.5時間 |
| 第8章 | 設計図からモノを作る - クラスとオブジェクト | 1.5時間 |
| 第9章 | データを守る - プロパティとカプセル化 | 1.5時間 |
| 第10章 | クラスを受け継ぐ - 継承とポリモーフィズム | 1.5時間 |
| 第11章 | エラーに備える - 例外処理とデバッグ | 1.5時間 |
| 第12章 | ファイルを読み書きする - 入出力の基本 | 1.5時間 |
| 第13章 | 画面のあるアプリを作る - Windows Forms入門 | 1.5時間 |
| 第14章 | データベースとつなぐ - ADO.NET入門と次のステップ | 1.5時間 |
| **合計** | | **約21時間** |

## 学習目標

このガイドを完了すると、以下のスキルを身につけることができます：

- Visual Studio で VB.NET のプロジェクトを作成し、プログラムを実行できる
- 変数・データ型・演算子を使って基本的な計算と文字列処理ができる
- 条件分岐とループを組み合わせて、目的の処理の流れを組み立てられる
- 配列・`List(Of T)` などでまとまったデータを扱える
- `Sub` / `Function` で処理を部品化し、読みやすいコードを書ける
- クラス・プロパティ・継承・インターフェースを使ったオブジェクト指向プログラミングの基礎を理解している
- 例外処理とデバッグにより、エラーに強いプログラムを書ける
- ファイル入出力とデータベース接続の基本を理解し、簡単な業務アプリの土台を作れる
- Windows Forms で画面付きのアプリケーションを作成できる

## 次のステップ

- [Java 学習ガイド](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/java/java-learning-material-01.html) — 別のオブジェクト指向言語と比較して理解を深める
- [SQL / データベースの学習](https://fcircle-biz.github.io/tech-docs-v2/) — 業務システム開発に必須のデータ操作を体系的に学ぶ
- ASP.NET Core — Web アプリケーションを開発する技術（C# が前提だが、VB.NET で身につけた .NET の考え方はそのまま活かせる）
- C# — .NET のもう一つの主要言語。VB.NET の知識はほぼそのまま活かせます
