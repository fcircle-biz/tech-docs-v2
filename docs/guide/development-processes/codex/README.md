# Codex 入門 学習ガイドライン

このガイドラインでは、Codex（OpenAI 公式のエージェント型コーディング CLI）の基礎を入門者向けに段階的に学習するためのカリキュラムを提供しています。ターミナル上で対話しながら、コードの作成・修正・調査・テスト・Git 操作までを AI に任せられる新しい開発スタイルを、基礎から実践まで身につけます。

## 前提条件

### 必要な環境
- 公式インストーラ、npm（Node.js 18 以上）、または Homebrew のいずれか
- macOS / Windows / Linux のいずれか（Windows はネイティブ対応。Linux 互換環境が必要な場合は WSL2 も利用可）
- ターミナル（コマンドライン）が利用できる環境
- ChatGPT アカウント（Plus / Pro / Business / Edu / Enterprise などの対象プラン）または OpenAI Platform の API キー

### 参考リソース
- Codex 公式ドキュメント: https://developers.openai.com/codex/
- Codex CLI リポジトリ（フィードバック・Issue）: https://github.com/openai/codex
- OpenAI 公式サイト: https://openai.com/
- Model Context Protocol（MCP）: https://modelcontextprotocol.io/

### 前提知識
- **必須**: 基本的なターミナル操作（ディレクトリ移動・コマンド実行）、テキストエディタの基本操作
- **推奨**: 何らかのプログラミング経験、Git の基本概念、TOML / JSON の読み方

## 学習コンテンツ

### [1. 第1章: Codexとは](https://fcircle-biz.github.io/tech_docs/guide/development-processes/codex/codex-learning-material-01.html)
Codex の全体像をつかみます。OpenAI が提供するエージェント型コーディング CLI とは何か、何ができるのか（コード生成・修正・リファクタリング・デバッグ・調査・テスト・Git 操作）、従来のチャット型 AI やコード補完ツール（GitHub Copilot 等）とどう違うのかを学びます。「指示を理解し、自分でファイルを読み、計画し、編集し、検証する」というエージェント型の働き方の全体像を理解します。

### [2. 第2章: AI支援開発の基礎知識](https://fcircle-biz.github.io/tech_docs/guide/development-processes/codex/codex-learning-material-02.html)
Codex を使いこなすための前提となる基礎知識を学びます。大規模言語モデル（LLM）、トークン、コンテキストウィンドウ、エージェント、ツール（ツール使用）といった基本用語を平易に解説し、「読む → 計画する → 編集する → 検証する」というエージェントの基本ループを理解します。補完型・チャット型・エージェント型の違いも整理します。

### [3. 第3章: インストールと初期設定](https://fcircle-biz.github.io/tech_docs/guide/development-processes/codex/codex-learning-material-03.html)
Codex を実際にインストールします。公式インストーラ・npm（`npm install -g @openai/codex`）・Homebrew のいずれかでの導入、対応プラットフォーム、`codex` コマンドでの起動、初回のサインイン（ChatGPT アカウント / API キー）、動作確認までを手順に沿って進めます。

### [4. 第4章: 基本操作と最初のセッション](https://fcircle-biz.github.io/tech_docs/guide/development-processes/codex/codex-learning-material-04.html)
Codex の対話の流れを体験します。`codex` コマンドでの起動、ターミナル UI（TUI）の見方、プロンプト（指示）の送り方、応答の読み方、処理の中断、セッションの再開（`codex resume`）など、日々の操作の基本を学びます。最初の簡単な依頼を出して、AI がどのように作業を進めるかを観察します。

### [5. 第5章: ファイルの読み書きとコード編集](https://fcircle-biz.github.io/tech_docs/guide/development-processes/codex/codex-learning-material-05.html)
Codex がファイルをどのように読み、編集するかを学びます。ファイルの参照、新規作成、既存ファイルの編集、差分（変更内容）の確認方法、複数ファイルにまたがる修正の進め方を理解します。AI に編集を任せつつ、変更内容を自分で確認・承認する流れを身につけます。

