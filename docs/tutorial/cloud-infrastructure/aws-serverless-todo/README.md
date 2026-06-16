# AWS サーバーレス Todoアプリ 完全入門チュートリアル

プログラミング未経験の方でも安心して学べる、AWSサーバーレスアーキテクチャを使ったTodoアプリ開発の完全入門チュートリアルです。フロントエンドにAWS Amplify（Next.js）、バックエンドにAPI Gateway + Lambda、データベースにDynamoDBを使用し、クラウド上で動作するモダンなWebアプリケーションを一から構築していきます。

## このチュートリアルについて

### 何を作るの？

シンプルな「Todoリスト」アプリケーションを作ります。しかも、自分のパソコンだけでなく、**インターネット上で公開して誰でもアクセスできる**本格的なWebアプリです。

```
+-----------------------------------------------------+
|  Todo リスト                                         |
+-----------------------------------------------------+
|  +-----------------------------------+ [追加]       |
|  | 新しいタスクを入力...              |              |
|  +-----------------------------------+              |
|                                                      |
|  [すべて] [未完了] [完了済み]                         |
|                                                      |
|  [ ] 牛乳を買う                        [編集][削除] |
|  [x] レポートを提出（取り消し線）       [編集][削除] |
|  [ ] 部屋を掃除する                    [編集][削除] |
|                                                      |
+-----------------------------------------------------+
```

### 完成するとできること

1. **タスクを追加できる** - 「牛乳を買う」などのやることを登録
2. **タスク一覧を見られる** - 登録したやることを一覧で確認
3. **タスクを編集できる** - 内容を後から変更
4. **タスクを削除できる** - 不要になったものを消去
5. **完了/未完了を切り替えられる** - 終わったらチェックを付ける
6. **フィルターで絞り込める** - 未完了だけ、完了だけを表示
7. **インターネットに公開できる** - URLを共有すれば誰でもアクセス可能

### サーバーレスとは？

「サーバーレス」とは、**サーバーの管理をAWSに任せて、開発者はコードを書くことに集中できる**仕組みです。

**従来のサーバー運用の場合:**
- サーバーを用意する必要がある
- 24時間動かし続けるためのメンテナンスが必要
- アクセスが増えたらサーバーを増やす必要がある
- 使っていない時間もサーバー代がかかる

**サーバーレスの場合:**
- サーバーの用意・管理が不要
- AWSが自動的にスケール（拡大・縮小）してくれる
- 使った分だけの料金（アクセスがなければほぼ無料）
- コードを書くことに集中できる

## なぜこの技術を使うの？（AWSサービス解説）

このチュートリアルでは、4つのAWSサービスを組み合わせて使います。それぞれの役割を、お店に例えて説明します。

### 全体像

```
+----------------+     +------------------+     +---------------+     +---------------+
|   ブラウザ     | --> |   AWS Amplify    | --> | API Gateway   | --> |    Lambda     |
| （お客様）     |     | （店頭・看板）   |     | （受付窓口）  |     | （バックヤード）|
+----------------+     +------------------+     +---------------+     +---------------+
                                                                             |
                                                                             v
                                                                      +---------------+
                                                                      |   DynamoDB    |
                                                                      | （倉庫・在庫）|
                                                                      +---------------+
```

### 各サービスの役割

| AWSサービス | 役割 | たとえると... | 具体的に何をする？ |
|------------|------|--------------|------------------|
| **AWS Amplify** | 画面の公開・ホスティング | お店の「店頭と看板」 | Next.jsで作った画面をインターネットに公開する |
| **API Gateway** | リクエストの受付・振り分け | お店の「受付窓口」 | 「タスクを追加して」などのリクエストを受け取る |
| **Lambda** | データの処理・ロジック実行 | お店の「バックヤード」 | タスクの追加・編集・削除などの処理を実行 |
| **DynamoDB** | データの保存 | お店の「倉庫」 | タスクのデータを保存・管理する |

### なぜAWSを使うの？

| メリット | 説明 |
|---------|------|
| **無料枠がある** | 学習用途なら無料で使える範囲が十分にある |
| **スケーラブル** | ユーザーが増えても自動で対応 |
| **実務で使われる** | 多くの企業で採用されている実践的なスキル |
| **運用が楽** | サーバー管理不要で、コードに集中できる |

## 学習目標

このチュートリアルを終えると、以下のことができるようになります。

### 理解できること

