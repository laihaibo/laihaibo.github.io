<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="mt-12">
    <h2 class="text-2xl font-bold mb-6">{{ t('about.contact.title') }}</h2>
    <ul class="space-y-4 text-gray-700">
      <li class="flex items-center gap-3">
        <svg class="w-5 h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8.5 2C4.358 2 1 5.133 1 9c0 2.172 1.145 4.104 2.932 5.396C3.665 15.6 2.976 17.1 2 18c1.5 0 3.463-.612 4.781-1.52.547.1 1.11.152 1.684.152C12.642 16.632 16 13.5 16 9.632 16 5.133 12.642 2 8.5 2zm-1 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
          <path d="M23 14.5c0-2.485-2.239-4.5-5-4.5s-5 2.015-5 4.5c0 2.485 2.239 4.5 5 4.5.537 0 1.055-.078 1.543-.223.977.725 1.977 1.223 2.457 1.223-.3-.6-.8-1.7-1.2-2.7.8-.5 1.7-1.2 2.2-2.8zm-6.5-1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <span>{{ t('about.contact.wechat') }}: lhb1327</span>
      </li>
      <li class="flex items-center gap-3">
        <svg class="w-5 h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
        <a href="mailto:2466006555@qq.com" class="hover:text-primary transition-colors">
          {{ t('about.contact.email') }}: 2466006555@qq.com
        </a>
      </li>
      <li class="flex items-center gap-3">
        <svg class="w-5 h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
        </svg>
        <a href="https://github.com/laihaibo" target="_blank" rel="noopener" class="hover:text-primary transition-colors">
          {{ t('about.contact.github') }}
        </a>
      </li>
    </ul>
  </div>
</template>
