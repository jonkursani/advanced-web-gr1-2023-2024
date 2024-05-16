<script setup>
import AppCard from "@/components/AppCard.vue";
import {reactive} from "vue";
import AppButton from "@/components/AppButton.vue";
import {useResourceStore} from "@/stores/resource.store.js";
import {useRouter} from "vue-router";

const formData = reactive({
  title: '',
  description: '',
  resourcePlace: '',
  link: ''
})

const {push} = useRouter();
const resourceStore = useResourceStore();

function handleSubmit() {
  resourceStore.addResource(formData)
  push({name: 'resources'});
}
</script>

<template>
  <the-layout>
    <transition appear>
      <app-card>
        <template #header>
          <h3>Add resource</h3>
        </template>

        <form @submit.prevent="handleSubmit">
          <div class="mb-3">
            <label>Title</label>
            <input type="text" class="form-control" v-model.trim="formData.title">
          </div>

          <div class="mb-3">
            <label>Description</label>
            <textarea type="text" class="form-control" v-model.trim="formData.description"></textarea>
          </div>

          <div class="mb-3">
            <label class="form-label">Where did you find this resource?</label>
            <select class="form-select" v-model="formData.resourcePlace">
              <option value="fb">Facebook</option>
              <option value="tw">Twitter</option>
              <option value="md">Medium</option>
            </select>
          </div>

          <div class="mb-3">
            <label>Link</label>
            <input type="text" class="form-control" v-model.trim="formData.link">
          </div>

          <div class="mb-3">
            <app-button class="btn-outline-success">Save</app-button>
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