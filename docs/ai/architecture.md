# Architecture

## コンポーネント構成

- Atomic Design を採用
- `src/components/atoms/`: 最小単位コンポーネント
- `src/components/molecules/`: 複合コンポーネント

## ファイル構成の基本

- `.tsx`: 実装
- `.css.ts`: Vanilla Extract スタイル
- `.stories.tsx`: Storybook ストーリー

## デザインシステム

- Design token は `src/components/const/` に配置
- 主な定義:
  - `color.ts`
  - `size.ts`
  - `mediaQuery.ts`
  - `common.ts`
- グローバルスタイルは `src/globalStyle.css.ts`

## TypeScript / Build

- パスエイリアス:
  - `~/*` -> `src/*`
  - `@/*` -> `src/components/*`
- 型定義は `dist/types/` に出力
- バンドルは Vite で UMD / ESM を生成
