// 学習ガイドのレジストリ。
// 新しいガイドを追加する手順（テンプレートのコピーやプレースホルダー置換は不要）:
//   1. src/data/guides/<category>/<slug>.ts に TechGuide を定義（このファイルで import 登録）。
//      技術色は primary パレット(50-900) として持つ（旧 {{PRIMARY_*}} 置換は廃止。
//      レイアウトが primary から CSS 変数を導出しインライン注入する）。章定義は chapters[]
//      に持つ（旧 sidebar-content.js は廃止。サイドバーはレイアウトがサーバーレンダリング）。
//   2. src/chapters/<category>/<slug>/*.html に各章の「本文断片」を置く（head/ヘッダー/
//      サイドバー/フッター/スクリプトはレイアウトが供給。断片は本文のみ）。
//      chapters[] に定義した章の断片が1つでも欠けているとビルドエラーになる
//      （存在しない章ページへのリンクを公開しないため。検査は src/pages/guide/[...chapter].astro）。
//   3. （任意）public/guide/<category>/<slug>/README.md にガイド概要を置く（docs/ へパススルー）。
//   4. src/pages/guide/[...chapter].astro が断片を glob して全章ページを自動生成する（個別ファイル不要）。
//   <category> は分類パス（database / ai/ai-coding / programming-languages/java-ecosystem 等、2階層まで）。
//   使える分類・サブグループは src/data/categories.ts（分類マスタ）に登録済みのものだけ。
import type { TechGuide } from './types';
import { resolveCategory } from '../categories';

// プログラミング言語 — Java エコシステム
import { java } from './programming-languages/java-ecosystem/java';
import { jdbc } from './programming-languages/java-ecosystem/jdbc';
import { jsp } from './programming-languages/java-ecosystem/jsp';
import { springBasic } from './programming-languages/java-ecosystem/spring-basic';
import { springDataJdbc } from './programming-languages/java-ecosystem/spring-data-jdbc';
import { springMvc } from './programming-languages/java-ecosystem/spring-mvc';
import { springDataJpa } from './programming-languages/java-ecosystem/spring-data-jpa';
import { junit } from './programming-languages/java-ecosystem/junit';
import { struts1 } from './programming-languages/java-ecosystem/struts1';

// プログラミング言語 — JavaScript エコシステム
import { javascript } from './programming-languages/javascript-ecosystem/javascript';

// プログラミング言語 — Python エコシステム
import { python } from './programming-languages/python-ecosystem/python';

// プログラミング言語 — .NET エコシステム
import { vbnet } from './programming-languages/dotnet-ecosystem/vbnet';

// Web技術
import { html } from './web-technologies/html';
import { css } from './web-technologies/css';
import { markdown } from './web-technologies/markdown';
import { webBasics } from './web-technologies/web-basics';

// データベース
import { sqlserver } from './database/sqlserver';
import { sql } from './database/sql';
import { oracle } from './database/oracle';
import { dbDesign } from './database/db-design';

// データ分析・BI
import { powerBi } from './data-analytics/power-bi';
import { superset } from './data-analytics/superset';

// AI — 生成AI活用
import { claude } from './ai/generative-ai/claude';

// AI — AIコーディング
import { claudeCode } from './ai/ai-coding/claude-code';
import { claudeCodeSkills } from './ai/ai-coding/claude-code-skills';
import { codex } from './ai/ai-coding/codex';

// AI — AIアプリ開発
import { jev } from './ai/ai-apps/jev';

// 開発プロセス・ツール
import { gitGithub } from './development-processes/git-github';

// クラウド・インフラ
import { docker } from './cloud-infrastructure/docker';
import { linux } from './cloud-infrastructure/linux';

// セキュリティ
import { keycloak } from './security/keycloak';

// 業務アプリ・自動化
import { vba } from './business-apps/vba';

// 業務ドメイン知識
import { businessKnowledgeBasics } from './business-domain-knowledge/business-knowledge-basics';

// ランディングページ（src/pages/index.astro）での並び順。
// 分類・サブグループの順序は分類マスタ（src/data/categories.ts）の配列順で決まり、
// 同じ分類（サブグループ）内のカードはこの配列順で並ぶ。
const all: TechGuide[] = [
  // プログラミング言語 — Java エコシステム
  java,
  jdbc,
  jsp,
  springBasic,
  springDataJdbc,
  springMvc,
  springDataJpa,
  junit,
  struts1,
  // プログラミング言語 — JavaScript エコシステム
  javascript,
  // プログラミング言語 — Python エコシステム
  python,
  // プログラミング言語 — .NET エコシステム
  vbnet,
  // Web技術
  html,
  css,
  markdown,
  webBasics,
  // データベース
  sqlserver,
  sql,
  oracle,
  dbDesign,
  // データ分析・BI
  powerBi,
  superset,
  // AI — 生成AI活用
  claude,
  // AI — AIコーディング
  claudeCode,
  claudeCodeSkills,
  codex,
  // AI — AIアプリ開発
  jev,
  // 開発プロセス・ツール
  gitGithub,
  // クラウド・インフラ
  docker,
  linux,
  // セキュリティ
  keycloak,
  // 業務アプリ・自動化
  vba,
  // 業務ドメイン知識
  businessKnowledgeBasics,
];

/** 分類 → 技術slug → TechGuide のレジストリ */
export const guideRegistry: Record<string, Record<string, TechGuide>> = {};
for (const g of all) {
  // 分類マスタに無い分類パスはここでビルドエラーにする（ランディングページ等で黙って崩れないように）。
  resolveCategory(g.category);
  const bySlug = (guideRegistry[g.category] ??= {});
  if (bySlug[g.slug]) throw new Error(`ガイドが重複登録されています: ${g.category}/${g.slug}`);
  bySlug[g.slug] = g;
}

/** 指定章の <title>（旧 HTML と同形式: "<教材名> 第N章 - <章名>"） */
export function pageTitleOf(tech: TechGuide, chapterNumber: number): string {
  const ch = tech.chapters.find((c) => c.number === chapterNumber);
  return `${tech.techTitle} 第${chapterNumber}章 - ${ch?.name ?? ''}`;
}

export type { TechGuide, Chapter } from './types';
