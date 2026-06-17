# 技術分野別カラーテーマ v1 (Graphite × Iris)

## v1 カラー設定方針（データ1箇所）

技術別カラーは **`astro-system/src/data/guides/<分類>/<slug>.ts` の `TechGuide.primary`（50〜900 パレット）1箇所**で指定する（旧 `{{PRIMARY_*}}` プレースホルダー置換・per-tech `styles.css` 編集・tailwind.config への直書きは廃止）。

`GuideChapterLayout.astro` がこの `primary` から自動的に以下を導出する:

- `tailwind.config` の `primary` パレット（50〜900）
- `:root` の CSS 変数 `--primary-300/400/500/600/700` ＋ `--primary-rgb`、ダークの `--primary-500`（＝primary[400]）をインライン注入

共有 `_shared/styles.css` は技術色を持たない（全ガイド共通・技術色非依存）。下表の値を `primary` に設定すれば、レイアウトが両者を整合させる。

### `--primary-rgb` の導出ルール

`--primary-rgb` は **500シェードのHEXを10進RGBへ変換した値** を使う。

```
例: #3b82f6 → 0x3b=59, 0x82=130, 0xf6=246 → "59, 130, 246"
```

CSS 変数内では数値のみをカンマ区切りで書く（`rgb()` ラッパーは不要。`rgba(var(--primary-rgb), .5)` という形で使われるため）。

### 共通固定値（技術に関わらず変更不要）

```css
--cyan: #06b6d4;   /* 全技術共通の相方アクセント。変更しない。 */
--amber: #f59e0b;  /* 警告・学習目標カードの差し色。変更しない。 */
```


---

## 技術別 primary 早見表（300〜700 ＋ rgb）

データ.ts の `primary` に設定する代表シェード（300〜700）と、レイアウトが導出する `--primary-rgb`（500シェードのRGB）。`primary` の 50〜900 フルパレットは次節の表を使う。

| 技術 | `primary-300` | `primary-400` | `primary-500` | `primary-600` | `primary-700` | rgb(500) |
|------|-------------------|-------------------|-------------------|-------------------|-------------------|-------------------|
| Python | `#93c5fd` | `#60a5fa` | `#3b82f6` | `#2563eb` | `#1d4ed8` | `59, 130, 246` |
| Java | `#fdba74` | `#fb923c` | `#f97316` | `#ea580c` | `#c2410c` | `249, 115, 22` |
| Spring Framework | `#6ee7b7` | `#34d399` | `#10b981` | `#059669` | `#047857` | `16, 185, 129` |
| JavaScript / Node.js | `#fde047` | `#facc15` | `#eab308` | `#ca8a04` | `#a16207` | `234, 179, 8` |
| React / Next.js | `#67e8f9` | `#22d3ee` | `#06b6d4` | `#0891b2` | `#0e7490` | `6, 182, 212` |
| .NET / C# | `#c4b5fd` | `#a78bfa` | `#8b5cf6` | `#7c3aed` | `#6d28d9` | `139, 92, 246` |
| PHP / Laravel | `#a5b4fc` | `#818cf8` | `#6366f1` | `#4f46e5` | `#4338ca` | `99, 102, 241` |
| Oracle Database | `#fca5a5` | `#f87171` | `#ef4444` | `#dc2626` | `#b91c1c` | `239, 68, 68` |
| PostgreSQL | `#93c5fd` | `#60a5fa` | `#3b82f6` | `#2563eb` | `#1d4ed8` | `59, 130, 246` |
| SQL / 汎用DB | `#7dd3fc` | `#38bdf8` | `#0ea5e9` | `#0284c7` | `#0369a1` | `14, 165, 233` |
| AWS | `#fdba74` | `#fb923c` | `#f97316` | `#ea580c` | `#c2410c` | `249, 115, 22` |
| Docker / コンテナ | `#7dd3fc` | `#38bdf8` | `#0ea5e9` | `#0284c7` | `#0369a1` | `14, 165, 233` |
| Git / GitHub | `#cbd5e1` | `#94a3b8` | `#64748b` | `#475569` | `#334155` | `100, 116, 139` |
| R言語 / 統計分析 | `#93c5fd` | `#60a5fa` | `#3b82f6` | `#2563eb` | `#1d4ed8` | `59, 130, 246` |
| SAS | `#93c5fd` | `#60a5fa` | `#3b82f6` | `#2563eb` | `#1d4ed8` | `59, 130, 246` |
| 機械学習 / AI | `#d8b4fe` | `#c084fc` | `#a855f7` | `#9333ea` | `#7e22ce` | `168, 85, 247` |
| Excel / VBA | `#6ee7b7` | `#34d399` | `#10b981` | `#059669` | `#047857` | `16, 185, 129` |
| ビジネス文書 | `#d6d3d1` | `#a8a29e` | `#78716c` | `#57534e` | `#44403c` | `120, 113, 108` |
| HTML / CSS | `#fdba74` | `#fb923c` | `#f97316` | `#ea580c` | `#c2410c` | `249, 115, 22` |
| Tailwind CSS | `#67e8f9` | `#22d3ee` | `#06b6d4` | `#0891b2` | `#0e7490` | `6, 182, 212` |
| Bootstrap | `#c4b5fd` | `#a78bfa` | `#8b5cf6` | `#7c3aed` | `#6d28d9` | `139, 92, 246` |
| 情報セキュリティ | `#fca5a5` | `#f87171` | `#ef4444` | `#dc2626` | `#b91c1c` | `239, 68, 68` |
| ネットワーク / 通信 | `#5eead4` | `#2dd4bf` | `#14b8a6` | `#0d9488` | `#0f766e` | `20, 184, 166` |
| テスト / QA | `#6ee7b7` | `#34d399` | `#10b981` | `#059669` | `#047857` | `16, 185, 129` |
| PM / ガバナンス | `#d8b4fe` | `#c084fc` | `#a855f7` | `#9333ea` | `#7e22ce` | `168, 85, 247` |
| 生成AI / LLM | `#f0abfc` | `#e879f9` | `#d946ef` | `#c026d3` | `#a21caf` | `217, 70, 239` |
| IoT / エッジ | `#86efac` | `#4ade80` | `#22c55e` | `#16a34a` | `#15803d` | `34, 197, 94` |

