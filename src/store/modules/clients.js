import { getClients, newClient } from '../../api/clients';

const state = {
  lastFetchTimestamp: 0,
  clientList: []
}

const getters = {

}

const actions = {
  loadClients(context) {
    var clientCall = getClients().then((data) => {
      context.commit("updateClients", data);
      context.commit("updateTimestamp");
    });
    return clientCall;
  },
  addClient(context, client) {
    var clientCall = newClient(client).then(
      (data) => {
        context.commit("newClient", data);
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
  },
  newClient(state, client) {
    state.clientList.push(client);
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
