<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <a
    href="https://laihaibo.github.io/meta-cert/"
    target="_blank"
    rel="noopener"
    class="block p-6 bg-dark-surface rounded-xl shadow-black/30 shadow-md hover:shadow-black/40 hover:shadow-lg hover:-translate-y-1 transition-all border border-zinc-800"
  >
    <h3 class="text-xl font-bold text-dark-text">{{ t('home.metaCert.title') }}</h3>
    <p class="text-zinc-400 mt-2">{{ t('home.metaCert.desc') }}</p>
    <span class="inline-block mt-4 text-primary font-medium">
      {{ t('home.metaCert.link') }} &rarr;
    </span>
  </a>
</template>
