import { defineStore } from 'pinia'
import { type Category } from '@/types/category'
const STORE_NAME = 'category'

export const useCategoriesStore = defineStore(STORE_NAME, {
  state: () => ({
      categories: [
        
        {
          id: 1,
          name: 'родственники',
        },

        {
          id: 2,
          name: 'коллеги',
        },
        
      ] as Array<Category>,
  }),
  // persist: true,
})