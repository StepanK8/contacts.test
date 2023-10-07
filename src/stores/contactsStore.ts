import { defineStore } from 'pinia'
import { Contact } from '@/types/contact'
const STORE_NAME = 'main'

export const useStore = defineStore(STORE_NAME, {
  state: () => ({
      items: [] as Array<Contact>,
  }),
  actions: {
    addItem(contact:Contact) {
      this.items.push(contact)
    },
  },
  // persist: true,
})