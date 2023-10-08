<script setup lang="ts">
import { useStore} from '@/stores/contactsStore.ts'
import { useRouter, useRoute } from 'vue-router'

import {ref, onMounted, watch} from 'vue'
const route = useRoute()
const router = useRouter()

const contactsStore = useStore()
const currentContact = ref<any>({})

currentContact.value = contactsStore.contacts.find(el => el.id == route.params.id)
watch(route, (val) => {
    
    currentContact.value = contactsStore.contacts.find(el => el.id == route.params.id)
})
// setTimeout(() => {
// }, 500)

</script>

<template>
    <div>
        <div class="header">
            <div class="header__main">

                <template v-if="route.name == 'home'">
                    <div class="header__row"> 
                        <img class="header__main_img" src="@/assets/icons/logo.png" alt="">
                        <h2 class="header__main_title">Книга контактов</h2>
                    </div>
                </template>

                <template v-if="route.name == 'create'">
                        <div></div>
                        <h2 class="header__main_title">Книга контактов</h2>
                        <img @click="router.push({name: 'home'})" src="@/assets/icons/cross.svg" class="header__main_cross" alt="">
                </template>

                <template v-if="route.name == 'edit' && currentContact?.name">
                        <div></div>
                        <div class="header__contact">
                            <div class="header__circle">
                                <p>{{currentContact.name[0]}}</p>
                            </div>
                            <p class="header__contact_text">{{currentContact.name}}</p>
                            
                        </div>
                        <img @click="router.push({name: 'home'})" src="@/assets/icons/cross.svg" class="header__main_cross" alt="">
                </template>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
    .header{
        background: var(--deepGray);
        height: 48px;
        width: 100%;
        &__main{
            margin: 0 48px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 100%;
            &_img{
                width: 42px;
                height: 32px;
                margin-right: 16px;
            }
            &_title{
                @include baseText;
                color: var(--white);
                font-size: var(--l-text-size);
                text-transform: uppercase;
            }
            &_cross{
                opacity: 0.7;
                cursor: pointer;
                &:hover{
                    opacity: 1;
                }
            }
        }
        &__contact{
            display: flex;
            align-items: center;
            gap: 8px;
            &_text{
                @include baseText;
                color: var(--white);
                font-size: 20px;   
                font-weight: 700;           
            }
        }
        &__row{
            display: flex;
            align-items: center;
        }
        &__circle{
            width: 24px;
            height: 24px;
            border-radius: 100px;
            background: var(--yellow);
            display: flex;
            align-items: center;
            justify-content: center;
            & > p{
                @include baseText;
                font-weight: 700;
                font-size: var(--s-text-size);
            }
        }
    }
    @media screen and (max-width: $mediaQuery1) {
        .header{
            &__main{
                margin: 0 auto;
                width: var(--width);
            }
        }
    }
</style>