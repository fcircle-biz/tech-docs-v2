# Keycloak学習教材

Keycloak（キークローク）を初めて学ぶ人のための入門学習ガイド（全13章）です。「ログイン機能を自分で作ると何が大変なのか」という課題から始め、**認証と認可の違い**・**OAuth 2.0 / OpenID Connect** の考え方をつかみます。その後 **Docker** で Keycloak を起動して管理コンソールに入り、**レルム** → **クライアント** → **ユーザー** → **ロール／グループ** の順に設定を積み上げ、実際にブラウザでログインしてトークンの中身を読み解きます。最後に、アプリを Keycloak で保護する方法、セッションとログアウトの扱い、ログイン画面のカスタマイズと二要素認証、ソーシャルログインや LDAP 連携、本番運用の注意点までを順を追って学びます。

| 項目 | 内容 |
|------|------|
| 難易度 | 初級 |
| 所要時間 | 約11時間 |
| 分類 | セキュリティ |

## 前提条件

### 必要な環境
- Windows 10/11 または macOS（Intel / Apple シリコン）
- Docker が使える環境（Docker Desktop または Rancher Desktop）
- Webブラウザ（Google Chrome など。開発者ツールを使います）
- テキストエディタ（Visual Studio Code など）
- 第9章のアプリ連携で Java 17 以上（Spring Boot のサンプルを動かす場合。読み進めるだけでも学習できます）

