// 学習ガイド（development-processes 配下）の技術別メタデータ。
// 旧来の静的 HTML（docs_backup/）から移行。HTML 共通シェルは
// src/layouts/GuideChapterLayout.astro が本データを参照して描画する。

export interface Chapter {
  number: number;
  /** サイドバー表示用の章タイトル（例: "第1章: Claude Codeとは"） */
  title: string;
  /** 同一フォルダ内の相対リンク先ファイル名 */
  file: string;
}

export interface TechGuide {
  /** フォルダ名／識別子（例: "claude-code"） */
  slug: string;
  /** ヘッダーに表示する教材名（例: "Claude Code学習教材"） */
  techTitle: string;
  /** ヘッダーアイコン（Font Awesome クラス） */
  icon: string;
  /** 難易度バッジ */
  level: string;
  /** 分類ラベル */
  category: string;
  /** 所要時間ラベル */
  totalTime: string;
  /** スプラッシュ SVG グラデーションの開始色（技術色） */
  splashStop0: string;
  /** スプラッシュ SVG グラデーションの終了色 */
  splashStop1: string;
  /** スプラッシュ背景色 */
  splashBg: string;
  /** Tailwind primary パレット（50〜900） */
  primary: Record<string, string>;
  /** 章一覧 */
  chapters: Chapter[];
}

export const guides: Record<string, TechGuide> = {
  'claude-code': {
    slug: 'claude-code',
    techTitle: 'Claude Code学習教材',
    icon: 'fa-robot',
    level: '初級',
    category: '開発手法・プロセス',
    totalTime: '約16時間',
    splashStop0: '#a855f7',
    splashStop1: '#06b6d4',
    splashBg: '#090b11',
    primary: {
      50: '#faf5ff',
      100: '#f3e8ff',
      200: '#e9d5ff',
      300: '#d8b4fe',
      400: '#c084fc',
      500: '#a855f7',
      600: '#9333ea',
      700: '#7e22ce',
      800: '#6b21a8',
      900: '#581c87',
    },
    chapters: [
      { number: 1, title: '第1章: Claude Codeとは', file: 'claude-code-learning-material-01.html' },
      { number: 2, title: '第2章: AI支援開発の基礎知識', file: 'claude-code-learning-material-02.html' },
      { number: 3, title: '第3章: インストールと初期設定', file: 'claude-code-learning-material-03.html' },
      { number: 4, title: '第4章: 基本操作と最初のセッション', file: 'claude-code-learning-material-04.html' },
      { number: 5, title: '第5章: ファイルの読み書きとコード編集', file: 'claude-code-learning-material-05.html' },
      { number: 6, title: '第6章: コードベースの探索と理解', file: 'claude-code-learning-material-06.html' },
      { number: 7, title: '第7章: スラッシュコマンドと便利機能', file: 'claude-code-learning-material-07.html' },
      { number: 8, title: '第8章: CLAUDE.mdとメモリ・コンテキスト管理', file: 'claude-code-learning-material-08.html' },
      { number: 9, title: '第9章: Git・GitHub連携', file: 'claude-code-learning-material-09.html' },
      { number: 10, title: '第10章: 権限と設定', file: 'claude-code-learning-material-10.html' },
      { number: 11, title: '第11章: MCPによる外部ツール連携', file: 'claude-code-learning-material-11.html' },
      { number: 12, title: '第12章: サブエージェントと自動化', file: 'claude-code-learning-material-12.html' },
      { number: 13, title: '第13章: 実践ワークフローとベストプラクティス', file: 'claude-code-learning-material-13.html' },
      { number: 14, title: '第14章: トラブルシューティングと次のステップ', file: 'claude-code-learning-material-14.html' },
    ],
  },
  codex: {
    slug: 'codex',
    techTitle: 'Codex学習教材',
    icon: 'fa-robot',
    level: '初級',
    category: '開発手法・プロセス',
    totalTime: '約16時間',
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
      { number: 1, title: '第1章: Codexとは', file: 'codex-learning-material-01.html' },
      { number: 2, title: '第2章: AI支援開発の基礎知識', file: 'codex-learning-material-02.html' },
      { number: 3, title: '第3章: インストールと初期設定', file: 'codex-learning-material-03.html' },
      { number: 4, title: '第4章: 基本操作と最初のセッション', file: 'codex-learning-material-04.html' },
      { number: 5, title: '第5章: ファイルの読み書きとコード編集', file: 'codex-learning-material-05.html' },
      { number: 6, title: '第6章: コードベースの探索と理解', file: 'codex-learning-material-06.html' },
      { number: 7, title: '第7章: 承認モードとサンドボックス', file: 'codex-learning-material-07.html' },
      { number: 8, title: '第8章: AGENTS.mdとメモリ・コンテキスト管理', file: 'codex-learning-material-08.html' },
      { number: 9, title: '第9章: 設定ファイル（config.toml）とプロファイル', file: 'codex-learning-material-09.html' },
      { number: 10, title: '第10章: Git・GitHub連携', file: 'codex-learning-material-10.html' },
      { number: 11, title: '第11章: MCPによる外部ツール連携', file: 'codex-learning-material-11.html' },
      { number: 12, title: '第12章: 非対話実行と自動化（codex exec）', file: 'codex-learning-material-12.html' },
      { number: 13, title: '第13章: 実践ワークフローとベストプラクティス', file: 'codex-learning-material-13.html' },
      { number: 14, title: '第14章: トラブルシューティングと次のステップ', file: 'codex-learning-material-14.html' },
    ],
  },
};
