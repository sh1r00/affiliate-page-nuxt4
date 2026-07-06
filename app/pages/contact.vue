<template>
  <div class="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
    <div class="mb-12 text-center">
      <h1 class="text-4xl font-extrabold text-white sm:text-5xl">
        {{ t('contact.title') }}
      </h1>
      <p class="mt-4 text-lg text-slate-400">
        {{ t('contact.subtitle') }}
      </p>
    </div>

    <div class="grid gap-10 lg:grid-cols-5">
      <form class="space-y-5 lg:col-span-3" @submit.prevent="handleSubmit">
        <div>
          <label for="contact-name" class="mb-1 block text-sm font-medium text-slate-300">
            {{ t('contact.name') }}
          </label>
          <input
            id="contact-name"
            v-model="form.name"
            type="text"
            required
            class="w-full rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-3 text-white placeholder-slate-500 transition-colors focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
            :placeholder="t('contact.name')"
          >
        </div>

        <div>
          <label for="contact-email" class="mb-1 block text-sm font-medium text-slate-300">
            {{ t('contact.email') }}
          </label>
          <input
            id="contact-email"
            v-model="form.email"
            type="email"
            required
            class="w-full rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-3 text-white placeholder-slate-500 transition-colors focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
            :placeholder="t('contact.email')"
          >
        </div>

        <div>
          <label for="contact-subject" class="mb-1 block text-sm font-medium text-slate-300">
            {{ t('contact.subject') }}
          </label>
          <input
            id="contact-subject"
            v-model="form.subject"
            type="text"
            required
            class="w-full rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-3 text-white placeholder-slate-500 transition-colors focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
            :placeholder="t('contact.subject')"
          >
        </div>

        <div>
          <label for="contact-message" class="mb-1 block text-sm font-medium text-slate-300">
            {{ t('contact.message') }}
          </label>
          <textarea
            id="contact-message"
            v-model="form.message"
            rows="5"
            required
            class="w-full rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-3 text-white placeholder-slate-500 transition-colors focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
            :placeholder="t('contact.message')"
          />
        </div>

        <ABaseButton
          type="submit"
          variant="primary"
          size="lg"
          class="w-full"
          :disabled="submitted"
        >
          {{ submitted ? t('contact.success') : t('contact.submit') }}
        </ABaseButton>
      </form>

      <div class="lg:col-span-2">
        <div class="rounded-xl border border-slate-700/50 bg-slate-800/40 p-6">
          <div class="mb-4 flex items-center gap-3">
            <AIcon icon="mail" size="md" decorative />
            <span class="text-sm font-medium text-slate-300">{{ t('contact.emailLabel') }}</span>
          </div>
          <a
            href="mailto:support@resultsmastery.com"
            class="block text-sm text-red-400 hover:text-red-300 transition-colors"
          >
            support@resultsmastery.com
          </a>
          <p class="mt-3 text-xs text-slate-500">
            {{ t('contact.responseTime') }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

useHead({
  title: t('contact.title'),
})

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const submitted = ref(false)

const handleSubmit = () => {
  submitted.value = true
  setTimeout(() => {
    submitted.value = false
    form.name = ''
    form.email = ''
    form.subject = ''
    form.message = ''
  }, 3000)
}
</script>
