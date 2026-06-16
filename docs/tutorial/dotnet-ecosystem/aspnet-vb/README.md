# ASP.NET(VB.NET) 実践チュートリアル

ASP.NET Web FormsとVB.NETを使用したWebアプリケーション開発の実践的なチュートリアルです。フレームワークを使わない標準的なASP.NET Web Formsによる開発手法を学び、Web開発の基礎を固めることを目的としています。

## チュートリアル概要

### 学習目標
- ASP.NET Web Formsの基本概念と構文の習得
- VB.NETプログラミングとサーバーコントロールの活用
- SQL ServerとADO.NETを使用したデータベース連携とCRUD操作
- セキュリティを意識した開発手法（SQLインジェクション・XSS対策等）
- Visual StudioとSSMSを使った開発・デバッグ手法

### 対象読者
- プログラミング初心者・超初心者
- HTMLの基本を理解している方
- Webアプリケーション開発を学びたい方
- ASP.NET Web Formsの基本を学習したい方
- データベース連携Webアプリを作りたい方

### 特徴
- **初心者向けに最適化**: 複雑な機能を排除し、基本的な機能に集中
- **段階的学習**: 各章でASP.NET・VB.NET理解度クイズによる習熟度確認
- **実践重視**: 実際に動作するユーザー管理システムを構築
- **セキュリティ基礎**: SQLインジェクション・XSS対策の基本を学習
- **LocalDB活用**: SQL Server LocalDBによる簡単な環境構築

## 前提条件・環境要件

### 必要なソフトウェア
- **開発環境**: Visual Studio 2019/2022 Community（VB.NET対応）
- **Webサーバー**: IIS Express（Visual Studioに含まれる）
- **データベース**: SQL Server LocalDB（Visual Studioに含まれる）
- **データベース管理**: SQL Server Management Studio (SSMS) 日本語版
- **ランタイム**: .NET Framework 4.8+

### 推奨する基礎知識
- HTML の基本タグと構造
- HTTP の基本概念（GET、POST リクエスト）
- 基本的なコンピュータ操作（ファイル作成・編集等）
- Windowsの基本操作

## チュートリアル構成

### Step 1: [環境構築とASP.NET基礎](https://fcircle-biz.github.io/tech_docs/tutorial/dotnet-ecosystem/aspnet-vb/step1-environment-setup.html)
- Visual Studio Community 2022の設定
- SQL Server LocalDBの環境構築
- ASP.NET Web Formsプロジェクトの作成
- VB.NETの基本構文（変数、出力、配列）
- プロジェクト構成の理解

**所要時間**: 2時間  
**習得内容**: VB.NET基本構文、ASP.NETページライフサイクル、サーバーコントロール基礎

### Step 2: [データベース設計と接続](https://fcircle-biz.github.io/tech_docs/tutorial/dotnet-ecosystem/aspnet-vb/step2-database-connection.html)
- SQL Server LocalDBの起動と設定
- SSMS(日本語版)による接続確認
- データベースとテーブルの作成
- ADO.NETによるデータベース接続（SqlConnection）
- UserDAOクラスの基本実装
- 例外処理とエラーハンドリング

**所要時間**: 2.5時間  
**習得内容**: SqlConnection、SqlCommand、Try-Catch文、クラス定義、Imports

### Step 3: [ユーザー登録機能の実装](https://fcircle-biz.github.io/tech_docs/tutorial/dotnet-ecosystem/aspnet-vb/step3-user-registration.html)
- ユーザー登録フォーム（.aspx）の作成
- サーバーコントロール（TextBox、Button等）の配置
- POSTバック処理とバリデーション
- データベースへのINSERT処理
- マスターページによる共通レイアウト

**所要時間**: 2.5時間  
**習得内容**: Page_Load、Button_Click、バリデーション、Response.Redirect、Server.HtmlEncode

### Step 4: [ユーザー一覧・詳細表示機能](https://fcircle-biz.github.io/tech_docs/tutorial/dotnet-ecosystem/aspnet-vb/step4-user-list-detail.html)
- データベースからのデータ取得（SELECT）
- GridViewコントロールによる基本的な一覧表示
- 詳細画面の実装とクエリストリング処理
- LinkButtonによるページ遷移

**所要時間**: 1.5時間  
**習得内容**: GridView、QueryString、LinkButton、Response.Redirect、Integer.TryParse

