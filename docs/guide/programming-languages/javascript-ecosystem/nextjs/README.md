# Next.js 学習ガイドライン

このガイドラインでは、Next.jsを使用したモダンなフルスタックWebアプリケーション開発の基礎を入門者向けに段階的に学習するためのカリキュラムを提供しています。Reactの知識をベースに、サーバーサイドレンダリング、静的サイト生成、APIルート、そして最新のApp Routerまで、実践的なプロジェクトを通じて効率的にNext.jsを習得できます。

## 前提条件
### 必要な環境
- Node.js 18.17以降（推奨：最新のLTSバージョン）
- npm、yarn、またはpnpm（パッケージマネージャー）
- Visual Studio Code（推奨）またはお好みのコードエディタ
- Git（バージョン管理用）
- 最新のWebブラウザ（Chrome、Firefox、Safari、Edge等）
- Vercelアカウント（無料、デプロイメント用）

### 参考リソース
- [Next.js公式ドキュメント](https://nextjs.org/docs)
- [Next.js Learn（公式チュートリアル）](https://nextjs.org/learn)
- [Vercel公式ドキュメント](https://vercel.com/docs)
- [App Router Migration Guide](https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration)
- [Next.js Examples](https://github.com/vercel/next.js/tree/canary/examples)

### 前提知識
- **必須**: JavaScript入門を履修済み（ES6+の構文、非同期処理、モジュールシステム）
- **必須**: TypeScript入門を履修済み（型定義、インターフェース、ジェネリクス）
- **必須**: React入門を履修済み（コンポーネント、Hooks、状態管理、ルーティングの基礎）
- **推奨**: HTMLとCSSの基礎知識（レスポンシブデザイン、Flexbox、Grid）
- **推奨**: REST APIの基本概念
- **推奨**: npm/yarnの基本的な使い方

## 学習コンテンツ
### [1. Next.jsとは？フレームワークの全体像を理解しよう](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/nextjs/nextjs-learning-material-01.html)
Next.jsが解決する課題、Reactとの違い、フルスタックフレームワークの概念、レンダリング戦略（CSR、SSR、SSG、ISR）の違い、Pages RouterとApp Routerの比較、Next.jsのエコシステムと主要機能、プロジェクトの初期セットアップと基本構成について学びます。

### [2. ファイルベースルーティングを使いこなそう](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/nextjs/nextjs-learning-material-02.html)
App Routerのディレクトリ構造、ページとレイアウトの作成、動的ルーティング（[slug]）、ネストされたルート、ルートグループ、並列ルートとインターセプトルート、not-foundとerrorページの実装、リンクとナビゲーション、メタデータの管理について実践的に学習します。

### [3. サーバーコンポーネントとクライアントコンポーネント](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/nextjs/nextjs-learning-material-03.html)
React Server Components（RSC）の仕組み、サーバーとクライアントコンポーネントの使い分け、'use client'ディレクティブの理解、コンポーネントの境界設計、データの受け渡し、パフォーマンスの最適化、ストリーミングとSuspenseの活用について詳しく解説します。

### [4. データフェッチングとキャッシュ戦略](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/nextjs/nextjs-learning-material-04.html)
fetch APIの拡張機能、サーバーコンポーネントでのデータ取得、並列・順次データフェッチング、キャッシュの仕組み（Data Cache、Full Route Cache）、revalidateによる再検証、動的関数（cookies、headers）の使用、ローディングとストリーミングUIの実装について学びます。

### [5. API Routesでバックエンド開発](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/nextjs/nextjs-learning-material-05.html)
Route Handlersの作成、HTTPメソッドの処理、リクエストとレスポンスの扱い、ミドルウェアの実装、CORSの設定、認証・認可の実装、データベース接続、外部APIとの連携、エラーハンドリング、Webhookの処理について実践的に学習します。

### [6. 静的生成（SSG）と増分静的再生成（ISR）](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/nextjs/nextjs-learning-material-06.html)
静的生成の仕組みとメリット、generateStaticParamsによる動的ルートの静的生成、増分静的再生成（ISR）の実装、On-Demand Revalidation、fallback戦略、静的エクスポート、パフォーマンスの最適化、CDNとの連携について詳しく解説します。

### [7. Server Actionsでフォーム処理](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/nextjs/nextjs-learning-material-07.html)
Server Actionsの基本概念、フォームの送信と処理、バリデーションの実装、楽観的更新、プログレッシブエンハンスメント、エラーハンドリング、ファイルアップロード、revalidatePathとrevalidateTag、useFormStateとuseFormStatusの活用について学習します。

### [8. 画像とフォントの最適化](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/nextjs/nextjs-learning-material-08.html)
next/imageコンポーネントの使い方、レスポンシブ画像の実装、画像の自動最適化、遅延読み込み、プレースホルダーの設定、外部画像の扱い、next/fontによるフォント最適化、カスタムフォントの追加、パフォーマンス改善のベストプラクティスについて実践的に学びます。

### [9. 認証とセッション管理](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/nextjs/nextjs-learning-material-09.html)
NextAuth.js（Auth.js）の実装、OAuthプロバイダーの設定、JWTとセッション、ミドルウェアによるルート保護、ロールベースアクセス制御、セキュアなクッキー管理、CSRFトークン、認証状態の管理、サインイン・サインアウトフローの実装について詳しく解説します。

### [10. 国際化（i18n）対応](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/nextjs/nextjs-learning-material-10.html)
多言語サポートの設定、ルーティングの国際化、翻訳ファイルの管理、動的な言語切り替え、日付・数値・通貨のフォーマット、SEOの多言語対応、generateStaticParamsでの言語別ページ生成、サーバーとクライアントでの翻訳処理について学習します。

### [11. パフォーマンス最適化とSEO](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/nextjs/nextjs-learning-material-11.html)
Core Web Vitalsの改善、バンドルサイズの最適化、コード分割と動的インポート、プリフェッチング戦略、メタデータAPIによるSEO最適化、構造化データの実装、サイトマップとrobots.txt、Open Graphタグ、パフォーマンス計測ツールの活用について実践的に学びます。

### [12. テスト戦略とデバッグ](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/nextjs/nextjs-learning-material-12.html)
Jest環境のセットアップ、React Testing Libraryでのコンポーネントテスト、サーバーコンポーネントのテスト、API Routesのテスト、E2Eテスト（Playwright/Cypress）、デバッグツールの活用、エラーバウンダリ、ログ管理、開発者ツールの効果的な使い方について学習します。

### [13. データベース統合とORM](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/nextjs/nextjs-learning-material-13.html)
Prismaのセットアップと使用、データベーススキーマの設計、マイグレーション管理、CRUD操作の実装、リレーションの扱い、トランザクション処理、接続プールの管理、Edge Runtimeでのデータベース接続、Vercel Postgres/PlanetScaleとの統合について詳しく解説します。

### [14. デプロイメントとCI/CD](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/nextjs/nextjs-learning-material-14.html)
Vercelへのデプロイ、環境変数の管理、プレビューデプロイメント、本番環境の設定、GitHub Actionsによる自動化、Docker化とコンテナデプロイ、エッジ関数の活用、監視とアラート、ロールバック戦略、パフォーマンス分析について実践的に学習します。

### [15. 実践プロジェクト：ブログプラットフォーム構築](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/nextjs/nextjs-learning-material-15.html)
これまで学んだ知識を総動員して、本格的なブログプラットフォームを構築します。Markdownエディタ、記事管理、カテゴリー・タグ機能、検索機能、コメントシステム、管理画面、RSSフィード、ソーシャルシェア機能など、実務で使えるレベルのアプリケーションを完成させます。

## 学習の進め方
1. **基礎理解フェーズ（1-3章）**: Next.jsの基本概念とApp Routerの仕組みを理解し、シンプルなページが作成できるようになる
2. **データ処理フェーズ（4-7章）**: データフェッチング、API Routes、Server Actionsを使いこなし、動的なアプリケーションが作れるようになる
3. **最適化フェーズ（8-11章）**: パフォーマンス最適化、認証、国際化など、プロダクションレベルの機能を実装できるようになる
4. **実践応用フェーズ（12-15章）**: テスト、データベース統合、デプロイメントを経て、実務で使えるアプリケーションを構築できるようになる

## 推奨所要時間

| 章 | 内容 | 目安時間 |
|----------|------|----------|
| 第1章 | Next.jsとは？フレームワークの全体像を理解しよう | 45分 |
| 第2章 | ファイルベースルーティングを使いこなそう | 2時間 |
| 第3章 | サーバーコンポーネントとクライアントコンポーネント | 2時間 |
| 第4章 | データフェッチングとキャッシュ戦略 | 2時間30分 |
| 第5章 | API Routesでバックエンド開発 | 2時間 |
| 第6章 | 静的生成（SSG）と増分静的再生成（ISR） | 2時間 |
| 第7章 | Server Actionsでフォーム処理 | 2時間 |
| 第8章 | 画像とフォントの最適化 | 1時間30分 |
| 第9章 | 認証とセッション管理 | 2時間30分 |
| 第10章 | 国際化（i18n）対応 | 2時間 |
| 第11章 | パフォーマンス最適化とSEO | 2時間 |
| 第12章 | テスト戦略とデバッグ | 2時間 |
| 第13章 | データベース統合とORM | 2時間30分 |
| 第14章 | デプロイメントとCI/CD | 2時間 |
| 第15章 | 実践プロジェクト：ブログプラットフォーム構築 | 8時間 |
| **合計** | | **約36時間** |

## 関連リソース
- [Next.js チートシート](https://fcircle-biz.github.io/tech_docs/cheatsheet/nextjs/)
- [React 学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/react/)
- [TypeScript 学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/typescript/)
- [Tailwind CSS 学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/web-technologies/tailwind-css/)
- [Node.js 学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/nodejs/)

## 学習目標
このガイドを完了すると、以下のスキルを身につけることができます：
- Next.jsのApp Routerを使用したモダンなWebアプリケーションが構築できる
- サーバーサイドレンダリング（SSR）と静的サイト生成（SSG）を適切に使い分けられる
- React Server Componentsを理解し、効率的なデータフェッチングができる
- API RoutesとServer Actionsを使ってフルスタックアプリケーションが開発できる
- 画像やフォントの最適化により、高速なWebサイトが構築できる
- 認証・認可機能を実装し、セキュアなアプリケーションが作成できる
- 国際化対応により、グローバルなユーザーに対応したサイトが構築できる
- SEOとパフォーマンスを最適化し、ユーザー体験の高いサイトが作れる
- テスト駆動開発でNext.jsアプリケーションを開発できる
- Vercelやその他のプラットフォームへのデプロイメントができる

## 次のステップ
このガイドライン完了後は、以下の学習に進むことをお勧めします：
- [Next.js Commerce](https://github.com/vercel/commerce) - Eコマースサイト構築のベストプラクティス
- [T3 Stack](https://create.t3.gg/) - Next.js + TypeScript + Prisma + tRPCによるフルスタック開発
- [Remix 学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/web-technologies/remix/) - 別のモダンフルスタックフレームワーク
- [GraphQL 学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/web-technologies/graphql/) - より高度なAPI設計
- [マイクロフロントエンド 学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/design-modeling/architecture/micro-frontends/) - 大規模アプリケーションアーキテクチャ