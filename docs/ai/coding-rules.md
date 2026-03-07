# Coding Rules

## 実装方針

- 既存の Atomic Design の責務分割を維持する
- 既存の Design token を優先し、値の直書きを避ける
- 新規コンポーネントは基本的に `.tsx` / `.css.ts` / `.stories.tsx` をセットで作成する

## エクスポート方針

- 公開対象は `src/index.ts` に集約する
- 破壊的変更が発生する場合は明示する

## 品質方針

- 変更後は少なくとも `typecheck` と `lint` を通す
- UI 変更時は Storybook 上の表示確認を優先する
