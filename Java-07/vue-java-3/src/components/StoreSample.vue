<script setup>
import { useCounterStore } from "@/stores/counter.store.js";

const counterStore = useCounterStore();

function decrement() {
  counterStore.decrement();
}
</script>

<template>
  <h1>Counter value: {{ counterStore.count }}</h1>
  <button @click="counterStore.increment">Increment</button>
  <button @click="decrement">Decrement</button>
</template>

<style scoped>

</style>