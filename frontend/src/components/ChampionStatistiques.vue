<template>
  <div class="champion-statistiques">
    <h2>Statistiques</h2>
    <div class="stat-grid">
      <div class="stat-row" v-if="statistiques.pv">
        <span class="stat-label">PV:</span>
        <span class="stat-value">
          {{ statistiques.pv }}
          <span v-if="statistiques.pv_par_niveau">
            (+{{ statistiques.pv_par_niveau }}/niveau)
          </span>
        </span>
      </div>
      <div class="stat-row" v-if="statistiques.mana">
        <span class="stat-label">Mana:</span>
        <span class="stat-value">
          {{ statistiques.mana }}
          <span v-if="statistiques.mana_par_niveau">
            (+{{ statistiques.mana_par_niveau }}/niveau)
          </span>
        </span>
      </div>
      <div class="stat-row" v-if="statistiques.vitesse_deplacement">
        <span class="stat-label">Vitesse de déplacement:</span>
        <span class="stat-value">{{ statistiques.vitesse_deplacement }}</span>
      </div>
      <div class="stat-row" v-if="statistiques.armure">
        <span class="stat-label">Armure:</span>
        <span class="stat-value">
          {{ statistiques.armure }}
          <span v-if="statistiques.armure_par_niveau">
            (+{{ statistiques.armure_par_niveau }}/niveau)
          </span>
        </span>
      </div>
      <div class="stat-row" v-if="statistiques.resistance_magique">
        <span class="stat-label">Résistance magique:</span>
        <span class="stat-value">
          {{ statistiques.resistance_magique }}
          <span v-if="statistiques.resistance_magique_par_niveau">
            (+{{ statistiques.resistance_magique_par_niveau }}/niveau)
          </span>
        </span>
      </div>
      <div class="stat-row" v-if="statistiques.portee_attaque">
        <span class="stat-label">Portée d'attaque:</span>
        <span class="stat-value">{{ statistiques.portee_attaque }}</span>
      </div>
      <div class="stat-row" v-if="statistiques.regen_pv">
        <span class="stat-label">Régénération PV:</span>
        <span class="stat-value">
          {{ statistiques.regen_pv }}
          <span v-if="statistiques.regen_pv_par_niveau">
            (+{{ statistiques.regen_pv_par_niveau }}/niveau)
          </span>
        </span>
      </div>
      <div class="stat-row" v-if="statistiques.degats_attaque">
        <span class="stat-label">Dégâts d'attaque:</span>
        <span class="stat-value">
          {{ statistiques.degats_attaque }}
          <span v-if="statistiques.degats_attaque_par_niveau">
            (+{{ statistiques.degats_attaque_par_niveau }}/niveau)
          </span>
        </span>
      </div>
      <div class="stat-row" v-if="statistiques.vitesse_attaque">
        <span class="stat-label">Vitesse d'attaque:</span>
        <span class="stat-value">
          {{ statistiques.vitesse_attaque }}
          <span v-if="statistiques.vitesse_attaque_par_niveau">
            (+{{ statistiques.vitesse_attaque_par_niveau }}/niveau)
          </span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    statistiques: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.champion-statistiques {
  color: #fff;
  margin-bottom: 20px;
}

.champion-statistiques h2 {
  font-size: 1.2em; 
  margin-bottom: 10px;
  text-align: center;
}

.stat-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 5px; 
}

.stat-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3px;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.2);
  font-size: 0.8em; 
}

.stat-label {
  font-weight: bold;
  margin-right: 5px;
}

.stat-value {
  text-align: right;
  flex: 1;
}
</style>
