<template>
  <div v-if="champion" class="champion-details">
    <h1>{{ champion.nom }}</h1>
    <p class="role">{{ champion.roles }}</p>

    <!-- Image du champion -->
    <img :src="defaultSkinImage" alt="Image du champion" class="champion-image" v-if="defaultSkinImage" />
    <p v-else>Image non disponible</p>

    <!-- Composant Statistiques -->
    <ChampionStatistiques v-if="statistiques" :statistiques="statistiques" />
    <p v-else>Statistiques non disponibles</p>

    <!-- Composant Sorts -->
    <ChampionSorts v-if="sorts" :sorts="sorts" />
    <p v-else>Sorts non disponibles</p>

    <h2>Skins</h2>
    <SkinCarousel :skins="skins" v-if="skins && skins.length > 0" />
    <p v-else>Aucun skin disponible</p>

    <h2>Passif</h2>
    <div v-if="passif" class="passif">
      <h3>{{ passif.nom }}</h3>
      <p>{{ passif.description }}</p>
      <img :src="getImageUrl(passif.image)" alt="Image du passif" class="passif-image" v-if="passif.image" />
      <p v-else>Image non disponible</p>
    </div>
    <div v-else>
      <p>Passif non trouvé.</p>
    </div>
  </div>
  <div v-else>
    <p>Champion non trouvé.</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import api from '@/services/api';
import SkinCarousel from '@/components/SkinCarousel.vue';
import ChampionStatistiques from '@/components/ChampionStatistiques.vue';
import ChampionSorts from '@/components/ChampionSorts.vue';

const route = useRoute();
const champion = ref(null);
const statistiques = ref(null);
const skins = ref([]);
const sorts = ref([]);
const passif = ref(null);
const defaultSkinImage = ref(null); // Variable pour stocker l'image du skin par défaut

const getImageUrl = (path) => {
  if (!path) return null;
  return path.startsWith('http') ? path : `https://ddragon.leagueoflegends.com/cdn/img/spell/${path}`;
};

onMounted(async () => {
  const championName = route.params.name;

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

      // Filtrer le skin par défaut
      const defaultSkin = skins.value.find(skin => skin.nom === 'default');
            defaultSkinImage.value = defaultSkin ? defaultSkin.image : null;

      const passifResponse = await api.getPassifByChampionId(championId);
      passif.value = passifResponse.data;

      // Logs pour vérifier les données
      console.log('Champion data:', champion.value);
      console.log('Statistiques data:', statistiques.value);
      console.log('Sorts data:', sorts.value);
      console.log('Skins data:', skins.value);
      console.log('Passif data:', passif.value);
    } else {
      champion.value = null;
    }
  } catch (error) {
    console.error('Erreur lors de la récupération des données du champion:', error);
    champion.value = null;
  }
});
</script>
