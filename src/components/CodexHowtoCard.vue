<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <a
    href="https://laihaibo.github.io/codex-howto"
    target="_blank"
    rel="noopener"
    class="block p-6 bg-dark-surface rounded-xl shadow-black/30 shadow-md hover:shadow-black/40 hover:shadow-lg hover:-translate-y-1 transition-all border border-zinc-800"
  >
    <h3 class="text-xl font-bold text-dark-text">{{ t('home.codexHowto.title') }}</h3>
    <p class="text-zinc-400 mt-2">{{ t('home.codexHowto.desc') }}</p>
    <span class="inline-block mt-4 text-primary font-medium">
      {{ t('home.codexHowto.link') }} &rarr;
    </span>
  </a>
</template>
