# Dify入門 学習ガイドライン

このガイドラインでは、Difyの基礎を初心者向けに段階的に学習するためのカリキュラムを提供しています。Difyは、ノーコード/ローコードでAIアプリケーションを構築できるオープンソースプラットフォームです。生成AIの基礎知識を活かして、プログラミング経験がなくても、実用的なAIアプリケーションを開発できるようになることを目指します。

## 前提条件

### 必要な環境
- インターネット接続環境
- Webブラウザ（Chrome、Firefox、Edge等の最新版）
- メールアドレス（Dify Cloudへの登録用）
- OpenAI APIキーまたは他のLLMプロバイダーのAPIキー（推奨）
- Docker環境（セルフホスト版を利用する場合のみ）

### 参考リソース
- [Dify公式サイト](https://dify.ai/)
- [Dify公式ドキュメント](https://docs.dify.ai/)
- [Dify GitHub](https://github.com/langgenius/dify)
- [Dify公式ブログ](https://dify.ai/blog)
- [OpenAI APIドキュメント](https://platform.openai.com/docs)
- [Anthropic Claude APIドキュメント](https://docs.anthropic.com/)

### 前提知識
- **必須**: [生成AI入門 学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/generative-ai/) - 生成AIの基礎概念、プロンプトエンジニアリング、LLMの特性と限界
- **推奨**: 基本的なWebアプリケーションの仕組み（APIとは何か、リクエスト/レスポンスの概念）
- **推奨**: JSONデータ形式の基本的な理解

## 学習コンテンツ

### [1. Difyとは - ノーコードAIアプリ開発の世界](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/dify/dify-learning-material-01.html)
Difyとは何か、従来のAIアプリ開発との違い、なぜDifyが注目されているのかを理解します。Difyの主要機能（ワークフロー、エージェント、RAG）の概要と、ノーコード/ローコード開発のメリットを把握します。

### [2. Difyの環境構築 - Dify Cloudとセルフホスト](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/dify/dify-learning-material-02.html)
Dify Cloudへのサインアップ方法、APIキーの設定、ワークスペースの基本操作を学びます。また、Dockerを使ったセルフホスト版のセットアップ方法も紹介します。

### [3. はじめてのアプリ作成 - チャットボットを作る](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/dify/dify-learning-material-03.html)
Difyで最初のAIアプリケーションを作成します。シンプルなチャットボットを構築しながら、アプリタイプの選択、モデル設定、プロンプト設計の基本を体験します。

### [4. プロンプトオーケストレーション - AIの振る舞いを設計する](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/dify/dify-learning-material-04.html)
システムプロンプト、変数、コンテキストの設定方法を学びます。AIアプリの品質を決定するプロンプト設計のベストプラクティスを、Difyの機能を使って実践します。

### [5. モデルプロバイダーの設定 - 様々なLLMを使いこなす](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/dify/dify-learning-material-05.html)
OpenAI、Anthropic Claude、Google Gemini、Azure OpenAIなど、様々なLLMプロバイダーの設定方法と使い分けを学びます。コストと性能のバランスを考慮したモデル選択を理解します。

### [6. ナレッジベース入門 - RAGの基礎を理解する](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/dify/dify-learning-material-06.html)
RAG（検索拡張生成）の概念と、Difyでのナレッジベース機能を理解します。独自のドキュメントをAIに参照させる仕組みの基本を学びます。

### [7. ナレッジベースの構築 - ドキュメントのアップロードと管理](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/dify/dify-learning-material-07.html)
PDF、Word、テキストファイルなど、様々なドキュメントをナレッジベースに追加する方法を学びます。チャンク分割、インデックス設定、メタデータ管理の実践を行います。

### [8. RAGアプリの実装 - 社内文書に答えるAIを作る](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/dify/dify-learning-material-08.html)
ナレッジベースを活用した実用的なRAGアプリケーションを構築します。検索設定の最適化、回答品質の向上テクニック、ハイブリッド検索の活用を習得します。

### [9. ワークフロー入門 - ビジュアルで処理を設計する](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/dify/dify-learning-material-09.html)
Difyワークフローの基本概念を理解します。ドラッグ&ドロップで処理の流れを設計し、複数のステップを連結するビジュアルプログラミングを体験します。

### [10. ワークフローノードの活用 - 多様な処理を組み合わせる](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/dify/dify-learning-material-10.html)
LLMノード、条件分岐、ループ、HTTPリクエスト、コードノードなど、ワークフローで使用できる各種ノードの使い方を学びます。実践的なワークフロー設計パターンを習得します。

### [11. エージェント機能 - AIに自律的に行動させる](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/dify/dify-learning-material-11.html)
Difyのエージェント機能を使って、AIが状況に応じてツールを選択・実行する自律的なアプリケーションを構築します。Function CallingとReActの違いを理解します。

### [12. ツールの活用 - AIの能力を拡張する](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/dify/dify-learning-material-12.html)
Web検索、画像生成、計算など、Difyに組み込まれた50以上のビルトインツールの使い方を学びます。また、カスタムツールの作成方法も紹介します。

### [13. 外部API連携 - 既存システムとつなげる](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/dify/dify-learning-material-13.html)
HTTPノードやカスタムAPIを使って、Difyアプリを外部システムと連携させる方法を学びます。MCP（Model Context Protocol）を使った標準化された連携方法も紹介します。

### [14. アプリの公開と共有 - 作ったアプリを届ける](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/dify/dify-learning-material-14.html)
作成したアプリをWebアプリとして公開する方法、APIとして提供する方法、iframe埋め込みで既存サイトに統合する方法を学びます。アクセス制御とセキュリティ設定も理解します。

### [15. 運用とモニタリング - アプリを改善し続ける](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/dify/dify-learning-material-15.html)
Difyの分析機能を使ったログ監視、ユーザーフィードバックの収集、プロンプトやRAG設定の継続的な改善サイクルを学びます。LLMOpsの基本概念を理解します。

### [16. 実践プロジェクト1 - FAQ対応チャットボット](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/dify/dify-learning-material-16.html)
これまで学んだ技術を統合して、ナレッジベースを活用したFAQ対応チャットボットを構築します。企業での実用を想定した設計と実装を行います。

### [17. 実践プロジェクト2 - ドキュメント要約ワークフロー](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/dify/dify-learning-material-17.html)
ワークフロー機能を活用して、長文ドキュメントの自動要約システムを構築します。複数ステップの処理設計とエラーハンドリングを実践します。

### [18. 総合演習 - 業務効率化AIアシスタントの開発](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/dify/dify-learning-material-18.html)
学んだ全ての技術を活用して、RAG、ワークフロー、エージェント機能を組み合わせた総合的なAIアシスタントを開発します。要件定義から設計、実装、公開までの一連の流れを体験します。

## 学習の進め方

1. **まずは触れてみる**: 第1-3章でDifyの基本を理解し、実際にシンプルなアプリを作ってみましょう。失敗を恐れず、様々な設定を試してください。

2. **RAGを習得する**: 第6-8章はDify活用の核心です。ナレッジベースを使ったRAGアプリは実務で最も需要が高いので、しっかりと理解してください。

3. **ワークフローで自動化する**: 第9-10章で学ぶワークフローは、複雑な処理を自動化するための強力な機能です。ビジュアルエディタの操作に慣れましょう。

4. **エージェントで高度化する**: 第11-12章では、AIに自律的に判断させる高度な機能を学びます。適切なツールの選択と組み合わせを考えましょう。

5. **実践で統合する**: 第16-18章の実践プロジェクトで、学んだ技術を組み合わせて実用的なアプリを構築します。自分の業務に置き換えて考えながら進めてください。

## 推奨所要時間

| 章 | 内容 | 目安時間 |
|:--|:--|:--|
| 第1章 | Difyとは - ノーコードAIアプリ開発の世界 | 45分 |
| 第2章 | Difyの環境構築 - Dify Cloudとセルフホスト | 1時間 |
| 第3章 | はじめてのアプリ作成 - チャットボットを作る | 1時間 |
| 第4章 | プロンプトオーケストレーション - AIの振る舞いを設計する | 1.5時間 |
| 第5章 | モデルプロバイダーの設定 - 様々なLLMを使いこなす | 1時間 |
| 第6章 | ナレッジベース入門 - RAGの基礎を理解する | 1時間 |
| 第7章 | ナレッジベースの構築 - ドキュメントのアップロードと管理 | 1.5時間 |
| 第8章 | RAGアプリの実装 - 社内文書に答えるAIを作る | 1.5時間 |
| 第9章 | ワークフロー入門 - ビジュアルで処理を設計する | 1時間 |
| 第10章 | ワークフローノードの活用 - 多様な処理を組み合わせる | 1.5時間 |
| 第11章 | エージェント機能 - AIに自律的に行動させる | 1.5時間 |
| 第12章 | ツールの活用 - AIの能力を拡張する | 1時間 |
| 第13章 | 外部API連携 - 既存システムとつなげる | 1.5時間 |
| 第14章 | アプリの公開と共有 - 作ったアプリを届ける | 1時間 |
| 第15章 | 運用とモニタリング - アプリを改善し続ける | 1時間 |
| 第16章 | 実践プロジェクト1 - FAQ対応チャットボット | 2時間 |
| 第17章 | 実践プロジェクト2 - ドキュメント要約ワークフロー | 2時間 |
| 第18章 | 総合演習 - 業務効率化AIアシスタントの開発 | 3時間 |
| **合計** | | **約24.5時間** |

## 関連リソース

- [生成AI入門 学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/generative-ai/) - 生成AIとプロンプトエンジニアリングの基礎（前提知識）
- [LangChain入門 学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/langchain/) - Pythonを使ったLLMアプリ開発
- [Python入門 学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/python-beginner/) - プログラミングでの拡張に興味がある方向け

## 学習目標

このガイドを完了すると、以下のスキルを身につけることができます：

- **Difyの基本操作**: Difyの管理画面を使いこなし、各種設定を行える
- **チャットボットの構築**: プロンプト設計に基づいた対話型AIアプリを作成できる
- **RAGアプリの実装**: ナレッジベースを活用した独自文書に基づく回答システムを構築できる
- **ワークフローの設計**: ビジュアルエディタで複雑な処理フローを設計・実装できる
- **エージェントの活用**: ツールを使った自律的なAIアプリケーションを構築できる
- **外部連携の実現**: APIやMCPを使って既存システムとDifyを連携できる
- **アプリの公開・運用**: 作成したアプリを公開し、継続的に改善できる
- **実務での活用**: 業務効率化に役立つAIアプリを自力で開発できる

## 次のステップ

このガイドライン完了後は、以下の学習に進むことをお勧めします：

- [n8n 学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/business-saas/n8n/) - ノーコードワークフロー自動化との連携
- [LangChain 学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/langchain/) - Pythonでのより高度なLLMアプリ開発
- [Docker入門 学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/docker/) - Difyセルフホスト環境の理解と運用
- [API設計 学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/development-processes/api-design/) - DifyアプリのAPI化と外部連携の深化
