/**
 * Tags_Sorts.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
module.exports = {
  attributes: {
    sort: { model: 'sorts', required: true },
    tag: { model: 'tags', required: true }
  }
};