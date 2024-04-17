<!-- <script>
// options api
export default {
  data() {
    return {
      counter: 0,
    };

  },
  methods: {
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    },
  },
};
</script> -->

<!-- <script>
import { ref } from 'vue';

export default {
  setup() {
    const counter = ref(0);

    function increment() {
      counter.value++;
    }

    const decrement = () => {
      counter.value--;
    };

    return {
      counter,
      increment,
      decrement,
    };
  },
};
</script> -->

<script setup>
// composition api
import { ref } from 'vue';

const counter = ref(0);

function increment() {
  counter.value++;
}

const decrement = () => {
  counter.value--;
};

const learnVue = ref('Learn Vue');
const vueLink = ref('https://vuejs.org');
const isBtnDisabled = ref(true);
const choosePlace = () => {
  if (Math.random() > 0.5) {
    return 'Go to gym';
  } else {
    return 'Drink coffee';
  }
};
const isListItemShown = ref(true);
</script>

<template>
  <div class="container mt-5 text-center">
    <!-- <button class="btn btn-danger" v-on:click="counter--">-</button> -->
    <button class="btn btn-danger" v-on:click="decrement">-</button>
    <h3 class="d-inline mx-3">
      <!-- template syntax -->
      {{ counter }}
    </h3>
    <buttion class="btn btn-success" @click="increment()">+</buttion>
  </div>

  <div class="container mt-5">
    <div class="card">
      <div class="card-header bg-success text-center text-white">
        <h3>Todo list</h3>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">{{ learnVue }}</li>
          <!-- <li class="list-group-item">Check Vue <a v-bind:href="vueLink">docs</a></li> -->
          <li class="list-group-item">Check Vue <a :href="vueLink">docs</a></li>
          <li class="list-group-item">
            <button @click="isBtnDisabled = !isBtnDisabled">Toggle disabled</button>
            <!-- {{ isBtnDisabled }} -->
            <button class="btn btn-success" :disabled="isBtnDisabled">Disabled</button>
          </li>
          <!-- javascript expressions -->
          <li class="list-group-item">{{ Math.random() > 0.5 ? 'Go to gym' : 'Drink coffee' }}</li>
          <li class="list-group-item">{{ choosePlace() }}</li>
          <li class="list-group-item" v-if="isListItemShown">V-if shown</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
