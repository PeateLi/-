/**
 *  @description StudentManage页面
 */
const router = {
    path: "/StudentManage",
    name: "StudentManage",
    component: () => import("../../views/base/StudentManage"),
    meta: { requiresAuth: true }
  };

  export default router;