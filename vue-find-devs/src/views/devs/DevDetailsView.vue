<script setup>
import {useRoute} from "vue-router";
import AppCard from "@/components/ui/AppCard.vue";
import {onBeforeMount, ref} from "vue";
import {useDevsStore} from "@/stores/devs.js";

const route = useRoute();
const devsStore = useDevsStore();

const dev = ref(null);
onBeforeMount(() => {
  // console.log(devsStore.allDevs.filter(dev => dev.id === 1));
  dev.value = devsStore.allDevs.find(dev => dev.id === +route.params.id);
})
</script>

<template>
  <transition appear>
    <section>
      <h1>Dev Details</h1>
      <hr>
      <app-card has-shadow>
        <h3>{{ dev.firstName }} {{ dev.lastName }}</h3>
        <h4>${{ dev.hourlyRate }}</h4>
        <p>
          <span v-for="area in dev.areas"
                class="badge rounded-pill text-bg-primary me-2">
            {{ area }}
          </span>
        </p>
        <p>{{ dev.bio }}</p>
      </app-card>

      <app-card has-shadow class="mt-3">
        <h2>Do you want to contact this developer?</h2>

        <router-link :to="{name: 'contact-dev', params: {id: dev.id}}"
                     class="btn btn-outline-primary rounded-5 mt-4">
          Contact
        </router-link>
      </app-card>

      <hr>

      <router-view/>
    </section>
  </transition>
</template>

<style scoped>

</style>