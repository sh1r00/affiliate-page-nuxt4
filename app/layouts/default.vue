<template>
  <div class="flex min-h-screen flex-col bg-slate-950">
    <a
      href="#main-content"
      class="skip-to-content"
    >
      Skip to content
    </a>

    <OHeader />

    <main id="main-content" class="flex-1" tabindex="-1">
      <slot />
    </main>

    <OFooter />
  </div>
</template>

<script setup lang="ts">
import { useDarkModeStore } from '~/stores/darkMode'
const darkMode = useDarkModeStore()

useHead(() => ({
  htmlAttrs: {
    class: darkMode.isDark ? 'dark' : '',
  },
}))
</script>
