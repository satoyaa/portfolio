# My Portfolio (ポートフォリオ)

このリポジトリは、私の作品（Web アプリ・実験的な UI・3D 表現など）をまとめたポートフォリオサイトのソースコードです。
デザインと技術の両方を見せることを目的としており、3D モデル表示やメール送信機能などを取り入れています。

## リンク
ポートフォリオサイト: https://satoyaiwamuro.com/

## 主な特徴
- 作品ギャラリー（レスポンシブ）
- 3D 表示（Three.js + @react-three/fiber）
- お問い合わせフォーム（EmailJS を利用）
- 軽量で高速なビルド（Vite）

## 技術スタック
- フレームワーク: React
- ビルドツール: Vite
- 3D: three, @react-three/fiber, @react-three/drei
- UI: react-icons, swiper
- メール送信: @emailjs/browser

（開発依存やスクリプトの詳細は my-portfolio/package.json を参照してください）

## 動作環境（前提）
- Node.js（推奨 LTS 版）
- npm または yarn

## 使い方（ローカルで確認）
1. リポジトリをクローンまたはワークツリーを取得します。
2. my-portfolio ディレクトリに移動します:

```bash
cd my-portfolio
```

3. 依存関係をインストールします:

```bash
npm install
# または
# yarn
```

4. 開発サーバを起動します:

```bash
npm run dev
# ブラウザで http://localhost:5173 を開きます
```

5. ビルド / プレビュー:

```bash
npm run build
npm run preview
```

6. リント:

```bash
npm run lint
```

## フォルダ構成（要約）
- my-portfolio/
	- public/ — 静的アセット
	- src/ — React コンポーネント、スタイル、アセット
	- src/components — ページ構成コンポーネント（Profile, Portfolio, Contact など）

## デプロイ
静的サイトホスティング（Netlify、Vercel、GitHub Pages など）へビルド成果物をアップロードしてください。Vite の `build` コマンドで生成される `dist` フォルダをデプロイ対象とします。
