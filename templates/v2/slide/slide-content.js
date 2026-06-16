/**
 * スライドコンテンツ定義JavaScript
 * 各スライド教材フォルダにコピーして、slidesの定義を変更して使用
 *
 * 【使い方】
 * 1. このファイルを各スライド教材フォルダにコピー
 * 2. slides配列を実際のPDFファイルに合わせて編集
 * 3. HTMLファイルで <script src="slide-content.js"></script> を読み込む
 *
 * 【スライド定義の形式】
 * {
 *     number: 1,              // スライド番号（1から開始）
 *     title: 'タイトル',      // スライドのタイトル
 *     file: 'pdf/xxx.pdf'     // PDFファイルへの相対パス
 * }
 */

// スライド定義
const slides = [
    // ========================================
    // 以下をPDFファイルに合わせて変更してください
    // ========================================
    { number: 1, title: '第1章 タイトル', file: 'pdf/slide-01.pdf' },
    { number: 2, title: '第2章 タイトル', file: 'pdf/slide-02.pdf' },
    { number: 3, title: '第3章 タイトル', file: 'pdf/slide-03.pdf' },
    // 必要に応じてスライドを追加...
];
