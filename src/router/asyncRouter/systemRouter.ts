import { system } from "@/router/enums";

/**
 * roles：页面级别权限，这里模拟二种 "admin"、"common"
 * admin：管理员角色
 * common：普通角色
 */

export default {
  path: "/system",
  meta: {
    icon: "setting",
    title: "menus.hssysManagement",
    rank: system
  },
  children: [
    {
      path: "/system/user/index",
      name: "User",
      meta: {
        icon: "flUser",
        title: "menus.hsUser",
        roles: ["admin"]
      }
    },
    {
      path: "/system/role/index",
      name: "Role",
      meta: {
        icon: "role",
        title: "menus.hsRole",
        roles: ["admin"]
      }
    },
    {
      path: "/system/dept/index",
      name: "Dept",
      meta: {
        icon: "dept",
        title: "menus.hsDept",
        roles: ["admin"]
      }
    }
  ]
} as RouteConfigsTable;
