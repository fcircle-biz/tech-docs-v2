# Git/GitHub入門 学習ガイドライン

このガイドラインでは、Git/GitHubの基礎を入門者向けに段階的に学習するためのカリキュラムを提供しています。プログラミングを始めたばかりの方、バージョン管理を初めて学ぶ方を対象に、専門用語を丁寧に解説しながら、GitとGitHubの違いから実践的な操作まで、GUIツール（GitHub Desktop等）とコマンドラインの両方をカバーして学習を進めます。

## GitとGitHubの違い

学習を始める前に、最も重要な違いを理解しましょう：

| 項目 | Git | GitHub |
|------|-----|--------|
| **種類** | ソフトウェア（ツール） | Webサービス（プラットフォーム） |
| **役割** | ファイルの変更履歴を管理 | Gitで管理したファイルをインターネット上で共有・公開 |
| **動作場所** | 自分のパソコン（ローカル） | インターネット上（クラウド） |
| **費用** | 無料 | 無料（有料プランあり） |
| **例え** | 日記帳（変更の記録を残す） | 日記を保管する図書館（共有・公開できる） |

**簡単に言うと**: Gitは「変更履歴を記録するツール」、GitHubは「その記録をネット上で保存・共有するサービス」です。

## 前提条件

### 必要な環境
- **OS**: Windows 10/11、macOS 10.15以降、または主要Linuxディストリビューション
- **ハードウェア**: 特別な要件なし（一般的なパソコンで十分）
- **インターネット接続**: GitHubを利用するため必要
- **ブラウザ**: Chrome、Firefox、Edge、Safari等の最新版
- **ソフトウェア**（学習中にインストール）:
  - Git（バージョン管理ソフト）
  - GitHub Desktop（GUIツール、初心者推奨）
  - テキストエディタ（VS Code推奨、無料）

