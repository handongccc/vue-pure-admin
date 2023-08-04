import { frame } from "@/router/enums";

/**
 * roles：页面级别权限，这里模拟二种 "admin"、"common"
 * admin：管理员角色
 * common：普通角色
 */

export default {
  path: "/iframe",
  meta: {
    icon: "monitor",
    title: "menus.hsExternalPage",
    rank: frame
  },
  children: [
    {
      path: "/iframe/pure",
      name: "FramePure",
      meta: {
        title: "menus.hsPureDocument",
        frameSrc: "https://yiming_chang.gitee.io/pure-admin-doc",
        roles: ["admin", "common"]
      }
    },
    {
      path: "/external",
      name: "https://yiming_chang.gitee.io/pure-admin-doc",
      meta: {
        title: "menus.externalLink",
        roles: ["admin", "common"]
      }
    },
    {
      path: "/iframe/ep",
      name: "FrameEp",
      meta: {
        title: "menus.hsEpDocument",
        frameSrc: "https://element-plus.org/zh-CN/",
        roles: ["admin", "common"]
      }
    },
    {
      path: "/iframe/vue3",
      name: "FrameVue",
      meta: {
        title: "menus.hsVueDocument",
        frameSrc: "https://cn.vuejs.org/",
        roles: ["admin", "common"]
      }
    },
    {
      path: "/iframe/vite",
      name: "FrameVite",
      meta: {
        title: "menus.hsViteDocument",
        frameSrc: "https://cn.vitejs.dev/",
        roles: ["admin", "common"]
      }
    },
    {
      path: "/iframe/pinia",
      name: "FramePinia",
      meta: {
        title: "menus.hsPiniaDocument",
        frameSrc: "https://pinia.vuejs.org/zh/index.html",
        roles: ["admin", "common"]
      }
    },
    {
      path: "/iframe/vue-router",
      name: "FrameRouter",
      meta: {
        title: "menus.hsRouterDocument",
        frameSrc: "https://router.vuejs.org/zh/",
        roles: ["admin", "common"]
      }
    },
    {
      path: "/iframe/tailwindcss",
      name: "FrameTailwindcss",
      meta: {
        title: "menus.hsTailwindcssDocument",
        frameSrc: "https://tailwindcss.com/docs/installation",
        roles: ["admin", "common"]
      }
    }
  ]
} as RouteConfigsTable;
