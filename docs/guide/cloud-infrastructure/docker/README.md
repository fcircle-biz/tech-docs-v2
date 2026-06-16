# Docker/Rancher Desktop入門 学習ガイドライン

このガイドラインでは、Docker（コンテナ技術）の基礎をプログラミング初心者向けに段階的に学習するためのカリキュラムを提供しています。**Rancher Desktop**を使用してDocker環境を構築し、実際に手を動かしながらコンテナ技術の基本を習得できます。

## Rancher Desktopとは？

**Rancher Desktop**は、WindowsやmacOSでDockerコンテナを実行するための**無料のオープンソースツール**です。Docker Desktopの代替として人気があり、特に以下の点で初心者にもおすすめです：

- **完全無料** - 商用利用でも費用がかかりません
- **シンプルなインストール** - ダウンロードして実行するだけで使えます
- **Dockerコマンドがそのまま使える** - Docker公式ドキュメントの知識がそのまま活用できます

## 前提条件

### 必要な環境

- **OS**: Windows 10/11（Home版でもOK）、macOS 10.15以降
- **ハードウェア**:
  - CPU: 2コア以上
  - メモリ: 8GB以上（最低4GB、8GB以上を強く推奨）
  - ストレージ: 20GB以上の空き容量
- **Windows追加要件**: WSL2（Windows Subsystem for Linux 2）のインストールが必要
  - インストール方法は第2章で詳しく解説します

### 参考リソース

