import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/HomeView.vue';  // Exemple de vue d'accueil
import ChampionView from './views/ChampionView.vue';  // Vue pour les champions

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,  // Affiche la vue d'accueil
  },
  {
    path: '/champion/:id',
    name: 'champion',
    component: ChampionView,  // Affiche la vue d'un champion spécifique
    props: true,  // Cela permet de passer le paramètre id comme prop à ChampionView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
