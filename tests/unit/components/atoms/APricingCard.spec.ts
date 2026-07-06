import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import type { PricingTier } from '~/stores/content'
import APricingCard from '~/components/atoms/APricingCard.vue'
import AIcon from '~/components/atoms/AIcon.vue'
import ABaseButton from '~/components/atoms/ABaseButton.vue'

const nonHighlightedTier: PricingTier = {
  id: 'starter',
  nameKey: 'pricing.tier1.name',
  price: '$29',
  periodKey: 'pricing.perMonth',
  descriptionKey: 'pricing.tier1.desc',
  featuresKeys: ['pricing.tier1.feature1', 'pricing.tier1.feature2'],
  highlighted: false,
  ctaKey: 'pricing.getStarted',
}

const highlightedTier: PricingTier = {
  id: 'pro',
  nameKey: 'pricing.tier2.name',
  price: '$79',
  periodKey: 'pricing.perMonth',
  descriptionKey: 'pricing.tier2.desc',
  featuresKeys: ['pricing.tier2.feature1', 'pricing.tier2.feature2', 'pricing.tier2.feature3'],
  highlighted: true,
  ctaKey: 'pricing.getStarted',
}

function mountCard(tier: PricingTier) {
  return mount(APricingCard, {
    props: { tier },
    global: {
      components: { AIcon, ABaseButton },
      stubs: { AIcon: false, ABaseButton: false },
    },
  })
}

describe('APricingCard', () => {
  describe('rendering tier info', () => {
    it('displays the tier name (via i18n key)', () => {
      const wrapper = mountCard(nonHighlightedTier)
      expect(wrapper.text()).toContain('pricing.tier1.name')
    })

    it('displays the price', () => {
      const wrapper = mountCard(nonHighlightedTier)
      expect(wrapper.text()).toContain('$29')
    })

    it('displays the period', () => {
      const wrapper = mountCard(nonHighlightedTier)
      expect(wrapper.text()).toContain('pricing.perMonth')
    })

    it('displays the description', () => {
      const wrapper = mountCard(nonHighlightedTier)
      expect(wrapper.text()).toContain('pricing.tier1.desc')
    })
  })

  describe('highlighted tier', () => {
    it('shows the "Popular" badge', () => {
      const wrapper = mountCard(highlightedTier)
      expect(wrapper.text()).toContain('pricing.popular')
    })

    it('applies highlighted card classes', () => {
      const wrapper = mountCard(highlightedTier)
      const card = wrapper.find('div')
      expect(card.classes()).toContain('border-red-600/50')
      expect(card.classes()).toContain('scale-105')
    })

    it('uses primary variant for the CTA button', () => {
      const wrapper = mountCard(highlightedTier)
      const button = wrapper.findComponent({ name: 'ABaseButton' })
      expect(button.props('variant')).toBe('primary')
    })
  })

  describe('non-highlighted tier', () => {
    it('does not show the "Popular" badge', () => {
      const wrapper = mountCard(nonHighlightedTier)
      expect(wrapper.text()).not.toContain('pricing.popular')
    })

    it('applies non-highlighted card classes', () => {
      const wrapper = mountCard(nonHighlightedTier)
      const card = wrapper.find('div')
      expect(card.classes()).toContain('border-slate-700/50')
      expect(card.classes()).not.toContain('scale-105')
    })

    it('uses outline variant for the CTA button', () => {
      const wrapper = mountCard(nonHighlightedTier)
      const button = wrapper.findComponent({ name: 'ABaseButton' })
      expect(button.props('variant')).toBe('outline')
    })
  })

  describe('features list', () => {
    it('renders all features', () => {
      const wrapper = mountCard(nonHighlightedTier)
      const features = wrapper.findAll('li')
      expect(features).toHaveLength(2)
    })

    it('each feature uses AIcon with check icon', () => {
      const wrapper = mountCard(nonHighlightedTier)
      const icons = wrapper.findAllComponents({ name: 'AIcon' })
      expect(icons).toHaveLength(2)
      for (const icon of icons) {
        expect(icon.props('icon')).toBe('check')
        expect(icon.props('decorative')).toBe(true)
      }
    })
  })

  describe('CTA button', () => {
    it('renders ABaseButton', () => {
      const wrapper = mountCard(nonHighlightedTier)
      expect(wrapper.findComponent({ name: 'ABaseButton' }).exists()).toBe(true)
    })

    it('has correct aria-label with tier name', () => {
      const wrapper = mountCard(highlightedTier)
      const button = wrapper.findComponent({ name: 'ABaseButton' })
      expect(button.props('ariaLabel')).toBe('pricing.getStarted - pricing.tier2.name')
    })

    it('displays CTA text', () => {
      const wrapper = mountCard(nonHighlightedTier)
      const button = wrapper.findComponent({ name: 'ABaseButton' })
      expect(button.text()).toBe('pricing.getStarted')
    })
  })
})
