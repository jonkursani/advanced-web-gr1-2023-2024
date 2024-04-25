<script setup>
import {computed, ref} from "vue";

const task = ref('');
const tasks = ref([])

function addTask() {
  tasks.value.push(task.value)
  task.value = '';
}

const isListVisible = ref(true);
const toggleListVisible = () => {
  isListVisible.value = !isListVisible.value
}

const buttonText = computed(() => {
  return isListVisible.value ? 'Hide List' : 'Show List';
})
</script>

<template>
  <div class="card">
    <div class="card-header text-center bg-success text-white">
      <h3>Assignment</h3>
    </div>
    <div class="card-body">
      <!-- 1) Add code to manage a list of tasks -->
      <!-- When clicking "Add Task" a new task with the entered text should be added -->

      <div class="input-group my-3">
        <input type="text"
               class="form-control"
               placeholder="Add task"
               v-model="task"
               @keyup.enter="addTask">
        <button class="btn btn-outline-success" type="button" @click="addTask">+ Add</button>
      </div>

      <ul class="list-group list-group-flush" v-if="isListVisible">
        <!-- 2) Output the list of tasks here -->
        <li class="list-group-item" v-for="task in tasks" :key="task">{{ task }}</li>
      </ul>

      <!-- 3) When the below button is pressed, the list should be shown or hidden -->
      <!-- BONUS: Also update the button caption -->
      <div class="text-center">
        <!--        <button class="btn btn-outline-secondary col-2" @click="toggleListVisible">-->
        <!--          Hide / Show List-->
        <!--        </button>-->
        <!--        <button class="btn btn-outline-secondary col-2" @click="isListVisible = !isListVisible">-->
        <!--          {{ isListVisible ? 'Hide' : 'Show' }} List-->
        <!--        </button>-->
        <button class="btn btn-outline-secondary col-2" @click="isListVisible = !isListVisible">
          {{ buttonText }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>