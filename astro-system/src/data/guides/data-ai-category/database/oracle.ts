import type { TechGuide } from '../../types';

// 初心者向け Oracle Database 入門学習ガイド（全14章）。
// Oracle AI Database 26ai Free を前提に、SQL の基礎から PL/SQL・運用の入口までを段階的に扱う。
// 技術色 = レッド（Oracle Database。PostgreSQL のブルー・汎用SQLのスカイと区別できる色）。
export const oracle: TechGuide = {
  category: 'data-ai-category/database',
  slug: 'oracle',
  techTitle: 'Oracle学習教材',
  icon: 'fa-database',
  level: '初級',
  categoryLabel: 'データ・AI',
  totalTime: '約20時間',
  splashStop0: '#ef4444',
  splashStop1: '#06b6d4',
  splashBg: '#090b11',
  primary: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
  },
  chapters: [
    { number: 1, name: 'Oracle Databaseとは', file: 'oracle-learning-material-01.html' },
    { number: 2, name: 'アーキテクチャと基本用語', file: 'oracle-learning-material-02.html' },
    { number: 3, name: '環境構築とインストール', file: 'oracle-learning-material-03.html' },
    { number: 4, name: 'SQL*PlusとSQL Developerの基本操作', file: 'oracle-learning-material-04.html' },
    { number: 5, name: '表の作成とデータ型', file: 'oracle-learning-material-05.html' },
    { number: 6, name: 'SELECT文でデータを取り出す', file: 'oracle-learning-material-06.html' },
    { number: 7, name: 'データの追加・更新・削除', file: 'oracle-learning-material-07.html' },
    { number: 8, name: '関数とNULL・日付の扱い', file: 'oracle-learning-material-08.html' },
    { number: 9, name: '表の結合と集計', file: 'oracle-learning-material-09.html' },
    { number: 10, name: 'PL/SQL入門', file: 'oracle-learning-material-10.html' },
    { number: 11, name: 'ストアドプログラムとトリガー', file: 'oracle-learning-material-11.html' },
    { number: 12, name: 'トランザクションとロック', file: 'oracle-learning-material-12.html' },
    { number: 13, name: 'インデックスと性能の基礎', file: 'oracle-learning-material-13.html' },
    { number: 14, name: 'ユーザー管理・バックアップと運用', file: 'oracle-learning-material-14.html' },
  ],
};
