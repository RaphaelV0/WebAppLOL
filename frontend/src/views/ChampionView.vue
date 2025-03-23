<template>
  <div v-if="champion" class="champion-details">
    <!-- Barre de recherche -->
    <div class="search-container">
      <input
        type="text"
        class="search-input"
        placeholder="Search your champion"
        v-model="searchQuery"
      />
      <button class="search-button" @click="goToChampionPage">
        <i class="search-icon">&gt;</i>
      </button>
    </div>

    <!-- Affichage du champion -->
    <div class="top-section">
      <ChampionHeader :champion="champion" />
      <ChampionImage :defaultSkinImage="defaultSkinImage" />
    </div>
    <div class="mid-section">
      <ChampionStatistiques :statistiques="statistiques" />
      <ChampionSorts :sorts="sorts" />
    </div>
    <SkinCarousel :skins="skins" v-if="skins && skins.length > 0" />
    <ChampionPassif :passif="passif" />
  </div>
  <div v-else>
    <p>Champion non trouvé.</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import api from '@/services/api';

import ChampionHeader from '@/components/ChampionHeader.vue';
import ChampionImage from '@/components/ChampionImage.vue';
import ChampionStatistiques from '@/components/ChampionStatistiques.vue';
import ChampionSorts from '@/components/ChampionSorts.vue';
import SkinCarousel from '@/components/SkinCarousel.vue';
import ChampionPassif from '@/components/ChampionPassif.vue';

const route = useRoute();
const router = useRouter();
const champion = ref(null);
const statistiques = ref(null);
const skins = ref([]);
const sorts = ref([]);
const passif = ref(null);
const defaultSkinImage = ref(null);
const searchQuery = ref('');

onMounted(async () => {
  const championName = route.params.name;
  loadChampionData(championName);
});

const loadChampionData = async (championName) => {
  try {
    const championResponse = await api.searchChampions(championName);
    if (championResponse.data && championResponse.data.length > 0) {
      champion.value = championResponse.data[0];
      const championId = champion.value.id;

      const statsResponse = await api.getStatistiquesByChampionId(championId);
      if (statsResponse.data && statsResponse.data.length > 0) {
        statistiques.value = statsResponse.data[0];
      }

      const sortsResponse = await api.getSortsByChampionId(championId);
      sorts.value = sortsResponse.data;

      const skinsResponse = await api.getSkinsByChampionId(championId);
      skins.value = skinsResponse.data;

      const defaultSkin = skins.value.find(skin => skin.nom === 'default');
      defaultSkinImage.value = defaultSkin ? defaultSkin.image : null;

      const passifResponse = await api.getPassifByChampionId(championId);
      passif.value = passifResponse.data;
    } else {
      champion.value = null;
    }
  } catch (error) {
    console.error('Erreur lors de la récupération des données du champion:', error);
    champion.value = null;
  }
};

const goToChampionPage = () => {
  if (searchQuery.value) {
    router.push({ name: 'ChampionView', params: { name: searchQuery.value } });
    loadChampionData(searchQuery.value); // Charger les données du nouveau champion
  }
};
</script>

<style scoped>
/* Style général */
.champion-details {
  font-family: 'Poppins', sans-serif;
  color: white;
  background: linear-gradient(to bottom, #3a0ca3, #4cc9f0);
  padding: 20px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Barre de recherche */
.search-container {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 50px;
  padding: 5px 10px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.3);
  margin-bottom: 20px;
}

.search-input {
  width: 200px;
  padding: 8px;
  font-size: 14px;
  color: white;
  background-color: transparent;
  border: none;
  outline: none;
}

.search-button {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #6a00ff;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  border: none;
  cursor: pointer;
  margin-left: 5px;
}

.search-button:hover {
  background-color: #9f00ff;
}

.search-icon {
  font-size: 16px;
  color: white;
}

/* Style pour l'affichage du champion */
.top-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.mid-section {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
</style>
