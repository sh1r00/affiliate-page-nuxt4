<template>
  <section class="mx-auto max-w-3xl" aria-labelledby="faq-heading">
    <div class="mb-12 text-center">
      <h2 id="faq-heading" class="text-3xl font-extrabold text-white sm:text-4xl">
        {{ t('faq.title') }}
      </h2>
      <p class="mt-3 text-lg text-slate-400">
        {{ t('faq.subtitle') }}
      </p>
    </div>

    <dl class="space-y-3">
      <div
        v-for="(item, idx) in items"
        :key="idx"
        class="overflow-hidden rounded-xl border border-slate-700/50 bg-slate-800/40 transition-colors duration-200 hover:border-slate-600/50"
      >
        <dt>
          <button
            type="button"
            class="flex w-full items-center justify-between px-6 py-4 text-left"
            :aria-expanded="openIndex === idx"
            :aria-controls="`faq-panel-${idx}`"
            :id="`faq-trigger-${idx}`"
            @click="toggle(idx)"
          >
            <span class="pr-4 font-semibold text-white">{{ t(item.questionKey) }}</span>
            <AIcon
              icon="expand_more"
              size="sm"
              :expanded="openIndex === idx"
              decorative
            />
          </button>
        </dt>
        <dd
          :id="`faq-panel-${idx}`"
          :role="openIndex === idx ? undefined : 'region'"
          :aria-labelledby="`faq-trigger-${idx}`"
          :aria-hidden="openIndex === idx ? undefined : 'true'"
          class="overflow-hidden transition-all duration-300"
          :class="openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'"
        >
          <p class="px-6 pb-5 text-slate-400">
            {{ t(item.answerKey) }}
          </p>
        </dd>
      </div>
    </dl>
  </section>
</template>

<script setup lang="ts">
import type { FaqItem } from '~/stores/content'

interface Props {
  items: FaqItem[]
}

defineProps<Props>()

const { t } = useI18n()

const openIndex = ref<number | null>(null)

const toggle = (idx: number) => {
  openIndex.value = openIndex.value === idx ? null : idx
}
</script>
