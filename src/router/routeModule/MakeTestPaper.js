/**
 *  @description MakeTestPaper页面
 */
const router = {
    path: "/MakeTestPaper",
    name: "MakeTestPaper",
    component: () => import("../../views/test/MakeTestPaper"),
    meta: { requiresAuth: true }
  };

  export default router;