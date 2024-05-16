<script setup>
defineProps({
  title: {
    required: true,
    type: String
  }
})
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-secondary">
    <div class="container">
      <a class="navbar-brand" href="#">{{ title }}</a>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" :to="{ name: 'resources' }">
              Resources
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/add">
              Add resources
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>

</style>