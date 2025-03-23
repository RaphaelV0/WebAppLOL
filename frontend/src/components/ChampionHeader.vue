<template>
    <div class="champion-header">
      <h1>{{ champion.nom }}</h1>
      <p class="role">{{ champion.roles }}</p>
      <p class="description">{{ champion.description }}</p>
      <p class="titre">{{ champion.titre }}</p>
      <p class="histoire">{{ champion.histoire }}</p>
      <p class="type-ressource">{{ champion.type_ressource }}</p>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  defineProps({
    champion: {
      type: Object,
      required: true
    }
  });
  </script>
  
  <style scoped>
  .champion-header {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .champion-header h1 {
    font-size: 2.5em;
    margin-bottom: 5px;
  }
  
  .champion-header p.role {
    font-size: 1.2em;
    color: #ddd;
  }
  </style>
  