/**
 * Skin.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    champion: { model: 'champions', required: true },
    skin_id: { type: 'number', required: true, unique: true },
    nom: { type: 'string', required: true },
    chromas: { type: 'boolean', defaultsTo: false },
    image: { type: 'string' }
  }
};
