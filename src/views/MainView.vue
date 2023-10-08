<script setup lang="ts">

import ListApp from '@/components/ListApp.vue'

import BaseButton from '@/components/ui/BaseButton.vue'
import BaseInput from '@/components/ui/BaseInput.vue'
import DropDown from '@/components/ui/DropDown.vue'

import {useRouter} from 'vue-router'

import {ref} from 'vue'
const router = useRouter()
const selectedCategoryId = ref(0)

</script>
<template>
    <div class="main">
        
        <div class="main__top-row">
            <div class="main__top-row_wrap">
                <div class="main__top-row_select-wrap">
                    <DropDown
                        :optionsList="[{name: 'все', id: 0}, {name: 'родственники', id: 1}, {name: 'коллеги', id: 2}]"
                        v-model="selectedCategoryId"
                    ></DropDown>
                </div>
                <div class="main__top-row_button-wrap">
                    <BaseButton 
                        :style="'border'"
                        @click="router.push({name: 'create'})"
                    >
                        <img src="@/assets/icons/plus.png" alt="">
                        ДОБАВИТЬ <span class="main__top-row_button-wrap--descktop">КОНТАКТ</span>
                    </BaseButton>
                </div>
            </div>
            <!-- <BaseInput :label="'sdfgsd'" :warning="true"/>
            <BaseButton><img src="@/assets/icons/save.png" alt="">Сохранить</BaseButton>
            <BaseButton :style="'border'"><img src="@/assets/icons/plus.png" alt="">12a3 </BaseButton> -->
        </div>
        <ListApp :selectedCategoryId="selectedCategoryId"/>
        <ContactModal/>
    </div>
</template>

<style lang="scss">
.main{
    &__top-row{
        height: 56px;
        border-bottom: 1px solid var(--stroke);
        background: var(--lightBlue);
        display: flex;
        justify-content: center;
        &_wrap{
            width: var(--width);
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        &_select-wrap{
            width: 235px;
        }
        &_button-wrap{
            width: 185px;
            
        }
    }
}
@media screen and (max-width: $mediaQuery3) {
    .main{
        &__top-row{
            &_wrap{
                gap: 10px;
            }
            &_button-wrap{
                &--descktop{
                    display: none;
                }
            }
        }
    }
}
</style>
