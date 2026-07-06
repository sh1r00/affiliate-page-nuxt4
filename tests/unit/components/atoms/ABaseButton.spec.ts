import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ABaseButton from '~/components/atoms/ABaseButton.vue'

describe('ABaseButton', () => {
  it('renders a <button> element', () => {
    const wrapper = mount(ABaseButton)
    expect(wrapper.find('button').exists()).toBe(true)
  })

  it('renders slot content', () => {
    const wrapper = mount(ABaseButton, {
      slots: { default: 'Click Me' },
    })
    expect(wrapper.text()).toBe('Click Me')
  })

  it('applies default variant (primary) and size (md) classes', () => {
    const wrapper = mount(ABaseButton)
    const button = wrapper.find('button')
    expect(button.classes()).toContain('bg-red-600')
    expect(button.classes()).toContain('px-5')
  })

  describe('variant prop', () => {
    it('applies primary variant classes', () => {
      const wrapper = mount(ABaseButton, { props: { variant: 'primary' } })
      const button = wrapper.find('button')
      expect(button.classes()).toContain('bg-red-600')
      expect(button.classes()).toContain('text-white')
    })

    it('applies secondary variant classes', () => {
      const wrapper = mount(ABaseButton, { props: { variant: 'secondary' } })
      const button = wrapper.find('button')
      expect(button.classes()).toContain('bg-amber-500')
    })

    it('applies outline variant classes', () => {
      const wrapper = mount(ABaseButton, { props: { variant: 'outline' } })
      const button = wrapper.find('button')
      expect(button.classes()).toContain('border-red-600')
    })

    it('applies ghost variant classes', () => {
      const wrapper = mount(ABaseButton, { props: { variant: 'ghost' } })
      const button = wrapper.find('button')
      expect(button.classes()).toContain('text-slate-400')
    })
  })

  describe('size prop', () => {
    it('applies sm size classes', () => {
      const wrapper = mount(ABaseButton, { props: { size: 'sm' } })
      const button = wrapper.find('button')
      expect(button.classes()).toContain('px-3')
      expect(button.classes()).toContain('text-sm')
    })

    it('applies md size classes', () => {
      const wrapper = mount(ABaseButton, { props: { size: 'md' } })
      const button = wrapper.find('button')
      expect(button.classes()).toContain('px-5')
      expect(button.classes()).toContain('text-base')
    })

    it('applies lg size classes', () => {
      const wrapper = mount(ABaseButton, { props: { size: 'lg' } })
      const button = wrapper.find('button')
      expect(button.classes()).toContain('px-7')
      expect(button.classes()).toContain('text-lg')
    })

    it('applies xl size classes', () => {
      const wrapper = mount(ABaseButton, { props: { size: 'xl' } })
      const button = wrapper.find('button')
      expect(button.classes()).toContain('px-9')
      expect(button.classes()).toContain('text-xl')
    })
  })

  describe('disabled prop', () => {
    it('sets the disabled attribute when true', () => {
      const wrapper = mount(ABaseButton, { props: { disabled: true } })
      const button = wrapper.find('button')
      expect(button.attributes('disabled')).toBeDefined()
    })

    it('does not set disabled attribute when false', () => {
      const wrapper = mount(ABaseButton, { props: { disabled: false } })
      const button = wrapper.find('button')
      expect(button.attributes('disabled')).toBeUndefined()
    })
  })

  describe('ariaLabel prop', () => {
    it('sets aria-label when provided', () => {
      const wrapper = mount(ABaseButton, { props: { ariaLabel: 'Submit form' } })
      const button = wrapper.find('button')
      expect(button.attributes('aria-label')).toBe('Submit form')
    })

    it('does not set aria-label when not provided', () => {
      const wrapper = mount(ABaseButton)
      const button = wrapper.find('button')
      expect(button.attributes('aria-label')).toBeUndefined()
    })
  })

  it('passes through extra attrs via v-bind', () => {
    const wrapper = mount(ABaseButton, {
      attrs: { 'data-testid': 'my-button', type: 'submit' },
    })
    const button = wrapper.find('button')
    expect(button.attributes('data-testid')).toBe('my-button')
    expect(button.attributes('type')).toBe('submit')
  })
})
