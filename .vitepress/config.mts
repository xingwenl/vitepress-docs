import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ww-docs",
  description: "日常常用文档",
  lastUpdated: true,
  themeConfig: {
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "常用", link: "/common/", activeMatch: "/common/" },
      { text: "前端", link: "/web/", activeMatch: "/web/" },
      { text: "后端", link: "/backend/", activeMatch: "/backend/" },
      { text: "app", link: "/app/", activeMatch: "/app/" },
    ],

    sidebar: {
      "/web/": [
        {
          text: "vue",
          collapsed: true,
          items: [
            {
              text: "vitepress",
              link: "/web/vue/vitepress",
            },
            {
              text: "vite+vue3",
              link: "/web/vue/vite-vue3",
            },
          ],
        },
        {
          text: "react",
          collapsed: true,
          items: [
            {
              text: "react",
              link: "/web/react/react",
            },
            {
              text: "antd-design",
              link: "/web/react/antd-design",
            },
            {
              text: "react-router",
              link: "/web/react/react-router",
            },
            {
              text: "react-redux",
              link: "/web/react/react-redux",
            },
            {
              text: "react-saga",
              link: "/web/react/react-saga",
            },
          ],
        },
        {
          text: "微组件",
          collapsed: true,
          items: [
            {
              text: "single-spa",
              link: "/web/single-spa/create-single-spa",
            },
            {
              text: "qiankun",
              link: "/web/single-spa/single-spa-qiankun",
            },
          ],
        },
        {
          text: "打包相关",
          collapsed: true,
          items: [
            {
              text: "webpack",
              link: "/web/webpack/webpack",
            },
            {
              text: "rules",
              link: "/web/webpack/rules",
            },
            {
              text: "eslint",
              link: "/web/webpack/eslint",
            },
          ],
        },
        {
          text: "npm",
          collapsed: true,
          items: [
            {
              text: "npm",
              link: "/web/npm/npm",
            },
            {
              text: "npm-publish",
              link: "/web/npm/npm-publish",
            },
            {
              text: "babelic",
              link: "/web/npm/babelic",
            },
          ],
        },
      ],
      "/backend/": [
        {
          text: "服务器",
          collapsed: true,
          items: [
            {
              text: "linux",
              link: "/backend/linux",
            },
            {
              text: "nginx",
              link: "/backend/nginx",
            },
            {
              text: "mysql",
              link: "/backend/mysql",
            },
          ],
        },
        {
          text: "node",
          collapsed: true,
          items: [
            {
              text: "node",
              link: "/backend/node/",
            },
            {
              text: "pm2",
              link: "/backend/node/pm2",
            },
            {
              text: "pm2",
              link: "/backend/node/schedule",
            },
            {
              text: "nest",
              link: "/backend/node/nest/",
              items: [
                {
                  text: "logger",
                  link: "/backend/node/nest/logger",
                },
              ],
            },
          ],
        },
        {
          text: "java",
          link: "/backend/java/",
        },
        {
          text: "python",
          link: "/backend/python/",
        },
        {
          text: "docker",
          collapsed: true,
          items: [
            {
              text: "docker",
              link: "/backend/docker/",
            },
            {
              text: "docker-compose",
              link: "/backend/docker/docker-compose",
            },
            {
              text: "mysql",
              link: "/backend/docker/mysql",
            },
            {
              text: "nginx",
              link: "/backend/docker/nginx",
            },
          ],
        },
      ],
      "/app/": [
        {
          text: "android",
          collapsed: true,
          items: [
            {
              text: "android",
              link: "/app/android/",
            },
            {
              text: "activity",
              link: "/app/android/activity",
            },
            {
              text: "签名",
              link: "/app/android/sign",
            },
          ],
        },
        {
          text: "ios",
          collapsed: true,
          items: [
            {
              text: "cocoapods",
              link: "/app/ios/cocoapods",
            },
          ],
        },
        {
          text: "react-native",
          collapsed: true,
          items: [
            {
              text: "react-native",
              link: "/app/react-native/",
            },
            {
              text: "lib",
              link: "/app/react-native/lib",
            },
            {
              text: "redux",
              link: "/app/react-native/redux",
            },
            {
              text: "react-natigation",
              link: "/app/react-native/react-natigation",
            },
            {
              text: "react-native-wechat",
              link: "/app/react-native/react-native-wechat",
            },
          ],
        },
        {
          text: "flutter",
          collapsed: true,
          items: [
            {
              text: "flutter",
              link: "/app/flutter/",
            },
          ],
        },
      ],
      "/common/": [
        {
          text: "cmd",
          link: "/common/cmd",
        },
        {
          text: "charles",
          link: "/common/charles",
        },
        {
          text: "git",
          link: "/common/git",
        },
        {
          text: "mac",
          link: "/common/mac",
        },
        {
          text: "md",
          link: "/common/md",
        },
        {
          text: "rsync",
          link: "/common/rsync",
        },
        {
          text: "vim",
          link: "/common/vim",
        },
      ]
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
