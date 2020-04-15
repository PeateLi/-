/**
 *  @description MakeTestPaper页面
 */
const router = {
    path: "/TestSetter",
    name: "TestSetter",
    component: () => import("../../views/test/TestSetter"),
    meta: { requiresAuth: true }
  };

  export default router;