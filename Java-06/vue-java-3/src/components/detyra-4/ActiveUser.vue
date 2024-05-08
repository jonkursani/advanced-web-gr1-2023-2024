<script setup>
// defineProps(['username', 'age'])
defineProps({
  username: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  }
})

</script>

<template>
  <h2>Username: {{ username }}</h2>
  <h3>Age: {{ age }}</h3>
</template>

<style scoped>

</style>