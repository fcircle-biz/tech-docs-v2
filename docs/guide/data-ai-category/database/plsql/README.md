# PL/SQL入門（プログラム初心者向け） 学習ガイドライン

このガイドラインでは、PL/SQL（Oracle手続き型SQL）の基礎をプログラミング初心者向けに段階的に学習するためのカリキュラムを提供しています。SQL学習ガイドとOracle学習ガイドで身につけた知識を基に、データベース処理を自動化するプログラムの作り方を習得します。

## 前提条件

### 必要な環境
- Oracle Database環境（Oracle Database FreeまたはDockerコンテナ）
- Oracle SQL Developer（Oracle学習ガイドで設定済み）
- Windows 10/11またはmacOS（Docker Desktop環境）
- 8GB以上のRAM、20GB以上のディスク空き容量

### 参考リソース
- [Oracle PL/SQL公式ドキュメント](https://docs.oracle.com/cd/F19136_01/lnpls/index.html)
- [Oracle SQL Developer公式サイト](https://www.oracle.com/database/sqldeveloper/)
- [PL/SQLベストプラクティス](https://www.oracle.com/technical-resources/articles/database/plsql-best-practices.html)

### 前提知識
- **必須**: SQL学習ガイド履修済み（SELECT、INSERT、UPDATE、DELETE、JOIN、サブクエリ、集計関数の理解）
- **必須**: Oracle学習ガイド履修済み（Oracle環境構築、SQL Developer操作、基本的なOracle SQL）
- **推奨**: 簡単な条件分岐（もし〜なら）の概念理解

## 学習コンテンツ

### [1. PL/SQLってなに？ - プログラミングでデータベース処理を自動化しよう](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/plsql/plsql-learning-material-01.html)
SQLだけでは難しい「もし〜なら」「〜を繰り返す」といった処理を可能にするPL/SQLの役割と特徴を、身近な例（請求書の自動作成、在庫チェック）を使って分かりやすく説明します。

### [2. はじめてのPL/SQLプログラム - Hello Worldから始めよう](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/plsql/plsql-learning-material-02.html)
SQL Developerを使って最初のPL/SQLプログラムを作成します。画面への文字出力（DBMS_OUTPUT）、簡単な計算、コメントの書き方など、プログラミングの第一歩を体験します。

### [3. 変数を使ってデータを覚えよう - 値を保存する箱の使い方](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/plsql/plsql-learning-material-03.html)
変数という「データを入れる箱」の概念を理解し、数値、文字、日付などのデータ型の選び方、代入の方法、定数の使い方を、電卓や住所録の例で学習します。

### [4. データベースからデータを取り出そう - SELECTとINTO句](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/plsql/plsql-learning-material-04.html)
SQLのSELECT文をPL/SQL内で使って、データベースから値を取得して変数に格納する方法を学習します。1件のデータ取得、%TYPE属性を使った安全な変数宣言も習得します。

### [5. 条件によって処理を変えよう - IF文で賢いプログラム](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/plsql/plsql-learning-material-05.html)
IF-THEN-ELSE文を使った条件分岐を学習します。年齢による割引計算、在庫チェック、成績評価など、実用的な例を通じて条件による処理の切り替え方を理解します。

### [6. 同じ処理を繰り返そう - LOOP文で効率的なプログラム](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/plsql/plsql-learning-material-06.html)
基本LOOP、FOR LOOP、WHILE LOOPの3種類の繰り返し処理を学習します。1から100までの合計計算、テーブルの全データ処理など、繰り返しが必要な場面での使い方を習得します。

### [7. 複数のデータをまとめて処理 - カーソルで行ごとの処理](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/plsql/plsql-learning-material-07.html)
SELECT文で複数行を取得してー行ずつ処理するカーソルの使い方を学習します。明細データの合計計算、全社員の給与更新など、実践的な例で理解を深めます。

### [8. エラーに備えよう - 例外処理で安全なプログラム](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/plsql/plsql-learning-material-08.html)
プログラム実行中のエラー（データが見つからない、ゼロ除算など）に対処する例外処理を学習します。TRY-CATCHのような仕組みで、エラーが起きても止まらないプログラムを作ります。

### [9. 処理をまとめて部品化 - プロシージャとファンクション](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/plsql/plsql-learning-material-09.html)
よく使う処理をプロシージャ（手続き）やファンクション（関数）として部品化する方法を学習します。消費税計算、年齢計算など、再利用可能な処理の作り方を習得します。

### [10. データベースの変更を自動化 - トリガーで賢い仕組み作り](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/plsql/plsql-learning-material-10.html)
データの追加・更新・削除時に自動で動くトリガーの作成方法を学習します。在庫の自動更新、履歴の自動記録など、データベースを賢くする仕組みを実装します。

### [11. 複数の処理をパッケージ化 - 関連する機能をまとめて管理](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/plsql/plsql-learning-material-11.html)
関連するプロシージャやファンクションをパッケージとしてまとめる方法を学習します。「社員管理パッケージ」「在庫管理パッケージ」など、機能別に整理する方法を習得します。

### [12. 実践！簡単な業務システムを作ろう - 総合演習](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/plsql/plsql-learning-material-12.html)
これまでの知識を活用して「図書貸出管理システム」を作成します。会員登録、貸出処理、返却処理、延滞チェックなど、実際の業務を想定したプログラムを段階的に構築します。

## 学習の進め方

1. **プログラミングの考え方から始める**: 第1章でPL/SQLが解決する問題を理解し、なぜプログラミングが必要かを把握します。

2. **小さなプログラムから徐々に**: 第2〜3章で簡単なプログラムを書いて、成功体験を積み重ねましょう。

3. **SQL Developerで必ず実行**: サンプルコードは必ず自分で入力して実行し、結果を確認することで理解が深まります。

4. **エラーを恐れない**: エラーメッセージは学習のチャンス。どこが間違っているか教えてくれる先生だと思いましょう。

5. **段階的に複雑化**: 基本構文（第2〜6章）をマスターしてから、応用的な内容（第7〜11章）に進みます。

6. **実践で定着**: 第12章の総合演習で実際の業務を想定したシステムを作り、理解を定着させます。

## 推奨所要時間

| 章 | 内容 | 目安時間 |
|:--|:--|:--|
| 第1章 | PL/SQLってなに？ - プログラミングでデータベース処理を自動化しよう | 30分 |
| 第2章 | はじめてのPL/SQLプログラム - Hello Worldから始めよう | 45分 |
| 第3章 | 変数を使ってデータを覚えよう - 値を保存する箱の使い方 | 45分 |
| 第4章 | データベースからデータを取り出そう - SELECTとINTO句 | 45分 |
| 第5章 | 条件によって処理を変えよう - IF文で賢いプログラム | 1時間 |
| 第6章 | 同じ処理を繰り返そう - LOOP文で効率的なプログラム | 1時間 |
| 第7章 | 複数のデータをまとめて処理 - カーソルで行ごとの処理 | 1.5時間 |
| 第8章 | エラーに備えよう - 例外処理で安全なプログラム | 1時間 |
| 第9章 | 処理をまとめて部品化 - プロシージャとファンクション | 1.5時間 |
| 第10章 | データベースの変更を自動化 - トリガーで賢い仕組み作り | 1.5時間 |
| 第11章 | 複数の処理をパッケージ化 - 関連する機能をまとめて管理 | 1時間 |
| 第12章 | 実践！簡単な業務システムを作ろう - 総合演習 | 2時間 |
| **合計** | | **約13.5時間** |

## 関連リソース

- [PL/SQLチートシート](https://fcircle-biz.github.io/tech_docs/cheatsheet/databases/plsql-cheatsheet.html) - よく使うPL/SQL構文の早見表
- [SQL学習ガイド](../sql/README.md) - SQLの復習をしたい方向け
- [Oracle学習ガイド](../oracle/README.md) - Oracle環境の再構築が必要な方向け
- [Oracle管理者ガイド（上級編）](./v1/README.md) - より高度なPL/SQL技術を学びたい方向け

## 学習目標

このガイドを完了すると、以下のスキルを身につけることができます：

- PL/SQLプログラムの基本構造を理解し、簡単なプログラムを作成できる
- 変数を使ってデータを保存・操作できる
- データベースからデータを取得してプログラム内で使用できる
- IF文による条件分岐で、状況に応じた処理を実装できる
- LOOP文による繰り返し処理で、効率的なプログラムを作成できる
- カーソルを使って複数行のデータを処理できる
- 例外処理でエラーに強いプログラムを作成できる
- プロシージャとファンクションで再利用可能な処理を作成できる
- トリガーでデータベースの自動処理を実装できる
- パッケージで関連機能をまとめて管理できる
- 簡単な業務システムのデータベース処理を自動化できる
- エラーメッセージを読んで問題を解決できる

## 次のステップ

このガイドライン完了後は、以下の学習に進むことをお勧めします：

- [PL/SQL応用編（パフォーマンスチューニング）](./v1/README.md) - BULK COLLECT、動的SQLなど高度な技術
- [Javaプログラミング入門](../../programming-languages/java-ecosystem/java/README.md) - アプリケーション開発へのステップアップ
- [Oracle Database管理者ガイド](../oracle-dba/README.md) - データベース管理の専門知識