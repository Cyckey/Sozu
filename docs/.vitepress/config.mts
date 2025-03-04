import { defineConfig } from 'vitepress'

import { groupIconVitePlugin } from 'vitepress-plugin-group-icons'

import Lumenpkg from '../../src/package.json'
import { head, markdown, nav, search, sidebar, socialLinks } from './configs'

const Lumenversion = `v` + Lumenpkg.version

export default defineConfig({
  title: 'Sozu',
  description: '✨ For all your weeb needs!',
  lang: 'en-US',
  cleanUrls: true,
  metaChunk: true,
  lastUpdated: true,
  head,
  markdown,

  vue: {
    template: {
      compilerOptions: { isCustomElement: (tag) => tag === 'iconify-icon' }
    }
  },

  vite: {
    plugins: [
      groupIconVitePlugin({
        customIcon: {
          'All Themes': 'logos:typescript-icon',
          'Partial Themes': 'logos:typescript-icon',
          'Individual Import': 'logos:typescript-icon',
          '.vitepress': 'https://vitepress.dev/vitepress-logo-mini.svg'
        }
      })
    ]
  },

  themeConfig: {
    siteTitle: `Sozu`,

    logo: { src: '/nav-logo.png', width: 24, height: 24, alt: 'Sozu Logo' },

    editLink: {
      pattern: 'https://github.com/cyckey/sozu/edit/main/docs/:path',
      text: 'Suggest changes to this page'
    },

    outline: 2,
    outlineTitle: 'On this page',

    docFooter: { prev: 'Previous', next: 'Next' },

    returnToTopLabel: 'Back to top',

    sidebarMenuLabel: 'Pages',

    lightModeSwitchTitle: 'Switch to light mode',
    darkModeSwitchTitle: 'Switch to dark mode',
    darkModeSwitchLabel: 'Theme mode',

    externalLinkIcon: true,

    langMenuLabel: 'Switch Language',

    nav,

    sidebar,

    socialLinks,
    search,
    notFound: {
      title: 'Page Not Found',
      quote:
        'The page you are looking for does not exist. It may have gone on an adventure!',
      linkLabel: 'Return to Homepage to Explore',
      linkText: 'Return to Homepage',
      code: '404'
    }
  }
})
