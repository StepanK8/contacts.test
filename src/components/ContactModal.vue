<script setup lang="ts">
import {ref} from 'vue'

import { useStore} from '@/stores/contactsStore.ts'
import { useCategoriesStore }  from '@/stores/categoriesStore.ts'
import { useNotificationsStore } from '@/stores/notificationsStore.ts'
import { type Contact } from '@/types/contact'

import BaseInput from '@/components/ui/BaseInput.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import DropDown from '@/components/ui/DropDown.vue'

import unixToDate from '@/utils/time'

import validateEmail from '@/utils/validate'

import {createContact, updateContact, deleteContactById} from '@/api/contacts'

import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()

const contactsStore = useStore()
const categoriesStore = useCategoriesStore()
const notificationsStore = useNotificationsStore()
const isLoading = ref<boolean>(false)
const modalMode = ref(route.params?.id ? 'edit' : 'create')



const editableContact = ref<Omit<Contact, 'id'> | any >({
    name: '',
    phone: '',
    mail: '',
    created: null,
    categoryId: categoriesStore.categories[0].id,
})
// editableContact.value.categoryId = 
if(modalMode.value == 'edit'){
    console.log(contactsStore.contacts.find(el => el.id == route.params.id));
    
    editableContact.value = JSON.parse(JSON.stringify( (contactsStore.contacts.find(el => el.id == route.params.id)) ))
}



console.log(editableContact.value);


type warning = false | string
const warnings = ref({
    name: false as warning,
    phone: false as warning,
    mail: false as warning,
})

function checkForm(){
    if(editableContact.value.name.length < 2){
        warnings.value.name = 'Слишком короткое имя'
    } else {
        warnings.value.name = false
    }

    if(editableContact.value.phone.length == 0){
        warnings.value.phone = 'Поле не может быть пустым'
    } else if(editableContact.value.phone.length != 16) {
        warnings.value.phone = 'Некорректный номер телефона'
    } else {
        warnings.value.phone = false
    }

    if(validateEmail(editableContact.value.mail)){
        warnings.value.mail = false
    } else {
        warnings.value.mail = 'Некорректный e-mail'
    }
    return Object.values(warnings.value).every((value) => value === false)
}

function sendData(){
    
    if(checkForm()){
        isLoading.value = true
        console.log(modalMode.value);
        
        if(modalMode.value == 'create'){
            createContact(editableContact.value)
            .then(() => {
                isLoading.value = false
                notificationsStore.addNotification('Контакт успешно создан')
                router.push({name: 'home'})
            })
        }

        if(modalMode.value == 'edit'){
            console.log('edit!!!');
            
            updateContact(editableContact.value, route.params.id)
            .then(() => {
                isLoading.value = false
                notificationsStore.addNotification('Контакт успешно изменен')
                router.push({name: 'home'})
            })
        }

    }
}

function deleteContact(){
    isLoading.value = true
    deleteContactById(route.params.id)
    .then(() => {
        isLoading.value = false
        notificationsStore.addNotification('Контакт успешно удален')
        router.push({name: 'home'})
    })
}
</script>
<template>
    <div class="modal">
        <h2 class="modal__title">{{ modalMode == 'create' ? 'Новый контакт' : 'Контакт' }}</h2>
        <div class="modal__form">
            <div class="modal__row">
                <h2 class="modal__row_title">Имя</h2>
                <div class="modal__row_input-wrap">
                    <BaseInput 
                        v-model="editableContact.name" 
                        :warning="warnings.name"
                    />
                </div>
            </div>
            <div class="modal__row">
                <h2 class="modal__row_title">Телефон</h2>
                <div class="modal__row_input-wrap">
                    <BaseInput 
                        :type="'phone'" 
                        v-model="editableContact.phone"
                        :warning="warnings.phone"
                    />
                </div>
            </div>
            <div class="modal__row">
                <h2 class="modal__row_title">E-mail</h2>
                <div class="modal__row_input-wrap">
                    <BaseInput 
                        v-model="editableContact.mail"
                        :warning="warnings.mail"
                    />
                </div>
            </div>

            <div class="modal__row">
                <h2 class="modal__row_title">Категория</h2>
                <div class="modal__row_input-wrap">
                    <DropDown 
                        :optionsList="categoriesStore.categories"
                        v-model="editableContact.categoryId"    
                    />
                </div>
            </div>

            <div v-if="modalMode == 'edit'" class="modal__row">
                <h2 class="modal__row_title">Создано</h2>
                <div class="modal__row_input-wrap">
                    <p class="modal__row_text"> {{unixToDate(editableContact.created)}}</p>
                </div>
            </div>

        </div>

        <div class="modal__bottom-panel">
            <BaseButton @click="sendData" :icon="'save'" :isLoading="isLoading">
                Сохранить
            </BaseButton>
            <BaseButton v-if="modalMode == 'edit'" @click="deleteContact" :style="'transparent'">
                <img src="@/assets/icons/delete.png">
                Удалить контакт
            </BaseButton>
        </div>
    </div>
</template>
<style lang="scss">
.modal{
    width: var(--widthModal);
    box-shadow: var(--baseShadow);
    padding: 48px 64px;
    margin: auto;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    &__title{
        @include baseText;
        font-size: var(--title-text-size);
    }
    &__form{
        margin-top: 24px;
    }
    &__row{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 55px;
        margin-bottom: 2px;
        &_title{
            @include baseText;
            width: 168px;
            display: block;
            color: var(--darkGray);
        }
        &_input-wrap{
            flex-grow: 1;
        }
        &_text{
            @include baseText;
            font-size: var(--m-text-size);
        }
    }
    &__bottom-panel{
        display: flex;
        margin-top: 22px;
        padding-left: 168px;
        gap: 20px;
    }
}
@media screen and (max-width: $mediaQuery1) {
    .modal{
        width: var(--width);
        
    }

}

@media screen and (max-width: $mediaQuery2) {
    .modal{
        padding: 32px 48px;
    }
}

@media screen and (max-width: $mediaQuery3) {
    .modal{
        padding: 32px 20px;
        &__bottom-panel{
            padding-left: 0;
        }
        &__row{
            &_input{
                &-wrap{
                    width: 100px;
                }
            }
        }
    }
}
</style>