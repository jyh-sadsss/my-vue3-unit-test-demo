<template>
  <a v-if="isExternalLink" :href="path" target="_blank">
    <slot />
  </a>
  <RouterLink v-else :to="props.to">
    <a :href="href" @click="onClick" :class="isActive ? props.active : props.inactive">
      <span>❤</span>
      <slot />
      <span>❤</span>
    </a>
  </RouterLink>
</template>
<script setup>
import { computed } from 'vue'
import { RouterLink, useLink } from 'vue-router'
const props = defineProps({
  ...RouterLink.props
})
const linkProps = useLink(props) // 将props转换为link需要的数据，可以直接使用props
const {href, navigate} = linkProps
// useLink方法的参数：to(name, params, query, hash) exact(路由完全匹配才会被激活) activeClass(激活时的class) exactActiveClass(完全匹配时的class)
// 返回值和RouterLink v-slot一致 { route, href, isActive, navigate, isExactActive }
const path = computed(() => {
  return typeof props.to === 'string' ? props.to : props.to.path
})

const isExternalLink = computed(() => {
  return typeof path.value === 'string' && path.value.startsWith('http')
})

function onClick() {
  console.log('跳转到目的路径') // 执行了
  navigate()
}

// RouterLink v-slot="{ props, isActive, href, navigate }" v-slot的数据来源也不是RouterLink to属性，而且通过框架内部处理的，但是 to 属性是一定要设置的
</script>
