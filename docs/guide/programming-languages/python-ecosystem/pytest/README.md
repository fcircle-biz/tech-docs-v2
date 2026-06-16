# pytest入門 学習ガイドライン

このガイドラインでは、Pythonのテストフレームワーク「pytest」の基礎を入門者向けに段階的に学習するためのカリキュラムを提供しています。Python基礎を学んだ方が次のステップとして、テストの書き方とテスト駆動開発の考え方を身につけるための実践的な内容となっています。unittestとの比較も交えながら、pytestの強力な機能と簡潔な書き方を習得できます。

## 前提条件

### 必要な環境
- Python 3.8以上がインストールされていること
- pip（Pythonパッケージマネージャ）が利用可能であること
- テキストエディタまたはIDE（VS Code推奨、pytest拡張機能あり）
- コマンドライン/ターミナルの基本操作ができること

### 参考リソース
- [pytest公式ドキュメント](https://docs.pytest.org/en/stable/)
- [pytest日本語リファレンス](https://docs.pytest.org/en/stable/getting-started.html)
- [Python公式ドキュメント - unittest](https://docs.python.org/ja/3/library/unittest.html)
- [Real Python - Testing with pytest](https://realpython.com/pytest-python-testing/)

### 前提知識
- **必須**: Python基礎（変数、データ型、制御構造、関数、クラス、モジュール、例外処理の理解） - [Python入門ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/python-beginner/) 履修済み相当
- **必須**: コマンドラインでのPython実行、pipによるパッケージインストールの基本操作
- **推奨**: オブジェクト指向プログラミングの基礎知識（クラス、継承、メソッドの概念）
- **推奨**: ファイル・ディレクトリ構造の理解

## 学習コンテンツ

### [1. テストとは何か - なぜテストを書くのか](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/pytest/pytest-learning-material-01.html)
ソフトウェアテストの基本概念と重要性を理解します。手動テストと自動テストの違い、テストを書くことで得られるメリット（バグの早期発見、リファクタリングの安心感、仕様のドキュメント化）を学び、Pythonにおけるテストフレームワークの全体像を把握します。

### [2. pytestの導入と最初のテスト](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/pytest/pytest-learning-material-02.html)
pytestのインストール方法、基本的なテストの書き方、テストの実行方法を学びます。`assert`文を使ったシンプルなテストケースの作成から、テスト結果の読み方まで、pytestを使い始めるための基礎を身につけます。

### [3. unittest入門と比較 - 標準ライブラリのテストフレームワーク](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/pytest/pytest-learning-material-03.html)
Python標準ライブラリのunittestの基本的な使い方を学び、pytestとの構文やアプローチの違いを比較します。TestCaseクラスの継承、assertメソッド群、setUp/tearDownなどのunittestの特徴を理解したうえで、pytestがなぜ広く選ばれているのかを実感します。

### [4. アサーションの詳細 - テスト結果を正確に検証する](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/pytest/pytest-learning-material-04.html)
pytestのassert文の詳細な使い方を学びます。値の比較、例外の検証（`pytest.raises`）、警告の検証（`pytest.warns`）、近似値の比較（`pytest.approx`）など、様々な検証パターンを習得します。pytestが提供する詳細なアサーション失敗レポートの読み方も理解します。

### [5. テストの構造化 - ファイル・クラス・関数の整理術](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/pytest/pytest-learning-material-05.html)
テストファイルの命名規則、テストディレクトリの構成、テストクラスによるグループ化、conftest.pyの役割を学びます。プロジェクトが大きくなっても管理しやすいテスト構造の設計方法を身につけます。

### [6. フィクスチャ基礎 - テストの前準備と後片付け](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/pytest/pytest-learning-material-06.html)
pytestのフィクスチャ（fixture）の基本概念と使い方を学びます。`@pytest.fixture`デコレータによるテストデータの準備、yield文を使った後処理（teardown）、フィクスチャのスコープ（function、class、module、session）を理解します。

### [7. フィクスチャ応用 - 再利用とパラメータ化](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/pytest/pytest-learning-material-07.html)
conftest.pyを使ったフィクスチャの共有、フィクスチャの組み合わせ、ファクトリフィクスチャパターン、組み込みフィクスチャ（tmp_path、capsys、monkeypatch等）の活用方法を学びます。テストコードの重複を効率的に削減する技術を習得します。

### [8. パラメータ化テスト - 同じテストを複数データで実行する](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/pytest/pytest-learning-material-08.html)
`@pytest.mark.parametrize`デコレータを使って、1つのテスト関数に複数の入力データと期待値を指定する方法を学びます。境界値テスト、正常系・異常系の網羅的なテスト、複数パラメータの組み合わせテストを効率的に記述する技術を身につけます。

### [9. マーカーとテストの選択実行](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/pytest/pytest-learning-material-09.html)
`@pytest.mark`を使ったテストの分類（カスタムマーカー）、`skip`/`skipIf`/`xfail`による条件付きスキップ、`-k`オプションによるキーワード指定実行、`-m`オプションによるマーカー指定実行など、テストの選択的な実行方法を学びます。

### [10. モックとパッチ - 外部依存をテストから分離する](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/pytest/pytest-learning-material-10.html)
`unittest.mock`モジュールとpytestのmonkeypatchフィクスチャを使い、外部APIコール、データベースアクセス、ファイルI/Oなどの外部依存を置き換えてテストする方法を学びます。Mock、MagicMock、patchデコレータの使い方を理解します。

### [11. プラグインの活用 - pytestの機能を拡張する](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/pytest/pytest-learning-material-11.html)
pytest-cov（カバレッジ計測）、pytest-xdist（並列実行）、pytest-randomly（ランダム実行順）、pytest-mock（モックの簡略化）、pytest-html（HTMLレポート生成）など、実務で役立つ主要プラグインの導入と活用方法を学びます。

### [12. テストカバレッジ - テストの網羅率を可視化する](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/pytest/pytest-learning-material-12.html)
pytest-covを使ったコードカバレッジの計測方法を学びます。ステートメントカバレッジとブランチカバレッジの違い、カバレッジレポートの読み方、カバレッジ目標の設定方法、カバレッジが高いだけでは十分でない理由を理解します。

### [13. 設定ファイルとカスタマイズ - pytest.iniとpyproject.toml](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/pytest/pytest-learning-material-13.html)
pytest.ini、pyproject.toml、setup.cfgを使ったpytestの設定方法を学びます。テストディレクトリの指定、デフォルトオプションの設定、マーカーの登録、テスト収集のカスタマイズなど、プロジェクトに合わせた設定の最適化を行います。

### [14. 実践パターン - 実務で使えるテスト設計](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/pytest/pytest-learning-material-14.html)
Arrange-Act-Assert（AAA）パターン、Given-When-Thenパターン、テストの独立性の確保、テストデータの管理、エッジケースの洗い出し方法など、実務で品質の高いテストを書くための設計パターンとベストプラクティスを学びます。

### [15. CI/CDとの連携 - テスト自動化の仕組みを作る](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/pytest/pytest-learning-material-15.html)
GitHub ActionsやGitLab CIを例に、pytestをCI/CDパイプラインに組み込む方法を学びます。プッシュ時の自動テスト実行、カバレッジレポートの自動生成、テスト失敗時の通知設定など、チーム開発でテストを継続的に活用する仕組みを構築します。

### [16. 総合演習 - 実践プロジェクトでテストを書こう](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/pytest/pytest-learning-material-16.html)
これまでに学んだ知識を総動員して、実践的なPythonプロジェクト（簡易タスク管理アプリケーション）にテストスイートを一から構築します。要件からテストケースを設計し、フィクスチャ、パラメータ化、モック、カバレッジ計測を組み合わせた総合的なテストの書き方を実践します。

## 学習の進め方

1. **概念を理解してから手を動かす**
   各章の冒頭で「なぜこの技術が必要なのか」を理解してから、コードの実践に入りましょう。テストの目的を理解することが、良いテストを書く第一歩です。

2. **必ず自分のコードでテストを書く**
   サンプルコードを写すだけでなく、自分で簡単な関数を作り、それに対するテストを書く練習をしましょう。「テスト対象コード」と「テストコード」の両方を書くことで理解が深まります。

3. **テスト結果をじっくり読む**
   テストが失敗したとき、pytestの出力メッセージを丁寧に読みましょう。pytestの詳細なエラーレポートは、原因特定のための重要な情報を提供してくれます。

4. **少しずつ難度を上げる**
   基本的なassertから始め、フィクスチャ、パラメータ化、モックと段階的に進みましょう。各章の内容を確実に理解してから次に進むことが大切です。

5. **実プロジェクトに適用する**
   学習が進んだら、自分の既存プロジェクトにテストを追加してみましょう。実際のコードにテストを書くことで、テストの価値と難しさの両方を実感できます。

## 推奨所要時間

| 章 | 内容 | 目安時間 |
|----|------|----------|
| 第1章 | テストとは何か - なぜテストを書くのか | 45分 |
| 第2章 | pytestの導入と最初のテスト | 1時間 |
| 第3章 | unittest入門と比較 - 標準ライブラリのテストフレームワーク | 1時間 |
| 第4章 | アサーションの詳細 - テスト結果を正確に検証する | 1時間 |
| 第5章 | テストの構造化 - ファイル・クラス・関数の整理術 | 1時間 |
| 第6章 | フィクスチャ基礎 - テストの前準備と後片付け | 1.5時間 |
| 第7章 | フィクスチャ応用 - 再利用とパラメータ化 | 1.5時間 |
| 第8章 | パラメータ化テスト - 同じテストを複数データで実行する | 1時間 |
| 第9章 | マーカーとテストの選択実行 | 1時間 |
| 第10章 | モックとパッチ - 外部依存をテストから分離する | 1.5時間 |
| 第11章 | プラグインの活用 - pytestの機能を拡張する | 1時間 |
| 第12章 | テストカバレッジ - テストの網羅率を可視化する | 1時間 |
| 第13章 | 設定ファイルとカスタマイズ - pytest.iniとpyproject.toml | 45分 |
| 第14章 | 実践パターン - 実務で使えるテスト設計 | 1.5時間 |
| 第15章 | CI/CDとの連携 - テスト自動化の仕組みを作る | 1.5時間 |
| 第16章 | 総合演習 - 実践プロジェクトでテストを書こう | 3時間 |
| **合計** | | **約20時間** |

※ 上記は目安です。自分のペースで着実に進めてください。

## 関連リソース

- [pytest チートシート](https://fcircle-biz.github.io/tech_docs/cheatsheet/programming-languages/python-ecosystem/pytest/)
- [Python入門 学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/python-beginner/)
- [ソフトウェアテスト入門 学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/development-processes/software-testing/)
- [Git/GitHub入門 学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/development-processes/git-github/)
- [DevOps 学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/development-processes/devops/)

## 学習目標

このガイドを完了すると、以下のスキルを身につけることができます：

- **テストの基本概念の理解**: ソフトウェアテストの目的、種類、重要性を理解し、テストを書く意義を説明できる
- **pytestの基本操作**: pytestのインストール、テストの作成、実行、結果の確認が一通りできる
- **効果的なアサーション**: 値の比較、例外検証、近似値比較など、状況に応じた適切なアサーションが書ける
- **フィクスチャの活用**: テストデータの準備と後処理を効率的に管理し、テストコードの重複を削減できる
- **パラメータ化テスト**: 同じテストロジックに対して複数のデータセットを適用し、網羅的なテストが書ける
- **モックの理解と活用**: 外部依存を適切に分離し、テスト対象のコードだけを独立してテストできる
- **テストカバレッジの計測**: コードカバレッジを計測・分析し、テストの網羅性を客観的に評価できる
- **CI/CDへの組み込み**: GitHub Actions等を使い、テストの自動実行環境を構築できる
- **実践的なテスト設計**: AAA パターン等のベストプラクティスに基づいた、保守しやすいテストを設計・実装できる
- **unittestとの比較理解**: Python標準のunittestの特徴を理解し、pytestとの違いを踏まえたフレームワーク選択ができる

## 次のステップ

このガイドライン完了後は、以下の学習に進むことをお勧めします：

- [Django入門 学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/django/) - Webアプリケーション開発とDjangoテストフレームワーク
- [FastAPI 学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/python-ecosystem/fastapi/) - 高性能APIフレームワークとテスト
- [DevOps 学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/development-processes/devops/) - CI/CDパイプラインの本格構築
- [ソフトウェアテスト入門 学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/development-processes/software-testing/) - テスト技法・テスト計画・品質管理の体系的学習
- [Docker 学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/cloud-infrastructure/docker/) - テスト環境のコンテナ化
