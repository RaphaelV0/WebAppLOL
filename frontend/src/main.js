import { createApp } from 'vue';
import App from './App.vue';
import router from './router';  // Importer le routeur
import './assets/styles.css';

createApp(App)
  .use(router)  // Ajouter le routeur
  .mount('#app');
