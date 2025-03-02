const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

// Création du pool de connexion pour éviter les problèmes de connexion simultanée
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Vérifier la connexion
db.getConnection((err, connection) => {
  if (err) {
    console.error('❌ Erreur de connexion à la base de données :', err.message);
  } else {
    console.log('✅ Connexion réussie à la base de données MySQL');
    connection.release();
  }
});

module.exports = db;