- **サーバーレスアーキテクチャの仕組み** - なぜサーバーレスが便利なのか
- **AWSの基本サービス** - Amplify、API Gateway、Lambda、DynamoDBの役割
- **フロントエンドとバックエンドの連携** - 画面からデータを操作する仕組み
- **NoSQLデータベース（DynamoDB）** - 従来のデータベースとの違い
- **APIの設計と実装** - RESTful APIの基本

### できるようになること

- AWSアカウントの作成と初期設定
- Next.jsでモダンなフロントエンド開発
- AWS Amplifyでの自動デプロイ設定
- API GatewayでのREST API構築
- Lambda関数（Python）の作成
- DynamoDBでのデータ設計と操作
- インターネットへのアプリ公開

## 対象読者

### このチュートリアルに向いている人

- プログラミングを始めたばかりの方
- AWSやクラウドに興味がある方
- サーバーレスアーキテクチャを学びたい方
- 実際にインターネットにアプリを公開してみたい方
- 手を動かしながら学びたい方

### 前提知識（なくても大丈夫！）

以下の知識があると理解しやすいですが、なくてもチュートリアル内で説明します。

- パソコンの基本操作（ファイル作成、フォルダ移動など）
- キーボード入力（英数字、記号の入力）
- ブラウザの使い方（Chrome、Edgeなど）
- HTMLとCSSの基本（なくても進められます）

## 前提条件・環境要件

### 必要なもの

| 項目 | 要件 | 説明 |
|------|------|------|
| **パソコン** | Windows 10/11、macOS、Linux | どのOSでも大丈夫です |
| **ブラウザ** | Chrome、Edge、Safari等 | 最新版を推奨 |
| **メールアドレス** | 有効なメールアドレス | AWSアカウント作成に必要 |
| **クレジットカード** | 有効なカード | AWSアカウント作成に必要（無料枠内なら課金なし） |
| **インターネット** | 常時接続 | クラウドサービスを使うため必須 |

### AWSの無料枠について（重要）

AWSには「無料利用枠」があり、このチュートリアルの内容は**基本的に無料枠内で完了**できます。

| サービス | 無料枠の内容（12ヶ月間） |
|---------|------------------------|
| **Lambda** | 毎月100万リクエスト無料 |
| **API Gateway** | 毎月100万API呼び出し無料 |
| **DynamoDB** | 25GBのストレージ、読み書き無料枠あり |
| **Amplify** | ビルド・ホスティングの無料枠あり |

**注意:** チュートリアル完了後は、不要なリソースを削除することをおすすめします（Step 10で説明）。

### インストールするソフトウェア

チュートリアルの中で以下のソフトウェアをインストールします。事前にインストールする必要はありません。

| ソフトウェア | バージョン | 用途 |
|-------------|-----------|------|
| **Visual Studio Code** | 最新版 | コードを書くためのエディタ |
| **Node.js** | 18.17以上（LTS版） | Next.jsを動かすために必要 |
| **AWS CLI** | 最新版 | AWSをコマンドで操作するため |
| **Git** | 最新版 | コードの管理、Amplifyとの連携 |

## 推奨所要時間

| ステップ | 内容 | 目安時間 |
|----------|------|----------|
| Step 1 | AWSアカウント作成と初期設定 | 1.5時間 |
| Step 2 | 開発環境の準備 | 1.5時間 |
| Step 3 | DynamoDBテーブルの作成 | 1時間 |
| Step 4 | Lambda関数の作成（基礎） | 2時間 |
| Step 5 | API Gatewayの設定 | 1.5時間 |
| Step 6 | Lambda関数でCRUD操作を実装 | 2.5時間 |
| Step 7 | Next.jsフロントエンドの作成 | 2時間 |
| Step 8 | フロントエンドとAPIの連携 | 2時間 |
| Step 9 | AWS Amplifyでデプロイ | 1.5時間 |
| Step 10 | 仕上げとクリーンアップ | 1.5時間 |
| **合計** | | **約17時間** |

## チュートリアル構成

全10ステップで、段階的にアプリケーションを完成させます。

---

### [Step 1: AWSアカウント作成と初期設定](https://fcircle-biz.github.io/tech_docs/tutorial/cloud-infrastructure/aws-serverless-todo/aws-serverless-tutorial-01.html)

AWSを使い始めるための準備をします。アカウントの作成から、安全に使うための設定まで行います。

