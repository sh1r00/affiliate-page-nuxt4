import { describe, it, expect, beforeEach, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { setActivePinia, createPinia } from 'pinia'
import { useDarkModeStore } from '~/stores/darkMode'
import AIcon from '~/components/atoms/AIcon.vue'

vi.stubGlobal('useDarkModeStore', useDarkModeStore)

import ADarkModeToggle from '~/components/atoms/ADarkModeToggle.vue'

describe('ADarkModeToggle', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  function mountToggle() {
    return mount(ADarkModeToggle, {
      global: {
        components: { AIcon },
        stubs: { AIcon: false },
      },
    })
  }

  it('renders a button', () => {
    const wrapper = mountToggle()
    expect(wrapper.find('button').exists()).toBe(true)
  })

  it('has the correct aria-label from i18n', () => {
    const wrapper = mountToggle()
    const button = wrapper.find('button')
    expect(button.attributes('aria-label')).toBe('darkMode.toggle')
  })

  it('shows the light_mode icon when isDark is true', () => {
    const store = useDarkModeStore()
    store.setDark(true)
    const wrapper = mountToggle()
    const icon = wrapper.findComponent({ name: 'AIcon' })
    expect(icon.exists()).toBe(true)
    expect(icon.props('icon')).toBe('light_mode')
  })

  it('shows the dark_mode icon when isDark is false', () => {
    const store = useDarkModeStore()
    store.setDark(false)
    const wrapper = mountToggle()
    const icon = wrapper.findComponent({ name: 'AIcon' })
    expect(icon.exists()).toBe(true)
    expect(icon.props('icon')).toBe('dark_mode')
  })

  it('calls darkMode.toggle() when clicked', async () => {
    const wrapper = mountToggle()
    const store = useDarkModeStore()
    const spy = vi.spyOn(store, 'toggle')
    await wrapper.find('button').trigger('click')
    expect(spy).toHaveBeenCalledOnce()
  })

  it('has a screen-reader-only span', () => {
    const wrapper = mountToggle()
    const srSpan = wrapper.find('.sr-only')
    expect(srSpan.exists()).toBe(true)
    expect(srSpan.text()).toBe('darkMode.toggle')
  })

  it('passes decorative=true to AIcon', () => {
    const wrapper = mountToggle()
    const icon = wrapper.findComponent({ name: 'AIcon' })
    expect(icon.exists()).toBe(true)
    expect(icon.props('decorative')).toBe(true)
  })
})
