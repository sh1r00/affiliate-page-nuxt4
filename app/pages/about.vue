<template>
  <div class="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
    <h1 class="text-4xl font-extrabold text-white sm:text-5xl">
      {{ t('about.title') }}
    </h1>

    <div class="mt-12 space-y-12">
      <div>
        <h2 class="text-2xl font-bold text-white">
          {{ t('about.headline') }}
        </h2>
        <p class="mt-4 text-lg leading-relaxed text-slate-400">
          {{ t('about.story') }}
        </p>
      </div>

      <div class="rounded-xl border border-slate-700/50 bg-slate-800/40 p-8">
        <h3 class="mb-6 text-xl font-bold text-white">
          {{ t('about.credentials.title') }}
        </h3>
        <ul class="space-y-3" role="list">
          <li class="flex items-center gap-3 text-slate-300">
            <AIcon icon="check" size="sm" decorative />
            {{ t('about.credentials.item1') }}
          </li>
          <li class="flex items-center gap-3 text-slate-300">
            <AIcon icon="check" size="sm" decorative />
            {{ t('about.credentials.item2') }}
          </li>
          <li class="flex items-center gap-3 text-slate-300">
            <AIcon icon="check" size="sm" decorative />
            {{ t('about.credentials.item3') }}
          </li>
          <li class="flex items-center gap-3 text-slate-300">
            <AIcon icon="check" size="sm" decorative />
            {{ t('about.credentials.item4') }}
          </li>
        </ul>
      </div>

      <div class="text-center">
        <NuxtLink to="/">
          <ABaseButton variant="primary" size="lg">
            {{ t('hero.cta') }}
          </ABaseButton>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

useHead({
  title: t('about.title'),
})
</script>
