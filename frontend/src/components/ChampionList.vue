<script>
import axios from 'axios'; // Importer l'instance axios

export default {
  data() {
    return {
      champions: [],
    };
  },
  mounted() {
    this.getChampions();
  },
  methods: {
    async getChampions() {
      try {
        const response = await axios.get('/champions');
        this.champions = response.data;
      } catch (error) {
        console.error('Erreur lors de la récupération des champions:', error);
      }
    },
  },
};
</script>
