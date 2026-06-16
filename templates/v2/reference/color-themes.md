# 技術分野別カラーテーマ v2 (Tailwind CSS版)

## Tailwind CSS カスタムカラー設定

各技術分野に合わせて `tailwind.config` の `primary` カラーを変更します。

### カラー設定の適用方法

```html
<script>
    tailwind.config = {
        theme: {
            extend: {
                colors: {
                    primary: {
                        // 以下のカラーパレットを技術分野に応じて差し替え
                        50: '#...',
                        100: '#...',
                        200: '#...',
                        300: '#...',
                        400: '#...',
                        500: '#...',  // メインカラー
                        600: '#...',  // ホバー時
                        700: '#...',
                        800: '#...',
                        900: '#...',
                    }
                }
            }
        }
    }
</script>
```

---

## プログラミング言語系

### Python
```javascript
primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',  // #3776AB ベース
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
}
```
- **アイコン**: `fab fa-python`
- **用途**: Python, Django, FastAPI, Streamlit, SQLAlchemy

### Java
```javascript
primary: {
    50: '#fff7ed',
    100: '#ffedd5',
    200: '#fed7aa',
    300: '#fdba74',
    400: '#fb923c',
    500: '#f97316',  // #ED8B00 ベース
    600: '#ea580c',
    700: '#c2410c',
    800: '#9a3412',
    900: '#7c2d12',
}
```
- **アイコン**: `fab fa-java`
- **用途**: Java, JSP/Servlet, JDBC

### Spring Framework
```javascript
primary: {
    50: '#ecfdf5',
    100: '#d1fae5',
    200: '#a7f3d0',
    300: '#6ee7b7',
    400: '#34d399',
    500: '#10b981',  // Spring Green
    600: '#059669',
    700: '#047857',
    800: '#065f46',
    900: '#064e3b',
}
```
- **アイコン**: `fas fa-leaf`
- **用途**: Spring Boot, Spring MVC, Spring Security

### JavaScript / Node.js
```javascript
primary: {
    50: '#fefce8',
    100: '#fef9c3',
    200: '#fef08a',
    300: '#fde047',
    400: '#facc15',
    500: '#eab308',  // #F7DF1E ベース
    600: '#ca8a04',
    700: '#a16207',
    800: '#854d0e',
    900: '#713f12',
}
```
- **アイコン**: `fab fa-js` または `fab fa-node-js`
- **用途**: JavaScript, Node.js, Express

### React
```javascript
primary: {
    50: '#ecfeff',
    100: '#cffafe',
    200: '#a5f3fc',
    300: '#67e8f9',
    400: '#22d3ee',
    500: '#06b6d4',  // #61DAFB ベース
    600: '#0891b2',
    700: '#0e7490',
    800: '#155e75',
    900: '#164e63',
}
```
- **アイコン**: `fab fa-react`
- **用途**: React, Next.js

### .NET / C#
```javascript
primary: {
    50: '#f5f3ff',
    100: '#ede9fe',
    200: '#ddd6fe',
    300: '#c4b5fd',
    400: '#a78bfa',
    500: '#8b5cf6',  // #512BD4 ベース
    600: '#7c3aed',
    700: '#6d28d9',
    800: '#5b21b6',
    900: '#4c1d95',
}
```
- **アイコン**: `fab fa-microsoft` または `fas fa-code`
- **用途**: .NET, C#, ASP.NET, VB.NET

### PHP
```javascript
primary: {
    50: '#eef2ff',
    100: '#e0e7ff',
    200: '#c7d2fe',
    300: '#a5b4fc',
    400: '#818cf8',
    500: '#6366f1',  // #777BB4 ベース
    600: '#4f46e5',
    700: '#4338ca',
    800: '#3730a3',
    900: '#312e81',
}
```
- **アイコン**: `fab fa-php`
- **用途**: PHP, Laravel

---

## データベース系

### Oracle Database
```javascript
primary: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',  // Oracle Red
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
}
```
- **アイコン**: `fas fa-database`
- **用途**: Oracle Database, PL/SQL

### PostgreSQL
```javascript
primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',  // #336791 ベース
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
}
```
- **アイコン**: `fas fa-database`
- **用途**: PostgreSQL

### SQL / 汎用データベース
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

## クラウド・インフラ系

### AWS
```javascript
primary: {
    50: '#fff7ed',
    100: '#ffedd5',
    200: '#fed7aa',
    300: '#fdba74',
    400: '#fb923c',
    500: '#f97316',  // AWS Orange
    600: '#ea580c',
    700: '#c2410c',
    800: '#9a3412',
    900: '#7c2d12',
}
```
- **アイコン**: `fab fa-aws`
- **用途**: AWS, EC2, S3, Lambda, Terraform on AWS

