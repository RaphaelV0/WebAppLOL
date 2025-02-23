module.exports = {
  attributes: {
    cle: { type: 'number', required: true, unique: true },
    nom: { type: 'string', required: true },
    titre: { type: 'string' },
    histoire: { type: 'string' },
    description: { type: 'string' },
    roles: { type: 'string' },
    type_ressource: { type: 'string' },

    // Relations
    passifs: {
      collection: 'passif',
      via: 'champion_id',
    },
    skins: {
      collection: 'skin',
      via: 'champion_id',
    },
    statistiques: {
      model: 'statistique',
      via: 'champion_id',
    },
    sorts: {
      collection: 'sort',
      via: 'champion_id',
    },
    astuces: {
      collection: 'astuce',
      via: 'champion_id',
    },
    relations: {
      collection: 'relationchampion',
      via: 'champion1_id',
    }
  },

  // Options de migration (développement uniquement)
  datastore: 'default',
  migrate: 'alter' // Modifie la table automatiquement en dev
};
