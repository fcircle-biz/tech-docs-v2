# ASP.NET Core MVC + Entity Framework Core 実践チュートリアル (VB.NET)

ASP.NET Core MVC と Entity Framework Core を使用した、VB.NETによるモダンなWebアプリケーション開発の実践的なチュートリアルです。ASP.NET Web Forms からの移行を念頭に、MVCパターンとコードファーストによるデータベース開発を学びます。

## チュートリアル概要

### 学習目標
- ASP.NET Core MVCの基本構造（Model-View-Controller）の理解
- Entity Framework Coreを使用したコードファーストデータベース開発
- VB.NETでのRazor構文とビューの作成
- 依存性注入（DI）とサービスパターンの基礎
- CRUD操作を含む実践的なユーザー管理システムの開発
- モデルバインディングとバリデーションの実装

### 対象読者
- VB.NET ASP.NET Web Forms の基礎を理解している方
- MVCパターンを学びたい方
- Entity Framework Core を使用したデータベース開発に興味がある方
- ASP.NET Core への移行を検討している方

### 特徴
- **段階的学習**: Web Forms の知識を活かしながら MVC を習得
- **実践重視**: 実際に動作するユーザー管理システムを構築
- **VB.NET特化**: C#ではなくVB.NETでの実装に特化
- **最新技術**: .NET 8 対応の最新のASP.NET Core を使用
- **日本語環境対応**: 日本語での開発に必要な設定を詳細に解説

## 前提条件・環境要件

### 必要なソフトウェア
- **Visual Studio 2022**: Community Edition 以上（最新版推奨）
- **.NET 8 SDK**: 最新版
- **SQL Server**: SQL Server 2019 Express 以上（LocalDB可）
- **ブラウザ**: Chrome、Edge、Firefox など最新版

### 推奨する基礎知識
- VB.NET の基本文法（クラス、プロパティ、メソッド）
- ASP.NET Web Forms の基本（ページライフサイクル、イベント処理）
- SQL の基本（SELECT、INSERT、UPDATE、DELETE）
- HTML と CSS の基礎知識

## チュートリアル構成

### Step 1: [環境構築とプロジェクト作成](https://fcircle-biz.github.io/tech_docs/tutorial/dotnet-ecosystem/aspnet-core-mvc-vb/step1-environment-setup.html)
- Visual Studio 2022 での ASP.NET Core プロジェクト作成
- VB.NET プロジェクトテンプレートの選択
- プロジェクト構造の理解（Controllers、Models、Views）
- NuGet パッケージ管理と Entity Framework Core のインストール
- 初回実行と基本的な動作確認

**所要時間**: 1.5時間  
**習得内容**: プロジェクト構造、パッケージ管理、基本設定

### Step 2: [MVCアーキテクチャとルーティング](https://fcircle-biz.github.io/tech_docs/tutorial/dotnet-ecosystem/aspnet-core-mvc-vb/step2-mvc-architecture.html)
- MVC パターンの概念理解
- コントローラーの作成と基本的なアクション
- ビューの作成と Razor 構文の基礎
- ルーティングの仕組みと設定
- Web Forms との違いと移行のポイント

**所要時間**: 2時間  
**習得内容**: MVC基礎、ルーティング、Razor構文

### Step 3: [Entity Framework Core とデータベース設計](https://fcircle-biz.github.io/tech_docs/tutorial/dotnet-ecosystem/aspnet-core-mvc-vb/step3-database-design.html)
- Entity Framework Core の基本概念
- コードファーストアプローチによるモデル作成
- DbContext の作成と設定
- マイグレーションによるデータベース作成
- 初期データの投入（シード処理）

**所要時間**: 2.5時間  
**習得内容**: EF Core基礎、コードファースト、マイグレーション

### Step 4: [ユーザー登録機能の実装](https://fcircle-biz.github.io/tech_docs/tutorial/dotnet-ecosystem/aspnet-core-mvc-vb/step4-user-registration.html)
- 登録フォームの作成（Razor構文）
- モデルバインディングの仕組み
- データアノテーションによるバリデーション
- POST処理とデータベース保存
- エラーハンドリングとフィードバック表示

