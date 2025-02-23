module.exports = {
  attributes: {
    champion_id: { model: 'champion', required: true },
    skin_id: { type: 'number', required: true, unique: true },
    nom: { type: 'string', required: true },
    chromas: { type: 'boolean', defaultsTo: false },
    image: { type: 'string' },

    // Relation
    champion: {
      model: 'champion',
      via: 'skins'
    }
  },
  // Options pour la migration en mode développement
  datastore: 'default',
  migrate: 'alter'  // Modifie la table si nécessaire
};
