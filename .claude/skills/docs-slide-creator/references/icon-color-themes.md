# アイコンとカラーテーマ

`index.html` のアイコン、`styles.css` のCSS変数、`index.html` の `tailwind.config` の `primary` パレットを技術に合わせて設定する。

カラーの正式な定義・追加の技術別テーマは `templates/v3/reference/color-themes.md` を参照すること(本表は代表値の抜粋)。Tailwindの全パレット値は https://tailwindcss.com/docs/customizing-colors を参照。

## 1. Font Awesome アイコン対応表(index.html)

`index.html` のロゴ部分(`<i class="fas fa-file-alt ...">` の箇所)のアイコンクラスを置換する。

| 技術 | アイコン |
|------|---------|
| Excel | `fa-file-excel` |
| Word | `fa-file-word` |
| PowerPoint | `fa-file-powerpoint` |
| Python | `fa-python` |
| Java | `fa-java` |
| Docker | `fa-docker` |
| データベース | `fa-database` |
| AWS | `fa-aws` |
| その他 | `fa-file-alt` |

注: `fa-python` / `fa-java` / `fa-docker` / `fa-aws` はブランドアイコンのため、クラスのプレフィックスは `fab`(`fas` ではない)。Excel/Word/PowerPoint/database は `fas`。

## 2. CSS変数カラーテーマ対応表(styles.css)

`styles.css` の `:root` 内のCSS変数を置換する。

```css
:root {
    --header-color-dark: #XXXXXX;
    --header-color-main: #XXXXXX;
    --header-color-light: #XXXXXX;
    --header-shadow-rgb: XX, XX, XX;
}
```

| 技術 | dark | main | light | shadow-rgb |
|------|------|------|-------|------------|
| Excel (Green) | `#15803d` | `#22c55e` | `#4ade80` | `34, 197, 94` |
| Word (Blue) | `#1d4ed8` | `#3b82f6` | `#60a5fa` | `59, 130, 246` |
| PowerPoint (Orange) | `#c2410c` | `#ea580c` | `#fb923c` | `234, 88, 12` |
| Python (Blue) | `#1d4ed8` | `#3b82f6` | `#60a5fa` | `59, 130, 246` |
| Java (Orange) | `#c2410c` | `#ea580c` | `#fb923c` | `234, 88, 12` |
| Docker (Sky) | `#0369a1` | `#0ea5e9` | `#38bdf8` | `14, 165, 233` |

CSS変数は必ず実カラー値へ置換する(未置換だと配色が崩れる)。

## 3. Tailwind primary パレット(index.html)

`index.html` の `tailwind.config` の `primary` カラーパレットを9段階(50〜900)で設定する。

```javascript
primary: {
    50: '#f0fdf4',   // 最も薄い
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',  // メイン
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',  // 最も濃い
}
```

技術別Tailwindカラーパレット:

| 技術 | カラーパレット |
|------|--------------|
| Excel | green |
| Word | blue |
| PowerPoint | orange |
| Python | blue |
| Java | orange |
| Docker | sky |

各カラーパレットの50〜900の具体値はTailwind公式(上記URL)または `templates/v3/reference/color-themes.md` を参照する。上記の値はExcel(green)の例。
