// docs/.vitepress/config.ts
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '我的技术博客',
  description: '记录学习与实践心得',
  // 如果仓库名不是 username.github.io，替换为 '/你的仓库名/'
  base: '/my-blog/',

  // —— 在这里配置 head，注入 Giscus 脚本 —— 
  head: [
    [
      'script',
      {
        src: 'https://giscus.app/client.js',
        async: 'true',
        crossorigin: 'anonymous',
        // 以下四项，请替换为你从 giscus.app 获得的真实值
        'data-repo': 'Sycoe/xx',
        'data-repo-id': 'R_kgDOIAxsiw',
        'data-category': 'Announcements',
        'data-category-id': 'DIC_kwDOIAxsi84Csz3x',
        // 以下为可选项，根据需要保留或删除
        'data-mapping': 'pathname',
        'data-strict': '0',
        'data-reactions-enabled': '1',
        'data-emit-metadata': '0',
        'data-input-position': 'bottom',
        'data-theme': 'noborder_light',
        'data-lang': 'zh-CN'
      }
    ]
  ],

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '笔记', link: '/notes/practice-notes' },
      { text: '关于', link: '/about' }
    ],
    sidebar: {
      '/notes/': [
        { text: '实践总结', link: '/notes/practice-notes' }
      ]
    }
  }
})
