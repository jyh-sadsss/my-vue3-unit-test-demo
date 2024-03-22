import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '../components/DefaultLayout.vue'
import HomeView from '../views/HomeView.vue'
import NotFound from '../views/NotFound.vue'
import ArticleDetail from '../views/Router/ArticleDetailView.vue'
import UserLayout from '../components/UserLayout.vue'
import UserHome from '../views/Router/User/HomeView.vue'
import UserDetail from '../views/Router/User/DetailView.vue'
import RouterViewLayout from '../components/RouterViewLayout.vue'
import HeaderCom from '../components/RouterView/HeaderCom.vue'
import FooterCom from '../components/RouterView/FooterCom.vue'
import AliasLayout from '../components/RouterView/AliasLayout.vue'
import TabLayout from '../components/TabLayout.vue'
import LoginAccess from '../views/Router/Login/AccessView.vue'
import AppLink from '../views/Router/Link/AppLink.vue'
import DynamicAbout from '../views/Router/dynamic/AboutView.vue'
import DynamicOther from '../views/Router/dynamic/OtherView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    // savedPosition 按照浏览器的前进/后退行为
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    return {
      top: 0
    }
  },
  routes: [
    {
      path: '/', // 这个路由导航守卫根本没用
      // redirect: '/home' // 或者 redirect: { name: 'home' }
      redirect: (to) => {
        return 'home' // 或者写成是 { path: 'home' }，相对位置不以"/"开头，相对的path最后一个/
      }
    },
    {
      path: '/alias',
      component: () => import('../views/Router/RouterView/AliasHomeView.vue'),
      alias: ['/alias-home', '/alias-demo'], // / alias、/alias-home、/alias-demo渲染的都是同一个组件
      meta: {
        requireAuth: false // 不需要登录就能访问的页面
      }
    },
    {
      path: '/alias/:pageId',
      component: AliasLayout,
      children: [
        {
          path: 'page',
          component: () => import('../views/Router/RouterView/AliasPageIdView.vue'),
          alias: ['/:pageId', ''],
          meta: {
            requireAuth: false
          }
        }
      ]
    },
    {
      path: '/home',
      name: 'home-parent',
      component: DefaultLayout,
      children: [
        {
          path: '',
          name: 'home', // 只有子路由具有名称
          component: HomeView
        },
        {
          path: 'about',
          name: 'home-about',
          component: () => import('../views/AboutView.vue')
        }
      ]
    },
    {
      path: '/user',
      component: UserLayout,
      children: [
        {
          path: ':userId',
          name: 'user-home',
          component: UserHome, // 如果将detail嵌套在这里的children，那么userHome中要预留<RouterView/>
          props: true
        },
        {
          path: ':userId/user-detail',
          name: 'user-detail',
          component: UserDetail,
          // 添加动态props
          props: (route) => {
            return {
              userId: route.params.userId,
              userName: route.query.userName
            }
          }
        }
      ]
    },
    {
      path: '/router-view',
      component: RouterViewLayout,
      children: [
        {
          path: 'demo/:id',
          components: {
            // 这里也要设置成components， 与 RouterViewLayout RouterView 对应
            header: HeaderCom,
            default: () => import('../views/Router/RouterView/Demo1View.vue'),
            footer: FooterCom
          },
          props: {
            header: true,
            default: true,
            footer: false
          }
        }
      ]
    },
    {
      path: '/router-view/demo',
      components: {
        // 这里需要配置成components，这里的component还是App.view的RouterView的入口
        header: HeaderCom,
        default: () => import('../views/Router/RouterView/Demo2View.vue'),
        footer: FooterCom
      },
      props: (route) => {
        return {
          title: (route.query.title || '标题默认文案') + '乘风而来'
        }
      }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginAccess,
      meta: {
        // 元信息
        title: '登录页面'
      },
      beforeEnter: (to, from, next) => {
        console.log('Login 组件内的守卫', to) // 会在全局beforeResolve之前执行
        next((vm) => {
          vm.setData() // vm: Login组件实例，执行实例setData方法
        })
      }
    },
    {
      path: '/useLink',
      name: 'useLink',
      component: () => import('../views/Router/useLinkView.vue')
    },
    {
      path: '/tab',
      component: TabLayout,
      name: 'tab',
      meta: {
        transitionName: 'fade' // 在单个路由下面添加过渡动画类型
      },
      props: {
        tabList: [
          {
            key: 'page1',
            title: '页面1',
            active: true,
            backgroundColor: 'pink'
          },
          {
            key: 'page2',
            title: '页面2',
            active: false,
            backgroundColor: 'orange'
          },
          {
            key: 'page3',
            title: '页面3',
            active: false,
            backgroundColor: 'skyblue'
          }
        ]
      }
    },
    {
      path: '/anchor',
      name: 'anchor',
      component: () => import('../views/Router/AnchorView.vue')
    },
    {
      path: '/app-link',
      name: 'appLink',
      component: AppLink
    },
    // 动态路由配置
    {
      path: '/dynamic/:path',
      component: () => import('../views/Router/Dynamic/ContentView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound
    },
    {
      path: '/article-:articleDetail(.*)',
      name: 'article',
      component: ArticleDetail
    }
  ]
})
router.beforeEach(async (to) => {
  // 添加新路由，并跳转新路由
  // 获取全部路由：router.getRoutes()
  // 判断一个路由是否存在：router.hasRoute(routerName)
  // 添加一个嵌套路由
  if (!router.hasRoute('dynamic-add') && to.path === '/dynamic/add/store') {
    router.addRoute({ name: 'dynamic-add', path: '/dynamic/add', component: UserLayout })
    router.addRoute('dynamic-add', {
      path: 'store',
      component: () => import('../views/Router/dynamic/StoreView.vue')
    })
    return to.path;
  }
  if (!router.hasRoute('dynamic-about') && to.path === '/dynamic/about') {
    router.addRoute({ path: '/dynamic/about', name: 'dynamic-about', component: DynamicAbout })
    // 删除路由的第一种方法
    // 再添加一个路由，这样会删除之前已经添加的路由，覆盖之前的路由
    // router.addRoute({path: '/dynamic/other', name: 'dynamic-about', component: DynamicOther})
    return to.path
    // 原本第一次跳转到该地址，会展示ContentView组件，在contentView组件执行router.replace(router.currentRoute.value.fullPath)，这样第一次就能渲染正确的组件
  }
  const userInfo = JSON.parse(window.localStorage.getItem('userInfo'))
  const isAccessed = userInfo && userInfo.account === 'admin' && userInfo.password === '123456'
  if (to.meta.requireAuth !== false && to.path !== '/login' && !isAccessed) {
    return '/login'
  }
})
// 如果回调参数中写了next，那么一定要使用next调用，上述方法等同于
// router.beforeEach(async (to, from, next) => { // 如果使用了next，next在任何给定的导航守卫中都要被执行一次
//   // next({name: 'login'}) 拦截跳转到新的地址
//   const userInfo = JSON.parse(window.localStorage.getItem('userInfo'))
//   const isAccessed = userInfo && userInfo.account === 'admin' && userInfo.password === '123456'
//   if(to.path !=='/login' && !isAccessed) {
//     return next('/login')
//   }
//   next()
// })

router.beforeResolve(async (to, from) => {
  console.log('beforeResolve', to, from) // beforeEach和beforeResolve的区别：beforeResolve会等待异步组件或者组件内的异步请求完成
})

// 设置标题
router.afterEach((to, from, failure) => {
  if (failure) {
    // 全局的导航错误
  }
  document.title = to.meta.title || 'vue3 demo'
  // 根据深度动态添加信息到meta字段
  const toPath = to.path.split('/').length
  const fromPath = from.path.split('/').length
  to.meta.transitionName = toPath > fromPath ? 'slide-right' : 'slide-left'
})

export default router
