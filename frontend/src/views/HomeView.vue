<template>
  <div class="home-container">
    <h1>Bienvenue sur l'App League</h1>
    <SearchBar />
  </div>
</template>

<script setup>
import SearchBar from '../components/SearchBar.vue';
</script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Pour centrer verticalement */
  background: linear-gradient(to bottom, #3498db, #2c3e50); /* Un joli dégradé */
  color: white;
}
</style>
