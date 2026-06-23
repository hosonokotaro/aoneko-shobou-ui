# Repo Release Contract

Use these files as the source of truth for release work in this repository.

- `docs/ai/workflow.md`
  - release flow requires version bump through PR on a protected `master`
  - `npm run tag` is for tag create/push only
- `docs/ai/commands.md`
  - lists the release-related commands exposed by the repo
- `package.json`
  - current package name and version
  - `tag` script is `release-it --ci --no-increment`
- `.github/workflows/release-package.yml`
  - package publish is triggered by GitHub Release creation
- `.github/workflows/push-tags.yml`
  - tag push triggers Chromatic, not package publish

Current release implications from those files:

1. Do the version bump in a branch and merge it through PR.
2. After merge, update local `master`, then run `npm run tag`.
3. Create a GitHub Release from that tag.
4. GitHub Actions publishes `@hosonokotaro/aoneko-shobou-ui` to GitHub Packages from the release event.

This means a successful tag push is not the end of the release flow. The GitHub Release is the publish trigger.
