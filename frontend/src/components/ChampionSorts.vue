<template>
  <div class="champion-sorts">
    <h2>Sorts</h2>
    <div class="sorts-container">
      <div v-for="sort in sorts" :key="sort.id" class="sort-item">
        <div class="sort-container" @mouseover="showDetails(sort.id)" @mouseleave="hideDetails">
          <div class="sort-header">
            <img :src="sort.image" :alt="sort.nom" class="sort-image" />
          </div>
          <h3 class="sort-name">{{ sort.touche }}  {{ sort.nom }} </h3>
          <div v-if="hoveredSortId === sort.id" class="sort-details">
            <p>
              <strong>Coût :</strong>
              <span v-if="sort.ressource">{{ sort.ressource }}</span>
              <span v-else>N/A</span>
            </p>
            <p>
              <strong>Type de coût :</strong>
              <span v-if="sort.type_cout">{{ sort.type_cout }}</span>
              <span v-else>N/A</span>
            </p>
            <p class="sort-tooltip"><strong>Description complète :</strong> {{ sort.tooltip }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sorts: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      hoveredSortId: null,
    };
  },
  methods: {
    showDetails(sortId) {
      this.hoveredSortId = sortId;
    },
    hideDetails() {
      this.hoveredSortId = null;
    },
  },
};
</script>

<style scoped>
.champion-sorts {
  margin-bottom: 20px;
  color: #fff;
}

.champion-sorts h2 {
  font-size: 1.5em;
  margin-bottom: 10px;
  text-align: center;
}

.sorts-container {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  padding-bottom: 10px;
}

.sort-item {
  width: 120px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  padding: 10px;
}

.sort-header {
  margin-bottom: 5px;
}

.sort-image {
  width: 50px;
  height: 50px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.sort-name {
  font-size: 0.9em;
  margin: 5px 0;
}

.sort-details {
  font-size: 0.8em;
  margin-top: 10px;
  text-align: left;
}

.sort-details p {
  margin: 3px 0;
}

.sort-tooltip {
  font-style: italic;
}
</style>