**所要時間**: 2.5時間  
**習得内容**: フォーム処理、バリデーション、データ保存

### Step 5: [ユーザー一覧と詳細表示](https://fcircle-biz.github.io/tech_docs/tutorial/dotnet-ecosystem/aspnet-core-mvc-vb/step5-user-list-detail.html)
- 一覧表示の実装（テーブル表示）
- ページング機能の追加
- 検索・フィルター機能
- 詳細画面へのナビゲーション
- 部分ビューの活用

**所要時間**: 2.5時間  
**習得内容**: データ表示、ページング、検索機能

### Step 6: [ユーザー編集・削除機能](https://fcircle-biz.github.io/tech_docs/tutorial/dotnet-ecosystem/aspnet-core-mvc-vb/step6-user-update-delete.html)
- 編集フォームの実装
- 既存データの読み込みと表示
- 更新処理と楽観的同時実行制御
- 削除確認画面と削除処理
- トランザクション管理

**所要時間**: 3時間  
**習得内容**: CRUD完成、同時実行制御、トランザクション

### Step 7: [セキュリティと最適化](https://fcircle-biz.github.io/tech_docs/tutorial/dotnet-ecosystem/aspnet-core-mvc-vb/step7-security-optimization.html)
- 認証・認可の基礎（Identity Framework）
- CSRF対策とAntiForgeryToken
- SQLインジェクション対策
- キャッシュとパフォーマンス最適化
- ロギングとエラー処理

**所要時間**: 2時間  
**習得内容**: セキュリティ基礎、最適化、本番環境対応

## 作成するアプリケーション概要

### アプリケーション名: UserManager Pro

#### 主な機能
1. **ユーザー登録** - 入力検証付き新規登録
2. **ユーザー一覧** - ページング・検索機能付き一覧
3. **ユーザー詳細** - 詳細情報の表示
4. **ユーザー編集** - 既存情報の更新
5. **ユーザー削除** - 確認付き削除処理
6. **ダッシュボード** - 統計情報の表示

#### データベース設計
```vb
Public Class User
    Public Property Id As Integer
    <Required>
    <StringLength(50)>
    Public Property Username As String
    
    <Required>
    <EmailAddress>
    Public Property Email As String
    
    <Required>
    <StringLength(100)>
    Public Property FullName As String
    
    <Range(0, 150)>
    Public Property Age As Integer?
    
    <StringLength(50)>
    Public Property Department As String
    
    Public Property IsActive As Boolean = True
    
    Public Property CreatedAt As DateTime = DateTime.Now
    
    Public Property UpdatedAt As DateTime = DateTime.Now
End Class
```

#### 技術スタック
- **フレームワーク**: ASP.NET Core 8.0
- **言語**: Visual Basic .NET
- **ORM**: Entity Framework Core 8.0
- **データベース**: SQL Server Express / LocalDB
- **フロントエンド**: Razor Views + Bootstrap 5
- **開発環境**: Visual Studio 2022

#### プロジェクト構成
```
UserManagerPro/
│  appsettings.json
│  appsettings.Development.json
│  Program.vb
│  UserManagerPro.vbproj
│
├─Controllers/
│      HomeController.vb
│      UsersController.vb
│
├─Models/
│      User.vb
│      ErrorViewModel.vb
│      UserViewModel.vb
│
├─Views/
│  ├─Home/
│  │      Index.vbhtml
│  │      Privacy.vbhtml
│  │
│  ├─Users/
│  │      Index.vbhtml
│  │      Create.vbhtml
│  │      Details.vbhtml
│  │      Edit.vbhtml
│  │      Delete.vbhtml
│  │
│  └─Shared/
│          _Layout.vbhtml
│          _ValidationScriptsPartial.vbhtml
│
├─Data/
│      ApplicationDbContext.vb
│      DbInitializer.vb
│
├─wwwroot/
│  ├─css/
│  ├─js/
│  └─lib/
│
└─Properties/
        launchSettings.json
```

## 総所要時間
**約16時間**（個人の習熟度により変動）

## 学習の特徴

