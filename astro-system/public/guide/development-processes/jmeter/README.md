# JMeter 入門 学習ガイドライン

このガイドラインでは、Apache JMeter を使った性能テスト（負荷テスト）の基礎を入門者向けに段階的に学習するためのカリキュラムを提供しています。自分の PC 上に練習用サーバー（go-httpbin）を用意し、テスト計画の作成から、変数・相関・シナリオ設計、CLI モードでの負荷実行、HTML レポートの分析と報告までを、手を動かしながら身につけます。

## 前提条件

### 必要な環境
- Windows 10 / 11、または macOS（Apple Silicon / Intel）の PC
- JDK 21（Eclipse Temurin 21 LTS を推奨。JMeter 5.6.3 は Java 8 以上で動作）
- Apache JMeter 5.6.3（第2章で導入）
- Docker Desktop または互換ツール（練習用サーバー go-httpbin の起動に使用）
- 8GB 以上のメモリを推奨

### 参考リソース
- [Apache JMeter 公式サイト](https://jmeter.apache.org/)
- [JMeter ユーザーマニュアル](https://jmeter.apache.org/usermanual/index.html)
- [JMeter ダウンロード](https://jmeter.apache.org/download_jmeter.cgi)
- [Eclipse Temurin（Adoptium）](https://adoptium.net/)
- [go-httpbin（GitHub）](https://github.com/mccutchen/go-httpbin)

### 前提知識
- **必須**: PC の基本操作、ターミナル（コマンドプロンプト）でコマンドを実行した経験
- **推奨**: HTTP の基礎（URL・GET/POST・ステータスコード・JSON）。Java の知識は不要です

> **注意**: 許可なく他者のサーバーに負荷をかけることは、サービス妨害攻撃（DoS 攻撃）と同じ行為であり、法的責任を問われる可能性があります。本ガイドの実習は、すべて自分の PC 上の練習用サーバーに対して行います。

## 学習コンテンツ

### [1. JMeterと性能テストの全体像](https://fcircle-biz.github.io/tech-docs-v2/guide/development-processes/jmeter/jmeter-learning-material-01.html)
性能テストの目的と種類（負荷・ストレス・スパイク・耐久）、応答時間・スループット・エラー率などの指標、JMeter の特徴と「スレッド＝仮想ユーザー」という仕組みを理解します。

### [2. 環境構築：JMeterと練習用サーバー](https://fcircle-biz.github.io/tech-docs-v2/guide/development-processes/jmeter/jmeter-learning-material-02.html)
JDK と JMeter 5.6.3 をインストールして英語表示で起動し、ディレクトリ構成と Plugins Manager を確認します。練習用サーバー go-httpbin を Docker で起動します。

### [3. テスト計画の構造と要素の種類](https://fcircle-biz.github.io/tech-docs-v2/guide/development-processes/jmeter/jmeter-learning-material-03.html)
テスト計画（.jmx）のツリー構造と、Sampler・Config Element・Timer・Assertion・Listener などの要素の役割、スコープと実行順序のルールを学びます。

### [4. はじめてのHTTPリクエスト](https://fcircle-biz.github.io/tech-docs-v2/guide/development-processes/jmeter/jmeter-learning-material-04.html)
HTTP Request Defaults で接続先を共通化し、GET・POST（JSON）リクエストを実行します。View Results Tree と Summary Report で結果を読み取ります。

### [5. スレッドグループで負荷を設計する](https://fcircle-biz.github.io/tech-docs-v2/guide/development-processes/jmeter/jmeter-learning-material-05.html)
スレッド数・ランプアップ・ループ回数・実行期間を設定し、同時ユーザー数とスループットの関係（リトルの法則）から必要な負荷を見積もります。

### [6. タイマーで現実的なアクセスを再現する](https://fcircle-biz.github.io/tech-docs-v2/guide/development-processes/jmeter/jmeter-learning-material-06.html)
思考時間の意味を理解し、Constant Timer・Uniform Random Timer・Constant Throughput Timer で現実的なアクセス間隔や目標スループットを再現します。

### [7. アサーションで応答を検証する](https://fcircle-biz.github.io/tech-docs-v2/guide/development-processes/jmeter/jmeter-learning-material-07.html)
Response Assertion・JSON Assertion・Duration Assertion で、ステータスコードだけでは見抜けない誤った応答や遅すぎる応答を検出します。

### [8. 変数とCSVデータでパラメータ化する](https://fcircle-biz.github.io/tech-docs-v2/guide/development-processes/jmeter/jmeter-learning-material-08.html)
変数・関数・プロパティと CSV Data Set Config を使い、ユーザーごとに異なるデータでリクエストを送れるようにします。

### [9. 相関：レスポンスの値を次のリクエストで使う](https://fcircle-biz.github.io/tech-docs-v2/guide/development-processes/jmeter/jmeter-learning-material-09.html)
JSON Extractor・Regular Expression Extractor・Boundary Extractor でトークンなどの動的な値を取り出して次のリクエストに渡し、HTTP Cookie Manager でセッションを維持します。

### [10. ロジックコントローラでシナリオを組み立てる](https://fcircle-biz.github.io/tech-docs-v2/guide/development-processes/jmeter/jmeter-learning-material-10.html)
Transaction Controller・Once Only Controller・Loop Controller・If Controller・Throughput Controller を組み合わせ、利用者の一連の操作をシナリオとして表現します。

### [11. Test Script Recorderで操作を記録する](https://fcircle-biz.github.io/tech-docs-v2/guide/development-processes/jmeter/jmeter-learning-material-11.html)
HTTP(S) Test Script Recorder をプロキシとして使い、curl やブラウザの操作を記録します。記録したスクリプトを整理し、使える状態に仕上げます。

### [12. CLIモードで負荷テストを実行する](https://fcircle-biz.github.io/tech-docs-v2/guide/development-processes/jmeter/jmeter-learning-material-12.html)
CLI（非GUI）モードでテストを実行し、JTL 結果ファイルと HTML レポートを出力します。プロパティで負荷条件を切り替え、実行前のチェックリストを確認します。

### [13. HTMLレポートで結果を分析する](https://fcircle-biz.github.io/tech-docs-v2/guide/development-processes/jmeter/jmeter-learning-material-13.html)
HTML ダッシュボードレポートの Statistics・APDEX・Over Time グラフ・Errors を読み、平均値の罠やパーセンタイルの考え方、限界に達したサインを学びます。

### [14. 総合演習：性能テストを計画・実施・報告する](https://fcircle-biz.github.io/tech-docs-v2/guide/development-processes/jmeter/jmeter-learning-material-14.html)
EC サイトを模したシナリオで、目標設定・テスト計画の作成・スモークテスト・段階的な負荷実行・結果の判定・報告書の作成までを一通り実施します。

## 推奨所要時間

| 章 | 内容 | 目安時間 |
|----|------|----------|
| 第1章 | JMeterと性能テストの全体像 | 45分 |
| 第2章 | 環境構築：JMeterと練習用サーバー | 1時間 |
| 第3章 | テスト計画の構造と要素の種類 | 1時間 |
| 第4章 | はじめてのHTTPリクエスト | 1時間10分 |
| 第5章 | スレッドグループで負荷を設計する | 1時間10分 |
| 第6章 | タイマーで現実的なアクセスを再現する | 1時間 |
| 第7章 | アサーションで応答を検証する | 1時間 |
| 第8章 | 変数とCSVデータでパラメータ化する | 1時間20分 |
| 第9章 | 相関：レスポンスの値を次のリクエストで使う | 1時間20分 |
| 第10章 | ロジックコントローラでシナリオを組み立てる | 1時間10分 |
| 第11章 | Test Script Recorderで操作を記録する | 1時間20分 |
| 第12章 | CLIモードで負荷テストを実行する | 1時間 |
| 第13章 | HTMLレポートで結果を分析する | 1時間20分 |
| 第14章 | 総合演習：性能テストを計画・実施・報告する | 1時間30分 |
| **合計** | | **約16時間** |

## 学習目標

このガイドを完了すると、以下のスキルを身につけることができます：

- 性能テストの種類と目的を説明し、応答時間・スループット・エラー率・パーセンタイルの意味を理解できる
- JMeter でテスト計画を作成し、HTTP リクエスト・スレッドグループ・タイマー・アサーションを適切なスコープで設定できる
- CSV や関数で値をパラメータ化し、トークンや Cookie などの動的な値を相関処理できる
- ロジックコントローラで業務シナリオを組み立て、Test Script Recorder で記録したスクリプトを整理できる
- CLI モードで負荷テストを実行し、HTML レポートから性能の良し悪しと問題の兆候を読み取れる
- 目標設定から報告書の作成まで、性能テストを一通り計画・実施できる

## 次のステップ

- [Docker 学習ガイド](https://fcircle-biz.github.io/tech-docs-v2/guide/cloud-infrastructure/docker/docker-learning-material-01.html) — テスト対象や JMeter 実行環境をコンテナで用意する
- [Linux・コマンドライン学習ガイド](https://fcircle-biz.github.io/tech-docs-v2/guide/cloud-infrastructure/linux/linux-learning-material-01.html) — サーバー上で CLI 実行やリソース監視を行う
- [Git/GitHub 学習ガイド](https://fcircle-biz.github.io/tech-docs-v2/guide/development-processes/git-github/git-github-learning-material-01.html) — テスト計画（.jmx）をバージョン管理し、CI で実行する
- [JUnit 学習ガイド](https://fcircle-biz.github.io/tech-docs-v2/guide/programming-languages/java-ecosystem/junit/junit-learning-material-01.html) — 機能面の自動テストを学ぶ
