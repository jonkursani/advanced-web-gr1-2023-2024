<script setup>
import { RouterView } from 'vue-router'
import TheHeader from "@/components/layout/TheHeader.vue";
import {useAuthStore} from "@/stores/auth.js";

const authStore = useAuthStore();
</script>

<template>
  <TheHeader title="Find Devs" v-if="authStore.isLoggedIn"/>

  <div class="container mt-5">
    <RouterView />
  </div>
</template>

<style scoped>
</style>
