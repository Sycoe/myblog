import DefaultTheme from 'vitepress/theme'
import './custom.css'
import Giscus from '@giscus/vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    // 可以在这里注册全局组件
    app.component('Giscus', Giscus)
  }
}
