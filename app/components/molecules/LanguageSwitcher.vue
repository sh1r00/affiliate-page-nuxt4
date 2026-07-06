<template>
  <div class="flex items-center gap-1">
    <button
      v-for="locale in availableLocales"
      :key="locale.code"
      type="button"
      class="rounded-md px-2 py-1 text-xs font-medium uppercase transition-all"
      :class="locale.code === currentLocale
        ? 'bg-red-600 text-white'
        : 'text-slate-400 hover:text-white hover:bg-slate-800'"
      :aria-label="`Switch to ${locale.name}`"
      :aria-current="locale.code === currentLocale ? 'true' : undefined"
      @click="switchLocale(locale.code)"
    >
      {{ locale.code }}
    </button>
  </div>
</template>

<script setup lang="ts">
const { locale, locales } = useI18n()

const currentLocale = computed(() => locale.value)
const availableLocales = computed(() => locales.value)

const switchLocale = (code: string) => {
  locale.value = code
}
</script>
