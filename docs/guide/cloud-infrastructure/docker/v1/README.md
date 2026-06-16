# Docker学習ガイドライン

このガイドラインでは、Dockerの基礎から実践的なコンテナ運用まで、入門者向けに段階的に学習するためのカリキュラムを提供しています。Dockerはアプリケーションのコンテナ化を実現する業界標準のプラットフォームであり、開発環境の統一から本番環境へのデプロイまで、モダンなソフトウェア開発に不可欠な技術です。各トピックには詳細な解説へのリンクが含まれています。

## 前提条件

### 必要な環境
- **OS**: Windows 10/11 Pro/Enterprise、macOS 10.15以降、または主要Linuxディストリビューション（Ubuntu、CentOS、Debian等）
- **ハードウェア**: CPU 2コア以上、メモリ4GB以上（推奨8GB以上）
- **仮想化**: Windows の場合はHyper-V または WSL2、macOS の場合はHypervisor.framework対応
- **ソフトウェア**: Docker Desktop（Windows/Mac）または Docker Engine（Linux）

### 参考リソース
- [Docker公式ドキュメント](https://docs.docker.com/)
- [Docker Hub](https://hub.docker.com/)
- [Docker公式チュートリアル](https://docs.docker.com/get-started/)
- [Play with Docker](https://labs.play-with-docker.com/) - ブラウザで試せる無料環境

### 前提知識
- **必須**:
  - コマンドラインの基本操作（ターミナル、Bash/PowerShellの基礎）
  - Web技術の基礎知識（HTTP、ポート、IPアドレスの概念）
  - テキストエディタの使用経験
- **推奨**:
  - Linux基本コマンド（ls、cd、cat、grep等）
  - いずれかのプログラミング言語の基礎（Python、Node.js、Java等）
  - 仮想化技術の基本概念

## 学習コンテンツ

### [1. Dockerとは何か - コンテナ技術の基礎理解](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/docker/docker-learning-material-01.html)
Dockerの概要とコンテナ技術の基本概念について学びます。従来の仮想マシン（VM）とコンテナの違い、Dockerがもたらすメリット（環境の一貫性、移植性、効率性）、Dockerの主要コンポーネント（Docker Engine、Docker CLI、Docker Desktop）、コンテナ化が解決する「動作環境の差異」問題、Dockerのアーキテクチャ（クライアント・サーバモデル）について詳しく解説します。実際の開発現場でDockerがどのように活用されているかの具体例も紹介します。

### [2. Docker環境構築と基本操作](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/docker/docker-learning-material-02.html)
Docker環境のインストールと初めてのコンテナ実行までを学びます。各OS（Windows、macOS、Linux）でのDocker Desktopのインストール手順、インストール確認コマンド（docker --version、docker info）、初めてのコンテナ実行（docker run hello-world）、基本的なDockerコマンド（run、ps、stop、rm）、コンテナのライフサイクル（作成・起動・停止・削除）、インタラクティブモードとデタッチドモードの違い、トラブルシューティングの基本について解説します。実際に手を動かしながら、Dockerの基本操作に慣れることができます。

### [3. Dockerイメージの理解と管理](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/docker/docker-learning-material-03.html)
Dockerイメージの概念と管理方法について学びます。イメージとコンテナの関係（クラスとインスタンスの関係に類似）、Docker Hubからのイメージ取得（docker pull）、ローカルイメージの一覧表示と管理（docker images、docker rmi）、イメージのタグとバージョン管理、レイヤー構造とイメージの効率的な共有、公式イメージとコミュニティイメージの違い、イメージの検索方法（docker search）、イメージサイズの確認と最適化の基本について解説します。実際に様々なイメージをダウンロードして操作することで、イメージ管理の理解を深めます。

### [4. Dockerfileによるイメージ作成](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/docker/docker-learning-material-04.html)
Dockerfileを使った独自のイメージ作成方法を学びます。Dockerfileの基本構文と記述ルール、主要な命令（FROM、RUN、COPY、ADD、CMD、ENTRYPOINT、WORKDIR、ENV、EXPOSE）の使い方と違い、ベースイメージの選択基準、レイヤーキャッシュの仕組みと効率的なビルド、マルチステージビルドによるイメージサイズの最適化、.dockerignoreファイルの活用、ビルドコンテキストの理解、docker buildコマンドの使い方とオプション、実践的なDockerfileの作成例（Node.js、Python、Java等）について解説します。自分のアプリケーションをコンテナ化する実践的なスキルを習得できます。

### [5. Docker Composeによる複数コンテナ管理](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/docker/docker-learning-material-05.html)
Docker Composeを使った複数コンテナの定義と管理方法を学びます。Docker Composeの概要と必要性、docker-compose.ymlファイルの基本構造と書き方、サービスの定義とコンテナ間の関係設定、主要な設定項目（image、build、ports、volumes、environment、depends_on、networks）、Docker Composeの基本コマンド（up、down、ps、logs、exec）、開発環境でのDocker Compose活用（Webアプリ + データベース構成）、環境変数の管理（.envファイル）、スケーリングとレプリカについて解説します。実際にWebアプリケーションとデータベースを組み合わせた環境を構築することで、実践的な複数コンテナ管理のスキルを身につけます。

### [6. Dockerボリュームとデータ永続化](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/docker/docker-learning-material-06.html)
Dockerにおけるデータ永続化の手法について学びます。コンテナの一時的な性質とデータ永続化の必要性、3種類のマウント方式（ボリューム、バインドマウント、tmpfs）の違いと使い分け、Docker volumeの作成と管理（docker volume create、ls、inspect、rm）、ボリュームを使ったデータベースのデータ永続化、バインドマウントを使った開発時のホットリロード、匿名ボリュームと名前付きボリュームの違い、ボリュームのバックアップとリストア、データコンテナパターン、ボリュームドライバーの基礎について解説します。実際にデータベースコンテナを使ってデータ永続化を実践し、コンテナを削除してもデータが保持されることを確認します。

### [7. Dockerネットワークとコンテナ間通信](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/docker/docker-learning-material-07.html)
Dockerのネットワーク機能とコンテナ間通信について学びます。Dockerネットワークの基本概念、デフォルトネットワークの種類（bridge、host、none）とその特徴、カスタムブリッジネットワークの作成と利点、コンテナ間通信の方法（コンテナ名によるDNS解決）、ポートマッピングとポート公開（-p、--expose）、ネットワークの作成と管理（docker network create、ls、inspect、rm）、複数ネットワークへの接続、ネットワークエイリアス、外部ネットワークとの接続、Docker Composeでのネットワーク定義について解説します。実際にフロントエンド、バックエンド、データベースを別々のネットワークで分離する実践的な構成を学びます。

### [8. マルチコンテナアプリケーションの構築](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/docker/docker-learning-material-08.html)
実践的なマルチコンテナアプリケーションの構築方法を学びます。3層アーキテクチャ（フロントエンド、バックエンド、データベース）のコンテナ化、サービス間の依存関係管理、ヘルスチェックの実装（HEALTHCHECK命令）、ログ管理とモニタリングの基礎、コンテナ間でのデータ共有、リバースプロキシの導入（Nginx）、環境別設定の管理（開発・ステージング・本番）、シークレット管理の基本、サービスディスカバリーの概念、実践プロジェクト：Todo管理アプリケーション（React + Node.js + PostgreSQL）の完全なコンテナ化について解説します。実際の開発現場で使用される構成パターンを習得できます。

### [9. Dockerのベストプラクティスとセキュリティ](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/docker/docker-learning-material-09.html)
Dockerの効率的な使用方法とセキュリティ対策について学びます。イメージサイズの最適化テクニック（マルチステージビルド、Alpine Linux、不要ファイルの削除）、レイヤーキャッシュの効果的な活用、セキュリティのベストプラクティス（非rootユーザーの使用、最小権限の原則、脆弱性スキャン）、イメージの脆弱性診断ツール（Docker Scan、Trivy）、シークレット情報の安全な管理、コンテナリソース制限（CPU、メモリ）、ログ管理戦略、.dockerignoreの効果的な使用、ビルドの高速化手法、CI/CDパイプラインでのDocker活用について解説します。プロダクション環境で安全かつ効率的にDockerを運用するための実践的な知識を習得できます。

### [10. 本番環境へのデプロイとオーケストレーション入門](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/docker/docker-learning-material-10.html)
本番環境へのDockerデプロイとコンテナオーケストレーションの基礎について学びます。本番環境での考慮事項（高可用性、スケーラビリティ、セキュリティ、監視）、Docker Swarmの基礎とクラスタ構成、サービスのデプロイとスケーリング、ローリングアップデートとロールバック、ヘルスチェックと自動復旧、ロードバランシングの仕組み、Kubernetesの概要とDockerとの関係、コンテナレジストリの活用（Docker Hub、AWS ECR、Google GCR）、CI/CDパイプラインとの統合（GitHub Actions、GitLab CI）、モニタリングとロギング戦略（Prometheus、Grafana、ELKスタック）、次のステップ：Kubernetes学習への道筋について解説します。Dockerから次のステップへ進むための基盤を築きます。

## 学習の進め方

1. **順序立てた学習**: 初めてDockerを学ぶ方は、必ず「1. Dockerとは何か」から順番に学習を進めてください。各章は前章の内容を前提としています。
2. **実践重視**: Dockerは実際に手を動かすことで理解が深まります。各章のサンプルコマンドやコード例を必ず自分の環境で実行してみましょう。
3. **エラーからの学習**: エラーが発生した場合は、エラーメッセージをよく読み、公式ドキュメントで調べることで理解が深まります。
4. **小さなプロジェクトで実践**: 既存の小規模なアプリケーション（自分で作成したものや学習用サンプル）をコンテナ化してみましょう。
5. **コミュニティの活用**: Docker Hubで公式イメージのDockerfileを参照したり、GitHubで実際のプロジェクトのDocker構成を学ぶことも効果的です。
6. **定期的な復習**: Dockerコマンドは使わないと忘れがちです。チートシートを活用して定期的に復習しましょう。

## 推奨学習期間

- **基礎習得コース** (1-4章): 1-2週間
  - Dockerの基本概念、インストール、基本操作、イメージ管理、Dockerfileの作成まで
  - 1日1-2時間の学習で、基本的なコンテナ操作ができるようになります

- **実践活用コース** (5-7章): 2-3週間
  - Docker Compose、ボリューム、ネットワークなど実践的な機能の習得
  - 実際の開発で使用する構成パターンを学びます

- **応用・本番対応コース** (8-10章): 2-3週間
  - マルチコンテナアプリケーション、セキュリティ、本番デプロイの学習
  - 実務レベルでのDocker活用スキルを身につけます

**合計学習期間**: 5-8週間（1日1-2時間の学習を想定）

## 関連リソース

### チートシート
- [Dockerコマンドチートシート](https://fcircle-biz.github.io/tech_docs/cheatsheet/cloud-infrastructure/docker-cheatsheet.html)（準備中）
- [Docker Composeチートシート](https://fcircle-biz.github.io/tech_docs/cheatsheet/cloud-infrastructure/docker-compose-cheatsheet.html)（準備中）
- [Dockerfileベストプラクティスチートシート](https://fcircle-biz.github.io/tech_docs/cheatsheet/cloud-infrastructure/dockerfile-cheatsheet.html)（準備中）

### 関連ガイドライン
- [Kubernetes学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/kubernetes/README.html)（準備中）
- [Linux基礎学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/os/linux/README.html)（準備中）

### 外部リソース
- [Docker公式ドキュメント（日本語）](https://docs.docker.jp/)
- [Docker Get Started](https://docs.docker.com/get-started/)
- [Awesome Docker](https://github.com/veggiemonk/awesome-docker) - Docker関連リソース集

## 学習目標

このガイドを完了すると、以下のスキルを身につけることができます：

- **基本的なDocker操作**: コンテナの作成、起動、停止、削除などの基本操作を習得し、日常的な開発作業でDockerを活用できる
- **イメージ管理**: Docker Hubからイメージを取得し、Dockerfileを使って独自のイメージを作成・管理できる
- **Dockerfile作成**: 効率的で最適化されたDockerfileを作成し、アプリケーションを適切にコンテナ化できる
- **Docker Compose活用**: 複数のコンテナから成るアプリケーションをdocker-compose.ymlで定義し、一括管理できる
- **データ永続化**: ボリュームを使ってデータを永続化し、コンテナのライフサイクルとは独立したデータ管理ができる
- **ネットワーク設計**: コンテナ間の通信を適切に設計し、セキュアなネットワーク構成を実装できる
- **マルチコンテナアプリ構築**: フロントエンド、バックエンド、データベースを組み合わせた実践的なアプリケーションをコンテナ化できる
- **セキュリティ意識**: Dockerのセキュリティベストプラクティスを理解し、安全なコンテナ運用ができる
- **本番環境への対応**: 本番環境でのDocker運用に必要な基礎知識を持ち、CI/CDパイプラインに統合できる
- **問題解決能力**: Dockerに関する一般的な問題を自力で調査・解決できる能力を身につける

## 次のステップ

このガイドライン完了後は、以下の学習に進むことをお勧めします：

### コンテナオーケストレーション
- **Kubernetes**: 大規模なコンテナ運用を自動化するためのオーケストレーションツール。Dockerで学んだ概念を基に、クラスタ管理、自動スケーリング、サービスメッシュなどを学びます。
- **Docker Swarm**: Dockerネイティブのオーケストレーションツール。シンプルな構成で始めるのに適しています。

### クラウドプラットフォーム
- **AWS (Amazon Web Services)**: Amazon ECS、EKS、Fargateなど、AWSのコンテナサービスを学習
- **Google Cloud Platform**: Google Kubernetes Engine (GKE)やCloud Runを活用したコンテナデプロイ
- **Microsoft Azure**: Azure Kubernetes Service (AKS)やAzure Container Instancesの活用

### CI/CDとDevOps
- **GitHub Actions**: GitHubでのCI/CDパイプライン構築とDockerイメージの自動ビルド
- **GitLab CI/CD**: GitLabを使った包括的なDevOpsパイプライン
- **Jenkins**: 従来型CI/CDツールとDockerの統合

### より深い技術領域
- **マイクロサービスアーキテクチャ**: コンテナを活用したマイクロサービス設計と実装
- **サービスメッシュ**: Istio、Linkerdなどを使った高度なサービス間通信管理
- **インフラストラクチャ as コード**: Terraform、Ansibleなどを使ったインフラ自動化

### モニタリングとオブザーバビリティ
- **Prometheus & Grafana**: コンテナ環境のメトリクス収集と可視化
- **ELKスタック**: ログ収集・分析・可視化の統合環境
- **分散トレーシング**: Jaeger、Zipkinを使ったマイクロサービスのトレーシング

このガイドで学んだDockerの基礎知識は、これらすべての技術領域で活用できる重要な基盤となります。
