<script setup>
import {computed, ref} from "vue";

const userInput = ref('');

const paragraphClasses = computed(() => {
  return {
    user1: userInput.value === 'user1', //emri klases user1
    user2: userInput.value === 'user2',
    visible: isVisible.value,
    // visible: isVisible.value === true,
    hidden: !isVisible.value,
    // hidden: isVisible.value === false,
  }
})

const isVisible = ref(true);
const toggleVisible = () => {
  isVisible.value = !isVisible.value;
}

const backgroundColor = ref('');
</script>

<template>
  <div class="card">
    <div class="card-header text-center bg-success text-white">
      <h3>Vue Styling</h3>
    </div>
    <div class="card-body">
      <!-- 1) Fetch the user input and use it as a CSS class -->
      <!-- The entered class should be added to the below paragraph -->
      <input type="text" class="form-control" placeholder="user1, user2" v-model="userInput" />
      <!-- (available classes: "user1", "user2") -->
<!--      <p class="alert alert-light mt-2" :class="{user1: userInput === 'user1', user2: userInput === 'user2'}">-->
<!--        Style me!-->
<!--      </p>-->
      <p class="alert alert-light mt-2" :class="paragraphClasses">
        Style me!
      </p>
      <button class="btn btn-success mb-4" @click="toggleVisible">Toggle Paragraph</button>
      <!-- 2) Use the "visible" and "hidden" classes to show/ hide the above paragraph -->
      <!-- Clicking the button should toggle between the two options -->

      <!-- 3) Add dynamic inline styling to the below paragraph and let the user enter a background-color -->
      <input
          type="text"
          class="form-control"
          placeholder="Write background color name ex: red, green"
          v-model="backgroundColor"/>
      <p class="alert alert-light mt-2" :style="{backgroundColor: backgroundColor}">Style me inline!</p>
    </div>
  </div>
</template>

<style scoped>
.user1 {
  background-color: blue;
  color: white;
}

.user2 {
  background-color: purple;
  color: white;
}

.hidden {
  display: none;
}

.visible {
  display: block;
}
</style>