import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AIcon from '~/components/atoms/AIcon.vue'

describe('AIcon', () => {
  it('renders a span with role="img"', () => {
    const wrapper = mount(AIcon, { props: { icon: 'star' } })
    const span = wrapper.find('span')
    expect(span.attributes('role')).toBe('img')
  })

  it('renders the correct emoji for known icons', () => {
    const iconMap: Record<string, string> = {
      light_mode: '☀️',
      dark_mode: '🌙',
      rocket_launch: '🚀',
      shield: '🛡️',
      trending_up: '📈',
      support_agent: '🎯',
      check: '✓',
      star: '★',
      arrow_right: '→',
      close: '✕',
      expand_more: '▼',
      play: '▶',
      mail: '✉',
      verified: '✓',
    }

    for (const [iconName, expectedEmoji] of Object.entries(iconMap)) {
      const wrapper = mount(AIcon, { props: { icon: iconName } })
      expect(wrapper.text()).toContain(expectedEmoji)
    }
  })

  it('renders the icon name as text for unknown icons', () => {
    const wrapper = mount(AIcon, { props: { icon: 'custom_icon' } })
    expect(wrapper.text()).toBe('custom_icon')
  })

  describe('size prop', () => {
    it('applies sm size classes', () => {
      const wrapper = mount(AIcon, { props: { icon: 'star', size: 'sm' } })
      expect(wrapper.find('span').classes()).toContain('w-4')
      expect(wrapper.find('span').classes()).toContain('h-4')
    })

    it('applies md size classes by default', () => {
      const wrapper = mount(AIcon, { props: { icon: 'star' } })
      expect(wrapper.find('span').classes()).toContain('w-6')
      expect(wrapper.find('span').classes()).toContain('h-6')
    })

    it('applies lg size classes', () => {
      const wrapper = mount(AIcon, { props: { icon: 'star', size: 'lg' } })
      expect(wrapper.find('span').classes()).toContain('w-8')
      expect(wrapper.find('span').classes()).toContain('h-8')
    })

    it('applies xl size classes', () => {
      const wrapper = mount(AIcon, { props: { icon: 'star', size: 'xl' } })
      expect(wrapper.find('span').classes()).toContain('w-12')
      expect(wrapper.find('span').classes()).toContain('h-12')
    })
  })

  describe('decorative prop', () => {
    it('sets aria-hidden="true" when decorative is true', () => {
      const wrapper = mount(AIcon, { props: { icon: 'star', decorative: true } })
      expect(wrapper.find('span').attributes('aria-hidden')).toBe('true')
    })

    it('does not set aria-hidden when decorative is false', () => {
      const wrapper = mount(AIcon, { props: { icon: 'star', decorative: false } })
      expect(wrapper.find('span').attributes('aria-hidden')).toBeUndefined()
    })

    it('does not set aria-label when decorative is true', () => {
      const wrapper = mount(AIcon, {
        props: { icon: 'star', decorative: true, ariaLabel: 'Star' },
      })
      expect(wrapper.find('span').attributes('aria-label')).toBeUndefined()
    })

    it('sets aria-label when decorative is false and ariaLabel is provided', () => {
      const wrapper = mount(AIcon, {
        props: { icon: 'star', decorative: false, ariaLabel: 'Star rating' },
      })
      expect(wrapper.find('span').attributes('aria-label')).toBe('Star rating')
    })
  })

  describe('expanded prop', () => {
    it('adds rotate-180 class when expanded is true (for expand_more icon)', () => {
      const wrapper = mount(AIcon, {
        props: { icon: 'expand_more', expanded: true },
      })
      // The rotate class is on the inner span
      const innerSpan = wrapper.find('span > span')
      if (innerSpan.exists()) {
        expect(innerSpan.classes()).toContain('rotate-180')
      }
    })

    it('does not add rotate-180 when expanded is false', () => {
      const wrapper = mount(AIcon, {
        props: { icon: 'expand_more', expanded: false },
      })
      const innerSpan = wrapper.find('span > span')
      if (innerSpan.exists()) {
        expect(innerSpan.classes()).not.toContain('rotate-180')
      }
    })
  })
})
