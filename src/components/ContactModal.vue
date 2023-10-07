<script setup lang="ts">
import BaseInput from '@/components/ui/BaseInput.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import DropDown from '@/components/ui/DropDown.vue'
</script>
<template>
    <div class="modal">
        <h2 class="modal__title">Новый контакт </h2>
        <div class="modal__form">
            <div class="modal__row">
                <h2 class="modal__row_title">Имя</h2>
                <div class="modal__row_input-wrap">
                    <BaseInput/>
                </div>
            </div>
            <div class="modal__row">
                <h2 class="modal__row_title">Телефон</h2>
                <div class="modal__row_input-wrap">
                    <BaseInput/>
                </div>
            </div>
            <div class="modal__row">
                <h2 class="modal__row_title">E-mail</h2>
                <div class="modal__row_input-wrap">
                    <BaseInput/>
                </div>
            </div>

            <div class="modal__row">
                <h2 class="modal__row_title">Категория</h2>
                <div class="modal__row_input-wrap">
                    <DropDown :optionsList="[{name: 'все', id: 1}, {name: 'родственники', id: 2}, {name: 'коллеги', id: 1},]"/>
                </div>
            </div>

            <div class="modal__row">
                <h2 class="modal__row_title">Создано</h2>
                <div class="modal__row_input-wrap">
                    <p class="modal__row_text">22.02.2020</p>
                </div>
            </div>

        </div>

        <div class="modal__bottom-panel">
            <BaseButton>
                <img src="@/assets/icons/save.png" alt="">
                Сохранить
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
    }
}
</style>