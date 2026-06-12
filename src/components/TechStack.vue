<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const technologies = [
  { name: 'Vue', icon: 'vue' },
  { name: 'React', icon: 'react' },
  { name: 'Node.js', icon: 'nodejs' },
  { name: 'Python', icon: 'python' },
  { name: 'TypeScript', icon: 'typescript' },
  { name: 'Git', icon: 'git' },
]
</script>

<template>
  <section class="py-16 px-4">
    <h2 class="text-2xl font-bold text-center text-dark-text mb-8">{{ t('home.techStack.title') }}</h2>
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
      <div
        v-for="tech in technologies"
        :key="tech.name"
        class="flex flex-col items-center p-4 bg-dark-surface rounded-xl shadow-black/30 shadow-sm hover:shadow-black/40 hover:shadow-lg hover:-translate-y-1 transition-all border border-zinc-800"
      >
        <div class="w-12 h-12 flex items-center justify-center mb-2">
          <img
            :src="`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}/${tech.icon}-original.svg`"
            :alt="tech.name"
            class="w-10 h-10"
            loading="lazy"
          />
        </div>
        <span class="text-sm font-medium text-zinc-400">{{ tech.name }}</span>
      </div>
    </div>
  </section>
</template>
