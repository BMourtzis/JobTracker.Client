// Dependencies

const state = {
  page: {
    selected: 0,
    title: "Home"
  }
};

const getters = {

};

const actions = {
  selectPage(context, page) {
    context.commit("changeIndex", page.index);
    context.commit("changeTitle", page.title);
  }
};

const mutations = {
  changeIndex(state, n) {
    state.page.selected = n;
  },
  changeTitle(state, title) {
    state.page.title = title;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}
