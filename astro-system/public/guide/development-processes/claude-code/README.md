# Claude Code 学習ガイドライン

このガイドラインでは、Anthropic の agentic コーディングツール **Claude Code** の基礎を、入門者向けに段階的に学習するためのカリキュラムを提供しています。

「インストールして動かす」だけで終わらず、**Explore → Plan → Code → Commit** という実践ワークフロー、コンテキスト管理、CLAUDE.md・サブエージェント・MCP・フックといったカスタマイズ機能まで、実務で使いこなすための知識を体系的に身につけます。

## 前提条件

### 必要な環境

- macOS / Linux / Windows（WSL 推奨）のいずれか
- ターミナル（コマンドライン）が使える環境
- Claude アカウント（Pro・Max・Enterprise のいずれか）または Anthropic API キー
- Git がインストールされていること（第10章の Git 連携で使用）
- 任意: Visual Studio Code または JetBrains 系 IDE（第3章の IDE 連携で使用）

### 参考リソース

- [Claude Code 公式ドキュメント](https://docs.claude.com/ja/docs/claude-code/overview)
- [Anthropic 公式サイト](https://www.anthropic.com/)
- **Claude Skills 入門** — スキル機能は本ガイドの対象外です。別ガイドとして提供予定です。

### 前提知識

- **必須**: 基本的なターミナル操作（`cd`・`ls` などのコマンド実行）、いずれかのプログラミング言語での開発経験
- **推奨**: Git / GitHub の基本操作（`commit`・`push`・プルリクエスト）、JSON / Markdown の読み書き

## 学習コンテンツ

### [1. Claude Codeとは](https://fcircle-biz.github.io/tech-docs-v2/guide/development-processes/claude-code/claude-code-learning-material-01.html)

Claude Code が「あなたのファイル・ターミナル・コードベースに直接アクセスして作業する agentic なコーディングツール」であることを学びます。Claude.ai（チャット）との違い、AI エージェントとは何か、Claude Code でできること、5つの提供形態、そして効果的に使うための3つの心構えを理解します。

### [2. Claude Codeの仕組み](https://fcircle-biz.github.io/tech-docs-v2/guide/development-processes/claude-code/claude-code-learning-material-02.html)

Claude Code の中核である**エージェントループ**（プロンプト → コンテキスト収集 → 行動 → 検証 → ループ）を学びます。コンテキストウィンドウ、ツール、そして3つの許可モード（承認モード・自動承認モード・プランモード）の全体像をつかみます。

### [3. インストールとセットアップ](https://fcircle-biz.github.io/tech-docs-v2/guide/development-processes/claude-code/claude-code-learning-material-03.html)

OS 別のインストール手順、`claude` コマンドの起動と初期設定（テーマ選択・サインイン）を学びます。ターミナル・VS Code・JetBrains・デスクトップアプリ・Web の5つのクライアントの特徴と選び方も比較します。

### [4. 最初のプロンプトと許可モード](https://fcircle-biz.github.io/tech-docs-v2/guide/development-processes/claude-code/claude-code-learning-material-04.html)

`Shift + Tab` による許可モードの切り替えと、読み取り専用で計画を立てる**プランモード**を学びます。「ダークモードのトグルを追加する」という実例を通して、最初の依頼を安全に出す流れを体験します。

### [5. 探索と計画（Explore・Plan）](https://fcircle-biz.github.io/tech-docs-v2/guide/development-processes/claude-code/claude-code-learning-material-05.html)

本ガイドで最も重要な **Explore → Plan → Code → Commit** ワークフローの前半を学びます。いきなりコードを書かせずプランモードで探索・計画することが、なぜ後の手戻りを減らすのかを理解します。

### [6. 実装とコミット（Code・Commit）](https://fcircle-biz.github.io/tech-docs-v2/guide/development-processes/claude-code/claude-code-learning-material-06.html)

ワークフロー後半の実装とコミットを学びます。成功基準を明確にする・ツールを追加する・テストスイートを用意するという3つのコツと、コミット前にサブエージェントでレビューする流れを身につけます。

### [7. コンテキスト管理](https://fcircle-biz.github.io/tech-docs-v2/guide/development-processes/claude-code/claude-code-learning-material-07.html)

Claude の作業記憶であるコンテキストウィンドウの仕組みと、`/compact`・`/clear`・`/context` の使い分けを学びます。コンテキストを節約する3つのコツは、以降の章すべての土台になります。

### [8. CLAUDE.mdでプロジェクトの記憶を作る](https://fcircle-biz.github.io/tech-docs-v2/guide/development-processes/claude-code/claude-code-learning-material-08.html)

セッションをまたいでプロジェクトの前提を伝える CLAUDE.md を学びます。書き方の実例、プロジェクトレベルとユーザーレベルの階層、`@` によるドキュメント参照、`/init` による生成、そして肥大化を防ぐ運用のコツを扱います。

### [9. サブエージェント](https://fcircle-biz.github.io/tech-docs-v2/guide/development-processes/claude-code/claude-code-learning-material-09.html)

独立したコンテキストウィンドウで並行動作し、要約だけを返す**サブエージェント**を学びます。`/agents` コマンドでの作成手順と、YAML フロントマターを含む定義ファイルの書き方を身につけます。

### [10. Git連携とコードレビュー](https://fcircle-biz.github.io/tech-docs-v2/guide/development-processes/claude-code/claude-code-learning-material-10.html)

読み取り専用に制限した code-reviewer サブエージェントによるレビュー、`/commit-push-pr` によるコミット〜PR 作成、`claude --from-pr` によるセッション引き継ぎといった Git ワークフローを学びます。

### [11. MCPで外部ツールとつなぐ](https://fcircle-biz.github.io/tech-docs-v2/guide/development-processes/claude-code/claude-code-learning-material-11.html)

Model Context Protocol（MCP）で Claude Code を外部サービスに接続する方法を学びます。HTTP / Stdio の違い、Local / User / Project の3スコープ、そして見落としがちな「コンテキストのコスト」を理解します。

### [12. フックで動作を確実にする](https://fcircle-biz.github.io/tech-docs-v2/guide/development-processes/claude-code/claude-code-learning-material-12.html)

ライフサイクル上の特定のタイミングで**必ず**コマンドを実行するフックを学びます。代表的な5つのイベント、`settings.json` での設定、編集後の自動フォーマット、PreToolUse による危険操作のブロックを扱います。

### [13. トラブルシューティング](https://fcircle-biz.github.io/tech-docs-v2/guide/development-processes/claude-code/claude-code-learning-material-13.html)

起動できない・コンテキストが逼迫する・プランどおりに実装されない・MCP がつながらない・フックが発火しないなど、入門者がつまずきやすい症状を原因別に切り分け、自力で復旧する方法を学びます。

### [14. まとめと次のステップ](https://fcircle-biz.github.io/tech-docs-v2/guide/development-processes/claude-code/claude-code-learning-material-14.html)

全13章の要点を1枚に整理し、明日から実践する習慣チェックリストとチーム導入ロードマップをまとめます。次に学ぶべきガイドへの道筋も示します。

## 推奨所要時間

| 章 | 内容 | 目安時間 |
|----|------|----------|
| 第1章 | Claude Codeとは | 40分 |
| 第2章 | Claude Codeの仕組み | 40分 |
| 第3章 | インストールとセットアップ | 50分 |
| 第4章 | 最初のプロンプトと許可モード | 45分 |
| 第5章 | 探索と計画（Explore・Plan） | 50分 |
| 第6章 | 実装とコミット（Code・Commit） | 50分 |
| 第7章 | コンテキスト管理 | 50分 |
| 第8章 | CLAUDE.mdでプロジェクトの記憶を作る | 45分 |
| 第9章 | サブエージェント | 45分 |
| 第10章 | Git連携とコードレビュー | 45分 |
| 第11章 | MCPで外部ツールとつなぐ | 50分 |
| 第12章 | フックで動作を確実にする | 50分 |
| 第13章 | トラブルシューティング | 40分 |
| 第14章 | まとめと次のステップ | 35分 |
| **合計** | | **約11時間** |

## 学習目標

このガイドを完了すると、以下のスキルを身につけることができます：

- Claude Code が agentic なコーディングツールである意味と、エージェントループの動作を説明できる
- 自分の環境に Claude Code を導入し、目的に応じて5つのクライアントを使い分けられる
- 許可モード（承認モード・自動承認モード・プランモード）を `Shift + Tab` で切り替え、安全に作業を進められる
- **Explore → Plan → Code → Commit** のワークフローで、手戻りの少ない開発を実践できる
- コンテキストウィンドウの消費を意識し、`/compact`・`/clear`・`/context` を適切に使い分けられる
- CLAUDE.md にプロジェクトの前提を記述し、チームで共有できる
- サブエージェントでコンテキストを分離し、探索やコードレビューを効率化できる
- MCP で外部ツールと連携しつつ、コンテキストコストを抑えた構成を選べる
- フックで「毎回必ず実行したい処理」を決定的に強制できる
- よくあるつまずきを切り分け、自力で復旧できる

## 次のステップ

- **Claude Skills 入門** — 本ガイドでは概要のみ触れた「スキル（Agent Skills）」を、作り方から実践まで体系的に学びます
- [Git・GitHub 入門学習ガイド](https://fcircle-biz.github.io/tech-docs-v2/guide/development-processes/git-github/git-github-learning-material-01.html) — 第10章の Git 連携をより深く理解するための基礎
- [Claude 入門学習ガイド](https://fcircle-biz.github.io/tech-docs-v2/guide/data-ai-category/generative-ai/claude/claude-learning-material-01.html) — Claude そのものの使い方とプロンプトの基礎
- [Claude Code 公式ドキュメント](https://docs.claude.com/ja/docs/claude-code/overview) — 最新の機能・オプションの確認
