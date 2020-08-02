import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";

import Home from "./components/Home.vue";
import Profile from "./components/Profile.vue";

Vue.config.productionTip = false;

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
];

const router = new VueRouter({
  mode: "history",
  routes,
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
