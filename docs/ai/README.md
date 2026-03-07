# AI Rules Hub

このディレクトリは、AI エージェント向けルールの一次情報です。
ルールの更新はここで行い、各エージェント用ファイルは参照の入口として扱います。

## 読み順

1. `project-context.md`
2. `commands.md`
3. `architecture.md`
4. `coding-rules.md`
5. `workflow.md`
6. `agent-specific/<agent>.md`

## ファイル構成

- `project-context.md`: プロジェクト概要と前提
- `commands.md`: 開発・検証・運用コマンド
- `architecture.md`: 実装構造と設計方針
- `coding-rules.md`: 実装時の規約
- `workflow.md`: 作業プロセスと完了条件
- `agent-specific/`: エージェントごとの差分ルール

## 運用ルール

- ルール本文は `docs/ai` のみを更新する
- `CLAUDE.md` / `AGENTS.md` / `CLINE.md` は参照先を示す最小構成を維持する
- 重複が発生した場合は `docs/ai` 側を正本とする
