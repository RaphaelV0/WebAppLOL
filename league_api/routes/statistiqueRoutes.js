const express = require('express');
const router = express.Router();
const statistiqueController = require('../controllers/statistiqueController');

/**
 * @swagger
 * /statistiques:
 *   get:
 *     summary: "Récupérer toutes les statistiques"
 *     description: "Cette route permet de récupérer toutes les statistiques avec pagination, recherche et tri."
 *     responses:
 *       200:
 *         description: "Une liste de statistiques"
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   value:
 *                     type: string
 *       500:
 *         description: "Erreur serveur interne"
 *   parameters:
 *     - in: query
 *       name: page
 *       description: "Numéro de la page de résultats"
 *       required: false
 *       schema:
 *         type: integer
 *     - in: query
 *       name: limit
 *       description: "Limite du nombre de résultats"
 *       required: false
 *       schema:
 *         type: integer
 *     - in: query
 *       name: search
 *       description: "Critères de recherche pour filtrer les statistiques"
 *       required: false
 *       schema:
 *         type: string
 */

router.get('/', statistiqueController.getAllStatistiques);

/**
 * @swagger
 * /statistiques/champion/{championId}:
 *   get:
 *     summary: "Récupérer les statistiques d’un champion spécifique"
 *     description: "Cette route permet de récupérer les statistiques d’un champion spécifique."
 *     parameters:
 *       - in: path
 *         name: championId
 *         description: "ID du champion"
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: "Liste des statistiques du champion"
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   value:
 *                     type: string
 *       404:
 *         description: "Statistiques non trouvées"
 *       500:
 *         description: "Erreur serveur interne"
 */

router.get('/champion/:championId', statistiqueController.getStatistiquesByChampionId);

module.exports = router;
