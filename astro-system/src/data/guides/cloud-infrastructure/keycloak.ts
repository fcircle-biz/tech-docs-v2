import type { TechGuide } from '../types';

// Keycloak 入門学習ガイド（全13章）。技術色 = red（情報セキュリティ／IAM 系）。
// Docker で起動した Keycloak 26 系を前提に、レルム・クライアント・ユーザー・ロールから
// OpenID Connect のログインフロー、アプリ連携、本番運用の基礎までを学ぶ初心者向け教材。
export const keycloak: TechGuide = {
  category: 'cloud-infrastructure',
  slug: 'keycloak',
  techTitle: 'Keycloak学習教材',
  icon: 'fa-key',
  level: '初級',
  categoryLabel: 'クラウド・インフラ',
  totalTime: '約11時間',
  splashStop0: '#ef4444',
  splashStop1: '#06b6d4',
  splashBg: '#090b11',
  primary: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
  },
  chapters: [
    { number: 1, name: 'Keycloakとは何か', file: 'keycloak-learning-material-01.html' },
    { number: 2, name: '認証と認可のきほん', file: 'keycloak-learning-material-02.html' },
    { number: 3, name: 'Keycloakを起動して管理コンソールに入る', file: 'keycloak-learning-material-03.html' },
    { number: 4, name: 'レルム — アプリの世界を分ける', file: 'keycloak-learning-material-04.html' },
    { number: 5, name: 'クライアント登録 — アプリをつなぐ', file: 'keycloak-learning-material-05.html' },
    { number: 6, name: 'ユーザー管理の基本', file: 'keycloak-learning-material-06.html' },
    { number: 7, name: 'ロールとグループで権限を管理する', file: 'keycloak-learning-material-07.html' },
    { number: 8, name: 'ログインを体験する — 認可コードフローとトークン', file: 'keycloak-learning-material-08.html' },
    { number: 9, name: 'アプリをKeycloakで保護する', file: 'keycloak-learning-material-09.html' },
    { number: 10, name: 'セッション・トークン・ログアウトの管理', file: 'keycloak-learning-material-10.html' },
    { number: 11, name: 'ログイン画面のカスタマイズとセキュリティ強化', file: 'keycloak-learning-material-11.html' },
    { number: 12, name: '外部ID連携とユーザーフェデレーション', file: 'keycloak-learning-material-12.html' },
    { number: 13, name: '本番運用に向けて', file: 'keycloak-learning-material-13.html' },
  ],
};
