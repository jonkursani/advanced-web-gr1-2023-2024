<script setup>
import {useAuthStore} from "@/stores/auth.js";

const authStore = useAuthStore();
</script>

<template>
  <main>
    <h1>User: {{ authStore.loggedInUser.email }}</h1>
  </main>
</template>
