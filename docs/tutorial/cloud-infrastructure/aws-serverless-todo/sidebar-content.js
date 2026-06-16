/**
 * チュートリアル用サイドバーコンテンツ生成JavaScript
 * 各ステップのHTMLから共通のサイドバー部分を動的に生成
 *
 * 【使い方】
 * 1. このファイルを各技術フォルダにコピーし、sidebar-content.jsにリネーム
 * 2. projectInfo と steps配列を実際の内容に合わせて編集
 * 3. HTMLファイルで <script src="sidebar-content.js"></script> を読み込む
 */

(function() {
    'use strict';

    // ========================================
    // プロジェクト情報
    // ========================================
    const projectInfo = {
        title: 'AWS サーバーレス Todoアプリ',
        description: 'Amplify、API Gateway、Lambda、DynamoDBで構築する本格Webアプリケーション'
    };

    // ========================================
    // ステップの定義データ
    // ========================================
    const steps = [
        { number: 1, title: 'ステップ1', subtitle: 'AWSアカウント作成と初期設定', file: 'aws-serverless-tutorial-01.html' },
        { number: 2, title: 'ステップ2', subtitle: '開発環境の準備', file: 'aws-serverless-tutorial-02.html' },
        { number: 3, title: 'ステップ3', subtitle: 'DynamoDBテーブルの作成', file: 'aws-serverless-tutorial-03.html' },
        { number: 4, title: 'ステップ4', subtitle: 'Lambda関数の作成（基礎）', file: 'aws-serverless-tutorial-04.html' },
        { number: 5, title: 'ステップ5', subtitle: 'API Gatewayの設定', file: 'aws-serverless-tutorial-05.html' },
        { number: 6, title: 'ステップ6', subtitle: 'Lambda関数でCRUD操作を実装', file: 'aws-serverless-tutorial-06.html' },
        { number: 7, title: 'ステップ7', subtitle: 'Next.jsフロントエンドの作成', file: 'aws-serverless-tutorial-07.html' },
        { number: 8, title: 'ステップ8', subtitle: 'フロントエンドとAPIの連携', file: 'aws-serverless-tutorial-08.html' },
        { number: 9, title: 'ステップ9', subtitle: 'AWS Amplifyでデプロイ', file: 'aws-serverless-tutorial-09.html' },
        { number: 10, title: 'ステップ10', subtitle: '仕上げとクリーンアップ', file: 'aws-serverless-tutorial-10.html' }
    ];

    // 現在のページのファイル名を取得
    const currentFile = window.location.pathname.split('/').pop();

    // 現在のステップ番号を特定
    const currentStep = steps.find(step => step.file === currentFile);
    const currentStepNumber = currentStep ? currentStep.number : 1;

    // 進捗率を計算
    const progressPercentage = Math.round((currentStepNumber / steps.length) * 100);

    // サイドバーHTML生成関数
    function createSidebar() {
        // ステップリストのHTMLを生成
        const stepListHTML = steps.map(step => {
            const isActive = step.number === currentStepNumber;
            const isCompleted = step.number < currentStepNumber;

            if (isCompleted) {
                // 完了済みステップ
                return `
                        <li>
                            <a href="${step.file}"
                               class="flex items-center gap-3 px-3 py-2.5 rounded-lg
                                      text-slate-600 hover:bg-slate-100 transition-colors">
                                <span class="flex-shrink-0 w-7 h-7 flex items-center justify-center
                                             bg-emerald-500 text-white text-xs rounded-full">
                                    <i class="fas fa-check"></i>
                                </span>
                                <div class="flex-1 min-w-0">
                                    <span class="block text-sm font-medium truncate">${step.title}</span>
                                    <span class="block text-xs text-slate-500 truncate">${step.subtitle}</span>
                                </div>
                            </a>
                        </li>`;
            } else if (isActive) {
                // アクティブなステップ
                return `
                        <li>
                            <a href="${step.file}"
                               class="flex items-center gap-3 px-3 py-2.5 rounded-lg
                                      bg-primary-100 text-primary-700 font-medium ring-2 ring-primary-500">
                                <span class="flex-shrink-0 w-7 h-7 flex items-center justify-center
                                             bg-primary-500 text-white text-sm font-bold rounded-full">${step.number}</span>
                                <div class="flex-1 min-w-0">
                                    <span class="block text-sm font-medium truncate">${step.title}</span>
                                    <span class="block text-xs text-primary-600 truncate">${step.subtitle}</span>
                                </div>
                                <i class="fas fa-arrow-right text-primary-400"></i>
                            </a>
                        </li>`;
            } else {
                // 未完了ステップ
                return `
                        <li>
                            <a href="${step.file}"
                               class="flex items-center gap-3 px-3 py-2.5 rounded-lg
                                      text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors">
                                <span class="flex-shrink-0 w-7 h-7 flex items-center justify-center
                                             bg-slate-200 text-slate-500 text-sm rounded-full">${step.number}</span>
                                <div class="flex-1 min-w-0">
                                    <span class="block text-sm font-medium truncate">${step.title}</span>
                                    <span class="block text-xs text-slate-400 truncate">${step.subtitle}</span>
                                </div>
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
                <!-- プロジェクト概要 -->
                <div class="mb-6 p-4 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl border border-primary-200">
                    <h3 class="font-semibold text-primary-800 mb-2">
                        <i class="fas fa-rocket mr-2"></i>プロジェクト概要
                    </h3>
                    <p class="text-sm text-primary-700">${projectInfo.description}</p>
                </div>

                <!-- 進捗インジケーター -->
                <div class="mb-6 p-4 bg-slate-100 rounded-xl">
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-sm font-medium text-slate-600">実装進捗</span>
                        <span class="text-sm font-bold text-primary-600">ステップ ${currentStepNumber}/${steps.length}</span>
                    </div>
                    <div class="w-full bg-slate-200 rounded-full h-2.5">
                        <div class="bg-primary-500 h-2.5 rounded-full transition-all duration-500"
                             style="width: ${progressPercentage}%"></div>
                    </div>
                </div>

                <!-- ステップリスト -->
                <nav>
                    <h2 class="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 px-2">
                        チュートリアルステップ
                    </h2>
                    <ul class="space-y-1">
${stepListHTML}
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
