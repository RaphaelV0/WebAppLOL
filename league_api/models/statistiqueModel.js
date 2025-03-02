const db = require('../config/db');

const Statistique = {
  // Récupérer toutes les statistiques avec filtrage, pagination et tri
  getAllWithFilters: (whereConditions, queryParams, limit, offset, orderByClause, callback) => {
    const query = `
      SELECT * 
      FROM Statistiques
      WHERE 1=1 ${whereConditions} 
      ${orderByClause} 
      LIMIT ? OFFSET ?
    `;

    // Ajouter limit et offset pour la pagination
    queryParams.push(limit, offset);

    db.query(query, queryParams, callback);
  },

  // Récupérer toutes les statistiques
  getAll: (callback) => {
    db.query('SELECT * FROM Statistiques', callback);
  },

  // Récupérer les statistiques d’un champion spécifique
  getByChampionId: (championId, callback) => {
    db.query('SELECT * FROM Statistiques WHERE champion_id = ?', [championId], callback);
  }
};

module.exports = Statistique;
