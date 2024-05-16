<script setup>
import AppCard from "@/components/AppCard.vue";
import AppButton from "@/components/AppButton.vue";
import {useResourceStore} from "@/stores/resource.store.js";

defineProps({
  resource: {
    type: Object,
    required: true,
  }
})

const store = useResourceStore();

function deleteResource(id) {
  if(confirm('Are you sure you want to delete this resource?')) {
    store.deleteResource(id)
  }
}
</script>

<template>
  <app-card>
    <template #header>
      <h5 class="card-title">{{ resource.title }}</h5>
    </template>

    <p class="card-text">
      <strong>Desc:</strong> {{ resource.description }} -
      <strong>Place:</strong> {{ resource.resourcePlace }}
    </p>

    <template #footer>
      <a href="#" class="card-link">{{ resource.link }}</a>

      <div class="text-end">
        <router-link class="btn btn-outline-warning"
                     :to="`/update/${resource.id}`">
          Update
        </router-link>
        <app-button class="btn-outline-danger ms-2"
                    @click="deleteResource(resource.id)">
          Delete
        </app-button>
      </div>
    </template>
  </app-card>
</template>

<style scoped>

</style>