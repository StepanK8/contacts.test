<script setup lang="ts">
import HeaderApp from '@/components/HeaderApp.vue'
import ListApp from '@/components/ListApp.vue'
import ContactModal from '@/components/ContactModal.vue'
</script>
<template>
    <div class="main">
        <HeaderApp/>
        <div class="main__top-row">
            <div class="main__top-row_wrap"></div>
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
