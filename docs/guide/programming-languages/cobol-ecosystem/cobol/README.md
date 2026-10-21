# COBOL 入門 学習ガイドライン

このガイドラインでは、銀行・保険・官公庁などの業務システムを今も支えているプログラミング言語 COBOL の基礎を、プログラミング未経験の方でも理解できるように段階的に学習するためのカリキュラムを提供しています。無償の COBOL コンパイラ GnuCOBOL を自分の PC に用意し、データ項目と PICTURE 句、計算・条件分岐・繰り返し、表（OCCURS）、文字列操作、ファイル処理、副プログラムを順に学び、最後に「売上集計バッチ」を完成させます。

## 前提条件

### 必要な環境
- Windows 10 / 11（WSL2 の Ubuntu を使用）、macOS、または Linux（Ubuntu など）の PC
- GnuCOBOL 3.x（第2章で導入。本ガイドのコードは Ubuntu 24.04 の GnuCOBOL 3.1.2 で動作確認）
- テキストエディタ（Visual Studio Code と COBOL 用拡張機能を推奨）

### 参考リソース
- [GnuCOBOL 公式サイト](https://gnucobol.sourceforge.io/)
- [GnuCOBOL プロジェクト（SourceForge）](https://sourceforge.net/projects/gnucobol/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [WSL のインストール（Microsoft Learn）](https://learn.microsoft.com/ja-jp/windows/wsl/install)

### 前提知識
- **必須**: PC の基本操作（ファイルの作成・保存、フォルダの移動）
- **推奨**: ターミナル（コマンドを入力する画面）でコマンドを実行した経験。ほかのプログラミング言語の知識は不要です

## 学習コンテンツ

### [1. COBOLの世界へようこそ - 業務システムを支える言語](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/cobol-ecosystem/cobol/cobol-learning-material-01.html)
COBOL の生い立ちと特徴、銀行の勘定系などで使われ続けている理由、バッチ処理とオンライン処理の違い、主な COBOL 処理系と本ガイドの進め方を学びます。

### [2. 開発環境を準備する - GnuCOBOLで最初のプログラム](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/cobol-ecosystem/cobol/cobol-learning-material-02.html)
GnuCOBOL と VS Code を準備し、最初のプログラムをコンパイル（`cobc -x`）して実行します。コンパイルエラーの読み方と直し方にも慣れます。

### [3. プログラムの骨組み - 4つの部と桁のルール](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/cobol-ecosystem/cobol/cobol-learning-material-03.html)
見出し部・環境部・データ部・手続き部の4つの部の役割と、部・節・段落・文の階層、固定形式の桁のルール（A領域・B領域）、コメントの書き方を学びます。

### [4. データを入れる箱 - データ項目とPICTURE句](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/cobol-ecosystem/cobol/cobol-learning-material-04.html)
作業場所節にデータ項目を定義し、PICTURE 句（`9`・`X`・`V`・`S`）で種類と桁数を決め、VALUE 句と MOVE 文で値を入れます。桁あふれと初期化の注意点も押さえます。

### [5. 表示と入力 - DISPLAY・ACCEPTと編集項目](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/cobol-ecosystem/cobol/cobol-learning-material-05.html)
DISPLAY と ACCEPT で対話的なプログラムを作り、日付・時刻を取得します。編集項目（`Z`・`,`・`-` など）で金額を読みやすく表示します。

### [6. 計算する - 四則演算とCOMPUTE](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/cobol-ecosystem/cobol/cobol-learning-material-06.html)
ADD・SUBTRACT・MULTIPLY・DIVIDE・COMPUTE で計算し、ROUNDED（四捨五入）と ON SIZE ERROR（桁あふれ）を扱います。COBOL の正確な10進数計算の強みを確かめます。

### [7. プログラムに判断させる - IF・EVALUATEと条件名](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/cobol-ecosystem/cobol/cobol-learning-material-07.html)
IF・EVALUATE による分岐、AND・OR・NOT の複合条件、条件名（88レベル）、クラス条件を学びます。ピリオドとスコープ終了符（END-IF）の重要なルールを理解します。

### [8. 同じ処理を繰り返す - PERFORMと構造化](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/cobol-ecosystem/cobol/cobol-learning-material-08.html)
PERFORM による段落の呼び出し、TIMES・UNTIL・VARYING の繰り返しを学び、「初期処理 → 主処理 → 終了処理」の構造化されたプログラムを書きます。

### [9. データをまとめて扱う - 集団項目とレベル番号](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/cobol-ecosystem/cobol/cobol-learning-material-09.html)
レベル番号で階層を持つレコードを定義し、集団項目と基本項目、FILLER、INITIALIZE、REDEFINES を使って業務データを扱います。

### [10. 同じ形のデータを並べる - 表（OCCURS）と検索](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/cobol-ecosystem/cobol/cobol-learning-material-10.html)
OCCURS 句で表を定義し、添字・指標で要素を扱います。合計・最大値の計算や、SEARCH 文による商品マスタの検索を行います。

### [11. 文字列を加工する - STRING・UNSTRING・INSPECT](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/cobol-ecosystem/cobol/cobol-learning-material-11.html)
部分参照、STRING（連結）、UNSTRING（分割）、INSPECT（数え上げ・置換）と、TRIM・UPPER-CASE などの組み込み関数を使って文字列を加工します。

### [12. ファイルを読み書きする - 順ファイル処理の基本](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/cobol-ecosystem/cobol/cobol-learning-material-12.html)
FILE-CONTROL と FD でファイルを定義し、OPEN・READ・WRITE・CLOSE で順ファイルを処理します。先読みのパターンと FILE STATUS によるエラー処理を身につけます。

### [13. プログラムを部品に分ける - CALLとCOPY](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/cobol-ecosystem/cobol/cobol-learning-material-13.html)
連絡節を持つ副プログラムを作って CALL で呼び出し、BY REFERENCE と BY CONTENT の違いを確かめます。COPY 文とコピーブックでレコード定義を共有します。

### [14. 実践：売上集計バッチを作ろう - 総まとめと次のステップ](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/cobol-ecosystem/cobol/cobol-learning-material-14.html)
SORT 文で並べ替えた売上データから、コントロールブレイクで商品ごとの小計と総合計を求める帳票作成バッチを完成させます。桁数の上限設計、ファイルやデータの異常の検知、終了コードによる失敗の通知、期待結果を決めたテストまで扱います。メインフレーム（JCL・CICS・Db2）など次に学ぶことも紹介します。

## 推奨所要時間

| 章 | 内容 | 目安時間 |
|----|------|----------|
| 第1章 | COBOLの世界へようこそ | 1時間 |
| 第2章 | 開発環境を準備する | 1.5時間 |
| 第3章 | プログラムの骨組み | 1.5時間 |
| 第4章 | データ項目とPICTURE句 | 1.5時間 |
| 第5章 | DISPLAY・ACCEPTと編集項目 | 1.5時間 |
| 第6章 | 四則演算とCOMPUTE | 1時間40分 |
| 第7章 | IF・EVALUATEと条件名 | 1時間40分 |
| 第8章 | PERFORMと構造化 | 1時間40分 |
| 第9章 | 集団項目とレベル番号 | 1.5時間 |
| 第10章 | 表（OCCURS）と検索 | 2時間15分 |
| 第11章 | 文字列の加工 | 1.5時間 |
| 第12章 | 順ファイル処理の基本 | 2時間 |
| 第13章 | CALLとCOPY | 1.5時間 |
| 第14章 | 実践：売上集計バッチ | 3時間30分 |
| **合計** | | **約24時間** |

## 学習目標

このガイドを完了すると、以下のスキルを身につけることができます：

- COBOL が業務システムで使われ続けている理由と、バッチ処理の考え方を説明できる
- GnuCOBOL で COBOL プログラムをコンパイル・実行し、エラーを読んで修正できる
- 4つの部と固定形式の桁のルールに従って、読みやすい COBOL プログラムを書ける
- PICTURE 句・編集項目・集団項目・表（OCCURS）を使って業務データを定義・表示できる
- IF・EVALUATE・PERFORM を使った構造化されたプログラムを書ける
- 順ファイルの読み書き、SORT、コントロールブレイクによる集計帳票を作成し、異常時には終了コードで確実に失敗を知らせられる
- CALL と COPY を使ってプログラムを部品に分け、既存の COBOL プログラムを読み解く土台を持てる

## 次のステップ

- メインフレーム環境（z/OS・JCL・CICS・Db2 の埋め込み SQL）の学習
- 実務の補強テーマ: 数値の内部表現（COMP・COMP-3）、バッチ運用（再実行・二重処理の防止）、QSAM・EBCDIC、ファイル設計（ヘッダー・トレーラー、件数・金額の照合）
- [SQL 入門](https://fcircle-biz.github.io/tech-docs-v2/guide/database/sql/sql-learning-material-01.html) — COBOL から利用するデータベースの基礎
- [Java 入門](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/java/java-learning-material-01.html) — COBOL 資産のモダナイゼーション（移行・連携）先として多い言語
