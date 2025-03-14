<script setup lang="ts">
import { FooterData, Icon, isExternal } from '../types'

import dayjs from 'dayjs/esm'

const props = defineProps<{ Footer_Data: FooterData }>()
const footer = props.Footer_Data

const Year = dayjs().year()
</script>

<template>
  <footer class="footer">
    <div v-if="footer.group" class="list-container">
      <div
        v-for="(section, index) in footer.group || []"
        :key="section.title + index"
      >
        <h1 class="list-title">
          <template v-if="section.icon">
            <Icon
              class="iconify"
              :icon="section.icon"
              :color="section.color"
              :ssr="true"
              :inline="true"
              :alt="section.title"
              aria-hidden="true"
            />&nbsp;
          </template>
          {{ section.title }}
        </h1>
        <h2
          v-for="(link, idx) in section.links"
          :key="link.name + idx"
          class="list-links"
        >
          <template v-if="link.icon">
            <Icon
              :icon="link.icon"
              :color="link.color"
              :ssr="true"
              :inline="true"
              :alt="link.name"
              aria-hidden="true"
            />&nbsp;</template
          >
          <a
            :name="link.name"
            :href="link.link"
            :title="link.name"
            :aria-label="link.name"
            :target="isExternal(link.link) ? '_blank' : '_self'"
            rel="noopener noreferrer"
            :aria-describedby="link.name ? link.name : null"
            >{{ link.name
            }}<Icon
              v-if="isExternal(link.link)"
              class="external-link-icon"
              icon="basil:arrow-up-outline"
              :ssr="true"
              :inline="true"
              alt="External Link Icon"
              aria-hidden="true"
            />
          </a>
        </h2>
      </div>
    </div>

    <div class="footer-info">
      <h1 v-if="footer.beian?.icp || footer.beian?.police" class="info-item">
        <p v-if="footer.beian?.icp" class="footer-infotext">
          <Icon
            v-if="footer.beian?.showIcon"
            class="info-icon"
            alt="ICP Record"
            :icon="footer.beian.icpIcon || 'fluent:globe-shield-48-filled'"
            :ssr="true"
            :inline="true"
            aria-hidden="true"
          />&nbsp;<a
            href="https://beian.miit.gov.cn/"
            title="ICP Record"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ICP Record"
          >
            {{ footer.beian.icp }}
          </a>
        </p>
        <span class="info-spacing" aria-hidden="true"></span>
        <p v-if="footer.beian?.police" class="footer-infotext">
          <Icon
            v-if="footer.beian?.showIcon"
            class="info-icon"
            alt="Public Security Record"
            :icon="
              footer.beian.policeIcon || 'fluent:shield-checkmark-48-filled'
            "
            :ssr="true"
            :inline="true"
            aria-hidden="true"
          />&nbsp;<a
            href="https://beian.mps.gov.cn/"
            title="Public Security Record"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Public Security Record"
          >
            {{ footer.beian.police }}
          </a>
        </p>
      </h1>
      <span class="info-spacing-copyright" aria-hidden="true"></span>
      <h1 v-if="footer.author?.name" class="info-item">
        <p class="footer-infotext">
          <Icon
            class="info-icon"
            alt="Copyright"
            icon="ri:copyright-line"
            :ssr="true"
            :inline="true"
            aria-hidden="true"
          />&nbsp;{{ Year }}
          <a
            title="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            :href="footer.author?.link"
            aria-label="GitHub"
            >{{ footer.author?.name }}</a
          >.&nbsp;All Rights Reserved.
        </p>
      </h1>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--HomeFooter-bg);
  width: 100%;
}

.footer a {
  position: relative;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.footer a:hover {
  color: var(--HomeFooter-link-hover);
  -webkit-text-decoration: underline solid;
  text-decoration: underline solid;
  text-underline-offset: 4px;
}

.has-sidebar ~ .footer {
  display: none;
}

.list-container {
  display: flex;
  justify-content: space-evenly;
  margin: 1.25em auto;
  max-width: 75%;
}

.list-title {
  margin-bottom: 0.5em;
  font-weight: 600;
  font-size: 0.75em;
  letter-spacing: 0.05em;
}

.list-links {
  opacity: 0.9;
  font-size: 0.75em;
  line-height: 2.4;
  letter-spacing: 0.025em;
}

.iconify {
  display: inline-block;
  flex-shrink: 0;
  font-size: 1.2em;
}

.footer-info {
  margin-bottom: 0.875em;
  text-align: center;
}

.footer-infotext {
  display: inline-block;
  margin: 0;
  font-size: 0.75em;
}

.info-item {
  display: inline-block;
  letter-spacing: 0.025em;
}

.info-spacing,
.info-spacing-copyright {
  margin-left: 1em;
}

.info-icon {
  display: inline-block;
  font-size: 1em;
}

.external-link-icon {
  position: absolute;
  top: 0;
  flex-shrink: 0;
  transform: rotate(45deg);
  color: var(--vp-c-text-3);
  font-size: 1.2em;
}

@media (max-width: 768px) {
  .list-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 1.25em;
    justify-items: center;
  }

  .info-spacing-copyright {
    margin-left: -1em;
  }
}
</style>
