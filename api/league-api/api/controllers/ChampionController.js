module.exports = {
    // 📌 Récupérer tous les champions avec filtre par rôle
    async getAll(req, res) {
      try {
        const role = req.query.role;
        const filter = role ? { roles: { contains: role } } : {};
        const champions = await Champion.find(filter).populateAll();
        return res.json(champions);
      } catch (error) {
        console.error("Erreur lors de la récupération des champions:", error);
        return res.status(500).json({ error: "Erreur serveur lors de la récupération des champions." });
      }
    },
  
    // 📌 Rechercher un champion par nom
    async searchByName(req, res) {
      try {
        const { name } = req.query;
        if (!name) return res.status(400).json({ error: "Nom du champion requis." });
        const champions = await Champion.find({ nom: { contains: name } }).populateAll();
        if (!champions || champions.length === 0) {
          return res.status(404).json({ error: "Aucun champion trouvé avec ce nom." });
        }
        return res.json(champions);
      } catch (error) {
        console.error("Erreur lors de la recherche de champion:", error);
        return res.status(500).json({ error: "Erreur serveur lors de la recherche du champion." });
      }
    },
  
    // 📌 Obtenir les détails d’un champion
    async getChampion(req, res) {
      try {
        const { id } = req.params;
        const champion = await Champion.findOne({ id }).populateAll();  // Récupérer toutes les relations
        if (!champion) return res.status(404).json({ error: "Champion introuvable." });
        return res.json(champion);
      } catch (error) {
        console.error("Erreur lors de la récupération des détails du champion:", error);
        return res.status(500).json({ error: "Erreur serveur lors de la récupération des détails." });
      }
    }
  };
  