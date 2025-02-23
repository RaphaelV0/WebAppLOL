module.exports.routes = {
  // 📌 Récupérer tous les champions
  'GET /champions': 'ChampionController.getAll',

  // 📌 Rechercher un champion par nom
  'GET /champions/search': 'ChampionController.searchByName',

  // 📌 Détails complets d’un champion
  'GET /champions/:id': 'ChampionController.getChampion',

  // 📌 Passifs
  'GET /champions/:id/passifs': 'PassifController.getChampionPassifs',
  'GET /passifs/:id': 'PassifController.getPassifById',

  // 📌 Skins
  'GET /champions/:id/skins': 'SkinController.getChampionSkins',
  'GET /skins/:id': 'SkinController.getSkinById',
};
