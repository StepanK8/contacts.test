import { defineStore } from 'pinia'
const STORE_NAME = 'notifications'

export const useNotificationsStore = defineStore(STORE_NAME, {
  state: () => ({
      notifications: [] as Array<String>,
  }),
  actions: {
    addNotification(text:string){
        this.notifications.push(text)
    }
  },
  // persist: true,
})