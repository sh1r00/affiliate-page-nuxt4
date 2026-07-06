import { describe, it, expect, beforeEach, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { setActivePinia, createPinia } from 'pinia'
import { useDarkModeStore } from '~/stores/darkMode'
import LanguageSwitcher from '~/components/molecules/LanguageSwitcher.vue'
import ADarkModeToggle from '~/components/atoms/ADarkModeToggle.vue'

vi.stubGlobal('useDarkModeStore', useDarkModeStore)

import OHeader from '~/components/organisms/OHeader.vue'

describe('OHeader', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  function mountHeader() {
    return mount(OHeader, {
      global: {
        components: { LanguageSwitcher, ADarkModeToggle },
        stubs: { LanguageSwitcher: false, ADarkModeToggle: false },
      },
    })
  }

  it('renders a header with role="banner"', () => {
    const wrapper = mountHeader()
    expect(wrapper.find('header[role="banner"]').exists()).toBe(true)
  })

  it('renders a nav with aria-label "Main navigation"', () => {
    const wrapper = mountHeader()
    const nav = wrapper.find('nav')
    expect(nav.attributes('aria-label')).toBe('Main navigation')
  })

  it('renders the logo link', () => {
    const wrapper = mountHeader()
    const logoLink = wrapper.find('a[aria-label="Home"]')
    expect(logoLink.exists()).toBe(true)
    expect(logoLink.text()).toContain('header.logo')
  })

  describe('navigation links', () => {
    it('renders 3 navigation links', () => {
      const wrapper = mountHeader()
      const navLinks = wrapper.findAll('a')
      expect(navLinks).toHaveLength(4)
    })

    it('has correct nav link labels', () => {
      const wrapper = mountHeader()
      const navLinks = wrapper.findAll('a')
      const links = navLinks.slice(1)
      const labels = links.map(l => l.text())
      expect(labels).toEqual([
        'header.nav.home',
        'header.nav.about',
        'header.nav.contact',
      ])
    })

    it('highlights the current route', () => {
      const wrapper = mountHeader()
      const navLinks = wrapper.findAll('a')
      const homeLink = navLinks[1]
      expect(homeLink.classes()).toContain('text-white')
    })
  })

  it('renders the LanguageSwitcher component', () => {
    const wrapper = mountHeader()
    expect(wrapper.findComponent({ name: 'LanguageSwitcher' }).exists()).toBe(true)
  })

  it('renders the ADarkModeToggle component', () => {
    const wrapper = mountHeader()
    expect(wrapper.findComponent({ name: 'ADarkModeToggle' }).exists()).toBe(true)
  })
})
