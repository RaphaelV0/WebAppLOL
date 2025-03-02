const db = require('../config/db');

const Sort = {
  // Récupérer tous les sorts avec filtrage, pagination et tri
  getAllWithFilters: (whereConditions, queryParams, limit, offset, orderByClause, callback) => {
    const query = `
      SELECT * 
      FROM Sorts
      WHERE 1=1 ${whereConditions} 
      ${orderByClause} 
      LIMIT ? OFFSET ?
    `;

    // Ajouter limit et offset pour la pagination
    queryParams.push(limit, offset);

    db.query(query, queryParams, callback);
  },

  // Récupérer tous les sorts
  getAll: (callback) => {
    db.query('SELECT * FROM Sorts', callback);
  },

  // Récupérer les sorts d’un champion spécifique
  getByChampionId: (championId, callback) => {
    db.query('SELECT * FROM Sorts WHERE champion_id = ?', [championId], callback);
  },

  // Récupérer un sort spécifique par son ID
  getById: (id, callback) => {
    db.query('SELECT * FROM Sorts WHERE id = ?', [id], callback);
  }
};

module.exports = Sort;
