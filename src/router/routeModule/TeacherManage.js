/**
 *  @description ModifyPassword页面
 */
const router = {
    path: "/TeacherManage",
    name: "TeacherManage",
    component: () => import("../../views/base/TeacherManage"),
    meta: { requiresAuth: true }
  };

  export default router;