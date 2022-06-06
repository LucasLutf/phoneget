import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "index",
      component: () => import("../views/IndexComp.vue"),
    },
    {
      path: "/login",
      name: "login",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/LoginComp.vue"),
    },
    {
      path: "/cadastro",
      name: "cadastro",

      component: () => import("../views/cadastroComp.vue"),
    },
    {
      path: "/produto",
      name: "produto",

      component: () => import("../views/produtoComp.vue"),
    },
  ],
});

export default router;
