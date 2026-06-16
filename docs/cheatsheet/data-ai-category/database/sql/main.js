// ダークモード早期適用（フラッシュ防止）
(function() {
    const saved = localStorage.getItem('darkMode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (saved === 'dark' || (saved === null && prefersDark)) {
        document.documentElement.classList.add('dark');
    }
})();

// highlight.js初期化
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightElement(block);
    });

    // ダークモード初期化
    updateDarkModeIcon();

    // ダークモードボタンのイベントリスナー
    document.getElementById('dark-mode-toggle')?.addEventListener('click', toggleDarkMode);
});

// コードコピー機能
function copyCode(button) {
    const pre = button.closest('.code-block-wrapper').querySelector('pre');
    const code = pre.querySelector('code').textContent;
    navigator.clipboard.writeText(code).then(() => {
        const originalIcon = button.innerHTML;
        button.innerHTML = '<i class="fas fa-check"></i>';
        setTimeout(() => {
            button.innerHTML = originalIcon;
        }, 2000);
    });
}

// ダークモード切り替え
function toggleDarkMode() {
    const html = document.documentElement;
    const isDark = html.classList.toggle('dark');
    localStorage.setItem('darkMode', isDark ? 'dark' : 'light');
    updateDarkModeIcon();
}

// ダークモードアイコン更新
function updateDarkModeIcon() {
    const isDark = document.documentElement.classList.contains('dark');
    const darkIcon = document.querySelector('.dark-icon');
    const lightIcon = document.querySelector('.light-icon');
    if (darkIcon && lightIcon) {
        darkIcon.classList.toggle('hidden', isDark);
        lightIcon.classList.toggle('hidden', !isDark);
    }
}
