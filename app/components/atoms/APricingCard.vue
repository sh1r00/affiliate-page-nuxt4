<template>
  <div
    class="relative flex flex-col rounded-2xl border p-6 transition-all duration-300"
    :class="cardClasses"
  >
    <div v-if="tier.highlighted" class="absolute -top-3 left-1/2 -translate-x-1/2">
      <span class="rounded-full bg-amber-500 px-4 py-1 text-xs font-bold text-slate-950">
        {{ t('pricing.popular') }}
      </span>
    </div>

    <div class="mb-4">
      <h3 class="text-xl font-bold text-white">{{ t(tier.nameKey) }}</h3>
      <p class="mt-1 text-sm text-slate-400">{{ t(tier.descriptionKey) }}</p>
    </div>

    <div class="mb-6">
      <span class="text-4xl font-extrabold text-white">{{ tier.price }}</span>
      <span class="text-sm text-slate-400">{{ t(tier.periodKey) }}</span>
    </div>

    <ul class="mb-8 flex-1 space-y-3" role="list">
      <li
        v-for="(featureKey, idx) in tier.featuresKeys"
        :key="idx"
        class="flex items-start gap-2 text-sm text-slate-300"
      >
        <AIcon icon="check" size="sm" decorative />
        <span>{{ t(featureKey) }}</span>
      </li>
    </ul>

    <ABaseButton
      :variant="tier.highlighted ? 'primary' : 'outline'"
      size="lg"
      class="w-full"
      :aria-label="`${t(tier.ctaKey)} - ${t(tier.nameKey)}`"
    >
      {{ t(tier.ctaKey) }}
    </ABaseButton>
  </div>
</template>

<script setup lang="ts">
import type { PricingTier } from '~/stores/content'

interface Props {
  tier: PricingTier
}

const props = defineProps<Props>()

const { t } = useI18n()

const cardClasses = computed(() => {
  if (props.tier.highlighted) {
    return 'border-red-600/50 bg-slate-800/80 glow-red scale-105 z-10'
  }
  return 'border-slate-700/50 bg-slate-800/40 hover:border-slate-600/50'
})
</script>
