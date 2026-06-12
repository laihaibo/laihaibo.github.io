<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section class="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50">
    <div class="text-center px-4">
      <h1 class="text-4xl sm:text-5xl font-bold text-gray-900">{{ t('home.hero.name') }}</h1>
      <div class="w-16 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
      <p class="text-lg sm:text-xl text-gray-600 mt-4">{{ t('home.hero.intro') }}</p>
    </div>
  </section>
</template>
