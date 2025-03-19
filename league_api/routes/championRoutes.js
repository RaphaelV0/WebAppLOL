const express = require('express');
const router = express.Router();
const championController = require('../controllers/championController');

/**
 * @swagger
 * /champions:
 *   get:
 *     summary: "Récupérer tous les champions"
 *     description: "Cette route permet de récupérer tous les champions avec pagination, filtrage, recherche et tri."
 *     responses:
 *       200:
 *         description: "Une liste de champions"
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
 *                   role:
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
 *       description: "Critères de recherche pour filtrer les champions"
 *       required: false
 *       schema:
 *         type: string
 */

router.get('/', championController.getAllChampions);

/**
 * @swagger
 * /champions/search:
 *   get:
 *     summary: "Rechercher des champions par nom"
 *     description: "Cette route permet de rechercher des champions par leur nom."
 *     parameters:
 *       - in: query
 *         name: nom
 *         description: "Nom du champion à rechercher"
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: "Une liste de champions correspondant à la recherche"
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
 *                   role:
 *                     type: string
 *       404:
 *         description: "Aucun champion trouvé"
 *       500:
 *         description: "Erreur serveur interne"
 */
router.get('/search', championController.searchChampions);

/**
 * @swagger
 * /champions/{id}:
 *   get:
 *     summary: "Récupérer un champion par son ID"
 *     description: "Cette route permet de récupérer un champion spécifique en utilisant son ID."
 *     parameters:
 *       - in: path
 *         name: id
 *         description: "ID du champion"
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: "Le champion trouvé"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 role:
 *                   type: string
 *       404:
 *         description: "Champion non trouvé"
 *       500:
 *         description: "Erreur serveur interne"
 */

router.get('/:id', championController.getChampionById);

module.exports = router;
