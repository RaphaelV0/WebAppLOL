module.exports = {
  attributes: {
    sort: { model: 'sorts', required: true }, // Correction de sort_id
    niveau: { type: 'number', required: true },
    temps_rechargement: { type: 'number' },
    cout: { type: 'number' },
    portee: { type: 'number' }
  },

  datastore: 'default',
  migrate: 'alter'
};
