<script setup lang="ts">
</script>
<template>
    <div class="modal">
        <h2 class="modal__title">Новый контакт </h2>
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
    &__title{
        @include baseText;
        font-size: var(--title-text-size);
    }
}
</style>