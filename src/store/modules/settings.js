// Dependencies

const state = {
  lang: "gr"
};

const getters = {
  getLanguage() {
    return state.lang;
  }
};

const actions = {
  changeLanguage(context, newLang) {
    // check if the language is registered
    context.commit("changeLanguage", newLang);
  }
};

const mutations = {
  changeLanguage(state, newLang) {
    state.lang = newLang;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
