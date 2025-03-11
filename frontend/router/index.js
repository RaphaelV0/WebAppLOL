import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ChampionView from "@/views/ChampionView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/champion/:id", component: ChampionView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
