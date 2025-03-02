const db = require('../config/db');

const Skin = {
  // Récupérer tous les skins avec filtrage, pagination et tri
  getAllWithFilters: (whereConditions, queryParams, limit, offset, orderByClause, callback) => {
    const query = `
      SELECT * 
      FROM Skins
      WHERE 1=1 ${whereConditions} 
      ${orderByClause} 
      LIMIT ? OFFSET ?
    `;

    // Ajouter limit et offset pour la pagination
    queryParams.push(limit, offset);

    db.query(query, queryParams, callback);
  },

  // Récupérer tous les skins
  getAll: (callback) => {
    db.query('SELECT * FROM Skins', callback);
  },

  // Récupérer les skins d’un champion spécifique
  getByChampionId: (championId, callback) => {
    db.query('SELECT * FROM Skins WHERE champion_id = ?', [championId], callback);
  },

  // Récupérer un skin spécifique par son ID
  getById: (id, callback) => {
    db.query('SELECT * FROM Skins WHERE id = ?', [id], callback);
  }
};

module.exports = Skin;
