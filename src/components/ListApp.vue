<script setup lang="ts">
import { useStore} from '@/stores/contactsStore.ts'
import unixToDate from '@/utils/time'
import {useRouter} from 'vue-router'
import { ref, computed } from 'vue'
const contactsStore = useStore()

const props = defineProps({
    selectedCategoryId: {
        type: Number,
        default: 0,
    },
})

const filteredContacts = computed(() => {
    // if()
    const filtered = contactsStore.contacts
    .filter(el => el.categoryId == props.selectedCategoryId || props.selectedCategoryId == 0)
    return filtered.sort((a, b) =>{
        return a.created < b.created ? 1 : 0
    } )
})
const headers = ref<Array<string>>(['КОНТАКТ', 'ТЕЛЕФОН', 'E-MAIL', 'СОЗДАН'])

const router = useRouter()
</script>
<template>
    <div class="list">
        <div class="list__wrap">
            <table class="list__table">
                <tr>
                    <td class="list__table_head">КОНТАКТ</td>
                    <td class="list__table_head">ТЕЛЕФОН <span class="list__table_head list__table_head--mb">/MAIL</span></td>
                    <td class="list__table_head">MAIL</td>
                    <td class="list__table_head">СОЗДАН</td>
                </tr>
                <tr 
                    v-for="contact in filteredContacts" 
                    :key="contact.id"
                    @click="router.push({name: 'edit', params: {id: contact.id}})" 
                    class="list__contact-wrap"

                >
                    <td>
                        <div class="list__contact">
                            <div class="list__contact_avatar">
                                <p class="list__contact_avatar-letter">{{ contact.name[0] }}</p>
                            </div>
                            <p class="list__contact_name">{{ contact.name }}</p>
                        </div>
                    </td>
                    <td> 
                        <p class="list__contact_text">{{ contact.phone }}</p>
                        <p class="list__contact_text list__contact_text--mb">{{ contact.mail }}</p>
                    </td>
                    <td> 
                        <p class="list__contact_name">{{ contact.mail }}</p>
                    </td>
                    <td> 
                        <p class="list__contact_date">{{unixToDate( contact.created) }}</p>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>
<style lang="scss">
    .list{
        display: flex;
        justify-content: center;
        margin-top: 16px;
        &__wrap{
            width: var(--width);
        }
        &__table{
            width: 100%;
			border-collapse: collapse;
            & > tr{
                width: 100%;
            }
            &_head{
                @include baseText;
                font-size: var(--xs-text-size);
                color: var(--lightGray);
                text-align: left;
                &--mb{
                    display: none;
                }
            }
        }
        &__contact-wrap{
            height: 48px;
            border-bottom: 1px solid var(--stroke);
            cursor: pointer;
            &:last-child{
                border-bottom: none;
            }
            &:hover{
                background: var(--lightBlue);
            }
        }
        &__contact{
            display: flex;
            align-items: center;
            
            &_avatar{
                width: 24px;
                height: 24px;
                border-radius: 100px;
                background: var(--yellow);
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: 8px;
                &-letter{
                    @include baseText;
                    font-weight: 700;
                    font-size: var(--s-text-size);
                }
            }
            &_name{
                @include baseText;
                font-size: var(--s-text-size);
                
            }
            &_text{
                @include baseText; 
                font-size: var(--s-text-size);
                text-align: left;
                &--mb{
                    display: none;
                }
            }
            &_date{
                @include baseText;
                font-size: var(--m-text-size);
            }
        }
    }
    @media screen and (max-width: $mediaQuery2) {
        .list{
            &__table{
                & > tr{
                    & > td{
                        &:nth-child(3){
                            display: none;
                        }
                    }
                }
                &_head{
                    &--mb{
                        display: inline;
                    }
                }
            }
            &__contact{
                &_text{
                    padding: 2px;
                    &--mb{
                        display: block;
                    }
                }
            }
        }
    }

    @media screen and (max-width: $mediaQuery3) {
        .list{
            &__contact{
                &_avatar{
                    display: none;
                }
            }
        }
    }
</style>