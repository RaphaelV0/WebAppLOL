import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/styles.css"; // ← Ajout des styles globaux

createApp(App).use(router).mount("#app");
 