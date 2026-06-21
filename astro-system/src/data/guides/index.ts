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
import { claudeCode } from './development-processes/claude-code';
import { codex } from './development-processes/codex';
import { java } from './programming-languages/java-ecosystem/java';
import { jdbc } from './programming-languages/java-ecosystem/jdbc';
import { junit } from './programming-languages/java-ecosystem/junit';
import { javascript } from './programming-languages/javascript-ecosystem/javascript';

const all: TechGuide[] = [claudeCode, codex, java, jdbc, junit, javascript];

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
