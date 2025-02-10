/**
 * Passif.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    champion: { model: 'Champion', required: true },
    nom: { type: 'string', required: true },
    description: { type: 'string' },
    image: { type: 'string' }
  }
};
