<script setup>
import AppCard from "@/components/AppCard.vue";
import { reactive } from "vue";

const formData = reactive({
  title: '',
  description: '',
  link: ''
})

defineEmits(['handleSubmit'])
</script>

<template>
  <app-card>
    <template #header>
      <h3>Add resource</h3>
    </template>

    <form @submit.prevent="$emit('handleSubmit', formData)">
      <div class="mb-3">
        <label>Title</label>
        <input type="text" class="form-control" v-model.trim="formData.title">
      </div>

      <div class="mb-3">
        <label>Description</label>
        <input type="text" class="form-control" v-model.trim="formData.description">
      </div>

      <div class="mb-3">
        <label>Link</label>
        <input type="text" class="form-control" v-model.trim="formData.link">
      </div>

      <div class="mb-3">
        <button class="btn btn-outline-secondary">Save</button>
      </div>
    </form>
  </app-card>
</template>

<style scoped>

</style>