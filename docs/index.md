---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: Sozu
  text: 'Everything '
  textsuffix: 'Otaku'
  tagline: ✨ For all your weeb needs!

  image:
    src: '/Logo.gif'
    alt: 'Sozu'

  actions:
    - theme: brand
      text: Get Started
      link: /start

    - theme: sponsor
      text: Contribute
      link: https://github.com/cyckey/sozu/issues

features:
  - title: '<iconify-icon icon="mdi:globe" style="margin-right:0.25em;color:#f39c12;"></iconify-icon>Websites'
    details: Resources for anime, manga, novels, and more.
    link: '/websites'
    rel: 'noopener'

  - title: '<iconify-icon icon="mdi:cellphone" style="margin-right:0.25em;color:#e74c3c;"></iconify-icon>Apps'
    details: Apps for anime, manga, novels, and more.
    link: '/apps'
    rel: 'noopener'

  - title: '<iconify-icon icon="mdi:tools" style="margin-right:0.25em;color:#3498db;"></iconify-icon>Tools'
    details: Tools that could be useful.
    link: '/tools'
    rel: 'noopener'

  - title: '<iconify-icon icon="mdi:alert-circle" style="margin-right:0.25em;color:#2ecc71;"></iconify-icon>NSFW'
    details: Umm...
    link: '/nsfw'
    rel: 'noopener'
---

<Home />
<style>
  :root {
    --vp-home-hero-image-background-image: none !important;
  }
</style>
