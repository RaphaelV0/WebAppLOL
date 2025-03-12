<template>
  <div>
    <search-bar @search="searchChampions" />
    <champion-list :champions="champions" />
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue';
import ChampionList from '@/components/ChampionList.vue';
import { getChampions } from '@/services/api';

export default {
  components: {
    SearchBar,
    ChampionList,
  },
  data() {
    return {
      champions: [],
    };
  },
  methods: {
    async searchChampions(searchTerm) {
      try {
        const data = await getChampions(1, 10, searchTerm);
        this.champions = data;
      } catch (error) {
        console.error('Erreur lors de la recherche des champions:', error);
      }
    },
  },
};
</script>
