export default {
  types: {
    feat: { title: 'Features', semver: 'minor' },
    fix: { title: 'Bug Fixes', semver: 'patch' },
    docs: { title: 'Documentation' },
    style: { title: 'Styles' },
    refactor: { title: 'Refactors', semver: 'patch' },
    perf: { title: 'Performance' },
    test: { title: 'Tests' },
    chore: { title: 'Chore', semver: 'patch' },
    ci: { title: 'CI' }
  },

  titles: {
    breakingChanges: 'Breaking Changes'
  },

  contributors: false,

  capitalize: false,

  group: false
}
