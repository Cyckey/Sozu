import type { HeadConfig } from 'vitepress'

export const head: HeadConfig[] = [
  ['link', { rel: 'icon', type: 'icon', href: '/Logo.gif' }],
  ['meta', { name: 'msapplication-TileColor', content: '#da532c' }],
  ['meta', { name: 'theme-color', content: '#ffffff' }],
  ['meta', { name: 'author', content: 'cyckey' }],
  ['meta', { name: 'copyright', content: 'cyckey' }],
  ['meta', { name: 'robots', content: 'index, follow' }],
  ['meta', { name: 'evisit-after', content: '1 day' }],
  [
    'meta',
    {
      name: 'description',
      content: '✨ For all your weeb needs!'
    }
  ],
  ['meta', { name: 'keywords', content: 'Anime, Manga, Novels, Weeb' }],
  ['meta', { name: 'og:type', content: 'website' }],
  ['meta', { name: 'og:locale', content: 'en-US' }],
  ['meta', { name: 'og:site_name', content: 'Sozu' }],
  ['meta', { name: 'og:title', content: 'Sozu' }],
  ['meta', { name: 'og:url', content: 'https://sozu-wiki.netlify.app/' }],
  [
    'meta',
    { name: 'og:image', content: 'https://sozu-wiki.netlify.app/Logo.gif' }
  ],
  ['meta', { name: 'og:image:alt', content: 'Sozu Logo' }],
  [
    'meta',
    {
      name: 'og:description',
      content: '✨ For all your weeb needs!'
    }
  ],
  ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
  ['meta', { name: 'twitter:site', content: '@cyckey' }],
  ['meta', { name: 'twitter:title', content: 'Sozu' }],
  [
    'meta',
    {
      name: 'twitter:description',
      content: '✨ For all your weeb needs!'
    }
  ],
  [
    'meta',
    { name: 'twitter:image', content: 'https://sozu-wiki.netlify.app/Logo.gif' }
  ],
  ['meta', { name: 'twitter:image:alt', content: 'Sozu Logo' }],
  [
    'meta',
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0'
    }
  ],
  ['link', { rel: 'canonical', href: 'https://sozu-wiki.netlify.app/' }],
  [
    'script',
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        url: 'https://sozu-wiki.netlify.app/',
        name: 'Sozu',
        description: '✨ For all your weeb needs!',
        author: { '@type': 'Person', name: 'cyckey' }
      })
    }
  ]
]
