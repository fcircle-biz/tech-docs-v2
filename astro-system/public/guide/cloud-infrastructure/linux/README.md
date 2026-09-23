# Linux・コマンドライン入門 学習ガイドライン

このガイドラインでは、Linux とコマンドライン（ターミナル操作）の基礎を入門者向けに段階的に学習するためのカリキュラムを提供しています。Ubuntu を題材に、ファイル操作からテキスト処理、権限・プロセス・パッケージ管理、そしてシェルスクリプトによる自動化までを、手を動かしながら身につけます。

## 前提条件

### 必要な環境
- Windows 10（22H2 以降）/ Windows 11、または macOS（Apple Silicon / Intel）のPC
- 学習用の Ubuntu 24.04 LTS 環境（Windows は WSL2、Mac は Multipass で構築。第2章で手順を解説）
- 8GB 以上のメモリ、10GB 以上の空きディスク容量を推奨

### 参考リソース
- [Ubuntu 公式ドキュメント](https://help.ubuntu.com/)
- [WSL のドキュメント（Microsoft Learn）](https://learn.microsoft.com/ja-jp/windows/wsl/)
- [Multipass 公式サイト](https://canonical.com/multipass)
- [GNU Bash マニュアル](https://www.gnu.org/software/bash/manual/)

### 前提知識
- **必須**: Windows または Mac の基本的な操作（ファイル・フォルダの扱い、アプリのインストール）
- **推奨**: プログラミングの経験は不要。キーボード入力に慣れていると学習がスムーズです

## 学習コンテンツ

### [1. Linuxとコマンドラインとは](https://fcircle-biz.github.io/tech-docs-v2/guide/cloud-infrastructure/linux/linux-learning-material-01.html)
OS と Linux の関係、カーネルとディストリビューション、ターミナル・シェル・コマンドの関係を学び、コマンドラインを学ぶ理由を理解します。

### [2. 学習環境を準備する](https://fcircle-biz.github.io/tech-docs-v2/guide/cloud-infrastructure/linux/linux-learning-material-02.html)
Windows では WSL2、Mac では Multipass を使って Ubuntu 24.04 を導入し、起動確認と初回アップデートを行います。

### [3. はじめてのコマンドとシェルの基本](https://fcircle-biz.github.io/tech-docs-v2/guide/cloud-infrastructure/linux/linux-learning-material-03.html)
プロンプトの読み方、コマンド・オプション・引数の書式、Tab 補完・履歴・ショートカット、man と --help によるマニュアルの引き方を学びます。

### [4. ディレクトリ構造とパス](https://fcircle-biz.github.io/tech-docs-v2/guide/cloud-infrastructure/linux/linux-learning-material-04.html)
Linux のディレクトリツリーと主要ディレクトリの役割、pwd・ls・cd による移動、絶対パスと相対パスの違いを学びます。

### [5. ファイルとディレクトリの操作](https://fcircle-biz.github.io/tech-docs-v2/guide/cloud-infrastructure/linux/linux-learning-material-05.html)
touch・mkdir・cp・mv・rm による作成・コピー・移動・削除と、ワイルドカード・ブレース展開による効率的な操作を学びます。

### [6. ファイルの中身を見る・編集する](https://fcircle-biz.github.io/tech-docs-v2/guide/cloud-infrastructure/linux/linux-learning-material-06.html)
cat・less・head・tail でファイルを表示し、nano と vim の最低限の操作でテキストファイルを編集します。

### [7. 検索とテキスト処理](https://fcircle-biz.github.io/tech-docs-v2/guide/cloud-infrastructure/linux/linux-learning-material-07.html)
find によるファイル検索、grep による文字列検索、wc・sort・uniq・cut・tr によるテキスト処理を学びます。

### [8. リダイレクトとパイプ](https://fcircle-biz.github.io/tech-docs-v2/guide/cloud-infrastructure/linux/linux-learning-material-08.html)
標準入力・標準出力・標準エラー出力の仕組みと、リダイレクト・パイプ・tee・コマンドの連続実行でコマンドを組み合わせる方法を学びます。

### [9. ユーザーとパーミッション](https://fcircle-biz.github.io/tech-docs-v2/guide/cloud-infrastructure/linux/linux-learning-material-09.html)
ユーザーとグループ、root と sudo、パーミッション（rwx・数値表記）の読み方と、chmod・chown による権限の変更を学びます。

### [10. プロセスとジョブの管理](https://fcircle-biz.github.io/tech-docs-v2/guide/cloud-infrastructure/linux/linux-learning-material-10.html)
プロセスと PID、ps・top による状態確認、kill によるシグナル送信、フォアグラウンド／バックグラウンドのジョブ制御を学びます。

### [11. パッケージ管理と環境変数](https://fcircle-biz.github.io/tech-docs-v2/guide/cloud-infrastructure/linux/linux-learning-material-11.html)
apt によるソフトウェアのインストール・更新・削除、環境変数と PATH の仕組み、.bashrc による alias・設定のカスタマイズを学びます。

### [12. ネットワークとリモート操作の基本](https://fcircle-biz.github.io/tech-docs-v2/guide/cloud-infrastructure/linux/linux-learning-material-12.html)
IP アドレスとポートの基礎、ip・ping・curl・ss による確認、SSH の公開鍵認証と scp によるファイル転送を学びます。

### [13. シェルスクリプト入門](https://fcircle-biz.github.io/tech-docs-v2/guide/cloud-infrastructure/linux/linux-learning-material-13.html)
シバン・実行権限・変数・引数・条件分岐・繰り返し・終了ステータスを学び、作業を自動化する小さなスクリプトを書きます。

### [14. 総合演習: ログ集計とバックアップの自動化](https://fcircle-biz.github.io/tech-docs-v2/guide/cloud-infrastructure/linux/linux-learning-material-14.html)
これまでのコマンドを組み合わせ、アクセスログの集計レポートと日付付きバックアップを作るスクリプトを完成させ、cron による定期実行を体験します。

## 推奨所要時間

| 章 | 内容 | 目安時間 |
|----|------|----------|
| 第1章 | Linuxとコマンドラインとは | 40分 |
| 第2章 | 学習環境を準備する | 1時間 |
| 第3章 | はじめてのコマンドとシェルの基本 | 1時間 |
| 第4章 | ディレクトリ構造とパス | 1時間 |
| 第5章 | ファイルとディレクトリの操作 | 1時間10分 |
| 第6章 | ファイルの中身を見る・編集する | 1時間10分 |
| 第7章 | 検索とテキスト処理 | 1時間20分 |
| 第8章 | リダイレクトとパイプ | 1時間10分 |
| 第9章 | ユーザーとパーミッション | 1時間20分 |
| 第10章 | プロセスとジョブの管理 | 1時間 |
| 第11章 | パッケージ管理と環境変数 | 1時間10分 |
| 第12章 | ネットワークとリモート操作の基本 | 1時間 |
| 第13章 | シェルスクリプト入門 | 1時間30分 |
| 第14章 | 総合演習: ログ集計とバックアップの自動化 | 1時間30分 |
| **合計** | | **約16時間** |

## 学習目標

このガイドを完了すると、以下のスキルを身につけることができます：

- ターミナルでディレクトリを移動し、ファイル・ディレクトリを作成・コピー・移動・削除できる
- grep・find・sort・uniq などを組み合わせ、ログやCSVから必要な情報を取り出せる
- リダイレクトとパイプで複数のコマンドをつなぎ、結果をファイルに保存できる
- パーミッションを読み解き、chmod・chown・sudo を安全に使い分けられる
- プロセスの確認・停止、apt によるソフトウェアの導入、環境変数の設定ができる
- SSH で別のマシンに接続し、ファイルを転送できる
- 簡単なシェルスクリプトを書いて、定型作業を自動化できる

## 次のステップ

- [Docker 学習ガイド](https://fcircle-biz.github.io/tech-docs-v2/guide/cloud-infrastructure/docker/docker-learning-material-01.html) — Linux の知識を土台にコンテナ技術を学ぶ
- [Git/GitHub 学習ガイド](https://fcircle-biz.github.io/tech-docs-v2/guide/development-processes/git-github/git-github-learning-material-01.html) — コマンドラインでバージョン管理を行う
