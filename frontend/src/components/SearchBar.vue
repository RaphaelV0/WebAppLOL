<template>
  <div class="search-bar">
    <input
      v-model="searchQuery"
      placeholder="Search your champion"
      @keyup.enter="searchChampion"
    />
    <button @click="searchChampion">
      <span class="search-icon">➔</span>
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const searchQuery = ref('');
const router = useRouter();

const apiUrl =
process.env.VUE_APP_API_URL_LOCAL && window.location.hostname === 'localhost'
    ? process.env.VUE_APP_API_URL_LOCAL
    : process.env.VUE_APP_API_URL_DOCKER;

const searchChampion = async () => {
  if (searchQuery.value.trim() === '') {
    alert('Veuillez entrer un nom de champion.');
    return;
  }

  try {
    const response = await fetch(`${apiUrl}/champions/search?nom=${searchQuery.value}`);
    if (!response.ok) {
      throw new Error('Erreur lors de la recherche du champion.');
    }
    const data = await response.json();

    // Vérifie si un champion a été trouvé
    if (data && data.length > 0) {
      // Redirige vers la page du champion avec l'ID trouvé
      router.push({ name: 'champion-details', params: { id: data[0].id } });
    } else {
      alert('Aucun champion trouvé avec ce nom.');
    }
  } catch (error) {
    console.error(error.message);
    alert('Erreur lors de la recherche du champion.');
  }
};
</script>

<style scoped>
/* Styles CSS */
</style>
