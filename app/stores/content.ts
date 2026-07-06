import { defineStore } from 'pinia'

export interface Feature {
  icon: string
  titleKey: string
  descKey: string
}

export interface Testimonial {
  name: string
  roleKey: string
  quoteKey: string
  avatar: string
  rating: number
}

export interface PricingTier {
  id: string
  nameKey: string
  price: string
  periodKey: string
  descriptionKey: string
  featuresKeys: string[]
  highlighted: boolean
  ctaKey: string
}

export interface FaqItem {
  questionKey: string
  answerKey: string
}

export const useContentStore = defineStore('content', () => {
  const videoUrl = 'https://www.youtube.com/embed/dQw4w9WgXcQ'

  const features: Feature[] = [
    {
      icon: 'rocket_launch',
      titleKey: 'features.item1.title',
      descKey: 'features.item1.desc',
    },
    {
      icon: 'shield',
      titleKey: 'features.item2.title',
      descKey: 'features.item2.desc',
    },
    {
      icon: 'trending_up',
      titleKey: 'features.item3.title',
      descKey: 'features.item3.desc',
    },
    {
      icon: 'support_agent',
      titleKey: 'features.item4.title',
      descKey: 'features.item4.desc',
    },
  ]

  const testimonials: Testimonial[] = [
    {
      name: 'Sarah Johnson',
      roleKey: 'testimonials.person1.role',
      quoteKey: 'testimonials.person1.quote',
      avatar: '',
      rating: 5,
    },
    {
      name: 'Marcus Chen',
      roleKey: 'testimonials.person2.role',
      quoteKey: 'testimonials.person2.quote',
      avatar: '',
      rating: 5,
    },
    {
      name: 'Elena Rodriguez',
      roleKey: 'testimonials.person3.role',
      quoteKey: 'testimonials.person3.quote',
      avatar: '',
      rating: 5,
    },
  ]

  const pricingTiers: PricingTier[] = [
    {
      id: 'starter',
      nameKey: 'pricing.tier1.name',
      price: '$29',
      periodKey: 'pricing.perMonth',
      descriptionKey: 'pricing.tier1.desc',
      featuresKeys: [
        'pricing.tier1.feature1',
        'pricing.tier1.feature2',
        'pricing.tier1.feature3',
        'pricing.tier1.feature4',
      ],
      highlighted: false,
      ctaKey: 'pricing.getStarted',
    },
    {
      id: 'pro',
      nameKey: 'pricing.tier2.name',
      price: '$79',
      periodKey: 'pricing.perMonth',
      descriptionKey: 'pricing.tier2.desc',
      featuresKeys: [
        'pricing.tier2.feature1',
        'pricing.tier2.feature2',
        'pricing.tier2.feature3',
        'pricing.tier2.feature4',
        'pricing.tier2.feature5',
      ],
      highlighted: true,
      ctaKey: 'pricing.getStarted',
    },
    {
      id: 'enterprise',
      nameKey: 'pricing.tier3.name',
      price: '$199',
      periodKey: 'pricing.perMonth',
      descriptionKey: 'pricing.tier3.desc',
      featuresKeys: [
        'pricing.tier3.feature1',
        'pricing.tier3.feature2',
        'pricing.tier3.feature3',
        'pricing.tier3.feature4',
        'pricing.tier3.feature5',
        'pricing.tier3.feature6',
      ],
      highlighted: false,
      ctaKey: 'pricing.getStarted',
    },
  ]

  const faqItems: FaqItem[] = [
    {
      questionKey: 'faq.q1.question',
      answerKey: 'faq.q1.answer',
    },
    {
      questionKey: 'faq.q2.question',
      answerKey: 'faq.q2.answer',
    },
    {
      questionKey: 'faq.q3.question',
      answerKey: 'faq.q3.answer',
    },
    {
      questionKey: 'faq.q4.question',
      answerKey: 'faq.q4.answer',
    },
    {
      questionKey: 'faq.q5.question',
      answerKey: 'faq.q5.answer',
    },
  ]

  return { videoUrl, features, testimonials, pricingTiers, faqItems }
})
