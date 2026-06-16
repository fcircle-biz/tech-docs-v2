# Next.js 学習ガイドライン

このガイドラインでは、Next.jsフレームワークを使用したモダンなReactアプリケーション開発の基礎を入門者向けに段階的に学習するためのカリキュラムを提供しています。

## 前提条件
### 必要な環境
- Node.js 18.17以降（推奨：最新のLTSバージョン）
- npm、yarn、またはpnpm（パッケージマネージャー）
- テキストエディタまたは統合開発環境（VS Code推奨）
- Webブラウザ（Chrome、Firefox、Safari、Edge等）
- Git（バージョン管理用）
- コマンドライン/ターミナルの基本操作知識

### 参考リソース
- [Next.js公式ドキュメント](https://nextjs.org/docs)
- [Next.js日本語ドキュメント](https://ja.next-community-docs.dev/)
- [React公式ドキュメント](https://react.dev/)
- [Vercel Platform（公式デプロイ環境）](https://vercel.com/)
- [Next.js Learn Course](https://nextjs.org/learn)

### 前提知識
- **必須**: JavaScript基礎文法（変数、関数、アロー関数、分割代入、モジュール）
- **必須**: HTML/CSSの基礎知識
- **推奨**: ES6+の構文（Promise、async/await、スプレッド構文等）
- **推奨**: Reactの基本概念（理解が浅くても本ガイドで学習可能）
- **推奨**: HTTPプロトコルの基礎知識（GET、POST、REST API）

## 学習コンテンツ
### [1. Next.js入門と環境構築](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/nextjs/nextjs-learning-material-01.html)
Next.jsの特徴とReactとの違い、インストール方法、プロジェクト作成（create-next-app）、開発サーバーの起動、プロジェクト構造の理解、App RouterとPages Routerの違いについて学びます。

### [2. Reactの基礎とコンポーネント設計](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/nextjs/nextjs-learning-material-02.html)
React基本概念（コンポーネント、Props、State）、関数コンポーネント、JSX構文、Hooksの基礎（useState、useEffect）、コンポーネントの再利用性、条件付きレンダリング、リストのレンダリングについて学習します。

### [3. ページとルーティング（App Router）](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/nextjs/nextjs-learning-material-03.html)
App Routerの基本概念、ファイルベースルーティング、page.jsとlayout.js、動的ルート（[id]）、ルートグループ、ネストされたルート、Link コンポーネントによるナビゲーション、useRouterフックの活用方法を学びます。

### [4. サーバーコンポーネントとクライアントコンポーネント](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/nextjs/nextjs-learning-material-04.html)
React Server Components（RSC）の概念、Server ComponentsとClient Componentsの違い、"use client"ディレクティブ、それぞれの使い分け、パフォーマンス最適化、コンポーネント間のデータ受け渡しについて学習します。

### [5. データフェッチングとレンダリング戦略](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/nextjs/nextjs-learning-material-05.html)
Server Componentsでのデータフェッチ、Static Site Generation（SSG）、Server-Side Rendering（SSR）、Incremental Static Regeneration（ISR）、動的レンダリング、キャッシング戦略、Suspenseとストリーミングの実装方法を学びます。

### [6. APIルートとサーバーアクション](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/nextjs/nextjs-learning-material-06.html)
Route Handlers（App Router）の作成、RESTful API設計、リクエスト/レスポンス処理、Server Actions、フォーム処理、データミューテーション、エラーハンドリング、CORS設定について学習します。

### [7. スタイリングと画像最適化](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/nextjs/nextjs-learning-material-07.html)
CSS Modules、Tailwind CSS統合、CSS-in-JS（styled-components、Emotion）、グローバルスタイル、Imageコンポーネントによる画像最適化、レスポンシブデザイン、Fontの最適化について学びます。

### [8. 認証とミドルウェア](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/nextjs/nextjs-learning-material-08.html)
Next.jsミドルウェアの基本、NextAuth.js統合、認証フロー実装、セッション管理、ルート保護、JWT（JSON Web Token）、OAuth プロバイダー統合、セキュリティベストプラクティスについて学習します。

### [9. パフォーマンス最適化とベストプラクティス](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/nextjs/nextjs-learning-material-09.html)
コード分割とダイナミックインポート、バンドルサイズ最適化、Lighthouse監査、Core Web Vitals、メモ化（React.memo、useMemo、useCallback）、エラー処理（error.js、not-found.js）、Metadata API、SEO最適化を学びます。

### [10. デプロイメントと本番環境設定](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/nextjs/nextjs-learning-material-10.html)
Vercelへのデプロイ、環境変数管理、本番ビルド最適化、カスタムサーバー（Node.js、Docker）、静的エクスポート、継続的インテグレーション/デプロイ（CI/CD）、モニタリングとログ、トラブルシューティングについて学習します。

## 学習の進め方
1. **App Routerを中心に学習**: Next.js 13以降の新しいApp Routerを中心に学習を進め、モダンな開発手法を習得します
2. **Server Componentsを理解する**: React Server Componentsの概念を理解し、パフォーマンス最適化の基礎を身につけます
3. **実践的なアプリケーション構築**: 各章で実際に動作するWebアプリケーションを段階的に構築しながら学習します
4. **公式ドキュメントの活用**: Next.js公式ドキュメントは非常に充実しているため、各章の学習と並行して参照します
5. **段階的な機能追加**: シンプルなページから始めて、データフェッチング、認証、最適化へと段階的に機能を追加していきます

## 推奨学習期間
- **基礎習得コース** (1-5章): 4-6週間
- **実践活用コース** (6-10章): 4-5週間
- **合計学習期間**: 8-11週間（週5-8時間の学習を想定）

## 関連リソース
- [JavaScript中級学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/javascript-intermediate/README.html)
- [React学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/react/README.html)
- [JavaScript基礎チートシート](https://fcircle-biz.github.io/tech_docs/cheatsheet/javascript/javascript-cheatsheet.html)
- [React Hooksチートシート](https://fcircle-biz.github.io/tech_docs/cheatsheet/javascript/react-hooks-cheatsheet.html)

## 学習目標
このガイドを完了すると、以下のスキルを身につけることができます：
- Next.jsの基本概念とApp Routerの仕組みを理解できる
- Reactコンポーネントを使用した再利用可能なUIを設計・実装できる
- Server ComponentsとClient Componentsの違いを理解し、適切に使い分けられる
- ファイルベースルーティングを使用したページ構成を実装できる
- SSG、SSR、ISRなど複数のレンダリング戦略を理解し、適切に選択できる
- APIルートとServer Actionsを使用したバックエンド機能を実装できる
- Next.js Imageコンポーネントを活用した画像最適化ができる
- 認証機能を実装し、セキュアなアプリケーションを構築できる
- パフォーマンス最適化とSEO対策を実践できる
- VercelやカスタムサーバーへのデプロイとCI/CD構築ができる
- Core Web Vitalsを意識したユーザー体験の良いWebアプリケーションを開発できる

## 次のステップ
このガイドライン完了後は、さらに高度なWeb開発技術やフレームワークの学習に進むことをお勧めします。TypeScriptの型安全性を活用した開発や、データベース統合、モバイルアプリ開発など、実践的なスキルを身につけることができます。
