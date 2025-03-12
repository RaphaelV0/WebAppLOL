import axios from 'axios';

// Créer une instance Axios
const api = axios.create({
  baseURL: '/api', // L'URL de base, '/api' sera redirigé par le proxy dans vue.config.js
  timeout: 5000, // Timeout de 5 secondes pour les requêtes
});

// Récupérer tous les champions
export const getChampions = async (page = 1, limit = 10, search = '') => {
  try {
    const response = await api.get('/champions', {
      params: { page, limit, search },
    });
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des champions:', error);
    throw error;
  }
};

// Récupérer un champion par ID
export const getChampionById = async (id) => {
  try {
    const response = await api.get(`/champions/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération du champion:', error);
    throw error;
  }
};
