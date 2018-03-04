import Vue from 'vue';
import Router from 'vue-router';
import mainRoutes  from './main-routes';
import sidebarRoutes from './sidebar-routes';

console.log(mainRoutes)

Vue.use(Router);

export default new Router({
  routes: [...mainRoutes, ...sidebarRoutes]
});
