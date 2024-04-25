<script setup>
import {ref} from "vue";

// const isDivRendered = ref(true);
// const type = ref('D');


const todos = ref([]);
const todo = ref('');

function addTodo() {
  todos.value.push({
    id: todos.value.length + 1,
    title: todo.value,
    isCompleted: false
  })

  todo.value = '';
}

function removeTodo(index) {
  // console.log(index);
  todos.value.splice(index, 1);
}

function markAsDone(id) {
  const todo = todos.value.find(todo => todo.id === id);
  // 2 == '2' ///true
  // 2 === '2' //false
  todo.isCompleted = !todo.isCompleted;
}
</script>

<template>
  <div class="card">
    <div class="card-header bg-success text-center text-white">
      <h3>Todo list</h3>
    </div>
    <div class="card-body">
      <div class="input-group mb-3">
        <input type="text"
               class="form-control"
               placeholder="Add todo"
               v-model.trim="todo"
               @keyup.enter="addTodo">
        <button class="btn btn-outline-success"
                type="button"
                @click="addTodo">
          + Add
        </button>
      </div>

      <ul class="list-group" v-if="todos.length > 0">
        <li class="list-group-item d-flex justify-content-between"
            v-for="(todo, index) in todos"
            :key="todo.id"
            :class="{ done: todo.isCompleted }">
<!--          {{ index }} - -->
          {{ todo.title }}

          <span>
            <button
                class="btn btn-outline-success"
                @click="markAsDone(todo.id)">
              {{ todo.isCompleted ? 'Done' : 'Mark as done' }}
            </button>
            <button
                class="btn btn-outline-danger ms-1"
                @click="removeTodo(index)">
              Delete
            </button>
          </span>
        </li>
      </ul>
      <h4 v-else class="text-center">No todos</h4>
    </div>
  </div>

<!--  <button @click="isDivRendered = !isDivRendered">Toggle div</button>-->
<!--  <div v-if="isDivRendered">-->
<!--    If is rendered-->
<!--  </div>-->
<!--&lt;!&ndash;  <p></p>&ndash;&gt;-->
<!--  <div v-else>-->
<!--    else is rendered-->
<!--  </div>-->


<!--  <div v-if="type === 'A'">A</div>-->
<!--  <div v-else-if="type === 'B'">B</div>-->
<!--  <div v-else-if="type === 'C'">C</div>-->
<!--  <div v-else>Not A/B/C</div>-->

<!--  <div v-show="isDivRendered">Show is rendered</div>-->

<!--  v-show - v-if -->
<!--  <div v-show=""></div>-->
</template>

<style scoped>
.done {
  text-decoration: line-through;
  color: green;
}
</style>