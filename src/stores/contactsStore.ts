import { defineStore } from 'pinia'
import { type Contact } from '@/types/contact'
const STORE_NAME = 'main'

export const useStore = defineStore(STORE_NAME, {
  state: () => ({
      contacts: [
        {
          id: 1,
          name: 'Айтишник Данила',
          phone: '+7(987)462-33-11',
          mail: 'smedly@mail.com',
          categoryId: 1,
          created: 1396712921,
        },
        {
          id: 2,
          name: 'Арендодатель Виктория',
          phone: '+7(937)654-56-73',
          mail: 'sad@mail.ru',
          created: 1196712921,
          categoryId: 1,
        },
        {
          id: 3,
          name: 'Двери Вадим',
          phone: '+7(987)123-77-62',
          mail: 'nelfeelingood@gmail.com',
          created: 1596712921,
          categoryId: 2,
        },
        {
          id: 4,
          name: 'Доставка Андрей Стоянов',
          phone: '+7(987)654-78-09',
          mail: 'good@gmail.com',
          created: 1686712921,
          categoryId: 1,
        },
        
      ] as Array<Contact>,
  }),
  actions: {
    createContact(contact:Contact){
      contact.id = this.contacts[this.contacts.length - 1].id + 1
      contact.created = Date.now() / 1000
      console.log(contact);
      
      this.contacts.push(contact)
    },
    updateContact(contact:Contact, id:number){
      contact.id = this.contacts[this.contacts.length - 1].id + 1
      contact.created = Date.now() / 1000
      console.log(contact);
      
      this.contacts.forEach((el, idx) => {
        if(el.id == id){
          this.contacts[idx] = contact 
        }
      })
    },
    deleteContact(id:number){
      this.contacts.forEach((el, idx) => {
        if(el.id == id){
          this.contacts.splice(idx, 1)
        }
      })
    }
  },
  // persist: true,
})