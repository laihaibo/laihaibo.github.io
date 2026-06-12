<script setup>
import { defineAsyncComponent } from 'vue'
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'

const ParticleBackground = defineAsyncComponent(() => import('../components/ParticleBackground.vue'))
</script>

<template>
  <div class="min-h-screen flex flex-col bg-dark-bg text-dark-text relative">
    <ParticleBackground />
    <AppHeader />
    <main class="flex-1 pt-16">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
