#!/usr/bin/env node

const { execSync } = require('child_process')
const path = require('path')

// Check if the commit message already contains our marker
function isUpdateLogsCommit() {
  try {
    const commitMsg = execSync('git log -1 --pretty=%B', {
      encoding: 'utf-8'
    }).trim()
    return commitMsg.includes('[update logs]')
  } catch (error) {
    console.error('Error checking commit message:', error)
    return true // Assume it's an update logs commit to prevent potential loops
  }
}

// Main function
function main() {
  // If this is already an update logs commit, exit
  if (isUpdateLogsCommit()) {
    console.log('This is already an update logs commit, skipping')
    return
  }

  try {
    // Run the update-logs script
    console.log('Running update-logs script...')
    execSync('pnpm update-logs', { stdio: 'inherit' })

    // Get the current commit message
    const commitMsg = execSync('git log -1 --pretty=%B', {
      encoding: 'utf-8'
    }).trim()

    // Add the updated file and amend the commit
    console.log('Amending commit with updated logs...')
    execSync('git add docs/updates.md', { stdio: 'inherit' })
    execSync(`git commit --amend -m "${commitMsg} [update logs]" --no-verify`, {
      stdio: 'inherit'
    })

    console.log('Successfully updated logs and amended commit')
  } catch (error) {
    console.error('Error in post-commit hook:', error)
  }
}

// Run the script
main()
