<script setup>
import TheHeader from "@/components/layout/TheHeader.vue";
import LearningResource from "@/components/learning-resources/LearningResource.vue";
import AddLearningResource from "@/components/learning-resources/AddLearningResource.vue";
import {computed, ref} from "vue";
import AppCard from "@/components/AppCard.vue";
import AppButton from "@/components/AppButton.vue";

const resources = ref([]);
const isAddLearningResourceShown = ref(false);
const btnText = computed(() => {
  return isAddLearningResourceShown.value ? 'List of resources' : 'Add resources';
})

function handleSubmit(formData) {
  resources.value.unshift({
    id: new Date().toISOString(),
    ...formData
  })

  isAddLearningResourceShown.value = !isAddLearningResourceShown.value;
}

function deleteResource(id) {
  resources.value = resources.value.filter(res => res.id !== id);
}
</script>

<template>
  <the-header title="Learning resources"/>

  <app-button
      class="btn-outline-secondary mt-3 col-12"
      @click="isAddLearningResourceShown = !isAddLearningResourceShown">
    {{ btnText }}
  </app-button>

  <div class="mt-3">
    <add-learning-resource
        v-if="isAddLearningResourceShown"
        @handleSubmit="handleSubmit"/>

    <template v-else>
      <template v-if="resources.length > 0">
        <learning-resource v-for="resource in resources"
                           :key="resource.id"
                           :resource="resource"
                           @deleteResource="deleteResource"
                           />
      </template>
      <app-card v-else>
        <h3>No resources</h3>
      </app-card>
    </template>
  </div>
</template>

<style scoped>

</style>