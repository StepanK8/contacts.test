<script setup lang="ts">
import { useNotificationsStore } from '@/stores/notificationsStore.ts'
import {ref, watch} from 'vue'

const notificationsStore = useNotificationsStore()
const textToShow = ref<String>('')
watch(notificationsStore.notifications, (newItem) => {
    textToShow.value = notificationsStore.notifications[notificationsStore.notifications.length-1]
    isOpen.value = true
    setTimeout(() => {
        isOpen.value = false
    }, 3000)
})
const isOpen = ref(false)
</script>

<template lang="">
    <div class="notif" :class="{'notif--open': isOpen}">
        <img src="@/assets/icons/success.png" class="notif__img">
        <p class="notif__text">{{ textToShow }}</p>
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
        opacity: 0;
        transition: opacity 1s;
        &--open{
            opacity: 1;
        }
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