module.exports = {
  attributes: {
    champion: { model: 'champions', required: true },
    nom: { type: 'string', required: true },
    description: { type: 'string' },
    image: { type: 'string' }
  },

  datastore: 'default',
  migrate: 'alter'
};
