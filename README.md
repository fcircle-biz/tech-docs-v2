# 技術ドキュメントリポジトリ

ソフトウェア開発およびIT関連トピックに関する学習ガイドをHTML形式で提供する技術文書集です。

## 📋 目次

-   [📖 概要](#-概要)
-   [🗺️ 学習パス](#%EF%B8%8F-学習パス)
-   [📖 学習ガイドライン](#-学習ガイドライン)
-   [📖 スライド資料](#-スライド資料)
-   [📖 チュートリアル](#-チュートリアル)
-   [📖 プラクティス](#-プラクティス)
-   [📖 実践課題](#-実践課題)
-   [📖 チートシート](#-チートシート)

------------------------------------------------------------------------

## 📖 概要

このリポジトリは、プログラミング初心者から上級者まで幅広く対応した日本語技術ドキュメント集です。各技術領域において、体系的な学習ガイドと実践的なチュートリアルを提供しています。

### 特徴

-   **HTML形式の教材**: ブラウザで直接閲覧可能な見やすいドキュメント
-   **段階的学習**: 基礎から応用まで順序立てて学べる構成
-   **実践的内容**: ユーザー管理システム開発を通じた実践的な学習
-   **多様な技術領域**: Java、Python、.NET、JavaScript、データベース、AI等の幅広いカバレッジ

------------------------------------------------------------------------

## 🗺️ 学習パス

特定の目標に向けた学習ロードマップを提供します。チュートリアルと各種学習ガイドを組み合わせた効果的な学習順序を示します。

### フルスタック開発

-   [**Next.js フルスタック学習パス**](docs/learning-paths/nextjs-fullstack-learning-path.md) - Next.js + FastAPI + PostgreSQL Todoアプリチュートリアルを効果的に学習するためのロードマップ。実践→深掘り型のアプローチで、まずチュートリアルで全体を体験し、その後各技術（Webアプリ開発入門、JavaScript、TypeScript、React、Next.js、FastAPI、SQL、SQLModel、Docker）を深く学習

------------------------------------------------------------------------

## 📖 学習ガイドライン

各技術の基礎から応用まで段階的に学べる包括的な学習ガイドです。理論的な理解と実践的なスキルを両立できるよう構成されています。

### プログラミング言語

#### Python

-   [**Python入門学習ガイド**](docs/guide/programming-languages/python-ecosystem/python-beginner/README.md) - プログラミング完全未経験者向けPython入門12章構成カリキュラム。変数、条件分岐、繰り返し、関数、ファイル操作など、プログラミングの基礎を段階的に学習
-   [**Pythonデータ分析入門学習ガイド**](docs/guide/programming-languages/python-ecosystem/python-data-analysis/README.md) - Python基礎習得者向けデータ分析入門16章構成カリキュラム。pandas・NumPy・matplotlibを使い、「データ取得 → 加工 → 分析 → 可視化」の実務に必要な一連の流れを体系的に学習（推奨所要時間: 約23時間）
-   [**Python DB-API入門学習ガイド**](docs/guide/programming-languages/python-ecosystem/python-db-api/README.md) - Python標準のDB-API 2.0仕様に基づき、psycopg2ライブラリを使った実践的なデータベースプログラミングを12章で習得。コネクション管理、CRUD操作、パラメータ化クエリ、トランザクション制御、エラーハンドリング、接続プールまで体系的に学習
-   [**Django学習ガイド**](docs/guide/programming-languages/python-ecosystem/django/README.md) - Djangoフレームワークを使用したWebアプリケーション開発の基礎から実践まで15章完成カリキュラム。MVCパターン、モデル、ビュー、テンプレート、フォーム処理、セキュリティ対策を習得
-   [**FastAPI学習ガイド**](docs/guide/programming-languages/python-ecosystem/fastapi/README.md) - FastAPIを使用した高性能WebAPI開発の基礎から実践まで10章完成カリキュラム
-   [**SQLAlchemy学習ガイド**](docs/guide/programming-languages/python-ecosystem/sqlalchemy/README.md) - SQLAlchemyを使用したPythonデータベースプログラミングの基礎から実践まで8章完成カリキュラム
-   [**SQLModel学習ガイド**](docs/guide/programming-languages/python-ecosystem/sqlmodel/README.md) - SQLModelを使用したモダンなPythonデータベースプログラミング8章完成カリキュラム
-   [**Streamlit学習ガイド**](docs/guide/programming-languages/python-ecosystem/streamlit/README.md) - Streamlitを使用したWebアプリケーション開発の基礎から実践まで10章完成カリキュラム
-   [**pytest入門学習ガイド**](docs/guide/programming-languages/python-ecosystem/pytest/README.md) - Python基礎習得者向けpytestテストフレームワーク入門16章構成カリキュラム。テストの書き方とテスト駆動開発の考え方を身につけるための実践的な内容。unittestとの比較も交えながら、pytestの強力な機能と簡潔な書き方を習得

#### Java

-   [**Java学習ガイド**](docs/guide/programming-languages/java-ecosystem/java/README.md) - Java言語基礎から高度技術まで14章完成カリキュラム
-   [**JDBC学習ガイド**](docs/guide/programming-languages/java-ecosystem/jdbc/README.md) - JDBC基礎からパフォーマンスチューニングまで10章完成カリキュラム
-   [**JSP/Servlet学習ガイド**](docs/guide/programming-languages/java-ecosystem/jsp/README.md) - JSP/Servlet基礎からMVCアーキテクチャまで10章完成カリキュラム
-   [**JUnit学習ガイド**](docs/guide/programming-languages/java-ecosystem/junit/README.md) - JUnit 5を使用した単体テストの基礎から応用まで7章完成カリキュラム
-   [**Spring Framework学習ガイド**](docs/guide/programming-languages/java-ecosystem/spring/README.md) - Spring基礎からSecurity機能まで11章完成カリキュラム
-   [**Struts 1.x学習ガイド**](docs/guide/programming-languages/java-ecosystem/struts/README.md) - Apache Struts 1.xフレームワークの基礎から実践的なタスク管理アプリケーション開発まで12章完成カリキュラム。MVCパターン、ActionForm、バリデーション、データベース連携、国際化対応を習得

#### JavaScript/Node.js

-   [**JavaScript学習ガイド**](docs/guide/programming-languages/javascript-ecosystem/javascript-beginner/README.md) - プログラミング未経験者向けJavaScript入門12章構成カリキュラム
-   [**Node.js入門学習ガイド**](docs/guide/programming-languages/javascript-ecosystem/nodejs-beginner/README.md) - Node.jsの基礎をJavaScript基礎知識を持つ初心者向けに段階的に学習するためのカリキュラム。サーバーサイドJavaScriptの世界に踏み出し、モジュールシステム、非同期処理、Express、REST APIまで12章で習得
-   [**TypeScript学習ガイド**](docs/guide/programming-languages/javascript-ecosystem/typescript/README.md) - TypeScriptの基礎をプログラミング完全未経験者向けに段階的に学習するためのカリキュラム。型システムを活用した安全なコード作成を15章で完全習得
-   [**React学習ガイド**](docs/guide/programming-languages/javascript-ecosystem/react/README.md) - Reactライブラリを使用したモダンなWebアプリケーション開発の基礎を入門者向けに段階的に学習するためのカリキュラム（12章構成）
-   [**Next.js学習ガイド**](docs/guide/programming-languages/javascript-ecosystem/nextjs/README.md) - Next.jsフレームワークを使用したモダンなReactアプリケーション開発の基礎を入門者向けに段階的に学習するためのカリキュラム（15章構成）

#### .NET

-   [**C#入門学習ガイド**](docs/guide/programming-languages/csharp-ecosystem/csharp-beginner/README.md) - プログラミング完全未経験者向けC#入門13章構成カリキュラム。Visual Studioの使い方、変数、演算子、条件分岐、繰り返し、配列、メソッド、クラス、オブジェクト指向、例外処理まで段階的に学習し、家計簿アプリ開発の総合演習で実践力を習得
-   [**VB.NET入門学習ガイド**](docs/guide/programming-languages/dotnet-ecosystem/vbnet-beginner/README.md) - プログラミング完全未経験者向けVB.NET入門12章構成カリキュラム。変数、条件分岐、繰り返し、配列、関数、クラス、オブジェクト指向など、VB.NETの基礎を段階的に学習
-   [**ASP.NET(VB.NET)学習ガイド**](docs/guide/programming-languages/dotnet-ecosystem/aspnet-vb/README.md) - ASP.NET Web Forms基礎から実践的なユーザー管理システム開発まで10章完成カリキュラム
-   [**ASP.NET Core(VB.NET)学習ガイド**](docs/guide/programming-languages/dotnet-ecosystem/aspnetcore-vb/README.md) - ASP.NET Core MVCとEntity Framework Coreを使用したモダンWebアプリケーション開発11章完成カリキュラム

#### PHP

-   [**PHP学習ガイド**](docs/guide/programming-languages/php-ecosystem/php/README.md) - PHP基礎から実践的なWebアプリケーション開発まで10章完成カリキュラム

#### Ruby

-   [**Ruby入門学習ガイド**](docs/guide/programming-languages/ruby-ecosystem/ruby/README.md) - プログラミング完全未経験者向けRuby入門12章構成カリキュラム。変数、演算子、条件分岐、繰り返し、配列、ハッシュ、メソッド、ファイル操作、クラス、オブジェクト指向の基礎まで段階的に学習し、じゃんけんゲーム・ToDoリストなど実用的なプログラム作成で実践力を習得

#### R

-   [**R言語入門学習ガイド**](docs/guide/programming-languages/r-ecosystem/r-language-beginner/README.md) - プログラミング未経験者向けR言語入門12章構成カリキュラム。RStudioの使い方、変数、ベクトル、データフレーム、条件分岐、繰り返し、関数、グラフ作成、ファイル操作まで段階的に学習

#### C/C++

-   [**C/C++入門学習ガイド**](docs/guide/programming-languages/c-cpp-ecosystem/cpp-beginner/README.md) - プログラミング完全未経験者向けC/C++入門15章構成カリキュラム。C言語の基礎（変数、演算子、条件分岐、繰り返し、配列、関数、ポインタ、構造体）からC++の特徴（クラス、オブジェクト指向、STL、ファイル入出力）まで段階的に学習し、実践プログラミングで総合力を習得

#### COBOL

-   [**COBOL学習ガイド**](docs/guide/programming-languages/cobol-ecosystem/cobol/README.md) - COBOL基礎から実践的なビジネスロジックまで10章完成カリキュラム

#### Dart/Flutter

-   [**Flutter入門学習ガイド**](docs/guide/programming-languages/dart-ecosystem/flutter/README.md) - プログラミング未経験者向けFlutter入門20章構成カリキュラム。Googleが開発したクロスプラットフォーム開発フレームワークで、1つのコードからiOS、Android、Web、デスクトップアプリを作成。Dart言語の基礎（変数、条件分岐、繰り返し、関数、クラス）、ウィジェットの基本、レイアウト、状態管理、画面遷移、Material Design、HTTP通信、ローカルデータ保存まで段階的に学習し、ToDoアプリ作成の総合演習で実践力を習得

### Webテクノロジ

-   [**HTML/CSS学習ガイド**](docs/guide/web-technologies/html-css/README.md) - HTML/CSSの基礎から実践的なWebページ制作まで段階的に学習するためのカリキュラム。15章構成でWebデザインの基本をマスター
-   [**Bootstrap学習ガイド**](docs/guide/web-technologies/bootstrap/README.md) - Bootstrapフレームワークを使用したレスポンシブWebデザインの基礎から実践まで10章完成カリキュラム。グリッドシステム、UIコンポーネント、カスタマイズ方法まで体系的に習得
-   [**Tailwind CSS学習ガイド**](docs/guide/web-technologies/tailwind-css/README.md) - Tailwind CSSフレームワークを使用したユーティリティファーストのWebデザインを10章で完全習得
-   [**Webアプリ開発入門学習ガイド**](docs/guide/web-technologies/webapp-intro/README.md) - プログラミング未経験者向けWebアプリケーション開発入門14章構成カリキュラム。インターネットとWebの仕組み、ネットワーク基礎、HTTPプロトコル、REST API、データベース、3層構造、開発者ツールまで段階的に学習し、Webアプリケーション開発の全体像を習得
-   [**Webhook入門学習ガイド**](docs/guide/web-technologies/webhook/README.md) - プログラミング未経験者向けWebhook入門14章構成カリキュラム。Webhookとは何か、APIとの違い（プル型/プッシュ型）、HTTPの基礎、JSONデータの読み方、Webhookの登録・設定、チャットツール/決済/GitHub等の活用事例、セキュリティ、エラーとリトライ、ノーコードツールでの活用まで段階的に学習（推奨所要時間: 約10時間）

### 開発手法・プロセス

-   [**アジャイル開発学習ガイド**](docs/guide/development-processes/agile-development/README.md) - アジャイル開発の基礎から実践的なScrum、Kanbanまで10章完成カリキュラム
-   [**ウォーターフォール開発学習ガイド**](docs/guide/development-processes/waterfall-development/README.md) - ウォーターフォール開発の基礎から実践的なプロジェクト管理まで10章完成カリキュラム。要件定義、基本設計、詳細設計、実装、テスト、リリース・運用、品質管理、アジャイルとの比較まで体系的に学習
-   [**DevOps入門学習ガイド**](docs/guide/development-processes/devops-beginner/README.md) - プログラミング未経験者向けDevOps入門12章構成カリキュラム。ITとソフトウェアの世界、DevOpsの基本概念、コンピュータの仕組み、コマンドライン基礎、バージョン管理、インターネット・サーバー・開発プロセス、自動化の考え方、コンテナ技術、クラウドサービス、キャリアパスまで、身近な例を使いながら丁寧に解説
-   [**Git/GitHub学習ガイド**](docs/guide/development-processes/git-github/README.md) - Git/GitHubの基礎から実践的なバージョン管理まで15章完成カリキュラム。バージョン管理の概念理解、環境構築、コマンドライン操作（基本操作、ブランチ、マージ、プルリクエスト、トラブルシューティング）、VS Codeでの統合Git機能まで完全未経験者向けに段階的に習得
-   [**ソフトウェアテスト入門学習ガイド**](docs/guide/development-processes/software-testing/README.md) - プログラム未経験者向けソフトウェアテスト入門12章構成カリキュラム。テストの基本原則、テストプロセス、テストレベル（単体・結合・システム・受入）、テストタイプ（機能・非機能）、ブラックボックステスト技法（同値分割法・境界値分析）、ホワイトボックステスト技法、テストドキュメント作成、バグ報告、テスト自動化、アジャイル開発でのテストまで段階的に習得
-   [**アルゴリズム入門学習ガイド**](docs/guide/development-processes/algorithm-basics/README.md) - プログラミング未経験者向けアルゴリズム入門カリキュラム（7セクション・240分構成）。「アルゴリズムとは何か」という基本から始め、順次・分岐・繰り返しの3つの基本構造、フローチャートの記号とルール、演習を通じた実践まで、身近な例を交えながら段階的に学習
-   [**Claude Code入門学習ガイド**](docs/guide/development-processes/claude-code/README.md) - 入門者向けClaude Code（Anthropic公式のエージェント型コーディングCLI）入門14章構成カリキュラム。AI支援開発の基礎知識、インストールと初期設定、基本操作、ファイル編集とコードベース探索、スラッシュコマンド、CLAUDE.mdとメモリ・コンテキスト管理、Git・GitHub連携、権限と設定、MCP連携、サブエージェントと自動化、実践ワークフロー、トラブルシューティングまで段階的に学習
-   [**Codex入門学習ガイド**](docs/guide/development-processes/codex/README.md) - 入門者向けCodex（OpenAI公式のエージェント型コーディングCLI）入門14章構成カリキュラム。AI支援開発の基礎知識、インストールと初期設定、基本操作と最初のセッション、ファイルの読み書きとコード編集、コードベースの探索、承認モードとサンドボックス、AGENTS.mdとメモリ・コンテキスト管理、設定ファイル（config.toml）とプロファイル、Git・GitHub連携、MCPによる外部ツール連携、非対話実行と自動化（codex exec）、実践ワークフロー、トラブルシューティングまで段階的に学習

### 設計手法・モデリング

#### ソフトウェア設計

-   [**UML学習ガイド**](docs/guide/design-modeling/software-design/uml/README.md) - UML（統一モデリング言語）の基礎から実践的なシステム設計まで14章完成カリキュラム。無料ツール（draw.io、PlantUML）の使い方、ユースケース図、クラス図、シーケンス図、アクティビティ図、ステートマシン図、コンポーネント図、デプロイメント図、実践演習、チーム開発での活用まで完全未経験者向けに段階的に習得
-   [**ドメイン駆動設計（DDD）入門学習ガイド**](docs/guide/design-modeling/software-design/ddd/README.md) - ドメイン駆動設計の基礎を初心者向けに段階的に学習するための16章完成カリキュラム。ユビキタス言語、ドメインモデル、エンティティ、値オブジェクト、集約、リポジトリ、ドメインサービス、ファクトリなどの戦術的パターンから、境界づけられたコンテキスト、コンテキストマップ、レイヤードアーキテクチャ、ドメインイベントなどの戦略的パターンまで、実践的な例とともに習得
-   [**要求工学学習ガイド**](docs/guide/design-modeling/software-design/requirements-engineering/README.md) - 要求工学の基礎理論から実践的な要求分析・管理まで10章完成カリキュラム

#### データモデリング

-   [**ER図入門学習ガイド**](docs/guide/design-modeling/data-modeling/er-diagram/README.md) - ER図（Entity-Relationship Diagram）によるデータベース設計の基礎から実践まで15章完成カリキュラム。無料ツールdraw.ioを使用した実践的なER図作成手法、エンティティ・属性・リレーションシップの基本概念、カーディナリティ、IE記法、正規化、物理設計まで完全未経験者向けに段階的に習得

#### UI/UXデザイン

-   [**Figma入門学習ガイド**](docs/guide/design-modeling/ui-ux-design/figma/README.md) - デザインツール未経験者向けFigma入門11章構成カリキュラム。アカウント作成、図形描画、色付け、テキスト入力、整列・配置、フレーム、画像取り込み、コンポーネント、プロトタイプ、共同編集、実践SNS画像作成まで段階的に学習し、UIデザインの基礎を習得（推奨所要時間: 約10時間）

### クラウド/インフラ

-   [**クラウドコンピューティング学習ガイド**](docs/guide/cloud-infrastructure/cloud-computing/README.md) - クラウドコンピューティングの基本概念からIaaS、PaaS、SaaSまで10章完成カリキュラム
-   [**AWS基礎編学習ガイド**](docs/guide/cloud-infrastructure/aws-basic/README.md) - AWS（Amazon Web Services）の基礎から実践的なクラウドサービス活用まで12章完成カリキュラム。プログラミング完全未経験者向けにクラウドの基本概念から主要サービス（EC2、S3、RDS、VPC、IAM、CloudWatch、Lambda）まで身近な例えを使いながら丁寧に解説
-   [**AWS DVA-C02入門学習ガイド**](docs/guide/cloud-infrastructure/aws-dva-c02-intro/README.md) - AWS Certified Developer - Associate（DVA-C02）資格取得に向けた知識基盤を構築するカリキュラム
-   [**AWS SAA-C03入門学習ガイド**](docs/guide/cloud-infrastructure/aws-saa-c03-intro/README.md) - AWS Certified Solutions Architect - Associate（SAA-C03）資格取得に向けた知識基盤を構築する12章完成カリキュラム。Well-Architectedフレームワーク、ELB、Auto Scaling、Route 53、VPC設計、データベース・ストレージ選択、セキュリティベストプラクティス、サーバーレスアーキテクチャまで体系的に習得
-   [**AWS SAP-C02入門学習ガイド**](docs/guide/cloud-infrastructure/aws-sap-c02-intro/README.md) - AWS Solutions Architect Professional（SAP-C02）資格取得に向けた知識基盤を構築する15章完成カリキュラム。Auto Scaling、ELB、Route 53、CloudFront、高可用性設計、災害復旧戦略など、エンタープライズ環境に求められる高度なインフラ設計手法を体系的に習得
-   [**AWS Terraform学習ガイド**](docs/guide/cloud-infrastructure/aws-terraform/README.md) - AWS上でTerraformを使用したInfrastructure as Code（IaC）の基礎から実践まで10章完成カリキュラム。HCL構文、VPC/EC2構築、ステート管理、モジュール化、CI/CD統合まで体系的に習得
-   [**Docker学習ガイド**](docs/guide/cloud-infrastructure/docker/README.md) - Dockerの基礎から実践的なコンテナ運用まで10章完成カリキュラム。Rancher Desktopを使用してコンテナ技術の基本概念、イメージ管理、Dockerfile作成、Docker Compose、ボリューム、ネットワーク、マルチコンテナアプリケーション構築、トラブルシューティングまで初心者向けに段階的に習得

### データ/AI

#### データベース

-   [**SQL学習ガイド**](docs/guide/data-ai-category/database/sql/README.md) - SQL基本概念からPostgreSQL高度機能まで12章完成カリキュラム
-   [**PostgreSQL入門学習ガイド**](docs/guide/data-ai-category/database/postgresql/README.md) - PostgreSQLの特徴と実践的な活用方法を12章で習得。pgAdmin操作、豊富なデータ型（配列、JSON、UUID）、インデックス詳解、トランザクション、ビュー、バックアップ、権限管理まで体系的に学習
-   [**MySQL入門学習ガイド**](docs/guide/data-ai-category/database/mysql/README.md) - MySQLの特徴と実践的な活用方法を12章で習得。MySQL Workbench操作、データ型選択、ストレージエンジン（InnoDB/MyISAM）、インデックス、トランザクション、ビュー、ストアドプロシージャ、文字コード設定、バックアップ、権限管理まで体系的に学習
-   [**Oracle学習ガイド**](docs/guide/data-ai-category/database/oracle/README.md) - Oracle Database入門から基本的な運用まで10章完成カリキュラム
-   [**PL/SQL学習ガイド**](docs/guide/data-ai-category/database/plsql/README.md) - Oracle PL/SQLの基礎から応用まで12章完成カリキュラム
-   [**DB2学習ガイド**](docs/guide/data-ai-category/database/db2/README.md) - IBM DB2データベース入門からDocker環境での運用管理まで8章完成カリキュラム

#### 統計解析

-   [**統計解析学習ガイド**](docs/guide/data-ai-category/statistical-analysis/README.md) - 統計学基礎から推測統計・仮説検定まで10章完成カリキュラム

#### 機械学習

-   [**機械学習入門学習ガイド**](docs/guide/data-ai-category/data-ai/ml-beginner/README.md) - プログラミング未経験者向け機械学習入門12章構成カリキュラム。AIの仕組み、データの見方、予測・分類・グループ分けの基礎、ノーコードAI体験、データ品質、評価指標、ビジネス活用事例、AIの限界まで段階的に学習し、機械学習の全体像を習得

#### SAS

-   [**SAS学習ガイド**](docs/guide/data-ai-category/data-ai/sas/README.md) - SASによるデータ分析と統計処理の基礎から実践的な応用まで13章完成カリキュラム
-   [**SAS中級学習ガイド**](docs/guide/data-ai-category/data-ai/sas-intermediate/README.md) - SAS入門修了者向け。大規模データ処理、高度な統計手法、マクロプログラミングなど実務で即戦力となる中級テクニックを10章で習得
-   [**SAS Viya学習ガイド**](docs/guide/data-ai-category/data-ai/sas-viya/README.md) - SAS Viyaのクラウドネイティブアーキテクチャ、CASエンジン、Visual Analytics、Model Studioによる機械学習、Python/R連携、API活用まで15章完成カリキュラム

#### 生成AI/LLM

-   [**生成AI入門学習ガイド**](docs/guide/data-ai-category/generative-ai/README.md) - プログラミング未経験者向け生成AI入門15章構成カリキュラム。生成AIの基礎概念、ChatGPT活用、プロンプトエンジニアリング、ビジネス文書作成、画像生成AI、ハルシネーション対策、セキュリティ、倫理的利用、業務効率化の実践まで段階的に学習し、生成AIを安全かつ効果的に活用するスキルを習得
-   [**Dify入門学習ガイド**](docs/guide/data-ai-category/data-ai/dify/README.md) - Difyを使ったノーコード/ローコードAIアプリ開発18章完成カリキュラム。Dify基礎、チャットボット作成、プロンプトオーケストレーション、RAG実装、ワークフロー設計、エージェント機能、外部API連携、アプリ公開・運用まで段階的に学習し、実務で使えるAIアプリケーション開発スキルを習得
-   [**LangChain入門学習ガイド**](docs/guide/data-ai-category/data-ai/langchain/README.md) - LangChainを使ったLLMアプリ開発18章完成カリキュラム。LangChain基礎、プロンプトテンプレート、LCEL、Document Loaders、Embeddings、Vector Stores、RAG実装、Memory、Agent、Toolsまで段階的に学習し、Pythonで実用的なLLMアプリケーションを開発するスキルを習得

### SaaS/PaaS/アプリケーション

-   [**SAP学習ガイド**](docs/guide/business-saas/sap/README.md) - SAP ERP基礎から実践的な業務プロセスまで10章完成カリキュラム。SAP S/4HANA、ABAP、Fiori、SAP HANA等のモダンなSAP技術を体系的に習得
-   [**OutSystems学習ガイド**](docs/guide/business-saas/outsystems/README.md) - OutSystemsローコード開発プラットフォームの基礎から実践的なアプリケーション開発まで14章完成カリキュラム
-   [**Excel入門学習ガイド**](docs/guide/business-saas/excel-beginner/README.md) - パソコン初心者向けExcel入門11章構成カリキュラム。セル入力、保存、表作成、計算、関数、書式設定、並べ替え・フィルター、印刷、グラフ作成まで段階的に学習
-   [**VBA学習ガイド**](docs/guide/business-saas/vba/README.md) - VBA基礎からExcel自動化まで12章完成カリキュラム
-   [**Access VBA学習ガイド**](docs/guide/business-saas/access-vba/README.md) - Access VBA基礎からデータベース自動化、業務システム構築まで12章完成カリキュラム

### 業務知識・ドメイン

-   [**財務・管理会計学習ガイド**](docs/guide/business-domain-knowledge/finance-accounting/README.md) - 財務・管理会計の基礎を入門者向けに段階的に学習するための10章完成カリキュラム。会計の基本概念、簿記の基本と仕訳、財務三表（貸借対照表・損益計算書・キャッシュ・フロー計算書）の構造と読み方、決算処理と会計サイクル、財務分析（収益性・安全性・効率性・成長性）、管理会計の基礎（原価計算・予算管理）、ビジネスでの活用（損益分岐点分析・投資判断・プレゼンテーション）まで、経理部門以外の方でも企業活動を数字で理解できる実践的なカリキュラム
-   [**ビジネス文書入門学習ガイド**](docs/guide/business-domain-knowledge/business-docs-intro/README.md) - ビジネス文書作成の基礎を入門者向けに段階的に学習するための10章完成カリキュラム。ビジネス文書とは何か、敬語と言葉遣い、基本構造（5W1H、PREP法）、社内連絡・報告の書き方、ビジネスメールの基本と実践、報告書・議事録・提案書の作成、実践演習と総まとめまで、社会人1年目の方や初めてビジネス文書を書く方でも安心して取り組める内容

### 資格・認定試験

-   [**ITパスポート試験学習ガイドライン**](docs/guide/certification/it-passport/README.md) - ITパスポート試験（情報処理技術者試験の入門レベル国家資格）の合格を目指す方向けに、体系的かつ効率的な学習カリキュラムを提供。ストラテジ系、マネジメント系、テクノロジ系の全分野を網羅し、過去問演習まで10章完成カリキュラム
-   [**ITパスポート試験 練習問題集**](docs/guide/certification/it-passport-practice/README.md) - ITパスポート試験の各章・各節ごとの練習問題を4択形式で提供。コンピュータ、データベース、ネットワーク、セキュリティ、システム導入・開発、プロジェクトマネジメント、企業活動、ITの活用、法務・財務まで10章完成（約290問収録）

------------------------------------------------------------------------

## 📖 スライド資料

PDF形式のスライド教材をブラウザで閲覧できる教材です。

### 開発手法・プロセス

-   [**アルゴリズム入門**](https://fcircle-biz.github.io/tech_docs/slide/development-processes/algorithm-basics/index.html) - アルゴリズムの基本概念から実践的な活用方法まで学べるスライド教材
-   [**VSCode入門**](https://fcircle-biz.github.io/tech_docs/slide/development-processes/vscode-basics/index.html) - Visual Studio Codeの基本操作から実践的な活用方法まで学べるスライド教材
-   [**SourceTree入門**](https://fcircle-biz.github.io/tech_docs/slide/development-processes/sourcetree-basics/index.html) - SourceTreeを使用したGitの基本操作から実践的なバージョン管理まで学べるスライド教材

### SaaS/PaaS/アプリケーション

#### Microsoft Office

-   [**Excel入門**](https://fcircle-biz.github.io/tech_docs/slide/business-saas/microsoft-office/excel-basics/index.html) - Excelの基本操作から実践的な活用方法まで学べるスライド教材
-   [**Word入門**](https://fcircle-biz.github.io/tech_docs/slide/business-saas/microsoft-office/word-basics/index.html) - Wordの基本操作から文書作成、表・画像の挿入まで学べるスライド教材
-   [**Access入門**](https://fcircle-biz.github.io/tech_docs/slide/business-saas/microsoft-office/access-basics/index.html) - Accessの基本操作からデータベース設計、クエリ、フォーム、レポート、マクロまで学べるスライド教材

### 資格・認定試験

-   [**ITパスポート試験入門**](https://fcircle-biz.github.io/tech_docs/slide/certification/it-passport-intro/index.html) - ITパスポート試験の概要と学習方法を学べるスライド教材

------------------------------------------------------------------------

## 📖 チュートリアル

実際にコードを書きながら学ぶ実践的なチュートリアル集です。各チュートリアルはユーザー管理システムの開発を通じて、フレームワークの理解を深めます。

### プログラミング言語

#### Python

-   [**Django + PostgreSQL実践チュートリアル**](docs/tutorial/python-ecosystem/django/README.md) - DjangoフレームワークとPostgreSQL（Docker環境）を使用したモダンなPython Webアプリケーション開発の実践的なチュートリアル。Windows環境での開発を前提に、Docker DesktopによるPostgreSQLコンテナ管理からDjangoの基本機能、実用的なユーザー管理システムまでを段階的に実装（9章構成）
-   [**FastAPI + SQLAlchemy実践チュートリアル**](docs/tutorial/python-ecosystem/fastapi-sqlalchemy/README.md) - FastAPIとSQLAlchemyを使用したモダンなWebアプリケーション開発の実践的なチュートリアル（7章構成）
-   [**Streamlit + SQLModel実践チュートリアル**](docs/tutorial/python-ecosystem/streamlit-sqlmodel/README.md) - StreamlitとSQLModelを使用したモダンなWebアプリケーション開発の実践的なチュートリアル（6章構成）

#### Java

-   [**Spring AI + Ollama + Qwen3実践チュートリアル**](docs/tutorial/java-ecosystem/spring-ai/README.md) - Spring AIフレームワークとOllama、Qwen3大規模言語モデルを使用した、モダンなAI対話型Webアプリケーション開発の実践的なチュートリアル。Docker環境でローカルLLMを構築し、簡潔なサーバーサイドレンダリングでAIチャット機能を実装（5章構成）
-   [**Spring Boot + Gradle実践チュートリアル**](docs/tutorial/java-ecosystem/spring-boot-gradle/README.md) - Spring BootとGradleを使用したモダンなJava Webアプリケーション開発の実践的なチュートリアル。Docker環境でのPostgreSQL連携、Spring MVC、Spring Data JPA、Thymeleafによるユーザー管理システム開発（10章構成）
-   [**JSP/Servlet/JDBC実践チュートリアル**](docs/tutorial/java-ecosystem/jsp-servlet-jdbc/README.md) - Eclipse IDEを使用したJavaのWebアプリケーション開発基礎技術（JSP、Servlet、JDBC）を学ぶ実践的なチュートリアル。MVCパターンに基づいたユーザー管理システム開発（7章構成）
-   [**Struts 1.x実践チュートリアル**](docs/tutorial/java-ecosystem/struts1/README.md) - Apache Struts 1.xフレームワークを使用したWebアプリケーション開発の実践的なチュートリアル（6章構成）

#### JavaScript/Node.js

-   [**Next.js + FastAPI + PostgreSQL Todoアプリ実践チュートリアル**](docs/tutorial/javascript-ecosystem/nextjs-fastapi-todo/README.md) - Next.js（フロントエンド）、FastAPI（バックエンド）、PostgreSQL（データベース）を使用したフルスタックWebアプリケーション開発の実践的なチュートリアル。Docker環境でのデータベース構築からCRUD操作まで、Windows環境で一からTodoアプリを開発（8章構成）

#### .NET

-   [**ASP.NET(VB.NET)実践チュートリアル**](docs/tutorial/dotnet-ecosystem/aspnet-vb/README.md) - ASP.NET Web FormsとVB.NETによるユーザー管理システム開発の実践的なチュートリアル（6章構成）
-   [**ASP.NET Core MVC(VB.NET)実践チュートリアル**](docs/tutorial/dotnet-ecosystem/aspnet-core-mvc-vb/README.md) - ASP.NET Core MVCとEntity Framework Coreを使用したモダンなWebアプリケーション開発の実践的なチュートリアル（7章構成）

#### PHP

-   [**PHP実践チュートリアル**](docs/tutorial/php-ecosystem/php/README.md) - PHPの基本文法からデータベース連携まで、初心者向けユーザー管理システム開発チュートリアル（6章構成）

### クラウド/インフラ

-   [**AWS サーバーレス Todoアプリ完全入門チュートリアル**](docs/tutorial/cloud-infrastructure/aws-serverless-todo/README.md) - プログラミング未経験者向けAWSサーバーレスアーキテクチャチュートリアル。AWS Amplify（Next.js）、API Gateway、Lambda、DynamoDBを使用した本格的なWebアプリケーション開発（10ステップ構成）。AWSアカウント作成、Lambda関数作成、REST API構築、Next.jsフロントエンド開発、インターネット公開まで、クラウド上で動作するTodoアプリを一から構築

### SaaS/PaaS/アプリケーション

-   [**OutSystems実践チュートリアル**](docs/tutorial/business-saas/outsystems/README.md) - OutSystemsローコード開発プラットフォームを使用したユーザー管理システム開発の実践的なチュートリアル（10章構成）

------------------------------------------------------------------------

## 📖 プラクティス

練習問題と演習を通じて実践的なスキルを身につけるための資料です。

### プログラミング言語

#### Java

-   [**Java研修演習課題集**](docs/practice/programming-languages/java-ecosystem/java-training/README.md) - Java基本文法から実践的なプログラミングまで段階的に学べる演習課題集。変数、演算、条件分岐、繰り返し、配列、クラス、継承、例外処理など、Javaの主要な文法要素を6回に分けて体系的に習得

------------------------------------------------------------------------

## 📖 実践課題

仕様書とモック画面を参考に、自力でシステムを構築する実践課題です。

### フルスタック開発

-   [**注文管理システム実践課題**](docs/assignment/nextjs-order-management/README.md) - Next.js + FastAPI + PostgreSQLを使用した注文管理システム開発の実践課題。顧客管理、商品管理、注文管理、ダッシュボード機能を実装し、複数テーブルのリレーション、JOIN操作、ステータス管理、集計機能を習得。Todoアプリチュートリアル完了者向け（6ステップ構成、推奨所要時間: 約110〜170時間）

------------------------------------------------------------------------

## 📖 チートシート

技術要素を1ページでまとめたクイックリファレンス資料です。

| カテゴリ | チートシート |
|---------|-------------|
| **Python** | [Python入門](https://fcircle-biz.github.io/tech_docs/cheatsheet/programming-languages/python-ecosystem/python-beginner/index.html) ・ [Python DB-API](https://fcircle-biz.github.io/tech_docs/cheatsheet/programming-languages/python-ecosystem/python-db-api/index.html) ・ [FastAPI](https://fcircle-biz.github.io/tech_docs/cheatsheet/programming-languages/python-ecosystem/fastapi/index.html) ・ [SQLModel](https://fcircle-biz.github.io/tech_docs/cheatsheet/programming-languages/python-ecosystem/sqlmodel/index.html) |
| **Java** | [Java基礎](https://fcircle-biz.github.io/tech_docs/cheatsheet/programming-languages/java-ecosystem/java-basics/index.html) ・ [JDBC](https://fcircle-biz.github.io/tech_docs/cheatsheet/programming-languages/java-ecosystem/jdbc/index.html) ・ [Servlet/JSP](https://fcircle-biz.github.io/tech_docs/cheatsheet/programming-languages/java-ecosystem/servlet-jsp/index.html) ・ [Spring Core](https://fcircle-biz.github.io/tech_docs/cheatsheet/programming-languages/java-ecosystem/spring-core/index.html) ・ [Spring Data JDBC](https://fcircle-biz.github.io/tech_docs/cheatsheet/programming-languages/java-ecosystem/spring-data-jdbc/index.html) ・ [Spring MVC](https://fcircle-biz.github.io/tech_docs/cheatsheet/programming-languages/java-ecosystem/spring-mvc/index.html) |
| **JavaScript/Node.js** | [JavaScript入門](https://fcircle-biz.github.io/tech_docs/cheatsheet/programming-languages/javascript-ecosystem/javascript-beginner/index.html) ・ [Node.js入門](https://fcircle-biz.github.io/tech_docs/cheatsheet/programming-languages/javascript-ecosystem/nodejs-beginner/index.html) ・ [TypeScript](https://fcircle-biz.github.io/tech_docs/cheatsheet/programming-languages/javascript-ecosystem/typescript/index.html) ・ [React](https://fcircle-biz.github.io/tech_docs/cheatsheet/programming-languages/javascript-ecosystem/react/index.html) ・ [Next.js](https://fcircle-biz.github.io/tech_docs/cheatsheet/programming-languages/javascript-ecosystem/nextjs/index.html) |
| **Webテクノロジ** | [HTML/CSS](https://fcircle-biz.github.io/tech_docs/cheatsheet/web-technologies/html-css/index.html) ・ [Tailwind CSS](https://fcircle-biz.github.io/tech_docs/cheatsheet/web-technologies/tailwind-css/index.html) ・ [Bootstrap](https://fcircle-biz.github.io/tech_docs/cheatsheet/web-technologies/bootstrap/index.html) ・ [Webアプリ開発入門](https://fcircle-biz.github.io/tech_docs/cheatsheet/web-technologies/webapp-intro/index.html) |
| **データベース** | [SQL](https://fcircle-biz.github.io/tech_docs/cheatsheet/data-ai-category/database/sql/index.html) |
| **クラウド/インフラ** | [Docker](https://fcircle-biz.github.io/tech_docs/cheatsheet/cloud-infrastructure/docker/index.html) |
| **OS/デバイス** | [Windows](https://fcircle-biz.github.io/tech_docs/cheatsheet/cloud-infrastructure/os-basics/windows/index.html) |
| **開発手法・プロセス** | [Git](https://fcircle-biz.github.io/tech_docs/cheatsheet/development-processes/git/index.html) |
| **テスト/QA** | [JUnit](https://fcircle-biz.github.io/tech_docs/cheatsheet/development-processes/testing/junit/index.html) |
| **設計手法・モデリング** | [UML](https://fcircle-biz.github.io/tech_docs/cheatsheet/design-modeling/uml/index.html) |
| **SaaS/PaaS** | [Excel](https://fcircle-biz.github.io/tech_docs/cheatsheet/business-saas/microsoft-office/excel/index.html) |

------------------------------------------------------------------------

## 🔗 リンク

-   [GitHub Pages](https://fcircle-biz.github.io/tech_docs/)
-   [リポジトリ](https://github.com/fcircle-biz/tech_docs)

------------------------------------------------------------------------
