===============================================================================
                     Affiliate Page
                     shiro — where style meets function
===============================================================================

Category: Landing Page Template
Live URL:  https://affiliate-page-sh1r00-691.netlify.app
GitHub:    https://github.com/sh1r00/affiliate-page-nuxt4

===============================================================================
ABOUT THIS PROJECT
===============================================================================

Video-first affiliate marketing landing page. Video embeds, pricing tables, FAQs, and CTA sections.

Technology Stack:
Nuxt 4, Vue 3, Tailwind CSS, Dark Mode, PWA, Video Embeds

Shiro Portfolio: https://shiro-portfolio-sh1r00.netlify.app

===============================================================================
DEPLOYMENT
===============================================================================

npx nuxi generate
Deploy .output/public to Netlify via API zip upload.
Note: Large video files are gitignored — add them to public/videos/ before deploying.

===============================================================================
QUICK START (Local Development)
===============================================================================

1. Install dependencies:
   npm install

2. Start development server:
   npm run dev

3. Build for production:
   npm run generate

4. Preview production build:
   npx serve .output/public

===============================================================================
NOTES
===============================================================================

- Built with Nuxt 4 (compatibilityVersion 4) and Vue 3 Composition API
- All projects use atomic design: atoms/ → molecules/ → organisms/
- Dark mode is SSR-safe via Pinia store with useCookie() persistence
- PWA configured with service worker for offline access
- CSP headers configured via nuxt-security module (production only)
- i18n supports 3 locales: English, Español, አማርኛ

===============================================================================
Made with ❤️ by shiro — rasisg@gmail.com — github.com/sh1r00
===============================================================================
