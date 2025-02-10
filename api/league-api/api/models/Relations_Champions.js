/**
 * RelationChampion.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    champion1: { model: 'champions', required: true },
    champion2: { model: 'champions', required: true },
    type_relation: { type: 'string', required: true }
  }
};