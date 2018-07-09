import Vue from 'vue';
import Router from 'vue-router';
import homeRoutes from "./home.routes";
import jobRoutes from "./jobs.routes";
import templateRoutes from "./templates.routes";
import clientRoutes from './client.routes';
import invoicesRoutes from "./invoices.routes";
import calendarRoutes from "./calendar.routes";
import financesRoutes from "./finances.routes";
import settingsRoutes from "./settings.routes";

Vue.use(Router);

export default new Router({
  routes: [
    ...homeRoutes,
    ...jobRoutes,
    ...templateRoutes,
    ...clientRoutes,
    ...invoicesRoutes,
    ...calendarRoutes,
    ...financesRoutes,
    ...settingsRoutes
  ]
});
