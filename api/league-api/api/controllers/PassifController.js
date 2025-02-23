module.exports = {
    // 📌 Récupérer tous les passifs d’un champion
    async getChampionPassifs(req, res) {
      try {
        const { id } = req.params;
        const passifs = await Passif.find({ champion_id: id });
        if (!passifs) return res.status(404).json({ error: "Aucun passif trouvé pour ce champion." });
        return res.json(passifs);
      } catch (error) {
        console.error("Erreur lors de la récupération des passifs:", error);
        return res.status(500).json({ error: "Erreur serveur lors de la récupération des passifs." });
      }
    },
  
    // 📌 Récupérer un passif spécifique
    async getPassifById(req, res) {
      try {
        const { id } = req.params;
        const passif = await Passif.findOne({ id });
        if (!passif) return res.status(404).json({ error: "Passif introuvable." });
        return res.json(passif);
      } catch (error) {
        console.error("Erreur lors de la récupération du passif:", error);
        return res.status(500).json({ error: "Erreur serveur lors de la récupération du passif." });
      }
    }
  };
  