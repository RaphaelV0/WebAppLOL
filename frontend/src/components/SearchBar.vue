<template>
  <div class="search-bar">
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
  /* Style pour correspondre à la maquette (fond, bordures, etc.) */
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  padding: 5px;
}

input[type="text"] {
  flex-grow: 1;
  background-color: transparent;
  border: none;
  color: white;
  padding: 8px;
  font-size: 16px;
}

button {
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 20px;
  padding: 8px;
}
</style>
