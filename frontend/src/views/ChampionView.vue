<template>
    <div class="champion-view" v-if="champion">
      <h1>{{ champion.nom }}</h1>
      <img :src="champion.image" :alt="champion.nom" />
      <p>{{ champion.description }}</p>
      
      <h2>Statistiques</h2>
      <ul>
        <li v-for="(stat, key) in champion.stats" :key="key">
          <strong>{{ key }}:</strong> {{ stat }}
        </li>
      </ul>
  
      <h2>Sorts</h2>
      <div class="spells">
        <div v-for="spell in champion.spells" :key="spell.id" class="spell-card">
          <img :src="spell.image" :alt="spell.nom" />
          <p><strong>{{ spell.nom }}</strong></p>
          <p>{{ spell.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        champion: null,
      };
    },
    async created() {
      const id = this.$route.params.id;
      try {
        const response = await axios.get("http://league_api:3000/champions");
        this.champion = response.data;
      } catch (error) {
        console.error("Erreur lors de la récupération du champion :", error);
      }
    },
  };
  </script>
  
  <style scoped>
  .champion-view {
    text-align: center;
    padding: 20px;
  }
  img {
    max-width: 200px;
    border-radius: 10px;
  }
  .spells {
    display: flex;
    justify-content: center;
    gap: 15px;
    flex-wrap: wrap;
  }
  .spell-card {
    background: white;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
    max-width: 200px;
  }
  .spell-card img {
    max-width: 100%;
    border-radius: 5px;
  }
  </style>
  