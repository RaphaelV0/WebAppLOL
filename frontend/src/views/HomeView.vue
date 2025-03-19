<template>
  <div class="home">
    <SearchBar />
  </div>
</template>

<script setup>
import SearchBar from '@/components/SearchBar.vue';
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  color: white;
  background-color: #333; /* Ajout d'une couleur de fond sombre */
}
</style>
