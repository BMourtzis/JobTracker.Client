// Dependencies
import Vue from "vue";
import Vuex from "vuex";

// Modules
import application from "./modules/application";
import settings from "./modules/settings"

// Other


Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    application,
    settings
  },
  strict: debug
});
