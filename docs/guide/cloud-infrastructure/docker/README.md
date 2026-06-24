# Docker学習教材

Dockerを初めて学ぶ人のための入門学習ガイド（全8章）です。「自分のPCでは動くのに、他の人のPCでは動かない」問題をDockerがどう解決するのかという考え方から始め、**Rancher Desktop** でDockerコマンドをWindows / Macで使えるようにし、hello-worldで最初のコンテナを動かします。続いて **Nginx** でWebサーバーをコンテナとして起動し、**Dockerfile** で自分のHTMLページをイメージ化、**バインドマウント** でファイルを渡し、**Docker Compose** で起動手順を1つの設定ファイルにまとめるところまでを、コマンドの意味を1行ずつ確認しながら順を追って学びます。

| 項目 | 内容 |
|------|------|
| 難易度 | 初級 |
| 所要時間 | 約6時間 |
| 分類 | クラウド・インフラ |

## 前提条件

### 必要な環境
- Windows 10/11 または macOS（Intel / Apple シリコン）
- Rancher Desktop（本教材でインストール手順を解説。Docker Desktop でも基本コマンドはほぼ共通）
- Webブラウザ（Google Chrome など）
- テキストエディタ（Visual Studio Code など）

### 参考リソース
- [Docker 公式ドキュメント](https://docs.docker.com/)
- [Rancher Desktop 公式サイト](https://rancherdesktop.io/)
- [Docker Hub](https://hub.docker.com/)
- [Nginx 公式イメージ（Docker Hub）](https://hub.docker.com/_/nginx)

### 前提知識
- **必須**: 基本的なPC操作（ファイル・フォルダの作成、テキストファイルの編集）
- **推奨**: Git / GitHub の基本操作の経験、ターミナル（コマンドライン）に少し触れたことがある程度

## 学習コンテンツ

### [1. Dockerとは何か](https://fcircle-biz.github.io/tech-docs-v2/guide/cloud-infrastructure/docker/docker-learning-material-01.html)
Dockerが「何を解決する道具」なのかを、引っ越しの段ボール箱や料理のレシピといった身近な例えで理解します。イメージ・コンテナ・Docker Hub・ホストマシンといった重要用語を整理します。

### [2. Rancher Desktopで環境を準備する](https://fcircle-biz.github.io/tech-docs-v2/guide/cloud-infrastructure/docker/docker-learning-material-02.html)
Rancher Desktop をインストールし、Dockerコマンドを使える状態にします。WindowsのWSL2、Container Runtime（dockerd / Moby）の選択、`docker version` での動作確認までを丁寧に解説します。

### [3. はじめてのコンテナと基本コマンド](https://fcircle-biz.github.io/tech-docs-v2/guide/cloud-infrastructure/docker/docker-learning-material-03.html)
`docker run hello-world` で最初のコンテナを実行し、イメージの取得→コンテナ生成→実行→停止の流れを理解します。`docker ps` / `docker images` / `docker stop` / `docker rm` といった基本コマンドを学びます。

### [4. NginxでWebサーバーを動かす](https://fcircle-biz.github.io/tech-docs-v2/guide/cloud-infrastructure/docker/docker-learning-material-04.html)
Nginxコンテナを起動し、ブラウザからWebページを表示します。`-p 8080:80` の意味を通じて、ホスト側ポートとコンテナ側ポートの違い（ポートフォワーディング）を理解します。

### [5. Dockerfileでイメージ化する](https://fcircle-biz.github.io/tech-docs-v2/guide/cloud-infrastructure/docker/docker-learning-material-05.html)
Dockerfile を使って、自分のHTMLページを含むオリジナルイメージを作ります。`FROM` と `COPY` に絞り、`docker build` でのイメージ作成と実行までを体験します。

### [6. バインドマウントとボリューム](https://fcircle-biz.github.io/tech-docs-v2/guide/cloud-infrastructure/docker/docker-learning-material-06.html)
コンテナへ外部のファイルを渡す方法を学びます。開発中に便利なバインドマウントを中心に、永続データに使うボリュームの考え方も紹介します。

### [7. Docker Composeで起動をまとめる](https://fcircle-biz.github.io/tech-docs-v2/guide/cloud-infrastructure/docker/docker-learning-material-07.html)
長い `docker run` コマンドを `compose.yml` という設定ファイルにまとめます。`docker compose up` / `docker compose down` で、起動と片付けを簡単に行えるようにします。

### [8. よくあるエラーと確認手順](https://fcircle-biz.github.io/tech-docs-v2/guide/cloud-infrastructure/docker/docker-learning-material-08.html)
Dockerで困ったときの確認フローと、よくあるエラーメッセージの読み解き方をまとめます。`docker logs` でのログ確認や、ポート競合・名前重複への対処を学びます。

## 推奨所要時間

| 章 | 内容 | 目安時間 |
|----|------|----------|
| 第1章 | Dockerとは何か | 約40分 |
| 第2章 | Rancher Desktopで環境を準備する | 約60分 |
| 第3章 | はじめてのコンテナと基本コマンド | 約45分 |
| 第4章 | NginxでWebサーバーを動かす | 約50分 |
| 第5章 | Dockerfileでイメージ化する | 約50分 |
| 第6章 | バインドマウントとボリューム | 約45分 |
| 第7章 | Docker Composeで起動をまとめる | 約45分 |
| 第8章 | よくあるエラーと確認手順 | 約35分 |
| **合計** | | **約6時間** |

## 学習目標

このガイドを完了すると、以下のスキルを身につけることができます：

- Docker・イメージ・コンテナ・Docker Hub・ホストマシンといった基本用語を自分の言葉で説明できる
- Rancher Desktop をインストールし、Dockerコマンドが使える環境を自分で準備できる
- `docker run` / `docker ps` / `docker stop` / `docker rm` / `docker images` など基本コマンドを使い分けられる
- Nginxコンテナを起動し、ポート公開（`-p`）の仕組みを理解してブラウザからアクセスできる
- Dockerfile（`FROM` / `COPY`）で自分のHTMLページを含むオリジナルイメージを作成できる
- バインドマウントでホストのファイルをコンテナに渡せる
- Docker Compose（`compose.yml`）で起動手順をまとめ、`up` / `down` で操作できる
- よくあるエラーを切り分け、確認フローに沿って自力で対処できる

## 次のステップ

本教材を終えたら、以下のような発展テーマに進むと、より実践的なコンテナ活用ができるようになります。

- 複数コンテナ構成（Webアプリ ＋ データベース）と Docker ネットワーク
- MySQL / PostgreSQL のデータ永続化（ボリュームの本格活用）
- `.env` ファイルによる設定の外部化
- マルチステージビルドとイメージサイズの削減
- Dev Containers / Docker Compose Watch を使った開発体験の向上
- Kubernetes によるコンテナのオーケストレーション
- クラウドへのデプロイ、CI/CD パイプラインでのDocker活用
