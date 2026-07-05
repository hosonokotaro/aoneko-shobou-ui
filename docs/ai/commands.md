# Commands

## 開発

- `npm run build`: ライブラリをビルド
- `npm run lint`: ESLint を自動修正付きで実行
- `npm run typecheck`: TypeScript の型検査を実行
- `npm run format-code`: Prettier で整形
- `npm test`: vitest でユニットテストを実行
- `npm run test:watch`: vitest を watch モードで実行
- `npm run storybook`: Storybook 開発サーバーを起動
- `npm run build-storybook`: Storybook をビルド

## SVG

- `npm run svg-to-tsx`: `svg/` から `src/components/atoms/IconSvg` に TSX 生成

## リリース関連

- `npm run tag`: タグの作成と push のみ行う（バージョン変更・コミットは行わない）。事前に PR でバージョンバンプを master にマージしておくこと
- `npm run chromatic`: Chromatic へデプロイ

## 推奨チェック順

1. `npm run typecheck`
2. `npm run lint`
3. `npm test`
4. `npm run build`