**学ぶこと:**
- AWSとは何か、なぜ使うのか
- AWSアカウントの作成手順
- ルートユーザーとIAMユーザーの違い
- 多要素認証（MFA）の設定
- 請求アラートの設定（予想外の課金を防ぐ）
- IAMユーザーの作成（日常的に使うアカウント）

**このステップを終えると:**
- AWSにログインできるようになります
- 安全にAWSを使う準備が整います
- 予想外の課金を防ぐ設定ができます

**AWSの基礎知識:**

```
+------------------------------------------+
|            AWSアカウント                  |
+------------------------------------------+
|                                          |
|  +----------------+  +----------------+  |
|  | ルートユーザー  |  |  IAMユーザー   |  |
|  | （管理者）     |  | （日常利用）   |  |
|  +----------------+  +----------------+  |
|                                          |
|  +--------------------------------------+|
|  |         各種AWSサービス              ||
|  | (Lambda, DynamoDB, API Gateway等)   ||
|  +--------------------------------------+|
|                                          |
+------------------------------------------+
```

---

### [Step 2: 開発環境の準備](https://fcircle-biz.github.io/tech_docs/tutorial/cloud-infrastructure/aws-serverless-todo/aws-serverless-tutorial-02.html)

ローカル環境に必要なソフトウェアをインストールし、開発を始める準備をします。

**学ぶこと:**
- Visual Studio Codeのインストールと設定
- Node.jsのインストール
- AWS CLIのインストールと設定
- Gitのインストール
- 各ツールの動作確認

**このステップを終えると:**
- 開発に必要なすべてのソフトウェアが揃います
- AWS CLIからAWSを操作できるようになります
- コマンドラインの基本操作ができるようになります

**インストールするソフトウェア:**

| ソフトウェア | 役割 | 確認コマンド |
|-------------|------|-------------|
| Visual Studio Code | コードエディタ | - |
| Node.js | JavaScript実行環境 | `node --version` |
| AWS CLI | AWS操作ツール | `aws --version` |
| Git | バージョン管理 | `git --version` |

---

### [Step 3: DynamoDBテーブルの作成](https://fcircle-biz.github.io/tech_docs/tutorial/cloud-infrastructure/aws-serverless-todo/aws-serverless-tutorial-03.html)

データを保存するためのDynamoDBテーブルを作成します。NoSQLデータベースの基本を学びます。

**学ぶこと:**
- DynamoDBとは何か（NoSQLデータベース）
- RDBMSとの違い
- パーティションキーとソートキーの概念
- AWSマネジメントコンソールでのテーブル作成
- テーブルの設計ベストプラクティス

**このステップを終えると:**
- DynamoDBテーブルを作成できるようになります
- NoSQLデータベースの基本概念がわかります

**作成するテーブル:**

| テーブル名 | パーティションキー | 説明 |
|-----------|------------------|------|
| todos | id（文字列） | タスクを保存するテーブル |

**テーブル設計:**

| 属性名 | データ型 | 説明 |
|--------|---------|------|
| id | String | タスクの一意識別子（UUID） |
| title | String | タスクのタイトル |
| completed | Boolean | 完了フラグ |
| createdAt | String | 作成日時（ISO 8601形式） |
| updatedAt | String | 更新日時（ISO 8601形式） |

**DynamoDBの特徴:**

```
+------------------------------------------+
|        DynamoDB（NoSQLデータベース）        |
+------------------------------------------+
| - テーブルの形式が柔軟（スキーマレス）       |
| - 自動的にスケール（性能調整不要）          |
| - フルマネージド（運用不要）               |
| - 従量課金（使った分だけ）                 |
+------------------------------------------+
```

---

### [Step 4: Lambda関数の作成（基礎）](https://fcircle-biz.github.io/tech_docs/tutorial/cloud-infrastructure/aws-serverless-todo/aws-serverless-tutorial-04.html)

AWSの中核サービスであるLambda関数を作成します。まずは簡単な関数から始めます。

**学ぶこと:**
- AWS Lambdaとは何か
- Lambda関数の作成方法
- Pythonでの関数の書き方
- テスト実行の方法
- CloudWatch Logsでのログ確認
- IAMロールと権限の基本

**このステップを終えると:**
- Lambda関数を作成・実行できるようになります
- Pythonで簡単な処理を書けるようになります
- ログでデバッグできるようになります

**Lambda関数の仕組み:**