> **RGB変換の根拠**: 500シェードのHEXを各2桁ずつ16進→10進変換した値。例) `#3b82f6` → `0x3b`=59, `0x82`=130, `0xf6`=246 → `59, 130, 246`。

---

## 技術別 tailwind.config パレット（50〜900）

データ.ts の `primary` に設定するフルパレット（50〜900）。

### プログラミング言語系

#### Python
```javascript
primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
}
```
- **アイコン**: `fab fa-python`
- **用途**: Python, Django, FastAPI, Streamlit, SQLAlchemy

#### Java
```javascript
primary: {
    50: '#fff7ed',
    100: '#ffedd5',
    200: '#fed7aa',
    300: '#fdba74',
    400: '#fb923c',
    500: '#f97316',
    600: '#ea580c',
    700: '#c2410c',
    800: '#9a3412',
    900: '#7c2d12',
}
```
- **アイコン**: `fab fa-java`
- **用途**: Java, JSP/Servlet, JDBC

#### Spring Framework
```javascript
primary: {
    50: '#ecfdf5',
    100: '#d1fae5',
    200: '#a7f3d0',
    300: '#6ee7b7',
    400: '#34d399',
    500: '#10b981',
    600: '#059669',
    700: '#047857',
    800: '#065f46',
    900: '#064e3b',
}
```
- **アイコン**: `fas fa-leaf`
- **用途**: Spring Boot, Spring MVC, Spring Security

#### JavaScript / Node.js
```javascript
primary: {
    50: '#fefce8',
    100: '#fef9c3',
    200: '#fef08a',
    300: '#fde047',
    400: '#facc15',
    500: '#eab308',
    600: '#ca8a04',
    700: '#a16207',
    800: '#854d0e',
    900: '#713f12',
}
```
- **アイコン**: `fab fa-js` または `fab fa-node-js`
- **用途**: JavaScript, Node.js, Express

#### React / Next.js
```javascript
primary: {
    50: '#ecfeff',
    100: '#cffafe',
    200: '#a5f3fc',
    300: '#67e8f9',
    400: '#22d3ee',
    500: '#06b6d4',
    600: '#0891b2',
    700: '#0e7490',
    800: '#155e75',
    900: '#164e63',
}
```
- **アイコン**: `fab fa-react`
- **用途**: React, Next.js

