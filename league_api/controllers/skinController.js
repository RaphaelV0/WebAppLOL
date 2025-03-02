const Skin = require('../models/skinModel');

// Récupérer tous les skins avec pagination, recherche et tri
exports.getAllSkins = (req, res) => {
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

  // Récupérer les skins avec la pagination, la recherche et le tri
  Skin.getAllWithFilters(whereConditions, queryParams, limit, offset, orderByClause, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des skins:', err);
      return res.status(500).json({ message: "Erreur serveur", error: err.message });
    }
    res.json(results);
  });
};

// Récupérer les skins d’un champion par son ID
exports.getSkinsByChampionId = (req, res) => {
  const { championId } = req.params;

  Skin.getByChampionId(championId, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des skins du champion:', err);
      return res.status(500).json({ message: "Erreur serveur", error: err.message });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: "Aucun skin trouvé pour ce champion" });
    }

    res.json(results);
  });
};

// Récupérer un skin par son ID
exports.getSkinById = (req, res) => {
  const { id } = req.params;

  Skin.getById(id, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération du skin:', err);
      return res.status(500).json({ message: "Erreur serveur", error: err.message });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: "Skin non trouvé" });
    }

    res.json(results[0]);
  });
};
