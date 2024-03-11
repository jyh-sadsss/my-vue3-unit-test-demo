import 'vue-router' // 引入“vue-router”模块，ts将会查找并加载相应的类型声明，以便在项目中使用vue-router时获得类型提示和类型检查的支持

export {} // 不导出任何内容，确保该文件被视为一个模块，ts不会抛出“没有导出”警告

declare module 'vue-router' {
  interface RouteMeta {
    // 可选
    title?: string
    requireAuth?: boolean
  }
}
