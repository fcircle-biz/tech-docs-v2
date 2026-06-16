# Oracle 学習ガイドライン

このガイドラインでは、Oracle Databaseの基礎を入門者向けに段階的に学習するためのカリキュラムを提供しています。プログラミング未経験者でも、環境構築から基本的なデータベース操作まで習得できる構成になっています。

## 前提条件
### 必要な環境
- **Windows環境**: Windows 10/11 (8GB以上のRAM推奨)
- **Mac環境**: macOS 10.14以降 (Docker Desktop必須)
- **ディスク容量**: 最低20GB以上の空き容量
- **ネットワーク**: インターネット接続（ソフトウェアダウンロード用）

### 参考リソース
- [Oracle Database ドキュメント](https://docs.oracle.com/cd/F19136_01/index.html)
- [Oracle SQL Developer ダウンロード](https://www.oracle.com/database/sqldeveloper/)
- [Oracle Database Free ダウンロード](https://www.oracle.com/database/technologies/oracle-database-software-downloads.html)
- [Docker Hub - Oracle Database](https://hub.docker.com/r/oracle/database)

### 前提知識
- **必須**: コンピュータの基本操作（ファイル操作、アプリケーションのインストール）
- **推奨**: データベースの基本概念（テーブル、レコード、カラムの理解）

## 学習コンテンツ
### [1. Oracle概要と環境準備](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/oracle/oracle-learning-material-01.html)
Oracleデータベースの概要と特徴を理解し、学習環境の準備方法を学びます。各OS環境での選択肢と推奨構成について解説します。

### [2. Windows環境でのOracleインストール](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/oracle/oracle-learning-material-02.html)
Windows環境でのOracle Database Freeのインストール手順を詳しく解説します。初心者が躓きやすいポイントを丁寧に説明し、確実に環境構築できるよう導きます。

### [3. Windows環境でのOracleインストール（Rancher Desktop利用）](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/oracle/oracle-learning-material-03.html)
Windows環境でのRancher Desktop導入とOracleコンテナの構築手順を解説します。Docker未経験者でも理解できるよう、基本的なコマンドから説明します。

### [4. SQL Developerの導入と接続設定](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/oracle/oracle-learning-material-04.html)
Oracle SQL Developerのインストールから、データベースへの接続設定までを実践的に学習します。接続エラーの対処法も詳しく解説します。

### [5. SQL Developerの基本操作](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/oracle/oracle-learning-material-05.html)
SQL Developerの画面構成と基本的な操作方法を習得します。SQLの実行、結果の確認、テーブル情報の閲覧など、日常的に使用する機能を網羅します。

### [6. Oracle基本SQL（テーブル作成・CRUD操作）](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/oracle/oracle-learning-material-06.html)
CREATE TABLE、INSERT、SELECT、UPDATE、DELETEといった基本的なSQL文を学習し、データベース操作の基礎を身に付けます。

### [7. Oracle SQL実践（結合・サブクエリ）](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/oracle/oracle-learning-material-07.html)
JOIN操作やサブクエリを使った実践的なデータ取得方法を学習します。実際のビジネスシーンで使用される複雑なクエリの作成方法を習得します。

### [8. PL/SQL入門](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/oracle/oracle-learning-material-08.html)
Oracleの手続き型言語PL/SQLの基本構文を学習します。ストアドプロシージャやファンクションの作成方法を理解します。

### [9. トランザクション管理とバックアップ基礎](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/oracle/oracle-learning-material-09.html)
トランザクション制御（COMMIT、ROLLBACK）とデータのエクスポート・インポートによる基本的なバックアップ方法を学習します。

### [10. パフォーマンス基礎とインデックス](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/oracle/oracle-learning-material-10.html)
インデックスの概念と作成方法、実行計画の確認方法など、パフォーマンス改善の基礎知識を習得します。

## 学習の進め方
1. **環境構築から始める**: 第1-4章で確実に環境を整え、SQL Developerでデータベースに接続できることを確認します。
2. **SQL Developerで実際に操作**: 第5章でツールの操作に慣れた後、第6-7章でSQLを実際に入力して実行します。
3. **エラーが出ても慌てない**: エラーメッセージを読み、原因を理解しながら進めます。各章にトラブルシューティングを含めています。
4. **サンプルデータで練習**: 各章で提供されるサンプルデータを使い、繰り返し練習することで理解を深めます。

## 推奨所要時間

| 章 | 内容 | 目安時間 |
|:--|:--|:--|
| 第1章 | Oracle概要と環境準備 | 45分 |
| 第2章 | Windows環境でのOracleインストール | 1.5時間 |
| 第3章 | Windows環境でのOracleインストール（Rancher Desktop利用） | 1.5時間 |
| 第4章 | SQL Developerの導入と接続設定 | 1時間 |
| 第5章 | SQL Developerの基本操作 | 45分 |
| 第6章 | Oracle基本SQL（テーブル作成・CRUD操作） | 1時間 |
| 第7章 | Oracle SQL実践（結合・サブクエリ） | 1.5時間 |
| 第8章 | PL/SQL入門 | 1.5時間 |
| 第9章 | トランザクション管理とバックアップ基礎 | 1時間 |
| 第10章 | パフォーマンス基礎とインデックス | 1時間 |
| **合計** | | **約11.5時間** |

## 関連リソース
- [Oracle SQL チートシート](/docs/cheatsheet/oracle-sql/)
- [SQL Developer ショートカットキー集](/docs/cheatsheet/sql-developer/)
- [Docker基礎ガイド](/docs/guide/cloud-infrastructure/docker/)
- [SQL基礎ガイド](/docs/guide/data-ai-category/database/sql/)

## 学習目標
このガイドを完了すると、以下のスキルを身につけることができます：
- Oracle Databaseの環境構築（Windows/Mac両対応）ができる
- SQL Developerを使用して、データベースに接続し基本操作ができる
- 基本的なSQL文（CRUD操作）を作成・実行できる
- テーブル結合やサブクエリを使った実践的なデータ取得ができる
- PL/SQLの基本構文を理解し、簡単なプロシージャを作成できる
- トランザクション管理とバックアップの基本概念を理解している
- インデックスによるパフォーマンス改善の基礎を理解している

## 次のステップ
このガイドライン完了後は、以下の学習に進むことをお勧めします：
- [Oracle管理者ガイド（DBA編）](/docs/guide/data-ai-category/database/oracle-dba/)
- [Oracle Cloud Infrastructure入門](/docs/guide/cloud-infrastructure/oci/)
- [Oracle認定資格試験対策](/docs/guide/certification/oracle-certified/)
- [PL/SQL応用プログラミング](/docs/guide/data-ai-category/database/plsql-advanced/)