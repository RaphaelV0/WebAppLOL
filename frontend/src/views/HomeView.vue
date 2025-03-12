<template>
    <div class="home">
      <h1>Recherche de Champion</h1>
      <SearchBar v-model="searchQuery" @search="rechercherChampion" />
      <ul v-if="filteredChampions.length">
        <ChampionCard
          v-for="champion in filteredChampions"
          :key="champion.id"
          :champion="champion"
          @click="goToChampion(champion.id)"
        />
      </ul>
    </div>
  </template>
  
  <script>
  import axios from "@/services/api";
  import SearchBar from "@/components/SearchBar.vue";
  import ChampionCard from "@/components/ChampionCard.vue";
  
  export default {
    components: {
      SearchBar,
      ChampionCard,
    },
    data() {
      return {
        searchQuery: "",
        champions: [],
      };
    },
    computed: {
      filteredChampions() {
        return this.champions.filter((champion) =>
          champion.nom.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      },
    },
    methods: {
      async fetchChampions() {
        try {
            const response = await axios.get("http://league_api:3000/champions");
            this.champions = response.data;
        } catch (error) {
          console.error("Erreur lors de la récupération des champions :", error);
        }
      },
      rechercherChampion() {
        if (this.filteredChampions.length) {
          this.goToChampion(this.filteredChampions[0].id);
        }
      },
      goToChampion(id) {
        this.$router.push(`/champion/${id}`);
      },
    },
    created() {
      this.fetchChampions();
    },
  };
  </script>
  
  <style scoped>
  .home {
    text-align: center;
    padding: 20px;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
    padding: 0;
  }
  </style>
  