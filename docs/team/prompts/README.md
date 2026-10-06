# Starter prompts for Claude Code

One prompt per person. Paste yours as the first message in a new Claude Code chat (VS Code extension) opened on your clone of this repository. Claude also reads `.claude/CLAUDE.md` automatically.

Before the first session: `gh auth login`, `pnpm install`, `tools/scripts/py-setup.sh`.

| Person | Prompt | First issue |
|---|---|---|
| Faizan (@faizanrooman) | [faizan.md](faizan.md) | #60 |
| Himanshu (@himanshu-rooman) | [himanshu.md](himanshu.md) | #61 |
| Praveen (@praveen-rooman) | [praveen.md](praveen.md) | #62 |
| Shivani (@shivanisinghrooman-09) | [shivani.md](shivani.md) | #63 |
| Akshata (@akshatatrathodrooman) | [akshata.md](akshata.md) | #64 |
| Ashritha (@Ashritharooman) | [ashritha.md](ashritha.md) | #65 |
| Gokula Lakshmi (@gokulalakshmirooman-source) | [gokula-lakshmi.md](gokula-lakshmi.md) | #66 |
| Tejaswini (@tejaswini-rooman) | [tejaswini.md](tejaswini.md) | #67 |
| Madhumita (@madhumitha-rooman) | [madhumita.md](madhumita.md) | #68 |
| Srujan (@srujanrooman) | [srujan.md](srujan.md) | #69 |

## Resuming in a later session

````markdown
Continue my Education OS work. Follow `.claude/CLAUDE.md` and `docs/team/RULES.md`.
1. Run `git status`, `git branch --show-current` and `gh issue list --assignee @me --state open`.
2. If my branch's issue is closed, switch to `main`, pull, and start a new branch for the new issue.
3. Otherwise `git fetch origin && git rebase origin/main`, then tell me what is done, what is left for the issue, and the next step.
Stay inside the paths I own, run `tools/scripts/precheck.sh` before any push, and do not write code until I confirm the next step.
````

Why these prompts prevent merge conflicts: each person changes only their own modules, touches another module only for widget files with the owner reviewing, never edits shared configuration, works on one issue per branch, and rebases daily with a fixed rule for the lockfile.
