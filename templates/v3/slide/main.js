/**
 * スライド教材共通JavaScript
 * PDFビューアー、ナビゲーション、ダークモード、サイドバーなどの共通機能を提供
 *
 * このファイルは変更不要です。
 * スライドの定義は slide-content.js で行ってください。
 */

(function() {
    'use strict';

    // PC環境判定
    const isPC = window.innerWidth >= 1024;

    // 現在のスライドインデックス
    let currentSlideIndex = 0;

    // DOM要素
    let pdfViewer, pdfEmbed, pdfFallbackLink, slideList, progressBar, progressText;
    let currentSlideBadge, currentSlideTitle, prevBtn, nextBtn, prevTitle, nextTitle, downloadBtn;
    let darkModeToggle, sidebarToggleBtn, sidebar, fullscreenBtn, pdfWrapper;

    // DOM要素を取得
    function initDOMElements() {
        pdfViewer = document.getElementById('pdf-viewer');
        pdfEmbed = document.getElementById('pdf-embed');
        pdfFallbackLink = document.getElementById('pdf-fallback-link');
        slideList = document.getElementById('slide-list');
        progressBar = document.getElementById('progress-bar');
        progressText = document.getElementById('progress-text');
        currentSlideBadge = document.getElementById('current-slide-badge');
        currentSlideTitle = document.getElementById('current-slide-title');
        prevBtn = document.getElementById('prev-btn');
        nextBtn = document.getElementById('next-btn');
        prevTitle = document.getElementById('prev-title');
        nextTitle = document.getElementById('next-title');
        downloadBtn = document.getElementById('download-btn');
        darkModeToggle = document.getElementById('dark-mode-toggle');
        sidebarToggleBtn = document.getElementById('sidebar-toggle-btn');
        sidebar = document.getElementById('sidebar');
        fullscreenBtn = document.getElementById('fullscreen-btn');
        pdfWrapper = document.getElementById('pdf-wrapper');
    }

    // スライドリストを生成
    function generateSlideList() {
        if (!slideList || typeof slides === 'undefined') return;

        slideList.innerHTML = slides.map((slide, index) => `
            <li>
                <button onclick="goToSlide(${index})"
                        class="slide-item w-full flex items-center gap-3 px-3 py-2.5 rounded-lg
                               text-slate-600 hover:bg-slate-100 transition-colors text-left
                               ${index === currentSlideIndex ? 'active' : ''}">
                    <span class="slide-number flex-shrink-0 w-6 h-6 flex items-center justify-center
                                 bg-slate-200 text-slate-600 text-xs rounded-full">${slide.number}</span>
                    <span class="truncate">${slide.title}</span>
                </button>
            </li>
        `).join('');
    }

    // スライドを表示
    function showSlide(index) {
        if (typeof slides === 'undefined' || index < 0 || index >= slides.length) return;

        currentSlideIndex = index;
        const slide = slides[index];

        // PDFを更新（ページ全体表示パラメータ付き）
        // スクロール位置をリセットするため、一度空にしてから設定
        const pdfUrl = slide.file + '#view=Fit&page=1';
        if (pdfViewer) {
            pdfViewer.data = '';
            setTimeout(() => { pdfViewer.data = pdfUrl; }, 0);
        }
        if (pdfEmbed) {
            pdfEmbed.src = '';
            setTimeout(() => { pdfEmbed.src = pdfUrl; }, 0);
        }
        if (pdfFallbackLink) pdfFallbackLink.href = slide.file;

        // UIを更新
        if (currentSlideBadge) currentSlideBadge.textContent = `スライド ${slide.number}`;
        if (currentSlideTitle) currentSlideTitle.textContent = slide.title;

        // 進捗を更新
        const progress = ((index + 1) / slides.length) * 100;
        if (progressBar) progressBar.style.width = `${progress}%`;
        if (progressText) progressText.textContent = `${index + 1}/${slides.length}スライド`;

        // ダウンロードリンクを更新
        if (downloadBtn) downloadBtn.href = slide.file;

        // ナビゲーションボタンを更新
        if (prevBtn) prevBtn.disabled = index === 0;
        if (nextBtn) nextBtn.disabled = index === slides.length - 1;

        if (prevTitle) prevTitle.textContent = index > 0 ? slides[index - 1].title : '-';
        if (nextTitle) nextTitle.textContent = index < slides.length - 1 ? slides[index + 1].title : '-';

        // スライドリストのアクティブ状態を更新
        generateSlideList();
    }

    // スライドに移動（グローバル関数として公開）
    window.goToSlide = function(index) {
        showSlide(index);
    };

    // ナビゲーションボタンのイベント設定
    function initNavigation() {
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                if (currentSlideIndex > 0) {
                    showSlide(currentSlideIndex - 1);
                }
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                if (typeof slides !== 'undefined' && currentSlideIndex < slides.length - 1) {
                    showSlide(currentSlideIndex + 1);
                }
            });
        }

        // キーボードナビゲーション
        document.addEventListener('keydown', (e) => {
            if (typeof slides === 'undefined') return;

            if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                if (currentSlideIndex > 0) {
                    showSlide(currentSlideIndex - 1);
                }
            } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                if (currentSlideIndex < slides.length - 1) {
                    showSlide(currentSlideIndex + 1);
                }
            }
        });
    }

    // ダークモード機能
    function initDarkMode() {
        if (!darkModeToggle) return;

        const isDark = () => document.documentElement.classList.contains('dark');

        function updateDarkModeIcon() {
            const icon = darkModeToggle.querySelector('i');
            if (isDark()) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
                darkModeToggle.title = 'ライトモードに切り替え';
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
                darkModeToggle.title = 'ダークモードに切り替え';
            }
        }

        darkModeToggle.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            localStorage.setItem('darkMode', isDark() ? 'dark' : 'light');
            updateDarkModeIcon();
        });

        updateDarkModeIcon();
    }

    // サイドバートグル機能
    function initSidebar() {
        if (!sidebarToggleBtn || !sidebar) return;

        let isSidebarVisible = isPC;

        // 初期状態を設定
        if (isPC) {
            sidebar.classList.remove('-translate-x-full');
            sidebar.classList.add('translate-x-0');
            sidebar.style.width = '20rem'; // w-80 = 320px
        }

        sidebarToggleBtn.addEventListener('click', () => {
            isSidebarVisible = !isSidebarVisible;

            if (isSidebarVisible) {
                // サイドバーを表示
                sidebar.classList.remove('-translate-x-full');
                sidebar.classList.add('translate-x-0');
                sidebar.style.width = '20rem';
                sidebar.style.overflow = 'auto';
            } else {
                // サイドバーを非表示
                sidebar.classList.add('-translate-x-full');
                sidebar.classList.remove('translate-x-0');
                sidebar.style.width = '0';
                sidebar.style.overflow = 'hidden';
            }
        });
    }

    // 全画面表示機能
    function initFullscreen() {
        if (!fullscreenBtn || !pdfWrapper) return;

        function toggleFullscreen() {
            if (!document.fullscreenElement) {
                pdfWrapper.requestFullscreen().catch(err => {
                    console.error('全画面表示エラー:', err);
                });
            } else {
                document.exitFullscreen();
            }
        }

        fullscreenBtn.addEventListener('click', toggleFullscreen);

        // 全画面状態の変更を監視
        document.addEventListener('fullscreenchange', () => {
            const icon = fullscreenBtn.querySelector('i');
            if (document.fullscreenElement) {
                icon.classList.remove('fa-expand');
                icon.classList.add('fa-compress');
                fullscreenBtn.title = '全画面を終了 (F / Esc)';
            } else {
                icon.classList.remove('fa-compress');
                icon.classList.add('fa-expand');
                fullscreenBtn.title = '全画面表示 (F)';
            }
        });

        // キーボードショートカット（F キーで全画面切り替え）
        document.addEventListener('keydown', (e) => {
            if (e.key === 'f' || e.key === 'F') {
                // 入力フィールドにフォーカスがある場合は無視
                if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
                e.preventDefault();
                toggleFullscreen();
            }
        });
    }

    // 初期化
    function init() {
        initDOMElements();
        initNavigation();
        initDarkMode();
        initSidebar();
        initFullscreen();
        generateSlideList();
        showSlide(0);
    }

    // ページ読み込み時に初期化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
