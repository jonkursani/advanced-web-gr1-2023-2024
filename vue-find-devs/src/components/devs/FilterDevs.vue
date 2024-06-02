<script setup>
import AppCard from "@/components/ui/AppCard.vue";

defineEmits(['onChangeArea'])
</script>

<template>
  <app-card has-shadow>
    <h3>Filter Devs</h3>

    <label class="form-label">Select area</label>
    <select class="form-select" @change="$emit('onChangeArea', $event.target.value)">
      <option value="0" selected>All</option>
      <option value="1">Frontend</option>
      <option value="2">Backend</option>
      <option value="3">Fullstack</option>
    </select>
  </app-card>
</template>

<style scoped>

</style>