# DB2 データベース入門ガイドライン

このガイドラインでは、IBM DB2 データベースの基礎を入門者向けに段階的に学習するためのカリキュラムを提供しています。Docker環境でのDB2セットアップとDB2開発ツールを使った開発手順を中心に構成されています。

## 前提条件

### 必要な環境
- Docker Desktop がインストール済み
- 8GB以上のメモリ
- 25GB以上の空きディスク容量
- IBM Developer アカウント（DB2 Dockerイメージ取得用）

### 参考リソース
- [IBM DB2 Docker Hub](https://hub.docker.com/r/ibmcom/db2) - IBM公式のDB2 Dockerイメージ
- [DB2 Knowledge Center](https://www.ibm.com/docs/en/db2/11.5) - IBM公式ドキュメント
- [IBM Developer DB2 Community](https://developer.ibm.com/databases/db2/) - DB2開発者コミュニティ

### 前提知識
- **必須**: SQL の基本的な知識（SELECT、INSERT、UPDATE、DELETE文）
- **推奨**: リレーショナルデータベースの基本概念

SQLの基礎知識がない場合は、先に[SQL学習ガイド](../sql/README.md)を学習することをお勧めします。

## 学習コンテンツ

### [1. DB2 データベースの基本概念と環境構築](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/db2/db2-learning-material-01.html)
IBM DB2の特徴と基本概念、エンタープライズデータベースとしての位置づけを理解し、Docker を使ったDB2 Community Edition環境の構築方法を学習します。

### [2. Docker環境でのDB2 セットアップ](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/db2/db2-learning-material-02.html)
IBM公式のDocker imagesを使用してDB2データベース環境を構築し、コンテナの起動・停止・設定方法を習得します。また、永続化ストレージとライセンス設定も学びます。

### [3. DB2クライアントツールの導入と基本操作](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/db2/db2-learning-material-03.html)
DB2 Command Line Processor（CLP）とData Studio（またはDBeaver）のインストールから基本的な使い方まで、データベース接続設定、SQL実行、オブジェクト管理の操作方法を学習します。

### [4. DB2 SQL の基本](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/db2/db2-learning-material-04.html)
DB2固有のSQL文法、データ型、制約、シーケンス、スキーマなど、DB2 SQLの基本的な機能と標準SQLとの違いを理解します。

### [5. テーブル設計とインデックス基礎](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/db2/db2-learning-material-05.html)
DB2でのテーブル設計の基本的な考え方、インデックスの種類と作成方法、テーブルスペース管理、基本的なパフォーマンス向上のポイントを学習します。

### [6. DB2 組み込み関数とストアドプロシージャ](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/db2/db2-learning-material-06.html)
DB2独自の組み込み関数（VARCHAR_FORMAT、COALESCE、CASEなど）、基本的な分析関数、簡単なストアドプロシージャの作成方法を習得します。

### [7. ユーザー管理と基本的なセキュリティ](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/db2/db2-learning-material-07.html)
DB2の基本的なユーザー管理、ロールとグループの概念、基本的なオブジェクト権限とデータベース権限の設定方法を学習します。

### [8. 基本的なデータベース管理操作](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/database/db2/db2-learning-material-08.html)
DB2 Export/Importユーティリティを使った基本的なデータ移行、バックアップ・リストア操作、基本的な監視コマンドについて学習します。

## 学習の進め方

1. **環境構築から開始**: まず「1. DB2 データベースの基本概念と環境構築」と「2. Docker環境でのDB2 セットアップ」を完了させて、学習環境を整えましょう。

2. **クライアントツールに慣れる**: 「3. DB2クライアントツールの導入と基本操作」で開発環境の使い方をマスターしてから、SQLの学習に進みましょう。

3. **段階的なスキルアップ**: DB2 SQLの基本から始めて、DB2固有の機能を段階的に習得しましょう。

4. **実践的な演習**: 各トピックで学んだ内容を実際のDocker環境で試し、サンプルデータベースを使って演習を行いましょう。

5. **プロジェクト実践**: 学習の後半では、小規模なデータベース設計プロジェクト（例：販売管理システム、人事管理システム）に取り組んで実践力を身につけましょう。

## 推奨学習期間

- **基礎習得コース** (1-5章): 4-5週間
- **実践活用コース** (6-8章): 2-3週間

## 関連リソース

- [DB2 チートシート](https://fcircle-biz.github.io/tech_docs/cheatsheet/databases/db2-cheatsheet.html) - DB2 SQLの主要な構文と関数をまとめた参考資料
- [SQL学習ガイド](../sql/README.md) - SQL基礎の学習ガイド（DB2学習の前提知識）
- [SQL チートシート](https://fcircle-biz.github.io/tech_docs/cheatsheet/databases/sql-cheatsheet.html) - SQL文の基本的な構文をまとめた参考資料

## 学習目標

このガイドを完了すると、以下のスキルを身につけることができます：

- Docker環境でのDB2データベース環境構築
- DB2クライアントツールによるDB2接続と基本操作
- DB2 SQLの基本構文と標準SQLとの違いの理解
- DB2固有のデータ型と制約の活用
- シーケンスとスキーマの作成・使用
- インデックスとテーブルスペースの基本的な管理
- DB2組み込み関数の効果的な使用
- 基本的なストアドプロシージャの作成
- 基本的なユーザー管理とセキュリティ設定
- Export/Importによる基本的なデータ移行操作

## 次のステップ

このガイドライン完了後は、以下の学習に進むことをお勧めします：

- [JDBC学習ガイドライン](../../java-ecosystem/jdbc/README.md) - JavaアプリケーションからのDB2接続
- [SQL最適化ガイドライン](../sql-optimization/README.md) - DB2でのSQL最適化技術