<template>
  <span
    class="inline-flex items-center justify-center select-none"
    :class="iconClasses"
    :aria-hidden="decorative ? 'true' : undefined"
    :aria-label="decorative ? undefined : ariaLabel"
    role="img"
  >
    <span v-if="icon === 'light_mode'" class="text-xl">☀️</span>
    <span v-else-if="icon === 'dark_mode'" class="text-xl">🌙</span>
    <span v-else-if="icon === 'rocket_launch'" class="text-2xl">🚀</span>
    <span v-else-if="icon === 'shield'" class="text-2xl">🛡️</span>
    <span v-else-if="icon === 'trending_up'" class="text-2xl">📈</span>
    <span v-else-if="icon === 'support_agent'" class="text-2xl">🎯</span>
    <span v-else-if="icon === 'check'" class="text-lg">✓</span>
    <span v-else-if="icon === 'star'" class="text-lg">★</span>
    <span v-else-if="icon === 'arrow_right'" class="text-lg">→</span>
    <span v-else-if="icon === 'close'" class="text-lg">✕</span>
    <span v-else-if="icon === 'expand_more'" class="text-lg transition-transform duration-300" :class="{ 'rotate-180': expanded }">▼</span>
    <span v-else-if="icon === 'play'" class="text-4xl">▶</span>
    <span v-else-if="icon === 'mail'" class="text-xl">✉</span>
    <span v-else-if="icon === 'verified'" class="text-lg">✓</span>
    <span v-else class="text-xl">{{ icon }}</span>
  </span>
</template>

<script setup lang="ts">
interface Props {
  icon: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  decorative?: boolean
  ariaLabel?: string
  expanded?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  decorative: false,
})

const iconClasses = computed(() => {
  const sizes: Record<string, string> = {
    sm: 'w-4 h-4 text-sm',
    md: 'w-6 h-6 text-base',
    lg: 'w-8 h-8 text-lg',
    xl: 'w-12 h-12 text-xl',
  }
  return sizes[props.size]
})
</script>
