# 画像配置・ビルド・検証

## 配置先パス規則

| 種別 | パス |
|------|------|
| 画像配置先（ソース／公開アセット） | `astro-system/public/guide/<分類パス>/<slug>/images/<論理名>.<拡張子>` |
| 対象章の本文断片（編集対象） | `astro-system/src/chapters/<分類パス>/<slug>/<slug>-learning-material-NN.html` |
| ビルド出力（直接編集しない） | `docs/guide/<分類パス>/<slug>/...`（`images/` も自動コピーされる） |
| 参照 src（HTML 内） | `/tech-docs-v2/guide/<分類パス>/<slug>/images/<論理名>.<拡張子>` |

- `public/` 配下に置いたファイルは Astro が `docs/`（= `outDir`）へそのままコピーし、base 付きの同一相対パスで配信される。
- したがって `public/guide/.../images/x.png` は `https://…/tech-docs-v2/guide/.../images/x.png` で配信される。

## コピー手順

1. 配置先ディレクトリを作成: `astro-system/public/guide/<分類パス>/<slug>/images/`（`mkdir -p`）。
2. `work/<名称>/` の各画像を **正式名でコピー**する（`cp`）。
   - `work/` は `.gitignore` 対象。移動（`mv`）ではなく**コピー**で `public/` へ取り込む（元素材は work/ に温存）。
   - UUID/任意名 → 正式名のマッピングは Step 2（画像同定）で確定したものを使う。

## ビルド

```
cd astro-system && npm run build
```

- 出力先はリポジトリ直下の `docs/`。Lint/テストは無いのでビルド成功が一次ゲート。

## 検証チェックリスト

ビルド後、以下をすべて確認する（定型確認は model: haiku のサブに委譲してよい）。

1. **ビルド成功**: `npm run build` がエラーなく完了している。
2. **figure 数＝差し込み画像数**: 対象章の出力 HTML（`docs/...NN.html`）の `<figure` 出現数が、差し込んだ画像枚数と一致する。
   - 一致しない場合はインデント不整合等による差し込み漏れ。`references/figure-snippet.md` の「インデント整合」を確認して修正・再ビルド。
3. **画像が docs に出力**: `docs/guide/<分類パス>/<slug>/images/` に各正式名ファイルが存在する。
4. **src 解決**: 出力 HTML 内の各 `src="/tech-docs-v2/guide/.../images/<名>.<拡張子>"` が、`docs/` 配下の実ファイルに 1:1 で対応する（リンク切れ無し）。
5. （任意）**実機配信確認**: `npm run preview` を起動し、対象章ページと各画像 URL が HTTP 200 / `image/png` 等で配信されることを確認する。

## 検証コマンド例

```bash
# figure 数（出力 HTML）
grep -c '<figure' docs/guide/<分類パス>/<slug>/<slug>-learning-material-NN.html

# 画像の存在確認
ls -la docs/guide/<分類パス>/<slug>/images/

# src と実ファイルの対応（リンク切れ検出）
grep -o 'images/[A-Za-z0-9_-]*\.\(png\|jpg\|jpeg\|webp\|svg\|gif\)' \
  docs/guide/<分類パス>/<slug>/<slug>-learning-material-NN.html
```

## 完了後の案内
- 実機描画品質（ダークモード・レスポンシブ・配置バランス）を確認したい場合は `/docs-browser-review` を案内する。
- コミット／PR は本スキルの範囲外。`/git-pr` を案内する。
