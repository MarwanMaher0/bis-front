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
      path: "/Description",
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
      path: "/",
      name: "Index",
      component: () => import("../views/Index.vue"),
    },
    {
      path: "/LessorOrder",
      name: "LessorOrder",
      component: () => import("../views/LessorOrder.vue"),
    },
    {
      path: "/Rigester",
      name: "Rigester",
      component: () => import("../views/Rigester.vue"),
    },
    {
      path: "/SignUp",
      name: "SignUp",
      component: () => import("../views/SignUp.vue"),
    },
  ],
});

export default router;
