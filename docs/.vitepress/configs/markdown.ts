import type { MarkdownOptions } from 'vitepress'

import { groupIconMdPlugin } from 'vitepress-plugin-group-icons'

import { figure } from '@mdit/plugin-figure'
import { imgSize } from '@mdit/plugin-img-size'

export const markdown: MarkdownOptions = {
  theme: { light: 'one-light', dark: 'one-dark-pro' },
  image: { lazyLoading: true },
  config: (md) => {
    md.use(imgSize)
    md.use(groupIconMdPlugin, { titleBar: { includeSnippet: false } })
    md.use(figure, { figcaption: 'alt', copyAttrs: '^class$', lazy: true })
  }

  // Alternative approach: Change code block language directly in markdown files
  // or use the shiki.langs option in a different way if needed in future
}
