const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

const championRoutes = require('./routes/championRoutes');
const skinRoutes = require('./routes/skinRoutes');
const sortRoutes = require('./routes/sortRoutes');
const statistiqueRoutes = require('./routes/statistiqueRoutes');
const passifRoutes = require('./routes/passifRoutes'); // Importation des routes des passifs

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
  origin: 'http://localhost:8080', // L'adresse de votre frontend
}));
app.use(express.json());

// Définir la configuration Swagger
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de  League of Legends',
      version: '1.0.0',
      description: 'Une API pour gérer les champions, skins, sorts et autres statistiques de League of Legends.',
    },
    servers: [
      {
        url: `http://localhost:${port}`, // Change l'URL si nécessaire
      },
    ],
  },
  apis: ['./routes/*.js'], // Indiquer où Swagger doit chercher les annotations dans les fichiers de routes
};

// Créer la documentation Swagger
const swaggerSpec = swaggerJSDoc(swaggerOptions);

// Utiliser Swagger UI pour afficher la documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Définition des routes sans le préfixe '/api'
app.use('/champions', championRoutes);
app.use('/skins', skinRoutes);
app.use('/sorts', sortRoutes);
app.use('/statistiques', statistiqueRoutes);
app.use('/passifs', passifRoutes); // Ajout des routes des passifs

app.listen(port, () => {
  console.log(`🚀 API en écoute sur http://localhost:${port}`);
});