### Step 5: [ユーザー情報更新・削除機能](https://fcircle-biz.github.io/tech_docs/tutorial/dotnet-ecosystem/aspnet-vb/step5-user-update-delete.html)
- UserDAOクラスの基本的なUpdate/Deleteメソッド実装
- 編集フォームの実装とデータバインディング
- 基本的なUPDATE・DELETE処理の実装
- 確認ダイアログとJavaScript連携

**所要時間**: 2時間  
**習得内容**: ViewState、OnClientClick、データバインディング、ADO.NETパラメータ

### Step 6: [ブラウザでの動作確認とデバッグ](https://fcircle-biz.github.io/tech_docs/tutorial/dotnet-ecosystem/aspnet-vb/step6-testing-debug.html)
- Visual Studioの基本的なデバッグ操作
- ブレークポイントとステップ実行
- 基本的な動作確認とテスト
- よくあるエラーとトラブルシューティング

**所要時間**: 1時間  
**習得内容**: デバッグ基本操作、Try-Catch文、System.Diagnostics.Debug.WriteLine

## 作成するアプリケーション概要

### アプリケーション名: Simple User Management System

#### 主な機能
1. **ユーザー登録** - 新規ユーザーの情報を登録
2. **ユーザー一覧** - 登録されたユーザーの一覧表示
3. **ユーザー詳細** - 特定ユーザーの詳細情報表示
4. **ユーザー編集** - 既存ユーザー情報の更新
5. **ユーザー削除** - ユーザー情報の安全な削除

#### データベース設計
```sql
CREATE TABLE users (
    id INT IDENTITY(1,1) PRIMARY KEY,
    username NVARCHAR(50) NOT NULL UNIQUE,
    email NVARCHAR(100) NOT NULL,
    full_name NVARCHAR(100) NOT NULL,
    birth_date DATE,
    created_at DATETIME2 DEFAULT GETDATE(),
    updated_at DATETIME2 DEFAULT GETDATE()
);
```

#### 技術スタック
- **言語**: VB.NET (.NET Framework 4.8)
- **フレームワーク**: ASP.NET Web Forms
- **データベース**: SQL Server LocalDB
- **データベース接続**: ADO.NET (SqlConnection, SqlCommand)
- **フロントエンド**: HTML5 + Bootstrap 5 + ASP.NET Server Controls
- **Webサーバー**: IIS Express (開発用)
- **セキュリティ**: パラメータ化クエリ、HTMLエンコーディング
- **開発環境**: Visual Studio 2022 Community + SSMS

#### プロジェクト構成
```
UserManagementApp
│  Default.aspx
│  Default.aspx.vb
│  Site.Master
│  Site.Master.vb
│  Web.config
│
├──App_Code
│      UserDAO.vb
│      DatabaseConfig.vb
│      UserValidator.vb
│
├──Users
│      Create.aspx
│      Create.aspx.vb
│      List.aspx
│      List.aspx.vb
│      Detail.aspx
│      Detail.aspx.vb
│      Edit.aspx
│      Edit.aspx.vb
│      Delete.aspx
│      Delete.aspx.vb
│
├──App_Data
│      (ログファイル等)
│
└──Content
       Site.css
       bootstrap.min.css
```

## 総所要時間
**約11.5時間**（個人の習熟度により変動）

## 学習の特徴

### ASP.NET・VB.NET理解度クイズ
各章の末尾にASP.NETとVB.NETの基本概念に特化したクイズを配置：
- **Step 1**: ASP.NET基本概念（ページライフサイクル、サーバーコントロール、VB.NET構文）
- **Step 2**: データベース接続基礎（ADO.NET、SqlConnection、Try-Catch）
- **Step 3**: Web Forms基礎（ポストバック、バリデーション、イベント処理）
- **Step 4**: データ表示制御（GridView、データバインディング、QueryString、ページ遷移）
- **Step 5**: 状態管理（ViewState、JavaScript連携、基本的なCRUD操作）
- **Step 6**: デバッグとエラー処理（Visual Studioデバッガー、例外処理）

### 初心者向け最適化
- **複雑な機能を除外**: カスタムコントロール、高度な状態管理、Ajax機能などを排除
- **基本機能に集中**: CRUD操作とWeb Formsの基本パターンに特化
- **段階的な理解**: 各章で前章の復習を含む構成
- **実践的な学習**: 実際に動作するシステムを段階的に構築

