import Vue from 'vue';
import Router from 'vue-router';
import mainRoutes  from './main-routes';
import clientRoutes  from './client-routes';

Vue.use(Router);

export default new Router({
  routes: [
    ...mainRoutes,
    ...clientRoutes
  ]
});