### [6. 第6章: コードベースの探索と理解](https://fcircle-biz.github.io/tech_docs/guide/development-processes/codex/codex-learning-material-06.html)
既存のプロジェクトを Codex に理解させ、調査に活用する方法を学びます。コード検索、プロジェクト構造の把握、「この関数はどこで使われている？」「この処理の流れを説明して」といった調査依頼の出し方、効果的な質問のコツを学びます。

### [7. 第7章: 承認モードとサンドボックス](https://fcircle-biz.github.io/tech_docs/guide/development-processes/codex/codex-learning-material-07.html)
Codex の安全な使い方の要となる承認モードとサンドボックスを学びます。承認モード（Read Only / Auto / Full Access）の違い、ファイル編集やコマンド実行の承認の流れ、サンドボックス（実行を隔離する仕組み）の役割、ネットワークアクセスの扱いなど、安全に使うためのセキュリティの基礎を理解します。

### [8. 第8章: AGENTS.mdとメモリ・コンテキスト管理](https://fcircle-biz.github.io/tech_docs/guide/development-processes/codex/codex-learning-material-08.html)
プロジェクト固有の指示を記述する `AGENTS.md` の役割と書き方を学びます。Codex に守らせたいルール・規約の書き方、配置場所による適用範囲、メモリ・コンテキストの考え方、長い会話でのコンテキスト管理（圧縮）、AI に意図を正しく伝える指示のコツを理解します。

### [9. 第9章: 設定ファイル（config.toml）とプロファイル](https://fcircle-biz.github.io/tech_docs/guide/development-processes/codex/codex-learning-material-09.html)
Codex の挙動を細かく調整する設定ファイル `~/.codex/config.toml` を学びます。承認モードやサンドボックスの既定値、使用モデルの選択、用途別に設定をまとめるプロファイルの作り方と切り替え方を理解し、自分の開発スタイルに合わせた環境を整えます。

### [10. 第10章: Git・GitHub連携](https://fcircle-biz.github.io/tech_docs/guide/development-processes/codex/codex-learning-material-10.html)
Codex を使ったバージョン管理ワークフローを学びます。変更内容のコミット、わかりやすいコミットメッセージの作成、ブランチ運用、`gh` CLI を使ったプルリクエスト（PR）作成や Issue 対応など、開発の実務に直結する操作を身につけます。

### [11. 第11章: MCPによる外部ツール連携](https://fcircle-biz.github.io/tech_docs/guide/development-processes/codex/codex-learning-material-11.html)
Model Context Protocol（MCP）の概念と、外部ツール・データソースとの連携方法を学びます。MCP とは何か、`config.toml` での MCP サーバーの追加方法、データベースや外部 API、ブラウザ操作などへ Codex の能力を拡張する具体例を理解します。

### [12. 第12章: 非対話実行と自動化（codex exec）](https://fcircle-biz.github.io/tech_docs/guide/development-processes/codex/codex-learning-material-12.html)
対話 UI を使わずに Codex を動かす `codex exec` を学びます。1 回のコマンドでタスクを実行する非対話モード、スクリプトや CI（継続的インテグレーション）への組み込み、出力の受け取り方など、繰り返し作業を仕組み化して自動化する考え方を理解します。

### [13. 第13章: 実践ワークフローとベストプラクティス](https://fcircle-biz.github.io/tech_docs/guide/development-processes/codex/codex-learning-material-13.html)
日々の開発で成果を出すための実践的な使い方を学びます。効果的なプロンプトの書き方、大きなタスクの分割、計画してから実行する進め方、テスト駆動での進め方、レビューの依頼など、よくある活用パターンと注意点（アンチパターン）を整理します。

### [14. 第14章: トラブルシューティングと次のステップ](https://fcircle-biz.github.io/tech_docs/guide/development-processes/codex/codex-learning-material-14.html)
つまずきやすいポイントと対処法をまとめ、学習の総仕上げをします。ログイン・認証エラー、承認・サンドボックスまわりの問題、応答が意図とずれるときの対処などのトラブルシューティングと、公式ドキュメント・コミュニティなど、さらに学びを深めるためのリソースを紹介します。

