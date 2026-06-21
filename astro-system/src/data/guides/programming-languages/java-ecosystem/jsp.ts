import type { TechGuide } from '../../types';

// JSP/Servlet 入門学習ガイド（全11章）。技術色 = オレンジ（Java ブランド寄り）。
// Java Web アプリケーション開発（Servlet → JSP → MVC → DB連携）を初心者向けに段階学習する。
export const jsp: TechGuide = {
  category: 'programming-languages/java-ecosystem',
  slug: 'jsp',
  techTitle: 'JSP/Servlet学習教材',
  icon: 'fa-globe',
  level: '初級',
  categoryLabel: 'プログラミング言語',
  totalTime: '約11時間',
  splashStop0: '#f97316',
  splashStop1: '#06b6d4',
  splashBg: '#090b11',
  primary: {
    50: '#fff7ed',
    100: '#ffedd5',
    200: '#fed7aa',
    300: '#fdba74',
    400: '#fb923c',
    500: '#f97316',
    600: '#ea580c',
    700: '#c2410c',
    800: '#9a3412',
    900: '#7c2d12',
  },
  chapters: [
    { number: 1, name: 'Webアプリケーション開発の世界へ', file: 'jsp-learning-material-01.html' },
    { number: 2, name: 'はじめてのServlet - Javaでリクエストを処理する', file: 'jsp-learning-material-02.html' },
    { number: 3, name: 'リクエストとレスポンス - データの受け渡し', file: 'jsp-learning-material-03.html' },
    { number: 4, name: 'はじめてのJSP - HTMLにJavaを埋め込む', file: 'jsp-learning-material-04.html' },
    { number: 5, name: 'JSPの構文をマスターする', file: 'jsp-learning-material-05.html' },
    { number: 6, name: 'フォーム処理とデータの受け渡し', file: 'jsp-learning-material-06.html' },
    { number: 7, name: 'セッション管理 - ユーザー状態の保持', file: 'jsp-learning-material-07.html' },
    { number: 8, name: 'ServletとJSPの連携 - MVCパターン入門', file: 'jsp-learning-material-08.html' },
    { number: 9, name: 'JavaBeansとスコープ - データの構造化', file: 'jsp-learning-material-09.html' },
    { number: 10, name: 'EL式とJSTL - モダンなJSP開発', file: 'jsp-learning-material-10.html' },
    { number: 11, name: 'データベース連携 - JDBC・DAOパターン', file: 'jsp-learning-material-11.html' },
  ],
};
