<template>
  <div class="champion-statistiques">
    <h2>Statistiques</h2>
    <div class="stat-grid">
      <div class="stat-item" v-if="statistiques.pv">
        <span class="stat-label">PV:</span>
        <span class="stat-value">{{ statistiques.pv }}</span>
      </div>
      <div class="stat-item" v-if="statistiques.mana">
        <span class="stat-label">Mana:</span>
        <span class="stat-value">{{ statistiques.mana }}</span>
      </div>
      <div class="stat-item" v-if="statistiques.armure">
        <span class="stat-label">Armure:</span>
        <span class="stat-value">{{ statistiques.armure }}</span>
      </div>
      <div class="stat-item" v-if="statistiques.resistance_magique">
        <span class="stat-label">Résistance magique:</span>
        <span class="stat-value">{{ statistiques.resistance_magique }}</span>
      </div>
      <div class="stat-item" v-if="statistiques.degats_attaque">
        <span class="stat-label">Dégâts d'attaque:</span>
        <span class="stat-value">{{ statistiques.degats_attaque }}</span>
      </div>
      <div class="stat-item" v-if="statistiques.vitesse_attaque">
        <span class="stat-label">Vitesse d'attaque:</span>
        <span class="stat-value">{{ statistiques.vitesse_attaque }}</span>
      </div>
      <div class="stat-item" v-if="statistiques.vitesse_deplacement">
        <span class="stat-label">Vitesse de déplacement:</span>
        <span class="stat-value">{{ statistiques.vitesse_deplacement }}</span>
      </div>
      <div class="stat-item" v-if="statistiques.regen_pv">
        <span class="stat-label">Régénération PV:</span>
        <span class="stat-value">{{ statistiques.regen_pv }}</span>
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

