<template>
  <div class="search-bar">
    <div class="search-icon">
      <img src="@/assets/search_icon.png" alt="Search" />
    </div>
    <input
      type="text"
      v-model="searchQuery"
      placeholder="Search your champion"
      @keyup.enter="goToChampion"
    />
    <button @click="goToChampion">&gt;</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const searchQuery = ref('');
const router = useRouter();

const goToChampion = () => {
  if (searchQuery.value) {
    router.push({ name: 'champion', params: { name: searchQuery.value } });
  }
};
</script>

<style scoped>
.search-bar {
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50px; /* Bords arrondis */
  padding: 8px 16px;
  border: 2px solid #9f00ff; /* Bordure violette */
  width: 400px; /* Ajuster la largeur */
}

.search-icon {
  margin-right: 8px;
}

.search-icon img {
  width: 20px;
  height: 20px;
}

input[type="text"] {
  flex-grow: 1;
  background-color: transparent;
  border: none;
  color: white;
  padding: 8px;
  font-size: 16px;
  outline: none;
}

button {
  background-color: #9f00ff; /* Violet */
  border: none;
  color: white;
  cursor: pointer;
  font-size: 20px;
  padding: 8px 16px;
  border-radius: 50%;
  margin-left: 8px;
}
</style>
