import type { TechGuide } from '../../types';

// プログラミング初心者向け SQL 入門学習ガイド（全14章）。
// PostgreSQL を題材に、pgAdmin 4 と A5:SQL Mk-2 の2つのツールで実習する。
// 技術色 = ブルー（PostgreSQL。同分類の sqlserver はスカイのため区別できる）。
export const sql: TechGuide = {
  category: 'data-ai-category/database',
  slug: 'sql',
  techTitle: 'SQL入門学習教材',
  icon: 'fa-database',
  level: '初級',
  categoryLabel: 'データ・AI',
  totalTime: '約15時間',
  splashStop0: '#3b82f6',
  splashStop1: '#06b6d4',
  splashBg: '#090b11',
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
  },
  chapters: [
    { number: 1, name: 'データベースとSQLの世界', file: 'sql-learning-material-01.html' },
    { number: 2, name: 'リレーショナルデータベースの構造', file: 'sql-learning-material-02.html' },
    { number: 3, name: '環境構築（PostgreSQL・pgAdmin・A5:SQL Mk-2）', file: 'sql-learning-material-03.html' },
    { number: 4, name: 'ツールの基本操作とSQLの書き方', file: 'sql-learning-material-04.html' },
    { number: 5, name: 'データベースとテーブルを作る', file: 'sql-learning-material-05.html' },
    { number: 6, name: 'SELECT文でデータを取り出す', file: 'sql-learning-material-06.html' },
    { number: 7, name: '条件を指定して絞り込む（WHERE）', file: 'sql-learning-material-07.html' },
    { number: 8, name: '関数でデータを加工する', file: 'sql-learning-material-08.html' },
    { number: 9, name: 'データを集計する（GROUP BY）', file: 'sql-learning-material-09.html' },
    { number: 10, name: 'データの追加・更新・削除', file: 'sql-learning-material-10.html' },
    { number: 11, name: 'テーブルを結合する（JOIN）', file: 'sql-learning-material-11.html' },
    { number: 12, name: 'サブクエリとビュー', file: 'sql-learning-material-12.html' },
    { number: 13, name: 'トランザクションと同時実行制御', file: 'sql-learning-material-13.html' },
    { number: 14, name: 'インデックス・権限・運用の基礎', file: 'sql-learning-material-14.html' },
  ],
};
