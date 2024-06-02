<script setup>
import {useAuthStore} from "@/stores/auth.js";
import {useRouter} from "vue-router";

defineProps({
  title: {
    required: true,
    type: String
  }
})

const authStore = useAuthStore();
const router = useRouter();

function onLogOut() {
  authStore.logOut();
  router.push({name:'auth'});
}
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-secondary">
    <div class="container">
      <router-link to="/" class="navbar-brand" >{{ title }}</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
              aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link :to="{name:'devs'}" active-class="active" class="nav-link">Developers</router-link>
          </li>
        </ul>
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle"
               href="#"
               role="button"
               data-bs-toggle="dropdown"
               aria-expanded="false">
              {{ authStore.loggedInUser?.email }}
            </a>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#" @click="onLogOut">Log out</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>

</style>