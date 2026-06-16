# DevOps入門 学習ガイドライン（プログラム未経験者向け）

このガイドラインでは、ITやプログラミングの経験がない方でも、DevOpsの世界を理解し、基礎から段階的に学べるカリキュラムを提供しています。「DevOps」という言葉を初めて聞いた方、ITエンジニアを目指している方、現在の仕事でITの知識が必要になった方に向けて、専門用語をできるだけ噛み砕いて説明し、身近な例を多用して解説します。

## 前提条件

### 必要な環境
- **パソコン**: Windows 10/11、macOS、または Linux が動作するPC
  - 特別なスペックは不要です（一般的な事務用PCで学習可能）
- **インターネット接続**: Webブラウザで調べ物ができる環境
- **Webブラウザ**: Google Chrome、Firefox、Microsoft Edge など

### 参考リソース
- [ITパスポート試験対策サイト](https://www.itpassportsiken.com/) - IT基礎用語の理解に役立ちます
- [Progate](https://prog-8.com/) - プログラミング入門の練習サイト
- [ドットインストール](https://dotinstall.com/) - 動画で学ぶプログラミング入門
- [Qiita](https://qiita.com/) - エンジニアの知識共有サービス

### 前提知識
- **必須**:
  - パソコンの基本操作（マウス操作、キーボード入力、ファイルの保存・開く）
  - インターネットの基本的な使い方（Webサイトの閲覧、検索）
- **推奨**:
  - 特になし（このガイドはゼロから学べるように設計されています）

## 学習コンテンツ

### [1. ITとソフトウェアの世界へようこそ](https://fcircle-biz.github.io/tech_docs/guide/development-processes/devops-beginner/devops-beginner-learning-material-01.html)
私たちの日常生活は、スマートフォンのアプリやWebサービスに支えられています。この章では、そうしたソフトウェアがどのように作られ、どのように私たちの手元に届くのかを、身近な例を使って解説します。「エンジニア」という職業の種類、IT業界の全体像、そして「DevOps」がなぜ注目されているのかを、専門用語を使わずに説明します。この章を読めば、IT業界の「地図」が頭に入り、これからの学習の見通しが立ちます。

### [2. DevOpsとは何か - 料理の例で理解する](https://fcircle-biz.github.io/tech_docs/guide/development-processes/devops-beginner/devops-beginner-learning-material-02.html)
「DevOps（デブオプス）」という言葉を、レストランの厨房に例えて解説します。開発（Dev = Development）は「料理を考案するシェフ」、運用（Ops = Operations）は「お客様に料理を届けるホールスタッフ」のようなものです。従来はこの2つのチームが別々に動いていましたが、DevOpsではお互いが協力し合うことで、より早く、より確実にサービスを届けられるようになります。この章では、DevOpsの考え方と、それがもたらすメリットを図解で分かりやすく説明します。

### [3. コンピュータの仕組み - ハードウェアとソフトウェア](https://fcircle-biz.github.io/tech_docs/guide/development-processes/devops-beginner/devops-beginner-learning-material-03.html)
DevOpsを理解するためには、コンピュータの基本的な仕組みを知ることが大切です。この章では、「CPU（頭脳）」「メモリ（作業机）」「ストレージ（本棚）」といったハードウェアの役割を、身近なたとえを使って説明します。また、OS（オペレーティングシステム）がなぜ必要なのか、アプリケーションとはどういうものなのかを学びます。この知識は、後の章でサーバーやクラウドを理解する土台になります。

### [4. コマンドラインの基礎 - 文字でコンピュータを操作する](https://fcircle-biz.github.io/tech_docs/guide/development-processes/devops-beginner/devops-beginner-learning-material-04.html)
普段私たちはマウスでクリックしてパソコンを操作しますが、エンジニアは「コマンドライン」という黒い画面で文字を打ってコンピュータを操作します。一見難しそうに見えますが、基本的なコマンドはわずか10個程度覚えれば十分です。この章では、Windows（コマンドプロンプト/PowerShell）とMac/Linux（ターミナル）の両方で使える基本コマンドを、実際に手を動かしながら学びます。フォルダの移動、ファイルの作成、内容の確認など、基本操作を習得します。

### [5. ファイルのバージョン管理 - 「保存」の進化版](https://fcircle-biz.github.io/tech_docs/guide/development-processes/devops-beginner/devops-beginner-learning-material-05.html)
Wordで文書を作成するとき、「報告書_v1.docx」「報告書_v2.docx」「報告書_最終版.docx」「報告書_最終版_修正.docx」と、どんどんファイルが増えた経験はありませんか？エンジニアは「Git（ギット）」というツールを使って、1つのファイルで全ての変更履歴を管理します。この章では、Gitの考え方を「タイムマシン」に例えて解説し、なぜバージョン管理がDevOpsで重要なのかを学びます。実際にGitを使った簡単な操作も体験します。

### [6. インターネットの仕組み - Webサービスが届くまで](https://fcircle-biz.github.io/tech_docs/guide/development-processes/devops-beginner/devops-beginner-learning-material-06.html)
スマートフォンでSNSを開くと、なぜ投稿が表示されるのでしょうか？この章では、インターネットの基本的な仕組みを「郵便システム」に例えて解説します。IPアドレス（住所）、DNS（電話帳）、HTTP/HTTPS（手紙の書き方のルール）など、ネットワークの基礎用語を学びます。この知識は、後の章でサーバーやクラウドを理解するために必要です。

### [7. サーバーとは何か - Webサービスの心臓部](https://fcircle-biz.github.io/tech_docs/guide/development-processes/devops-beginner/devops-beginner-learning-material-07.html)
私たちが使うWebサービスやアプリは、どこかにある「サーバー」というコンピュータで動いています。サーバーとは、24時間365日稼働し続ける「働き者のコンピュータ」です。この章では、サーバーの役割、種類（Webサーバー、データベースサーバー、アプリケーションサーバー）を説明し、「オンプレミス（自社設置）」と「クラウド（レンタル）」の違いを解説します。DevOpsエンジニアがサーバーをどのように管理するのかの概要も学びます。

### [8. ソフトウェア開発の流れ - アイデアから製品になるまで](https://fcircle-biz.github.io/tech_docs/guide/development-processes/devops-beginner/devops-beginner-learning-material-08.html)
1つのアプリやWebサービスができるまでには、様々な工程があります。この章では、「企画→設計→開発→テスト→リリース→運用」という流れを、新製品の開発に例えて解説します。「ウォーターフォール開発（滝のように一方向に流れる）」と「アジャイル開発（少しずつ素早く作る）」という2つの開発スタイルの違いを学び、DevOpsがどちらのスタイルと相性が良いのかを理解します。

### [9. 自動化の考え方 - 繰り返し作業をなくす魔法](https://fcircle-biz.github.io/tech_docs/guide/development-processes/devops-beginner/devops-beginner-learning-material-09.html)
DevOpsの核心は「自動化」にあります。人間が何度も同じ作業を繰り返すと、ミスが起きやすく、時間もかかります。この章では、「CI（継続的インテグレーション）」と「CD（継続的デリバリー/デプロイ）」という概念を、工場の生産ラインに例えて解説します。コードを書いたら自動でテストが実行され、問題がなければ自動で製品として公開される仕組みを、図解で分かりやすく説明します。

### [10. コンテナ技術入門 - アプリを「箱」に入れて運ぶ](https://fcircle-biz.github.io/tech_docs/guide/development-processes/devops-beginner/devops-beginner-learning-material-10.html)
「私のパソコンでは動いたのに、サーバーでは動かない...」というのは、エンジニアがよく経験する悩みです。この問題を解決するのが「コンテナ」という技術です。コンテナは、アプリケーションを「必要なものがすべて入った箱」に入れて、どこでも同じように動かせるようにします。この章では、Docker（ドッカー）というコンテナ技術を、引っ越しの段ボール箱に例えて解説します。

### [11. クラウドサービス入門 - 誰でも使えるコンピュータリソース](https://fcircle-biz.github.io/tech_docs/guide/development-processes/devops-beginner/devops-beginner-learning-material-11.html)
かつてはサーバーを使うために、高価なコンピュータを購入し、専用の部屋に設置する必要がありました。しかし今では、インターネット経由で「クラウド」からコンピュータリソースを借りることができます。この章では、AWS、Azure、Google Cloudといった主要クラウドサービスを、「電気」や「水道」のような公共サービスに例えて解説します。使った分だけ支払う仕組み、代表的なサービスの種類を学びます。

### [12. DevOpsエンジニアへの道 - 次のステップと学習の進め方](https://fcircle-biz.github.io/tech_docs/guide/development-processes/devops-beginner/devops-beginner-learning-material-12.html)
この章では、DevOpsエンジニアになるためのキャリアパスと、今後の学習の進め方を紹介します。どのようなスキルを身につけるべきか、どの順番で学ぶのが効率的か、おすすめの学習リソースや資格を紹介します。また、DevOpsに関連する職種（SRE、クラウドエンジニア、インフラエンジニア）についても解説し、自分に合ったキャリアを考えるヒントを提供します。

## 学習の進め方

1. **順番通りに学ぶ**: このガイドは「積み上げ式」で設計されています。第1章から順番に学習を進めてください。途中を飛ばすと、後の章が理解しにくくなることがあります。

2. **手を動かす**: 特にコマンドラインやGitの章では、実際にパソコンで操作を試してみてください。見るだけでなく、体験することで理解が深まります。

3. **分からない用語はメモする**: 初めて聞く用語が出てきたら、ノートにメモしておきましょう。多くの用語は後の章で詳しく説明されますが、自分で調べることも良い学習になります。

4. **焦らずゆっくり**: IT用語は最初は難しく感じるかもしれませんが、繰り返し触れることで自然と覚えていきます。焦らず、自分のペースで進めてください。

5. **実生活と結びつける**: 学んだことを、普段使っているスマートフォンのアプリやWebサービスと結びつけて考えてみてください。「このアプリはどんなサーバーで動いているのだろう？」と想像することで、理解が深まります。

## 推奨所要時間

| 章 | 内容 | 目安時間 |
|----------|------|----------|
| 第1章 | ITとソフトウェアの世界へようこそ | 45分 |
| 第2章 | DevOpsとは何か - 料理の例で理解する | 45分 |
| 第3章 | コンピュータの仕組み - ハードウェアとソフトウェア | 45分 |
| 第4章 | コマンドラインの基礎 - 文字でコンピュータを操作する | 1時間 |
| 第5章 | ファイルのバージョン管理 - 「保存」の進化版 | 1時間 |
| 第6章 | インターネットの仕組み - Webサービスが届くまで | 45分 |
| 第7章 | サーバーとは何か - Webサービスの心臓部 | 45分 |
| 第8章 | ソフトウェア開発の流れ - アイデアから製品になるまで | 45分 |
| 第9章 | 自動化の考え方 - 繰り返し作業をなくす魔法 | 1時間 |
| 第10章 | コンテナ技術入門 - アプリを「箱」に入れて運ぶ | 1時間 |
| 第11章 | クラウドサービス入門 - 誰でも使えるコンピュータリソース | 1時間 |
| 第12章 | DevOpsエンジニアへの道 - 次のステップと学習の進め方 | 45分 |
| **合計** | | **約10.5時間** |

## 関連リソース

### チートシート
- [IT基礎用語チートシート](https://fcircle-biz.github.io/tech_docs/cheatsheet/fundamentals/it-basic-terms-cheatsheet.html)（準備中）
- [コマンドライン基礎チートシート](https://fcircle-biz.github.io/tech_docs/cheatsheet/fundamentals/commandline-cheatsheet.html)（準備中）
- [Gitコマンドチートシート](https://fcircle-biz.github.io/tech_docs/cheatsheet/fundamentals/git-cheatsheet.html)

### 関連ガイドライン
- [DevOps学習ガイドライン（経験者向け）](https://fcircle-biz.github.io/tech_docs/guide/development-processes/devops/README.html) - このガイド完了後の次のステップ
- [Git/GitHub学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/development-processes/git-github/README.html) - Gitをさらに深く学ぶ
- [Linux基礎学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/os/linux/README.html)（準備中）
- [クラウドコンピューティング入門](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/cloud-computing/README.html)

### 外部リソース
- [ITパスポート試験](https://www3.jitec.ipa.go.jp/JitesCbt/) - IT基礎知識の国家資格
- [Progate](https://prog-8.com/) - プログラミング学習サービス
- [paizaラーニング](https://paiza.jp/works) - 動画で学ぶプログラミング
- [YouTube - IT用語解説チャンネル](https://www.youtube.com/) - 視覚的に学べる動画コンテンツ

## 学習目標

このガイドを完了すると、以下のスキルを身につけることができます：

- **IT業界の理解**: ソフトウェアがどのように作られ、どのように届けられるかの全体像を説明できる
- **DevOpsの概念理解**: DevOpsとは何か、なぜ重要なのかを、専門外の人にも分かりやすく説明できる
- **コンピュータの基礎知識**: ハードウェア、ソフトウェア、OSの役割を理解している
- **コマンドライン操作**: 基本的なコマンドを使って、ファイル操作やフォルダ移動ができる
- **バージョン管理の理解**: Gitの基本概念を理解し、簡単な操作ができる
- **ネットワークの基礎**: インターネットがどのように動いているかの基本を説明できる
- **サーバーの理解**: サーバーの役割と種類、オンプレミスとクラウドの違いを説明できる
- **開発プロセスの理解**: ソフトウェア開発の流れと、開発手法の違いを説明できる
- **自動化の概念**: CI/CDとは何か、なぜ重要なのかを説明できる
- **コンテナの概念**: Dockerとは何か、なぜ便利なのかを説明できる
- **クラウドの基礎**: クラウドサービスの種類と主要ベンダーを知っている
- **学習の方向性**: DevOpsエンジニアになるための次のステップを理解している

## 次のステップ

このガイドライン完了後は、以下の学習に進むことをお勧めします：

### プログラミングの基礎を学ぶ
- **Python入門**: 最も初心者に優しいプログラミング言語から始める
- **シェルスクリプト**: コマンドラインの操作を自動化するスクリプトを書く
- **HTML/CSS/JavaScript**: Webページの仕組みを理解する

### DevOpsツールを本格的に学ぶ
- **[DevOps学習ガイドライン（経験者向け）](https://fcircle-biz.github.io/tech_docs/guide/development-processes/devops/README.html)**: このガイドの上位版として、より実践的なスキルを習得
- **Git/GitHub**: バージョン管理をさらに深く学ぶ
- **Docker実践**: コンテナ技術を実際に使いこなす

### 資格取得を目指す
- **ITパスポート**: IT基礎知識の国家資格、履歴書に書ける
- **AWS認定 Cloud Practitioner**: クラウドの基礎資格
- **Linux技術者認定 (LPIC/LinuC)**: Linuxの基礎を証明する資格

### 実践的なスキルを身につける
- **個人プロジェクト**: 簡単なWebサイトやアプリを作ってみる
- **ハンズオンセミナー**: オンラインや対面のワークショップに参加する
- **コミュニティ活動**: 勉強会やイベントに参加して仲間を作る

このガイドで学んだ基礎知識は、今後どのようなIT技術を学ぶ際にも役立つ重要な土台となります。焦らず、楽しみながら学習を続けてください。IT業界は常に新しい技術が登場する刺激的な世界です。継続的な学習を通じて、一歩一歩スキルアップしていきましょう。
