/**
 * 練習問題共通JavaScript
 * PC環境判定、UI制御、ライブラリ初期化、解答表示機能などの共通処理を提供
 */

(function() {
    'use strict';

    // PC環境判定（最初に実行）
    const isPC = window.innerWidth >= 1024;

    // ダークモード機能
    const DarkMode = {
        storageKey: 'darkMode',

        init: function() {
            const savedMode = localStorage.getItem(this.storageKey);
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

            if (savedMode === 'dark' || (savedMode === null && prefersDark)) {
                document.documentElement.classList.add('dark');
            }

            this.createToggleButton();

            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
                if (localStorage.getItem(this.storageKey) === null) {
                    if (e.matches) {
                        document.documentElement.classList.add('dark');
                    } else {
                        document.documentElement.classList.remove('dark');
                    }
                    this.updateIcon();
                }
            });
        },

        createToggleButton: function() {
            const self = this;
            const isDark = document.documentElement.classList.contains('dark');

            const headerNav = document.querySelector('header nav .flex.items-center.justify-between');
            if (!headerNav) return;

            const sidebarBtn = document.getElementById('sidebar-toggle-btn');
            if (!sidebarBtn) return;

            const btnContainer = document.createElement('div');
            btnContainer.className = 'flex items-center gap-2';

            const toggleBtn = document.createElement('button');
            toggleBtn.id = 'dark-mode-toggle';
            toggleBtn.className = 'w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/20 transition-all active:scale-95';
            toggleBtn.title = isDark ? 'ライトモードに切り替え' : 'ダークモードに切り替え';
            toggleBtn.innerHTML = `<i class="fas ${isDark ? 'fa-sun' : 'fa-moon'} text-lg"></i>`;

            toggleBtn.addEventListener('click', function() {
                self.toggle();
            });

            sidebarBtn.parentNode.insertBefore(btnContainer, sidebarBtn);
            btnContainer.appendChild(toggleBtn);
            btnContainer.appendChild(sidebarBtn);
        },

        toggle: function() {
            const isDark = document.documentElement.classList.toggle('dark');
            localStorage.setItem(this.storageKey, isDark ? 'dark' : 'light');
            this.updateIcon();
        },

        updateIcon: function() {
            const btn = document.getElementById('dark-mode-toggle');
            if (!btn) return;

            const isDark = document.documentElement.classList.contains('dark');
            const icon = btn.querySelector('i');

            if (isDark) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
                btn.title = 'ライトモードに切り替え';
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
                btn.title = 'ダークモードに切り替え';
            }
        }
    };

    // 解答表示機能
    const AnswerSection = {
        init: function() {
            const showAnswerBtn = document.getElementById('show-answer-btn');
            const answerContent = document.getElementById('answer-content');

            if (!showAnswerBtn || !answerContent) return;

            let isVisible = false;

            showAnswerBtn.addEventListener('click', function() {
                isVisible = !isVisible;

                if (isVisible) {
                    answerContent.classList.remove('hidden');
                    showAnswerBtn.innerHTML = '<i class="fas fa-eye-slash mr-2"></i>解答・解説を非表示';
                    showAnswerBtn.classList.remove('from-amber-500', 'to-orange-500', 'hover:from-amber-600', 'hover:to-orange-600');
                    showAnswerBtn.classList.add('from-slate-500', 'to-slate-600', 'hover:from-slate-600', 'hover:to-slate-700');

                    // 解答セクションまでスクロール
                    setTimeout(() => {
                        answerContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 100);
                } else {
                    answerContent.classList.add('hidden');
                    showAnswerBtn.innerHTML = '<i class="fas fa-lightbulb mr-2"></i>解答・解説を表示';
                    showAnswerBtn.classList.remove('from-slate-500', 'to-slate-600', 'hover:from-slate-600', 'hover:to-slate-700');
                    showAnswerBtn.classList.add('from-amber-500', 'to-orange-500', 'hover:from-amber-600', 'hover:to-orange-600');
                }
            });
        }
    };

    // 回答チェック機能（オプション）
    const AnswerChecker = {
        // 選択問題の回答をハイライト
        highlightSelection: function(questionNum, correctAnswer) {
            const options = document.querySelectorAll(`input[name="q${questionNum}"]`);
            options.forEach(option => {
                const label = option.closest('.option-label');
                if (option.value === correctAnswer) {
                    label.classList.add('border-emerald-500', 'bg-emerald-50');
                } else if (option.checked) {
                    label.classList.add('border-red-500', 'bg-red-50');
                }
            });
        }
    };

    // ページ読み込み時に初期化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            DarkMode.init();
            AnswerSection.init();
        });
    } else {
        DarkMode.init();
        AnswerSection.init();
    }

    // 描画ツールバーとCanvasのHTML生成（PC環境のみ）
    function createDrawingToolbar() {
        if (!isPC) return;

        const toolbarHTML = `
    <canvas id="drawing-canvas" class="fixed inset-0 z-[100] pointer-events-none"></canvas>
    <div id="drawing-toolbar" class="fixed right-4 top-1/2 -translate-y-1/2 z-[110]
                                     bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl
                                     border border-slate-200 p-2 flex flex-col gap-1
                                     transition-all duration-300">
        <button id="toolbar-toggle"
                class="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200
                       flex items-center justify-center transition-colors mb-2"
                title="ツールバーを開く">
            <i class="fas fa-chevron-left text-slate-600"></i>
        </button>
        <div id="toolbar-content" class="hidden flex-col gap-1">
            <button id="pen-tool"
                    class="tool-btn w-10 h-10 rounded-xl bg-primary-100 text-primary-600
                           hover:bg-primary-200 flex items-center justify-center transition-colors"
                    title="ペン (P)">
                <i class="fas fa-pen"></i>
            </button>
            <button id="eraser-tool"
                    class="tool-btn w-10 h-10 rounded-xl bg-slate-100 text-slate-600
                           hover:bg-slate-200 flex items-center justify-center transition-colors"
                    title="消しゴム (E)">
                <i class="fas fa-eraser"></i>
            </button>
            <div class="h-px bg-slate-200 my-1"></div>
            <div id="color-picker" class="flex flex-col gap-1">
                <button class="color-btn w-10 h-10 rounded-xl border-2 border-red-400 bg-red-500
                               hover:scale-110 transition-transform" data-color="#ef4444" title="赤"></button>
                <button class="color-btn w-10 h-10 rounded-xl border-2 border-blue-400 bg-blue-500
                               hover:scale-110 transition-transform" data-color="#3b82f6" title="青"></button>
                <button class="color-btn w-10 h-10 rounded-xl border-2 border-slate-600 bg-slate-800
                               hover:scale-110 transition-transform active-color" data-color="#1e293b" title="黒"></button>
                <button class="color-btn w-10 h-10 rounded-xl border-2 border-emerald-400 bg-emerald-500
                               hover:scale-110 transition-transform" data-color="#10b981" title="緑"></button>
                <button class="color-btn w-10 h-10 rounded-xl border-2 border-amber-400 bg-amber-500
                               hover:scale-110 transition-transform" data-color="#f59e0b" title="黄"></button>
            </div>
            <div class="h-px bg-slate-200 my-1"></div>
            <div id="stroke-width" class="flex flex-col gap-1">
                <button class="stroke-btn w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200
                               flex items-center justify-center transition-colors" data-width="2" title="細い">
                    <div class="w-4 h-0.5 bg-slate-600 rounded-full"></div>
                </button>
                <button class="stroke-btn w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200
                               flex items-center justify-center transition-colors active-stroke" data-width="4" title="普通">
                    <div class="w-4 h-1 bg-slate-600 rounded-full"></div>
                </button>
                <button class="stroke-btn w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200
                               flex items-center justify-center transition-colors" data-width="8" title="太い">
                    <div class="w-4 h-2 bg-slate-600 rounded-full"></div>
                </button>
            </div>
            <div class="h-px bg-slate-200 my-1"></div>
            <button id="undo-btn"
                    class="w-10 h-10 rounded-xl bg-slate-100 text-slate-600
                           hover:bg-slate-200 flex items-center justify-center transition-colors
                           disabled:opacity-40 disabled:cursor-not-allowed"
                    title="元に戻す (Ctrl+Z)" disabled>
                <i class="fas fa-undo"></i>
            </button>
            <button id="clear-btn"
                    class="w-10 h-10 rounded-xl bg-rose-100 text-rose-600
                           hover:bg-rose-200 flex items-center justify-center transition-colors"
                    title="全消去 (C)">
                <i class="fas fa-trash-alt"></i>
            </button>
        </div>
    </div>
        `;

        document.body.insertAdjacentHTML('beforeend', toolbarHTML);

        setTimeout(() => {
            const toolbarToggle = document.getElementById('toolbar-toggle');
            const toolbarContent = document.getElementById('toolbar-content');
            let isToolbarOpen = false;

            toolbarToggle?.addEventListener('click', () => {
                isToolbarOpen = !isToolbarOpen;
                const icon = toolbarToggle.querySelector('i');

                if (isToolbarOpen) {
                    toolbarContent.classList.remove('hidden');
                    toolbarContent.classList.add('flex');
                    icon.classList.remove('fa-chevron-left');
                    icon.classList.add('fa-chevron-right');
                    toolbarToggle.title = 'ツールバーを閉じる';
                } else {
                    toolbarContent.classList.add('hidden');
                    toolbarContent.classList.remove('flex');
                    icon.classList.remove('fa-chevron-right');
                    icon.classList.add('fa-chevron-left');
                    toolbarToggle.title = 'ツールバーを開く';
                }
            });
        }, 0);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', createDrawingToolbar);
    } else {
        createDrawingToolbar();
    }

    // PC環境以外はスケーリングを100%に設定
    if (!isPC) {
        const viewportMeta = document.getElementById('viewport-meta');
        if (viewportMeta) {
            viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1.0');
        }
    } else {
        const viewportMeta = document.getElementById('viewport-meta');
        if (viewportMeta) {
            viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1.1');
        }
    }

    // Highlight.js 初期化
    if (typeof hljs !== 'undefined') {
        hljs.highlightAll();
    }

    // スクロールトップボタン表示制御
    const scrollTopBtn = document.getElementById('scroll-top-btn');
    if (!isPC && scrollTopBtn) {
        scrollTopBtn.style.display = 'none';
    }
    window.addEventListener('scroll', () => {
        if (scrollTopBtn) {
            if (window.scrollY > 300) {
                scrollTopBtn.classList.remove('opacity-0', 'invisible', 'translate-y-4');
            } else {
                scrollTopBtn.classList.add('opacity-0', 'invisible', 'translate-y-4');
            }
        }
    });

    // スクロールトップ関数をグローバルに公開
    window.scrollToTop = function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // コードコピー機能をグローバルに公開
    window.copyCode = function(btn) {
        const code = btn.closest('.code-block-wrapper').querySelector('code').textContent;
        navigator.clipboard.writeText(code).then(() => {
            const icon = btn.querySelector('i');
            icon.classList.remove('fa-copy');
            icon.classList.add('fa-check');
            setTimeout(() => {
                icon.classList.remove('fa-check');
                icon.classList.add('fa-copy');
            }, 2000);
        });
    };

    // サイドバートグル機能
    function initSidebarToggle() {
        const toggleBtn = document.getElementById('sidebar-toggle-btn');
        const sidebar = document.getElementById('sidebar');

        if (!toggleBtn || !sidebar) return;

        let isSidebarVisible = isPC;

        if (isPC) {
            sidebar.classList.remove('-translate-x-full');
            sidebar.classList.add('translate-x-0');
            sidebar.style.width = '20rem';
        }

        toggleBtn.addEventListener('click', () => {
            isSidebarVisible = !isSidebarVisible;

            if (isSidebarVisible) {
                sidebar.classList.remove('-translate-x-full');
                sidebar.classList.add('translate-x-0');
                sidebar.style.width = '20rem';
                sidebar.style.overflow = 'auto';
            } else {
                sidebar.classList.add('-translate-x-full');
                sidebar.classList.remove('translate-x-0');
                sidebar.style.width = '0';
                sidebar.style.overflow = 'hidden';
            }
        });
    }

    setTimeout(initSidebarToggle, 100);

    // 回答チェッカーをグローバルに公開
    window.AnswerChecker = AnswerChecker;

})();
