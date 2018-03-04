// Dependencies

const state = {
  main: 0
};

const getters = {

};

const actions = {
  changePage(context, index) {
    context.commit("changePage", index);
  }
};

const mutations = {
  changePage(state, n) {
    state.main = n;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}
