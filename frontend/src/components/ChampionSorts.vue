<template>
  <div class="champion-sorts">
    <h2>Sorts</h2>
    <ul class="sort-list">
      <li v-for="sort in sorts" :key="sort.id" class="sort-item">
        <div class="sort-header">
          <img :src="sort.image" :alt="sort.nom" class="sort-image" />
          <div class="sort-title">
            <h3>{{ sort.nom }}</h3>
            <span>{{ sort.touche }}</span>
          </div>
        </div>
        <p class="sort-description">{{ sort.description }}</p>
        <div class="sort-details">
          <p>
            <strong>Coût :</strong> {{ sort.ressource }}
          </p>
          <p>
            <strong>Type de coût :</strong> {{ sort.type_cout }}
          </p>
          <p>
            <strong>Description complète :</strong> {{ sort.tooltip }}
          </p>
        </div>
      </li>
    </ul>
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
};
</script>
