<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <nav>
        <router-link :to="{ name: 'home-parent' }">home(首页)命令路由</router-link>
        <RouterLink to="/home">首页</RouterLink>
        <RouterLink to="/home/about">首页-关于</RouterLink>
        <RouterLink to="/router-view/demo1">命名路由</RouterLink>
        <RouterLink to="/alias/1">别名1（测试onBeforeRouteUpdate）</RouterLink>
        <RouterLink to="/useLink">useLink使用场景</RouterLink>
        <RouterLink to="/tab">Tab测试页面</RouterLink>
        <RouterLink to="/anchor#content">锚点定位</RouterLink>
        <RouterLink to="/app-link">拓展RouterLink</RouterLink>
        <RouterLink to="/dynamic/about">dynamic about</RouterLink>
        <RouterLink to="/dynamic/other">dynamic other</RouterLink>
        <RouterLink to="/dynamic/add/store">dynamic store</RouterLink>
        <RouterLink
          :to="{
            // to和router.push的规则是相同的
            /**
             * <RouterLink to='/xxx' replace>
             * router.replace('/xxx')
             * router.push('/xxx', { replace: true })
             * 上面3种写法相等的
             */
            name: 'user-home',
            params: {
              // params不能与path一起使用
              userId: '00001' // 如果是可选的，使用''或者undefined，表示没有设置params
            },
            query: {
              userName: '珍珠1号'
            }
          }"
          >我的</RouterLink
        >
      </nav>
    </div>
  </header>

  <RouterView v-slot="{Component, route }">
    <Transition :name="route.meta.transitionName || 'fade'">
      <Component :is="Component" :key="route.path" />
    </Transition>
  </RouterView>

</template>
<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'
import HelloWorld from './HelloWorld.vue'

const route = useRoute()
console.log('query', route.query) // path、name跳转，query存在
console.log('params', route.params) // path、name跳转，params不存在
</script>
<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
.user-id {
  color: #f08300;
  font-size: 18px;
  font-weight: 500;
}
</style>
