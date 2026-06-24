import type { TechGuide } from '../types';

// Git/GitHub 入門学習ガイド（全7章）。技術色 = スレート（Git/GitHub 標準色）。
export const gitGithub: TechGuide = {
  category: 'development-processes',
  slug: 'git-github',
  techTitle: 'Git/GitHub学習教材',
  icon: 'fa-github',
  iconStyle: 'fab',
  level: '初級',
  categoryLabel: '開発手法・プロセス',
  totalTime: '約6時間',
  splashStop0: '#64748b',
  splashStop1: '#06b6d4',
  splashBg: '#090b11',
  primary: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
  },
  chapters: [
    { number: 1, name: 'Git/GitHubで何ができるのか', file: 'git-github-learning-material-01.html' },
    { number: 2, name: '環境構築とGitHubの準備', file: 'git-github-learning-material-02.html' },
    { number: 3, name: 'Gitの基本操作：変更を記録する', file: 'git-github-learning-material-03.html' },
    { number: 4, name: 'GitHubとつなぐ：push / clone / pull', file: 'git-github-learning-material-04.html' },
    { number: 5, name: 'ブランチを使って作業する', file: 'git-github-learning-material-05.html' },
    { number: 6, name: 'Pull Requestで変更を取り込む', file: 'git-github-learning-material-06.html' },
    { number: 7, name: 'よくあるトラブルと最低限の対処', file: 'git-github-learning-material-07.html' },
  ],
};
