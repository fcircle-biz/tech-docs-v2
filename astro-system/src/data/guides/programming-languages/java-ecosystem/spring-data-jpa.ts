import type { TechGuide } from '../../types';

// Spring Data JPA 入門学習ガイド（全11章）。技術色 = エメラルド（Spring ブランド）。
// Spring学習教材シリーズの発展教材（Spring基礎 → Spring Data JDBC → Spring MVC → 本教材）。
// 題材は「部署・社員管理アプリ」。@ManyToOne を中心に関連テーブルの扱いを学ぶ。
export const springDataJpa: TechGuide = {
  category: 'programming-languages/java-ecosystem',
  slug: 'spring-data-jpa',
  techTitle: 'Spring Data JPA学習教材',
  icon: 'fa-leaf',
  level: '初級',
  categoryLabel: 'プログラミング言語',
  totalTime: '約11時間',
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
    { number: 1, name: 'Spring Data JPAとは', file: 'spring-data-jpa-learning-material-01.html' },
    { number: 2, name: 'Spring Data JPAプロジェクトの作成', file: 'spring-data-jpa-learning-material-02.html' },
    { number: 3, name: 'Entityの基本', file: 'spring-data-jpa-learning-material-03.html' },
    { number: 4, name: 'RepositoryによるCRUD操作', file: 'spring-data-jpa-learning-material-04.html' },
    { number: 5, name: 'ServiceからRepositoryを利用する', file: 'spring-data-jpa-learning-material-05.html' },
    { number: 6, name: '条件検索を作成する', file: 'spring-data-jpa-learning-material-06.html' },
    { number: 7, name: '@Queryで検索処理を書く', file: 'spring-data-jpa-learning-material-07.html' },
    { number: 8, name: 'Entityの関連を扱う', file: 'spring-data-jpa-learning-material-08.html' },
    { number: 9, name: 'トランザクションを理解する', file: 'spring-data-jpa-learning-material-09.html' },
    { number: 10, name: 'Spring MVCと連携する', file: 'spring-data-jpa-learning-material-10.html' },
    { number: 11, name: '総合演習：部署・社員管理アプリ', file: 'spring-data-jpa-learning-material-11.html' },
  ],
};
