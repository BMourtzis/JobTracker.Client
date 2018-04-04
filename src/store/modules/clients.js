import { getClients } from '../../api/clients';

const state = {
  lastFetchTimestamp: 0,
  clientList: []
}

const getters = {

}

const actions = {
  loadClients(context) {
    var clientCall = getClients();
    clientCall.then((data) => {
      context.commit("updateClients", data);
      context.commit("updateTimestamp");
    });
    return clientCall;
  }
}

const mutations = {
  updateClients(state,clients) {
    state.clientList = clients;
  },
  updateTimestamp(state) {
    state.lastFetchTimestamp = Date.now();
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
