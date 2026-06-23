---
name: release-bump-pr
description: Prepare a release version-bump pull request for this repository after implementation is complete and local checks are green. Use when the user wants the current work packaged for the next GitHub Packages release, but the repo requires version bumping through a PR before tagging and creating the GitHub Release.
---

# Release Bump PR

## Overview

Use this skill when the implementation work is done and the next step is to prepare the version bump branch and draft PR for release. This skill stops at the PR stage. It does not publish the package.

Read `references/repo-release-contract.md` before acting if you have not checked the repo's current release files in this turn.

## When To Use

Use this skill when:

- the user wants to release the current `master` state as a package
- the repo uses a protected default branch and requires the version bump through PR
- the task is to prepare the branch, version files, checks, commit, push, and draft PR

Do not use this skill when:

- the user only wants a release recommendation or SemVer discussion
- the user wants the post-merge tag or GitHub Release executed
- the worktree contains mixed unrelated changes and the intended release scope is not clear yet

## Workflow

1. Confirm release readiness.
   - Inspect `git status --short` and `git branch --show-current`.
   - If the worktree is mixed, do not stage broadly. Limit the PR to the version files or ask the user which files belong.
   - Re-check the repo release contract in `docs/ai/workflow.md`, `docs/ai/commands.md`, `package.json`, and `.github/workflows/`.

2. Ensure the release base is the latest `master`.
   - The release target is the current `master` state.
   - If not already on `master`, switch: `git checkout master`.
   - Update: `git pull --ff-only`.
   - Fetch tags: `git fetch --tags --prune`.
   - If checkout or pull is blocked by local changes or divergence, stop and ask the user.

3. Inspect the unreleased delta.
   - Find the latest version tag with `git describe --tags --abbrev=0` or `git tag --sort=-version:refname | head`.
   - Review commits and changed files since that tag.
   - If `HEAD` already matches the latest release tag, call that out before bumping again.

4. Choose the bump level.
   - `patch`: fixes and internal changes with no meaningful public API expansion
   - `minor`: backward-compatible public additions, dependency shifts, or feature-level changes
   - `major`: breaking exports, removed props, or incompatible runtime expectations
   - If the user has already chosen the bump, follow it unless the diff clearly looks breaking.

5. Create the bump branch and update the version.
   - Branch name: `chore/bump-version-x.y.z`
   - Run `npm version <patch|minor|major> --no-git-tag-version`
   - Only `package.json` and `package-lock.json` should change from the bump itself.

6. Run the release checks.
   - `npm run typecheck`
   - `npm run lint`
   - `npm run build`
   - Stop and surface failures before committing.

7. Commit only the bump files.
   - Stage `package.json` and `package-lock.json`
   - Commit message: `chore: bump version to x.y.z`

8. Push and open a draft PR.
   - Push the branch to `origin`
   - Open a draft PR to `master`
   - PR body should cover:
     - version change
     - why this bump level was chosen
     - validation commands run
   - Prefer GitHub app tooling for PR creation when available. Use `gh` only if it is authenticated and the connector path is not available.

9. Hand off the post-merge steps.
   - Tell the user the PR is ready.
   - Remind them that after merge the flow is:
     - `git checkout master`
     - `git pull`
     - `npm run tag`
     - create the GitHub Release from the pushed tag
   - Make clear that tag push alone does not publish the package in this repo.

## Guardrails

- Never bump and tag in the same step. This skill ends at the PR.
- Always base the bump branch on the latest `master`, never on a feature branch. Delta inspection and bump level judgment must also happen on `master`.
- Never include unrelated feature files in the bump PR unless the user explicitly asks for that.
- Treat `docs/ai` and workflow files as the source of truth when they disagree with older habits.
- If `gh auth status` fails, do not block on CLI auth if GitHub connector tooling can create the PR.

## Output Expectations

Report:

- chosen bump level and resulting version
- latest released tag and the delta reviewed
- branch name and commit SHA
- validation commands that passed
- PR URL
- the exact post-merge release handoff
