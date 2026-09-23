import type { TechGuide } from '../types';

// 初心者向け DB設計入門学習ガイド（全12章）。
// 架空の文具通販「さくら文具」の受注管理を共通題材に、業務要件の読み解き → ER図 → 正規化 →
// 物理設計（PostgreSQL の DDL）までを一貫して学ぶ。
// 技術色 = インディゴ（同分類の sql=ブルー・sqlserver=スカイ・oracle=レッドと区別できる）。
export const dbDesign: TechGuide = {
  category: 'database',
  slug: 'db-design',
  techTitle: 'DB設計入門（ER図・正規化）',
  icon: 'fa-diagram-project',
  level: '初級',
  totalTime: '約14.5時間',
  splashStop0: '#6366f1',
  splashStop1: '#06b6d4',
  splashBg: '#090b11',
  primary: {
    50: '#eef2ff',
    100: '#e0e7ff',
    200: '#c7d2fe',
    300: '#a5b4fc',
    400: '#818cf8',
    500: '#6366f1',
    600: '#4f46e5',
    700: '#4338ca',
    800: '#3730a3',
    900: '#312e81',
  },
  chapters: [
    { number: 1, name: 'DB設計とは — なぜ設計が必要か', file: 'db-design-learning-material-01.html' },
    { number: 2, name: 'リレーショナルモデルの基礎', file: 'db-design-learning-material-02.html' },
    { number: 3, name: '業務を読み解きエンティティを見つける', file: 'db-design-learning-material-03.html' },
    { number: 4, name: 'ER図の読み方・書き方', file: 'db-design-learning-material-04.html' },
    { number: 5, name: 'リレーションシップの設計', file: 'db-design-learning-material-05.html' },
    { number: 6, name: '正規化の目的と関数従属', file: 'db-design-learning-material-06.html' },
    { number: 7, name: '第1正規形・第2正規形', file: 'db-design-learning-material-07.html' },
    { number: 8, name: '第3正規形とボイス・コッド正規形', file: 'db-design-learning-material-08.html' },
    { number: 9, name: 'キー設計と命名規則', file: 'db-design-learning-material-09.html' },
    { number: 10, name: '論理設計から物理設計へ', file: 'db-design-learning-material-10.html' },
    { number: 11, name: '非正規化・履歴・アンチパターン', file: 'db-design-learning-material-11.html' },
    { number: 12, name: '総合演習 — 小さな業務システムを設計する', file: 'db-design-learning-material-12.html' },
  ],
};
