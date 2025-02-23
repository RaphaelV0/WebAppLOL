module.exports = {
  attributes: {
    champion: { model: 'champions', required: true }, // Correction de champion_id
    touche: { type: 'string', required: true },
    nom: { type: 'string', required: true },
    description: { type: 'string' },
    type_cout: { type: 'string' },
    ressource: { type: 'string' },

    // Relation avec Sorts_Stats
    stats: {
      collection: 'sorts_stats', // Correction du nom du modèle
      via: 'sort'
    }
  },

  datastore: 'default',
  migrate: 'alter'
};
