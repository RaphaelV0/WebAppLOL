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
      collection: 'passifs', // Correction du nom du modèle
      via: 'champion'
    },
    skins: {
      collection: 'skins', // Correction du nom du modèle
      via: 'champion'
    },
    statistiques: {
      model: 'statistiques', // Correction du nom du modèle
    },
    sorts: {
      collection: 'sorts', // Correction du nom du modèle
      via: 'champion'
    },
  },

  // Options de migration (développement uniquement)
  datastore: 'default',
  migrate: 'alter' // Modifie la table automatiquement en dev
};
