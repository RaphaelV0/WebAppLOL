module.exports = {
  attributes: {
    champion_id: { model: 'champion', required: true },
    touche: { type: 'string', required: true },
    nom: { type: 'string', required: true },
    description: { type: 'string' },
    type_cout: { type: 'string' },
    ressource: { type: 'string' },

    // Relation
    stats: {
      collection: 'sortstat',
      via: 'sort_id'
    }
  
  },
  // Options de migration pour développement
  datastore: 'default',
  migrate: 'alter'  // Modifie la table si nécessaire
};
