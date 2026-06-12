<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <a
    href="https://laihaibo.github.io/meta-cert/"
    target="_blank"
    rel="noopener"
    class="block p-6 bg-white rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all"
  >
    <h3 class="text-xl font-bold text-gray-900">{{ t('home.metaCert.title') }}</h3>
    <p class="text-gray-600 mt-2">{{ t('home.metaCert.desc') }}</p>
    <span class="inline-block mt-4 text-primary font-medium">
      {{ t('home.metaCert.link') }} &rarr;
    </span>
  </a>
</template>
