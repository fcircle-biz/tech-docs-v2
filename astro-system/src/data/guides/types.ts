// 学習ガイドの型定義。技術別データファイル（development-processes/*.ts 等）が
// この型に従い、src/data/guides/index.ts が分類→技術のレジストリに集約する。

export interface Chapter {
  /** 章番号（1 始まり） */
  number: number;
  /** 章名（例: "Claude Codeとは"）。サイドバー表示と <title> 生成に使用 */
  name: string;
  /** 同一フォルダ内の相対リンク先ファイル名（例: "claude-code-learning-material-01.html"） */
  file: string;
}

export interface TechGuide {
  /**
   * 分類パス（例: "database"、"ai/ai-coding"）。src/data/categories.ts に登録済みのキーだけを使う。
   * ヘッダー等の分類ラベルはここから導出する（categoryLabelOf）。
   */
  category: string;
  /** 技術フォルダ名／識別子（例: "claude-code"） */
  slug: string;
  /** ヘッダーに表示する教材名（例: "Claude Code学習教材"） */
  techTitle: string;
  /** ヘッダーアイコン（Font Awesome クラス） */
  icon: string;
  /**
   * アイコンのスタイルプレフィックス（Font Awesome）。
   * ブランドアイコン（fa-js・fa-github 等）は 'fab' を指定する。
   * 未指定時は 'fas'（ソリッド）にフォールバックする。
   */
  iconStyle?: string;
  /** 難易度バッジ */
  level: string;
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
