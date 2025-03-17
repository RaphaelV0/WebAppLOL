<template>
  <div>
    <!-- Champ de recherche avec un événement keyup.enter -->
    <input
      v-model="query"
      @input="onInput"
      placeholder="Rechercher un champion"
      @keyup.enter="searchChampions"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: "",
    };
  },
  methods: {
    onInput() {
      // Quand l'utilisateur tape, on émet la recherche
      this.$emit("search", this.query);
    },
    searchChampions() {
      // Quand l'utilisateur appuie sur Enter, on émet la recherche
      this.$emit("search", this.query);
    },
  },
};
</script>

<style scoped>
input {
  padding: 10px;
  width: 200px;
  border-radius: 5px;
}
</style>
