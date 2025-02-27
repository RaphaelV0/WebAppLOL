// routes/championRoutes.js
const express = require('express');
const router = express.Router();
const championController = require('../controllers/championController');

// Définir la route pour récupérer tous les champions
router.get('/champions', championController.getAllChampions);

module.exports = router;
