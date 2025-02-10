/**
 * Sorts_Stats.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
module.exports = {
  attributes: {
    sort: { model: 'sorts', required: true },
    niveau: { type: 'number', required: true },
    temps_rechargement: { type: 'number' },
    cout: { type: 'number' },
    portee: { type: 'number' }
  }
};