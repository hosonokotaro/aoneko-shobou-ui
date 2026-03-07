# Copilot Specific Rules

- Copilot 向け入口ファイルは `.github/copilot-instructions.md` とする
- Copilot は外部ファイルを動的に参照できないため、`copilot-instructions.md` に `docs/ai/` の内容を要約して記載する
- ルール変更時は `docs/ai/` を先に更新し、`copilot-instructions.md` の要約も合わせて反映する
