/**
 * Sort.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    champion: { model: 'champions', required: true },
    touche: { type: 'string', required: true },
    nom: { type: 'string', required: true },
    description: { type: 'string' },
    tooltip: { type: 'string' },
    type_cout: { type: 'string' },
    ressource: { type: 'string' },
    image: { type: 'string' },
    stats: { collection: 'sorts_stats', via: 'sort' },
    tags: { collection: 'tags_sorts', via: 'sort' }
  }
};