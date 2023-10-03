<script setup lang="ts">
import HeaderApp from '@/components/HeaderApp.vue'
import ListApp from '@/components/ListApp.vue'
import ContactModal from '@/components/ContactModal.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseInput from '@/components/ui/BaseInput.vue'
import DropDown from '@/components/ui/DropDown.vue'
</script>
<template>
    <div class="main">
        <HeaderApp/>
        <div class="main__top-row">
            <div class="main__top-row_wrap"></div>
            <BaseInput :label="'sdfgsd'" :warning="true"/>
            <BaseButton><img src="@/assets/icons/save.png" alt="">Сохранить</BaseButton>
            <BaseButton :style="'border'"><img src="@/assets/icons/plus.png" alt="">12a3 </BaseButton>
            <DropDown
                :optionsList="[{name: 'foo', id: 1}, {name: 'bar', id: 2}, {name: 'boo', id: 3}]"
            ></DropDown>
        </div>
        <ListApp/>
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
        }
    }
}
</style>
