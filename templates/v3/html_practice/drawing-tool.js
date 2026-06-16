/**
 * 描画ツール (Drawing Tool)
 * 講義用HTML教材でペンや消しゴムでメモを書くための機能
 *
 * 使い方:
 * 1. HTMLに描画用Canvas要素とツールバーHTML（後述）を追加
 * 2. このスクリプトを読み込む
 * 3. DrawingTool.init() を呼び出す
 *
 * キーボードショートカット:
 * - D: ツールバー開閉（描画モードON/OFF）
 * - P: ペンツール
 * - E: 消しゴムツール
 * - C: 全消去
 * - Ctrl+Z: 元に戻す
 *
 * ツールバーを開くと描画モードON、閉じるとOFFになります
 */

const DrawingTool = (function() {
    'use strict';

    // DOM要素
    let canvas, ctx, toolbar, toolbarContent, toolbarToggle;
    let penTool, eraserTool, clearBtn, undoBtn, drawingToggle;
    let colorBtns, strokeBtns;

    // 描画状態
    let isDrawingMode = false;
    let isDrawing = false;
    let currentTool = 'pen';
    let currentColor = '#ef4444';
    let currentWidth = 4;
    let lastX = 0;
    let lastY = 0;
    let drawingHistory = [];
    let toolbarCollapsed = true; // 初期状態は閉じている

    /**
     * 初期化
     */
    function init() {
        // DOM要素取得
        canvas = document.getElementById('drawing-canvas');
        if (!canvas) {
            console.warn('DrawingTool: #drawing-canvas が見つかりません');
            return;
        }

        ctx = canvas.getContext('2d');
        toolbar = document.getElementById('drawing-toolbar');
        toolbarContent = document.getElementById('toolbar-content');
        toolbarToggle = document.getElementById('toolbar-toggle');
        penTool = document.getElementById('pen-tool');
        eraserTool = document.getElementById('eraser-tool');
        clearBtn = document.getElementById('clear-btn');
        undoBtn = document.getElementById('undo-btn');
        drawingToggle = document.getElementById('drawing-toggle');
        colorBtns = document.querySelectorAll('.color-btn');
        strokeBtns = document.querySelectorAll('.stroke-btn');

        // Canvas サイズ設定
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // イベントリスナー設定
        setupEventListeners();

        // 初期状態の設定
        setInitialState();

        console.log('DrawingTool: 初期化完了');
    }

    /**
     * Canvas サイズ設定
     */
    function resizeCanvas() {
        if (!canvas || !ctx) return;

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        ctx.putImageData(imageData, 0, 0);
    }

    /**
     * イベントリスナー設定
     */
    function setupEventListeners() {
        // ツールバー折りたたみ（描画モード切替も統合）
        if (toolbarToggle) {
            toolbarToggle.addEventListener('click', toggleToolbar);
        }

        // ペンツール選択
        if (penTool) {
            penTool.addEventListener('click', selectPenTool);
        }

        // 消しゴムツール選択
        if (eraserTool) {
            eraserTool.addEventListener('click', selectEraserTool);
        }

        // 色選択
        colorBtns.forEach(btn => {
            btn.addEventListener('click', () => selectColor(btn));
        });

        // 線の太さ選択
        strokeBtns.forEach(btn => {
            btn.addEventListener('click', () => selectStrokeWidth(btn));
        });

        // 元に戻す
        if (undoBtn) {
            undoBtn.addEventListener('click', undo);
        }

        // 全消去
        if (clearBtn) {
            clearBtn.addEventListener('click', clearAll);
        }

        // マウスイベント
        canvas.addEventListener('mousedown', handleMouseDown);
        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mouseup', handleMouseUp);
        canvas.addEventListener('mouseout', handleMouseUp);

        // タッチイベント
        canvas.addEventListener('touchstart', handleTouchStart);
        canvas.addEventListener('touchmove', handleTouchMove);
        canvas.addEventListener('touchend', handleTouchEnd);

        // スクロールイベント（スクロール時に描画をクリア）
        window.addEventListener('scroll', handleScroll);

        // キーボードショートカット
        document.addEventListener('keydown', handleKeyDown);
    }

    /**
     * 初期状態の設定
     */
    function setInitialState() {
        // 初期色にリングを追加
        const defaultColorBtn = document.querySelector('.color-btn[data-color="#ef4444"]');
        if (defaultColorBtn) {
            defaultColorBtn.classList.add('ring-2', 'ring-offset-2', 'ring-slate-400');
        }

        // 初期線幅にハイライトを追加
        const defaultStrokeBtn = document.querySelector('.stroke-btn[data-width="4"]');
        if (defaultStrokeBtn) {
            defaultStrokeBtn.classList.add('bg-primary-100');
        }
    }


    /**
     * ツールバー折りたたみ（描画モード切替も統合）
     */
    function toggleToolbar() {
        toolbarCollapsed = !toolbarCollapsed;

        if (toolbarContent) {
            if (toolbarCollapsed) {
                toolbarContent.classList.add('hidden');
                toolbarContent.classList.remove('flex');
            } else {
                toolbarContent.classList.remove('hidden');
                toolbarContent.classList.add('flex');
            }
        }

        if (toolbarToggle) {
            const icon = toolbarToggle.querySelector('i');
            if (icon) {
                if (toolbarCollapsed) {
                    icon.classList.remove('fa-chevron-right');
                    icon.classList.add('fa-chevron-left');
                    toolbarToggle.title = 'ツールバーを開く';
                } else {
                    icon.classList.remove('fa-chevron-left');
                    icon.classList.add('fa-chevron-right');
                    toolbarToggle.title = 'ツールバーを閉じる';
                }
            }
        }

        // ツールバーの開閉と連動して描画モードを切り替え
        // 開く（toolbarCollapsed = false）→ 描画モードON
        // 閉じる（toolbarCollapsed = true）→ 描画モードOFF
        isDrawingMode = !toolbarCollapsed;
        canvas.style.pointerEvents = isDrawingMode ? 'auto' : 'none';

        if (isDrawingMode) {
            document.body.style.cursor = currentTool === 'eraser' ? 'cell' : 'crosshair';
        } else {
            document.body.style.cursor = '';
        }
    }

    /**
     * ペンツール選択
     */
    function selectPenTool() {
        currentTool = 'pen';

        if (penTool) {
            penTool.classList.add('bg-primary-100', 'text-primary-600');
            penTool.classList.remove('bg-slate-100', 'text-slate-600');
        }

        if (eraserTool) {
            eraserTool.classList.remove('bg-primary-100', 'text-primary-600');
            eraserTool.classList.add('bg-slate-100', 'text-slate-600');
        }

        if (isDrawingMode) {
            document.body.style.cursor = 'crosshair';
        }
    }

    /**
     * 消しゴムツール選択
     */
    function selectEraserTool() {
        currentTool = 'eraser';

        if (eraserTool) {
            eraserTool.classList.add('bg-primary-100', 'text-primary-600');
            eraserTool.classList.remove('bg-slate-100', 'text-slate-600');
        }

        if (penTool) {
            penTool.classList.remove('bg-primary-100', 'text-primary-600');
            penTool.classList.add('bg-slate-100', 'text-slate-600');
        }

        if (isDrawingMode) {
            document.body.style.cursor = 'cell';
        }
    }

    /**
     * 色選択
     */
    function selectColor(btn) {
        currentColor = btn.dataset.color;
        colorBtns.forEach(b => b.classList.remove('ring-2', 'ring-offset-2', 'ring-slate-400'));
        btn.classList.add('ring-2', 'ring-offset-2', 'ring-slate-400');
    }

    /**
     * 線の太さ選択
     */
    function selectStrokeWidth(btn) {
        currentWidth = parseInt(btn.dataset.width);
        strokeBtns.forEach(b => b.classList.remove('bg-primary-100'));
        btn.classList.add('bg-primary-100');
    }

    /**
     * マウスイベントハンドラ
     */
    function handleMouseDown(e) {
        if (!isDrawingMode) return;
        isDrawing = true;
        [lastX, lastY] = [e.clientX, e.clientY];
        saveState();
    }

    function handleMouseMove(e) {
        if (!isDrawing || !isDrawingMode) return;
        draw(e.clientX, e.clientY);
    }

    function handleMouseUp() {
        isDrawing = false;
    }

    /**
     * タッチイベントハンドラ
     */
    function handleTouchStart(e) {
        if (!isDrawingMode) return;
        e.preventDefault();
        const touch = e.touches[0];
        isDrawing = true;
        [lastX, lastY] = [touch.clientX, touch.clientY];
        saveState();
    }

    function handleTouchMove(e) {
        if (!isDrawing || !isDrawingMode) return;
        e.preventDefault();
        const touch = e.touches[0];
        draw(touch.clientX, touch.clientY);
    }

    function handleTouchEnd() {
        isDrawing = false;
    }

    /**
     * 描画関数
     */
    function draw(x, y) {
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(x, y);
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        if (currentTool === 'eraser') {
            ctx.globalCompositeOperation = 'destination-out';
            ctx.lineWidth = currentWidth * 5;
        } else {
            ctx.globalCompositeOperation = 'source-over';
            ctx.strokeStyle = currentColor;
            ctx.lineWidth = currentWidth;
        }

        ctx.stroke();
        [lastX, lastY] = [x, y];
    }

    /**
     * 状態保存（Undo用）
     */
    function saveState() {
        drawingHistory.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
        if (drawingHistory.length > 50) {
            drawingHistory.shift();
        }
        if (undoBtn) {
            undoBtn.disabled = false;
        }
    }

    /**
     * 元に戻す
     */
    function undo() {
        if (drawingHistory.length > 0) {
            const imageData = drawingHistory.pop();
            ctx.putImageData(imageData, 0, 0);
        }
        if (drawingHistory.length === 0 && undoBtn) {
            undoBtn.disabled = true;
        }
    }

    /**
     * 全消去
     */
    function clearAll() {
        if (confirm('すべての描画を消去しますか？')) {
            saveState();
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }

    /**
     * スクロール時の処理（描画をクリア）
     */
    function handleScroll() {
        // スクロール時は確認なしで描画をクリア
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // 履歴もクリア
        drawingHistory = [];
        if (undoBtn) {
            undoBtn.disabled = true;
        }
    }

    /**
     * キーボードショートカット
     */
    function handleKeyDown(e) {
        // 入力フィールドでは無効化
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

        switch(e.key.toLowerCase()) {
            case 'd':
                toggleToolbar();
                break;
            case 'p':
                if (isDrawingMode) selectPenTool();
                break;
            case 'e':
                if (isDrawingMode) selectEraserTool();
                break;
            case 'c':
                if (isDrawingMode) clearAll();
                break;
            case 'z':
                if (e.ctrlKey || e.metaKey) {
                    e.preventDefault();
                    undo();
                }
                break;
        }
    }

    // 公開API
    return {
        init: init,
        selectPenTool: selectPenTool,
        selectEraserTool: selectEraserTool,
        undo: undo,
        clearAll: clearAll
    };
})();

// DOMContentLoaded で自動初期化
document.addEventListener('DOMContentLoaded', function() {
    DrawingTool.init();
});
