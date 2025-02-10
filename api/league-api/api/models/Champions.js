/**
 * Champion.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    cle: { type: 'number', required: true, unique: true },
    nom: { type: 'string', required: true },
    titre: { type: 'string' },
    histoire: { type: 'string' },
    description: { type: 'string' },
    roles: { type: 'string' },
    type_ressource: { type: 'string' },
    passif: { collection: 'passifs', via: 'champion' },
    skins: { collection: 'skins', via: 'champion' },
    statistiques: { collection: 'statistiques', via: 'champion' },
    sorts: { collection: 'sorts', via: 'champion' },
    astuces: { collection: 'astuces', via: 'champion' },
    relations1: { collection: 'relations_champions', via: 'champion1' },
    relations2: { collection: 'relations_champions', via: 'champion2' }
  }
};