# GitHub Copilot Instructions

詳細ルールの正本は `docs/ai/` にあります。このファイルはその要約です。

## プロジェクト概要

- リポジトリ名: `aoneko-shobou-ui`
- 目的: 青猫書房 Web サイト向け UI コンポーネントライブラリ
- 公開先: GitHub Packages (`@hosonokotaro/aoneko-shobou-ui`)
- 技術スタック: React / TypeScript / Vite / Vanilla Extract / Storybook

## peerDependencies（利用側が用意するもの）

- `react` / `react-dom`
- `@vanilla-extract/css` / `@vanilla-extract/dynamic`
- `dayjs`
- `lodash-es`
- `swiper`
- `@googlemaps/js-api-loader`

## アーキテクチャ

- Atomic Design を採用
- `src/components/atoms/`: 最小単位コンポーネント
- `src/components/molecules/`: 複合コンポーネント
- 各コンポーネントは `.tsx` / `.css.ts` / `.stories.tsx` をセットで持つ
- Design token は `src/components/const/`（color.ts / size.ts / mediaQuery.ts / common.ts）
- パスエイリアス: `~/*` → `src/*`、`@/*` → `src/components/*`
- ビルド出力: UMD / ESM、型定義は `dist/types/`

## コーディング規約

- 既存の Atomic Design の責務分割を維持する
- Design token を優先し、値の直書きを避ける
- 新規コンポーネントは `.tsx` / `.css.ts` / `.stories.tsx` をセットで作成する
- 公開対象は `src/index.ts` に集約する
- 破壊的変更が発生する場合は明示する

## 変更後のチェック

1. `npm run typecheck` — TypeScript 型検査
2. `npm run lint` — ESLint（自動修正付き）
3. `npm run build` — ビルド確認
4. UI 変更時は Storybook で表示確認
