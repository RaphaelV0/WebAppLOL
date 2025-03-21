<template>
    <div class="skin-carousel">
      <button @click="prevSkin" :disabled="currentIndex === 0">
        &lt;
      </button>
      <div class="skin-item">
        <img :src="currentSkin.image" :alt="currentSkin.nom" />
        <p>{{ currentSkin.nom }}</p>
      </div>
      <button @click="nextSkin" :disabled="currentIndex === skins.length - 1">
        &gt;
      </button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      skins: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
        currentIndex: 0,
      };
    },
    computed: {
      currentSkin() {
        return this.skins[this.currentIndex];
      },
    },
    methods: {
      nextSkin() {
        if (this.currentIndex < this.skins.length - 1) {
          this.currentIndex++;
        }
      },
      prevSkin() {
        if (this.currentIndex > 0) {
          this.currentIndex--;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .skin-carousel {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 600px; 
    margin: 0 auto;
  }
  
  .skin-item {
    text-align: center;
  }
  
  .skin-item img {
    max-width: 200px; 
    max-height: 200px;
    object-fit: contain;
  }
  
  button {
    background-color: transparent;
    border: none;
    font-size: 20px;
    cursor: pointer;
  }
  </style>
  