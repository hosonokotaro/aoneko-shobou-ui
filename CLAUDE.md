# CLAUDE.md

このファイルは、このリポジトリでコードを操作する際に Claude Code (claude.ai/code) にガイダンスを提供します。

## コマンド

### 開発

- `npm run build` - Vite と TypeScript compiler を使用してライブラリをビルド
- `npm run lint` - TypeScript/TSX ファイルに対して ESLint を自動修正付きで実行
- `npm run typecheck` - ファイル出力なしで TypeScript の型チェックを実行
- `npm run format-code` - Prettier を使用してコードをフォーマット
- `npm test` - リンティングを実行（現在は `npm run lint` のエイリアス）
- `npm run storybook` - ポート 6006 で Storybook 開発サーバーを起動
- `npm run build-storybook` - 本番用の Storybook をビルド

### SVG 処理

- `npm run svg-to-tsx` - `./svg` ディレクトリの SVG ファイルを `./src/components/atoms/IconSvg` の TSX コンポーネントに変換

### リリース

- `npm run tag` - release-it を使用して git tag を作成しリリース
- `npm run chromatic` - ビジュアルテスト用に Chromatic にデプロイ

## アーキテクチャ

### コンポーネント構造

**Atomic Design** の原則を使用した React コンポーネントライブラリ：

- **Atoms** (`src/components/atoms/`): 基本的な構成要素（Anchor、Chip、HeadingText、Image など）
- **Molecules** (`src/components/molecules/`): 構成されたコンポーネント（Button、Icon、GlobalNavigation など）

各コンポーネントには以下が含まれます：

- `.tsx` - コンポーネントの実装
- `.css.ts` - Vanilla Extract スタイル
- `.stories.tsx` - Storybook ストーリー

### スタイリングシステム

- **Vanilla Extract** を使用した CSS-in-JS スタイリング（`.css.ts` ファイル）
- `src/components/const/` に整理された Design token：
  - `color.ts` - カラーパレット
  - `size.ts` - スペース、寸法、ブレークポイント
  - `mediaQuery.ts` - Media query ユーティリティ
  - `common.ts` - 共通定数
- `src/globalStyle.css.ts` にグローバルスタイル

### TypeScript 設定

- パスエイリアスの設定：
  - `~/*` は `src/*` にマップ
  - `@/*` は `src/components/*` にマップ
- 宣言ファイルは `./dist/types/` に生成
- パス変換に `typescript-transform-paths` を使用

### ビルドシステム

- **Vite** を React と Vanilla Extract プラグインでバンドリング
- UMD（`index.umd.js`）と ES modules（`index.mjs`）をビルド
- 外部依存関係：React、Vanilla Extract、dayjs、lodash-es、Swiper、Google Maps

### テストと品質管理

- `@hosonokotaro/eslint-rules` のカスタムルールを使用した ESLint
- `@hosonokotaro/prettier-format` による Prettier フォーマット
- コンポーネントドキュメントとビジュアルテスト用の Storybook
- ビジュアルリグレッションテスト用の Chromatic

### ライブラリエクスポート

メインエントリーポイントは `src/index.ts` で、すべてのコンポーネント、型、Design token をエクスポートします。ライブラリは GitHub Packages に `@hosonokotaro/aoneko-shobou-ui` として公開されています。
