# SQL入門（プログラム未経験者向け） 学習ガイドライン

このガイドラインでは、プログラミング経験がない方でもSQLとデータベースの基礎を理解できるよう、専門用語を丁寧に解説しながら段階的に学習を進めるカリキュラムを提供しています。PostgreSQLを使って実際に手を動かしながら、データベースの基本操作から実践的なデータ管理まで習得できます。

## 前提条件

### 必要な環境
- Windows、Mac、またはLinuxが動作するコンピュータ
- インターネット接続（PostgreSQLのダウンロード用）
- 4GB以上のメモリ
- 10GB以上の空きディスク容量

### 参考リソース
- [PostgreSQL公式サイト（日本語）](https://www.postgresql.jp/) - データベースソフトウェア
- [PostgreSQLダウンロードページ](https://www.postgresql.org/download/) - 各OS用インストーラー
- [pgAdmin公式サイト](https://www.pgadmin.org/) - データベースを視覚的に操作できるツール

### 前提知識
- **必須**: パソコンの基本操作（ファイルの保存、フォルダの作成など）ができること
- **推奨**: Excel等の表計算ソフトで表を作ったことがある（なくても大丈夫です）

## 学習コンテンツ

### [1. データベースってなに？ - プログラム未経験者でも分かるデータベースの基礎](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/sql/sql-learning-material-01.html)
データベースが何か、なぜ必要なのか、身近な例（電話帳、住所録、在庫管理など）を使って分かりやすく説明します。ExcelとデータベースのL違い、SQLという言語の役割について学びます。

### [2. PostgreSQLをインストールしてみよう - 環境構築を丁寧に解説](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/sql/sql-learning-material-02.html)
PostgreSQLのダウンロードからインストールまで、画面キャプチャを使いながら一つ一つ丁寧に説明します。pgAdminの基本的な使い方、初めてのデータベース接続も体験します。

### [3. はじめてのテーブル作成 - データの入れ物を作ってみよう](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/sql/sql-learning-material-03.html)
テーブルとは何か、列（カラム）と行（レコード）の概念を理解し、実際に簡単な「連絡先」テーブルを作成します。データ型（文字、数値、日付）についても分かりやすく解説します。

### [4. データを入れてみよう（INSERT文） - 実際にデータを追加](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/sql/sql-learning-material-04.html)
INSERT文を使ったデータの登録方法を学習します。1件ずつデータを入れる方法、複数のデータをまとめて入れる方法を、実際の例（名前、電話番号、メールアドレスなど）を使って練習します。

### [5. データを見てみよう（SELECT文の基礎） - 基本的な検索](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/sql/sql-learning-material-05.html)
SELECT文の基本を学習し、テーブルのデータを表示する方法を習得します。全データの表示、特定の列だけを表示する方法、表示する列名を分かりやすく変更する方法（エイリアス）を練習します。

### [6. データを変更・削除してみよう（UPDATE・DELETE） - データの更新と削除](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/sql/sql-learning-material-06.html)
UPDATE文でデータを修正する方法、DELETE文でデータを削除する方法を学習します。間違えて全データを消してしまわないための注意点も含め、安全な操作方法を身につけます。

### [7. 条件を付けてデータを探そう（WHERE句） - 絞り込み検索の基礎](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/sql/sql-learning-material-07.html)
WHERE句を使って特定の条件に合うデータだけを取り出す方法を学習します。「○○と等しい」「○○より大きい」「○○を含む」など、様々な条件の指定方法を実践的な例で練習します。

### [8. データを並び替えて見やすくしよう（ORDER BY・LIMIT） - ソートと表示件数制限](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/sql/sql-learning-material-08.html)
ORDER BY句でデータを昇順・降順に並び替える方法、LIMIT句で表示件数を制限する方法を学習します。「売上トップ10」「最新の5件」といった実用的な使い方も紹介します。

### [9. 複数のテーブルを組み合わせよう（JOIN入門） - テーブルの結合の基礎](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/sql/sql-learning-material-09.html)
複数のテーブルを関連付けて使う方法を学習します。「顧客テーブル」と「注文テーブル」を例に、INNER JOINの基本的な使い方を分かりやすく説明し、実際のビジネスでの活用例も紹介します。

### [10. データをまとめて集計しよう（集計関数とGROUP BY） - 合計・平均などの集計](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/sql/sql-learning-material-10.html)
COUNT（件数）、SUM（合計）、AVG（平均）、MAX（最大）、MIN（最小）といった集計関数の使い方、GROUP BY句でカテゴリごとに集計する方法を、売上分析などの実例で学習します。

### [11. より複雑な検索をしてみよう（サブクエリ入門） - 入れ子のSQL](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/sql/sql-learning-material-11.html)
SQLの中にSQLを書く「サブクエリ」の基本概念を学習します。「平均値以上の売上がある店舗」のような、少し複雑な条件での検索方法を段階的に理解していきます。

### [12. 実践！簡単な管理システムを作ろう - 学んだ知識の総合演習](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/sql/sql-learning-material-12.html)
これまで学んだ知識を活用して、「図書管理システム」や「在庫管理システム」のデータベースを実際に設計・構築します。テーブル設計から、データ登録、各種検索・集計までを通して実践します。

## 学習の進め方

1. **まずは概念理解から**: 第1章でデータベースの概念をしっかり理解してから始めましょう。プログラミング経験がなくても大丈夫です。

2. **環境構築は焦らずに**: 第2章のインストール作業は時間をかけて確実に行いましょう。分からない部分は飛ばさず、一つずつ確認しながら進めることが大切です。

3. **手を動かして覚える**: 各章で紹介するSQL文は、必ず自分でも入力して実行してみましょう。エラーが出ても心配ありません。エラーメッセージを読む練習にもなります。

4. **繰り返し練習**: 特に第3章から第8章までの基本操作は、何度も繰り返し練習することで自然に身につきます。

5. **実践的な課題に挑戦**: 各章の終わりにある練習問題に取り組み、第12章では実際のシステムを想定した総合演習で実力を確認しましょう。

## 推奨所要時間

| 章 | 内容 | 目安時間 |
|:--|:--|:--|
| 第1章 | データベースってなに？ - プログラム未経験者でも分かるデータベースの基礎 | 30分 |
| 第2章 | PostgreSQLをインストールしてみよう - 環境構築を丁寧に解説 | 1時間 |
| 第3章 | はじめてのテーブル作成 - データの入れ物を作ってみよう | 45分 |
| 第4章 | データを入れてみよう（INSERT文） - 実際にデータを追加 | 45分 |
| 第5章 | データを見てみよう（SELECT文の基礎） - 基本的な検索 | 45分 |
| 第6章 | データを変更・削除してみよう（UPDATE・DELETE） - データの更新と削除 | 45分 |
| 第7章 | 条件を付けてデータを探そう（WHERE句） - 絞り込み検索の基礎 | 1時間 |
| 第8章 | データを並び替えて見やすくしよう（ORDER BY・LIMIT） - ソートと表示件数制限 | 45分 |
| 第9章 | 複数のテーブルを組み合わせよう（JOIN入門） - テーブルの結合の基礎 | 1.5時間 |
| 第10章 | データをまとめて集計しよう（集計関数とGROUP BY） - 合計・平均などの集計 | 1.5時間 |
| 第11章 | より複雑な検索をしてみよう（サブクエリ入門） - 入れ子のSQL | 1時間 |
| 第12章 | 実践！簡単な管理システムを作ろう - 学んだ知識の総合演習 | 2時間 |
| **合計** | | **約12.5時間** |

## 関連リソース

- [SQL チートシート（初心者向け）](https://fcircle-biz.github.io/tech_docs/cheatsheet/databases/sql-beginner-cheatsheet.html) - よく使うSQL文の早見表
- [Excel VBA学習ガイドライン](../../business-saas/vba/README.md) - Excelでのデータ処理を学びたい方向け
- [Python入門ガイドライン](../../programming-languages/python-ecosystem/python/README.md) - プログラミングも始めたい方向け

## 学習目標

このガイドを完了すると、以下のスキルを身につけることができます：

- データベースとは何か、なぜ必要なのかを説明できる
- PostgreSQLの基本的な操作ができる
- テーブルの作成と基本的な設計ができる
- データの登録、検索、更新、削除（CRUD操作）ができる
- 条件を指定してデータを絞り込める
- データの並び替えや表示件数の制御ができる
- 複数のテーブルを結合してデータを取り出せる
- 集計関数を使って統計情報を取得できる
- サブクエリを使った少し複雑な検索ができる
- 簡単なデータベースシステムの設計と構築ができる
- エラーメッセージを読んで対処方法を考えられる
- SQLを使った実務的な問題解決ができる

## 次のステップ

このガイドライン完了後は、以下の学習に進むことをお勧めします：

- [SQL中級ガイドライン](./v1/README.md) - より高度なSQL技術（インデックス、トランザクション、正規化など）
- [Python入門ガイドライン](../../programming-languages/python-ecosystem/python/README.md) - プログラミング言語からデータベースを操作する方法
- [Excel VBA実践ガイドライン](../../business-saas/vba/README.md) - ExcelとデータベースN連携