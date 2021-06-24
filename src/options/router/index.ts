import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/dashboard',
    meta: {
      inMenu: false,
    },
  },
  {
    path: '/dashboard',
    component: () => import('../views/Dashboard.vue'),
    meta: {
      name: '概述',
      icon: 'view-dashboard-outline',
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
