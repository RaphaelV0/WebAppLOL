import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import ChampionView from '@/views/ChampionView.vue';

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/champion/:name', name: 'champion', component: ChampionView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
