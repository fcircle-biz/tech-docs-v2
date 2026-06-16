// @ts-check
import { defineConfig } from 'astro/config';

// Astro 設定
// - 公開 URL: https://fcircle-biz.github.io/tech-docs-v2/（GitHub Pages, base path 付き）。
// - GitHub Pages の公開ディレクトリが docs/ のため、ビルド出力先を docs/ にする。
//   旧来の静的 HTML 一式は docs_backup/ に退避済み。
export default defineConfig({
  site: 'https://fcircle-biz.github.io',
  base: '/tech-docs-v2/',
  srcDir: './src',
  publicDir: './public',
  outDir: './docs',
  // 旧来の静的 HTML と同じ URL（*.html）を維持するためファイル形式で出力する。
  build: { format: 'file' },
});
