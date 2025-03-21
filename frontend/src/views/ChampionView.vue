<template>
  <div v-if="champion" class="champion-details">
    <h1>{{ champion.nom }}</h1>
    <p class="role">{{ champion.roles }}</p>

    <!-- Image du champion -->
    <img :src="champion.imageUrl" alt="Image du champion" class="champion-image" />

    <div class="statistics">
      <h2>Statistiques</h2>
      <div class="stat-row">
        <span>PV:</span>
        <span>{{ champion.pv }}</span>
      </div>
      <div class="stat-row">
        <span>Mana:</span>
        <span>{{ champion.mana }}</span>
      </div>
      <div class="stat-row">
        <span>Armure:</span>
        <span>{{ champion.armure }}</span>
      </div>
      <!-- Ajoutez les autres statistiques ici -->
    </div>

    <h2>Sorts</h2>
    <ul class="sorts">
      <li v-for="sort in sorts" :key="sort.id" class="sort-item">
        {{ sort.nom }}
        <img :src="sort.image" alt="Image du sort" class="sort-image" />
      </li>
    </ul>

    <h2>Skins</h2>
    <SkinCarousel :skins="skins" v-if="skins && skins.length > 0" />
    <p v-else>Aucun skin disponible</p>

    <h2>Passif</h2>
    <div v-if="passif" class="passif">
      <h3>{{ passif.nom }}</h3>
      <p>{{ passif.description }}</p>
      <img :src="passif.image" alt="Image du passif" class="passif-image" />
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
import SkinCarousel from '@/components/SkinCarousel.vue'; // Importez le composant

const route = useRoute();
const champion = ref(null);
const statistiques = ref(null);
const skins = ref([]);
const sorts = ref([]);
const passif = ref(null);

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
