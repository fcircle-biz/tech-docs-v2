# LangChain入門 学習ガイドライン

このガイドラインでは、LangChainの基礎を初心者向けに段階的に学習するためのカリキュラムを提供しています。生成AIとPythonの基礎知識を活かして、LLM（大規模言語モデル）を活用したアプリケーション開発の手法を実践的に習得できます。

## 前提条件

### 必要な環境
- Python 3.9以上がインストールされた環境
- pip（Pythonパッケージマネージャー）
- テキストエディタまたはIDE（VS Code推奨）
- OpenAI APIキー（無料枠で開始可能）
- インターネット接続環境

### 参考リソース
- [LangChain公式ドキュメント](https://python.langchain.com/docs/introduction/)
- [LangChain GitHub](https://github.com/langchain-ai/langchain)
- [OpenAI API公式ドキュメント](https://platform.openai.com/docs)
- [LangSmith（デバッグ・モニタリングツール）](https://smith.langchain.com/)

### 前提知識
- **必須**: [Python入門 学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/python-beginner/) - 変数、関数、リスト、辞書の基本操作
- **必須**: [生成AI入門 学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/generative-ai/) - 生成AIの基礎概念とプロンプトエンジニアリング
- **推奨**: Pythonの仮想環境（venv）の基本的な使い方
- **推奨**: JSONデータの構造と操作方法

## 学習コンテンツ

### [1. LangChainとは - LLMアプリ開発の新標準](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/langchain/langchain-learning-material-01.html)
LangChainとは何か、なぜ必要なのか、どのような問題を解決するのかを理解します。LLMアプリケーション開発におけるLangChainの位置づけと、主要な機能の概要を把握します。

### [2. 環境構築とはじめてのLangChain](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/langchain/langchain-learning-material-02.html)
LangChainのインストール、APIキーの設定、最初のLLM呼び出しを行います。開発環境を整え、基本的な動作確認を通じてLangChainの使い方を体験します。

### [3. プロンプトテンプレート - 再利用可能な指示の設計](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/langchain/langchain-learning-material-03.html)
PromptTemplateを使って、動的に変数を埋め込める再利用可能なプロンプトを作成します。テンプレート化によるプロンプト管理の効率化を習得します。

### [4. LLMとChat Models - モデルの使い分け](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/langchain/langchain-learning-material-04.html)
LangChainで利用できる様々なLLM（OpenAI、Anthropic、ローカルモデル等）の種類と特徴を理解し、用途に応じた使い分け方を学びます。

### [5. Output Parsers - LLMの出力を構造化する](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/langchain/langchain-learning-material-05.html)
LLMの自然言語出力をJSON、リスト、Pydanticモデルなど、プログラムで扱いやすい構造化データに変換する方法を習得します。

### [6. Chains入門 - 処理の連結と自動化](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/langchain/langchain-learning-material-06.html)
複数の処理ステップを連結するChainの基本概念を理解し、LLMChain、SequentialChainなどの基本的なチェーンの構築方法を学びます。

### [7. LCEL（LangChain Expression Language）入門](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/langchain/langchain-learning-material-07.html)
LangChainの新しい標準であるLCELを使った、シンプルで直感的なチェーン構築方法を習得します。パイプ演算子を使った処理の連結を体験します。

### [8. Document Loaders - 様々なデータソースの読み込み](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/langchain/langchain-learning-material-08.html)
PDF、Web、CSV、データベースなど、多様なデータソースからドキュメントを読み込む方法を学びます。RAG構築の基礎となるデータ取得を習得します。

### [9. Text Splitters - ドキュメントの分割技術](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/langchain/langchain-learning-material-09.html)
長いドキュメントをLLMが処理しやすいサイズに分割する技術を学びます。文字数、トークン数、セマンティックな分割方法を理解します。

### [10. Embeddings - テキストのベクトル化](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/langchain/langchain-learning-material-10.html)
テキストを数値ベクトルに変換するEmbeddingsの概念と使い方を学びます。OpenAI Embeddings、ローカルモデルなど様々な選択肢を理解します。

### [11. Vector Stores - ベクトルデータベースの活用](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/langchain/langchain-learning-material-11.html)
FAISS、Chroma、Pineconeなどのベクトルストアを使った類似検索の実装方法を学びます。効率的なドキュメント検索の基盤を構築します。

### [12. Retrievers - 関連情報の検索](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/langchain/langchain-learning-material-12.html)
Vector StoreをベースにしたRetrieverの構築と、検索精度を向上させるテクニック（MMR、セルフクエリなど）を習得します。

### [13. RAG（検索拡張生成）の実装](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/langchain/langchain-learning-material-13.html)
これまで学んだ技術を組み合わせて、独自のドキュメントに基づいて回答するRAGシステムを構築します。RetrievalQAチェーンの実装方法を習得します。

### [14. Memory - 会話履歴の管理](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/langchain/langchain-learning-material-14.html)
ConversationBufferMemory、ConversationSummaryMemoryなど、LLMとの会話履歴を管理する機能を学びます。文脈を保持した対話システムを構築します。

### [15. Agents入門 - LLMに意思決定させる](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/langchain/langchain-learning-material-15.html)
LLMが状況に応じてツールを選択・実行するAgentの基本概念を理解します。ReActフレームワークとZero-shot Agentの実装を体験します。

### [16. Tools - Agentの能力を拡張する](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/langchain/langchain-learning-material-16.html)
Web検索、計算機、カスタムツールなど、Agentが使用できるToolの作成方法を学びます。LLMの能力を外部機能で拡張する技術を習得します。

### [17. Callbacks - 実行の監視とデバッグ](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/langchain/langchain-learning-material-17.html)
LangChainの処理をリアルタイムで監視するCallbackシステムを学びます。ログ出力、ストリーミング、LangSmith連携によるデバッグ手法を習得します。

### [18. 総合演習 - チャットボット開発プロジェクト](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/langchain/langchain-learning-material-18.html)
これまで学んだ技術を統合して、RAGとMemoryを備えた実用的なチャットボットを開発します。設計から実装、テストまでの一連の流れを体験します。

## 学習の進め方

1. **基礎から順番に進める**: 第1-7章では、LangChainの基本的なコンポーネントを学びます。順番通りに進め、各章の演習を必ず実行してください。

2. **コードを実際に動かす**: 説明を読むだけでなく、必ず自分でコードを入力して実行しましょう。エラーが出たら、それも学びの機会です。

3. **RAGの理解を深める**: 第8-13章はRAG構築の核心です。Document Loaders→Text Splitters→Embeddings→Vector Stores→Retrievers→RAGと、データの流れを意識しながら学習してください。

4. **Agentで可能性を広げる**: 第15-16章では、LLMに自律的に行動させる技術を学びます。どのようなタスクを自動化できるか、想像力を働かせましょう。

5. **総合演習で統合する**: 最終章では、学んだ技術を組み合わせて実用的なアプリケーションを構築します。自分なりにカスタマイズして、理解を確かなものにしてください。

## 推奨所要時間

| 章 | 内容 | 目安時間 |
|:--|:--|:--|
| 第1章 | LangChainとは - LLMアプリ開発の新標準 | 45分 |
| 第2章 | 環境構築とはじめてのLangChain | 1時間 |
| 第3章 | プロンプトテンプレート - 再利用可能な指示の設計 | 45分 |
| 第4章 | LLMとChat Models - モデルの使い分け | 1時間 |
| 第5章 | Output Parsers - LLMの出力を構造化する | 1時間 |
| 第6章 | Chains入門 - 処理の連結と自動化 | 1.5時間 |
| 第7章 | LCEL（LangChain Expression Language）入門 | 1.5時間 |
| 第8章 | Document Loaders - 様々なデータソースの読み込み | 1時間 |
| 第9章 | Text Splitters - ドキュメントの分割技術 | 1時間 |
| 第10章 | Embeddings - テキストのベクトル化 | 1時間 |
| 第11章 | Vector Stores - ベクトルデータベースの活用 | 1.5時間 |
| 第12章 | Retrievers - 関連情報の検索 | 1時間 |
| 第13章 | RAG（検索拡張生成）の実装 | 2時間 |
| 第14章 | Memory - 会話履歴の管理 | 1.5時間 |
| 第15章 | Agents入門 - LLMに意思決定させる | 1.5時間 |
| 第16章 | Tools - Agentの能力を拡張する | 1.5時間 |
| 第17章 | Callbacks - 実行の監視とデバッグ | 1時間 |
| 第18章 | 総合演習 - チャットボット開発プロジェクト | 3時間 |
| **合計** | | **約23.5時間** |

## 関連リソース

- [Python入門 学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/python-beginner/) - Pythonの基礎
- [生成AI入門 学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/generative-ai/) - 生成AIとプロンプトエンジニアリング
- [機械学習入門 学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/ml-beginner/) - AIの基礎理論

## 学習目標

このガイドを完了すると、以下のスキルを身につけることができます：

- **LangChainの基本操作**: LangChainを使ってLLMを呼び出し、プロンプトテンプレートで管理できる
- **LCELの理解と活用**: パイプ演算子を使った直感的なチェーン構築ができる
- **構造化出力の実装**: LLMの出力をJSONやPydanticモデルに変換できる
- **RAGシステムの構築**: 独自ドキュメントを検索して回答するシステムを実装できる
- **Vector Storeの活用**: FAISSやChromaを使った類似検索システムを構築できる
- **会話履歴の管理**: Memoryを使って文脈を保持した対話システムを作成できる
- **Agentの設計**: ツールを活用してLLMに自律的にタスクを実行させられる
- **デバッグとモニタリング**: Callbacksを使って処理の監視とトラブルシューティングができる
- **実用的なアプリケーション開発**: 学んだ技術を組み合わせて、実務で使えるLLMアプリを開発できる

## 次のステップ

このガイドライン完了後は、以下の学習に進むことをお勧めします：

- [LlamaIndex 学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/llamaindex/) - 別のLLMアプリケーションフレームワーク
- [RAG高度な技法 学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/rag-advanced/) - RAGの最適化とチューニング
- [Dify 学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/data-ai-category/data-ai/dify/) - ノーコードLLMアプリケーション開発
- [FastAPI 学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/fastapi/) - LLMアプリのAPI化
