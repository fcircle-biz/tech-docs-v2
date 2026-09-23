import type { TechGuide } from '../types';

// Linux・コマンドライン入門 学習ガイド（全14章）。技術色 = green（ターミナルの緑）。
// Ubuntu（Windows は WSL2、Mac は Multipass）を前提に、シェル操作からシェルスクリプトまでを学ぶ初心者向け教材。
export const linux: TechGuide = {
  category: 'cloud-infrastructure',
  slug: 'linux',
  techTitle: 'Linux・コマンドライン学習教材',
  icon: 'fa-linux',
  iconStyle: 'fab',
  level: '初級',
  totalTime: '約16時間',
  splashStop0: '#22c55e',
  splashStop1: '#06b6d4',
  splashBg: '#090b11',
  primary: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
  },
  chapters: [
    { number: 1, name: 'Linuxとコマンドラインとは', file: 'linux-learning-material-01.html' },
    { number: 2, name: '学習環境を準備する', file: 'linux-learning-material-02.html' },
    { number: 3, name: 'はじめてのコマンドとシェルの基本', file: 'linux-learning-material-03.html' },
    { number: 4, name: 'ディレクトリ構造とパス', file: 'linux-learning-material-04.html' },
    { number: 5, name: 'ファイルとディレクトリの操作', file: 'linux-learning-material-05.html' },
    { number: 6, name: 'ファイルの中身を見る・編集する', file: 'linux-learning-material-06.html' },
    { number: 7, name: '検索とテキスト処理', file: 'linux-learning-material-07.html' },
    { number: 8, name: 'リダイレクトとパイプ', file: 'linux-learning-material-08.html' },
    { number: 9, name: 'ユーザーとパーミッション', file: 'linux-learning-material-09.html' },
    { number: 10, name: 'プロセスとジョブの管理', file: 'linux-learning-material-10.html' },
    { number: 11, name: 'パッケージ管理と環境変数', file: 'linux-learning-material-11.html' },
    { number: 12, name: 'ネットワークとリモート操作の基本', file: 'linux-learning-material-12.html' },
    { number: 13, name: 'シェルスクリプト入門', file: 'linux-learning-material-13.html' },
    { number: 14, name: '総合演習: ログ集計とバックアップの自動化', file: 'linux-learning-material-14.html' },
  ],
};
