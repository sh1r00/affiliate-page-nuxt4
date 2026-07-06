import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import OFooter from '~/components/organisms/OFooter.vue'

describe('OFooter', () => {
  it('renders a footer with role="contentinfo"', () => {
    const wrapper = mount(OFooter)
    expect(wrapper.find('footer[role="contentinfo"]').exists()).toBe(true)
  })

  it('renders the logo/brand name', () => {
    const wrapper = mount(OFooter)
    expect(wrapper.text()).toContain('header.logo')
  })

  it('renders the disclaimer text', () => {
    const wrapper = mount(OFooter)
    expect(wrapper.text()).toContain('footer.disclaimer')
  })

  describe('navigation links', () => {
    it('renders home, about, and contact links', () => {
      const wrapper = mount(OFooter)
      const allLinks = wrapper.findAll('a')
      const linkTexts = allLinks.map(l => l.text())
      expect(linkTexts).toContain('header.nav.home')
      expect(linkTexts).toContain('header.nav.about')
      expect(linkTexts).toContain('header.nav.contact')
    })

    it('renders privacy and terms links', () => {
      const wrapper = mount(OFooter)
      const allLinks = wrapper.findAll('a')
      const linkTexts = allLinks.map(l => l.text())
      expect(linkTexts).toContain('footer.links.privacy')
      expect(linkTexts).toContain('footer.links.terms')
    })

    it('has correct hrefs for navigation links', () => {
      const wrapper = mount(OFooter)
      const allLinks = wrapper.findAll('a')
      const hrefs = allLinks.map(l => l.attributes('href'))
      expect(hrefs).toContain('/')
      expect(hrefs).toContain('/about')
      expect(hrefs).toContain('/contact')
      expect(hrefs).toContain('/privacy')
      expect(hrefs).toContain('/terms')
    })
  })

  describe('section headings', () => {
    it('renders the navigation section heading', () => {
      const wrapper = mount(OFooter)
      const headings = wrapper.findAll('h4')
      const headingTexts = headings.map(h => h.text())
      expect(headingTexts).toContain('header.nav.home')
    })

    it('renders the legal section heading', () => {
      const wrapper = mount(OFooter)
      const headings = wrapper.findAll('h4')
      const headingTexts = headings.map(h => h.text())
      expect(headingTexts).toContain('footer.links.privacy')
    })
  })

  describe('copyright', () => {
    it('includes the current year', () => {
      const wrapper = mount(OFooter)
      const currentYear = new Date().getFullYear().toString()
      expect(wrapper.text()).toContain(currentYear)
    })

    it('includes the copyright text', () => {
      const wrapper = mount(OFooter)
      expect(wrapper.text()).toContain('footer.copyright')
    })

    it('includes the brand name in copyright', () => {
      const wrapper = mount(OFooter)
      const text = wrapper.text()
      expect(text).toContain('header.logo')
    })
  })

  it('renders a gradient-text span in the logo', () => {
    const wrapper = mount(OFooter)
    const gradientSpan = wrapper.find('.gradient-text')
    expect(gradientSpan.exists()).toBe(true)
  })
})
