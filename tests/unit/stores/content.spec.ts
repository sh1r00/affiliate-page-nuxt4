import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useContentStore } from '~/stores/content'

describe('content Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  describe('videoUrl', () => {
    it('returns the expected YouTube URL', () => {
      const store = useContentStore()
      expect(store.videoUrl).toBe('https://www.youtube.com/embed/dQw4w9WgXcQ')
    })
  })

  describe('features', () => {
    it('contains 4 features', () => {
      const store = useContentStore()
      expect(store.features).toHaveLength(4)
    })

    it('each feature has icon, titleKey, and descKey', () => {
      const store = useContentStore()
      for (const f of store.features) {
        expect(f).toHaveProperty('icon')
        expect(f).toHaveProperty('titleKey')
        expect(f).toHaveProperty('descKey')
        expect(typeof f.icon).toBe('string')
        expect(typeof f.titleKey).toBe('string')
        expect(typeof f.descKey).toBe('string')
      }
    })

    it('has the expected feature icons', () => {
      const store = useContentStore()
      const icons = store.features.map(f => f.icon)
      expect(icons).toEqual(['rocket_launch', 'shield', 'trending_up', 'support_agent'])
    })
  })

  describe('testimonials', () => {
    it('contains 3 testimonials', () => {
      const store = useContentStore()
      expect(store.testimonials).toHaveLength(3)
    })

    it('each testimonial has the required properties', () => {
      const store = useContentStore()
      for (const t of store.testimonials) {
        expect(t).toHaveProperty('name')
        expect(t).toHaveProperty('roleKey')
        expect(t).toHaveProperty('quoteKey')
        expect(t).toHaveProperty('avatar')
        expect(t).toHaveProperty('rating')
        expect(typeof t.name).toBe('string')
        expect(t.rating).toBe(5)
      }
    })

    it('has the expected names', () => {
      const store = useContentStore()
      const names = store.testimonials.map(t => t.name)
      expect(names).toEqual(['Sarah Johnson', 'Marcus Chen', 'Elena Rodriguez'])
    })
  })

  describe('pricingTiers', () => {
    it('contains 3 pricing tiers', () => {
      const store = useContentStore()
      expect(store.pricingTiers).toHaveLength(3)
    })

    it('has correct tier ids', () => {
      const store = useContentStore()
      const ids = store.pricingTiers.map(t => t.id)
      expect(ids).toEqual(['starter', 'pro', 'enterprise'])
    })

    it('has correct prices', () => {
      const store = useContentStore()
      const prices = store.pricingTiers.map(t => t.price)
      expect(prices).toEqual(['$29', '$79', '$199'])
    })

    it('only the pro tier is highlighted', () => {
      const store = useContentStore()
      expect(store.pricingTiers[0].highlighted).toBe(false)
      expect(store.pricingTiers[1].highlighted).toBe(true)
      expect(store.pricingTiers[2].highlighted).toBe(false)
    })

    it('each tier has featuresKeys as an array', () => {
      const store = useContentStore()
      for (const tier of store.pricingTiers) {
        expect(Array.isArray(tier.featuresKeys)).toBe(true)
        expect(tier.featuresKeys.length).toBeGreaterThan(0)
      }
    })

    it('each tier has all required properties', () => {
      const store = useContentStore()
      for (const tier of store.pricingTiers) {
        expect(tier).toHaveProperty('id')
        expect(tier).toHaveProperty('nameKey')
        expect(tier).toHaveProperty('price')
        expect(tier).toHaveProperty('periodKey')
        expect(tier).toHaveProperty('descriptionKey')
        expect(tier).toHaveProperty('featuresKeys')
        expect(tier).toHaveProperty('highlighted')
        expect(tier).toHaveProperty('ctaKey')
      }
    })
  })

  describe('faqItems', () => {
    it('contains 5 FAQ items', () => {
      const store = useContentStore()
      expect(store.faqItems).toHaveLength(5)
    })

    it('each FAQ item has questionKey and answerKey', () => {
      const store = useContentStore()
      for (const item of store.faqItems) {
        expect(item).toHaveProperty('questionKey')
        expect(item).toHaveProperty('answerKey')
        expect(typeof item.questionKey).toBe('string')
        expect(typeof item.answerKey).toBe('string')
      }
    })
  })
})
