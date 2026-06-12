<script setup>
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const { t, locale } = useI18n()
const router = useRouter()

function toggleLocale() {
  const next = locale.value === 'zh-CN' ? 'en' : 'zh-CN'
  locale.value = next
  localStorage.setItem('locale', next)
}
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
    <nav class="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
      <router-link to="/" class="text-xl font-bold text-gray-900 hover:text-primary transition-colors">
        LHB
      </router-link>
      <div class="flex items-center gap-6">
        <router-link to="/" exact-active-class="!text-primary font-medium" class="text-gray-600 hover:text-primary transition-colors">
          {{ t('nav.home') }}
        </router-link>
        <router-link to="/about" active-class="!text-primary font-medium" class="text-gray-600 hover:text-primary transition-colors">
          {{ t('nav.about') }}
        </router-link>
        <button
          @click="toggleLocale"
          class="px-3 py-1 text-sm border border-gray-300 rounded-full hover:border-primary hover:text-primary transition-colors"
        >
          {{ locale === 'zh-CN' ? 'EN' : 'CN' }}
        </button>
      </div>
    </nav>
  </header>
</template>
