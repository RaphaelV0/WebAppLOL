const db = require('../config/db');

const Champion = {
  getAllWithFilters: (whereConditions, queryParams, limit, offset, orderByClause, callback) => {
    const query = `
      SELECT * 
      FROM Champions
      WHERE 1=1 ${whereConditions} 
      ${orderByClause} 
      LIMIT ? OFFSET ?
    `;

    // Ajouter limit et offset pour la pagination
    queryParams.push(limit, offset);

    db.query(query, queryParams, callback);
  },

  getById: (id, callback) => {
    db.query('SELECT * FROM Champions WHERE id = ?', [id], callback);
  }
};

module.exports = Champion;
