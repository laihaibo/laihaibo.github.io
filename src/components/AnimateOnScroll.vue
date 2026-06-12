<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  threshold: { type: Number, default: 0.1 },
})

const target = ref(null)
const isVisible = ref(false)
let observer = null

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        observer.disconnect()
      }
    },
    { threshold: props.threshold }
  )
  if (target.value) observer.observe(target.value)
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>

<template>
  <div ref="target" :class="{ 'animate-fade-in': isVisible }">
    <slot />
  </div>
</template>
