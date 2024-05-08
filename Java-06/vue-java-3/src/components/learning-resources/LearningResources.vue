<script setup>
import TheHeader from "@/components/layout/TheHeader.vue";
import LearningResource from "@/components/learning-resources/LearningResource.vue";
import AddLearningResource from "@/components/learning-resources/AddLearningResource.vue";
import {computed, ref} from "vue";
import AppCard from "@/components/AppCard.vue";

const resources = ref([]);
const isAddLearningResourceShown = ref(false);
const btnText = computed(() => {
  return isAddLearningResourceShown.value ? 'List of resources' : 'Add resources';
})

</script>

<template>
  <the-header title="Learning resources"/>

  <button
      class="btn btn-outline-secondary mt-3 col-12"
      @click="isAddLearningResourceShown = !isAddLearningResourceShown">
    {{ btnText }}
  </button>

  <div class="mt-3">
    <add-learning-resource v-if="isAddLearningResourceShown" />

    <template v-else>
      <learning-resource v-if="resources.length > 0"/>
      <app-card v-else>
        <h3>No resources</h3>
      </app-card>
    </template>
  </div>
</template>

<style scoped>

</style>