<script setup>
import { ref } from "vue";
import TodoListItem from "@/components/TodoListItem.vue";
import NewTodo from "@/components/NewTodo.vue";

// const isDivRendered = ref(true);
// const type = ref('D');


const todos = ref([]);
const inpTodo = ref('');

function addTodo(todo) {
  if(!todo) {
    return;
  }

  todos.value.push({
    // id: todos.value.length + 1,
    id: new Date().toISOString(),
    title: todo,
    isCompleted: false
  })

  inpTodo.value = ''
}

function removeTodo(id) {
  if (confirm("Are you sure you want to delete this todo?")) {
    todos.value = todos.value.filter((item) => item.id !== id);
  }
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

      <NewTodo @addTodo="addTodo" v-model="inpTodo" />

      <ul class="list-group" v-if="todos.length > 0">
        <!--        <todo-list-item id="" title="" />-->
        <TodoListItem v-for="todo in todos"
                      :key="todo.id"
                      :id="todo.id"
                      :title="todo.title"
                      :isCompleted="todo.isCompleted"
                      @removeTodo="removeTodo"
                      @markAsDone="markAsDone"
        />
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

</style>