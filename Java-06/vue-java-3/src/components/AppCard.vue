<script setup>

</script>

<template>
  <div class="card">
    <div class="card-body">
      <slot name="header"></slot>

      <slot></slot>

      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style scoped>

</style>