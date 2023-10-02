<script setup lang="ts">
import { ref } from 'vue'

const headers = ref<Array<string>>(['КОНТАКТ', 'ТЕЛЕФОН', 'E-MAIL', 'СОЗДАН'])
</script>
<template>
    <div class="list">
        <div class="list__wrap">
            <table class="list__table">
                <tr>
                    <td v-for="head in headers" class="list__table_head">{{ head }}</td>
                </tr>
                <tr v-for="contact in 5" class="list__contact-wrap">
                    <td>
                        <div class="list__contact">
                            <div class="list__contact_avatar">
                                <p class="list__contact_avatar-letter">A</p>
                            </div>
                            <p class="list__contact_name">Айтишник Данила</p>
                        </div>
                    </td>
                    <td> 
                        <p class="list__contact_text">+7(987)654-78-09</p>
                    </td>
                    <td> 
                        <p class="list__contact_name">nelfeelingood@gmail.com</p>
                    </td>
                    <td> 
                        <p class="list__contact_date">22.09.23</p>
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
            }
        }
        &__contact-wrap{
            height: 48px;
            border-bottom: 1px solid var(--stroke);
            &:last-child{
                border-bottom: none;
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
            }
            &_date{
                @include baseText;
                font-size: var(--m-text-size);
            }
        }
    }
</style>