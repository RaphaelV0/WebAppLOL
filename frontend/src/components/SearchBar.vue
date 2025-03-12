<template>
  <div>
    <input
      type="text"
      v-model="searchTerm"
      @input="onSearch"
      placeholder="Rechercher un champion"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: '',
    };
  },
  methods: {
    onSearch() {
      this.$emit('search', this.searchTerm);
    },
  },
};
</script>
