const Statistique = require('../models/statistiqueModel');

// Récupérer toutes les statistiques avec pagination, recherche et tri
exports.getAllStatistiques = (req, res) => {
  const { page = 1, limit = 10, search = '', sortBy = 'nom', order = 'ASC' } = req.query;

  // Conversion des paramètres de pagination
  const offset = (page - 1) * limit;

  // Recherche et tri
  let whereConditions = '';
  const queryParams = [];

  if (search) {
    whereConditions += " AND nom LIKE ?";
    queryParams.push(`%${search}%`);
  }

  // Tri
  const orderByClause = `ORDER BY ${sortBy} ${order}`;

  // Récupérer les statistiques avec la pagination, la recherche et le tri
  Statistique.getAllWithFilters(whereConditions, queryParams, limit, offset, orderByClause, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des statistiques:', err);
      return res.status(500).json({ message: "Erreur serveur", error: err.message });
    }
    res.json(results);
  });
};

// Récupérer les statistiques d’un champion par son ID
exports.getStatistiquesByChampionId = (req, res) => {
  const { championId } = req.params;

  Statistique.getByChampionId(championId, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des statistiques du champion:', err);
      return res.status(500).json({ message: "Erreur serveur", error: err.message });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: "Aucune statistique trouvée pour ce champion" });
    }

    res.json(results);
  });
};
