<script setup>
const todo = defineModel({ default: '' })

const emit = defineEmits(['addTodo'])

function addTodo() {
  emit('addTodo', todo.value)
}
</script>

<template>
  <div class="input-group mb-3">
    <input type="text"
           class="form-control"
           placeholder="Add todo"
           v-model.trim="todo"
           @keyup.enter="emit('addTodo', todo)">
    <button class="btn btn-outline-success"
            type="button"
            @click="addTodo">
      + Add
    </button>
  </div>
</template>

<style scoped>

</style>