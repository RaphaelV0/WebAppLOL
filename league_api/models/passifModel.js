const db = require('../config/db');

const Passif = {
  // Récupérer tous les passifs avec filtrage, pagination et tri
  getAllWithFilters: (whereConditions, queryParams, limit, offset, orderByClause, callback) => {
    const query = `
      SELECT * 
      FROM Passifs
      WHERE 1=1 ${whereConditions} 
      ${orderByClause} 
      LIMIT ? OFFSET ?
    `;

    // Ajouter limit et offset pour la pagination
    queryParams.push(limit, offset);

    db.query(query, queryParams, callback);
  },

  // Récupérer tous les passifs
  getAll: (callback) => {
    db.query('SELECT * FROM Passifs', callback);
  },

  // Récupérer le passif d’un champion spécifique
  getByChampionId: (championId, callback) => {
    db.query('SELECT * FROM Passifs WHERE champion_id = ?', [championId], callback);
  }
};

module.exports = Passif;
