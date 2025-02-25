import type { DefaultTheme } from 'vitepress'

export const search: DefaultTheme.LocalSearchOptions = {
  locales: {
    root: {
      translations: {
        button: {
          buttonText: 'Search',
          buttonAriaLabel: 'Search'
        },
        modal: {
          displayDetails: 'Show Details',
          noResultsText: 'No Results Found',
          resetButtonTitle: 'Clear Query',
          backButtonTitle: 'Close Search',
          footer: {
            selectText: 'Select',
            navigateText: 'Switch',
            selectKeyAriaLabel: 'Input',
            navigateUpKeyAriaLabel: 'Up Arrow',
            navigateDownKeyAriaLabel: 'Down Arrow',
            closeText: 'Close',
            closeKeyAriaLabel: 'esc'
          }
        }
      }
    }
  }
}
