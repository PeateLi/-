/**
 *  @description MakeTestPaper页面
 */
const router = {
    path: "/ViewTestPaper",
    name: "ViewTestPaper",
    component: () => import("../../views/test/ViewTestPaper"),
    meta: { requiresAuth: true }
  };

  export default router;