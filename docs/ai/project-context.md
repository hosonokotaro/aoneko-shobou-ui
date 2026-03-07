# Project Context

## 概要

- リポジトリ名: `aoneko-shobou-ui`
- 目的: 青猫書房 Web サイト向け UI コンポーネントライブラリ
- 公開先: GitHub Packages (`@hosonokotaro/aoneko-shobou-ui`)

## 技術スタック

- React
- TypeScript
- Vite
- Vanilla Extract
- Storybook

## 成果物の前提

- ライブラリとして UMD / ESM を出力する
- 型定義を配布する
- `src/index.ts` を単一のエントリーポイントとして扱う

## peerDependencies（利用側が用意するもの）

- `react` / `react-dom`
- `@vanilla-extract/css` / `@vanilla-extract/dynamic`
- `dayjs`
- `lodash-es`
- `swiper`
- `@googlemaps/js-api-loader`
