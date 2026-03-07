# Workflow

## 基本フロー

1. 変更対象の責務と影響範囲を確認する
2. 必要最小限の編集を行う
3. `npm run typecheck` と `npm run lint` を実行する
4. 必要に応じて `npm run build` と Storybook で確認する
5. 変更理由と影響範囲を記録する

## リリースフロー

master ブランチは保護されており、直接プッシュ不可。以下の手順で行う。

1. リリース用ブランチを作成する（例: `chore/bump-version-x.x.x`）
2. `npm version <patch|minor|major> --no-git-tag-version` でバージョンを更新する
3. `package.json` と `package-lock.json` をコミットして PR を作成する
4. CI が通ったら master にマージする
5. `git checkout master && git pull` でローカルを最新化する
6. `npm run tag` でタグを作成・push する（コミットは行わない）
7. `npm publish` で GitHub Package Registry に公開する

### 制約

- `npm run tag`（= `release-it --ci --no-increment`）はバージョン変更・コミットを行わず、タグの作成と push のみ行う
- バージョン変更は必ず PR 経由で行う。`npm run tag` の前に必ずマージ済みであること

## DoD

- 型検査が通る
- lint が通る
- 変更点が `src/index.ts` の公開方針と矛盾しない
- ルール更新時は `docs/ai` を正本として反映されている
