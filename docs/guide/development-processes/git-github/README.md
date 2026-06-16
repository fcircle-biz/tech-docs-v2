# Git/GitHub入門 学習ガイドライン

このガイドラインでは、Git/GitHubの基礎を完全な初心者向けに段階的に学習するためのカリキュラムを提供しています。バージョン管理の概念を理解することから始め、コマンドラインでの操作を一通り習得した後、Visual Studio Code（VS Code）での操作方法を学ぶ構成となっています。

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
  - Visual Studio Code（VS Code、無料のテキストエディタ）

### 参考リソース
- [Git公式ドキュメント（日本語）](https://git-scm.com/book/ja/v2)
- [GitHub公式ドキュメント（日本語）](https://docs.github.com/ja)
- [Pro Git Book（無料オンライン書籍）](https://git-scm.com/book/ja/v2)
- [GitHub Skills（公式学習コース）](https://skills.github.com/)
- [Visual Studio Code公式サイト](https://code.visualstudio.com/)

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

本ガイドは3つのパートで構成されています：
- **Part 1（第1章〜第4章）**: Git/GitHubの概念理解と環境構築
- **Part 2（第5章〜第12章）**: コマンドラインでのGit操作の習得
- **Part 3（第13章〜第15章）**: VS Codeでの操作方法

---

### Part 1: 概念理解と環境構築

### [1. はじめてのバージョン管理 - なぜGitが必要なのか](https://fcircle-biz.github.io/tech_docs/guide/development-processes/git-github/git-github-learning-material-01.html)
バージョン管理の必要性とGitの基本概念を学びます。「なぜファイル名に日付をつけて保存するのは良くないのか」という身近な問題から始め、バージョン管理システムとは何か、Gitが生まれた背景と歴史（Linuxカーネル開発から誕生）、Gitの特徴（分散型バージョン管理）、GitとGitHubの違いの詳細解説、バージョン管理がもたらすメリット（履歴の追跡、ミスからの復旧、チーム開発の効率化）について解説します。専門用語（リポジトリ、コミット、ブランチ等）の日本語での丁寧な説明も含みます。

### [2. 環境構築 - GitとVS Codeのインストール](https://fcircle-biz.github.io/tech_docs/guide/development-processes/git-github/git-github-learning-material-02.html)
Gitと開発環境を自分のパソコンにインストールします。Windows、Mac、Linuxそれぞれの環境でのGitインストール手順、GitHubアカウントの作成方法、VS Codeのインストールと基本設定、Git Bashとターミナルの基本的な使い方、初期設定（ユーザー名とメールアドレスの登録）、インストールが正常に完了したかの確認方法について、スクリーンショット付きで解説します。

### [3. GitHubの基本 - アカウント作成とWebインターフェース](https://fcircle-biz.github.io/tech_docs/guide/development-processes/git-github/git-github-learning-material-03.html)
GitHubのWebサイトの使い方と基本機能を学びます。GitHubアカウントの作成とプロフィール設定、GitHubのダッシュボードと画面構成、新しいリポジトリの作成（Webから）、README.mdファイルの作成と編集、パブリックリポジトリとプライベートリポジトリの違い、他の人のリポジトリを見る・フォークする、Starとウォッチ機能について解説します。

### [4. Gitの仕組み - ローカルとリモートの関係](https://fcircle-biz.github.io/tech_docs/guide/development-processes/git-github/git-github-learning-material-04.html)
Gitの内部構造とデータの流れを図解で理解します。ワーキングディレクトリ、ステージングエリア、ローカルリポジトリの3つの領域、ローカルリポジトリとリモートリポジトリの関係、push/pull/fetchの概念理解、Gitオブジェクト（blob、tree、commit）の基礎、HEADとブランチポインタの仕組み、.gitディレクトリの役割について、図解を多用して視覚的に理解できるよう解説します。

---

### Part 2: コマンドラインでのGit操作

### [5. コマンドライン入門 - ターミナルの基本操作](https://fcircle-biz.github.io/tech_docs/guide/development-processes/git-github/git-github-learning-material-05.html)
コマンドライン（ターミナル）の基本を一から学びます。コマンドラインとは何か（なぜ必要か）、ターミナル/Git Bashの起動方法、カレントディレクトリとパスの概念、基本コマンド（cd, ls/dir, pwd, mkdir, rm, cp, mv）、コマンドのオプションと引数の使い方、Tab補完とコマンド履歴の活用、よくあるエラーと対処法について、実際に手を動かしながら学習します。

### [6. リポジトリの作成と基本操作 - git init, add, commit](https://fcircle-biz.github.io/tech_docs/guide/development-processes/git-github/git-github-learning-material-06.html)
コマンドラインでGitの基本操作を学びます。git initでリポジトリを作成、git statusで状態を確認、git addでステージング（変更の準備）、git commitで変更を記録、git logで履歴を確認、git diffで差分を確認、各コマンドの意味と使いどころを詳しく解説します。実際にサンプルプロジェクトを作成しながら一連の流れを体験します。

### [7. リモートリポジトリとの連携 - clone, push, pull](https://fcircle-biz.github.io/tech_docs/guide/development-processes/git-github/git-github-learning-material-07.html)
コマンドラインでGitHubと連携する方法を学びます。git remoteでリモートリポジトリを設定、git pushでGitHubにアップロード、git pullでGitHubから取得、git cloneで既存リポジトリを複製、HTTPS接続での認証設定、Personal Access Token（PAT）の作成と使用、SSH認証の設定（パスワードなしで接続）、よくあるエラーとその解決方法について解説します。

### [8. ブランチの基本 - 並行作業の概念と操作](https://fcircle-biz.github.io/tech_docs/guide/development-processes/git-github/git-github-learning-material-08.html)
ブランチの概念と基本的な使い方を学びます。ブランチとは何か（木の枝のイメージで解説）、なぜブランチが必要か（並行開発、実験的な変更）、mainブランチとは、git branchでブランチ一覧と作成、git checkout/git switchでブランチ切り替え、git checkout -b/git switch -cで作成と切り替えを同時に、ブランチの削除と名前変更、ブランチ運用のベストプラクティス（命名規則等）について解説します。

### [9. マージとコンフリクト - 変更の統合と競合解決](https://fcircle-biz.github.io/tech_docs/guide/development-processes/git-github/git-github-learning-material-09.html)
ブランチを統合（マージ）する方法と、コンフリクト（競合）の解決方法を学びます。マージとは何か（ブランチを一つにまとめる）、git mergeコマンドの使い方、Fast-forwardマージと3-wayマージの違い、コンフリクト（競合）とは何か（同じ場所を別々に編集した場合）、コンフリクトの発生と確認方法、コンフリクトマーカーの読み方、コンフリクトの解決手順（手動での編集）、マージを取り消す方法（git merge --abort）について、実際のシナリオを使って解説します。

### [10. プルリクエスト - チーム開発の基本ワークフロー](https://fcircle-biz.github.io/tech_docs/guide/development-processes/git-github/git-github-learning-material-10.html)
GitHubのプルリクエスト機能を学び、チーム開発の基本を理解します。プルリクエスト（Pull Request）とは何か、なぜプルリクエストを使うのか（コードレビュー、変更の可視化）、ブランチをプッシュしてプルリクエストを作成、プルリクエストの説明の書き方、レビューとコメント機能、変更の追加とレビューへの対応、プルリクエストのマージ方法（Merge, Squash, Rebase）、ドラフトプルリクエストの活用について解説します。

### [11. 実践的なGit操作 - 履歴の操作とトラブル対処](https://fcircle-biz.github.io/tech_docs/guide/development-processes/git-github/git-github-learning-material-11.html)
より実践的なGit操作とトラブルシューティングを学びます。git commit --amendで直前のコミットを修正、git resetで変更を取り消し（soft, mixed, hard）、git revertでコミットを打ち消し、git stashで作業を一時退避、git reflogで失った変更を復元、git cherry-pickで特定のコミットを取り込む、よくあるエラーメッセージと対処法、「detached HEAD」状態からの復帰について解説します。

### [12. プロジェクト管理 - .gitignore、タグ、リリース](https://fcircle-biz.github.io/tech_docs/guide/development-processes/git-github/git-github-learning-material-12.html)
実際のプロジェクトでGit/GitHubを活用するための知識を学びます。.gitignoreファイルの作成と設定（除外パターンの書き方）、効果的なコミットメッセージの書き方、git tagでバージョン番号を付ける、GitHubのリリース機能の活用、READMEの書き方とMarkdown記法、ライセンスの選び方と追加、GitHubのIssues機能の活用、GitHub Pagesでの静的サイト公開について解説します。

---

### Part 3: VS Codeでの操作

### [13. VS CodeでのGit操作入門 - GUI環境の活用](https://fcircle-biz.github.io/tech_docs/guide/development-processes/git-github/git-github-learning-material-13.html)
VS Codeの統合Git機能を使った操作を学びます。VS CodeのSource Control（ソース管理）パネルの使い方、ファイルの変更状態の確認（色分け表示の意味）、ステージングとコミットをGUIで実行、変更差分（Diff）の確認と比較、行単位でのステージング、VS Codeのターミナル統合機能、Git関連の設定カスタマイズについて、コマンドライン操作との対応を示しながら解説します。

### [14. VS Codeでのブランチとマージ - GUIでの分岐作業](https://fcircle-biz.github.io/tech_docs/guide/development-processes/git-github/git-github-learning-material-14.html)
VS Codeでブランチ操作とマージを行う方法を学びます。ステータスバーでのブランチ確認と切り替え、コマンドパレットでのブランチ作成、ブランチのマージ操作、コンフリクト発生時の3-wayマージエディタ、マージコンフリクトの視覚的な解決、GitLens拡張機能の導入と活用、その他おすすめのGit関連拡張機能について解説します。

### [15. VS CodeでのGitHub連携 - リモート操作とプルリクエスト](https://fcircle-biz.github.io/tech_docs/guide/development-processes/git-github/git-github-learning-material-15.html)
VS CodeからGitHubとシームレスに連携する方法を学びます。GitHub認証の設定（VS Code内でのサインイン）、リモートリポジトリへのpush/pull操作、GitHub Pull Requests拡張機能のインストールと設定、VS Code内でのプルリクエスト作成、プルリクエストのレビューとコメント、VS Codeでのコードレビューワークフロー、GitHub Copilotとの連携（紹介）、日常的な開発ワークフローのベストプラクティスについて解説します。

## 学習の進め方

1. **順番に学習する**: 必ず第1章から順番に進めてください。後の章は前の章の知識を前提としています。
2. **実際に手を動かす**: 読むだけでなく、必ず自分のパソコンで同じ操作を実行してください。Gitは「やってみる」ことで理解が深まります。
3. **コマンドを先に習得**: Part 2でコマンドライン操作を十分に理解してからPart 3のVS Code操作に進んでください。コマンドを理解していると、GUIツールでも「何が起きているか」を把握できます。
4. **エラーを恐れない**: エラーが出ても大丈夫です。Gitは「やり直し」が得意なツールです。エラーメッセージをよく読んで対処法を学びましょう。
5. **練習用リポジトリを活用**: 大切なファイルではなく、練習用のフォルダで自由に試してください。
6. **分からない用語は都度確認**: 専門用語が出てきたら、飛ばさずにその場で意味を確認しましょう。
7. **繰り返し練習**: 一度で覚えようとせず、同じ操作を何度も繰り返して体で覚えましょう。

## 推奨所要時間

| 章 | 内容 | 目安時間 |
|----------|------|----------|
| **Part 1: 概念理解と環境構築** | | |
| 第1章 | はじめてのバージョン管理 - なぜGitが必要なのか | 45分 |
| 第2章 | 環境構築 - GitとVS Codeのインストール | 1時間 |
| 第3章 | GitHubの基本 - アカウント作成とWebインターフェース | 45分 |
| 第4章 | Gitの仕組み - ローカルとリモートの関係 | 1時間 |
| **Part 2: コマンドライン操作** | | |
| 第5章 | コマンドライン入門 - ターミナルの基本操作 | 1時間 |
| 第6章 | リポジトリの作成と基本操作 - git init, add, commit | 1時間 |
| 第7章 | リモートリポジトリとの連携 - clone, push, pull | 1時間15分 |
| 第8章 | ブランチの基本 - 並行作業の概念と操作 | 1時間 |
| 第9章 | マージとコンフリクト - 変更の統合と競合解決 | 1時間15分 |
| 第10章 | プルリクエスト - チーム開発の基本ワークフロー | 1時間 |
| 第11章 | 実践的なGit操作 - 履歴の操作とトラブル対処 | 1時間30分 |
| 第12章 | プロジェクト管理 - .gitignore、タグ、リリース | 1時間15分 |
| **Part 3: VS Code操作** | | |
| 第13章 | VS CodeでのGit操作入門 - GUI環境の活用 | 45分 |
| 第14章 | VS Codeでのブランチとマージ - GUIでの分岐作業 | 1時間 |
| 第15章 | VS CodeでのGitHub連携 - リモート操作とプルリクエスト | 1時間 |
| **合計** | | **約15.5時間** |

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

### Part 1完了時
- **バージョン管理の理解**: なぜバージョン管理が必要か、Gitの仕組みを説明できる
- **環境構築**: Git、VS Codeを自分でインストール・設定できる
- **GitHub活用**: GitHubでリポジトリを作成し、Webインターフェースを操作できる

### Part 2完了時
- **コマンドライン操作**: ターミナルで基本的なGitコマンドを実行できる
- **リモート連携**: GitHubとのpush/pull操作ができる
- **ブランチ操作**: ブランチを作成・切り替え・マージできる
- **コンフリクト解決**: マージ時のコンフリクトを理解し、解決できる
- **プルリクエスト**: プルリクエストを作成し、レビューに参加できる
- **トラブル対応**: よくあるGitの問題を自力で解決できる

### Part 3完了時
- **VS Code Git操作**: VS Codeの統合Git機能を使いこなせる
- **効率的なワークフロー**: GUIとコマンドラインを状況に応じて使い分けられる
- **GitHub連携**: VS CodeからGitHubを直接操作できる

## よくある質問（FAQ）

### Q: なぜコマンドラインを先に学ぶのですか？
A: コマンドを理解していると、GUIツールで「何が起きているか」を正確に把握できます。また、トラブル時の対処やより高度な操作にはコマンドラインが必要になることが多いためです。

### Q: VS Codeだけで学習できませんか？
A: 本ガイドではコマンドラインを先に学ぶ構成ですが、VS Codeでの操作も丁寧に解説しています。ただし、Gitの仕組みを深く理解するためには、コマンドラインでの学習をお勧めします。

### Q: プログラミング経験がなくても大丈夫ですか？
A: はい、大丈夫です。Git/GitHubはプログラムのソースコード管理によく使われますが、文書ファイルやデザインファイルの管理にも使えます。本ガイドはプログラミング未経験者でも理解できるよう設計されています。

### Q: 間違えてファイルを消してしまったらどうなりますか？
A: Gitは変更履歴を記録しているため、ほとんどの場合、過去の状態に戻すことができます。第11章のトラブルシューティングで詳しく学びます。

### Q: 無料で学習できますか？
A: はい、Git、GitHub（個人利用）、VS Codeはすべて無料で使用できます。

## 次のステップ

このガイドライン完了後は、以下の学習に進むことをお勧めします：

### 開発プロセス・DevOps
- [DevOps学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/development-processes/devops/) - CI/CD、自動化、コンテナ技術を学ぶ
- [アジャイル開発学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/development-processes/agile-development/) - チーム開発手法を学ぶ

### プログラミング言語
- [Python学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/python-beginner/) - 人気のプログラミング言語
- [JavaScript学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/javascript-beginner/) - Web開発の基礎

### クラウド・インフラ
- [Docker学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/docker/) - コンテナ技術の基礎

Git/GitHubは現代のソフトウェア開発において必須のスキルです。このガイドで学んだ知識は、どのような技術分野に進んでも必ず役立ちます。焦らず、一歩ずつ確実に習得していきましょう。
