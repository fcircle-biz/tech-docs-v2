# COBOLバッチ処理入門（COBOL・SAMファイル・JCL・ジョブネット） 学習ガイドライン

このガイドラインでは、メインフレームの業務システムを支える「COBOL」「SAMファイル」「JCL」「ジョブネット」の4つを、別々の用語として暗記するのではなく、**「データを読み、処理し、実行し、つなげる」**という日次バッチ処理の流れの中で理解するための新人研修カリキュラム（全8章・24時間）を提供しています。全章を通して「日次売上集計バッチ」を題材に使い、固定長レコードの読み解き → COBOL による集計プログラム → JCL による実行 → ジョブネットによる一連のジョブの制御へと段階的に拡張し、最後に正常系・異常系・再実行まで含めたテストを行います。

想定する実行環境は IBM z/OS 系のメインフレームです。メインフレーム環境が無い場合でも、COBOL の部分は自分の PC 上の GnuCOBOL で実際に動かし、JCL・ジョブネットの部分はサンプルの読解・設計演習と、PC 上での疑似的な実行体験で学べるように構成しています。

## 前提条件

### 必要な環境
- Windows 10 / 11（WSL2 の Ubuntu を使用）、macOS、または Linux（Ubuntu など）の PC
- GnuCOBOL 3.x（導入手順は [COBOL入門 第2章](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/cobol-ecosystem/cobol/cobol-learning-material-02.html) を参照）
- テキストエディタ（Visual Studio Code を推奨）
- （任意）IBM z/OS の実行環境: 研修先のメインフレーム環境など。JCL の投入・ジョブログの確認・ジョブ管理製品によるジョブネット制御を実機で体験する場合に使用します

> **重要**: GnuCOBOL だけでは IBM z/OS 用の JCL やジョブネットは実行できません。メインフレーム環境が無い場合、JCL とジョブネットはサンプルの読解・設計演習・障害シナリオで学習し、PC 上ではシェルスクリプトによる「疑似的な実行」で考え方を体験します（実機との違いは各章で明示します）。

