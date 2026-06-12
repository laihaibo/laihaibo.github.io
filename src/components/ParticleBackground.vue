<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { tsParticles } from '@tsparticles/engine'
import { loadSlim } from '@tsparticles/slim'

const containerRef = ref(null)
let engine = null

// Mobile detection via matchMedia (reactive)
const mobileQuery = window.matchMedia('(max-width: 767px)')
const isMobile = ref(mobileQuery.matches)
const onMobileChange = (e) => { isMobile.value = e.matches }

// Reduced motion detection (reactive)
const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
const prefersReducedMotion = ref(motionQuery.matches)
const onMotionChange = (e) => {
  prefersReducedMotion.value = e.matches
  if (e.matches) engine?.pause()
  else engine?.play()
}

const particlesConfig = (mobile) => ({
  fullScreen: false,
  fpsLimit: 60,
  particles: {
    number: {
      value: mobile ? 30 : 80,
      density: { enable: true, width: 1920, height: 1080 }
    },
    color: { value: '#E63946' },
    opacity: {
      value: { min: 0.3, max: 0.7 },
      animation: { enable: false }
    },
    size: {
      value: { min: 1, max: 3 }
    },
    move: {
      enable: true,
      speed: { min: 0.3, max: 0.8 },
      direction: 'none',
      random: true,
      straight: false,
      outModes: { default: 'bounce' }
    },
    links: {
      enable: true,
      distance: 150,
      color: 'rgba(230, 57, 70, 0.15)',
      width: 1,
      opacity: 0.4
    }
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: 'repulse'
      }
    },
    modes: {
      repulse: {
        distance: 120,
        duration: 0.4,
        speed: 1.0
      }
    }
  },
  detectRetina: true
})

async function initParticles() {
  if (!containerRef.value || prefersReducedMotion.value) return

  engine = tsParticles
  await loadSlim(engine)

  await engine.load({
    id: 'particle-bg',
    element: containerRef.value,
    options: particlesConfig(isMobile.value)
  })
}

// Re-create particles when mobile state changes
watch(isMobile, async (newVal) => {
  if (engine) {
    const container = engine.dom?.find(c => c.id === 'particle-bg')
    if (container) {
      container.options.particles.number.value = newVal ? 30 : 80
    }
  }
})

onMounted(() => {
  mobileQuery.addEventListener('change', onMobileChange)
  motionQuery.addEventListener('change', onMotionChange)
  initParticles()
})

onUnmounted(() => {
  mobileQuery.removeEventListener('change', onMobileChange)
  motionQuery.removeEventListener('change', onMotionChange)
  if (engine) {
    const container = engine.dom?.find(c => c.id === 'particle-bg')
    if (container) container.destroy()
  }
})
</script>

<template>
  <div
    ref="containerRef"
    class="fixed inset-0 z-0 pointer-events-none"
    aria-hidden="true"
  />
</template>
