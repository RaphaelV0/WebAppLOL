// api.js
const express = require('express');
const dotenv = require('dotenv');
const championRoutes = require('./routes/championRoutes');  // Importation des routes

// Charger les variables d'environnement
dotenv.config();

// Créer l'application Express
const app = express();
app.use(express.json());

// Utiliser les routes
app.use('/api', championRoutes);  // Attacher les routes à l'API

// Démarrer le serveur API
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`API en écoute sur le port ${port}`);
});
