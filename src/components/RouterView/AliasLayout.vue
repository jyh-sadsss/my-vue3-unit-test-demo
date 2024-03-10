<template>
    <div class="alias-layout">
      alias layout
    </div>
    <RouterView/>
</template>
<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>
<style scoped>
.alias-layout {
  height: 40px;
  background-color: darkviolet;
  color: #fff;
  font-weight: 500;
}
</style>