module.exports = {
    // 📌 Récupérer les statistiques d’un champion selon son niveau
    async getChampionStatsByLevel(req, res) {
      try {
        const { id, level } = req.params;
        const niveau = parseInt(level);
  
        // Vérification que le niveau est valide (entre 1 et 18)
        if (isNaN(niveau) || niveau < 1 || niveau > 18) {
          return res.status(400).json({ error: "Le niveau doit être un entier entre 1 et 18." });
        }
  
        // Recherche des statistiques de base du champion
        const stats = await Statistique.findOne({ champion_id: id });
  
        if (!stats) {
          return res.status(404).json({ error: "Statistiques introuvables pour ce champion." });
        }
  
        // Calcul dynamique des statistiques selon le niveau
        const statsDynamique = {
          pv: stats.pv + stats.pv_par_niveau * (niveau - 1),
          mana: stats.mana + stats.mana_par_niveau * (niveau - 1),
          armure: stats.armure + stats.armure_par_niveau * (niveau - 1),
          resistance_magique: stats.resistance_magique + stats.resistance_magique_par_niveau * (niveau - 1),
          degats_attaque: stats.degats_attaque + stats.degats_attaque_par_niveau * (niveau - 1),
          vitesse_attaque: stats.vitesse_attaque + stats.vitesse_attaque_par_niveau * (niveau - 1),
        };
  
        return res.json(statsDynamique);
      } catch (error) {
        console.error("Erreur lors de la récupération des statistiques du champion:", error);
        return res.status(500).json({ error: "Erreur serveur lors de la récupération des statistiques." });
      }
    }
  };
  