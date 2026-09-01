// 学習ガイドのレジストリ。
// 新しいガイドを追加する手順（テンプレートのコピーやプレースホルダー置換は不要）:
//   1. src/data/guides/<category>/<slug>.ts に TechGuide を定義（このファイルで import 登録）。
//      技術色は primary パレット(50-900) として持つ（旧 {{PRIMARY_*}} 置換は廃止。
//      レイアウトが primary から CSS 変数を導出しインライン注入する）。章定義は chapters[]
//      に持つ（旧 sidebar-content.js は廃止。サイドバーはレイアウトがサーバーレンダリング）。
//   2. src/chapters/<category>/<slug>/*.html に各章の「本文断片」を置く（head/ヘッダー/
//      サイドバー/フッター/スクリプトはレイアウトが供給。断片は本文のみ）。
//   3. （任意）public/guide/<category>/<slug>/README.md にガイド概要を置く（docs/ へパススルー）。
//   4. src/pages/guide/[...chapter].astro が断片を glob して全章ページを自動生成する（個別ファイル不要）。
//   <category> は分類パス（development-processes / programming-languages/python-ecosystem 等、複数セグメント可）。
import type { TechGuide } from './types';

// 開発手法・プロセス
import { claudeCode } from './development-processes/claude-code';
import { claudeCodeSkills } from './development-processes/claude-code-skills';
import { codex } from './development-processes/codex';
import { gitGithub } from './development-processes/git-github';

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

// プログラミング言語 — .NET エコシステム
import { vbnet } from './programming-languages/dotnet-ecosystem/vbnet';

// Web技術
import { html } from './web-technologies/html';
import { css } from './web-technologies/css';
import { markdown } from './web-technologies/markdown';

// データ・AI — 生成AI
import { claude } from './data-ai-category/generative-ai/claude';

// データ・AI — データベース
import { sqlserver } from './data-ai-category/database/sqlserver';
import { sql } from './data-ai-category/database/sql';
import { oracle } from './data-ai-category/database/oracle';

// クラウド・インフラ
import { docker } from './cloud-infrastructure/docker';

// ビジネスSaaS
import { powerBi } from './business-saas/power-bi';
import { vba } from './business-saas/vba';

// 業務ドメイン知識
import { businessKnowledgeBasics } from './business-domain-knowledge/business-knowledge-basics';

// 一覧の並び順 ＝ ランディングページ（src/pages/index.astro）のカード表示順。
// 分類は初出順、分類内はこの配列順で並ぶ。
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
  // プログラミング言語 — .NET エコシステム
  vbnet,
  // Web技術
  html,
  css,
  markdown,
  // 開発手法・プロセス
  claudeCode,
  claudeCodeSkills,
  codex,
  // データ・AI — 生成AI
  claude,
  // データ・AI — データベース
  sqlserver,
  sql,
  oracle,
  // クラウド・インフラ
  docker,
  gitGithub,
  // ビジネスSaaS
  powerBi,
  vba,
  // 業務ドメイン知識
  businessKnowledgeBasics,
];

/** 分類 → 技術slug → TechGuide のレジストリ */
export const guideRegistry: Record<string, Record<string, TechGuide>> = {};
for (const g of all) {
  (guideRegistry[g.category] ??= {})[g.slug] = g;
}

/** 指定章の <title>（旧 HTML と同形式: "<教材名> 第N章 - <章名>"） */
export function pageTitleOf(tech: TechGuide, chapterNumber: number): string {
  const ch = tech.chapters.find((c) => c.number === chapterNumber);
  return `${tech.techTitle} 第${chapterNumber}章 - ${ch?.name ?? ''}`;
}

export type { TechGuide, Chapter } from './types';
