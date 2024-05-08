<script setup>
import AppCard from "@/components/AppCard.vue";
import AppButton from "@/components/AppButton.vue";

defineProps({
  resource: {
    type: Object,
    required: true,
  }
})

defineEmits(['deleteResource'])
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
      <app-button class="btn-outline-danger ms-2"
                  @click="$emit('deleteResource', resource.id)">
        Delete
      </app-button>
    </template>
  </app-card>
</template>

<style scoped>

</style>