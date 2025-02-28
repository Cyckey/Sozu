import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Sidebar = {
  '/': [
    {
      text: '<iconify-icon icon="fa6-solid:bolt" style="margin-right:0.25em;color:#63E6BE;"></iconify-icon>Quick Start',
      link: '/start'
    },
    {
      text: '<iconify-icon icon="fa6-solid:book" style="margin-right:0.25em;color:#3498db;"></iconify-icon>Main Pages',
      items: [
        { text: '<iconify-icon icon="mdi:globe" style="margin-right:0.25em;color:#f39c12;"></iconify-icon>Websites', link: '/websites' },
        { text: '<iconify-icon icon="mdi:cellphone" style="margin-right:0.25em;color:#e74c3c;"></iconify-icon>Apps', link: '/apps' },
        { text: '<iconify-icon icon="mdi:tools" style="margin-right:0.25em;color:#3498db;"></iconify-icon>Tools', link: '/tools' },
        { text: '<iconify-icon icon="mdi:alert-circle" style="margin-right:0.25em;color:#FF6347;"></iconify-icon>Misc Sites', link: '/misc-sites' }
        { text: '<iconify-icon icon="mdi:alert-circle" style="margin-right:0.25em;color:#2ecc71;"></iconify-icon>NSFW', link: '/nsfw' }
      ]
    },
    {
      text: '<iconify-icon icon="fa6-solid:scroll" style="margin-right:0.25em;color:#ffd700;"></iconify-icon>Guides',
      collapsed: true,
      items: [
        { text: '<iconify-icon icon="mdi:chat-processing" style="margin-right:0.25em;color:#3498db;"></iconify-icon>IRC', link: '/guide/irc' },
        { text: '<iconify-icon icon="mdi:package-variant" style="margin-right:0.25em;color:#3498db;"></iconify-icon>Extension Repos', link: '/guide/extension-repos' },
        { 
          text: '<iconify-icon icon="mdi:download" style="margin-right:0.25em;color:#ffd700;"></iconify-icon>Torrenting',
          collapsed: true,
          items: [
            { text: 'Getting Started', link: '/guide/torrenting/getting-started' },
            { text: 'Glossary', link: '/guide/torrenting/glossary' },
            { text: 'Private Trackers', link: '/guide/torrenting/private-trackers' }
          ]
        }
      ]
    },
    {
      text: '<iconify-icon icon="twemoji:star" style="margin-right:0.25em;color:#ffd700;"></iconify-icon>Legend',
      collapsed: false,
      items: [
        { 
          text: '<span style="font-size:0.9em;color:#666;">Items marked with <iconify-icon icon="twemoji:star" style="margin:0 0.2em;color:#ffd700;vertical-align:-0.15em;"></iconify-icon> are the very best!</span>',
          link: ''
        }
      ]
    },
    {
      text: '<iconify-icon icon="mdi:handshake" style="margin-right:0.25em;color:#3498db;"></iconify-icon>Credits',
      link: '/credits'
    }
  ]
}

export default sidebar;
