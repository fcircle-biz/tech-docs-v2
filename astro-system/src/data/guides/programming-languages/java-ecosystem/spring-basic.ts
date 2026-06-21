import type { TechGuide } from '../../types';

// Spring基礎 学習教材（全8章）。技術色 = エメラルド（Spring ブランド寄り）。
// Spring学習教材シリーズ（1. Spring基礎 / 2. Spring Data JDBC / 3. Spring MVC）の第1弾。
// DI・Bean・アノテーション・AOP という Spring の中心概念を初心者向けに扱う。
export const springBasic: TechGuide = {
  category: 'programming-languages/java-ecosystem',
  slug: 'spring-basic',
  techTitle: 'Spring基礎学習教材',
  icon: 'fa-leaf',
  level: '初級',
  categoryLabel: 'プログラミング言語',
  totalTime: '約8時間',
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
    { number: 1, name: 'Springとは', file: 'spring-basic-learning-material-01.html' },
    { number: 2, name: 'Spring Bootプロジェクトの基本構成', file: 'spring-basic-learning-material-02.html' },
    { number: 3, name: 'DIとは', file: 'spring-basic-learning-material-03.html' },
    { number: 4, name: 'Spring Beanとは', file: 'spring-basic-learning-material-04.html' },
    { number: 5, name: 'DIを使ったクラス分割', file: 'spring-basic-learning-material-05.html' },
    { number: 6, name: '設定ファイルとプロファイルの基本', file: 'spring-basic-learning-material-06.html' },
    { number: 7, name: 'AOPとは', file: 'spring-basic-learning-material-07.html' },
    { number: 8, name: '総合演習：DIとAOPを使った簡単な処理', file: 'spring-basic-learning-material-08.html' },
  ],
};
