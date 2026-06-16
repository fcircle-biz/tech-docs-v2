/**
 * サイドバーコンテンツ生成JavaScript
 * 各章のHTMLから共通のサイドバー部分を動的に生成
 *
 * 【使い方】
 * 1. このファイルを各技術フォルダにコピー
 * 2. chapters配列を実際の章構成に合わせて編集
 * 3. HTMLファイルで <script src="sidebar-content.js"></script> を読み込む
 */

(function() {
    'use strict';

    // ========================================
    // 章の定義データ（UML入門ガイド全14章）
    // ========================================
    const chapters = [
        { number: 1, title: '第1章: UMLとは何か', file: 'uml-learning-material-01.html' },
        { number: 2, title: '第2章: UML作図ツールの基本操作', file: 'uml-learning-material-02.html' },
        { number: 3, title: '第3章: ユースケース図入門', file: 'uml-learning-material-03.html' },
        { number: 4, title: '第4章: クラス図の基礎', file: 'uml-learning-material-04.html' },
        { number: 5, title: '第5章: クラス図の詳細', file: 'uml-learning-material-05.html' },
        { number: 6, title: '第6章: シーケンス図入門', file: 'uml-learning-material-06.html' },
        { number: 7, title: '第7章: シーケンス図の応用', file: 'uml-learning-material-07.html' },
        { number: 8, title: '第8章: アクティビティ図', file: 'uml-learning-material-08.html' },
        { number: 9, title: '第9章: ステートマシン図', file: 'uml-learning-material-09.html' },
        { number: 10, title: '第10章: コンポーネント図・パッケージ図', file: 'uml-learning-material-10.html' },
        { number: 11, title: '第11章: デプロイメント図', file: 'uml-learning-material-11.html' },
        { number: 12, title: '第12章: 実践演習', file: 'uml-learning-material-12.html' },
        { number: 13, title: '第13章: チーム開発でのUML活用', file: 'uml-learning-material-13.html' },
        { number: 14, title: '第14章: UML総まとめと次のステップ', file: 'uml-learning-material-14.html' }
    ];

    // 現在のページのファイル名を取得
    const currentFile = window.location.pathname.split('/').pop();

    // 現在の章番号を特定
    const currentChapter = chapters.find(ch => ch.file === currentFile);
    const currentChapterNumber = currentChapter ? currentChapter.number : 1;

    // 進捗率を計算
    const progressPercentage = Math.round((currentChapterNumber / chapters.length) * 100);

    // サイドバーHTML生成関数
    function createSidebar() {
        // 章リストのHTMLを生成
        const chapterListHTML = chapters.map(chapter => {
            const isActive = chapter.number === currentChapterNumber;

            if (isActive) {
                // アクティブな章
                return `
                        <li>
                            <a href="${chapter.file}"
                               class="flex items-center gap-3 px-3 py-2.5 rounded-lg
                                      bg-primary-100 text-primary-700 font-medium">
                                <span class="flex-shrink-0 w-6 h-6 flex items-center justify-center
                                             bg-primary-500 text-white text-xs rounded-full">${chapter.number}</span>
                                <span class="truncate">${chapter.title.replace(/^第\d+章[：:]\s*/, '')}</span>
                            </a>
                        </li>`;
            } else {
                // 通常の章
                return `
                        <li>
                            <a href="${chapter.file}"
                               class="flex items-center gap-3 px-3 py-2.5 rounded-lg
                                      text-slate-600 hover:bg-slate-100 transition-colors">
                                <span class="flex-shrink-0 w-6 h-6 flex items-center justify-center
                                             bg-slate-200 text-slate-600 text-xs rounded-full">${chapter.number}</span>
                                <span class="truncate">${chapter.title.replace(/^第\d+章[：:]\s*/, '')}</span>
                            </a>
                        </li>`;
            }
        }).join('');

        const sidebarHTML = `
        <!-- サイドバー -->
        <aside id="sidebar" class="fixed lg:sticky top-20 left-0 z-40 w-80 h-[calc(100vh-5rem)]
                                   bg-white border-r border-slate-200 overflow-y-auto flex-shrink-0
                                   transform -translate-x-full sidebar-transition">
            <div class="p-4">
                <!-- 進捗インジケーター -->
                <div class="mb-6 p-4 bg-primary-50 rounded-xl">
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-sm font-medium text-primary-700">学習進捗</span>
                        <span class="text-sm text-primary-600">${currentChapterNumber}/${chapters.length}章</span>
                    </div>
                    <div class="w-full bg-primary-100 rounded-full h-2">
                        <div class="bg-primary-500 h-2 rounded-full transition-all duration-300" style="width: ${progressPercentage}%"></div>
                    </div>
                </div>

                <!-- 章リスト -->
                <nav>
                    <h2 class="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 px-2">
                        学習章
                    </h2>
                    <ul class="space-y-1">
${chapterListHTML}
                    </ul>
                </nav>
            </div>
        </aside>

        `;

        return sidebarHTML;
    }

    // サイドバーをDOMに挿入
    function insertSidebar() {
        // メインレイアウトのdiv要素を取得
        const mainLayout = document.querySelector('.flex.min-h-screen.pt-20');

        if (mainLayout) {
            // サイドバーHTMLを生成して挿入
            mainLayout.insertAdjacentHTML('afterbegin', createSidebar());
        }
    }

    // ページ読み込み時にサイドバーを生成
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', insertSidebar);
    } else {
        insertSidebar();
    }

})();
