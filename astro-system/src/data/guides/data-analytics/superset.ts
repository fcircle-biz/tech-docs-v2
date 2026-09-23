import type { TechGuide } from '../types';

// Apache Superset 入門学習ガイド（全14章）。
// 技術色 = ティール（BI ツール系。同じ BI である Power BI のアンバーと区別でき、
// Superset のブランドカラー（ティール〜シアン系）にも近い色を color-themes.md から選択）。
// Docker Compose で起動した Superset を前提に、DB 接続・SQL Lab・データセット・
// チャート・ダッシュボード・権限・運用までを初心者向けに段階的に学ぶ教材。
export const superset: TechGuide = {
  category: 'data-analytics',
  slug: 'superset',
  techTitle: 'Apache Superset学習教材',
  icon: 'fa-chart-pie',
  iconStyle: 'fas',
  level: '初級',
  totalTime: '約14時間',
  splashStop0: '#14b8a6',
  splashStop1: '#06b6d4',
  splashBg: '#090b11',
  primary: {
    50: '#f0fdfa',
    100: '#ccfbf1',
    200: '#99f6e4',
    300: '#5eead4',
    400: '#2dd4bf',
    500: '#14b8a6',
    600: '#0d9488',
    700: '#0f766e',
    800: '#115e59',
    900: '#134e4a',
  },
  chapters: [
    { number: 1, name: 'Apache Supersetとは', file: 'superset-learning-material-01.html' },
    { number: 2, name: '環境構築 — Dockerで動かす', file: 'superset-learning-material-02.html' },
    { number: 3, name: '画面ツアーと基本操作', file: 'superset-learning-material-03.html' },
    { number: 4, name: 'データベースに接続する', file: 'superset-learning-material-04.html' },
    { number: 5, name: 'SQL Lab入門', file: 'superset-learning-material-05.html' },
    { number: 6, name: 'データセットを作る', file: 'superset-learning-material-06.html' },
    { number: 7, name: 'メトリクスと計算列', file: 'superset-learning-material-07.html' },
    { number: 8, name: 'チャートを作る（Explore入門）', file: 'superset-learning-material-08.html' },
    { number: 9, name: 'チャート種別の使い分け', file: 'superset-learning-material-09.html' },
    { number: 10, name: 'ダッシュボードを組み立てる', file: 'superset-learning-material-10.html' },
    { number: 11, name: 'フィルタとインタラクション', file: 'superset-learning-material-11.html' },
    { number: 12, name: 'Jinjaテンプレートで動的SQL', file: 'superset-learning-material-12.html' },
    { number: 13, name: 'ユーザー・ロールと行レベルセキュリティ', file: 'superset-learning-material-13.html' },
    { number: 14, name: '運用の基礎 — キャッシュ・アラート・本番構成', file: 'superset-learning-material-14.html' },
  ],
};
