module.exports = {
    // 📌 Récupérer tous les sorts d’un champion
    async getChampionSorts(req, res) {
      try {
        const { id } = req.params;
  
        // Récupérer les sorts du champion avec leurs statistiques peuplées
        const sorts = await Sort.find({ champion_id: id }).populate('stats');
        
        if (!sorts || sorts.length === 0) {
          return res.status(404).json({ error: "Aucun sort trouvé pour ce champion." });
        }
  
        return res.json(sorts);
      } catch (error) {
        console.error("Erreur lors de la récupération des sorts du champion:", error);
        return res.status(500).json({ error: "Erreur serveur lors de la récupération des sorts." });
      }
    },
  
    // 📌 Récupérer les statistiques d’un sort selon son niveau
    async getSortStatsByLevel(req, res) {
      try {
        const { id, level } = req.params;
        const niveau = parseInt(level);
  
        // Vérification que le niveau est valide
        if (isNaN(niveau) || niveau < 1 || niveau > 5) {
          return res.status(400).json({ error: "Le niveau du sort doit être un entier entre 1 et 5." });
        }
  
        // Recherche des statistiques du sort en fonction du niveau
        const sortStats = await SortStat.findOne({ sort_id: id, niveau: niveau });
  
        if (!sortStats) {
          return res.status(404).json({ error: "Statistiques du sort introuvables pour ce niveau." });
        }
  
        return res.json(sortStats);
      } catch (error) {
        console.error("Erreur lors de la récupération des statistiques du sort:", error);
        return res.status(500).json({ error: "Erreur serveur lors de la récupération des statistiques du sort." });
      }
    }
  };
  