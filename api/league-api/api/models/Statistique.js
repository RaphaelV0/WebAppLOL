module.exports = {
  attributes: {
    champion_id: { model: 'champion', required: true },
    pv: { type: 'number' },
    pv_par_niveau: { type: 'number' },
    mana: { type: 'number' },
    mana_par_niveau: { type: 'number' },
    vitesse_deplacement: { type: 'number' },
    armure: { type: 'number' },
    armure_par_niveau: { type: 'number' },
    resistance_magique: { type: 'number' },
    resistance_magique_par_niveau: { type: 'number' },
    degats_attaque: { type: 'number' },
    degats_attaque_par_niveau: { type: 'number' },
    vitesse_attaque: { type: 'number' },
    vitesse_attaque_par_niveau: { type: 'number' },

    // Relation
    champion: {
      model: 'champion',
      via: 'statistiques'
    }
  },

  // Options pour la migration
  datastore: 'default',
  migrate: 'alter'  // Modifie la table si nécessaire
};
