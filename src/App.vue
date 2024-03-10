<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'
</script>

<template>
  <RouterView name="header" />
  <RouterView />
  <RouterView name="footer" />
</template>

<style scoped></style>