```
+------------------+
|   イベント発生    |  （API呼び出し、スケジュール等）
+--------+---------+
         |
         v
+--------+---------+
|  Lambda関数実行   |  （必要な時だけ起動）
|  - コード実行     |
|  - DynamoDB操作   |
+--------+---------+
         |
         v
+--------+---------+
|    レスポンス     |  （結果を返す）
+------------------+
```

**最初に作る関数:**

```python
def lambda_handler(event, context):
    return {
        'statusCode': 200,
        'body': 'Hello from Lambda!'
    }
```

---

### [Step 5: API Gatewayの設定](https://fcircle-biz.github.io/tech_docs/tutorial/cloud-infrastructure/aws-serverless-todo/aws-serverless-tutorial-05.html)

Lambda関数をインターネットから呼び出せるように、API Gatewayを設定します。

**学ぶこと:**
- API Gatewayとは何か
- REST APIの作成
- HTTPメソッド（GET, POST, PUT, DELETE）
- リソースとメソッドの設定
- Lambda関数との統合
- CORSの設定
- APIのデプロイとステージ

**このステップを終えると:**
- Web APIを作成できるようになります
- ブラウザからAPIを呼び出せるようになります

**API設計:**

| メソッド | パス | 説明 | Lambda関数 |
|----------|------|------|-----------|
| GET | /todos | タスク一覧取得 | getTodos |
| POST | /todos | タスク作成 | createTodo |
| PUT | /todos/{id} | タスク更新 | updateTodo |
| DELETE | /todos/{id} | タスク削除 | deleteTodo |

**API Gatewayの役割:**

```
+------------------+     +------------------+     +------------------+
|    ブラウザ      | --> |   API Gateway    | --> |     Lambda       |
| (HTTPリクエスト) |     | (ルーティング)    |     |  (処理実行)      |
+------------------+     +------------------+     +------------------+
```

---

### [Step 6: Lambda関数でCRUD操作を実装](https://fcircle-biz.github.io/tech_docs/tutorial/cloud-infrastructure/aws-serverless-todo/aws-serverless-tutorial-06.html)

DynamoDBと連携して、タスクの作成・読取・更新・削除（CRUD）を行うLambda関数を実装します。

**学ぶこと:**
- boto3（AWS SDK for Python）の使い方
- DynamoDBへのデータ追加（put_item）
- DynamoDBからのデータ取得（scan, get_item）
- データの更新（update_item）
- データの削除（delete_item）
- UUIDの生成
- エラーハンドリング

**このステップを終えると:**
- DynamoDBにデータを保存・取得できるようになります
- 完全なバックエンドAPIが完成します

**実装する関数:**

```python
# タスク一覧取得
def get_todos():
    response = table.scan()
    return response['Items']

# タスク作成
def create_todo(title):
    todo = {
        'id': str(uuid.uuid4()),
        'title': title,
        'completed': False,
        'createdAt': datetime.now().isoformat()
    }
    table.put_item(Item=todo)
    return todo

# タスク更新
def update_todo(id, updates):
    # 更新処理
    pass

# タスク削除
def delete_todo(id):
    table.delete_item(Key={'id': id})
```

**バリデーションルール:**

| 項目 | ルール |
|------|--------|
| タイトル | 必須、1〜200文字 |

---

### [Step 7: Next.jsフロントエンドの作成](https://fcircle-biz.github.io/tech_docs/tutorial/cloud-infrastructure/aws-serverless-todo/aws-serverless-tutorial-07.html)

ユーザーが操作する画面（UI）をNext.jsで作成します。

**学ぶこと:**
- Next.jsプロジェクトの作成
- App Routerの基本
- Reactコンポーネントの書き方
- Tailwind CSSでのスタイリング
- 状態管理（useState）
- 開発サーバーの起動

**このステップを終えると:**
- Next.jsでWebページを作れるようになります
- モダンなUIを構築できるようになります

**プロジェクト構成:**

```
frontend/
├── app/
│   ├── layout.tsx        # 共通レイアウト
│   ├── page.tsx          # トップページ
│   └── globals.css       # グローバルスタイル
├── components/
│   ├── TodoList.tsx      # タスク一覧
│   ├── TodoItem.tsx      # タスク1件
│   ├── TodoForm.tsx      # 入力フォーム
│   └── FilterButtons.tsx # フィルターボタン
├── package.json
└── tailwind.config.js
```

---

