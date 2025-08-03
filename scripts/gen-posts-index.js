#!/usr/bin/env node
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import os from 'os'

const POSTS_DIR = path.resolve(process.cwd(), 'docs/posts')
const INDEX_FILE = path.join(POSTS_DIR, 'index.md')

/**
 * 递归收集所有非 index.md 的 Markdown 文件
 */
function walk(dir, list = []) {
  for (const file of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, file)
    const stat = fs.statSync(fullPath)
    if (stat.isDirectory()) {
      walk(fullPath, list)
    } else if (/\.md$/.test(file) && file.toLowerCase() !== 'index.md') {
      list.push(fullPath)
    }
  }
  return list
}

const files = walk(POSTS_DIR).sort()

// index.md 基本结构
const lines = [
  '---',
  'title: 文章列表',
  'sidebar: false',
  '---',
  '',
  '# 文章列表',
  ''
]

for (const filePath of files) {
  // 1) 计算相对路径；2) 把所有 Windows 反斜杠替换成正斜杠
  const relPath = path.relative(POSTS_DIR, filePath).replace(/\\/g, '/')
  // 构建 URL，不带末尾斜杠
  const url = `/posts/${relPath.replace(/\.md$/, '')}`
  // 读取 frontmatter
  const raw = fs.readFileSync(filePath, 'utf8')
  const { data } = matter(raw)
  const title = data.title || path.basename(relPath, '.md')
  lines.push(`- [${title}](${url})`)
}

// 写入，并用系统换行符
fs.writeFileSync(INDEX_FILE, lines.join(os.EOL), 'utf8')
console.log(`Generated ${INDEX_FILE} (${files.length} entries)`)
