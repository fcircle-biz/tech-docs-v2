# 必須CSSクラス定義

```css
/* ベースレイアウト */
body {
    font-family: 'Noto Sans JP', sans-serif;
    padding-top: 56px;
}

/* ナビゲーション */
.navbar {
    background-color: [技術固有色];
}

/* サイドバー */
.sidebar {
    position: sticky;
    top: 70px;
    height: calc(100vh - 70px);
    overflow-y: auto;
}

/* タイトル */
.chapter-title {
    color: [技術固有色];
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    border-bottom: 2px solid [技術固有色];
    padding-bottom: 0.5rem;
}

.section-title {
    color: [セカンダリ色];
    margin-top: 1.2rem;
    margin-bottom: 0.8rem;
}

/* コンテンツボックス */
.quiz-container {
    background-color: [背景色];
    border-radius: 8px;
    padding: 1.5rem;
    margin: 1.5rem 0;
    border-left: 4px solid [技術固有色];
}

.exercise-container {
    background-color: #f3e5f5;
    border-radius: 8px;
    padding: 1.5rem;
    margin: 1.5rem 0;
    border-left: 4px solid #9c27b0;
}

.highlight {
    background-color: #ffecb3;
    border-radius: 8px;
    padding: 1rem;
    margin: 1rem 0;
    border-left: 4px solid #ffc107;
}

.warning {
    background-color: #ffebee;
    border-radius: 8px;
    padding: 1rem;
    margin: 1rem 0;
    border-left: 4px solid #f44336;
}

/* コードハイライト */
.code-block {
    background-color: #1e1e1e;
    color: white;
    border-radius: 5px;
    padding: 1rem;
    margin: 1rem 0;
}

/* ナビゲーション */
.nav-link.active {
    background-color: [技術固有色] !important;
    color: white !important;
}
```