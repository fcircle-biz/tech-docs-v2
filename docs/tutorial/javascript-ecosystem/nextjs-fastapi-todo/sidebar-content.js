/**
 * サイドバー動的生成スクリプト（チュートリアル版）
 */

// プロジェクト情報
const projectInfo = {
    title: 'Todoアプリ開発',
    description: 'Next.js + FastAPI + PostgreSQLで作る実践Webアプリ'
};

// ステップ定義
const steps = [
    { number: 1, title: 'ステップ1', subtitle: '開発環境の準備', file: 'nextjs-fastapi-todo-tutorial-01.html' },
    { number: 2, title: 'ステップ2', subtitle: 'PostgreSQLデータベース構築', file: 'nextjs-fastapi-todo-tutorial-02.html' },
    { number: 3, title: 'ステップ3', subtitle: 'FastAPIバックエンド基礎', file: 'nextjs-fastapi-todo-tutorial-03.html' },
    { number: 4, title: 'ステップ4', subtitle: 'タスク一覧表示機能', file: 'nextjs-fastapi-todo-tutorial-04.html' },
    { number: 5, title: 'ステップ5', subtitle: 'CRUD機能実装', file: 'nextjs-fastapi-todo-tutorial-05.html' },
    { number: 6, title: 'ステップ6', subtitle: 'Next.jsフロントエンド基礎', file: 'nextjs-fastapi-todo-tutorial-06.html' },
    { number: 7, title: 'ステップ7', subtitle: 'CORS設定とタスク一覧表示', file: 'nextjs-fastapi-todo-tutorial-07.html' },
    { number: 8, title: 'ステップ8', subtitle: 'タスク追加機能', file: 'nextjs-fastapi-todo-tutorial-08.html' },
    { number: 9, title: 'ステップ9', subtitle: '完了切替・削除機能', file: 'nextjs-fastapi-todo-tutorial-09.html' },
    { number: 10, title: 'ステップ10', subtitle: 'フィルター機能', file: 'nextjs-fastapi-todo-tutorial-10.html' },
    { number: 11, title: 'ステップ11', subtitle: 'アプリの仕上げとまとめ', file: 'nextjs-fastapi-todo-tutorial-11.html' }
];

// 現在のページを判定
const currentFile = window.location.pathname.split('/').pop();
const currentStep = steps.find(step => step.file === currentFile);

// サイドバーHTML生成
function generateSidebar() {
    const sidebarHTML = `
    <!-- サイドバー（PC: sticky表示, モバイル: スライドイン） -->
    <aside id="sidebar" class="fixed md:sticky top-16 left-0 z-40 w-80 h-[calc(100vh-4rem)]
                  bg-white border-r border-slate-200 overflow-y-auto flex-shrink-0
                  transform -translate-x-full md:translate-x-0 sidebar-transition">
        <div class="p-6">
            <!-- プロジェクト情報 -->
            <div class="mb-6 pb-6 border-b border-slate-200">
                <div class="flex items-center gap-2 mb-2">
                    <i class="fas fa-list-check text-primary-500"></i>
                    <h2 class="font-bold text-slate-800">${projectInfo.title}</h2>
                </div>
                <p class="text-xs text-slate-600">${projectInfo.description}</p>
            </div>

            <!-- 進捗バー -->
            <div class="mb-6 p-4 bg-primary-50 rounded-xl">
                <div class="flex items-center justify-between mb-2">
                    <span class="text-sm font-medium text-primary-700">学習進捗</span>
                    <span class="text-sm text-primary-600">${currentStep ? currentStep.number : 0}/${steps.length}ステップ</span>
                </div>
                <div class="w-full bg-primary-100 rounded-full h-2">
                    <div class="bg-primary-500 h-2 rounded-full transition-all duration-300"
                         style="width: ${currentStep ? (currentStep.number / steps.length * 100) : 0}%"></div>
                </div>
            </div>

            <!-- ステップリスト -->
            <nav>
                <h3 class="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">ステップ一覧</h3>
                <ul class="space-y-1">
                    ${steps.map(step => generateStepItem(step)).join('')}
                </ul>
            </nav>
        </div>
    </aside>
    `;

    // メインコンテンツの直前に挿入
    const main = document.querySelector('main');
    if (main) {
        main.insertAdjacentHTML('beforebegin', sidebarHTML);
    }
}

// ステップ項目HTML生成
function generateStepItem(step) {
    const isActive = currentStep && step.number === currentStep.number;
    const isCompleted = currentStep && step.number < currentStep.number;

    if (isActive) {
        return `
            <li>
                <a href="${step.file}"
                   class="flex items-center gap-3 px-3 py-2.5 rounded-lg
                          bg-primary-100 text-primary-700 font-medium transition-colors">
                    <span class="flex-shrink-0 w-6 h-6 flex items-center justify-center
                                 bg-primary-500 text-white text-xs rounded-full">${step.number}</span>
                    <div class="flex-1 min-w-0">
                        <div class="text-sm font-medium truncate">${step.subtitle}</div>
                    </div>
                </a>
            </li>
        `;
    } else if (isCompleted) {
        return `
            <li>
                <a href="${step.file}"
                   class="flex items-center gap-3 px-3 py-2.5 rounded-lg
                          text-slate-600 hover:bg-slate-100 transition-colors">
                    <span class="flex-shrink-0 w-6 h-6 flex items-center justify-center
                                 bg-emerald-500 text-white text-xs rounded-full">
                        <i class="fas fa-check text-[10px]"></i>
                    </span>
                    <div class="flex-1 min-w-0">
                        <div class="text-sm truncate">${step.subtitle}</div>
                    </div>
                </a>
            </li>
        `;
    } else {
        return `
            <li>
                <a href="${step.file}"
                   class="flex items-center gap-3 px-3 py-2.5 rounded-lg
                          text-slate-600 hover:bg-slate-100 transition-colors">
                    <span class="flex-shrink-0 w-6 h-6 flex items-center justify-center
                                 bg-slate-200 text-slate-600 text-xs rounded-full">${step.number}</span>
                    <div class="flex-1 min-w-0">
                        <div class="text-sm truncate">${step.subtitle}</div>
                    </div>
                </a>
            </li>
        `;
    }
}

// ページ読み込み時にサイドバーを生成
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', generateSidebar);
} else {
    generateSidebar();
}