### 参考リソース
- [Keycloak 公式サイト](https://www.keycloak.org/)
- [Keycloak 公式ドキュメント](https://www.keycloak.org/documentation)
- [Keycloak Server Administration Guide](https://www.keycloak.org/docs/latest/server_admin/)
- [OpenID Connect 公式サイト](https://openid.net/developers/how-connect-works/)
- [RFC 6749 - The OAuth 2.0 Authorization Framework](https://datatracker.ietf.org/doc/html/rfc6749)

### 前提知識
- **必須**: 基本的なPC操作、Webブラウザの操作、URL・HTTP という言葉を聞いたことがある程度
- **推奨**: Docker の基本コマンド（`docker run` など）を触ったことがある、Webアプリの仕組み（サーバーとブラウザのやり取り）をなんとなく知っている

> Docker が初めての場合は、先に [Docker学習教材](https://fcircle-biz.github.io/tech-docs-v2/guide/cloud-infrastructure/docker/docker-learning-material-01.html) の第1〜3章に目を通しておくとスムーズです。

## 学習コンテンツ

### [1. Keycloakとは何か](https://fcircle-biz.github.io/tech-docs-v2/guide/security/keycloak/keycloak-learning-material-01.html)
ログイン機能を各アプリが自前で作ると何が起きるのかを整理し、その解決策としての **IAM（ID・アクセス管理）** と **シングルサインオン（SSO）** を理解します。Keycloak が「アプリの代わりにログインを引き受ける受付係」であることを、身近なたとえでつかみます。

### [2. 認証と認可のきほん](https://fcircle-biz.github.io/tech-docs-v2/guide/security/keycloak/keycloak-learning-material-02.html)
**認証（あなたは誰か）** と **認可（何をしてよいか）** の違いを整理し、Keycloak が話す共通言語である **OAuth 2.0** と **OpenID Connect** の役割を学びます。IDトークン・アクセストークンという2種類のトークンの使い分けを理解します。

### [3. Keycloakを起動して管理コンソールに入る](https://fcircle-biz.github.io/tech-docs-v2/guide/security/keycloak/keycloak-learning-material-03.html)
Docker で Keycloak を開発モード（`start-dev`）で起動し、管理コンソールに管理者としてログインします。画面の見方と、開発モードと本番モードの違いを押さえます。

### [4. レルム — アプリの世界を分ける](https://fcircle-biz.github.io/tech-docs-v2/guide/security/keycloak/keycloak-learning-material-04.html)
Keycloak の最重要概念である **レルム（realm）** を学びます。master レルムを管理専用に保ち、学習用レルムを新しく作って「利用者の世界」を分ける理由と手順を理解します。

### [5. クライアント登録 — アプリをつなぐ](https://fcircle-biz.github.io/tech-docs-v2/guide/security/keycloak/keycloak-learning-material-05.html)
アプリを Keycloak に登録する **クライアント（client）** を作成します。クライアントID・リダイレクトURI・パブリック／機密クライアントの違いなど、つまずきやすい設定項目を1つずつ確認します。

### [6. ユーザー管理の基本](https://fcircle-biz.github.io/tech-docs-v2/guide/security/keycloak/keycloak-learning-material-06.html)
ユーザーの作成、パスワードの設定、`Temporary`（仮パスワード）や必須アクション、メールアドレス確認、アカウントの有効・無効といった日常的な運用操作を学びます。ユーザー自身が使うアカウントコンソールも紹介します。

### [7. ロールとグループで権限を管理する](https://fcircle-biz.github.io/tech-docs-v2/guide/security/keycloak/keycloak-learning-material-07.html)
**ロール（役割）** による認可の考え方を学びます。レルムロールとクライアントロールの違い、複合ロール、**グループ** を使った権限のまとめ付けを、管理しやすい設計の観点から整理します。

### [8. ログインを体験する — 認可コードフローとトークン](https://fcircle-biz.github.io/tech-docs-v2/guide/security/keycloak/keycloak-learning-material-08.html)
実際にブラウザで Keycloak のログイン画面を通り、**認可コードフロー** の流れを目で追います。発行されたトークン（JWT）をデコードして中身を読み、`sub` / `exp` / `roles` などの意味を理解します。

### [9. アプリをKeycloakで保護する](https://fcircle-biz.github.io/tech-docs-v2/guide/security/keycloak/keycloak-learning-material-09.html)
サンプルアプリを Keycloak と連携させ、ログインしていないとページを見られない状態にします。設定ファイル（issuer-uri など）で何を指定しているのか、アプリ側は何をしているのかを読み解きます。

### [10. セッション・トークン・ログアウトの管理](https://fcircle-biz.github.io/tech-docs-v2/guide/security/keycloak/keycloak-learning-material-10.html)
アクセストークンの有効期限、リフレッシュトークンによる更新、SSOセッションのアイドル／最大時間、そしてログアウト（シングルログアウト）の挙動を学び、「どこまでログイン状態が続くのか」を自分で制御できるようにします。

### [11. ログイン画面のカスタマイズとセキュリティ強化](https://fcircle-biz.github.io/tech-docs-v2/guide/security/keycloak/keycloak-learning-material-11.html)
ログイン画面の表示設定とテーマ、パスワードポリシー、ブルートフォース攻撃の検知、ワンタイムパスワード（OTP）による二要素認証など、実運用で必ず検討する設定を学びます。

### [12. 外部ID連携とユーザーフェデレーション](https://fcircle-biz.github.io/tech-docs-v2/guide/security/keycloak/keycloak-learning-material-12.html)
GitHub や Google などの **アイデンティティプロバイダー** を使ったソーシャルログインと、社内の **LDAP / Active Directory** に既にあるユーザーを Keycloak から利用する **ユーザーフェデレーション** の考え方を学びます。

### [13. 本番運用に向けて](https://fcircle-biz.github.io/tech-docs-v2/guide/security/keycloak/keycloak-learning-material-13.html)
開発モードのままでは本番に出せない理由を確認し、データベース接続・HTTPS・ホスト名設定・エクスポート／インポートによるバックアップ・監視とログなど、本番運用の勘所とセキュリティのチェックリストをまとめます。

## 推奨所要時間

| 章 | 内容 | 目安時間 |
|----|------|----------|
| 第1章 | Keycloakとは何か | 約40分 |
| 第2章 | 認証と認可のきほん | 約50分 |
| 第3章 | Keycloakを起動して管理コンソールに入る | 約50分 |
| 第4章 | レルム — アプリの世界を分ける | 約40分 |
| 第5章 | クライアント登録 — アプリをつなぐ | 約50分 |
| 第6章 | ユーザー管理の基本 | 約45分 |
| 第7章 | ロールとグループで権限を管理する | 約50分 |
| 第8章 | ログインを体験する — 認可コードフローとトークン | 約55分 |
| 第9章 | アプリをKeycloakで保護する | 約60分 |
| 第10章 | セッション・トークン・ログアウトの管理 | 約45分 |
| 第11章 | ログイン画面のカスタマイズとセキュリティ強化 | 約50分 |
| 第12章 | 外部ID連携とユーザーフェデレーション | 約50分 |
| 第13章 | 本番運用に向けて | 約50分 |
| **合計** | | **約11時間** |

## 学習目標

このガイドを完了すると、以下のスキルを身につけることができます：

- 認証と認可の違い、SSO と IAM が解決する課題を自分の言葉で説明できる
- OAuth 2.0 / OpenID Connect の登場人物（利用者・アプリ・認可サーバー）と、IDトークン／アクセストークンの役割を説明できる
- Docker で Keycloak を起動し、管理コンソールから設定を行える
- レルム・クライアント・ユーザー・ロール・グループを作成し、適切に使い分けられる
- 認可コードフローの流れを説明し、発行された JWT の中身を読み解ける
- アプリを Keycloak と連携させ、ログイン必須のページを作れる
- トークンの有効期限・セッション・ログアウトの設定を理解し、目的に合わせて調整できる
- パスワードポリシー・二要素認証・ブルートフォース検知でログインを強化できる
- ソーシャルログインや LDAP 連携の構成を理解し、必要な設定項目を判断できる
- 本番運用で必要な設定（DB・HTTPS・ホスト名・バックアップ）とセキュリティ上の注意点を挙げられる

## 次のステップ

本教材を終えたら、以下のような発展テーマに進むと、より実践的な ID 基盤の構築ができるようになります。

- 認可の詳細制御（Keycloak Authorization Services／きめ細かい権限管理）
- クライアントスコープとプロトコルマッパーによるトークンのカスタマイズ
- Authentication Flow のカスタマイズ（条件付き多要素認証・ステップアップ認証）
- Admin REST API / kcadm.sh による設定の自動化、Infrastructure as Code 化
- Kubernetes 上での運用（Keycloak Operator・高可用構成・クラスタリング）
- OAuth 2.0 のセキュリティベストプラクティス（PKCE・トークン漏洩対策・ゼロトラスト）
- 他の IAM 製品（Microsoft Entra ID・Okta・Auth0）との比較検討
