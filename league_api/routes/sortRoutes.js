const express = require('express');
const router = express.Router();
const sortController = require('../controllers/sortController');

/**
 * @swagger
 * /sorts:
 *   get:
 *     summary: "Récupérer tous les sorts"
 *     description: "Cette route permet de récupérer tous les sorts avec pagination, recherche et tri."
 *     responses:
 *       200:
 *         description: "Une liste de sorts"
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
 *       description: "Critères de recherche pour filtrer les sorts"
 *       required: false
 *       schema:
 *         type: string
 */

router.get('/', sortController.getAllSorts);

/**
 * @swagger
 * /sorts/champion/{championId}:
 *   get:
 *     summary: "Récupérer les sorts d’un champion spécifique"
 *     description: "Cette route permet de récupérer tous les sorts d’un champion spécifique."
 *     parameters:
 *       - in: path
 *         name: championId
 *         description: "ID du champion"
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: "Liste des sorts du champion"
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
 *         description: "Aucun sort trouvé"
 *       500:
 *         description: "Erreur serveur interne"
 */

router.get('/champion/:championId', sortController.getSortsByChampionId);

/**
 * @swagger
 * /sorts/{id}:
 *   get:
 *     summary: "Récupérer un sort par son ID"
 *     description: "Cette route permet de récupérer un sort à partir de son ID."
 *     parameters:
 *       - in: path
 *         name: id
 *         description: "ID du sort"
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: "Le sort trouvé"
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
 *         description: "Sort non trouvé"
 *       500:
 *         description: "Erreur serveur interne"
 */

router.get('/:id', sortController.getSortById);

module.exports = router;
