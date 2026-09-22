# Apache Superset 学習ガイドライン

このガイドラインでは、オープンソースの BI（ビジネスインテリジェンス）プラットフォームである **Apache Superset** を、入門者向けに段階的に学習するためのカリキュラムを提供しています。

Superset は、データベースに保存されたデータを **SQL で探索し、チャートに描き、ダッシュボードとして共有する**ためのツールです。本教材では「画面の操作手順」を覚えるだけでなく、**データベース接続 → データセット（意味づけ） → チャート → ダッシュボード → 権限・運用**という Superset の考え方の流れを理解し、自分のデータで分析基盤を立ち上げられるようになることを目指します。

> 本教材は Superset 4 系以降（Docker Compose で起動する構成）を前提に説明しています。環境構築では公式クイックスタートに従い、リリースタグを指定して起動します（タグを指定しないとその時点の最新版が起動します）。Superset は更新の速いプロダクトであり、画面のラベルや設定項目名はバージョンによって変わることがあるため、詳細は必ず公式ドキュメントも併せて確認してください。

## 前提条件

### 必要な環境

- Docker Desktop（または Docker Engine ＋ Docker Compose v2）が動作する PC
- メモリ 8GB 以上（Superset・メタデータ DB・Redis を同時に起動するため）
- Web ブラウザ（Google Chrome 推奨）
- ターミナル（macOS / Linux）または PowerShell（Windows）
- テキストエディタ（VS Code など。設定ファイル `superset_config.py` の編集に使用）

### 参考リソース

