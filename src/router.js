import Vue from "vue";
import VueRouter from "vue-router";

import Home from "./components/Home.vue";
import Profile from "./components/Profile.vue";
import About from "./components/About.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
