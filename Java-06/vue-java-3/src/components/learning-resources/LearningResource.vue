<script setup>
import AppCard from "@/components/AppCard.vue";
</script>

<template>
  <app-card>
    <template #header>
      <h5 class="card-title">Card title</h5>
    </template>

    <p class="card-text">
      Some quick example text to build on the card title and make up the bulk of the card's
      content.
    </p>

    <template #footer>
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </template>
  </app-card>
</template>

<style scoped>

</style>