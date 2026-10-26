# My Portfolio (ポートフォリオ)

このリポジトリは、私の作品（Web アプリ・実験的な UI・3D 表現など）をまとめたポートフォリオサイトのソースコードです。
デザインと技術の両方を見せることを目的としており、3D モデル表示や作品の切り替え機能などを取り入れています。

## リンク
ポートフォリオサイト: https://satoyaiwamuro.com/

## 主な特徴
- 作品一覧と選択中の作品詳細（レスポンシブ）
- 3D 表示（Three.js + @react-three/fiber）
- メールリンクによる問い合わせ
- 軽量で高速なビルド（Vite）

## 技術スタック
- フレームワーク: React
- ビルドツール: Vite
- 3D: three, @react-three/fiber, @react-three/drei
- UI: react-icons

（開発依存やスクリプトの詳細はルートの `package.json` を参照してください）

## 動作環境（前提）
- Node.js（推奨 LTS 版）
- npm または yarn

## 使い方（ローカルで確認）
1. リポジトリをクローンまたはワークツリーを取得し、ルートディレクトリに移動します。
2. 依存関係をインストールします:

```bash
npm install
# または
# yarn
```

3. 開発サーバを起動します:

```bash
npm run dev
# ブラウザで http://localhost:5173 を開きます
```

4. ビルド / プレビュー:

```bash
npm run build
npm run preview
```

5. リント:

```bash
npm run lint
```

## フォルダ構成（要約）
- `package.json` — 依存関係とスクリプト
- `public/` — 静的アセット
- `src/App.jsx` — 各セクションを配置する画面構成
- `src/components/` — ヘッダー、ヒーロー、作品、プロフィール、フッターの表示と操作
- `src/data/siteContent.js` — 作品、プロフィール、ナビゲーションなどのモックデータ
- `src/styles/` — 共通およびセクション別のスタイル

作品を追加・変更するときは `src/data/siteContent.js` の `projects` を編集します。`intro` は一覧の紹介文、`description` は選択後の説明文です。`image` は `public/` 以下のパスを指定します。作品の選択状態は `WorkSection` 内で管理し、現在は Context を使用していません。

## デプロイ
静的サイトホスティング（Netlify、Vercel、GitHub Pages など）へビルド成果物をアップロードしてください。Vite の `build` コマンドで生成される `dist` フォルダをデプロイ対象とします。