### 参考リソース
- [IBM: What is JCL?（z/OS Basic Skills）](https://www.ibm.com/docs/en/zos-basic-skills?topic=sdsf-what-is-jcl)
- [IBM: COBOL での QSAM ファイルおよびレコードの定義（Enterprise COBOL for z/OS 6.4）](https://www.ibm.com/docs/ja/cobol-zos/6.4.0?topic=files-defining-qsam-records-in-cobol)
- [IBM: Common processing facilities（File status key の一覧。Enterprise COBOL for z/OS 6.4）](https://www.ibm.com/docs/en/SS6SG3_6.4.0/lr/ref/rlpdscpf.html)
- [日立: JP1/AJS3 設計ガイド（業務設計編） 2.4 さまざまなジョブネット定義](https://itpfdoc.hitachi.co.jp/manuals/3021/30213d2330/AJSG0026.HTM)
- [日立: JP1/AJS3 導入ガイド 4.5.11 実行が終了したジョブネットやジョブを再実行する](https://itpfdoc.hitachi.co.jp/manuals/3021/30213D2130/AJSF0082.HTM)
- [GnuCOBOL](https://gnucobol.sourceforge.io/)

### 前提知識
- **必須**: PC の基本操作（ファイルの作成・保存、フォルダの移動）
- **推奨**: ターミナル（コマンドを入力する画面）でコマンドを実行した経験。COBOL の文法をより詳しく学びたい場合は [COBOL入門](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/cobol-ecosystem/cobol/cobol-learning-material-01.html) を併用してください

## 学習コンテンツ

### [1. バッチ処理の全体像 - データを読み、処理し、実行し、つなげる](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/cobol-ecosystem/cobol-batch/cobol-batch-learning-material-01.html)
オンライン処理とバッチ処理の違い、ジョブ・ジョブステップ・ジョブネットの関係を図で理解します。COBOL・SAMファイル・JCL・ジョブネットの役割分担と、全章で使う「日次売上集計バッチ」の全体像、学習の進め方と演習環境を確認します。

### [2. SAMファイル - レコードと固定長・可変長を読み解く](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/cobol-ecosystem/cobol-batch/cobol-batch-learning-material-02.html)
ファイル・レコード・項目の関係、固定長・可変長レコード（RECFM・LRECL・BLKSIZE）、レコードレイアウト（項目定義）の読み方、QSAM と VSAM の違いを学びます。区切り文字の無い固定長レコードを PC 上で作って読み解き、レコードレイアウト定義書を作成します。

### [3. COBOLの基礎 - DIVISION・PIC・MOVE・IF・PERFORM](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/cobol-ecosystem/cobol-batch/cobol-batch-learning-material-03.html)
4つの DIVISION（部）と固定形式の桁のルール、PICTURE 句によるデータ定義、MOVE・算術演算・IF・PERFORM を学び、売上明細3件の売上金額と合計を求める単純な集計プログラムを作ります。

### [4. COBOLファイル処理 - 順次ファイルの入出力とFILE STATUS](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/cobol-ecosystem/cobol-batch/cobol-batch-learning-material-04.html)
SELECT・FD・OPEN・READ・WRITE・CLOSE・AT END・FILE STATUS を使い、売上明細ファイルを読んで合計金額を集計ファイルへ書き出す売上集計プログラム（SALESSUM）を完成させます。ファイルの異常を FILE STATUS で検出し、戻りコードで知らせる方法も身につけます。

### [5. JCLの基礎 - JOB・EXEC・DDでジョブを定義する](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/cobol-ecosystem/cobol-batch/cobol-batch-learning-material-05.html)
JCL の書き方のルール、JOB・EXEC・DD 文、データセット名（DSN）と DISP、ジョブステップ、戻りコード（RC）とステップの実行条件を学び、売上集計ジョブの JCL を1行ずつ読解します。

### [6. COBOLとJCLの連携 - ASSIGNとDD名・実行結果の確認](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/cobol-ecosystem/cobol-batch/cobol-batch-learning-material-06.html)
COBOL の ASSIGN と JCL の DD 名の対応、データセットの割り当てと処置、SYSIN・SYSOUT、RETURN-CODE と条件コードの関係を学びます。ジョブログから実行結果と異常の原因を読み取り、「どの失敗をだれが検出するか」を整理します。PC 上では環境変数による疑似的な DD 割り当てを体験します。

### [7. ジョブネット - 先行・後続関係と異常時の再実行を設計する](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/cobol-ecosystem/cobol-batch/cobol-batch-learning-material-07.html)
ジョブネットとジョブ管理製品の役割、先行・後続関係、実行条件（戻りコードによる終了判定）、スケジュール、異常終了時の対応、再実行で起きる上書き・二重集計の防ぎ方を学び、日次売上ジョブネットを設計します。

### [8. 総合ハンズオン - 日次売上集計バッチを設計・実行・テストする](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/cobol-ecosystem/cobol-batch/cobol-batch-learning-material-08.html)
入力データ準備 → 売上集計 → 集計結果の確認の3ジョブからなる日次売上集計バッチを設計・実行し、正常系・異常系（入力が無い・受信データの複写の失敗・数値項目の不正値・桁あふれ・存在しない日付・集計結果の破損・先行ジョブの異常終了）・再実行の11のテストを行います。異常時に「何が起き、どこで検出し、どう対処して再実行するか」を説明できるようにまとめ、修了成果物を仕上げます。

## 推奨所要時間

| 章 | 内容 | 目安時間 |
|----|------|----------|
| 第1章 | バッチ処理の全体像 | 2時間 |
| 第2章 | SAMファイル | 3時間 |
| 第3章 | COBOLの基礎 | 3時間 |
| 第4章 | COBOLファイル処理 | 4時間 |
| 第5章 | JCLの基礎 | 3時間 |
| 第6章 | COBOLとJCLの連携 | 3時間 |
| 第7章 | ジョブネット | 3時間 |
| 第8章 | 総合ハンズオン | 3時間 |
| **合計** | | **約24時間** |

第1〜4章で「データとプログラム」を、第5〜8章で「実行・連携・運用」を理解します。各章は講義と演習（ハンズオン）・理解度確認で構成しています。

## 学習目標

このガイドを完了すると、以下のスキルを身につけることができます：

- バッチ処理とオンライン処理の違い、ジョブ・ジョブステップ・ジョブネットの関係を図で説明できる
- 固定長・可変長レコードの仕組みを理解し、レコードレイアウト（項目・開始位置・桁数・データ型）を読み書きできる
- COBOL で順次ファイルを読み、集計して書き出すプログラムを作り、FILE STATUS と戻りコードで異常を知らせられる
- JCL の JOB・EXEC・DD 文と DISP を読解し、COBOL の ASSIGN と DD 名の対応を説明できる
- ジョブログから実行結果（条件コード・異常終了・JCL エラー）を確認し、原因を切り分けられる
- 先行・後続関係、実行条件、異常終了時の対応、再実行条件を含むジョブネットを設計できる
- 異常時に「どの失敗を COBOL で検出し、どの失敗を JCL やジョブ管理製品で判断するか」を分けて説明できる

## 修了時に提出する成果物

| 成果物 | 内容 |
|--------|------|
| ① レコードレイアウト定義書 | 入力・出力ファイルの項目名・開始位置・桁数・データ型の定義 |
| ② COBOL ソース | 順次ファイルの READ・集計・WRITE 処理（異常時の戻りコード設定を含む） |
| ③ JCL | JOB・EXEC・DD を含む実行定義 |
| ④ ジョブネット構成図 | 先行・後続関係と、正常時／異常時の分岐・再実行方法 |
| ⑤ テスト結果 | 正常系・異常系・再実行時の確認記録 |

**修了判定の目安**: 処理の全体像を図示できること、各成果物の内容を自分の言葉で説明できること、正常系の出力結果が期待値と一致すること、異常系の対処を説明できること。

## 研修での進め方（講師の方へ）

最初に処理の全体像を図で見せ、次に個々の要素を深掘りします。各章の演習は **「完成形を読む → 一部を修正する → 自分で作る」** の3段階で構成しているので、この順に進めてください。最後は受講者自身に、処理の流れと障害対応を説明してもらう構成が効果的です。製品や環境によって JCL・ジョブネットの書式や設定は異なるため、研修先の実環境に合わせて演習を調整してください。

## 次のステップ

- [COBOL入門](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/cobol-ecosystem/cobol/cobol-learning-material-01.html) — 編集項目・表（OCCURS）・文字列操作・SORT・コントロールブレイク・CALL/COPY など、COBOL の文法をさらに深く学ぶ
- [SQL入門](https://fcircle-biz.github.io/tech-docs-v2/guide/database/sql/sql-learning-material-01.html) — COBOL から利用するデータベース（Db2 など）の基礎
- 実務の補強テーマ: VSAM（索引付きファイル）、DFSORT などのユーティリティ、GDG（世代データグループ）、CICS（オンライン処理）、ジョブ管理製品の運用設計
