// Dependencies
import Vue from "vue";
import Vuex from "vuex";

// Modules
import app from "./modules/application";
import settings from "./modules/settings";
import clients from "./modules/clients";

// Other


Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    app,
    settings,
    clients
  },
  strict: debug
});
