import Vue from "vue";
import Vuex from "vuex";
import { moduleCount } from "./modules/count";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    count: moduleCount,
  },
});

export default store;