### 参考リソース
- [Git公式ドキュメント（日本語）](https://git-scm.com/book/ja/v2)
- [GitHub公式ドキュメント（日本語）](https://docs.github.com/ja)
- [GitHub Desktop公式サイト](https://desktop.github.com/)
- [Pro Git Book（無料オンライン書籍）](https://git-scm.com/book/ja/v2)
- [GitHub Skills（公式学習コース）](https://skills.github.com/)

### 前提知識
- **必須**:
  - パソコンの基本操作（ファイル・フォルダの作成、移動、削除）
  - インターネットの基本（Webサイトの閲覧、アカウント作成）
- **推奨**:
  - テキストエディタの基本的な使い方
  - プログラミングの入門レベルの知識（あれば理解が深まる）
- **不要**:
  - コマンドライン（ターミナル）の経験（本ガイドで一から学習）
  - 他のバージョン管理システムの経験

## 学習コンテンツ

### [1. はじめてのバージョン管理 - なぜGitが必要なのか](https://fcircle-biz.github.io/tech_docs/guide/development-processes/git-github/git-github-learning-material-01.html)
バージョン管理の必要性とGitの基本概念を学びます。「なぜファイル名に日付をつけて保存するのは良くないのか」という身近な問題から始め、バージョン管理システムとは何か、Gitが生まれた背景と歴史（Linuxカーネル開発から誕生）、Gitの特徴（分散型バージョン管理）、GitとGitHubの違いの詳細解説、バージョン管理がもたらすメリット（履歴の追跡、ミスからの復旧、チーム開発の効率化）について解説します。専門用語（リポジトリ、コミット、ブランチ等）の日本語での丁寧な説明も含みます。

### [2. 環境構築 - GitとGitHub Desktopのインストール](https://fcircle-biz.github.io/tech_docs/guide/development-processes/git-github/git-github-learning-material-02.html)
GitとGitHub Desktopを自分のパソコンにインストールします。Windows、Mac、Linuxそれぞれの環境でのGitインストール手順、GitHub Desktopのインストールと初期設定、GitHubアカウントの作成方法、Git Bashとターミナルの基本的な使い方、VS Codeのインストールと連携設定、初期設定（ユーザー名とメールアドレスの登録）、インストールが正常に完了したかの確認方法について、スクリーンショット付きで解説します。

### [3. GitHub Desktop入門 - GUIで学ぶ基本操作](https://fcircle-biz.github.io/tech_docs/guide/development-processes/git-github/git-github-learning-material-03.html)
GitHub Desktopを使って、マウス操作でGitの基本を学びます。GitHub Desktopの画面構成と各部の説明、新しいリポジトリの作成（Create New Repository）、ファイルの変更を記録する（コミット）、変更履歴の確認（History表示）、過去の状態に戻す操作、リモートリポジトリ（GitHub）へのプッシュとプル、簡単なブランチ操作について、実際の画面を見ながらステップバイステップで解説します。コマンドを使わずにGitの概念を理解できます。

### [4. GitHubの基本 - リモートリポジトリと公開・共有](https://fcircle-biz.github.io/tech_docs/guide/development-processes/git-github/git-github-learning-material-04.html)
GitHubのWebサイトの使い方と、リモートリポジトリの概念を学びます。GitHubのダッシュボードと画面構成、新しいリポジトリの作成（Webから）、README.mdファイルの作成と編集、ローカルとリモートの関係（push/pull/fetch）、パブリックリポジトリとプライベートリポジトリの違い、他の人のリポジトリを見る・フォークする、Starとウォッチ機能、GitHubプロフィールのカスタマイズについて解説します。GitHubの基本的な使い方をマスターできます。

### [5. コマンドライン入門 - ターミナルでのGit操作の基礎](https://fcircle-biz.github.io/tech_docs/guide/development-processes/git-github/git-github-learning-material-05.html)
コマンドライン（ターミナル）でのGit操作を一から学びます。コマンドラインとは何か（なぜ必要か）、ターミナル/Git Bashの起動と基本操作（cd, ls, pwd, mkdir）、git initでリポジトリを作成、git statusで状態を確認、git addでステージング、git commitで変更を記録、git logで履歴を確認、git diffで差分を確認、各コマンドの意味と使いどころを詳しく解説します。GUIで学んだ概念をコマンドで実行できるようになります。

### [6. リモート操作 - コマンドラインでのGitHub連携](https://fcircle-biz.github.io/tech_docs/guide/development-processes/git-github/git-github-learning-material-06.html)
コマンドラインでGitHubと連携する方法を学びます。git remoteでリモートリポジトリを設定、git pushでGitHubにアップロード、git pullでGitHubから取得、git cloneで既存リポジトリを複製、SSH認証の設定（パスワードなしで接続）、HTTPS vs SSH接続の違い、認証情報の管理、よくあるエラーとその解決方法について解説します。コマンドラインでGitHubを操作できるようになります。

### [7. ブランチ入門 - 並行作業の基本](https://fcircle-biz.github.io/tech_docs/guide/development-processes/git-github/git-github-learning-material-07.html)
ブランチの概念と基本的な使い方を学びます。ブランチとは何か（木の枝のイメージで解説）、なぜブランチが必要か（並行開発、実験的な変更）、mainブランチとは、新しいブランチの作成（git branch, git checkout -b）、ブランチの切り替え（git checkout, git switch）、ブランチの一覧確認と削除、GitHub Desktopでのブランチ操作、ブランチ運用のベストプラクティス（命名規則等）について解説します。複数の作業を並行して進められるようになります。

### [8. マージとコンフリクト - 変更の統合](https://fcircle-biz.github.io/tech_docs/guide/development-processes/git-github/git-github-learning-material-08.html)
ブランチを統合（マージ）する方法と、コンフリクト（競合）の解決方法を学びます。マージとは何か（ブランチを一つにまとめる）、git mergeコマンドの使い方、Fast-forwardマージと3-wayマージの違い、コンフリクト（競合）とは何か（同じ場所を別々に編集した場合）、コンフリクトの発生と確認方法、コンフリクトの解決手順（手動での編集）、GitHub Desktopでのマージとコンフリクト解決、マージを取り消す方法（git merge --abort）について、実際のシナリオを使って解説します。

### [9. プルリクエスト入門 - チーム開発の第一歩](https://fcircle-biz.github.io/tech_docs/guide/development-processes/git-github/git-github-learning-material-09.html)
GitHubのプルリクエスト機能を学び、チーム開発の基本を理解します。プルリクエスト（Pull Request）とは何か、なぜプルリクエストを使うのか（コードレビュー、変更の可視化）、プルリクエストの作成方法、プルリクエストの説明の書き方、レビューとコメント機能、変更の追加とレビューへの対応、プルリクエストのマージ、ドラフトプルリクエストの活用、プルリクエストのベストプラクティスについて解説します。チーム開発のワークフローを体験できます。

### [10. 実践Git/GitHub - 個人プロジェクトでの活用](https://fcircle-biz.github.io/tech_docs/guide/development-processes/git-github/git-github-learning-material-10.html)
これまで学んだ内容を統合し、実際の個人プロジェクトでGit/GitHubを活用する方法を学びます。.gitignoreファイルの作成と設定、READMEの書き方とMarkdown記法、ライセンスの選び方と追加、効果的なコミットメッセージの書き方、タグとリリースの作成、GitHubのIssues機能の活用、GitHub Pagesでの静的サイト公開、日常的なGitワークフローの実践について解説します。自分のプロジェクトで実際にGit/GitHubを使いこなせるようになります。

### [11. トラブルシューティング - よくある問題と解決方法](https://fcircle-biz.github.io/tech_docs/guide/development-processes/git-github/git-github-learning-material-11.html)
Git/GitHubでよく発生する問題とその解決方法を学びます。「変更が消えた！」と思った時の対処法（git reflog）、間違えてコミットした時の修正方法（git commit --amend）、コミットを取り消したい時（git reset, git revert）、プッシュできない時のエラー対処、プル時のコンフリクト解決、認証エラーの解決方法、「detached HEAD」状態からの復帰、リポジトリの状態がおかしくなった時の対処、よくあるエラーメッセージの意味と対処法について、具体例と共に解説します。

### [12. 次のステップへ - Git/GitHub中級への橋渡し](https://fcircle-biz.github.io/tech_docs/guide/development-processes/git-github/git-github-learning-material-12.html)
入門レベルを卒業し、次のステップに進むための知識を学びます。git rebaseの基本（履歴を整理する）、git stashの活用（作業を一時退避）、git cherry-pickの使い方（特定のコミットだけ取り込む）、Git Flowとは（ブランチ戦略の紹介）、GitHub Flow（よりシンプルなワークフロー）、GitHub Actions入門（自動化の世界への第一歩）、チーム開発でのGit運用ルール、学習リソースと次に学ぶべきこと（DevOps、CI/CD等）について解説します。

## 学習の進め方

1. **順番に学習する**: 必ず第1章から順番に進めてください。後の章は前の章の知識を前提としています。
2. **実際に手を動かす**: 読むだけでなく、必ず自分のパソコンで同じ操作を実行してください。Gitは「やってみる」ことで理解が深まります。
3. **GUIから始める**: 最初はGitHub Desktopで概念を理解し、慣れてからコマンドラインに挑戦しましょう。
4. **エラーを恐れない**: エラーが出ても大丈夫です。Gitは「やり直し」が得意なツールです。エラーメッセージをよく読んで対処法を学びましょう。
5. **練習用リポジトリを活用**: 大切なファイルではなく、練習用のフォルダで自由に試してください。
6. **分からない用語は都度確認**: 専門用語が出てきたら、飛ばさずにその場で意味を確認しましょう。
7. **繰り返し練習**: 一度で覚えようとせず、同じ操作を何度も繰り返して体で覚えましょう。

## 推奨学習期間

- **基礎理解コース** (1-4章): 1-2週間
  - Git/GitHubの概念理解、環境構築、GUIでの基本操作
  - 1日30分-1時間の学習で、GitHubを使い始められます

- **コマンドライン習得コース** (5-8章): 2-3週間
  - コマンドラインでのGit操作、ブランチとマージ
  - 実際のプロジェクトで基本的な操作ができるようになります

- **実践活用コース** (9-12章): 2-3週間
  - プルリクエスト、実践的なワークフロー、トラブルシューティング
  - チーム開発に参加できる基礎力が身につきます

**合計学習期間**: 5-8週間（1-2ヶ月、1日30分-1時間の学習を想定）

※ 既にプログラミング経験がある方、コマンドラインに慣れている方は、より短期間で学習を進められます。

## 関連リソース

### チートシート
- [Gitコマンドチートシート](https://fcircle-biz.github.io/tech_docs/cheatsheet/fundamentals/git-cheatsheet.html)

### 関連ガイドライン
- [DevOps学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/development-processes/devops/) - Git/GitHub習得後の次のステップとして最適

### 外部リソース
- [Git公式ドキュメント（日本語）](https://git-scm.com/book/ja/v2) - 詳細なリファレンス
- [GitHub Skills](https://skills.github.com/) - GitHub公式の無料学習コース
- [Learn Git Branching](https://learngitbranching.js.org/?locale=ja) - ブランチ操作を視覚的に学べる
- [GitHub Guides](https://guides.github.com/) - GitHub公式ガイド集
- [サル先生のGit入門](https://backlog.com/ja/git-tutorial/) - 日本語で分かりやすい入門サイト

## 学習目標

このガイドを完了すると、以下のスキルを身につけることができます：

- **バージョン管理の理解**: なぜバージョン管理が必要か、Gitの仕組みを説明できる
- **環境構築**: Git、GitHub Desktop、VS Codeを自分でインストール・設定できる
- **GUI操作**: GitHub Desktopで基本的なGit操作ができる
- **GitHub活用**: GitHubでリポジトリを作成し、コードを公開・共有できる
- **コマンドライン操作**: ターミナルで基本的なGitコマンドを実行できる
- **ブランチ操作**: ブランチを作成・切り替え・マージできる
- **コンフリクト解決**: マージ時のコンフリクトを理解し、解決できる
- **プルリクエスト**: プルリクエストを作成し、レビューに参加できる
- **個人プロジェクト運用**: 自分のプロジェクトでGit/GitHubを活用できる
- **トラブル対応**: よくあるGitの問題を自力で解決できる
- **チーム開発の基礎**: チーム開発に参加するための基礎知識がある

## よくある質問（FAQ）

### Q: GitとGitHubは別々に学ぶ必要がありますか？
A: いいえ、本ガイドでは両方を一緒に学びます。Gitの基本操作を学びながら、同時にGitHubでの公開・共有も実践します。

### Q: コマンドラインは必須ですか？
A: 最初はGitHub Desktop（GUI）だけでも大丈夫です。ただし、より高度な操作や、多くの開発現場ではコマンドライン操作が求められるため、徐々に習得することをお勧めします。

### Q: プログラミング経験がなくても大丈夫ですか？
A: はい、大丈夫です。Git/GitHubはプログラムのソースコード管理によく使われますが、文書ファイルやデザインファイルの管理にも使えます。本ガイドはプログラミング未経験者でも理解できるよう設計されています。

### Q: 間違えてファイルを消してしまったらどうなりますか？
A: Gitは変更履歴を記録しているため、ほとんどの場合、過去の状態に戻すことができます。第11章のトラブルシューティングで詳しく学びます。

### Q: 無料で学習できますか？
A: はい、Git、GitHub（個人利用）、GitHub Desktop、VS Codeはすべて無料で使用できます。

## 次のステップ

このガイドライン完了後は、以下の学習に進むことをお勧めします：

### 開発プロセス・DevOps
- [DevOps学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/development-processes/devops/) - CI/CD、自動化、コンテナ技術を学ぶ
- [アジャイル開発学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/development-processes/agile-development/) - チーム開発手法を学ぶ

### プログラミング言語
- [Python学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/python/) - 人気のプログラミング言語
- [JavaScript学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/javascript-beginner/) - Web開発の基礎

### クラウド・インフラ
- [Docker学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/docker/) - コンテナ技術の基礎

Git/GitHubは現代のソフトウェア開発において必須のスキルです。このガイドで学んだ知識は、どのような技術分野に進んでも必ず役立ちます。焦らず、一歩ずつ確実に習得していきましょう。
