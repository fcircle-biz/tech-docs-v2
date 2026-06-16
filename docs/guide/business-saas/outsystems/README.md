# OutSystems入門 学習ガイドライン

このガイドラインでは、プログラミング未経験者がOutSystemsを使用してWebアプリケーションを開発するための基礎を段階的に学習するカリキュラムを提供しています。ローコード開発の特徴である視覚的な操作を中心に、専門知識がなくても理解できる構成となっています。

## OutSystemsとは

OutSystemsは、プログラムのコードをほとんど書かずに、ドラッグ＆ドロップやクリック操作でアプリケーションを作れる「ローコード開発プラットフォーム」です。プログラミング経験がなくても、業務システムやWebサイトを短期間で開発できることが特徴です。

## 前提条件

### 必要な環境
- **Windows 10/11またはmacOS** - OutSystems Service Studioが動作するOS
- **インターネット接続** - クラウド環境へのアクセスに必要
- **OutSystems Personal Environment** - 無料の開発環境（アカウント作成が必要）
- **Service Studio** - OutSystemsの開発ツール（無料ダウンロード可能）
- **8GB以上のRAM** - 快適な開発のために推奨

### 参考リソース
- [OutSystems公式サイト](https://www.outsystems.com/ja-jp/)
- [OutSystems Developer Portal](https://www.outsystems.com/developers/)
- [OutSystems Training](https://www.outsystems.com/training/)
- [OutSystems Community](https://www.outsystems.com/community/)
- [OutSystems Documentation](https://success.outsystems.com/documentation)

### 前提知識
- **必須**: パソコンの基本操作（ファイル管理、ブラウザ操作、文字入力）
- **必須**: インターネットの基本的な利用方法
- **推奨**: ExcelやPowerPointなどのオフィスソフトの基本操作経験
- **推奨**: Webサイトやアプリを使った経験

## 学習コンテンツ

### [1. OutSystemsの世界へようこそ - ローコード開発入門](https://fcircle-biz.github.io/tech_docs/guide/business-saas/outsystems/outsystems-learning-material-01.html)
ローコード開発とは何か、OutSystemsで何ができるのかを学びます。Personal Environmentのセットアップ、Service Studioのインストール、最初のアプリケーション「Hello OutSystems」を作成します。

### [2. 画面を作ろう - スクリーンとウィジェット](https://fcircle-biz.github.io/tech_docs/guide/business-saas/outsystems/outsystems-learning-material-02.html)
アプリケーションの「顔」となる画面の作り方を学びます。スクリーン（画面）の追加、テキスト・ボタン・画像などのウィジェット（部品）の配置、レイアウトの調整方法を実践的に解説します。

### [3. データを管理する - エンティティとアトリビュート](https://fcircle-biz.github.io/tech_docs/guide/business-saas/outsystems/outsystems-learning-material-03.html)
アプリケーションで使うデータの保存場所「データベース」について学びます。エンティティ（データの入れ物）とアトリビュート（データの項目）の概念を、住所録アプリを例に分かりやすく説明します。

### [4. データを表示する - アグリゲートとリスト](https://fcircle-biz.github.io/tech_docs/guide/business-saas/outsystems/outsystems-learning-material-04.html)
データベースからデータを取り出して画面に表示する方法を学びます。アグリゲート（データの取得）とリストウィジェットを使って、一覧表示や検索機能を実装します。

### [5. ユーザーの入力を受け取る - フォームとアクション](https://fcircle-biz.github.io/tech_docs/guide/business-saas/outsystems/outsystems-learning-material-05.html)
ユーザーがデータを入力・編集できるフォームの作り方を学びます。入力フィールド、選択リスト、チェックボックスなどの使い方と、データの保存処理（アクション）を解説します。

### [6. 処理の流れを制御する - 条件分岐とループ](https://fcircle-biz.github.io/tech_docs/guide/business-saas/outsystems/outsystems-learning-material-06.html)
「もし〜なら」という条件によって処理を変える方法と、同じ処理を繰り返す方法を学びます。If文やFor Eachを使った処理フローの作り方を、視覚的なフローチャートで理解します。

### [7. 画面をつなげる - ナビゲーションとパラメータ](https://fcircle-biz.github.io/tech_docs/guide/business-saas/outsystems/outsystems-learning-material-07.html)
複数の画面を作って相互に移動する方法を学びます。リンクやボタンによる画面遷移、データの受け渡し（パラメータ）、メニューの作成方法を実践的に解説します。

### [8. データを検証する - バリデーションとエラー処理](https://fcircle-biz.github.io/tech_docs/guide/business-saas/outsystems/outsystems-learning-material-08.html)
ユーザーの入力データが正しいかチェックする方法を学びます。必須項目、文字数制限、形式チェックなどのバリデーション（検証）と、エラーメッセージの表示方法を解説します。

### [9. データの関係を理解する - リレーションシップ](https://fcircle-biz.github.io/tech_docs/guide/business-saas/outsystems/outsystems-learning-material-09.html)
複数のエンティティ間の関係（1対多、多対多）について学びます。例えば「顧客と注文」「商品とカテゴリ」のような関連付けの方法を、実例を通して理解します。

### [10. 見た目を整える - CSSとテーマ](https://fcircle-biz.github.io/tech_docs/guide/business-saas/outsystems/outsystems-learning-material-10.html)
アプリケーションのデザインをカスタマイズする方法を学びます。テーマの適用、色やフォントの変更、レスポンシブデザイン（スマホ対応）の基本を解説します。

### [11. 外部と連携する - REST APIとIntegration](https://fcircle-biz.github.io/tech_docs/guide/business-saas/outsystems/outsystems-learning-material-11.html)
他のシステムやサービスとデータをやり取りする方法を学びます。REST API（外部サービスとの通信方法）の基本概念と、OutSystemsでの実装方法を分かりやすく解説します。

### [12. セキュリティを確保する - ユーザー管理とアクセス制御](https://fcircle-biz.github.io/tech_docs/guide/business-saas/outsystems/outsystems-learning-material-12.html)
アプリケーションを安全に保つ方法を学びます。ユーザーのログイン機能、ロール（役割）による権限管理、データのアクセス制御について解説します。

### [13. アプリを公開する - デプロイメントと環境管理](https://fcircle-biz.github.io/tech_docs/guide/business-saas/outsystems/outsystems-learning-material-13.html)
作成したアプリケーションを実際に使える状態にする方法を学びます。開発環境から本番環境への移行（デプロイメント）、バージョン管理、LifeTimeの使い方を解説します。

### [14. パフォーマンスを改善する - 最適化とトラブルシューティング](https://fcircle-biz.github.io/tech_docs/guide/business-saas/outsystems/outsystems-learning-material-14.html)
アプリケーションを速く、効率的に動かす方法を学びます。よくある問題の解決方法、パフォーマンスの測定と改善、デバッグ（問題の発見と修正）の手法を解説します。

## 学習の進め方

1. **まず触ってみましょう** - 第1章で環境を整えて、実際にOutSystemsを動かしてみます。見た目で理解できることが多いので、怖がらずに触ってください。

2. **サンプルアプリを作りながら学びましょう** - 各章では小さなサンプルアプリを作ります。手順通りに進めれば必ず動くものができます。

3. **分からない用語は都度確認** - 専門用語は初出時に必ず説明していますが、忘れたらいつでも戻って確認してください。

4. **エラーを恐れない** - エラーが出ても大丈夫です。Service Studioは親切にエラー箇所を教えてくれます。

5. **コミュニティを活用** - OutSystemsには活発なコミュニティがあります。分からないことは質問してみましょう。

## 推奨所要時間

| 章 | 内容 | 目安時間 |
|----------|------|----------|
| 第1章 | OutSystemsの世界へようこそ - ローコード開発入門 | 1時間 |
| 第2章 | 画面を作ろう - スクリーンとウィジェット | 45分 |
| 第3章 | データを管理する - エンティティとアトリビュート | 1時間 |
| 第4章 | データを表示する - アグリゲートとリスト | 45分 |
| 第5章 | ユーザーの入力を受け取る - フォームとアクション | 1時間 |
| 第6章 | 処理の流れを制御する - 条件分岐とループ | 1時間 |
| 第7章 | 画面をつなげる - ナビゲーションとパラメータ | 45分 |
| 第8章 | データを検証する - バリデーションとエラー処理 | 1時間 |
| 第9章 | データの関係を理解する - リレーションシップ | 1.5時間 |
| 第10章 | 見た目を整える - CSSとテーマ | 45分 |
| 第11章 | 外部と連携する - REST APIとIntegration | 1.5時間 |
| 第12章 | セキュリティを確保する - ユーザー管理とアクセス制御 | 1.5時間 |
| 第13章 | アプリを公開する - デプロイメントと環境管理 | 1時間 |
| 第14章 | パフォーマンスを改善する - 最適化とトラブルシューティング | 1.5時間 |
| **合計** | | **約15時間** |

## 関連リソース

### チートシート
- [OutSystemsビギナー向けチートシート](https://fcircle-biz.github.io/tech_docs/cheatsheet/business-saas/outsystems-cheatsheet.html)

### 関連ガイドライン
- [Excel VBA入門](https://fcircle-biz.github.io/tech_docs/guide/business-saas/vba/) - Excelでの業務自動化
- [Power Platform入門](https://fcircle-biz.github.io/tech_docs/guide/business-saas/power-platform/) - Microsoftのローコードプラットフォーム

## 学習目標

このガイドを完了すると、以下のスキルを身につけることができます：

- **ローコード開発の理解** - コードを書かずにアプリケーションを開発する方法を理解できる
- **OutSystemsの基本操作** - Service Studioを使った開発の流れをマスターできる
- **データベース設計** - エンティティとリレーションシップを使ったデータ管理ができる
- **画面設計とUX** - 使いやすい画面レイアウトとナビゲーションを設計できる
- **ビジネスロジックの実装** - 条件分岐やループを使った処理フローを作成できる
- **外部連携** - 他システムとのデータ連携を実装できる
- **セキュリティ実装** - ユーザー管理とアクセス制御を設定できる
- **実用的なアプリ開発** - 簡単な業務アプリケーションを独力で開発できる

## 次のステップ

このガイドライン完了後は、以下の学習に進むことをお勧めします：

- **OutSystems認定試験** - Associate Developer認定を目指して専門知識を深める
- **モバイルアプリ開発** - OutSystemsでのモバイルアプリ開発手法を学ぶ
- **アーキテクチャ設計** - 大規模なアプリケーション設計の手法を学ぶ
- **他のローコードツール** - Power PlatformやMendixなど他のプラットフォームも体験

## よくある質問

### Q: プログラミング経験がなくても本当に大丈夫ですか？
A: はい、大丈夫です。OutSystemsは視覚的な操作が中心で、プログラムのコードを書く必要はほとんどありません。PowerPointでスライドを作るような感覚でアプリケーションが作れます。

### Q: OutSystemsは無料で使えますか？
A: Personal Environmentという個人用の無料環境が提供されています。学習や個人的な開発には十分な機能が使えます。

### Q: どんなアプリケーションが作れますか？
A: 業務システム、Webサイト、モバイルアプリなど幅広いアプリケーションが作れます。在庫管理、顧客管理、承認ワークフローなど、企業で使われる様々なシステムが開発可能です。

### Q: 学習にどのくらい時間がかかりますか？
A: 基本的な操作は1〜2週間で習得できます。実用的なアプリを作れるようになるまでは、このガイドの全14章を2〜3ヶ月かけて学習することをお勧めします。

### Q: エラーが出たらどうすればいいですか？
A: Service Studioは親切にエラーの内容と場所を表示してくれます。エラーメッセージをよく読んで、該当箇所を確認してください。それでも解決しない場合は、OutSystemsのコミュニティフォーラムで質問してみましょう。

## カラーテーマ設定

このガイドラインでは、ビジネスアプリケーション開発にふさわしい落ち着いた青系（slate）のカラーテーマを使用します：

```javascript
primary: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',  // メインカラー
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
}
```

アイコン: `fas fa-cube` または `fas fa-puzzle-piece`