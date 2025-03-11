<template>
    <div class="search-bar">
      <input
        v-model="modelValue"
        placeholder="Rechercher un champion..."
        @keyup.enter="$emit('search')"
      />
    </div>
  </template>
  
  <script>
  export default {
    props: ["modelValue"],
    emits: ["update:modelValue", "search"],
  };
  </script>
  
  <style scoped>
  .search-bar {
    margin-bottom: 20px;
  }
  .search-bar input {
    padding: 10px;
    width: 100%;
    max-width: 400px;
    border: 2px solid #007bff;
    border-radius: 5px;
    font-size: 16px;
    outline: none;
  }
  
  .search-bar input:focus {
    border-color: #0056b3;
  }
  </style>
  