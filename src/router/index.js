import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import Contact from "../views/Contact";
import Background from "../views/Background"
import Skills from "../views/Skills"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  },
  {
    path: "/background",
    name: "Background",
    component: Background
  },
  {
    path: "/skills",
    name: "Skills",
    component: Skills
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
