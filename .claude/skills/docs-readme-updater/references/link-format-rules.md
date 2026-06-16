# リンク形式規則(セクション別)

ルート `README.md` の各項目に張るリンクは、セクションによって**相対パス**と**絶対 GitHub Pages URL** を使い分ける。

## 規則一覧

| セクション | リンク形式 | ベース |
|------------|------------|--------|
| 学習パス | 相対パス | `docs/learning-paths/` |
| 学習ガイドライン | 相対パス | `docs/guide/` |
| チュートリアル | 相対パス | `docs/tutorial/` |
| プラクティス | 相対パス | `docs/practice/` |
| 実践課題 | 相対パス | `docs/assignment/` |
| スライド資料 | 絶対 URL | `https://fcircle-biz.github.io/tech_docs/slide/` |
| チートシート | 絶対 URL | `https://fcircle-biz.github.io/tech_docs/cheatsheet/` |

> 覚え方: **学べる「ドキュメント本体(MD/フォルダ)」へは相対パス**、**ブラウザで開く「ホスティング済みHTMLビューア(スライド・チートシート)」へは絶対 GitHub Pages URL**。

## GitHub Pages URL 形式

```
https://fcircle-biz.github.io/tech_docs/[content-type]/[category-path]/[filename].html
```

## 具体例

### 学習パス(相対パス)

```markdown
-   [**Next.js フルスタック学習パス**](docs/learning-paths/nextjs-fullstack-learning-path.md) - 説明文
```

### 学習ガイドライン(相対パス・各フォルダの README.md を指す)

```markdown
-   [**Django学習ガイド**](docs/guide/programming-languages/python-ecosystem/django/README.md) - 説明文
```

### チュートリアル(相対パス)

```markdown
-   [**Todoアプリチュートリアル**](docs/tutorial/web-technologies/nextjs-fastapi/todo-app/README.md) - 説明文
```

### プラクティス(相対パス・フォルダを指す)

```markdown
-   [**Java練習問題**](docs/practice/programming-languages/java-ecosystem/java-training/) - 説明文
```

### 実践課題(相対パス)

```markdown
-   [**Next.js 受注管理システム**](docs/assignment/nextjs-order-management/) - 説明文
```

### スライド資料(絶対 URL・各教材の index.html を指す)

```markdown
-   [**Excel入門**](https://fcircle-biz.github.io/tech_docs/slide/business-saas/microsoft-office/excel-basics/index.html) - 説明文
```

### チートシート(絶対 URL)

チートシートは表形式で技術分野別にまとめる既存スタイルを踏襲してよい。リンクは絶対 URL。

```markdown
| **Python** | [Python入門](https://fcircle-biz.github.io/tech_docs/cheatsheet/programming-languages/python-ecosystem/python-beginner/index.html) ・ [FastAPI](https://fcircle-biz.github.io/tech_docs/cheatsheet/programming-languages/python-ecosystem/fastapi/index.html) |
```

または箇条書き形式:

```markdown
-   [**SQL**](https://fcircle-biz.github.io/tech_docs/cheatsheet/data-ai-category/database/sql/index.html) - 説明文
```

## 注意

- 相対パスは必ずリポジトリルートからの `docs/...` で始める(`./` や絶対 FS パスを使わない)。
- 絶対 URL のホスト・パスは上記固定。末尾のファイル名(`index.html` 等)まで正確に。
- いずれの形式でも、実在するパスのみをリンクする(`references/qa-checklist.md` の存在確認を実施)。
