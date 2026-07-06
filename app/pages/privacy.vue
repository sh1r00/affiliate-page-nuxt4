<template>
  <div class="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
    <h1 class="text-4xl font-extrabold text-white sm:text-5xl">
      {{ t('privacy.title') }}
    </h1>
    <p class="mt-2 text-sm text-slate-500">
      {{ t('privacy.lastUpdated') }}
    </p>

    <p class="mt-8 text-lg leading-relaxed text-slate-400">
      {{ t('privacy.intro') }}
    </p>

    <div class="mt-10 space-y-10">
      <section v-for="key in sectionKeys" :key="key">
        <h2 class="text-xl font-bold text-white">
          {{ t(`privacy.sections.${key}.title`) }}
        </h2>
        <p class="mt-3 leading-relaxed text-slate-400">
          {{ t(`privacy.sections.${key}.content`) }}
        </p>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

useHead({
  title: t('privacy.title'),
})

const sectionKeys = ['collection', 'usage', 'cookies', 'rights']
</script>
