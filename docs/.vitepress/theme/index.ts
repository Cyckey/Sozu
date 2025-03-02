import DefaultTheme from 'vitepress/theme'

import { h } from 'vue'

import {
  Announcement,
  DocAsideLogo,
  DocBox,
  DocBoxCube,
  DocLinks,
  DocPill,
  DocVideoLink,
  HomeFooter,
  HomeUnderline,
  ShareButton
} from '@theojs/lumen'
import '@theojs/lumen/theme'

import { Footer_Data } from '../data'

import 'virtual:group-icons.css'

/**
 * Custom search indexer to enhance the VitePress search functionality This
 * helps the search index to include content from our custom components
 */
const createSearchHooks = () => {
  // Hook to extract content from our custom components
  const transformHtmlForSearch = (html: string) => {
    // Keep the original HTML
    let result = html

    // Extract text content from Links components for search indexing
    const linksPattern = /<Links\s+.*?items="\[(.*?)\]".*?>/gs
    const linksMatches = [...result.matchAll(linksPattern)]

    for (const match of linksMatches) {
      if (match[1]) {
        const items = match[1].split(',').map((item) => item.trim())
        const extractedContent = items
          .map((item) => {
            // Extract name/desc properties from the items
            const nameMatch = item.match(/name:\s*['"]([^'"]*)['"]/i)
            const descMatch = item.match(/desc:\s*['"]([^'"]*)['"]/i)

            return [
              nameMatch ? nameMatch[1] : '',
              descMatch ? descMatch[1] : ''
            ]
              .filter(Boolean)
              .join(' - ')
          })
          .join(' | ')

        // Add the extracted content to the HTML for search indexing
        result += `\n<!-- SEARCH-INDEX: ${extractedContent} -->`
      }
    }

    // Extract text content from Box components
    const boxPattern = /<Box\s+.*?items="\[(.*?)\]".*?>/gs
    const boxMatches = [...result.matchAll(boxPattern)]

    for (const match of boxMatches) {
      if (match[1]) {
        const items = match[1].split(',').map((item) => item.trim())
        const extractedContent = items
          .map((item) => {
            const nameMatch = item.match(/name:\s*['"]([^'"]*)['"]/i)
            const tagMatch = item.match(/tag:\s*['"]([^'"]*)['"]/i)

            return [nameMatch ? nameMatch[1] : '', tagMatch ? tagMatch[1] : '']
              .filter(Boolean)
              .join(' - ')
          })
          .join(' | ')

        result += `\n<!-- SEARCH-INDEX: ${extractedContent} -->`
      }
    }

    // Extract text content from BoxCube components
    const boxCubePattern = /<BoxCube\s+.*?items="\[(.*?)\]".*?>/gs
    const boxCubeMatches = [...result.matchAll(boxCubePattern)]

    for (const match of boxCubeMatches) {
      if (match[1]) {
        const items = match[1].split(',').map((item) => item.trim())
        const extractedContent = items
          .map((item) => {
            const nameMatch = item.match(/name:\s*['"]([^'"]*)['"]/i)
            const descMatch = item.match(/desc:\s*['"]([^'"]*)['"]/i)

            return [
              nameMatch ? nameMatch[1] : '',
              descMatch ? descMatch[1] : ''
            ]
              .filter(Boolean)
              .join(' - ')
          })
          .join(' | ')

        result += `\n<!-- SEARCH-INDEX: ${extractedContent} -->`
      }
    }

    // Extract text content from Pill components
    const pillPattern = /<Pill\s+.*?name="([^"]*)".*?>/gs
    const pillMatches = [...result.matchAll(pillPattern)]

    for (const match of pillMatches) {
      if (match[1]) {
        result += `\n<!-- SEARCH-INDEX: ${match[1]} -->`
      }
    }

    return result
  }

  return {
    transformHtml: transformHtmlForSearch
  }
}

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-hero-info-before': () => h(Announcement),
      'aside-ads-before': () => h(DocAsideLogo),
      'aside-outline-before': () => h(ShareButton),
      'layout-bottom': () => h(HomeFooter, { Footer_Data })
    })
  },
  enhanceApp: ({ app }) => {
    app.component('Box', DocBox)
    app.component('Box', DocBox)
    app.component('Pill', DocPill)
    app.component('Links', DocLinks)
    app.component('BoxCube', DocBoxCube)
    app.component('Home', HomeUnderline)
    app.component('Vid', DocVideoLink)
  },
  // Add our custom search hooks
  ...createSearchHooks()
}
