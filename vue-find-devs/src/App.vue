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

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
