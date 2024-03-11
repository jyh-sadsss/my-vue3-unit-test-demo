<template>
  <ul>
    <li
      v-for="item in tabList"
      :key="item.key"
      :class="{ active: item.active }"
      @click="onClick(item)"
    >
      {{ item.title }}
    </li>
  </ul>
  <Transition :name="route.meta.transitionName || 'fade'">
    <Component :is="TabPageView" v-bind="tabItem" />
  </Transition>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import TabPageView from '../views/Tab/pageView.vue'
interface TabListData {
  key: string
  active: boolean
  title: string
  backgroundColor: string
}
const route = useRoute()
const props = defineProps<{
  tabList: TabListData[]
}>()
const tabList = ref<TabListDat[]>(props.tabList)
const tabItem = ref<TabListData>(tabList.value[0])

function onClick(item) {
  tabList.value = [...tabList.value].map((tab) => ({
    ...tab,
    active: item.key === tab.key
  }))
  tabItem.value = item
}
</script>
<style scoped>
ul {
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  width: 800px;
  border-bottom: 1px solid #f0f0f0;
}
li {
  flex: 1;
  text-align: center;
  padding: 10px 0;
  cursor: pointer;
}
li.active {
  color: #f08300;
  font-weight: 500;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
