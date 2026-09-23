// 分類マスタ。サイト上の分類体系（キー・表示名・アイコン・並び順）の唯一の定義。
// - TechGuide.category（分類パス）は「<分類キー>」または「<分類キー>/<サブグループキー>」の形で、
//   ここに登録済みのキーだけを使える（未登録はビルドエラー。src/data/guides/index.ts で検証）。
// - ランディングページのセクション見出し・ガイドのヘッダーに出す分類ラベルは、ここから導出する（手書きしない）。
// - 振り分けの判断基準と配置例は .claude/skills/docs-guide-creator/references/taxonomy-paths.md、
//   技術領域ごとの配置先は tech-knowledge-map.md を参照。

export interface Subgroup {
  /** 分類パスの第2セグメント（例: 'ai-coding'） */
  key: string;
  /** 表示名（例: 'AIコーディング'） */
  label: string;
}

export interface Category {
  /** 分類パスの第1セグメント（例: 'ai'） */
  key: string;
  /** 表示名（例: 'AI'） */
  label: string;
  /** Font Awesome アイコン（solid） */
  icon: string;
  /** 第2階層（任意）。配列順 ＝ ランディングページの表示順 */
  subgroups?: Subgroup[];
}

/** 配列順 ＝ ランディングページのセクション表示順。ガイド0件の分類は表示されない */
export const categories: Category[] = [
  {
    key: 'programming-languages',
    label: 'プログラミング言語',
    icon: 'fa-code',
    subgroups: [
      { key: 'java-ecosystem', label: 'Java エコシステム' },
      { key: 'javascript-ecosystem', label: 'JavaScript エコシステム' },
      { key: 'python-ecosystem', label: 'Python エコシステム' },
      { key: 'dotnet-ecosystem', label: '.NET エコシステム' },
    ],
  },
  { key: 'web-technologies', label: 'Web技術', icon: 'fa-globe' },
  { key: 'database', label: 'データベース', icon: 'fa-database' },
  { key: 'data-analytics', label: 'データ分析・BI', icon: 'fa-chart-column' },
  {
    key: 'ai',
    label: 'AI',
    icon: 'fa-brain',
    subgroups: [
      { key: 'generative-ai', label: '生成AI活用' },
      { key: 'ai-coding', label: 'AIコーディング' },
      { key: 'ai-apps', label: 'AIアプリ開発' },
    ],
  },
  { key: 'development-processes', label: '開発プロセス・ツール', icon: 'fa-diagram-project' },
  { key: 'design-modeling', label: '設計・モデリング', icon: 'fa-compass-drafting' },
  { key: 'cloud-infrastructure', label: 'クラウド・インフラ', icon: 'fa-cloud' },
  { key: 'security', label: 'セキュリティ', icon: 'fa-shield-halved' },
  { key: 'business-apps', label: '業務アプリ・自動化', icon: 'fa-briefcase' },
  { key: 'business-domain-knowledge', label: '業務ドメイン知識', icon: 'fa-building-columns' },
  { key: 'certification', label: '資格', icon: 'fa-certificate' },
];

/** 分類パスをマスタ上の分類・サブグループに解決する。未登録・3階層以上はエラー */
export function resolveCategory(path: string): { category: Category; subgroup?: Subgroup } {
  const [top, sub, ...rest] = path.split('/');
  const category = categories.find((c) => c.key === top);
  if (!category) {
    throw new Error(`未登録の分類です: ${path}（src/data/categories.ts に登録してください）`);
  }
  if (rest.length > 0) {
    throw new Error(`分類パスは2階層までです: ${path}`);
  }
  if (sub === undefined) return { category };
  const subgroup = category.subgroups?.find((s) => s.key === sub);
  if (!subgroup) {
    throw new Error(`未登録のサブグループです: ${path}（src/data/categories.ts に登録してください）`);
  }
  return { category, subgroup };
}

/** ヘッダー・カードに出す分類ラベル（例: 'AI / AIコーディング'） */
export function categoryLabelOf(path: string): string {
  const { category, subgroup } = resolveCategory(path);
  return subgroup ? `${category.label} / ${subgroup.label}` : category.label;
}
