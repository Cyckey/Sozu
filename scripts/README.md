# Scripts Directory

This directory contains utility scripts for the project.

## update-logs.js

This script fetches the Git commit history and generates a categorized log in `docs/updates.md`.
The commits are organized by month and include links to the GitHub repository.

### Usage

#### Manual Execution

Run the script from the project root:

```bash
# Using Node directly
node scripts/update-logs.js

# Using npm script (recommended)
npm run update-logs

# Using pnpm (if using pnpm)
pnpm update-logs
```

#### Automatic Execution

The commit logs are updated automatically through two methods:

1. **Git Hooks**: After each commit, a post-commit hook runs the script and amends the commit to include the updated logs.

2. **GitHub Actions**: A GitHub Action automatically updates the logs after each push to the main branch.

### What it does

1. Fetches up to 300 most recent commits from Git history
2. Organizes commits by month and year
3. Formats the data in Markdown with links to GitHub commits
4. Updates the `docs/updates.md` file with the organized commit logs

### Configuration

You can modify the script to adjust:

- `MAX_COMMITS`: The maximum number of commits to fetch (default: 300)
- `REPO_URL`: The GitHub repository URL (default: 'Cyckey/Sozu')
- Date formatting and display options

### Requirements

- Node.js
- Git repository with commits
