# vitepress-doc

## 安装

版本：
node > 18
vitepress 1.0.0-rc.15

```bash
# 安装
pnpm add -D vitepress

# 初始化
pnpm dlx vitepress init
```

## 支持mermaidjs

```bash
pnpm add mermaidjs
```

新建 `.vitepress/component/Mermaid.vue` `.vitepress/component/mermaid.ts`
::: code-group

```ts [theme/index.ts]
import Mermaid from '../component/Mermaid.vue'
export default {
  enhanceApp({ app, router, siteData }) {
    // 注册全局组件
    app.component('Mermaid', Mermaid);
  }
}
```

<<< @/.vitepress/component/Mermaid.vue

<<< @/.vitepress/component/mermaid.ts
:::
新建 `.vitepress/config/mermaid-markdown-all.ts`

::: code-group
```ts [.vitepress/config.mts]
import { defineConfig, MarkdownOptions } from "vitepress";
import MermaidExample from './config/mermaid-markdown-all';
const allMarkdownTransformers: MarkdownOptions = {
  // the shiki theme to highlight code blocks
  // theme: 'github-dark',
  config: async (md) => {
    await MermaidExample(md);
  },
};
export default defineConfig({
  // ...
  markdown: allMarkdownTransformers,
});
```

<<< @/.vitepress/config/mermaid-markdown-all.ts

:::

> [mermain 文档](http://mermaid.js.org/intro/)



## 插件

- [vitepress-plugin-mermaid](https://emersonbottero.github.io/vitepress-plugin-mermaid/guide/getting-started.html) 流程图、时序图、类图、状态图 ……


## 配置github actions

创建 `.github/workflows/deploy.yml`

```yml
# Sample workflow for building and deploying a VitePress site to GitHub Pages
#
name: vitepressdocs

on:
  # Runs on pushes targeting the `main` branch. Change this to `master` if you're
  # using the `master` branch as the default branch.
  push:
    branches: [master]

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# Sets permissions of the GITHUB_TOKEN to allow deployment to GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# Allow only one concurrent deployment, skipping runs queued between the run in-progress and latest queued.
# However, do NOT cancel in-progress runs as we want to allow these production deployments to complete.
concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  # Build job
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
        with:
          fetch-depth: 0 # Not needed if lastUpdated is not enabled
      - uses: pnpm/action-setup@v2 # Uncomment this if you're using pnpm
        with:
          version: 8 #需要pnpm版本号
      # - uses: oven-sh/setup-bun@v1 # Uncomment this if you're using Bun
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: pnpm # or pnpm / yarn
      - name: Setup Pages
        uses: actions/configure-pages@v3
      - name: Install dependencies
        run: pnpm install --no-frozen-lockfile # or pnpm install / yarn install / bun install
      - name: Build with VitePress
        # npm run docs:build # or pnpm docs:build / yarn docs:build / bun run docs:build
        run: |
          pnpm docs:build
          touch .vitepress/dist/.nojekyll
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: .vitepress/dist # 正确的文件路径

  # Deployment job
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    needs: build
    runs-on: ubuntu-latest
    name: Deploy
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
```