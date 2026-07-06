<script setup>
import AnimateOnScroll from '../components/AnimateOnScroll.vue'
import HeroSection from '../components/HeroSection.vue'
import CodexHowtoCard from '../components/CodexHowtoCard.vue'
import MetaCertCard from '../components/MetaCertCard.vue'
import TechStack from '../components/TechStack.vue'
</script>

<template>
  <div>
    <HeroSection />

    <AnimateOnScroll>
      <div class="max-w-4xl mx-auto px-4 py-16">
        <CodexHowtoCard />
        <MetaCertCard />
      </div>
    </AnimateOnScroll>

    <AnimateOnScroll>
      <TechStack />
    </AnimateOnScroll>
  </div>
</template>
