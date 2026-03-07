# Commands

## 開発

- `npm run build`: ライブラリをビルド
- `npm run lint`: ESLint を自動修正付きで実行
- `npm run typecheck`: TypeScript の型検査を実行
- `npm run format-code`: Prettier で整形
- `npm test`: 現在は `npm run lint` のエイリアス
- `npm run storybook`: Storybook 開発サーバーを起動
- `npm run build-storybook`: Storybook をビルド

## SVG

- `npm run svg-to-tsx`: `svg/` から `src/components/atoms/IconSvg` に TSX 生成

## リリース関連

- `npm run tag`: release-it によるタグ作成とリリース
- `npm run chromatic`: Chromatic へデプロイ

## 推奨チェック順

1. `npm run typecheck`
2. `npm run lint`
3. `npm run build`
