<script setup>
import { useI18n } from 'vue-i18n'
import AnimateOnScroll from '../components/AnimateOnScroll.vue'
import TechStack from '../components/TechStack.vue'
import ContactInfo from '../components/ContactInfo.vue'

const { t } = useI18n()
</script>

<template>
  <div class="container mx-auto px-4 py-16">
    <div class="max-w-2xl mx-auto">
      <!-- Avatar + Name -->
      <AnimateOnScroll>
        <div class="text-center mb-12">
          <img
            src="/avatar.svg"
            :alt="t('home.hero.name')"
            class="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-zinc-800 shadow-lg"
          />
          <h1 class="text-3xl font-bold text-dark-text">{{ t('about.title') }}</h1>
        </div>
      </AnimateOnScroll>

      <!-- Tech Stack -->
      <AnimateOnScroll>
        <TechStack />
      </AnimateOnScroll>

      <!-- Contact Info -->
      <AnimateOnScroll>
        <ContactInfo />
      </AnimateOnScroll>
    </div>
  </div>
</template>
