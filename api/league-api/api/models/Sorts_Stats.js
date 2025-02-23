module.exports = {
  attributes: {
    sort_id: { model: 'sort', required: true },
    niveau: { type: 'number', required: true },
    temps_rechargement: { type: 'number' },
    cout: { type: 'number' },
    portee: { type: 'number' },

    // Relation
    sort: {
      model: 'sort',
      via: 'stats'
    },
  },
  // Options de migration
  datastore: 'default',
  migrate: 'alter'  // Modifie la table si nécessaire
};
