<template>
    <div class="champion-passif">
      <h2>Passif</h2>
      <div class="passif-content">
        <img :src="passif.image" :alt="passif.nom" class="passif-image" />
        <div class="passif-info">
          <h3>{{ passif.nom }}</h3>
          <p>{{ passif.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  defineProps({
    passif: {
      type: Object,
      required: true
    }
  });
  </script>
  
  <style scoped>
  .champion-passif {
    color: #fff;
    margin-bottom: 20px;
  }
  
  .champion-passif h2 {
    font-size: 1.5em;
    margin-bottom: 10px;
  }
  
  .passif-content {
    display: flex;
    align-items: center;
  }
  
  .passif-image {
    max-width: 100px;
    border-radius: 10px;
    margin-right: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  }
  
  .passif-info h3 {
    font-size: 1.2em;
    margin-bottom: 5px;
  }
  
  .passif-info p {
    font-size: 1em;
    color: #ddd;
  }
  </style>
  