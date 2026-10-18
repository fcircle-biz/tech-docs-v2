import type { TechGuide } from '../types';

// Apache JMeter 入門学習ガイド（全14章）。技術色 = エメラルド（テスト / QA 標準色）。
// JMeter 5.6.3 ＋ JDK 21、練習用サーバーにローカルの go-httpbin（Docker）を使い、
// テスト計画の作成から CLI 実行・HTML レポート分析までを学ぶ初心者向け教材。
export const jmeter: TechGuide = {
  category: 'development-processes',
  slug: 'jmeter',
  techTitle: 'JMeter学習教材',
  icon: 'fa-gauge-high',
  level: '初級',
  totalTime: '約16時間',
  splashStop0: '#10b981',
  splashStop1: '#06b6d4',
  splashBg: '#090b11',
  primary: {
    50: '#ecfdf5',
    100: '#d1fae5',
    200: '#a7f3d0',
    300: '#6ee7b7',
    400: '#34d399',
    500: '#10b981',
    600: '#059669',
    700: '#047857',
    800: '#065f46',
    900: '#064e3b',
  },
  chapters: [
    { number: 1, name: 'JMeterと性能テストの全体像', file: 'jmeter-learning-material-01.html' },
    { number: 2, name: '環境構築：JMeterと練習用サーバー', file: 'jmeter-learning-material-02.html' },
    { number: 3, name: 'テスト計画の構造と要素の種類', file: 'jmeter-learning-material-03.html' },
    { number: 4, name: 'はじめてのHTTPリクエスト', file: 'jmeter-learning-material-04.html' },
    { number: 5, name: 'スレッドグループで負荷を設計する', file: 'jmeter-learning-material-05.html' },
    { number: 6, name: 'タイマーで現実的なアクセスを再現する', file: 'jmeter-learning-material-06.html' },
    { number: 7, name: 'アサーションで応答を検証する', file: 'jmeter-learning-material-07.html' },
    { number: 8, name: '変数とCSVデータでパラメータ化する', file: 'jmeter-learning-material-08.html' },
    { number: 9, name: '相関：レスポンスの値を次のリクエストで使う', file: 'jmeter-learning-material-09.html' },
    { number: 10, name: 'ロジックコントローラでシナリオを組み立てる', file: 'jmeter-learning-material-10.html' },
    { number: 11, name: 'Test Script Recorderで操作を記録する', file: 'jmeter-learning-material-11.html' },
    { number: 12, name: 'CLIモードで負荷テストを実行する', file: 'jmeter-learning-material-12.html' },
    { number: 13, name: 'HTMLレポートで結果を分析する', file: 'jmeter-learning-material-13.html' },
    { number: 14, name: '総合演習：性能テストを計画・実施・報告する', file: 'jmeter-learning-material-14.html' },
  ],
};
