// @ts-check
import { defineConfig } from 'astro/config';

// Astro 設定
// - 公開 URL: https://fcircle-biz.github.io/tech-docs-v2/（GitHub Pages, base path 付き）。
// - 本 Astro プロジェクトは astro-system/ 配下。GitHub Pages の公開ディレクトリは
//   リポジトリ直下の docs/（Pages はブランチ配信だと root か /docs のみ配信可能）のため、
//   ビルド出力先を 1 階層上の ../docs にする。
//   旧来の静的 HTML 一式（旧 docs_backup/）は削除済み。必要時は git 履歴を参照する。
export default defineConfig({
  site: 'https://fcircle-biz.github.io',
  base: '/tech-docs-v2/',
  srcDir: './src',
  publicDir: './public',
  outDir: '../docs',
  // 旧来の静的 HTML と同じ URL（*.html）を維持するためファイル形式で出力する。
  build: { format: 'file' },
});
