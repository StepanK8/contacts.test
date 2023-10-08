import { useStore} from '@/stores/contactsStore.ts'
const contactsStore = useStore()

export function createContact(contact){
    return new Promise((resolve) => {
        contactsStore.createContact(contact)
        setTimeout(resolve, 1200)
    })
}

export function updateContact(contact, id:number){
    return new Promise((resolve) => {
        contactsStore.updateContact(contact, id)
        setTimeout(resolve, 1200)
    })
}

export function deleteContactById(id:number){
    return new Promise((resolve) => {
        contactsStore.deleteContact( id)
        setTimeout(resolve, 1200)
    })
}