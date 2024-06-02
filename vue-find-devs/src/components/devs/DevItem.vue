<script setup>
import AppCard from "@/components/ui/AppCard.vue";

defineProps({
  dev: {
    type: Object,
    required: true,
  }
})
</script>

<template>
  <app-card>
    <template #title>
      <h5 class="card-title">{{ dev.firstName }} {{ dev.lastName }}</h5>
    </template>

    <p class="card-text">{{ dev.bio }}</p>
    <p class="text-muted">
      <strong>${{ dev.hourlyRate }}</strong>
    </p>

    <p>
      <span v-for="area in dev.areas"
            class="badge rounded-pill text-bg-primary me-2">
        {{ area }}
      </span>
    </p>

    <div class="text-end">
<!--      <router-link :to="`/devs/${dev.id}`"-->
<!--                   class="btn btn-sm btn-outline-primary">-->
<!--        Details-->
<!--      </router-link>-->
      <router-link :to="{name: 'dev-details', params: { id: dev.id }}"
                   class="btn btn-sm btn-outline-secondary">
        Details
      </router-link>
      <router-link :to="{name: 'contact-dev', params: { id: dev.id }}"
                   class="btn btn-sm btn-outline-primary ms-2">
        Contact
      </router-link>
    </div>
  </app-card>
</template>

<style scoped>

</style>