import type { TechGuide } from '../types';

// Docker 入門学習ガイド（全8章）。技術色 = sky（Docker ブランド寄りの水色）。
// Rancher Desktop を前提に、Nginx と HTML を題材としてコンテナの基礎を学ぶ初心者向け教材。
export const docker: TechGuide = {
  category: 'cloud-infrastructure',
  slug: 'docker',
  techTitle: 'Docker学習教材',
  icon: 'fa-cube',
  level: '初級',
  categoryLabel: 'クラウド・インフラ',
  totalTime: '約6時間',
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
    { number: 1, name: 'Dockerとは何か', file: 'docker-learning-material-01.html' },
    { number: 2, name: 'Rancher Desktopで環境を準備する', file: 'docker-learning-material-02.html' },
    { number: 3, name: 'はじめてのコンテナと基本コマンド', file: 'docker-learning-material-03.html' },
    { number: 4, name: 'NginxでWebサーバーを動かす', file: 'docker-learning-material-04.html' },
    { number: 5, name: 'Dockerfileでイメージ化する', file: 'docker-learning-material-05.html' },
    { number: 6, name: 'バインドマウントとボリューム', file: 'docker-learning-material-06.html' },
    { number: 7, name: 'Docker Composeで起動をまとめる', file: 'docker-learning-material-07.html' },
    { number: 8, name: 'よくあるエラーと確認手順', file: 'docker-learning-material-08.html' },
  ],
};
