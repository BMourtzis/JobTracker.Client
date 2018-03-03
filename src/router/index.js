import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/main/HelloWorld';
import Home from '@/components/main/Home';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components: {
        main: HelloWorld
      }
    },
    {
      path: '/home',
      name: 'Home',
      components: {
        main: Home
      }
    }
  ]
})
