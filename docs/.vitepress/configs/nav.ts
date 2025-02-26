import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.NavItem[] = [
  {
    text: '<iconify-icon icon="fa6-solid:bolt" style="margin-right:0.25em;color:#63E6BE;"></iconify-icon>Get Started',
    link: '/start'
  },
  {
    text: '<iconify-icon icon="fa6-solid:book" style="margin-right:0.25em;color:#3498db;"></iconify-icon>Main Pages',
    items: [
      { text: '<iconify-icon icon="mdi:globe" style="margin-right:0.25em;color:#f39c12;"></iconify-icon>Websites', link: '/websites' },
      { text: '<iconify-icon icon="mdi:cellphone" style="margin-right:0.25em;color:#e74c3c;"></iconify-icon>Apps', link: '/apps' },
      { text: '<iconify-icon icon="mdi:tools" style="margin-right:0.25em;color:#3498db;"></iconify-icon>Tools', link: '/tools' },
      { text: '<iconify-icon icon="mdi:alert-circle" style="margin-right:0.25em;color:#2ecc71;"></iconify-icon>NSFW', link: '/nsfw' }
    ]
  },
  {
    text: '<iconify-icon icon="fa6-solid:bug" style="margin-right:0.25em;color:#FF4500;" alt="bug"></iconify-icon>Submit Feedback',
    link: 'https://github.com/cyckey/sozu/issues'
  }
]
