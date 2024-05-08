<script setup>
import {reactive} from "vue";

const user = reactive({
  username: '',
  age: null
})

defineEmits(['handleClick'])
// console.log(user.username, user.age)
</script>

<template>
  <input type="text"
         class="form-control"
         placeholder="Username"
         v-model.trim="user.username">
  <input type="number"
         class="form-control"
         placeholder="Age"
         v-model.number="user.age">

  <button @click="$emit('handleClick', user)">Save</button>
</template>

<style scoped></style>