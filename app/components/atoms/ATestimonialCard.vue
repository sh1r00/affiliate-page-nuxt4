<template>
  <div class="rounded-xl border border-slate-700/50 bg-slate-800/40 p-6 backdrop-blur-sm">
    <div class="mb-4 flex items-center gap-1" :aria-label="`${testimonial.rating} out of 5 stars`">
      <AIcon
        v-for="i in testimonial.rating"
        :key="i"
        icon="star"
        size="sm"
        decorative
      />
    </div>

    <blockquote class="mb-6 text-slate-300 italic">
      <p>"{{ t(testimonial.quoteKey) }}"</p>
    </blockquote>

    <div class="flex items-center gap-3">
      <div
        class="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-amber-500 text-sm font-bold text-white"
        :aria-hidden="true"
      >
        {{ testimonial.name.charAt(0) }}
      </div>
      <div>
        <p class="font-semibold text-white">{{ testimonial.name }}</p>
        <p class="text-sm text-slate-400">{{ t(testimonial.roleKey) }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Testimonial } from '~/stores/content'

interface Props {
  testimonial: Testimonial
}

defineProps<Props>()

const { t } = useI18n()
</script>
