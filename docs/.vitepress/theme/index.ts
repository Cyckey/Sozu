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
  ShareButton,
} from '@theojs/lumen'
import '@theojs/lumen/theme'

import { Footer_Data } from '../data'

import 'virtual:group-icons.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-hero-info-before': () => h(Announcement),
      'aside-ads-before': () => h(DocAsideLogo),
      'aside-outline-before': () => h(ShareButton),
      'layout-bottom': () => h(HomeFooter, { Footer_Data }),
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
  }
}
