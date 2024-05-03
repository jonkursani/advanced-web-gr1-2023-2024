<script setup>

// defineProps(['id', 'title', 'isCompleted'])
defineProps({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true
  },
  isCompleted: {
    type: Boolean,
    required: false,
    default: false
  }
})

const emit = defineEmits(['removeTodo', 'markAsDone']);

function removeTodo(id) {
  emit('removeTodo', id);
}
</script>

<template>
  <li class="list-group-item d-flex justify-content-between"
      :class="{ done: isCompleted }">
    <!--          {{ index }} - -->
    <!--    {{ id }} -->
    {{ title }}

    <span>
      <button
          class="btn btn-outline-success"
          @click="emit('markAsDone', id)">
        {{ isCompleted ? 'Done' : 'Mark as done' }}
      </button>
      <button
          class="btn btn-outline-danger ms-1"
          @click="removeTodo(id)">
        Delete
      </button>
    </span>
  </li>
</template>

<style scoped>
.done {
  text-decoration: line-through;
  color: white;
  background-color: lightgreen;
}
</style>