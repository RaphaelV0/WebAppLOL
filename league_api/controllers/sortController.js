const Sort = require('../models/sortModel');

// Récupérer tous les sorts avec pagination, recherche et tri
exports.getAllSorts = (req, res) => {
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

  // Récupérer les sorts avec la pagination, la recherche et le tri
  Sort.getAllWithFilters(whereConditions, queryParams, limit, offset, orderByClause, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des sorts:', err);
      return res.status(500).json({ message: "Erreur serveur", error: err.message });
    }
    res.json(results);
  });
};

// Récupérer les sorts d’un champion par son ID
exports.getSortsByChampionId = (req, res) => {
  const { championId } = req.params;

  Sort.getByChampionId(championId, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des sorts du champion:', err);
      return res.status(500).json({ message: "Erreur serveur", error: err.message });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: "Aucun sort trouvé pour ce champion" });
    }

    res.json(results);
  });
};

// Récupérer un sort par son ID
exports.getSortById = (req, res) => {
  const { id } = req.params;

  Sort.getById(id, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération du sort:', err);
      return res.status(500).json({ message: "Erreur serveur", error: err.message });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: "Sort non trouvé" });
    }

    res.json(results[0]);
  });
};
