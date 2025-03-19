<template>
  <div v-if="champion" class="champion-details">
    <h1>{{ champion.name }}</h1>
    <p class="role">{{ champion.role }}</p>

    <!-- Image du champion -->
    <img :src="champion.imageUrl" alt="Image du champion" class="champion-image" />

    <div class="statistics">
      <h2>Statistiques</h2>
      <div v-for="stat in statistiques" :key="stat.id" class="stat-row">
        <span>{{ stat.name }}:</span>
        <span>{{ stat.value }}</span>
      </div>
    </div>

    <h2>Sorts</h2>
    <ul class="sorts">
      <li v-for="sort in sorts" :key="sort.id" class="sort-item">
        {{ sort.name }}
        <!-- Image du sort -->
        <img :src="sort.imageUrl" alt="Image du sort" class="sort-image" />
      </li>
    </ul>

    <h2>Skins</h2>
    <div class="skins">
      <div v-for="skin in skins" :key="skin.id" class="skin-item">
        {{ skin.name }}
        <!-- Image du skin -->
        <img :src="skin.imageUrl" alt="Image du skin" class="skin-image" />
      </div>
    </div>

    <h2>Passif</h2>
    <div v-if="passif" class="passif">
      <h3>{{ passif.name }}</h3>
      <p>{{ passif.description }}</p>
      <!-- Image du passif -->
      <img :src="passif.imageUrl" alt="Image du passif" class="passif-image" />
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

const route = useRoute();
const champion = ref(null);
const statistiques = ref([]);
const skins = ref([]);
const sorts = ref([]);
const passif = ref(null);

onMounted(async () => {
  const championName = route.params.name;

  try {
    const championResponse = await api.searchChampions(championName);
    if (championResponse.data.length > 0) {
      // Assurez-vous que l'objet champion contient l'URL de l'image
      champion.value = championResponse.data[0];
      const championId = champion.value.id;

      const statistiquesResponse = await api.getStatistiquesByChampionId(championId);
      statistiques.value = statistiquesResponse.data;

      const skinsResponse = await api.getSkinsByChampionId(championId);
      skins.value = skinsResponse.data;

      const sortsResponse = await api.getSortsByChampionId(championId);
      sorts.value = sortsResponse.data;

      const passifResponse = await api.getPassifByChampionId(championId);
      passif.value = passifResponse.data;

      // Log pour vérifier si les URLs des images sont bien présentes
      console.log('Champion data:', champion.value);
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

<style scoped>
.champion-details {
  color: #fff;
  padding: 20px;
  background-color: #444;
}

.champion-image {
  max-width: 300px;
  margin-bottom: 20px;
}

.statistics {
  margin-top: 20px;
}

.stat-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}

.sorts,
.skins {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
}

.sort-item {
  margin-bottom: 5px;
  display: flex;
  align-items: center;
}

.sort-image {
  width: 50px; /* Ajustez la taille selon vos besoins */
  margin-left: 10px;
}

.skins {
  display: flex;
  overflow-x: auto; /* Pour permettre le scroll horizontal si nécessaire */
}

.skin-item {
  margin-right: 10px;
}

.skin-image {
  width: 100px; /* Ajustez la taille selon vos besoins */
}

.passif-image {
  max-width: 100px;
}
</style>