### Docker / コンテナ
```javascript
primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',  // Docker Blue
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
}
```
- **アイコン**: `fab fa-docker`
- **用途**: Docker, Kubernetes, コンテナ技術

### Git / GitHub
```javascript
primary: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',  // GitHub Dark
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
}
```
- **アイコン**: `fab fa-github`
- **用途**: Git, GitHub, バージョン管理

---

## データ分析・AI系

### R言語 / 統計分析
```javascript
primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',  // R Blue
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
}
```
- **アイコン**: `fab fa-r-project`
- **用途**: R, 統計分析, データサイエンス

### SAS
```javascript
primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',  // #0066CC ベース
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
}
```
- **アイコン**: `fas fa-chart-bar`
- **用途**: SAS, ビジネス分析

### 機械学習 / AI
```javascript
primary: {
    50: '#faf5ff',
    100: '#f3e8ff',
    200: '#e9d5ff',
    300: '#d8b4fe',
    400: '#c084fc',
    500: '#a855f7',  // AI Purple
    600: '#9333ea',
    700: '#7e22ce',
    800: '#6b21a8',
    900: '#581c87',
}
```
- **アイコン**: `fas fa-brain`
- **用途**: 機械学習, 深層学習, AI

---

## ビジネス系

### Excel / VBA
```javascript
primary: {
    50: '#ecfdf5',
    100: '#d1fae5',
    200: '#a7f3d0',
    300: '#6ee7b7',
    400: '#34d399',
    500: '#10b981',  // Excel Green
    600: '#059669',
    700: '#047857',
    800: '#065f46',
    900: '#064e3b',
}
```
- **アイコン**: `fas fa-file-excel`
- **用途**: Excel, VBA, Office自動化

### ビジネス文書
```javascript
primary: {
    50: '#fafaf9',
    100: '#f5f5f4',
    200: '#e7e5e4',
    300: '#d6d3d1',
    400: '#a8a29e',
    500: '#78716c',  // Neutral
    600: '#57534e',
    700: '#44403c',
    800: '#292524',
    900: '#1c1917',
}
```
- **アイコン**: `fas fa-file-alt`
- **用途**: ビジネス文書, 技術文書

---

## Webテクノロジ系

### HTML / CSS
```javascript
primary: {
    50: '#fff7ed',
    100: '#ffedd5',
    200: '#fed7aa',
    300: '#fdba74',
    400: '#fb923c',
    500: '#f97316',  // HTML5 Orange
    600: '#ea580c',
    700: '#c2410c',
    800: '#9a3412',
    900: '#7c2d12',
}
```
- **アイコン**: `fab fa-html5` または `fab fa-css3-alt`
- **用途**: HTML, CSS, Webデザイン基礎

### Tailwind CSS
```javascript
primary: {
    50: '#ecfeff',
    100: '#cffafe',
    200: '#a5f3fc',
    300: '#67e8f9',
    400: '#22d3ee',
    500: '#06b6d4',  // Tailwind Cyan
    600: '#0891b2',
    700: '#0e7490',
    800: '#155e75',
    900: '#164e63',
}
```
- **アイコン**: `fas fa-wind`
- **用途**: Tailwind CSS, ユーティリティファーストCSS

### Bootstrap
```javascript
primary: {
    50: '#f5f3ff',
    100: '#ede9fe',
    200: '#ddd6fe',
    300: '#c4b5fd',
    400: '#a78bfa',
    500: '#8b5cf6',  // Bootstrap Purple
    600: '#7c3aed',
    700: '#6d28d9',
    800: '#5b21b6',
    900: '#4c1d95',
}
```
- **アイコン**: `fab fa-bootstrap`
- **用途**: Bootstrap, レスポンシブUI

---

## セキュリティ系

### 情報セキュリティ
```javascript
primary: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',  // Security Red
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
}
```
- **アイコン**: `fas fa-shield-alt`
- **用途**: 情報セキュリティ, 脆弱性診断, SOC

---

## ネットワーク系

### ネットワーク / 通信
```javascript
primary: {
    50: '#f0fdfa',
    100: '#ccfbf1',
    200: '#99f6e4',
    300: '#5eead4',
    400: '#2dd4bf',
    500: '#14b8a6',  // Teal
    600: '#0d9488',
    700: '#0f766e',
    800: '#115e59',
    900: '#134e4a',
}
```
- **アイコン**: `fas fa-network-wired`
- **用途**: ネットワーク基礎, TCP/IP, Cisco

