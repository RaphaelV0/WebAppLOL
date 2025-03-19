<template>
  <div v-if="champion" class="champion-page">
    <!-- Section gauche : Informations du champion -->
    <div class="left-section">
      <h1 class="champion-name">{{ champion.nom }}</h1>
      <span class="champion-title">{{ champion.titre }}</span>
      <p class="champion-description">{{ champion.histoire }}</p>

      <!-- Statistiques -->
      <div class="stats">
        <h2>Statistiques</h2>
        <ul>
          <li>HP : {{ statistiques.pv }} + {{ statistiques.pv_par_niveau }}</li>
          <li>Mana : {{ statistiques.mana }} + {{ statistiques.mana_par_niveau }}</li>
          <li>Vitesse de déplacement : {{ statistiques.vitesse_deplacement }}</li>
          <li>Armure : {{ statistiques.armure }} + {{ statistiques.armure_par_niveau }}</li>
          <li>Résistance Magique : {{ statistiques.resistance_magique }} + {{ statistiques.resistance_magique_par_niveau }}</li>
          <li>Portée d'attaque : {{ statistiques.portee_attaque }}</li>
          <li>Régénération PV : {{ statistiques.regen_pv }} + {{ statistiques.regen_pv_par_niveau }}</li>
          <li>Dégâts d'attaque : {{ statistiques.degats_attaque }} + {{ statistiques.degats_attaque_par_niveau }}</li>
          <li>Vitesse d'attaque : {{ statistiques.vitesse_attaque }} + {{ statistiques.vitesse_attaque_par_niveau }}</li>
        </ul>
      </div>
    </div>

    <!-- Section centrale : Image principale du champion -->
    <div class="center-section">
      <img :src="skins[0].image" alt="Champion Image" class="main-image" />
    </div>

    <!-- Section droite : Compétences et skins -->
    <div class="right-section">
      <!-- Compétences -->
      <div class="skills">
        <h2>Compétences</h2>
        <div class="skills-icons">
          <img v-for="(sort, index) in sorts" :key="index" :src="sort.image" alt="Skill Icon" />
        </div>
        <!-- Compétence passive actuelle -->
        <div class="current-skill">
          <img :src="passif.image" alt="Passive Icon" />
          <span>{{ passif.nom }}</span>
        </div>
      </div>

      <!-- Skins -->
      <div class="skins">
        <h2>Skins</h2>
        <div class="skins-carousel">
          <img v-for="(skin, index) in skins" :key="index" :src="skin.image" alt="Skin Image" />
        </div>
      </div>
    </div>
  </div>
  <div v-else>Chargement...</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const championId = route.params.id;

const apiUrl = import.meta.env.VUE_APP_API_URL;

// Références pour les données
const champion = ref(null);
const statistiques = ref({});
const passif = ref({});
const sorts = ref([]);
const skins = ref([]);

const fetchChampionData = async (championId) => {
  try {
    const championResponse = await fetch(`${apiUrl}/champions/${championId}`);
    const statistiquesResponse = await fetch(`${apiUrl}/statistiques?champion_id=${championId}`);
    const passifResponse = await fetch(`${apiUrl}/passifs?champion_id=${championId}`);
    const sortsResponse = await fetch(`${apiUrl}/sorts?champion_id=${championId}`);
    const skinsResponse = await fetch(`${apiUrl}/skins?champion_id=${championId}`);

    if (!championResponse.ok || !statistiquesResponse.ok || !passifResponse.ok || !sortsResponse.ok || !skinsResponse.ok) {
      throw new Error("Erreur lors de la récupération des données");
    }

    champion.value = await championResponse.json();
    statistiques.value = (await statistiquesResponse.json())[0];
    passif.value = (await passifResponse.json())[0];
    sorts.value = await sortsResponse.json();
    skins.value = await skinsResponse.json();
  } catch (error) {
    console.error(error.message);
  }
};

onMounted(() => {
  fetchChampionData(championId);
});
</script>

<style scoped>
/* Styles CSS */
</style>
