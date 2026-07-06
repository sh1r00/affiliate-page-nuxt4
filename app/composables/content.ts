import { useContentStore } from '~/stores/content'

export function useContent() {
  return useContentStore()
}
