#!/usr/bin/env node

const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')

// Path to marker file
const MARKER_FILE = path.join(__dirname, '.post-commit-running')

// Main function
function main() {
  // Check if marker file exists (indicating hook is already running)
  if (fs.existsSync(MARKER_FILE)) {
    console.log('Post-commit hook is already running, exiting to prevent loop')
    return
  }

  try {
    // Create marker file
    fs.writeFileSync(MARKER_FILE, 'running', 'utf-8')

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
    execSync('git commit --amend --no-edit --no-verify', { stdio: 'inherit' })
    
    console.log('Successfully updated logs and amended commit')
  } catch (error) {
    console.error('Error in post-commit hook:', error)
  } finally {
    // Always remove marker file when done
    try {
      if (fs.existsSync(MARKER_FILE)) {
        fs.unlinkSync(MARKER_FILE)
      }
    } catch (error) {
      console.error('Error removing marker file:', error)
    }
  }
}

// Run the script
main()
