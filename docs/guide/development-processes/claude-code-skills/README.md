# Claude Skills 学習ガイドライン

このガイドラインでは、Claude Code の **スキル（Agent Skills）** 機能の基礎を、入門者向けに段階的に学習するためのカリキュラムを提供しています。

スキルとは、「あることのやり方」を一度だけ Markdown で書いておけば、関連する場面になるたびに Claude が自動的にその知識を適用してくれる仕組みです。同じ指示を何度も繰り返す状態から抜け出し、**チームの標準を再現性のある形でコード化する**ところまでを、作成・設定・共有・トラブルシューティングの順に学びます。

## 前提条件

### 必要な環境

- macOS / Linux / Windows（WSL 推奨）のいずれか
- ターミナル（コマンドライン）が使える環境
- Claude Code がインストール済みで、ログインが完了していること
- テキストエディタ（Visual Studio Code などお好みのもの）
- 任意: Git / GitHub アカウント（第11章のスキル共有で使用）

### 参考リソース

- [Claude Code 公式ドキュメント](https://docs.claude.com/ja/docs/claude-code/overview)
- [Claude Code スキル（Skills）ドキュメント](https://docs.claude.com/ja/docs/claude-code/skills)
- [Anthropic 公式サイト](https://www.anthropic.com/)

### 前提知識

- **必須**: [Claude 入門学習ガイド](https://fcircle-biz.github.io/tech-docs-v2/guide/data-ai-category/generative-ai/claude/claude-learning-material-01.html)、[Claude Code 入門学習ガイド](https://fcircle-biz.github.io/tech-docs-v2/guide/development-processes/claude-code/claude-code-learning-material-01.html) の内容（Claude Code の起動・基本的なやり取り・CLAUDE.md・サブエージェントの概要）
- **必須**: 基本的なターミナル操作（`cd`・`ls`・`mkdir` などのコマンド実行）
- **推奨**: Markdown / YAML の読み書き、Git の基本操作（`commit`・`push`）

## 学習コンテンツ

### [1. スキルとは何か](https://fcircle-biz.github.io/tech-docs-v2/guide/development-processes/claude-code-skills/claude-code-skills-learning-material-01.html)

同じ指示を Claude に繰り返し説明している——という日常の困りごとを出発点に、スキルとは何かを理解します。スキルは `SKILL.md` を持つフォルダであり、frontmatter の `name` と `description` によって Claude がリクエストと照合すること、CLAUDE.md やスラッシュコマンドと違って「オンデマンドで自動的に」読み込まれることを学びます。スキルが向く用途（コードレビュー基準・コミットメッセージ形式・ブランドガイドライン・ドキュメントテンプレート・デバッグチェックリスト）と、「同じ説明を繰り返していると気づいたときがスキルを書くタイミング」という基本原則を押さえます。

### [2. スキルの置き場所と優先順位](https://fcircle-biz.github.io/tech-docs-v2/guide/development-processes/claude-code-skills/claude-code-skills-learning-material-02.html)

スキルの4つの配置先——エンタープライズ（管理設定）・パーソナル（`~/.claude/skills`）・プロジェクト（リポジトリの `.claude/skills`）・プラグイン——を整理します。個人用はすべてのプロジェクトに付いて回り、プロジェクト用はリポジトリをクローンした全員に共有されること、Windows でのパス（`C:/Users/<user>/.claude/skills`）、そして名前が重複したときの優先順位（エンタープライズ → パーソナル → プロジェクト → プラグイン）を、具体例とともに理解します。

### [3. 最初のスキルを作る](https://fcircle-biz.github.io/tech-docs-v2/guide/development-processes/claude-code-skills/claude-code-skills-learning-material-03.html)

PR の説明文を一貫したフォーマットで書くパーソナルスキル `pr-description` を、ゼロから作成するハンズオンです。`mkdir -p ~/.claude/skills/pr-description` でスキル名と一致するディレクトリを作り、`SKILL.md` に frontmatter（`---` 区切り）＋指示本文を書く手順を、一行ずつ確認しながら進めます。frontmatter と本文の役割分担、ディレクトリ名とスキル名を一致させる理由を学びます。

### [4. スキルのテストと発見の仕組み](https://fcircle-biz.github.io/tech-docs-v2/guide/development-processes/claude-code-skills/claude-code-skills-learning-material-04.html)

作成したスキルが本当に使われるかを確認します。Claude Code は起動時に4つの場所をスキャンし、**名前と説明文だけ**を読み込むこと、リクエストと説明文をセマンティックマッチングで照合すること、マッチしたら確認プロンプトを経て `SKILL.md` 全体をコンテキストに読み込むこと——という一連の流れを追います。スキルを作成・更新・削除したら Claude Code を再起動する必要がある点も、ここで身につけます。

### [5. 効果的な description の書き方](https://fcircle-biz.github.io/tech-docs-v2/guide/development-processes/claude-code-skills/claude-code-skills-learning-material-05.html)

スキルが期待どおりに起動するかどうかは、ほぼ `description` で決まります。良い説明文が答えるべき2つの問い——「このスキルは何をするか」「Claude はいつこれを使うべきか」——を軸に、曖昧な説明文を改善する手順を演習します。自分が実際に使う言い回しをトリガーフレーズとして盛り込むこと、似た名前のスキルと区別できる具体性を持たせることを学びます。

### [6. メタデータと allowed-tools](https://fcircle-biz.github.io/tech-docs-v2/guide/development-processes/claude-code-skills/claude-code-skills-learning-material-06.html)

`SKILL.md` の frontmatter で使える4つのフィールドを整理します。必須の `name`（小文字・数字・ハイフン、最大64文字）と `description`（最大1,024文字）、任意の `allowed-tools` と `model` です。特に `allowed-tools` は、スキルが有効なあいだ Claude が使えるツールを絞り込むガードレールとして機能します。読み取り専用のワークフローを例に、制限をかける設計と、省略した場合の挙動（通常の権限モデル）を学びます。

### [7. 段階的開示と複数ファイル構成](https://fcircle-biz.github.io/tech-docs-v2/guide/development-processes/claude-code-skills/claude-code-skills-learning-material-07.html)

スキルは会話とコンテキストウィンドウを共有します。すべてを1ファイルに詰め込むと、コンテキストを浪費し保守も難しくなる——この問題を解く考え方が段階的開示（Progressive Disclosure）です。`SKILL.md` は500行以内に収め、詳細は `scripts/`・`references/`・`assets/` に切り出して「いつ読むべきか」を明示してリンクする、という構成法を、目次と本文のたとえで理解します。

### [8. スクリプト・参照資料・アセットの活用](https://fcircle-biz.github.io/tech-docs-v2/guide/development-processes/claude-code-skills/claude-code-skills-learning-material-08.html)

段階的開示を実践に落とし込みます。スクリプトは**中身をコンテキストに読み込まずに実行**でき、消費するトークンは出力分だけ——という性質を活かし、環境の検証・一貫性が求められるデータ変換・テスト済みコードのほうが信頼できる操作をスクリプト化します。「読ませる」のではなく「実行させる」指示の書き方、`references/`・`assets/` の使い分けを、複数ファイル構成のスキルを組み立てながら学びます。

### [9. CLAUDE.md・スラッシュコマンドとの使い分け](https://fcircle-biz.github.io/tech-docs-v2/guide/development-processes/claude-code-skills/claude-code-skills-learning-material-09.html)

いつも読み込まれる CLAUDE.md、明示的に呼び出すスラッシュコマンド、そして条件が合えば自動で読み込まれるスキル。この3つの読み込みタイミングの違いを比較し、「常時適用されるプロジェクト標準は CLAUDE.md、タスク固有の専門知識はスキル」という判断基準を身につけます。既存の CLAUDE.md からスキルに移すべき内容を見分ける演習も行います。

### [10. サブエージェント・フック・MCPとの比較](https://fcircle-biz.github.io/tech-docs-v2/guide/development-processes/claude-code-skills/claude-code-skills-learning-material-10.html)

Claude Code のカスタマイズ手段を一望します。サブエージェントは独立したコンテキストで委任作業を行い、フックはイベント駆動（ファイル保存・ツール呼び出し）で発火し、MCP サーバーは外部ツール連携を提供します。これらとスキル（リクエスト駆動で知識を追加）の役割分担を整理し、「すべてをスキルに押し込まず、組み合わせて使う」典型的な構成を設計します。

### [11. スキルの共有と配布](https://fcircle-biz.github.io/tech-docs-v2/guide/development-processes/claude-code-skills/claude-code-skills-learning-material-11.html)

スキルは共有されて価値が大きくなります。3つの配布方法——リポジトリへのコミット（`.claude/skills` を Git で共有）、プラグインとマーケットプレイス経由の配布、エンタープライズ管理設定による組織全体への展開（`strictKnownMarketplaces` を含む）——を比較します。さらに、多くの人がつまずく「サブエージェントはスキルを自動的には引き継がない」という重要な注意点と、カスタムサブエージェントの frontmatter に `skills` フィールドを書く対処法を学びます。

### [12. トラブルシューティングと次のステップ](https://fcircle-biz.github.io/tech-docs-v2/guide/development-processes/claude-code-skills/claude-code-skills-learning-material-12.html)

スキルが動かないときの体系的な診断手順です。まず agent skills verifier で構造的な問題を検出し、`claude --debug` で読み込みエラーを確認します。そのうえで「トリガーされない（＝説明文の問題）」「読み込まれない（＝パス・ファイル名・YAML の問題）」「誤ったスキルが使われる（＝説明文が似すぎ）」「優先順位に隠れている」「ランタイムで失敗する（＝依存関係・権限・パス区切り）」の5類型ごとに対処します。最後に、学習内容の総復習と、実務でスキルを育てていくための次のステップを示します。

## 推奨所要時間

| 章 | 内容 | 目安時間 |
|----|------|----------|
| 第1章 | スキルとは何か | 30分 |
| 第2章 | スキルの置き場所と優先順位 | 35分 |
| 第3章 | 最初のスキルを作る | 45分 |
| 第4章 | スキルのテストと発見の仕組み | 40分 |
| 第5章 | 効果的なdescriptionの書き方 | 40分 |
| 第6章 | メタデータとallowed-tools | 40分 |
| 第7章 | 段階的開示と複数ファイル構成 | 40分 |
| 第8章 | スクリプト・参照資料・アセットの活用 | 45分 |
| 第9章 | CLAUDE.md・スラッシュコマンドとの使い分け | 35分 |
| 第10章 | サブエージェント・フック・MCPとの比較 | 40分 |
| 第11章 | スキルの共有と配布 | 45分 |
| 第12章 | トラブルシューティングと次のステップ | 45分 |
| **合計** | | **約8時間** |

## 学習目標

このガイドを完了すると、以下のスキルを身につけることができます：

- Claude Code のスキルとは何か、どのように発見・照合・読み込みされるかを説明できる
- 個人用・プロジェクト用・エンタープライズ・プラグインの使い分けと優先順位を判断できる
- `SKILL.md` を正しい frontmatter 構造でゼロから作成し、動作をテストできる
- 意図したリクエストで確実にトリガーされる `description` を書ける
- `allowed-tools` でツールアクセスを制限し、安全なワークフローを設計できる
- 段階的開示（Progressive Disclosure）で複数ファイル構成の大きなスキルを整理できる
- スキルと CLAUDE.md・スラッシュコマンド・サブエージェント・フック・MCP を適切に使い分けられる
- リポジトリ・プラグイン・管理設定を通じてスキルをチームや組織に配布できる
- スキルが動かないときに、原因を類型別に切り分けて解決できる

## 次のステップ

- [Claude Code 入門学習ガイド](https://fcircle-biz.github.io/tech-docs-v2/guide/development-processes/claude-code/claude-code-learning-material-01.html) — サブエージェント・MCP・フックなど、スキルと組み合わせる機能を復習する
- [Git/GitHub 学習ガイド](https://fcircle-biz.github.io/tech-docs-v2/guide/development-processes/git-github/git-github-learning-material-01.html) — スキルをチームへ共有するためのバージョン管理を固める
- 自分の業務で繰り返している指示を1つ選び、実際にスキルとして書き起こしてチームに共有してみる
