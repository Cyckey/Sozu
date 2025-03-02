import type { DefaultTheme } from 'vitepress'

export const search = {
  provider: 'local' as const,
  options: {
    detailedView: true,
    miniSearch: {
      /**
       * Configure MiniSearch options to better handle custom components Options
       * to help ensure content in custom components gets indexed properly
       */
      options: {
        // Include custom components like Links, Box, BoxCube, and Pill
        extractField: (document, fieldName) => {
          if (fieldName === 'content') {
            // Extract content from Vue component tags to include in search
            const content = document[fieldName] || ''
            return content
          }
          return document[fieldName]
        }
      },
      // Widen search parameters to catch more content
      searchOptions: {
        fuzzy: 0.3,
        prefix: true,
        boost: {
          title: 4,
          text: 2,
          titles: 1,
          // Give weight to link names and descriptions
          name: 3,
          desc: 2
        }
      }
    },
    // Additional localization options
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
}
