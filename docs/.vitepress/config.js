import { defineConfig } from 'vitepress'
import fs from 'fs'
import path from 'path'

// posts 目录绝对路径
const POSTS_DIR = path.resolve(__dirname, '../posts')

/** 
 * 扫描 posts 下的所有一级子目录（如 2025、2024…），
 * 然后为每个子目录生成 { text, items: [...] } 结构 
 */
function getPostsSidebar() {
  const years = fs.readdirSync(POSTS_DIR).filter(name =>
    fs.statSync(path.join(POSTS_DIR, name)).isDirectory()
  )
  // 按文件夹名排序（2025 在前）
  years.sort((a, b) => b.localeCompare(a))

  return years.map(year => {
    const dir = path.join(POSTS_DIR, year)
    const files = fs.readdirSync(dir)
      .filter(f => f.endsWith('.md'))
      .sort()
      .map(f => {
        // 去掉 .md 后缀，拼成 /posts/年/文件名
        const name = f.replace(/\.md$/, '')
        return { text: name, link: `/posts/${year}/${name}` }
      })
    return {
      text: year,
      items: files
    }
  })
}

export default defineConfig({
  title: '我的博客',
  description: '自动分组侧边栏示例',
  base: '/myblog/',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/posts/' },
      { text: '列表', link: '/posts/vue/vue' }
    ],
    sidebar: {
      // 只有 /posts/ 路径下，才用我们动态生成的分组
      '/posts/': getPostsSidebar(),
      // 其它路径手动写
      '/': [{ text: '首页', link: '/' }]
    }
  }
})
