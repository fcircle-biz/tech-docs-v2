# ASP.NET（VB.NET）Web Forms 学習ガイドライン

このガイドラインでは、VB.NETの基礎知識を持つ学習者を対象に、ASP.NET Web Formsを段階的に学習するためのカリキュラムを提供しています。

## 前提条件

### 必要な環境
- Visual Studio 2019以上（Community版可）
- .NET Framework 4.7.2以上 または .NET 6/8
- IIS Express（Visual Studioに含まれる）
- SQL Server Express LocalDB または SQL Server

### 参考リソース
- [ASP.NET公式ドキュメント](https://docs.microsoft.com/ja-jp/aspnet/)
- [VB.NET言語ガイド](https://docs.microsoft.com/ja-jp/dotnet/visual-basic/)
- [Visual Studio公式サイト](https://visualstudio.microsoft.com/ja/)

### 前提知識
- **必須**: [VB.NET学習ガイドライン](../vbnet/README.md)の完了（オブジェクト指向プログラミング、例外処理、ファイル操作等）
- **必須**: HTML/CSSの基本知識
- **推奨**: データベースの基本概念、SQLの基礎知識

## 学習コンテンツ

### [1. ASP.NET Web Forms入門と開発環境構築](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/dotnet-ecosystem/aspnet-vb/aspnet-vb-learning-material-01.html)
ASP.NET Web Formsとは何か、Visual Studioでの開発環境構築、初回プロジェクト作成について学習します。

### [2. Web FormsとWebコントロール](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/dotnet-ecosystem/aspnet-vb/aspnet-vb-learning-material-02.html)
Web Formsの基本コントロール（Label、TextBox、Button等）の使用方法とVB.NETとの違いについて学習します。

### [3. イベント処理とPostBack](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/dotnet-ecosystem/aspnet-vb/aspnet-vb-learning-material-03.html)
ASP.NET Web Formsのイベントドリブンモデル、PostBackの仕組み、ページライフサイクルについて学習します。

### [4. データ検証とエラーハンドリング](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/dotnet-ecosystem/aspnet-vb/aspnet-vb-learning-material-04.html)
検証コントロール、カスタム検証、例外処理、ユーザビリティの向上について学習します。

### [5. 状態管理（Session、ViewState、Cache）](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/dotnet-ecosystem/aspnet-vb/aspnet-vb-learning-material-05.html)
ASP.NETの状態管理技術、セッション管理、ViewState、アプリケーションキャッシュについて学習します。

### [6. データベース連携（ADO.NET）](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/dotnet-ecosystem/aspnet-vb/aspnet-vb-learning-material-06.html)
ADO.NETを使用したデータベース接続、DataSet、DataReader、CRUD操作の実装について学習します。

### [7. データバインドとGridView](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/dotnet-ecosystem/aspnet-vb/aspnet-vb-learning-material-07.html)
データバインディング、GridView、DataList、Repeaterコントロールを使ったデータ表示について学習します。

### [8. マスターページとナビゲーション](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/dotnet-ecosystem/aspnet-vb/aspnet-vb-learning-material-08.html)
マスターページを使用した共通レイアウト、メニューコントロール、サイトマップの実装について学習します。

### [9. セキュリティとメンバーシップ](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/dotnet-ecosystem/aspnet-vb/aspnet-vb-learning-material-09.html)
Webアプリケーションにおける認証・認可の実装、ASP.NETメンバーシップシステムの活用、ログインコントロールの使用方法、ロールベースアクセス制御について学習します。パスワードハッシュ化、XSS対策、セッション管理などのセキュリティベストプラクティスを習得できます。

### [10. 実践的なWebアプリケーション開発](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/dotnet-ecosystem/aspnet-vb/aspnet-vb-learning-material-10.html)
これまで学習したすべての技術を統合して、完全な社員管理システムを構築します。3層アーキテクチャによる設計、パフォーマンス最適化、テスト戦略、デプロイメント、運用保守まで、実際のプロジェクトで必要となる実践的な開発スキルを習得できます。

## 学習の進め方

**前提**: [VB.NET学習ガイドライン](../vbnet/README.md)を完了していることを前提として進めます。

1. **ASP.NET開発環境の準備**: Visual StudioにASP.NET Web Forms開発環境を構築する
2. **Web Forms概念の理解**: コンソールアプリケーションとWebアプリケーションの違い、Web Formsアーキテクチャを理解する
3. **Webコントロールの習得**: 既存のVB.NET知識を活用しながらWebコントロールの使用方法を学ぶ
4. **Web固有機能の実装**: 状態管理、データバインド、セキュリティなどWeb特有の機能を実装する
5. **総合Webアプリケーション開発**: 学習した知識を統合して実用的なWebアプリケーションを構築する

## 推奨学習期間

※VB.NET基礎知識習得済みを前提とした期間です

- **Web Forms基礎コース** (1-4章): 2-3週間
- **データ連携・高度機能コース** (5-7章): 2-3週間
- **実践Webアプリ開発コース** (8-10章): 3-4週間

## 関連リソース

### 前提教材（履修済み）
- [VB.NET学習ガイドライン](../vbnet/README.md) ✅ **履修済み前提**

### 補完教材
- 追加の学習リソースについては、関連する技術ドキュメントをご参照ください。

## 学習目標

このガイドを完了すると、以下のスキルを身につけることができます：

- ASP.NET Web Formsの基本的なアーキテクチャを理解し、実装できる
- 既存のVB.NET知識を活用してWebフォームアプリケーションを開発できる
- データベースと連携した動的なWebサイトを構築できる
- ユーザー認証・認可機能を実装できる
- 状態管理やセッション管理を適切に活用できる
- セキュリティを考慮したWebアプリケーション開発ができる
- GridViewやデータバインドを使用した効率的なデータ表示ができる
- マスターページを活用した保守性の高いWebサイトを構築できる

## 次のステップ

このガイドライン完了後は、以下の学習に進むことをお勧めします：

- **ASP.NET MVC**: より柔軟なWebアプリケーション開発手法
- **ASP.NET Core**: 最新のクロスプラットフォーム対応Web開発
- **Web API開発**: RESTful APIの設計と実装
- **EntityFramework**: より高度なO/Rマッピング技術