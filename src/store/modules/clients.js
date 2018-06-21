import {
  getClients,
  newClient
} from '../../api/clients';

const state = {
  lastFetchTimestamp: 0,
  clientList: []
};

const getters = {
  findClient: (state) => (id) => {
    let client = state.clientList.find((client) => {
      return client.id === id;
    });

    return Object.assign({}, client);
  }
};

const actions = {
  loadClients(context) {
    let clientCall;

    if (process.env.NODE_ENV === "development" && state.lastFetchTimestamp === 0) {
      clientCall = new Promise((resolve, reject) => {
        let clients = [{
          id: "me",
          firstName: "Vasileios",
          lastName: "Mourtzis",
          fullname: "Vasileios Mourtzis",
          businessName: "Team Vasi",
          invoicePrefix: "TVPL",
          address: "498 somewhere st",
          email: "vasi@me.com",
          primaryPhone: "0123456789",
          contacts: [{ name: "Mobile", phone: "0123456789" }]
        }];

        resolve({ data: clients });
      });
    }
    else {
      clientCall = getClients();
    }

    clientCall.then((data) => {
      context.commit("updateClients", data.data);
      context.commit("updateTimestamp");
    });

    return clientCall;
  },
  addClient(context, client) {
    let clientCall = newClient(client).then((data) => {
      context.commit("newClient", data.data);
    });

    return clientCall;
  },
  updateClient(context, client) {
    context.commit("updateClient", client);
  }
};

const mutations = {
  updateClients(state, clients) {
    state.clientList = [];
    for (let client of clients) {
      Reflect.defineProperty(client, "fullname", {
        get() {
          return `${this.firstName} ${this.lastName}`;
        }
      });
    }
    state.clientList.push(...clients);
  },
  updateTimestamp(state) {
    state.lastFetchTimestamp = Date.now();
  },
  newClient(state, client) {
    Reflect.defineProperty(client, "fullname", {
      get() {
        return `${this.firstName} ${this.lastName}`;
      }
    });
    state.clientList.push(client);
  },
  updateClient(state, client) {
    for (let item in state.clientList) {
      if (state.clientList[item].id === client.id) {
        state.clientList[item] = client;
        break;
      }
    }
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
