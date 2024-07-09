import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/Login",
      name: "Login",
      component: () => import("../views/Login.vue"),
    },
    {
      path: "/SignUp",
      name: "SignUp",
      component: () => import("../views/SignUp.vue"),
    },

    {
      path: "/",
      name: "Index",
      component: () => import("../views/Index.vue"),
    },

    {
      path: "/AddEquipment",
      name: "AddEquipment",
      component: () => import("../views/AddEquipment.vue"),
    },
    {
      path: "/AllEquipment",
      name: "AllEquipment",
      component: () => import("../views/AllEquipment.vue"),
    },
    {
      path: "/Description/:id",
      name: "Description",
      component: () => import("../views/Description.vue"),
    },
    {
      path: "/cart",
      name: "cart",
      component: () => import("../views/cart.vue"),
    },
    {
      path: "/Equipments-Rented",
      name: "Equipments-Rented",
      component: () => import("../views/Equipments-Rented.vue"),
    },
    {
      path: "/Equipments",
      name: "Equipments",
      component: () => import("../views/Equipments.vue"),
    },

    {
      path: "/LessorOrder",
      name: "LessorOrder",
      component: () => import("../views/LessorOrder.vue"),
    },
  ],
});

export default router;