#### .NET / C#
```javascript
primary: {
    50: '#f5f3ff',
    100: '#ede9fe',
    200: '#ddd6fe',
    300: '#c4b5fd',
    400: '#a78bfa',
    500: '#8b5cf6',
    600: '#7c3aed',
    700: '#6d28d9',
    800: '#5b21b6',
    900: '#4c1d95',
}
```
- **アイコン**: `fab fa-microsoft` または `fas fa-code`
- **用途**: .NET, C#, ASP.NET, VB.NET

#### PHP / Laravel
```javascript
primary: {
    50: '#eef2ff',
    100: '#e0e7ff',
    200: '#c7d2fe',
    300: '#a5b4fc',
    400: '#818cf8',
    500: '#6366f1',
    600: '#4f46e5',
    700: '#4338ca',
    800: '#3730a3',
    900: '#312e81',
}
```
- **アイコン**: `fab fa-php`
- **用途**: PHP, Laravel

---

### データベース系

#### Oracle Database
```javascript
primary: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
}
```
- **アイコン**: `fas fa-database`
- **用途**: Oracle Database, PL/SQL

#### PostgreSQL
```javascript
primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
}
```
- **アイコン**: `fas fa-database`
- **用途**: PostgreSQL

#### SQL / 汎用データベース
```javascript
primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
}
```
- **アイコン**: `fas fa-database`
- **用途**: SQL, MySQL, DB2

---

### クラウド・インフラ系

#### AWS
```javascript
primary: {
    50: '#fff7ed',
    100: '#ffedd5',
    200: '#fed7aa',
    300: '#fdba74',
    400: '#fb923c',
    500: '#f97316',
    600: '#ea580c',
    700: '#c2410c',
    800: '#9a3412',
    900: '#7c2d12',
}
```
- **アイコン**: `fab fa-aws`
- **用途**: AWS, EC2, S3, Lambda, Terraform on AWS

#### Docker / コンテナ
```javascript
primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
}
```
- **アイコン**: `fab fa-docker`
- **用途**: Docker, Kubernetes, コンテナ技術

#### Git / GitHub
```javascript
primary: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
}
```
- **アイコン**: `fab fa-github`
- **用途**: Git, GitHub, バージョン管理

---

### データ分析・AI系

#### R言語 / 統計分析
```javascript
primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
}
```
- **アイコン**: `fab fa-r-project`
- **用途**: R, 統計分析, データサイエンス

#### SAS
```javascript
primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
}
```
- **アイコン**: `fas fa-chart-bar`
- **用途**: SAS, ビジネス分析

#### 機械学習 / AI
```javascript
primary: {
    50: '#faf5ff',
    100: '#f3e8ff',
    200: '#e9d5ff',
    300: '#d8b4fe',
    400: '#c084fc',
    500: '#a855f7',
    600: '#9333ea',
    700: '#7e22ce',
    800: '#6b21a8',
    900: '#581c87',
}
```
- **アイコン**: `fas fa-brain`
- **用途**: 機械学習, 深層学習, AI

---

### ビジネス系

#### Excel / VBA
```javascript
primary: {
    50: '#ecfdf5',
    100: '#d1fae5',
    200: '#a7f3d0',
    300: '#6ee7b7',
    400: '#34d399',
    500: '#10b981',
    600: '#059669',
    700: '#047857',
    800: '#065f46',
    900: '#064e3b',
}
```
- **アイコン**: `fas fa-file-excel`
- **用途**: Excel, VBA, Office自動化

#### ビジネス文書
```javascript
primary: {
    50: '#fafaf9',
    100: '#f5f5f4',
    200: '#e7e5e4',
    300: '#d6d3d1',
    400: '#a8a29e',
    500: '#78716c',
    600: '#57534e',
    700: '#44403c',
    800: '#292524',
    900: '#1c1917',
}
```
- **アイコン**: `fas fa-file-alt`
- **用途**: ビジネス文書, 技術文書

---

### Web テクノロジ系

