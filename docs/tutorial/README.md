# 技術チュートリアル

実際にコードを書きながら学ぶ実践的なチュートリアル集です。各チュートリアルはユーザー管理システムの開発を通じて、フレームワークの理解を深めます。

## 📋 目次

- [📖 概要](#-概要)
- [📖 チュートリアル一覧](#-チュートリアル一覧)

---

## 📖 概要

このディレクトリには、実践的なハンズオン形式のチュートリアルが含まれています。各チュートリアルは以下の特徴を持っています：

- **実践重視**: 実際にコードを書きながら学習
- **プロジェクトベース**: ユーザー管理システムの開発を通じた実践
- **段階的学習**: 環境構築から高度な機能まで順序立てた構成
- **6-10章構成**: 完結した学習カリキュラム

---

## 📖 チュートリアル一覧

### .NET

#### ASP.NET (VB.NET)
- **[ASP.NET(VB.NET)実践チュートリアル](dotnet-ecosystem/aspnet-vb/README.md)**
  - ASP.NET Web FormsとVB.NETによるユーザー管理システム開発
  - 構成: 6章
  - 対象: .NET Framework, Web Forms, ADO.NET

#### ASP.NET Core MVC (VB.NET)
- **[ASP.NET Core MVC(VB.NET)実践チュートリアル](dotnet-ecosystem/aspnet-core-mvc-vb/README.md)**
  - ASP.NET Core MVCとEntity Framework Coreを使用したモダンなWebアプリケーション開発
  - 構成: 7章
  - 対象: .NET Core, MVC, Entity Framework Core

---

### Java

#### Spring AI + Ollama
- **[Spring AI + Ollama + Qwen3実践チュートリアル](java-ecosystem/spring-ai/README.md)**
  - Spring AIフレームワークとOllama、Qwen3大規模言語モデルを使用したAI対話型Webアプリケーション開発
  - 構成: 5章
  - 対象: Spring AI, Ollama, LLM, Docker

#### Spring Boot + Gradle
- **[Spring Boot + Gradle実践チュートリアル](java-ecosystem/spring-boot-gradle/README.md)**
  - Spring BootとGradleを使用したモダンなJava Webアプリケーション開発
  - Docker環境でのPostgreSQL連携、Spring MVC、Spring Data JPA、Thymeleafによるユーザー管理システム開発
  - 構成: 10章
  - 対象: Spring Boot, Gradle, PostgreSQL, Docker

#### JSP/Servlet/JDBC
- **[JSP/Servlet/JDBC実践チュートリアル](java-ecosystem/jsp-servlet-jdbc/README.md)**
  - Eclipse IDEを使用したJavaのWebアプリケーション開発基礎技術
  - MVCパターンに基づいたユーザー管理システム開発
  - 構成: 7章
  - 対象: JSP, Servlet, JDBC, Eclipse

#### Struts 1.x
- **[Struts 1.x実践チュートリアル](java-ecosystem/struts1/README.md)**
  - Apache Struts 1.xフレームワークを使用したWebアプリケーション開発
  - 構成: 6章
  - 対象: Struts 1.x, ActionForm, Validator

---

### JavaScript

#### Next.js
- **[Next.js実践チュートリアル](javascript-ecosystem/nextjs/README.md)**
  - Next.jsフレームワークを使用したモダンなReactアプリケーション開発
  - 対象: Next.js, React, App Router, API Routes

#### React
- **[React実践チュートリアル](javascript-ecosystem/react/README.md)**
  - Reactライブラリを使用したモダンなWebアプリケーション開発
  - 対象: React, Hooks, コンポーネント設計

---

### PHP

#### PHP基礎
- **[PHP実践チュートリアル](php-ecosystem/php/README.md)**
  - PHPの基本文法からデータベース連携まで、初心者向けユーザー管理システム開発チュートリアル
  - 構成: 6章
  - 対象: PHP, MySQL, セッション管理

---

### Python

#### Django + PostgreSQL
- **[Django + PostgreSQL実践チュートリアル](python-ecosystem/django/README.md)**
  - DjangoフレームワークとPostgreSQL（Docker環境）を使用したモダンなPython Webアプリケーション開発
  - Windows環境での開発を前提に、Docker DesktopによるPostgreSQLコンテナ管理からDjangoの基本機能まで
  - 構成: 9章
  - 対象: Django, PostgreSQL, Docker, MTV

#### FastAPI + SQLAlchemy
- **[FastAPI + SQLAlchemy実践チュートリアル](python-ecosystem/fastapi-sqlalchemy/README.md)**
  - FastAPIとSQLAlchemyを使用したモダンなWebアプリケーション開発
  - 構成: 7章
  - 対象: FastAPI, SQLAlchemy, Pydantic, 非同期処理

#### Streamlit + SQLModel
- **[Streamlit + SQLModel実践チュートリアル](python-ecosystem/streamlit-sqlmodel/README.md)**
  - StreamlitとSQLModelを使用したモダンなWebアプリケーション開発
  - 構成: 6章
  - 対象: Streamlit, SQLModel, データアプリケーション

---

### ローコード / Business SaaS

#### OutSystems
- **[OutSystems入門チュートリアル](business-saas/outsystems/README.md)**
  - プログラミング未経験者向けのローコード開発入門
  - タスク管理アプリを作りながらOutSystemsの基本を習得
  - 構成: 10章
  - 対象: OutSystems, ローコード開発, Service Studio, Personal Environment

---

## 📁 フォルダ構成

```
docs/tutorial/
├── business-saas/                 # ローコード / Business SaaS
│   └── outsystems/               # OutSystems入門
├── dotnet-ecosystem/              # .NETエコシステム
│   ├── aspnet-vb/                # ASP.NET Web Forms (VB.NET)
│   └── aspnet-core-mvc-vb/       # ASP.NET Core MVC (VB.NET)
├── java-ecosystem/                # Javaエコシステム
│   ├── spring-ai/                # Spring AI + Ollama + Qwen3
│   ├── spring-boot-gradle/       # Spring Boot + Gradle
│   ├── jsp-servlet-jdbc/         # JSP/Servlet/JDBC
│   └── struts1/                  # Struts 1.x
├── javascript-ecosystem/          # JavaScriptエコシステム
│   ├── nextjs/                   # Next.js
│   └── react/                    # React
├── php-ecosystem/                 # PHPエコシステム
│   └── php/                      # PHP基礎
└── python-ecosystem/              # Pythonエコシステム
    ├── django/                   # Django + PostgreSQL
    ├── fastapi-sqlalchemy/       # FastAPI + SQLAlchemy
    └── streamlit-sqlmodel/       # Streamlit + SQLModel
```

---

## 🔗 関連リンク

- [学習ガイドライン](../guide/README.md) - 包括的な学習ガイド
- [スライド教材](../slide/README.md) - スライド形式の教材
- [チートシート](../cheatsheet/README.md) - クイックリファレンス
- [リポジトリのREADME.md](../../README.md) - リポジトリトップ

---
