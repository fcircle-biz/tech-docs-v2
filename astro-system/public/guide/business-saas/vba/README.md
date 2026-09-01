# Excel VBA 学習ガイドライン

このガイドラインでは、Excel VBA（Visual Basic for Applications）の基礎を、**プログラミング未経験の方**でも順を追って身につけられるよう、全14章のカリキュラムとして構成しています。

日々のExcel業務——毎月の集計、別ブックへの転記、決まった形式の帳票づくり——を「自分の手でボタン1つに変える」ことがこのガイドのゴールです。専門用語は初めて出てきたときに必ずかみ砕いて説明し、コードを書く前に「なぜそう書くのか」を理解できる順番で進みます。

## 前提条件

### 必要な環境

- **Windows PC**（本ガイドは **Windows 版 Excel** を実習環境として画面例・操作手順を記述しています。Mac 版・Web 版との違いは必要な箇所で補足します）
- **Microsoft Excel**（Microsoft 365 または Excel 2021／2019）
  - VBE（Visual Basic Editor）は Excel に標準で付属しているため、追加のインストールは不要です
- 練習用に自由に編集できる Excel ファイル（本ガイドの中で一から作成します）

### 参考リソース

- [Office VBA リファレンス（Microsoft Learn）](https://learn.microsoft.com/ja-jp/office/vba/api/overview/)
- [Excel VBA リファレンス（Microsoft Learn）](https://learn.microsoft.com/ja-jp/office/vba/api/overview/excel)
- [Excel でのマクロの自動化（Microsoft サポート）](https://support.microsoft.com/ja-jp/office/)

### 前提知識

- **必須**: Excel の基本操作（セルへの入力、シートの追加・切り替え、SUM などの数式、ファイルの保存）
- **推奨**: 特にありません。プログラミングの経験は不要です。変数・条件分岐・繰り返しといった考え方は、このガイドの中で一から説明します

## 学習コンテンツ

### [1. VBAとは何か](https://fcircle-biz.github.io/tech-docs-v2/guide/business-saas/vba/vba-learning-material-01.html)

マクロとVBAの関係、VBAで何が自動化できるのか、そして手作業と比べて何が変わるのかを整理します。コードを書く前に「VBAという道具の正体」をつかみ、本ガイド全14章の地図を持ちます。

### [2. 開発環境の準備](https://fcircle-biz.github.io/tech-docs-v2/guide/business-saas/vba/vba-learning-material-02.html)

Excelに「開発」タブを表示し、VBE（Visual Basic Editor）を開くところまでを実際に操作します。マクロ有効ブック（.xlsm）という保存形式、警告バーと保護ビューの意味、そして出所の分からないマクロを安易に有効化しないための考え方も押さえます。全章で使う「売上明細」10件のサンプルデータもここで作成します。

### [3. マクロの記録と実行](https://fcircle-biz.github.io/tech-docs-v2/guide/business-saas/vba/vba-learning-material-03.html)

「マクロの記録」機能で操作をそのままコードに変え、生成されたコードを読み解きます。コードを書けなくても自動化を体験でき、VBAの文の形に自然と慣れることができます。

### [4. VBAの基本文法](https://fcircle-biz.github.io/tech-docs-v2/guide/business-saas/vba/vba-learning-material-04.html)

Subプロシージャという「処理のまとまり」の書き方、コメントの残し方、コードの実行方法、そして結果をその場で確認できるイミディエイトウィンドウの使い方を学びます。

### [5. 変数とデータ型](https://fcircle-biz.github.io/tech-docs-v2/guide/business-saas/vba/vba-learning-material-05.html)

値を一時的に入れておく「箱」である変数と、箱の種類を表すデータ型を学びます。Option Explicit によるつづり間違いの防止と、変わらない値を名前で扱う定数（Const）も扱います。

### [6. セルとセル範囲の操作](https://fcircle-biz.github.io/tech-docs-v2/guide/business-saas/vba/vba-learning-material-06.html)

VBAの中心となるセル操作です。Range と Cells の使い分け、値と書式の変更、そして初心者がつまずきやすい「Select を使わない書き方」を身につけます。

### [7. 条件分岐](https://fcircle-biz.github.io/tech-docs-v2/guide/business-saas/vba/vba-learning-material-07.html)

「もし〜だったら」でプログラムの動きを変える If〜Then〜Else と、選択肢が多いときに読みやすい Select Case を学びます。比較演算子・論理演算子の書き方もここで整理します。

### [8. 繰り返し処理](https://fcircle-biz.github.io/tech-docs-v2/guide/business-saas/vba/vba-learning-material-08.html)

同じ処理を何度も繰り返す For Next・For Each・Do While／Do Until を学びます。「1000行を1行ずつ処理する」という、自動化の効果が最も大きい部分です。

### [9. ブックとワークシートの操作](https://fcircle-biz.github.io/tech-docs-v2/guide/business-saas/vba/vba-learning-material-09.html)

複数のブック・シートをまたぐ処理を扱います。Workbook・Worksheet オブジェクトの参照方法、シートの追加・削除・コピー、ファイルを開く／保存する操作を学びます。

### [10. プロシージャと関数](https://fcircle-biz.github.io/tech-docs-v2/guide/business-saas/vba/vba-learning-material-10.html)

処理を意味のある単位に分ける方法です。Sub と Function の違い、引数と戻り値、変数が有効な範囲（スコープ）、モジュールの分け方を学び、長いコードを読みやすく保ちます。

### [11. 配列とDictionary](https://fcircle-biz.github.io/tech-docs-v2/guide/business-saas/vba/vba-learning-material-11.html)

たくさんの値をまとめて扱う配列と動的配列、キーで値を引ける Dictionary を学びます。セルに1つずつ書き込むのではなく、まとめて処理する書き方と、Timer 関数で自分の環境の処理時間を測って比べる方法も紹介します。

### [12. エラー処理とデバッグ](https://fcircle-biz.github.io/tech-docs-v2/guide/business-saas/vba/vba-learning-material-12.html)

エラーが出たときに慌てないための章です。On Error による対処、ブレークポイントとステップ実行、ウォッチ式を使って「どこで何が起きているか」を自分で確かめる方法を身につけます。

### [13. ユーザーとのやり取り](https://fcircle-biz.github.io/tech-docs-v2/guide/business-saas/vba/vba-learning-material-13.html)

MsgBox・InputBox による対話、シート上のボタンからマクロを実行する方法、シートやブックの操作に反応するイベントプロシージャ、そして UserForm の入門を扱います。

### [14. 実践：業務自動化ミニアプリ](https://fcircle-biz.github.io/tech-docs-v2/guide/business-saas/vba/vba-learning-material-14.html)

総仕上げとして、対象年月を指定して売上データを集計し、帳票シートに出力する月次レポートツールを一から作ります。不正データのチェック、シートの自動作成、エラー時の設定復元まで、これまでの全章で学んだ作法を統合した見本コードとして仕上げます。

## 推奨所要時間

| 章 | 内容 | 目安時間 |
|----|------|----------|
| 第1章 | VBAとは何か | 1時間 |
| 第2章 | 開発環境の準備 | 1時間 |
| 第3章 | マクロの記録と実行 | 1時間 |
| 第4章 | VBAの基本文法 | 1.5時間 |
| 第5章 | 変数とデータ型 | 1.5時間 |
| 第6章 | セルとセル範囲の操作 | 1.5時間 |
| 第7章 | 条件分岐 | 1.5時間 |
| 第8章 | 繰り返し処理 | 1.5時間 |
| 第9章 | ブックとワークシートの操作 | 1.5時間 |
| 第10章 | プロシージャと関数 | 1.5時間 |
| 第11章 | 配列とDictionary | 1.5時間 |
| 第12章 | エラー処理とデバッグ | 1.5時間 |
| 第13章 | ユーザーとのやり取り | 1.5時間 |
| 第14章 | 実践：業務自動化ミニアプリ | 2時間 |
| **合計** | | **約20時間** |

## 学習目標

このガイドを完了すると、以下のスキルを身につけることができます：

- マクロとVBAの関係を理解し、VBEでコードを書いて実行できる
- 変数・データ型を適切に使い分け、Option Explicit を前提とした安全なコードを書ける
- Range・Cells でセルを自在に読み書きし、Select に頼らない書き方ができる
- 条件分岐と繰り返しを組み合わせて、大量データを一括処理できる
- 複数のブック・シートをまたぐ転記や集計を自動化できる
- 処理をSubとFunctionに分割し、読みやすく再利用しやすいコードを組み立てられる
- 配列やDictionaryを使って、処理を速く・簡潔に書ける
- エラーの原因をデバッグ機能で自力で突き止め、エラー処理を組み込める
- ボタンやメッセージボックスを使い、他の人にも使ってもらえるツールに仕上げられる
- 日常のExcel業務を自分で見極めて自動化し、業務時間を短縮できる

## 学習の進め方

1. **必ず手を動かす** — 各章の「やってみよう」は、読むだけでなく実際にExcelで実行してください。VBAは自分の手で動かしたときに一番早く身につきます
2. **順番に進める** — 各章は前の章の内容を前提に組み立てられています。特に第4章〜第8章はVBAの土台なので、飛ばさずに進めてください
3. **エラーを恐れない** — エラーは失敗ではなく、Excelからの案内です。第12章で自力での調べ方を学びます
4. **練習用ブックを使う** — 実務で使っている大切なファイルではなく、コピーしたファイルや練習用ブックで試してください

## 次のステップ

このガイドを終えた後は、次のような方向に学習を広げられます。

- **Excel業務の高度な自動化** — ピボットテーブル操作、外部データ連携、Power Query との併用
- **[Power BI学習教材](https://fcircle-biz.github.io/tech-docs-v2/guide/business-saas/power-bi/power-bi-learning-material-01.html)** — 集計したデータを、共有できるレポートとして可視化する
- **[VB.NET学習教材](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/dotnet-ecosystem/vbnet/vbnet-learning-material-01.html)** — VBAと文法が近い言語で、Excelの外でも動く本格的なアプリ開発へ
- **Office スクリプト / Power Automate** — クラウド環境やWeb版Excelでの自動化
