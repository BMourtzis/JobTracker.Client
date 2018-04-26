// Dependencies
import router from '../../router/index';

const state = {
  main: 0,
  loading: {
    enabled: false,
    message: ""
  },
  error: {
    enabled: false,
    message: ""
  },
  dialog: {
    open: false
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
  enableError(context, message) {
    context.commit("updateErrorStatus", true);
    context.commit("updateErrorMessage", message);
  },
  disableError(context) {
    context.commit("updateErrorStatus", false);
    context.commit("updateErrorMessage", "");
  },
  openDialog(context, {route, params}) {
    context.commit("updateDialogOpen", true);
    router.push({name: route, params});
  },
  setDialog(context, open) {
    context.commit("updateDialogOpen", open);
  },
  closeDialog(context, route) {
    router.push({name: route});
    context.commit("updateDialogOpen", false);
  }
};

const mutations = {
  changePage(state, num) {
    state.main = num;
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
  },
  updateDialogOpen(state, open) {
    state.dialog.open = open;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
