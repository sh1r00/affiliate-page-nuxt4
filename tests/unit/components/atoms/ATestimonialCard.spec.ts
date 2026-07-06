import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import type { Testimonial } from '~/stores/content'
import ATestimonialCard from '~/components/atoms/ATestimonialCard.vue'
import AIcon from '~/components/atoms/AIcon.vue'

const testimonial: Testimonial = {
  name: 'Sarah Johnson',
  roleKey: 'testimonials.person1.role',
  quoteKey: 'testimonials.person1.quote',
  avatar: '',
  rating: 5,
}

const testimonial3Stars: Testimonial = {
  name: 'John Doe',
  roleKey: 'testimonials.person2.role',
  quoteKey: 'testimonials.person2.quote',
  avatar: '',
  rating: 3,
}

function mountCard(t: Testimonial) {
  return mount(ATestimonialCard, {
    props: { testimonial: t },
    global: {
      components: { AIcon },
      stubs: { AIcon: false },
    },
  })
}

describe('ATestimonialCard', () => {
  it('renders the quote text', () => {
    const wrapper = mountCard(testimonial)
    expect(wrapper.text()).toContain('testimonials.person1.quote')
  })

  it('renders the name', () => {
    const wrapper = mountCard(testimonial)
    expect(wrapper.text()).toContain('Sarah Johnson')
  })

  it('renders the role', () => {
    const wrapper = mountCard(testimonial)
    expect(wrapper.text()).toContain('testimonials.person1.role')
  })

  describe('star ratings', () => {
    it('renders the correct number of stars', () => {
      const wrapper = mountCard(testimonial)
      const stars = wrapper.findAllComponents({ name: 'AIcon' })
      expect(stars).toHaveLength(5)
    })

    it('renders 3 stars for a rating of 3', () => {
      const wrapper = mountCard(testimonial3Stars)
      const stars = wrapper.findAllComponents({ name: 'AIcon' })
      expect(stars).toHaveLength(3)
    })

    it('each star icon has correct props', () => {
      const wrapper = mountCard(testimonial)
      const stars = wrapper.findAllComponents({ name: 'AIcon' })
      for (const star of stars) {
        expect(star.props('icon')).toBe('star')
        expect(star.props('size')).toBe('sm')
        expect(star.props('decorative')).toBe(true)
      }
    })

    it('has aria-label for the rating', () => {
      const wrapper = mountCard(testimonial)
      const ratingContainer = wrapper.find('[aria-label]')
      expect(ratingContainer.attributes('aria-label')).toBe('5 out of 5 stars')
    })
  })

  describe('avatar fallback', () => {
    it('shows the first letter of the name', () => {
      const wrapper = mountCard(testimonial)
      expect(wrapper.text()).toContain('S')
    })

    it('has aria-hidden on the avatar', () => {
      const wrapper = mountCard(testimonial)
      const avatar = wrapper.find('[aria-hidden="true"]')
      expect(avatar.exists()).toBe(true)
    })
  })

  it('wraps quote in a blockquote with quotation marks', () => {
    const wrapper = mountCard(testimonial)
    const blockquote = wrapper.find('blockquote')
    expect(blockquote.exists()).toBe(true)
    expect(blockquote.text()).toContain('"')
  })
})
