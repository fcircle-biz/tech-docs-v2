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
    // TODO: 章の定義データをカスタマイズ
    // ========================================
    const chapters = [
        { number: 1, title: '第1章: Next.jsとは？フレームワークの全体像を理解しよう', file: 'nextjs-learning-material-01.html' },
        { number: 2, title: '第2章: ファイルベースルーティングを使いこなそう', file: 'nextjs-learning-material-02.html' },
        { number: 3, title: '第3章: サーバーコンポーネントとクライアントコンポーネント', file: 'nextjs-learning-material-03.html' },
        { number: 4, title: '第4章: データフェッチングとキャッシュ戦略', file: 'nextjs-learning-material-04.html' },
        { number: 5, title: '第5章: API Routesでバックエンド開発', file: 'nextjs-learning-material-05.html' },
        { number: 6, title: '第6章: 静的生成（SSG）と増分静的再生成（ISR）', file: 'nextjs-learning-material-06.html' },
        { number: 7, title: '第7章: Server Actionsでフォーム処理', file: 'nextjs-learning-material-07.html' },
        { number: 8, title: '第8章: 画像とフォントの最適化', file: 'nextjs-learning-material-08.html' },
        { number: 9, title: '第9章: 認証とセッション管理', file: 'nextjs-learning-material-09.html' },
        { number: 10, title: '第10章: 国際化（i18n）対応', file: 'nextjs-learning-material-10.html' },
        { number: 11, title: '第11章: パフォーマンス最適化とSEO', file: 'nextjs-learning-material-11.html' },
        { number: 12, title: '第12章: テスト戦略とデバッグ', file: 'nextjs-learning-material-12.html' },
        { number: 13, title: '第13章: データベース統合とORM', file: 'nextjs-learning-material-13.html' },
        { number: 14, title: '第14章: デプロイメントとCI/CD', file: 'nextjs-learning-material-14.html' },
        { number: 15, title: '第15章: 実践プロジェクト：ブログプラットフォーム構築', file: 'nextjs-learning-material-15.html' }
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
