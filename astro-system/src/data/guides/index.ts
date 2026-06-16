// 学習ガイドのレジストリ。
// 新しいガイドを追加する手順:
//   1. src/data/guides/<category>/<slug>.ts に TechGuide を定義（このファイルでimport登録）
//   2. src/chapters/<category>/<slug>/*.html に各章の本文断片を置く
//   3. src/pages/guide/[...chapter].astro が自動で全章ページを生成する（個別ファイル不要）
import type { TechGuide } from './types';
import { claudeCode } from './development-processes/claude-code';
import { codex } from './development-processes/codex';

const all: TechGuide[] = [claudeCode, codex];

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
