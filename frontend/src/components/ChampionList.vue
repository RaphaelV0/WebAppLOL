<template>
    <div>
      <h2>{{ title }}</h2>
      <div class="champion-grid">
        <ChampionCard v-for="champion in champions" :key="champion.id" :champion="champion" />
      </div>
    </div>
  </template>
  
  <script>
  import ChampionCard from '@/components/ChampionCard.vue';
  
  export default {
    props: ['champions', 'title'],
    components: { ChampionCard }
  };
  </script>
  
  <style scoped>
  .champion-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
  }
  </style>
  