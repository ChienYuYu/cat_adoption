import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const metaObj = { title: '給朕一個家 (=ↀωↀ=)' };

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: metaObj,
  },
  {
    path: '/cat_info/:aid',
    name: 'catInfo',
    component: () => import('../views/CatDetail.vue'),
    meta: metaObj,
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