## LocalDB環境構築

### SQL Server LocalDBの利用
Visual Studioに含まれるSQL Server LocalDBを使用します。

### 接続情報
- **サーバー**: (localdb)\MSSQLLocalDB
- **認証**: Windows認証
- **データベース**: UserManagementDB

## 参考資料とリンク

### 公式ドキュメント
- [ASP.NET Web Forms 公式ドキュメント](https://docs.microsoft.com/ja-jp/aspnet/web-forms/)
- [VB.NET 言語リファレンス](https://docs.microsoft.com/ja-jp/dotnet/visual-basic/)
- [ADO.NET 公式ドキュメント](https://docs.microsoft.com/ja-jp/dotnet/framework/data/adonet/)
- [SQL Server 公式ドキュメント](https://docs.microsoft.com/ja-jp/sql/sql-server/)

### 開発ツール
- [Visual Studio Community](https://visualstudio.microsoft.com/ja/vs/community/)
- [SQL Server Management Studio (SSMS)](https://docs.microsoft.com/ja-jp/sql/ssms/download-sql-server-management-studio-ssms/)

### 関連技術
- [Bootstrap 5 公式ドキュメント](https://getbootstrap.jp/)
- [HTML5 & CSS3 基礎リファレンス](https://developer.mozilla.org/ja/docs/Web)

## チュートリアルの進め方

1. **環境準備**: Visual Studio、SSMS、SQL Server LocalDBの設定
2. **段階実装**: 各ステップを順次実装し、必ず動作確認
3. **クイズ挑戦**: 各章のASP.NET・VB.NET理解度クイズで習熟度確認
4. **動作テスト**: ブラウザとVisual Studioデバッガーでの機能テスト
5. **コード理解**: 実装したコードの動作原理とASP.NETの仕組みを理解

## セキュリティに関する注意事項

- **SQLインジェクション対策**: SqlParameterによるパラメータ化クエリを使用
- **XSS対策**: Server.HtmlEncode()による出力エスケープ
- **入力値検証**: ASP.NETバリデーションコントロールとサーバーサイド検証
- **エラーハンドリング**: 適切な例外処理とユーザーフレンドリーなエラーメッセージ
- **接続文字列保護**: Web.configでの暗号化とセキュアな設定

## 学習のポイント

### 初心者向けアドバイス
- **動作確認を頻繁に**: 各機能実装後は必ずブラウザとデバッガーで確認
- **エラーを恐れない**: Visual Studioのエラーメッセージから学習する姿勢
- **コードを理解**: コピー&ペーストでなく、ASP.NETの動作原理を理解
- **小さく始める**: 一度に多くを実装せず、段階的に進める
- **デバッガー活用**: ブレークポイントと変数ウォッチを積極的に使用

### 発展的な学習
このチュートリアル完了後の推奨学習：
- **ASP.NET MVC**: より現代的なWebアプリケーション開発
- **ASP.NET Core**: クロスプラットフォーム対応とマイクロサービス
- **Entity Framework**: ORMによる高度なデータアクセス
- **Web API**: RESTful APIとJSON処理
- **セキュリティ**: 認証・認可システムとASP.NET Identity
- **パフォーマンス**: 状態管理最適化とキャッシュ戦略

## よくある質問（FAQ）

### Q: なぜMVCではなくWeb Formsを使うのですか？
A: Web Formsは初心者にとって理解しやすいイベント駆動モデルを採用しており、デスクトップアプリケーション開発経験者には馴染みやすいためです。また、レガシーシステムの保守や理解にも役立ちます。

### Q: VB.NETとC#のどちらを選ぶべきですか？
A: このチュートリアルではVB.NETを使用しますが、学習した概念はC#にも応用できます。VB.NETは自然言語に近い文法で初心者に優しく、基礎を固めるのに適しています。

### Q: LocalDB環境でトラブルが発生した場合は？
A: Step 1の環境構築セクションで詳細なトラブルシューティングガイドを提供しています。SQL Server LocalDBはVisual Studioに含まれているため、通常は追加インストールは不要です。

## サポート

技術的な質問や不具合報告は[Issues](https://github.com/fcircle-biz/tech_docs/issues)にて受け付けています。

---

[Step 1: 環境構築とASP.NET基礎](https://fcircle-biz.github.io/tech_docs/tutorial/dotnet-ecosystem/aspnet-vb/step1-environment-setup.html)