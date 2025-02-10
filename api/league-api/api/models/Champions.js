/**
 * Champions.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    cle: { type: 'number', unique: true, required: true },
    nom: { type: 'string', required: true },
    titre: { type: 'string' },
    histoire: { type: 'string' },
    description: { type: 'string' },
    roles: { type: 'string' },
    type_ressource: { type: 'string' },

    // Relations
    passif: { collection: 'Passif', via: 'champion' },
    skins: { collection: 'Skin', via: 'champion' },
    statistiques: { model: 'Statistique' },
    sorts: { collection: 'Sort', via: 'champion' },
    astuces: { collection: 'Astuce', via: 'champion' },
    relations1: { collection: 'RelationChampion', via: 'champion1' },
    relations2: { collection: 'RelationChampion', via: 'champion2' }
  }
};
