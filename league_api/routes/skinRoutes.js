const express = require('express');
const router = express.Router();
const skinController = require('../controllers/skinController');

/**
 * @swagger
 * /skins:
 *   get:
 *     summary: "Récupérer tous les skins"
 *     description: "Cette route permet de récupérer tous les skins avec pagination, recherche et tri."
 *     responses:
 *       200:
 *         description: "Une liste de skins"
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
 *                   championId:
 *                     type: integer
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
 *       description: "Critères de recherche pour filtrer les skins"
 *       required: false
 *       schema:
 *         type: string
 */

router.get('/', skinController.getAllSkins);

/**
 * @swagger
 * /skins/champion/{championId}:
 *   get:
 *     summary: "Récupérer les skins d’un champion spécifique"
 *     description: "Cette route permet de récupérer tous les skins d’un champion spécifique."
 *     parameters:
 *       - in: path
 *         name: championId
 *         description: "ID du champion"
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: "Liste de skins du champion"
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
 *       404:
 *         description: "Aucun skin trouvé"
 *       500:
 *         description: "Erreur serveur interne"
 */

router.get('/champion/:championId', skinController.getSkinsByChampionId);

/**
 * @swagger
 * /skins/{id}:
 *   get:
 *     summary: "Récupérer un skin par son ID"
 *     description: "Cette route permet de récupérer un skin à partir de son ID."
 *     parameters:
 *       - in: path
 *         name: id
 *         description: "ID du skin"
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: "Le skin trouvé"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 championId:
 *                   type: integer
 *       404:
 *         description: "Skin non trouvé"
 *       500:
 *         description: "Erreur serveur interne"
 */

router.get('/:id', skinController.getSkinById);

module.exports = router;
