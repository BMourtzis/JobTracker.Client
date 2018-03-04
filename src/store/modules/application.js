// Dependencies

const state = {
  page: 0
};

const getters = {

};

const actions = {
  changePage(context, page) {
    context.commit("changePage", page.index);
  }
};

const mutations = {
  changePage(state, n) {
    state.page = n;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}
