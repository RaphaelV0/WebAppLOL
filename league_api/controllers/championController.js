const Champion = require('../models/championModel');

// Récupérer tous les champions avec pagination, filtrage, recherche et tri
exports.getAllChampions = (req, res) => {
  const { page = 1, limit = 10, search = '', sortBy = 'nom', order = 'ASC', role } = req.query;

  // Conversion des paramètres de pagination
  const offset = (page - 1) * limit;

  // Filtrage
  let whereConditions = '';
  const queryParams = [];
  
  if (search) {
    whereConditions += " AND (nom LIKE ? OR titre LIKE ?)";
    queryParams.push(`%${search}%`, `%${search}%`);
  }

  if (role) {
    whereConditions += " AND roles LIKE ?";
    queryParams.push(`%${role}%`);
  }

  // Tri
  const orderByClause = `ORDER BY ${sortBy} ${order}`;

  // Requête SQL avec pagination, recherche, tri et filtrage
  Champion.getAllWithFilters(whereConditions, queryParams, limit, offset, orderByClause, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des champions:', err);
      return res.status(500).json({ message: "Erreur serveur", error: err.message });
    }
    res.json(results);
  });
};

// Récupérer un champion par son ID
exports.getChampionById = (req, res) => {
  const { id } = req.params;

  Champion.getById(id, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération du champion:', err);
      return res.status(500).json({ message: "Erreur serveur", error: err.message });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: "Champion non trouvé" });
    }

    res.json(results[0]);
  });
};

// Rechercher des champions par nom
exports.searchChampions = (req, res) => {
  const { nom } = req.query;

  if (!nom) {
    return res.status(400).json({ message: 'Le paramètre "nom" est requis.' });
  }

  Champion.searchByNom(nom, (err, results) => {
    if (err) {
      console.error('Erreur lors de la recherche des champions:', err);
      return res.status(500).json({ message: "Erreur serveur", error: err.message });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: "Aucun champion trouvé avec ce nom." });
    }

    res.json(results);
  });
};