### [Step 8: フロントエンドとAPIの連携](https://fcircle-biz.github.io/tech_docs/tutorial/cloud-infrastructure/aws-serverless-todo/aws-serverless-tutorial-08.html)

フロントエンドからAPI Gatewayを呼び出し、データの取得・操作を行います。

**学ぶこと:**
- fetch APIでのHTTPリクエスト
- 環境変数の設定（APIエンドポイント）
- useEffectでのデータ取得
- 非同期処理（async/await）
- エラーハンドリング
- ローディング表示

**このステップを終えると:**
- フロントエンドとバックエンドが連携します
- ローカル環境で完全に動作するTodoアプリが完成します

**実装する機能:**

```typescript
// タスク一覧取得
const fetchTodos = async () => {
  const response = await fetch(`${API_URL}/todos`);
  const data = await response.json();
  setTodos(data);
};

// タスク追加
const addTodo = async (title: string) => {
  await fetch(`${API_URL}/todos`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title })
  });
  fetchTodos();
};
```

---

### [Step 9: AWS Amplifyでデプロイ](https://fcircle-biz.github.io/tech_docs/tutorial/cloud-infrastructure/aws-serverless-todo/aws-serverless-tutorial-09.html)

作成したNext.jsアプリをAWS Amplifyを使ってインターネットに公開します。

**学ぶこと:**
- GitHubリポジトリの作成
- AWS Amplify Hostingの設定
- 環境変数の設定
- 自動デプロイ（CI/CD）の仕組み
- カスタムドメインの設定（オプション）

**このステップを終えると:**
- アプリがインターネットに公開されます
- GitHubにプッシュすると自動でデプロイされます

**Amplifyデプロイの流れ:**

```
+------------------+     +------------------+     +------------------+
|    GitHub        | --> |   Amplify        | --> |   公開URL        |
| (コードをプッシュ) |     | (自動ビルド)      |     | (誰でもアクセス)  |
+------------------+     +------------------+     +------------------+
```

---

### [Step 10: 仕上げとクリーンアップ](https://fcircle-biz.github.io/tech_docs/tutorial/cloud-infrastructure/aws-serverless-todo/aws-serverless-tutorial-10.html)

アプリを完成させ、不要なリソースを削除して課金を防ぎます。

**学ぶこと:**
- エラー表示の改善
- ローディング表示の追加
- UIの最終調整
- AWSリソースの削除方法
- コスト管理のベストプラクティス
- 次のステップへの案内

**このステップを終えると:**
- 完成したTodoアプリがインターネットで公開されます
- AWSの課金を防ぐ方法がわかります
- 次に学ぶべきことがわかります

**削除するリソース（学習終了後）:**

| リソース | 削除方法 |
|---------|---------|
| Amplifyアプリ | Amplifyコンソールから削除 |
| API Gateway | API Gatewayコンソールから削除 |
| Lambda関数 | Lambdaコンソールから削除 |
| DynamoDBテーブル | DynamoDBコンソールから削除 |
| IAMロール | IAMコンソールから削除 |
| CloudWatchログ | CloudWatchコンソールから削除 |

---

## 学習コンテンツ

### [1. AWSアカウント作成と初期設定](https://fcircle-biz.github.io/tech_docs/tutorial/cloud-infrastructure/aws-serverless-todo/aws-serverless-tutorial-01.html)
AWSを安全に使い始めるための準備をします。
- 実装内容: AWSアカウント作成、IAMユーザー設定、MFA有効化

### [2. 開発環境の準備](https://fcircle-biz.github.io/tech_docs/tutorial/cloud-infrastructure/aws-serverless-todo/aws-serverless-tutorial-02.html)
ローカル環境に必要なツールをインストールします。
- 実装内容: VS Code、Node.js、AWS CLI、Gitのセットアップ

### [3. DynamoDBテーブルの作成](https://fcircle-biz.github.io/tech_docs/tutorial/cloud-infrastructure/aws-serverless-todo/aws-serverless-tutorial-03.html)
データを保存するNoSQLデータベースを作成します。
- 実装内容: todosテーブルの作成、データモデル設計

### [4. Lambda関数の作成（基礎）](https://fcircle-biz.github.io/tech_docs/tutorial/cloud-infrastructure/aws-serverless-todo/aws-serverless-tutorial-04.html)
サーバーレス関数の基礎を学びます。
- 実装内容: Hello World関数、テスト実行、ログ確認

