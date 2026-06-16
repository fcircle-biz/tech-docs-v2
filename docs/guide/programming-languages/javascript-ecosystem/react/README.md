# React 学習ガイドライン

このガイドラインでは、Reactを使用したモダンなWebアプリケーション開発の基礎を、JavaScript/TypeScriptの基礎知識がある方向けに段階的に学習するためのカリキュラムを提供しています。関数コンポーネントとReact Hooksを中心に、実践的なコード例を通じて効率的にReactを習得できます。

## 前提条件
### 必要な環境
- Node.js 18.0以降（推奨：最新のLTSバージョン）
- npm、yarn、またはpnpm（パッケージマネージャー）
- Visual Studio Code（推奨）またはお好みのコードエディタ
- 最新のWebブラウザ（Chrome、Firefox、Safari、Edge等）
- Git（バージョン管理用）
- React Developer Tools（ブラウザ拡張機能）

### 参考リソース
- [React公式ドキュメント（最新版）](https://react.dev/)
- [React日本語ドキュメント](https://ja.react.dev/)
- [Vite公式ドキュメント](https://vitejs.dev/)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [React Hook Form公式ドキュメント](https://react-hook-form.com/)
- [React Query/TanStack Query](https://tanstack.com/query/latest)

### 前提知識
- **必須**: JavaScript入門履修済み（ES6+の基本構文、非同期処理、モジュールシステム）
- **必須**: TypeScript入門履修済み（型定義、インターフェース、ジェネリクス）
- **必須**: HTML/CSSの基礎知識（セマンティックHTML、レスポンシブデザイン）
- **推奨**: npm/yarnの基本的な使い方
- **推奨**: REST APIの基本概念
- **推奨**: Gitの基本操作

## 学習コンテンツ
### [1. React入門 - なぜReactを学ぶのか](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/react/react-learning-material-01.html)
Reactの思想と設計哲学、コンポーネントベース開発の利点、仮想DOMとReactファイバー、宣言的UIの概念、Reactエコシステムの全体像、SPAとMPAの違い、ReactとNext.jsの関係、開発環境のセットアップ（Vite + React + TypeScript）について学びます。

### [2. JSXとTypeScriptでのReact開発](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/react/react-learning-material-02.html)
JSX/TSX構文の詳細、TypeScriptでのコンポーネント型定義、ReactのFC型とその使い方、children propの型定義、ジェネリクスを使った汎用コンポーネント、型安全なprops設計、React.ReactElement vs JSX.Element、strictモードでの開発について実践的に学習します。

### [3. 関数コンポーネントとProps - データフロー設計](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/react/react-learning-material-03.html)
関数コンポーネントの設計原則、Propsの詳細な型定義、オプショナルプロパティとデフォルト値、コンポーネントの合成パターン、レンダープロップスパターン、Higher-Order Components（HOC）、カスタムフックへの移行タイミング、再利用可能なコンポーネント設計について学びます。

### [4. useState - 状態管理の基礎](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/react/react-learning-material-04.html)
useStateの内部動作、状態の初期化パターン、遅延初期化、関数型更新、複雑なオブジェクトの状態管理、配列の状態管理、イミュータブル更新の重要性、状態のバッチング、React18の自動バッチング機能、パフォーマンス最適化について詳しく解説します。

### [5. useEffect - 副作用とライフサイクル](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/react/react-learning-material-05.html)
useEffectの正しい使い方、依存配列の完全理解、クリーンアップ関数の実装、データフェッチングのベストプラクティス、競合状態の回避、AbortControllerの使用、カスタムフックでの副作用の抽象化、useLayoutEffectとの使い分け、React18のStrictModeでの二重実行について学習します。

### [6. イベント処理とフォーム - インタラクティブUI](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/react/react-learning-material-06.html)
Reactのイベントシステム、合成イベントの仕組み、イベントハンドラーの型定義、制御/非制御コンポーネント、フォームバリデーション戦略、React Hook Formの実装、Zodを使ったスキーマバリデーション、リアルタイムバリデーション、複雑なフォームの状態管理について実践的に学びます。

### [7. useReducer と Context API - 高度な状態管理](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/react/react-learning-material-07.html)
useReducerの設計パターン、アクションとリデューサーの型定義、Context APIの効果的な使用、Provider パターン、複数コンテキストの組み合わせ、パフォーマンスの最適化、再レンダリングの制御、状態管理ライブラリ（Zustand、Jotai）との比較について学習します。

### [8. カスタムフック - ロジックの再利用](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/react/react-learning-material-08.html)
カスタムフックの設計原則、命名規則、実装パターン、テスタビリティ、useDebounce、useThrottle、useFetch、useLocalStorage、useMediaQuery等の実用的なカスタムフック実装、フックのテスト方法、パッケージ化と共有について実践的に学びます。

### [9. パフォーマンス最適化 - メモ化とコード分割](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/react/react-learning-material-09.html)
React.memo、useMemo、useCallbackの正しい使い方、レンダリング最適化戦略、React DevToolsプロファイラー、仮想化（react-window）、コード分割とlazy loading、Suspenseの活用、バンドルサイズの削減、Web Vitalsの改善について詳しく解説します。

### [10. React Router - ルーティングとナビゲーション](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/react/react-learning-material-10.html)
React Router v6の基本と応用、ルート定義とネスト、動的ルーティング、パラメータとクエリ文字列、プログラマティックナビゲーション、ルートガード、遅延読み込み、エラーバウンダリ、データローダー、アクション、フォーム統合について学習します。

### [11. データフェッチングと状態同期](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/react/react-learning-material-11.html)
モダンなデータフェッチング戦略、TanStack Query（React Query）の実装、キャッシュ管理、楽観的更新、無限スクロール、リアルタイム同期（WebSocket）、エラーハンドリング、リトライ戦略、バックグラウンド再フェッチ、データの正規化について実践的に学びます。

### [12. テストとデプロイメント](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/react/react-learning-material-12.html)
React Testing Libraryでのコンポーネントテスト、Jestでのユニットテスト、カスタムフックのテスト、E2Eテスト（Playwright）、CI/CDパイプライン構築、Vercel/Netlifyへのデプロイ、環境変数の管理、パフォーマンス監視、エラートラッキングについて学習します。

## 学習の進め方
1. **基礎理解フェーズ（1-3章）**: Reactの基本概念とTypeScriptでの開発環境を理解し、シンプルなコンポーネントが作成できるようになる
2. **状態管理フェーズ（4-7章）**: useState、useEffect、useReducerを使いこなし、複雑な状態管理ができるようになる
3. **実践応用フェーズ（8-10章）**: カスタムフック作成、パフォーマンス最適化、ルーティングを実装できるようになる
4. **プロダクション準備フェーズ（11-12章）**: 実務で必要なデータフェッチング、テスト、デプロイができるようになる

## 推奨所要時間

| 章 | 内容 | 目安時間 |
|----------|------|----------|
| 第1章 | React入門 - なぜReactを学ぶのか | 1時間30分 |
| 第2章 | JSXとTypeScriptでのReact開発 | 1時間30分 |
| 第3章 | 関数コンポーネントとProps - データフロー設計 | 2時間 |
| 第4章 | useState - 状態管理の基礎 | 2時間 |
| 第5章 | useEffect - 副作用とライフサイクル | 2時間 |
| 第6章 | イベント処理とフォーム - インタラクティブUI | 2時間 |
| 第7章 | useReducer と Context API - 高度な状態管理 | 2時間30分 |
| 第8章 | カスタムフック - ロジックの再利用 | 2時間 |
| 第9章 | パフォーマンス最適化 - メモ化とコード分割 | 2時間 |
| 第10章 | React Router - ルーティングとナビゲーション | 2時間 |
| 第11章 | データフェッチングと状態同期 | 2時間30分 |
| 第12章 | テストとデプロイメント | 2時間 |
| **合計** | | **約24時間** |

## 関連リソース
- [React チートシート](https://fcircle-biz.github.io/tech_docs/cheatsheet/react/)
- [TypeScript 学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/typescript/)
- [Next.js 学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/nextjs/)
- [JavaScript 学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/javascript/)

## 学習目標
このガイドを完了すると、以下のスキルを身につけることができます：
- Reactの設計思想を理解し、コンポーネントベースの開発ができる
- TypeScriptを使った型安全なReactアプリケーションが開発できる
- React Hooksを使いこなし、複雑な状態管理を実装できる
- カスタムフックを作成し、ロジックを効率的に再利用できる
- パフォーマンスを意識した最適化されたアプリケーションが構築できる
- React Routerを使ったSPAのルーティングが実装できる
- TanStack Queryを使った効率的なデータフェッチングができる
- テスト駆動開発（TDD）でReactコンポーネントを開発できる
- CI/CDパイプラインを構築し、プロダクションへデプロイできる

## 次のステップ
このガイドライン完了後は、以下の学習に進むことをお勧めします：
- [Next.js 学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/nextjs/) - サーバーサイドレンダリング、静的サイト生成
- [React Native 学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/react-native/) - モバイルアプリ開発
- [Redux Toolkit 学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/redux-toolkit/) - 大規模アプリケーションの状態管理
- [GraphQL 学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/web-technologies/graphql/) - モダンなAPIクライアント開発