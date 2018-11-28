import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'example',
      component: () => import('./views/example.view/index.vue'),
    },
    {
      path: '/error',
      name: 'error',
      component: () => import('./views/error.view/index.vue'),
    },
    {
      path: '*',
      name: 'pagenotfound',
      component: () => import('./views/notfound.view/index.vue'),
    },
  ],
});
