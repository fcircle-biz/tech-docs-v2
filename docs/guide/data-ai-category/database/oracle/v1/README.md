# Oracle データベース入門ガイドライン

このガイドラインでは、Oracle データベースの基礎を入門者向けに段階的に学習するためのカリキュラムを提供しています。Docker環境でのOracleセットアップとSQL Developerを使った開発手順を中心に構成されています。

## 前提条件

### 必要な環境
- Docker Desktop がインストール済み
- 8GB以上のメモリ
- 20GB以上の空きディスク容量

### 参考リソース
- [Oracle Docker Images GitHub](https://github.com/oracle/docker-images) - Oracle公式のDocker構築手順
- [SQL Developer ダウンロード](https://www.oracle.com/jp/database/sqldeveloper/technologies/download/) - Oracle公式の開発ツール

### 前提知識
- **必須**: SQL の基本的な知識（SELECT、INSERT、UPDATE、DELETE文）
- **推奨**: リレーショナルデータベースの基本概念

SQLの基礎知識がない場合は、先に[SQL学習ガイド](../sql/README.md)を学習することをお勧めします。

## 学習コンテンツ

### [1. Oracle データベースの基本概念と環境構築](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/oracle/oracle-learning-material-01.html)
Oracleデータベースの特徴と基本概念、企業向けデータベースとしての位置づけを理解し、Docker を使ったOracle Database 19c/21c環境の構築方法を学習します。

### [2. Docker環境でのOracle セットアップ](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/oracle/oracle-learning-material-02.html)
Oracle公式のDocker imagesを使用してOracle Database環境を構築し、コンテナの起動・停止・設定方法を習得します。また、永続化ストレージの設定方法も学びます。

### [3. SQL Developer の導入と基本操作](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/oracle/oracle-learning-material-03.html)
SQL Developerのインストールから基本的な使い方まで、データベース接続設定、SQLワークシート、オブジェクトブラウザの操作方法を学習します。

### [4. Oracle SQL の基本](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/oracle/oracle-learning-material-04.html)
Oracle固有のSQL文法、データ型、制約、シーケンス、シノニムなど、Oracle SQLの基本的な機能と標準SQLとの違いを理解します。

### [5. テーブル設計とインデックス基礎](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/oracle/oracle-learning-material-05.html)
Oracleでのテーブル設計の基本的な考え方、Bツリーインデックスの仕組みと作成方法、基本的なパフォーマンス向上のポイントを学習します。

### [6. Oracle 組み込み関数](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/oracle/oracle-learning-material-06.html)
Oracle独自の組み込み関数（TO_DATE、DECODE、NVLなど）、基本的な分析関数（ROW_NUMBER、RANKなど）を使ったデータ処理手法を習得します。

### [7. ユーザー管理と基本的な権限制御](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/oracle/oracle-learning-material-07.html)
Oracleの基本的なユーザー管理、ロールの概念、基本的なオブジェクト権限とシステム権限の設定方法を学習します。

### [8. 基本的なバックアップ操作](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/oracle/oracle-learning-material-08.html)
Data Pumpを使った論理バックアップ・リストアの基本操作、基本的なエクスポート・インポート手順について学習します。

## 学習の進め方

1. **環境構築から開始**: まず「1. Oracle データベースの基本概念と環境構築」と「2. Docker環境でのOracle セットアップ」を完了させて、学習環境を整えましょう。

2. **SQL Developer に慣れる**: 「3. SQL Developer の導入と基本操作」で開発環境の使い方をマスターしてから、SQLの学習に進みましょう。

3. **段階的なスキルアップ**: Oracle SQLの基本から始めて、Oracle固有の機能を段階的に習得しましょう。

4. **実践的な演習**: 各トピックで学んだ内容を実際のDocker環境で試し、サンプルデータベースを使って演習を行いましょう。

5. **プロジェクト実践**: 学習の後半では、小規模なデータベース設計プロジェクト（例：在庫管理システム、顧客管理システム）に取り組んで実践力を身につけましょう。

## 推奨学習期間

- **基礎習得コース** (1-5章): 3-4週間
- **実践活用コース** (6-8章): 2-3週間

## 関連リソース

- [Oracle チートシート](https://fcircle-biz.github.io/tech_docs/cheatsheet/databases/oracle-cheatsheet.html) - Oracle SQLの主要な構文と関数をまとめた参考資料
- [SQL学習ガイド](../sql/README.md) - SQL基礎の学習ガイド（Oracle学習の前提知識）
- [SQL チートシート](https://fcircle-biz.github.io/tech_docs/cheatsheet/databases/sql-cheatsheet.html) - SQL文の基本的な構文をまとめた参考資料

## 学習目標

このガイドを完了すると、以下のスキルを身につけることができます：

- Docker環境でのOracle Database環境構築
- SQL DeveloperによるOracle接続と基本操作
- Oracle SQLの基本構文と標準SQLとの違いの理解
- Oracle固有のデータ型と制約の活用
- シーケンスとシノニムの作成・使用
- Bツリーインデックスの仕組みと作成
- Oracle組み込み関数の効果的な使用
- 基本的なユーザー管理と権限設定
- Data Pumpによる基本的なバックアップ・リストア操作

## 次のステップ

このガイドライン完了後は、以下の学習に進むことをお勧めします：

- [PL/SQL学習ガイドライン](../plsql/README.md) - Oracle PL/SQLによるプログラミング学習
- [JDBC学習ガイドライン](../../java-ecosystem/jdbc/README.md) - JavaアプリケーションからのOracle接続