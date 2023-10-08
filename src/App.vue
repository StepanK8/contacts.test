<script setup lang="ts">
import MainView from '@/views/MainView.vue'
import NotificationApp from '@/components/NotificationApp.vue'
import HeaderApp from '@/components/HeaderApp.vue'

import { useNotificationsStore } from '@/stores/notificationsStore.ts'

import {ref, watch} from 'vue'
const notificationsStore = useNotificationsStore()
watch(notificationsStore.notifications, (newItem) => {
  console.log(newItem);
  
})

</script>
<template>
  <HeaderApp/>
  <router-view></router-view>
  <NotificationApp/>
</template>

<style>
@import '@/style/reset.scss';
@import '@/style/main.scss';
</style>