## 学習の進め方

1. **第1章・第2章で全体像と基礎用語を固める** — まず Codex が何で、どう動くのかのイメージをつかみます。
2. **第3章・第4章で実際に動かす** — インストールして最初のセッションを体験し、手を動かしながら理解します。
3. **第5章〜第10章で日常操作を習得する** — ファイル編集・コード調査・承認モード・AGENTS.md・設定・Git 連携という実務の中心を学びます。
4. **第11章・第12章で一歩進んだ使い方へ** — MCP と非対話実行・自動化で活用の幅を広げます。
5. **第13章・第14章で実践力を仕上げる** — ベストプラクティスとトラブルシューティングで、自走できる状態を目指します。

各章末の理解度確認クイズで知識を定着させ、できる限り自分の環境で実際に試しながら進めてください。

## 推奨所要時間

| 章 | 内容 | 目安時間 |
|------|------|----------|
| 第1章 | Codexとは | 約45分 |
| 第2章 | AI支援開発の基礎知識 | 約60分 |
| 第3章 | インストールと初期設定 | 約60分 |
| 第4章 | 基本操作と最初のセッション | 約75分 |
| 第5章 | ファイルの読み書きとコード編集 | 約75分 |
| 第6章 | コードベースの探索と理解 | 約60分 |
| 第7章 | 承認モードとサンドボックス | 約90分 |
| 第8章 | AGENTS.mdとメモリ・コンテキスト管理 | 約75分 |
| 第9章 | 設定ファイル（config.toml）とプロファイル | 約75分 |
| 第10章 | Git・GitHub連携 | 約75分 |
| 第11章 | MCPによる外部ツール連携 | 約90分 |
| 第12章 | 非対話実行と自動化（codex exec） | 約90分 |
| 第13章 | 実践ワークフローとベストプラクティス | 約75分 |
| 第14章 | トラブルシューティングと次のステップ | 約45分 |
| **合計** | | **約16時間** |

## 関連リソース
- [Claude Code 入門学習ガイド](https://fcircle-biz.github.io/tech_docs/guide/development-processes/claude-code/) — もう一つの代表的なエージェント型コーディング CLI と比較しながら学ぶために
- [Git・GitHub 学習ガイド](https://fcircle-biz.github.io/tech_docs/guide/development-processes/git-github/) — Codex の Git 連携をより深く理解するために
- [生成AI 学習ガイド](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/generative-ai/) — 生成 AI・LLM の基礎を広く学ぶために
- Codex 公式ドキュメント: https://developers.openai.com/codex/

## 学習目標
このガイドを完了すると、以下のスキルを身につけることができます：
- Codex の概要とエージェント型開発の考え方を説明できる
- Codex をインストールし、初期設定とサインインができる
- ターミナルで Codex と対話し、ファイル編集やコード調査を任せられる
- 承認モードとサンドボックスを理解し、安全に Codex を運用できる
- AGENTS.md や config.toml を活用して作業を効率化・カスタマイズできる
- Codex を使って変更のコミットやプルリクエスト作成ができる
- MCP・非対話実行（codex exec）で活用範囲を広げ、作業を自動化できる
- トラブルに自分で対処し、実務のワークフローに組み込める

## 次のステップ
このガイドライン完了後は、以下の学習に進むことをお勧めします：
- [Claude Code 入門学習ガイド](https://fcircle-biz.github.io/tech_docs/guide/development-processes/claude-code/)（もう一つのエージェント型 CLI を学び、使い分けられるようになる）
- [Git・GitHub 学習ガイド](https://fcircle-biz.github.io/tech_docs/guide/development-processes/git-github/)（バージョン管理の理解を深める）
- [DevOps 入門ガイド](https://fcircle-biz.github.io/tech_docs/guide/development-processes/devops-beginner/)（開発プロセス全体の自動化へ）
- Codex 公式ドキュメントの応用トピック（CI/CD 連携、高度な MCP 活用、非対話実行のスクリプト化 など）
