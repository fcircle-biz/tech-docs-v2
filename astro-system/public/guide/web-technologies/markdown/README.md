# Markdown 学習ガイドライン

このガイドラインでは、Markdown（マークダウン）の基礎を入門者向けに段階的に学習するためのカリキュラムを提供しています。プログラミング経験がない方でも、記号を使って読みやすい文書を書けるようになることをゴールに、「シンプルに・手を動かしながら」学べる構成です。

## 前提条件

### 必要な環境
- Windows / macOS / Linux いずれかの PC
- テキストエディタ（**Visual Studio Code を推奨**・無料。オンラインエディタでも学習可能）
- （第11章）GitHub アカウント（任意。README 作成演習で使用）

### 参考リソース
- [Markdown 公式（Daring Fireball）](https://daringfireball.net/projects/markdown/)
- [CommonMark（標準仕様）](https://commonmark.org/)
- [GitHub Flavored Markdown 仕様](https://github.github.com/gfm/)
- [GitHub Docs - GitHub での書き込み](https://docs.github.com/ja/get-started/writing-on-github)
- [Mermaid 公式ドキュメント](https://mermaid.js.org/)
- [Mermaid Live Editor（ブラウザで試せる）](https://mermaid.live/)

### 前提知識
- **必須**: PC の基本操作（ファイルの作成・保存・フォルダ操作）
- **推奨**: テキストエディタを使った経験（HTML やプログラミングの知識は**不要**）

## 学習コンテンツ

### [1. Markdownとは](https://fcircle-biz.github.io/tech-docs-v2/guide/web-technologies/markdown/markdown-learning-material-01.html)
Markdown の全体像をつかむ章。Markdown が「記号を使って文書の構造を表す軽量マークアップ言語」であること、Word や HTML と比べたときのメリット（シンプル・軽い・どこでも使える）、GitHub・Qiita・Zenn・Notion・Slack・AI チャットなど実際に使われている場所、「.md ファイル → 変換（パーサー） → HTML → きれいに表示」という表示の仕組みを、書いたテキストと表示結果の Before/After を見ながら理解する。

### [2. 書く準備をしよう](https://fcircle-biz.github.io/tech-docs-v2/guide/web-technologies/markdown/markdown-learning-material-02.html)
Markdown を書く環境を整える章。.md ファイルとは何か（ただのテキストファイル・拡張子 .md）、エディタの選択肢（VS Code 推奨／メモ帳／StackEdit・Dillinger などのオンラインエディタ）、VS Code のインストールと日本語化、プレビューの開き方（Ctrl+Shift+V、横並びプレビュー Ctrl+K → V）を学び、実際に最初の .md ファイルを作成してプレビュー表示するところまでを実習する。便利な拡張機能（Markdown All in One）も簡単に紹介。

### [3. 見出しと段落](https://fcircle-biz.github.io/tech-docs-v2/guide/web-technologies/markdown/markdown-learning-material-03.html)
文書の骨組みを作る章。見出し記法（`#`〜`######` の6レベル、# の後には半角スペースが必須）、見出しレベルの正しい使い分け（文書の階層構造・レベルを飛ばさない）、段落の作り方（空行で区切る）、改行のルール（行末に半角スペース2つ、または `<br>` タグ。ツールによって挙動が違うこと）を学ぶ。「# の後のスペース忘れ」「空行を入れずに改行したつもりになる」などの初心者がつまずきやすいポイントも扱う。

### [4. 文字の装飾](https://fcircle-biz.github.io/tech-docs-v2/guide/web-technologies/markdown/markdown-learning-material-04.html)
文中の文字を飾る章。太字（`**太字**`）、斜体（`*斜体*`）、太字＋斜体（`***`）、打ち消し線（`~~打ち消し~~`）、インラインコード（バッククォートで囲む `` `code` ``）の書き方と使いどころを、記法と表示結果を対比しながら学ぶ。記号の前後の書き方の注意（記号と文字をくっつける）、日本語文書での斜体の見え方、装飾の使いすぎに注意といった実践的なコツも紹介する。

### [5. リスト](https://fcircle-biz.github.io/tech-docs-v2/guide/web-technologies/markdown/markdown-learning-material-05.html)
箇条書きを作る章。箇条書きリスト（`-`・`*`・`+`。ハイフン推奨、記号の後に半角スペース）、番号付きリスト（`1.` 形式・自動で連番になる仕組み）、リストの入れ子（インデントは半角スペース。箇条書きは2〜4個、ずれると崩れること）、タスクリスト（`- [ ]` / `- [x]`、GitHub などで使えるチェックボックス）を学ぶ。リストが正しく認識されないときの原因（スペース忘れ・インデントのずれ）も確認する。

### [6. リンクと画像](https://fcircle-biz.github.io/tech-docs-v2/guide/web-technologies/markdown/markdown-learning-material-06.html)
文書の外とつなぐ章。リンク記法（`[表示テキスト](URL)`・タイトル付きリンク）、URL をそのまま書く方法と自動リンク（`<https://example.com>`）、画像の埋め込み（`![代替テキスト](画像のURLまたはパス)`・リンクとの違いは先頭の `!`）、相対パスと URL の使い分け、画像にリンクを付ける組み合わせ技を学ぶ。代替テキスト（alt）の役割、画像サイズを変えたいときは HTML の `<img>` タグを使うことにも触れる。

### [7. コードブロックと引用](https://fcircle-biz.github.io/tech-docs-v2/guide/web-technologies/markdown/markdown-learning-material-07.html)
技術文書に欠かせない記法を学ぶ章。インラインコードとの違い、フェンス付きコードブロック（バッククォート3つ ``` で囲む）、言語名の指定によるシンタックスハイライト（```python など）、引用（`>`）、引用の入れ子（`>>`）、引用の中で使える他の記法を学ぶ。コマンド例・エラーメッセージ・設定ファイルなど「コードブロックを使うべき場面」と、他人の文章・注意書きなど「引用を使うべき場面」を整理する。

### [8. 表（テーブル）](https://fcircle-biz.github.io/tech-docs-v2/guide/web-technologies/markdown/markdown-learning-material-08.html)
情報を整理して見せる章。表の基本記法（`|` で列を区切り、2行目に `---` の区切り行を書く）、ヘッダー行・区切り行・データ行の3点セット、列の揃え方（`:---` 左揃え・`:---:` 中央揃え・`---:` 右揃え）、表の中で使える装飾（太字・インラインコード・リンク）と制約（セル内改行は `<br>` を使う）を学ぶ。縦棒の位置は完璧に揃えなくても動くこと、VS Code の整形支援など、表を楽に書くコツも紹介する。

### [9. その他の便利な記法](https://fcircle-biz.github.io/tech-docs-v2/guide/web-technologies/markdown/markdown-learning-material-09.html)
知っていると差がつく記法を学ぶ章。水平線（`---`・`***`。直前の行に文字があると見出し扱いになる罠に注意）、エスケープ（`\` を付けて記号をそのまま表示する）、HTML タグの併用（`<br>`・折りたたみの `<details>` など。使いすぎない）、コメント（`<!-- -->`・表示されないメモ）、脚注（`[^1]`・対応している環境）、絵文字コード（`:smile:` など GitHub 等で使える）を扱う。最後に「方言（フレーバー）」の存在（CommonMark・GitHub Flavored Markdown＝GFM）を紹介し、環境によって使える記法が少し違うことを理解する。

### [10. Mermaidで図を描く](https://fcircle-biz.github.io/tech-docs-v2/guide/web-technologies/markdown/markdown-learning-material-10.html)
Markdown 文書に図を描ける Mermaid 記法を学ぶ章。`` ```mermaid `` のコードブロックで囲むだけで図を生成できる仕組みと、画像ファイル不要・修正が簡単・差分が見えるといった利点を確認し、フローチャート（`flowchart TD`/`LR`、ノードの形、矢印とラベル付き分岐）、シーケンス図（`sequenceDiagram`）、円グラフやガントチャートなどの図の種類を学ぶ。GitHub・Notion・Zenn・Obsidian・VS Code など表示できる環境とできない環境の違い、日本語や括弧の扱いでつまずかないコツ、Mermaid Live Editor での試し方も紹介する。

### [11. 実践：READMEを書いてみよう](https://fcircle-biz.github.io/tech-docs-v2/guide/web-technologies/markdown/markdown-learning-material-11.html)
総仕上げの章。GitHub Flavored Markdown（GFM）でこれまでの記法がどう活きるかを確認し、README の役割と定番の構成（タイトル・概要・特徴・インストール方法・使い方・ライセンス）を学ぶ。架空のプロジェクトを題材に、見出し→リスト→表→コードブロック→リンク・画像と、学んだ記法を総動員して README を段階的に完成させる総合演習を行う。仕上げに全記法のチートシート（早見表）で復習し、次のステップ（Qiita/Zenn での記事執筆・HTML/CSS の学習など）を示す。

## 推奨所要時間

| 章 | 内容 | 目安時間 |
|----|------|----------|
| 第1章 | Markdownとは | 30分 |
| 第2章 | 書く準備をしよう | 30分 |
| 第3章 | 見出しと段落 | 30分 |
| 第4章 | 文字の装飾 | 30分 |
| 第5章 | リスト | 35分 |
| 第6章 | リンクと画像 | 35分 |
| 第7章 | コードブロックと引用 | 35分 |
| 第8章 | 表（テーブル） | 30分 |
| 第9章 | その他の便利な記法 | 35分 |
| 第10章 | Mermaidで図を描く | 40分 |
| 第11章 | 実践：READMEを書いてみよう | 45分 |
| **合計** | | **約6時間30分** |

## 学習目標

このガイドを完了すると、以下のスキルを身につけることができます：

- Markdown が何か、なぜ広く使われているのかを自分の言葉で説明できる
- VS Code などのエディタで .md ファイルを作成し、プレビューしながら編集できる
- 見出し・段落・装飾・リスト・リンク・画像・コードブロック・引用・表などの基本記法を使い分けて、読みやすい文書を書ける
- 記号をそのまま表示したいときのエスケープや、HTML タグの併用など、応用的な書き方ができる
- Mermaid 記法でフローチャートやシーケンス図を書き、文書に図を埋め込める
- GitHub の README を定番の構成で自分で作成できる

## 次のステップ

- [HTML / CSS の学習](https://fcircle-biz.github.io/tech-docs-v2/) — Markdown の変換先である HTML を学ぶと理解がさらに深まります
- [Git / GitHub 入門学習ガイド](https://fcircle-biz.github.io/tech-docs-v2/guide/development-processes/git-github/git-github-learning-material-01.html) — README を活かすバージョン管理・公開の学習
- Qiita / Zenn などでの技術記事の執筆に挑戦
