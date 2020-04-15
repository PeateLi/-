/**
 *  @description 班级管理页面
 */
const router = {
    path: "/ClassManage",
    name: "ClassManage",
    component: () => import("../../views/base/ClassManage"),
    meta: { requiresAuth: true }
  };

  export default router;