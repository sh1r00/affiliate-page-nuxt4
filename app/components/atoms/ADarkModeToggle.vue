<template>
  <button
    type="button"
    class="group relative flex items-center justify-center rounded-full p-2 transition-all duration-200 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-slate-950"
    :aria-label="t('darkMode.toggle')"
    @click="darkMode.toggle()"
  >
    <AIcon
      :icon="darkMode.isDark ? 'light_mode' : 'dark_mode'"
      size="md"
      :decorative="true"
    />
    <span class="sr-only">{{ t('darkMode.toggle') }}</span>
  </button>
</template>

<script setup lang="ts">
import { useDarkModeStore } from '~/stores/darkMode'
const darkMode = useDarkModeStore()
const { t } = useI18n()
</script>
