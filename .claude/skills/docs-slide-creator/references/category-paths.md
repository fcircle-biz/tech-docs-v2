# カテゴリパスとケバブケース命名

出力先 `docs/slide/[カテゴリパス]/[教材名]/` の決定方法。

## カテゴリパス決定の基本

`tech-knowledge-map.md` の9分類体系に従ってカテゴリパスを決定する。下表は代表的な対応の抜粋。網羅的な分類・サブカテゴリは `tech-knowledge-map.md` を参照すること(本表に丸写ししない)。

| 技術領域 | パス |
|---------|------|
| Excel/Word/PowerPoint | `docs/slide/business-saas/microsoft-office/[教材名]/` |
| Python関連 | `docs/slide/programming-languages/python-ecosystem/[教材名]/` |
| Java関連 | `docs/slide/programming-languages/java-ecosystem/[教材名]/` |
| AWS | `docs/slide/cloud-infrastructure/aws/[教材名]/` |
| Docker | `docs/slide/cloud-infrastructure/docker/[教材名]/` |
| データベース | `docs/slide/data-ai-category/database/[教材名]/` |

9分類体系(参考。詳細は `tech-knowledge-map.md`):
1. Programming Languages (`programming-languages/[ecosystem]/`)
2. Web Technologies (`web-technologies/`)
3. Development Processes (`development-processes/`)
4. Design & Modeling (`design-modeling/`)
5. Cloud & Infrastructure (`cloud-infrastructure/`)
6. Data & AI (`data-ai-category/`)
7. Business SaaS (`business-saas/`)
8. Certifications (`certification/`)
9. Business Domain Knowledge (`business-domain-knowledge/`)

カテゴリが判定できない場合はユーザーに確認する。

## 教材名(ケバブケース)命名規則

教材タイトルを英語小文字のケバブケースへ変換する。

| 教材タイトル | 教材名(ケバブケース) |
|-------------|----------------------|
| Excel入門 | `excel-basics` |
| Python入門 | `python-basics` |
| Docker実践 | `docker-practice` |

規則:
- 日本語の「入門」「基礎」→ `basics`、「実践」→ `practice` のように意味を反映した英語へ変換する。
- 区切りはハイフン、すべて小文字。
