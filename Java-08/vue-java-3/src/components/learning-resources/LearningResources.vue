<script setup>
import LearningResource from "@/components/learning-resources/LearningResource.vue";
import AppCard from "@/components/AppCard.vue";
import {useResourceStore} from "@/stores/resource.store.js";
import {onMounted} from "vue";
import AppButton from "@/components/AppButton.vue";

const resourceStore = useResourceStore();

async function loadResources() {
  await resourceStore.getAllResources();
}

onMounted(async () => {
  await loadResources();
})

const onRefresh = async () => {
  await loadResources();
}
</script>

<template>
  <the-layout>
    <transition appear v-if="resourceStore.loading">
      <app-card class="text-center">
        <h3>Loading...</h3>
      </app-card>
    </transition>
    <transition appear v-else>
      <div class="mt-3">
        <app-button class="btn-outline-secondary mb-3" @click="onRefresh">
          Refresh list
        </app-button>
        <template v-if="!resourceStore.error && resourceStore.resources.length > 0">
          <learning-resource v-for="resource in resourceStore.resources"
                             :key="resource.id"
                             :resource="resource"
          />
        </template>
        <app-card v-else-if="!resourceStore.error && resourceStore.resources.length === 0">
          <h3>No resources</h3>
        </app-card>
        <app-card v-else-if="resourceStore.error">
          <h3>{{ resourceStore.error }}</h3>
        </app-card>
      </div>
    </transition>
  </the-layout>
</template>

<style scoped>

</style>