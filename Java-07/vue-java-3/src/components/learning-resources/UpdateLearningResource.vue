<script setup>

import AppCard from "@/components/AppCard.vue";
import AppButton from "@/components/AppButton.vue";
import {onMounted, ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import {useResourceStore} from "@/stores/resource.store.js";

const resource = ref({
  title: '',
  description: '',
  resourcePlace: '',
  link: ''
});

const { params } = useRoute();
const { push } = useRouter();
const store = useResourceStore();

onMounted(() => {
  resource.value =  store.resources.find(resource => resource.id === params.id);
})

const handleUpdate = () => {
  store.updateResource(resource.value);
  push({ name: 'resources' });
}
</script>

<template>
  <app-card>
    <template #header>
      <h3>Update resource</h3>
    </template>

    <form @submit.prevent="handleUpdate">
      <div class="mb-3">
        <label>Title</label>
        <input type="text" class="form-control" v-model.trim="resource.title">
      </div>

      <div class="mb-3">
        <label>Description</label>
        <textarea type="text" class="form-control" v-model.trim="resource.description"></textarea>
      </div>

      <div class="mb-3">
        <label class="form-label">Where did you find this resource?</label>
        <select class="form-select" v-model="resource.resourcePlace">
          <option value="fb">Facebook</option>
          <option value="tw">Twitter</option>
          <option value="md">Medium</option>
        </select>
      </div>

      <div class="mb-3">
        <label>Link</label>
        <input type="text" class="form-control" v-model.trim="resource.link">
      </div>

      <div class="mb-3">
        <app-button class="btn-outline-success">Update</app-button>
        <!--        <router-link to="/" class="btn btn-outline-secondary ms-1">Cancel</router-link>-->
        <router-link :to="{ name: 'resources' }"
                     class="btn btn-outline-secondary ms-1">
          Cancel
        </router-link>
      </div>
    </form>
  </app-card>
</template>

<style scoped>

</style>