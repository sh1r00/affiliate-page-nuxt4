<template>
  <div>
    <!-- Hero Section -->
    <section class="relative overflow-hidden" aria-labelledby="hero-headline">
      <div class="absolute inset-0 bg-gradient-to-b from-red-600/10 via-transparent to-transparent" aria-hidden="true" />

      <div class="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
        <div class="grid items-center gap-12 lg:grid-cols-2">
          <div class="max-w-2xl">
            <span class="inline-block rounded-full border border-red-600/30 bg-red-600/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-red-500">
              {{ t('hero.badge') }}
            </span>

            <h1 id="hero-headline" class="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              {{ t('hero.headline') }}
            </h1>

            <p class="mt-6 text-lg leading-relaxed text-slate-400 sm:text-xl">
              {{ t('hero.subheadline') }}
            </p>

            <div class="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <ABaseButton
                variant="primary"
                size="xl"
                class="cta-pulse"
                :aria-label="t('hero.cta')"
              >
                {{ t('hero.cta') }}
                <AIcon icon="arrow_right" size="sm" decorative />
              </ABaseButton>

              <p class="flex items-center gap-2 text-sm text-slate-500">
                <AIcon icon="verified" size="sm" decorative />
                {{ t('hero.guarantee') }}
              </p>
            </div>
          </div>

          <!-- Video Player -->
          <div class="relative aspect-video overflow-hidden rounded-2xl border border-slate-700/50 shadow-2xl glow-red">
            <iframe
              :src="content.videoUrl"
              title="Course overview video"
              class="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Features Grid -->
    <section class="py-20 sm:py-28" aria-labelledby="features-title">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-14 text-center">
          <h2 id="features-title" class="text-3xl font-extrabold text-white sm:text-4xl">
            {{ t('features.title') }}
          </h2>
          <p class="mt-3 text-lg text-slate-400">
            {{ t('features.subtitle') }}
          </p>
        </div>

        <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="(feature, idx) in content.features"
            :key="idx"
            class="group rounded-xl border border-slate-700/50 bg-slate-800/40 p-6 transition-all duration-300 hover:border-red-600/30 hover:bg-slate-800/80 hover:glow-red"
          >
            <div class="mb-4 inline-flex rounded-lg bg-red-600/10 p-3">
              <AIcon :icon="feature.icon" size="lg" decorative />
            </div>
            <h3 class="mb-2 text-lg font-bold text-white">{{ t(feature.titleKey) }}</h3>
            <p class="text-sm text-slate-400">{{ t(feature.descKey) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="bg-slate-900/30 py-20 sm:py-28" aria-labelledby="testimonials-title">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-14 text-center">
          <h2 id="testimonials-title" class="text-3xl font-extrabold text-white sm:text-4xl">
            {{ t('testimonials.title') }}
          </h2>
          <p class="mt-3 text-lg text-slate-400">
            {{ t('testimonials.subtitle') }}
          </p>
        </div>

        <div class="grid gap-8 md:grid-cols-3">
          <ATestimonialCard
            v-for="(t, idx) in content.testimonials"
            :key="idx"
            :testimonial="t"
          />
        </div>
      </div>
    </section>

    <!-- Pricing -->
    <section class="py-20 sm:py-28" aria-labelledby="pricing-title">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-14 text-center">
          <h2 id="pricing-title" class="text-3xl font-extrabold text-white sm:text-4xl">
            {{ t('pricing.title') }}
          </h2>
          <p class="mt-3 text-lg text-slate-400">
            {{ t('pricing.subtitle') }}
          </p>
        </div>

        <div class="grid items-start gap-8 lg:grid-cols-3">
          <APricingCard
            v-for="tier in content.pricingTiers"
            :key="tier.id"
            :tier="tier"
          />
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="bg-slate-900/30 py-20 sm:py-28" aria-labelledby="faq-section-title">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MFAQ :items="content.faqItems" />
      </div>
    </section>

    <!-- Final CTA -->
    <section class="py-20 sm:py-28">
      <div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div class="rounded-2xl border border-red-600/30 bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-10 sm:p-16 glow-red">
          <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
            {{ t('cta.headline') }}
          </h2>
          <p class="mt-4 text-lg text-slate-400">
            {{ t('cta.subheadline') }}
          </p>
          <div class="mt-8">
            <ABaseButton
              variant="secondary"
              size="xl"
              class="cta-pulse"
              :aria-label="t('cta.button')"
            >
              {{ t('cta.button') }}
              <AIcon icon="arrow_right" size="sm" decorative />
            </ABaseButton>
          </div>
          <p class="mt-4 text-sm text-slate-500">
            {{ t('cta.disclaimer') }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useContentStore } from '~/stores/content'
const { t } = useI18n()
const content = useContentStore()

useHead({
  title: t('meta.title'),
  meta: [
    { name: 'description', content: t('meta.description') },
    { property: 'og:title', content: t('meta.title') },
    { property: 'og:description', content: t('meta.description') },
    { property: 'og:type', content: 'website' },
  ],
})
</script>
