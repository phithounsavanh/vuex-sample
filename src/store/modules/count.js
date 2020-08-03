export const moduleCount = {
  state: {
    count: 0,
  },
  getters: {
    getCount: (state) => {
      return state.count;
    },
    getCountPlusTwo: (state) => (n) => {
      return state.count + n;
    },
  },
  mutations: {
    INCREMENT(state, n) {
      state.count = state.count + n;
    },
    DECREMENT(state, n) {
      state.count = state.count - n;
    },
  },
  actions: {
    increment({ commit }, n) {
      commit("INCREMENT", n);
    },
    decrement({ commit }, n) {
      commit("DECREMENT", n);
    },
  },
};
