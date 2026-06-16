#!/usr/bin/env node
/**
 * Markdown to PDF Converter
 *
 * MarkdownファイルをPuppeteerを使用してPDFに変換するスクリプト。
 * Mermaid図、シンタックスハイライト、日本語フォントをサポート。
 *
 * Usage: node scripts/md-to-pdf.mjs <markdown-file> [output-path]
 */

import puppeteer from 'puppeteer';
import { marked } from 'marked';
import fs from 'fs';
import path from 'path';

const inputPath = process.argv[2];
const customOutputPath = process.argv[3];

if (!inputPath) {
  console.error('Usage: node scripts/md-to-pdf.mjs <markdown-file> [output-path]');
  console.error('');
  console.error('Examples:');
  console.error('  node scripts/md-to-pdf.mjs docs/README.md');
  console.error('  node scripts/md-to-pdf.mjs docs/README.md output/document.pdf');
  process.exit(1);
}

const absolutePath = path.resolve(inputPath);
const outputPath = customOutputPath
  ? path.resolve(customOutputPath)
  : absolutePath.replace(/\.md$/, '.pdf');

// 出力ディレクトリが存在しない場合は作成
const outputDir = path.dirname(outputPath);
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

console.log(`Converting: ${absolutePath}`);
console.log(`Output: ${outputPath}`);

const markdown = fs.readFileSync(absolutePath, 'utf-8');

// ファイル名からタイトルを抽出（最初の # 見出し、またはファイル名）
const titleMatch = markdown.match(/^#\s+(.+)$/m);
const title = titleMatch ? titleMatch[1] : path.basename(inputPath, '.md');

// Mermaidコードブロックを一時的にプレースホルダーに置き換え
const mermaidBlocks = [];
const markdownWithPlaceholders = markdown.replace(
  /```\s*mermaid\n([\s\S]*?)```/g,
  (match, code) => {
    const index = mermaidBlocks.length;
    mermaidBlocks.push(code);
    return `<!--MERMAID_PLACEHOLDER_${index}-->`;
  }
);

// Markdownを変換
let htmlContent = await marked(markdownWithPlaceholders);

// プレースホルダーをMermaid divに置き換え
mermaidBlocks.forEach((code, index) => {
  htmlContent = htmlContent.replace(
    `<!--MERMAID_PLACEHOLDER_${index}-->`,
    `<div class="mermaid">\n${code}</div>`
  );
});

const html = `
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>${title}</title>
  <script src="https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github.min.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap');

    body {
      font-family: 'Noto Sans JP', 'Hiragino Sans', 'Meiryo', sans-serif;
      max-width: 900px;
      margin: 0 auto;
      padding: 40px 20px;
      line-height: 1.8;
      color: #333;
      font-size: 14px;
    }
    h1 {
      font-size: 1.8em;
      border-bottom: 2px solid #333;
      padding-bottom: 10px;
      margin-top: 0;
    }
    h2 {
      font-size: 1.4em;
      border-bottom: 1px solid #ccc;
      padding-bottom: 8px;
      margin-top: 2em;
    }
    h3 {
      font-size: 1.2em;
      margin-top: 1.5em;
    }
    h4 {
      font-size: 1.1em;
      margin-top: 1.2em;
    }
    table {
      border-collapse: collapse;
      width: 100%;
      margin: 1em 0;
      font-size: 0.9em;
    }
    th, td {
      border: 1px solid #ddd;
      padding: 8px 12px;
      text-align: left;
    }
    th {
      background-color: #f5f5f5;
      font-weight: 500;
    }
    tr:nth-child(even) {
      background-color: #fafafa;
    }
    code {
      background-color: #f4f4f4;
      padding: 2px 6px;
      border-radius: 3px;
      font-size: 0.9em;
      font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
    }
    pre {
      background-color: #f6f8fa;
      padding: 16px;
      border-radius: 6px;
      overflow-x: auto;
      font-size: 0.85em;
      line-height: 1.5;
    }
    pre code {
      background-color: transparent;
      padding: 0;
    }
    .mermaid {
      text-align: center;
      margin: 20px 0;
    }
    .mermaid svg {
      max-width: 100%;
      height: auto;
    }
    strong {
      color: #1a1a1a;
      font-weight: 500;
    }
    blockquote {
      border-left: 4px solid #ddd;
      margin: 1em 0;
      padding: 0.5em 1em;
      color: #666;
      background-color: #f9f9f9;
    }
    ul, ol {
      padding-left: 1.5em;
    }
    li {
      margin: 0.3em 0;
    }
    hr {
      border: none;
      border-top: 1px solid #ddd;
      margin: 2em 0;
    }
    a {
      color: #0366d6;
      text-decoration: none;
    }
    /* 改ページ制御 */
    h1, h2 {
      page-break-after: avoid;
    }
    pre, table, .mermaid {
      page-break-inside: avoid;
    }
  </style>
</head>
<body>
  ${htmlContent}
  <script>
    mermaid.initialize({
      startOnLoad: true,
      theme: 'default',
      securityLevel: 'loose'
    });
    hljs.highlightAll();
  </script>
</body>
</html>
`;

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox']
});

const page = await browser.newPage();
await page.setContent(html, { waitUntil: 'networkidle0' });

// Mermaidレンダリング完了まで待機
if (mermaidBlocks.length > 0) {
  await page.waitForFunction(() => {
    const mermaidDivs = document.querySelectorAll('.mermaid');
    return Array.from(mermaidDivs).every(div => div.querySelector('svg'));
  }, { timeout: 15000 }).catch(() => {
    console.log('Warning: Mermaid rendering timeout');
  });
}

await page.pdf({
  path: outputPath,
  format: 'A4',
  margin: { top: '20mm', right: '15mm', bottom: '20mm', left: '15mm' },
  printBackground: true,
  displayHeaderFooter: false
});

await browser.close();
console.log(`✓ PDF generated: ${outputPath}`);
