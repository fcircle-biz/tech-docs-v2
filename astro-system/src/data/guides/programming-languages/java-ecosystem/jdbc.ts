import type { TechGuide } from '../../types';

// JDBC 入門学習ガイド（全8章）。技術色 = オレンジ（Java ブランド寄り）。
export const jdbc: TechGuide = {
  category: 'programming-languages/java-ecosystem',
  slug: 'jdbc',
  techTitle: 'JDBC学習教材',
  icon: 'fa-database',
  level: '初級',
  categoryLabel: 'プログラミング言語',
  totalTime: '約7.5時間',
  splashStop0: '#f97316',
  splashStop1: '#06b6d4',
  splashBg: '#090b11',
  primary: {
    50: '#fff7ed',
    100: '#ffedd5',
    200: '#fed7aa',
    300: '#fdba74',
    400: '#fb923c',
    500: '#f97316',
    600: '#ea580c',
    700: '#c2410c',
    800: '#9a3412',
    900: '#7c2d12',
  },
  chapters: [
    { number: 1, name: 'JDBCとは？ データベース接続の基本', file: 'jdbc-learning-material-01.html' },
    { number: 2, name: '開発環境の準備と初めての接続', file: 'jdbc-learning-material-02.html' },
    { number: 3, name: 'データの検索（SELECT文）をマスターする', file: 'jdbc-learning-material-03.html' },
    { number: 4, name: 'データの登録・更新・削除', file: 'jdbc-learning-material-04.html' },
    { number: 5, name: 'PreparedStatementの活用', file: 'jdbc-learning-material-05.html' },
    { number: 6, name: 'トランザクション処理と例外処理', file: 'jdbc-learning-material-06.html' },
    { number: 7, name: '実践的なDAOパターン', file: 'jdbc-learning-material-07.html' },
    { number: 8, name: 'ベストプラクティスとトラブルシューティング', file: 'jdbc-learning-material-08.html' },
  ],
};