#### HTML / CSS
```javascript
primary: {
    50: '#fff7ed',
    100: '#ffedd5',
    200: '#fed7aa',
    300: '#fdba74',
    400: '#fb923c',
    500: '#f97316',
    600: '#ea580c',
    700: '#c2410c',
    800: '#9a3412',
    900: '#7c2d12',
}
```
- **アイコン**: `fab fa-html5` または `fab fa-css3-alt`
- **用途**: HTML, CSS, Webデザイン基礎

#### Tailwind CSS
```javascript
primary: {
    50: '#ecfeff',
    100: '#cffafe',
    200: '#a5f3fc',
    300: '#67e8f9',
    400: '#22d3ee',
    500: '#06b6d4',
    600: '#0891b2',
    700: '#0e7490',
    800: '#155e75',
    900: '#164e63',
}
```
- **アイコン**: `fas fa-wind`
- **用途**: Tailwind CSS, ユーティリティファーストCSS

#### Bootstrap
```javascript
primary: {
    50: '#f5f3ff',
    100: '#ede9fe',
    200: '#ddd6fe',
    300: '#c4b5fd',
    400: '#a78bfa',
    500: '#8b5cf6',
    600: '#7c3aed',
    700: '#6d28d9',
    800: '#5b21b6',
    900: '#4c1d95',
}
```
- **アイコン**: `fab fa-bootstrap`
- **用途**: Bootstrap, レスポンシブUI

---

### セキュリティ系

#### 情報セキュリティ
```javascript
primary: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
}
```
- **アイコン**: `fas fa-shield-alt`
- **用途**: 情報セキュリティ, 脆弱性診断, SOC

---

### ネットワーク系

#### ネットワーク / 通信
```javascript
primary: {
    50: '#f0fdfa',
    100: '#ccfbf1',
    200: '#99f6e4',
    300: '#5eead4',
    400: '#2dd4bf',
    500: '#14b8a6',
    600: '#0d9488',
    700: '#0f766e',
    800: '#115e59',
    900: '#134e4a',
}
```
- **アイコン**: `fas fa-network-wired`
- **用途**: ネットワーク基礎, TCP/IP, Cisco

---

### テスト・品質管理系

#### テスト / QA
```javascript
primary: {
    50: '#ecfdf5',
    100: '#d1fae5',
    200: '#a7f3d0',
    300: '#6ee7b7',
    400: '#34d399',
    500: '#10b981',
    600: '#059669',
    700: '#047857',
    800: '#065f46',
    900: '#064e3b',
}
```
- **アイコン**: `fas fa-vial` または `fas fa-check-circle`
- **用途**: ソフトウェアテスト, 品質管理, CI/CD

---

### プロジェクト管理系

#### PM / ガバナンス
```javascript
primary: {
    50: '#faf5ff',
    100: '#f3e8ff',
    200: '#e9d5ff',
    300: '#d8b4fe',
    400: '#c084fc',
    500: '#a855f7',
    600: '#9333ea',
    700: '#7e22ce',
    800: '#6b21a8',
    900: '#581c87',
}
```
- **アイコン**: `fas fa-project-diagram` または `fas fa-tasks`
- **用途**: プロジェクト管理, PMBOK, ITガバナンス

---

### 生成AI / LLM系

#### 生成AI / LLM
```javascript
primary: {
    50: '#fdf4ff',
    100: '#fae8ff',
    200: '#f5d0fe',
    300: '#f0abfc',
    400: '#e879f9',
    500: '#d946ef',
    600: '#c026d3',
    700: '#a21caf',
    800: '#86198f',
    900: '#701a75',
}
```
- **アイコン**: `fas fa-robot` または `fas fa-magic`
- **用途**: LLM, RAG, LangChain, OpenAI

---

### IoT / エッジ系

#### IoT / エッジコンピューティング
```javascript
primary: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
}
```
- **アイコン**: `fas fa-microchip` または `fas fa-broadcast-tower`
- **用途**: IoT, エッジデバイス, Raspberry Pi, FA/製造IoT

---

## カラーテーマ早見表

