<template>
    <div>
      路由别名 alias pageId是{{ pageId }}
    </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from 'vue-router'

const route = useRoute()
const pageId = ref<string>(route.params.pageId)
</script>
