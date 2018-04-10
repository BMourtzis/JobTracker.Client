// Dependencies

const state = {
  main: 0,
  loading: {
    enabled: false,
    message: ""
  },
  error: {
    enabled: false,
    message: ""
  }
};

const getters = {

};

const actions = {
  changePage(context, index) {
    context.commit("changePage", index);
  },
  enableLoading(context, message) {
    context.commit("updateLoadingStatus", true);
    context.commit("updateLoadingMessage", message);
  },
  disableLoading(context) {
    context.commit("updateLoadingStatus", false);
    context.commit("updateLoadingMessage", "");
  },
  updateError(context, error, message) {
    context.commit("updateErrorStatus", error);
    context.commit("updateErrorMessage", message);
  }
};

const mutations = {
  changePage(state, n) {
    state.main = n;
  },
  updateLoadingStatus(state, status) {
    state.loading.enabled = status;
  },
  updateLoadingMessage(state, message) {
    state.loading.message = message;
  },
  updateErrorStatus(state, status) {
    state.error.enabled = status;
  },
  updateErrorMessage(state, message) {
    state.error.message = message;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}
