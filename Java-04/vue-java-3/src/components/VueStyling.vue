<script setup>
import {computed, reactive, ref} from "vue";

const isCompleted = ref(false);
function toggleCompleted() {
  isCompleted.value = !isCompleted.value;
}

const classObject = reactive({
  completed: false
});
function toggleClassObject() {
  classObject.completed = !classObject.completed;
}

const computedClass = computed(() => {
  return {
    completed: isCompleted.value,
    incomplete: !isCompleted.value
  }
})

const textDecoration = ref('line-through');
const greenColor = ref('green');
const uppercase = ref('uppercase');
</script>

<template>
  <div class="card">
    <div class="card-header bg-success text-center text-white">
      <h3>Todo list</h3>
    </div>
    <div class="card-body">
      <ul class="list-group">
<!--        <li class="list-group-item" :class="{ completed: isCompleted }" @click="toggleCompleted">Learn Vue</li>-->
<!--        <li class="list-group-item" :class="classObject" @click="toggleClassObject">Learn Vue</li>-->
<!--        <li :class="['list-group-item', { completed: isCompleted }]" @click="toggleCompleted">Learn Vue</li>-->
<!--        <li class="list-group-item" :class="{completed: isCompleted, incomplete: !isCompleted}" @click="toggleCompleted">-->
<!--          Learn Vue-->
<!--        </li>-->
<!--        <li class="list-group-item" :class="[isCompleted ? 'completed' : 'incomplete']" @click="toggleCompleted">-->
<!--          Learn Vue-->
<!--        </li>-->
        <li class="list-group-item" :class="computedClass" @click="toggleCompleted">Learn Vue</li>

        <li class="list-group-item"
            :style="{ textDecoration: textDecoration, color: greenColor, textTransform: uppercase }">
          Check Vue docs
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.completed {
  text-decoration: line-through;
  color: green;
}

.incomplete {
  color: red;
}
</style>