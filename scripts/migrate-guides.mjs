/**
 * docs_backup/ の静的 HTML 学習ガイドを Astro 構成へ移行するスクリプト。
 *
 * 各章 HTML から「本文（max-w-5xl ラッパー直下の内容）」を抜き出して
 * src/chapters/<tech>/<file>.html に保存し、共通レイアウトを使う
 * src/pages/guide/development-processes/<tech>/<file>.astro を生成する。
 *
 * head / ヘッダー / サイドバー / フッター / スクリプトは
 * src/layouts/GuideChapterLayout.astro に集約済みのため本文のみ移送する。
 *
 * 実行: node scripts/migrate-guides.mjs
 */
import { readFileSync, writeFileSync, mkdirSync, readdirSync } from 'node:fs';
import { dirname, basename, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SRC_BASE = join(ROOT, 'docs_backup/guide/development-processes');
const WRAPPER = 'max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-6';

const techs = ['claude-code', 'codex'];
let count = 0;

for (const tech of techs) {
  const srcDir = join(SRC_BASE, tech);
  const files = readdirSync(srcDir).filter((f) => f.endsWith('.html')).sort();

  const fragDir = join(ROOT, 'src/chapters', tech);
  const pageDir = join(ROOT, 'src/pages/guide/development-processes', tech);
  mkdirSync(fragDir, { recursive: true });
  mkdirSync(pageDir, { recursive: true });

  for (const file of files) {
    const html = readFileSync(join(srcDir, file), 'utf8');
    const lines = html.split('\n');

    // 本文ラッパーの開始行 と </main> を特定
    const openIdx = lines.findIndex((l) => l.includes(WRAPPER));
    const mainIdx = lines.findIndex((l) => l.includes('</main>'));
    if (openIdx === -1 || mainIdx === -1 || mainIdx <= openIdx) {
      throw new Error(`[${file}] 本文境界を特定できません (open=${openIdx}, main=${mainIdx})`);
    }

    // ラッパー直下の内容 = (open+1) 〜 (main-1)。末尾の閉じ </div> は除去。
    const inner = lines.slice(openIdx + 1, mainIdx);
    const last = inner[inner.length - 1];
    if (last.trim() !== '</div>') {
      throw new Error(`[${file}] 末尾がラッパー閉じ </div> ではありません: ${JSON.stringify(last)}`);
    }
    const fragment = inner.slice(0, -1).join('\n').replace(/^\n+/, '').replace(/\s+$/, '') + '\n';

    // <title> を抽出
    const titleMatch = html.match(/<title>([^<]*)<\/title>/);
    if (!titleMatch) throw new Error(`[${file}] <title> が見つかりません`);
    const title = titleMatch[1];

    // 章番号 = ファイル名末尾の 2 桁
    const numMatch = file.match(/-(\d{2})\.html$/);
    if (!numMatch) throw new Error(`[${file}] 章番号を特定できません`);
    const chapterNumber = parseInt(numMatch[1], 10);

    const base = basename(file, '.html');

    // 本文断片を保存
    writeFileSync(join(fragDir, `${base}.html`), fragment);

    // ページ生成
    const page = `---
import GuideChapterLayout from '../../../../layouts/GuideChapterLayout.astro';
import { guides } from '../../../../data/guides';
import body from '../../../../chapters/${tech}/${base}.html?raw';

const tech = guides['${tech}'];
const pageTitle = ${JSON.stringify(title)};
---
<GuideChapterLayout tech={tech} pageTitle={pageTitle} currentChapter={${chapterNumber}}>
  <Fragment set:html={body} />
</GuideChapterLayout>
`;
    writeFileSync(join(pageDir, `${base}.astro`), page);
    count++;
  }
  console.log(`[${tech}] ${files.length} 章を移行`);
}

console.log(`完了: ${count} ページを生成`);
