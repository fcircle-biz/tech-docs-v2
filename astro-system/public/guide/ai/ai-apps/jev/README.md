# Jev 学習ガイドライン

このガイドラインでは、TypeSafe AI が提供する **Jev**（System One モデル）の基本概念と API の利用方法を、入門者向けに段階的に学習するためのカリキュラムを提供しています。

本教材は「生成AI入門」ではありません。**AI による判断処理を、通常のソフトウェア設計へ組み込む方法**を学ぶ教材です。

Jev は ChatGPT や Claude のような文章生成・対話用 LLM ではなく、**State（判断対象の情報）** と **Question（判断してほしい内容）** を与えると、**Choice / Score / Noul** といったプログラムから直接扱える構造化された判断結果を返すモデルです。そのため本教材では「AI に文章を書かせる方法」ではなく、**AI に判断させ、その判断をコードで合成する方法**を中心に学びます。

## 前提条件

### 必要な環境

- インターネット接続と Web ブラウザ
- TypeSafe AI のアカウントと API キー（[console.typesafe.ai](https://console.typesafe.ai/keys)）
- `curl` が使えるターミナル（第5章・第6章）
- Python 3.10 以上 ＋ `pip`（第7章以降）
- テキストエディタまたは IDE（VS Code など）

### 参考リソース

- [TypeSafe AI 公式ドキュメント](https://docs.typesafe.ai/introduction)
- [Quick start](https://docs.typesafe.ai/introduction/quickstart)
- [Primitives（Choice / Score / Noul）](https://docs.typesafe.ai/primitives)
- [Confidence](https://docs.typesafe.ai/confidence)
- [Patterns（設計パターン集）](https://docs.typesafe.ai/patterns)
- [Python SDK](https://docs.typesafe.ai/sdk/python)
- [jev-1.13 の既知の弱点](https://docs.typesafe.ai/model-jaggedness/jev-1.13)

### 前提知識

- **必須**: 何らかのプログラミング言語の基礎（変数・条件分岐・関数）、JSON の読み書き
- **必須**: HTTP リクエスト／レスポンスの基本的な理解
- **推奨**: Python の基礎文法
- **推奨**: 生成AI（ChatGPT・Claude など）を一度でも使ったことがある
- **不要**: 機械学習の数学的知識、モデルの学習・チューニング経験

## 学習コンテンツ

### [1. Jevとは](https://fcircle-biz.github.io/tech-docs-v2/guide/ai/ai-apps/jev/jev-learning-material-01.html)

Jev が「文章を生成しないAI」であることを理解します。一般的な LLM が `入力 → 文章生成 → テキスト出力` であるのに対し、Jev は `State ＋ Question → 構造化された判断` を返します。両者の違いを表で整理し、どちらを使うべき処理かを見分けられるようになります。

### [2. System Oneという考え方](https://fcircle-biz.github.io/tech-docs-v2/guide/ai/ai-apps/jev/jev-learning-material-02.html)

System One モデルの設計思想を学びます。「その分野をよく知る人が、必要な情報を見て数秒で判断できる程度の一つの判断」を Question として設計するのが基本です。複雑な Reasoning を1回で任せず、小さな判断へ分解する考え方を身につけます。

### [3. State — 判断の材料](https://fcircle-biz.github.io/tech-docs-v2/guide/ai/ai-apps/jev/jev-learning-material-03.html)

Jev に渡す State の設計方法を学びます。文字列・JSON オブジェクト・配列の使い分け、名前付きフィールドで関係を明確にする理由、そして「Question の判断に必要な情報だけを渡す」という重要原則を理解します。

### [4. 3つのPrimitive](https://fcircle-biz.github.io/tech-docs-v2/guide/ai/ai-apps/jev/jev-learning-material-04.html)

Jev の3種類の Question——**Choice**（選択肢から1つ選ぶ）・**Score**（ルーブリックで段階評価する）・**Noul**（真偽を確率で返す）——の仕様と返却フィールドを学び、判断内容に応じた使い分けができるようになります。

### [5. 最初のリクエストを送る](https://fcircle-biz.github.io/tech-docs-v2/guide/ai/ai-apps/jev/jev-learning-material-05.html)

コードを書き始める前に、`curl` で Jev の動作を体験します。同じ問い合わせ文に対して Noul / Choice / Score の3種類の Question を投げ、返ってくる結果を見比べることで、Jev の挙動を体感的に理解します。

### [6. HTTP APIから利用する](https://fcircle-biz.github.io/tech-docs-v2/guide/ai/ai-apps/jev/jev-learning-material-06.html)

`POST /v1/systemone` エンドポイントの構造を学びます。リクエストの `state` / `model` / `questions` と、レスポンスの `answers` / `usage` の対応関係、認証ヘッダー、主なエラーコードと再試行の考え方を理解します。

### [7. Python SDKで組み込む](https://fcircle-biz.github.io/tech-docs-v2/guide/ai/ai-apps/jev/jev-learning-material-07.html)

`typesafe-sdk` を使い、Python アプリケーションから Jev を呼び出します。`Choice` / `Score` / `Noul` を Python オブジェクトとして定義し、問い合わせ文から部署・緊急度・不満度を判定する CLI を作ります。

### [8. Atomic Question](https://fcircle-biz.github.io/tech-docs-v2/guide/ai/ai-apps/jev/jev-learning-material-08.html)

本教材で最も重要な設計原則を学びます。「この問い合わせを分析して対応を決めて」という複合的な依頼を、「返金要求か？」「緊急か？」「どの部署か？」という Atomic な Question へ分解し、**最終判断はコードで組み立てる**という責務分担を身につけます。

### [9. ProbabilityとConfidence](https://fcircle-biz.github.io/tech-docs-v2/guide/ai/ai-apps/jev/jev-learning-material-09.html)

Jev が返す不確実性をアプリケーションで扱う方法を学びます。`probabilities` と `confidence` の違い、confidence が確率分布の形から導かれること、そして「自動処理してよいか／人間に回すか」を閾値で切り分ける設計を理解します。

### [10. Questionを構造化する](https://fcircle-biz.github.io/tech-docs-v2/guide/ai/ai-apps/jev/jev-learning-material-10.html)

長いプロンプトを書くのではなく、判断条件そのものをデータ構造として設計する方法を学びます。`instructions` と `criteria` の役割分担、比較対象や着目点を構造として分離する書き方を扱います。

### [11. 複数Questionと並列評価](https://fcircle-biz.github.io/tech-docs-v2/guide/ai/ai-apps/jev/jev-learning-material-11.html)

同じ State に対して複数の Question を1リクエストで送り、それぞれが独立・並列に評価される仕組みを学びます。「1つの巨大なプロンプト」ではなく「多数の小さな Question」として設計すべき理由を、レイテンシとコストの観点から理解します。

### [12. デザインパターン](https://fcircle-biz.github.io/tech-docs-v2/guide/ai/ai-apps/jev/jev-learning-material-12.html)

公式パターン集から、**Confidence-Gated Routing**（信頼度で自動処理／確認／人間を振り分ける）、**Composite Scoring**（複数 Score をコードで重み付けする）、**Intent Routing**（入力を分類して処理先を振り分ける）を学び、アプリケーション設計へ落とし込みます。

### [13. jev-1.13の弱点と注意点](https://fcircle-biz.github.io/tech-docs-v2/guide/ai/ai-apps/jev/jev-learning-material-13.html)

公式が公開している既知の弱点（jaggedness）を学びます。文字通りの読解、数値計算の不得手、日付比較、間接参照、巨大な State、矛盾する instructions / criteria、テキスト生成など、「失敗しやすい設計 → 改善方法」を演習形式で扱います。

### [14. Jev × LLM](https://fcircle-biz.github.io/tech-docs-v2/guide/ai/ai-apps/jev/jev-learning-material-14.html)

Jev を **Decision Layer（判断層）／AI Router** として LLM の前段に置く構成を設計します。FAQ はデータベース、複雑な相談は LLM、危険な入力はブロック、不確実なものは人間へ——という振り分けを、Jev・コード・LLM の役割分担として整理します。

### [15. Coding Agentから利用する](https://fcircle-biz.github.io/tech-docs-v2/guide/ai/ai-apps/jev/jev-learning-material-15.html)

Claude Code や Codex といった Coding Agent と Jev の関係を理解します。Jev は Coding Agent の代替ではなく、Coding Agent が「Jev を使うコードを書く」という関係であることを押さえ、公式の Agent Skill の位置づけも確認します。

### [16. 実践課題: 自動振り分け](https://fcircle-biz.github.io/tech-docs-v2/guide/ai/ai-apps/jev/jev-learning-material-16.html)

総合演習として「問い合わせ自動振り分けシステム」を作ります。Choice（カテゴリ）・Score（緊急度）・Noul（クレームか）を1リクエストで取得し、その結果をコードで合成して FAQ / LLM / 人間レビューへ振り分けます。低 Confidence 時は人間レビューへ回す設計まで実装します。

## 推奨所要時間

| 章 | 内容 | 目安時間 |
|----|------|----------|
| 第1章 | Jevとは | 45分 |
| 第2章 | System Oneという考え方 | 45分 |
| 第3章 | State — 判断の材料 | 1時間 |
| 第4章 | 3つのPrimitive | 1時間 |
| 第5章 | 最初のリクエストを送る | 45分 |
| 第6章 | HTTP APIから利用する | 1時間 |
| 第7章 | Python SDKで組み込む | 1時間15分 |
| 第8章 | Atomic Question | 1時間30分 |
| 第9章 | ProbabilityとConfidence | 1時間 |
| 第10章 | Questionを構造化する | 45分 |
| 第11章 | 複数Questionと並列評価 | 45分 |
| 第12章 | デザインパターン | 2時間 |
| 第13章 | jev-1.13の弱点と注意点 | 1時間 |
| 第14章 | Jev × LLM | 45分 |
| 第15章 | Coding Agentから利用する | 30分 |
| 第16章 | 実践課題: 自動振り分け | 3時間 |
| **合計** | | **約18時間** |

## 学習目標

このガイドを完了すると、以下のスキルを身につけることができます：

1. Jev と一般的な LLM の違いを説明できる
2. System One モデルの考え方を説明できる
3. 判断に必要な情報だけを含む State を設計できる
4. Choice / Score / Noul を判断内容に応じて使い分けられる
5. 複雑な判断を Atomic Question へ分解できる
6. `probabilities` と `confidence` を区別して扱える
7. 複数の Question を1リクエストで組み合わせられる
8. 複数の判断結果をコードで合成して最終判断を組み立てられる
9. Confidence による Human Review の振り分けを設計できる
10. Jev・LLM・通常コードの役割を適切に分けられる
11. Jev を既存アプリケーションへ組み込める
12. Jev を Decision Layer として利用したシステムを設計できる

## 本教材で特に強調する5原則

1. **Jev に Reasoning させすぎない** — 一つの明確な判断に限定する
2. **Question は Atomic にする** — 複合的な依頼は分解する
3. **State には必要な情報だけを渡す** — 無関係な情報は精度を下げる
4. **AI の判断をコードで合成する** — 最終判断はコードの責務
5. **Confidence を使って「判断しない」選択肢を作る** — 不確実なら人間へ

特に重要なのは **第8章「Atomic Question」→ 第9章「Confidence」→ 第12章「デザインパターン」** の流れです。ここが一般的な LLM 教材との最大の違いになります。

## 次のステップ

- [Claude入門学習ガイド](https://fcircle-biz.github.io/tech-docs-v2/guide/ai/generative-ai/claude/claude-learning-material-01.html) — 文章生成・対話側のAI（LLM）の使い方を学ぶ
- [Claude Code入門学習ガイド](https://fcircle-biz.github.io/tech-docs-v2/guide/ai/ai-coding/claude-code/claude-code-learning-material-01.html) — Jev を使うコードを Coding Agent に書かせる
- 公式 [Cookbooks](https://docs.typesafe.ai/demos) — RAG パッセージ分類・引用チェック・LLM ガードレールなどの実装例
