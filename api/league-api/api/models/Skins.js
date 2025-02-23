module.exports = {
  attributes: {
    champion: { model: 'champions', required: true }, // Correction de champion_id
    skin_id: { type: 'number', required: true, unique: true },
    nom: { type: 'string', required: true },
    chromas: { type: 'boolean', defaultsTo: false },
    image: { type: 'string' }
  },

  datastore: 'default',
  migrate: 'alter'
};
