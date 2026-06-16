# ASP.NET Core (VB.NET) 学習ガイドライン

このガイドラインでは、ASP.NET CoreをVB.NET言語で開発する方法を入門者向けに段階的に学習するためのカリキュラムを提供しています。従来のASP.NET Web FormsからASP.NET Coreへの移行を検討している開発者にも最適な内容となっています。

## 前提条件

### 必要な環境
- Visual Studio 2022以上（Community版可）またはVisual Studio Code
- .NET 6以上（推奨：.NET 8 LTS）
- Windows 10/11、macOS、またはLinux
- SQL Server Express 2019以上（データベース章で使用）
- Git（ソースコード管理用）

### 参考リソース
- [ASP.NET Core公式ドキュメント](https://docs.microsoft.com/ja-jp/aspnet/core/)
- [VB.NET言語リファレンス](https://docs.microsoft.com/ja-jp/dotnet/visual-basic/)
- [.NET API ブラウザー](https://docs.microsoft.com/ja-jp/dotnet/api/)
- [ASP.NET Core チュートリアル](https://dotnet.microsoft.com/ja-jp/learn/aspnet)

### 前提知識
- **必須**: VB.NETの基本的な文法、オブジェクト指向プログラミングの基礎概念
- **推奨**: HTML/CSS/JavaScriptの基礎知識、HTTPプロトコルの基本理解、SQLの基礎知識

## 学習コンテンツ

### [1. ASP.NET Core入門と開発環境構築](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/dotnet-ecosystem/aspnetcore-vb/aspnetcore-vb-learning-material-01.html)
ASP.NET Coreの概要、Web Formsとの違い、クロスプラットフォーム対応、開発環境のセットアップ、初めてのASP.NET Coreプロジェクト作成について学習します。

### [2. MVCアーキテクチャの基礎](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/dotnet-ecosystem/aspnetcore-vb/aspnetcore-vb-learning-material-02.html)
Model-View-Controllerパターンの概念、各コンポーネントの役割、リクエスト処理フロー、ルーティングの基本、アクションメソッドの作成について学習します。

### [3. Razorビューとレイアウト](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/dotnet-ecosystem/aspnetcore-vb/aspnetcore-vb-learning-material-03.html)
Razorシンタックス、ビューの作成、レイアウトページ、部分ビュー、ビューコンポーネント、Tag Helpers、VB.NET構文でのRazor記述について学習します。

### [4. モデルバインディングとバリデーション](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/dotnet-ecosystem/aspnetcore-vb/aspnetcore-vb-learning-material-04.html)
フォームデータの受け取り、モデルバインディングの仕組み、データアノテーション、カスタムバリデーション、クライアントサイドバリデーションの実装について学習します。

### [5. 依存性注入とミドルウェア](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/dotnet-ecosystem/aspnetcore-vb/aspnetcore-vb-learning-material-05.html)
DIコンテナの概念と利点、サービスの登録と解決、ミドルウェアパイプライン、カスタムミドルウェアの作成、リクエスト処理のカスタマイズについて学習します。

### [6. Entity Framework Coreとデータアクセス](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/dotnet-ecosystem/aspnetcore-vb/aspnetcore-vb-learning-material-06.html)
Code Firstアプローチ、DbContextの設定、マイグレーション、LINQ to Entities、リポジトリパターン、VB.NETでのEntity Framework Core実装について学習します。

### [7. Web APIの開発](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/dotnet-ecosystem/aspnetcore-vb/aspnetcore-vb-learning-material-07.html)
RESTful APIの設計原則、APIコントローラーの作成、JSON形式のデータ交換、Swagger/OpenAPIの統合、CORSの設定、VB.NETでのWeb API実装について学習します。

### [8. 認証と認可](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/dotnet-ecosystem/aspnetcore-vb/aspnetcore-vb-learning-material-08.html)
ASP.NET Core Identity、Cookie認証、JWT認証、ロールベースの認可、クレームベースの認可、外部認証プロバイダーの統合について学習します。

### [9. 状態管理とキャッシング](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/dotnet-ecosystem/aspnetcore-vb/aspnetcore-vb-learning-material-09.html)
セッション管理、TempData、ViewData、ViewBag、分散キャッシュ、メモリキャッシュ、レスポンスキャッシュの実装について学習します。

### [10. 実践的なWebアプリケーション開発](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/dotnet-ecosystem/aspnetcore-vb/aspnetcore-vb-learning-material-10.html)
学習した知識を統合して、ユーザー管理システムを含む実践的なWebアプリケーションを開発します。CRUD操作、ページング、検索、ファイルアップロード機能を実装します。

## 学習の進め方

1. **開発環境の整備**: Visual StudioまたはVS Codeをインストールし、.NET SDKをセットアップする
2. **段階的な学習**: 第1章から順番に進め、各章の実習課題を必ず完了する
3. **ハンズオン重視**: サンプルコードを実際に入力し、動作を確認しながら理解を深める
4. **Web Formsとの比較**: 従来のASP.NET Web Formsとの違いを意識しながら、新しいパラダイムを習得する
5. **プロジェクト実践**: 各章で学んだ概念を小規模なプロジェクトで実践し、理解を定着させる
6. **総合演習**: 最終章で完全なWebアプリケーションを構築し、実務レベルのスキルを身につける

## 推奨学習期間

- **基礎習得コース** (1-3章): 2-3週間
- **コア機能コース** (4-6章): 3-4週間
- **応用技術コース** (7-9章): 3-4週間
- **実践開発コース** (10章): 2-3週間

## 関連リソース

- [VB.NET学習ガイドライン](../vbnet/README.md)
- [ASP.NET Web Forms学習ガイドライン](../aspnet-vb/README.md)
- [C# ASP.NET Coreチートシート](../../../cheatsheet/frameworks/aspnetcore-cheatsheet.html)
- [Entity Frameworkチートシート](../../../cheatsheet/frameworks/entityframework-cheatsheet.html)

## 学習目標

このガイドを完了すると、以下のスキルを身につけることができます：

- ASP.NET CoreのMVCアーキテクチャを理解し、VB.NETで実装できる
- Razorビューエンジンを使用して動的なWebページを作成できる
- 依存性注入とミドルウェアパイプラインを活用した拡張可能なアプリケーションを設計できる
- Entity Framework Coreを使用したデータベースアクセスを実装できる
- RESTful Web APIを設計・実装し、フロントエンドと連携できる
- 認証・認可機能を実装し、セキュアなWebアプリケーションを構築できる
- 状態管理とキャッシング戦略を適切に選択・実装できる
- クロスプラットフォーム対応のWebアプリケーションを開発・デプロイできる
- 従来のASP.NET Web FormsからASP.NET Coreへの移行戦略を立案できる
- VB.NETの特性を活かしたクリーンで保守性の高いコードを記述できる

## 次のステップ

このガイドライン完了後は、以下の学習に進むことをお勧めします：

- **Blazor WebAssembly/Server**: SPAフレームワークでのVB.NET開発
- **gRPCサービス**: 高性能なマイクロサービス通信
- **SignalR**: リアルタイム通信機能の実装
- **Azure App Service**: クラウドへのデプロイメントと運用
- **Docker/Kubernetes**: コンテナ化とオーケストレーション
- **マイクロサービスアーキテクチャ**: 分散システムの設計と実装