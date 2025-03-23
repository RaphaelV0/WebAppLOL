<template>
  <div class="skin-carousel">
    <h2>Skins</h2>
    <div class="carousel-container">
      <button @click="prevSkin" :disabled="skins.length <= 1" class="nav-button">
        <i class="arrow left"></i>
      </button>
      <div class="skin-item">
        <img :src="currentSkin.image" :alt="currentSkin.nom" class="skin-image" />
        <p class="skin-name">{{ currentSkin.nom }}</p>
      </div>
      <button @click="nextSkin" :disabled="skins.length <= 1" class="nav-button">
        <i class="arrow right"></i>
      </button>
    </div>
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
      this.currentIndex = (this.currentIndex + 1) % this.skins.length;
    },
    prevSkin() {
      this.currentIndex = (this.currentIndex - 1 + this.skins.length) % this.skins.length;
    },
  },
};
</script>

<style scoped>
.skin-carousel {
  color: #fff;
  margin-bottom: 20px;
}

.skin-carousel h2 {
  font-size: 1.5em;
  margin-bottom: 10px;
  text-align: center;
}

.carousel-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
}

.skin-item {
  text-align: center;
}

.skin-image {
  max-width: 200px;
  max-height: 200px;
  object-fit: contain;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease; /* Animation de transition */
}

.skin-image:hover {
  transform: scale(1.1); /* Zoom au survol */
}

.skin-name {
  margin-top: 10px;
  font-size: 1em;
}

.nav-button {
  background-color: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #fff;
  padding: 10px;
}

.nav-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.arrow {
  border: solid white;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
}

.right {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}

.left {
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
}
</style>
