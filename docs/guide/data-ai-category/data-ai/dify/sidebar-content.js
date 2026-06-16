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
    // 章の定義データ（Dify入門ガイド全18章）
    // ========================================
    const chapters = [
        { number: 1, title: '第1章: Difyとは - ノーコードAIアプリ開発の世界', file: 'dify-learning-material-01.html' },
        { number: 2, title: '第2章: Difyの環境構築 - Dify Cloudとセルフホスト', file: 'dify-learning-material-02.html' },
        { number: 3, title: '第3章: はじめてのアプリ作成 - チャットボットを作る', file: 'dify-learning-material-03.html' },
        { number: 4, title: '第4章: プロンプトオーケストレーション - AIの振る舞いを設計する', file: 'dify-learning-material-04.html' },
        { number: 5, title: '第5章: モデルプロバイダーの設定 - 様々なLLMを使いこなす', file: 'dify-learning-material-05.html' },
        { number: 6, title: '第6章: ナレッジベース入門 - RAGの基礎を理解する', file: 'dify-learning-material-06.html' },
        { number: 7, title: '第7章: ナレッジベースの構築 - ドキュメントのアップロードと管理', file: 'dify-learning-material-07.html' },
        { number: 8, title: '第8章: RAGアプリの実装 - 社内文書に答えるAIを作る', file: 'dify-learning-material-08.html' },
        { number: 9, title: '第9章: ワークフロー入門 - ビジュアルで処理を設計する', file: 'dify-learning-material-09.html' },
        { number: 10, title: '第10章: ワークフローノードの活用 - 多様な処理を組み合わせる', file: 'dify-learning-material-10.html' },
        { number: 11, title: '第11章: エージェント機能 - AIに自律的に行動させる', file: 'dify-learning-material-11.html' },
        { number: 12, title: '第12章: ツールの活用 - AIの能力を拡張する', file: 'dify-learning-material-12.html' },
        { number: 13, title: '第13章: 外部API連携 - 既存システムとつなげる', file: 'dify-learning-material-13.html' },
        { number: 14, title: '第14章: アプリの公開と共有 - 作ったアプリを届ける', file: 'dify-learning-material-14.html' },
        { number: 15, title: '第15章: 運用とモニタリング - アプリを改善し続ける', file: 'dify-learning-material-15.html' },
        { number: 16, title: '第16章: 実践プロジェクト1 - FAQ対応チャットボット', file: 'dify-learning-material-16.html' },
        { number: 17, title: '第17章: 実践プロジェクト2 - ドキュメント要約ワークフロー', file: 'dify-learning-material-17.html' },
        { number: 18, title: '第18章: 総合演習 - 業務効率化AIアシスタントの開発', file: 'dify-learning-material-18.html' }
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
