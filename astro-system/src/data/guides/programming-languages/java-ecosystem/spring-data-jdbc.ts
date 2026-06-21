import type { TechGuide } from '../../types';

// Spring Data JDBC 入門学習ガイド（全8章）。技術色 = エメラルド（Spring ブランド）。
// Spring学習教材シリーズの2作目（1. Spring基礎 → 2. Spring Data JDBC → 3. Spring MVC）。
export const springDataJdbc: TechGuide = {
  category: 'programming-languages/java-ecosystem',
  slug: 'spring-data-jdbc',
  techTitle: 'Spring Data JDBC学習教材',
  icon: 'fa-leaf',
  level: '初級',
  categoryLabel: 'プログラミング言語',
  totalTime: '約8時間',
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
    { number: 1, name: 'Spring Data JDBCとは', file: 'spring-data-jdbc-learning-material-01.html' },
    { number: 2, name: 'データベース接続設定', file: 'spring-data-jdbc-learning-material-02.html' },
    { number: 3, name: 'テーブル作成と初期データ', file: 'spring-data-jdbc-learning-material-03.html' },
    { number: 4, name: 'エンティティクラス', file: 'spring-data-jdbc-learning-material-04.html' },
    { number: 5, name: 'Repositoryインターフェース', file: 'spring-data-jdbc-learning-material-05.html' },
    { number: 6, name: 'ServiceからRepositoryを使う', file: 'spring-data-jdbc-learning-material-06.html' },
    { number: 7, name: 'CommandLineRunnerで動作確認する', file: 'spring-data-jdbc-learning-material-07.html' },
    { number: 8, name: '総合演習：ユーザー管理のCRUD処理', file: 'spring-data-jdbc-learning-material-08.html' },
  ],
};
