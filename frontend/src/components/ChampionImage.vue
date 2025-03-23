<template>
    <div class="champion-image">
      <img :src="defaultSkinImage" alt="Champion Image" />
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  defineProps({
    defaultSkinImage: {
      type: String,
      required: true
    }
  });
  </script>
  
  <style scoped>
  .champion-image {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .champion-image img {
    max-width: 300px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  }
  </style>
  