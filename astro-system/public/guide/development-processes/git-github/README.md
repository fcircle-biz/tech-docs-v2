# Git/GitHub学習教材

バージョン管理の定番ツール「Git」と、その共有・協働プラットフォーム「GitHub」を、まったくの初心者向けに基礎から段階的に学べる入門学習ガイド（全7章）です。「ファイル名に日付を付けて管理する」段階から一歩進み、変更履歴を記録し、GitHubで共有し、ブランチとPull Requestを使ってチーム開発の流れを体験するまでを、専門用語をかみ砕きながら順序立てて解説します。

| 項目 | 内容 |
|------|------|
| 難易度 | 初級 |
| 所要時間 | 約6時間 |
| 分類 | 開発手法・プロセス |

## 前提条件

### 必要な環境
- Windows / macOS いずれかのPC（管理者権限でソフトをインストールできること）
- インターネット接続
- メールアドレス（GitHubアカウント作成用）

### 参考リソース
- [Git 公式サイト](https://git-scm.com/)
- [GitHub](https://github.com/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [GitHub Docs（日本語）](https://docs.github.com/ja)

### 前提知識
- **必須**: 基本的なPC操作（フォルダ・ファイルの作成、コピー、保存）
- **推奨**: ターミナル（コマンドライン）に文字を打ち込んだ経験（無くても本ガイド内で学べます）

## 学習コンテンツ

### [1. Git/GitHubで何ができるのか](https://fcircle-biz.github.io/tech-docs-v2/guide/development-processes/git-github/git-github-learning-material-01.html)
GitとGitHubを使う理由を、専門用語を増やしすぎずに理解します。「変更を記録し、共有し、レビューして取り込む」という全体像と、コミット・リポジトリ・ブランチ・Pull Requestのざっくりした意味をつかみます。

### [2. 環境構築とGitHubの準備](https://fcircle-biz.github.io/tech-docs-v2/guide/development-processes/git-github/git-github-learning-material-02.html)
Git・VS Code・GitHubアカウントを準備し、`git config` で初期設定を行います。自分のPCでGitコマンドを実行できる状態を整えます。

### [3. Gitの基本操作：変更を記録する](https://fcircle-biz.github.io/tech-docs-v2/guide/development-processes/git-github/git-github-learning-material-03.html)
`git init`・`status`・`add`・`commit`・`log`・`diff` を通じて、ファイルの変更をGitに記録する基本サイクルを身につけます。

### [4. GitHubとつなぐ：push / clone / pull](https://fcircle-biz.github.io/tech-docs-v2/guide/development-processes/git-github/git-github-learning-material-04.html)
GitHubにリポジトリを作成し、ローカルと接続して `push`・`clone`・`pull` でやり取りします。よくある認証エラーの概要も押さえます。

### [5. ブランチを使って作業する](https://fcircle-biz.github.io/tech-docs-v2/guide/development-processes/git-github/git-github-learning-material-05.html)
ブランチとmainブランチの考え方を学び、`git branch`・`switch`・`switch -c` で作業用ブランチを作って安全に変更を進めます。

### [6. Pull Requestで変更を取り込む](https://fcircle-biz.github.io/tech-docs-v2/guide/development-processes/git-github/git-github-learning-material-06.html)
Pull Requestを作成・レビュー・マージする、GitHubを使った基本的なチーム開発の流れを体験します。

### [7. よくあるトラブルと最低限の対処](https://fcircle-biz.github.io/tech-docs-v2/guide/development-processes/git-github/git-github-learning-material-07.html)
変更の取り消し、addの取り消し、commitメッセージの修正、pullエラー、簡単なコンフリクト解決など、初心者が詰まりやすいポイントへの対処順を学びます。

## 推奨所要時間

| 章 | 内容 | 目安時間 |
|----|------|----------|
| 第1章 | Git/GitHubで何ができるのか | 40分 |
| 第2章 | 環境構築とGitHubの準備 | 60分 |
| 第3章 | Gitの基本操作：変更を記録する | 60分 |
| 第4章 | GitHubとつなぐ：push / clone / pull | 60分 |
| 第5章 | ブランチを使って作業する | 50分 |
| 第6章 | Pull Requestで変更を取り込む | 50分 |
| 第7章 | よくあるトラブルと最低限の対処 | 40分 |
| **合計** | | **約6時間** |

## 学習目標

このガイドを完了すると、以下のスキルを身につけることができます：

- GitとGitHubの違いを説明できる
- 自分のPCでGitの初期設定を行い、コマンドを実行できる
- `add` → `commit` で変更履歴を記録できる
- GitHubのリポジトリへ `push` し、`clone`・`pull` で取得・更新できる
- 作業用ブランチを作成して安全に変更を進められる
- Pull Requestを作成し、レビューを経てmainブランチへ変更を取り込める
- Gitで困ったときに、まず何を確認すべきかが分かり、簡単なコンフリクトを自力で解消できる

## 次のステップ

- [Claude Code学習教材](https://fcircle-biz.github.io/tech-docs-v2/guide/development-processes/claude-code/claude-code-learning-material-01.html) — AIエージェントとGit/GitHubを組み合わせた開発を学ぶ
- [Codex学習教材](https://fcircle-biz.github.io/tech-docs-v2/guide/development-processes/codex/codex-learning-material-01.html) — エージェント型コーディングCLIでのGit連携を学ぶ

## はじめに

[第1章「Git/GitHubで何ができるのか」から始める](https://fcircle-biz.github.io/tech-docs-v2/guide/development-processes/git-github/git-github-learning-material-01.html)
