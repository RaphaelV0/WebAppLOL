const Passif = require('../models/passifModel');

// Récupérer tous les passifs avec pagination, recherche et tri
exports.getAllPassifs = (req, res) => {
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

  // Récupérer les passifs avec la pagination, la recherche et le tri
  Passif.getAllWithFilters(whereConditions, queryParams, limit, offset, orderByClause, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des passifs:', err);
      return res.status(500).json({ message: "Erreur serveur", error: err.message });
    }
    res.json(results);
  });
};

// Récupérer le passif d’un champion par son ID
exports.getPassifByChampionId = (req, res) => {
  const { championId } = req.params;

  Passif.getByChampionId(championId, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération du passif du champion:', err);
      return res.status(500).json({ message: "Erreur serveur", error: err.message });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: "Aucun passif trouvé pour ce champion" });
    }

    res.json(results[0]); // On retourne un seul passif
  });
};