| 技術分野 | メインカラー (500) | Tailwindシェード | アイコン | 用途 |
|---------|------------------|----------------|---------|------|
| Python | `#3b82f6` | blue-500 | `fab fa-python` | Python, Django, FastAPI |
| Java | `#f97316` | orange-500 | `fab fa-java` | Java, JSP/Servlet |
| Spring | `#10b981` | emerald-500 | `fas fa-leaf` | Spring Boot |
| JavaScript | `#eab308` | yellow-500 | `fab fa-js` | JS, Node.js |
| React | `#06b6d4` | cyan-500 | `fab fa-react` | React, Next.js |
| .NET / C# | `#8b5cf6` | violet-500 | `fab fa-microsoft` | C#, ASP.NET |
| PHP | `#6366f1` | indigo-500 | `fab fa-php` | PHP, Laravel |
| Oracle | `#ef4444` | red-500 | `fas fa-database` | Oracle, PL/SQL |
| PostgreSQL | `#3b82f6` | blue-500 | `fas fa-database` | PostgreSQL |
| SQL | `#0ea5e9` | sky-500 | `fas fa-database` | SQL, MySQL |
| AWS | `#f97316` | orange-500 | `fab fa-aws` | AWS |
| Docker | `#0ea5e9` | sky-500 | `fab fa-docker` | Docker, K8s |
| Git | `#64748b` | slate-500 | `fab fa-github` | Git, GitHub |
| R言語 | `#3b82f6` | blue-500 | `fab fa-r-project` | R, 統計 |
| SAS | `#3b82f6` | blue-500 | `fas fa-chart-bar` | SAS, 統計分析 |
| AI / ML | `#a855f7` | purple-500 | `fas fa-brain` | 機械学習, 深層学習 |
| Excel | `#10b981` | emerald-500 | `fas fa-file-excel` | Excel, VBA |
| ビジネス文書 | `#78716c` | stone-500 | `fas fa-file-alt` | ビジネス・技術文書 |
| HTML / CSS | `#f97316` | orange-500 | `fab fa-html5` | HTML, CSS |
| Tailwind | `#06b6d4` | cyan-500 | `fas fa-wind` | Tailwind CSS |
| Bootstrap | `#8b5cf6` | violet-500 | `fab fa-bootstrap` | Bootstrap |
| セキュリティ | `#ef4444` | red-500 | `fas fa-shield-alt` | 情報セキュリティ |
| ネットワーク | `#14b8a6` | teal-500 | `fas fa-network-wired` | TCP/IP, Cisco |
| テスト / QA | `#10b981` | emerald-500 | `fas fa-vial` | テスト, 品質管理 |
| PM / ガバナンス | `#a855f7` | purple-500 | `fas fa-tasks` | PMBOK, ITIL |
| 生成AI / LLM | `#d946ef` | fuchsia-500 | `fas fa-robot` | LLM, RAG |
| IoT / エッジ | `#22c55e` | green-500 | `fas fa-microchip` | IoT, Raspberry Pi |

---

## 使用例 — Python学習ガイド

### (A) HTMLの `tailwind.config` に設定

```html
<script>
    tailwind.config = {
        theme: {
            extend: {
                colors: {
                    primary: {
                        50: '#eff6ff',
                        100: '#dbeafe',
                        200: '#bfdbfe',
                        300: '#93c5fd',
                        400: '#60a5fa',
                        500: '#3b82f6',
                        600: '#2563eb',
                        700: '#1d4ed8',
                        800: '#1e40af',
                        900: '#1e3a8a',
                    }
                },
                fontFamily: {
                    sans: ['"Noto Sans JP"', 'sans-serif'],
                }
            }
        }
    }
</script>
```

### (B) `styles.css` の `:root` プレースホルダー置換後

```css
:root {
    /* ... サーフェス・テキスト変数は変更しない ... */

    /* アクセント (Python = blue) */
    --primary-300: #93c5fd;
    --primary-400: #60a5fa;
    --primary-500: #3b82f6;
    --primary-600: #2563eb;
    --primary-700: #1d4ed8;
    --primary-rgb: 59, 130, 246;

    /* 差し色 — 変更しない */
    --cyan: #06b6d4;
    --amber: #f59e0b;
}
```

> **補足**: `--primary-rgb` の `59, 130, 246` は `#3b82f6`（blue-500）の16進→10進変換。
> `0x3b`=59, `0x82`=130, `0xf6`=246。
> この値は `rgba(var(--primary-rgb), .5)` のような形でグロー・オーバーレイに使われる。
