import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import EmptyLayout from '@/options/views/_Layouts/EmptyLayout.vue';

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
  {
    path: '/settings',
    component: EmptyLayout,
    meta: {
      name: '设置',
    },
    children: [
      {
        path: 'sites',
        component: () => import('../views/Settings/Sites/Index.vue'),
        meta: {
          name: '站点设置',
          icon: 'earth',
        },
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
