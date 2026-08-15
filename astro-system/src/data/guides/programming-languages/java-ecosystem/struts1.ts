import type { TechGuide } from '../../types';

// Struts 1 入門学習ガイド（全8章）。技術色 = インディゴ（Java エコシステム内のレガシーフレームワーク枠）。
// Servlet/JSP 履修済みの学習者を対象に、Struts 1 固有の仕組み（ActionServlet・struts-config.xml・
// Action・ActionForm・Struts タグ）を厚く扱い、最終目標を「既存レガシーシステムを読んで
// 修正箇所を特定できること」に置く。
export const struts1: TechGuide = {
  category: 'programming-languages/java-ecosystem',
  slug: 'struts1',
  techTitle: 'Struts 1学習教材',
  icon: 'fa-sitemap',
  level: '初級',
  categoryLabel: 'プログラミング言語',
  totalTime: '約12時間',
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
    { number: 1, name: 'Struts 1とは何か', file: 'struts1-learning-material-01.html' },
    { number: 2, name: 'Struts 1の入口と設定', file: 'struts1-learning-material-02.html' },
    { number: 3, name: 'Actionを理解する', file: 'struts1-learning-material-03.html' },
    { number: 4, name: 'ActionFormを理解する', file: 'struts1-learning-material-04.html' },
    { number: 5, name: 'JSPとStrutsタグ', file: 'struts1-learning-material-05.html' },
    { number: 6, name: 'DBと連携する', file: 'struts1-learning-material-06.html' },
    { number: 7, name: 'CRUDを作る', file: 'struts1-learning-material-07.html' },
    { number: 8, name: '既存Struts 1システムの読み方', file: 'struts1-learning-material-08.html' },
  ],
};
