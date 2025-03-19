import axios from 'axios';

// Détermine l'URL de base de l'API en fonction de l'environnement
const baseURL = process.env.VUE_APP_API_URL || 'http://localhost:3000';

// Crée une instance d'axios avec l'URL de base et les headers par défaut
const apiClient = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Exporte un objet contenant les fonctions pour interagir avec l'API
export default {
  // ---------------------- Champions ----------------------

  /**
   * Récupère tous les champions avec pagination, filtrage et recherche.
   * @param {number} page - Le numéro de la page à récupérer (par défaut: 1).
   * @param {number} limit - Le nombre de champions par page (par défaut: 10).
   * @param {string} search - Le terme de recherche pour filtrer les champions (par défaut: '').
   * @returns {Promise} - Une promesse qui résout avec la réponse de l'API.
   */
  getAllChampions(page = 1, limit = 10, search = '') {
    return apiClient.get(`/champions?page=${page}&limit=${limit}&search=${search}`);
  },

  /**
   * Recherche des champions par nom.
   * @param {string} nom - Le nom du champion à rechercher.
   * @returns {Promise} - Une promesse qui résout avec la réponse de l'API.
   */
  searchChampions(nom) {
    return apiClient.get(`/champions/search?nom=${nom}`);
  },

  /**
   * Récupère un champion par son ID.
   * @param {number} id - L'ID du champion à récupérer.
   * @returns {Promise} - Une promesse qui résout avec la réponse de l'API.
   */
  getChampionById(id) {
    return apiClient.get(`/champions/${id}`);
  },

  // ---------------------- Passifs ----------------------

  /**
   * Récupère tous les passifs avec pagination, filtrage et recherche.
   * @param {number} page - Le numéro de la page à récupérer (par défaut: 1).
   * @param {number} limit - Le nombre de passifs par page (par défaut: 10).
   * @param {string} search - Le terme de recherche pour filtrer les passifs (par défaut: '').
   * @returns {Promise} - Une promesse qui résout avec la réponse de l'API.
   */
  getAllPassifs(page = 1, limit = 10, search = '') {
    return apiClient.get(`/passifs?page=${page}&limit=${limit}&search=${search}`);
  },

  /**
   * Récupère le passif d'un champion spécifique par son ID.
   * @param {number} championId - L'ID du champion dont on veut récupérer le passif.
   * @returns {Promise} - Une promesse qui résout avec la réponse de l'API.
   */
  getPassifByChampionId(championId) {
    return apiClient.get(`/passifs/champion/${championId}`);
  },

  // ---------------------- Skins ----------------------

  /**
   * Récupère tous les skins avec pagination, filtrage et recherche.
   * @param {number} page - Le numéro de la page à récupérer (par défaut: 1).
   * @param {number} limit - Le nombre de skins par page (par défaut: 10).
   * @param {string} search - Le terme de recherche pour filtrer les skins (par défaut: '').
   * @returns {Promise} - Une promesse qui résout avec la réponse de l'API.
   */
  getAllSkins(page = 1, limit = 10, search = '') {
    return apiClient.get(`/skins?page=${page}&limit=${limit}&search=${search}`);
  },

  /**
   * Récupère les skins d'un champion spécifique par son ID.
   * @param {number} championId - L'ID du champion dont on veut récupérer les skins.
   * @returns {Promise} - Une promesse qui résout avec la réponse de l'API.
   */
  getSkinsByChampionId(championId) {
    return apiClient.get(`/skins/champion/${championId}`);
  },

  /**
   * Récupère un skin par son ID.
   * @param {number} id - L'ID du skin à récupérer.
   * @returns {Promise} - Une promesse qui résout avec la réponse de l'API.
   */
  getSkinById(id) {
    return apiClient.get(`/skins/${id}`);
  },

  // ---------------------- Sorts ----------------------

  /**
   * Récupère tous les sorts avec pagination, filtrage et recherche.
   * @param {number} page - Le numéro de la page à récupérer (par défaut: 1).
   * @param {number} limit - Le nombre de sorts par page (par défaut: 10).
   * @param {string} search - Le terme de recherche pour filtrer les sorts (par défaut: '').
   * @returns {Promise} - Une promesse qui résout avec la réponse de l'API.
   */
  getAllSorts(page = 1, limit = 10, search = '') {
    return apiClient.get(`/sorts?page=${page}&limit=${limit}&search=${search}`);
  },

  /**
   * Récupère les sorts d'un champion spécifique par son ID.
   * @param {number} championId - L'ID du champion dont on veut récupérer les sorts.
   * @returns {Promise} - Une promesse qui résout avec la réponse de l'API.
   */
  getSortsByChampionId(championId) {
    return apiClient.get(`/sorts/champion/${championId}`);
  },

  /**
   * Récupère un sort par son ID.
   * @param {number} id - L'ID du sort à récupérer.
   * @returns {Promise} - Une promesse qui résout avec la réponse de l'API.
   */
  getSortById(id) {
    return apiClient.get(`/sorts/${id}`);
  },

  // ---------------------- Statistiques ----------------------

  /**
   * Récupère toutes les statistiques avec pagination, filtrage et recherche.
   * @param {number} page - Le numéro de la page à récupérer (par défaut: 1).
   * @param {number} limit - Le nombre de statistiques par page (par défaut: 10).
   * @param {string} search - Le terme de recherche pour filtrer les statistiques (par défaut: '').
   * @returns {Promise} - Une promesse qui résout avec la réponse de l'API.
   */
  getAllStatistiques(page = 1, limit = 10, search = '') {
    return apiClient.get(`/statistiques?page=${page}&limit=${limit}&search=${search}`);
  },

  /**
   * Récupère les statistiques d'un champion spécifique par son ID.
   * @param {number} championId - L'ID du champion dont on veut récupérer les statistiques.
   * @returns {Promise} - Une promesse qui résout avec la réponse de l'API.
   */
  getStatistiquesByChampionId(championId) {
    return apiClient.get(`/statistiques/champion/${championId}`);
  },
};