### [5. API Gatewayの設定](https://fcircle-biz.github.io/tech_docs/tutorial/cloud-infrastructure/aws-serverless-todo/aws-serverless-tutorial-05.html)
Lambda関数をWeb APIとして公開します。
- 実装内容: REST API作成、CORS設定、デプロイ

### [6. Lambda関数でCRUD操作を実装](https://fcircle-biz.github.io/tech_docs/tutorial/cloud-infrastructure/aws-serverless-todo/aws-serverless-tutorial-06.html)
DynamoDBと連携したデータ操作を実装します。
- 実装内容: タスクの作成・取得・更新・削除

### [7. Next.jsフロントエンドの作成](https://fcircle-biz.github.io/tech_docs/tutorial/cloud-infrastructure/aws-serverless-todo/aws-serverless-tutorial-07.html)
モダンなUIをReact/Next.jsで構築します。
- 実装内容: コンポーネント作成、Tailwind CSSスタイリング

### [8. フロントエンドとAPIの連携](https://fcircle-biz.github.io/tech_docs/tutorial/cloud-infrastructure/aws-serverless-todo/aws-serverless-tutorial-08.html)
画面からAWSのAPIを呼び出します。
- 実装内容: fetch API、状態管理、エラーハンドリング

### [9. AWS Amplifyでデプロイ](https://fcircle-biz.github.io/tech_docs/tutorial/cloud-infrastructure/aws-serverless-todo/aws-serverless-tutorial-09.html)
アプリをインターネットに公開します。
- 実装内容: GitHub連携、Amplify Hosting、自動デプロイ

### [10. 仕上げとクリーンアップ](https://fcircle-biz.github.io/tech_docs/tutorial/cloud-infrastructure/aws-serverless-todo/aws-serverless-tutorial-10.html)
完成と後片付けを行います。
- 実装内容: UI改善、リソース削除、コスト管理

---

## プロジェクト全体構成

最終的な構成は以下のようになります。

```
todo-app/
├── frontend/                    # フロントエンド（Next.js）
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── TodoList.tsx
│   │   ├── TodoItem.tsx
│   │   ├── TodoForm.tsx
│   │   └── FilterButtons.tsx
│   ├── .env.local              # 環境変数（APIエンドポイント）
│   ├── package.json
│   └── tailwind.config.js
│
└── lambda/                      # バックエンド（Lambda関数）
    ├── get_todos.py            # タスク一覧取得
    ├── create_todo.py          # タスク作成
    ├── update_todo.py          # タスク更新
    └── delete_todo.py          # タスク削除
```

**AWS上のリソース:**

```
AWS
├── DynamoDB
│   └── todos テーブル
├── Lambda
│   ├── getTodos 関数
│   ├── createTodo 関数
│   ├── updateTodo 関数
│   └── deleteTodo 関数
├── API Gateway
│   └── TodoAPI (REST API)
└── Amplify
    └── todo-app (ホスティング)
```

## 学習の進め方

### おすすめの学習方法

1. **順番に進める**
   - Step 1から順番に進めてください
   - 各ステップは前のステップの知識が必要です

2. **実際に手を動かす**
   - AWSコンソールで実際に操作してみましょう
   - エラーが出ても、それも学びです

3. **動作確認を必ず行う**
   - 各ステップの最後に動作確認があります
   - 動かない場合は、トラブルシューティングを参照

4. **スクリーンショットを撮る**
   - 設定画面のスクリーンショットを残しておくと
   - 後で確認するときに便利です

### 1日の学習目安

| 1日の時間 | 完了までの日数 |
|-----------|---------------|
| 1時間 | 約2〜3週間 |
| 2時間 | 約1〜2週間 |
| 4時間 | 約4〜5日 |

**総所要時間:** 約17時間（個人差あり）

## トラブルシューティング

### よくある問題と解決方法

#### AWSにログインできない

**原因:** パスワードが間違っている、またはMFAコードが間違っている

**解決方法:**
1. パスワードを再確認する
2. MFAデバイスの時刻が正確か確認する
3. 「パスワードを忘れた場合」からリセット

#### Lambda関数でエラーが出る

**原因:** コードのエラー、または権限不足

**解決方法:**
1. CloudWatch Logsでエラーメッセージを確認
2. IAMロールにDynamoDBへのアクセス権限があるか確認
3. コードの文法エラーをチェック

#### API Gatewayでエラーが出る

