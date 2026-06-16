/**
 * 旧静的 HTML 学習ガイド（docs_backup/）から本文断片を取り込むレガシー移行スクリプト。
 *
 * 各章 HTML の「本文（max-w-5xl ラッパー直下の内容）」のみを抜き出し、
 * src/chapters/<category>/<slug>/<file>.html として保存する。
 * head / ヘッダー / サイドバー / フッター / スクリプトは
 * src/layouts/GuideChapterLayout.astro が、技術メタは src/data/guides/ が担うため、
 * このスクリプトは本文断片の抽出のみを行う。
 *
 * ページ自体は src/pages/guide/[...chapter].astro が断片を glob して動的生成するので、
 * 章ごとの .astro 生成は不要。
 *
 * 実行: node scripts/migrate-guides.mjs
 */
import { readFileSync, writeFileSync, mkdirSync, readdirSync } from 'node:fs';
import { dirname, basename, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SRC_CATEGORY = 'development-processes';
const SRC_BASE = join(ROOT, 'docs_backup/guide', SRC_CATEGORY);
const WRAPPER = 'max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-6';

const techs = readdirSync(SRC_BASE, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name);

let count = 0;
for (const tech of techs) {
  const srcDir = join(SRC_BASE, tech);
  const files = readdirSync(srcDir).filter((f) => f.endsWith('.html')).sort();
  const fragDir = join(ROOT, 'src/chapters', SRC_CATEGORY, tech);
  mkdirSync(fragDir, { recursive: true });

  for (const file of files) {
    const lines = readFileSync(join(srcDir, file), 'utf8').split('\n');
    const openIdx = lines.findIndex((l) => l.includes(WRAPPER));
    const mainIdx = lines.findIndex((l) => l.includes('</main>'));
    if (openIdx === -1 || mainIdx === -1 || mainIdx <= openIdx) {
      throw new Error(`[${file}] 本文境界を特定できません (open=${openIdx}, main=${mainIdx})`);
    }
    // ラッパー直下の内容 = (open+1) 〜 (main-1)。末尾の閉じ </div> は除去。
    const inner = lines.slice(openIdx + 1, mainIdx);
    if (inner[inner.length - 1].trim() !== '</div>') {
      throw new Error(`[${file}] 末尾がラッパー閉じ </div> ではありません`);
    }
    const fragment = inner.slice(0, -1).join('\n').replace(/^\n+/, '').replace(/\s+$/, '') + '\n';
    writeFileSync(join(fragDir, `${basename(file, '.html')}.html`), fragment);
    count++;
  }
  console.log(`[${SRC_CATEGORY}/${tech}] ${files.length} 章の本文を抽出`);
}
console.log(`完了: ${count} 本文断片を生成`);
