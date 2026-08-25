import type { TechGuide } from '../types';

// 新人SE向け 業務知識入門 学習ガイド（全10章）。技術色 = ティール（業務知識・ドメイン）。
export const businessKnowledgeBasics: TechGuide = {
  category: 'business-domain-knowledge',
  slug: 'business-knowledge-basics',
  techTitle: '業務知識入門学習教材',
  icon: 'fa-building',
  level: '初級',
  categoryLabel: '業務ドメイン知識',
  totalTime: '約8時間',
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
    { number: 1, name: '会社のしくみと業務システム', file: 'business-knowledge-basics-learning-material-01.html' },
    { number: 2, name: '販売業務の流れ', file: 'business-knowledge-basics-learning-material-02.html' },
    { number: 3, name: '購買業務の流れ', file: 'business-knowledge-basics-learning-material-03.html' },
    { number: 4, name: '在庫・物流', file: 'business-knowledge-basics-learning-material-04.html' },
    { number: 5, name: '生産管理', file: 'business-knowledge-basics-learning-material-05.html' },
    { number: 6, name: '会計の基礎', file: 'business-knowledge-basics-learning-material-06.html' },
    { number: 7, name: '決算と財務諸表（B/S・P/L）', file: 'business-knowledge-basics-learning-material-07.html' },
    { number: 8, name: '人事・給与', file: 'business-knowledge-basics-learning-material-08.html' },
    { number: 9, name: '業務システムの基本用語', file: 'business-knowledge-basics-learning-material-09.html' },
    { number: 10, name: '業務の全体像とシステム間連携', file: 'business-knowledge-basics-learning-material-10.html' },
  ],
};