### Web Forms からの移行ポイント
各章で Web Forms との違いを明確にしながら学習：
- **Step 1**: プロジェクト構造の違い（コードビハインドからMVCへ）
- **Step 2**: イベント駆動からルーティングベースへ
- **Step 3**: データセットから Entity Framework へ
- **Step 4**: ViewState からモデルバインディングへ
- **Step 5**: GridView から Razor テーブルへ
- **Step 6**: ポストバックから明示的な HTTP 動詞へ
- **Step 7**: Forms認証から Identity へ

### VB.NET 特有の実装パターン
- **プロパティ構文**: 自動実装プロパティの活用
- **LINQ構文**: VB.NET特有のLINQクエリ構文
- **非同期処理**: Async/Await パターン
- **Null許容**: Nullable型の適切な使用
- **XML リテラル**: 設定ファイルでの活用

## 参考資料とリンク

### 公式ドキュメント
- [ASP.NET Core 公式ドキュメント](https://docs.microsoft.com/ja-jp/aspnet/core/)
- [Entity Framework Core 公式ドキュメント](https://docs.microsoft.com/ja-jp/ef/core/)
- [Visual Basic 言語リファレンス](https://docs.microsoft.com/ja-jp/dotnet/visual-basic/)

### 関連技術
- [Bootstrap 5 公式ドキュメント](https://getbootstrap.jp/docs/5.0/)
- [jQuery 公式ドキュメント](https://api.jquery.com/)

## チュートリアルの進め方

1. **環境準備**: Visual Studio 2022 と SQL Server のインストール
2. **段階実装**: 各ステップを順次実装し、動作確認
3. **デバッグ活用**: ブレークポイントを使用したコードの理解
4. **機能拡張**: 基本機能を理解後、独自機能を追加
5. **パフォーマンス**: EF Core のクエリ最適化

## セキュリティに関する注意事項

- **SQLインジェクション対策**: Entity Framework によるパラメータ化クエリ
- **CSRF対策**: AntiForgeryToken の自動適用
- **XSS対策**: Razor による自動HTMLエンコーディング
- **認証・認可**: ASP.NET Core Identity の活用
- **HTTPS**: 本番環境での SSL/TLS 必須化

## Web Forms 開発者のための移行ガイド

### 概念の対応表
| Web Forms | ASP.NET Core MVC |
|-----------|------------------|
| aspx ページ | View (vbhtml) |
| コードビハインド | Controller |
| ViewState | TempData/ViewData |
| PostBack | HTTP POST |
| Page_Load | Action メソッド |
| GridView | HTMLテーブル + Razor |
| UpdatePanel | Ajax (jQuery/Fetch API) |

### よくある移行時の疑問
- **Q: ViewState はどうなった？**  
  A: MVCではステートレスが基本。必要に応じてTempDataやSessionを使用

- **Q: イベントハンドラーは？**  
  A: コントローラーのアクションメソッドが代替

- **Q: データバインディングは？**  
  A: モデルバインディングとRazor構文で実現

## トラブルシューティング

### よくある問題と解決方法
- **VB.NET テンプレートが見つからない**: Visual Studio Installer で「ASP.NET と Web 開発」ワークロードを確認
- **Entity Framework エラー**: パッケージマネージャーコンソールで `Update-Database` 実行
- **ビルドエラー**: VB.NET の言語バージョン設定を確認
- **日本語文字化け**: UTF-8 エンコーディング設定を確認

## 発展的な学習

このチュートリアル完了後の推奨学習：
- **Web API**: RESTful API の構築
- **Blazor**: SPAフレームワークへの移行
- **Azure**: クラウドへのデプロイ
- **マイクロサービス**: 分散アーキテクチャ
- **gRPC**: 高性能通信の実装

## サポート

技術的な質問や不具合報告は[Issues](https://github.com/fcircle-biz/tech_docs/issues)にて受け付けています。

---

[Step 1: 環境構築とプロジェクト作成](https://fcircle-biz.github.io/tech_docs/tutorial/dotnet-ecosystem/aspnet-core-mvc-vb/step1-environment-setup.html)