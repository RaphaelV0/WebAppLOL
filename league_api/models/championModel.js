// models/championModel.js
const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

// Connexion à la base de données
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Fonction pour récupérer tous les champions
exports.getAllChampions = (callback) => {
  connection.query('SELECT * FROM Champions', (err, results) => {
    if (err) {
      return callback(err, null);
    }
    return callback(null, results);
  });
};
