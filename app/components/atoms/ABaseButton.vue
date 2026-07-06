<template>
  <button
    class="inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-slate-950 disabled:opacity-50 disabled:cursor-not-allowed"
    :class="buttonClasses"
    :aria-label="ariaLabel"
    :disabled="disabled"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  ariaLabel?: string
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
})

const buttonClasses = computed(() => {
  const sizes: Record<string, string> = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-7 py-3 text-lg',
    xl: 'px-9 py-4 text-xl',
  }

  const variants: Record<string, string> = {
    primary: 'bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-600/25 hover:shadow-red-600/40',
    secondary: 'bg-amber-500 hover:bg-amber-600 text-slate-950 shadow-lg shadow-amber-500/25',
    outline: 'border-2 border-red-600 text-red-500 hover:bg-red-600/10',
    ghost: 'text-slate-400 hover:text-white hover:bg-slate-800',
  }

  return `${sizes[props.size]} ${variants[props.variant]}`
})
</script>
