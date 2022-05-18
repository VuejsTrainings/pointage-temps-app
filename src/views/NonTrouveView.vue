<template>
  <h1>Page inexistante</h1>
  <p>Il semblerait que vous ayez demandé une ressource qui n'existe pas!</p>
  <router-link :to="{ name: 'home' }">Retour à l'accueil</router-link>
</template>

<script>
export default {
  name: "NonTrouveView",
};
</script>

<style></style>
