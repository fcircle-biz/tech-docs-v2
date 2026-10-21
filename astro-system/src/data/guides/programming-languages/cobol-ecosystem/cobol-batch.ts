import type { TechGuide } from '../../types';

// COBOLバッチ処理入門学習ガイド（全8章）。COBOL・SAMファイル・JCL・ジョブネットを日次売上集計バッチで学ぶ新人研修。
// 技術色 = インディゴ（COBOL / メインフレームの配色。color-themes.md 参照）。
export const cobolBatch: TechGuide = {
  category: 'programming-languages/cobol-ecosystem',
  slug: 'cobol-batch',
  techTitle: 'COBOLバッチ処理学習教材',
  icon: 'fa-gears',
  level: '初級',
  totalTime: '約24時間',
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
    { number: 1, name: 'バッチ処理の全体像 - データを読み、処理し、実行し、つなげる', file: 'cobol-batch-learning-material-01.html' },
    { number: 2, name: 'SAMファイル - レコードと固定長・可変長を読み解く', file: 'cobol-batch-learning-material-02.html' },
    { number: 3, name: 'COBOLの基礎 - DIVISION・PIC・MOVE・IF・PERFORM', file: 'cobol-batch-learning-material-03.html' },
    { number: 4, name: 'COBOLファイル処理 - 順次ファイルの入出力とFILE STATUS', file: 'cobol-batch-learning-material-04.html' },
    { number: 5, name: 'JCLの基礎 - JOB・EXEC・DDでジョブを定義する', file: 'cobol-batch-learning-material-05.html' },
    { number: 6, name: 'COBOLとJCLの連携 - ASSIGNとDD名・実行結果の確認', file: 'cobol-batch-learning-material-06.html' },
    { number: 7, name: 'ジョブネット - 先行・後続関係と異常時の再実行を設計する', file: 'cobol-batch-learning-material-07.html' },
    { number: 8, name: '総合ハンズオン - 日次売上集計バッチを設計・実行・テストする', file: 'cobol-batch-learning-material-08.html' },
  ],
};
