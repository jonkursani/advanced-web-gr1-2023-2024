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
import {computed, reactive, ref} from 'vue';
import Detyra1 from "@/components/Detyra1.vue";

// pranon vlera primitive
const counter = ref(0);
// output: { value: 0 }

// pranon veq arrays dhe objects
const userId = ref(1);
const userFirstName = ref('Filan');
const user = reactive({
  id: 1,
  firstName: 'Filan',
  lastName: 'Fisteku',
});

const formDataWithRef = ref(
    {
      firstName: 'Filan',
      lastName: 'Fisteku',
      age: 20
    }
)

// console.log(formDataWithRef.value.firstName);

const formData = reactive({
  firstName: 'Filan',
  lastName: 'Fisteku',
  age: 20
})

// console.log(counter.value)
// console.log(user.firstName)


function increment(num) {
  counter.value = counter.value + num;
}

const decrement = (num) => {
  counter.value = counter.value - num;
};

const learnVue = ref('Learn Vue');
const vueLink = ref('https://vuejs.org');
const isBtnDisabled = ref(true);
// const choosePlace = () => {
//   if (Math.random() > 0.5) {
//     return 'Go to gym';
//   } else {
//     return 'Drink coffee';
//   }
// };
const isListItemShown = ref(true);

const firstName = ref('');
const setFirstName = (e) => {
  firstName.value = e.target.value;
}

function submitForm() {
  // e.preventDefault();

  alert('Test')
}

const confirmedFirstName = ref('');
const confirmFirstName = () => {
  confirmedFirstName.value = firstName.value;
}

// computed properties
// kalkulime

const choosePlace = computed(() => {
  if (Math.random() > 0.5) {
    return 'Go to gym';
  } else {
    return 'Drink coffee';
  }
})

const fullName = computed(() => {
  return firstName.value + ' Fisteku'
})
</script>

<template>
  <div class="container mt-5 text-center">
    <!-- <button class="btn btn-danger" v-on:click="counter--">-</button> -->
    <button class="btn btn-danger" v-on:click="decrement(1)">-</button>
    <button class="btn btn-danger ms-1" v-on:click="decrement(5)">-5</button>
    <h3 class="d-inline mx-3">
      <!-- template syntax -->
      {{ counter }}
    </h3>
    <button class="btn btn-success" @click="increment(1)">+</button>
    <button class="btn btn-success ms-1" @click="increment(10)">+10</button>
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
          <!--          <li class="list-group-item">{{ Math.random() > 0.5 ? 'Go to gym' : 'Drink coffee' }}</li>-->
          <!--          <li class="list-group-item">{{ choosePlace() }}</li>-->
          <!--          computed property -->
          <li class="list-group-item">{{ choosePlace }}</li>
          <li class="list-group-item" v-if="isListItemShown">V-if shown</li>
          <li class="list-group-item">
            <!--            <input type="text" class="form-control" placeholder="Write first name" :value="firstName" @input="setFirstName">-->
            <input type="text"
                   class="form-control"
                   placeholder="Write first name"
                   v-model="firstName"
                   @keyup.enter="confirmFirstName">
          </li>
          <li class="list-group-item">My first name: {{ firstName }}</li>
          <li class="list-group-item">Confirmed first name: {{ confirmedFirstName }}</li>
          <li class="list-group-item">Full name: {{ fullName }}</li>
          <li class="list-group-item">
            <form @submit.prevent="submitForm">
              <input type="text" class="form-control">
              <button class="btn btn-success">Submit</button>
            </form>
          </li>
        </ul>
      </div>
    </div>
  </div>


  <Detyra1/>
  <!--  import Detyra1 from "@/components/Detyra1.vue";-->

</template>

<style scoped></style>
