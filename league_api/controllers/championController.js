const Champion = require('../models/championModel');  // Importation du modèle

// Fonction pour récupérer tous les champions
exports.getAllChampions = (req, res) => {
  Champion.getAllChampions((err, results) => {
    if (err) {
      console.error('Erreur de récupération des champions:', err);
      return res.status(500).json({ message: "Erreur lors de la récupération des champions", error: err });
    }
    return res.json(results);
  });
};
