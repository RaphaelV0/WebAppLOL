<template>
  <li class="champion-card" @click="handleClick">
    <img :src="champion.image" :alt="champion.nom" />
    <span>{{ champion.nom }}</span>
  </li>
</template>

<script>
export default {
  props: {
    champion: Object,
  },
  methods: {
    handleClick() {
      // Émettre l'ID du champion lors du clic
      this.$emit("click", this.champion.id);
    },
  },
};
</script>

<style scoped>
.champion-card {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px;
  background: white;
  border-radius: 8px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
  cursor: pointer;
}

.champion-card:hover {
  background: #e0e0e0;
}

.champion-card img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>
