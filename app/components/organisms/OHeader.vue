<template>
  <header
    class="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-lg"
    role="banner"
  >
    <nav class="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8" aria-label="Main navigation">
      <NuxtLink
        to="/"
        class="text-xl font-extrabold tracking-tight text-white hover:text-red-500 transition-colors"
        aria-label="Home"
      >
        <span class="gradient-text">{{ t('header.logo') }}</span>
      </NuxtLink>

      <div class="flex items-center gap-4">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="text-sm font-medium text-slate-400 transition-colors hover:text-white"
          :class="{ 'text-white': isCurrentRoute(link.to) }"
        >
          {{ t(link.labelKey) }}
        </NuxtLink>

        <div class="ml-2 border-l border-slate-700 pl-4">
          <LanguageSwitcher />
        </div>

        <ADarkModeToggle />
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const route = useRoute()

const navLinks = [
  { to: '/', labelKey: 'header.nav.home' },
  { to: '/about', labelKey: 'header.nav.about' },
  { to: '/contact', labelKey: 'header.nav.contact' },
]

const isCurrentRoute = (path: string) => {
  return route.path === path
}
</script>
