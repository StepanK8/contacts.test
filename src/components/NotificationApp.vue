<script setup>

</script>
<template lang="">
    <div class="notif">
        <img src="@/assets/icons/success.png" class="notif__img">
        <p class="notif__text">Контакт успешно создан</p>
    </div>
</template>
<style lang="scss">
    .notif{
        position: fixed;
        bottom: 48px;
        left: 32px;
        padding: 16px 12px;
        border-radius: 4px;
        background: white;
        box-shadow: var(--bigShadow);
        display: flex;
        align-items: center;
        gap: 6px;
        &__img{
            width: 20px;
            height: 20px;
            object-fit: contain;
        }
        &__text{
            @include baseText;
        }
    }
</style>