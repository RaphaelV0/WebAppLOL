/**
 * Astuces.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    champion: { model: 'champions', required: true },
    type: { type: 'string', isIn: ['attaque', 'defense'], required: true },
    astuce: { type: 'string', required: true }
  }
};