**原因:** CORS設定が不完全、またはLambdaとの統合設定が間違っている

**解決方法:**
1. CORSが有効になっているか確認
2. Lambda統合が正しく設定されているか確認
3. APIをデプロイし直す

#### フロントエンドからAPIを呼び出せない

**原因:** CORSエラー、またはAPIエンドポイントが間違っている

**解決方法:**
1. ブラウザの開発者ツールでエラーを確認
2. 環境変数のAPIエンドポイントを確認
3. API GatewayでCORSを再設定

#### 予想外の課金が発生した

**原因:** 無料枠を超えた使用、またはリソースの削除忘れ

**解決方法:**
1. AWS Cost Explorerで課金内容を確認
2. 不要なリソースを削除
3. 請求アラートを設定（Step 1で説明）

## 参考リソース

### AWS公式ドキュメント

- [AWS Lambda 開発者ガイド](https://docs.aws.amazon.com/ja_jp/lambda/)
- [Amazon DynamoDB 開発者ガイド](https://docs.aws.amazon.com/ja_jp/dynamodb/)
- [Amazon API Gateway 開発者ガイド](https://docs.aws.amazon.com/ja_jp/apigateway/)
- [AWS Amplify ドキュメント](https://docs.amplify.aws/)

### Next.js関連

- [Next.js公式ドキュメント](https://nextjs.org/docs)
- [React公式ドキュメント](https://react.dev/)
- [Tailwind CSS公式ドキュメント](https://tailwindcss.com/docs)

### 初心者向けリソース

- [AWS 初心者向けハンズオン](https://aws.amazon.com/jp/getting-started/hands-on/)
- [AWS Skill Builder](https://explore.skillbuilder.aws/) - 無料のAWS学習コンテンツ

### 困ったときは

- エラーメッセージをGoogle検索してみる
- AWS公式ドキュメントを確認する
- Stack Overflowで類似の問題を探す

## このチュートリアルで学べないこと

初心者向けのため、以下の内容は含まれていません。将来的に学ぶことをおすすめします。

- **ユーザー認証** - Amazon Cognitoを使ったログイン機能
- **Infrastructure as Code** - AWS SAM / CloudFormation / Terraform
- **CI/CDパイプライン** - AWS CodePipeline / GitHub Actions
- **モニタリング** - CloudWatch詳細設定、X-Ray
- **セキュリティ詳細** - WAF、VPC、セキュリティグループ

## 次のステップ

このチュートリアルを完了したら、以下のことに挑戦してみましょう。

### すぐにできること

1. **機能を追加してみる**
   - 期限（締め切り日）を追加
   - カテゴリ分け機能を追加
   - 検索機能を追加

2. **デザインを変更してみる**
   - 色を変えてみる
   - ダークモードを追加
   - アニメーションを追加

### 次に学ぶべきこと

1. **ユーザー認証** - Amazon Cognitoを使ったログイン機能
2. **Infrastructure as Code** - AWS SAMでインフラをコード管理
3. **テスト** - Lambda関数のユニットテスト
4. **モニタリング** - CloudWatch Alarms / X-Ray

## まとめ

このチュートリアルでは、プログラミング未経験の方でも理解できるよう、以下の内容を段階的に学びます。

| ステップ | 内容 | 学ぶこと |
|----------|------|----------|
| Step 1 | AWSアカウント作成 | AWS入門、セキュリティ設定 |
| Step 2 | 開発環境準備 | ツールのセットアップ |
| Step 3 | DynamoDB | NoSQLデータベース |
| Step 4 | Lambda基礎 | サーバーレス関数 |
| Step 5 | API Gateway | REST API作成 |
| Step 6 | CRUD実装 | データ操作 |
| Step 7 | Next.js | フロントエンド開発 |
| Step 8 | API連携 | フロント・バック連携 |
| Step 9 | Amplifyデプロイ | アプリ公開 |
| Step 10 | 仕上げ | クリーンアップ |

一歩一歩進めていけば、必ずアプリケーションを完成させ、インターネットに公開することができます。わからないことがあっても、焦らず一つずつ解決していきましょう。

AWSとサーバーレスの世界へようこそ！

---

**最初のステップ:** [Step 1: AWSアカウント作成と初期設定](https://fcircle-biz.github.io/tech_docs/tutorial/cloud-infrastructure/aws-serverless-todo/aws-serverless-tutorial-01.html)
