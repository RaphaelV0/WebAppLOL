import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.example.com/', // Remplace par ton URL d'API
});

export default instance;
