# Affiliate Page — affiliate-page-nuxt4 (Landing Page)

> Category: Landing Page Template · Live: https://affiliate-page-sh1r00-691.netlify.app

## Functionality

A video-first affiliate marketing landing page with a red/teal dark theme. The hero embeds a YouTube video and the page combines a features grid, pricing tiers, testimonials, and an FAQ section, all driven from a Pinia content store with i18n keys. It also ships about/contact/privacy/terms pages, dark mode, a PWA install prompt, and i18n across three locales.

- **Public pages** — `app/pages/index.vue` (hero + features + video + pricing + testimonials + FAQ), `app/pages/about.vue`, `app/pages/contact.vue`, `app/pages/privacy.vue`, `app/pages/terms.vue`.
- **Components** — atoms (`ABaseButton`, `ADarkModeToggle`, `AIcon`, `APricingCard`, `ATestimonialCard`), molecules (`LanguageSwitcher`, `MFAQ`), organisms (`OHeader`, `OFooter`), plus `PwaInstallPrompt.vue`.
- **Content store** — `app/stores/content.ts` (features, testimonials, pricing tiers, FAQ — i18n keyed).
- **Videos** — hero uses a YouTube iframe (`content.videoUrl`); `public/videos/` holds local `.mp4` files (3 of 4 are gitignored).
- **Also included** — dark mode (SSR-safe via Pinia + `useCookie`), PWA (offline + install prompt), i18n (3 locales).

## Stack

- Nuxt 4 (`compatibilityVersion: 4`), Vue 3 `<script setup>`, TypeScript
- Tailwind CSS v3.4 (`@nuxtjs/tailwindcss` v6) — red/teal dark theme
- Pinia (stores: `content`, `darkMode`, `pwaInstall`)
- `@nuxtjs/i18n` v10 — 3 locales (English, Español, አማርኛ), `strategy: 'prefix'`, `lazy: true`
- `@vite-pwa/nuxt` — service worker, offline caching, installable manifest
- `nuxt-security` — CSP (nonce-based), rate limiter, XSS validator (production only)
- Vitest + Vue Test Utils (unit), Playwright (e2e)

## Steps Taken

`git log --oneline` (newest first):

- `7a0a0aa` fix(netlify): root `/` redirect to `/en/` (prefix strategy) + SPA fallback to `/200.html`
- `f474bbd` fix(netlify): node 24 + legacy-peer-deps (nuxt-security@2.6.0 needs >=24)
- `4d305b9` fix(i18n+security): detectBrowserLanguage:false, `$t`→`t`, missing keys, CSP nonce, lazy i18n, branded PWA
- `3fcd48c` fix README.md formatting
- `80c004d` convert README.txt to README.md with GitHub markdown formatting
- `79b36ee` add README.txt with deploy instructions + project overview
- `4e3f8e7` nuxt4 migration/creation + affiliate-page-nuxt4

## Pitfalls & Fixes

### Shared pitfalls (all shiro Nuxt 4 templates)

- **`nuxt-security@2.6.0` needs Node ≥ 24** — Netlify's default Node is too old and `npm install` fails (EBADENGINE). Fix: `NODE_VERSION = "24"` in `netlify.toml` `[build.environment]`.
- **esbuild peer conflict** — a peer dependency conflict (esbuild/rollup) aborts `npm install` with ERESOLVE. Fix: `npm install --legacy-peer-deps`.
- **i18n v10 `detectBrowserLanguage`** — must be `false`; browser detection causes unpredictable 302s on first load. Fix: `detectBrowserLanguage: false` and build links with `const localePath = useLocalePath()`.
- **`$t()` is banned in `<template>`** — i18n v10 drops the global `$t()` template helper. Fix: `const { t } = useI18n()` in `<script setup>` and call `t('key')`.
- **Component auto-import `pathPrefix: false`** — the default path-prefixed auto-import names don't match the tags, producing a blank screen with no console errors. Fix: declare each component dir with `pathPrefix: false`.
- **PWA `navigateFallback`** — a precached SPA fallback serves non-precached URLs as the app shell → blank screen. Fix: `navigateFallback: null` and exclude `.html` from precache globs (the Netlify SPA fallback targets `/200.html`).
- **i18n `prefix` strategy root redirect** — with `strategy: 'prefix'` there is no page at `/`. Netlify must 302 `/` → `/en/` (not a `/*` → `/index.html` SPA fallback, which loops).
- **`defineProps()` without `const props =`** — in `<script setup>` you must capture the return value (`const props = defineProps<...>()`); otherwise destructuring throws "props is not defined".
- **SSG vs SSR output dirs** — `nuxt build` (SSR) writes `.output/server` + `.output/public`; `nuxt generate` (SSG) writes the static site to `.output/public` only. Netlify `publish` must point at `.output/public`.

### Project-specific

- **Gitignored videos** — three of the four files in `public/videos/` (`zcodeintrofinal.mp4`, `how_bookies_cheat.mp4`, `win_rate.mp4`) are listed in `.gitignore`; only `zcode_what_is_inside.mp4` is tracked. Re-add the large `.mp4` files before deploying, or the video sections render without local sources.
- **Content is i18n-keyed** — the `content` store stores `titleKey`/`descKey`/`questionKey` strings rather than literal text; translation strings live in `i18n/locales/*.json`.

## Deployment

Static site generation:

```bash
npm install --legacy-peer-deps
npm run generate   # → .output/public
```

Netlify (`netlify.toml`): `NODE_VERSION = "24"`, build command `npm install --legacy-peer-deps --no-audit --no-fund && npm run generate`, publish dir `.output/public`, redirects `/` → `/en/` (302) and `/*` → `/200.html` (200, SPA fallback).

Live: https://affiliate-page-sh1r00-691.netlify.app

## TODO / Roadmap
- [ ] Point a custom domain (optional) — for client-facing work; a single wildcard domain can cover all sites.
