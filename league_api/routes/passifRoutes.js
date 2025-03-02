const express = require('express');
const router = express.Router();
const passifController = require('../controllers/passifController');

/**
 * @swagger
 * /passifs:
 *   get:
 *     summary: "Récupérer tous les passifs"
 *     description: "Cette route permet de récupérer tous les passifs avec pagination, recherche et tri."
 *     responses:
 *       200:
 *         description: "Une liste de passifs"
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
 *                   description:
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
 *       description: "Critères de recherche pour filtrer les passifs"
 *       required: false
 *       schema:
 *         type: string
 */

router.get('/', passifController.getAllPassifs);

/**
 * @swagger
 * /passifs/champion/{championId}:
 *   get:
 *     summary: "Récupérer le passif d’un champion spécifique"
 *     description: "Cette route permet de récupérer le passif d'un champion spécifique en fonction de son ID."
 *     parameters:
 *       - in: path
 *         name: championId
 *         description: "ID du champion"
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: "Le passif trouvé"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 description:
 *                   type: string
 *       404:
 *         description: "Passif non trouvé"
 *       500:
 *         description: "Erreur serveur interne"
 */

router.get('/champion/:championId', passifController.getPassifByChampionId);

module.exports = router;