- [Rancher Desktop公式サイト](https://rancherdesktop.io/)
- [Docker公式ドキュメント](https://docs.docker.com/)
- [Docker Hub](https://hub.docker.com/) - コンテナイメージの公開リポジトリ
- [Play with Docker](https://labs.play-with-docker.com/) - ブラウザで試せる無料環境

### 前提知識

- **必須**:
  - パソコンの基本操作（ファイルの作成・移動・削除など）
  - Webブラウザの使用経験
- **推奨**:
  - コマンドライン（ターミナル）の基本操作
  - 何らかのプログラミング言語の基礎知識

> **注意**: コマンドラインの経験がない方でも、本ガイドでは丁寧に手順を解説しますので安心して学習を始められます。

## 学習コンテンツ

### [1. Dockerとは何か - コンテナ技術をやさしく理解する](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/docker/docker-learning-material-01.html)
Dockerとは何か、なぜ必要なのかを初心者向けにやさしく解説します。「コンテナ」を日常生活の例え（引っ越しの段ボール箱など）で分かりやすく説明し、従来の開発方法との違いを図解で理解します。専門用語を使わずに、Dockerがあなたの開発をどのように便利にするかを学びます。

### [2. Rancher Desktopのインストールと初期設定](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/docker/docker-learning-material-02.html)
Rancher Desktopのダウンロードからインストール、初期設定までを画面キャプチャ付きで詳しく解説します。Windowsの場合はWSL2のセットアップ方法も含めて、つまずきやすいポイントを丁寧にフォローします。インストール後の動作確認方法も説明し、確実にDocker環境を構築します。

### [3. はじめてのDockerコマンド - Hello Worldを動かそう](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/docker/docker-learning-material-03.html)
ターミナル（コマンドライン）の基本的な使い方から始め、最初のDockerコマンドを実行します。`docker run hello-world`を実行して、その出力の意味を一行ずつ丁寧に解説。コンテナが動く仕組みを視覚的に理解し、基本的なDockerコマンド（run, ps, stop, rm）を実践します。

### [4. Dockerイメージを理解しよう - コンテナの設計図](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/docker/docker-learning-material-04.html)
「イメージ」と「コンテナ」の関係を料理のレシピと料理の例えで分かりやすく解説します。Docker Hubから様々なイメージを取得（pull）して実行する方法を学び、イメージの一覧表示、削除などの管理方法を実践します。公式イメージの見分け方や安全な選び方も解説します。

### [5. Webサーバーを動かしてみよう - Nginxで学ぶポート設定](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/docker/docker-learning-material-05.html)
実際にNginx（エンジンエックス）というWebサーバーをコンテナで起動し、ブラウザからアクセスしてみます。「ポート」の概念を建物の部屋番号の例えで理解し、コンテナのポートとホストマシンのポートの関係を図解で学びます。自分だけのWebページを表示する体験をします。

### [6. Dockerfileを書いてみよう - オリジナルイメージの作成](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/docker/docker-learning-material-06.html)
Dockerfileとは何か、なぜ必要なのかを解説し、シンプルなDockerfileを一から作成します。FROM、COPY、RUNなどの基本的な命令を一つずつ丁寧に解説し、自分だけのオリジナルイメージを作成する喜びを体験します。HTMLページを表示するシンプルなWebサーバーイメージを作成します。

### [7. データを保存しよう - ボリュームの基本](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/docker/docker-learning-material-07.html)
コンテナを削除するとデータが消えてしまう問題を理解し、データを永続化する方法（ボリューム）を学びます。USBメモリの例えでボリュームの概念を説明し、実際にデータベース（MySQL）を使ってデータが保存される様子を確認します。バインドマウントとの違いも図解で理解します。

### [8. Docker Composeで複数のコンテナを管理しよう](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/docker/docker-learning-material-08.html)
複数のコンテナを連携させる必要性を理解し、Docker Composeの基本を学びます。docker-compose.ymlファイルの書き方を丁寧に解説し、Webアプリケーション + データベースという実践的な構成を一つのコマンドで起動する方法を習得します。

### [9. 実践プロジェクト - シンプルなWebアプリをコンテナ化しよう](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/docker/docker-learning-material-09.html)
これまで学んだ知識を総動員して、シンプルなTodoアプリ（またはメモアプリ）をコンテナ化します。フロントエンド、バックエンド、データベースの3層構成を実際に構築し、開発環境としてのDockerの便利さを体感します。

### [10. トラブルシューティングと次のステップ](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/docker/docker-learning-material-10.html)
Docker使用中によくあるエラーとその解決方法をまとめます。「コンテナが起動しない」「ポートが使用中」「ディスク容量不足」などの典型的な問題への対処法を学びます。また、この先の学習パス（Kubernetes、クラウドへのデプロイなど）も紹介します。

## 学習の進め方

1. **必ず順番に進める**
   - 各章は前章の内容を前提としています
   - 飛ばし読みをせず、1章から順番に学習してください

2. **実際に手を動かす**
   - 読むだけでなく、必ず自分のPCでコマンドを実行してください
   - 「動いた！」という体験が理解を深めます

3. **エラーを恐れない**
   - エラーは学習の一部です
   - エラーメッセージを読む習慣をつけましょう
   - 第10章でよくあるエラーの対処法を解説しています

4. **分からないことはメモする**
   - 疑問点をメモしておき、後で調べる習慣をつけましょう
   - 公式ドキュメントや参考リソースを活用してください

5. **復習を大切に**
   - 一度で完璧に覚える必要はありません
   - 何度も繰り返し実践することで定着します

## 推奨所要時間

| 章 | 内容 | 目安時間 |
|----------|------|----------|
| 第1章 | Dockerとは何か - コンテナ技術をやさしく理解する | 45分 |
| 第2章 | Rancher Desktopのインストールと初期設定 | 1時間 |
| 第3章 | はじめてのDockerコマンド - Hello Worldを動かそう | 45分 |
| 第4章 | Dockerイメージを理解しよう - コンテナの設計図 | 45分 |
| 第5章 | Webサーバーを動かしてみよう - Nginxで学ぶポート設定 | 1時間 |
| 第6章 | Dockerfileを書いてみよう - オリジナルイメージの作成 | 1.5時間 |
| 第7章 | データを保存しよう - ボリュームの基本 | 1時間 |
| 第8章 | Docker Composeで複数のコンテナを管理しよう | 1.5時間 |
| 第9章 | 実践プロジェクト - シンプルなWebアプリをコンテナ化しよう | 2時間 |
| 第10章 | トラブルシューティングと次のステップ | 45分 |
| **合計** | | **約11時間** |

## 関連リソース

### チートシート
- [Dockerコマンドチートシート](https://fcircle-biz.github.io/tech_docs/cheatsheet/cloud-infrastructure/docker-cheatsheet.html)（準備中）

### 関連ガイドライン
- [Linux基礎学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/linux/README.html)（準備中）
- [Git/GitHub学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/development-processes/git-github/)

### 外部リソース
- [Rancher Desktop公式ドキュメント](https://docs.rancherdesktop.io/)
- [Docker公式ドキュメント（日本語）](https://docs.docker.jp/)
- [Docker入門 - とほほのWWW入門](https://www.tohoho-web.com/docker/)

## 学習目標

このガイドを完了すると、以下のスキルを身につけることができます：

- **Dockerの基本概念を理解している**: コンテナとは何か、なぜ使うのかを人に説明できる
- **Docker環境を構築できる**: Rancher Desktopをインストールし、正常に動作する環境を準備できる
- **基本的なDockerコマンドを使える**: コンテナの起動・停止・削除などの基本操作ができる
- **Docker Hubからイメージを取得して使える**: 必要なイメージを検索・ダウンロード・実行できる
- **簡単なDockerfileを作成できる**: 自分のアプリケーションをコンテナ化するための設計図を書ける
- **データの永続化ができる**: ボリュームを使ってデータを保存する方法を理解している
- **Docker Composeで複数コンテナを管理できる**: Webアプリ + DBのような構成を一括管理できる
- **基本的なトラブルシューティングができる**: よくあるエラーに対処できる

## 次のステップ

このガイドライン完了後は、以下の学習に進むことをお勧めします：

### より深いDocker知識
- **マルチステージビルド**: イメージサイズを最適化する高度なテクニック
- **Dockerネットワーク**: コンテナ間通信の詳細な設定
- **セキュリティベストプラクティス**: 本番環境で安全にDockerを使う方法

### コンテナオーケストレーション
- **Kubernetes入門**: 複数のコンテナを大規模に管理するためのツール
- **Docker Swarm**: Docker純正のオーケストレーションツール

### クラウドへのデプロイ
- **AWS ECS/Fargate**: AWSでコンテナを実行する
- **Google Cloud Run**: GCPでサーバーレスコンテナを実行する
- **Azure Container Instances**: Azureでコンテナを実行する

### CI/CD（継続的インテグレーション/デリバリー）
- **GitHub Actions + Docker**: プッシュ時に自動でイメージをビルド・デプロイ
- **GitLab CI/CD**: GitLabを使った自動化パイプライン

---

このガイドで学んだDockerの基礎知識は、モダンなソフトウェア開発において非常に重要なスキルです。一歩ずつ着実に学習を進めていきましょう！
