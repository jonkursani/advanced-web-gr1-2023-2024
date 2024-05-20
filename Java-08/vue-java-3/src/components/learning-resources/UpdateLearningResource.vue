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

const {params} = useRoute();
const {push} = useRouter();
const store = useResourceStore();

onMounted(async () => {
  // resource.value = store.resources.find(resource => resource.id === params.id);
  const resourceFromDb = await store.getResource(params.id)

  if(!resourceFromDb) {
    alert('Resource not found');
    await push({name: 'resources'});
  }

  resource.value = resourceFromDb;
  // console.log(resourceFromDb)
})

const handleUpdate = async () => {
  await store.updateResource({ id: params.id, ...resource.value });
  await push({name: 'resources'});
}
</script>

<template>
  <the-layout>
    <transition appear v-if="store.loading">
      <app-card class="text-center">
        <h3>Loading...</h3>
      </app-card>
    </transition>
    <transition appear v-else>
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
    </transition>
  </the-layout>
</template>

<style scoped>

</style>