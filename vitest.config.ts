import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/*'],
      root: fileURLToPath(new URL('./', import.meta.url))
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'page-group': [ // 将下面这3个组件全部打包到一个异步块page-group中，代码引入还是正常的引入方式
              './components/RouterView/AliasLayout.vue',
              './components/RouterView/HeaderCom.vue',
              './components/RouterView/FooterCom.vue'
            ]
          }
        }
      }
    }
  })
)
