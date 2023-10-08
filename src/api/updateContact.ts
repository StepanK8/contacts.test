import { useStore} from '@/stores/contactsStore.ts'
const contactsStore = useStore()

export default function updateContact(contact, id:number){
    return new Promise((resolve) => {
        contactsStore.updateContact(contact, id)
        setTimeout(resolve, 1200)
    })
}