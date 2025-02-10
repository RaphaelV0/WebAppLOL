/**
 * Statistiques.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    champion: { model: 'champions', required: true },
    pv: { type: 'number' },
    pv_par_niveau: { type: 'number' },
    mana: { type: 'number' },
    mana_par_niveau: { type: 'number' },
    vitesse_deplacement: { type: 'number' },
    armure: { type: 'number' },
    armure_par_niveau: { type: 'number' },
    resistance_magique: { type: 'number' },
    resistance_magique_par_niveau: { type: 'number' },
    portee_attaque: { type: 'number' },
    regen_pv: { type: 'number' },
    regen_pv_par_niveau: { type: 'number' },
    degats_attaque: { type: 'number' },
    degats_attaque_par_niveau: { type: 'number' },
    vitesse_attaque: { type: 'number' },
    vitesse_attaque_par_niveau: { type: 'number' }
  }
};