---

## テスト・品質管理系

### テスト / QA
```javascript
primary: {
    50: '#ecfdf5',
    100: '#d1fae5',
    200: '#a7f3d0',
    300: '#6ee7b7',
    400: '#34d399',
    500: '#10b981',  // QA Green
    600: '#059669',
    700: '#047857',
    800: '#065f46',
    900: '#064e3b',
}
```
- **アイコン**: `fas fa-vial` または `fas fa-check-circle`
- **用途**: ソフトウェアテスト, 品質管理, CI/CD

---

## プロジェクト管理系

### PM / ガバナンス
```javascript
primary: {
    50: '#faf5ff',
    100: '#f3e8ff',
    200: '#e9d5ff',
    300: '#d8b4fe',
    400: '#c084fc',
    500: '#a855f7',  // PM Purple
    600: '#9333ea',
    700: '#7e22ce',
    800: '#6b21a8',
    900: '#581c87',
}
```
- **アイコン**: `fas fa-project-diagram` または `fas fa-tasks`
- **用途**: プロジェクト管理, PMBOK, ITガバナンス

---

## 生成AI / LLM系

### 生成AI / LLM
```javascript
primary: {
    50: '#fdf4ff',
    100: '#fae8ff',
    200: '#f5d0fe',
    300: '#f0abfc',
    400: '#e879f9',
    500: '#d946ef',  // AI Fuchsia
    600: '#c026d3',
    700: '#a21caf',
    800: '#86198f',
    900: '#701a75',
}
```
- **アイコン**: `fas fa-robot` または `fas fa-magic`
- **用途**: LLM, RAG, LangChain, OpenAI

---

## IoT / エッジ系

### IoT / エッジコンピューティング
```javascript
primary: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',  // IoT Green
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

| 技術分野 | メインカラー (500) | アイコン | 用途 |
|---------|------------------|---------|------|
| Python | `#3b82f6` (blue) | `fab fa-python` | Python, Django, FastAPI |
| Java | `#f97316` (orange) | `fab fa-java` | Java, JSP/Servlet |
| Spring | `#10b981` (emerald) | `fas fa-leaf` | Spring Boot |
| JavaScript | `#eab308` (yellow) | `fab fa-js` | JS, Node.js |
| React | `#06b6d4` (cyan) | `fab fa-react` | React, Next.js |
| .NET | `#8b5cf6` (violet) | `fab fa-microsoft` | C#, ASP.NET |
| PHP | `#6366f1` (indigo) | `fab fa-php` | PHP, Laravel |
| Oracle | `#ef4444` (red) | `fas fa-database` | Oracle, PL/SQL |
| PostgreSQL | `#3b82f6` (blue) | `fas fa-database` | PostgreSQL |
| SQL | `#0ea5e9` (sky) | `fas fa-database` | SQL, MySQL |
| AWS | `#f97316` (orange) | `fab fa-aws` | AWS |
| Docker | `#0ea5e9` (sky) | `fab fa-docker` | Docker, K8s |
| Git | `#64748b` (slate) | `fab fa-github` | Git, GitHub |
| R言語 | `#3b82f6` (blue) | `fab fa-r-project` | R, 統計 |
| AI/ML | `#a855f7` (purple) | `fas fa-brain` | 機械学習 |
| Excel | `#10b981` (emerald) | `fas fa-file-excel` | Excel, VBA |
| HTML/CSS | `#f97316` (orange) | `fab fa-html5` | HTML, CSS |
| Tailwind | `#06b6d4` (cyan) | `fas fa-wind` | Tailwind CSS |
| Bootstrap | `#8b5cf6` (violet) | `fab fa-bootstrap` | Bootstrap |
| セキュリティ | `#ef4444` (red) | `fas fa-shield-alt` | 情報セキュリティ |
| ネットワーク | `#14b8a6` (teal) | `fas fa-network-wired` | TCP/IP, Cisco |
| テスト/QA | `#10b981` (emerald) | `fas fa-vial` | テスト, 品質管理 |
| PM/ガバナンス | `#a855f7` (purple) | `fas fa-tasks` | PMBOK, ITIL |
| 生成AI/LLM | `#d946ef` (fuchsia) | `fas fa-robot` | LLM, RAG |
| IoT/エッジ | `#22c55e` (green) | `fas fa-microchip` | IoT, Raspberry Pi |

---

## 使用例

### Python学習教材の場合

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

ヘッダー内：
```html
<div class="flex items-center gap-3">
    <i class="fab fa-python text-2xl"></i>
    <span class="text-lg font-semibold">Python学習教材</span>
</div>
```
