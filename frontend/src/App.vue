<template>
  <div id="app">
    <h1>Bienvenue sur l'App League</h1>
    <nav>
      <router-link to="/home">Accueil</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  text-align: center;
}
nav a {
  margin: 10px;
  text-decoration: none;
  color: blue;
}
</style>
