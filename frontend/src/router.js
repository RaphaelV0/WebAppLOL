import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/HomeView.vue';
import ChampionView from './views/ChampionView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/champions/:id',
    name: 'champion',
    component: ChampionView,
    props: true
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/home'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
