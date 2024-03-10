<template>
    <div class="container">
        <RouterView v-slot="{ Component }" name="header" class="header">
            <component :is="Component" :view-prop="{ is: 'header' }" />
        </RouterView>
        <RouterView class="content" />
        <RouterView name="footer" class="footer" />
    </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<style scoped>
.container {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
}

.header {
    background-color: aquamarine;
    width: 100%;
    text-align: center;
}

.content {
    flex: 1;
}

.footer {
    background-color: bisque;
    width: 100%;
    text-align: center;
}
</style>
