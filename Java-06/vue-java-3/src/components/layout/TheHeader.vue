<script setup>
defineProps({
  title: {
    required: true,
    type: String
  }
})
</script>

<template>
  <nav class="navbar bg-body-secondary">
    <div class="container-fluid">
      <span class="navbar-brand mb-0 h1">{{ title }}</span>
    </div>
  </nav>
</template>

<style scoped>

</style>