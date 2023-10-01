import { defineStore } from 'pinia'
import { type Item } from '@/types/item'
const STORE_NAME = 'main'

export const useStore = defineStore('main', {
  state: () => ({
      items: [] as Array<Item>,
  }),
  actions: {
    addItem(item) {
      this.items.push(item)
    },
  },
  persist: true,
})