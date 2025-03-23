<template>
  <div class="home">
    <SearchBar />
    <div class="content">
      <h1>Bienvenue dans l'univers de League of Legends !</h1>
      <p>Découvrez vos champions préférés et plongez dans leurs histoires.</p>
    </div>
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
  background: url('@/assets/stars_background.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
}

.home::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 0;
}

.home .content {
  text-align: center;
  padding: 20px;
  z-index: 1;
}

.home h1 {
  font-size: 2.5em;
  margin-bottom: 10px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.home p {
  font-size: 1.2em;
  color: #ddd;
}
</style>
