const { createApp } = Vue;

createApp({
  data() {
    return {
      todo: '',
      todos: [],
    };
  },
  methods: {
    addTodo() {
      if (!this.todo.trim()) {
        alert('Shkruaj nje todo...');
        return;
      }
      this.todos.push(this.todo);
      this.todo = '';
    },
  },
}).mount('#app');

// const inpTodo = document.querySelector('#inp-todo');
// const btnSave = document.querySelector('#btn-save');
// const ulTodoList = document.querySelector('#todo-list');

// function addTodo() {
//   const inpTodoValue = inpTodo.value.trim();

//   if (!inpTodoValue) {
//     alert('Shkruaj nje todo...');
//     return;
//   }

//   const li = document.createElement('li');
//   li.textContent = inpTodoValue;
//   li.classList.add('list-group-item');
//   ulTodoList.append(li);

//   inpTodo.value = '';
// }
