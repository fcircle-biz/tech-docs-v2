# ソフトウェアテスト入門 学習ガイドライン

このガイドラインでは、ソフトウェアテストの基礎をプログラム未経験者向けに段階的に学習するためのカリキュラムを提供しています。ソフトウェアテストとは何か、なぜ必要なのかという基本的な疑問から始め、テストの種類、技法、実践的な進め方までを体系的に解説します。

## 前提条件

### 必要な環境
- Webブラウザ（Chrome、Firefox、Edge など）
- テキストエディタ（メモ帳、VS Code など）
- 学習意欲と好奇心

### 参考リソース
- [JSTQB Foundation Level シラバス](https://jstqb.jp/syllabus.html) - ソフトウェアテストの国際標準資格
- [IPA ソフトウェアテスト・品質](https://www.ipa.go.jp/sec/softwareengineering/std/sec-std.html) - 情報処理推進機構の品質関連資料

### 前提知識
- **必須**: 特になし（プログラム未経験者でも学習可能）
- **推奨**: コンピュータの基本操作（ファイル作成、Webブラウジング等）

## 学習コンテンツ

### [1. ソフトウェアテストとは](https://fcircle-biz.github.io/tech_docs/guide/development-processes/software-testing/software-testing-learning-material-01.html)
ソフトウェアテストの定義と目的を学びます。「なぜテストが必要なのか」「テストをしないとどうなるのか」といった基本的な疑問に答え、テストの重要性を理解します。バグ（不具合）とは何か、品質とは何かについても丁寧に解説します。

### [2. テストの基本原則](https://fcircle-biz.github.io/tech_docs/guide/development-processes/software-testing/software-testing-learning-material-02.html)
ISTQB/JSTQBが定める7つのテスト原則を学びます。「テストは欠陥があることを示せるが、欠陥がないことは示せない」「全数テストは不可能」といった、テストに取り組む際の基本的な考え方を身につけます。

### [3. テストプロセスの全体像](https://fcircle-biz.github.io/tech_docs/guide/development-processes/software-testing/software-testing-learning-material-03.html)
テスト計画から実行、完了報告までの一連の流れを学びます。テスト活動がどのように進められるのか、各フェーズで何をするのかを理解し、テスト全体の見通しを持てるようにします。

### [4. テストレベル - 単体・結合・システムテスト](https://fcircle-biz.github.io/tech_docs/guide/development-processes/software-testing/software-testing-learning-material-04.html)
テストの段階（レベル）について学びます。小さな部品をテストする「単体テスト」、部品を組み合わせてテストする「結合テスト」、システム全体をテストする「システムテスト」、ユーザーが確認する「受入テスト」の違いと目的を理解します。

### [5. テストタイプ - 機能・非機能・変更テスト](https://fcircle-biz.github.io/tech_docs/guide/development-processes/software-testing/software-testing-learning-material-05.html)
テストの種類（タイプ）について学びます。「正しく動作するか」を確認する機能テスト、「使いやすいか」「速いか」を確認する非機能テスト、「変更が悪影響を与えていないか」を確認する回帰テストの違いを理解します。

### [6. ブラックボックステスト技法](https://fcircle-biz.github.io/tech_docs/guide/development-processes/software-testing/software-testing-learning-material-06.html)
内部構造を知らなくても実施できるテスト技法を学びます。同値分割法、境界値分析、デシジョンテーブル、状態遷移テストなど、効率的にテストケースを作成する方法を習得します。

### [7. ホワイトボックステスト技法](https://fcircle-biz.github.io/tech_docs/guide/development-processes/software-testing/software-testing-learning-material-07.html)
内部構造を理解した上で実施するテスト技法を学びます。ステートメントカバレッジ、ブランチカバレッジなど、コードのどの部分がテストされたかを測定する方法を理解します。

### [8. 経験ベースのテスト技法](https://fcircle-biz.github.io/tech_docs/guide/development-processes/software-testing/software-testing-learning-material-08.html)
エラー推測やチェックリストベースのテスト、探索的テストなど、テスト担当者の知識と経験を活かしたテスト技法を学びます。形式的な技法と組み合わせることで、より効果的なテストが可能になります。

### [9. テストドキュメント - テスト計画書・テストケース](https://fcircle-biz.github.io/tech_docs/guide/development-processes/software-testing/software-testing-learning-material-09.html)
テストで使用する各種ドキュメントの書き方を学びます。テスト計画書、テスト設計仕様書、テストケース、テスト報告書など、チームでテストを進める際に必要な文書の作成方法を習得します。

### [10. バグ報告と不具合管理](https://fcircle-biz.github.io/tech_docs/guide/development-processes/software-testing/software-testing-learning-material-10.html)
バグを発見した際の報告方法と、不具合の管理プロセスを学びます。再現手順の記載方法、重要度・優先度の判断基準、不具合のライフサイクル管理について理解します。

### [11. テスト自動化の基礎](https://fcircle-biz.github.io/tech_docs/guide/development-processes/software-testing/software-testing-learning-material-11.html)
手動テストと自動テストの違い、自動化に適したテスト・適さないテスト、自動化ツールの種類と選び方を学びます。Selenium、JUnit、Playwrightなど代表的なツールの概要も紹介します。

### [12. アジャイル開発におけるテスト](https://fcircle-biz.github.io/tech_docs/guide/development-processes/software-testing/software-testing-learning-material-12.html)
アジャイル開発手法とテストの関係を学びます。スプリント内でのテスト活動、継続的インテグレーション（CI）との連携、テスト駆動開発（TDD）の考え方を理解します。

## 学習の進め方

1. **各章を順番に学習する**: 第1章から順番に進めてください。前の章の知識が後の章の理解に必要となる構成になっています。

2. **用語を確認しながら読む**: 初めて出てくる専門用語には説明を加えています。わからない用語があれば、その都度確認しながら進めてください。

3. **具体例で理解を深める**: 各章には具体的な例を多く含んでいます。抽象的な概念は例を通じて理解すると定着しやすくなります。

4. **実践してみる**: 身近なアプリやWebサービスを使って、学んだテスト技法を試してみましょう。実際に手を動かすことで理解が深まります。

5. **復習を行う**: 学習後、時間を置いて再度読み返すことで、知識の定着率が高まります。

## 推奨所要時間

| 章 | 内容 | 目安時間 |
|----------|------|----------|
| 第1章 | ソフトウェアテストとは | 1.5時間 |
| 第2章 | テストの基本原則 | 1.5時間 |
| 第3章 | テストプロセスの全体像 | 2時間 |
| 第4章 | テストレベル | 2時間 |
| 第5章 | テストタイプ | 2時間 |
| 第6章 | ブラックボックステスト技法 | 2.5時間 |
| 第7章 | ホワイトボックステスト技法 | 2時間 |
| 第8章 | 経験ベースのテスト技法 | 1.5時間 |
| 第9章 | テストドキュメント | 2時間 |
| 第10章 | バグ報告と不具合管理 | 1.5時間 |
| 第11章 | テスト自動化の基礎 | 2時間 |
| 第12章 | アジャイル開発におけるテスト | 1.5時間 |
| **合計** | | **約22時間** |

## 関連リソース

- [アジャイル開発 学習ガイド](https://fcircle-biz.github.io/tech_docs/guide/development-processes/agile-development/) - アジャイル開発手法の基礎
- [ウォーターフォール開発 学習ガイド](https://fcircle-biz.github.io/tech_docs/guide/development-processes/waterfall-development/) - 従来型開発プロセスの基礎
- [Git/GitHub入門 学習ガイド](https://fcircle-biz.github.io/tech_docs/guide/development-processes/git-github/) - バージョン管理の基礎

## 学習目標

このガイドを完了すると、以下のスキルを身につけることができます：

- ソフトウェアテストの目的と重要性を説明できる
- テストレベル（単体・結合・システム・受入）の違いを理解し、適切に使い分けられる
- 同値分割法、境界値分析などの基本的なテスト技法を適用できる
- テスト計画書やテストケースなどの基本的なドキュメントを作成できる
- バグを発見した際に適切な報告書を書ける
- テスト自動化の基本的な考え方とツールの種類を理解している
- アジャイル開発におけるテストの役割を理解している

## 次のステップ

このガイドライン完了後は、以下の学習に進むことをお勧めします：

- [JSTQB Foundation Level 資格取得](https://jstqb.jp/) - ソフトウェアテストの国際資格
- テスト自動化ツールの実践学習（Selenium、Playwright、JUnit等）
- 実際のプロジェクトでのテスト経験
- [DevOps 学習ガイド](https://fcircle-biz.github.io/tech_docs/guide/development-processes/devops-beginner/) - CI/CDとテスト自動化の連携

## 用語集

本ガイドで使用する主要な用語の簡単な説明です：

| 用語 | 説明 |
|------|------|
| バグ（Bug）| ソフトウェアの不具合、欠陥のこと |
| テストケース | テストの実施条件、手順、期待結果をまとめたもの |
| カバレッジ | テストがどの程度コードを網羅しているかの指標 |
| 回帰テスト | 変更が既存機能に影響を与えていないことを確認するテスト |
| CI/CD | 継続的インテグレーション/継続的デリバリーの略 |
