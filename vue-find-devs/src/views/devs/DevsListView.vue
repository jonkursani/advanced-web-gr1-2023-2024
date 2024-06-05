<script setup>
import {onMounted, ref} from "vue";
import {useDevsStore} from "@/stores/devs.js";
import AppCard from "@/components/ui/AppCard.vue";
import DevItem from "@/components/devs/DevItem.vue";
import FilterDevs from "@/components/devs/FilterDevs.vue";

const devsStore = useDevsStore();

const filteredDevs = ref([]);

function onFilterDevs(area) {
  if (area === '1') {
    filteredDevs.value = devsStore.allDevs.filter(dev => dev.areas.includes('Frontend'));
  } else if (area === '2') {
    filteredDevs.value = devsStore.allDevs.filter(dev => dev.areas.includes('Backend'));
  } else if (area === '3') {
    filteredDevs.value = devsStore.allDevs.filter(dev => dev.areas.includes('Fullstack'));
  } else {
    filteredDevs.value = devsStore.allDevs
  }
}

onMounted(() => {
  filteredDevs.value = devsStore.allDevs;
})
</script>

<template>

  <transition appear>
    <section>
      <filter-devs @on-change-area="onFilterDevs"/>

      <app-card has-shadow class="mt-4">
        <div class="text-end  mb-3">
          <router-link :to="{name: 'register-dev'}"
            class="btn btn-outline-primary btn-lg rounded-5">
            Register as Dev
          </router-link>
        </div>

        <dev-item v-for="dev in filteredDevs" :dev="dev" :key="dev.id"/>
      </app-card>
    </section>
  </transition>
</template>

<style scoped>

</style>