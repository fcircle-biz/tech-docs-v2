# 問題コンポーネント集（question-components）

練習問題HTMLで使う問題スニペットを集約したファイル（DRY）。第1回HTML生成（step2-foundation）も第2回以降生成（step3-round-html）も、必ずここのスニペットを使用する。

---

## 最重要ルール

- 回答は **`<details>`/`<summary>` クリック展開式のみ**。「回答を表示」をクリックすると展開される形式にする。
- **textarea 入力欄は使用禁止。**
- **「実行して確認」ボタン等のインタラクティブ実行UIは使用禁止。**

詳細な共通ルールは `shared-rules.md` を参照。

---

## カラーについて

下記スニペットは Blue（Python等）を例にしている。技術のカラーテーマに合わせて `blue` を該当色（`sky`/`orange`/`yellow`/`emerald` 等）に読み替える。内側ボックスは**親と同系色の `-100` 背景＋`-900`/`-800` テキスト**を使う（半透明背景禁止）。カラー対応は `templates-and-paths.md` および `templates/v3/reference/color-themes.md` を参照。

---

## コーディング問題

```html
<div class="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-5">
    <div class="flex items-start gap-4">
        <div class="flex-shrink-0 w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
            <span class="text-white font-bold">1</span>
        </div>
        <div class="flex-1 min-w-0">
            <p class="font-medium text-blue-900 mb-3">
                <strong>問題タイトル</strong><br>
                問題文をここに記述します。
            </p>
            <details class="mt-3">
                <summary class="cursor-pointer text-blue-600 hover:text-blue-700 font-medium">
                    回答を表示
                </summary>
                <div class="mt-3 text-blue-800 bg-blue-100 rounded-lg p-4">
                    <p class="font-semibold mb-2">模範解答:</p>
                    <pre class="bg-slate-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto"><code class="language-java">// 模範解答コード</code></pre>
                    <p class="mt-3 text-sm">
                        <i class="fas fa-lightbulb mr-1"></i>
                        <strong>ポイント:</strong> 解説をここに記述
                    </p>
                </div>
            </details>
        </div>
    </div>
</div>
```

---

## 選択問題

```html
<div class="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-5">
    <div class="flex items-start gap-4">
        <div class="flex-shrink-0 w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
            <span class="text-white font-bold">2</span>
        </div>
        <div class="flex-1 min-w-0">
            <p class="font-medium text-blue-900 mb-3">
                <strong>問題タイトル</strong><br>
                問題文をここに記述します。
            </p>
            <div class="space-y-2 ml-4 text-sm text-blue-900">
                <p>ア. 選択肢A</p>
                <p>イ. 選択肢B</p>
                <p>ウ. 選択肢C</p>
                <p>エ. 選択肢D</p>
            </div>
            <details class="mt-3">
                <summary class="cursor-pointer text-blue-600 hover:text-blue-700 font-medium">
                    回答を表示
                </summary>
                <div class="mt-3 text-blue-800 bg-blue-100 rounded-lg p-4">
                    <p class="font-semibold">正解: ア</p>
                    <p class="mt-2">解説をここに記述します。</p>
                </div>
            </details>
        </div>
    </div>
</div>
```

---

## 穴埋め問題（応用例）

選択問題スニペットを流用し、選択肢ブロックの代わりに空欄を含むコード/文を提示する。回答は同じく `<details>` で展開し、正解＋「なぜそうなるか」＋よくある間違いを記す。

```html
<div class="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-5">
    <div class="flex items-start gap-4">
        <div class="flex-shrink-0 w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
            <span class="text-white font-bold">3</span>
        </div>
        <div class="flex-1 min-w-0">
            <p class="font-medium text-blue-900 mb-3">
                <strong>問題タイトル</strong><br>
                次のコードの空欄（　①　）を埋めてください。
            </p>
            <pre class="bg-slate-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto"><code class="language-python"># 空欄①を含むコード</code></pre>
            <details class="mt-3">
                <summary class="cursor-pointer text-blue-600 hover:text-blue-700 font-medium">
                    回答を表示
                </summary>
                <div class="mt-3 text-blue-800 bg-blue-100 rounded-lg p-4">
                    <p class="font-semibold mb-2">正解: ①〇〇</p>
                    <p class="mt-2 text-sm"><strong>なぜそうなるか:</strong> 理由を説明します。</p>
                    <p class="mt-2 text-sm"><strong>よくある間違い:</strong> 誤答例とその理由。</p>
                </div>
            </details>
        </div>
    </div>
</div>
```

---

## 記述問題（応用例）

問題文を提示し、回答（模範解答）を `<details>` で展開する。textarea は使わない。

```html
<div class="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-5">
    <div class="flex items-start gap-4">
        <div class="flex-shrink-0 w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
            <span class="text-white font-bold">4</span>
        </div>
        <div class="flex-1 min-w-0">
            <p class="font-medium text-blue-900 mb-3">
                <strong>問題タイトル</strong><br>
                〇〇について説明してください。
            </p>
            <details class="mt-3">
                <summary class="cursor-pointer text-blue-600 hover:text-blue-700 font-medium">
                    回答を表示
                </summary>
                <div class="mt-3 text-blue-800 bg-blue-100 rounded-lg p-4">
                    <p class="font-semibold mb-2">模範解答:</p>
                    <p class="text-sm">模範解答をここに記述します。</p>
                    <p class="mt-2 text-sm"><strong>ポイント:</strong> 押さえるべき観点。</p>
                </div>
            </details>
        </div>
    </div>
</div>
```

---

## 番号の連番化

各問題カードの番号バッジ（`<span class="text-white font-bold">N</span>`）は、その回の中で 1, 2, 3, ... と連番にする。
