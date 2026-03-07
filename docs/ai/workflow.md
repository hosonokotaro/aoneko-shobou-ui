# Workflow

## 基本フロー

1. 変更対象の責務と影響範囲を確認する
2. 必要最小限の編集を行う
3. `npm run typecheck` と `npm run lint` を実行する
4. 必要に応じて `npm run build` と Storybook で確認する
5. 変更理由と影響範囲を記録する

## DoD

- 型検査が通る
- lint が通る
- 変更点が `src/index.ts` の公開方針と矛盾しない
- ルール更新時は `docs/ai` を正本として反映されている
