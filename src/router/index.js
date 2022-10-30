import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      // {
      //   path: 'cat/:id',
      //   name: 'catDetail',
      //   component: () => import('../views/CatDetail.vue'),
      // },
    ],
  },
  {
    path: '/:id',
    name: 'catDetail',
    component: () => import('../views/CatDetail.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