- [Apache Superset 公式サイト](https://superset.apache.org/)
- [公式ドキュメント（Intro）](https://superset.apache.org/docs/intro)
- [クイックスタート](https://superset.apache.org/docs/quickstart)
- [インストール（Docker Compose）](https://superset.apache.org/docs/installation/docker-compose)
- [データベース接続（対応DBとドライバ）](https://superset.apache.org/user-docs/databases/)
- [SQL Templating（Jinja）](https://superset.apache.org/docs/configuration/sql-templating)
- [Alerts and Reports](https://superset.apache.org/docs/configuration/alerts-reports)
- [Security（ロールと権限）](https://superset.apache.org/docs/security/)
- [GitHub リポジトリ](https://github.com/apache/superset)

### 前提知識

- **必須**: SQL の基礎（`SELECT` / `WHERE` / `GROUP BY` / `JOIN` が読み書きできる）
- **必須**: リレーショナルデータベースの基本用語（テーブル・カラム・行・スキーマ）
- **推奨**: ターミナルでのコマンド実行、Docker の基本操作（`docker compose up` 程度）
- **推奨**: Excel やスプレッドシートで集計・グラフ作成をした経験
- **不要**: Python の開発経験、機械学習・統計の専門知識

## 学習コンテンツ

### [1. Apache Supersetとは](https://fcircle-biz.github.io/tech-docs-v2/guide/data-ai-category/data-ai/superset/superset-learning-material-01.html)

Superset が「データベースの上に載せる可視化レイヤー」であることを理解します。Excel での集計作業との違い、Power BI や Tableau といった商用 BI との位置づけの違い、Superset が**データを保存せず SQL を発行して描画する**というアーキテクチャの基本、そして「接続 → データセット → チャート → ダッシュボード」という本教材全体の流れをつかみます。

### [2. 環境構築 — Dockerで動かす](https://fcircle-biz.github.io/tech-docs-v2/guide/data-ai-category/data-ai/superset/superset-learning-material-02.html)

Docker Compose を使って学習用の Superset を起動します。`git clone` から `docker compose up` までの手順、起動する複数のコンテナ（Superset 本体・メタデータ DB・Redis・Celery ワーカー）の役割、管理者ユーザーでのログイン、サンプルデータの読み込み、うまく起動しないときの確認ポイントを学びます。

### [3. 画面ツアーと基本操作](https://fcircle-biz.github.io/tech-docs-v2/guide/data-ai-category/data-ai/superset/superset-learning-material-03.html)

Superset の画面構成を一通り見て回ります。ナビゲーションバーの Dashboards / Charts / Datasets / SQL Lab がそれぞれ何を扱う場所なのかを整理し、サンプルダッシュボードを開いて操作しながら、「チャートはデータセットに属し、ダッシュボードはチャートを並べたもの」という関係を体感します。

### [4. データベースに接続する](https://fcircle-biz.github.io/tech-docs-v2/guide/data-ai-category/data-ai/superset/superset-learning-material-04.html)

Superset から自分のデータベースへ接続します。SQLAlchemy URI の書き方、DB ドライバが必要になる理由、接続テストの手順、そして「SQL Lab を許可するか」「DML を許可するか」といった接続単位のセキュリティ設定の意味を理解します。読み取り専用ユーザーで接続する理由も学びます。

### [5. SQL Lab入門](https://fcircle-biz.github.io/tech-docs-v2/guide/data-ai-category/data-ai/superset/superset-learning-material-05.html)

Superset に内蔵された SQL エディタ「SQL Lab」を使います。クエリの実行と結果の確認、クエリ履歴と保存クエリ、実行結果をそのままチャート作成へ渡す `Save dataset` の流れ、そして重い集計を扱うための非同期クエリ（Celery）の考え方を学びます。

### [6. データセットを作る](https://fcircle-biz.github.io/tech-docs-v2/guide/data-ai-category/data-ai/superset/superset-learning-material-06.html)

Superset の中心概念である**データセット**を学びます。テーブルをそのまま使う物理データセットと、SQL の結果を定義として保存する仮想データセットの違い、それぞれの向き・不向き、列の設定（フィルタ可否・時間カラム・表示名）、データセットを整える作業が後工程をどれだけ楽にするかを理解します。

### [7. メトリクスと計算列](https://fcircle-biz.github.io/tech-docs-v2/guide/data-ai-category/data-ai/superset/superset-learning-material-07.html)

「売上高」「注文件数」「客単価」といった指標をデータセット側に定義し、チャート間で再利用する方法を学びます。メトリクス（集計式）と計算列（行単位の式）の違い、`SUM` や `COUNT(DISTINCT ...)` の書き方、表示フォーマットの指定、指標の定義を1か所に集約することの意味を理解します。

### [8. チャートを作る（Explore入門）](https://fcircle-biz.github.io/tech-docs-v2/guide/data-ai-category/data-ai/superset/superset-learning-material-08.html)

チャート作成画面「Explore」の使い方を学びます。ディメンション（分ける軸）とメトリクス（測る値）という考え方、時間範囲・フィルタ・並び替え・件数制限の指定、`View query` で生成 SQL を確認する習慣、そしてチャートの保存とダッシュボードへの追加までを通して実施します。

### [9. チャート種別の使い分け](https://fcircle-biz.github.io/tech-docs-v2/guide/data-ai-category/data-ai/superset/superset-learning-material-09.html)

Superset が備える多数のチャート種別から、目的に合うものを選べるようになります。時系列は折れ線、比較は棒、内訳はピボットテーブル、単一指標は Big Number といった選択基準を整理し、円グラフを多用しない理由や、表形式が最も伝わる場面についても具体例で学びます。

### [10. ダッシュボードを組み立てる](https://fcircle-biz.github.io/tech-docs-v2/guide/data-ai-category/data-ai/superset/superset-learning-material-10.html)

複数のチャートを1枚のダッシュボードにまとめます。ドラッグ＆ドロップによる配置、行・列・タブによるレイアウト、Markdown ヘッダーでの説明の追加、そして「結論を上、詳細を下」という読み手に伝わる構成の原則を学びます。

### [11. フィルタとインタラクション](https://fcircle-biz.github.io/tech-docs-v2/guide/data-ai-category/data-ai/superset/superset-learning-material-11.html)

ダッシュボードを「見るだけ」から「触って調べられる」ものにします。ネイティブフィルタの追加とスコープ設定、時間範囲フィルタ、チャートをクリックして他のチャートを絞り込むクロスフィルタ、ドリルダウン、そしてフィルタを付けすぎないための設計方針を学びます。

### [12. Jinjaテンプレートで動的SQL](https://fcircle-biz.github.io/tech-docs-v2/guide/data-ai-category/data-ai/superset/superset-learning-material-12.html)

SQL の中に変数や条件を埋め込む Jinja テンプレートを学びます。`{{ filter_values() }}` でダッシュボードのフィルタ値を SQL に渡す方法、`{{ current_username() }}` によるユーザー別の出し分け、`{% if %}` による条件分岐、そして機能を有効化する設定と、動的 SQL を使いすぎない判断基準を理解します。

### [13. ユーザー・ロールと行レベルセキュリティ](https://fcircle-biz.github.io/tech-docs-v2/guide/data-ai-category/data-ai/superset/superset-learning-material-13.html)

「誰に何を見せるか」を設計します。Admin / Alpha / Gamma という既定ロールの違い、Gamma ユーザーにデータアクセス権を付与する仕組み、ダッシュボード単位のアクセス制御、そして同じダッシュボードでも所属部門の行だけが見える行レベルセキュリティ（RLS）の設定方法を学びます。

### [14. 運用の基礎 — キャッシュ・アラート・本番構成](https://fcircle-biz.github.io/tech-docs-v2/guide/data-ai-category/data-ai/superset/superset-learning-material-14.html)

学習環境から一歩進め、チームで使い続けるための運用を学びます。メタデータ DB を PostgreSQL にする理由、`SECRET_KEY` の扱い、Redis によるキャッシュとその有効期限、定期実行のアラート＆レポート、ダッシュボードのエクスポート／インポートによる環境移行、そしてバージョンアップの進め方を整理します。

## 推奨所要時間

| 章 | 内容 | 目安時間 |
|----|------|----------|
| 第1章 | Apache Supersetとは | 45分 |
| 第2章 | 環境構築 — Dockerで動かす | 60分 |
| 第3章 | 画面ツアーと基本操作 | 45分 |
| 第4章 | データベースに接続する | 60分 |
| 第5章 | SQL Lab入門 | 60分 |
| 第6章 | データセットを作る | 60分 |
| 第7章 | メトリクスと計算列 | 60分 |
| 第8章 | チャートを作る（Explore入門） | 70分 |
| 第9章 | チャート種別の使い分け | 60分 |
| 第10章 | ダッシュボードを組み立てる | 70分 |
| 第11章 | フィルタとインタラクション | 60分 |
| 第12章 | Jinjaテンプレートで動的SQL | 60分 |
| 第13章 | ユーザー・ロールと行レベルセキュリティ | 70分 |
| 第14章 | 運用の基礎 — キャッシュ・アラート・本番構成 | 75分 |
| **合計** | | **約14時間** |

## 学習目標

このガイドを完了すると、以下のスキルを身につけることができます：

- Apache Superset のアーキテクチャと、BI ツールの中での位置づけを説明できる
- Docker Compose で Superset を起動し、初期設定とサンプルデータの読み込みができる
- データベース接続を作成し、SQL Lab でクエリを実行して結果を確認できる
- 物理／仮想データセットを使い分け、メトリクスと計算列で指標を定義できる
- 目的に合ったチャート種別を選び、Explore でチャートを作成・保存できる
- 複数チャートをダッシュボードにまとめ、フィルタとクロスフィルタで探索可能にできる
- Jinja テンプレートで、フィルタ値やユーザー名に応じた動的な SQL を書ける
- ロールと行レベルセキュリティを設定し、「誰に何を見せるか」を制御できる
- キャッシュ・アラート＆レポート・エクスポート／インポートなど運用の基礎を実施できる

## 次のステップ

- [SQL 学習ガイド](https://fcircle-biz.github.io/tech-docs-v2/guide/data-ai-category/database/sql/) — Superset で書く SQL の基礎を固める
- [Docker 学習ガイド](https://fcircle-biz.github.io/tech-docs-v2/guide/cloud-infrastructure/docker/) — Superset の起動基盤を理解する
- [Power BI 学習ガイド](https://fcircle-biz.github.io/tech-docs-v2/guide/business-saas/power-bi/) — 商用 BI ツールと比較して理解を深める
- Superset の REST API・埋め込み（Embedded SDK）・独自チャートプラグイン開発など、発展的なトピックは公式ドキュメントを参照
