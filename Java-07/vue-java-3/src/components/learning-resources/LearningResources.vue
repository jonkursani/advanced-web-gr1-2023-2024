<script setup>
import TheHeader from "@/components/layout/TheHeader.vue";
import LearningResource from "@/components/learning-resources/LearningResource.vue";
import AddLearningResource from "@/components/learning-resources/AddLearningResource.vue";
import {computed, ref} from "vue";
import AppCard from "@/components/AppCard.vue";
import AppButton from "@/components/AppButton.vue";
import {useResourceStore} from "@/stores/resource.store.js";

const resourceStore = useResourceStore();
</script>

<template>
  <the-header title="Learning resources"/>

  <div class="mt-3">
    <template v-if="resourceStore.resources.length > 0">
      <learning-resource v-for="resource in resourceStore.resources"
                         :key="resource.id"
                         :resource="resource"
      />
    </template>
    <app-card v-else>
      <h3>No resources</h3>
    </app-card>
  </div>
</template>

<style scoped>

</style>