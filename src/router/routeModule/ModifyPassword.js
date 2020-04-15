/**
 *  @description ModifyPassword页面
 */
const router = {
    path: "/ModifyPassword",
    name: "ModifyPassword",
    component: () => import("../../views/base/ModifyPassword"),
    meta: { requiresAuth: true }
  };

  export default router;