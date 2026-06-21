import type { TechGuide } from '../../types';

// Spring MVC 入門学習ガイド（全10章）。技術色 = エメラルド（Spring Framework ブランド寄り）。
export const springMvc: TechGuide = {
  category: 'programming-languages/java-ecosystem',
  slug: 'spring-mvc',
  techTitle: 'Spring MVC学習教材',
  icon: 'fa-leaf',
  level: '初級',
  categoryLabel: 'プログラミング言語',
  totalTime: '約10時間',
  splashStop0: '#10b981',
  splashStop1: '#06b6d4',
  splashBg: '#090b11',
  primary: {
    50: '#ecfdf5',
    100: '#d1fae5',
    200: '#a7f3d0',
    300: '#6ee7b7',
    400: '#34d399',
    500: '#10b981',
    600: '#059669',
    700: '#047857',
    800: '#065f46',
    900: '#064e3b',
  },
  chapters: [
    { number: 1, name: 'Spring MVCとは', file: 'spring-mvc-learning-material-01.html' },
    { number: 2, name: 'Spring MVCプロジェクトの基本構成', file: 'spring-mvc-learning-material-02.html' },
    { number: 3, name: 'Controllerの基本', file: 'spring-mvc-learning-material-03.html' },
    { number: 4, name: 'Modelを使って画面にデータを渡す', file: 'spring-mvc-learning-material-04.html' },
    { number: 5, name: 'ユーザー一覧を表示する', file: 'spring-mvc-learning-material-05.html' },
    { number: 6, name: '詳細画面を表示する', file: 'spring-mvc-learning-material-06.html' },
    { number: 7, name: '新規登録フォームを作る', file: 'spring-mvc-learning-material-07.html' },
    { number: 8, name: '編集機能を作る', file: 'spring-mvc-learning-material-08.html' },
    { number: 9, name: '削除機能を作る', file: 'spring-mvc-learning-material-09.html' },
    { number: 10, name: '総合演習：ユーザー管理Webアプリケーション', file: 'spring-mvc-learning-material-10.html' },
  ],
};
