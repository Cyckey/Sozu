#!/usr/bin/env node

/** Script to fetch GitHub commit logs and categorize them by month in updates.md */

const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

// Configuration
const REPO_URL = 'Cyckey/Sozu'
const OUTPUT_FILE = path.join(__dirname, '..', 'docs', 'updates.md')
const MAX_COMMITS = 300 // Limit number of commits to fetch

// Helper functions
function formatDate(dateString) {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

function getMonthYear(dateString) {
  const date = new Date(dateString)
  return `${date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}`
}

// Get git commits
function getCommits() {
  try {
    // Use a simpler format for Windows compatibility
    const gitCommand = `git log -${MAX_COMMITS} --date=iso --pretty=format:"%H|%h|%an|%ae|%ad|%s"`

    let output = execSync(gitCommand, { encoding: 'utf-8' })

    // Parse the output manually
    return output
      .split('\n')
      .filter((line) => line.trim() !== '')
      .map((line) => {
        const [
          hash,
          abbreviated_hash,
          author_name,
          author_email,
          date,
          ...subjectParts
        ] = line.split('|')
        return {
          hash,
          abbreviated_hash,
          author_name,
          author_email,
          date,
          subject: subjectParts.join('|') // In case the commit message contains the delimiter
        }
      })
  } catch (error) {
    console.error('Error fetching git commits:', error.message)
    return []
  }
}

// Group commits by month
function groupCommitsByMonth(commits) {
  const grouped = {}

  commits.forEach((commit) => {
    const monthYear = getMonthYear(commit.date)

    if (!grouped[monthYear]) {
      grouped[monthYear] = []
    }

    grouped[monthYear].push(commit)
  })

  return grouped
}

// Generate markdown from grouped commits
function generateMarkdown(groupedCommits) {
  let markdown = '# Project Updates\n\n'
  markdown +=
    'Below are the commit logs from the GitHub repository, organized by month.\n\n'

  // Get months in reverse chronological order
  const months = Object.keys(groupedCommits).sort((a, b) => {
    return new Date(b) - new Date(a)
  })

  months.forEach((month) => {
    markdown += `## ${month}\n\n`

    groupedCommits[month].forEach((commit) => {
      const date = formatDate(commit.date)
      markdown += `- **${date}**: ${commit.subject} [\`${commit.abbreviated_hash}\`](https://github.com/${REPO_URL}/commit/${commit.hash})\n`
    })

    markdown += '\n'
  })

  return markdown
}

// Main function
function main() {
  console.log('Fetching commits...')
  const commits = getCommits()

  if (commits.length === 0) {
    console.error('No commits found')
    return
  }

  console.log(`Found ${commits.length} commits`)

  const groupedCommits = groupCommitsByMonth(commits)
  const markdown = generateMarkdown(groupedCommits)

  // Write to file
  fs.writeFileSync(OUTPUT_FILE, markdown, 'utf-8')

  console.log(`✅ Updated ${OUTPUT_FILE} with ${commits.length} commits`)
}

// Run the script
main()
