import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useDarkModeStore } from '~/stores/darkMode'

describe('darkMode Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('initialises isDark to the useCookie default (true)', () => {
    const store = useDarkModeStore()
    expect(store.isDark).toBe(true)
  })

  it('toggle() flips isDark from true to false', () => {
    const store = useDarkModeStore()
    expect(store.isDark).toBe(true)
    store.toggle()
    expect(store.isDark).toBe(false)
  })

  it('toggle() flips isDark from false to true', () => {
    const store = useDarkModeStore()
    store.setDark(false)
    expect(store.isDark).toBe(false)
    store.toggle()
    expect(store.isDark).toBe(true)
  })

  it('setDark(false) sets isDark to false', () => {
    const store = useDarkModeStore()
    store.setDark(false)
    expect(store.isDark).toBe(false)
  })

  it('setDark(true) sets isDark to true', () => {
    const store = useDarkModeStore()
    store.setDark(false)
    store.setDark(true)
    expect(store.isDark).toBe(true)
  })

  it('multiple toggles cycle correctly', () => {
    const store = useDarkModeStore()
    store.toggle() // false
    store.toggle() // true
    store.toggle() // false
    expect(store.isDark).toBe(false)
  })
})
