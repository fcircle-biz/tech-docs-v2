# React 学習ガイドライン

このガイドラインでは、Reactライブラリを使用したモダンなWebアプリケーション開発の基礎を入門者向けに段階的に学習するためのカリキュラムを提供しています。

## 前提条件
### 必要な環境
- Node.js 16.0以降（推奨：最新のLTSバージョン）
- npm、yarn、またはpnpm（パッケージマネージャー）
- テキストエディタまたは統合開発環境（VS Code推奨）
- Webブラウザ（Chrome、Firefox、Safari、Edge等）
- コマンドライン/ターミナルの基本操作知識
- Git（バージョン管理用、推奨）

### 参考リソース
- [React公式ドキュメント](https://react.dev/)
- [React日本語ドキュメント](https://ja.react.dev/)
- [Create React App公式ドキュメント](https://create-react-app.dev/)
- [Vite公式ドキュメント](https://vitejs.dev/)
- [React Router公式ドキュメント](https://reactrouter.com/)
- [MDN Web Docs - JavaScript](https://developer.mozilla.org/ja/docs/Web/JavaScript)

### 前提知識
- **必須**: JavaScript基礎文法（変数、関数、配列、オブジェクト）
- **必須**: HTML/CSSの基礎知識
- **推奨**: ES6+の構文（アロー関数、分割代入、スプレッド構文、Promise、async/await）
- **推奨**: DOMの基本概念とDOM操作の理解
- **推奨**: JSONデータ形式の理解
- **推奨**: HTTPプロトコルの基礎知識（GET、POST、REST API）

## 学習コンテンツ
### [1. React入門と環境構築](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/react/react-learning-material-01.html)
Reactとは何か、Reactの特徴と利点、仮想DOMの概念、開発環境のセットアップ（Node.js、npm）、Create React AppとViteを使用したプロジェクト作成、開発サーバーの起動、プロジェクト構造の理解、React Developer Toolsの導入について学びます。

### [2. JSXとコンポーネントの基礎](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/react/react-learning-material-02.html)
JSX構文の基礎、JavaScriptとの違い、式の埋め込み、関数コンポーネントの作成、コンポーネントの命名規則、コンポーネントのネスト、importとexport、フラグメント（<>...</>）の使用、条件付きレンダリング（三項演算子、&&演算子）について学習します。

### [3. PropsとState - データの管理](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/react/react-learning-material-03.html)
Propsの概念と使い方、親から子へのデータ渡し、Propsのデフォルト値、Props型チェック（PropTypes）、Stateの概念、useStateフックの基本、Stateの更新、複数のState管理、イミュータブルなState更新、PropsとStateの違いについて学びます。

### [4. イベント処理とユーザーインタラクション](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/react/react-learning-material-04.html)
Reactのイベントハンドリング、onClick、onChange、onSubmitイベント、イベントハンドラーの定義方法、イベントオブジェクト、合成イベント（SyntheticEvent）、フォーム要素の制御（制御されたコンポーネント）、複数の入力フィールドの管理、イベントの委譲について学習します。

### [5. リストとキー - 繰り返し要素のレンダリング](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/react/react-learning-material-05.html)
mapメソッドを使用したリストのレンダリング、keyプロパティの重要性、一意なkeyの設定方法、keyの使用に関するベストプラクティス、リストアイテムの追加・削除・更新、フィルタリングとソート、動的なリストの管理、パフォーマンスの考慮事項について学びます。

### [6. React Hooks - useEffectとライフサイクル](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/react/react-learning-material-06.html)
useEffectフックの基本概念、副作用（Side Effects）とは、コンポーネントのマウント・更新・アンマウント、依存配列の理解、クリーンアップ関数、データフェッチング、タイマーやイベントリスナーの管理、useEffectの実行タイミング、無限ループの回避方法について学習します。

### [7. フォームとバリデーション](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/react/react-learning-material-07.html)
制御されたコンポーネントと非制御コンポーネント、フォームの送信処理、複数の入力フィールドの管理、バリデーション（入力検証）の実装、エラーメッセージの表示、カスタムフックを使用したフォーム管理、React Hook Form等のライブラリ導入、フォームの状態管理について学びます。

### [8. APIとの連携 - 外部データの取得と更新](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/react/react-learning-material-08.html)
fetch APIを使用したデータ取得、axiosライブラリの導入と使用、GETリクエストとPOSTリクエスト、ローディング状態の管理、エラーハンドリング、async/awaitパターン、データのCRUD操作、JSON Server等のモックAPIの使用、環境変数の管理について学習します。

### [9. React Routerとナビゲーション](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/react/react-learning-material-09.html)
シングルページアプリケーション（SPA）の概念、React Routerのインストールと設定、BrowserRouterとRoute、Linkコンポーネントによるナビゲーション、動的ルーティング（URLパラメータ）、ネストされたルート、リダイレクト、404ページの実装、プログラマティックナビゲーション（useNavigate）について学びます。

### [10. 高度なトピック - Context API、パフォーマンス最適化、テスト](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/react/react-learning-material-10.html)
Context APIを使用したグローバル状態管理、useContextフック、カスタムフックの作成、React.memoによるメモ化、useMemoとuseCallbackフック、コード分割（lazy、Suspense）、React Testing Library基礎、ユニットテストとコンポーネントテスト、デプロイの準備とビルド最適化について学習します。

## 学習の進め方
1. **実践的なプロジェクトを構築しながら学習**: 各章で実際に動作するコンポーネントやアプリケーションを作成しながら学習を進めます
2. **公式ドキュメントを参照する**: React公式ドキュメント（react.dev）は非常に充実しているため、各章と並行して読み進めることを推奨します
3. **コードを書いて試す**: 説明を読むだけでなく、必ず自分でコードを書いて動作を確認しましょう
4. **小さなプロジェクトから始める**: シンプルなToDoリストやカウンターアプリから始めて、徐々に複雑な機能を追加していきます
5. **エラーメッセージを理解する**: エラーが出たら恐れずにメッセージを読み、問題解決のスキルを身につけます

## 推奨学習期間
- **基礎習得コース** (1-5章): 3-5週間
- **実践活用コース** (6-8章): 3-4週間
- **応用・最適化コース** (9-10章): 2-3週間
- **合計学習期間**: 8-12週間（週5-8時間の学習を想定）

## 関連リソース
- [JavaScript初級学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/javascript-beginner/README.html)
- [JavaScript中級学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/javascript-intermediate/README.html)
- [Next.js学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/nextjs/README.html)
- [JavaScript基礎チートシート](https://fcircle-biz.github.io/tech_docs/cheatsheet/javascript/javascript-cheatsheet.html)
- [React Hooksチートシート](https://fcircle-biz.github.io/tech_docs/cheatsheet/javascript/react-hooks-cheatsheet.html)
- [ES6+チートシート](https://fcircle-biz.github.io/tech_docs/cheatsheet/javascript/es6-cheatsheet.html)

## 学習目標
このガイドを完了すると、以下のスキルを身につけることができます：
- Reactの基本概念と仮想DOMの仕組みを理解できる
- JSX構文を使用してコンポーネントを作成できる
- PropsとStateを使ってデータを管理し、動的なUIを実装できる
- useStateとuseEffectを含む基本的なHooksを使いこなせる
- ユーザーのイベントに応答するインタラクティブなコンポーネントを作成できる
- リストデータを効率的にレンダリングできる
- フォームの作成と入力検証を実装できる
- 外部APIからデータを取得し、アプリケーションに統合できる
- React Routerを使用してシングルページアプリケーションを構築できる
- Context APIを使用したグローバル状態管理ができる
- パフォーマンス最適化の基本テクニックを適用できる
- React Testing Libraryを使用したコンポーネントテストが書ける
- 本番環境にReactアプリケーションをデプロイできる

## 次のステップ
このガイドライン完了後は、以下の学習に進むことをお勧めします：
- [Next.js学習ガイドライン](https://fcircle-biz.github.io/tech_docs/guide/programming-languages/javascript-ecosystem/nextjs/README.html) - ReactベースのフルスタックフレームワークでSEOとパフォーマンスを最適化
