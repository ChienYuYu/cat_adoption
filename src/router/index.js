import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: '給朕一個家 (=ↀωↀ=)' },
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

router.beforeEach((to) => {
  document.title = to.meta.title;
});

export default router;
