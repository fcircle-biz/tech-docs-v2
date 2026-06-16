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
    { number: 1, title: 'Wordの基本操作', file: 'pdf/1_Word入門_Wordの基本操作.pdf' },
    { number: 2, title: '文字入力の基礎', file: 'pdf/2_Word入門_文字入力の基礎.pdf' },
    { number: 3, title: '文字の書式設定', file: 'pdf/3_Word入門_文字の書式設定.pdf' },
    { number: 4, title: '段落とレイアウトの基本', file: 'pdf/4_Word入門_段落とレイアウトの基本.pdf' },
    { number: 5, title: '文書作成の実践', file: 'pdf/5_Word入門_文書作成の実践.pdf' },
    { number: 6, title: '表の作成と編集', file: 'pdf/6_Word入門_表の作成と編集.pdf' },
    { number: 7, title: '画像・図形の挿入', file: 'pdf/7_Word入門_画像・図形の挿入.pdf' },
    { number: 8, title: '便利な機能と仕上げ', file: 'pdf/8_Word入門_便利な機能と仕上げ.pdf' },
    { number: 9, title: '総合演習', file: 'pdf/9_Word入門_総合演習.pdf' },
];
