<template>
  <footer class="border-t border-slate-800 bg-slate-900/50" role="contentinfo">
    <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div class="grid gap-8 sm:grid-cols-3">
        <div>
          <h3 class="mb-3 text-lg font-bold text-white">
            <span class="gradient-text">{{ t('header.logo') }}</span>
          </h3>
          <p class="text-sm text-slate-400">
            {{ t('footer.disclaimer') }}
          </p>
        </div>

        <div>
          <h4 class="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-300">
            {{ t('header.nav.home') }}
          </h4>
          <ul class="space-y-2">
            <li>
              <NuxtLink to="/" class="text-sm text-slate-400 transition-colors hover:text-white">
                {{ t('header.nav.home') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about" class="text-sm text-slate-400 transition-colors hover:text-white">
                {{ t('header.nav.about') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact" class="text-sm text-slate-400 transition-colors hover:text-white">
                {{ t('header.nav.contact') }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-300">
            {{ t('footer.links.privacy') }}
          </h4>
          <ul class="space-y-2">
            <li>
              <NuxtLink to="/privacy" class="text-sm text-slate-400 transition-colors hover:text-white">
                {{ t('footer.links.privacy') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/terms" class="text-sm text-slate-400 transition-colors hover:text-white">
                {{ t('footer.links.terms') }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-10 border-t border-slate-800 pt-6 text-center">
        <p class="text-sm text-slate-500">
          &copy; {{ new Date().getFullYear() }} {{ t('header.logo') }}. {{ t('footer.copyright') }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>
