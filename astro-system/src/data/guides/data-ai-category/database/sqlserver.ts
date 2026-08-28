import type { TechGuide } from '../../types';

// 初心者向け SQL Server 入門学習ガイド（全14章）。PostgreSQL との違いを各章に織り込む。
// 技術色 = スカイ（SQL / 汎用データベース系。PostgreSQL のブルーと区別できる色を選択）。
export const sqlserver: TechGuide = {
  category: 'data-ai-category/database',
  slug: 'sqlserver',
  techTitle: 'SQL Server学習教材',
  icon: 'fa-database',
  level: '初級',
  categoryLabel: 'データ・AI',
  totalTime: '約16時間',
  splashStop0: '#0ea5e9',
  splashStop1: '#06b6d4',
  splashBg: '#090b11',
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
  },
  chapters: [
    { number: 1, name: 'SQL Serverとは', file: 'sqlserver-learning-material-01.html' },
    { number: 2, name: 'アーキテクチャと基本用語', file: 'sqlserver-learning-material-02.html' },
    { number: 3, name: '環境構築とインストール', file: 'sqlserver-learning-material-03.html' },
    { number: 4, name: 'SSMSの基本操作', file: 'sqlserver-learning-material-04.html' },
    { number: 5, name: 'データベースとテーブルの作成', file: 'sqlserver-learning-material-05.html' },
    { number: 6, name: 'SELECT文でデータを取り出す', file: 'sqlserver-learning-material-06.html' },
    { number: 7, name: 'データの追加・更新・削除', file: 'sqlserver-learning-material-07.html' },
    { number: 8, name: 'テーブルの結合と集計', file: 'sqlserver-learning-material-08.html' },
    { number: 9, name: 'T-SQLプログラミング入門', file: 'sqlserver-learning-material-09.html' },
    { number: 10, name: 'トランザクションとロック', file: 'sqlserver-learning-material-10.html' },
    { number: 11, name: 'インデックスと性能の基礎', file: 'sqlserver-learning-material-11.html' },
    { number: 12, name: 'セキュリティとユーザー管理', file: 'sqlserver-learning-material-12.html' },
    { number: 13, name: 'バックアップと復旧・運用', file: 'sqlserver-learning-material-13.html' },
    { number: 14, name: 'PostgreSQLとの違い総まとめ', file: 'sqlserver-learning-material-14.html' },
  ],
};
