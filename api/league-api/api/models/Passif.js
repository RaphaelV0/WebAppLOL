module.exports = {
  attributes: {
    champion_id: { model: 'champion', required: true },
    nom: { type: 'string', required: true },
    description: { type: 'string' },
    image: { type: 'string' },

    // Relation
    champion: {
      model: 'champion',
      via: 'passifs'
    }
  },
  datastore: 'default',
  migrate: 'alter'  // Modifie la table si nécessaire
};
