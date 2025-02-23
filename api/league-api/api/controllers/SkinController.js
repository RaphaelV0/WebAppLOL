module.exports = {
    // 📌 Récupérer tous les skins d’un champion
    async getChampionSkins(req, res) {
      try {
        const { id } = req.params;
        const skins = await Skin.find({ champion_id: id });
        if (!skins) return res.status(404).json({ error: "Aucun skin trouvé pour ce champion." });
        return res.json(skins);
      } catch (error) {
        console.error("Erreur lors de la récupération des skins:", error);
        return res.status(500).json({ error: "Erreur serveur lors de la récupération des skins." });
      }
    },
  
    // 📌 Récupérer un skin spécifique
    async getSkinById(req, res) {
      try {
        const { id } = req.params;
        const skin = await Skin.findOne({ id });
        if (!skin) return res.status(404).json({ error: "Skin introuvable." });
        return res.json(skin);
      } catch (error) {
        console.error("Erreur lors de la récupération du skin:", error);
        return res.status(500).json({ error: "Erreur serveur lors de la récupération du skin." });
      }
    }
  };
  